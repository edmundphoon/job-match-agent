import os
import re
from typing import AsyncGenerator
from google.adk.models import BaseLlm, LLMRegistry
from google.adk.models.llm_response import LlmResponse
from google.adk.models.llm_request import LlmRequest
from google.genai import types

class MockGeminiLlm(BaseLlm):
    """
    A Mock Gemini LLM subclass to intercept generate_content_async.
    Enables executing and testing the graph workflow and tools without live API keys
    or in restricted corporate proxy environments.
    """
    model: str

    @classmethod
    def supported_models(cls) -> list[str]:
        # Intercept any gemini or mock models
        return [r"^mock-.*", r"^gemini-.*"]

    async def generate_content_async(
        self, llm_request: LlmRequest, stream: bool = False
    ) -> AsyncGenerator[LlmResponse, None]:
        # Extract system instruction
        system_instruction = ""
        if llm_request.config and llm_request.config.system_instruction:
            sys_inst = llm_request.config.system_instruction
            if isinstance(sys_inst, str):
                system_instruction = sys_inst
            elif hasattr(sys_inst, "parts") and sys_inst.parts:
                system_instruction = sys_inst.parts[0].text or ""

        # Extract last user text prompt and check for tool responses
        user_text = ""
        is_tool_response = False
        tool_results = []

        last_content = llm_request.contents[-1] if llm_request.contents else None
        if last_content and last_content.parts:
            for part in last_content.parts:
                if part.function_response:
                    is_tool_response = True
                    tool_results.append(part.function_response)

        # Get user query from history (joining all text parts to avoid "For context:" truncation)
        for content in reversed(llm_request.contents):
            if content.role == "user" and content.parts:
                text_parts = [p.text for p in content.parts if p.text]
                if text_parts:
                    user_text = " ".join(text_parts)
                    break

        # Check if the running agent is the Router
        is_router = "Router" in system_instruction or "router" in system_instruction

        if is_router:
            # --- ROUTER AGENT MOCK LOGIC ---
            # Check if the analyst has already responded (we looped back)
            has_analyst_responded = False
            analyst_response_text = ""
            
            # Look for analyst response in history (checking all roles since subagent messages may be wrapped as user/context)
            for content in reversed(llm_request.contents):
                if content.parts:
                    for part in content.parts:
                        if part.text and any(w in part.text for w in ["Labor Analyst:", "Chart saved to:", "calculated metrics:"]):
                            has_analyst_responded = True
                            analyst_response_text = part.text
                            break
                if has_analyst_responded:
                    break

            if has_analyst_responded:
                # Analyst has run, router responds with final chart path and summary
                text_out = (
                    f"Router Node: I have received the processed outputs and visualizations from the Labor Analyst.\n"
                    f"Here is the result of your request:\n\n{analyst_response_text}"
                )
            else:
                prompt_lower = user_text.lower() if user_text else ""
                # If request asks for hiring metrics or sector distributions, route to Analyst
                if any(w in prompt_lower for w in ["chart", "plot", "graph", "hiring", "vacancy", "salary", "distribution", "metric", "sector"]):
                    text_out = "ROUTE_TO_ANALYST"
                else:
                    text_out = (
                        "Hello! Welcome to the Singapore Labor Market Dashboard. "
                        "I am the Router node. I maintain your session state. "
                        "You can ask me for general dashboard info, or ask the Labor Analyst "
                        "for specific hiring metrics or sector distributions to generate charts."
                    )
            
            yield LlmResponse(
                content=types.Content(
                    role="model",
                    parts=[types.Part.from_text(text=text_out)]
                ),
                partial=False
            )

        else:
            # --- LABOR ANALYST AGENT MOCK LOGIC ---
            prompt_lower = user_text.lower() if user_text else ""

            if is_tool_response:
                # Retrieve execution results from the tool
                tool_output_str = ""
                filepath = ""
                for resp in tool_results:
                    if resp.response:
                        tool_output_str += str(resp.response)
                        if "filepath" in resp.response:
                            filepath = resp.response["filepath"]

                if "create_and_save_chart" in [r.name for r in tool_results]:
                    text_out = (
                        f"Labor Analyst: I have successfully analyzed the market stats and generated the requested visualization.\n"
                        f"Image saved at: {filepath or 'public/assets/chart.png'}\n"
                        f"This chart displays the trends/distributions from 'SG_Job_Market_Stats.csv'."
                    )
                else:
                    text_out = (
                        f"Labor Analyst: Based on the Singapore Labor Market stats from the CSV, here are the calculated metrics:\n"
                        f"{tool_output_str}\n"
                        f"Let me know if you would like me to generate a chart for this distribution!"
                    )

                yield LlmResponse(
                    content=types.Content(
                        role="model",
                        parts=[types.Part.from_text(text=text_out)]
                    ),
                    partial=False
                )

            else:
                # Determine tool calls
                if any(w in prompt_lower for w in ["chart", "plot", "graph"]):
                    # User requested chart/plot
                    chart_type = "sector_distribution"
                    if any(w in prompt_lower for w in ["hiring", "vacancy", "rate"]):
                        chart_type = "hiring"
                    
                    yield LlmResponse(
                        content=types.Content(
                            role="model",
                            parts=[
                                types.Part(
                                    function_call=types.FunctionCall(
                                        name="create_and_save_chart",
                                        args={"chart_type": chart_type}
                                    )
                                )
                            ]
                        ),
                        partial=False
                    )
                else:
                    # User requested metrics/stats data
                    sector = None
                    sectors = ["Information & Communications", "Financial Services", "Professional Services", "Manufacturing", "Construction", "Health & Social Services"]
                    for s in sectors:
                        if s.lower() in prompt_lower:
                            sector = s
                            break
                    
                    args = {}
                    if sector:
                        args["sector"] = sector

                    yield LlmResponse(
                        content=types.Content(
                            role="model",
                            parts=[
                                types.Part(
                                    function_call=types.FunctionCall(
                                        name="get_labor_market_data",
                                        args=args
                                    )
                                )
                            ]
                        ),
                        partial=False
                    )

def setup_mock_llm():
    """
    Registers the MockGeminiLlm class under 'gemini-.*' and 'mock-.*' patterns
    and clears the LLMRegistry resolution cache to ensure the mock is resolved correctly.
    """
    if os.environ.get("MOCK_LLM", "TRUE").upper() == "TRUE":
        import google.adk.models.registry as reg
        reg._llm_registry_dict["gemini-.*"] = MockGeminiLlm
        reg._llm_registry_dict["mock-.*"] = MockGeminiLlm
        LLMRegistry.resolve.cache_clear()

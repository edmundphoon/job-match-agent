import os
import sys
import argparse
import asyncio
from google.adk.runners import Runner
from google.adk.sessions import InMemorySessionService
from google.genai import types

from agent_graph import labor_market_graph

# Configure app details
APP_NAME = "sg_labor_market_dashboard"
USER_ID = "student_dev"
SESSION_ID = "capstone_session_001"

# ANSI color codes for premium visual output
COLOR_HEADER = "\033[95m"
COLOR_USER = "\033[94m"
COLOR_AGENT = "\033[92m"
COLOR_STATE = "\033[93m"
COLOR_WARNING = "\033[91m"
COLOR_END = "\033[0m"

def print_banner():
    print(f"{COLOR_HEADER}======================================================================")
    print("      SINGAPORE LABOR MARKET AGENT GRAPH - INTERACTIVE CONSOLE")
    print(f"======================================================================{COLOR_END}")
    print("Type your questions below. Special commands:")
    print(f"  {COLOR_STATE}/state{COLOR_END}  - View current central state manager's session state")
    print(f"  {COLOR_STATE}/clear{COLOR_END}  - Reset session state variables")
    print(f"  {COLOR_STATE}/help{COLOR_END}   - Show this instructions banner")
    print(f"  {COLOR_STATE}/exit{COLOR_END}   - Exit interactive console")
    print("-" * 70)

async def run_query(runner: Runner, session_service: InMemorySessionService, query_text: str):
    # Wrap message in types.Content
    content = types.Content(
        role="user",
        parts=[types.Part.from_text(text=query_text)]
    )
    
    # Run the workflow graph
    events = runner.run_async(
        user_id=USER_ID,
        session_id=SESSION_ID,
        new_message=content
    )
    
    print(f"\n{COLOR_AGENT}AGENT RESPONSE:{COLOR_END}")
    async for event in events:
        if event.content and event.content.parts:
            for part in event.content.parts:
                if part.text:
                    print(part.text, end="", flush=True)
    print()  # Newline after response completes
    
    # Retrieve and print current central state manager's session state
    await print_session_state(session_service)

async def print_session_state(session_service: InMemorySessionService):
    session = await session_service.get_session(
        app_name=APP_NAME,
        user_id=USER_ID,
        session_id=SESSION_ID
    )
    print(f"\n{COLOR_STATE}[CENTRAL STATE MANAGER STATE]:{COLOR_END}")
    if not session or not session.state:
        print("  (Empty)")
    else:
        for k, v in session.state.items():
            print(f"  - {k}: {v}")
    print("-" * 70)

async def clear_session_state(session_service: InMemorySessionService):
    # Clear the session by deleting and recreating it, as InMemorySessionService does not support update_session
    await session_service.delete_session(
        app_name=APP_NAME,
        user_id=USER_ID,
        session_id=SESSION_ID
    )
    await session_service.create_session(
        app_name=APP_NAME,
        user_id=USER_ID,
        session_id=SESSION_ID
    )
    print(f"{COLOR_WARNING}Session state cleared.{COLOR_END}")

async def main():
    # Setup argument parsing
    parser = argparse.ArgumentParser(description="Singapore Labor Market Agent Graph Runner")
    parser.add_argument("--query", type=str, help="Run a one-off query and exit.")
    parser.add_argument("--mock", type=str, default="TRUE", choices=["TRUE", "FALSE"], 
                        help="Enable Mock LLM registry (default: TRUE)")
    parser.add_argument("--clear", action="store_true", help="Clear session state before execution.")
    args = parser.parse_args()

    # Configure environment MOCK_LLM
    os.environ["MOCK_LLM"] = args.mock

    # Initialize the session service
    session_service = InMemorySessionService()
    
    # Initialize the runner with the workflow graph
    runner = Runner(
        node=labor_market_graph,
        app_name=APP_NAME,
        session_service=session_service
    )
    
    # Ensure session is created
    await session_service.create_session(
        app_name=APP_NAME,
        user_id=USER_ID,
        session_id=SESSION_ID
    )

    if args.clear:
        await clear_session_state(session_service)

    # Enable color output on Windows terminals if supported
    if sys.platform == "win32":
        os.system("color")

    if args.query:
        # Run one-off query
        print(f"\n{COLOR_USER}USER (One-off): {args.query}{COLOR_END}")
        await run_query(runner, session_service, args.query)
    else:
        # Interactive REPL mode
        print_banner()
        while True:
            try:
                # Read user input
                query = input(f"\n{COLOR_USER}Dashboard User > {COLOR_END}").strip()
                if not query:
                    continue
                
                # Check for exit or quit commands
                if query.lower() in ["/exit", "exit", "quit", "q"]:
                    print("Goodbye!")
                    break
                
                # Handle special slash commands
                if query == "/help":
                    print_banner()
                    continue
                elif query == "/state":
                    await print_session_state(session_service)
                    continue
                elif query == "/clear":
                    await clear_session_state(session_service)
                    continue
                
                # Execute graph workflow
                await run_query(runner, session_service, query)
                
            except (KeyboardInterrupt, EOFError):
                print("\nGoodbye!")
                break

if __name__ == "__main__":
    asyncio.run(main())

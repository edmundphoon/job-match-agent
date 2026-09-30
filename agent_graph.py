import os
import uuid
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from typing import Dict, Any, Optional

from google.adk import Workflow, Event, Context, Agent  # pyfly: ignore [missing-import]
from google.genai import types  # pyfly: ignore [missing-import]

# Import and execute the Mock LLM Registry hook
from mock_llm import setup_mock_llm
setup_mock_llm()

# ---------------------------------------------------------
# 1. Environment Configurations
# ---------------------------------------------------------
if "GEMINI_API_KEY" in os.environ and "GOOGLE_API_KEY" not in os.environ:
    os.environ["GOOGLE_API_KEY"] = os.environ["GEMINI_API_KEY"]

# ---------------------------------------------------------
# 2. Grounding Tools for Labor Analyst Node
# ---------------------------------------------------------
def get_labor_market_data(sector: Optional[str] = None) -> dict:
    """
    Read and calculate Singapore labor market statistics from 'SG_Job_Market_Stats.csv'.
    
    Args:
        sector: Optional sector name to filter by (e.g. 'Information & Communications', 'Financial Services', etc.).
    """
    csv_path = "SG_Job_Market_Stats_3.csv"
    if not os.path.exists(csv_path):
        return {"status": "error", "message": f"Data file {csv_path} not found."}
    
    df = pd.read_csv(csv_path)
    
    if sector:
        df_filtered = df[df["Sector"].str.lower() == sector.lower()]
        if df_filtered.empty:
            sectors = df["Sector"].unique().tolist()
            return {"status": "error", "message": f"Sector '{sector}' not found. Available sectors: {sectors}"}
        df = df_filtered

    assert isinstance(df, pd.DataFrame)

    # Calculate statistics
    avg_hiring = float(df["Hiring_Rate_Pct"].mean())
    avg_vacancy = float(df["Vacancy_Rate_Pct"].mean())
    avg_salary = float(df["Median_Salary_SGD"].mean())
    total_growth = int(df["Employment_Growth_Count"].sum())
    
    return {
        "status": "success",
        "average_hiring_rate_pct": round(avg_hiring, 2),
        "average_vacancy_rate_pct": round(avg_vacancy, 2),
        "average_median_salary_sgd": round(avg_salary, 2),
        "total_employment_growth_count": total_growth,
        "data_records": df.to_dict(orient="records")
    }

def create_and_save_chart(chart_type: str, context: Context) -> dict:
    """
    Generate and save a Seaborn/Matplotlib chart based on labor market statistics.
    
    Args:
        chart_type: The type of chart to generate. Must be 'hiring' (for hiring/vacancy trends) or 'sector_distribution' (for salary/growth distributions by sector).
    """
    csv_path = "SG_Job_Market_Stats_3.csv"
    if not os.path.exists(csv_path):
        return {"status": "error", "message": f"Data file {csv_path} not found."}
    
    df = pd.read_csv(csv_path)
    
    plt.figure(figsize=(10, 6))
    sns.set_theme(style="whitegrid")
    
    os.makedirs("public/assets", exist_ok=True)
    filename = f"{chart_type}_{uuid.uuid4().hex[:8]}.png"
    filepath = os.path.join("public/assets", filename)
    
    if chart_type == "hiring":
        df_grouped = df.groupby("Quarter")[["Hiring_Rate_Pct", "Vacancy_Rate_Pct"]].mean().reset_index()
        df_melted = df_grouped.melt(id_vars="Quarter", var_name="Metric", value_name="Rate")
        
        sns.lineplot(data=df_melted, x="Quarter", y="Rate", hue="Metric", marker="o", linewidth=2.5)
        plt.title("Singapore Average Hiring vs Vacancy Rate Trends")
        plt.ylabel("Percentage (%)")
        plt.xlabel("Quarter")
        
    elif chart_type == "sector_distribution":
        latest_quarter = df["Quarter"].max()
        df_latest = df[df["Quarter"] == latest_quarter]
        
        sns.barplot(data=df_latest, x="Median_Salary_SGD", y="Sector", hue="Sector", palette="viridis", legend=False)
        plt.title(f"Median Salary Distribution by Sector ({latest_quarter})")
        plt.xlabel("Median Salary (SGD)")
        plt.ylabel("Sector")
        
    else:
        plt.close()
        return {"status": "error", "message": f"Unknown chart_type: {chart_type}. Choose 'hiring' or 'sector_distribution'."}
    
    plt.tight_layout()
    plt.savefig(filepath, dpi=300)
    plt.close()
    
    # Central State Manager: Save pathways to user session state
    context.state["latest_chart"] = filepath
    chart_history = context.state.get("chart_history", [])
    chart_history.append(filepath)
    context.state["chart_history"] = chart_history
    
    return {
        "status": "success",
        "chart_type": chart_type,
        "filepath": filepath,
        "message": f"Successfully generated {chart_type} chart and saved to {filepath}."
    }

# ---------------------------------------------------------
# 3. Agent Definitions
# ---------------------------------------------------------
# Primary Router Agent
router_agent = Agent(
    name="RouterAgent",
    model="gemini-2.5-flash",
    instruction="""You are the main Router for the Singapore Labor Market Dashboard.
    Your job is to manage user sessions, maintain state, and classify queries.
    
    Classification Instructions:
    - If the user wants a chart, plot, graph, or specific hiring metrics or sector distributions, output exactly: ROUTE_TO_ANALYST
    - If the user's message is a greeting, explanation request, or general query, reply directly to help them.
    
    Session State:
    - You maintain the user's session state and coordinate with other agents.
    """
)

# Secondary Specialized Labor Analyst Agent
labor_analyst_agent = Agent(
    name="LaborAnalystAgent",
    model="gemini-2.5-flash",
    instruction="""You are a specialized Labor Analyst node.
    You answer queries regarding hiring metrics, vacancy rates, and sector distributions in Singapore.
    Use 'get_labor_market_data' to fetch raw statistics.
    Use 'create_and_save_chart' to plot Seaborn/Matplotlib visualizations.
    
    When you generate a chart, make sure to explicitly include the image file pathway in your final response.
    """,
    tools=[get_labor_market_data, create_and_save_chart]
)

# ---------------------------------------------------------
# 4. Graph Workflow Routing & Setup
# ---------------------------------------------------------
def process_user_input(node_input: str, context: Context):
    """
    Start node to capture and store the original user query in central state.
    """
    context.state["user_query"] = node_input
    return Event(output=node_input)

def route_decision(node_input: str, context: Context):
    """
    Inspects RouterAgent's output and determines the next node to run.
    Uses central state to forward original user query context to sub-agents.
    """
    cleaned_input = node_input.strip() if isinstance(node_input, str) else ""
    if "ROUTE_TO_ANALYST" in cleaned_input:
        user_query = context.state.get("user_query", "")
        # Forward user query to analyst node
        return Event(route="ANALYST", message=f"Please handle this user query: {user_query}")
    return Event(route="DIRECT_RESPONSE", output=cleaned_input)

def handle_analyst_output(node_input: str, context: Context):
    """
    Function node that runs after the Analyst agent to verify the session state.
    Returns the message containing the file pathways back to the Router agent.
    """
    latest_chart = context.state.get("latest_chart", None)
    output_msg = node_input
    if latest_chart:
        output_msg += f"\n\n[Central State Manager] Chart saved to: {latest_chart}"
    return Event(output=output_msg)

def identity_node(node_input: str, context: Context):
    """
    A simple node that passes direct messages through to completion.
    """
    return Event(output=node_input)

# Build the edges array for the Workflow graph
edges = [
    ("START", process_user_input, router_agent, route_decision),
    (route_decision, {
        "ANALYST": labor_analyst_agent,
        "DIRECT_RESPONSE": identity_node,
    }),
    (labor_analyst_agent, handle_analyst_output),
    (handle_analyst_output, router_agent)
]

# Initialize the workflow graph with its edges
labor_market_graph = Workflow(
    name="SingaporeLaborMarketDashboard",
    edges=edges
)

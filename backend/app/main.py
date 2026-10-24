from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.elexon_service import fetch_january_wind_data
from app.analytics import calculate_forecast_metrics

app = FastAPI(title="UK Wind Energy Forecast API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"status": "Backend running successfully!"}

@app.get("/api/wind-data")
def get_wind_data():
    data = fetch_january_wind_data()
    return {"data": data}

@app.get("/api/metrics")
def get_metrics():
    data = fetch_january_wind_data()
    metrics = calculate_forecast_metrics(data)
    return {"metrics": metrics}
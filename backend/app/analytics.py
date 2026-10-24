import numpy as np

def calculate_forecast_metrics(data):
    """
    Calculates MAE (Mean Absolute Error) and RMSE (Root Mean Square Error).
    """
    if not data:
        return {"mae": 0, "rmse": 0, "avg_actual": 0, "avg_forecast": 0}

    actuals = np.array([item["actual"] for item in data])
    forecasts = np.array([item["forecast"] for item in data])

    mae = np.mean(np.abs(actuals - forecasts))
    rmse = np.sqrt(np.mean((actuals - forecasts) ** 2))

    return {
        "mae": round(float(mae), 2),
        "rmse": round(float(rmse), 2),
        "avg_actual": round(float(np.mean(actuals)), 2),
        "avg_forecast": round(float(np.mean(forecasts)), 2)
    }
# UK Wind Power Day-Ahead Forecast Evaluator

## Overview
A web application built for UK energy utilities to evaluate day-ahead wind power generation forecasts vs actuals from Elexon, quantifying forecast errors to aid procurement decisions.

## File & Directory Structure
- `backend/`: FastAPI Python server handling Elexon API data retrieval, data alignment, MAE/RMSE calculations.
- `frontend/`: React + Tailwind CSS dashboard with interactive Recharts time-series visualization.
- `docker-compose.yml`: Multi-container configuration for running frontend and backend together.

## Live Application
- **Frontend App:** https://yhjk-app.vercel.app/
- **Backend Service:** https://yhjk-app-backend.onrender.com

## AI Tools Disclosure
- AI tools (ChatGPT) were used to scaffold boilerplate structures, optimize Elexon API data transformations, and style UI components.

## How to Run Locally with Docker
```bash
docker-compose up --build
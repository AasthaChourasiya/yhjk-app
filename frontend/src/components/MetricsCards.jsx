import React from 'react';

export default function MetricsCards({ metrics }) {
  if (!metrics) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      <div className="bg-white p-4 rounded-xl shadow border border-gray-100">
        <p className="text-sm font-medium text-gray-500">Mean Absolute Error (MAE)</p>
        <h3 className="text-2xl font-bold text-indigo-600">{metrics.mae} MW</h3>
      </div>
      <div className="bg-white p-4 rounded-xl shadow border border-gray-100">
        <p className="text-sm font-medium text-gray-500">RMSE (Root Mean Sq Error)</p>
        <h3 className="text-2xl font-bold text-rose-600">{metrics.rmse} MW</h3>
      </div>
      <div className="bg-white p-4 rounded-xl shadow border border-gray-100">
        <p className="text-sm font-medium text-gray-500">Avg Actual Wind Power</p>
        <h3 className="text-2xl font-bold text-emerald-600">{metrics.avg_actual} MW</h3>
      </div>
      <div className="bg-white p-4 rounded-xl shadow border border-gray-100">
        <p className="text-sm font-medium text-gray-500">Avg Forecast Wind Power</p>
        <h3 className="text-2xl font-bold text-blue-600">{metrics.avg_forecast} MW</h3>
      </div>
    </div>
  );
}
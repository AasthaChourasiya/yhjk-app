import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid } from 'recharts';

export default function PowerChart({ data }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow border border-gray-100 mb-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Wind Power Generation: Actual vs Forecast (Jan 2026)</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="startTime" />
          <YAxis label={{ value: 'Generation (MW)', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="actual" stroke="#10B981" name="Actual Generation (MW)" strokeWidth={2} />
          <Line type="monotone" dataKey="forecast" stroke="#3B82F6" name="Forecast Generation (MW)" strokeWidth={2} strokeDasharray="5 5" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
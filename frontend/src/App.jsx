import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MetricsCards from './components/MetricsCards';
import PowerChart from './components/PowerChart';

// Dynamic API Base URL (Vercel env variable prioritized, followed by Render live URL, then local fallback)
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://yhjk-app-backend.onrender.com';

export default function App() {
  const [chartData, setChartData] = useState([]);
  const [metrics, setMetrics] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [dataRes, metricsRes] = await Promise.all([
          axios.get(`${API_BASE_URL}/api/wind-data`),
          axios.get(`${API_BASE_URL}/api/metrics`)
        ]);
        setChartData(dataRes.data.data);
        setMetrics(metricsRes.data.metrics);
      } catch (error) {
        console.error("API Fetch Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <header style={{ marginBottom: '2rem', textAlign: 'center' }}>
  <h1 style={{ fontSize: '2rem', fontWeight: '800', color: '#f8fafc', lineHeight: '1.2', marginBottom: '0.5rem' }}>
    UK Energy Day-Ahead Wind Forecast Dashboard
  </h1>
  <p style={{ color: '#94a3b8', fontSize: '1rem' }}>
    Quantified forecast error evaluation for energy procurement decisions
  </p>
</header>

        {loading ? (
          <div className="text-center py-20 text-gray-500 font-medium">Loading Elexon Data...</div>
        ) : (
          <>
            <MetricsCards metrics={metrics} />
            <PowerChart data={chartData} />
          </>
        )}
      </div>
    </div>
  );
}
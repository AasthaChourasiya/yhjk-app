import React from 'react';

export default function MetricsCards({ metrics }) {
  if (!metrics) return null;

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
      <div style={{ backgroundColor: '#1e293b', padding: '1.25rem', borderRadius: '0.75rem', border: '1px solid #334155', textAlign: 'center' }}>
        <p style={{ color: '#94a3b8', fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.5rem' }}>Mean Absolute Error (MAE)</p>
        <h3 style={{ color: '#6366f1', fontSize: '1.5rem', fontWeight: '700' }}>{metrics.mae} MW</h3>
      </div>
      <div style={{ backgroundColor: '#1e293b', padding: '1.25rem', borderRadius: '0.75rem', border: '1px solid #334155', textAlign: 'center' }}>
        <p style={{ color: '#94a3b8', fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.5rem' }}>RMSE (Root Mean Sq Error)</p>
        <h3 style={{ color: '#f43f5e', fontSize: '1.5rem', fontWeight: '700' }}>{metrics.rmse} MW</h3>
      </div>
      <div style={{ backgroundColor: '#1e293b', padding: '1.25rem', borderRadius: '0.75rem', border: '1px solid #334155', textAlign: 'center' }}>
        <p style={{ color: '#94a3b8', fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.5rem' }}>Avg Actual Wind Power</p>
        <h3 style={{ color: '#10b981', fontSize: '1.5rem', fontWeight: '700' }}>{metrics.avg_actual} MW</h3>
      </div>
      <div style={{ backgroundColor: '#1e293b', padding: '1.25rem', borderRadius: '0.75rem', border: '1px solid #334155', textAlign: 'center' }}>
        <p style={{ color: '#94a3b8', fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.5rem' }}>Avg Forecast Wind Power</p>
        <h3 style={{ color: '#3b82f6', fontSize: '1.5rem', fontWeight: '700' }}>{metrics.avg_forecast} MW</h3>
      </div>
    </div>
  );
}
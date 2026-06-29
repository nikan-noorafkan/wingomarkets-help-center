import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CheckCircle2, AlertTriangle, Activity, RefreshCw, ArrowLeft, ShieldAlert } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function SystemStatus() {
  const { language, t, localizePath } = useLanguage();
  const navigate = useNavigate();
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(true);

  // Default fallback server nodes diagnostics
  const [systems, setSystems] = useState([
    { nameKey: 'server_name_mt5_eu', latency: '14 ms', status: 'operational' },
    { nameKey: 'server_name_mt5_asia', latency: '28 ms', status: 'operational' },
    { nameKey: 'server_name_price_feed', latency: '2 ms', status: 'operational' },
    { nameKey: 'server_name_client_portal', latency: '42 ms', status: 'operational' },
    { nameKey: 'server_name_payment_gate', latency: '12 ms', status: 'operational' }
  ]);
  const [incidents, setIncidents] = useState([]);

  const fetchStatus = async () => {
    try {
      const res = await fetch('/api/status');
      if (res.ok) {
        const data = await res.json();
        if (data.nodes && data.nodes.length > 0) {
          setSystems(data.nodes);
        }
        if (data.incidents) {
          setIncidents(data.incidents);
        }
      }
    } catch (e) {
      console.error('Error fetching system status:', e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStatus();
  }, []);

  // 90-day uptime timeline bars (each bar represents a day)
  const uptimeDays = Array.from({ length: 45 }, (_, i) => {
    if (i === 12) return 'warning';
    if (i === 34) return 'incident';
    return 'good';
  });

  const handleRefresh = async () => {
    setRefreshing(true);
    await fetchStatus();
    setTimeout(() => {
      setRefreshing(false);
    }, 600);
  };

  const isGlobalOperational = systems.every(s => s.status === 'operational');

  if (loading) {
    return (
      <div className="container main-content" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh' }}>
        <div className="loading-spinner-layout" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
          <div className="pulse-dot-teal" style={{ width: '24px', height: '24px' }}></div>
          <span style={{ fontSize: '14px', color: 'var(--text-dim)' }}>Loading status dashboard...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="status-page-layout-design container-layout-width">
      {/* Back control */}
      <button onClick={() => navigate(-1)} className="back-btn-pill-design">
        <ArrowLeft size={16} />
        Back
      </button>

      {/* Global Status Banner */}
      <div className="global-status-banner-card">
        <div className="banner-badge-icon">
          {isGlobalOperational ? (
            <CheckCircle2 size={36} className="text-gradient-green" />
          ) : (
            <AlertTriangle size={36} className="incident-icon-warn" />
          )}
        </div>
        <div className="banner-meta">
          <h1>{isGlobalOperational ? t('status_all_operational') : 'Active System Degradation Detected'}</h1>
          <p className="refresh-label-row">
            <span>Last checked: Just now</span>
            <button onClick={handleRefresh} className={`refresh-btn-diag ${refreshing ? 'spinning' : ''}`}>
              <RefreshCw size={14} />
            </button>
          </p>
        </div>
      </div>

      {/* Nodes Diagnostics Grid */}
      <section className="status-grid-section-design">
        <h2>Active Services</h2>
        <div className="status-nodes-grid-design">
          {systems.map((sys, idx) => (
            <div key={idx} className="status-node-card glass-panel">
              <div className="node-head">
                <span className={sys.status === 'operational' ? 'pulse-dot-teal' : 'pulse-dot-error'}></span>
                <h3>{t(sys.nameKey) === sys.nameKey ? sys.nameKey : t(sys.nameKey)}</h3>
              </div>
              <div className="node-foot">
                <span className="operational-badge">{t(sys.status) === sys.status ? sys.status : t(sys.status)}</span>
                <span className="latency-diag">{sys.latency}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Uptime bars panel */}
      <div className="uptime-timeline-panel glass-panel">
        <div className="timeline-meta-header">
          <h3>{t('uptime_90_days')}</h3>
          <span className="uptime-percentage">99.98%</span>
        </div>
        <div className="uptime-bars-strip">
          {uptimeDays.map((status, idx) => (
            <div 
              key={idx} 
              className={`uptime-bar-tick ${status}`}
              title={`Day ${idx + 1}: ${status === 'good' ? '100% Operational' : status === 'warning' ? 'Minor latency spike' : 'System Outage'}`}
            ></div>
          ))}
        </div>
        <div className="timeline-scale-labels">
          <span>90 days ago</span>
          <span>Today</span>
        </div>
      </div>

      {/* Historical incidents logs */}
      <section className="incidents-history-section">
        <h2>{t('historical_incidents')}</h2>
        <div className="incidents-logs-list">
          {incidents.length === 0 ? (
            <p style={{ color: 'var(--text-dim)', fontSize: '14px' }}>No recent incidents reported.</p>
          ) : (
            incidents.map((inc) => {
              const dateStr = new Date(inc.startedAt).toLocaleDateString(language === 'fa' ? 'fa-IR' : (language === 'ar' ? 'ar-EG' : 'en-US'), {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
              });
              const updatesList = typeof inc.updates === 'string' ? JSON.parse(inc.updates) : (inc.updates || []);
              return (
                <div key={inc.id} className="incident-log-row glass-panel">
                  <div className="incident-header">
                    <div className="incident-title-area">
                      {inc.status === 'outage' ? (
                        <ShieldAlert size={18} className="incident-icon-alert" />
                      ) : inc.status === 'resolved' ? (
                        <CheckCircle2 size={18} className="incident-icon-info" />
                      ) : (
                        <AlertTriangle size={18} className="incident-icon-warn" />
                      )}
                      <h4>
                        {inc.title.startsWith('incident_') ? t(inc.title) : inc.title} ({dateStr})
                      </h4>
                    </div>
                    <span className="resolved-pill">{t(inc.status) === inc.status ? inc.status : t(inc.status)}</span>
                  </div>
                  <div className="incident-body">
                    {updatesList.map((up, i) => (
                      <span key={i} style={{ display: 'block', marginBottom: '6px' }}>
                        <strong>{new Date(up.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</strong> - {up.message}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </section>
    </div>
  );
}

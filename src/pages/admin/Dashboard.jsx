import React, { useState, useEffect } from 'react';
import { ShieldAlert, AlertTriangle, CheckCircle2, MessageSquare, AlertCircle, Search, RefreshCw, Clock } from 'lucide-react';

export default function Dashboard({ user }) {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    missingFa: 0,
    missingAr: 0,
    openDisputes: 0,
    oldestDisputeDays: 0,
    zeroSearches: [],
    systemStatus: 'operational',
    recentAudits: []
  });

  const loadDashboardData = async () => {
    try {
      // Fetch articles
      const artRes = await fetch('/api/articles');
      const articles = await artRes.json();
      
      // Fetch disputes
      const dispRes = await fetch('/api/disputes');
      const disputes = await dispRes.json();

      // Fetch search logs
      const logsRes = await fetch('/api/search-logs');
      const logs = await logsRes.json();

      // Fetch system status
      const statusRes = await fetch('/api/status');
      const statusData = await statusRes.json();

      // Fetch audit logs
      const auditsRes = await fetch('/api/audit-logs');
      const audits = await auditsRes.json();

      // Calculate translation completeness
      let missingFa = 0;
      let missingAr = 0;
      articles.forEach(art => {
        const hasFa = art.translations.some(t => t.locale === 'fa' && t.translationStatus === 'published');
        const hasAr = art.translations.some(t => t.locale === 'ar' && t.translationStatus === 'published');
        if (!hasFa) missingFa++;
        if (!hasAr) missingAr++;
      });

      // Calculate dispute metrics
      const openTickets = disputes.filter(d => d.stage !== 'outcome_shared');
      let oldestDays = 0;
      if (openTickets.length > 0) {
        const oldestDate = new Date(Math.min(...openTickets.map(t => new Date(t.submittedAt).getTime())));
        oldestDays = Math.ceil((Date.now() - oldestDate.getTime()) / (1000 * 60 * 60 * 24));
      }

      // Filter zero-result searches
      const zeroSearches = logs.filter(l => l.resultCount === 0).slice(0, 5);

      // Determine system status
      const systemStatus = statusData.nodes.every(n => n.status === 'operational') ? 'operational' : 'degraded';

      setStats({
        missingFa,
        missingAr,
        openDisputes: openTickets.length,
        oldestDisputeDays: oldestDays,
        zeroSearches,
        systemStatus,
        recentAudits: audits.slice(0, 5)
      });
    } catch (e) {
      console.error('Error fetching dashboard stats:', e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadDashboardData();
  }, []);

  if (loading) {
    return <div style={{ color: '#aaa', fontSize: '14px' }}>Loading overview widgets...</div>;
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <div>
          <h1 style={{ fontSize: '24px', color: '#fff', margin: '0 0 4px 0' }}>Control Center</h1>
          <p style={{ fontSize: '13px', color: '#aaa', margin: 0 }}>Welcome back, {user?.name}</p>
        </div>
        <button
          onClick={loadDashboardData}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 12px',
            backgroundColor: '#2c2c2c',
            color: '#fff',
            border: '1px solid #444',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '12px',
            fontWeight: 'bold'
          }}
        >
          <RefreshCw size={12} />
          Refresh
        </button>
      </div>

      {/* Grid Cards Row */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '20px',
        marginBottom: '32px'
      }}>
        {/* Card 1: Locale translation gaps */}
        <div style={{ backgroundColor: '#1e1e1e', border: '1px solid #333', borderRadius: '6px', padding: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <span style={{ fontSize: '12px', color: '#aaa', fontWeight: 'bold', textTransform: 'uppercase' }}>Translations</span>
            <LanguagesIcon color="#4ddcbf" size={18} />
          </div>
          <div style={{ fontSize: '28px', color: '#fff', fontWeight: 'bold', marginBottom: '8px' }}>
            {stats.missingFa + stats.missingAr}
          </div>
          <div style={{ fontSize: '12px', color: '#aaa' }}>
            {stats.missingFa} articles missing Persian, {stats.missingAr} missing Arabic translations.
          </div>
        </div>

        {/* Card 2: Open disputes */}
        <div style={{ backgroundColor: '#1e1e1e', border: '1px solid #333', borderRadius: '6px', padding: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <span style={{ fontSize: '12px', color: '#aaa', fontWeight: 'bold', textTransform: 'uppercase' }}>Dispute Queue</span>
            <ShieldAlert color={stats.openDisputes > 0 ? '#ffdad6' : '#aaa'} size={18} />
          </div>
          <div style={{ fontSize: '28px', color: '#fff', fontWeight: 'bold', marginBottom: '8px' }}>
            {stats.openDisputes}
          </div>
          <div style={{ fontSize: '12px', color: '#aaa' }}>
            {stats.openDisputes > 0 
              ? `Oldest ticket submitted ${stats.oldestDisputeDays} days ago.`
              : 'All dispute tickets fully resolved.'}
          </div>
        </div>

        {/* Card 3: System Status */}
        <div style={{ backgroundColor: '#1e1e1e', border: '1px solid #333', borderRadius: '6px', padding: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <span style={{ fontSize: '12px', color: '#aaa', fontWeight: 'bold', textTransform: 'uppercase' }}>System Health</span>
            {stats.systemStatus === 'operational' ? (
              <CheckCircle2 color="#4ddcbf" size={18} />
            ) : (
              <AlertTriangle color="#ffb4ab" size={18} />
            )}
          </div>
          <div style={{ 
            fontSize: '18px', 
            color: stats.systemStatus === 'operational' ? '#4ddcbf' : '#ffb4ab', 
            fontWeight: 'bold', 
            marginBottom: '8px',
            textTransform: 'uppercase'
          }}>
            {stats.systemStatus === 'operational' ? 'All Operational' : 'Degraded State'}
          </div>
          <div style={{ fontSize: '12px', color: '#aaa' }}>
            {stats.systemStatus === 'operational' ? 'All server node latencies normal.' : 'Latency alerts reported on nodes.'}
          </div>
        </div>
      </div>

      {/* Two Columns Section */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', alignItems: 'start' }}>
        {/* Left Column: Zero Search Queries */}
        <div style={{ backgroundColor: '#1e1e1e', border: '1px solid #333', borderRadius: '6px', padding: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <Search size={18} color="#4ddcbf" />
            <h3 style={{ fontSize: '16px', color: '#fff', margin: 0 }}>Content Gaps (Zero-Result Searches)</h3>
          </div>
          {stats.zeroSearches.length === 0 ? (
            <p style={{ fontSize: '13px', color: '#aaa', margin: 0 }}>No search queries with zero matches recorded this week.</p>
          ) : (
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #333', color: '#aaa', textAlign: 'left' }}>
                  <th style={{ padding: '8px 0' }}>Query Text</th>
                  <th style={{ padding: '8px 0' }}>Locale</th>
                  <th style={{ padding: '8px 0', textAlign: 'right' }}>Logged At</th>
                </tr>
              </thead>
              <tbody>
                {stats.zeroSearches.map((log) => (
                  <tr key={log.id} style={{ borderBottom: '1px solid #222' }}>
                    <td style={{ padding: '10px 0', color: '#ffb4ab', fontWeight: 'bold' }}>"{log.queryText}"</td>
                    <td style={{ padding: '10px 0', textTransform: 'uppercase' }}>{log.locale}</td>
                    <td style={{ padding: '10px 0', textAlign: 'right', color: '#aaa' }}>
                      {new Date(log.timestamp).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* Right Column: Recent Audits */}
        <div style={{ backgroundColor: '#1e1e1e', border: '1px solid #333', borderRadius: '6px', padding: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <Clock size={18} color="#4ddcbf" />
            <h3 style={{ fontSize: '16px', color: '#fff', margin: 0 }}>Recent Activity Feed (Audit Log)</h3>
          </div>
          {stats.recentAudits.length === 0 ? (
            <p style={{ fontSize: '13px', color: '#aaa', margin: 0 }}>No administrative updates recorded yet.</p>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {stats.recentAudits.map((log) => (
                <div key={log.id} style={{
                  padding: '10px',
                  backgroundColor: '#161616',
                  borderRadius: '4px',
                  borderLeft: '3px solid #4ddcbf',
                  fontSize: '12px',
                  lineHeight: '1.4'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: '#aaa', marginBottom: '4px' }}>
                    <strong>{log.userName}</strong>
                    <span>{new Date(log.timestamp).toLocaleTimeString()}</span>
                  </div>
                  <div style={{ color: '#fff' }}>
                    <span style={{ color: '#4ddcbf', fontWeight: 'bold', marginRight: '6px' }}>
                      {log.action}
                    </span>
                    {log.details}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Simple placeholder icon
function LanguagesIcon({ color, size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m5 8 6 6" />
      <path d="m4 14 6-6 2-3" />
      <path d="M2 5h12" />
      <path d="M7 2h1" />
      <path d="m22 22-5-10-5 10" />
      <path d="M14 18h6" />
    </svg>
  );
}

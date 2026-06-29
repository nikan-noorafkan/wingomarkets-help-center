import React, { useState, useEffect } from 'react';
import { Sliders, AlertTriangle, ShieldCheck, AlertCircle, Clock, CheckCircle2, User, HelpCircle, Save } from 'lucide-react';

export default function SupportOps({ user }) {
  const [loading, setLoading] = useState(true);
  const [slaChat, setSlaChat] = useState(2);
  const [slaEmail, setSlaEmail] = useState(2);

  // Incidents States
  const [incidents, setIncidents] = useState([]);
  const [newIncTitle, setNewIncTitle] = useState('');
  const [newIncStatus, setNewIncStatus] = useState('operational');

  // Dispute Tickets States
  const [disputes, setDisputes] = useState([]);
  
  // Feedback Stats
  const [feedbackStats, setFeedbackStats] = useState({});
  const [articles, setArticles] = useState([]);

  // Zero results query log
  const [zeroQueries, setZeroQueries] = useState([]);

  const loadData = async () => {
    try {
      const settingsRes = await fetch('/api/settings');
      const settings = await settingsRes.json();
      setSlaChat(settings.slaChatMinutes);
      setSlaEmail(settings.slaEmailHours);

      const statusRes = await fetch('/api/status');
      const statusData = await statusRes.json();
      setIncidents(statusData.incidents);

      const dispRes = await fetch('/api/disputes');
      const disputesData = await dispRes.json();
      setDisputes(disputesData);

      const artRes = await fetch('/api/articles');
      const artData = await artRes.json();
      setArticles(artData);

      const feedRes = await fetch('/api/feedback/stats');
      const feedData = await feedRes.json();
      setFeedbackStats(feedData);

      const logsRes = await fetch('/api/search-logs');
      const logs = await logsRes.json();
      setZeroQueries(logs.filter(q => q.resultCount === 0));
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleSaveSlas = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/settings', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slaChatMinutes: slaChat, slaEmailHours: slaEmail })
      });
      if (res.ok) alert('SLAs updated successfully.');
    } catch (e) {
      console.error(e);
    }
  };

  const handleCreateIncident = async (e) => {
    e.preventDefault();
    if (!newIncTitle.trim()) return;
    try {
      const res = await fetch('/api/incidents', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: newIncTitle.trim(),
          status: newIncStatus,
          updates: [{ timestamp: new Date().toISOString(), message: `Incident logs started. Status set to: ${newIncStatus}.` }]
        })
      });
      if (res.ok) {
        setNewIncTitle('');
        setNewIncStatus('operational');
        loadData();
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleResolveIncident = async (id) => {
    try {
      const res = await fetch(`/api/incidents/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          status: 'resolved',
          updates: [{ timestamp: new Date().toISOString(), message: 'System operations normalized. All systems operational.' }]
        })
      });
      if (res.ok) loadData();
    } catch (e) {
      console.error(e);
    }
  };

  // Drag and Drop Dispute ticket stage update
  const handleUpdateDisputeStage = async (id, stage, outcome = null) => {
    try {
      const res = await fetch(`/api/disputes/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ stage, outcome })
      });
      if (res.ok) loadData();
    } catch (e) {
      console.error(e);
    }
  };

  // Kanban Columns matching stages
  const getDisputesInStage = (stage) => {
    return disputes.filter(d => d.stage === stage);
  };

  // SLA countdown timer
  const getSlaTimeLeft = (targetDateStr) => {
    const target = new Date(targetDateStr).getTime();
    const diff = target - Date.now();
    if (diff <= 0) return { text: 'SLA BREACHED', breached: true };

    const hours = Math.floor(diff / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    return { text: `${hours}h ${mins}m left`, breached: false };
  };

  if (loading) return <div style={{ color: '#aaa' }}>Loading support operations...</div>;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      
      {/* SECTION 1: SLAS & INCIDENT PANEL */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '24px' }}>
        
        {/* SLA modifier form */}
        <div style={{ backgroundColor: '#1e1e1e', border: '1px solid #333', padding: '24px', borderRadius: '6px' }}>
          <h2 style={{ fontSize: '16px', color: '#fff', margin: '0 0 16px 0', borderBottom: '1px solid #333', paddingBottom: '10px' }}>Support SLA Parameters</h2>
          
          <form onSubmit={handleSaveSlas} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label style={{ fontSize: '12px', color: '#aaa' }}>Live Chat SLA (Target mins)</label>
              <input type="number" required value={slaChat} onChange={e => setSlaChat(e.target.value)} style={{ padding: '8px', backgroundColor: '#2c2c2c', border: '1px solid #444', color: '#fff', borderRadius: '4px', fontSize: '13px' }} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label style={{ fontSize: '12px', color: '#aaa' }}>Email SLA (Target hours)</label>
              <input type="number" required value={slaEmail} onChange={e => setSlaEmail(e.target.value)} style={{ padding: '8px', backgroundColor: '#2c2c2c', border: '1px solid #444', color: '#fff', borderRadius: '4px', fontSize: '13px' }} />
            </div>

            <button type="submit" style={{ padding: '10px', backgroundColor: '#006b5a', border: 'none', color: '#fff', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }}>
              Save SLAs
            </button>
          </form>
        </div>

        {/* Incident status registry */}
        <div style={{ backgroundColor: '#1e1e1e', border: '1px solid #333', padding: '24px', borderRadius: '6px' }}>
          <h2 style={{ fontSize: '16px', color: '#fff', margin: '0 0 16px 0', borderBottom: '1px solid #333', paddingBottom: '10px' }}>Incident Board</h2>
          
          <form onSubmit={handleCreateIncident} style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
            <input type="text" placeholder="Incident Title / Log details" required value={newIncTitle} onChange={e => setNewIncTitle(e.target.value)} style={{ flex: 1, padding: '8px', backgroundColor: '#2c2c2c', border: '1px solid #444', color: '#fff', borderRadius: '4px', fontSize: '12px' }} />
            <select value={newIncStatus} onChange={e => setNewIncStatus(e.target.value)} style={{ padding: '8px', backgroundColor: '#2c2c2c', border: '1px solid #444', color: '#fff', borderRadius: '4px', fontSize: '12px' }}>
              <option value="operational">Operational</option>
              <option value="degraded">Degraded</option>
              <option value="outage">Outage</option>
            </select>
            <button type="submit" style={{ padding: '8px 12px', backgroundColor: '#006b5a', border: 'none', color: '#fff', borderRadius: '4px', cursor: 'pointer', fontSize: '12px', fontWeight: 'bold' }}>
              Post Log
            </button>
          </form>

          <div style={{ maxHeight: '180px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {incidents.map(inc => (
              <div key={inc.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', backgroundColor: '#161616', borderRadius: '4px', fontSize: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{
                    padding: '2px 6px',
                    backgroundColor: inc.status === 'resolved' ? 'rgba(77,220,191,0.1)' : 'rgba(219,68,85,0.1)',
                    color: inc.status === 'resolved' ? '#4ddcbf' : '#db4455',
                    borderRadius: '4px',
                    fontSize: '10px',
                    fontWeight: 'bold'
                  }}>
                    {inc.status}
                  </span>
                  <span style={{ color: '#fff', fontWeight: 'bold' }}>{inc.title}</span>
                </div>
                {inc.status !== 'resolved' && (
                  <button onClick={() => handleResolveIncident(inc.id)} style={{ padding: '2px 6px', backgroundColor: '#222', border: '1px solid #444', color: '#4ddcbf', borderRadius: '3px', cursor: 'pointer', fontSize: '10px' }}>
                    Mark Resolved
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* SECTION 2: DISPUTE TICKETS KANBAN BOARD */}
      <div style={{ backgroundColor: '#1e1e1e', border: '1px solid #333', padding: '24px', borderRadius: '6px' }}>
        <h2 style={{ fontSize: '16px', color: '#fff', margin: '0 0 16px 0', borderBottom: '1px solid #333', paddingBottom: '10px' }}>
          Trade Dispute Kanban Board (Resolution SLA Target: 48 Hours)
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px' }}>
          {/* Column 1: Submitted */}
          <KanbanColumn
            title="Submitted"
            tickets={getDisputesInStage('submitted')}
            onMoveTicket={handleUpdateDisputeStage}
            nextStage="under_review"
            nextAction="Start Review"
            getSlaTimeLeft={getSlaTimeLeft}
          />

          {/* Column 2: Under Review */}
          <KanbanColumn
            title="Under Review"
            tickets={getDisputesInStage('under_review')}
            onMoveTicket={handleUpdateDisputeStage}
            nextStage="outcome_shared"
            nextAction="Finalize Outcome"
            hasOutcomePicker={true}
            getSlaTimeLeft={getSlaTimeLeft}
          />

          {/* Column 3: Outcome Shared */}
          <KanbanColumn
            title="Outcome Shared"
            tickets={getDisputesInStage('outcome_shared')}
            onMoveTicket={handleUpdateDisputeStage}
            getSlaTimeLeft={getSlaTimeLeft}
          />
        </div>
      </div>

      {/* SECTION 3: ARTICLES FEEDBACK AND ZERO-MATCH QUERY LOGS */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
        
        {/* Helpfulness Feedbacks */}
        <div style={{ backgroundColor: '#1e1e1e', border: '1px solid #333', padding: '24px', borderRadius: '6px' }}>
          <h2 style={{ fontSize: '16px', color: '#fff', margin: '0 0 16px 0', borderBottom: '1px solid #333', paddingBottom: '10px' }}>Article Helpfulness Quality Controls</h2>
          
          <div style={{ maxHeight: '240px', overflowY: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #333', color: '#aaa', textAlign: 'left' }}>
                  <th style={{ padding: '8px 0' }}>Article Slug</th>
                  <th style={{ padding: '8px 0', textAlign: 'center' }}>Helpful</th>
                  <th style={{ padding: '8px 0', textAlign: 'center' }}>Unhelpful</th>
                  <th style={{ padding: '8px 0', textAlign: 'right' }}>Score</th>
                </tr>
              </thead>
              <tbody>
                {articles.map(art => {
                  const stat = feedbackStats[art.id] || { helpful: 0, unhelpful: 0 };
                  const total = stat.helpful + stat.unhelpful;
                  const score = total > 0 ? Math.round((stat.helpful / total) * 100) : 100;
                  const isFlagged = total > 2 && score < 60; // Flag quality if score falls below 60%
                  
                  return (
                    <tr key={art.id} style={{ borderBottom: '1px solid #2c2c2c', color: isFlagged ? '#ffb4ab' : '#fff' }}>
                      <td style={{ padding: '8px 0', fontWeight: isFlagged ? 'bold' : 'normal' }}>
                        {art.slug} {isFlagged && '⚠️'}
                      </td>
                      <td style={{ padding: '8px 0', textAlign: 'center', color: '#4ddcbf' }}>{stat.helpful}</td>
                      <td style={{ padding: '8px 0', textAlign: 'center', color: '#ffb4ab' }}>{stat.unhelpful}</td>
                      <td style={{ padding: '8px 0', textAlign: 'right', fontWeight: 'bold', color: isFlagged ? '#ffb4ab' : '#4ddcbf' }}>
                        {score}%
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Content Gaps Log */}
        <div style={{ backgroundColor: '#1e1e1e', border: '1px solid #333', padding: '24px', borderRadius: '6px' }}>
          <h2 style={{ fontSize: '16px', color: '#fff', margin: '0 0 16px 0', borderBottom: '1px solid #333', paddingBottom: '10px' }}>Zero-Result Search History</h2>
          
          <div style={{ maxHeight: '240px', overflowY: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #333', color: '#aaa', textAlign: 'left' }}>
                  <th style={{ padding: '8px 0' }}>Keywords Log</th>
                  <th style={{ padding: '8px 0' }}>Language</th>
                  <th style={{ padding: '8px 0', textAlign: 'right' }}>Search Date</th>
                </tr>
              </thead>
              <tbody>
                {zeroQueries.map(log => (
                  <tr key={log.id} style={{ borderBottom: '1px solid #2c2c2c' }}>
                    <td style={{ padding: '8px 0', color: '#ffb4ab', fontWeight: 'bold' }}>"{log.queryText}"</td>
                    <td style={{ padding: '8px 0', textTransform: 'uppercase' }}>{log.locale}</td>
                    <td style={{ padding: '8px 0', textAlign: 'right', color: '#aaa' }}>
                      {new Date(log.timestamp).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>

    </div>
  );
}

function KanbanColumn({ title, tickets, onMoveTicket, nextStage, nextAction, hasOutcomePicker = false, getSlaTimeLeft }) {
  const [selectedOutcome, setSelectedOutcome] = useState('adjusted');

  return (
    <div style={{ backgroundColor: '#161616', padding: '12px', borderRadius: '6px', minHeight: '300px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <div style={{ borderBottom: '2px solid #333', paddingBottom: '8px', marginBottom: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3 style={{ fontSize: '14px', color: '#fff', margin: 0 }}>{title}</h3>
        <span style={{ fontSize: '11px', backgroundColor: '#333', padding: '2px 8px', borderRadius: '10px', color: '#fff', fontWeight: 'bold' }}>
          {tickets.length}
        </span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {tickets.map(ticket => {
          const sla = getSlaTimeLeft(ticket.slaTargetAt);
          
          return (
            <div key={ticket.id} style={{
              backgroundColor: '#1e1e1e',
              border: '1px solid #333',
              borderRadius: '4px',
              padding: '12px',
              fontSize: '12px',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', color: '#fff' }}>
                <span>TKT-{ticket.id}-WM</span>
                <span style={{
                  color: sla.breached ? '#ffb4ab' : '#4ddcbf',
                  fontSize: '10px',
                  fontWeight: 'bold',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}>
                  <Clock size={10} />
                  {sla.text}
                </span>
              </div>
              <div>Account: <strong style={{ color: '#fff' }}>{ticket.accountRef}</strong></div>
              <div>Trade ID: <strong style={{ color: '#fff' }}>{ticket.tradeTicketId}</strong></div>
              {ticket.notes && (
                <div style={{ color: '#aaa', fontStyle: 'italic', fontSize: '11px', borderTop: '1px solid #222', paddingTop: '4px' }}>
                  {ticket.notes}
                </div>
              )}

              {/* Action buttons */}
              {nextStage && (
                <div style={{ marginTop: '8px', borderTop: '1px solid #2c2c2c', paddingTop: '8px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {hasOutcomePicker && (
                    <select
                      value={selectedOutcome}
                      onChange={e => setSelectedOutcome(e.target.value)}
                      style={{ padding: '4px', backgroundColor: '#2c2c2c', border: '1px solid #444', color: '#fff', borderRadius: '3px', fontSize: '11px' }}
                    >
                      <option value="adjusted">Adjusted (Credits shared)</option>
                      <option value="no_change">No Change (Unchanged rates)</option>
                      <option value="already_resolved">Already Resolved</option>
                    </select>
                  )}
                  <button
                    onClick={() => onMoveTicket(ticket.id, nextStage, hasOutcomePicker ? selectedOutcome : null)}
                    style={{
                      padding: '4px 8px',
                      backgroundColor: '#006b5a',
                      border: 'none',
                      color: '#fff',
                      borderRadius: '3px',
                      cursor: 'pointer',
                      fontWeight: 'bold',
                      fontSize: '11px'
                    }}
                  >
                    {nextAction}
                  </button>
                </div>
              )}

              {ticket.outcome && (
                <div style={{
                  marginTop: '4px',
                  padding: '3px',
                  backgroundColor: 'rgba(77,220,191,0.08)',
                  color: '#4ddcbf',
                  borderRadius: '2px',
                  textAlign: 'center',
                  fontSize: '10px',
                  fontWeight: 'bold',
                  textTransform: 'uppercase'
                }}>
                  Outcome: {ticket.outcome.replace('_', ' ')}
                </div>
              )}

            </div>
          );
        })}
      </div>
    </div>
  );
}

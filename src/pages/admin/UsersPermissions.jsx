import React, { useState, useEffect } from 'react';
import { Users, ShieldAlert, Key, ClipboardList, Trash2, Plus, Clock } from 'lucide-react';

export default function UsersPermissions({ user: currentUser }) {
  const [users, setUsers] = useState([]);
  const [auditLogs, setAuditLogs] = useState([]);
  const [loading, setLoading] = useState(true);

  // User creation states
  const [showAddForm, setShowAddForm] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('editor');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const loadData = async () => {
    try {
      const usersRes = await fetch('/api/users');
      const usersData = await usersRes.json();
      setUsers(usersData);

      const logsRes = await fetch('/api/audit-logs');
      const logsData = await logsRes.json();
      setAuditLogs(logsData);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleAddUserSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (password.length < 8) {
      return setError('Password must be at least 8 characters long.');
    }

    try {
      const res = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, role, password })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to create user.');

      setName('');
      setEmail('');
      setPassword('');
      setRole('editor');
      setShowAddForm(false);
      loadData();
      alert('User added successfully. The user will be prompted to reset their temporary password on first login.');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDeleteUser = async (id) => {
    if (!window.confirm('Are you sure you want to revoke access and delete this user?')) return;
    try {
      const res = await fetch(`/api/users/${id}`, { method: 'DELETE' });
      if (res.ok) {
        loadData();
      } else {
        const err = await res.json();
        alert(err.error);
      }
    } catch (e) {
      console.error(e);
    }
  };

  if (loading) return <div style={{ color: '#aaa' }}>Loading users permissions database...</div>;

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
      
      {/* LEFT: USER LIST */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <h2 style={{ fontSize: '18px', color: '#fff', margin: 0 }}>System Operators & Roles</h2>
          {currentUser.role === 'admin' && !showAddForm && (
            <button onClick={() => setShowAddForm(true)} style={{ padding: '4px 10px', fontSize: '11px', backgroundColor: '#006b5a', color: '#fff', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>
              + Add User
            </button>
          )}
        </div>

        {showAddForm ? (
          <form onSubmit={handleAddUserSubmit} style={{ backgroundColor: '#1e1e1e', border: '1px solid #333', padding: '20px', borderRadius: '4px', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '16px' }}>
            <h3 style={{ fontSize: '14px', color: '#fff', margin: '0 0 8px 0' }}>Invite Portal Operator</h3>
            
            {error && (
              <div style={{ padding: '8px', backgroundColor: '#ffdad6', color: '#ba1a1a', borderRadius: '4px', fontSize: '12px' }}>
                {error}
              </div>
            )}

            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <label style={{ fontSize: '11px', color: '#aaa' }}>Full Name</label>
              <input type="text" required value={name} onChange={e => setName(e.target.value)} style={{ padding: '8px', backgroundColor: '#2c2c2c', border: '1px solid #444', color: '#fff', borderRadius: '4px', fontSize: '12px' }} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <label style={{ fontSize: '11px', color: '#aaa' }}>Email Address</label>
              <input type="email" required value={email} onChange={e => setEmail(e.target.value)} style={{ padding: '8px', backgroundColor: '#2c2c2c', border: '1px solid #444', color: '#fff', borderRadius: '4px', fontSize: '12px' }} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <label style={{ fontSize: '11px', color: '#aaa' }}>Assigned Authorization Role</label>
              <select value={role} onChange={e => setRole(e.target.value)} style={{ padding: '8px', backgroundColor: '#2c2c2c', border: '1px solid #444', color: '#fff', borderRadius: '4px', fontSize: '12px' }}>
                <option value="editor">Editor (Create & update content)</option>
                <option value="translator">Translator (RTL localization updates)</option>
                <option value="compliance_reviewer">Compliance Reviewer (Mandatory sign-off review gate)</option>
                <option value="admin">Administrator (Full panel control)</option>
              </select>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <label style={{ fontSize: '11px', color: '#aaa' }}>Temporary Password</label>
              <input type="password" required value={password} onChange={e => setPassword(e.target.value)} style={{ padding: '8px', backgroundColor: '#2c2c2c', border: '1px solid #444', color: '#fff', borderRadius: '4px', fontSize: '12px' }} />
            </div>

            <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end', marginTop: '8px' }}>
              <button type="button" onClick={() => setShowAddForm(false)} style={{ padding: '6px 12px', backgroundColor: '#222', border: '1px solid #444', color: '#fff', borderRadius: '4px', cursor: 'pointer', fontSize: '11px' }}>Cancel</button>
              <button type="submit" style={{ padding: '6px 16px', backgroundColor: '#006b5a', border: 'none', color: '#fff', borderRadius: '4px', cursor: 'pointer', fontSize: '11px', fontWeight: 'bold' }}>Create Account</button>
            </div>
          </form>
        ) : null}

        <div style={{ backgroundColor: '#1e1e1e', border: '1px solid #333', borderRadius: '4px', padding: '8px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
          {users.map(u => (
            <div key={u.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', backgroundColor: '#161616', borderRadius: '4px', fontSize: '13px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '4px', backgroundColor: '#333', display: 'flex', alignItems: 'center', justifyCircle: 'center', color: '#4ddcbf', fontWeight: 'bold', justifyContent: 'center' }}>
                  {u.name.charAt(0)}
                </div>
                <div>
                  <strong style={{ color: '#fff', display: 'block' }}>{u.name}</strong>
                  <span style={{ fontSize: '11px', color: '#aaa' }}>{u.email}</span>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{
                  padding: '2px 8px',
                  backgroundColor: '#2c2c2c',
                  borderRadius: '10px',
                  fontSize: '10px',
                  color: '#4ddcbf',
                  fontWeight: 'bold',
                  textTransform: 'uppercase'
                }}>
                  {u.role.replace('_', ' ')}
                </span>
                
                {currentUser.role === 'admin' && u.id !== currentUser.id && (
                  <button onClick={() => handleDeleteUser(u.id)} style={{ backgroundColor: 'transparent', border: 'none', color: '#db4455', cursor: 'pointer', padding: '4px' }}>
                    <Trash2 size={13} />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT: AUDIT LOGS */}
      <div style={{ backgroundColor: '#1e1e1e', border: '1px solid #333', padding: '24px', borderRadius: '6px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px', borderBottom: '1px solid #333', paddingBottom: '10px' }}>
          <ClipboardList size={18} color="#4ddcbf" />
          <h2 style={{ fontSize: '18px', color: '#fff', margin: 0 }}>System Audit Logs</h2>
        </div>

        <div style={{ maxHeight: '360px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {auditLogs.map(log => (
            <div key={log.id} style={{
              padding: '10px',
              backgroundColor: '#161616',
              borderLeft: '3px solid #333',
              borderRadius: '4px',
              fontSize: '11px',
              lineHeight: '1.4'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#aaa', marginBottom: '4px' }}>
                <strong>{log.userName}</strong>
                <span style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                  <Clock size={9} />
                  {new Date(log.timestamp).toLocaleString()}
                </span>
              </div>
              <div style={{ color: '#fff' }}>
                <span style={{
                  padding: '1px 4px',
                  backgroundColor: '#222',
                  borderRadius: '3px',
                  color: '#4ddcbf',
                  fontWeight: 'bold',
                  marginRight: '6px',
                  fontSize: '9px'
                }}>
                  {log.action}
                </span>
                {log.details}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

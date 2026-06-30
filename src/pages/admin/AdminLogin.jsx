import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  // Forced password change state
  const [mustReset, setMustReset] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const isSubdir = window.location.pathname.startsWith('/help-center');
    const targetPath = isSubdir ? '/help-center/admin' : '/admin';
    setError('');
    setLoading(true);
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Login failed.');
      }
      
      if (data.user.mustChangePassword) {
        // Enforce forced password reset flow
        setMustReset(true);
        setCurrentPassword(password);
      } else {
        // Successful login
        navigate(targetPath);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleResetSubmit = async (e) => {
    const isSubdir = window.location.pathname.startsWith('/help-center');
    const targetPath = isSubdir ? '/help-center/admin' : '/admin';
    e.preventDefault();
    setError('');
    if (newPassword !== confirmPassword) {
      return setError('Passwords do not match.');
    }
    if (newPassword.length < 8) {
      return setError('Password must be at least 8 characters long.');
    }
    setLoading(true);
    try {
      const res = await fetch('/api/auth/change-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ currentPassword, newPassword })
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to update password.');
      }
      // Redirect to main admin dashboard
      navigate(targetPath);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#121212',
      color: '#fff',
      fontFamily: 'var(--font-family, sans-serif)'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '400px',
        padding: '32px',
        backgroundColor: '#1e1e1e',
        borderRadius: '8px',
        border: '1px solid #333',
        boxShadow: '0 8px 24px rgba(0,0,0,0.5)'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', margin: '0 0 8px 0' }}>WingoMarkets</h2>
          <span style={{ fontSize: '12px', color: '#4ddcbf', letterSpacing: '1px', textTransform: 'uppercase' }}>
            CMS Control Panel
          </span>
        </div>

        {error && (
          <div style={{
            padding: '12px',
            backgroundColor: '#ffdad6',
            color: '#ba1a1a',
            borderRadius: '4px',
            fontSize: '14px',
            marginBottom: '16px'
          }}>
            {error}
          </div>
        )}

        {!mustReset ? (
          <form onSubmit={handleLoginSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label style={{ fontSize: '12px', color: '#aaa' }}>Email Address</label>
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                style={{
                  padding: '10px',
                  backgroundColor: '#2c2c2c',
                  border: '1px solid #444',
                  borderRadius: '4px',
                  color: '#fff',
                  outline: 'none'
                }}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label style={{ fontSize: '12px', color: '#aaa' }}>Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
                style={{
                  padding: '10px',
                  backgroundColor: '#2c2c2c',
                  border: '1px solid #444',
                  borderRadius: '4px',
                  color: '#fff',
                  outline: 'none'
                }}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              style={{
                padding: '12px',
                backgroundColor: '#006b5a',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'background-color 0.2s',
                marginTop: '8px'
              }}
              onMouseOver={e => e.currentTarget.style.backgroundColor = '#005244'}
              onMouseOut={e => e.currentTarget.style.backgroundColor = '#006b5a'}
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>
        ) : (
          <form onSubmit={handleResetSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{
              padding: '10px',
              backgroundColor: 'rgba(77, 220, 191, 0.1)',
              border: '1px solid #4ddcbf',
              color: '#4ddcbf',
              borderRadius: '4px',
              fontSize: '13px',
              marginBottom: '8px',
              lineHeight: '1.4'
            }}>
              <strong>Security Enforced:</strong> You are logging in with a default seeded credential. You must set a personalized, secure password before entering.
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label style={{ fontSize: '12px', color: '#aaa' }}>New Password</label>
              <input
                type="password"
                required
                placeholder="At least 8 characters"
                value={newPassword}
                onChange={e => setNewPassword(e.target.value)}
                style={{
                  padding: '10px',
                  backgroundColor: '#2c2c2c',
                  border: '1px solid #444',
                  borderRadius: '4px',
                  color: '#fff',
                  outline: 'none'
                }}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label style={{ fontSize: '12px', color: '#aaa' }}>Confirm New Password</label>
              <input
                type="password"
                required
                placeholder="Repeat password"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                style={{
                  padding: '10px',
                  backgroundColor: '#2c2c2c',
                  border: '1px solid #444',
                  borderRadius: '4px',
                  color: '#fff',
                  outline: 'none'
                }}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              style={{
                padding: '12px',
                backgroundColor: '#4ddcbf',
                color: '#121212',
                border: 'none',
                borderRadius: '4px',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'background-color 0.2s',
                marginTop: '8px'
              }}
              onMouseOver={e => e.currentTarget.style.backgroundColor = '#38c4a7'}
              onMouseOut={e => e.currentTarget.style.backgroundColor = '#4ddcbf'}
            >
              {loading ? 'Updating Password...' : 'Save & Continue'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

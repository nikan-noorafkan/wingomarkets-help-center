import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import Dashboard from './Dashboard';
import ArticleManager from './ArticleManager';
import CategoryManager from './CategoryManager';
import MediaLibrary from './MediaLibrary';
import SeoToolkit from './SeoToolkit';
import SupportOps from './SupportOps';
import UsersPermissions from './UsersPermissions';
import LocalizationDashboard from './LocalizationDashboard';
import { 
  LayoutDashboard, 
  FileText, 
  FolderTree, 
  Image, 
  Globe, 
  Sliders, 
  Users, 
  Languages, 
  LogOut, 
  User as UserIcon,
  Moon,
  Sun
} from 'lucide-react';

export default function AdminLayout() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const getAdminPath = (path) => {
    const isSubdir = location.pathname.startsWith('/help-center');
    return isSubdir ? `/help-center${path}` : path;
  };

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch('/api/auth/verify');
        const data = await res.json();
        if (data.user) {
          setUser(data.user);
          setIsAdmin(data.user.role === 'admin');
        } else {
          navigate(getAdminPath('/admin/login'));
        }
      } catch (e) {
        navigate(getAdminPath('/admin/login'));
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      navigate(getAdminPath('/admin/login'));
    } catch (e) {
      console.error('Logout error:', e);
    }
  };

  if (loading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#121212',
        color: '#fff'
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
          <div className="pulse-dot-teal" style={{ width: '24px', height: '24px' }}></div>
          <span style={{ fontSize: '14px', color: '#aaa' }}>Verifying back-office credentials...</span>
        </div>
      </div>
    );
  }

  // Sidebar navigation sections
  const menuItems = [
    { path: getAdminPath('/admin'), label: 'Dashboard', icon: LayoutDashboard, roles: ['admin', 'editor', 'translator', 'compliance_reviewer'] },
    { path: getAdminPath('/admin/articles'), label: 'Articles', icon: FileText, roles: ['admin', 'editor', 'translator', 'compliance_reviewer'] },
    { path: getAdminPath('/admin/categories'), label: 'Categories & Shortcuts', icon: FolderTree, roles: ['admin', 'editor'] },
    { path: getAdminPath('/admin/media'), label: 'Media Library', icon: Image, roles: ['admin', 'editor'] },
    { path: getAdminPath('/admin/seo'), label: 'SEO Toolkit', icon: Globe, roles: ['admin', 'editor'] },
    { path: getAdminPath('/admin/support'), label: 'Support Ops', icon: Sliders, roles: ['admin', 'editor', 'compliance_reviewer'] },
    { path: getAdminPath('/admin/localization'), label: 'Localization', icon: Languages, roles: ['admin', 'editor', 'translator'] },
    { path: getAdminPath('/admin/users'), label: 'Users & Audits', icon: Users, roles: ['admin', 'editor'] },
  ];

  const allowedMenuItems = menuItems.filter(item => item.roles.includes(user?.role));

  return (
    <div style={{
      display: 'flex',
      minHeight: '100vh',
      backgroundColor: '#121212',
      color: '#e0e0e0',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      {/* 1. ADMIN SIDEBAR (DENSE LEFT NAVIGATION) */}
      <aside style={{
        width: '240px',
        backgroundColor: '#1e1e1e',
        borderRight: '1px solid #333',
        display: 'flex',
        flexDirection: 'column',
        position: 'fixed',
        height: '100vh',
        top: 0,
        left: 0,
        zIndex: 100
      }}>
        <div style={{
          padding: '20px',
          borderBottom: '1px solid #333',
          display: 'flex',
          flexDirection: 'column',
          gap: '4px'
        }}>
          <h2 style={{ fontSize: '18px', fontWeight: 'bold', color: '#fff', margin: 0 }}>WingoMarkets</h2>
          <span style={{ fontSize: '11px', color: '#4ddcbf', textTransform: 'uppercase', letterSpacing: '0.5px' }}>CMS Control Panel</span>
        </div>

        <nav style={{ flex: 1, padding: '16px 8px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
          {allowedMenuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path || (item.path !== getAdminPath('/admin') && location.pathname.startsWith(item.path));
            return (
              <Link
                key={item.path}
                to={item.path}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '10px 12px',
                  borderRadius: '4px',
                  textDecoration: 'none',
                  fontSize: '13px',
                  fontWeight: isActive ? 'bold' : 'normal',
                  color: isActive ? '#4ddcbf' : '#b0b0b0',
                  backgroundColor: isActive ? 'rgba(77, 220, 191, 0.08)' : 'transparent',
                  transition: 'all 0.15s'
                }}
                onMouseOver={e => {
                  if (!isActive) {
                    e.currentTarget.style.color = '#fff';
                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.02)';
                  }
                }}
                onMouseOut={e => {
                  if (!isActive) {
                    e.currentTarget.style.color = '#b0b0b0';
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }
                }}
              >
                <Icon size={16} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* User Info & Logout */}
        <div style={{
          padding: '16px',
          borderTop: '1px solid #333',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          backgroundColor: '#161616'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '4px',
              backgroundColor: '#333',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#4ddcbf',
              fontWeight: 'bold',
              fontSize: '14px'
            }}>
              {user?.name?.charAt(0) || 'A'}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
              <span style={{ fontSize: '13px', fontWeight: 'bold', color: '#fff', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                {user?.name}
              </span>
              <span style={{ fontSize: '11px', color: '#aaa', textTransform: 'capitalize' }}>
                {user?.role?.replace('_', ' ')}
              </span>
            </div>
          </div>

          <button
            onClick={handleLogout}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              padding: '8px 12px',
              backgroundColor: 'rgba(219, 68, 85, 0.1)',
              color: '#db4455',
              border: '1px solid rgba(219, 68, 85, 0.2)',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '12px',
              width: '100%',
              fontWeight: 'bold',
              transition: 'all 0.2s'
            }}
            onMouseOver={e => e.currentTarget.style.backgroundColor = 'rgba(219, 68, 85, 0.2)'}
            onMouseOut={e => e.currentTarget.style.backgroundColor = 'rgba(219, 68, 85, 0.1)'}
          >
            <LogOut size={13} />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* 2. ADMIN MAIN WRAPPER */}
      <div style={{
        flex: 1,
        paddingLeft: '240px', // shift due to sidebar
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        boxSizing: 'border-box'
      }}>
        {/* Main Content Area */}
        <main style={{ padding: '32px', flex: 1 }}>
          <Routes>
            <Route path="/" element={<Dashboard user={user} />} />
            <Route path="/articles" element={<ArticleManager user={user} />} />
            <Route path="/categories" element={<CategoryManager />} />
            <Route path="/media" element={<MediaLibrary user={user} />} />
            <Route path="/seo" element={<SeoToolkit />} />
            <Route path="/support" element={<SupportOps user={user} />} />
            <Route path="/localization" element={<LocalizationDashboard user={user} />} />
            <Route path="/users" element={<UsersPermissions user={user} />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

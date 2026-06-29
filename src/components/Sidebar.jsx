import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { HelpCircle, Home, Activity, BookOpen, Settings } from 'lucide-react';

export default function Sidebar() {
  const location = useLocation();
  const { localizePath } = useLanguage();

  const isAcademy = location.pathname.includes('/academy');
  const isHelpCenter = location.pathname.includes('/help-center');

  return (
    <aside className="portal-sidebar">
      {/* Brand logo */}
      <Link to={localizePath('/help-center')} className="sidebar-logo-glow">
        <span>W</span>
      </Link>

      {/* Help Center Icon Button */}
      <Link 
        to={localizePath('/help-center')} 
        className={`sidebar-btn ${isHelpCenter ? 'active help-center-theme' : ''}`}
        title="Help Center"
      >
        {isHelpCenter && <span className="active-indicator"></span>}
        <HelpCircle size={22} />
      </Link>

      {/* Home Button (Portal home) */}
      <Link 
        to={localizePath('/help-center')} 
        className="sidebar-btn"
        title="Home"
      >
        <Home size={22} />
      </Link>

      {/* Pulse/Statistics placeholder */}
      <button 
        className="sidebar-btn"
        title="Trading Conditions"
      >
        <Activity size={22} />
      </button>

      {/* Academy Button */}
      <Link 
        to={localizePath('/academy/trading-basics/what-is-forex')} 
        className={`sidebar-btn ${isAcademy ? 'active academy-theme' : ''}`}
        title="Academy"
      >
        {isAcademy && <span className="active-indicator"></span>}
        <BookOpen size={22} />
      </Link>

      {/* Spacer */}
      <div className="sidebar-spacer"></div>

      {/* Settings bottom button */}
      <button 
        className="sidebar-btn"
        title="Settings"
      >
        <Settings size={22} />
      </button>
    </aside>
  );
}

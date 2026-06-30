import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { HelpCircle, Home, Activity, BookOpen } from 'lucide-react';

export default function Sidebar() {
  const location = useLocation();
  const { language, localizePath } = useLanguage();

  const isAcademy = location.pathname.includes('/academy');
  const isFaq = location.pathname.includes('/faq');
  const isStatus = location.pathname.includes('/status');
  // Help Center Home is active when we are in /help-center but not on status or FAQ page
  const isHelpCenterHome = location.pathname.includes('/help-center') && !isFaq && !isStatus;

  return (
    <aside className="portal-sidebar">
      {/* Brand logo */}
      <Link to={localizePath('/help-center')} className="sidebar-logo-glow">
        <span>W</span>
      </Link>

      {/* Home Button (Portal home) */}
      <Link 
        to={localizePath('/help-center')} 
        className={`sidebar-btn ${isHelpCenterHome ? 'active help-center-theme' : ''}`}
        title="Home"
      >
        {isHelpCenterHome && <span className="active-indicator"></span>}
        <Home size={22} />
      </Link>

      {/* Help Center Icon Button (FAQ Page) */}
      <Link 
        to={localizePath('/help-center/faq')} 
        className={`sidebar-btn ${isFaq ? 'active help-center-theme' : ''}`}
        title="FAQ"
      >
        {isFaq && <span className="active-indicator"></span>}
        <HelpCircle size={22} />
      </Link>

      {/* Pulse/Statistics (System Status) */}
      <Link 
        to={localizePath('/help-center/status')} 
        className={`sidebar-btn ${isStatus ? 'active help-center-theme' : ''}`}
        title="System Status"
      >
        {isStatus && <span className="active-indicator"></span>}
        <Activity size={22} />
      </Link>

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
    </aside>
  );
}

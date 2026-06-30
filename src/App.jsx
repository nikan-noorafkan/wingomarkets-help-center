import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useLanguage } from './context/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import CategoryDetail from './pages/CategoryDetail';
import ArticleDetail from './pages/ArticleDetail';
import SystemStatus from './pages/SystemStatus';
import Faq from './pages/Faq';
import './App.css';

// Sync layout directions & locales dynamically with router path prefixes
function LanguageHandler({ children }) {
  const location = useLocation();
  const { detectLanguage, updateLanguageState } = useLanguage();

  useEffect(() => {
    const lang = detectLanguage(location.pathname);
    updateLanguageState(lang);
  }, [location.pathname, detectLanguage, updateLanguageState]);

  return <>{children}</>;
}

import Sidebar from './components/Sidebar';
import AdminLogin from './pages/admin/AdminLogin';
import AdminLayout from './pages/admin/AdminLayout';
import SupportWidget from './components/SupportWidget';

function App() {
  const location = useLocation();
  const isAdminPath = location.pathname.startsWith('/admin') || location.pathname.startsWith('/help-center/admin');

  if (isAdminPath) {
    return (
      <LanguageHandler>
        <Routes>
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/help-center/admin/login" element={<AdminLogin />} />
          <Route path="/admin/*" element={<AdminLayout />} />
          <Route path="/help-center/admin/*" element={<AdminLayout />} />
        </Routes>
      </LanguageHandler>
    );
  }

  return (
    <LanguageHandler>
      <div className="app-container" style={{ display: 'flex', minHeight: '100vh' }}>
        <Sidebar />
        
        <div className="main-wrapper" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Header />
          
          <main className="main-content">
            <Routes>
              {/* Root redirects */}
              <Route path="/" element={<Navigate to="/help-center" replace />} />
              <Route path="/fa" element={<Navigate to="/fa/help-center" replace />} />
              <Route path="/ar" element={<Navigate to="/ar/help-center" replace />} />

              {/* English (Default) Paths */}
              <Route path="/help-center" element={<Home />} />
              <Route path="/help-center/faq" element={<Faq />} />
              <Route path="/help-center/status" element={<SystemStatus />} />
              <Route path="/help-center/:categorySlug" element={<CategoryDetail />} />
              <Route path="/help-center/:categorySlug/:articleSlug" element={<ArticleDetail />} />
              <Route path="/academy/:categorySlug/:articleSlug" element={<ArticleDetail />} />

              {/* Persian Paths */}
              <Route path="/fa/help-center" element={<Home />} />
              <Route path="/fa/help-center/faq" element={<Faq />} />
              <Route path="/fa/help-center/status" element={<SystemStatus />} />
              <Route path="/fa/help-center/:categorySlug" element={<CategoryDetail />} />
              <Route path="/fa/help-center/:categorySlug/:articleSlug" element={<ArticleDetail />} />
              <Route path="/fa/academy/:categorySlug/:articleSlug" element={<ArticleDetail />} />

              {/* Arabic Paths */}
              <Route path="/ar/help-center" element={<Home />} />
              <Route path="/ar/help-center/faq" element={<Faq />} />
              <Route path="/ar/help-center/status" element={<SystemStatus />} />
              <Route path="/ar/help-center/:categorySlug" element={<CategoryDetail />} />
              <Route path="/ar/help-center/:categorySlug/:articleSlug" element={<ArticleDetail />} />
              <Route path="/ar/academy/:categorySlug/:articleSlug" element={<ArticleDetail />} />

              {/* Catch-all Fallback */}
              <Route path="*" element={<Navigate to="/help-center" replace />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </div>
      <SupportWidget />
    </LanguageHandler>
  );
}

export default App;

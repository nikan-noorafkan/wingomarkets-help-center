import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useData } from '../context/DataContext';
import { Mail, MessageSquare, Clock, ShieldAlert } from 'lucide-react';

export default function Footer() {
  const { language, t } = useLanguage();
  const { settings } = useData();

  const getSlaChatLabel = () => {
    const min = settings?.slaChatMinutes || 2;
    if (language === 'fa') {
      return `چت زنده (هدف: کمتر از ${min} دقیقه)`;
    }
    if (language === 'ar') {
      return `الدردشة المباشرة (الهدف: أقل من ${min} دقيقة)`;
    }
    return `Live Chat (Target: < ${min} mins)`;
  };

  const getSlaEmailLabel = () => {
    const hours = settings?.slaEmailHours || 2;
    if (language === 'fa') {
      return `پشتیبانی ایمیل (هدف: کمتر از ${hours} ساعت)`;
    }
    if (language === 'ar') {
      return `الدعم عبر البريد الإلكتروني (الهدف: أقل من ${hours} ساعة)`;
    }
    return `Email Support (Target: < ${hours} hours)`;
  };

  return (
    <footer className="footer-area">
      <div className="container">
        {/* Support SLAs Block */}
        <div className="footer-sla-section glass-panel">
          <div className="sla-header">
            <Clock className="icon" size={20} />
            <h3>{t('support_team_sla')}</h3>
          </div>
          <div className="sla-grid">
            <div className="sla-card">
              <MessageSquare className="icon-chat text-gradient-green" size={24} />
              <div className="sla-info">
                <h4>{getSlaChatLabel()}</h4>
                <p>{t('sla_chat_desc')}</p>
              </div>
            </div>
            <div className="sla-card">
              <Mail className="icon-email text-gradient-green" size={24} />
              <div className="sla-info">
                <h4>{getSlaEmailLabel()}</h4>
                <p>{t('sla_email_desc')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Regulatory & Risk Disclaimers */}
        <div className="footer-regulatory-section">
          <div className="regulatory-header">
            <ShieldAlert className="warning-icon" size={18} />
            <span>{t('risk_warning_title')}</span>
          </div>
          <p className="regulatory-text">
            {t('risk_warning_text_1')}
          </p>
          <p className="regulatory-text">
            {t('risk_warning_text_2')}
          </p>
        </div>

        {/* Bottom copyright & Links */}
        <div className="footer-bottom">
          <div className="copyright-text">
            &copy; 2026 WingoMarkets. All rights reserved.
          </div>
          <div className="bottom-links">
            <a href="#privacy">{t('link_privacy')}</a>
            <a href="#terms">{t('link_terms')}</a>
            <a href="#aml">{t('link_aml')}</a>
            <a href="#disclaimer">{t('link_disclaimer')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

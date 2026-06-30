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

  const footerLinks = [
    {
      title: {
        en: "Privacy Policy",
        fa: "حریم خصوصی",
        ar: "سياسة الخصوصية"
      },
      url: "https://wingomarkets.com/dls/documents/Wingo-Markets-Privacy-Policy.pdf"
    },
    {
      title: {
        en: "AML/KYC",
        fa: "قوانین احراز هویت (AML/KYC)",
        ar: "سياسة مكافحة غسيل الأموال واعرف عميلك (AML/KYC)"
      },
      url: "https://wingomarkets.com/dls/documents/Wingo-Markets-KYC-AML-Policy.pdf"
    },
    {
      title: {
        en: "Terms & Conditions",
        fa: "شرایط و قوانین",
        ar: "الشروط والأحكام"
      },
      url: "https://wingomarkets.com/dls/documents/Wingo-Markets-Terms-and-Conditions.pdf"
    },
    {
      title: {
        en: "Risk Disclosure",
        fa: "بیانیه افشای ریسک",
        ar: "إخلاء المسؤولية عن المخاطر"
      },
      url: "https://wingomarkets.com/dls/documents/Wingo-Markets-Risk-Warning-Notice.pdf"
    },
    {
      title: {
        en: "AML and CTF Policy",
        fa: "قوانین مبارزه با پولشویی و تامین مالی تروریسم (AML/CTF)",
        ar: "سياسة مكافحة غسيل الأموال وتمويل الإرهاب (AML/CTF)"
      },
      url: "https://wingomarkets.com/dls/documents/Wingo-Markets-AML-and-CTF-Policy.pdf"
    }
  ];

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
          <div className="bottom-links" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            {footerLinks.map((link, idx) => (
              <a 
                key={idx} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                {link.title[language] || link.title['en']}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

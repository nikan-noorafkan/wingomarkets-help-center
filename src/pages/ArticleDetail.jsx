import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useData } from '../context/DataContext';
import TemplateA from '../components/ArticleTemplates/TemplateA';
import TemplateB from '../components/ArticleTemplates/TemplateB';
import TemplateC from '../components/ArticleTemplates/TemplateC';
import TemplateD from '../components/ArticleTemplates/TemplateD';
import { ChevronRight, Clock, ThumbsUp, ThumbsDown, MessageSquare, Info } from 'lucide-react';
import * as Icons from 'lucide-react';

export default function ArticleDetail() {
  const { categorySlug, articleSlug } = useParams();
  const { language, t, localizePath } = useLanguage();
  const { getArticleBySlug, getCategoryBySlug, getRelatedArticles, loading } = useData();
  const [region, setRegion] = useState('global');
  const [activeSection, setActiveSection] = useState('');
  const [feedback, setFeedback] = useState(null); // 'up' or 'down'

  if (loading) {
    return (
      <div className="container main-content" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh' }}>
        <div className="loading-spinner-layout" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
          <div className="pulse-dot-teal" style={{ width: '24px', height: '24px' }}></div>
          <span style={{ fontSize: '14px', color: 'var(--text-dim)' }}>Loading article...</span>
        </div>
      </div>
    );
  }

  const article = getArticleBySlug(articleSlug);
  const category = getCategoryBySlug(categorySlug);
  const relatedArticles = article ? getRelatedArticles(article) : [];

  // Dynamic SEO meta link and JSON-LD schema injection
  useEffect(() => {
    if (!article) return;
    
    // 1. Alternate hreflangs
    const locales = ['en', 'fa', 'ar'];
    const links = [];
    locales.forEach(loc => {
      const link = document.createElement('link');
      link.rel = 'alternate';
      link.hreflang = loc;
      const prefix = loc === 'en' ? '' : `/${loc}`;
      const path = `${prefix}${article.pillar === 'academy' ? '/academy' : '/help-center'}/${categorySlug}/${article.slug}`;
      link.href = `${window.location.origin}${path}`;
      document.head.appendChild(link);
      links.push(link);
    });

    // 2. Structured Data schema
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    let schema = null;
    const currentLoc = language;
    const title = article.title[currentLoc] || article.title['en'] || '';
    const desc = article.description[currentLoc] || article.description['en'] || '';

    if (article.template === 'A') {
      const content = article.content[currentLoc] || article.content['en'] || {};
      const steps = [...(content.stepsWeb || []), ...(content.stepsMobile || [])];
      schema = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": title,
        "description": desc,
        "step": steps.map((s, idx) => ({
          "@type": "HowToStep",
          "position": idx + 1,
          "text": s
        }))
      };
    } else if (article.template === 'B' || article.template === 'C') {
      const content = article.content[currentLoc] || article.content['en'] || {};
      const faqList = [];
      if (content.mythFactPairs && content.mythFactPairs.length > 0) {
        content.mythFactPairs.forEach(pair => {
          faqList.push({
            "@type": "Question",
            "name": `Myth: ${pair.myth}`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `Fact: ${pair.fact}`
            }
          });
        });
      }
      if (content.edgeCases && content.edgeCases.length > 0) {
        content.edgeCases.forEach(ec => {
          faqList.push({
            "@type": "Question",
            "name": ec.title,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": ec.text
            }
          });
        });
      }
      if (faqList.length > 0) {
        schema = {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqList
        };
      }
    }

    if (schema) {
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    }

    return () => {
      links.forEach(l => {
        if (document.head.contains(l)) document.head.removeChild(l);
      });
      if (schema && document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, [article, categorySlug, language]);

  const handleFeedback = (type) => {
    setFeedback(type);
    if (article) {
      fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          articleId: article.id,
          locale: language,
          helpful: type === 'up'
        })
      }).catch(err => console.error('Error logging feedback:', err));
    }
  };

  // TOC data mapping for Academy Articles (Scrollspy)
  const getTocData = () => {
    if (!article || article.pillar !== 'academy') return [];
    if (article.slug === 'execution-model-explained') {
      return [
        { id: 'sec-explain', label: 'Used execution model' },
        { id: 'sec-stakes', label: 'Why execution details matter' },
        { id: 'sec-math', label: 'Worked slippage math' },
        { id: 'sec-myths', label: 'Common execution myths' }
      ];
    }
    // General fallback TOC
    return [
      { id: 'sec-intro', label: 'Introduction' },
      { id: 'sec-body', label: 'Core Explanation' },
      { id: 'sec-summary', label: 'Summary Details' }
    ];
  };

  const toc = getTocData();

  // Scrollspy logic
  useEffect(() => {
    if (toc.length === 0) return;

    const handleScroll = () => {
      let current = toc[0].id;
      for (const item of toc) {
        const el = document.getElementById(item.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If the top of the section is near the top of the viewport
          if (rect.top <= 140) {
            current = item.id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Trigger initially

    return () => window.removeEventListener('scroll', handleScroll);
  }, [toc, articleSlug]);

  if (!article) {
    return (
      <div className="container main-content error-page-design">
        <div className="error-card glass-panel">
          <h2>Article Not Found</h2>
          <p>The guide you are looking for does not exist or has been moved.</p>
          <Link to={localizePath('/help-center')} className="back-btn-empty">
            {t('back_to_home')}
          </Link>
        </div>
      </div>
    );
  }

  const renderTemplate = () => {
    const content = article.content[language] || article.content['en'];
    switch (article.template) {
      case 'A':
        return <TemplateA content={content} />;
      case 'B':
        return <TemplateB content={content} />;
      case 'C':
        return <TemplateC content={content} />;
      case 'D':
        return <TemplateD content={content} />;
      default:
        return <p>Template layout error.</p>;
    }
  };

  const isAcademy = article.pillar === 'academy';
  const hasRegionalVariant = article.slug === 'regulatory-jurisdictions' || article.slug === 'how-to-verify-account';

  const handleTocClick = (e, id) => {
    e.preventDefault();
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="container main-content article-detail-page-design">
      {/* Breadcrumbs */}
      <nav className="breadcrumbs-design">
        <Link to={localizePath(isAcademy ? '/academy/trading-basics/what-is-forex' : '/help-center')}>
          {isAcademy ? t('academy') : t('help_center')}
        </Link>
        <ChevronRight size={14} />
        {category && (
          <>
            <Link to={localizePath(`/${isAcademy ? 'academy' : 'help-center'}/${category.slug}`)}>
              {category.title[language] || category.title['en']}
            </Link>
            <ChevronRight size={14} />
          </>
        )}
        <span className="active-breadcrumb">{article.title[language] || article.title['en']}</span>
      </nav>

      {/* Main Grid Layout */}
      <div className="article-layout-grid-design">
        {/* Left Column: Content */}
        <div className="article-left-col">
          <article>
            {/* Header section */}
            <header className="article-header-block">
              {isAcademy ? (
                <span className="academy-badge-design">
                  <span className="badge-dot"></span>
                  {t('academy')} · {category?.title[language] || category?.title['en']}
                </span>
              ) : null}
              
              <h1 className="article-title-design">{article.title[language] || article.title['en']}</h1>
              
              {article.slug === 'how-to-report-trade-issue' && (
                <div className="time-sensitive-badge-design">
                  Time-sensitive — act before closing this position
                </div>
              )}
              
              <p className="article-desc-lead">
                {article.description[language] || article.description['en']}
              </p>

              <div className="article-meta-row">
                <span className="meta-item-design">
                  <Clock size={14} />
                  {article.readTime} {t('minutes_read')}
                </span>
                <span className="meta-dot"></span>
                <span>{t('last_updated')} Jun 2026</span>
              </div>
            </header>

            {/* Custom divider (Academy gets Gold, Help Center gets Green) */}
            <div className={`article-theme-divider ${isAcademy ? 'academy' : 'help-center'}`}></div>

            {/* Regional Variant Toggle */}
            {hasRegionalVariant && (
              <div className="regional-alert-bar-design glass-panel">
                <div className="alert-content">
                  <Info size={16} className="info-icon" />
                  <span>
                    {t('region_selector_label')}{' '}
                    <button 
                      onClick={() => setRegion(region === 'global' ? 'eu' : 'global')}
                      className="toggle-region-btn"
                    >
                      {region === 'global' ? t('click_here') : t('view_global')}
                    </button>
                  </span>
                </div>
                {region === 'eu' && (
                  <div className="region-warning-expanded-design">
                    <strong>Notice (ESMA Regulations):</strong> Trading under the EU entity is subject to strict regulatory caps. Leverage limits are restricted to 1:30 for major currencies and negative balance protection is legally enforced. Global leverage options (1:500) are not available to residents within the European Economic Area.
                  </div>
                )}
              </div>
            )}

            {/* Dynamic Template Content */}
            <div className="article-template-content-wrapper">
              {renderTemplate()}
            </div>
          </article>

          {/* Related Articles Bottom Grid */}
          {relatedArticles.length > 0 && (
            <section className="related-articles-section-design">
              <h2>{t('related_articles')}</h2>
              <div className="grid-3 related-articles-grid-design">
                {relatedArticles.map(rel => (
                  <Link 
                    key={rel.slug}
                    to={localizePath(`/${rel.pillar === 'academy' ? 'academy' : 'help-center'}/${rel.categorySlug}/${rel.slug}`)}
                    className="related-article-card-design glass-panel"
                  >
                    <span className={`card-bullet-dot ${isAcademy ? 'academy' : 'help-center'}`}></span>
                    <span className="title-text">{rel.title[language] || rel.title['en']}</span>
                    <ChevronRight size={18} className="arrow-icon" />
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Right Column: Sidebar */}
        <aside className="article-sidebar-design">
          {/* Scrollspy TOC Widget (Rendered only on Academy Articles) */}
          {isAcademy && toc.length > 0 && (
            <div className="sidebar-widget-design glass-panel toc-widget">
              <p className="widget-title" style={{ paddingLeft: '14px' }}>{t('in_this_guide')}</p>
              <nav className="toc-nav-list">
                {toc.map(item => {
                  const active = activeSection === item.id;
                  return (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={(e) => handleTocClick(e, item.id)}
                      className={`toc-link-item ${active ? 'active' : ''}`}
                    >
                      {active && <span className="active-bar"></span>}
                      {item.label}
                    </a>
                  );
                })}
              </nav>
            </div>
          )}

          {/* Funding SLA Card (Rendered only on Deposits/Withdrawals category) */}
          {categorySlug === 'deposits-withdrawals' && (
            <div className="sidebar-info-box-design sla-box">
              <p className="info-title">{t('withdrawal_sla')}</p>
              <div className="sla-sidebar-details">
                <p className="sla-hours">&le; 24 hours</p>
                <p className="sla-subtext">{t('sla_review_desc')}</p>
                <div className="divider-line"></div>
                <p className="sla-description">{t('sla_detail_desc')}</p>
              </div>
            </div>
          )}

          {/* Dispute Custom Sidebar Widgets (System Status + Disclaimer) */}
          {article.slug === 'how-to-report-trade-issue' && (
            <>
              <Link to={localizePath('/help-center/status')} className="sidebar-widget-design glass-panel system-status-widget-teal" style={{ textDecoration: 'none', display: 'block' }}>
                <p className="widget-title">Current system status</p>
                <div className="status-badge-row">
                  <span className="pulse-dot-teal"></span>
                  <span className="status-text-teal">All systems operational</span>
                </div>
              </Link>
              <div className="sidebar-info-box-design dispute-disclaimer-box">
                <p className="info-title">Dispute Policy</p>
                <p className="info-text">
                  All trade investigations are governed by our Customer Agreement. Issues must be reported within 48 hours of execution to ensure matching server logs are active.
                </p>
              </div>
            </>
          )}

          {/* Risk Warning Card (Rendered only on Academy articles) */}
          {isAcademy && (
            <div className="sidebar-info-box-design risk-box">
              <p className="info-title">{t('risk_note')}</p>
              <p className="info-text">{t('risk_note_desc')}</p>
            </div>
          )}

          {/* Was this helpful Feedback Card */}
          <div className="sidebar-widget-design glass-panel feedback-widget">
            {feedback ? (
              <p className="feedback-thanks-message">{t('thanks_feedback')}</p>
            ) : (
              <div>
                <p className="feedback-heading">{t('was_this_helpful')}</p>
                <div className="feedback-buttons-row">
                  <button 
                    onClick={() => handleFeedback('up')}
                    className="feedback-btn-pill yes-btn"
                  >
                    <ThumbsUp size={15} />
                    {t('yes')}
                  </button>
                  <button 
                    onClick={() => handleFeedback('down')}
                    className="feedback-btn-pill no-btn"
                  >
                    <ThumbsDown size={15} />
                    {t('no')}
                  </button>
                </div>
              </div>
            )}
          </div>
        </aside>
      </div>

      {/* FOOTER CTA BAND */}
      <section className="contact-band-design" style={{ marginTop: '40px' }}>
        <div className="meta">
          <h2>{t('still_need_help')}</h2>
          <p>{t('support_subtext')}</p>
        </div>
        <div className="action-buttons">
          <a href="#ticket" className="contact-btn">
            <MessageSquare size={17} />
            {t('contact_support_btn')}
          </a>
          <a href="#status" className="status-btn">
            <span className="pulse-indicator"></span>
            {t('system_status')}
          </a>
        </div>
      </section>
    </div>
  );
}

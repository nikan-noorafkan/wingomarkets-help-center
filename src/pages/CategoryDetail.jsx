import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useData } from '../context/DataContext';
import { Search, ChevronRight, MessageSquare } from 'lucide-react';
import * as Icons from 'lucide-react';

export default function CategoryDetail() {
  const { categorySlug } = useParams();
  const { language, t, localizePath } = useLanguage();
  const { getCategoryBySlug, getArticlesByCategory, loading } = useData();
  const [query, setQuery] = useState('');
  
  if (loading) {
    return (
      <div className="container main-content" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh' }}>
        <div className="loading-spinner-layout" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
          <div className="pulse-dot-teal" style={{ width: '24px', height: '24px' }}></div>
          <span style={{ fontSize: '14px', color: 'var(--text-dim)' }}>Loading category...</span>
        </div>
      </div>
    );
  }

  const category = getCategoryBySlug(categorySlug);
  const articlesList = getArticlesByCategory(categorySlug);

  const renderIcon = (iconName, className) => {
    const IconComponent = Icons[iconName] || Icons.HelpCircle;
    return <IconComponent className={className} size={22} />;
  };

  if (!category) {
    return (
      <div className="container main-content error-page-design">
        <div className="error-card glass-panel">
          <h2>Category Not Found</h2>
          <p>The category you are looking for does not exist or has been moved.</p>
          <Link to={localizePath('/help-center')} className="back-btn-empty">
            {t('back_to_home')}
          </Link>
        </div>
      </div>
    );
  }

  const isAcademy = window.location.pathname.includes('/academy');

  // Filter articles based on query
  const q = query.trim().toLowerCase();
  const filteredArticles = q
    ? articlesList.filter(art => {
        const title = (art.title[language] || art.title['en'] || '').toLowerCase();
        const desc = (art.description[language] || art.description['en'] || '').toLowerCase();
        return title.includes(q) || desc.includes(q);
      })
    : articlesList;

  // Split articles into groups for Deposits & Withdrawals category
  const getGroupedArticles = () => {
    if (categorySlug !== 'deposits-withdrawals') {
      return [{ label: t('view_all_articles'), items: filteredArticles }];
    }
    // Specific groups for deposits & withdrawals
    const deposits = filteredArticles.filter(a => a.slug.includes('deposit') || a.slug.includes('payment'));
    const withdrawals = filteredArticles.filter(a => a.slug.includes('withdraw') || a.slug.includes('aml'));
    const groups = [];
    if (deposits.length > 0) groups.push({ label: 'Deposits', items: deposits });
    if (withdrawals.length > 0) groups.push({ label: 'Withdrawals', items: withdrawals });
    
    // Add any remaining
    const remaining = filteredArticles.filter(a => !deposits.includes(a) && !withdrawals.includes(a));
    if (remaining.length > 0) groups.push({ label: 'General Funding', items: remaining });
    return groups;
  };

  const grouped = getGroupedArticles();

  // Mock payment methods compared data
  const paymentMethods = [
    { name: 'Visa / Mastercard', range: '$10 – $50,000', fee: '0%', time: 'Instant', fastest: true },
    { name: 'Skrill', range: '$10 – $20,000', fee: '0%', time: 'Instant', fastest: true },
    { name: 'Neteller', range: '$10 – $20,000', fee: '0%', time: 'Instant', fastest: false },
    { name: 'Bank wire transfer', range: '$100 – No max', fee: '0%', time: '1–3 business days', fastest: false },
    { name: 'Crypto (USDT)', range: '$10 – No max', fee: 'Network', time: '5–30 minutes', fastest: false }
  ];

  return (
    <div className="container main-content category-detail-page-design">
      {/* Breadcrumbs */}
      <nav className="breadcrumbs-design">
        <Link to={localizePath(isAcademy ? '/academy/trading-basics/what-is-forex' : '/help-center')}>
          {isAcademy ? t('academy') : t('help_center')}
        </Link>
        <ChevronRight size={14} />
        <span>{category.title[language] || category.title['en']}</span>
      </nav>

      {/* Main Grid: Left content, Right sidebar */}
      <div className="category-layout-grid-design">
        <div className="category-left-col">
          {/* Category Header */}
          <div className="category-header-block-design">
            <div className={`icon-badge-category ${category.featured ? 'featured' : ''}`}>
              {renderIcon(category.icon, 'category-header-icon')}
            </div>
            <div className="category-meta-info">
              <h1>{category.title[language] || category.title['en']}</h1>
              <p>{category.description[language] || category.description['en']}</p>
            </div>
          </div>

          {/* Inline Search */}
          <div className="category-search-bar-design">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              placeholder={t('search_category_placeholder')}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>

          {/* Popular Chips */}
          <div className="popular-chips-section-design">
            <p className="chips-label">{t('popular_in_category')}</p>
            <div className="chips-flex">
              {categorySlug === 'incidents-disputes' ? (
                <>
                  <Link to={localizePath('/help-center/incidents-disputes/how-to-report-trade-issue')} className="chip-design">
                    <span className="dot"></span>
                    Report a wrong price fill
                  </Link>
                  <button onClick={() => setQuery('execution slippage')} className="chip-design">
                    <span className="dot"></span>
                    Why did I experience slippage?
                  </button>
                  <button onClick={() => setQuery('outage claim')} className="chip-design">
                    <span className="dot"></span>
                    Platform outages
                  </button>
                </>
              ) : (
                <>
                  <Link to={localizePath('/help-center/deposits-withdrawals/how-to-withdraw-funds')} className="chip-design">
                    <span className="dot"></span>
                    How to withdraw funds
                  </Link>
                  <button onClick={() => setQuery('deposit pending')} className="chip-design">
                    <span className="dot"></span>
                    Why is my deposit pending?
                  </button>
                  <button onClick={() => setQuery('methods')} className="chip-design">
                    <span className="dot"></span>
                    Accepted payment methods
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Funding Comparison Table (Rendered only on Deposits & Withdrawals) */}
          {categorySlug === 'deposits-withdrawals' && !query && (
            <section className="payment-comparison-section">
              <h2>{t('payment_methods_compared')}</h2>
              <div className="comparison-table-wrapper-design">
                <div className="table-header-design">
                  <span>{t('tbl_method')}</span>
                  <span>{t('tbl_min_max')}</span>
                  <span>{t('tbl_fee')}</span>
                  <span>{t('tbl_processing_time')}</span>
                </div>
                <div className="table-body-design">
                  {paymentMethods.map((m, idx) => (
                    <div key={idx} className="table-row-design">
                      <span className="method-name-cell">
                        {m.name}
                        {m.fastest && <span className="fastest-badge-design">{t('badge_fastest')}</span>}
                      </span>
                      <span className="range-cell">{m.range}</span>
                      <span className="fee-cell">{m.fee}</span>
                      <span className="time-cell">{m.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Dispute SLA & Status Card (Rendered only on Incidents & Disputes) */}
          {categorySlug === 'incidents-disputes' && !query && (
            <section className="payment-comparison-section">
              <h2>Dispute Resolution Overview</h2>
              <div className="dispute-overview-card-design glass-panel">
                <div className="overview-header-design">
                  <span className="status-indicator-dot"></span>
                  <h3>WingoMarkets Resolution SLA</h3>
                </div>
                <p className="overview-body-text">
                  We investigate every trade issue report thoroughly against primary liquidity provider feeds and core server timestamp logs. Most platform or execution audits are completed and resolved within 24–48 hours.
                </p>
                <div className="overview-divider-line"></div>
                <div className="status-link-row">
                  <span className="status-label">Current servers status:</span>
                  <Link to={localizePath('/help-center/status')} className="status-link-btn-teal">
                    <span className="pulse-dot-teal-status"></span>
                    All systems operational (view status page)
                  </Link>
                </div>
              </div>
            </section>
          )}

          {/* Grouped Articles List */}
          <div className="articles-groups-section">
            {grouped.length > 0 ? (
              grouped.map((group, gIdx) => (
                <div key={gIdx} className="article-group-block">
                  <p className="group-label-heading">{group.label}</p>
                  <div className="group-articles-list">
                    {group.items.map(art => (
                      <Link
                        key={art.slug}
                        to={localizePath(`/${isAcademy ? 'academy' : 'help-center'}/${categorySlug}/${art.slug}`)}
                        className="article-row-link glass-panel"
                      >
                        <div className="meta">
                          <h3>{art.title[language] || art.title['en']}</h3>
                          <p>{art.description[language] || art.description['en']}</p>
                        </div>
                        <ChevronRight className="arrow-icon" size={20} />
                      </Link>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <div className="search-no-results glass-panel">
                No articles match "{query}". Try a different term or search in another category.
              </div>
            )}
          </div>
        </div>

        {/* Right Sidebar Rail */}
        <aside className="category-sidebar-rail">
          {/* Related categories widget */}
          <div className="sidebar-widget-design glass-panel">
            <p className="widget-title">{t('related_categories')}</p>
            <div className="related-links-flex">
              <Link to={localizePath('/help-center/legal-compliance')} className="related-pill-link">
                KYC &amp; Verification
                <ChevronRight size={16} />
              </Link>
              <Link to={localizePath('/help-center/account-profile')} className="related-pill-link">
                Account &amp; Profile
                <ChevronRight size={16} />
              </Link>
              <Link to={localizePath('/help-center/legal-compliance')} className="related-pill-link">
                Legal &amp; Compliance
                <ChevronRight size={16} />
              </Link>
            </div>
          </div>

          {/* Informational Widget */}
          <div className="sidebar-info-box-design">
            <p className="info-title">{t('processing_times')}</p>
            <p className="info-text">{t('processing_times_desc')}</p>
          </div>
        </aside>
      </div>

      {/* FOOTER CTA BAND */}
      <section className="contact-band-design" style={{ marginTop: '32px' }}>
        <div className="meta">
          <h2>{t('still_need_help')}</h2>
          <p>{t('support_subtext')}</p>
        </div>
        <div className="action-buttons">
          <a href="https://wingomarkets.com/contact-us/" target="_blank" rel="noopener noreferrer" className="contact-btn">
            <MessageSquare size={17} />
            {t('contact_support_btn')}
          </a>
          {language === 'fa' ? (
            <a href="#ai-assistant" onClick={(e) => { e.preventDefault(); window.dispatchEvent(new Event('open-support-widget')); }} className="status-btn">
              <span className="pulse-indicator"></span>
              دستیار هوشمند
            </a>
          ) : (
            <Link to={localizePath('/help-center/status')} className="status-btn">
              <span className="pulse-indicator"></span>
              {t('system_status')}
            </Link>
          )}
        </div>
      </section>
    </div>
  );
}

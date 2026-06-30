import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { useData } from '../context/DataContext';
import { Search, HelpCircle, BookOpen, Activity, ArrowRight, MessageSquare } from 'lucide-react';
import * as Icons from 'lucide-react';

export default function Home() {
  const { language, t, localizePath } = useLanguage();
  const { articles, categories, shortcuts, loading } = useData();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('q') || '';
  const [localSearch, setLocalSearch] = useState(searchQuery);
  const [searchResults, setSearchResults] = useState([]);

  const supportCategories = categories.filter(c => c.pillar === 'help-center');
  const academyCategories = categories.filter(c => c.pillar === 'academy');
  const taskShortcuts = shortcuts;

  // Keep local search value synced with URL params
  useEffect(() => {
    setLocalSearch(searchQuery);
  }, [searchQuery]);

  // Execute search filter
  useEffect(() => {
    if (!searchQuery || articles.length === 0) {
      setSearchResults([]);
      return;
    }

    const query = searchQuery.toLowerCase();
    const filtered = articles.filter(article => {
      const title = (article.title[language] || article.title['en'] || '').toLowerCase();
      const desc = (article.description[language] || article.description['en'] || '').toLowerCase();
      const summary = (article.content[language]?.summary || article.content['en']?.summary || '').toLowerCase();
      return title.includes(query) || desc.includes(query) || summary.includes(query);
    });

    setSearchResults(filtered);

    // Log query search event to backend
    fetch('/api/search-logs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        queryText: searchQuery,
        locale: language,
        resultCount: filtered.length
      })
    }).catch(err => console.error('Error logging search query:', err));
  }, [searchQuery, language, articles]);

  const renderIcon = (iconName, className) => {
    const IconComponent = Icons[iconName] || Icons.HelpCircle;
    return <IconComponent className={className} size={22} />;
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (localSearch.trim()) {
      setSearchParams({ q: localSearch.trim() });
    } else {
      setSearchParams({});
    }
  };

  const handlePopularSearch = (term) => {
    setLocalSearch(term);
    setSearchParams({ q: term });
  };

  if (loading) {
    return (
      <div className="container main-content" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh' }}>
        <div className="loading-spinner-layout" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
          <div className="pulse-dot-teal" style={{ width: '24px', height: '24px' }}></div>
          <span style={{ fontSize: '14px', color: 'var(--text-dim)' }}>Loading help database...</span>
        </div>
      </div>
    );
  }

  // If user searched for something, render search results list matching category-search style
  if (searchQuery) {
    return (
      <div className="container main-content search-results-page-design">
        {/* Breadcrumb */}
        <nav className="breadcrumbs-design">
          <Link to={localizePath('/help-center')}>{t('home')}</Link>
          <Icons.ChevronRight size={14} />
          <span>{t('search_results_for')}</span>
        </nav>

        <div className="results-header-design">
          <h1 className="search-title-design">
            {t('search_results_for')}: <span className="query-text">"{searchQuery}"</span>
          </h1>
          <p className="results-count-design">
            {t('articles_count').replace('{count}', searchResults.length)}
          </p>
        </div>

        {/* Inline Search box on results page */}
        <form onSubmit={handleSearchSubmit} className="search-bar-form-design" style={{ marginBottom: '32px' }}>
          <Search size={18} className="input-search-icon" />
          <input
            type="text"
            placeholder={t('search_placeholder')}
            value={localSearch}
            onChange={(e) => setLocalSearch(e.target.value)}
          />
        </form>

        {searchResults.length > 0 ? (
          <div className="search-results-list-design">
            {searchResults.map(article => (
              <Link 
                key={article.slug}
                to={localizePath(`${article.pillar === 'academy' ? '/academy' : '/help-center'}/${article.categorySlug}/${article.slug}`)}
                className="search-result-card-design glass-panel"
              >
                <div className="card-top">
                  <span className={`pillar-badge-header ${article.pillar === 'academy' ? 'academy-theme' : 'help-center-theme'}`}>
                    {article.pillar === 'academy' ? t('academy') : t('help_center')}
                  </span>
                  <span className="updated-date">{t('last_updated')}: {article.lastUpdated}</span>
                </div>
                <h3>{article.title[language] || article.title['en']}</h3>
                <p>{article.description[language] || article.description['en']}</p>
                <div className="card-footer">
                  <span className="read-time">{article.readTime} {t('minutes_read')}</span>
                  <span className="read-action text-gradient-green">{t('view_article')} &rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="search-empty-state-design glass-panel">
            <Icons.AlertCircle className="empty-icon" size={32} />
            <h3>{t('no_results_found')}</h3>
            <button onClick={() => setSearchParams({})} className="back-btn-empty">
              {t('back_to_home')}
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="container main-content homepage-portal-design">
      {/* 1. HERO SEARCH CONTAINER */}
      <section className="portal-hero-design">
        <p className="hero-tagline">WingoMarkets Support</p>
        <h1 className="hero-title-design">{t('how_can_we_help')}</h1>
        
        <form onSubmit={handleSearchSubmit} className="search-bar-form-design">
          <Search size={20} className="input-search-icon" />
          <input
            type="text"
            placeholder={t('search_placeholder')}
            value={localSearch}
            onChange={(e) => setLocalSearch(e.target.value)}
          />
        </form>

        <div className="popular-tags-list">
          <span className="label">{t('popular')}</span>
          <button onClick={() => handlePopularSearch(t('tag_withdraw'))} className="tag-link">{t('tag_withdraw')}</button>
          <button onClick={() => handlePopularSearch(t('tag_verify'))} className="tag-link">{t('tag_verify')}</button>
          <button onClick={() => handlePopularSearch(t('tag_mt5'))} className="tag-link">{t('tag_mt5')}</button>
        </div>
      </section>

      {/* 2. DUAL PILLARS LAYOUT */}
      <section className="dual-pillars-grid">
        <a href="#browse-support" className="pillar-link-card glass-panel" onClick={(e) => {
          e.preventDefault();
          document.getElementById('browse-support')?.scrollIntoView({ behavior: 'smooth' });
        }}>
          <div className="icon-badge help-center">
            <HelpCircle size={28} />
          </div>
          <div className="meta">
            <h2>{t('help_center')}</h2>
            <p>{t('help_center_desc')}</p>
          </div>
          <ArrowRight className="arrow-icon" size={22} />
        </a>

        <a href="#browse-academy" className="pillar-link-card glass-panel" onClick={(e) => {
          e.preventDefault();
          document.getElementById('browse-academy')?.scrollIntoView({ behavior: 'smooth' });
        }}>
          <div className="icon-badge academy">
            <BookOpen size={28} />
          </div>
          <div className="meta">
            <h2>{t('academy')}</h2>
            <p>{t('academy_desc')}</p>
          </div>
          <ArrowRight className="arrow-icon" size={22} />
        </a>
      </section>

      {/* 3. TASK SHORTCUTS */}
      <section className="shortcuts-section-design">
        <p className="shortcuts-heading">{t('shortcuts')}</p>
        <div className="shortcuts-chips-flex">
          {taskShortcuts.map(shortcut => (
            <Link
              key={shortcut.id}
              to={localizePath(`/help-center/${shortcut.categorySlug}/${shortcut.targetSlug}`)}
              className={`shortcut-chip-design ${shortcut.featured ? 'featured' : ''}`}
            >
              <span className="dot"></span>
              {shortcut.title[language] || shortcut.title['en']}
            </Link>
          ))}
        </div>
      </section>

      {/* 4. SUPPORT TOPICS GRID */}
      <section id="browse-support" className="support-topics-section">
        <div className="section-header-design">
          <h2>{t('browse_support')}</h2>
          <Link to={localizePath('/help-center/account-profile')} className="view-all-link">
            {t('view_all_articles')} &rarr;
          </Link>
        </div>

        <div className="grid-3 topics-grid-design">
          {supportCategories.map(category => (
            <Link
              key={category.id}
              to={localizePath(`/help-center/${category.slug}`)}
              className="topic-card-design glass-panel"
            >
              <div className={`topic-icon-wrapper ${category.featured ? 'featured' : ''}`}>
                {renderIcon(category.icon, 'topic-icon')}
              </div>
              <h3>{category.title[language] || category.title['en']}</h3>
              <p>{category.description[language] || category.description['en']}</p>
              <span className="article-count">
                {t('articles_count').replace('{count}', 
                  category.id === 'account-profile' ? 24 :
                  category.id === 'deposits-withdrawals' ? 31 :
                  category.id === 'platforms-tools' ? 28 :
                  category.id === 'conditions-products' ? 19 :
                  category.id === 'incidents-disputes' ? 12 :
                  category.id === 'legal-compliance' ? 16 :
                  category.id === 'ib-partnership' ? 14 : 11
                )}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* 5. ACADEMY MODULES STRIP */}
      <section id="browse-academy" className="academy-strip-design">
        <div className="section-header-design" style={{ marginBottom: '6px' }}>
          <div className="academy-title-wrapper">
            <span className="academy-hat-icon">
              <Icons.GraduationCap size={18} />
            </span>
            <h2>WingoMarkets {t('academy')}</h2>
          </div>
          <Link to={localizePath('/academy/trading-basics/what-is-forex')} className="view-all-link" style={{ color: 'var(--secondary)' }}>
            {t('explore_courses')} &rarr;
          </Link>
        </div>
        <p className="academy-tagline">{t('academy_tagline')}</p>

        <div className="grid-4 courses-grid-design">
          {academyCategories.map(course => (
            <Link
              key={course.id}
              to={localizePath(`/academy/${course.slug}/${course.id === 'risk-management' ? 'how-to-avoid-stopout' : 'intro-lesson'}`)}
              className="course-card-design glass-panel"
            >
              <div className="course-icon-wrapper">
                {renderIcon(course.icon, 'course-icon')}
              </div>
              <h3>{course.title[language] || course.title['en']}</h3>
              <span className="course-meta">
                {t('lessons_count').replace('{count}', 
                  course.id === 'trading-basics' ? 8 :
                  course.id === 'academy-platforms' ? 6 :
                  course.id === 'risk-management' ? 7 : 9
                ) + ' · ' + (
                  course.id === 'trading-basics' || course.id === 'academy-platforms' ? t('difficulty_beginner') :
                  course.id === 'risk-management' ? t('difficulty_intermediate') : t('difficulty_advanced')
                )}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. CONTACT TICKET BAND */}
      <section className="contact-band-design">
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

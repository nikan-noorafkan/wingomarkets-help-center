import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { useData } from '../context/DataContext';
import { Search, Sun, Moon } from 'lucide-react';

export default function Header() {
  const { language, t, localizePath } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const { articles } = useData();
  const [searchFocused, setSearchFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const searchRef = useRef(null);

  // Close search results popup on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchFocused(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filter search results
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }

    const query = searchQuery.toLowerCase();
    const filtered = articles.filter(article => {
      const title = (article.title[language] || article.title['en'] || '').toLowerCase();
      const desc = (article.description[language] || article.description['en'] || '').toLowerCase();
      return title.includes(query) || desc.includes(query);
    });

    setSearchResults(filtered.slice(0, 5));
  }, [searchQuery, language]);

  // Clean search box on navigation
  useEffect(() => {
    setSearchQuery('');
    setSearchFocused(false);
  }, [location.pathname]);

  const handleLanguageChange = (targetLang) => {
    const parts = location.pathname.split('/');
    const currentLocale = ['fa', 'ar'].includes(parts[1]) ? parts[1] : 'en';

    if (currentLocale === targetLang) return;

    let pathWithoutLocale = location.pathname;
    if (currentLocale !== 'en') {
      pathWithoutLocale = '/' + parts.slice(2).join('/');
    }

    let newPath = pathWithoutLocale;
    if (targetLang !== 'en') {
      newPath = `/${targetLang}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`;
    }

    navigate(newPath);
  };

  const handleArticleClick = (article) => {
    const path = article.pillar === 'academy' 
      ? `/academy/${article.categorySlug}/${article.slug}`
      : `/help-center/${article.categorySlug}/${article.slug}`;
    navigate(localizePath(path));
    setSearchQuery('');
    setSearchFocused(false);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`${localizePath('/help-center')}?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchFocused(false);
    }
  };

  const isAcademyActive = location.pathname.includes('/academy');

  return (
    <header className="header-bar-design">
      {/* Branding and Pillar Badges */}
      <Link to={localizePath('/help-center')} className="logo-area-design">
        <span className="brand-text">Wingo<span className="brand-accent">Markets</span></span>
        <span className={`pillar-badge-header ${isAcademyActive ? 'academy-theme' : 'help-center-theme'}`}>
          {isAcademyActive ? t('academy') : t('help_center')}
        </span>
      </Link>

      {/* Embedded topbar search - hides on Home hub but shows on detail pages */}
      {location.pathname !== localizePath('/help-center') && 
       location.pathname !== localizePath('/help-center/') && (
        <div ref={searchRef} className={`header-search-design ${searchFocused ? 'focused' : ''}`}>
          <form onSubmit={handleSearchSubmit}>
            <Search className="search-icon-design" size={16} />
            <input
              type="text"
              placeholder={t('search_placeholder')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setSearchFocused(true)}
            />
          </form>

          {searchFocused && searchQuery && (
            <div className="search-autocomplete-dropdown-design glass-panel">
              {searchResults.length > 0 ? (
                <div className="autocomplete-results">
                  {searchResults.map(article => (
                    <div 
                      key={article.slug} 
                      className="autocomplete-item"
                      onClick={() => handleArticleClick(article)}
                    >
                      <div className="item-title">{article.title[language] || article.title['en']}</div>
                      <div className="item-snippet">{article.description[language] || article.description['en']}</div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="autocomplete-empty">{t('no_results_found')}</div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Action panel: languages and theme switcher */}
      <div className="header-actions-design">
        <div className="lang-toggle-pills">
          <button 
            className={`lang-pill-btn ${language === 'en' ? 'active' : ''}`}
            onClick={() => handleLanguageChange('en')}
          >
            EN
          </button>
          <button 
            className={`lang-pill-btn ${language === 'fa' ? 'active' : ''}`}
            onClick={() => handleLanguageChange('fa')}
          >
            FA
          </button>
          <button 
            className={`lang-pill-btn ${language === 'ar' ? 'active' : ''}`}
            onClick={() => handleLanguageChange('ar')}
          >
            AR
          </button>
        </div>

        <button onClick={toggleTheme} className="theme-toggle-btn-design">
          {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
          <span>{theme === 'dark' ? t('theme_light') : t('theme_dark')}</span>
        </button>
      </div>
    </header>
  );
}

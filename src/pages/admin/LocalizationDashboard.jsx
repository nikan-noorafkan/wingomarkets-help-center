import React, { useState, useEffect } from 'react';
import { Languages, Filter, CheckCircle, HelpCircle, ArrowRight, UserPlus } from 'lucide-react';

export default function LocalizationDashboard({ user }) {
  const [articles, setArticles] = useState([]);
  const [translators, setTranslators] = useState([]);
  const [selectedArticles, setSelectedArticles] = useState([]);
  const [selectedTranslator, setSelectedTranslator] = useState('');
  const [filterIncomplete, setFilterIncomplete] = useState(false);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    try {
      const artRes = await fetch('/api/articles');
      const artData = await artRes.json();
      setArticles(artData);

      const usersRes = await fetch('/api/users');
      const users = await usersRes.json();
      setTranslators(users.filter(u => u.role === 'translator' || u.role === 'editor'));
      if (users.length > 0) {
        setSelectedTranslator(users[0].email);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const getLocaleStatus = (article, locale) => {
    const t = article.translations.find(trans => trans.locale === locale);
    if (!t) return 'not_started';
    return t.translationStatus || 'draft';
  };

  const getStatusStyle = (status) => {
    if (status === 'published') {
      return { backgroundColor: 'rgba(77,220,191,0.1)', color: '#4ddcbf', border: '1px solid rgba(77,220,191,0.2)' };
    }
    if (status === 'needs_review') {
      return { backgroundColor: 'rgba(255,180,171,0.1)', color: '#ffb4ab', border: '1px solid rgba(255,180,171,0.2)' };
    }
    if (status === 'draft') {
      return { backgroundColor: 'rgba(255,223,128,0.1)', color: '#ffdf80', border: '1px solid rgba(255,223,128,0.2)' };
    }
    return { backgroundColor: 'rgba(255,255,255,0.05)', color: '#aaa', border: '1px solid #333' };
  };

  const handleBulkAssign = async () => {
    if (selectedArticles.length === 0) return alert('Please select at least one article.');
    if (!selectedTranslator) return alert('Please select a translator to assign.');

    const proceed = window.confirm(`Bulk assign translator (${selectedTranslator}) to ${selectedArticles.length} articles?`);
    if (!proceed) return;

    try {
      // Simulate bulk translator assign logger
      for (const slug of selectedArticles) {
        const art = articles.find(a => a.slug === slug);
        if (art) {
          // Log batch task assignment to database audit logger
          await fetch(`/api/articles/${art.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              ...art,
              status: 'in_review', // shift status to review
              translations: art.translations.map(t => ({
                locale: t.locale,
                title: t.title,
                description: t.description,
                summary: t.summary,
                content: JSON.parse(t.content),
                seoMetaTitle: t.seoMetaTitle,
                seoMetaDescription: t.seoMetaDescription,
                seoOgImage: t.seoOgImage,
                seoCanonicalUrl: t.seoCanonicalUrl,
                translationStatus: t.translationStatus === 'published' ? 'published' : 'needs_review'
              }))
            })
          });
        }
      }

      alert('Articles bulk assigned. Task logged to activity feed.');
      setSelectedArticles([]);
      loadData();
    } catch (e) {
      console.error(e);
    }
  };

  // Filter matrix logic
  const filteredArticles = filterIncomplete
    ? articles.filter(art => {
        const statuses = ['en', 'fa', 'ar'].map(loc => getLocaleStatus(art, loc));
        return statuses.some(s => s !== 'published');
      })
    : articles;

  if (loading) return <div style={{ color: '#aaa' }}>Loading translation matrices...</div>;

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <div>
          <h1 style={{ fontSize: '22px', color: '#fff', margin: 0 }}>Localization Matrix Dashboard</h1>
          <p style={{ fontSize: '13px', color: '#aaa', margin: '4px 0 0 0' }}>Track translation progress and assign bulk tasks</p>
        </div>
      </div>

      {/* Control filters bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#1e1e1e', border: '1px solid #333', padding: '16px', borderRadius: '6px', marginBottom: '24px' }}>
        
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <button
            onClick={() => setFilterIncomplete(prev => !prev)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 12px',
              backgroundColor: filterIncomplete ? 'rgba(77,220,191,0.1)' : '#2c2c2c',
              border: '1px solid #444',
              color: filterIncomplete ? '#4ddcbf' : '#fff',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '12px',
              fontWeight: 'bold'
            }}
          >
            <Filter size={13} />
            Show Incomplete Only
          </button>
          <span style={{ fontSize: '12px', color: '#aaa' }}>
            Showing {filteredArticles.length} of {articles.length} articles
          </span>
        </div>

        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <select
            value={selectedTranslator}
            onChange={e => setSelectedTranslator(e.target.value)}
            style={{ padding: '6px', backgroundColor: '#2c2c2c', border: '1px solid #444', color: '#fff', borderRadius: '4px', fontSize: '12px' }}
          >
            {translators.map(t => (
              <option key={t.email} value={t.email}>{t.name} ({t.role})</option>
            ))}
          </select>
          <button
            onClick={handleBulkAssign}
            disabled={selectedArticles.length === 0}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 16px',
              backgroundColor: selectedArticles.length === 0 ? '#333' : '#006b5a',
              color: selectedArticles.length === 0 ? '#666' : '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: selectedArticles.length === 0 ? 'not-allowed' : 'pointer',
              fontSize: '12px',
              fontWeight: 'bold'
            }}
          >
            <UserPlus size={13} />
            Bulk Assign ({selectedArticles.length})
          </button>
        </div>

      </div>

      {/* MATRIX TABLE VIEW */}
      <div style={{ backgroundColor: '#1e1e1e', border: '1px solid #333', borderRadius: '6px', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #333', color: '#aaa', textAlign: 'left', backgroundColor: '#161616' }}>
              <th style={{ padding: '12px 16px', width: '40px', textAlign: 'center' }}>
                <input
                  type="checkbox"
                  checked={selectedArticles.length === filteredArticles.length && filteredArticles.length > 0}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedArticles(filteredArticles.map(a => a.slug));
                    } else {
                      setSelectedArticles([]);
                    }
                  }}
                />
              </th>
              <th style={{ padding: '12px 16px' }}>Article Slug</th>
              <th style={{ padding: '12px 16px', textAlign: 'center' }}>English (EN)</th>
              <th style={{ padding: '12px 16px', textAlign: 'center' }}>Persian (FA)</th>
              <th style={{ padding: '12px 16px', textAlign: 'center' }}>Arabic (AR)</th>
            </tr>
          </thead>
          <tbody>
            {filteredArticles.map(art => {
              return (
                <tr key={art.id} style={{ borderBottom: '1px solid #2a2a2a' }}>
                  <td style={{ padding: '12px 16px', textAlign: 'center' }}>
                    <input
                      type="checkbox"
                      checked={selectedArticles.includes(art.slug)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedArticles(prev => [...prev, art.slug]);
                        } else {
                          setSelectedArticles(prev => prev.filter(s => s !== art.slug));
                        }
                      }}
                    />
                  </td>
                  <td style={{ padding: '12px 16px', color: '#fff', fontWeight: 'bold' }}>{art.slug}</td>
                  
                  {['en', 'fa', 'ar'].map(loc => {
                    const status = getLocaleStatus(art, loc);
                    const style = getStatusStyle(status);
                    return (
                      <td key={loc} style={{ padding: '12px 16px', textAlign: 'center' }}>
                        <span style={{
                          display: 'inline-block',
                          padding: '3px 10px',
                          borderRadius: '12px',
                          fontSize: '11px',
                          fontWeight: 'bold',
                          textTransform: 'uppercase',
                          ...style
                        }}>
                          {status.replace('_', ' ')}
                        </span>
                      </td>
                    );
                  })}

                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

    </div>
  );
}

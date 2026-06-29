import React, { useState, useEffect } from 'react';
import { Globe, RefreshCw, FileText, Settings, AlertTriangle, Link, Save, Plus, Trash2 } from 'lucide-react';

export default function SeoToolkit() {
  const [articles, setArticles] = useState([]);
  const [redirects, setRedirects] = useState([]);
  const [robotsTxt, setRobotsTxt] = useState('');
  const [loading, setLoading] = useState(true);
  
  // Redirect form state
  const [oldSlug, setOldSlug] = useState('');
  const [newSlug, setNewSlug] = useState('');
  
  // Snippet Preview State
  const [selectedArticleId, setSelectedArticleId] = useState('');
  const [activeLocale, setActiveLocale] = useState('en');

  // Scanner Results
  const [scanning, setScanning] = useState(false);
  const [brokenLinks, setBrokenLinks] = useState([]);

  const loadData = async () => {
    try {
      const artRes = await fetch('/api/articles');
      const artData = await artRes.json();
      setArticles(artData);
      if (artData.length > 0) setSelectedArticleId(artData[0].id);

      const redRes = await fetch('/api/seo/redirects');
      const redData = await redRes.json();
      setRedirects(redData);

      const robRes = await fetch('/api/seo/robots');
      const robData = await robRes.json();
      setRobotsTxt(robData.content);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleSaveRobots = async () => {
    try {
      const res = await fetch('/api/seo/robots', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: robotsTxt })
      });
      if (res.ok) {
        alert('robots.txt saved successfully.');
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleAddRedirect = async (e) => {
    e.preventDefault();
    if (!oldSlug.trim() || !newSlug.trim()) return;
    try {
      const res = await fetch('/api/seo/redirects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ oldSlug: oldSlug.trim(), newSlug: newSlug.trim() })
      });
      if (res.ok) {
        setOldSlug('');
        setNewSlug('');
        loadData();
      } else {
        const err = await res.json();
        alert(err.error);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleDeleteRedirect = async (id) => {
    try {
      const res = await fetch(`/api/seo/redirects/${id}`, { method: 'DELETE' });
      if (res.ok) loadData();
    } catch (e) {
      console.error(e);
    }
  };

  // Crawl article bodies for broken internal links
  const handleScanLinks = () => {
    setScanning(true);
    setBrokenLinks([]);
    
    setTimeout(() => {
      const results = [];
      const articleSlugs = new Set(articles.map(a => a.slug));
      
      articles.forEach(art => {
        art.translations.forEach(trans => {
          // Look for slugs in text e.g. "/help-center/category/some-slug"
          const contentStr = trans.content || '';
          const relatedSlugsStr = art.relatedArticleIds || '[]';
          
          // Check relatedSlugs
          const related = JSON.parse(relatedSlugsStr);
          related.forEach(relSlug => {
            if (!articleSlugs.has(relSlug)) {
              results.push({
                sourceSlug: art.slug,
                locale: trans.locale,
                type: 'Related Link Reference',
                brokenTarget: relSlug
              });
            }
          });

          // Check markdown or HTML links in content body text
          const regex = /\/help-center\/[a-zA-Z0-9-]+\/([a-zA-Z0-9-]+)|\/academy\/[a-zA-Z0-9-]+\/([a-zA-Z0-9-]+)/g;
          let match;
          while ((match = regex.exec(contentStr)) !== null) {
            const targetSlug = match[1] || match[2];
            if (targetSlug && !articleSlugs.has(targetSlug)) {
              results.push({
                sourceSlug: art.slug,
                locale: trans.locale,
                type: 'Body text link',
                brokenTarget: targetSlug
              });
            }
          }
        });
      });

      setBrokenLinks(results);
      setScanning(false);
    }, 800);
  };

  const getSERPSnippet = () => {
    const art = articles.find(a => a.id === parseInt(selectedArticleId));
    if (!art) return null;
    const trans = art.translations.find(t => t.locale === activeLocale) || {};
    
    const title = trans.seoMetaTitle || trans.title || '';
    const desc = trans.seoMetaDescription || trans.description || '';
    const canonical = trans.seoCanonicalUrl || `http://localhost:5173/help-center/${art.categoryId}/${art.slug}`;

    return { title, desc, canonical };
  };

  const snippet = getSERPSnippet();

  if (loading) return <div style={{ color: '#aaa' }}>Loading SEO configurations...</div>;

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
      
      {/* LEFT COLUMN: SNIPPET PREVIEW & ROBOTS */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        
        {/* SERP Snippet Preview */}
        <div style={{ backgroundColor: '#1e1e1e', border: '1px solid #333', padding: '24px', borderRadius: '6px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <h2 style={{ fontSize: '16px', color: '#fff', margin: 0 }}>Google SERP Snippet Preview</h2>
            <div style={{ display: 'flex', gap: '8px' }}>
              <select value={selectedArticleId} onChange={e => setSelectedArticleId(e.target.value)} style={{ padding: '4px', backgroundColor: '#2c2c2c', border: '1px solid #444', color: '#fff', borderRadius: '4px', fontSize: '12px' }}>
                {articles.map(a => (
                  <option key={a.id} value={a.id}>{a.slug}</option>
                ))}
              </select>
              <select value={activeLocale} onChange={e => setActiveLocale(e.target.value)} style={{ padding: '4px', backgroundColor: '#2c2c2c', border: '1px solid #444', color: '#fff', borderRadius: '4px', fontSize: '12px' }}>
                <option value="en">EN</option>
                <option value="fa">FA</option>
                <option value="ar">AR</option>
              </select>
            </div>
          </div>

          {snippet ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {/* Google Simulator */}
              <div style={{ backgroundColor: '#fff', color: '#202124', padding: '16px', borderRadius: '8px', border: '1px solid #dadce0', fontFamily: 'arial, sans-serif' }}>
                <div style={{ fontSize: '12px', color: '#202124', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span>WingoMarkets</span>
                  <span style={{ color: '#5f6368' }}>› help-center › {activeLocale}</span>
                </div>
                <h3 style={{ fontSize: '20px', color: '#1a0dab', margin: '0 0 4px 0', fontWeight: 'normal', cursor: 'pointer' }} onMouseOver={e => e.currentTarget.style.textDecoration = 'underline'} onMouseOut={e => e.currentTarget.style.textDecoration = 'none'}>
                  {snippet.title || 'Untitled Article Title'}
                </h3>
                <p style={{ fontSize: '14px', color: '#4d5156', margin: 0, lineHeight: '1.58' }}>
                  {snippet.desc || 'No search result description has been entered. Google will automatically summarize details from the page content instead.'}
                </p>
              </div>

              {/* Warnings */}
              <div style={{ fontSize: '12px', color: '#aaa', marginTop: '8px' }}>
                <div>Title length: <strong style={{ color: snippet.title.length > 60 ? '#ffb4ab' : '#4ddcbf' }}>{snippet.title.length} chars</strong> (Recommend: 50-60)</div>
                <div>Meta description length: <strong style={{ color: snippet.desc.length > 160 ? '#ffb4ab' : '#4ddcbf' }}>{snippet.desc.length} chars</strong> (Recommend: 120-160)</div>
              </div>
            </div>
          ) : (
            <span style={{ fontSize: '13px', color: '#aaa' }}>Select an article to preview.</span>
          )}
        </div>

        {/* robots.txt editor */}
        <div style={{ backgroundColor: '#1e1e1e', border: '1px solid #333', padding: '24px', borderRadius: '6px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <h2 style={{ fontSize: '16px', color: '#fff', margin: 0 }}>Configure robots.txt</h2>
            <button onClick={handleSaveRobots} style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '5px 12px', backgroundColor: '#006b5a', border: 'none', color: '#fff', borderRadius: '3px', cursor: 'pointer', fontSize: '12px', fontWeight: 'bold' }}>
              <Save size={12} />
              Save Settings
            </button>
          </div>
          <textarea
            rows={6}
            value={robotsTxt}
            onChange={e => setRobotsTxt(e.target.value)}
            style={{ width: '100%', padding: '10px', backgroundColor: '#161616', border: '1px solid #444', color: '#fff', borderRadius: '4px', fontFamily: 'monospace', fontSize: '12px', boxSizing: 'border-box' }}
          />
        </div>

      </div>

      {/* RIGHT COLUMN: REDIRECTS & SCANNER */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        
        {/* Redirects manager */}
        <div style={{ backgroundColor: '#1e1e1e', border: '1px solid #333', padding: '24px', borderRadius: '6px' }}>
          <h2 style={{ fontSize: '16px', color: '#fff', margin: '0 0 16px 0', borderBottom: '1px solid #333', paddingBottom: '10px' }}>Url Redirect Manager</h2>
          
          <form onSubmit={handleAddRedirect} style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
            <input type="text" placeholder="Old Slug" required value={oldSlug} onChange={e => setOldSlug(e.target.value)} style={{ flex: 1, padding: '8px', backgroundColor: '#2c2c2c', border: '1px solid #444', color: '#fff', borderRadius: '4px', fontSize: '12px' }} />
            <input type="text" placeholder="New Slug" required value={newSlug} onChange={e => setNewSlug(e.target.value)} style={{ flex: 1, padding: '8px', backgroundColor: '#2c2c2c', border: '1px solid #444', color: '#fff', borderRadius: '4px', fontSize: '12px' }} />
            <button type="submit" style={{ padding: '8px 12px', backgroundColor: '#006b5a', border: 'none', color: '#fff', borderRadius: '4px', cursor: 'pointer', fontSize: '12px', fontWeight: 'bold' }}>
              Add Rule
            </button>
          </form>

          <div style={{ maxHeight: '180px', overflowY: 'auto', backgroundColor: '#161616', borderRadius: '4px', border: '1px solid #333' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #333', color: '#aaa', textAlign: 'left', backgroundColor: '#222' }}>
                  <th style={{ padding: '8px' }}>Old Inbound Slug</th>
                  <th style={{ padding: '8px' }}>Destination Slug</th>
                  <th style={{ padding: '8px', textAlign: 'right' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {redirects.map(rule => (
                  <tr key={rule.id} style={{ borderBottom: '1px solid #222' }}>
                    <td style={{ padding: '8px', color: '#ffb4ab' }}>{rule.oldSlug}</td>
                    <td style={{ padding: '8px', color: '#4ddcbf' }}>{rule.newSlug}</td>
                    <td style={{ padding: '8px', textAlign: 'right' }}>
                      <button onClick={() => handleDeleteRedirect(rule.id)} style={{ backgroundColor: 'transparent', border: 'none', color: '#db4455', cursor: 'pointer' }}>
                        <Trash2 size={12} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Broken links scanner */}
        <div style={{ backgroundColor: '#1e1e1e', border: '1px solid #333', padding: '24px', borderRadius: '6px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <h2 style={{ fontSize: '16px', color: '#fff', margin: 0 }}>Broken Internal Link Scanner</h2>
            <button
              onClick={handleScanLinks}
              disabled={scanning}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 12px',
                backgroundColor: '#2c2c2c',
                border: '1px solid #444',
                color: '#fff',
                borderRadius: '4px',
                fontSize: '12px',
                cursor: 'pointer'
              }}
            >
              {scanning ? 'Scanning...' : 'Crawl Links'}
            </button>
          </div>

          <div style={{ minHeight: '120px', maxHeight: '200px', overflowY: 'auto', backgroundColor: '#161616', borderRadius: '4px', border: '1px solid #333', padding: '10px' }}>
            {scanning ? (
              <span style={{ fontSize: '12px', color: '#aaa' }}>Crawl scanning all articles translations for references...</span>
            ) : brokenLinks.length === 0 ? (
              <span style={{ fontSize: '12px', color: '#4ddcbf' }}>✓ Scan complete: No broken internal links or missing relative slugs found!</span>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {brokenLinks.map((link, idx) => (
                  <div key={idx} style={{
                    padding: '8px',
                    backgroundColor: 'rgba(219,68,85,0.08)',
                    borderLeft: '3px solid #db4455',
                    borderRadius: '4px',
                    fontSize: '11px',
                    lineHeight: '1.4'
                  }}>
                    <strong style={{ color: '#fff' }}>{link.sourceSlug}</strong> ({link.locale.toUpperCase()}) contains broken reference:
                    <div style={{ color: '#ffb4ab', fontWeight: 'bold', marginTop: '2px' }}>
                      {link.type}: "{link.brokenTarget}" (Target not found in active database)
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

      </div>

    </div>
  );
}

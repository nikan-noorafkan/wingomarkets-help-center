import React, { useState, useEffect } from 'react';
import { 
  FileText, Plus, Edit, Trash2, CheckCircle2, AlertTriangle, 
  HelpCircle, Eye, Globe, ChevronRight, Copy, ArrowRight, ShieldCheck
} from 'lucide-react';

export default function ArticleManager({ user }) {
  const [articles, setArticles] = useState([]);
  const [categories, setCategories] = useState([]);
  const [media, setMedia] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Editor Form States
  const [editingArticle, setEditingArticle] = useState(null); // null = list, 'new' = create, object = edit
  const [formSlug, setFormSlug] = useState('');
  const [formCategory, setFormCategory] = useState('');
  const [formPillar, setFormPillar] = useState('help-center');
  const [formTemplate, setFormTemplate] = useState('A');
  const [formRegion, setFormRegion] = useState('global');
  const [formStatus, setFormStatus] = useState('draft');
  const [formRelated, setFormRelated] = useState([]); // Array of slugs
  
  // Localized Translation Editor States
  const [activeLocale, setActiveLocale] = useState('en');
  const [rtlPreview, setRtlPreview] = useState(false);
  const [translations, setTranslations] = useState({
    en: { title: '', description: '', summary: '', content: {}, translationStatus: 'draft', seoMetaTitle: '', seoMetaDescription: '', seoOgImage: '', seoCanonicalUrl: '' },
    fa: { title: '', description: '', summary: '', content: {}, translationStatus: 'draft', seoMetaTitle: '', seoMetaDescription: '', seoOgImage: '', seoCanonicalUrl: '' },
    ar: { title: '', description: '', summary: '', content: {}, translationStatus: 'draft', seoMetaTitle: '', seoMetaDescription: '', seoOgImage: '', seoCanonicalUrl: '' }
  });

  const loadData = async () => {
    try {
      const artRes = await fetch('/api/articles');
      const artData = await artRes.json();
      setArticles(artData);

      const catRes = await fetch('/api/categories');
      const catData = await catRes.json();
      setCategories(catData);

      const mediaRes = await fetch('/api/media');
      const mediaData = await mediaRes.json();
      setMedia(mediaData);
    } catch (e) {
      console.error('Error fetching admin articles data:', e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleEditClick = (article) => {
    setEditingArticle(article);
    setFormSlug(article.slug);
    setFormCategory(article.categoryId);
    setFormPillar(article.pillar);
    setFormTemplate(article.templateType);
    setFormRegion(article.regionVariant || 'global');
    setFormStatus(article.status);
    setFormRelated(JSON.parse(article.relatedArticleIds || '[]'));

    // Map translations back
    const newTrans = {
      en: { title: '', description: '', summary: '', content: {}, translationStatus: 'draft', seoMetaTitle: '', seoMetaDescription: '', seoOgImage: '', seoCanonicalUrl: '' },
      fa: { title: '', description: '', summary: '', content: {}, translationStatus: 'draft', seoMetaTitle: '', seoMetaDescription: '', seoOgImage: '', seoCanonicalUrl: '' },
      ar: { title: '', description: '', summary: '', content: {}, translationStatus: 'draft', seoMetaTitle: '', seoMetaDescription: '', seoOgImage: '', seoCanonicalUrl: '' }
    };

    article.translations.forEach(t => {
      newTrans[t.locale] = {
        title: t.title || '',
        description: t.description || '',
        summary: t.summary || '',
        content: typeof t.content === 'string' ? JSON.parse(t.content) : (t.content || {}),
        translationStatus: t.translationStatus || 'draft',
        seoMetaTitle: t.seoMetaTitle || '',
        seoMetaDescription: t.seoMetaDescription || '',
        seoOgImage: t.seoOgImage || '',
        seoCanonicalUrl: t.seoCanonicalUrl || ''
      };
    });

    setTranslations(newTrans);
    setActiveLocale('en');
  };

  const handleCreateClick = () => {
    setEditingArticle('new');
    setFormSlug('');
    setFormCategory(categories[0]?.id || 'account-profile');
    setFormPillar('help-center');
    setFormTemplate('A');
    setFormRegion('global');
    setFormStatus('draft');
    setFormRelated([]);
    
    // Set initial structures
    const initialTrans = {
      en: { title: '', description: '', summary: '', content: getInitialTemplateContent('A'), translationStatus: 'draft', seoMetaTitle: '', seoMetaDescription: '', seoOgImage: '', seoCanonicalUrl: '' },
      fa: { title: '', description: '', summary: '', content: getInitialTemplateContent('A'), translationStatus: 'draft', seoMetaTitle: '', seoMetaDescription: '', seoOgImage: '', seoCanonicalUrl: '' },
      ar: { title: '', description: '', summary: '', content: getInitialTemplateContent('A'), translationStatus: 'draft', seoMetaTitle: '', seoMetaDescription: '', seoOgImage: '', seoCanonicalUrl: '' }
    };
    setTranslations(initialTrans);
    setActiveLocale('en');
  };

  const getInitialTemplateContent = (template) => {
    if (template === 'A') {
      return { prerequisites: [], steps_web: [], steps_mobile: [], edge_cases: [] };
    }
    if (template === 'B') {
      return { stakes_statement: '', explanation_sections: [], numeric_example: { stat_blocks: [], formula: '', walkthrough_text: '' }, myth_fact_pairs: [] };
    }
    if (template === 'C') {
      return { plain_summary: '', detail_sections: [], regulatory_note_box: '' };
    }
    if (template === 'D') {
      return { urgency_badge_text: '', do_this_first: { cta_text: '', checklist: [] }, evidence_checklist: [], timeline_nodes: [], outcome_cards: [] };
    }
    return {};
  };

  // When changing template type, reinitialize template contents
  const handleTemplateChange = (e) => {
    const temp = e.target.value;
    setFormTemplate(temp);
    setTranslations(prev => {
      const updated = { ...prev };
      ['en', 'fa', 'ar'].forEach(loc => {
        updated[loc].content = getInitialTemplateContent(temp);
      });
      return updated;
    });
  };

  const handleCopyFromEn = () => {
    if (activeLocale === 'en') return;
    setTranslations(prev => ({
      ...prev,
      [activeLocale]: {
        ...prev[activeLocale],
        title: prev.en.title,
        description: prev.en.description,
        summary: prev.en.summary,
        content: JSON.parse(JSON.stringify(prev.en.content)), // deep copy content structure
        seoMetaTitle: prev.en.seoMetaTitle,
        seoMetaDescription: prev.en.seoMetaDescription,
        seoOgImage: prev.en.seoOgImage,
        seoCanonicalUrl: prev.en.seoCanonicalUrl
      }
    }));
  };

  const updateTransField = (loc, field, value) => {
    setTranslations(prev => ({
      ...prev,
      [loc]: {
        ...prev[loc],
        [field]: value
      }
    }));
  };

  const updateContentField = (loc, key, value) => {
    setTranslations(prev => ({
      ...prev,
      [loc]: {
        ...prev[loc],
        content: {
          ...prev[loc].content,
          [key]: value
        }
      }
    }));
  };

  const handleFormSave = async (e) => {
    e.preventDefault();
    
    // Warn if related articles are less than 2
    if (formRelated.length < 2) {
      const proceed = window.confirm('WingoMarkets Style Guide Warning: Articles should have at least 2 related links configured. Save anyway?');
      if (!proceed) return;
    }

    // Map trans objects to backend structure
    const mappedTranslations = Object.keys(translations).map(loc => ({
      locale: loc,
      title: translations[loc].title,
      description: translations[loc].description,
      summary: translations[loc].summary,
      content: translations[loc].content,
      seoMetaTitle: translations[loc].seoMetaTitle,
      seoMetaDescription: translations[loc].seoMetaDescription,
      seoOgImage: translations[loc].seoOgImage,
      seoCanonicalUrl: translations[loc].seoCanonicalUrl,
      translationStatus: translations[loc].translationStatus
    }));

    const payload = {
      slug: formSlug.trim(),
      categoryId: formCategory,
      pillar: formPillar,
      templateType: formTemplate,
      regionVariant: formRegion,
      status: formStatus,
      relatedArticleIds: formRelated,
      complianceRequired: ['C', 'D'].includes(formTemplate),
      translations: mappedTranslations
    };

    try {
      let url = '/api/articles';
      let method = 'POST';
      
      if (editingArticle && editingArticle !== 'new') {
        url = `/api/articles/${editingArticle.id}`;
        method = 'PUT';
      }

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to save article.');
      
      alert('Article saved successfully.');
      setEditingArticle(null);
      loadData();
    } catch (err) {
      alert(err.message);
    }
  };

  const handleComplianceSignoff = async (id) => {
    try {
      const res = await fetch(`/api/articles/${id}/signoff`, { method: 'POST' });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || 'Sign-off failed.');
      }
      alert('Compliance review signed off successfully.');
      loadData();
    } catch (e) {
      alert(e.message);
    }
  };

  const handleForkEu = async (article) => {
    const proceed = window.confirm(`Fork "${article.slug}" as a region-aware EU variant?`);
    if (!proceed) return;
    
    // Prepare EU variant payload
    const forkPayload = {
      slug: `${article.slug}-eu`,
      categoryId: article.categoryId,
      pillar: article.pillar,
      templateType: article.templateType,
      regionVariant: 'eu',
      status: 'draft',
      relatedArticleIds: JSON.parse(article.relatedArticleIds || '[]'),
      complianceRequired: article.complianceRequired,
      translations: article.translations.map(t => ({
        locale: t.locale,
        title: `${t.title} (EU)`,
        description: t.description,
        summary: t.summary,
        content: JSON.parse(t.content),
        seoMetaTitle: t.seoMetaTitle,
        seoMetaDescription: t.seoMetaDescription,
        seoOgImage: t.seoOgImage,
        seoCanonicalUrl: t.seoCanonicalUrl,
        translationStatus: 'draft'
      }))
    };

    try {
      const res = await fetch('/api/articles', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(forkPayload)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Fork failed.');
      alert(`Successfully forked as EU variant draft: ${forkPayload.slug}`);
      loadData();
    } catch (e) {
      alert(e.message);
    }
  };

  const handleDeleteClick = async (id) => {
    if (!window.confirm('Are you sure you want to delete this article? This action is permanent.')) return;
    try {
      const res = await fetch(`/api/articles/${id}`, { method: 'DELETE' });
      if (res.ok) {
        alert('Article deleted successfully.');
        loadData();
      }
    } catch (e) {
      console.error(e);
    }
  };

  if (loading) return <div style={{ color: '#aaa' }}>Loading articles database...</div>;

  return (
    <div>
      {editingArticle === null ? (
        // ----------------------------------------------------
        // LIST VIEW
        // ----------------------------------------------------
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <div>
              <h1 style={{ fontSize: '22px', color: '#fff', margin: 0 }}>Articles Database</h1>
              <p style={{ fontSize: '13px', color: '#aaa', margin: '4px 0 0 0' }}>Manage Help Center and Academy localized knowledgebases</p>
            </div>
            <button
              onClick={handleCreateClick}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 16px',
                backgroundColor: '#006b5a',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              <Plus size={16} />
              Create Article
            </button>
          </div>

          <div style={{ backgroundColor: '#1e1e1e', border: '1px solid #333', borderRadius: '6px', overflow: 'hidden' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #333', color: '#aaa', textAlign: 'left', backgroundColor: '#161616' }}>
                  <th style={{ padding: '12px 16px' }}>Slug</th>
                  <th style={{ padding: '12px 16px' }}>Pillar</th>
                  <th style={{ padding: '12px 16px' }}>Category</th>
                  <th style={{ padding: '12px 16px' }}>Template</th>
                  <th style={{ padding: '12px 16px' }}>Region</th>
                  <th style={{ padding: '12px 16px' }}>Status</th>
                  <th style={{ padding: '12px 16px' }}>Compliance Gate</th>
                  <th style={{ padding: '12px 16px', textAlign: 'right' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {articles.map(art => {
                  const categoryName = categories.find(c => c.id === art.categoryId)?.translations.find(t => t.locale === 'en')?.name || art.categoryId;
                  const isCompliancePending = art.complianceRequired && !art.complianceSignedOffBy;
                  
                  return (
                    <tr key={art.id} style={{ borderBottom: '1px solid #2a2a2a' }}>
                      <td style={{ padding: '12px 16px', color: '#fff', fontWeight: 'bold' }}>{art.slug}</td>
                      <td style={{ padding: '12px 16px', textTransform: 'capitalize' }}>
                        {art.pillar === 'academy' ? 'Academy' : 'Help Center'}
                      </td>
                      <td style={{ padding: '12px 16px' }}>{categoryName}</td>
                      <td style={{ padding: '12px 16px', textAlign: 'center' }}>
                        <span style={{
                          padding: '2px 8px',
                          backgroundColor: '#333',
                          borderRadius: '4px',
                          fontWeight: 'bold',
                          fontSize: '11px'
                        }}>
                          Temp {art.templateType}
                        </span>
                      </td>
                      <td style={{ padding: '12px 16px', textTransform: 'uppercase', fontSize: '11px' }}>
                        {art.regionVariant || 'global'}
                      </td>
                      <td style={{ padding: '12px 16px' }}>
                        <span style={{
                          padding: '3px 8px',
                          backgroundColor: art.status === 'published' ? 'rgba(77,220,191,0.1)' : 'rgba(255,255,255,0.05)',
                          color: art.status === 'published' ? '#4ddcbf' : '#aaa',
                          borderRadius: '12px',
                          fontSize: '11px',
                          fontWeight: 'bold'
                        }}>
                          {art.status}
                        </span>
                      </td>
                      <td style={{ padding: '12px 16px' }}>
                        {art.complianceRequired ? (
                          isCompliancePending ? (
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#ffb4ab' }}>
                              <AlertTriangle size={14} />
                              <span>Pending Sign-off</span>
                              {user?.role === 'compliance_reviewer' && (
                                <button
                                  onClick={() => handleComplianceSignoff(art.id)}
                                  style={{
                                    padding: '2px 6px',
                                    fontSize: '10px',
                                    backgroundColor: '#ba1a1a',
                                    color: '#fff',
                                    border: 'none',
                                    borderRadius: '3px',
                                    cursor: 'pointer'
                                  }}
                                >
                                  Sign off
                                </button>
                              )}
                            </div>
                          ) : (
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#4ddcbf' }}>
                              <ShieldCheck size={14} />
                              <span style={{ fontSize: '11px' }}>Signed by {art.complianceSignedOffBy?.split('@')[0]}</span>
                            </div>
                          )
                        ) : (
                          <span style={{ color: '#666' }}>Not required</span>
                        )}
                      </td>
                      <td style={{ padding: '12px 16px', textAlign: 'right' }}>
                        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
                          <button
                            onClick={() => handleEditClick(art)}
                            style={{
                              padding: '5px 8px',
                              backgroundColor: '#2c2c2c',
                              color: '#fff',
                              border: '1px solid #444',
                              borderRadius: '4px',
                              cursor: 'pointer',
                              display: 'inline-flex',
                              alignItems: 'center'
                            }}
                            title="Edit Article"
                          >
                            <Edit size={13} />
                          </button>
                          
                          {art.regionVariant !== 'eu' && (
                            <button
                              onClick={() => handleForkEu(art)}
                              style={{
                                padding: '5px 8px',
                                backgroundColor: 'rgba(77,220,191,0.08)',
                                color: '#4ddcbf',
                                border: '1px solid rgba(77,220,191,0.2)',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                display: 'inline-flex',
                                alignItems: 'center'
                              }}
                              title="Fork as EU variant"
                            >
                              Fork EU
                            </button>
                          )}

                          {user?.role === 'admin' && (
                            <button
                              onClick={() => handleDeleteClick(art.id)}
                              style={{
                                padding: '5px 8px',
                                backgroundColor: 'rgba(219,68,85,0.08)',
                                color: '#db4455',
                                border: '1px solid rgba(219,68,85,0.2)',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                display: 'inline-flex',
                                alignItems: 'center'
                              }}
                              title="Delete"
                            >
                              <Trash2 size={13} />
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        // ----------------------------------------------------
        // EDIT / CREATE FORM VIEW
        // ----------------------------------------------------
        <form onSubmit={handleFormSave} style={{ maxWidth: '1000px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', borderBottom: '1px solid #333', paddingBottom: '16px' }}>
            <div>
              <h2 style={{ fontSize: '20px', color: '#fff', margin: 0 }}>
                {editingArticle === 'new' ? 'Create New Article' : `Edit Article: ${editingArticle.slug}`}
              </h2>
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                type="button"
                onClick={() => setEditingArticle(null)}
                style={{
                  padding: '10px 16px',
                  backgroundColor: '#2c2c2c',
                  color: '#fff',
                  border: '1px solid #444',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '13px'
                }}
              >
                Cancel
              </button>
              <button
                type="submit"
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#006b5a',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '4px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  fontSize: '13px'
                }}
              >
                Save Article
              </button>
            </div>
          </div>

          {/* Form Grid Config */}
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px', marginBottom: '32px' }}>
            
            {/* Left Box: Locale & Details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              
              {/* Translations Pill tabs */}
              <div style={{ display: 'flex', borderBottom: '1px solid #333', paddingBottom: '8px', gap: '8px' }}>
                {['en', 'fa', 'ar'].map(loc => (
                  <button
                    key={loc}
                    type="button"
                    onClick={() => setActiveLocale(loc)}
                    style={{
                      padding: '8px 16px',
                      border: 'none',
                      backgroundColor: activeLocale === loc ? 'rgba(77,220,191,0.1)' : 'transparent',
                      color: activeLocale === loc ? '#4ddcbf' : '#aaa',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontSize: '13px',
                      fontWeight: 'bold',
                      textTransform: 'uppercase'
                    }}
                  >
                    {loc === 'en' ? 'English' : loc === 'fa' ? 'Persian (FA)' : 'Arabic (AR)'}
                  </button>
                ))}
              </div>

              {/* Copy Utility & RTL Selector */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#1e1e1e', padding: '10px 16px', borderRadius: '4px', border: '1px solid #333' }}>
                <span style={{ fontSize: '12px', color: '#aaa' }}>
                  Editing translation for: <strong style={{ color: '#fff', textTransform: 'uppercase' }}>{activeLocale}</strong>
                </span>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  {activeLocale !== 'en' && (
                    <button
                      type="button"
                      onClick={handleCopyFromEn}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '4px 8px',
                        backgroundColor: '#2c2c2c',
                        border: '1px solid #444',
                        color: '#fff',
                        borderRadius: '3px',
                        fontSize: '11px',
                        cursor: 'pointer'
                      }}
                    >
                      <Copy size={11} />
                      Copy from EN
                    </button>
                  )}
                  {['fa', 'ar'].includes(activeLocale) && (
                    <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: '#aaa', cursor: 'pointer' }}>
                      <input
                        type="checkbox"
                        checked={rtlPreview}
                        onChange={e => setRtlPreview(e.target.checked)}
                      />
                      RTL View
                    </label>
                  )}
                </div>
              </div>

              {/* Localized inputs */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', dir: rtlPreview && ['fa', 'ar'].includes(activeLocale) ? 'rtl' : 'ltr' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '12px', color: '#aaa' }}>Title</label>
                  <input
                    type="text"
                    required
                    value={translations[activeLocale].title}
                    onChange={e => updateTransField(activeLocale, 'title', e.target.value)}
                    style={{
                      padding: '10px',
                      backgroundColor: '#2c2c2c',
                      border: '1px solid #444',
                      color: '#fff',
                      borderRadius: '4px',
                      outline: 'none',
                      direction: rtlPreview && ['fa', 'ar'].includes(activeLocale) ? 'rtl' : 'ltr'
                    }}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '12px', color: '#aaa' }}>Description (Summary / Hook)</label>
                  <textarea
                    rows={2}
                    value={translations[activeLocale].description}
                    onChange={e => updateTransField(activeLocale, 'description', e.target.value)}
                    style={{
                      padding: '10px',
                      backgroundColor: '#2c2c2c',
                      border: '1px solid #444',
                      color: '#fff',
                      borderRadius: '4px',
                      outline: 'none',
                      direction: rtlPreview && ['fa', 'ar'].includes(activeLocale) ? 'rtl' : 'ltr'
                    }}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '12px', color: '#aaa' }}>Detailed Summary Band</label>
                  <textarea
                    rows={3}
                    value={translations[activeLocale].summary}
                    onChange={e => updateTransField(activeLocale, 'summary', e.target.value)}
                    style={{
                      padding: '10px',
                      backgroundColor: '#2c2c2c',
                      border: '1px solid #444',
                      color: '#fff',
                      borderRadius: '4px',
                      outline: 'none',
                      direction: rtlPreview && ['fa', 'ar'].includes(activeLocale) ? 'rtl' : 'ltr'
                    }}
                  />
                </div>

                <div style={{ display: 'flex', gap: '16px' }}>
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label style={{ fontSize: '12px', color: '#aaa' }}>Translation Status</label>
                    <select
                      value={translations[activeLocale].translationStatus}
                      onChange={e => updateTransField(activeLocale, 'translationStatus', e.target.value)}
                      style={{
                        padding: '10px',
                        backgroundColor: '#2c2c2c',
                        border: '1px solid #444',
                        color: '#fff',
                        borderRadius: '4px'
                      }}
                    >
                      <option value="not_started">Not Started</option>
                      <option value="draft">Draft</option>
                      <option value="needs_review">Needs Review</option>
                      <option value="published">Published</option>
                    </select>
                  </div>
                </div>

                {/* TEMPLATE AWARE STRUCTURED FORM ELEMENT BUILDERS */}
                <div style={{ borderTop: '1px solid #333', marginTop: '16px', paddingTop: '16px' }}>
                  <h3 style={{ fontSize: '15px', color: '#fff', marginBottom: '16px' }}>Template Body Structure (Form Config {formTemplate})</h3>

                  {formTemplate === 'A' && (
                    <TemplateAForm
                      content={translations[activeLocale].content}
                      onChange={(updatedContent) => updateTransField(activeLocale, 'content', updatedContent)}
                      media={media}
                    />
                  )}

                  {formTemplate === 'B' && (
                    <TemplateBForm
                      content={translations[activeLocale].content}
                      onChange={(updatedContent) => updateTransField(activeLocale, 'content', updatedContent)}
                    />
                  )}

                  {formTemplate === 'C' && (
                    <TemplateCForm
                      content={translations[activeLocale].content}
                      onChange={(updatedContent) => updateTransField(activeLocale, 'content', updatedContent)}
                    />
                  )}

                  {formTemplate === 'D' && (
                    <TemplateDForm
                      content={translations[activeLocale].content}
                      onChange={(updatedContent) => updateTransField(activeLocale, 'content', updatedContent)}
                    />
                  )}
                </div>

              </div>

            </div>

            {/* Right Box: Settings */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              
              <div style={{ backgroundColor: '#1e1e1e', border: '1px solid #333', borderRadius: '6px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <h3 style={{ fontSize: '14px', color: '#fff', margin: 0, borderBottom: '1px solid #333', paddingBottom: '10px' }}>Config</h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '11px', color: '#aaa' }}>URL Slug (No slash)</label>
                  <input
                    type="text"
                    required
                    value={formSlug}
                    onChange={e => setFormSlug(e.target.value)}
                    style={{
                      padding: '10px',
                      backgroundColor: '#2c2c2c',
                      border: '1px solid #444',
                      color: '#fff',
                      borderRadius: '4px',
                      outline: 'none'
                    }}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '11px', color: '#aaa' }}>Category ID</label>
                  <select
                    value={formCategory}
                    onChange={e => setFormCategory(e.target.value)}
                    style={{
                      padding: '10px',
                      backgroundColor: '#2c2c2c',
                      border: '1px solid #444',
                      color: '#fff',
                      borderRadius: '4px'
                    }}
                  >
                    {categories.map(c => (
                      <option key={c.id} value={c.id}>
                        {c.translations.find(t => t.locale === 'en')?.name || c.id} ({c.pillar})
                      </option>
                    ))}
                  </select>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '11px', color: '#aaa' }}>Publishing Pillar</label>
                  <select
                    value={formPillar}
                    onChange={e => setFormPillar(e.target.value)}
                    style={{
                      padding: '10px',
                      backgroundColor: '#2c2c2c',
                      border: '1px solid #444',
                      color: '#fff',
                      borderRadius: '4px'
                    }}
                  >
                    <option value="help-center">Help Center</option>
                    <option value="academy">Academy</option>
                  </select>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '11px', color: '#aaa' }}>Rendering Template Type</label>
                  <select
                    value={formTemplate}
                    onChange={handleTemplateChange}
                    style={{
                      padding: '10px',
                      backgroundColor: '#2c2c2c',
                      border: '1px solid #444',
                      color: '#fff',
                      borderRadius: '4px'
                    }}
                  >
                    <option value="A">Template A (Transactional how-to)</option>
                    <option value="B">Template B (Worked calculations & myths)</option>
                    <option value="C">Template C (Regulatory/Legal summaries)</option>
                    <option value="D">Template D (Disputes & Incidents checklists)</option>
                  </select>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '11px', color: '#aaa' }}>Regional Variant</label>
                  <select
                    value={formRegion}
                    onChange={e => setFormRegion(e.target.value)}
                    style={{
                      padding: '10px',
                      backgroundColor: '#2c2c2c',
                      border: '1px solid #444',
                      color: '#fff',
                      borderRadius: '4px'
                    }}
                  >
                    <option value="global">Global (Default)</option>
                    <option value="eu">EU Specific</option>
                  </select>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '11px', color: '#aaa' }}>Publication Status</label>
                  <select
                    value={formStatus}
                    onChange={e => setFormStatus(e.target.value)}
                    style={{
                      padding: '10px',
                      backgroundColor: '#2c2c2c',
                      border: '1px solid #444',
                      color: '#fff',
                      borderRadius: '4px'
                    }}
                  >
                    <option value="draft">Draft</option>
                    <option value="in_review">In Review</option>
                    <option value="published">Published</option>
                    <option value="archived">Archived</option>
                  </select>
                </div>
              </div>

              {/* Related articles picker */}
              <div style={{ backgroundColor: '#1e1e1e', border: '1px solid #333', borderRadius: '6px', padding: '20px' }}>
                <h3 style={{ fontSize: '14px', color: '#fff', margin: '0 0 12px 0', borderBottom: '1px solid #333', paddingBottom: '10px' }}>
                  Related Articles
                </h3>
                <div style={{ maxHeight: '180px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {articles
                    .filter(a => a.slug !== formSlug)
                    .map(art => {
                      const isChecked = formRelated.includes(art.slug);
                      return (
                        <label key={art.id} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: '#aaa', cursor: 'pointer' }}>
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setFormRelated(prev => [...prev, art.slug]);
                              } else {
                                setFormRelated(prev => prev.filter(s => s !== art.slug));
                              }
                            }}
                          />
                          <span>{art.slug}</span>
                        </label>
                      );
                    })}
                </div>
                <div style={{ fontSize: '11px', color: formRelated.length < 2 ? '#ffb4ab' : '#aaa', marginTop: '12px' }}>
                  {formRelated.length < 2 ? '⚠️ Configure at least 2 related articles.' : '✓ Related article count satisfies style rules.'}
                </div>
              </div>

              {/* SEO Subform */}
              <div style={{ backgroundColor: '#1e1e1e', border: '1px solid #333', borderRadius: '6px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <h3 style={{ fontSize: '14px', color: '#fff', margin: 0, borderBottom: '1px solid #333', paddingBottom: '10px' }}>SEO Attributes</h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '11px', color: '#aaa' }}>Meta Title</label>
                  <input
                    type="text"
                    value={translations[activeLocale].seoMetaTitle}
                    onChange={e => updateTransField(activeLocale, 'seoMetaTitle', e.target.value)}
                    style={{ padding: '8px', backgroundColor: '#2c2c2c', border: '1px solid #444', color: '#fff', borderRadius: '4px', fontSize: '12px' }}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '11px', color: '#aaa' }}>Meta Description</label>
                  <textarea
                    rows={2}
                    value={translations[activeLocale].seoMetaDescription}
                    onChange={e => updateTransField(activeLocale, 'seoMetaDescription', e.target.value)}
                    style={{ padding: '8px', backgroundColor: '#2c2c2c', border: '1px solid #444', color: '#fff', borderRadius: '4px', fontSize: '12px' }}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '11px', color: '#aaa' }}>Canonical URL</label>
                  <input
                    type="text"
                    placeholder="https://..."
                    value={translations[activeLocale].seoCanonicalUrl}
                    onChange={e => updateTransField(activeLocale, 'seoCanonicalUrl', e.target.value)}
                    style={{ padding: '8px', backgroundColor: '#2c2c2c', border: '1px solid #444', color: '#fff', borderRadius: '4px', fontSize: '12px' }}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '11px', color: '#aaa' }}>OG Image Override URL</label>
                  <input
                    type="text"
                    placeholder="/uploads/image.png"
                    value={translations[activeLocale].seoOgImage}
                    onChange={e => updateTransField(activeLocale, 'seoOgImage', e.target.value)}
                    style={{ padding: '8px', backgroundColor: '#2c2c2c', border: '1px solid #444', color: '#fff', borderRadius: '4px', fontSize: '12px' }}
                  />
                </div>
              </div>

            </div>

          </div>
        </form>
      )}
    </div>
  );
}

// ----------------------------------------------------------------------
// SUB-FORM BUILDER COMPONENTS PER SPECIFIC ARTICLES TEMPLATE TYPES
// ----------------------------------------------------------------------

function TemplateAForm({ content = {}, onChange, media = [] }) {
  const prerequisites = content.prerequisites || [];
  const stepsWeb = content.steps_web || [];
  const stepsMobile = content.steps_mobile || [];
  const edgeCases = content.edge_cases || [];

  const handlePrereqChange = (idx, val) => {
    const arr = [...prerequisites];
    arr[idx] = val;
    onChange({ ...content, prerequisites: arr });
  };

  const addPrereq = () => {
    onChange({ ...content, prerequisites: [...prerequisites, ''] });
  };

  const removePrereq = (idx) => {
    onChange({ ...content, prerequisites: prerequisites.filter((_, i) => i !== idx) });
  };

  // Structured procedural step card editor
  const handleStepChange = (channel, idx, field, val) => {
    const arr = channel === 'web' ? [...stepsWeb] : [...stepsMobile];
    
    // Ensure step structure is object
    if (typeof arr[idx] === 'string') {
      arr[idx] = { number: idx + 1, title: `Step ${idx + 1}`, body: arr[idx], image_id: '' };
    }
    
    arr[idx] = {
      ...arr[idx],
      [field]: val
    };

    if (channel === 'web') {
      onChange({ ...content, steps_web: arr });
    } else {
      onChange({ ...content, steps_mobile: arr });
    }
  };

  const addStep = (channel) => {
    const arr = channel === 'web' ? [...stepsWeb] : [...stepsMobile];
    arr.push({ number: arr.length + 1, title: '', body: '', image_id: '' });
    if (channel === 'web') {
      onChange({ ...content, steps_web: arr });
    } else {
      onChange({ ...content, steps_mobile: arr });
    }
  };

  const removeStep = (channel, idx) => {
    const arr = channel === 'web' ? [...stepsWeb] : [...stepsMobile];
    const filtered = arr.filter((_, i) => i !== idx).map((s, i) => ({ ...s, number: i + 1 }));
    if (channel === 'web') {
      onChange({ ...content, steps_web: filtered });
    } else {
      onChange({ ...content, steps_mobile: filtered });
    }
  };

  const handleEdgeCaseChange = (idx, field, val) => {
    const arr = [...edgeCases];
    arr[idx] = { ...arr[idx], [field]: val };
    onChange({ ...content, edge_cases: arr });
  };

  const addEdgeCase = () => {
    onChange({ ...content, edge_cases: [...edgeCases, { title: '', text: '' }] });
  };

  const removeEdgeCase = (idx) => {
    onChange({ ...content, edge_cases: edgeCases.filter((_, i) => i !== idx) });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      
      {/* 1. Prerequisites */}
      <div style={{ backgroundColor: '#1e1e1e', padding: '16px', borderRadius: '4px', border: '1px solid #333' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
          <h4 style={{ fontSize: '13px', color: '#fff', margin: 0 }}>Prerequisites</h4>
          <button type="button" onClick={addPrereq} style={{ padding: '3px 8px', fontSize: '11px', backgroundColor: '#006b5a', border: 'none', color: '#fff', borderRadius: '3px', cursor: 'pointer' }}>
            + Add Line
          </button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {prerequisites.map((pr, idx) => (
            <div key={idx} style={{ display: 'flex', gap: '8px' }}>
              <input
                type="text"
                value={pr}
                onChange={e => handlePrereqChange(idx, e.target.value)}
                style={{ flex: 1, padding: '8px', backgroundColor: '#2c2c2c', border: '1px solid #444', color: '#fff', borderRadius: '4px', fontSize: '12px' }}
              />
              <button type="button" onClick={() => removePrereq(idx)} style={{ padding: '8px', backgroundColor: 'rgba(219,68,85,0.1)', color: '#db4455', border: '1px solid rgba(219,68,85,0.2)', borderRadius: '4px', cursor: 'pointer' }}>
                X
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Web Steps */}
      <div style={{ backgroundColor: '#1e1e1e', padding: '16px', borderRadius: '4px', border: '1px solid #333' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
          <h4 style={{ fontSize: '13px', color: '#fff', margin: 0 }}>Web Steps / Sub-procedures</h4>
          <button type="button" onClick={() => addStep('web')} style={{ padding: '3px 8px', fontSize: '11px', backgroundColor: '#006b5a', border: 'none', color: '#fff', borderRadius: '3px', cursor: 'pointer' }}>
            + Add Step
          </button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {stepsWeb.map((step, idx) => {
            const stepObj = typeof step === 'string' ? { number: idx + 1, title: '', body: step, image_id: '' } : step;
            return (
              <div key={idx} style={{ padding: '12px', backgroundColor: '#161616', borderRadius: '4px', border: '1px solid #333', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <strong style={{ fontSize: '12px', color: '#4ddcbf' }}>Step {stepObj.number}</strong>
                  <button type="button" onClick={() => removeStep('web', idx)} style={{ padding: '2px 6px', fontSize: '10px', backgroundColor: '#db4455', color: '#fff', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>
                    Remove
                  </button>
                </div>
                <input
                  type="text"
                  placeholder="Step title"
                  value={stepObj.title || ''}
                  onChange={e => handleStepChange('web', idx, 'title', e.target.value)}
                  style={{ padding: '8px', backgroundColor: '#2c2c2c', border: '1px solid #444', color: '#fff', borderRadius: '4px', fontSize: '12px' }}
                />
                <textarea
                  rows={2}
                  placeholder="Step procedural content"
                  value={stepObj.body || ''}
                  onChange={e => handleStepChange('web', idx, 'body', e.target.value)}
                  style={{ padding: '8px', backgroundColor: '#2c2c2c', border: '1px solid #444', color: '#fff', borderRadius: '4px', fontSize: '12px' }}
                />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <label style={{ fontSize: '11px', color: '#aaa' }}>Assign Screen Mockup (Media Asset)</label>
                  <select
                    value={stepObj.image_id || ''}
                    onChange={e => handleStepChange('web', idx, 'image_id', e.target.value)}
                    style={{ padding: '8px', backgroundColor: '#2c2c2c', border: '1px solid #444', color: '#fff', borderRadius: '4px', fontSize: '12px' }}
                  >
                    <option value="">No Mockup Image Attached</option>
                    {media.map(m => (
                      <option key={m.id} value={m.url}>{m.filename}</option>
                    ))}
                  </select>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. Mobile Steps */}
      <div style={{ backgroundColor: '#1e1e1e', padding: '16px', borderRadius: '4px', border: '1px solid #333' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
          <h4 style={{ fontSize: '13px', color: '#fff', margin: 0 }}>Mobile Steps / Sub-procedures</h4>
          <button type="button" onClick={() => addStep('mobile')} style={{ padding: '3px 8px', fontSize: '11px', backgroundColor: '#006b5a', border: 'none', color: '#fff', borderRadius: '3px', cursor: 'pointer' }}>
            + Add Step
          </button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {stepsMobile.map((step, idx) => {
            const stepObj = typeof step === 'string' ? { number: idx + 1, title: '', body: step, image_id: '' } : step;
            return (
              <div key={idx} style={{ padding: '12px', backgroundColor: '#161616', borderRadius: '4px', border: '1px solid #333', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <strong style={{ fontSize: '12px', color: '#4ddcbf' }}>Step {stepObj.number}</strong>
                  <button type="button" onClick={() => removeStep('mobile', idx)} style={{ padding: '2px 6px', fontSize: '10px', backgroundColor: '#db4455', color: '#fff', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>
                    Remove
                  </button>
                </div>
                <input
                  type="text"
                  placeholder="Step title"
                  value={stepObj.title || ''}
                  onChange={e => handleStepChange('mobile', idx, 'title', e.target.value)}
                  style={{ padding: '8px', backgroundColor: '#2c2c2c', border: '1px solid #444', color: '#fff', borderRadius: '4px', fontSize: '12px' }}
                />
                <textarea
                  rows={2}
                  placeholder="Step procedural content"
                  value={stepObj.body || ''}
                  onChange={e => handleStepChange('mobile', idx, 'body', e.target.value)}
                  style={{ padding: '8px', backgroundColor: '#2c2c2c', border: '1px solid #444', color: '#fff', borderRadius: '4px', fontSize: '12px' }}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* 4. Edge Cases */}
      <div style={{ backgroundColor: '#1e1e1e', padding: '16px', borderRadius: '4px', border: '1px solid #333' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
          <h4 style={{ fontSize: '13px', color: '#fff', margin: 0 }}>Edge Cases & Troubleshooting</h4>
          <button type="button" onClick={addEdgeCase} style={{ padding: '3px 8px', fontSize: '11px', backgroundColor: '#006b5a', border: 'none', color: '#fff', borderRadius: '3px', cursor: 'pointer' }}>
            + Add Case
          </button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {edgeCases.map((ec, idx) => (
            <div key={idx} style={{ padding: '12px', backgroundColor: '#161616', borderRadius: '4px', border: '1px solid #333', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '12px', color: '#aaa' }}>Case #{idx + 1}</span>
                <button type="button" onClick={() => removeEdgeCase(idx)} style={{ padding: '2px 6px', fontSize: '10px', backgroundColor: '#db4455', color: '#fff', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>
                  Remove
                </button>
              </div>
              <input
                type="text"
                placeholder="Case problem / question title"
                value={ec.title}
                onChange={e => handleEdgeCaseChange(idx, 'title', e.target.value)}
                style={{ padding: '8px', backgroundColor: '#2c2c2c', border: '1px solid #444', color: '#fff', borderRadius: '4px', fontSize: '12px' }}
              />
              <textarea
                rows={2}
                placeholder="Diagnostic answer / solution"
                value={ec.text}
                onChange={e => handleEdgeCaseChange(idx, 'text', e.target.value)}
                style={{ padding: '8px', backgroundColor: '#2c2c2c', border: '1px solid #444', color: '#fff', borderRadius: '4px', fontSize: '12px' }}
              />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

function TemplateBForm({ content = {}, onChange }) {
  const explanationSections = content.explanation_sections || [];
  const mythFactPairs = content.myth_fact_pairs || [];
  const numEx = content.numeric_example || { stat_blocks: [], formula: '', walkthrough_text: '' };
  const statBlocks = numEx.stat_blocks || [];

  const handleSectionChange = (idx, field, val) => {
    const arr = [...explanationSections];
    arr[idx] = { ...arr[idx], [field]: val };
    onChange({ ...content, explanation_sections: arr });
  };

  const handleMythChange = (idx, field, val) => {
    const arr = [...mythFactPairs];
    arr[idx] = { ...arr[idx], [field]: val };
    onChange({ ...content, myth_fact_pairs: arr });
  };

  const handleStatChange = (idx, field, val) => {
    const arr = [...statBlocks];
    arr[idx] = { ...arr[idx], [field]: val };
    onChange({
      ...content,
      numeric_example: { ...numEx, stat_blocks: arr }
    });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <label style={{ fontSize: '12px', color: '#aaa' }}>Stakes Callout Statement</label>
        <textarea
          rows={2}
          value={content.stakes_statement || ''}
          onChange={e => onChange({ ...content, stakes_statement: e.target.value })}
          style={{ padding: '8px', backgroundColor: '#2c2c2c', border: '1px solid #444', color: '#fff', borderRadius: '4px', fontSize: '12px' }}
        />
      </div>

      {/* Explanation Sections */}
      <div style={{ backgroundColor: '#1e1e1e', padding: '16px', borderRadius: '4px', border: '1px solid #333' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
          <h4 style={{ fontSize: '13px', color: '#fff', margin: 0 }}>Core Explanations</h4>
          <button type="button" onClick={() => onChange({ ...content, explanation_sections: [...explanationSections, { title: '', body: '' }] })} style={{ padding: '3px 8px', fontSize: '11px', backgroundColor: '#006b5a', border: 'none', color: '#fff', borderRadius: '3px', cursor: 'pointer' }}>
            + Add Section
          </button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {explanationSections.map((sec, idx) => (
            <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '6px', padding: '10px', backgroundColor: '#161616', borderRadius: '4px' }}>
              <input
                type="text"
                placeholder="Section Title"
                value={sec.title}
                onChange={e => handleSectionChange(idx, 'title', e.target.value)}
                style={{ padding: '8px', backgroundColor: '#2c2c2c', border: '1px solid #444', color: '#fff', borderRadius: '4px', fontSize: '12px' }}
              />
              <textarea
                rows={2}
                placeholder="Section Body"
                value={sec.body}
                onChange={e => handleSectionChange(idx, 'body', e.target.value)}
                style={{ padding: '8px', backgroundColor: '#2c2c2c', border: '1px solid #444', color: '#fff', borderRadius: '4px', fontSize: '12px' }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Numeric calculations */}
      <div style={{ backgroundColor: '#1e1e1e', padding: '16px', borderRadius: '4px', border: '1px solid #333', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <h4 style={{ fontSize: '13px', color: '#fff', margin: 0 }}>Worked Calculation Calculator Cards</h4>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <label style={{ fontSize: '11px', color: '#aaa' }}>Formula Code/String</label>
          <input
            type="text"
            placeholder="e.g. Stop-out Level = Equity / Used Margin * 100%"
            value={numEx.formula || ''}
            onChange={e => onChange({ ...content, numeric_example: { ...numEx, formula: e.target.value } })}
            style={{ padding: '8px', backgroundColor: '#2c2c2c', border: '1px solid #444', color: '#fff', borderRadius: '4px', fontSize: '12px' }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <label style={{ fontSize: '11px', color: '#aaa' }}>Walkthrough Explanation Text</label>
          <textarea
            rows={2}
            value={numEx.walkthrough_text || ''}
            onChange={e => onChange({ ...content, numeric_example: { ...numEx, walkthrough_text: e.target.value } })}
            style={{ padding: '8px', backgroundColor: '#2c2c2c', border: '1px solid #444', color: '#fff', borderRadius: '4px', fontSize: '12px' }}
          />
        </div>

        {/* Stat Blocks */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <label style={{ fontSize: '11px', color: '#aaa' }}>Stat Block Cards (Metrics)</label>
            <button type="button" onClick={() => {
              const arr = [...statBlocks, { label: '', value: '', subtext: '' }];
              onChange({ ...content, numeric_example: { ...numEx, stat_blocks: arr } });
            }} style={{ padding: '2px 6px', fontSize: '10px', backgroundColor: '#2c2c2c', color: '#fff', border: '1px solid #444', borderRadius: '3px', cursor: 'pointer' }}>
              + Add Card
            </button>
          </div>
          {statBlocks.map((st, idx) => (
            <div key={idx} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px', backgroundColor: '#161616', padding: '6px', borderRadius: '4px' }}>
              <input
                type="text"
                placeholder="Label"
                value={st.label}
                onChange={e => handleStatChange(idx, 'label', e.target.value)}
                style={{ padding: '6px', backgroundColor: '#2c2c2c', border: '1px solid #444', color: '#fff', borderRadius: '4px', fontSize: '11px' }}
              />
              <input
                type="text"
                placeholder="Value"
                value={st.value}
                onChange={e => handleStatChange(idx, 'value', e.target.value)}
                style={{ padding: '6px', backgroundColor: '#2c2c2c', border: '1px solid #444', color: '#fff', borderRadius: '4px', fontSize: '11px' }}
              />
              <input
                type="text"
                placeholder="Subtext"
                value={st.subtext}
                onChange={e => handleStatChange(idx, 'subtext', e.target.value)}
                style={{ padding: '6px', backgroundColor: '#2c2c2c', border: '1px solid #444', color: '#fff', borderRadius: '4px', fontSize: '11px' }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Myths & Facts */}
      <div style={{ backgroundColor: '#1e1e1e', padding: '16px', borderRadius: '4px', border: '1px solid #333' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
          <h4 style={{ fontSize: '13px', color: '#fff', margin: 0 }}>Myth vs Fact Deck</h4>
          <button type="button" onClick={() => onChange({ ...content, myth_fact_pairs: [...mythFactPairs, { myth: '', fact: '' }] })} style={{ padding: '3px 8px', fontSize: '11px', backgroundColor: '#006b5a', border: 'none', color: '#fff', borderRadius: '3px', cursor: 'pointer' }}>
            + Add Pair
          </button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {mythFactPairs.map((pair, idx) => (
            <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '6px', padding: '10px', backgroundColor: '#161616', borderRadius: '4px' }}>
              <input
                type="text"
                placeholder="Common Myth"
                value={pair.myth}
                onChange={e => handleMythChange(idx, 'myth', e.target.value)}
                style={{ padding: '8px', backgroundColor: '#2c2c2c', border: '1px solid #444', color: '#fff', borderRadius: '4px', fontSize: '12px' }}
              />
              <textarea
                rows={2}
                placeholder="Objective Fact"
                value={pair.fact}
                onChange={e => handleMythChange(idx, 'fact', e.target.value)}
                style={{ padding: '8px', backgroundColor: '#2c2c2c', border: '1px solid #444', color: '#fff', borderRadius: '4px', fontSize: '12px' }}
              />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

function TemplateCForm({ content = {}, onChange }) {
  const detailSections = content.detail_sections || [];

  const handleSectionChange = (idx, field, val) => {
    const arr = [...detailSections];
    arr[idx] = { ...arr[idx], [field]: val };
    onChange({ ...content, detail_sections: arr });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <label style={{ fontSize: '12px', color: '#aaa' }}>Plain Language Summary Box</label>
        <textarea
          rows={3}
          value={content.plain_summary || ''}
          onChange={e => onChange({ ...content, plain_summary: e.target.value })}
          style={{ padding: '8px', backgroundColor: '#2c2c2c', border: '1px solid #444', color: '#fff', borderRadius: '4px', fontSize: '12px' }}
        />
      </div>

      {/* Detail Sections */}
      <div style={{ backgroundColor: '#1e1e1e', padding: '16px', borderRadius: '4px', border: '1px solid #333' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
          <h4 style={{ fontSize: '13px', color: '#fff', margin: 0 }}>Detailed Clause / Policy Sections</h4>
          <button type="button" onClick={() => onChange({ ...content, detail_sections: [...detailSections, { title: '', body: '' }] })} style={{ padding: '3px 8px', fontSize: '11px', backgroundColor: '#006b5a', border: 'none', color: '#fff', borderRadius: '3px', cursor: 'pointer' }}>
            + Add Section
          </button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {detailSections.map((sec, idx) => (
            <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '6px', padding: '10px', backgroundColor: '#161616', borderRadius: '4px' }}>
              <input
                type="text"
                placeholder="Clause Title"
                value={sec.title}
                onChange={e => handleSectionChange(idx, 'title', e.target.value)}
                style={{ padding: '8px', backgroundColor: '#2c2c2c', border: '1px solid #444', color: '#fff', borderRadius: '4px', fontSize: '12px' }}
              />
              <textarea
                rows={3}
                placeholder="Clause Details / Content"
                value={sec.body}
                onChange={e => handleSectionChange(idx, 'body', e.target.value)}
                style={{ padding: '8px', backgroundColor: '#2c2c2c', border: '1px solid #444', color: '#fff', borderRadius: '4px', fontSize: '12px' }}
              />
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <label style={{ fontSize: '12px', color: '#aaa' }}>Regulatory Note Footnote Box</label>
        <textarea
          rows={2}
          value={content.regulatory_note_box || ''}
          onChange={e => onChange({ ...content, regulatory_note_box: e.target.value })}
          style={{ padding: '8px', backgroundColor: '#2c2c2c', border: '1px solid #444', color: '#fff', borderRadius: '4px', fontSize: '12px' }}
        />
      </div>
    </div>
  );
}

function TemplateDForm({ content = {}, onChange }) {
  const evidenceChecklist = content.evidence_checklist || [];
  const timelineNodes = content.timeline_nodes || [];
  const outcomeCards = content.outcome_cards || [];
  const doThisFirst = content.do_this_first || { cta_text: '', checklist: [] };
  const doChecklist = doThisFirst.checklist || [];

  const handleTimelineChange = (idx, field, val) => {
    const arr = [...timelineNodes];
    arr[idx] = { ...arr[idx], [field]: val };
    onChange({ ...content, timeline_nodes: arr });
  };

  const handleOutcomeChange = (idx, field, val) => {
    const arr = [...outcomeCards];
    arr[idx] = { ...arr[idx], [field]: val };
    onChange({ ...content, outcome_cards: arr });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <label style={{ fontSize: '12px', color: '#aaa' }}>Red Alert Urgency Badge Text</label>
        <input
          type="text"
          placeholder="e.g. Time-sensitive — act before closing this position"
          value={content.urgency_badge_text || ''}
          onChange={e => onChange({ ...content, urgency_badge_text: e.target.value })}
          style={{ padding: '8px', backgroundColor: '#2c2c2c', border: '1px solid #444', color: '#fff', borderRadius: '4px', fontSize: '12px' }}
        />
      </div>

      {/* Do this first panel */}
      <div style={{ backgroundColor: '#1e1e1e', padding: '16px', borderRadius: '4px', border: '1px solid #333', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <h4 style={{ fontSize: '13px', color: '#fff', margin: 0 }}>"Do This First" Settings</h4>
        
        <input
          type="text"
          placeholder="CTA button text (e.g. Report this trade)"
          value={doThisFirst.cta_text || ''}
          onChange={e => onChange({ ...content, do_this_first: { ...doThisFirst, cta_text: e.target.value } })}
          style={{ padding: '8px', backgroundColor: '#2c2c2c', border: '1px solid #444', color: '#fff', borderRadius: '4px', fontSize: '12px' }}
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <label style={{ fontSize: '11px', color: '#aaa' }}>Actions checklist</label>
            <button type="button" onClick={() => {
              onChange({ ...content, do_this_first: { ...doThisFirst, checklist: [...doChecklist, ''] } });
            }} style={{ padding: '2px 6px', fontSize: '10px', backgroundColor: '#2c2c2c', color: '#fff', border: '1px solid #444', borderRadius: '3px', cursor: 'pointer' }}>
              + Add action
            </button>
          </div>
          {doChecklist.map((ch, idx) => (
            <div key={idx} style={{ display: 'flex', gap: '8px' }}>
              <input
                type="text"
                value={ch}
                onChange={e => {
                  const arr = [...doChecklist];
                  arr[idx] = e.target.value;
                  onChange({ ...content, do_this_first: { ...doThisFirst, checklist: arr } });
                }}
                style={{ flex: 1, padding: '6px', backgroundColor: '#2c2c2c', border: '1px solid #444', color: '#fff', borderRadius: '4px', fontSize: '11px' }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Evidence checklist */}
      <div style={{ backgroundColor: '#1e1e1e', padding: '16px', borderRadius: '4px', border: '1px solid #333' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
          <h4 style={{ fontSize: '13px', color: '#fff', margin: 0 }}>Evidence Checklist (Required documents list)</h4>
          <button type="button" onClick={() => onChange({ ...content, evidence_checklist: [...evidenceChecklist, ''] })} style={{ padding: '3px 8px', fontSize: '11px', backgroundColor: '#006b5a', border: 'none', color: '#fff', borderRadius: '3px', cursor: 'pointer' }}>
            + Add Item
          </button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {evidenceChecklist.map((ev, idx) => (
            <input
              key={idx}
              type="text"
              value={ev}
              onChange={e => {
                const arr = [...evidenceChecklist];
                arr[idx] = e.target.value;
                onChange({ ...content, evidence_checklist: arr });
              }}
              style={{ padding: '8px', backgroundColor: '#2c2c2c', border: '1px solid #444', color: '#fff', borderRadius: '4px', fontSize: '12px' }}
            />
          ))}
        </div>
      </div>

      {/* Investigation Timeline */}
      <div style={{ backgroundColor: '#1e1e1e', padding: '16px', borderRadius: '4px', border: '1px solid #333' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
          <h4 style={{ fontSize: '13px', color: '#fff', margin: 0 }}>Investigation Timeline Nodes</h4>
          <button type="button" onClick={() => onChange({ ...content, timeline_nodes: [...timelineNodes, { label: '', target_time: '' }] })} style={{ padding: '3px 8px', fontSize: '11px', backgroundColor: '#006b5a', border: 'none', color: '#fff', borderRadius: '3px', cursor: 'pointer' }}>
            + Add Node
          </button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {timelineNodes.map((node, idx) => (
            <div key={idx} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', backgroundColor: '#161616', padding: '10px', borderRadius: '4px' }}>
              <input
                type="text"
                placeholder="Stage Label (e.g. Reviewing Logs)"
                value={node.label}
                onChange={e => handleTimelineChange(idx, 'label', e.target.value)}
                style={{ padding: '8px', backgroundColor: '#2c2c2c', border: '1px solid #444', color: '#fff', borderRadius: '4px', fontSize: '12px' }}
              />
              <input
                type="text"
                placeholder="Target SLA Time (e.g. 24 hours)"
                value={node.target_time}
                onChange={e => handleTimelineChange(idx, 'target_time', e.target.value)}
                style={{ padding: '8px', backgroundColor: '#2c2c2c', border: '1px solid #444', color: '#fff', borderRadius: '4px', fontSize: '12px' }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Outcome Cards */}
      <div style={{ backgroundColor: '#1e1e1e', padding: '16px', borderRadius: '4px', border: '1px solid #333' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
          <h4 style={{ fontSize: '13px', color: '#fff', margin: 0 }}>Objective Outcome Verdict Cards (Equal Weights)</h4>
          <button type="button" onClick={() => onChange({ ...content, outcome_cards: [...outcomeCards, { title: '', body: '' }] })} style={{ padding: '3px 8px', fontSize: '11px', backgroundColor: '#006b5a', border: 'none', color: '#fff', borderRadius: '3px', cursor: 'pointer' }}>
            + Add Card
          </button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {outcomeCards.map((card, idx) => (
            <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '6px', padding: '10px', backgroundColor: '#161616', borderRadius: '4px' }}>
              <input
                type="text"
                placeholder="Outcome Title"
                value={card.title}
                onChange={e => handleOutcomeChange(idx, 'title', e.target.value)}
                style={{ padding: '8px', backgroundColor: '#2c2c2c', border: '1px solid #444', color: '#fff', borderRadius: '4px', fontSize: '12px' }}
              />
              <textarea
                rows={2}
                placeholder="Outcome Explanation Verdict details"
                value={card.body}
                onChange={e => handleOutcomeChange(idx, 'body', e.target.value)}
                style={{ padding: '8px', backgroundColor: '#2c2c2c', border: '1px solid #444', color: '#fff', borderRadius: '4px', fontSize: '12px' }}
              />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { FolderTree, Plus, Edit, Trash2, ArrowUp, ArrowDown, HelpCircle, Save } from 'lucide-react';

export default function CategoryManager() {
  const [categories, setCategories] = useState([]);
  const [shortcuts, setShortcuts] = useState([]);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Editor States
  const [editingCategory, setEditingCategory] = useState(null); // null = list, 'new' = create, object = edit
  const [editingShortcut, setEditingShortcut] = useState(null); // null = list, 'new' = create, object = edit

  // Form Category Fields
  const [catId, setCatId] = useState('');
  const [catSlug, setCatSlug] = useState('');
  const [catPillar, setCatPillar] = useState('help-center');
  const [catIcon, setCatIcon] = useState('Folder');
  const [catAccent, setCatAccent] = useState('mint');
  const [catTrans, setCatTrans] = useState({
    en: { name: '', description: '' },
    fa: { name: '', description: '' },
    ar: { name: '', description: '' }
  });

  // Form Shortcut Fields
  const [scTargetId, setScTargetId] = useState('');
  const [scIcon, setScIcon] = useState('HelpCircle');
  const [scTrans, setScTrans] = useState({
    en: { label: '' },
    fa: { label: '' },
    ar: { label: '' }
  });

  const loadData = async () => {
    try {
      const catRes = await fetch('/api/categories');
      const catData = await catRes.json();
      setCategories(catData);

      const scRes = await fetch('/api/shortcuts');
      const scData = await scRes.json();
      setShortcuts(scData);

      const artRes = await fetch('/api/articles');
      const artData = await artRes.json();
      setArticles(artData);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  // Reordering categories
  const moveCategory = async (idx, direction) => {
    const arr = [...categories];
    const targetIdx = direction === 'up' ? idx - 1 : idx + 1;
    if (targetIdx < 0 || targetIdx >= arr.length) return;

    // Swap displayOrder values
    const tempOrder = arr[idx].displayOrder;
    arr[idx].displayOrder = arr[targetIdx].displayOrder;
    arr[targetIdx].displayOrder = tempOrder;

    // Swap items in local array
    const tempItem = arr[idx];
    arr[idx] = arr[targetIdx];
    arr[targetIdx] = tempItem;

    setCategories(arr);

    // Save orders to API
    try {
      await fetch('/api/categories/reorder', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          orders: arr.map(c => ({ id: c.id, displayOrder: c.displayOrder }))
        })
      });
    } catch (e) {
      console.error(e);
    }
  };

  // Reordering shortcuts
  const moveShortcut = async (idx, direction) => {
    const arr = [...shortcuts];
    const targetIdx = direction === 'up' ? idx - 1 : idx + 1;
    if (targetIdx < 0 || targetIdx >= arr.length) return;

    const tempOrder = arr[idx].displayOrder;
    arr[idx].displayOrder = arr[targetIdx].displayOrder;
    arr[targetIdx].displayOrder = tempOrder;

    const tempItem = arr[idx];
    arr[idx] = arr[targetIdx];
    arr[targetIdx] = tempItem;

    setShortcuts(arr);

    try {
      await fetch('/api/shortcuts/reorder', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          orders: arr.map(s => ({ id: s.id, displayOrder: s.displayOrder }))
        })
      });
    } catch (e) {
      console.error(e);
    }
  };

  const handleEditCategory = (cat) => {
    setEditingCategory(cat);
    setCatId(cat.id);
    setCatSlug(cat.slug);
    setCatPillar(cat.pillar);
    setCatIcon(cat.icon);
    setCatAccent(cat.accentToken);

    const trans = {
      en: { name: '', description: '' },
      fa: { name: '', description: '' },
      ar: { name: '', description: '' }
    };
    cat.translations.forEach(t => {
      trans[t.locale] = { name: t.name || '', description: t.description || '' };
    });
    setCatTrans(trans);
  };

  const handleCreateCategory = () => {
    setEditingCategory('new');
    setCatId('');
    setCatSlug('');
    setCatPillar('help-center');
    setCatIcon('Folder');
    setCatAccent('mint');
    setCatTrans({
      en: { name: '', description: '' },
      fa: { name: '', description: '' },
      ar: { name: '', description: '' }
    });
  };

  const handleCategorySave = async (e) => {
    e.preventDefault();
    const translations = Object.keys(catTrans).map(loc => ({
      locale: loc,
      name: catTrans[loc].name,
      description: catTrans[loc].description
    }));

    const payload = {
      id: catId.trim(),
      slug: catSlug.trim(),
      pillar: catPillar,
      icon: catIcon,
      accentToken: catAccent,
      translations
    };

    try {
      let url = '/api/categories';
      let method = 'POST';
      if (editingCategory && editingCategory !== 'new') {
        url = `/api/categories/${editingCategory.id}`;
        method = 'PUT';
      }

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (res.ok) {
        setEditingCategory(null);
        loadData();
      } else {
        const err = await res.json();
        alert(err.error);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteCategory = async (id) => {
    if (!window.confirm('Delete category? All associated articles must be re-categorized first.')) return;
    try {
      const res = await fetch(`/api/categories/${id}`, { method: 'DELETE' });
      if (res.ok) loadData();
    } catch (e) {
      console.error(e);
    }
  };

  // Shortcut Actions
  const handleEditShortcut = (sc) => {
    setEditingShortcut(sc);
    setScTargetId(sc.targetArticleId);
    setScIcon(sc.icon);

    const trans = { en: { label: '' }, fa: { label: '' }, ar: { label: '' } };
    sc.translations.forEach(t => {
      trans[t.locale] = { label: t.label || '' };
    });
    setScTrans(trans);
  };

  const handleCreateShortcut = () => {
    setEditingShortcut('new');
    setScTargetId(articles[0]?.id || '');
    setScIcon('HelpCircle');
    setScTrans({
      en: { label: '' },
      fa: { label: '' },
      ar: { label: '' }
    });
  };

  const handleShortcutSave = async (e) => {
    e.preventDefault();
    const translations = Object.keys(scTrans).map(loc => ({
      locale: loc,
      label: scTrans[loc].label
    }));

    const payload = {
      targetArticleId: scTargetId,
      icon: scIcon,
      translations
    };

    try {
      let url = '/api/shortcuts';
      let method = 'POST';
      if (editingShortcut && editingShortcut !== 'new') {
        url = `/api/shortcuts/${editingShortcut.id}`;
        method = 'PUT';
      }

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (res.ok) {
        setEditingShortcut(null);
        loadData();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteShortcut = async (id) => {
    if (!window.confirm('Remove shortcut card?')) return;
    try {
      await fetch(`/api/shortcuts/${id}`, { method: 'DELETE' });
      loadData();
    } catch (e) {
      console.error(e);
    }
  };

  if (loading) return <div style={{ color: '#aaa' }}>Loading components...</div>;

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
      
      {/* LEFT PANEL: CATEGORIES MANAGER */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <h2 style={{ fontSize: '18px', color: '#fff', margin: 0 }}>Categories</h2>
          {editingCategory === null && (
            <button onClick={handleCreateCategory} style={{ padding: '4px 10px', fontSize: '11px', backgroundColor: '#006b5a', color: '#fff', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>
              + New Category
            </button>
          )}
        </div>

        {editingCategory === null ? (
          <div style={{ backgroundColor: '#1e1e1e', border: '1px solid #333', borderRadius: '4px', display: 'flex', flexDirection: 'column', gap: '4px', padding: '8px' }}>
            {categories.map((cat, idx) => {
              const name = cat.translations.find(t => t.locale === 'en')?.name || cat.id;
              return (
                <div key={cat.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', backgroundColor: '#161616', borderRadius: '4px', fontSize: '13px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontSize: '11px', color: '#666' }}>Order {cat.displayOrder}</span>
                    <strong style={{ color: '#fff' }}>{name}</strong>
                    <span style={{ fontSize: '10px', color: '#aaa', textTransform: 'capitalize' }}>({cat.pillar})</span>
                  </div>
                  <div style={{ display: 'flex', gap: '4px' }}>
                    <button type="button" onClick={() => moveCategory(idx, 'up')} disabled={idx === 0} style={{ padding: '4px', backgroundColor: '#222', border: '1px solid #333', color: '#fff', cursor: 'pointer' }}><ArrowUp size={11} /></button>
                    <button type="button" onClick={() => moveCategory(idx, 'down')} disabled={idx === categories.length - 1} style={{ padding: '4px', backgroundColor: '#222', border: '1px solid #333', color: '#fff', cursor: 'pointer' }}><ArrowDown size={11} /></button>
                    <button type="button" onClick={() => handleEditCategory(cat)} style={{ padding: '4px', backgroundColor: '#333', border: 'none', color: '#4ddcbf', cursor: 'pointer' }}><Edit size={11} /></button>
                    <button type="button" onClick={() => handleDeleteCategory(cat.id)} style={{ padding: '4px', backgroundColor: 'rgba(219,68,85,0.1)', border: 'none', color: '#db4455', cursor: 'pointer' }}><Trash2 size={11} /></button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <form onSubmit={handleCategorySave} style={{ backgroundColor: '#1e1e1e', border: '1px solid #333', padding: '20px', borderRadius: '4px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <h3 style={{ fontSize: '14px', color: '#fff', margin: '0 0 8px 0' }}>
              {editingCategory === 'new' ? 'New Category' : `Edit Category: ${catId}`}
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <label style={{ fontSize: '11px', color: '#aaa' }}>Category ID</label>
                <input type="text" required disabled={editingCategory !== 'new'} value={catId} onChange={e => setCatId(e.target.value)} style={{ padding: '8px', backgroundColor: '#2c2c2c', border: '1px solid #444', color: '#fff', borderRadius: '4px', fontSize: '12px' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <label style={{ fontSize: '11px', color: '#aaa' }}>Slug</label>
                <input type="text" required value={catSlug} onChange={e => setCatSlug(e.target.value)} style={{ padding: '8px', backgroundColor: '#2c2c2c', border: '1px solid #444', color: '#fff', borderRadius: '4px', fontSize: '12px' }} />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <label style={{ fontSize: '11px', color: '#aaa' }}>Pillar</label>
                <select value={catPillar} onChange={e => setCatPillar(e.target.value)} style={{ padding: '8px', backgroundColor: '#2c2c2c', border: '1px solid #444', color: '#fff', borderRadius: '4px', fontSize: '12px' }}>
                  <option value="help-center">Help Center</option>
                  <option value="academy">Academy</option>
                </select>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <label style={{ fontSize: '11px', color: '#aaa' }}>Icon</label>
                <input type="text" value={catIcon} onChange={e => setCatIcon(e.target.value)} style={{ padding: '8px', backgroundColor: '#2c2c2c', border: '1px solid #444', color: '#fff', borderRadius: '4px', fontSize: '12px' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <label style={{ fontSize: '11px', color: '#aaa' }}>Accent Token</label>
                <input type="text" value={catAccent} onChange={e => setCatAccent(e.target.value)} style={{ padding: '8px', backgroundColor: '#2c2c2c', border: '1px solid #444', color: '#fff', borderRadius: '4px', fontSize: '12px' }} />
              </div>
            </div>

            {/* Translation block */}
            {['en', 'fa', 'ar'].map(loc => (
              <div key={loc} style={{ borderTop: '1px solid #333', paddingTop: '10px', marginTop: '6px' }}>
                <strong style={{ fontSize: '12px', color: '#4ddcbf', textTransform: 'uppercase' }}>{loc} translation</strong>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '6px' }}>
                  <input
                    type="text"
                    placeholder="Category Name"
                    value={catTrans[loc].name}
                    onChange={e => {
                      const val = e.target.value;
                      setCatTrans(prev => ({ ...prev, [loc]: { ...prev[loc], name: val } }));
                    }}
                    style={{ padding: '8px', backgroundColor: '#2c2c2c', border: '1px solid #444', color: '#fff', borderRadius: '4px', fontSize: '12px' }}
                  />
                  <textarea
                    rows={2}
                    placeholder="Description"
                    value={catTrans[loc].description}
                    onChange={e => {
                      const val = e.target.value;
                      setCatTrans(prev => ({ ...prev, [loc]: { ...prev[loc], description: val } }));
                    }}
                    style={{ padding: '8px', backgroundColor: '#2c2c2c', border: '1px solid #444', color: '#fff', borderRadius: '4px', fontSize: '12px' }}
                  />
                </div>
              </div>
            ))}

            <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end', marginTop: '12px' }}>
              <button type="button" onClick={() => setEditingCategory(null)} style={{ padding: '8px 12px', backgroundColor: '#222', border: '1px solid #444', color: '#fff', borderRadius: '4px', cursor: 'pointer', fontSize: '12px' }}>Cancel</button>
              <button type="submit" style={{ padding: '8px 16px', backgroundColor: '#006b5a', border: 'none', color: '#fff', borderRadius: '4px', cursor: 'pointer', fontSize: '12px', fontWeight: 'bold' }}>Save</button>
            </div>
          </form>
        )}
      </div>

      {/* RIGHT PANEL: HOME SHORTCUTS MANAGER */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <h2 style={{ fontSize: '18px', color: '#fff', margin: 0 }}>Task Shortcuts ("I want to...")</h2>
          {editingShortcut === null && (
            <button onClick={handleCreateShortcut} style={{ padding: '4px 10px', fontSize: '11px', backgroundColor: '#006b5a', color: '#fff', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>
              + New Shortcut
            </button>
          )}
        </div>

        {editingShortcut === null ? (
          <div style={{ backgroundColor: '#1e1e1e', border: '1px solid #333', borderRadius: '4px', display: 'flex', flexDirection: 'column', gap: '4px', padding: '8px' }}>
            {shortcuts.map((sc, idx) => {
              const label = sc.translations.find(t => t.locale === 'en')?.label || `Shortcut ${sc.id}`;
              return (
                <div key={sc.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', backgroundColor: '#161616', borderRadius: '4px', fontSize: '13px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontSize: '11px', color: '#666' }}>Order {sc.displayOrder}</span>
                    <strong style={{ color: '#fff' }}>{label}</strong>
                    <span style={{ fontSize: '10px', color: '#aaa' }}>({sc.article?.slug || 'No Target'})</span>
                  </div>
                  <div style={{ display: 'flex', gap: '4px' }}>
                    <button type="button" onClick={() => moveShortcut(idx, 'up')} disabled={idx === 0} style={{ padding: '4px', backgroundColor: '#222', border: '1px solid #333', color: '#fff', cursor: 'pointer' }}><ArrowUp size={11} /></button>
                    <button type="button" onClick={() => moveShortcut(idx, 'down')} disabled={idx === shortcuts.length - 1} style={{ padding: '4px', backgroundColor: '#222', border: '1px solid #333', color: '#fff', cursor: 'pointer' }}><ArrowDown size={11} /></button>
                    <button type="button" onClick={() => handleEditShortcut(sc)} style={{ padding: '4px', backgroundColor: '#333', border: 'none', color: '#4ddcbf', cursor: 'pointer' }}><Edit size={11} /></button>
                    <button type="button" onClick={() => handleDeleteShortcut(sc.id)} style={{ padding: '4px', backgroundColor: 'rgba(219,68,85,0.1)', border: 'none', color: '#db4455', cursor: 'pointer' }}><Trash2 size={11} /></button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <form onSubmit={handleShortcutSave} style={{ backgroundColor: '#1e1e1e', border: '1px solid #333', padding: '20px', borderRadius: '4px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <h3 style={{ fontSize: '14px', color: '#fff', margin: '0 0 8px 0' }}>
              {editingShortcut === 'new' ? 'New Shortcut' : `Edit Shortcut: ${editingShortcut.id}`}
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <label style={{ fontSize: '11px', color: '#aaa' }}>Target Article</label>
              <select value={scTargetId} onChange={e => setScTargetId(e.target.value)} style={{ padding: '8px', backgroundColor: '#2c2c2c', border: '1px solid #444', color: '#fff', borderRadius: '4px', fontSize: '12px' }}>
                {articles.map(art => (
                  <option key={art.id} value={art.id}>{art.slug}</option>
                ))}
              </select>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <label style={{ fontSize: '11px', color: '#aaa' }}>Icon</label>
              <input type="text" value={scIcon} onChange={e => setScIcon(e.target.value)} style={{ padding: '8px', backgroundColor: '#2c2c2c', border: '1px solid #444', color: '#fff', borderRadius: '4px', fontSize: '12px' }} />
            </div>

            {/* Translation block */}
            {['en', 'fa', 'ar'].map(loc => (
              <div key={loc} style={{ borderTop: '1px solid #333', paddingTop: '10px', marginTop: '6px' }}>
                <strong style={{ fontSize: '12px', color: '#4ddcbf', textTransform: 'uppercase' }}>{loc} label</strong>
                <input
                  type="text"
                  required
                  placeholder="Shortcut Label Title"
                  value={scTrans[loc].label}
                  onChange={e => {
                    const val = e.target.value;
                    setScTrans(prev => ({ ...prev, [loc]: { ...prev[loc], label: val } }));
                  }}
                  style={{ padding: '8px', backgroundColor: '#2c2c2c', border: '1px solid #444', color: '#fff', borderRadius: '4px', fontSize: '12px', marginTop: '6px', width: '100%', boxSizing: 'border-box' }}
                />
              </div>
            ))}

            <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end', marginTop: '12px' }}>
              <button type="button" onClick={() => setEditingShortcut(null)} style={{ padding: '8px 12px', backgroundColor: '#222', border: '1px solid #444', color: '#fff', borderRadius: '4px', cursor: 'pointer', fontSize: '12px' }}>Cancel</button>
              <button type="submit" style={{ padding: '8px 16px', backgroundColor: '#006b5a', border: 'none', color: '#fff', borderRadius: '4px', cursor: 'pointer', fontSize: '12px', fontWeight: 'bold' }}>Save</button>
            </div>
          </form>
        )}
      </div>

    </div>
  );
}

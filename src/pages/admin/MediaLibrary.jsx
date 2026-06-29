import React, { useState, useEffect } from 'react';
import { UploadCloud, Trash2, ShieldAlert, CheckCircle2, Eye, Link } from 'lucide-react';

export default function MediaLibrary({ user }) {
  const [media, setMedia] = useState([]);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Upload States
  const [uploadFile, setUploadFile] = useState(null);
  const [altTextEn, setAltTextEn] = useState('');
  const [altTextFa, setAltTextFa] = useState('');
  const [altTextAr, setAltTextAr] = useState('');
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState('');

  const loadMedia = async () => {
    try {
      const res = await fetch('/api/media');
      const data = await res.json();
      setMedia(data);

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
    loadMedia();
  }, []);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setUploadFile(e.target.files[0]);
      setUploadError('');
    }
  };

  // Convert file to base64
  const toBase64 = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result.split(',')[1]); // remove prefix metadata
    reader.onerror = error => reject(error);
  });

  const handleUploadSubmit = async (e) => {
    e.preventDefault();
    setUploadError('');

    if (!uploadFile) {
      return setUploadError('Please select a file to upload.');
    }

    // Enforce alt-text constraints (EN, FA, AR required)
    if (!altTextEn.trim() || !altTextFa.trim() || !altTextAr.trim()) {
      return setUploadError('WingoMarkets Compliance rule: Descriptive Alt-text is required in all three languages (EN, FA, AR) before uploading assets.');
    }

    setUploading(true);
    try {
      const base64Data = await toBase64(uploadFile);
      const payload = {
        filename: uploadFile.name,
        base64Data,
        translations: [
          { locale: 'en', altText: altTextEn.trim() },
          { locale: 'fa', altText: altTextFa.trim() },
          { locale: 'ar', altText: altTextAr.trim() }
        ]
      };

      const res = await fetch('/api/media/upload', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Upload failed.');

      // Clear form
      setUploadFile(null);
      setAltTextEn('');
      setAltTextFa('');
      setAltTextAr('');
      loadMedia();
      alert('Asset uploaded successfully.');
    } catch (err) {
      setUploadError(err.message);
    } finally {
      setUploading(false);
    }
  };

  const handleDeleteClick = async (asset) => {
    const refs = getReferencingArticles(asset.url);
    if (refs.length > 0) {
      return alert(`Cannot delete: This media asset is actively referenced by: ${refs.map(r => r.slug).join(', ')}`);
    }

    if (!window.confirm('Are you sure you want to delete this media asset?')) return;
    try {
      const res = await fetch(`/api/media/${asset.id}`, { method: 'DELETE' });
      if (res.ok) {
        loadMedia();
      } else {
        const err = await res.json();
        alert(err.error);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const getReferencingArticles = (url) => {
    return articles.filter(art => {
      return art.translations.some(trans => {
        return (trans.content || '').includes(url) || trans.seoOgImage === url;
      });
    });
  };

  if (loading) return <div style={{ color: '#aaa' }}>Loading media files...</div>;

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '32px' }}>
      
      {/* LEFT: UPLOAD BOX */}
      <div style={{ backgroundColor: '#1e1e1e', border: '1px solid #333', padding: '24px', borderRadius: '6px', height: 'fit-content' }}>
        <h2 style={{ fontSize: '18px', color: '#fff', margin: '0 0 16px 0', borderBottom: '1px solid #333', paddingBottom: '10px' }}>Upload Asset</h2>
        
        {uploadError && (
          <div style={{ padding: '10px', backgroundColor: '#ffdad6', color: '#ba1a1a', borderRadius: '4px', fontSize: '13px', marginBottom: '16px' }}>
            {uploadError}
          </div>
        )}

        <form onSubmit={handleUploadSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{
            border: '2px dashed #444',
            borderRadius: '6px',
            padding: '24px',
            textAlign: 'center',
            cursor: 'pointer',
            backgroundColor: '#161616'
          }} onClick={() => document.getElementById('media-file-input').click()}>
            <UploadCloud size={32} color="#4ddcbf" style={{ margin: '0 auto 10px auto', display: 'block' }} />
            <span style={{ fontSize: '13px', color: '#aaa', display: 'block' }}>
              {uploadFile ? uploadFile.name : 'Click to choose file or drag here'}
            </span>
            <input
              id="media-file-input"
              type="file"
              onChange={handleFileChange}
              style={{ display: 'none' }}
              accept="image/*"
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={{ fontSize: '12px', color: '#aaa' }}>Alt Text (English) *</label>
            <input
              type="text"
              value={altTextEn}
              onChange={e => setAltTextEn(e.target.value)}
              style={{ padding: '8px', backgroundColor: '#2c2c2c', border: '1px solid #444', color: '#fff', borderRadius: '4px', fontSize: '12px' }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={{ fontSize: '12px', color: '#aaa' }}>Alt Text (Persian / FA) *</label>
            <input
              type="text"
              value={altTextFa}
              onChange={e => setAltTextFa(e.target.value)}
              style={{ padding: '8px', backgroundColor: '#2c2c2c', border: '1px solid #444', color: '#fff', borderRadius: '4px', fontSize: '12px', direction: 'rtl' }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={{ fontSize: '12px', color: '#aaa' }}>Alt Text (Arabic / AR) *</label>
            <input
              type="text"
              value={altTextAr}
              onChange={e => setAltTextAr(e.target.value)}
              style={{ padding: '8px', backgroundColor: '#2c2c2c', border: '1px solid #444', color: '#fff', borderRadius: '4px', fontSize: '12px', direction: 'rtl' }}
            />
          </div>

          <button
            type="submit"
            disabled={uploading}
            style={{
              padding: '12px',
              backgroundColor: '#006b5a',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              fontWeight: 'bold',
              cursor: 'pointer',
              marginTop: '8px'
            }}
          >
            {uploading ? 'Uploading...' : 'Upload File'}
          </button>
        </form>
      </div>

      {/* RIGHT: ASSETS GRID */}
      <div>
        <h2 style={{ fontSize: '18px', color: '#fff', margin: '0 0 16px 0' }}>Media Assets</h2>
        
        {media.length === 0 ? (
          <div style={{ padding: '40px', textAlign: 'center', backgroundColor: '#1e1e1e', border: '1px solid #333', borderRadius: '6px', color: '#aaa' }}>
            No media files uploaded yet.
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
            gap: '16px'
          }}>
            {media.map(asset => {
              const refs = getReferencingArticles(asset.url);
              const enAlt = asset.translations.find(t => t.locale === 'en')?.altText || '';
              
              return (
                <div key={asset.id} style={{
                  backgroundColor: '#1e1e1e',
                  border: '1px solid #333',
                  borderRadius: '6px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column'
                }}>
                  <div style={{
                    height: '140px',
                    backgroundColor: '#161616',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    position: 'relative'
                  }}>
                    <img
                      src={asset.url}
                      alt={enAlt}
                      style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                    />
                    <a
                      href={asset.url}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        position: 'absolute',
                        right: '8px',
                        bottom: '8px',
                        backgroundColor: 'rgba(0,0,0,0.6)',
                        padding: '4px',
                        borderRadius: '3px',
                        color: '#fff'
                      }}
                      title="View full image"
                    >
                      <Eye size={12} />
                    </a>
                  </div>

                  <div style={{ padding: '12px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <span style={{ fontSize: '11px', color: '#aaa', wordBreak: 'break-all', display: 'block', marginBottom: '4px', fontWeight: 'bold' }}>
                        {asset.filename}
                      </span>
                      <span style={{ fontSize: '10px', color: '#777', display: 'block', marginBottom: '8px' }}>
                        Uploaded by: {asset.uploadedBy?.split('@')[0]}
                      </span>

                      {/* Render usage references */}
                      <div style={{ fontSize: '10px', color: refs.length > 0 ? '#4ddcbf' : '#aaa', display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '12px' }}>
                        <Link size={10} />
                        <span>
                          {refs.length > 0 
                            ? `Used by: ${refs.map(r => r.slug).join(', ')}`
                            : 'Orphaned (Not referenced)'}
                        </span>
                      </div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #2c2c2c', paddingTop: '8px' }}>
                      <span style={{ fontSize: '10px', color: '#aaa', fontStyle: 'italic' }} title={enAlt}>
                        Alt: {enAlt.slice(0, 15)}...
                      </span>
                      
                      <button
                        onClick={() => handleDeleteClick(asset)}
                        style={{
                          backgroundColor: 'transparent',
                          border: 'none',
                          color: refs.length > 0 ? '#444' : '#db4455',
                          cursor: refs.length > 0 ? 'not-allowed' : 'pointer',
                          padding: '4px'
                        }}
                        disabled={refs.length > 0}
                        title={refs.length > 0 ? 'Cannot delete: Asset in use' : 'Delete Asset'}
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

    </div>
  );
}

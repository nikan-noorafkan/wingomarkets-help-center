import React, { createContext, useContext, useState, useEffect } from 'react';

const DataContext = createContext();

export function DataProvider({ children }) {
  const [categories, setCategories] = useState([]);
  const [articles, setArticles] = useState([]);
  const [shortcuts, setShortcuts] = useState([]);
  const [settings, setSettings] = useState({ slaChatMinutes: 2, slaEmailHours: 2 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const refreshData = async () => {
    try {
      const res = await fetch('/api/public/data');
      if (!res.ok) throw new Error('Failed to load help center database.');
      const data = await res.json();
      
      // Map API categories back to the exact support/academy format
      const mappedCats = data.categories.map(cat => ({
        id: cat.id,
        slug: cat.slug,
        pillar: cat.pillar,
        icon: cat.icon,
        accent_token: cat.accentToken,
        displayOrder: cat.displayOrder,
        title: {
          en: cat.translations.find(t => t.locale === 'en')?.name || '',
          fa: cat.translations.find(t => t.locale === 'fa')?.name || '',
          ar: cat.translations.find(t => t.locale === 'ar')?.name || '',
        },
        description: {
          en: cat.translations.find(t => t.locale === 'en')?.description || '',
          fa: cat.translations.find(t => t.locale === 'fa')?.description || '',
          ar: cat.translations.find(t => t.locale === 'ar')?.description || '',
        }
      }));

      // Shortcuts mapping
      const mappedShortcuts = data.shortcuts.map(sc => {
        const targetArticle = data.articles.find(art => art.id === sc.targetArticleId);
        return {
          id: sc.id,
          targetSlug: targetArticle ? targetArticle.slug : '',
          categorySlug: targetArticle ? targetArticle.categoryId : '',
          icon: sc.icon,
          title: {
            en: sc.translations.find(t => t.locale === 'en')?.label || '',
            fa: sc.translations.find(t => t.locale === 'fa')?.label || '',
            ar: sc.translations.find(t => t.locale === 'ar')?.label || '',
          }
        };
      });

      // Articles mapping
      const mappedArticles = data.articles.map(art => {
        const enTrans = art.translations.find(t => t.locale === 'en') || {};
        const faTrans = art.translations.find(t => t.locale === 'fa') || {};
        const arTrans = art.translations.find(t => t.locale === 'ar') || {};

        const parseContent = (trans) => {
          try {
            return typeof trans.content === 'string' ? JSON.parse(trans.content) : (trans.content || {});
          } catch(e) {
            return {};
          }
        };

        const enContent = parseContent(enTrans);
        const faContent = parseContent(faTrans);
        const arContent = parseContent(arTrans);

        return {
          id: art.id,
          slug: art.slug,
          categorySlug: art.categoryId,
          pillar: art.pillar,
          template: art.templateType,
          region: art.regionVariant,
          status: art.status,
          relatedSlugs: JSON.parse(art.relatedArticleIds || '[]'),
          complianceRequired: art.complianceRequired,
          complianceSignedOffBy: art.complianceSignedOffBy,
          complianceSignedOffAt: art.complianceSignedOffAt,
          lastUpdated: art.updatedAt.split('T')[0],
          readTime: Math.max(1, Math.ceil(((enTrans.title || '').length + (enTrans.description || '').length + (enTrans.summary || '').length) / 500) || 3),
          title: {
            en: enTrans.title || '',
            fa: faTrans.title || '',
            ar: arTrans.title || '',
          },
          description: {
            en: enTrans.description || '',
            fa: faTrans.description || '',
            ar: arTrans.description || '',
          },
          content: {
            en: {
              summary: enTrans.summary || '',
              prerequisites: enContent.prerequisites || [],
              stepsWeb: enContent.steps_web || [],
              stepsMobile: enContent.steps_mobile || [],
              edgeCases: enContent.edge_cases || [],
              stakesStatement: enContent.stakes_statement || '',
              explanationSections: enContent.explanation_sections || [],
              numericExample: enContent.numeric_example || null,
              mythFactPairs: enContent.myth_fact_pairs || [],
              plainSummary: enContent.plain_summary || '',
              detailSections: enContent.detail_sections || [],
              regulatoryNoteBox: enContent.regulatory_note_box || '',
              urgencyBadgeText: enContent.urgency_badge_text || '',
              doThisFirst: enContent.do_this_first || null,
              evidenceChecklist: enContent.evidence_checklist || [],
              timelineNodes: enContent.timeline_nodes || [],
              outcomeCards: enContent.outcome_cards || []
            },
            fa: {
              summary: faTrans.summary || '',
              prerequisites: faContent.prerequisites || [],
              stepsWeb: faContent.steps_web || [],
              stepsMobile: faContent.steps_mobile || [],
              edgeCases: faContent.edge_cases || [],
              stakesStatement: faContent.stakes_statement || '',
              explanationSections: faContent.explanation_sections || [],
              numericExample: faContent.numeric_example || null,
              mythFactPairs: faContent.myth_fact_pairs || [],
              plainSummary: faContent.plain_summary || '',
              detailSections: faContent.detail_sections || [],
              regulatoryNoteBox: faContent.regulatory_note_box || '',
              urgencyBadgeText: faContent.urgency_badge_text || '',
              doThisFirst: faContent.do_this_first || null,
              evidenceChecklist: faContent.evidence_checklist || [],
              timelineNodes: faContent.timeline_nodes || [],
              outcomeCards: faContent.outcome_cards || []
            },
            ar: {
              summary: arTrans.summary || '',
              prerequisites: arContent.prerequisites || [],
              stepsWeb: arContent.steps_web || [],
              stepsMobile: arContent.steps_mobile || [],
              edgeCases: arContent.edge_cases || [],
              stakesStatement: arContent.stakes_statement || '',
              explanationSections: arContent.explanation_sections || [],
              numericExample: arContent.numeric_example || null,
              mythFactPairs: arContent.myth_fact_pairs || [],
              plainSummary: arContent.plain_summary || '',
              detailSections: arContent.detail_sections || [],
              regulatoryNoteBox: arContent.regulatory_note_box || '',
              urgencyBadgeText: arContent.urgency_badge_text || '',
              doThisFirst: arContent.do_this_first || null,
              evidenceChecklist: arContent.evidence_checklist || [],
              timelineNodes: arContent.timeline_nodes || [],
              outcomeCards: arContent.outcome_cards || []
            }
          },
          seo: {
            en: {
              metaTitle: enTrans.seoMetaTitle || '',
              metaDescription: enTrans.seoMetaDescription || '',
              ogImage: enTrans.seoOgImage || '',
              canonicalUrl: enTrans.seoCanonicalUrl || '',
            },
            fa: {
              metaTitle: faTrans.seoMetaTitle || '',
              metaDescription: faTrans.seoMetaDescription || '',
              ogImage: faTrans.seoOgImage || '',
              canonicalUrl: faTrans.seoCanonicalUrl || '',
            },
            ar: {
              metaTitle: arTrans.seoMetaTitle || '',
              metaDescription: arTrans.seoMetaDescription || '',
              ogImage: arTrans.seoOgImage || '',
              canonicalUrl: arTrans.seoCanonicalUrl || '',
            }
          }
        };
      });

      setCategories(mappedCats);
      setArticles(mappedArticles);
      setShortcuts(mappedShortcuts);
      if (data.settings) {
        setSettings(data.settings);
      }
      setLoading(false);
    } catch (err) {
      console.error(err);
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    refreshData();
  }, []);

  const getCategoryBySlug = (slug) => {
    return categories.find(c => c.slug === slug);
  };

  const getArticleBySlug = (slug) => {
    return articles.find(a => a.slug === slug);
  };

  const getArticlesByCategory = (categorySlug) => {
    return articles.filter(a => a.categorySlug === categorySlug);
  };

  const getRelatedArticles = (article) => {
    if (!article.relatedSlugs) return [];
    return articles.filter(a => article.relatedSlugs.includes(a.slug));
  };

  return (
    <DataContext.Provider value={{
      categories,
      articles,
      shortcuts,
      settings,
      loading,
      error,
      refreshData,
      getCategoryBySlug,
      getArticleBySlug,
      getArticlesByCategory,
      getRelatedArticles
    }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext);
  if (!context) throw new Error('useData must be used inside a DataProvider');
  return context;
}

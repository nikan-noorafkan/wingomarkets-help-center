import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Scale, ShieldAlert } from 'lucide-react';

export default function TemplateC({ content }) {
  const { t } = useLanguage();
  const { summary, sections = [], regulatoryNote } = content;

  return (
    <div className="template-c-container">
      {/* Plain Language Summary */}
      <p className="article-summary-lead plain-summary">{summary}</p>

      {/* Main Legal / Policy Sections */}
      <div className="legal-sections-wrapper">
        {sections.map((section, i) => (
          <div key={i} className="legal-section-block glass-panel">
            <h3 className="section-title">
              <span className="section-num text-gradient-green">{i + 1}.</span>
              {section.title}
            </h3>
            <p className="section-content-text">{section.text}</p>
          </div>
        ))}
      </div>

      {/* Regulatory Note Box */}
      {regulatoryNote && (
        <div className="regulatory-note-callout">
          <div className="note-header">
            <Scale className="icon text-gradient-gold" size={20} />
            <h3>{t('regulatory_note')}</h3>
          </div>
          <p className="note-body">{regulatoryNote}</p>
        </div>
      )}
    </div>
  );
}

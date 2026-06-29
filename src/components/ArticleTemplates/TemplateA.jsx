import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Check, ChevronDown, Laptop, Smartphone } from 'lucide-react';

export default function TemplateA({ content }) {
  const { t } = useLanguage();
  const [platform, setPlatform] = useState('web');
  const [openEdge, setOpenEdge] = useState(null);

  const { summary, prerequisites = [], stepsWeb = [], stepsMobile = [], edgeCases = [] } = content;

  // Render mock screen frames matching design details
  const getMockupShotLabel = (stepIdx, activePlatform) => {
    if (activePlatform === 'web') {
      const webLabels = [
        'portal · Funds → Withdrawal',
        'method selector',
        'amount field + summary',
        'confirmation screen'
      ];
      return webLabels[stepIdx] || 'web · view screenshot';
    } else {
      const mobileLabels = [
        'app · menu drawer',
        'method list (mobile)',
        'amount keypad',
        'biometric confirm'
      ];
      return mobileLabels[stepIdx] || 'mobile · view screenshot';
    }
  };

  const stepsList = platform === 'web' ? stepsWeb : stepsMobile;

  return (
    <div className="template-a-design-container">
      {/* 1. BEFORE YOU START BLOCK */}
      {prerequisites.length > 0 && (
        <div className="prerequisites-alert-card-design">
          <p className="title">{t('requirements')}</p>
          <div className="checklist-wrapper">
            {prerequisites.map((req, i) => (
              <div key={i} className="check-row">
                <span className="check-badge">
                  <Check size={13} strokeWidth={2.8} />
                </span>
                <span className="check-text">{req}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 2. TABS HEADER & STEPS */}
      <section className="steps-section-design">
        <div className="steps-header-row">
          <h2>{t('step_by_step')}</h2>
          <div className="platform-toggle-pills">
            <button 
              className={`pill-btn ${platform === 'web' ? 'active' : ''}`}
              onClick={() => setPlatform('web')}
            >
              <Laptop size={14} />
              Web
            </button>
            <button 
              className={`pill-btn ${platform === 'mobile' ? 'active' : ''}`}
              onClick={() => setPlatform('mobile')}
            >
              <Smartphone size={14} />
              Mobile
            </button>
          </div>
        </div>

        {/* Linear step cards */}
        <div className="step-cards-list">
          {stepsList.map((stepText, idx) => (
            <div key={idx} className="step-card-design glass-panel">
              <span className="step-num-badge">{idx + 1}</span>
              <div className="step-body-design">
                <h3>{t('step_num')} {idx + 1}</h3>
                <p>{stepText}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. EDGE CASES ACCORDIONS */}
      {edgeCases.length > 0 && (
        <section className="edge-cases-section-design">
          <h2>{t('edge_cases')}</h2>
          <div className="accordions-list-design">
            {edgeCases.map((edge, i) => {
              const isOpen = openEdge === i;
              return (
                <div key={i} className="accordion-item-design glass-panel">
                  <button 
                    onClick={() => setOpenEdge(isOpen ? null : i)}
                    className="accordion-trigger-design"
                  >
                    <span>{edge.title}</span>
                    <ChevronDown 
                      size={20} 
                      className={`chevron-icon ${isOpen ? 'rotated' : ''}`}
                    />
                  </button>
                  {isOpen && (
                    <p className="accordion-content-text">
                      {edge.text}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
}

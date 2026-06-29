import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Target, Calculator, RefreshCw, Check, X } from 'lucide-react';

export default function TemplateB({ content }) {
  const { t } = useLanguage();
  const { summary, stakes, explanation, calculation, misconceptions = [] } = content;

  const renderCalculationCard = () => {
    if (!calculation) return null;

    // Check if it's the specific margin call slider layout
    if (calculation.type === 'slider' || calculation.marginLevel) {
      const { equity, usedMargin, marginLevel, stopOutVal, marginCallVal, label, description } = calculation;
      const isRed = parseInt(marginLevel) < 100;
      
      return (
        <div className="calculation-card-design margin-slider-layout glass-panel">
          <div className="card-header-area">
            <Calculator className="header-icon text-gradient-gold" size={22} />
            <h3>{label}</h3>
          </div>

          {/* Numeric Indicators Row */}
          <div className="indicators-grid-design">
            <div className="ind-item">
              <p className="val">{equity}</p>
              <p className="lbl">{t('lbl_equity')}</p>
            </div>
            <div className="ind-item">
              <p className="val">{usedMargin}</p>
              <p className="lbl">{t('lbl_used_margin')}</p>
            </div>
            <div className="ind-item">
              <p className={`val ${isRed ? 'text-danger' : 'text-success'}`}>{marginLevel}</p>
              <p className="lbl">{t('lbl_margin_level')}</p>
            </div>
          </div>

          {/* Graphical slider track */}
          <div className="slider-track-container-design">
            <div className="slider-track">
              <div 
                className={`slider-fill ${isRed ? 'danger' : 'success'}`} 
                style={{ width: `${Math.min(parseInt(marginLevel) / 2, 100)}%` }}
              ></div>
            </div>
            {/* Tick indicators */}
            <span className="tick-indicator stop-out" style={{ left: '25%' }}></span>
            <span className="tick-indicator margin-call" style={{ left: '50%' }}></span>
          </div>

          <div className="slider-labels-row">
            <span className="lbl-danger">Stop-out {stopOutVal || '50%'}</span>
            <span>Margin call {marginCallVal || '100%'}</span>
            <span>{t('lbl_safe')} 200%+</span>
          </div>

          <p className="slider-description-text">{description}</p>
        </div>
      );
    }

    // Default Formula layout (e.g. Slippage Math)
    return (
      <div className="calculation-card-design formula-layout glass-panel">
        <div className="card-header-area">
          <Calculator className="header-icon text-gradient-gold" size={22} />
          <h3>{calculation.label}</h3>
        </div>
        <div className="formula-box-design">
          <span className="lbl">{t('lbl_formula')}:</span>
          <code>{calculation.formula}</code>
        </div>
        <div className="example-box-design">
          <span className="lbl">{t('lbl_example_walkthrough')}:</span>
          <p>{calculation.example}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="template-b-design-container">
      {/* 1. ARTICLE LEAD */}
      <p className="article-summary-lead">{summary}</p>

      {/* 2. STAKES CALLOUT */}
      {stakes && (
        <div className="stakes-callout-design">
          <div className="header">
            <Target className="icon" size={18} />
            <h3>{t('stakes')}</h3>
          </div>
          <p>{stakes}</p>
        </div>
      )}

      {/* 3. CORE PARAGRAPHS */}
      {explanation && (
        <div className="explanation-paragraphs-design">
          {explanation.split('\n\n').map((para, i) => (
            <p key={i} className="explanation-para">{para}</p>
          ))}
        </div>
      )}

      {/* 4. CALCULATION COMPONENT */}
      {renderCalculationCard()}

      {/* 5. MISCONCEPTIONS GRID */}
      {misconceptions.length > 0 && (
        <section className="misconceptions-section-design">
          <div className="section-header-design">
            <RefreshCw className="title-icon text-gradient-gold" size={20} />
            <h2>{t('misconceptions')}</h2>
          </div>
          <div className="misconceptions-grid-design">
            {misconceptions.map((row, i) => (
              <div key={i} className="misconception-row-design glass-panel">
                <div className="cell myth-cell">
                  <p className="lbl">{t('lbl_myth')}</p>
                  <p className="text myth-text">{row.myth}</p>
                </div>
                <div className="cell fact-cell">
                  <p className="lbl label-gold">{t('lbl_fact')}</p>
                  <div className="fact-inner">
                    <span className="check-badge-gold">
                      <Check size={12} strokeWidth={2.8} />
                    </span>
                    <p className="text">{row.fact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Check, AlertCircle, FileCheck, X, UploadCloud, CheckCircle2 } from 'lucide-react';

export default function TemplateD({ content }) {
  const { t } = useLanguage();
  const { 
    immediateAction, 
    doFirstChecklist = [], 
    evidenceChecklist = [], 
    timeline = [], 
    possibleOutcomes = [] 
  } = content;

  // Modal Interactive States
  const [showModal, setShowModal] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [generatedTicket, setGeneratedTicket] = useState('');
  const [fileAttached, setFileAttached] = useState(false);

  // Form Inputs State
  const [formData, setFormData] = useState({
    accountNumber: '',
    ticketId: '',
    issueType: 'slippage',
    expectedPrice: '',
    actualPrice: '',
    description: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileAttached(true);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/disputes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          accountRef: formData.accountNumber,
          tradeTicketId: formData.ticketId,
          notes: `Issue: ${formData.issueType}. Expected: ${formData.expectedPrice}, Actual: ${formData.actualPrice}. Description: ${formData.description}`
        })
      });
      if (res.ok) {
        const ticket = await res.json();
        setGeneratedTicket(`TKT-${ticket.id}-WM`);
        setFormSubmitted(true);
      } else {
        const err = await res.json();
        alert(err.error || 'Failed to submit dispute ticket.');
      }
    } catch (err) {
      console.error(err);
      alert('Network error submitting dispute ticket.');
    }
  };

  const closeModal = () => {
    setShowModal(false);
    // Reset form after closing
    setTimeout(() => {
      setFormSubmitted(false);
      setFileAttached(false);
      setFormData({
        accountNumber: '',
        ticketId: '',
        issueType: 'slippage',
        expectedPrice: '',
        actualPrice: '',
        description: ''
      });
    }, 200);
  };

  return (
    <div className="template-d-design-container">
      {/* 1. DO THIS FIRST CARD (PRIMARY ACTION) */}
      <div className="do-this-first-card">
        <div className="action-header">
          <AlertCircle size={22} className="warning-icon-teal" />
          <h3>{t('do_this_first')}</h3>
        </div>
        <p className="immediate-action-text">{immediateAction}</p>

        {/* Primary CTA button - Triggers Modal */}
        <button onClick={() => setShowModal(true)} className="report-btn-primary-trigger">
          {t('report_this_trade')}
        </button>

        {/* 3 Bullet Checklist */}
        {doFirstChecklist.length > 0 && (
          <div className="action-bullets-list">
            {doFirstChecklist.map((item, idx) => (
              <div key={idx} className="bullet-row">
                <span className="check-badge-teal">
                  <Check size={13} strokeWidth={2.8} />
                </span>
                <span className="bullet-text">{item}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 2. EVIDENCE CHECKLIST CARD (SECONDARY GHOST) */}
      {evidenceChecklist.length > 0 && (
        <div className="evidence-checklist-ghost">
          <div className="header-area">
            <FileCheck className="header-icon" size={20} />
            <h3>{t('what_we_need')}</h3>
          </div>
          <p className="ghost-card-sub">{t('what_we_need_sub')}</p>
          <div className="ghost-bullets-list">
            {evidenceChecklist.map((item, idx) => (
              <div key={idx} className="bullet-row">
                <span className="bullet-dot-teal"></span>
                <span className="bullet-text">{item}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 3. PROGRESS TIMELINE (HORIZONTAL TRACKER) */}
      {timeline.length > 0 && (
        <section className="timeline-section-design">
          <h2>{t('what_happens_next')}</h2>
          <div className="timeline-horizontal-tracker">
            <div className="tracker-line-bar"></div>
            <div className="tracker-nodes-row">
              {timeline.map((stepLabel, idx) => (
                <div key={idx} className="tracker-node-col">
                  <div className="node-circle-badge">
                    {idx + 1}
                  </div>
                  <div className="node-label-meta">
                    <h4>{stepLabel}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Timeline help note */}
          <div className="timeline-footer-note">
            <span>{t('timeline_escalate_note')} </span>
            <a href="#ticket" className="help-escalate-link">{t('timeline_escalate_link')}</a>
          </div>
        </section>
      )}

      {/* 4. POSSIBLE OUTCOMES (EQUAL WEIGHT CARDS) */}
      {possibleOutcomes.length > 0 && (
        <section className="outcomes-section-design">
          <h2>{t('possible_outcomes')}</h2>
          <div className="outcomes-equal-grid">
            {possibleOutcomes.map((item, idx) => (
              <div key={idx} className="outcome-card-design glass-panel">
                <h4 className="outcome-card-title">{item.outcome}</h4>
                <p className="outcome-card-description">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 5. INTERACTIVE COMPLAINT SUBMISSION MODAL OVERLAY */}
      {showModal && (
        <div className="dispute-modal-overlay-design" onClick={closeModal}>
          <div 
            className="dispute-modal-container-design glass-panel" 
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button className="modal-close-btn-design" onClick={closeModal}>
              <X size={20} />
            </button>

            {!formSubmitted ? (
              <form onSubmit={handleFormSubmit} className="dispute-submission-form">
                <h2>{t('form_title')}</h2>
                <div className="form-grid-inputs">
                  
                  {/* Account Number */}
                  <div className="input-group-design">
                    <label>{t('form_account')} *</label>
                    <input 
                      type="text" 
                      name="accountNumber" 
                      value={formData.accountNumber} 
                      onChange={handleInputChange} 
                      placeholder="e.g. 5092831" 
                      required 
                    />
                  </div>

                  {/* Trade Ticket ID */}
                  <div className="input-group-design">
                    <label>{t('form_ticket')} *</label>
                    <input 
                      type="text" 
                      name="ticketId" 
                      value={formData.ticketId} 
                      onChange={handleInputChange} 
                      placeholder="e.g. 88390291" 
                      required 
                    />
                  </div>

                  {/* Issue Type */}
                  <div className="input-group-design full-width-input">
                    <label>{t('form_issue_type')} *</label>
                    <select 
                      name="issueType" 
                      value={formData.issueType} 
                      onChange={handleInputChange}
                    >
                      <option value="slippage">{t('form_issue_slippage')}</option>
                      <option value="latency">{t('form_issue_latency')}</option>
                      <option value="outage">{t('form_issue_outage')}</option>
                      <option value="pricing">{t('form_issue_pricing')}</option>
                    </select>
                  </div>

                  {/* Expected Price */}
                  <div className="input-group-design">
                    <label>{t('form_expected')}</label>
                    <input 
                      type="text" 
                      name="expectedPrice" 
                      value={formData.expectedPrice} 
                      onChange={handleInputChange} 
                      placeholder="e.g. 1.08500" 
                    />
                  </div>

                  {/* Actual Price */}
                  <div className="input-group-design">
                    <label>{t('form_actual')}</label>
                    <input 
                      type="text" 
                      name="actualPrice" 
                      value={formData.actualPrice} 
                      onChange={handleInputChange} 
                      placeholder="e.g. 1.08503" 
                    />
                  </div>

                  {/* Description */}
                  <div className="input-group-design full-width-input">
                    <label>{t('form_desc')} *</label>
                    <textarea 
                      name="description" 
                      value={formData.description} 
                      onChange={handleInputChange} 
                      rows="4"
                      placeholder="Describe what occurred during execution..."
                      required
                    ></textarea>
                  </div>

                  {/* Attachment Zone */}
                  <div className="input-group-design full-width-input">
                    <div className="attachment-drop-zone-design">
                      <input 
                        type="file" 
                        id="modal-file-attach" 
                        onChange={handleFileChange}
                        className="file-hidden-input"
                      />
                      <label htmlFor="modal-file-attach" className="drop-zone-label">
                        <UploadCloud size={28} className="cloud-icon" />
                        <span>
                          {fileAttached ? t('form_attached_success') : t('form_attach_prompt')}
                        </span>
                      </label>
                    </div>
                  </div>
                </div>

                <button type="submit" className="form-submit-btn-design">
                  {t('form_submit')}
                </button>
              </form>
            ) : (
              /* Success screen state */
              <div className="dispute-form-success-state">
                <CheckCircle2 size={54} className="success-icon-badge text-gradient-green" />
                <h2>{t('form_success_title')}</h2>
                
                <div className="ticket-ref-banner-design">
                  <span className="banner-lbl">{t('form_success_desc')}</span>
                  <span className="banner-val">{generatedTicket}</span>
                </div>

                <p className="success-sla-subtext">
                  {t('form_success_sla')}
                </p>

                <button onClick={closeModal} className="form-close-success-btn">
                  {t('close_window')}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

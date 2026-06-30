import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Send, X, MessageCircle, ArrowLeft, MoreHorizontal, AlertCircle, HelpCircle, Bot } from 'lucide-react';

const LOCALIZATIONS = {
  en: {
    greeting: "Got questions? Let our AI help.",
    onlineStatus: "AI Assistant is online",
    chatButton: "Start AI Chat",
    kbButton: "Useful Links",
    welcomeMsg: "Hello! I am your Wingo AI Assistant. How can I help you today?",
    inputPlaceholder: "Enter your Message...",
    typicallyReplies: "AI replies instantly.",
    supportName: "Smart AI Assistant",
    tabChat: "AI Chat",
    tabKb: "Useful Links",
    limitReached: "Daily limit reached (5/5 queries).",
    limitBanner: "You have used your 5 free AI questions for today. Need more help? Please submit a support ticket or browse our Help Center.",
    quickLinksTitle: "Frequently Asked Questions",
    quickLink1: "How do I log in to MetaTrader on iOS?",
    quickLink2: "How to withdraw funds via TopChange?",
    quickLink3: "How to open a new trading account?",
    quickLink4: "How do I submit a support ticket?"
  },
  fa: {
    greeting: "من دستیار هوشمند شما هستم چطور میتونم کمکتون کنم؟",
    onlineStatus: "دستیار هوشمند آنلاین است",
    chatButton: "شروع گفتگوی هوشمند",
    kbButton: "لینک‌های مفید",
    welcomeMsg: "سلام! من دستیار هوشمند وینگومارکتس هستم. چطور می‌توانم کمکتان کنم؟",
    inputPlaceholder: "پیام خود را بنویسید...",
    typicallyReplies: "پاسخ‌دهی آنی دستیار هوشمند",
    supportName: "دستیار هوشمند",
    tabChat: "گفتگو",
    tabKb: "لینک‌های مفید",
    limitReached: "حد مجاز روزانه به پایان رسید (۵/۵ پیام)",
    limitBanner: "شما از ۵ پیام مجاز روزانه خود استفاده کرده‌اید. برای راهنمایی بیشتر، لطفاً تیکت پشتیبانی ثبت کنید یا مقالات راهنما را بخوانید.",
    quickLinksTitle: "سوالات متداول کاربران",
    quickLink1: "چطور در سیستم iOS به متاتریدر وارد شوم؟",
    quickLink2: "راهنمای برداشت وجه از طریق تاپ‌چنج",
    quickLink3: "چطور یک حساب معاملاتی جدید بسازم؟",
    quickLink4: "راهنمای نحوه ثبت تیکت پشتیبانی"
  },
  ar: {
    greeting: "لديك أسئلة؟ دع ذكاءنا الاصطناعي يساعدك.",
    onlineStatus: "المساعد الذكي متصل الآن",
    chatButton: "بدء دردشة الذكاء الاصطناعي",
    kbButton: "الروابط المفيدة",
    welcomeMsg: "مرحباً! أنا المساعد الذكي لوينغوماركتس. كيف يمكنني مساعدتك اليوم؟",
    inputPlaceholder: "اكتب رسالتك...",
    typicallyReplies: "رد فوري من الذكاء الاصطناعي",
    supportName: "المساعد الذكي",
    tabChat: "الدردشة",
    tabKb: "الروابط المفيدة",
    limitReached: "تم الوصول للحد اليومي (5/5 استفسارات).",
    limitBanner: "لقد استنفدت 5 أسئلة مجانية للذكاء الاصطناعي اليوم. هل تحتاج لمساعدة إضافية؟ يرجى فتح تذكرة دعم أو تصفح مقالات المساعدة.",
    quickLinksTitle: "الأسئلة الشائعة",
    quickLink1: "كيف يمكنني تسجيل الدخول إلى MetaTrader على iOS؟",
    quickLink2: "كيفية سحب الأموال عبر TopChange؟",
    quickLink3: "كيفية فتح حساب تداول جديد؟",
    quickLink4: "كيف يمكنني تقديم تذكرة دعم؟"
  }
};

// AGENT_AVATARS replaced with clean Bot component icon

const GUIDE_SECTIONS = [
  {
    title: "👤 حساب کاربری",
    links: [
      { label: "ثبت‌نام در وینگو مارکتس", url: "https://clientx.wingomarkets.com/fa/auth?view=register" },
      { label: "راهنمای ثبت‌نام", url: "https://wingomarkets.com/dls/guides/fa/new/How-to-Register.pdf" },
      { label: "ورود به پنل کاربری", url: "https://clientx.wingomarkets.com/fa/auth?view=login" },
      { label: "فراموشی رمز عبور پنل", url: "https://clientx.wingomarkets.com/fa/auth?view=forgot_password" },
      { label: "راهنمای تغییر رمز عبور پنل", url: "https://wingomarkets.com/dls/guides/fa/new/change-user-panel-password-guide.pdf" }
    ]
  },
  {
    title: "🤝 همکاری (IB)",
    links: [
      { label: "درخواست همکاری به عنوان IB", url: "https://wingomarkets.com/dls/guides/fa/new/ib-request-guide-new-panel.pdf" },
      { label: "آشنایی با طرح همکاری IB Empire", url: "https://wingomarkets.com/en/dls/documents/Wingo-Markets-IB-Empire-FA.pdf" }
    ]
  },
  {
    title: "📈 حساب‌های معاملاتی",
    links: [
      { label: "افتتاح حساب دمو", url: "https://wingomarkets.com/dls/guides/fa/new/create-trading-account-guide.pdf" },
      { label: "افتتاح حساب واقعی", url: "https://wingomarkets.com/dls/guides/fa/new/create-trading-account-guide.pdf" },
      { label: "تغییر رمز عبور حساب دمو", url: "https://wingomarkets.com/dls/guides/fa/new/change-demo-password-guide-new-panel.pdf" },
      { label: "تغییر رمز عبور حساب واقعی", url: "https://wingomarkets.com/dls/guides/fa/new/change-real-password-guide-new-panel.pdf" }
    ]
  },
  {
    title: "🛡 احراز هویت (KYC)",
    links: [
      { label: "راهنمای احراز هویت", url: "https://wingomarkets.com/dls/guides/fa/new/KYC_Verification_Guide.pdf" }
    ]
  },
  {
    title: "💳 واریز وجه",
    links: [
      { label: "واریز با ارز دیجیتال", url: "https://wingomarkets.com/dls/guides/fa/new/crypto-deposit-new-panel.pdf" },
      { label: "واریز با تاپ‌چنج", url: "https://wingomarkets.com/dls/guides/fa/new/deposit-tcpay-guide-new-panel.pdf" },
      { label: "واریز با Volet", url: "https://wingomarkets.com/dls/guides/fa/new/deposit-volet-guide-new-panel.pdf" }
    ]
  },
  {
    title: "💸 برداشت وجه",
    links: [
      { label: "برداشت با ارز دیجیتال", url: "https://wingomarkets.com/dls/guides/fa/new/crypto-withdrawal-guide.pdf" },
      { label: "برداشت با تاپ‌چنج", url: "https://wingomarkets.com/dls/guides/fa/new/withdrawal-tcpay-guide-new-panel.pdf" },
      { label: "برداشت با Volet", url: "https://wingomarkets.com/dls/guides/fa/new/withdrawal-volet-guide-new-panel.pdf" }
    ]
  },
  {
    title: "🔄 انتقال وجه",
    links: [
      { label: "انتقال داخلی بین حساب‌ها", url: "https://wingomarkets.com/dls/guides/fa/new/internal-transfer-guide-new-panel.pdf" }
    ]
  },
  {
    title: "🎫 پشتیبانی",
    links: [
      { label: "ثبت تیکت پشتیبانی", url: "https://wingomarkets.com/dls/guides/fa/new/support-ticket-guide-new-panel.pdf" }
    ]
  },
  {
    title: "📱 متاتریدر ۵",
    links: [
      { label: "ورود در ویندوز", url: "https://wingomarkets.com/dls/guides/fa/new/metatrader-login-windows-guide.pdf" },
      { label: "ورود در اندروید", url: "https://wingomarkets.com/dls/guides/fa/new/metatrader-login-android-guide.pdf" },
      { label: "ورود در iOS", url: "https://wingomarkets.com/dls/guides/fa/new/metatrader-login-ios-guide.pdf" }
    ]
  },
  {
    title: "👥 سوشال تریدینگ",
    links: [
      { label: "راهنمای پرووایدر", url: "https://wingomarkets.com/dls/guides/fa/new/Social-trading-guide-provider-FA.pdf" },
      { label: "راهنمای فالوور", url: "https://wingomarkets.com/dls/guides/fa/new/Social-trading-guide-follower-FA.pdf" }
    ]
  }
];

export default function SupportWidget() {
  const { language } = useLanguage();
  const t = LOCALIZATIONS[language] || LOCALIZATIONS.en;
  const isRTL = language === 'fa' || language === 'ar';

  // Widget States: 'closed', 'teaser', 'intro', 'chat'
  const [widgetState, setWidgetState] = useState('closed');
  
  // Tab States: 'chat' or 'kb' (Useful links)
  const [activeTab, setActiveTab] = useState('chat');

  const [sessionId, setSessionId] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [typing, setTyping] = useState(false);
  const [chatCount, setChatCount] = useState(0);

  const messagesEndRef = useRef(null);

  // Load limit and state on mount
  useEffect(() => {
    // Session setting
    let sessId = sessionStorage.getItem('wingo_chat_session');
    if (!sessId) {
      sessId = Date.now() + '-' + Math.random().toString(36).substring(2, 10);
      sessionStorage.setItem('wingo_chat_session', sessId);
    }
    setSessionId(sessId);

    // Load message history
    const savedHistory = sessionStorage.getItem('wingo_chat_history');
    if (savedHistory) {
      setMessages(JSON.parse(savedHistory));
    }

    // Load daily limit count
    const todayStr = new Date().toISOString().split('T')[0];
    const savedLimit = localStorage.getItem('wingo_chat_limit');
    if (savedLimit) {
      const { date, count } = JSON.parse(savedLimit);
      if (date === todayStr) {
        setChatCount(count);
      } else {
        // Reset count for new day
        localStorage.setItem('wingo_chat_limit', JSON.stringify({ date: todayStr, count: 0 }));
        setChatCount(0);
      }
    } else {
      localStorage.setItem('wingo_chat_limit', JSON.stringify({ date: todayStr, count: 0 }));
      setChatCount(0);
    }

    // Trigger small teaser greeting after 4 seconds
    const timer = setTimeout(() => {
      const chatHistory = sessionStorage.getItem('wingo_chat_history');
      if (!chatHistory || JSON.parse(chatHistory).length === 0) {
        setWidgetState(prev => prev === 'closed' ? 'teaser' : prev);
      }
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  // Handle external trigger to open the support widget chat tab
  useEffect(() => {
    const handleOpenWidgetEvent = () => {
      setActiveTab('chat');
      const savedHistory = sessionStorage.getItem('wingo_chat_history');
      if (savedHistory && JSON.parse(savedHistory).length > 0) {
        setWidgetState('chat');
      } else {
        setWidgetState('intro');
      }
    };

    window.addEventListener('open-support-widget', handleOpenWidgetEvent);
    return () => window.removeEventListener('open-support-widget', handleOpenWidgetEvent);
  }, []);

  useEffect(() => {
    if (messages.length > 0) {
      sessionStorage.setItem('wingo_chat_history', JSON.stringify(messages));
    }
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing]);

  const handleOpenChat = () => {
    setActiveTab('chat');
    if (messages.length === 0) {
      setWidgetState('intro');
    } else {
      setWidgetState('chat');
    }
  };

  const handleSendMessage = async (userMsgText) => {
    if (!userMsgText.trim() || typing) return;
    if (chatCount >= 5) {
      alert(t.limitReached);
      return;
    }

    // Increment local limit
    const todayStr = new Date().toISOString().split('T')[0];
    const newCount = chatCount + 1;
    setChatCount(newCount);
    localStorage.setItem('wingo_chat_limit', JSON.stringify({ date: todayStr, count: newCount }));

    const newMessages = [...messages, { role: 'user', content: userMsgText.trim(), timestamp: new Date().toISOString() }];
    setMessages(newMessages);
    setWidgetState('chat');
    setTyping(true);

    try {
      const payload = {
        sessionId,
        message: userMsgText.trim(),
        history: newMessages.map(m => ({ role: m.role, content: m.content })),
        metadata: {
          source: 'demo-chat-ui',
          timestamp: new Date().toISOString(),
          userAgent: navigator.userAgent,
          pageUrl: window.location.href
        }
      };

      const res = await fetch('/api/support-bot/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Webhook returned error.');

      const botReply = data.reply || data.output || "I'm sorry, I couldn't process your request.";
      setMessages(prev => [...prev, { role: 'assistant', content: botReply, timestamp: new Date().toISOString() }]);
    } catch (err) {
      console.error(err);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: language === 'fa' ? 'متأسفانه مشکلی در ارتباط با سرور چت پیش آمده است.' : 'Sorry, there was a connection issue with the support bot service.', 
        timestamp: new Date().toISOString() 
      }]);
    } finally {
      setTyping(false);
    }
  };

  const triggerQuickQuestion = (questionText) => {
    setActiveTab('chat');
    setWidgetState('chat');
    handleSendMessage(questionText);
  };

  // Helper function to render text with clickable URLs separated by spaces
  const renderMessageContent = (text) => {
    if (!text) return '';
    
    // Regular expression to detect URLs
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = text.split(urlRegex);

    return parts.map((part, i) => {
      if (part.match(urlRegex)) {
        return (
          <a 
            key={i} 
            href={part} 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ 
              color: '#4ddcbf', 
              textDecoration: 'underline', 
              wordBreak: 'break-all',
              margin: '0 6px',
              fontWeight: 'bold',
              display: 'inline-block'
            }}
          >
            {part}
          </a>
        );
      }
      return part;
    });
  };

  if (language !== 'fa') return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: '24px',
      right: isRTL ? 'auto' : '24px',
      left: isRTL ? '24px' : 'auto',
      zIndex: 9999,
      fontFamily: 'var(--font-family)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: isRTL ? 'flex-start' : 'flex-end',
      gap: '12px',
      direction: isRTL ? 'rtl' : 'ltr'
    }}>
      
      {/* 1. STATE: TEASER POPUP (GREETING CARD) */}
      {widgetState === 'teaser' && (
        <div style={{
          width: '320px',
          backgroundColor: '#1e1e1e',
          border: '1px solid #333',
          borderRadius: '8px',
          boxShadow: '0 8px 30px rgba(0,0,0,0.5)',
          padding: '16px',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          animation: 'slideUp 0.3s ease-out'
        }}>
          {/* Close teaser */}
          <button 
            onClick={() => setWidgetState('closed')}
            style={{
              position: 'absolute',
              top: '12px',
              right: isRTL ? 'auto' : '12px',
              left: isRTL ? '12px' : 'auto',
              background: 'transparent',
              border: 'none',
              color: '#aaa',
              cursor: 'pointer'
            }}
          >
            <X size={16} />
          </button>

          <div>
            <h4 style={{ color: '#fff', fontSize: '15px', fontWeight: 'bold', margin: '0 0 4px 0' }}>{t.greeting}</h4>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#4ddcbf' }}></span>
              <span style={{ color: '#4ddcbf', fontSize: '11px', fontWeight: 'bold' }}>{t.onlineStatus}</span>
            </div>
          </div>

          {/* Glowing AI Assistant Bot Icon */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #006b5a, #4ddcbf)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              boxShadow: '0 0 10px rgba(77, 220, 191, 0.2)'
            }}>
              <Bot size={20} />
            </div>
          </div>

          {/* Action buttons */}
          <div style={{ display: 'flex', gap: '8px' }}>
            <button
              onClick={handleOpenChat}
              style={{
                flex: 1,
                padding: '8px 12px',
                backgroundColor: '#006b5a',
                color: '#fff',
                border: 'none',
                borderRadius: '20px',
                fontSize: '12px',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'background-color 0.2s'
              }}
              onMouseOver={e => e.currentTarget.style.backgroundColor = '#005244'}
              onMouseOut={e => e.currentTarget.style.backgroundColor = '#006b5a'}
            >
              {t.chatButton}
            </button>
            <button
              onClick={() => {
                setWidgetState('intro');
                setActiveTab('kb');
              }}
              style={{
                padding: '8px 12px',
                backgroundColor: '#2c2c2c',
                color: '#fff',
                border: '1px solid #444',
                borderRadius: '20px',
                fontSize: '12px',
                cursor: 'pointer'
              }}
            >
              {t.kbButton}
            </button>
          </div>
        </div>
      )}

      {/* 2. STATE: EXPANDED CHAT PANEL */}
      {(widgetState === 'intro' || widgetState === 'chat') && (
        <div style={{
          width: '360px',
          height: '540px',
          backgroundColor: '#161616',
          border: '1px solid #333',
          borderRadius: '12px',
          boxShadow: '0 12px 40px rgba(0,0,0,0.6)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          animation: 'slideUp 0.3s ease-out'
        }}>
          {/* HEADER CHROME */}
          {widgetState === 'intro' || activeTab === 'kb' ? (
            // INTRO STATE HEADER (TABS ACCESSIBLE)
            <div style={{
              background: 'linear-gradient(135deg, #006b5a, #005244)',
              padding: '20px 16px 12px 16px',
              color: '#fff',
              position: 'relative'
            }}>
              {/* Tab options */}
              <div style={{ display: 'flex', gap: '16px', fontSize: '13px', marginBottom: '12px' }}>
                <span 
                  style={{ 
                    fontWeight: activeTab === 'chat' ? 'bold' : 'normal', 
                    borderBottom: activeTab === 'chat' ? '2px solid #4ddcbf' : 'none', 
                    paddingBottom: '4px', 
                    cursor: 'pointer',
                    color: activeTab === 'chat' ? '#fff' : 'rgba(255,255,255,0.6)'
                  }}
                  onClick={() => {
                    setActiveTab('chat');
                    if (messages.length > 0) setWidgetState('chat');
                  }}
                >
                  🤖 {t.tabChat}
                </span>
                <span 
                  style={{ 
                    fontWeight: activeTab === 'kb' ? 'bold' : 'normal', 
                    borderBottom: activeTab === 'kb' ? '2px solid #4ddcbf' : 'none', 
                    paddingBottom: '4px', 
                    cursor: 'pointer',
                    color: activeTab === 'kb' ? '#fff' : 'rgba(255,255,255,0.6)'
                  }}
                  onClick={() => setActiveTab('kb')}
                >
                  🔗 {t.tabKb}
                </span>
              </div>

              {/* Close header */}
              <button 
                onClick={() => setWidgetState('closed')}
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: isRTL ? 'auto' : '16px',
                  left: isRTL ? '16px' : 'auto',
                  background: 'transparent',
                  border: 'none',
                  color: '#fff',
                  cursor: 'pointer'
                }}
              >
                <X size={18} />
              </button>

              {activeTab === 'chat' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center', textAlign: 'center', marginTop: '10px' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #161616, #222)',
                    border: '2.5px solid #4ddcbf',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#4ddcbf',
                    boxShadow: '0 0 15px rgba(77, 220, 191, 0.2)'
                  }}>
                    <Bot size={26} />
                  </div>
                  <h4 style={{ fontSize: '16px', fontWeight: 'bold', margin: '6px 0 2px 0' }}>{t.greeting}</h4>
                  <span style={{ fontSize: '12px', color: '#4ddcbf' }}>{t.typicallyReplies}</span>
                </div>
              )}
            </div>
          ) : (
            // CONVERSATION ACTIVE STATE HEADER (SIMPLE)
            <div style={{
              background: 'linear-gradient(135deg, #006b5a, #005244)',
              padding: '12px 16px',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              position: 'relative'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <button 
                  onClick={() => setWidgetState('intro')}
                  style={{ background: 'transparent', border: 'none', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                >
                  <ArrowLeft size={18} style={{ transform: isRTL ? 'rotate(180deg)' : 'none' }} />
                </button>
                    <div style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.08)',
                      border: '1.5px solid #4ddcbf',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#4ddcbf'
                    }}>
                      <Bot size={18} />
                    </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '13px', fontWeight: 'bold' }}>{t.supportName}</span>
                  <span style={{ fontSize: '10px', color: '#4ddcbf' }}>{t.onlineStatus}</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '8px' }}>
                <button style={{ background: 'transparent', border: 'none', color: '#fff', cursor: 'pointer' }} onClick={() => setActiveTab('kb')}>
                  <HelpCircle size={18} />
                </button>
                <button 
                  onClick={() => setWidgetState('closed')}
                  style={{ background: 'transparent', border: 'none', color: '#fff', cursor: 'pointer' }}
                >
                  <X size={18} />
                </button>
              </div>
            </div>
          )}

          {/* PANEL BODY CONTENT */}
          <div style={{
            flex: 1,
            overflowY: 'auto',
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            backgroundColor: '#121212'
          }}>
            {activeTab === 'chat' ? (
              <>
                {/* Intro Welcome message */}
                <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    background: '#1e1e1e',
                    border: '1px solid #333',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#4ddcbf',
                    flexShrink: 0
                  }}>
                    <Bot size={15} />
                  </div>
                  <div style={{
                    backgroundColor: '#1e1e1e',
                    color: '#fff',
                    padding: '10px 14px',
                    borderRadius: '0 12px 12px 12px',
                    fontSize: '13px',
                    maxWidth: '75%',
                    lineHeight: '1.4'
                  }}>
                    {t.welcomeMsg}
                  </div>
                </div>

                {/* List messages */}
                {messages.map((msg, idx) => {
                  const isAssistant = msg.role === 'assistant';
                  return (
                    <div 
                      key={idx} 
                      style={{ 
                        display: 'flex', 
                        gap: '8px', 
                        alignItems: 'flex-start',
                        justifyContent: isAssistant ? 'flex-start' : 'flex-end'
                      }}
                    >
                      {isAssistant && (
                        <div style={{
                          width: '28px',
                          height: '28px',
                          borderRadius: '50%',
                          background: '#1e1e1e',
                          border: '1px solid #333',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#4ddcbf',
                          flexShrink: 0
                        }}>
                          <Bot size={15} />
                        </div>
                      )}
                      <div style={{
                        backgroundColor: isAssistant ? '#1e1e1e' : '#006b5a',
                        color: '#fff',
                        padding: '10px 14px',
                        borderRadius: isAssistant ? '0 12px 12px 12px' : '12px 12px 0 12px',
                        fontSize: '13px',
                        maxWidth: '75%',
                        lineHeight: '1.5',
                        wordBreak: 'break-word',
                        whiteSpace: 'pre-wrap'
                      }}>
                        {isAssistant ? renderMessageContent(msg.content) : msg.content}
                      </div>
                    </div>
                  );
                })}

                {/* Typing Indicator */}
                {typing && (
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <div style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      background: '#1e1e1e',
                      border: '1px solid #333',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#4ddcbf',
                      flexShrink: 0
                    }}>
                      <Bot size={15} />
                    </div>
                    <div style={{
                      backgroundColor: '#1e1e1e',
                      padding: '10px 14px',
                      borderRadius: '0 12px 12px 12px',
                      display: 'flex',
                      gap: '4px',
                      alignItems: 'center',
                      width: 'fit-content'
                    }}>
                      <span className="dot" style={{ width: '6px', height: '6px', backgroundColor: '#aaa', borderRadius: '50%', animation: 'pulse 1s infinite' }}></span>
                      <span className="dot" style={{ width: '6px', height: '6px', backgroundColor: '#aaa', borderRadius: '50%', animation: 'pulse 1s infinite 0.2s' }}></span>
                      <span className="dot" style={{ width: '6px', height: '6px', backgroundColor: '#aaa', borderRadius: '50%', animation: 'pulse 1s infinite 0.4s' }}></span>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </>
            ) : (
              // USEFUL LINKS / FAQ DECK TAB BODY
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', animation: 'slideUp 0.2s ease-out' }}>
                <div style={{
                  padding: '12px',
                  backgroundColor: 'rgba(77, 220, 191, 0.04)',
                  border: '1px dashed rgba(77, 220, 191, 0.2)',
                  borderRadius: '8px',
                  lineHeight: '1.5',
                  fontSize: '12.5px',
                  color: '#bbb'
                }}>
                  <strong style={{ color: '#fff', fontSize: '13px', display: 'block', marginBottom: '6px' }}>🚀 شروع کار با وینگو مارکتس | راهنماهای ضروری</strong>
                  تمام آموزشها و راهنماهای موردنیاز برای ثبتنام، احراز هویت، واریز و برداشت، افتتاح حساب، متاتریدر 5، سوشال تریدینگ و همکاری به عنوان IB را از اینجا بهصورت یکجا در دسترس دارید.
                  <div style={{ marginTop: '8px', fontWeight: 'bold', color: '#4ddcbf' }}>👇 راهنمای موردنظر خود را انتخاب کنید:</div>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {GUIDE_SECTIONS.map((section, secIdx) => (
                    <div key={secIdx} style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <span style={{ fontSize: '12px', fontWeight: 'bold', color: '#4ddcbf', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <span>{section.title}</span>
                      </span>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        {section.links.map((link, linkIdx) => (
                          <a
                            key={linkIdx}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              padding: '8px 12px',
                              backgroundColor: '#1c1c1c',
                              border: '1px solid #2a2a2a',
                              borderRadius: '6px',
                              color: '#d0d0d0',
                              textDecoration: 'none',
                              fontSize: '12px',
                              transition: 'all 0.15s'
                            }}
                            onMouseOver={e => {
                              e.currentTarget.style.backgroundColor = '#262626';
                              e.currentTarget.style.borderColor = '#006b5a';
                              e.currentTarget.style.color = '#fff';
                            }}
                            onMouseOut={e => {
                              e.currentTarget.style.backgroundColor = '#1c1c1c';
                              e.currentTarget.style.borderColor = '#2a2a2a';
                              e.currentTarget.style.color = '#d0d0d0';
                            }}
                          >
                            <span>🔹 {link.label}</span>
                            <span style={{ fontSize: '10px', color: '#666' }}>↗</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* DAILY LIMIT NOTICE BANNER */}
          {chatCount >= 5 && activeTab === 'chat' && (
            <div style={{
              backgroundColor: 'rgba(219, 68, 85, 0.1)',
              borderTop: '1px solid rgba(219, 68, 85, 0.2)',
              padding: '10px 16px',
              fontSize: '11px',
              color: '#ffb4ab',
              lineHeight: '1.4',
              display: 'flex',
              gap: '8px',
              alignItems: 'flex-start'
            }}>
              <AlertCircle size={14} style={{ flexShrink: 0, marginTop: '2px' }} />
              <span>{t.limitBanner}</span>
            </div>
          )}

          {/* INPUT FORM FIELD */}
          {activeTab === 'chat' && (
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(message);
                setMessage('');
              }} 
              style={{
                padding: '12px 16px',
                borderTop: '1px solid #333',
                backgroundColor: '#1e1e1e',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              <input
                type="text"
                value={message}
                onChange={e => setMessage(e.target.value)}
                disabled={chatCount >= 5}
                placeholder={chatCount >= 5 ? t.limitReached : t.inputPlaceholder}
                style={{
                  flex: 1,
                  border: 'none',
                  backgroundColor: 'transparent',
                  color: chatCount >= 5 ? '#555' : '#fff',
                  fontSize: '13px',
                  outline: 'none'
                }}
              />

              <button
                type="submit"
                disabled={!message.trim() || typing || chatCount >= 5}
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: message.trim() && !typing && chatCount < 5 ? '#006b5a' : '#2c2c2c',
                  color: message.trim() && !typing && chatCount < 5 ? '#fff' : '#666',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: message.trim() && !typing && chatCount < 5 ? 'pointer' : 'default',
                  transition: 'all 0.2s'
                }}
              >
                <Send size={14} style={{ transform: isRTL ? 'rotate(180deg)' : 'none' }} />
              </button>
            </form>
          )}

        </div>
      )}

      {/* 3. FLOAT FLOATING GREEN ACTION BUBBLE */}
      {widgetState === 'closed' && (
        <button
          onClick={handleOpenChat}
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            backgroundColor: '#006b5a',
            color: '#fff',
            border: 'none',
            boxShadow: '0 6px 20px rgba(0,107,90,0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'transform 0.2s',
            outline: 'none'
          }}
          onMouseOver={e => e.currentTarget.style.transform = 'scale(1.08)'}
          onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
        >
          <MessageCircle size={24} />
        </button>
      )}

      {/* Inline styles helper animation */}
      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
      `}</style>

    </div>
  );
}

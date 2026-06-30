import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Search, ChevronDown, MessageSquare, ArrowRight, HelpCircle } from 'lucide-react';

const FAQ_CATEGORIES = [
  { id: 'all', label: { en: 'All Questions', fa: 'همه سوالات', ar: 'جميع الأسئلة' } },
  { id: 'account', label: { en: 'Account & Verification', fa: 'حساب کاربری و احراز هویت', ar: 'الحساب والتوثيق' } },
  { id: 'financial', label: { en: 'Deposits & Withdrawals', fa: 'واریز و برداشت', ar: 'الإيداع والسحب' } },
  { id: 'platforms', label: { en: 'Trading Platforms', fa: 'پلتفرم‌های معاملاتی', ar: 'منصات التداول' } },
  { id: 'support', label: { en: 'Support & Help', fa: 'پشتیبانی و راهنما', ar: 'الدعم والمساعدة' } }
];

const FAQ_ITEMS = [
  {
    category: 'account',
    q: {
      en: "How do I verify my trading account?",
      fa: "چگونه حساب معاملاتی خود را احراز هویت کنم؟",
      ar: "كيف يمكنني توثيق حساب التداول الخاص بي؟"
    },
    a: {
      en: "You can verify your trading account by logging into your portal, going to Profile > Verification, and uploading your proof of identity (passport or national ID) and proof of address.",
      fa: "شما می‌توانید با ورود به کابین شخصی خود، مراجعه به بخش پروفایل > احراز هویت، و بارگذاری مدارک هویتی (کارت ملی یا پاسپورت) و تاییدیه آدرس اقدام کنید.",
      ar: "يمكنك توثيق حسابك من خلال تسجيل الدخول إلى لوحة التحكم، والذهاب إلى الملف الشخصي > التحقق، ورفع إثبات الهوية وإثبات العنوان."
    }
  },
  {
    category: 'financial',
    q: {
      en: "What are the available deposit methods?",
      fa: "روش‌های واریز به حساب چیست؟",
      ar: "ما هي طرق الإيداع المتاحة؟"
    },
    a: {
      en: "We support multiple deposit methods including Crypto (USDT, BTC, ETH), TopChange, and bank transfers with zero processing fees.",
      fa: "ما از چندین روش واریز پشتیبانی می‌کنیم، از جمله ارزهای دیجیتال (USDT، بیت‌کوین)، درگاه تاپ‌چنج و واریز مستقیم ریالی با کارمزد صفر.",
      ar: "نحن ندعم طرق إيداع متعددة بما في ذلك العملات الرقمية (USDT، BTC)، وتوب تشينج (TopChange)، والتحويلات البنكية بدون رسوم إضافية."
    }
  },
  {
    category: 'financial',
    q: {
      en: "How long do withdrawals take to process?",
      fa: "برداشت وجه چقدر زمان می‌برد؟",
      ar: "كم من الوقت تستغرق عمليات السحب؟"
    },
    a: {
      en: "Withdrawals are processed by our financial department within 1 to 3 hours during working business days.",
      fa: "درخواست‌های برداشت توسط دپارتمان مالی ما طی ۱ الی ۳ ساعت در طول روزهای کاری پردازش و تایید می‌شوند.",
      ar: "تتم معالجة عمليات السحب من قبل القسم المالي لدينا في غضون 1 إلى 3 ساعات خلال أيام العمل الرسمية."
    }
  },
  {
    category: 'platforms',
    q: {
      en: "Which trading platforms are available?",
      fa: "چه پلتفرم‌های معاملاتی در دسترس است؟",
      ar: "ما هي منصات التداول المتاحة؟"
    },
    a: {
      en: "We offer MetaTrader 5 (MT5) for Windows, macOS, Android, and iOS, as well as our WebTrader portal.",
      fa: "ما پلتفرم محبوب متاتریدر ۵ (MT5) را برای سیستم‌عامل‌های ویندوز، مک، اندروید و iOS به همراه نسخه وب (WebTrader) ارائه می‌دهیم.",
      ar: "نحن نقدم منصة ميتاتريدر 5 (MT5) لأنظمة التشغيل Windows و macOS و Android و iOS، بالإضافة إلى منصة ويب تريدر."
    }
  },
  {
    category: 'support',
    q: {
      en: "How can I contact WingoMarkets customer support?",
      fa: "چگونه با پشتیبانی مشتریان وینگو مارکتس ارتباط برقرار کنم؟",
      ar: "كيف يمكنني الاتصال بدعم عملاء وينجو ماركتس؟"
    },
    a: {
      en: "Our customer support team is available 24/7. You can contact us via our Live Chat, ticket submission inside the portal, or via Telegram support.",
      fa: "تیم پشتیبانی ما به صورت ۲۴ ساعته در ۷ روز هفته در دسترس است. شما می‌توانید از طریق چت زنده سایت، ثبت تیکت در کابین کاربری یا تلگرام با ما در ارتباط باشید.",
      ar: "فريق الدعم لدينا متاح على مدار الساعة طوال أيام الأسبوع. يمكنك الاتصال بنا عبر الدردشة المباشرة، أو تذاكر الدعم، أو تيليجرام."
    }
  },
  {
    category: 'account',
    q: {
      en: "What should I do if I forgot my portal password?",
      fa: "اگر رمز عبور پنل کاربری خود را فراموش کردم چه کنم؟",
      ar: "ماذا أفعل إذا نسيت كلمة مرور لوحة التحكم الخاصة بي؟"
    },
    a: {
      en: "Click on 'Forgot Password' on the login screen, enter your registered email address, and follow the link sent to your inbox to reset your password.",
      fa: "در صفحه ورود روی گزینه 'فراموشی رمز عبور' کلیک کرده، ایمیل ثبت‌نامی خود را وارد نمایید و از طریق لینک ارسال شده به ایمیلتان رمز جدید را تنظیم کنید.",
      ar: "انقر فوق 'نسيت كلمة المرور' في شاشة تسجيل الدخول، وأدخل بريدك الإلكتروني المسجل، واتبع الرابط المرسل إلى بريدك الإلكتروني لإعادة تعيين كلمة المرور."
    }
  },
  {
    category: 'platforms',
    q: {
      en: "How do I log in to MetaTrader 5 on iOS or Android?",
      fa: "چگونه در iOS یا اندروید به متاتریدر ۵ وارد شوم؟",
      ar: "كيف يمكنني تسجيل الدخول إلى ميتاتريدر 5 على نظام iOS أو أندرويد؟"
    },
    a: {
      en: "Open MT5, search for 'Wingo Markets' server, choose WingoMarkets-Live or WingoMarkets-Demo, and log in with your account ID and trading password.",
      fa: "اپلیکیشن MT5 را باز کنید، سرور 'Wingo Markets' را جستجو کنید، یکی از گزینه‌های WingoMarkets-Live یا WingoMarkets-Demo را انتخاب کرده و با نام کاربری و رمز عبور حساب خود وارد شوید.",
      ar: "افتح تطبيق MT5، وابحث عن خادم 'Wingo Markets'، واختر WingoMarkets-Live أو WingoMarkets-Demo، وسجل الدخول باستخدام معرف حسابك وكلمة مرور التداول."
    }
  }
];

export default function Faq() {
  const { language, t, localizePath } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaq, setExpandedFaq] = useState(null);

  const filteredFaqs = FAQ_ITEMS.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const qText = (faq.q[language] || faq.q['en'] || '').toLowerCase();
    const aText = (faq.a[language] || faq.a['en'] || '').toLowerCase();
    const matchesSearch = !searchQuery || qText.includes(searchQuery.toLowerCase()) || aText.includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleOpenAiAssistant = (e) => {
    e.preventDefault();
    window.dispatchEvent(new Event('open-support-widget'));
  };

  const isRTL = language !== 'en';

  return (
    <div className="container main-content faq-page-wrapper" style={{ direction: isRTL ? 'rtl' : 'ltr' }}>
      {/* Breadcrumbs */}
      <nav className="breadcrumbs-design" style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '24px', fontSize: '12px' }}>
        <Link to={localizePath('/help-center')} style={{ color: 'var(--text-dim)' }}>{t('home')}</Link>
        <span style={{ color: '#444' }}>&rarr;</span>
        <span style={{ color: '#fff' }}>{language === 'fa' ? 'سوالات متداول' : (language === 'ar' ? 'الأسئلة الشائعة' : 'FAQ')}</span>
      </nav>

      {/* Hero Header */}
      <section className="portal-hero-design" style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 className="hero-title-design" style={{ fontSize: '28px', fontWeight: '800', marginBottom: '12px' }}>
          {language === 'fa' ? 'سوالات متداول کاربران' : (language === 'ar' ? 'الأسئلة الشائعة' : 'Frequently Asked Questions')}
        </h1>
        <p style={{ color: 'var(--text-dim)', fontSize: '14px', marginBottom: '24px' }}>
          {language === 'fa' ? 'پاسخ به سوالات پرتکرار و مشکلات رایج کاربران در وینگو مارکتس' : (language === 'ar' ? 'اعثر على إجابات للأسئلة الأكثر شيوعًا حول خدماتنا' : 'Find quick answers to the most common questions about our services')}
        </p>

        {/* Local Search Input */}
        <div style={{ maxWidth: '600px', margin: '0 auto', position: 'relative' }}>
          <form onSubmit={e => e.preventDefault()} className="search-bar-form-design">
            <Search size={20} className="input-search-icon" />
            <input
              type="text"
              placeholder={language === 'fa' ? 'جستجو در سوالات متداول...' : (language === 'ar' ? 'البحث في الأسئلة الشائعة...' : 'Search FAQs...')}
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
          </form>
        </div>
      </section>

      {/* Category Pills */}
      <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '32px' }}>
        {FAQ_CATEGORIES.map(cat => (
          <button
            key={cat.id}
            onClick={() => { setActiveCategory(cat.id); setExpandedFaq(null); }}
            style={{
              padding: '10px 18px',
              borderRadius: '20px',
              border: activeCategory === cat.id ? '1px solid #006b5a' : '1px solid #333',
              backgroundColor: activeCategory === cat.id ? 'rgba(0, 182, 155, 0.1)' : '#161616',
              color: activeCategory === cat.id ? '#4ddcbf' : '#aaa',
              fontSize: '13px',
              fontWeight: activeCategory === cat.id ? 'bold' : 'normal',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            {cat.label[language] || cat.label['en']}
          </button>
        ))}
      </div>

      {/* FAQ Accordion List */}
      <div style={{ maxWidth: '800px', margin: '0 auto 48px auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq, idx) => {
            const isExpanded = expandedFaq === idx;
            return (
              <div key={idx} className={`faq-item ${isExpanded ? 'active' : ''}`} style={{
                backgroundColor: '#161616',
                border: isExpanded ? '1px solid #006b5a' : '1px solid #333',
                borderRadius: '8px',
                overflow: 'hidden',
                transition: 'all 0.3s ease'
              }}>
                <button
                  onClick={() => setExpandedFaq(isExpanded ? null : idx)}
                  style={{
                    width: '100%',
                    padding: '18px 24px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: 'transparent',
                    border: 'none',
                    color: '#fff',
                    fontSize: '14px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    outline: 'none',
                    direction: isRTL ? 'rtl' : 'ltr'
                  }}
                >
                  <span style={{ textAlign: isRTL ? 'right' : 'left' }}>{faq.q[language] || faq.q['en']}</span>
                  <Icons.ChevronDown size={16} style={{
                    transition: 'transform 0.3s ease',
                    transform: isExpanded ? 'rotate(180deg)' : 'none',
                    color: isExpanded ? '#4ddcbf' : '#888',
                    marginLeft: isRTL ? '0' : '8px',
                    marginRight: isRTL ? '8px' : '0'
                  }} />
                </button>
                <div style={{
                  maxHeight: isExpanded ? '200px' : '0',
                  overflow: 'hidden',
                  transition: 'max-height 0.3s ease'
                }}>
                  <div style={{
                    padding: '0 24px 18px 24px',
                    fontSize: '13px',
                    lineHeight: '1.6',
                    color: '#aaa',
                    textAlign: isRTL ? 'right' : 'left'
                  }}>
                    {faq.a[language] || faq.a['en']}
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div style={{ textAlign: 'center', padding: '40px', backgroundColor: '#161616', borderRadius: '8px', border: '1px solid #333', color: '#888' }}>
            {language === 'fa' ? 'هیچ سوالی با این مشخصات پیدا نشد.' : (language === 'ar' ? 'لم يتم العثور على نتائج.' : 'No FAQs matched your search.')}
          </div>
        )}
      </div>

      {/* FOOTER CTA BAND */}
      <section className="contact-band-design" style={{ marginTop: '40px' }}>
        <div className="meta">
          <h2>{t('still_need_help')}</h2>
          <p>{t('support_subtext')}</p>
        </div>
        <div className="action-buttons">
          <a href="#ticket" className="contact-btn">
            <MessageSquare size={17} />
            {t('contact_support_btn')}
          </a>
          {language === 'fa' ? (
            <a href="#ai-assistant" onClick={handleOpenAiAssistant} className="status-btn">
              <span className="pulse-indicator"></span>
              دستیار هوشمند
            </a>
          ) : (
            <Link to={localizePath('/help-center/status')} className="status-btn">
              <span className="pulse-indicator"></span>
              {t('system_status')}
            </Link>
          )}
        </div>
      </section>
    </div>
  );
}

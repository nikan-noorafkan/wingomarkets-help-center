export const articles = [
  {
    slug: "how-to-verify-account",
    categorySlug: "account-profile",
    pillar: "help-center",
    template: "A",
    lastUpdated: "2026-06-25",
    readTime: 4,
    title: {
      en: "How to Verify Your Account (KYC Guide)",
      fa: "نحوه احراز هویت حساب کاربری (راهنمای KYC)",
      ar: "كيفية التحقق من حسابك (دليل KYC)"
    },
    description: {
      en: "Learn what documents are required and the step-by-step verification process.",
      fa: "بررسی مدارک مورد نیاز و فرآیند گام‌به‌گام احراز هویت حساب معاملاتی.",
      ar: "تعرف على المستندات المطلوبة وخطوات التحقق من حساب التداول."
    },
    content: {
      en: {
        summary: "To comply with international AML/KYC regulations, WingoMarkets requires proof of identity and residence before funding live accounts.",
        prerequisites: [
          "A valid government-issued ID card, passport, or driver's license.",
          "A utility bill, bank statement, or tax document dated within the last 3 months.",
          "Good quality photos (no cropping, no camera flash glare)."
        ],
        stepsWeb: [
          "Log into the WingoMarkets client portal.",
          "Navigate to Settings > Verification Hub.",
          "Upload a high-resolution image of the front and back of your ID.",
          "Upload your document for Proof of Residence.",
          "Submit the form for review. Average review time is 2 hours during trading days."
        ],
        stepsMobile: [
          "Open the WingoMarkets Mobile App.",
          "Tap the Profile icon in the top left.",
          "Select Verify Account.",
          "Take a photo of your ID and proof of residence using your phone's camera.",
          "Click Submit. You will receive a push notification once approved."
        ],
        edgeCases: [
          {
            title: "My address proof was rejected. Why?",
            text: "Make sure the document displays your full name, home address, and issue date within the past 90 days. Bank screenshots are usually rejected if they lack the official bank logo."
          },
          {
            title: "What if I don't have utility bills in my name?",
            text: "You can upload a signed tenancy agreement or a notarized declaration along with the utility bill under the landlord's name."
          }
        ]
      },
      fa: {
        summary: "جهت انطباق با قوانین بین‌المللی مبارزه با پولشویی (AML)، وینگو مارکتس نیاز به تأیید هویت و نشانی مسکونی شما قبل از فعال‌سازی حساب معاملاتی دارد.",
        prerequisites: [
          "کارت ملی هوشمند، پاسپورت معتبر یا گواهینامه رانندگی.",
          "قبض خدمات عمومی، صورت‌حساب بانکی یا سند ملک که تاریخ آن جدیدتر از ۳ ماه باشد.",
          "تصویر باکیفیت و واضح بدون بریدگی لبه‌ها و انعکاس نور فلش."
        ],
        stepsWeb: [
          "وارد کابین شخصی خود در وینگو مارکتس شوید.",
          "به بخش تنظیمات > مرکز احراز هویت مراجعه کنید.",
          "تصویر روی و پشت مدرک شناسایی خود را آپلود کنید.",
          "مدرک مربوط به تایید آدرس مسکونی را آپلود کنید.",
          "فرم را ارسال کنید. میانگین زمان بررسی در روزهای معاملاتی ۲ ساعت است."
        ],
        stepsMobile: [
          "اپلیکیشن موبایل وینگو مارکتس را باز کنید.",
          "روی آیکون پروفایل در سمت چپ بالا ضربه بزنید.",
          "گزینه احراز هویت حساب را انتخاب کنید.",
          "با دوربین گوشی خود از مدارک عکس گرفته و آپلود کنید.",
          "ارسال را بزنید. پس از تایید، اعلان پاپ‌آپ دریافت خواهید کرد."
        ],
        edgeCases: [
          {
            title: "چرا مدرک تایید آدرس من رد شده است؟",
            text: "مدرک آدرس باید نام کامل شما، آدرس منزل و تاریخ صدور در ۹۰ روز گذشته را نشان دهد. تصویر مانیتور یا اسکرین‌شات‌های بانکی بدون لوگو و نام رسمی بانک معمولاً رد می‌شوند."
          },
          {
            title: "اگر قبضی به نام من ثبت نشده باشد چه کنم؟",
            text: "می‌توانید اجاره‌نامه رسمی یا اقرارنامه محضری به همراه قبض به نام صاحب‌خانه را بارگذاری کنید."
          }
        ]
      },
      ar: {
        summary: "للامتثال للقوانين الدولية لمكافحة غسيل الأموال (AML) وتعرف على عميلك (KYC)، تتطلب WingoMarkets إثبات الهوية والإقامة قبل تمويل الحسابات الحقيقية.",
        prerequisites: [
          "بطاقة هوية حكومية صالحة، جواز سفر، أو رخصة قيادة.",
          "فاتورة مرافق، كشف حساب بنكي، أو وثيقة ضريبية صادرة خلال آخر 3 أشهر.",
          "صور عالية الجودة (بدون اقتصاص الحواف، وبدون لمعان فلاش الكاميرا)."
        ],
        stepsWeb: [
          "قم بتسجيل الدخول إلى بوابة عملاء WingoMarkets.",
          "انتقل إلى الإعدادات > مركز التحقق.",
          "قم بتحميل صورة واضحة للوجهين الأمامي والخلفي للهوية.",
          "قم بتحميل مستند إثبات الإقامة الخاص بك.",
          "أرسل الطلب للمراجعة. متوسط وقت المراجعة هو ساعتان خلال أيام التداول."
        ],
        stepsMobile: [
          "افتح تطبيق WingoMarkets للهاتف.",
          "اضغط على أيقونة الملف الشخصي في أعلى اليسار.",
          "اختر التحقق من الحساب.",
          "التقط صورة لهويتك وإثبات الإقامة باستخدام كاميرا الهاتف.",
          "انقر فوق إرسال. ستتلقى إشعارًا بمجرد الموافقة."
        ],
        edgeCases: [
          {
            title: "تم رفض إثبات العنوان الخاص بي. لماذا؟",
            text: "تأكد من أن المستند يظهر اسمك الكامل، وعنوان سكنك، وتاريخ إصداره خلال آخر 90 يومًا. لقطات الشاشة للحسابات البنكية تُرفض عادةً إذا كانت تفتقر إلى شعار البنك الرسمي."
          },
          {
            title: "ماذا لو لم تكن لدي فواتير خدمات باسمي؟",
            text: "يمكنك تحميل عقد إيجار موقع أو إقرار موثق مع فاتورة خدمات باسم صاحب العقار."
          }
        ]
      }
    },
    relatedSlugs: ["how-to-reset-password", "regulatory-jurisdictions"]
  },
  {
    slug: "how-to-withdraw-funds",
    categorySlug: "deposits-withdrawals",
    pillar: "help-center",
    template: "A",
    lastUpdated: "2026-06-27",
    readTime: 5,
    title: {
      en: "How to Withdraw Funds",
      fa: "چگونگی درخواست برداشت وجه",
      ar: "كيفية سحب الأموال"
    },
    description: {
      en: "A step-by-step walkthrough of requesting withdrawals and payment rules.",
      fa: "راهنمای گام‌به‌گام ثبت درخواست برداشت و قوانین بازگشت وجه به منبع.",
      ar: "خطوات طلب سحب الأموال وقواعد الاسترداد إلى المصدر الأصلي."
    },
    content: {
      en: {
        summary: "Withdrawals are processed back to the source payment method to comply with AML legislation. Learn guidelines, limits, and steps below.",
        prerequisites: [
          "Your trading account must be fully KYC verified.",
          "Ensure you have sufficient free margin (excluding credit bonuses) to cover the withdrawal.",
          "Any open positions must maintain margin requirements after withdrawal."
        ],
        stepsWeb: [
          "Access WingoMarkets Client Area.",
          "Go to Funds Manager > Withdraw.",
          "Select the method you initially deposited with (e.g. Crypto, TCPay, or Volet).",
          "Enter the amount and click Submit Request.",
          "Finance department reviews and processes requests within 24 business hours."
        ],
        stepsMobile: [
          "Open the WingoMarkets Mobile App.",
          "Select the Wallet tab on the bottom menu.",
          "Tap Withdraw.",
          "Enter your transaction details and withdrawal amount.",
          "Verify the request via the 2FA code sent to your email/authenticator."
        ],
        edgeCases: [
          {
            title: "I deposited with Crypto and TCPay. How do I withdraw?",
            text: "Under AML rules, you must withdraw back to each source proportionally. For example, if you deposited $100 via Crypto and $200 via TCPay, your withdrawals must match these proportions until the original deposit totals are cleared."
          },
          {
            title: "If my withdrawal has been pending for over 24 hours, what should I do?",
            text: "First check your email for any communications from our finance desk. If no messages exist, contact live support with your transaction reference ID for immediate escalation."
          }
        ]
      },
      fa: {
        summary: "به منظور رعایت قوانین ضد پولشویی (AML)، درخواست‌های برداشت وجه باید به همان منبع و روشی که واریز انجام شده، بازگردانده شوند.",
        prerequisites: [
          "حساب معاملاتی شما باید به طور کامل احراز هویت (KYC) شده باشد.",
          "از داشتن مارجین آزاد کافی (بدون احتساب بونوس‌های معاملاتی) اطمینان حاصل کنید.",
          "در صورت داشتن پوزیشن باز، پس از برداشت نباید حساب شما در معرض خطر مارجین کال قرار بگیرد."
        ],
        stepsWeb: [
          "وارد کابین شخصی وینگو مارکتس شوید.",
          "به بخش مدیریت سرمایه > برداشت وجه مراجعه کنید.",
          "روشی را که قبلاً با آن واریز کرده‌اید انتخاب کنید (مانند Crypto، TCPay یا Volet).",
          "مبلغ مورد نظر را وارد کرده و دکمه ثبت درخواست را بزنید.",
          "دپارتمان مالی در مدت حداکثر ۲۴ ساعت کاری درخواست را بررسی و تایید می‌کند."
        ],
        stepsMobile: [
          "اپلیکیشن موبایل وینگو مارکتس را باز کنید.",
          "بخش کیف پول را در منوی پایینی انتخاب کنید.",
          "روی برداشت وجه ضربه بزنید.",
          "مشخصات تراکنش و مبلغ را مشخص کنید.",
          "درخواست را با کد تایید دو مرحله‌ای (2FA) ارسال شده به ایمیل یا اپلیکیشن تاییدیه نهایی کنید."
        ],
        edgeCases: [
          {
            title: "من با هر دو روش کریپتو و TCPay واریز داشته‌ام. چگونه برداشت کنم؟",
            text: "بر اساس قوانین AML، شما موظفید ابتدا به همان نسبت واریزی به هر منبع برداشت کنید. به عنوان مثال، اگر ۱۰۰ دلار کریپتو و ۲۰۰ دلار TCPay واریز کرده‌اید، ابتدا باید برداشت‌های خود را تا تسویه مقادیر اولیه به همین نسبت تقسیم کنید."
          },
          {
            title: "اگر برداشت من بیش از ۲۴ ساعت کاری معلق مانده، چه باید بکنم؟",
            text: "ابتدا ایمیل خود را برای دریافت پیام احتمالی از طرف دپارتمان مالی بررسی کنید. در صورتی که پیامی نبود، با شماره شناسه تراکنش به چت زنده مراجعه کرده تا بررسی فوری صورت گیرد."
          }
        ]
      },
      ar: {
        summary: "تتم معالجة السحوبات مرة أخرى إلى طريقة الدفع الأصلية التزامًا بقوانين مكافحة غسيل الأموال (AML). تعرف على الإرشادات والحدود والخطوات أدناه.",
        prerequisites: [
          "يجب أن يكون حساب التداول الخاص بك مؤكد الهوية (KYC) بالكامل.",
          "تأكد من وجود هامش حر كافٍ (باستثناء مكافآت الائتمان) لتغطية المبلغ المسحوب.",
          "يجب أن تحافظ الصفقات المفتوحة على متطلبات الهامش بعد السحب."
        ],
        stepsWeb: [
          "قم بالدخول إلى منطقة العملاء في WingoMarkets.",
          "انتقل إلى مدير الأموال > سحب.",
          "حدد الطريقة التي أودعت بها في البداية (مثل العملات الرقمية أو TCPay أو Volet).",
          "أدخل المبلغ وانقر فوق تقديم الطلب.",
          "يقوم القسم المالي بمراجعة ومعالجة الطلبات خلال 24 ساعة عمل."
        ],
        stepsMobile: [
          "افتح تطبيق WingoMarkets للهاتف.",
          "اختر علامة التبويب المحفظة في القائمة السفلية.",
          "اضغط على سحب.",
          "أدخل تفاصيل المعاملة والمبلغ المراد سحبه.",
          "أكد الطلب من خلال رمز التحقق الثنائي (2FA) المرسل إلى بريدك الإلكتروني."
        ],
        edgeCases: [
          {
            title: "لقد قمت بالإيداع عبر العملات الرقمية وTCPay. كيف يمكنني السحب؟",
            text: "بموجب قواعد AML، يجب عليك السحب إلى كل مصدر بشكل متناسب. على سبيل المثال، إذا قمت بإيداع 100 دولار عبر العملات الرقمية و200 دولار عبر TCPay، يجب أن تتطابق سحوباتك مع هذه النسب حتى يتم تصفية مبالغ الإيداع الأصلية."
          },
          {
            title: "إذا كان سحبي معلقًا لأكثر من 24 ساعة، ماذا يجب أن أفعل؟",
            text: "تحقق أولاً من بريدك الإلكتروني لمعرفة ما إذا كانت هناك أي رسائل مرسلة من القسم المالي. إذا لم تكن هناك رسائل، فاتصل بالدعم المباشر مع معرف المعاملة الخاص بك للتصعيد الفوري."
          }
        ]
      }
    },
    relatedSlugs: ["how-to-deposit-funds", "how-to-report-trade-issue"]
  },
  {
    slug: "how-to-report-trade-issue",
    categorySlug: "incidents-disputes",
    pillar: "help-center",
    template: "D",
    lastUpdated: "2026-06-28",
    readTime: 6,
    title: {
      en: "What to do if you think your trade filled at the wrong price",
      fa: "اقدامات لازم در صورت اجرای معامله در قیمت نادرست",
      ar: "ماذا تفعل إذا كنت تعتقد أن صفقتك قد تم تنفيذها بسعر خاطئ"
    },
    description: {
      en: "A step-by-step guide on reporting price slippage, execution latency, or platform errors to compliance.",
      fa: "راهنمای گام‌به‌گام برای گزارش لغزش قیمت، تاخیر در اجرای سفارش یا خطاهای پلتفرم به دپارتمان انطباق.",
      ar: "دليل خطوة بخطوة حول الإبلاغ عن الانزلاق السعري، تأخر التنفيذ، أو أخطاء المنصة إلى قسم الامتثال."
    },
    content: {
      en: {
        immediateAction: "If you are experiencing active issues with order execution, price gaps, or platform disconnections, DO NOT open compensatory hedge orders. Check the System Status page first, then record details immediately using the guide below.",
        doFirstChecklist: [
          "Note the ticket number of the affected trade.",
          "Note the exact time of execution from terminal logs.",
          "Don't close the position yet to preserve the logs state."
        ],
        evidenceChecklist: [
          "Account number of your trading hub.",
          "Trade ticket ID number.",
          "Screenshot of the chart or error logs if available.",
          "Expected price vs actual execution price."
        ],
        timeline: [
          "Submitted",
          "Under review (target: within 24h)",
          "Outcome shared (target: within 3 business days)"
        ],
        possibleOutcomes: [
          { outcome: "Trade adjusted", description: "If the audit confirms a software latency or routing lag, the entry/exit rate is re-settled to the exact LP price matching the timestamp." },
          { outcome: "Explanation provided, no change", description: "If the order filled correctly at the prevailing market bid/ask during news slippage, LP logs will be shared to show no error occurred." },
          { outcome: "Already resolved correctly", description: "If the position was already corrected by automated execution desk adjustments, the current state remains final." }
        ]
      },
      fa: {
        immediateAction: "اگر با مشکل فعال در ثبت سفارش، شکاف قیمت یا قطع ارتباط با سرور مواجه هستید، از باز کردن معاملات جبرانی (هج) خودداری کنید. ابتدا صفحه وضعیت سیستم را بررسی کرده و سپس با توجه به چک‌لیست زیر جزئیات را یادداشت کنید.",
        evidenceChecklist: [
          "شماره تیکت دقیق معامله یا معاملات آسیب‌دیده.",
          "اسکرین‌شات از پیام خطای ظاهر شده، نرخ لحظه‌ای یا بخش گزارش‌های ترمینال MT5.",
          "فایل لاگ ژورنال متاتریدر ۵ (بخش 'Journal' در قسمت پایینی ترمینال).",
          "زمان دقیق وقوع به وقت سرور (GMT+3)."
        ],
        timeline: [
          { step: "ارسال و ثبت تیکت", duration: "۱۰ دقیقه", desc: "شکایت خود را از طریق تیکت یا ایمیل compliance@wingomarkets.com ارسال کنید و بلافاصله کد رهگیری بگیرید." },
          { step: "حسابرسی فنی معامله", duration: "۱۲ ساعت", desc: "دپارتمان اجرا، نرخ‌های معامله را با تامین‌کنندگان نقدینگی اصلی (LPs) بررسی می‌کند تا لغزش یا اشتباه قیمت را ارزیابی کند." },
          { step: "ارائه پاسخ و تصمیم نهایی", duration: "۲۴ تا ۴۸ ساعت", desc: "دپارتمان انطباق گزارش کاملی از نتایج لاگ‌ها و اقدامات اصلاحی یا توضیحات ارائه خواهد کرد." }
        ],
        possibleOutcomes: [
          { outcome: "اصلاح نرخ معامله", description: "در صورتی که حسابرسی خطای نرم‌افزاری یا تاخیر سرور خارج از نوسانات طبیعی را تایید کند، نرخ معامله به قیمت صحیح بازار اصلاح خواهد شد." },
          { outcome: "جبران خسارت مالی", description: "برای ضررهای ناشی از قطع سرورهای اختصاصی وینگو مارکتس، معاملات آسیب‌دیده باطل و حساب به حالت قبل از بروز حادثه بازگردانده می‌شود." },
          { outcome: "تایید درستی اجرای سفارش در قیمت بازار", description: "اگر معامله در حین اخبار پرنوسان (نظیر CPI یا NFP) باز شده باشد، لاگ‌های نقدینگی به مشتری ارائه می‌شود تا اثبات شود قیمت بهترین نرخ در دسترس بوده است." }
        ]
      },
      ar: {
        immediateAction: "إذا كنت تواجه مشكلات نشطة في تنفيذ الأوامر، أو فجوات سعرية، أو انقطاع الاتصال بالمنصة، فلا تفتح أوامر هيدج تعويضية. تحقق من صفحة حالة النظام أولاً، ثم سجل التفاصيل فورًا باستخدام الدليل أدناه.",
        evidenceChecklist: [
          "رقم التذكرة الدقيق للصفقة أو الصفقات المتأثرة.",
          "لقطات شاشة تظهر رسالة الخطأ، أو عرض السعر، أو السجلات في منصة MT5.",
          "سجلات الجورنال من منصة MT5 (من علامة التبويب 'Journal' في نافذة الترمينال).",
          "وقت حدوث المشكلة بتوقيت السيرفر (GMT+3)."
        ],
        timeline: [
          { step: "التقديم والتسجيل", duration: "10 دقائق", desc: "أرسل شكواك عبر تذكرة البوابة أو البريد compliance@wingomarkets.com. ستحصل على معرف تتبع فريد على الفور." },
          { step: "التدقيق الفني", duration: "12 ساعة", desc: "يقوم مكتب التنفيذ لدينا بالتدقيق في تغذية الأسعار مقابل مزودي السيولة الأساسيين (LPs) للتحقيق في الانزلاق السعري أو أخطاء التسعير." },
          { step: "القرار الرسمي", duration: "24-48 ساعة", desc: "يرسل قسم الامتثال تقرير تدقيق سجل مفصل يوضح ما إذا كانت التعديلات أو المبالغ المستردة أو التوضيحات الفنية تنطبق." }
        ],
        possibleOutcomes: [
          { outcome: "تعديل الصفقة", description: "إذا أكد التدقيق وجود تسعير خاطئ ناتج عن خطأ برمجي أو تأخير في التنفيذ يتجاوز فجوات السوق العادية، فستتم إعادة تسوية الصفقة بسعر السوق الصحيح." },
          { outcome: "التعويض المالي", description: "بالنسبة للخسائر الناجمة مباشرة عن انقطاع خوادم WingoMarkets، يتم إلغاء الصفقات المتأثرة وإعادة الأرصدة إلى حالتها قبل الحادث." },
          { outcome: "تنفيذ الصفقة بسعر السوق المتوفر", description: "إذا حدث التنفيذ أثناء أحداث تقلبات عالية (مثل إصدارات أخبار NFP أو CPI)، فسنقوم بمشاركة سجلات مزود السيولة التي توضح أن السعر المنفذ كان بالفعل أفضل سعر متاح في السوق." }
        ]
      }
    },
    relatedSlugs: ["how-to-withdraw-funds", "execution-model-explained"]
  },
  {
    slug: "execution-model-explained",
    categorySlug: "execution-transparency",
    pillar: "academy",
    template: "B",
    lastUpdated: "2026-06-28",
    readTime: 7,
    title: {
      en: "WingoMarkets Execution Model & Slippage Explained",
      fa: "بررسی مدل اجرای سفارشات و لغزش قیمت (Slippage) در وینگو مارکتس",
      ar: "شرح نموذج تنفيذ الصفقات والانزلاق السعري في WingoMarkets"
    },
    description: {
      en: "Academy guide detailing how orders are routed, spreads are determined, and what drives slippage.",
      fa: "راهنمای آکادمی پیرامون نحوه مسیریابی سفارشات، چگونگی تعیین اسپردها و علل لغزش قیمت.",
      ar: "دليل الأكاديمية يشرح كيفية توجيه الأوامر، كيفية تحديد الفروقات، ومسببات الانزلاق السعري."
    },
    content: {
      en: {
        summary: "Most brokers hide their execution models. At WingoMarkets, we explain order routing, liquidity pools, and conflict mitigations transparently.",
        stakes: "Knowing how your trades are executed directly impacts your profitability. High slippage or latency can turn a winning strategy into a losing one. Understanding order execution helps you select appropriate trading hours and mitigate costs.",
        explanation: "WingoMarkets operates as an STP/ECN broker. When you place a trade, our aggregator matches your order with the best available bid or ask price from a pool of 8 major Tier-1 banks and liquidity providers. We do not run a B-Book 'market-maker' desk that trades against you; we profit solely from fixed commissions or raw spread markups. This aligns our incentives directly with your trading success.",
        calculation: {
          label: "Slippage Math Walkthrough",
          formula: "Actual Execution Price - Requested Price = Slippage (Positive or Negative)",
          example: "You set a Buy Stop on EUR/USD at 1.08500. A high-impact news event is released, causing prices to jump. The nearest available quote from our liquidity providers is 1.08503. Your order triggers and executes at 1.08503. The slippage is 0.3 pips (3 points) negative. Conversely, if market depth allows filling at a better price during news, positive slippage is passed entirely to you."
        },
        misconceptions: [
          { myth: "Brokers manually trigger slippage to steal pips.", fact: "Slippage is a natural market phenomenon caused by liquidity gaps. During high-volatility news, there may literally be no matching buyers/sellers at your requested price. The order executes at the next best price available in the LP's book." },
          { myth: "Hedge orders guarantee protection during outages.", fact: "No. If a platform is disconnected, hedge orders cannot be received by the server. Always check server connection statuses rather than relying solely on platform indicators." }
        ]
      },
      fa: {
        summary: "بسیاری از بروکرها مدل اجرای سفارشات خود را پنهان می‌کنند. ما در وینگو مارکتس چگونگی مسیریابی اردرها، استخرهای نقدینگی و روش رفع تعارض منافع را شفاف توضیح می‌دهیم.",
        stakes: "دانستن نحوه اجرای معاملات تاثیر مستقیم روی سودآوری شما دارد. لغزش بالا یا تاخیر در سفارش می‌تواند استراتژی سودده شما را ضررده کند. درک این مدل به شما کمک می‌کند زمان‌های مناسب‌تری را برای معامله انتخاب کنید.",
        explanation: "وینگو مارکتس به عنوان یک کارگزار STP/ECN فعالیت می‌کند. زمانی که معامله‌ای باز می‌کنید، اردر شما با بهترین قیمت خرید یا فروش در میان ۸ تامین‌کننده نقدینگی (بانک‌های تراز اول جهان) مطابقت داده می‌شود. ما میز معاملاتی B-Book که خلاف جهت شما معامله کند نداریم؛ درآمد ما صرفاً از کمیسیون ثابت یا مارک‌آپ اسپردها تامین می‌شود که این موضوع سود ما را با موفقیت معاملاتی شما همسو می‌سازد.",
        calculation: {
          label: "محاسبه لغزش قیمت (Slippage)",
          formula: "قیمت نهایی اجرا - قیمت درخواستی شما = میزان لغزش (مثبت یا منفی)",
          example: "شما یک سفارش Buy Stop روی EUR/USD در نرخ ۱.۰۸۵۰۰ تنظیم کرده‌اید. خبری مهم منتشر می‌شود و قیمت جهش می‌کند. اولین قیمت در دسترس از تامین‌کننده نقدینگی ۱.۰۸۵۰۳ است. سفارش شما در نرخ ۱.۰۸۵۰۳ اجرا می‌شود که نشان‌دهنده لغزش منفی ۰.۳ پیپی است. به همین شکل اگر عمق بازار اجازه دهد قیمت بهتری اعمال شود، لغزش مثبت کاملاً به نفع مشتری منظور می‌گردد."
        },
        misconceptions: [
          { myth: "بروکرها به صورت دستی لغزش ایجاد می‌کنند تا سود کنند.", fact: "لغزش قیمت فرآیندی طبیعی در بازار است که به دلیل نبود نقدینگی در قیمت‌های خاص رخ می‌دهد. در زمان اخبار مهم، خریدار یا فروشنده‌ای در قیمت دقیق شما وجود ندارد، بنابراین اردر در اولین قیمت مناسب بعدی ثبت می‌شود." },
          { myth: "سفارشات هج ایمنی کامل را در قطعی پلتفرم تضمین می‌کنند.", fact: "خیر. در صورت قطع ارتباط با سرور، سفارش جدید هج نمی‌تواند توسط سرور دریافت شود. همیشه از وضعیت سرور مطمئن شوید و تنها به شاخص‌های ترمینال متکی نباشید." }
        ]
      },
      ar: {
        summary: "تخفي معظم شركات الوساطة نماذج تنفيذ الصفقات الخاصة بها. في WingoMarkets، نشرح توجيه الأوامر، مجمعات السيولة، والحد من تضارب المصالح بكل شفافية.",
        stakes: "معرفة كيفية تنفيذ صفقاتك يؤثر بشكل مباشر على ربحيتك. الانزلاق العالي أو التأخير قد يحول الاستراتيجية الرابحة إلى خاسرة. فهم تنفيذ الأوامر يساعدك في اختيار أوقات التداول المناسبة وتقليل التكاليف.",
        explanation: "تعمل WingoMarkets كوسيط STP/ECN. عندما تفتح صفقة، يقوم مجمع السيولة لدينا بمطابقة أمرك مع أفضل سعر متاح للشراء أو البيع من مجمع يضم 8 بنوك كبرى ومزودي سيولة من الدرجة الأولى. نحن لا نملك مكتب صناعة سوق (B-Book) يتداول ضدك؛ أرباحنا تأتي فقط من العمولات الثابتة أو الفروقات الطفيفة. هذا يجعل مصالحنا متوافقة تمامًا مع نجاح تداولك.",
        calculation: {
          label: "حساب الانزلاق السعري",
          formula: "سعر التنفيذ الفعلي - السعر المطلوب = الانزلاق (إيجابي أو سلبي)",
          example: "قمت بضبط Buy Stop على زوج EUR/USD عند 1.08500. صدر خبر قوي وتسبب في قفزة سعرية. أقرب سعر متوفر لدى مزودي السيولة لدينا هو 1.08503. تم تفعيل أمرك وتنفيذه عند 1.08503. الانزلاق هو 0.3 نقطة سلبي. وبالمثل، إذا كان عمق السوق يسمح بتنفيذ صفقتك بسعر أفضل، يتم تحويل الانزلاق الإيجابي بالكامل لصالحك."
        },
        misconceptions: [
          { myth: "الوسطاء يتسببون بالانزلاق يدويًا لسرقة النقاط.", fact: "الانزلاق هو ظاهرة سوق طبيعية تنتج عن فجوات السيولة. خلال الأخبار ذات التأثير القوي، قد لا يكون هناك مشترون/بائعون عند السعر المطلوب بدقة. يتم تنفيذ الأمر عند السعر المتاح التالي في سجل مزود السيولة." },
          { myth: "أوامر الهيدج تضمن الحماية أثناء انقطاع الخدمة.", fact: "لا. إذا كانت المنصة غير متصلة بالسيرفر، فلن يتمكن السيرفر من تلقي الأوامر الجديدة. تحقق دائمًا من حالة الاتصال بالسيرفر ولا تعتمد فقط على مؤشرات المنصة." }
        ]
      }
    },
    relatedSlugs: ["how-to-report-trade-issue", "how-to-verify-account"]
  },
  {
    slug: "regulatory-jurisdictions",
    categorySlug: "legal-compliance",
    pillar: "help-center",
    template: "C",
    lastUpdated: "2026-06-20",
    readTime: 5,
    title: {
      en: "Regulatory Entities & Jurisdictions Explained",
      fa: "نهادهای نظارتی و حوزه‌های قضایی وینگو مارکتس",
      ar: "الهيئات التنظيمية والتشريعات القضائية لـ WingoMarkets"
    },
    description: {
      en: "Understanding the licenses, regulatory entities, and client protection schemes.",
      fa: "بررسی مجوزها، نهادهای رگولاتوری و طرح‌های حفاظتی از سرمایه مشتریان.",
      ar: "شرح الهيئات والكيانات التنظيمية المرخصة وخطط حماية المستهلك."
    },
    content: {
      en: {
        summary: "WingoMarkets operates through regulated entities worldwide, ensuring security of funds, transparency, and strict capital compliance.",
        sections: [
          {
            title: "Regulated Legal Entities",
            text: "Depending on your country of residence, your trading account is opened with the appropriate regional entity. This determines the regulatory leverage limits and compensation funds that apply to your account."
          },
          {
            title: "Negative Balance Protection",
            text: "All retail trading accounts at WingoMarkets are covered by Negative Balance Protection. Even under extreme market gaps, your account balance will never fall below zero. We auto-close accounts at stop-out levels to guarantee this."
          },
          {
            title: "Segregation of Client Funds",
            text: "Client deposits are kept strictly segregated from WingoMarkets operating capital. All client funds are held in custodian accounts with tier-1 international banks, ensuring your capital is protected and cannot be used for operational expenses."
          }
        ],
        regulatoryNote: "Leverage limits vary under different jurisdictions. EU clients are regulated under ESMA standards (maximum leverage 1:30), while global clients under international licensing can access leverage up to 1:500. Make sure to review your jurisdiction details in the Client Hub."
      },
      fa: {
        summary: "وینگو مارکتس از طریق نهادهای قانونی ثبت شده و رگوله شده در سراسر جهان فعالیت می‌کند تا امنیت وجوه، شفافیت و رعایت قوانین سرمایه‌ای را تضمین نماید.",
        sections: [
          {
            title: "نهادهای قانونی رگوله شده",
            text: "بسته به کشور محل سکونت شما، حساب معاملاتی شما در شعبه منطقه‌ای متناسب افتتاح می‌شود. این موضوع میزان سقف لورج (اهرم) و قوانین جبران خسارت اعمالی روی حساب شما را مشخص می‌سازد."
          },
          {
            title: "حفاظت از موجودی منفی (Negative Balance Protection)",
            text: "تمامی حساب‌های حقیقی خرده‌فروشی در وینگو مارکتس مشمول قانون حفاظت از موجودی منفی هستند. حتی در صورت وجود شدیدترین گپ‌های قیمتی بازار، موجودی حساب شما هیچگاه منفی نخواهد شد و به زیر صفر نخواهد رفت."
          },
          {
            title: "تفکیک وجوه مشتریان (Segregated Funds)",
            text: "سرمایه‌های واریز شده مشتریان به طور کامل از سرمایه عملیاتی بروکر جدا نگهداری می‌شود. وجوه شما در بانک‌های تراز اول بین‌المللی نگهداری می‌گردد تا از عدم استفاده از سرمایه شما برای مخارج بروکر اطمینان حاصل شود."
          }
        ],
        regulatoryNote: "حداکثر اهرم معاملاتی بر اساس حوزه‌های قضایی متفاوت است. مشتریان مقیم اتحادیه اروپا طبق استانداردهای ESMA تا لورج ۱:۳۰ دسترسی دارند، در حالی که مشتریان بین‌المللی در بخش جهانی می‌توانند تا سقف ۱:۵۰۰ از اهرم معاملاتی استفاده کنند."
      },
      ar: {
        summary: "تعمل WingoMarkets من خلال كيانات مرخصة وخاضعة للرقابة في جميع أنحاء العالم، مما يضمن أمان الأموال والشفافية والامتثال المالي الصارم.",
        sections: [
          {
            title: "الكيانات القانونية المرخصة",
            text: "اعتمادًا على بلد إقامتك، يتم فتح حساب التداول الخاص بك مع الكيان الإقليمي المناسب. يحدد هذا حدود الرافعة المالية التنظيمية وصناديق التعويض التي تنطبق على حسابك."
          },
          {
            title: "حماية الرصيد السلبي",
            text: "تتمتع جميع حسابات تداول التجزئة في WingoMarkets بحماية الرصيد السلبي. حتى في ظل فجوات السوق القوية، لن ينخفض رصيد حسابك أبدًا إلى ما دون الصفر."
          },
          {
            title: "فصل أموال العملاء",
            text: "يتم الاحتفاظ بودائع العملاء منفصلة تمامًا عن رأس المال التشغيلي لـ WingoMarkets. يتم الاحتفاظ بجميع أموال العملاء في حسابات بنوك عالمية من الدرجة الأولى لضمان حماية رأس مالك."
          }
        ],
        regulatoryNote: "تختلف حدود الرافعة المالية بموجب التشريعات القضائية المختلفة. يخضع عملاء الاتحاد الأوروبي لمعايير ESMA (الحد الأقصى للرافعة المالية 1:30)، في حين يمكن للعملاء العالميين بموجب الترخيص الدولي الوصول إلى رافعة مالية تصل إلى 1:500."
      }
    },
    relatedSlugs: ["how-to-verify-account", "how-to-report-trade-issue"]
  },
  {
    slug: "how-to-avoid-stopout",
    categorySlug: "risk-management",
    pillar: "academy",
    template: "B",
    lastUpdated: "2026-06-28",
    readTime: 6,
    title: {
      en: "Understanding Margin Calls and Stop-Outs",
      fa: "آشنایی با کال مارجین و استاپ‌اوت (Stop-Out)",
      ar: "فهم نداء الهامش والمستويات الحرجة (Stop-Out)"
    },
    description: {
      en: "If your margin level drops too far, the broker closes your positions automatically — here's exactly when it happens, and how to avoid it.",
      fa: "اگر سطح مارجین شما بیش از حد افت کند، معاملات شما بسته می‌شود. زمان دقیق وقوع و نحوه جلوگیری را بررسی کنید.",
      ar: "إذا انخفض مستوى الهامش لديك بشكل كبير، فسيقوم الوسيط بإغلاق صفقاتك تلقائيًا — تعرف على الوقت المحدد وكيفية تجنب ذلك."
    },
    content: {
      en: {
        summary: "When your account equity can no longer cover your margin requirement, you face margin calls and automatic stop-outs. Learn the calculations below.",
        stakes: "If stop-outs occur, the platform closes your most-losing positions worst-loss first. Understanding this prevents unexpected closures during volatile news.",
        explanation: "When you open a leveraged position, you don't pay the full value — you set aside a deposit called used margin (the collateral your broker locks up to keep the trade open). The rest is effectively borrowed.\n\nYour margin level is simply your equity divided by used margin, shown as a percentage. Equity = your balance plus or minus the profit/loss of open trades. The higher the percentage, the more breathing room you have.",
        calculation: {
          type: "slider",
          label: "Worked Margin Call Example",
          equity: "$4,200",
          usedMargin: "$5,000",
          marginLevel: "84%",
          stopOutVal: "50%",
          marginCallVal: "100%",
          description: "In plain English: at 84% you've already passed the 100% margin-call warning and you're closing in on the 50% stop-out. A little more loss and WingoMarkets starts closing positions for you."
        },
        misconceptions: [
          { myth: "A margin call means my account is already closed.", fact: "A margin call is only a warning at 100% — nothing closes until the 50% stop-out level." },
          { myth: "Adding more leverage gives me a safety buffer.", fact: "Higher leverage lowers your starting margin level, moving you closer to a stop-out, not further." },
          { myth: "The broker picks random trades to close at stop-out.", fact: "Positions are closed worst-loss first, in order, only until your margin level recovers above the threshold." }
        ]
      },
      fa: {
        summary: "وقتی ارزش خالص حساب شما دیگر نمی‌تواند متناسب با مارجین درخواستی باشد، با کال مارجین و استاپ‌اوت مواجه می‌شوید. محاسبات را در ادامه بخوانید.",
        stakes: "اگر استاپ‌اوت رخ دهد، پلتفرم بدترین معاملات شما را ابتدا می‌بندد. درک این فرآیند از بسته شدن ناگهانی معاملات در حین نوسان بازار جلوگیری می‌کند.",
        explanation: "هنگامی که یک پوزیشن معاملاتی با اهرم باز می‌کنید، کل ارزش آن را پرداخت نمی‌کنید بلکه سپرده‌ای به نام مارجین درگیر (وثیقه‌ای که کارگزار برای باز نگه داشتن معامله قفل می‌کند) قرار می‌دهید. مابقی مبلغ عملاً قرض گرفته شده است.\n\nسطح مارجین شما به سادگی ارزش خالص حساب (Equity) تقسیم بر مارجین درگیر است که به صورت درصد نمایش داده می‌شود. ارزش خالص = موجودی شما به علاوه یا منهای سود/زیان پوزیشن‌های باز. هرچه درصد بالاتر باشد، فضای بیشتری برای مانور دارید.",
        calculation: {
          type: "slider",
          label: "مثال کاربردی کال مارجین",
          equity: "۴,۲۰۰ دلار",
          usedMargin: "۵,۰۰۰ دلار",
          marginLevel: "۸۴٪",
          stopOutVal: "۵۰٪",
          marginCallVal: "۱۰۰٪",
          description: "به زبان ساده: در سطح ۸۴٪ شما قبلاً از هشدار کال مارجین ۱۰۰٪ عبور کرده‌اید و به استاپ‌اوت ۵۰٪ نزدیک می‌شوید. کمی ضرر بیشتر و سرور وینگو مارکتس معاملات شما را خواهد بست."
        },
        misconceptions: [
          { myth: "کال مارجین به این معنی است که حساب من قبلاً بسته شده است.", fact: "کال مارجین در سطح ۱۰۰٪ فقط یک هشدار است و هیچ پوزیشنی تا رسیدن به سطح استاپ‌اوت ۵۰٪ بسته نمی‌شود." },
          { myth: "افزایش اهرم (لورج) به من حاشیه امنیت بیشتری می‌دهد.", fact: "لورج بالاتر سطح مارجین اولیه شما را کاهش می‌دهد و شما را به استاپ‌اوت نزدیک‌تر می‌کند، نه دورتر." },
          { myth: "بروکر در زمان استاپ‌اوت معاملات را به صورت تصاضفی می‌بندد.", fact: "معاملات از بدترین ضرر به ترتیب بسته می‌شوند تا سطح مارجین حساب دوباره به بالای حد مجاز بازگردد." }
        ]
      },
      ar: {
        summary: "عندما لا تعود القيمة الصافية لحسابك كافية لتغطية متطلبات الهامش، فإنك تواجه نداء الهامش والإغلاق التلقائي (Stop-Out).",
        stakes: "إذا حدث الإغلاق التلقائي، فإن المنصة تغلق صفقاتك الأكثر خسارة أولاً. فهم هذا يمنع عمليات الإغلاق غير المتوقعة أثناء تقلبات السوق.",
        explanation: "عندما تفتح صفقة برافعة مالية، فإنك لا تدفع القيمة الكاملة — بل تضع وديعة تسمى الهامش المستخدم. مستوى الهامش الخاص بك هو القيمة الصافية مقسومة على الهامش المستخدم. نداء الهامش هو تحذير عند 100%. الإغلاق التلقائي هو الإغلاق الفعلي للصفقات عند 50%.",
        calculation: {
          type: "slider",
          label: "مثال على نداء الهامش",
          equity: "$4,200",
          usedMargin: "$5,000",
          marginLevel: "84%",
          stopOutVal: "50%",
          marginCallVal: "100%",
          description: "باللغة البسيطة: عند 84% تكون قد تجاوزت بالفعل تحذير نداء الهامش 100% وتقترب من الإغلاق التلقائي 50%."
        },
        misconceptions: [
          { myth: "نداء الهامش يعني أن حسابي قد تم إغلاقه بالفعل.", fact: "نداء الهامش هو مجرد تحذير عند 100% — لا يتم إغلاق أي شيء حتى يصل مستوى الهامش إلى 50%." },
          { myth: "إضافة المزيد من الرافعة المالية تمنحني حاجز أمان.", fact: "الرافعة المالية الأعلى تقلل من مستوى الهامش البدائي لديك، مما يقربك من الإغلاق التلقائي." },
          { myth: "يختار الوسيط صفقات عشوائية لإغلاقها عند الإغلاق التلقائي.", fact: "يتم إغلاق الصفقات الأكثر خسارة أولاً، بالترتيب، فقط حتى يتعافى مستوى الهامش الخاص بك فوق الحد المطلوب." }
        ]
      }
    },
    relatedSlugs: ["execution-model-explained", "how-to-report-trade-issue"]
  },
  {
    slug: "how-we-investigate-trade-complaints",
    categorySlug: "incidents-disputes",
    pillar: "help-center",
    template: "C",
    lastUpdated: "2026-06-28",
    readTime: 5,
    title: {
      en: "How we investigate trade complaints",
      fa: "چگونگی بررسی شکایت‌های معاملاتی توسط وینگو مارکتس",
      ar: "كيف نحقق في شكاوى التداول في WingoMarkets"
    },
    description: {
      en: "An inside look at our compliance audits, server log analysis, and LP data matching protocols.",
      fa: "بررسی دقیق ممیزی‌های انطباق، نحوه آنالیز لاگ‌های سرور و تطبیق نرخ‌های نقدینگی.",
      ar: "نظرة داخلية على عمليات تدقيق الامتثال لدينا، وتحليل سجلات السيرفر، وبروتوكولات مطابقة بيانات مزود السيولة."
    },
    content: {
      en: {
        summary: "We treat trade execution disputes with absolute transparency. This document details the process and verification protocols followed by our audit desk.",
        sections: [
          {
            title: "Execution Log Reconciliation",
            text: "When a dispute is raised, our desk pulls the raw server logs matching your account ID and trade ticket. This tracks routing speed, latency, server connectivity status, and order dispatch events down to the millisecond."
          },
          {
            title: "Liquidity Provider (LP) Feed Audits",
            text: "To rule out routing errors, we crosscheck the execution rate against the exact order books of our Tier-1 liquidity providers at that specific millisecond. This determines if negative slippage was caused by normal market gaps or feed anomalies."
          },
          {
            title: "Fair Compensation Rules",
            text: "If an outage or misprice is confirmed on our end, the trade is either re-settled at the correct LP execution price or canceled entirely, with any negative balance resulting from it fully restored."
          }
        ]
      },
      fa: {
        summary: "ما با شفافیت کامل با اختلافات اجرای معامله برخورد می‌کنیم. این سند فرآیند و پروتکل‌های تایید مورد استفاده واحد حسابرسی را توضیح می‌دهد.",
        sections: [
          {
            title: "تطبیق لاگ‌های اجرا",
            text: "هنگام بروز اختلاف، واحد ما لاگ‌های خام سرور را که با شناسه حساب و تیکت معامله شما مطابقت دارد، استخراج می‌کند تا سرعت مسیریابی و ارتباط با سرور را تا میلی‌ثانیه بررسی کند."
          },
          {
            title: "حسابرسی قیمت‌های تامین‌کننده نقدینگی",
            text: "برای رد کردن خطاهای مسیریابی، نرخ معامله را با دفاتر سفارش تامین‌کنندگان نقدینگی در همان میلی‌ثانیه تطبیق می‌دهیم تا علت لغزش قیمت مشخص شود."
          },
          {
            title: "قوانین جبران منصفانه",
            text: "اگر قطعی یا نرخ اشتباه از سمت ما تایید شود، معامله با قیمت صحیح تسویه شده یا به طور کامل لغو می‌شود و بالانس منفی ناشی از آن جبران خواهد شد."
          }
        ]
      },
      ar: {
        summary: "نحن نتعامل مع نزاعات تنفيذ الصفقات بشفافية مطلقة. توضح هذه الوثيقة بروتوكولات التحقق والمراجعة المتبعة.",
        sections: [
          {
            title: "تسوية سجلات التنفيذ",
            text: "عند تقديم شكوى، يسحب مكتبنا سجلات السيرفر الخام المطابقة لمعرف حسابك وتذكرة الصفقة لتتبع سرعة التوجيه وزمن الانتقال بالملي ثانية."
          },
          {
            title: "تدقيق تغذية مزود السيولة",
            text: "للتحقق من أخطاء التوجيه، نطابق سعر التنفيذ مع دفاتر أوامر مزودي السيولة لدينا في تلك الملي ثانية المحددة لتحديد سبب الانزلاق."
          },
          {
            title: "قواعد التعويض العادل",
            text: "إذا تم تأكيد انقطاع الخدمة أو خطأ في التسعير من جانبنا، فسيتم إعادة تسوية الصفقة بسعر التنفيذ الصحيح أو إلغاؤها بالكامل."
          }
        ]
      }
    },
    relatedSlugs: ["how-to-report-trade-issue", "execution-model-explained"]
  },
  {
    slug: "change-demo-password",
    categorySlug: "platforms-tools",
    pillar: "help-center",
    template: "A",
    lastUpdated: "2026-06-28",
    readTime: 4,
    title: {
      en: "How to Change Your MT5 Demo Account Password",
      fa: "راهنمای تغییر رمز عبور حساب دمو متاتریدر ۵",
      ar: "كيفية تغيير كلمة مرور حساب MT5 التجريبي"
    },
    description: {
      en: "Step-by-step guide to resetting and changing your MT5 demo account password inside the new WingoMarkets Client Hub.",
      fa: "راهنمای گام‌به‌گام برای بازیابی و تغییر رمز عبور حساب دمو متاتریدر ۵ در کابین شخصی جدید وینگو مارکتس.",
      ar: "دليل خطوة بخطوة لإعادة تعيين وتغيير كلمة مرور حساب MT5 التجريبي الخاص بك داخل بوابة عملاء WingoMarkets الجديدة."
    },
    content: {
      en: {
        summary: "Easily reset or change your MetaTrader 5 demo account password inside the Client Hub.",
        imageFolder: "change-demo-password",
        prerequisites: [
          "Active demo trading account on MT5",
          "Access to registered email address to receive validation codes"
        ],
        stepsWeb: [
          "Select Demo Account — Log in to your WingoMarkets Client Hub, navigate to the 'Accounts' section, and click on the specific MT5 demo account you want to change.",
          "Enter Account Settings — Scroll down to the bottom of the page, click on 'Account Settings', and select 'Send PIN to Email' to request your validation code.",
          "Enter Verification PIN — Retrieve the verification PIN sent to your email, enter it in the required field, and type your new secure password.",
          "Update Password — Click the 'Update Password' button to finalize your changes and save the new credentials."
        ],
        stepsMobile: [
          "Select Demo Account — Log in to your WingoMarkets Client Hub, navigate to the 'Accounts' section, and click on the specific MT5 demo account you want to change.",
          "Enter Account Settings — Scroll down to the bottom of the page, click on 'Account Settings', and select 'Send PIN to Email' to request your validation code.",
          "Enter Verification PIN — Retrieve the verification PIN sent to your email, enter it in the required field, and type your new secure password.",
          "Update Password — Click the 'Update Password' button to finalize your changes and save the new credentials."
        ],
        edgeCases: [
          {
            title: "I didn't receive the email verification PIN",
            text: "Check your spam or junk folder first. If it is still missing after 2 minutes, click 'Resend PIN' inside settings or verify that your portal email match is correct."
          },
          {
            title: "MT5 fails to log in with new password",
            text: "Ensure you are selecting the correct server 'WingoMarkets-Demo' in Metatrader 5 and that you didn't accidentally include spaces at the start or end of your password."
          }
        ]
      },
      fa: {
        summary: "تغییر و بروزرسانی رمز عبور حساب دمو متاتریدر ۵ در کابین شخصی جدید وینگو مارکتس.",
        imageFolder: "change-demo-password",
        prerequisites: [
          "داشتن حساب دموی فعال در پلتفرم MT5",
          "دسترسی به ایمیل ثبت‌نامی جهت دریافت کدهای تایید"
        ],
        stepsWeb: [
          "مرحله ۱: انتخاب حساب دمو — وارد پنل کاربری خود شوید، از منوی اصلی به بخش 'حساب‌ها' بروید و روی حساب دمو مورد نظرتان کلیک کنید تا وارد بخش جزئیات شوید.",
          "مرحله ۲: ورود به تنظیمات حساب — به پایین صفحه بروید و گزینه 'تنظیمات حساب' را انتخاب کنید. سپس روی دکمه 'ارسال PIN به ایمیل' کلیک کنید.",
          "مرحله ۳: وارد کردن کد و تعیین رمز جدید — کد تایید دریافتی در ایمیل را وارد کرده و رمز عبور جدید را با رعایت نکات امنیتی وارد نمایید.",
          "مرحله ۴: ثبت نهایی تغییرات — روی دکمه 'بروزرسانی رمز عبور' کلیک کنید تا رمز جدید فعال شود."
        ],
        stepsMobile: [
          "مرحله ۱: انتخاب حساب دمو — وارد پنل کاربری خود شوید، از منوی اصلی به بخش 'حساب‌ها' بروید و روی حساب دمو مورد نظرتان کلیک کنید تا وارد بخش جزئیات شوید.",
          "مرحله ۲: ورود به تنظیمات حساب — به پایین صفحه بروید و گزینه 'تنظیمات حساب' را انتخاب کنید. سپس روی دکمه 'ارسال PIN به ایمیل' کلیک کنید.",
          "مرحله ۳: وارد کردن کد و تعیین رمز جدید — کد تایید دریافتی در ایمیل را وارد کرده و رمز عبور جدید را با رعایت نکات امنیتی وارد نمایید.",
          "مرحله ۴: ثبت نهایی تغییرات — روی دکمه 'بروزرسانی رمز عبور' کلیک کنید تا رمز جدید فعال شود."
        ],
        edgeCases: [
          {
            title: "عدم دریافت کد تایید ایمیل (PIN)",
            text: "پوشه اسپم ایمیل خود را بررسی کنید. در صورت عدم دریافت پس از ۲ دقیقه، دوباره روی ارسال کلیک کنید."
          },
          {
            title: "خطای عدم اتصال متاتریدر با رمز جدید",
            text: "مطمئن شوید که نام سرور را روی WingoMarkets-Demo تنظیم کرده‌اید و رمز عبور را بدون فاصله اضافه وارد می‌کنید."
          }
        ]
      },
      ar: {
        summary: "قم بتغيير وتحديث كلمة مرور حساب MT5 التجريبي الخاص بك بسهولة.",
        imageFolder: "change-demo-password",
        prerequisites: [
          "حساب تجريبي نشط في منصة MT5",
          "الوصول إلى البريد الإلكتروني لتلقي رمز التحقق"
        ],
        stepsWeb: [
          "الخطوة 1: اختيار الحساب التجريبي — قم بتسجيل الدخول إلى بوابة عملاء WingoMarkets، وانتقل إلى قسم 'الحسابات'، وانقر فوق حساب MT5 التجريبي الذي تريد تعديله.",
          "الخطوة 2: الدخول إلى إعدادات الحساب — مرر لأسفل الصفحة، واختر 'إعدادات الحساب'، ثم انقر فوق 'إرسال رمز PIN إلى البريد الإلكتروني'.",
          "الخطوة 3: إدخال رمز التحقق وكلمة المرور الجديدة — أدخل رمز PIN المستلم في بريدك الإلكتروني، ثم اكتب كلمة المرور الجديدة الآمنة.",
          "الخطوة 4: تحديث كلمة المرور — انقر فوق زر 'تحديث كلمة المرور' لحفظ التغييرات الجديدة."
        ],
        stepsMobile: [
          "الخطوة 1: اختيار الحساب التجريبي — قم بتسجيل الدخول إلى بوابة عملاء WingoMarkets، وانتقل إلى قسم 'الحسابات'، وانقر فوق حساب MT5 التجريبي الذي تريد تعديله.",
          "الخطوة 2: الدخول إلى إعدادات الحساب — مرر لأسفل الصفحة، واختر 'إعدادات الحساب'، ثم انقر فوق 'إرسال رمز PIN إلى البريد الإلكتروني'.",
          "الخطوة 3: إدخال رمز التحقق وكلمة المرور الجديدة — أدخل رمز PIN المستلم في بريدك الإلكتروني، ثم اكتب كلمة المرور الجديدة الآمنة.",
          "الخطوة 4: تحديث كلمة المرور — انقر فوق زر 'تحديث كلمة المرور' لحفظ التغييرات الجديدة."
        ],
        edgeCases: [
          {
            title: "لم أستلم رمز التحقق PIN في البريد",
            text: "يرجى التحقق من مجلد البريد العشوائي (Spam). إذا لم يصلك خلال دقيقتين، انقر فوق إرسال مجدداً."
          },
          {
            title: "فشل تسجيل الدخول في MT5 بكلمة المرور الجديدة",
            text: "تأكد من اختيار الخادم الصحيح WingoMarkets-Demo وكتابة كلمة المرور بدقة دون فراغات."
          }
        ]
      }
    },
    relatedSlugs: ["execution-model-explained", "how-to-withdraw-funds"]
  },
  {
    slug: "change-real-password",
    categorySlug: "platforms-tools",
    pillar: "help-center",
    template: "A",
    lastUpdated: "2026-06-28",
    readTime: 4,
    title: {
      en: "How to Change Your MT5 Real Account Password",
      fa: "راهنمای تغییر رمز عبور حساب واقعی متاتریدر ۵",
      ar: "كيفية تغيير كلمة مرور حساب MT5 الحقيقي"
    },
    description: {
      en: "Step-by-step guide to resetting and changing your live MT5 real trading account password inside the new Client Hub.",
      fa: "راهنمای گام‌به‌گام برای بازیابی و تغییر رمز عبور حساب واقعی متاتریدر ۵ در کابین شخصی جدید وینگو مارکتس.",
      ar: "دليل خطوة بخطوة لإعادة تعيين وتغيير كلمة مرور حساب MT5 الحقيقي النشط داخل بوابة عملاء WingoMarkets الجديدة."
    },
    content: {
      en: {
        summary: "Easily reset or change your live MetaTrader 5 real trading account password inside the Client Hub.",
        prerequisites: [
          "Active live real trading account on MT5",
          "Access to registered email address to receive validation codes"
        ],
        stepsWeb: [
          "Select Real Account — Log in to your WingoMarkets Client Hub, navigate to the 'Accounts' section, and click on the specific MT5 real account you want to change.",
          "Enter Account Settings — Scroll down to the bottom of the page, click on 'Account Settings', and select 'Send PIN to Email' to request your validation code.",
          "Enter Verification PIN — Retrieve the verification PIN sent to your email, enter it in the required field, and type your new secure password.",
          "Update Password — Click the 'Update Password' button to finalize your changes and save the new credentials."
        ],
        stepsMobile: [
          "Select Real Account — Log in to your WingoMarkets Client Hub, navigate to the 'Accounts' section, and click on the specific MT5 real account you want to change.",
          "Enter Account Settings — Scroll down to the bottom of the page, click on 'Account Settings', and select 'Send PIN to Email' to request your validation code.",
          "Enter Verification PIN — Retrieve the verification PIN sent to your email, enter it in the required field, and type your new secure password.",
          "Update Password — Click the 'Update Password' button to finalize your changes and save the new credentials."
        ],
        edgeCases: [
          {
            title: "I didn't receive the email verification PIN",
            text: "Check your spam or junk folder first. If it is still missing after 2 minutes, click 'Resend PIN' inside settings or verify that your portal email match is correct."
          },
          {
            title: "MT5 fails to log in with new password",
            text: "Ensure you are selecting the correct server 'WingoMarkets-Real' in Metatrader 5 and that you didn't accidentally include spaces at the start or end of your password."
          }
        ]
      },
      fa: {
        summary: "تغییر و بروزرسانی رمز عبور حساب واقعی متاتریدر ۵ در کابین شخصی جدید وینگو مارکتس.",
        prerequisites: [
          "داشتن حساب واقعی فعال در پلتفرم MT5",
          "دسترسی به ایمیل ثبت‌نامی جهت دریافت کدهای تایید"
        ],
        stepsWeb: [
          "مرحله ۱: انتخاب حساب واقعی — بعد از ورود به پنل کاربری خودتون از منوی اصلی به بخش «حساب‌ها» برید. روی حساب واقعی مورد نظرتون کلیک کنید تا وارد بخش جزئیات بشید.",
          "مرحله ۲: ورود به تنظیمات حساب — به پایین صفحه برید و «تنظیمات حساب» رو انتخاب کنید. برای تغییر رمز عبور، حتماً گزینه «ارسال PIN به ایمیل» رو انتخاب کنید.",
          "مرحله ۳: وارد کردن کد و تعیین رمز جدید — بعد از ارسال PIN، یک کد تأیید به ایمیل شما فرستاده می‌شه. کد دریافتی رو در کادر مربوطه وارد کنید. سپس رمز جدید خودتون رو در قسمت «رمز عبور جدید» وارد کنید. (حداقل ۸ کاراکتر، حروف بزرگ و کوچک، و عدد)",
          "مرحله ۴: ثبت نهایی تغییرات — در این مرحله روی دکمه «بروزرسانی رمز عبور» کلیک کنید تا تغییرات ثبت بشه. بعد از ثبت، رمز عبور شما با موفقیت تغییر می‌کنه و می‌تونید با رمز جدید وارد حساب خودتون بشید."
        ],
        stepsMobile: [
          "مرحله ۱: انتخاب حساب واقعی — بعد از ورود به پنل کاربری خودتون از منوی اصلی به بخش «حساب‌ها» برید. روی حساب واقعی مورد نظرتون کلیک کنید تا وارد بخش جزئیات بشید.",
          "مرحله ۲: ورود به تنظیمات حساب — به پایین صفحه برید و «تنظیمات حساب» رو انتخاب کنید. برای تغییر رمز عبور، حتماً گزینه «ارسال PIN به ایمیل» رو انتخاب کنید.",
          "مرحله ۳: وارد کردن کد و تعیین رمز جدید — بعد از ارسال PIN، یک کد تأیید به ایمیل شما فرستاده می‌شه. کد دریافتی رو در کادر مربوطه وارد کنید. سپس رمز جدید خودتون رو در قسمت «رمز عبور جدید» وارد کنید. (حداقل ۸ کاراکتر، حروف بزرگ و کوچک، و عدد)",
          "مرحله ۴: ثبت نهایی تغییرات — در این مرحله روی دکمه «بروزرسانی رمز عبور» کلیک کنید تا تغییرات ثبت بشه. بعد از ثبت، رمز عبور شما با موفقیت تغییر می‌کنه و می‌تونید با رمز جدید وارد حساب خودتون بشید."
        ],
        edgeCases: [
          {
            title: "عدم دریافت کد تایید ایمیل (PIN)",
            text: "پوشه اسپم ایمیل خود را بررسی کنید. در صورت عدم دریافت پس از ۲ دقیقه، دوباره روی ارسال کلیک کنید."
          },
          {
            title: "خطای عدم اتصال متاتریدر با رمز جدید",
            text: "مطمئن شوید که نام سرور را روی WingoMarkets-Real تنظیم کرده‌اید و رمز عبور را بدون فاصله اضافه وارد می‌کنید."
          }
        ]
      },
      ar: {
        summary: "قم بتغيير وتحديث كلمة مرور حساب MT5 الحقيقي الخاص بك بسهولة داخل بوابة العملاء.",
        prerequisites: [
          "حساب حقيقي نشط في منصة MT5",
          "الوصول إلى البريد الإلكتروني لتلقي رمز التحقق"
        ],
        stepsWeb: [
          "الخطوة 1: اختيار الحساب الحقيقي — قم بتسجيل الدخول إلى بوابة عملاء WingoMarkets، وانتقل إلى قسم 'الحسابات'، وانقر فوق حساب MT5 الحقيقي الذي تريد تعديله.",
          "الخطوة 2: الدخول إلى إعدادات الحساب — مرر لأسفل الصفحة، واختر 'إعدادات الحساب'، ثم انقر فوق 'إرسال رمز PIN إلى البريد الإلكتروني'.",
          "الخطوة 3: إدخل رمز التحقق وكلمة المرور الجديدة — أدخل رمز PIN المستلم في بريدك الإلكتروني، ثم اكتب كلمة المرور الجديدة الآمنة (8 أحرف على الأقل، أحرف كبيرة وصغيرة وأرقام).",
          "الخطوة 4: تحديث كلمة المرور — انقر فوق زر 'تحديث كلمة المرور' لحفظ التغييرات الجديدة والبدء في تسجيل الدخول بها."
        ],
        stepsMobile: [
          "الخطوة 1: اختيار الحساب الحقيقي — قم بتسجيل الدخول إلى بوابة عملاء WingoMarkets، وانتقل إلى قسم 'الحسابات'، وانقر فوق حساب MT5 الحقيقي الذي تريد تعديله.",
          "الخطوة 2: الدخول إلى إعدادات الحساب — مرر لأسفل الصفحة، واختر 'إعدادات الحساب'، ثم انقر فوق 'إرسال رمز PIN إلى البريد الإلكتروني'.",
          "الخطوة 3: إدخل رمز التحقق وكلمة المرور الجديدة — أدخل رمز PIN المستلم في بريدك الإلكتروني، ثم اكتب كلمة المرور الجديدة الآمنة (8 أحرف على الأقل، أحرف كبيرة وصغيرة وأرقام).",
          "الخطوة 4: تحديث كلمة المرور — انقر فوق زر 'تحديث كلمة المرور' لحفظ التغييرات الجديدة والبدء في تسجيل الدخول بها."
        ],
        edgeCases: [
          {
            title: "لم أستلم رمز التحقق PIN في البريد",
            text: "يرجى التحقق من مجلد البريد العشوائي (Spam). إذا لم يصلك خلال دقيقتين، انقر فوق إرسال مجدداً."
          },
          {
            title: "فشل تسجيل الدخول في MT5 بكلمة المرور الجديدة",
            text: "تأكد من اختيار الخادم الصحيح WingoMarkets-Real وكتابة كلمة المرور بدقة دون فراغات."
          }
        ]
      }
    },
    relatedSlugs: ["change-demo-password", "execution-model-explained"]
  },
  {
    slug: "change-portal-password",
    categorySlug: "account-profile",
    pillar: "help-center",
    template: "A",
    lastUpdated: "2026-06-28",
    readTime: 3,
    title: {
      en: "How to Change Your Client Portal Password",
      fa: "راهنمای تغییر رمز عبور پنل کاربری",
      ar: "كيفية تغيير كلمة مرور بوابة العميل"
    },
    description: {
      en: "Step-by-step guide to updating your secure WingoMarkets Client Hub user panel password.",
      fa: "راهنمای گام‌به‌گام برای تغییر و بروزرسانی رمز عبور پنل کاربری (کابین شخصی) جدید وینگو مارکتس.",
      ar: "دليل خطوة بخطوة لتحديث كلمة مرور لوحة مستخدم بوابة عملاء WingoMarkets الجديدة."
    },
    content: {
      en: {
        summary: "Easily update or change your WingoMarkets Client Portal cabinet password from your security settings.",
        prerequisites: [
          "Logged-in access to your WingoMarkets Client Portal",
          "Active registered mobile number or email to receive OTP verification codes"
        ],
        stepsWeb: [
          "Go to Profile Settings — Log in to your Client Hub. In the top-left section (next to your username), click on your profile picture, select 'Profile Settings', go to the 'Security' tab, and click 'Change Profile Password'.",
          "Receive and Enter OTP Code — Click on 'Send Code' to receive an OTP verification code on your registered device. Enter the code in the required field, type a new secure password, and confirm it by typing it again.",
          "Confirm and Save Changes — Click 'Confirm & Update' to save your new password. A confirmation toast message saying 'Password Updated' will appear, and you can now log in using your new credentials."
        ],
        stepsMobile: [
          "Go to Profile Settings — Log in to your Client Hub. In the top-left section (next to your username), click on your profile picture, select 'Profile Settings', go to the 'Security' tab, and click 'Change Profile Password'.",
          "Receive and Enter OTP Code — Click on 'Send Code' to receive an OTP verification code on your registered device. Enter the code in the required field, type a new secure password, and confirm it by typing it again.",
          "Confirm and Save Changes — Click 'Confirm & Update' to save your new password. A confirmation toast message saying 'Password Updated' will appear, and you can now log in using your new credentials."
        ],
        edgeCases: [
          {
            title: "I didn't receive the OTP verification code",
            text: "Ensure your mobile signal is active. You can request to receive the OTP code via email by clicking 'Send via Email' or contact live support for assistance."
          },
          {
            title: "New password requirements errors",
            text: "Ensure your password is at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one number and special symbol (e.g. @, #, $)."
          }
        ]
      },
      fa: {
        summary: "تغییر و بروزرسانی رمز عبور کابین شخصی (پنل کاربری) جدید وینگو مارکتس در بخش تنظیمات امنیت.",
        prerequisites: [
          "ورود موفق به کابین شخصی وینگو مارکتس",
          "دسترسی به شماره همراه یا ایمیل ثبت‌نامی جهت دریافت کد تایید دو مرحله‌ای (OTP)"
        ],
        stepsWeb: [
          "مرحله ۱: رفتن به بخش پروفایل — وارد پنل کاربری بشید و از بالای صفحه سمت چپ، روی عکس پروفایل (کنار نام کاربری) کلیک کنید. از منوی باز شده، گزینه «تنظیمات پروفایل» رو انتخاب کنید. به بخش «امنیت» برید و روی «تغییر رمز عبور پروفایل» کلیک کنید.",
          "مرحله ۲: دریافت و وارد کردن کد OTP — روی دکمه «ارسال کد» کلیک کنید تا کد به شماره ثبت شده شما ارسال بشه. کد دریافتی رو در کادر مخصوص وارد کنید. حالا یک رمز جدید انتخاب کنید و در قسمت «رمز جدید» وارد کنید. برای اطمینان، دوباره همون رمز رو در کادر «تأیید رمز جدید» تایپ کنید. (حداقل ۸ کاراکتر، شامل حروف بزرگ و کوچک، عدد و نماد)",
          "مرحله ۳: ثبت نهایی تغییرات — در پایان روی دکمه «تأیید و به روزرسانی» کلیک کنید تا تغییر رمز نهایی بشه. بعد از انجام مراحل، پیام «رمز عبور به روز شد» نمایش داده می‌شه. از این به بعد می‌تونید با رمز جدید وارد پنل کاربری خودتون بشید."
        ],
        stepsMobile: [
          "مرحله ۱: رفتن به بخش پروفایل — وارد پنل کاربری بشید و از بالای صفحه سمت چپ، روی عکس پروفایل (کنار نام کاربری) کلیک کنید. از منوی باز شده، گزینه «تنظیمات پروفایل» رو انتخاب کنید. به بخش «امنیت» برید و روی «تغییر رمز عبور پروفایل» کلیک کنید.",
          "مرحله ۲: دریافت و وارد کردن کد OTP — روی دکمه «ارسال کد» کلیک کنید تا کد به شماره ثبت شده شما ارسال بشه. کد دریافتی رو در کادر مخصوص وارد کنید. حالا یک رمز جدید انتخاب کنید و در قسمت «رمز جدید» وارد کنید. برای اطمینان، دوباره همون رمز رو در کادر «تأیید رمز جدید» تایپ کنید. (حداقل ۸ کاراکتر، شامل حروف بزرگ و کوچک، عدد و نماد)",
          "مرحله ۳: ثبت نهایی تغییرات — در پایان روی دکمه «تأیید و به روزرسانی» کلیک کنید تا تغییر رمز نهایی بشه. بعد از انجام مراحل، پیام «رمز عبور به روز شد» نمایش داده می‌شه. از این به بعد می‌تونید با رمز جدید وارد پنل کاربری خودتون بشید."
        ],
        edgeCases: [
          {
            title: "عدم دریافت کد تایید دو مرحله‌ای (OTP)",
            text: "مطمئن شوید که خط تلفن همراه شما آنتن‌دهی مناسبی دارد. می‌توانید گزینه ارسال از طریق ایمیل را انتخاب کنید یا با پشتیبانی زنده مطرح نمایید."
          },
          {
            title: "خطای عدم پذیرش رمز عبور جدید",
            text: "رمز عبور انتخابی شما باید حداقل ۸ کاراکتر، دارای حروف بزرگ و کوچک، عدد و نمادهای خاص مانند @ یا # باشد."
          }
        ]
      },
      ar: {
        summary: "قم بتحديث أو تغيير كلمة مرور لوحة مستخدم بوابة عملاء WingoMarkets بسهولة من إعدادات الأمان.",
        prerequisites: [
          "تسجيل الدخول إلى بوابة عملاء WingoMarkets الخاصة بك",
          "الوصول إلى رقم الهاتف أو البريد الإلكتروني لتلقي رمز التحقق OTP"
        ],
        stepsWeb: [
          "الخطوة 1: الانتقال إلى إعدادات الملف الشخصي — سجل الدخول إلى بوابة العميل. انقر فوق صورة ملفك الشخصي في الجزء العلوي الأيسر، واختر 'إعدادات الملف الشخصي'، ثم انتقل إلى علامة التبويب 'الأمان' وانقر على 'تغيير كلمة مرور الملف الشخصي'.",
          "الخطوة 2: استلام وإدخال رمز التحقق OTP — انقر فوق زر 'إرسال الرمز' لتلقي رمز التحقق OTP على جهازك المسجل. أدخل الرمز في الحقل المطلوب، ثم اكتب كلمة مرور جديدة آمنة وأكدها بكتابتها مرة أخرى (8 أحرف على الأقل، أحرف كبيرة وصغيرة وأرقام ورموز).",
          "الخطوة 3: تأكيد وحفظ التغييرات — انقر فوق زر 'تأكيد وتحديث' لحفظ كلمة المرور الجديدة. ستظهر لك رسالة تأكيد تفيد بأنه تم 'تحديث كلمة المرور بنجاح'، ويمكنك الآن تسجيل الدخول بها."
        ],
        stepsMobile: [
          "الخطوة 1: الانتقال إلى إعدادات الملف الشخصي — سجل الدخول إلى بوابة العميل. انقر فوق صورة ملفك الشخصي في الجزء العلوي الأيسر، واختر 'إعدادات الملف الشخصي'، ثم انتقل إلى علامة التبويب 'الأمان' وانقر على 'تغيير كلمة مرور الملف الشخصي'.",
          "الخطوة 2: استلام وإدخال رمز التحقق OTP — انقر فوق زر 'إرسال الرمز' لتلقي رمز التحقق OTP على جهازك المسجل. أدخل الرمز في الحقل المطلوب، ثم اكتب كلمة مرور جديدة آمنة وأكدها بكتابتها مرة أخرى (8 أحرف على الأقل، أحرف كبيرة وصغيرة وأرقام ورموز).",
          "الخطوة 3: تأكيد وحفظ التغييرات — انقر فوق زر 'تأكيد وتحديث' لحفظ كلمة المرور الجديدة. ستظهر لك رسالة تأكيد تفيد بأنه تم 'تحديث كلمة المرور بنجاح'، ويمكنك الآن تسجيل الدخول بها."
        ],
        edgeCases: [
          {
            title: "لم أستلم رمز التحقق OTP",
            text: "تأكد من وجود تغطية جيدة للشبكة المحمولة. يمكنك اختيار إرسال الرمز عبر البريد الإلكتروني أو الاتصال بالدعم الفني للحصول على المساعدة."
          },
          {
            title: "أخطاء في شروط كلمة المرور الجديدة",
            text: "تأكد من أن كلمة المرور تتكون من 8 أحرف على الأقل، وتحتوي على أحرف كبيرة وصغيرة وأرقام ورموز خاصة مثل @ أو #."
          }
        ]
      }
    },
    relatedSlugs: ["change-real-password", "how-to-verify-identity"]
  },
  {
    slug: "create-trading-account",
    categorySlug: "platforms-tools",
    pillar: "help-center",
    template: "A",
    lastUpdated: "2026-06-28",
    readTime: 4,
    title: {
      en: "How to Create a Trading Account",
      fa: "راهنمای گام‌به‌گام ساخت حساب معاملاتی",
      ar: "دليل خطوة بخطوة لإنشاء حساب تداول"
    },
    description: {
      en: "Step-by-step guide to opening a new live or demo MT5 trading account inside the new WingoMarkets Client Hub.",
      fa: "راهنمای کامل برای ایجاد حساب معاملاتی جدید واقعی (Real) یا آزمایشی (Demo) متاتریدر ۵ در کابین جدید وینگو مارکتس.",
      ar: "دليل شامل لفتح حساب تداول MT5 حقيقي (Real) أو تجريبي (Demo) جديد داخل بوابة عملاء WingoMarkets الجديدة."
    },
    content: {
      en: {
        summary: "Learn how to easily create a new MetaTrader 5 trading account, select your account type, adjust leverage, and retrieve your credentials.",
        prerequisites: [
          "Logged-in access to your WingoMarkets Client Portal",
          "Completed profile registration"
        ],
        stepsWeb: [
          "Start Account Creation — Log in to your WingoMarkets Client Hub and navigate to the Dashboard. On the main page, find and click the '+ New Account' option to start the creation process.",
          "Select Account Type — Choose the trading account type that matches your trading style: Starter (suited for beginners, min $50, no commission), ECN (for professional traders, low spreads, fast execution, min $500), or Pro (for high-volume trading, min $5,000).",
          "Configure Account Settings — Set your base settings: Choose Account Type (Real for live trading or Demo for virtual practice), select your Leverage (higher leverage increases trading volume but carries higher risk), and choose your Base Currency (usually USD). For Demo accounts, set your virtual starting balance. Click 'Continue'.",
          "Retrieve Account Credentials — Once confirmed, your new account is created. Save your login details in a secure place: Login ID, Trading Server (e.g. WingoGroupLtd-Server), Master Password (for executing trades), and Investor Password (read-only access).",
          "Start Trading — Download your preferred MetaTrader 5 trading platform, log in with your new credentials, and start placing trades."
        ],
        stepsMobile: [
          "Start Account Creation — Log in to your WingoMarkets Client Hub and navigate to the Dashboard. On the main page, find and click the '+ New Account' option to start the creation process.",
          "Select Account Type — Choose the trading account type that matches your trading style: Starter (suited for beginners, min $50, no commission), ECN (for professional traders, low spreads, fast execution, min $500), or Pro (for high-volume trading, min $5,000).",
          "Configure Account Settings — Set your base settings: Choose Account Type (Real for live trading or Demo for virtual practice), select your Leverage (higher leverage increases trading volume but carries higher risk), and choose your Base Currency (usually USD). For Demo accounts, set your virtual starting balance. Click 'Continue'.",
          "Retrieve Account Credentials — Once confirmed, your new account is created. Save your login details in a secure place: Login ID, Trading Server (e.g. WingoGroupLtd-Server), Master Password (for executing trades), and Investor Password (read-only access).",
          "Start Trading — Download your preferred MetaTrader 5 trading platform, log in with your new credentials, and start placing trades."
        ],
        edgeCases: [
          {
            title: "I cannot see the '+ New Account' button",
            text: "Ensure your profile is fully registered. If your KYC verification is pending or rejected, account creation might be temporarily locked until verification is resolved."
          },
          {
            title: "What leverage should I choose?",
            text: "For beginners, we recommend starting with a lower leverage (e.g., 1:100) to control risk. Experienced traders can configure leverage up to 1:500 (global) in their settings."
          }
        ]
      },
      fa: {
        summary: "نحوه ایجاد آسان حساب معاملاتی متاتریدر ۵، انتخاب نوع حساب، تنظیم اهرم معاملاتی و دریافت اطلاعات اتصال.",
        prerequisites: [
          "ورود موفق به کابین شخصی وینگو مارکتس",
          "تکمیل فرآیند ثبت‌نام اولیه پروفایل"
        ],
        stepsWeb: [
          "مرحله ۱: شروع ساخت حساب — بعد از اینکه وارد پنل کاربری شدید، به داشبورد برید. توی صفحه اصلی، گزینه «حساب جدید +» رو می‌بینید؛ روی اون بزنید تا فرایند ساخت حساب معاملاتی شروع بشه.",
          "مرحله ۲: انتخاب نوع حساب — نوع حساب معاملاتی‌تون رو انتخاب کنید: حساب Starter (مناسب شروع، حداقل واریز ۵۰ دلار، بدون کمیسیون)، حساب ECN (مناسب تریدرهای حرفه‌ای، اسپرد پایین و اجرای سریع، حداقل ۵۰۰ دلار)، یا حساب Pro (مناسب معاملات با حجم بالا، حداقل ۵۰۰۰ دلار).",
          "مرحله ۳: تنظیمات حساب — تنظیمات اصلی حساب شامل نوع حساب (Real یا Demo)، میزان اهرم معاملاتی (Leverage)، ارز پایه حساب (معمولاً دلار USD)، و موجودی اولیه (فقط برای حساب آزمایشی) را تعیین کرده و روی «ادامه» بزنید.",
          "مرحله ۴: دریافت اطلاعات حساب — پس از تأیید، حساب ساخته شده و اطلاعات آن شامل شناسه ورود، سرور معاملاتی (WingoGroupLtd-Server)، رمز اصلی ترید و رمز عبور سرمایه‌گذار (Investor) به شما نمایش داده می‌شود. (توجه: این اطلاعات را در جای امن ذخیره کنید).",
          "مرحله ۵: شروع معامله — پلتفرم معاملاتی متاتریدر ۵ را دانلود کنید، با اطلاعات جدید وارد حساب خود شوید و ترید را شروع کنید."
        ],
        stepsMobile: [
          "مرحله ۱: شروع ساخت حساب — بعد از اینکه وارد پنل کاربری شدید، به داشبورد برید. توی صفحه اصلی، گزینه «حساب جدید +» رو می‌بینید؛ روی اون بزنید تا فرایند ساخت حساب معاملاتی شروع بشه.",
          "مرحله ۲: انتخاب نوع حساب — نوع حساب معاملاتی‌تون رو انتخاب کنید: حساب Starter (مناسب شروع، حداقل واریز ۵۰ دلار، بدون کمیسیون)، حساب ECN (مناسب تریدرهای حرفه‌ای، اسپرد پایین و اجرای سریع، حداقل ۵۰۰ دلار)، یا حساب Pro (مناسب معاملات با حجم بالا، حداقل ۵۰۰۰ دلار).",
          "مرحله ۳: تنظیمات حساب — تنظیمات اصلی حساب شامل نوع حساب (Real یا Demo)، میزان اهرم معاملاتی (Leverage)، ارز پایه حساب (معمولاً دلار USD)، و موجودی اولیه (فقط برای حساب آزمایشی) را تعیین کرده و روی «ادامه» بزنید.",
          "مرحله ۴: دریافت اطلاعات حساب — پس از تأیید، حساب ساخته شده و اطلاعات آن شامل شناسه ورود، سرور معاملاتی (WingoGroupLtd-Server)، رمز اصلی ترید و رمز عبور سرمایه‌گذار (Investor) به شما نمایش داده می‌شود. (توجه: این اطلاعات را در جای امن ذخیره کنید).",
          "مرحله ۵: شروع معامله — پلتفرم معاملاتی متاتریدر ۵ را دانلود کنید، با اطلاعات جدید وارد حساب خود شوید و ترید را شروع کنید."
        ],
        edgeCases: [
          {
            title: "عدم نمایش دکمه «حساب جدید +»",
            text: "مطمئن شوید ثبت‌نام اولیه شما کامل است. در صورت نقص مدارک احراز هویت (KYC)، دسترسی به ساخت حساب معاملاتی تا زمان تایید مدارک محدود می‌شود."
          },
          {
            title: "چه میزان اهرمی (Leverage) انتخاب کنم؟",
            text: "برای شروع پیشنهاد می‌شود از اهرم‌های پایین‌تر (مانند ۱:۱۰۰) استفاده کنید تا ریسک مدیریت شود. تریدرهای باتجربه می‌توانند تا اهرم ۱:۵۰۰ را انتخاب کنند."
          }
        ]
      },
      ar: {
        summary: "تعلم كيفية إنشاء حساب تداول MetaTrader 5 جديد بسهولة، واختيار نوع الحساب، وتعديل الرافعة المالية، وتلقي بيانات الدخول.",
        prerequisites: [
          "تسجيل الدخول إلى بوابة عملاء WingoMarkets الخاصة بك",
          "إتمام عملية التسجيل الأساسية للملف الشخصي"
        ],
        stepsWeb: [
          "الخطوة 1: بدء إنشاء الحساب — قم بتسجيل الدخول إلى بوابة العميل وانتقل إلى لوحة التحكم. في الصفحة الرئيسية، انقر فوق خيار '+ حساب جديد' لبدء العملية.",
          "الخطوة 2: اختيار نوع الحساب — اختر نوع الحساب الذي يناسب أسلوب تداولك: Starter (للمبتدئين، الحد الأدنى 50 دولار، بدون عمولة)، ECN (للمحترفين، فروقات منخفضة، تنفيذ فوري، الحد الأدنى 500 دولار)، أو Pro (للأحجام الكبيرة، الحد الأدنى 5,000 دولار).",
          "الخطوة 3: إعدادات الحساب — حدد الإعدادات الأساسية لحسابك: نوع الحساب (حقيقي Real أو تجريبي Demo)، الرافعة المالية (Leverage)، العملة الأساسية (غالباً USD)، والرصيد الافتراضي (للحساب التجريبي فقط). انقر فوق 'متابعة'.",
          "الخطوة 4: استلام بيانات الحساب — بمجرد التأكيد، سيتم إنشاء حسابك وحفظ بيانات الدخول في مكان آمن: معرف الدخول (Login ID)، سيرفر التداول (WingoGroupLtd-Server)، كلمة المرور الأساسية للتداول، وكلمة مرور المستثمر ( Investor للقراءة فقط).",
          "الخطوة 5: البدء في التداول — قم بتنزيل منصة MetaTrader 5 المفضلة لديك، وسجل الدخول باستخدام بيانات حسابك الجديد، وابدأ التداول."
        ],
        stepsMobile: [
          "الخطوة 1: بدء إنشاء الحساب — قم بتسجيل الدخول إلى بوابة العميل وانتقل إلى لوحة التحكم. في الصفحة الرئيسية، انقر فوق خيار '+ حساب جديد' لبدء العملية.",
          "الخطوة 2: اختيار نوع الحساب — اختر نوع الحساب الذي يناسب أسلوب تداولك: Starter (للمبتدئين، الحد الأدنى 50 دولار، بدون عمولة)، ECN (للمحترفين، فروقات منخفضة، تنفيذ فوري، الحد الأدنى 500 دولار)، أو Pro (للأحجام الكبيرة، الحد الأدنى 5,000 دولار).",
          "الخطوة 3: إعدادات الحساب — حدد الإعدادات الأساسية لحسابك: نوع الحساب (حقيقي Real أو تجريبي Demo)، الرافعة المالية (Leverage)، العملة الأساسية (غالباً USD)، والرصيد الافتراضي (للحساب التجريبي فقط). انقر فوق 'متابعة'.",
          "الخطوة 4: استلام بيانات الحساب — بمجرد التأكيد، سيتم إنشاء حسابك وحفظ بيانات الدخول في مكان آمن: معرف الدخول (Login ID)، سيرفر التداول (WingoGroupLtd-Server)، كلمة المرور الأساسية للتداول، وكلمة مرور المستثمر ( Investor للقراءة فقط).",
          "الخطوة 5: البدء في التداول — قم بتنزيل منصة MetaTrader 5 المفضلة لديك، وسجل الدخول باستخدام بيانات حسابك الجديد، وابدأ التداول."
        ],
        edgeCases: [
          {
            title: "لا يظهر لي زر '+ حساب جديد'",
            text: "تأكد من إكمال التسجيل الأساسي لملفك الشخصي. في حال وجود نقص في مستندات التحقق (KYC)، قد يتم قيد إنشاء الحساب مؤقتاً."
          },
          {
            title: "أي رافعة مالية يجب أن أختار؟",
            text: "للمبتدئين، نوصي بالبدء برافعة مالية منخفضة (مثل 1:100) لإدارة المخاطر. يمكن للمتداولين ذوي الخبرة اختيار رافعة مالية تصل إلى 1:500."
          }
        ]
      }
    },
    relatedSlugs: ["change-real-password", "change-demo-password"]
  },
  {
    slug: "crypto-deposit",
    categorySlug: "deposits-withdrawals",
    pillar: "help-center",
    template: "A",
    lastUpdated: "2026-06-28",
    readTime: 4,
    title: {
      en: "How to Deposit Funds via Crypto V3",
      fa: "راهنمای واریز با روش ارز دیجیتال V3",
      ar: "كيفية الإيداع عبر العملات الرقمية V3"
    },
    description: {
      en: "Step-by-step guide to depositing funds into your account using the new secure Crypto V3 payment method.",
      fa: "راهنمای گام‌به‌گام شارژ حساب و واریز وجه با استفاده از درگاه جدید و امن ارز دیجیتال V3 در کابین جدید وینگو مارکتس.",
      ar: "دليل خطوة بخطوة لشحن حسابك التداولي باستخدام بوابة الإيداع الآمنة والمحدثة للعملات الرقمية V3."
    },
    content: {
      en: {
        summary: "Deposit funds quickly and securely using the upgraded Crypto V3 gateway supporting USDT on TRON (TRC20) and TON networks.",
        prerequisites: [
          "Logged-in access to your WingoMarkets Client Portal",
          "Personal crypto wallet with sufficient cryptocurrency balance (e.g., USDT)"
        ],
        stepsWeb: [
          "Go to Deposit Section — Log in to your Client Hub dashboard, and click on the 'Deposit' button located inside the Wallet card.",
          "Select Payment Method — On the deposit page, view the list of available funding channels and select the 'Cryptocurrency (V3)' option. This upgraded V3 channel replaces older methods with smarter routing and higher security.",
          "Choose Cryptocurrency and Network — Select your target trading account from the dropdown list. Select your preferred cryptocurrency (e.g. USDT), click on your transfer network (TRX/TRC20 or TON), enter the deposit amount, verify the transaction breakdown, read and tick the terms checkbox, and click 'Continue'.",
          "Retrieve Wallet Information — Check the deposit details on the confirmation page and click 'Confirm Deposit'. When the transaction initialization message displays, click 'Open Payment Page' to redirect to the secure crypto gateway. Copy the destination wallet address and Memo/Tag (if required).",
          "Complete Personal Wallet Transfer — Scan the QR code or copy the wallet address, execute the transaction from your personal external wallet (like Trust Wallet or Tonkeeper), and click 'I Have Paid' (Done) to complete your request."
        ],
        stepsMobile: [
          "Go to Deposit Section — Log in to your Client Hub dashboard, and click on the 'Deposit' button located inside the Wallet card.",
          "Select Payment Method — On the deposit page, view the list of available funding channels and select the 'Cryptocurrency (V3)' option. This upgraded V3 channel replaces older methods with smarter routing and higher security.",
          "Choose Cryptocurrency and Network — Select your target trading account from the dropdown list. Select your preferred cryptocurrency (e.g. USDT), click on your transfer network (TRX/TRC20 or TON), enter the deposit amount, verify the transaction breakdown, read and tick the terms checkbox, and click 'Continue'.",
          "Retrieve Wallet Information — Check the deposit details on the confirmation page and click 'Confirm Deposit'. When the transaction initialization message displays, click 'Open Payment Page' to redirect to the secure crypto gateway. Copy the destination wallet address and Memo/Tag (if required).",
          "Complete Personal Wallet Transfer — Scan the QR code or copy the wallet address, execute the transaction from your personal external wallet (like Trust Wallet or Tonkeeper), and click 'I Have Paid' (Done) to complete your request."
        ],
        edgeCases: [
          {
            title: "I forgot to include the Memo/Tag during transfer",
            text: "Certain networks (like TON) require a Memo/Tag to match your deposit to your profile. If you missed this, please contact Live Chat support immediately with your TXID hash to manually match the funds."
          },
          {
            title: "How long does the deposit take to reflect?",
            text: "USDT transactions on TRON and TON are verified within 5-10 minutes on the blockchain. Once the network confirms the transaction, it reflects instantly in your WingoMarkets wallet."
          }
        ]
      },
      fa: {
        summary: "واریز سریع و امن به حساب معاملاتی با استفاده از درگاه ارتقایافته ارز دیجیتال V3 بر روی شبکه‌های TRON و TON.",
        prerequisites: [
          "ورود موفق به کابین شخصی وینگو مارکتس",
          "داشتن کیف پول شخصی ارز دیجیتال با موجودی کافی (مانند تتر USDT)"
        ],
        stepsWeb: [
          "مرحله ۱: ورود به بخش واریز — وارد پنل کاربری خودتون بشید. از صفحه داشبورد، در قسمت کیف پول روی دکمه «واریز» کلیک کنید.",
          "مرحله ۲: انتخاب روش واریز — در صفحه واریز، لیست روش‌های موجود به شما نمایش داده می‌شه. گزینه ارز دیجیتال (V3) رو انتخاب کنید تا ادامه فرآیند از طریق این روش انجام بشه. این روش جایگزین سیستم قدیمی واریز شده و با امنیت بالاتر و هوشمندتر انجام می‌شه.",
          "مرحله ۳: انتخاب رمزارز و شبکه — از منوی کشویی حساب مورد نظر خود را انتخاب نمایید. رمزارز دلخواه خودتون رو انتخاب کنید (مثلاً USDT). روی شبکه انتقال موردنظرتان کلیک کنید (TON یا TRX). مبلغ مورد نظرتون رو وارد کنید، قوانین واریز را تایید کرده و روی دکمه «ادامه» کلیک کنید.",
          "مرحله ۴: دریافت اطلاعات پرداخت — در صفحه تایید واریز، جزئیات را چک کرده و روی تایید واریز کلیک کنید. پیامی مبنی بر آغاز تراکنش نمایش داده می‌شود؛ روی باز کردن صفحه پرداخت کلیک کنید تا به درگاه منتقل شوید. در صفحه پرداخت، آدرس کیف پول و Memo/Tag (در صورت وجود) را کپی کنید.",
          "مرحله ۵: انتقال از کیف پول شخصی — در این قسمت آدرس کیف پول، کد کیو آر و شناسه تراکنش نمایش داده میشه؛ انتقال را از کیف پول شخصی خود انجام دهید و با زدن روی گزینه «انجام شد»، تراکنش شما ثبت می‌گردد."
        ],
        stepsMobile: [
          "مرحله ۱: ورود به بخش واریز — وارد پنل کاربری خودتون بشید. از صفحه داشبورد، در قسمت کیف پول روی دکمه «واریز» کلیک کنید.",
          "مرحله ۲: انتخاب روش واریز — در صفحه واریز، لیست روش‌های موجود به شما نمایش داده می‌شه. گزینه ارز دیجیتال (V3) رو انتخاب کنید تا ادامه فرآیند از طریق این روش انجام بشه. این روش جایگزین سیستم قدیمی واریز شده و با امنیت بالاتر و هوشمندتر انجام می‌شه.",
          "مرحله ۳: انتخاب رمزارز و شبکه — از منوی کشویی حساب مورد نظر خود را انتخاب نمایید. رمزارز دلخواه خودتون رو انتخاب کنید (مثلاً USDT). روی شبکه انتقال موردنظرتان کلیک کنید (TON یا TRX). مبلغ مورد نظرتون رو وارد کنید، قوانین واریز را تایید کرده و روی دکمه «ادامه» کلیک کنید.",
          "مرحله ۴: دریافت اطلاعات پرداخت — در صفحه تایید واریز، جزئیات را چک کرده و روی تایید واریز کلیک کنید. پیامی مبنی بر آغاز تراکنش نمایش داده می‌شود؛ روی باز کردن صفحه پرداخت کلیک کنید تا به درگاه منتقل شوید. در صفحه پرداخت، آدرس کیف پول و Memo/Tag (در صورت وجود) را کپی کنید.",
          "مرحله ۵: انتقال از کیف پول شخصی — در این قسمت آدرس کیف پول، کد کیو آر و شناسه تراکنش نمایش داده میشه؛ انتقال را از کیف پول شخصی خود انجام دهید و با زدن روی گزینه «انجام شد»، تراکنش شما ثبت می‌گردد."
        ],
        edgeCases: [
          {
            title: "فراموش کردن وارد کردن کد Memo/Tag در هنگام انتقال",
            text: "برخی شبکه‌ها (مانند TON) برای تطابق پرداخت به شناسه Memo نیاز دارند. در صورت فراموشی، سریعاً با بخش پشتیبانی زنده به همراه کد TXID تراکنش تماس بگیرید."
          },
          {
            title: "زمان پردازش و تایید واریز چقدر است؟",
            text: "تراکنش‌های تتر روی شبکه‌های TRON و TON معمولاً در عرض ۵ الی ۱۰ دقیقه تایید بلاکچین می‌گیرند و بلافاصله در کیف پول شما اعمال می‌شوند."
          }
        ]
      },
      ar: {
        summary: "قم بإيداع الأموال بسرعة وأمان في حساب التداول الخاص بك باستخدام بوابة العملات الرقمية V3 المطورة على شبكات TRON و TON.",
        prerequisites: [
          "تسجيل الدخول إلى بوابة عملاء WingoMarkets الخاصة بك",
          "محفظة عملات رقمية شخصية تحتوي على رصيد كافٍ (مثل USDT)"
        ],
        stepsWeb: [
          "الخطوة 1: الدخول إلى قسم الإيداع — قم بتسجيل الدخول إلى لوحة التحكم الخاصة بك. في قسم المحفظة، انقر فوق زر 'إيداع'.",
          "الخطوة 2: اختيار طريقة الإيداع — في صفحة الإيداع، ستظهر لك قائمة بالطرق المتاحة. اختر 'العملات الرقمية (V3)' لمتابعة العملية. تحل هذه الطريقة محل النظام القديم بمزيد من الأمان والتوجيه الذكي.",
          "الخطوة 3: اختيار العملة الرقمية والشبكة — اختر الحساب المطلوب من القائمة المنسدلة. حدد العملة الرقمية التي تريدها (مثل USDT)، ثم انقر فوق شبكة التحويل (TON أو TRX/TRC20). أدخل المبلغ المطلوب، وراجع التفاصيل، ووافق على الشروط، ثم انقر فوق 'متابعة'.",
          "الخطوة 4: الحصول على معلومات الدفع — راجع تفاصيل الإيداع في صفحة التأكيد، وانقر فوق 'تأكيد الإيداع'. عند ظهور رسالة بدء المعاملة، انقر فوق 'فتح صفحة الدفع' ليتم تحويلك إلى البوابة الآمنة. انسخ عنوان المحفظة ورمز Memo/Tag (إن وجد).",
          "الخطوة 5: التحويل من محفظتك الشخصية — في هذه الخطوة، سيظهر عنوان المحفظة ورمز QR. قم بإجراء التحويل من محفظتك الشخصية (مثل Trust Wallet أو Tonkeeper)، ثم انقر فوق 'تم الدفع' (انتهى) لتسجيل المعاملة."
        ],
        stepsMobile: [
          "الخطوة 1: الدخول إلى قسم الإيداع — قم بتسجيل الدخول إلى لوحة التحكم الخاصة بك. في قسم المحفظة، انقر فوق زر 'إيداع'.",
          "الخطوة 2: اختيار طريقة الإيداع — في صفحة الإيداع، ستظهر لك قائمة بالطرق المتاحة. اختر 'العملات الرقمية (V3)' لمتابعة العملية. تحل هذه الطريقة محل النظام القديم بمزيد من الأمان والتوجيه الذكي.",
          "الخطوة 3: اختيار العملة الرقمية والشبكة — اختر الحساب المطلوب من القائمة المنسدلة. حدد العملة الرقمية التي تريدها (مثل USDT)، ثم انقر فوق شبكة التحويل (TON أو TRX/TRC20). أدخل المبلغ المطلوب، وراجع التفاصيل، ووافق على الشروط، ثم انقر فوق 'متابعة'.",
          "الخطوة 4: الحصول على معلومات الدفع — راجع تفاصيل الإيداع في صفحة التأكيد، وانقر فوق 'تأكيد الإيداع'. عند ظهور رسالة بدء المعاملة، انقر فوق 'فتح صفحة الدفع' ليتم تحويلك إلى البوابة الآمنة. انسخ عنوان المحفظة ورمز Memo/Tag (إن وجد).",
          "الخطوة 5: التحويل من محفظتك الشخصية — في هذه الخطوة، سيظهر عنوان المحفظة ورمز QR. قم بإجراء التحويل من محفظتك الشخصية (مثل Trust Wallet أو Tonkeeper)، ثم انقر فوق 'تم الدفع' (انتهى) لتسجيل المعاملة."
        ],
        edgeCases: [
          {
            title: "نسيت إدخل رمز التحقق Memo/Tag أثناء التحويل",
            text: "تتطلب بعض الشبكات (مثل شبكة TON) رمز Memo لمطابقة الإيداع بحسابك. في حال النسيان، يرجى التواصل فوراً مع الدعم المباشر وتزويدهم برمز TXID للمطابقة اليدوية."
          },
          {
            title: "ما هو الوقت المستغرق لتأكيد الإيداع؟",
            text: "تستغرق معاملات USDT على شبكات TRON و TON عادةً من 5 إلى 10 دقائق لتأكيدها على البلوكشين وتنعكس فوراً في محفظتك."
          }
        ]
      }
    },
    relatedSlugs: ["how-to-withdraw-funds", "payment-methods-compared"]
  },
  {
    slug: "crypto-withdrawal",
    categorySlug: "deposits-withdrawals",
    pillar: "help-center",
    template: "A",
    lastUpdated: "2026-06-28",
    readTime: 4,
    title: {
      en: "How to Withdraw Funds via Crypto V3",
      fa: "راهنمای برداشت با روش ارز دیجیتال V3",
      ar: "كيفية السحب عبر العملات الرقمية V3"
    },
    description: {
      en: "Step-by-step guide to withdrawing funds from your trading account to your personal crypto wallet using the new secure Crypto V3 method.",
      fa: "راهنمای گام‌به‌گام برداشت وجه از حساب معاملاتی به کیف پول شخصی با استفاده از درگاه جدید و امن ارز دیجیتال V3 در کابین جدید وینگو مارکتس.",
      ar: "دليل خطوة بخطوة لسحب الأموال من حسابك التداولي إلى محفظتك الشخصية باستخدام بوابة العملات الرقمية V3 الآمنة."
    },
    content: {
      en: {
        summary: "Withdraw your profits and capital securely using the upgraded Crypto V3 withdrawal gateway. Manage whitelisted destination wallets and authorize with dynamic email security PINs.",
        prerequisites: [
          "Logged-in access to your WingoMarkets Client Portal",
          "Available withdrawable balance in your trading account or wallet",
          "Verified profile status (KYC approved)"
        ],
        stepsWeb: [
          "Go to Withdrawal Section — Log in to your Client Hub dashboard, and click on the 'Withdraw' button.",
          "Select Payment Method — In the list of available withdrawal channels, select the 'Cryptocurrency (V3)' option to proceed.",
          "Whitelist Destination Wallet — If you have not registered your target wallet address yet, click 'Add New Address' to whitelist it. Paste your destination crypto address, select the asset network (e.g. USDT-TRC20), label your wallet (e.g. 'My Cold Wallet'), and click 'Save Address'. Make sure the asset and network match your wallet address.",
          "Select Wallet — Once whitelisted, select the target cryptocurrency, transaction network, and your saved wallet address from the dropdown lists, then click 'Continue'.",
          "Enter Withdrawal Amount — Input the amount you wish to withdraw. Your total withdrawable balance is displayed for reference.",
          "Receive and Enter Security PIN — Retrieve the secure verification PIN sent to your registered email address, and type it in the required verification field.",
          "Submit Withdrawal Request — Confirm the withdrawal details and submit. A success message will appear indicating your withdrawal request has been submitted to the compliance department."
        ],
        stepsMobile: [
          "Go to Withdrawal Section — Log in to your Client Hub dashboard, and click on the 'Withdraw' button.",
          "Select Payment Method — In the list of available withdrawal channels, select the 'Cryptocurrency (V3)' option to proceed.",
          "Whitelist Destination Wallet — If you have not registered your target wallet address yet, click 'Add New Address' to whitelist it. Paste your destination crypto address, select the asset network (e.g. USDT-TRC20), label your wallet (e.g. 'My Cold Wallet'), and click 'Save Address'. Make sure the asset and network match your wallet address.",
          "Select Wallet — Once whitelisted, select the target cryptocurrency, transaction network, and your saved wallet address from the dropdown lists, then click 'Continue'.",
          "Enter Withdrawal Amount — Input the amount you wish to withdraw. Your total withdrawable balance is displayed for reference.",
          "Receive and Enter Security PIN — Retrieve the secure verification PIN sent to your registered email address, and type it in the required verification field.",
          "Submit Withdrawal Request — Confirm the withdrawal details and submit. A success message will appear indicating your withdrawal request has been submitted to the compliance department."
        ],
        edgeCases: [
          {
            title: "How long does a withdrawal request take to process?",
            text: "Withdrawal requests are processed by WingoMarkets finance department within 24 hours. Once approved, the crypto transaction is broadcasted and usually completes in 10-30 minutes."
          },
          {
            title: "Withdrawal request error about active trades",
            text: "Ensure your account has sufficient free margin. If you have open trading positions, the system will prevent withdrawals that would drop your margin level below safe limits."
          }
        ]
      },
      fa: {
        summary: "برداشت سریع و امن سود و سرمایه به کیف پول شخصی با استفاده از درگاه ارتقایافته ارز دیجیتال V3 با پشتیبانی از تعریف ولت‌های سفید.",
        prerequisites: [
          "ورود موفق به کابین شخصی وینگو مارکتس",
          "داشتن موجودی قابل برداشت کافی در کیف پول یا حساب",
          "تکمیل و تایید مدارک احراز هویت (KYC)"
        ],
        stepsWeb: [
          "مرحله ۱: ورود به بخش برداشت — وارد پنل کاربری خودتون بشید. از صفحه داشبورد، روی دکمه «برداشت» کلیک کنید.",
          "مرحله ۲: انتخاب روش برداشت — در صفحه برداشت، لیست روش‌های موجود به شما نمایش داده می‌شه. گزینه ارز دیجیتال (V3) رو انتخاب کنید تا ادامه فرآیند از طریق این روش انجام بشه.",
          "مرحله ۳: ثبت آدرس کیف پول — اگر قبلاً آدرس کیف پول مقصد رو ثبت نکردید، ابتدا باید کیف پول خودتون رو اضافه کنید. روی «افزودن آدرس جدید» کلیک کنید. اول آدرس کیف پول رمزارز مقصد رو وارد کنید، بعد رمزارز برداشتی (مثل USDT-TRX) رو وارد کرده و برچسب آدرس را مشخص کنید و روی ذخیره کلیک کنید. (توجه: حتماً شبکه و ارز با ولت مقصد تطابق داشته باشد).",
          "مرحله ۴: انتخاب کیف پول — بعد از افزودن کیف پول، نوع ارز و شبکه رو انتخاب کنید. آدرس کیف پول مدنظر خودتون رو انتخاب کنید و روی ادامه کلیک کنید.",
          "مرحله ۵: وارد کردن مبلغ برداشت — مبلغ موردنظر برای برداشت رو وارد کنید. موجودی قابل برداشت در این بخش به شما نمایش داده می‌شه.",
          "مرحله ۶: دریافت و وارد کردن پین امنیتی — کد تأییدی که به ایمیل شما ارسال شده رو دریافت کنید و کد را در کادر مربوطه وارد کنید.",
          "مرحله ۷: ثبت نهایی درخواست — درخواست برداشت رو تأیید کنید. پس از اتمام فرآیند، پیام نهایی مبنی بر ثبت موفق درخواست مشاهده خواهد شد."
        ],
        stepsMobile: [
          "مرحله ۱: ورود به بخش برداشت — وارد پنل کاربری خودتون بشید. از صفحه داشبورد، روی دکمه «برداشت» کلیک کنید.",
          "مرحله ۲: انتخاب روش برداشت — در صفحه برداشت، لیست روش‌های موجود به شما نمایش داده می‌شه. گزینه ارز دیجیتال (V3) رو انتخاب کنید تا ادامه فرآیند از طریق این روش انجام بشه.",
          "مرحله ۳: ثبت آدرس کیف پول — اگر قبلاً آدرس کیف پول مقصد رو ثبت نکردید، ابتدا باید کیف پول خودتون رو اضافه کنید. روی «افزودن آدرس جدید» کلیک کنید. اول آدرس کیف پول رمزارز مقصد رو وارد کنید، بعد رمزارز برداشتی (مثل USDT-TRX) رو وارد کرده و برچسب آدرس را مشخص کنید و روی ذخیره کلیک کنید. (توجه: حتماً شبکه و ارز با ولت مقصد تطابق داشته باشد).",
          "مرحله ۴: انتخاب کیف پول — بعد از افزودن کیف پول، نوع ارز و شبکه رو انتخاب کنید. آدرس کیف پول مدنظر خودتون رو انتخاب کنید و روی ادامه کلیک کنید.",
          "مرحله ۵: وارد کردن مبلغ برداشت — مبلغ موردنظر برای برداشت رو وارد کنید. موجودی قابل برداشت در این بخش به شما نمایش داده می‌شه.",
          "مرحله ۶: دریافت و وارد کردن پین امنیتی — کد تأییدی که به ایمیل شما ارسال شده رو دریافت کنید و کد را در کادر مربوطه وارد کنید.",
          "مرحله ۷: ثبت نهایی درخواست — درخواست برداشت رو تأیید کنید. پس از اتمام فرآیند، پیام نهایی مبنی بر ثبت موفق درخواست مشاهده خواهد شد."
        ],
        edgeCases: [
          {
            title: "مدت زمان پردازش درخواست برداشت چقدر است؟",
            text: "درخواست‌های برداشت توسط دپارتمان مالی وینگو مارکتس ظرف ۲۴ ساعت بررسی می‌شوند. پس از تایید، انتقال بلاکچینی ۱۰ الی ۳۰ دقیقه طول می‌کشد."
          },
          {
            title: "خطای عدم امکان برداشت به علت پوزیشن‌های باز",
            text: "در صورت داشتن معامله باز، مطمئن شوید که مارجین آزاد کافی دارید. برداشت نباید باعث افت سطح مارجین شما به زیر سطح ایمن شود."
          }
        ]
      },
      ar: {
        summary: "اسحب أرباحك ورأس مالك بأمان وسرعة باستخدام بوابة العملات الرقمية V3 المطورة مع إمكانية إدارة المحافظ الموثوقة.",
        prerequisites: [
          "تسجيل الدخول إلى بوابة عملاء WingoMarkets الخاصة بك",
          "رصيد متاح وقابل للسحب في محفظتك أو حسابك التداولي",
          "أن يكون الحساب موثقاً بالكامل (تم قبول KYC)"
        ],
        stepsWeb: [
          "الخطوة 1: الدخول إلى قسم السحب — قم بتسجيل الدخول إلى لوحة التحكم الخاصة بك. في الصفحة الرئيسية، انقر فوق زر 'سحب'.",
          "الخطوة 2: اختيار طريقة السحب — في صفحة السحب، ستظهر لك قائمة بالطرق المتاحة. اختر 'العملات الرقمية (V3)' لمتابعة العملية.",
          "الخطوة 3: تسجيل عنوان المحفظة — إذا لم تقم بتسجيل عنوان محفظتك مسبقاً، فانقر فوق 'إضافة عنوان جديد'. أدخل عنوان محفظتك الرقمية، وحدد نوع العملة والشبكة (مثل USDT-TRX)، وضع اسماً للمحفظة، ثم انقر فوق 'حفظ العنوان'. تأكد تماماً من تطابق الشبكة والعملة.",
          "الخطوة 4: اختيار المحفظة — بعد حفظ المحفظة بنجاح، حدد نوع العملة والشبكة، ثم اختر عنوان المحفظة المطلوب من القائمة وانقر فوق 'متابعة'.",
          "الخطوة 5: إدخال مبلغ السحب — أدخل المبلغ الذي تريد سحبه. سيظهر لك رصيدك المتاح للسحب في هذا القسم.",
          "الخطوة 6: الحصول على رمز PIN الأمني وإدخاله — احصل على رمز التحقق المرسل إلى بريدك الإلكتروني المسجل، وأدخله في الحقل المخصص.",
          "الخطوة 7: تقديم الطلب نهائياً — قم بتأكيد تفاصيل السحب وإرسال الطلب. ستظهر لك رسالة تفيد بنجاح تسجيل طلب السحب الخاص بك لإدارته من قبل القسم المالي."
        ],
        stepsMobile: [
          "الخطوة 1: الدخول إلى قسم السحب — قم بتسجيل الدخول إلى لوحة التحكم الخاصة بك. في الصفحة الرئيسية، انقر فوق زر 'سحب'.",
          "الخطوة 2: اختيار طريقة السحب — في صفحة السحب، ستظهر لك قائمة بالطرق المتاحة. اختر 'العملات الرقمية (V3)' لمتابعة العملية.",
          "الخطوة 3: تسجيل عنوان المحفظة — إذا لم تقم بتسجيل عنوان محفظتك مسبقاً، فانقر فوق 'إضافة عنوان جديد'. أدخل عنوان محفظتك الرقمية، وحدد نوع العملة والشبكة (مثل USDT-TRX)، وضع اسماً للمحفظة، ثم انقر فوق 'حفظ العنوان'. تأكد تماماً من تطابق الشبكة والعملة.",
          "الخطوة 4: اختيار المحفظة — بعد حفظ المحفظة بنجاح، حدد نوع العملة والشبكة، ثم اختر عنوان المحفظة المطلوب من القائمة وانقر فوق 'متابعة'.",
          "الخطوة 5: إدخال مبلغ السحب — أدخل المبلغ الذي تريد سحبه. سيظهر لك رصيدك المتاح للسحب في هذا القسم.",
          "الخطوة 6: الحصول على رمز PIN الأمني وإدخاله — احصل على رمز التحقق المرسل إلى بريدك الإلكتروني المسجل، وأدخله في الحقل المخصص.",
          "الخطوة 7: تقديم الطلب نهائياً — قم بتأكيد تفاصيل السحب وإرسال الطلب. ستظهر لك رسالة تفيد بنجاح تسجيل طلب السحب الخاص بك لإدارته من قبل القسم المالي."
        ],
        edgeCases: [
          {
            title: "ما هي المدة المستغرقة لمعالجة طلب السحب؟",
            text: "تتم معالجة طلبات السحب من قبل القسم المالي في WingoMarkets خلال 24 ساعة. بعد الموافقة، يستغرق تحويل العملات الرقمية من 10 إلى 30 دقيقة."
          },
          {
            title: "خطأ في طلب السحب بسبب صفقات مفتوحة",
            text: "تأكد من وجود هامش حر كافٍ في حسابك. لا يسمح النظام بعملية سحب قد تؤدي إلى هبوط مستوى الهامش عن الحدود الآمنة."
          }
        ]
      }
    },
    relatedSlugs: ["crypto-deposit", "how-to-withdraw-funds"]
  },
  {
    slug: "tcpay-deposit",
    categorySlug: "deposits-withdrawals",
    pillar: "help-center",
    template: "A",
    lastUpdated: "2026-06-28",
    readTime: 4,
    title: {
      en: "How to Deposit Funds via TCPay (TopChange)",
      fa: "راهنمای واریز از طریق TCPay",
      ar: "كيفية الإيداع عبر TCPay (TopChange)"
    },
    description: {
      en: "Step-by-step guide to depositing USD into your trading wallet using TopChange and the TCPay payment gateway.",
      fa: "راهنمای گام‌به‌گام شارژ کیف پول دلاری وینگو مارکتس با استفاده از حساب TopChange و درگاه مستقیم پرداخت TCPay.",
      ar: "دليل خطوة بخطوة لشحن محفظتك بالدولار الأمريكي باستخدام حساب TopChange وبوابة الدفع TCPay."
    },
    content: {
      en: {
        summary: "Fund your USD wallet instantly using TopChange (TCpay). This secure gateway links directly to your local bank account via your TopChange wallet, providing a seamless solution for Middle Eastern and Iranian traders.",
        prerequisites: [
          "Logged-in access to your WingoMarkets Client Portal",
          "Verified TopChange (TC) account with sufficient balance or linked bank card"
        ],
        stepsWeb: [
          "Go to Deposit Section — Log in to your Client Hub dashboard, navigate to the Wallet card, and click on the 'Deposit' button.",
          "Select Payment Method — From the payment methods list, select 'TopChange' (TCPay). Enter your deposit amount (minimum is $10), review the gateway parameters, read the terms, and click 'Continue'.",
          "Redirect to TCPay Gate — Check the transaction summary on the confirmation page and click 'Confirm Deposit'. If automatic redirection is active, the system redirects you securely to the TCPay login portal. Log in with your TopChange credentials.",
          "Two-Factor Verification — Paste the verification PIN sent to your registered email address into the TCPay verification field to authenticate your identity.",
          "Select Wallet and Amount — Choose your source TopChange wallet containing the funds and verify the payment details.",
          "Confirm Payment — Click the 'Pay' button to authorize the transfer from your TopChange account to WingoMarkets.",
          "Complete Funding — After verification, a 'Success' message will display, and your WingoMarkets wallet is funded instantly."
        ],
        stepsMobile: [
          "Go to Deposit Section — Log in to your Client Hub dashboard, navigate to the Wallet card, and click on the 'Deposit' button.",
          "Select Payment Method — From the payment methods list, select 'TopChange' (TCPay). Enter your deposit amount (minimum is $10), review the gateway parameters, read the terms, and click 'Continue'.",
          "Redirect to TCPay Gate — Check the transaction summary on the confirmation page and click 'Confirm Deposit'. If automatic redirection is active, the system redirects you securely to the TCPay login portal. Log in with your TopChange credentials.",
          "Two-Factor Verification — Paste the verification PIN sent to your registered email address into the TCPay verification field to authenticate your identity.",
          "Select Wallet and Amount — Choose your source TopChange wallet containing the funds and verify the payment details.",
          "Confirm Payment — Click the 'Pay' button to authorize the transfer from your TopChange account to WingoMarkets.",
          "Complete Funding — After verification, a 'Success' message will display, and your WingoMarkets wallet is funded instantly."
        ],
        edgeCases: [
          {
            title: "I don't have a TopChange account",
            text: "You can click 'Register' directly on the TCPay login screen or visit topchange.net to sign up, verify your identity, and link your local bank accounts."
          },
          {
            title: "TCPay redirection fails",
            text: "Ensure your browser's ad-blocker or pop-up blocker is not preventing redirect pop-ups from opening. Try disabling extensions or using a different browser."
          }
        ]
      },
      fa: {
        summary: "شارژ آنی کیف پول دلاری با استفاده از درگاه ایمن TCPay متصل به حساب‌های TopChange مناسب برای کاربران ایرانی.",
        prerequisites: [
          "ورود موفق به کابین شخصی وینگو مارکتس",
          "داشتن حساب کاربری تایید شده در TopChange با موجودی کافی"
        ],
        stepsWeb: [
          "مرحله ۱: شروع و ورود به پنل — وارد پنل کاربری خودتون بشید. از داستبورد، روی بخش واریز کلیک کنید تا فرآیند شارژ آغاز بشه.",
          "مرحله ۲: انتخاب روش واریز — از لیست روش‌های موجود، گزینه TopChange و بعد روش واریز مربوطه رو انتخاب کنید. حداقل مبلغ واریز ۱۰ دلار هست. قوانین را تایید کرده و روی ادامه کلیک کنید.",
          "مرحله ۳: ورود به TCPay و انجام تراکنش — خلاصه تراکنش را بررسی و روی تایید کلیک کنید تا به درگاه پرداخت TCPay منتقل شوید. در صفحه درگاه، با اطلاعات حساب TopChange خود وارد شوید.",
          "مرحله ۴: تایید هویت دو مرحله‌ای (PIN) — پس از ثبت اطلاعات لازم، یک کد تایید (PIN) به ایمیل شما ارسال می‌شه. کد دریافتی رو در کادر مربوطه در صفحه TCPay وارد کنید.",
          "مرحله ۵: انتخاب کیف پول و مبلغ — کیف پول مقصد را از لیست کیف پول‌های تاپ‌چنج انتخاب کنید و مبلغ واریزی را تایید نمایید.",
          "مرحله ۶: نهایی سازی و پرداخت — بعد از انتخاب کیف پول و وارد کردن مبلغ، روی دکمه Pay کلیک کنید و جزئیات نهایی تراکنش را بررسی نمایید.",
          "مرحله ۷: اتمام و تایید شارژ — بعد از پردازش تراکنش، پیام Success به شما نمایش داده می‌شه و موجودی کیف پول وینگو شما بلافاصله شارژ می‌شه‌."
        ],
        stepsMobile: [
          "مرحله ۱: شروع و ورود به پنل — وارد پنل کاربری خودتون بشید. از داستبورد، روی بخش واریز کلیک کنید تا فرآیند شارژ آغاز بشه.",
          "مرحله ۲: انتخاب روش واریز — از لیست روش‌های موجود، گزینه TopChange و بعد روش واریز مربوطه رو انتخاب کنید. حداقل مبلغ واریز ۱۰ دلار هست. قوانین را تایید کرده و روی ادامه کلیک کنید.",
          "مرحله ۳: ورود به TCPay و انجام تراکنش — خلاصه تراکنش را بررسی و روی تایید کلیک کنید تا به درگاه پرداخت TCPay منتقل شوید. در صفحه درگاه، با اطلاعات حساب TopChange خود وارد شوید.",
          "مرحله ۴: تایید هویت دو مرحله‌ای (PIN) — پس از ثبت اطلاعات لازم، یک کد تایید (PIN) به ایمیل شما ارسال می‌شه. کد دریافتی رو در کادر مربوطه در صفحه TCPay وارد کنید.",
          "مرحله ۵: انتخاب کیف پول و مبلغ — کیف پول مقصد را از لیست کیف پول‌های تاپ‌چنج انتخاب کنید و مبلغ واریزی را تایید نمایید.",
          "مرحله ۶: نهایی سازی و پرداخت — بعد از انتخاب کیف پول و وارد کردن مبلغ، روی دکمه Pay کلیک کنید و جزئیات نهایی تراکنش را بررسی نمایید.",
          "مرحله ۷: اتمام و تایید شارژ — بعد از پردازش تراکنش، پیام Success به شما نمایش داده می‌شه و موجودی کیف پول وینگو شما بلافاصله شارژ می‌شه‌."
        ],
        edgeCases: [
          {
            title: "چگونه حساب TopChange بسازم؟",
            text: "می‌توانید مستقیماً در درگاه روی گزینه Register کلیک کنید یا به سایت رسمی topchange.net مراجعه کرده و ثبت‌نام و احراز هویت اولیه را انجام دهید."
          },
          {
            title: "خطا در عدم انتقال به درگاه پرداخت",
            text: "مطمئن شوید که مرورگر شما پاپ‌آپ‌ها یا کوکی‌های شخص ثالث درگاه TCPay را مسدود نکرده است. در صورت نیاز افزونه‌های ضد تبلیغ را غیرفعال کنید."
          }
        ]
      },
      ar: {
        summary: "اشحن محفظتك بالدولار الأمريكي فوراً باستخدام بوابة TCPay (TopChange) الموثوقة والتي ترتبط بحساباتك البنكية المحلية لتسهيل التمويل.",
        prerequisites: [
          "تسجيل الدخول إلى بوابة عملاء WingoMarkets الخاصة بك",
          "حساب نشط وموثق في TopChange يحتوي على رصيد كافٍ"
        ],
        stepsWeb: [
          "الخطوة 1: الدخول إلى قسم الإيداع — قم بتسجيل الدخول إلى لوحة التحكم الخاصة بك، وانتقل إلى قسم المحفظة وانقر فوق زر 'إيداع'.",
          "الخطوة 2: اختيار طريقة الإيداع — من قائمة طرق الدفع المتاحة، اختر 'TopChange' (TCPay). الحد الأدنى للإيداع هو 10 دولارات. وافق على الشروط ثم انقر فوق 'متابعة'.",
          "الخطوة 3: الانتقال إلى بوابة TCPay — راجع ملخص المعاملة وانقر فوق 'تأكيد الإيداع'. سيتم توجيهك بأمان إلى صفحة تسجيل الدخول لبوابة TCPay. أدخل بيانات حساب TopChange الخاص بك.",
          "الخطوة 4: التحقق من الهوية ثنائي المراحل (PIN) — أدخل رمز PIN المرسل إلى بريدك الإلكتروني المسجل في الحقل المخصص على صفحة TCPay لتأكيد هويتك.",
          "الخطوة 5: اختيار المحفظة والمبلغ — اختر المحفظة المصدر من قائمة محافظ TopChange الخاصة بك وتأكد من توفر الرصيد الكافي.",
          "الخطوة 6: تأكيد الدفع — انقر فوق زر 'Pay' لتفويض تحويل الأموال من حساب TopChange الخاص بك إلى WingoMarkets.",
          "الخطوة 7: إتمام عملية الإيداع — بعد معالجة المعاملة، ستظهر لك رسالة 'Success'، وسيتم شحن محفظتك فوراً."
        ],
        stepsMobile: [
          "الخطوة 1: الدخول إلى قسم الإيداع — قم بتسجيل الدخول إلى لوحة التحكم الخاصة بك، وانتقل إلى قسم المحفظة وانقر فوق زر 'إيداع'.",
          "الخطوة 2: اختيار طريقة الإيداع — من قائمة طرق الدفع المتاحة، اختر 'TopChange' (TCPay). الحد الأدنى للإيداع هو 10 دولارات. وافق على الشروط ثم انقر فوق 'متابعة'.",
          "الخطوة 3: الانتقال إلى بوابة TCPay — راجع ملخص المعاملة وانقر فوق 'تأكيد الإيداع'. سيتم توجيهك بأمان إلى صفحة تسجيل الدخول لبوابة TCPay. أدخل بيانات حساب TopChange الخاص بك.",
          "الخطوة 4: التحقق من الهوية ثنائي المراحل (PIN) — أدخل رمز PIN المرسل إلى بريدك الإلكتروني المسجل في الحقل المخصص على صفحة TCPay لتأكيد هويتك.",
          "الخطوة 5: اختيار المحفظة والمبلغ — اختر المحفظة المصدر من قائمة محافظ TopChange الخاصة بك وتأكد من توفر الرصيد الكافي.",
          "الخطوة 6: تأكيد الدفع — انقر فوق زر 'Pay' لتفويض تحويل الأموال من حساب TopChange الخاص بك إلى WingoMarkets.",
          "الخطوة 7: إتمام عملية الإيداع — بعد معالجة المعاملة، ستظهر لك رسالة 'Success'، وسيتم شحن محفظتك فوراً."
        ],
        edgeCases: [
          {
            title: "ليس لدي حساب في TopChange",
            text: "يمكنك النقر فوق 'Register' على صفحة الدفع الخاصة بـ TCPay لإنشاء حساب جديد، أو زيارة الموقع الرسمي topchange.net لإتمام عملية التسجيل والتوثيق."
          },
          {
            title: "فشل التوجيه إلى صفحة TCPay",
            text: "تأكد من أن متصفحك لا يحظر النوافذ المنبثقة (Pop-ups) الخاصة ببوابة الدفع. قم بتعطيل أدوات حظر الإعلانات مؤقتاً."
          }
        ]
      }
    },
    relatedSlugs: ["crypto-deposit", "how-to-withdraw-funds"]
  },
  {
    slug: "volet-deposit",
    categorySlug: "deposits-withdrawals",
    pillar: "help-center",
    template: "A",
    lastUpdated: "2026-06-28",
    readTime: 4,
    title: {
      en: "How to Deposit Funds via Volet",
      fa: "راهنمای واریز از طریق Volet",
      ar: "كيفية الإيداع عبر Volet"
    },
    description: {
      en: "Step-by-step guide to depositing funds using your Volet (formerly AdvCash) wallet inside the new Client Hub.",
      fa: "راهنمای گام‌به‌گام شارژ حساب معاملاتی وینگو مارکتس با استفاده از درگاه بین‌المللی Volet (ادوکش سابق).",
      ar: "دليل خطوة بخطوة لشحن حسابك التداولي باستخدام محفظة Volet (AdvCash سابقاً) عبر بوابة العملاء الجديدة."
    },
    content: {
      en: {
        summary: "Fund your WingoMarkets wallet instantly and securely using the Volet gateway. This upgraded payment option provides secure global transfers with enhanced safety.",
        prerequisites: [
          "Logged-in access to your WingoMarkets Client Portal",
          "Verified Volet account with active balance in USD or other currencies"
        ],
        stepsWeb: [
          "Go to Deposit Section — Log in to your Client Hub dashboard, navigate to the Wallet section, and click on the 'Deposit' button.",
          "Select Payment Method — On the deposit menu, select the 'Volet' option. Enter your target deposit amount, tick the box to confirm terms and account ownership, and click 'Continue'.",
          "Review and Confirm Request — Verify your transaction details in the summary box. Click 'Confirm Deposit' to proceed.",
          "Redirect to Volet Gate — The system will automatically redirect you to volet.com payment interface. If the redirect does not open automatically, click 'Open Payment Page'.",
          "Log in to Volet Wallet — On the payment gateway, choose your payment method, click 'GO TO PAYMENT', and log in to your verified Volet account. Note that your Volet account must be fully verified (KYC approved) to authorize the payment.",
          "Two-Factor Verification — If logging in from a new IP address or browser, Volet will trigger a security screen. Retrieve the PIN-code sent to your registered email, enter it in the field, and click 'CONTINUE'.",
          "Select Wallet and Complete Payment — Choose your target USD wallet from the dropdown menu, ensure it has a sufficient balance, and click 'CONTINUE' to finalize the transaction. The deposit will reflect in your account instantly."
        ],
        stepsMobile: [
          "Go to Deposit Section — Log in to your Client Hub dashboard, navigate to the Wallet section, and click on the 'Deposit' button.",
          "Select Payment Method — On the deposit menu, select the 'Volet' option. Enter your target deposit amount, tick the box to confirm terms and account ownership, and click 'Continue'.",
          "Review and Confirm Request — Verify your transaction details in the summary box. Click 'Confirm Deposit' to proceed.",
          "Redirect to Volet Gate — The system will automatically redirect you to volet.com payment interface. If the redirect does not open automatically, click 'Open Payment Page'.",
          "Log in to Volet Wallet — On the payment gateway, choose your payment method, click 'GO TO PAYMENT', and log in to your verified Volet account. Note that your Volet account must be fully verified (KYC approved) to authorize the payment.",
          "Two-Factor Verification — If logging in from a new IP address or browser, Volet will trigger a security screen. Retrieve the PIN-code sent to your registered email, enter it in the field, and click 'CONTINUE'.",
          "Select Wallet and Complete Payment — Choose your target USD wallet from the dropdown menu, ensure it has a sufficient balance, and click 'CONTINUE' to finalize the transaction. The deposit will reflect in your account instantly."
        ],
        edgeCases: [
          {
            title: "Redirection to volet.com fails",
            text: "Check if your browser blocked pop-up windows. Click on the manual 'Open Payment Page' button or disable extensions that block redirect actions."
          },
          {
            title: "Volet wallet verification status rejected",
            text: "To complete the deposit, your Volet wallet account must be verified. Visit volet.com and upload your identification documents to verify your profile before trying again."
          }
        ]
      },
      fa: {
        summary: "شارژ آنی کیف پول دلاری با استفاده از سیستم پرداخت بین‌المللی Volet با امنیت بسیار بالا و کارمزد مناسب.",
        prerequisites: [
          "ورود موفق به کابین شخصی وینگو مارکتس",
          "داشتن حساب کاربری تایید شده (Verify) در سایت Volet با موجودی کافی"
        ],
        stepsWeb: [
          "مرحله ۱: ورود به بخش واریز — وارد پنل کاربری خودتون بشید. از صفحه داشبورد، کیف پول را انتخاب کنید و روی دکمه واریز کلیک کنید.",
          "مرحله ۲: انتخاب روش واریز — در منوی واریز، گزینه Volet رو انتخاب کنید. مبلغ موردنظر رو وارد کنید، تیک تایید قوانین و مالکیت حساب را بزنید و روی دکمه ادامه کلیک کنید.",
          "مرحله ۳: بررسی و تایید درخواست — خلاصه تراکنش به شما نمایش داده می‌شه. اطلاعات رو به دقت بررسی کنید و روی دکمه تایید واریز کلیک کنید.",
          "مرحله ۴: انتقال به درگاه پرداخت — بعد از تایید، به صورت خودکار به سایت volet.com هدایت می‌شید. اگر صفحه به صورت خودکار باز نشد، روی دکمه بازکردن صفحه پرداخت کلیک کنید.",
          "مرحله ۵: ورود به حساب Volet — در درگاه بانکی، روش پرداخت رو انتخاب کنید و روی GO TO PAYMENT کلیک کنید. در این مرحله با اطلاعات حساب خود در Volet وارد شوید. (توجه: حساب شما در Volet باید کاملاً وریفای شده باشد).",
          "مرحله ۶: تایید هویت با کد امنیتی — در صورتی که با مرورگر یا آی پی جدید وارد شده باشید، یک کد پین (PIN-Code) به ایمیل شما ارسال می‌شه. کد رو وارد کنید و روی CONTINUE کلیک کنید.",
          "مرحله ۷: انتخاب کیف پول و تکمیل پرداخت — از لیست کشویی، کیف پول دلاری موردنظر خودتون رو انتخاب کنید. دقت کنید ولت انتخابی موجودی کافی داشته باشد. سپس روی دکمه CONTINUE کلیک کنید تا تراکنش نهایی بشه."
        ],
        stepsMobile: [
          "مرحله ۱: ورود به بخش واریز — وارد پنل کاربری خودتون بشید. از صفحه داشبورد، کیف پول را انتخاب کنید و روی دکمه واریز کلیک کنید.",
          "مرحله ۲: انتخاب روش واریز — در منوی واریز، گزینه Volet رو انتخاب کنید. مبلغ موردنظر رو وارد کنید، تیک تایید قوانین و مالکیت حساب را بزنید و روی دکمه ادامه کلیک کنید.",
          "مرحله ۳: بررسی و تایید درخواست — خلاصه تراکنش به شما نمایش داده می‌شه. اطلاعات رو به دقت بررسی کنید و روی دکمه تایید واریز کلیک کنید.",
          "مرحله ۴: انتقال به درگاه پرداخت — بعد از تایید، به صورت خودکار به سایت volet.com هدایت می‌شید. اگر صفحه به صورت خودکار باز نشد، روی دکمه بازکردن صفحه پرداخت کلیک کنید.",
          "مرحله ۵: ورود به حساب Volet — در درگاه بانکی، روش پرداخت رو انتخاب کنید و روی GO TO PAYMENT کلیک کنید. در این مرحله با اطلاعات حساب خود در Volet وارد شوید. (توجه: حساب شما در Volet باید کاملاً وریفای شده باشد).",
          "مرحله ۶: تایید هویت با کد امنیتی — در صورتی که با مرورگر یا آی پی جدید وارد شده باشید، یک کد پین (PIN-Code) به ایمیل شما ارسال می‌شه. کد رو وارد کنید و روی CONTINUE کلیک کنید.",
          "مرحله ۷: انتخاب کیف پول و تکمیل پرداخت — از لیست کشویی، کیف پول دلاری موردنظر خودتون رو انتخاب کنید. دقت کنید ولت انتخابی موجودی کافی داشته باشد. سپس روی دکمه CONTINUE کلیک کنید تا تراکنش نهایی بشه."
        ],
        edgeCases: [
          {
            title: "خطا در باز نشدن صفحه درگاه Volet",
            text: "مطمئن شوید مرورگر شما پنجره‌های پاپ‌آپ را مسدود نکرده است. در صورت نیاز از دکمه «بازکردن صفحه پرداخت» به صورت دستی استفاده کنید."
          },
          {
            title: "عدم تایید تراکنش به علت نقض وریفای حساب Volet",
            text: "برای واریز موفق، حساب Volet شما حتماً باید احراز هویت شده باشد. مدارک شناسایی خود را در volet.com آپلود و تایید کنید."
          }
        ]
      },
      ar: {
        summary: "قم بتمويل محفظتك بالدولار الأمريكي فوراً وبأمان باستخدام بوابة دفع Volet العالمية والتي توفر تحويلات آمنة ومريحة.",
        prerequisites: [
          "تسجيل الدخول إلى بوابة عملاء WingoMarkets الخاصة بك",
          "حساب نشط وموثق في Volet يحتوي على رصيد كافٍ"
        ],
        stepsWeb: [
          "الخطوة 1: الدخول إلى قسم الإيداع — قم بتسجيل الدخول إلى لوحة التحكم الخاصة بك، وانتقل إلى قسم المحفظة وانقر فوق زر 'إيداع'.",
          "الخطوة 2: اختيار طريقة الإيداع — في قائمة الإيداع، اختر 'Volet'. أدخل المبلغ المطلوب، ووافق على الشروط والملكية، ثم انقر فوق 'متابعة'.",
          "الخطوة 3: مراجعة وتأكيد الطلب — راجع ملخص المعاملة بدقة وانقر فوق 'تأكيد الإيداع'.",
          "الخطوة 4: التوجيه إلى بوابة دفع Volet — سيتم توجيهك تلقائياً إلى صفحة volet.com. إذا لم تفتح الصفحة تلقائياً، انقر فوق زر 'فتح صفحة الدفع'.",
          "الخطوة 5: تسجيل الدخول إلى محفظة Volet — في صفحة البوابة، اختر طريقة الدفع وانقر فوق 'GO TO PAYMENT'. سجل الدخول إلى حساب Volet الخاص بك (يجب أن يكون الحساب موثقاً بالكامل).",
          "الخطوة 6: التحقق من الهوية برمز الأمان — إذا قمت بتسجيل الدخول من جهاز أو عنوان IP جديد، فسيتم إرسال رمز PIN إلى بريدك الإلكتروني. أدخل الرمز وانقر فوق 'CONTINUE'.",
          "الخطوة 7: اختيار المحفظة وإتمام الدفع — اختر المحفظة بالدولار الأمريكي المطلوبة من القائمة المنسدلة (تأكد من توفر رصيد كافٍ) وانقر فوق 'CONTINUE' لإتمام التحويل فوراً."
        ],
        stepsMobile: [
          "الخطوة 1: الدخول إلى قسم الإيداع — قم بتسجيل الدخول إلى لوحة التحكم الخاصة بك، وانتقل إلى قسم المحفظة وانقر فوق زر 'إيداع'.",
          "الخطوة 2: اختيار طريقة الإيداع — في قائمة الإيداع، اختر 'Volet'. أدخل المبلغ المطلوب، ووافق على الشروط والملكية، ثم انقر فوق 'متابعة'.",
          "الخطوة 3: مراجعة وتأكيد الطلب — راجع ملخص المعاملة بدقة وانقر فوق 'تأكيد الإيداع'.",
          "الخطوة 4: التوجيه إلى بوابة دفع Volet — سيتم توجيهك تلقائياً إلى صفحة volet.com. إذا لم تفتح الصفحة تلقائياً، انقر فوق زر 'فتح صفحة الدفع'.",
          "الخطوة 5: تسجيل الدخول إلى محفظة Volet — في صفحة البوابة، اختر طريقة الدفع وانقر فوق 'GO TO PAYMENT'. سجل الدخول إلى حساب Volet الخاص بك (يجب أن يكون الحساب موثقاً بالكامل).",
          "الخطوة 6: التحقق من الهوية برمز الأمان — إذا قمت بتسجيل الدخول من جهاز أو عنوان IP جديد، فسيتم إرسال رمز PIN إلى بريدك الإلكتروني. أدخل الرمز وانقر فوق 'CONTINUE'.",
          "الخطوة 7: اختيار المحفظة وإتمام الدفع — اختر المحفظة بالدولار الأمريكي المطلوبة من القائمة المنسدلة (تأكد من توفر رصيد كافٍ) وانقر فوق 'CONTINUE' لإتمام التحويل فوراً."
        ],
        edgeCases: [
          {
            title: "فشل التوجيه التلقائي إلى volet.com",
            text: "تحقق من حظر النوافذ المنبثقة في متصفحك. استخدم زر 'فتح صفحة الدفع' يدوياً أو قم بتعطيل برامج حظر الإعلانات."
          },
          {
            title: "رفض المعاملة بسبب عدم توثيق حساب Volet",
            text: "للسداد بنجاح، يجب توثيق حساب Volet الخاص بك بالكامل. قم بزيارة موقع volet.com ورفع مستندات الهوية لتفعيل الحساب."
          }
        ]
      }
    },
    relatedSlugs: ["crypto-deposit", "tcpay-deposit"]
  },
  {
    slug: "how-to-register",
    categorySlug: "account-profile",
    pillar: "help-center",
    template: "A",
    lastUpdated: "2026-06-28",
    readTime: 3,
    title: {
      en: "How to Register a New Account",
      fa: "راهنمای ثبت‌نام و ایجاد حساب کاربری",
      ar: "كيفية تسجيل حساب جديد"
    },
    description: {
      en: "Step-by-step guide to signing up, creating your user profile, verifying your email, and setting up your birth date in the new WingoMarkets Client Hub.",
      fa: "راهنمای گام‌به‌گام برای ایجاد حساب کاربری جدید، تایید ایمیل و ثبت اطلاعات اولیه در پنل جدید وینگو مارکتس.",
      ar: "دليل خطوة بخطوة للتسجيل، وإنشاء ملف تعريف المستخدم الخاص بك، وتفعيل البريد الإلكتروني، وإدخال تاريخ الميلاد في بوابة عملاء WingoMarkets الجديدة."
    },
    content: {
      en: {
        summary: "Start your trading journey by opening a WingoMarkets user account, completing email verification, and initializing your profile details.",
        prerequisites: [
          "Active personal email address",
          "Valid proof of identity details (e.g. date of birth matching your passport/ID card)"
        ],
        stepsWeb: [
          "Start Registration — Visit the WingoMarkets official website, click the 'Register' (Sign Up) button on the top right, fill in your details in the registration form, read and accept the Privacy Policy and Terms, and click 'Create Account'.",
          "Verify Email Address — Check your inbox for a verification email sent by WingoMarkets. Retrieve the activation PIN code, enter it in the verification page, and click 'Verify' to activate your account.",
          "Enter Date of Birth — Type in your date of birth in Gregorian format (Day, Month, Year) and save it. Ensure these details exactly match your legal identity document, as they will be cross-checked during the KYC verification phase."
        ],
        stepsMobile: [
          "Start Registration — Visit the WingoMarkets official website, click the 'Register' (Sign Up) button on the top right, fill in your details in the registration form, read and accept the Privacy Policy and Terms, and click 'Create Account'.",
          "Verify Email Address — Check your inbox for a verification email sent by WingoMarkets. Retrieve the activation PIN code, enter it in the verification page, and click 'Verify' to activate your account.",
          "Enter Date of Birth — Type in your date of birth in Gregorian format (Day, Month, Year) and save it. Ensure these details exactly match your legal identity document, as they will be cross-checked during the KYC verification phase."
        ],
        edgeCases: [
          {
            title: "I didn't receive the email verification code",
            text: "Check your spam/junk folder. Ensure your email address was typed correctly. If the code still hasn't arrived after 2 minutes, click 'Resend Code' on the verification page."
          },
          {
            title: "Error validating date of birth during registration",
            text: "Ensure your date of birth is entered in the Gregorian calendar format. If you need help converting your local calendar birth date to Gregorian format, you can use online date converters before entering it."
          }
        ]
      },
      fa: {
        summary: "شروع فرآیند عضویت در وینگو مارکتس، تایید آدرس ایمیل و وارد کردن مشخصات تاریخ تولد جهت آغاز معاملات.",
        prerequisites: [
          "داشتن آدرس ایمیل معتبر و فعال",
          "اطلاعات دقیق کارت ملی یا پاسپورت جهت تطابق تاریخ تولد میلادی"
        ],
        stepsWeb: [
          "مرحله ۱: ثبت نام و ایجاد حساب — برای شروع، وارد وب‌سایت وینگو مارکتس بشید. در صفحه اصلی، گزینه «ثبت‌نام» رو انتخاب کنید تا فرم ثبت‌نام برا‌تون باز بشه. اطلاعات مورد نیاز رو وارد کنید، قوانین و سیاست‌های حریم خصوصی رو مطالعه و تایید کنید و بعد روی «ایجاد حساب» بزنید. بعد از تکمیل ثبت‌نام، می‌تونید وارد پنل کاربری بشید.",
          "مرحله ۲: تایید ایمیل (Verify Account) — یک ایمیل حاوی کد تایید براتون فرستاده می‌شه. کد رو در کادر مربوطه وارد کنید و روی تایید کلیک کنید تا ایمیل شما تایید بشه.",
          "مرحله ۳: ثبت تاریخ تولد — تاریخ تولدتون رو به صورت روز، ماه و سال میلادی وارد کنید و ثبتش کنید. این مرحله برای شناسایی هویت شما ضروریه و بعد از ثبت نمایش داده می‌شه."
        ],
        stepsMobile: [
          "مرحله ۱: ثبت نام و ایجاد حساب — برای شروع، وارد وب‌سایت وینگو مارکتس بشید. در صفحه اصلی، گزینه «ثبت‌نام» رو انتخاب کنید تا فرم ثبت‌نام براتون باز بشه. اطلاعات مورد نیاز رو وارد کنید، قوانین و سیاست‌های حریم خصوصی رو مطالعه و تایید کنید و بعد روی «ایجاد حساب» بزنید. بعد از تکمیل ثبت‌نام، می‌تونید وارد پنل کاربری بشید.",
          "مرحله ۲: تایید ایمیل (Verify Account) — یک ایمیل حاوی کد تایید براتون فرستاده می‌شه. کد رو در کادر مربوطه وارد کنید و روی تایید کلیک کنید تا ایمیل شما تایید بشه.",
          "مرحله ۳: ثبت تاریخ تولد — تاریخ تولدتون رو به صورت روز، ماه و سال میلادی وارد کنید و ثبتش کنید. این مرحله برای شناسایی هویت شما ضروریه و بعد از ثبت نمایش داده می‌شه."
        ],
        edgeCases: [
          {
            title: "عدم دریافت ایمیل تایید حساب کاربری",
            text: "پوشه هرزنامه (Spam) خود را بررسی کنید. در صورتی که پس از ۲ دقیقه ایمیلی دریافت نکردید، بر روی دکمه «ارسال مجدد کد» کلیک کنید."
          },
          {
            title: "نحوه تبدیل تاریخ تولد شمسی به میلادی",
            text: "تاریخ تولد شما باید دقیقاً مطابق با مدرک شناسایی رسمی شما به میلادی وارد شود. می‌توانید از ابزارهای آنلاین تبدیل تاریخ قبل از وارد کردن استفاده کنید."
          }
        ]
      },
      ar: {
        summary: "ابدأ رحلتك في التداول من خلال فتح حساب مستخدم جديد في WingoMarkets، وتأكيد عنوان بريدك الإلكتروني، وإدخل بيانات ملفك الشخصي الأساسية.",
        prerequisites: [
          "عنوان بريد إلكتروني نشط وصالح",
          "بيانات هوية صالحة (تطابق تاريخ الميلاد مع وثيقة الهوية الرسمية الخاصة بك)"
        ],
        stepsWeb: [
          "الخطوة 1: التسجيل وإنشاء الحساب — قم بزيارة موقع WingoMarkets الرسمي. انقر فوق زر 'تسجيل' في الصفحة الرئيسية لفتح نموذج التسجيل. أدخل البيانات المطلوبة، ووافق على الشروط وسياسات الخصوصية، ثم انقر فوق 'إنشاء حساب'.",
          "الخطوة 2: تفعيل البريد الإلكتروني — تحقق من بريدك الإلكتروني للحصول على رمز التفعيل المرسل من WingoMarkets. أدخل الرمز في صفحة التحقق وانقر فوق 'تأكيد' لتفعيل حسابك.",
          "الخطوة 3: تسجيل تاريخ الميلاد — أدخل تاريخ ميلادك بالتنسيق الميلادي (اليوم، الشهر، السنة) واحفظه. يرجى التأكد من تطابق هذه البيانات تماماً مع وثيقتك الرسمية حيث سيتم التحقق منها لاحقاً أثناء مرحلة KYC."
        ],
        stepsMobile: [
          "الخطوة 1: التسجيل وإنشاء الحساب — قم بزيارة موقع WingoMarkets الرسمي. انقر فوق زر 'تسجيل' في الصفحة الرئيسية لفتح نموذج التسجيل. أدخل البيانات المطلوبة، ووافق على الشروط وسياسات الخصوصية، ثم انقر فوق 'إنشاء حساب'.",
          "الخطوة 2: تفعيل البريد الإلكتروني — تحقق من بريدك الإلكتروني للحصول على رمز التفعيل المرسل من WingoMarkets. أدخل الرمز في صفحة التحقق وانقر فوق 'تأكيد' لتفعيل حسابك.",
          "الخطوة 3: تسجيل تاريخ الميلاد — أدخل تاريخ ميلادك بالتنسيق الميلادي (اليوم، الشهر، السنة) واحفظه. يرجى التأكد من تطابق هذه البيانات تماماً مع وثيقتك الرسمية حيث سيتم التحقق منها لاحقاً أثناء مرحلة KYC."
        ],
        edgeCases: [
          {
            title: "لم أستلم رمز تفعيل البريد الإلكتروني",
            text: "يرجى التحقق من مجلد الرسائل غير المرغوب فيها (Spam). إذا لم يصلك الرمز بعد دقيقتين، انقر فوق 'إعادة إرسال الرمز'."
          },
          {
            title: "أخطاء في التحقق من تاريخ الميلاد",
            text: "تأكد من إدخال تاريخ ميلادك بالتنسيق الميلادي بدقة. يمكنك استخدام محولات التاريخ عبر الإنترنت لمعرفة التاريخ الميلادي المقابل لتاريخ ميلادك المحلي."
          }
        ]
      }
    },
    relatedSlugs: ["change-portal-password", "how-to-verify-identity"]
  },
  {
    slug: "ib-request-guide",
    categorySlug: "ib-partnership",
    pillar: "help-center",
    template: "A",
    lastUpdated: "2026-06-28",
    readTime: 4,
    title: {
      en: "How to Apply for IB Partner Status",
      fa: "راهنمای نحوه درخواست دسترسی IB",
      ar: "كيفية تقديم طلب للحصول على صلاحية IB"
    },
    description: {
      en: "Step-by-step guide to applying for Introducing Broker (IB) partner status inside the WingoMarkets Client Hub.",
      fa: "راهنمای گام‌به‌گام برای ثبت درخواست همکاری و دریافت دسترسی Introducing Broker (IB) در کابین جدید وینگو مارکتس.",
      ar: "دليل خطوة بخطوة لتقديم طلب شراكة معرف بروكر (IB) وتفعيل لوحة الشركاء في بوابة عملاء WingoMarkets الجديدة."
    },
    content: {
      en: {
        summary: "Learn how to easily submit your Introducing Broker (IB) partner application, configure your marketing details, choose your callback times, and complete your partner registration.",
        prerequisites: [
          "Logged-in access to your WingoMarkets Client Hub",
          "Verified user profile (KYC approved)"
        ],
        stepsWeb: [
          "Access Partnership Section — Log in to your Client Hub dashboard. From the main menu on the side, click on the 'Partnership' (Collaboration) option.",
          "Start Application Process — Inside the Partnership page, locate the 'Request IB Access' button and click it to open the partner application form.",
          "Complete Partnership Information — Fill in the application fields accurately. You will need to provide: your financial market experience, duration of activity, active client count, average client trading volume, acquisition methods (such as social networks, blogging, advertising), target geographic regions, and any additional details.",
          "Select Callback Time and Submit — Select your preferred contact hours for the partnership desk to call you. After selecting your callback window, click the 'Submit Application' button to register your request.",
          "Application Registered — A confirmation message will display, indicating that your application has been successfully submitted and saved.",
          "Partner Desk Review — The WingoMarkets Partner Relations desk will review your details. A representative will contact you via your preferred callback window to discuss custom commission tiers and finalize your IB account activation."
        ],
        stepsMobile: [
          "Access Partnership Section — Log in to your Client Hub dashboard. From the main menu on the side, click on the 'Partnership' (Collaboration) option.",
          "Start Application Process — Inside the Partnership page, locate the 'Request IB Access' button and click it to open the partner application form.",
          "Complete Partnership Information — Fill in the application fields accurately. You will need to provide: your financial market experience, duration of activity, active client count, average client trading volume, acquisition methods (such as social networks, blogging, advertising), target geographic regions, and any additional details.",
          "Select Callback Time and Submit — Select your preferred contact hours for the partnership desk to call you. After selecting your callback window, click the 'Submit Application' button to register your request.",
          "Application Registered — A confirmation message will display, indicating that your application has been successfully submitted and saved.",
          "Partner Desk Review — The WingoMarkets Partner Relations desk will review your details. A representative will contact you via your preferred callback window to discuss custom commission tiers and finalize your IB account activation."
        ],
        edgeCases: [
          {
            title: "How long does the IB review take?",
            text: "The partnership desk reviews applications within 24-48 hours. If approved, your custom IB portal, commission links, and tracking dash will be unlocked immediately."
          },
          {
            title: "What if I do not have a client base yet?",
            text: "We welcome partners at all stages! You can outline your marketing strategies and growth plans in the description. Our team will help you choose a suitable plan to start your IB journey."
          }
        ]
      },
      fa: {
        summary: "نحوه ثبت آسان درخواست همکاری به عنوان معرف بروکر (IB)، تکمیل فرم اطلاعات بازاریابی و هماهنگی زمان تماس جهت فعال‌سازی حساب شراکت.",
        prerequisites: [
          "ورود موفق به کابین شخصی وینگو مارکتس",
          "تکمیل و تایید مدارک احراز هویت (KYC)"
        ],
        stepsWeb: [
          "مرحله ۱: ورود به بخش همکاری — وارد حساب کاربری خودتون بشید و از منوی سمت راست، روی گزینه «همکاری» کلیک کنید تا وارد این بخش بشید.",
          "مرحله ۲: شروع ثبت درخواست — بعد از ورود به صفحه همکاری، یک دکمه با عنوان «درخواست دسترسی IB» می‌بینید. روی این گزینه کلیک کنید تا فرم ثبت درخواست براتون باز بشه.",
          "مرحله ۳: تکمیل اطلاعات همکاری — در این مرحله باید فرم مربوط به همکاری رو کامل کنید؛ مواردی مانند: سابقه فعالیت در بازارهای مالی، مدت زمان فعالیت، تعداد مشتریان فعال، میانگین حجم معاملات مشتریان، روش‌های جذب مشتری (مثل شبکه‌های اجتماعی، تبلیغات و تولید محتوا)، منطقه جغرافیایی فعالیت و توضیحات تکمیلی.",
          "مرحله ۴: انتخاب زمان تماس و ارسال درخواست — در انتهای فرم، زمان مناسب برای تماس پشتیبانی جهت هماهنگی را مشخص کنید. بعد از انتخاب زمان، روی دکمه «ارسال درخواست» کلیک کنید تا درخواست شما ثبت بشه.",
          "مرحله ۵: ثبت موفق درخواست — بعد از ارسال، یک پیام به شما نمایش داده می‌شه که نشون می‌دهد درخواست با موفقیت ثبت شده و مراحل ثبت درخواست به پایان رسیده است.",
          "مرحله ۶: بررسی توسط تیم پشتیبانی — درخواست شما توسط تیم شراکت وینگو مارکتس بررسی شده و جهت هماهنگی بیشتر و فعال‌سازی پنل با شما تماس گرفته خواهد شد."
        ],
        stepsMobile: [
          "مرحله ۱: ورود به بخش همکاری — وارد حساب کاربری خودتون بشید و از منوی سمت راست، روی گزینه «همکاری» کلیک کنید تا وارد این بخش بشید.",
          "مرحله ۲: شروع ثبت درخواست — بعد از ورود به صفحه همکاری، یک دکمه با عنوان «درخواست دسترسی IB» می‌بینید. روی این گزینه کلیک کنید تا فرم ثبت درخواست براتون باز بشه.",
          "مرحله ۳: تکمیل اطلاعات همکاری — در این مرحله باید فرم مربوط به همکاری رو کامل کنید؛ مواردی مانند: سابقه فعالیت در بازارهای مالی، مدت زمان فعالیت، تعداد مشتریان فعال، میانگین حجم معاملات مشتریان، روش‌های جذب مشتری (مثل شبکه‌های اجتماعی، تبلیغات و تولید محتوا)، منطقه جغرافیایی فعالیت و توضیحات تکمیلی.",
          "مرحله ۴: انتخاب زمان تماس و ارسال درخواست — در انتهای فرم، زمان مناسب برای تماس پشتیبانی جهت هماهنگی را مشخص کنید. بعد از انتخاب زمان، روی دکمه «ارسال درخواست» کلیک کنید تا درخواست شما ثبت بشه.",
          "مرحله ۵: ثبت موفق درخواست — بعد از ارسال، یک پیام به شما نمایش داده می‌شه که نشون می‌دهد درخواست با موفقیت ثبت شده و مراحل ثبت درخواست به پایان رسیده است.",
          "مرحله ۶: بررسی توسط تیم پشتیبانی — درخواست شما توسط تیم شراکت وینگو مارکتس بررسی شده و جهت هماهنگی بیشتر و فعال‌سازی پنل با شما تماس گرفته خواهد شد."
        ],
        edgeCases: [
          {
            title: "مدت زمان بررسی درخواست IB چقدر است؟",
            text: "درخواست‌های همکاری معمولاً ظرف ۲۴ الی ۴۸ ساعت بررسی می‌شوند و کارشناسان شراکت جهت نهایی‌سازی شرایط کمیسیون با شما تماس می‌گیرند."
          },
          {
            title: "آیا بدون داشتن مشتری فعلی می‌توان درخواست داد؟",
            text: "بله، وینگو مارکتس از همکاران در تمامی سطوح حمایت می‌کند. در بخش توضیحات، برنامه‌های بازاریابی خود را بنویسید تا طرح مناسب شما فعال شود."
          }
        ]
      },
      ar: {
        summary: "تعرف على كيفية تقديم طلب شراكة Introducing Broker (IB) بسهولة، وتعبئة بيانات التسويق الخاصة بك، واختيار أوقات الاتصال لتفعيل حسابك.",
        prerequisites: [
          "تسجيل الدخول إلى بوابة عملاء WingoMarkets الخاصة بك",
          "أن يكون الحساب موثقاً بالكامل (تم قبول KYC)"
        ],
        stepsWeb: [
          "الخطوة 1: الدخول إلى قسم الشراكة — سجل الدخول إلى بوابة العميل. من القائمة الجانبية، انقر فوق خيار 'الشراكة' (التعاون).",
          "الخطوة 2: بدء تقديم الطلب — في صفحة الشراكة، انقر فوق زر 'طلب الحصول على صلاحية IB' لفتح نموذج طلب الشراكة.",
          "الخطوة 3: تعبئة معلومات الشراكة — املأ نموذج الشراكة بدقة بالمعلومات التي تساعد فريقنا في تقييم طلبك: خبرتك في الأسواق المالية، ومدة نشاطك، وعدد العملاء النشطين، وحجم التداول التقريبي لعملائك، وطرق جذب العملاء (مثل مواقع التواصل الاجتماعي أو الإعلانات)، والمنطقة الجغرافية للنشاط، وأي تفاصيل إضافية.",
          "الخطوة 4: تحديد وقت الاتصال وإرسال الطلب — في نهاية النموذج، حدد الوقت المفضل ليتصل بك فريق علاقات الشركاء. بعد ذلك، انقر فوق زر 'إرسال الطلب'.",
          "الخطوة 5: تسجيل الطلب بنجاح — ستظهر لك رسالة تفيد بأنه تم إرسال طلب الشراكة وحفظه بنجاح.",
          "الخطوة 6: مراجعة الطلب من فريق الشركاء — سيقوم فريق علاقات الشركاء في WingoMarkets بمراجعة طلبك والتواصل معك في الوقت المحدد لمناقشة نسب العمولات وتفعيل حساب الـ IB الخاص بك."
        ],
        stepsMobile: [
          "الخطوة 1: الدخول إلى قسم الشراكة — سجل الدخول إلى بوابة العميل. من القائمة الجانبية، انقر فوق خيار 'الشراكة' (التعاون).",
          "الخطوة 2: بدء تقديم الطلب — في صفحة الشراكة، انقر فوق زر 'طلب الحصول على صلاحية IB' لفتح نموذج طلب الشراكة.",
          "الخطوة 3: تعبئة معلومات الشراكة — املأ نموذج الشراكة بدقة بالمعلومات التي تساعد فريقنا في تقييم طلبك: خبرتك في الأسواق المالية، ومدة نشاطك، وعدد العملاء النشطين، وحجم التداول التقريبي لعملائك، وطرق جذب العملاء (مثل مواقع التواصل الاجتماعي أو الإعلانات)، والمنطقة الجغرافية للنشاط، وأي تفاصيل إضافية.",
          "الخطوة 4: تحديد وقت الاتصال وإرسال الطلب — في نهاية النموذج، حدد الوقت المفضل ليتصل بك فريق علاقات الشركاء. بعد ذلك، انقر فوق زر 'إرسال الطلب'.",
          "الخطوة 5: تسجيل الطلب بنجاح — ستظهر لك رسالة تفيد بأنه تم إرسال طلب الشراكة وحفظه بنجاح.",
          "الخطوة 6: مراجعة الطلب من فريق الشركاء — سيقوم فريق علاقات الشركاء في WingoMarkets بمراجعة طلبك والتواصل معك في الوقت المحدد لمناقشة نسب العمولات وتفعيل حساب الـ IB الخاص بك."
        ],
        edgeCases: [
          {
            title: "ما هي المدة المستغرقة لمراجعة طلب الـ IB؟",
            text: "يتم مراجعة طلبات الشراكة خلال 24 إلى 48 ساعة عمل. بعد الموافقة، سيتم تفعيل رابط الإحالة ولوحة التحكم الخاصة بك فوراً."
          },
          {
            title: "هل يمكنني التقديم إذا لم يكن لدي قاعدة عملاء بعد؟",
            text: "نعم، نرحب بالشركاء من جميع المستويات! يمكنك توضيح استراتيجيتك التسويقية في نموذج الطلب وسيقوم فريقنا بمساعدتك في اختيار الخطة المناسبة للبدء."
          }
        ]
      }
    },
    relatedSlugs: ["change-portal-password", "how-to-verify-identity"]
  },
  {
    slug: "internal-transfer",
    categorySlug: "deposits-withdrawals",
    pillar: "help-center",
    template: "A",
    lastUpdated: "2026-06-28",
    readTime: 3,
    title: {
      en: "How to Perform an Internal Transfer",
      fa: "راهنمای انتقال داخلی",
      ar: "كيفية إجراء تحويل داخلي"
    },
    description: {
      en: "Step-by-step guide to transferring funds internally between your wallet and trading accounts inside the new WingoMarkets Client Hub.",
      fa: "راهنمای گام‌به‌گام برای انتقال وجه بین کیف پول و حساب‌های معاملاتی متاتریدر ۵ در کابین جدید وینگو مارکتس.",
      ar: "دليل خطوة بخطوة لتحويل الأموال داخلياً بين محفظتك وحسابات التداول الخاصة بك في بوابة عملاء WingoMarkets الجديدة."
    },
    content: {
      en: {
        summary: "Easily transfer funds between your WingoMarkets main wallet and MT5 trading accounts instantly and with zero commissions.",
        prerequisites: [
          "Logged-in access to your WingoMarkets Client Portal",
          "Available funds in your source wallet or trading account"
        ],
        stepsWeb: [
          "Go to Transfer Section — Log in to your WingoMarkets Client Hub dashboard. In the Wallet section, click on the 'Transfer' button to start the internal transfer process.",
          "Select Source and Destination Accounts — Select your source account (the account to deduct funds from) and then select the destination account (the account to receive the funds, e.g., your MT5 trading account). Click the 'Continue' button.",
          "Enter Transfer Amount and Accept Terms — View your available balance, input your desired transfer amount in the field below, and read the transfer rules and limits (e.g., market session constraints). Tick the confirmation box and click 'Continue'.",
          "Review and Confirm Details — Review all transaction details, including source account, destination account, transfer amount, and conversion rate if applicable. Click 'Confirm Transfer' to proceed.",
          "Complete Transaction — A success message will appear indicating the transfer has been completed. You can click 'Done' to return to the dashboard or start a new transfer."
        ],
        stepsMobile: [
          "Go to Transfer Section — Log in to your WingoMarkets Client Hub dashboard. In the Wallet section, click on the 'Transfer' button to start the internal transfer process.",
          "Select Source and Destination Accounts — Select your source account (the account to deduct funds from) and then select the destination account (the account to receive the funds, e.g., your MT5 trading account). Click the 'Continue' button.",
          "Enter Transfer Amount and Accept Terms — View your available balance, input your desired transfer amount in the field below, and read the transfer rules and limits (e.g., market session constraints). Tick the confirmation box and click 'Continue'.",
          "Review and Confirm Details — Review all transaction details, including source account, destination account, transfer amount, and conversion rate if applicable. Click 'Confirm Transfer' to proceed.",
          "Complete Transaction — A success message will appear indicating the transfer has been completed. You can click 'Done' to return to the dashboard or start a new transfer."
        ],
        edgeCases: [
          {
            title: "Are there any fees for internal transfers?",
            text: "No, all internal transfers between your WingoMarkets wallets and MT5 accounts are completely free and processed instantly."
          },
          {
            title: "Transfer fails due to active trading session",
            text: "If you are transferring funds out of an active MT5 account with open trades, ensure you have sufficient free margin. Transfers that violate margin safety or happen during weekend market closures might be temporarily restricted."
          }
        ]
      },
      fa: {
        summary: "انتقال آسان و بدون کارمزد وجه میان کیف پول اصلی وینگو مارکتس و حساب‌های معاملاتی متاتریدر ۵ به صورت آنی.",
        prerequisites: [
          "ورود موفق به کابین شخصی وینگو مارکتس",
          "داشتن موجودی کافی در حساب مبدأ (کیف پول یا حساب معاملاتی)"
        ],
        stepsWeb: [
          "مرحله ۱: ورود به بخش انتقال — برای شروع، وارد داشبورد اصلی حساب کاربری‌تون بشید. در بخش مربوط به کیف پول، روی گزینه «انتقال» کلیک کنید تا وارد فرآیند انتقال وجه بشید.",
          "مرحله ۲: حساب‌های مبدأ و مقصد — در صفحه‌ای که براتون باز می‌شه، ابتدا حساب مبدأ رو انتخاب کنید؛ یعنی همون حسابی که قراره مبلغ ازش کسر بشه. بعد از اون، حساب مقصد رو مشخص کنید؛ این همون حسابی‌ایه که مبلغ بهش منتقل می‌شه (مثلاً حساب معاملاتی). دکمه ادامه رو بزنید.",
          "مرحله ۳: وارد کردن مبلغ و تأیید قوانین — در این مرحله، موجودی شما نمایش داده میشه و در کادر پایین مبلغ مورد نظر خودتون رو وارد می‌کنید. در ادامه، قوانین و محدودیت‌های انتقال (مثل زمان‌های انجام انتقال در ساعات خاص بازار) رو مطالعه کنید و تیک تأیید رو بزنید. سپس روی گزینه «ادامه» کلیک کنید. (توجه: مبلغ با نوع حساب انتخابی هماهنگ باشد).",
          "مرحله ۴: تأیید نهایی جزئیات — در این مرحله، تمام جزئیات انتقال مثل حساب مبدأ، حساب مقصد، مبلغ انتقال و در صورت وجود، نرخ تبدیل به شما نمایش داده می‌شه. اطلاعات رو با دقت بررسی کنید و در صورت صحیح بودن، روی گزینه «تأیید انتقال» کلیک کنید.",
          "مرحله ۵: اتمام عملیات — بعد از تکمیل انتقال، پیام موفقیت‌آمیز بودن عملیات به شما نمایش داده می‌شه. در این مرحله می‌تونید با انتخاب گزینه «انجام شد» به صفحه اصلی برگردید یا در صورت نیاز، یک انتقال جدید انجام بدید."
        ],
        stepsMobile: [
          "مرحله ۱: ورود به بخش انتقال — برای شروع، وارد داشبورد اصلی حساب کاربری‌تون بشید. در بخش مربوط به کیف پول، روی گزینه «انتقال» کلیک کنید تا وارد فرآیند انتقال وجه بشید.",
          "مرحله ۲: حساب‌های مبدأ و مقصد — در صفحه‌ای که براتون باز می‌شه، ابتدا حساب مبدأ رو انتخاب کنید؛ یعنی همون حسابی که قراره مبلغ ازش کسر بشه. بعد از اون، حساب مقصد رو مشخص کنید؛ این همون حسابی‌ایه که مبلغ بهش منتقل می‌شه (مثلاً حساب معاملاتی). دکمه ادامه رو بزنید.",
          "مرحله ۳: وارد کردن مبلغ و تأیید قوانین — در این مرحله، موجودی شما نمایش داده میشه و در کادر پایین مبلغ مورد نظر خودتون رو وارد می‌کنید. در ادامه، قوانین و محدودیت‌های انتقال (مثل زمان‌های انجام انتقال در ساعات خاص بازار) رو مطالعه کنید و تیک تأیید رو بزنید. سپس روی گزینه «ادامه» کلیک کنید. (توجه: مبلغ با نوع حساب انتخابی هماهنگ باشد).",
          "مرحله ۴: تأیید نهایی جزئیات — در این مرحله، تمام جزئیات انتقال مثل حساب مبدأ، حساب مقصد، مبلغ انتقال و در صورت وجود، نرخ تبدیل به شما نمایش داده می‌شه. اطلاعات رو با دقت بررسی کنید و در صورت صحیح بودن، روی گزینه «تأیید انتقال» کلیک کنید.",
          "مرحله ۵: اتمام عملیات — بعد از تکمیل انتقال، پیام موفقیت‌آمیز بودن عملیات به شما نمایش داده می‌شه. در این مرحله می‌تونید با انتخاب گزینه «انجام شد» به صفحه اصلی برگردید یا در صورت نیاز، یک انتقال جدید انجام بدید."
        ],
        edgeCases: [
          {
            title: "آیا انتقال داخلی شامل کارمزد می‌شود؟",
            text: "خیر، کلیه انتقال‌های داخلی بین کیف پول و حساب‌های معاملاتی شما در وینگو مارکتس بدون کارمزد و به صورت آنی انجام می‌شود."
          },
          {
            title: "خطای عدم انتقال به علت پوزیشن‌های باز در متاتریدر",
            text: "در صورتی که مبدأ انتقال یک حساب معاملاتی با پوزیشن‌های باز است، دقت کنید که انتقال نباید به مارجین مورد نیاز برای معاملات باز شما آسیب بزند."
          }
        ]
      },
      ar: {
        summary: "قم بتحويل الأموال بسهولة وبدون عمولات بين محفظتك الرئيسية في WingoMarkets وحسابات تداول MT5 فوراً.",
        prerequisites: [
          "تسجيل الدخول إلى بوابة عملاء WingoMarkets الخاصة بك",
          "توفر رصيد كافٍ في الحساب المصدر (المحفظة أو حساب التداول)"
        ],
        stepsWeb: [
          "الخطوة 1: الدخول إلى قسم التحويل — قم بتسجيل الدخول إلى لوحة التحكم الخاصة بك. في قسم المحفظة، انقر فوق زر 'تحويل' لبدء العملية.",
          "الخطوة 2: تحديد الحساب المصدر والحساب المستهدف — اختر الحساب المصدر (الذي سيتم خصم المبلغ منه) ثم اختر الحساب المستهدف (الذي سيتلقى الأموال، مثل حساب التداول). انقر فوق 'متابعة'.",
          "الخطوة 3: إدخال المبلغ والموافقة على الشروط — سيظهر رصيدك المتاح. أدخل المبلغ المطلوب في الحقل أدناه، وراجع شروط وحدود التحويل (مثل قيود جلسات السوق). وافق على الشروط وانقر فوق 'متابعة'.",
          "الخطوة 4: مراجعة وتأكيد التفاصيل — راجع تفاصيل المعاملة بدقة، بما في ذلك الحساب المصدر والمستهدف والمبلغ وسعر الصرف إن وجد. انقر فوق 'تأكيد التحويل'.",
          "الخطوة 5: إتمام العملية — ستظهر لك رسالة تفيد بنجاح التحويل. يمكنك النقر فوق 'تم' للعودة إلى لوحة التحكم أو بدء تحويل جديد."
        ],
        stepsMobile: [
          "الخطوة 1: الدخول إلى قسم التحويل — قم بتسجيل الدخول إلى لوحة التحكم الخاصة بك. في قسم المحفظة، انقر فوق زر 'تحويل' لبدء العملية.",
          "الخطوة 2: تحديد الحساب المصدر والحساب المستهدف — اختر الحساب المصدر (الذي سيتم خصم المبلغ منه) ثم اختر الحساب المستهدف (الذي سيتلقى الأموال، مثل حساب التداول). انقر فوق 'متابعة'.",
          "الخطوة 3: إدخال المبلغ والموافقة على الشروط — سيظهر رصيدك المتاح. أدخل المبلغ المطلوب في الحقل أدناه، وراجع شروط وحدود التحويل (مثل قيود جلسات السوق). وافق على الشروط وانقر فوق 'متابعة'.",
          "الخطوة 4: مراجعة وتأكيد التفاصيل — راجع تفاصيل المعاملة بدقة، بما في ذلك الحساب المصدر والمستهدف والمبلغ وسعر الصرف إن وجد. انقر فوق 'تأكيد التحويل'.",
          "الخطوة 5: إتمام العملية — ستظهر لك رسالة تفيد بنجاح التحويل. يمكنك النقر فوق 'تم' للعودة إلى لوحة التحكم أو بدء تحويل جديد."
        ],
        edgeCases: [
          {
            title: "هل هناك أي رسوم على التحويلات الداخلية؟",
            text: "لا، جميع التحويلات الداخلية بين محافظ WingoMarkets وحسابات التداول الخاصة بك مجانية بالكامل وتتم فوراً."
          },
          {
            title: "فشل التحويل بسبب صفقات نشطة في MT5",
            text: "إذا كنت تقوم بتحويل الأموال من حساب تداول نشط يحتوي على صفقات مفتوحة، فتأكد من وجود هامش حر كافٍ لتجنب نداء الهامش."
          }
        ]
      }
    },
    relatedSlugs: ["crypto-deposit", "how-to-withdraw-funds"]
  },
  {
    slug: "kyc-verification",
    categorySlug: "account-profile",
    pillar: "help-center",
    template: "A",
    lastUpdated: "2026-06-28",
    readTime: 4,
    title: {
      en: "How to Verify Your Identity (KYC)",
      fa: "راهنمای احراز هویت (KYC)",
      ar: "كيفية توثيق الهوية (KYC)"
    },
    description: {
      en: "Step-by-step guide to verifying your profile, setting up your mobile number, and uploading your identification documents inside the new WingoMarkets Client Hub.",
      fa: "راهنمای گام‌به‌گام برای تایید هویت، فعال‌سازی شماره همراه و بارگذاری مدارک شناسایی در پنل جدید وینگو مارکتس.",
      ar: "دليل خطوة بخطوة لتوثيق حسابك، وتفعيل رقم الهاتف المحمول، ورفع وثائق الهوية الرسمية داخل بوابة عملاء WingoMarkets الجديدة."
    },
    content: {
      en: {
        summary: "Complete your KYC identity verification to unlock full deposit, withdrawal, and trading capabilities on your WingoMarkets account.",
        prerequisites: [
          "Completed registration and logged-in access to WingoMarkets Client Hub",
          "Valid mobile phone number",
          "High-quality photos of your legal identification document (Passport, ID Card, or Driver's License)"
        ],
        stepsWeb: [
          "Start Verification Process — Log in to your Client Hub. In the top notification bar, click on the 'Complete Verification' (or 'Complete Profile') link.",
          "Read Terms and Conditions — On the verification info page, read the instructions, click 'Continue', review the validation steps, and click 'Start Verification' to begin.",
          "Accept Privacy Agreement — Read the legal data protection consent box and click the 'Agree and Continue' button.",
          "Verify Mobile Number — On the Phone Verification screen, select your country of residence, enter your mobile phone number, and click 'Send Verification Code'. Retrieve the OTP code sent to your phone, type it into the verification box, and confirm.",
          "Upload Identity Documents — Select your country of residence and choose your document type (Passport, National ID Card, or Driver's License) from the list. Click 'Continue'. Upload high-quality, clear photos of the front and back of your selected identity document. (Note: You can click 'Continue on Phone' to scan a QR code and use your phone's camera to upload documents easily).",
          "Wait for Verification Success — Wait a few moments while the system automatically scans your documents. A success message will appear once your documents are approved, unlocking all deposit, withdrawal, and trading features of your cabinet."
        ],
        stepsMobile: [
          "Start Verification Process — Log in to your Client Hub. In the top notification bar, click on the 'Complete Verification' (or 'Complete Profile') link.",
          "Read Terms and Conditions — On the verification info page, read the instructions, click 'Continue', review the validation steps, and click 'Start Verification' to begin.",
          "Accept Privacy Agreement — Read the legal data protection consent box and click the 'Agree and Continue' button.",
          "Verify Mobile Number — On the Phone Verification screen, select your country of residence, enter your mobile phone number, and click 'Send Verification Code'. Retrieve the OTP code sent to your phone, type it into the verification box, and confirm.",
          "Upload Identity Documents — Select your country of residence and choose your document type (Passport, National ID Card, or Driver's License) from the list. Click 'Continue'. Upload high-quality, clear photos of the front and back of your selected identity document. (Note: You can click 'Continue on Phone' to scan a QR code and use your phone's camera to upload documents easily).",
          "Wait for Verification Success — Wait a few moments while the system automatically scans your documents. A success message will appear once your documents are approved, unlocking all deposit, withdrawal, and trading features of your cabinet."
        ],
        edgeCases: [
          {
            title: "My document upload failed or was rejected",
            text: "Ensure the photos are high-resolution, not blurry, and all four corners of the document are visible. Check that the document has not expired and the names match your profile registration exactly."
          },
          {
            title: "How long does the KYC verification take?",
            text: "Most applications are automatically processed within 5-15 minutes using our AI verification portal. If manual review is required by compliance, it can take up to 2 hours during working hours."
          }
        ]
      },
      fa: {
        summary: "تکمیل مراحل احراز هویت (KYC) جهت آزادسازی دسترسی کامل به امکانات واریز، برداشت و معاملات واقعی در حساب وینگو مارکتس.",
        prerequisites: [
          "ورود موفق به کابین شخصی وینگو مارکتس",
          "داشتن شماره همراه فعال جهت دریافت کد پیامکی",
          "تصویر واضح از مدارک شناسایی معتبر (کارت ملی، شناسنامه یا پاسپورت)"
        ],
        stepsWeb: [
          "مرحله ۱: شروع احراز هویت — بعد از ثبت‌نام و وارد کردن اطلاعات شخصی، در نوار بالای صفحه، روی گزینه complete (تکمیل احراز هویت) بزنید.",
          "مرحله ۲: مطالعه شرایط احراز هویت — صفحه جدیدی براتون باز می‌شه. متن صفحه رو مطالعه کنید و دکمه Continue رو بزنید. در صفحه بعد، مراحل احراز هویت رو بخونید و روی دکمه Start Verification کلیک کنید. (نکته: در صورت نیاز به راهنما، در بالای صفحه گزینه go to guide رو بزنید).",
          "مرحله ۳: موافقت با قوانین و مقررات — یک باکس حاوی لینک قوانین و مقررات برایتان نمایش داده می‌شه. قوانین رو مطالعه کنید و گزینه Agree and continue رو بزنید.",
          "مرحله ۴: تایید شماره تلفن همراه — در این مرحله، وارد صفحه Phone Verification می‌شید. کشور محل اقامتتون رو انتخاب و شماره تلفن همراهتون رو وارد کنید. گزینه Send Verification Code رو بزنید و کد تایید دریافتی را تایپ کنید.",
          "مرحله ۵: انتخاب و بارگذاری مدارک شناسایی — کشور محل اقامتتون رو مشخص و نوع مدرک شناسایی موردنظرتون رو انتخاب کنید و دکمه continue رو بزنید. در صفحه بعدی، پشت و روی مدرک شناسایی‌تون رو بارگذاری کنید. (نکته: در صورت تمایل می‌توانید گزینه continue on phone را انتخاب کنید تا با دوربین گوشی عکس بگیرید).",
          "مرحله ۶: پایان فرآیند احراز هویت — چند لحظه صبر کنید تا مدارک شناسایی شما تایید بشه. بعد از تایید مدارک یک پیام موفقیت دریافت می‌کنید و می‌توانید از تمامی امکانات پنل کاربری استفاده کنید."
        ],
        stepsMobile: [
          "مرحله ۱: شروع احراز هویت — بعد از ثبت‌نام و وارد کردن اطلاعات شخصی، در نوار بالای صفحه، روی گزینه complete (تکمیل احراز هویت) بزنید.",
          "مرحله ۲: مطالعه شرایط احراز هویت — صفحه جدیدی براتون باز می‌شه. متن صفحه رو مطالعه کنید و دکمه Continue رو بزنید. در صفحه بعد، مراحل احراز هویت رو بخونید و روی دکمه Start Verification کلیک کنید. (نکته: در صورت نیاز به راهنما، در بالای صفحه گزینه go to guide رو بزنید).",
          "مرحله ۳: موافقت با قوانین و مقررات — یک باکس حاوی لینک قوانین و مقررات برایتان نمایش داده می‌شه. قوانین رو مطالعه کنید و گزینه Agree and continue رو بزنید.",
          "مرحله ۴: تایید شماره تلفن همراه — در این مرحله، وارد صفحه Phone Verification می‌شید. کشور محل اقامتتون رو انتخاب و شماره تلفن همراهتون رو وارد کنید. گزینه Send Verification Code رو بزنید و کد تایید دریافتی را تایپ کنید.",
          "مرحله ۵: انتخاب و بارگذاری مدارک شناسایی — کشور محل اقامتتون رو مشخص و نوع مدرک شناسایی موردنظرتون رو انتخاب کنید و دکمه continue رو بزنید. در صفحه بعدی، پشت و روی مدرک شناسایی‌تون رو بارگذاری کنید. (نکته: در صورت تمایل می‌توانید گزینه continue on phone را انتخاب کنید تا با دوربین گوشی عکس بگیرید).",
          "مرحله ۶: پایان فرآیند احراز هویت — چند لحظه صبر کنید تا مدارک شناسایی شما تایید بشه. بعد از تایید مدارک یک پیام موفقیت دریافت می‌کنید و می‌توانید از تمامی امکانات پنل کاربری استفاده کنید."
        ],
        edgeCases: [
          {
            title: "چرا مدارک شناسایی من تایید نشد؟",
            text: "مطمئن شوید تصاویر ارسالی واضح، بدون انعکاس نور و با وضوح بالا هستند و چهار گوشه مدرک در کادر دیده می‌شود. همچنین تاریخ انقضای مدرک نباید گذشته باشد."
          },
          {
            title: "تایید مدارک چقدر زمان می‌برد؟",
            text: "فرآیند بررسی هوشمند مدارک معمولاً بین ۵ تا ۱۵ دقیقه طول می‌کشد. در موارد خاص که نیاز به بررسی دستی کارشناسان است، تایید تا ۲ ساعت زمان می‌برد."
          }
        ]
      },
      ar: {
        summary: "أكمل خطوات التحقق من الهوية (KYC) لتفعيل صلاحيات الإيداع والسحب والتداول بالكامل في حسابك لدى WingoMarkets.",
        prerequisites: [
          "تسجيل الدخول إلى بوابة عملاء WingoMarkets الخاصة بك",
          "رقم هاتف محمول نشط لاستلام رمز التحقق",
          "صورة واضحة لوثيقة الهوية الرسمية (جواز سفر، بطاقة هوية وطنية، أو رخصة قيادة)"
        ],
        stepsWeb: [
          "الخطوة 1: بدء عملية التحقق — بعد تسجيل الدخول، انقر فوق رابط 'complete' (إتمام التحقق) في شريط الإشعارات العلوي.",
          "الخطوة 2: قراءة شروط التحقق — ستفتح لك صفحة جديدة. اقرأ التعليمات ثم انقر فوق زر 'Continue'. في الصفحة التالية، راجع خطوات التحقق وانقر فوق زر 'Start Verification'. (ملاحظة: يمكنك النقر فوق 'go to guide' في الجزء العلوي للمساعدة).",
          "الخطوة 3: الموافقة على الشروط والسياسات — سيظهر لك صندوق يحتوي على شروط استخدام البيانات. اقرأ الشروط وانقر فوق زر 'Agree and continue'.",
          "الخطوة 4: تفعيل رقم الهاتف المحمول — في صفحة Phone Verification، اختر بلد الإقامة وأدخل رقم هاتفك المحمول. انقر فوق 'Send Verification Code' ثم اكتب رمز التحقق المستلم في الحقل المخصص.",
          "الخطوة 5: اختيار ورفع وثائق الهوية — حدد بلد الإقامة ونوع الوثيقة التي تريد رفعها (جواز سفر، بطاقة هوية، أو رخصة قيادة) ثم انقر فوق 'Continue'. قم برفع صور واضحة لوجهي وثيقة الهوية الخاصة بك. (ملاحظة: يمكنك اختيار 'continue on phone' لمسح رمز QR واستخدم كاميرا هاتفك لرفع المستندات بسهولة).",
          "الخطوة 6: إتمام عملية التحقق — انتظر بضع لحظات حتى يقوم النظام بفحص وثائقك تلقائياً. ستتلقى رسالة تفيد بنجاح التحقق، مما يتيح لك استخدام كافة ميزات البوابة."
        ],
        stepsMobile: [
          "الخطوة 1: بدء عملية التحقق — بعد تسجيل الدخول، انقر فوق رابط 'complete' (إتمام التحقق) في شريط الإشعارات العلوي.",
          "الخطوة 2: قراءة شروط التحقق — ستفتح لك صفحة جديدة. اقرأ التعليمات ثم انقر فوق زر 'Continue'. في الصفحة التالية، راجع خطوات التحقق وانقر فوق زر 'Start Verification'. (ملاحظة: يمكنك النقر فوق 'go to guide' في الجزء العلوي للمساعدة).",
          "الخطوة 3: الموافقة على الشروط والسياسات — سيظهر لك صندوق يحتوي على شروط استخدام البيانات. اقرأ الشروط وانقر فوق زر 'Agree and continue'.",
          "الخطوة 4: تفعيل رقم الهاتف المحمول — في صفحة Phone Verification، اختر بلد الإقامة وأدخل رقم هاتفك المحمول. انقر فوق 'Send Verification Code' ثم اكتب رمز التحقق المستلم في الحقل المخصص.",
          "الخطوة 5: اختيار ورفع وثائق الهوية — حدد بلد الإقامة ونوع الوثيقة التي تريد رفعها (جواز سفر، بطاقة هوية، أو رخصة قيادة) ثم انقر فوق 'Continue'. قم برفع صور واضحة لوجهي وثيقة الهوية الخاصة بك. (ملاحظة: يمكنك اختيار 'continue on phone' لمسح رمز QR واستخدم كاميرا هاتفك لرفع المستندات بسهولة).",
          "الخطوة 6: إتمام عملية التحقق — انتظر بضع لحظات حتى يقوم النظام بفحص وثائقك تلقائياً. ستتلقى رسالة تفيد بنجاح التحقق، مما يتيح لك استخدام كافة ميزات البوابة."
        ],
        edgeCases: [
          {
            title: "لماذا تم رفض وثيقة الهوية الخاصة بي؟",
            text: "تأكد من أن الصور المرفوعة واضحة وخالية من انعكاسات الضوء، وأن جميع زوايا الوثيقة تظهر داخل الكادر. تأكد أيضاً من صلاحية الوثيقة وأن الاسم يتطابق تماماً مع حسابك."
          },
          {
            title: "كم من الوقت يستغرق التحقق من الحساب؟",
            text: "يستغرق التحقق التلقائي الذكي عادةً من 5 إلى 15 دقيقة. في حال تطلب الأمر مراجعة يدوية من قبل فريق الامتثال، قد يستغرق ذلك ما يصل إلى ساعتين."
          }
        ]
      }
    },
    relatedSlugs: ["how-to-register", "change-portal-password"]
  },
  {
    slug: "metatrader-login-android",
    categorySlug: "platforms-tools",
    pillar: "help-center",
    template: "A",
    lastUpdated: "2026-06-28",
    readTime: 3,
    title: {
      en: "How to Log In to MetaTrader 5 on Android",
      fa: "راهنمای دانلود و ورود به متاتریدر ۵ (اندروید)",
      ar: "كيفية تسجيل الدخول إلى منصة MetaTrader 5 على نظام Android"
    },
    description: {
      en: "Step-by-step guide to downloading the MT5 application and connecting your WingoMarkets trading account on Android devices.",
      fa: "راهنمای گام‌به‌گام برای دانلود اپلیکیشن متاتریدر ۵ و اتصال حساب معاملاتی وینگو مارکتس در گوشی‌های اندروید.",
      ar: "دليل خطوة بخطوة لتنزيل تطبيق MT5 وتوصيل حساب تداول WingoMarkets الخاص بك على أجهزة Android."
    },
    content: {
      en: {
        summary: "Learn how to download the MetaTrader 5 Android application, search for Wingo Group Ltd servers, and successfully log in to start trading.",
        prerequisites: [
          "An Android smartphone or tablet",
          "Your WingoMarkets MT5 Account Login ID and Password (from your Client Hub or email)"
        ],
        stepsWeb: [
          "Download the Application — Log in to your Client Hub. From the main menu, go to the 'Platforms' section, select the Android version of MetaTrader 5, download the APK or install it from the Google Play Store, and install it on your device.",
          "Open App Settings — Open the MetaTrader 5 app. In the bottom navigation bar, tap on the 'Messages' (or settings) icon. Open the side menu and select 'Get Started'. Tap the '+' icon at the top of the screen to add a new account.",
          "Search Server and Enter Credentials — In the broker search field, type 'Wingo Group Ltd' and select Wingo Group Ltd. Enter your trading account Login ID and Password in the fields provided, then tap 'Login'.",
          "Confirm Connection — Once logged in, your account balance, active assets, and servers will load. You are now connected and ready to start trading on Android."
        ],
        stepsMobile: [
          "Download the Application — Log in to your Client Hub. From the main menu, go to the 'Platforms' section, select the Android version of MetaTrader 5, download the APK or install it from the Google Play Store, and install it on your device.",
          "Open App Settings — Open the MetaTrader 5 app. In the bottom navigation bar, tap on the 'Messages' (or settings) icon. Open the side menu and select 'Get Started'. Tap the '+' icon at the top of the screen to add a new account.",
          "Search Server and Enter Credentials — In the broker search field, type 'Wingo Group Ltd' and select Wingo Group Ltd. Enter your trading account Login ID and Password in the fields provided, then tap 'Login'.",
          "Confirm Connection — Once logged in, your account balance, active assets, and servers will load. You are now connected and ready to start trading on Android."
        ],
        edgeCases: [
          {
            title: "My login details are rejected",
            text: "Double-check that you are using the correct MT5 account Login ID (numeric) and account password, not your portal password. Make sure there are no trailing spaces if copying and pasting."
          },
          {
            title: "Which server should I select?",
            text: "Make sure you choose Wingo-Server for real accounts and Wingo-Demo for demo accounts as specified in your account credentials."
          }
        ]
      },
      fa: {
        summary: "آموزش دانلود نرم‌افزار متاتریدر ۵ نسخه اندروید، جستجوی سرور Wingo Group Ltd و ورود موفق به حساب جهت شروع معاملات.",
        prerequisites: [
          "گوشی یا تبلت مجهز به سیستم‌عامل اندروید",
          "مشخصات حساب معاملاتی (شماره ورود Login و کلمه عبور Password متاتریدر)"
        ],
        stepsWeb: [
          "مرحله ۱: دانلود اپلیکیشن — برای شروع، وارد پنل کاربری‌تون بشید و از منوی اصلی به بخش «پلتفرم‌ها» برید. در این قسمت، نسخه اندروید متاتریدر ۵ را انتخاب کنید و دانلود را انجام بدید. بعد از دانلود، برنامه را روی گوشی‌تون نصب کنید تا آماده استفاده بشه.",
          "مرحله ۲: شروع تنظیمات در برنامه — بعد از نصب، متاتریدر را باز کنید. برای شروع اتصال، از نوار پایین برنامه وارد بخش Messages بشید. در این صفحه، منو را باز کنید و گزینه Get Started را انتخاب کنید. بعد از ورود به این بخش، برای اضافه کردن حساب جدید، روی علامت «+» در بالای صفحه بزنید و گزینه افزودن حساب را انتخاب کنید.",
          "مرحله ۳: انتخاب سرور و ورود به حساب — در این مرحله، داخل کادر جستجو عبارت Wingo Group Ltd را وارد کنید و سرور مربوطه را انتخاب کنید. بعد از انتخاب سرور، اطلاعات حساب معاملاتی‌تون رو وارد کنید (Login و Password). با وارد کردن اطلاعات، وارد حساب خودتون میشید.",
          "مرحله ۴: تکمیل اتصال — در نهایت، بعد از ورود موفق، اتصال حساب شما برقرار و پیام تأیید نمایش داده میشه. بعد از این مرحله شما به محیط معاملاتی دسترسی دارید و می‌تونید فعالیت‌تون رو شروع کنید."
        ],
        stepsMobile: [
          "مرحله ۱: دانلود اپلیکیشن — برای شروع، وارد پنل کاربری‌تون بشید و از منوی اصلی به بخش «پلتفرم‌ها» برید. در این قسمت، نسخه اندروید متاتریدر ۵ را انتخاب کنید و دانلود را انجام بدید. بعد از دانلود، برنامه را روی گوشی‌تون نصب کنید تا آماده استفاده بشه.",
          "مرحله ۲: شروع تنظیمات در برنامه — بعد از نصب، متاتریدر را باز کنید. برای شروع اتصال، از نوار پایین برنامه وارد بخش Messages بشید. در این صفحه، منو را باز کنید و گزینه Get Started را انتخاب کنید. بعد از ورود به این بخش، برای اضافه کردن حساب جدید، روی علامت «+» در بالای صفحه بزنید و گزینه افزودن حساب را انتخاب کنید.",
          "مرحله ۳: انتخاب سرور و ورود به حساب — در این مرحله، داخل کادر جستجو عبارت Wingo Group Ltd را وارد کنید و سرور مربوطه را انتخاب کنید. بعد از انتخاب سرور، اطلاعات حساب معاملاتی‌تون رو وارد کنید (Login و Password). با وارد کردن اطلاعات، وارد حساب خودتون میشید.",
          "مرحله ۴: تکمیل اتصال — در نهایت، بعد از ورود موفق، اتصال حساب شما برقرار و پیام تأیید نمایش داده میشه. بعد از این مرحله شما به محیط معاملاتی دسترسی دارید و می‌تونید فعالیت‌تون رو شروع کنید."
        ],
        edgeCases: [
          {
            title: "خطای تایید حساب کاربری در متاتریدر",
            text: "مطمئن شوید که رمز عبور حساب معاملاتی (MT5 Password) را وارد می‌کنید و نه رمز عبور ورود به پنل کاربری وینگو مارکتس. کلمات عبور به حروف بزرگ و کوچک حساس هستند."
          },
          {
            title: "انتخاب سرور مناسب برای حساب",
            text: "برای حساب‌های واقعی سرور Wingo-Server و برای حساب‌های دمو سرور Wingo-Demo را در هنگام ورود انتخاب کنید."
          }
        ]
      },
      ar: {
        summary: "تعرف على كيفية تنزيل تطبيق MetaTrader 5 لنظام Android، والبحث عن خوادم Wingo Group Ltd، وتسجيل الدخول بنجاح للبدء في التداول.",
        prerequisites: [
          "هاتف ذكي أو جهاز لوحي يعمل بنظام Android",
          "بيانات تسجيل الدخول لحساب تداول MT5 الخاص بك (الرقم السري ورقم الحساب المستلم)"
        ],
        stepsWeb: [
          "الخطوة 1: تنزيل التطبيق — قم بتسجيل الدخول إلى بوابة العميل. من القائمة الرئيسية، انتقل إلى قسم 'المنصات'، واختر نسخة Android لتطبيق MetaTrader 5، وقم بتنزيل الملف وتثبيته على جهازك.",
          "الخطوة 2: بدء الإعدادات في التطبيق — افتح تطبيق MetaTrader 5. من الشريط السفلي للتطبيق، انتقل إلى قسم 'Messages'. افتح القائمة الجانبية واختر 'Get Started'. لإضافة حساب جديد، انقر فوق علامة '+' في الجزء العلوي من الشاشة.",
          "الخطوة 3: اختيار الخادم وتسجيل الدخول — في حقل البحث، اكتب 'Wingo Group Ltd' واختر الخادم المقابل. بعد اختيار الخادم، أدزل بيانات حساب التداول الخاص بك: رقم تسجيل الدخول (Login) وكلمة المرور (Password)، ثم انقر فوق تسجيل الدخول.",
          "الخطوة 4: إتمام التوصيل — بعد تسجيل الدخول بنجاح، سيتم توصيل حسابك وسيظهر تأكيد الاتصال. يمكنك الآن الوصول إلى واجهة التداول والبدء في فتح الصفقات."
        ],
        stepsMobile: [
          "الخطوة 1: تنزيل التطبيق — قم بتسجيل الدخول إلى بوابة العميل. من القائمة الرئيسية، انتقل إلى قسم 'المنصات'، واختر نسخة Android لتطبيق MetaTrader 5، وقم بتنزيل الملف وتثبيته على جهازك.",
          "الخطوة 2: بدء الإعدادات في التطبيق — افتح تطبيق MetaTrader 5. من الشريط السفلي للتطبيق، انتقل إلى قسم 'Messages'. افتح القائمة الجانبية واختر 'Get Started'. لإضافة حساب جديد، انقر فوق علامة '+' في الجزء العلوي من الشاشة.",
          "الخطوة 3: اختيار الخادم وتسجيل الدخول — في حقل البحث، اكتب 'Wingo Group Ltd' واختر الخادم المقابل. بعد اختيار الخادم، أدخل بيانات حساب التداول الخاص بك: رقم تسجيل الدخول (Login) وكلمة المرور (Password)، ثم انقر فوق تسجيل الدخول.",
          "الخطوة 4: إتمام التوصيل — بعد تسجيل الدخول بنجاح، سيتم توصيل حسابك وسيظهر تأكيد الاتصال. يمكنك الآن الوصول إلى واجهة التداول والبدء في فتح الصفقات."
        ],
        edgeCases: [
          {
            title: "بيانات تسجيل الدخول مرفوضة",
            text: "تأكد من استخدام كلمة المرور الخاصة بحساب التداول (MT5 Password) وليس كلمة مرور تسجيل الدخول إلى بوابة العميل. يرجى الانتباه لحالة الأحرف."
          },
          {
            title: "أي خادم يجب علي اختياره؟",
            text: "اختر Wingo-Server للحسابات الحقيقية وWingo-Demo للحسابات التجريبية كما هو موضح in بيانات حسابك."
          }
        ]
      }
    },
    relatedSlugs: ["change-demo-password", "change-real-password"]
  },
  {
    slug: "metatrader-login-ios",
    categorySlug: "platforms-tools",
    pillar: "help-center",
    template: "A",
    lastUpdated: "2026-06-28",
    readTime: 3,
    title: {
      en: "How to Log In to MetaTrader 5 on iOS",
      fa: "راهنمای نصب و ورود به متاتریدر ۵ (iOS)",
      ar: "كيفية تسجيل الدخول إلى منصة MetaTrader 5 على نظام iOS"
    },
    description: {
      en: "Step-by-step guide to downloading the MT5 application and connecting your WingoMarkets trading account on Apple iOS (iPhone/iPad) devices.",
      fa: "راهنمای گام‌به‌گام برای دانلود اپلیکیشن متاتریدر ۵ و اتصال حساب معاملاتی وینگو مارکتس در گوشی‌های آیفون و آیپد (iOS).",
      ar: "دليل خطوة بخطوة لتنزيل تطبيق MT5 وتوصيل حساب تداول WingoMarkets الخاص بك على أجهزة iOS (iPhone/iPad)."
    },
    content: {
      en: {
        summary: "Learn how to download the MetaTrader 5 application for iOS, search for Wingo Group Ltd servers, and connect your trading account on iPhone or iPad.",
        prerequisites: [
          "An Apple iPhone or iPad",
          "Your WingoMarkets MT5 Account Login ID and Password (from your Client Hub or email)"
        ],
        stepsWeb: [
          "Download the Application — Log in to your Client Hub. From the main menu, navigate to the 'Platforms' section, select the iOS version of MetaTrader 5, download the app from the App Store, and install it on your device.",
          "Search Server — Open the MetaTrader 5 application. If an initial default account setup screen appears, close it by tapping 'X' to enter the main app. In the search bar under servers or brokers, type 'Wingo Group Ltd' and select Wingo Group Ltd when it appears in the results.",
          "Login and Connect Account — Enter your trading account Login ID and Password. You can toggle the 'Save Password' switch to remember your credentials for future logins. Tap the 'Sign In' button to connect your account and start trading on iOS."
        ],
        stepsMobile: [
          "Download the Application — Log in to your Client Hub. From the main menu, navigate to the 'Platforms' section, select the iOS version of MetaTrader 5, download the app from the App Store, and install it on your device.",
          "Search Server — Open the MetaTrader 5 application. If an initial default account setup screen appears, close it by tapping 'X' to enter the main app. In the search bar under servers or brokers, type 'Wingo Group Ltd' and select Wingo Group Ltd when it appears in the results.",
          "Login and Connect Account — Enter your trading account Login ID and Password. You can toggle the 'Save Password' switch to remember your credentials for future logins. Tap the 'Sign In' button to connect your account and start trading on iOS."
        ],
        edgeCases: [
          {
            title: "I cannot find Wingo Group Ltd in the server list",
            text: "Ensure your device is connected to the internet. If it doesn't appear, try typing the full name 'Wingo Group Ltd' without shortcuts. Check that your iOS app is updated to the latest version."
          },
          {
            title: "MT5 connection shows 'Invalid Account'",
            text: "Verify your Login ID and Password. If you recently changed your trading account password from the portal, use the new password."
          }
        ]
      },
      fa: {
        summary: "آموزش دانلود نرم‌افزار متاتریدر ۵ نسخه iOS، جستجوی سرور Wingo Group Ltd و ورود موفق به حساب جهت شروع معاملات در آیفون.",
        prerequisites: [
          "گوشی آیفون یا تبلت آیپد مجهز به سیستم‌عامل iOS",
          "مشخصات حساب معاملاتی (شماره ورود Login و کلمه عبور Password متاتریدر)"
        ],
        stepsWeb: [
          "مرحله ۱: دریافت و نصب اپلیکیشن — وارد پنل کاربری‌تون بشید و از داخل داشبورد، به بخش «پلتفرم‌ها» برید. در این قسمت، نسخه iOS متاتریدر ۵ در دسترس شماست. اون رو انتخاب کنید، دانلود رو انجام بدید و برنامه رو روی گوشی‌تون نصب کنید.",
          "مرحله ۲: پیدا کردن سرور — بعد از نصب، اپلیکیشن رو باز کنید. در شروع کار، یک صفحه اولیه نمایش داده میشه که می‌تونید با زدن «×» صفحه رو ببندید تا وارد بخش اصلی بشید. بعد از ورود به محیط برنامه، از بخش جستجو، نام Wingo Group Ltd رو وارد کنید. وقتی نتیجه نمایش داده شد، سرور مربوطه رو انتخاب کنید تا به مرحله ورود برسید.",
          "مرحله ۳: اتصال به حساب — در این مرحله، باید اطلاعات حساب معاملاتی‌تون رو وارد کنید: نام کاربری (Login) و رمز عبور (Password). بعد از وارد کردن اطلاعات، گزینه Sign in رو بزنید تا به حساب‌تون متصل بشید. در صورت نیاز، می‌تونید ذخیره رمز عبور را فعال کنید تا برای ورودهای بعدی سریع‌تر اقدام کنید."
        ],
        stepsMobile: [
          "مرحله ۱: دریافت و نصب اپلیکیشن — وارد پنل کاربری‌تون بشید و از داخل داشبورد، به بخش «پلتفرم‌ها» برید. در این قسمت، نسخه iOS متاتریدر ۵ در دسترس شماست. اون رو انتخاب کنید، دانلود رو انجام بدید و برنامه رو روی گوشی‌تون نصب کنید.",
          "مرحله ۲: پیدا کردن سرور — بعد از نصب، اپلیکیشن رو باز کنید. در شروع کار، یک صفحه اولیه نمایش داده میشه که می‌تونید با زدن «×» صفحه رو ببندید تا وارد بخش اصلی بشید. بعد از ورود به محیط برنامه، از بخش جستجو، نام Wingo Group Ltd رو وارد کنید. وقتی نتیجه نمایش داده شد، سرور مربوطه رو انتخاب کنید تا به مرحله ورود برسید.",
          "مرحله ۳: اتصال به حساب — در این مرحله، باید اطلاعات حساب معاملاتی‌تون رو وارد کنید: نام کاربری (Login) و رمز عبور (Password). بعد از وارد کردن اطلاعات، گزینه Sign in رو بزنید تا به حساب‌تون متصل بشید. در صورت نیاز، می‌تونید ذخیره رمز عبور را فعال کنید تا برای ورودهای بعدی سریع‌تر اقدام کنید."
        ],
        edgeCases: [
          {
            title: "عدم نمایش سرور Wingo Group Ltd",
            text: "از اتصال صحیح اینترنت خود مطمئن شوید. نام کاربری کارگزار را دقیقاً به صورت Wingo Group Ltd تایپ کنید تا لیست جستجو به‌روزرسانی شود."
          },
          {
            title: "خطای Invalid Account در آیفون",
            text: "شماره حساب و کلمه عبور را مجدداً چک کنید. در صورت کپی کردن، دقت کنید فاصله اضافی در ابتدا یا انتهای کادر وارد نشده باشد."
          }
        ]
      },
      ar: {
        summary: "تعرف على كيفية تنزيل تطبيق MetaTrader 5 لنظام iOS، والبحث عن خوادم Wingo Group Ltd، وتوصيل حساب التداول الخاص بك على أجهزة iPhone و iPad.",
        prerequisites: [
          "هاتف ذكي iPhone أو جهاز لوحي iPad يعمل بنظام iOS",
          "بيانات تسجيل الدخول لحساب تداول MT5 الخاص بك (الرقم السري ورقم الحساب المستلم)"
        ],
        stepsWeb: [
          "الخطوة 1: تنزيل وتثبيت التطبيق — قم بتسجيل الدخول إلى بوابة العميل. من لوحة التحكم، انتقل إلى قسم 'المنصات'، واختر نسخة iOS لتطبيق MetaTrader 5، وقم بتنزيل الملف من متجر App Store وتثبيته على جهازك.",
          "الخطوة 2: البحث عن الخادم — افتح التطبيق بعد التثبيت. ستظهر لك صفحة إعداد افتراضية في البداية، أغلقها بالضغط على 'X' للدخول إلى الشاشة الرئيسية. في شريط البحث، اكتب 'Wingo Group Ltd'. بعد ظهور النتيجة، اختر الخادم المقابل للوصول إلى صفحة تسجيل الدخول.",
          "الخطوة 3: التوصيل بالحساب — أدخل بيانات حساب التداول الخاص بك: رقم تسجيل الدخول (Login) وكلمة المرور (Password). بعد إدخال البيانات، انقر فوق 'Sign in' للاتصال بحسابك. يمكنك تفعيل خيار حفظ كلمة المرور لتسهيل عمليات الدخول المستقبلية."
        ],
        stepsMobile: [
          "الخطوة 1: تنزيل وتثبيت التطبيق — قم بتسجيل الدخول إلى بوابة العميل. من لوحة التحكم، انتقل إلى قسم 'المنصات'، واختر نسخة iOS لتطبيق MetaTrader 5، وقم بتنزيل الملف من متجر App Store وتثبيته على جهازك.",
          "الخطوة 2: البحث عن الخادم — افتح التطبيق بعد التثبيت. ستظهر لك صفحة إعداد افتراضية في البداية، أغلقها بالضغط على 'X' للدخول إلى الشاشة الرئيسية. في شريط البحث، اكتب 'Wingo Group Ltd'. بعد ظهور النتيجة، اختر الخادم المقابل للوصول إلى صفحة تسجيل الدخول.",
          "الخطوة 3: التوصيل بالحساب — أدخل بيانات حساب التداول الخاص بك: رقم تسجيل الدخول (Login) وكلمة المرور (Password). بعد إدخال البيانات، انقر فوق 'Sign in' للاتصال بحسابك. يمكنك تفعيل خيار حفظ كلمة المرور لتسهيل عمليات الدخول المستقبلية."
        ],
        edgeCases: [
          {
            title: "لم يظهر خادم Wingo Group Ltd في البحث",
            text: "تحقق من اتصال الإنترنت بجهازك. اكتب الاسم الكامل 'Wingo Group Ltd' بدقة في حقل البحث. تأكد من تحديث تطبيق MT5 من متجر App Store."
          },
          {
            title: "تظهر رسالة Invalid Account عند تسجيل الدخول",
            text: "يرجى التحقق من رقم الحساب وكلمة المرور الخاصة بمنصة MT5 وتأكد من عدم وجود مسافات إضافية."
          }
        ]
      }
    },
    relatedSlugs: ["metatrader-login-android", "change-real-password"]
  },
  {
    slug: "metatrader-login-windows",
    categorySlug: "platforms-tools",
    pillar: "help-center",
    template: "A",
    lastUpdated: "2026-06-28",
    readTime: 3,
    title: {
      en: "How to Log In to MetaTrader 5 on Windows",
      fa: "راهنمای دانلود و ورود به متاتریدر ۵ (ویندوز)",
      ar: "كيفية تسجيل الدخول إلى منصة MetaTrader 5 على نظام Windows"
    },
    description: {
      en: "Step-by-step guide to downloading the MT5 setup file, installing the terminal, and connecting your WingoMarkets trading account on Windows PCs.",
      fa: "راهنمای گام‌به‌گام برای دانلود نسخه دسکتاپ متاتریدر ۵، نصب و اتصال حساب معاملاتی وینگو مارکتس در سیستم‌عامل ویندوز.",
      ar: "دليل خطوة بخطوة لتنزيل ملف تثبيت MT5 للكمبيوتر، وتثبيته، وتوصيل حساب تداول WingoMarkets الخاص بك على نظام تشغيل Windows."
    },
    content: {
      en: {
        summary: "Learn how to download and install the MetaTrader 5 desktop client for Windows, select Wingo Group Ltd servers, and log in to start trading.",
        prerequisites: [
          "A computer running Microsoft Windows OS",
          "Your WingoMarkets MT5 Account Login ID and Password (from your Client Hub or email)"
        ],
        stepsWeb: [
          "Download Desktop Terminal — Log in to your Client Hub dashboard. From the main menu, go to the 'Platforms' section, select the Windows version of MetaTrader 5, and download the setup installer file.",
          "Select Trading Server — Open the installed MetaTrader 5 application. From the top menu bar, click on 'File' and select 'Open an Account'. In the servers window that opens, search for 'Wingo Group Ltd' or select the Wingo Group Ltd server from the list, then click 'Next' or 'Continue'.",
          "Enter Account Credentials — Choose the option 'Connect with an existing trade account'. Enter your trading account Login ID and Password in the fields provided, select the appropriate server (e.g., Wingo-Server for real, Wingo-Demo for demo), and click 'Finish' to send the login request.",
          "Verify Connection — Wait a few seconds for the terminal to connect to the server. You will hear a connection chime, tick charts will load, and your account balance and assets will display in the Terminal tab below. You are now ready to trade."
        ],
        stepsMobile: [
          "Download Desktop Terminal — Log in to your Client Hub dashboard. From the main menu, go to the 'Platforms' section, select the Windows version of MetaTrader 5, and download the setup installer file.",
          "Select Trading Server — Open the installed MetaTrader 5 application. From the top menu bar, click on 'File' and select 'Open an Account'. In the servers window that opens, search for 'Wingo Group Ltd' or select the Wingo Group Ltd server from the list, then click 'Next' or 'Continue'.",
          "Enter Account Credentials — Choose the option 'Connect with an existing trade account'. Enter your trading account Login ID and Password in the fields provided, select the appropriate server (e.g., Wingo-Server for real, Wingo-Demo for demo), and click 'Finish' to send the login request.",
          "Verify Connection — Wait a few seconds for the terminal to connect to the server. You will hear a connection chime, tick charts will load, and your account balance and assets will display in the Terminal tab below. You are now ready to trade."
        ],
        edgeCases: [
          {
            title: "Connection status shows 'No connection' in the bottom right",
            text: "Ensure your computer is connected to the internet. Verify that your firewall or antivirus is not blocking MetaTrader 5 ports. Try re-scanning the server network."
          },
          {
            title: "What is the difference between master and investor passwords?",
            text: "Use your Master Password (trading password) to execute trades. If you log in with your Investor Password, the terminal will be in read-only mode and you won't be able to open or close trades."
          }
        ]
      },
      fa: {
        summary: "آموزش دریافت نرم‌افزار متاتریدر ۵ نسخه ویندوز، جستجوی سرور Wingo Group Ltd و ورود موفق به حساب جهت انجام معاملات در کامپیوتر.",
        prerequisites: [
          "رایانه یا لپ‌تاپ با سیستم‌عامل مایکروسافت ویندوز",
          "مشخصات حساب معاملاتی (شماره ورود Login و کلمه عبور Password متاتریدر)"
        ],
        stepsWeb: [
          "مرحله ۱: دریافت نرم‌افزار — برای شروع، وارد پنل کاربری‌تون بشید و از منوی اصلی به بخش «پلتفرم‌ها» برید. در این قسمت نسخه مخصوص ویندوز (MetaTrader 5) را انتخاب کنید و دانلود را انجام بدید.",
          "مرحله ۲: انتخاب سرور معاملاتی — بعد از نصب، متاتریدر را اجرا کنید. از نوار بالای برنامه وارد منوی File بشید و گزینه Open an Account را انتخاب کنید. در پنجره‌ای که باز میشه، لیست سرورهای قابل اتصال نمایش داده شده. در این مرحله، سرور مربوط به وینگو مارکتس (Wingo Group Ltd) را انتخاب کنید تا به مرحله ورود اطلاعات حساب هدایت بشید.",
          "مرحله ۳: وارد کردن اطلاعات حساب — در این بخش، باید مشخصات حساب معاملاتی‌تون رو وارد کنید. گزینه اتصال به یک حساب معاملاتی موجود (existing trade account) را انتخاب کنید. نام کاربری (Login) و رمز عبور (Password) که قبلاً از طریق پنل وینگو مارکتس دریافت کردید را در کادرهای مربوطه وارد کنید. بعد از وارد کردن اطلاعات، روی گزینه Finish بزنید تا درخواست اتصال به سرور ثبت بشه.",
          "مرحله ۴: تکمیل اتصال — پس از تأیید اطلاعات، چند لحظه زمان می‌بره تا اتصال به حساب برقرار شود. بعد از اتصال، چارت نمادها براتون نمایش داده میشه و می‌تونید موجودی و اطلاعات حساب‌تون رو داخل پلتفرم مشاهده کنید."
        ],
        stepsMobile: [
          "مرحله ۱: دریافت نرم‌افزار — برای شروع، وارد پنل کاربری‌تون بشید و از منوی اصلی به بخش «پلتفرم‌ها» برید. در این قسمت نسخه مخصوص ویندوز (MetaTrader 5) را انتخاب کنید و دانلود را انجام بدید.",
          "مرحله ۲: انتخاب سرور معاملاتی — بعد از نصب، متاتریدر را اجرا کنید. از نوار بالای برنامه وارد منوی File بشید و گزینه Open an Account را انتخاب کنید. در پنجره‌ای که باز میشه، لیست سرورهای قابل اتصال نمایش داده شده. در این مرحله، سرور مربوط به وینگو مارکتس (Wingo Group Ltd) را انتخاب کنید تا به مرحله ورود اطلاعات حساب هدایت بشید.",
          "مرحله ۳: وارد کردن اطلاعات حساب — در این بخش، باید مشخصات حساب معاملاتی‌تون رو وارد کنید. گزینه اتصال به یک حساب معاملاتی موجود (existing trade account) را انتخاب کنید. نام کاربری (Login) و رمز عبور (Password) که قبلاً از طریق پنل وینگو مارکتس دریافت کردید را در کادرهای مربوطه وارد کنید. بعد از وارد کردن اطلاعات، روی گزینه Finish بزنید تا درخواست اتصال به سرور ثبت بشه.",
          "مرحله ۴: تکمیل اتصال — پس از تأیید اطلاعات، چند لحظه زمان می‌بره تا اتصال به حساب برقرار شود. بعد از اتصال، چارت نمادها براتون نمایش داده میشه و می‌تونید موجودی و اطلاعات حساب‌تون رو داخل پلتفرم مشاهده کنید."
        ],
        edgeCases: [
          {
            title: "چرا وضعیت اتصال در گوشه پایین سمت راست 'No connection' است؟",
            text: "اتصال اینترنت خود را بررسی کنید. ممکن است فایروال یا آنتی‌ویروس ویندوز دسترسی متاتریدر را مسدود کرده باشد. روی بخش وضعیت کلیک کرده و سرورها را مجدداً اسکن (Rescan) کنید."
          },
          {
            title: "تفاوت رمز عبور اصلی و رمز عبور سرمایه‌گذار چیست؟",
            text: "برای انجام معامله حتماً باید از رمز عبور اصلی (Master Password) استفاده کنید. ورود با رمز عبور سرمایه‌گذار (Investor Password) حساب را به حالت فقط خواندنی (Read-only) در می‌آورد."
          }
        ]
      },
      ar: {
        summary: "تعرف على كيفية تنزيل وتثبيت منصة MetaTrader 5 لأجهزة الكمبيوتر التي تعمل بنظام Windows، واختيار خوادم Wingo Group Ltd، وتسجيل الدخول بنجاح.",
        prerequisites: [
          "كمبيوتر شخصي أو جهاز محمول يعمل بنظام تشغيل Windows",
          "بيانات تسجيل الدخول لحساب تداول MT5 الخاص بك (الرقم السري ورقم الحساب المستلم)"
        ],
        stepsWeb: [
          "الخطوة 1: تنزيل البرنامج — قم بتسجيل الدخول إلى لوحة التحكم الخاصة بك. من القائمة الرئيسية، انتقل إلى قسم 'المنصات'، واختر نسخة Windows لمنصة MetaTrader 5، ثم قم بتنزيل ملف التثبيت.",
          "الخطوة 2: اختيار خادم التداول — افتح تطبيق MetaTrader 5 بعد التثبيت. من القائمة العلوية، انقر فوق 'File' ثم اختر 'Open an Account'. في النافذة التي تظهر، ابحث عن 'Wingo Group Ltd' أو اختر خادم Wingo Group Ltd من القائمة، ثم انقر فوق 'Next'.",
          "الخطوة 3: إدخال بيانات الحساب — اختر خيار الاتصال بحساب تداول موجود (existing trade account). أدخل رقم الحساب (Login) وكلمة المرور (Password) الخاصة بحساب التداول الخاص بك في الحقول المخصصة. انقر فوق 'Finish' لإتمام التوصيل.",
          "الخطوة 4: إتمام التوصيل — بعد التحقق من البيانات، سيستغرق الاتصال بالخادم بضع ثوانٍ. ستظهر الرسوم البيانية للأصول والعملات، ويمكنك الاطلاع على رصيد حسابك وتفاصيل التداول في التبويب السفلي."
        ],
        stepsMobile: [
          "الخطوة 1: تنزيل البرنامج — قم بتسجيل الدخول إلى لوحة التحكم الخاصة بك. من القائمة الرئيسية، انتقل إلى قسم 'المنصات'، واختر نسخة Windows لمنصة MetaTrader 5، ثم قم بتنزيل ملف التثبيت.",
          "الخطوة 2: اختيار خادم التداول — افتح تطبيق MetaTrader 5 بعد التثبيت. من القائمة العلوية، انقر فوق 'File' ثم اختر 'Open an Account'. في النافذة التي تظهر، ابحث عن 'Wingo Group Ltd' أو اختر خادم Wingo Group Ltd من القائمة، ثم انقر فوق 'Next'.",
          "الخطوة 3: إدخال بيانات الحساب — اختر خيار الاتصال بحساب تداول موجود (existing trade account). أدخل رقم الحساب (Login) وكلمة المرور (Password) الخاصة بحساب التداول الخاص بك في الحقول المخصصة. انقر فوق 'Finish' لإتمام التوصيل.",
          "الخطوة 4: إتمام التوصيل — بعد التحقق من البيانات، سيستغرق الاتصال بالخادم بضع ثوانٍ. ستظهر الرسوم البيانية للأصول والعملات، ويمكنك الاطلاع على رصيد حسابك وتفاصيل التداول في التبويب السفلي."
        ],
        edgeCases: [
          {
            title: "حالة الاتصال تظهر 'No connection' في الأسفل",
            text: "تأكد من اتصال جهازك بالإنترنت. قد يقوم جدار الحماية (Firewall) في Windows بحظر تطبيق MT5. انقر فوق مؤشر الحالة في الأسفل واضغط على Rescan لإعادة الاتصال."
          },
          {
            title: "ما الفرق بين كلمة مرور التداول وكلمة مرور المستثمر؟",
            text: "يجب استخدام كلمة مرور التداول الرئيسية (Master Password) لتتمكن من فتح وإغلاق الصفقات. استخدام كلمة مرور المستثمر (Investor Password) يتيح لك مشاهدة الحساب فقط دون القدرة على التداول."
          }
        ]
      }
    },
    relatedSlugs: ["metatrader-login-android", "metatrader-login-ios"]
  },
  {
    slug: "social-trading-follower",
    categorySlug: "social-copy-trading",
    pillar: "help-center",
    template: "A",
    lastUpdated: "2026-06-28",
    readTime: 5,
    title: {
      en: "Social Trading Registration Guide (Follower)",
      fa: "راهنمای ثبت‌نام سوشال ترید (فالوور)",
      ar: "دليل التسجيل في التداول الاجتماعي (المتابع)"
    },
    description: {
      en: "Comprehensive guide to setting up a Social trading account, funding it, registering as a follower, configuring copy modes, risk limits, and copying master traders.",
      fa: "راهنمای جامع گام‌به‌گام برای ساخت حساب سوشال، شارژ حساب، ثبت‌نام به عنوان فالوور (دنبال‌کننده)، تنظیم روش‌های کپی و مدیریت ریسک.",
      ar: "دليل شامل خطوة بخطوة لإنشاء حساب تداول اجتماعي، وتمويل الحساب، والتسجيل كمتابع، وإعداد خيارات النسخ وإدارة المخاطر."
    },
    content: {
      en: {
        summary: "Start copy trading on WingoMarkets by creating a Social account, depositing a minimum of $100, registering as a follower, and configuring your risk management settings.",
        prerequisites: [
          "Active and verified WingoMarkets account (KYC approved)",
          "Minimum balance of $100 in your main wallet to fund the Social account"
        ],
        stepsWeb: [
          "Navigate to Accounts Section — Go to the main menu on your WingoMarkets cabinet dashboard and click on the 'Accounts' section.",
          "Create New Account — Click the '+' (plus) icon to initialize a new trading account setup.",
          "Select Social Account Type — Scroll through the available account types, select 'Social', and click 'Continue'.",
          "Configure Leverage — Choose your desired leverage setting for the account. Note: Only Real accounts are supported for Social Trading; Demo accounts cannot be used.",
          "Save Account Credentials — Once created, your Social account credentials (Login, Password, Server) will be displayed. Save these details securely.",
          "Fund Your Social Account — Go to your dashboard, click on the 'Transfer' option to move funds into your newly created Social account.",
          "Select Source Account — Specify the source wallet or trading account to deduct funds from.",
          "Enter Transfer Amount — Enter the transfer amount. Note: A minimum of $100 is required to activate and use the Social trading account.",
          "Go to Social Trading Section — From the sidebar menu, click on the 'Social Trading' tab.",
          "Register as Follower — Click on the 'Register as Follower' (Subscriber) option.",
          "Complete Profile Info — Enter the required details to create your Follower profile.",
          "Access Follower Panel — Once registered, you will gain access to the Follower dashboard to manage copy settings.",
          "Manage Subscription Filters — Utilize various filters to customize your subscription settings and search parameters.",
          "Auto-Scaling Mode — Select the Auto-Scaling subscription type to automatically size copied trades relative to your account balance.",
          "Edit Settings — If needed, modify your copy trading parameters at any time.",
          "Multiplier Mode — Select the Multiplier subscription type and set a custom ratio to multiply the trade volume copied from the provider.",
          "Fixed Volume Mode — Select the Fixed subscription type to copy all trades with a fixed lot size specified by you.",
          "Lot Ratio Mode — Select the Lot Ratio subscription type to scale copied volumes based on a customized ratio.",
          "Configure Risk Management — Set your custom risk limits (Stop Loss, Take Profit, Max Drawdown) to protect your capital.",
          "Activate Subscription — To begin copy trading, navigate to the actions menu at the top of the provider's strategy page and click 'Activate'.",
          "Suspend Subscription — You can temporarily pause or completely unsubscribe from any provider's strategy at any time.",
          "Re-activate Subscription — If your subscription was suspended, you can easily resume copy trading by clicking the activate button again.",
          "My Accounts Overview — View all your active Social trading accounts, balances, and copy stats under the 'My Accounts' tab.",
          "Transaction History — Monitor all deposits, withdrawals, and internal transfers related to your social trading cabinet.",
          "View Performance Reports — Go to the reports tab to analyze account growth, profit shares, and historical trading logs.",
          "Browse Providers — Click on the 'Providers' tab at the top of the screen to view the ranking of strategy providers.",
          "Search Providers — Search for specific providers by username, account number, or strategy name.",
          "Filter Strategy List — Use filters to rank providers based on profitability, risk score, drawdown, or trading history.",
          "Add to Favorites — Click the star/heart icon next to a provider's name to add them to your watchlist.",
          "Inspect Provider Stats — Click on any provider's name to inspect their detailed performance metrics, chart curves, fees, and trade history."
        ],
        stepsMobile: [
          "Navigate to Accounts Section — Go to the main menu on your WingoMarkets cabinet dashboard and click on the 'Accounts' section.",
          "Create New Account — Click the '+' (plus) icon to initialize a new trading account setup.",
          "Select Social Account Type — Scroll through the available account types, select 'Social', and click 'Continue'.",
          "Configure Leverage — Choose your desired leverage setting for the account. Note: Only Real accounts are supported for Social Trading; Demo accounts cannot be used.",
          "Save Account Credentials — Once created, your Social account credentials (Login, Password, Server) will be displayed. Save these details securely.",
          "Fund Your Social Account — Go to your dashboard, click on the 'Transfer' option to move funds into your newly created Social account.",
          "Select Source Account — Specify the source wallet or trading account to deduct funds from.",
          "Enter Transfer Amount — Enter the transfer amount. Note: A minimum of $100 is required to activate and use the Social trading account.",
          "Go to Social Trading Section — From the sidebar menu, click on the 'Social Trading' tab.",
          "Register as Follower — Click on the 'Register as Follower' (Subscriber) option.",
          "Complete Profile Info — Enter the required details to create your Follower profile.",
          "Access Follower Panel — Once registered, you will gain access to the Follower dashboard to manage copy settings.",
          "Manage Subscription Filters — Utilize various filters to customize your subscription settings and search parameters.",
          "Auto-Scaling Mode — Select the Auto-Scaling subscription type to automatically size copied trades relative to your account balance.",
          "Edit Settings — If needed, modify your copy trading parameters at any time.",
          "Multiplier Mode — Select the Multiplier subscription type and set a custom ratio to multiply the trade volume copied from the provider.",
          "Fixed Volume Mode — Select the Fixed subscription type to copy all trades with a fixed lot size specified by you.",
          "Lot Ratio Mode — Select the Lot Ratio subscription type to scale copied volumes based on a customized ratio.",
          "Configure Risk Management — Set your custom risk limits (Stop Loss, Take Profit, Max Drawdown) to protect your capital.",
          "Activate Subscription — To begin copy trading, navigate to the actions menu at the top of the provider's strategy page and click 'Activate'.",
          "Suspend Subscription — You can temporarily pause or completely unsubscribe from any provider's strategy at any time.",
          "Re-activate Subscription — If your subscription was suspended, you can easily resume copy trading by clicking the activate button again.",
          "My Accounts Overview — View all your active Social trading accounts, balances, and copy stats under the 'My Accounts' tab.",
          "Transaction History — Monitor all deposits, withdrawals, and internal transfers related to your social trading cabinet.",
          "View Performance Reports — Go to the reports tab to analyze account growth, profit shares, and historical trading logs.",
          "Browse Providers — Click on the 'Providers' tab at the top of the screen to view the ranking of strategy providers.",
          "Search Providers — Search for specific providers by username, account number, or strategy name.",
          "Filter Strategy List — Use filters to rank providers based on profitability, risk score, drawdown, or trading history.",
          "Add to Favorites — Click the star/heart icon next to a provider's name to add them to your watchlist.",
          "Inspect Provider Stats — Click on any provider's name to inspect their detailed performance metrics, chart curves, fees, and trade history."
        ],
        edgeCases: [
          {
            title: "Why is my copy trading not active?",
            text: "Make sure you have active equity of at least $100 in your Social account and that you have clicked 'Activate' on the provider's strategy page."
          },
          {
            title: "How are performance fees calculated?",
            text: "Performance fees are set by the strategy providers and are only charged on net profitable trades according to the billing cycle (typically weekly or monthly)."
          }
        ]
      },
      fa: {
        summary: "شروع کپی‌تریدینگ در وینگو مارکتس با ایجاد حساب Social، شارژ حداقل ۱۰۰ دلار، ثبت‌نام به عنوان فالوور و مدیریت استراتژی‌ها و ریسک حساب.",
        prerequisites: [
          "حساب کاربری تایید شده در وینگو مارکتس (احراز هویت کامل)",
          "موجودی حداقل ۱۰۰ دلار در کیف پول اصلی جهت شارژ حساب سوشال"
        ],
        stepsWeb: [
          "مرحله ۱: ورود به بخش حساب‌ها — از منوی سمت راست داشبورد، وارد بخش «حساب‌ها» بشید.",
          "مرحله ۲: شروع ساخت حساب جدید — برای ساخت حساب جدید، روی آیکون «+» کلیک کنید.",
          "مرحله ۳: انتخاب نوع حساب Social — در لیست حساب‌ها اسکرول کنید، گزینه Social را انتخاب کرده و دکمه ادامه را بزنید.",
          "مرحله ۴: تعیین لوریج حساب — لوریج موردنظر خودتون رو انتخاب کنید و روی ادامه بزنید. (نکته: فقط حساب‌های Real قابلیت استفاده در سوشال ترید را دارند و حساب‌های دمو پشتیبانی نمی‌شوند).",
          "مرحله ۵: دریافت مشخصات حساب — بعد از ساخت حساب، مشخصات اکانت Social برای شما نمایش داده میشه. این مشخصات را به صورت ایمن ذخیره کنید.",
          "مرحله ۶: شارژ حساب Social — بعد از ساخت حساب، از طریق داشبورد و گزینه «انتقال»، موجودی را به حساب Social منتقل کنید.",
          "مرحله ۷: انتخاب مبدأ انتقال — مشخص کنید می‌خواید موجودی از کدوم حساب یا کیف پول به حساب Social منتقل بشه.",
          "مرحله ۸: وارد کردن مبلغ انتقال — مبلغ مورد نظر خودتون رو وارد کنید و انتقال رو تایید کنید. (نکته: برای فعال‌سازی و استفاده از حساب Social، حداقل ۱۰۰ دلار موجودی نیاز دارید).",
          "مرحله ۹: ورود به بخش سوشال ترید — از منوی کناری وارد بخش Social Trading بشید.",
          "مرحله ۱۰: ثبت‌نام به عنوان فالوور — روی گزینه «ثبت‌نام به عنوان دنبال‌کننده» (Follower) کلیک کنید.",
          "مرحله ۱۱: تکمیل اطلاعات حساب فالوور — اطلاعات مورد نیاز رو وارد کنید تا حساب فالوور شما ایجاد بشه.",
          "مرحله ۱۲: مدیریت پنل فالوور — بعد از ثبت‌نام، به پنل فالوور دسترسی دارید و می‌تونید تنظیمات کپی ترید خودتون رو مدیریت کنید.",
          "مرحله ۱۳: استفاده از فیلترهای اشتراک — فیلترهای مختلف بهتون کمک می‌کنه تنظیمات اشتراک و جستجوی ارائه‌دهندگان رو دقیق‌تر مدیریت کنید.",
          "مرحله ۱۴: اشتراک استراتژی (مقیاس‌گذاری خودکار) — حالت مقیاس‌گذاری خودکار (Auto-scaling) رو انتخاب کنید تا حجم معاملات متناسب با موجودی حساب شما به صورت خودکار محاسبه بشه.",
          "مرحله ۱۵: ویرایش تنظیمات اشتراک — در صورت نیاز، تنظیمات اشتراک خودتون رو در هر زمان ویرایش و اصلاح کنید.",
          "مرحله ۱۶: اشتراک استراتژی (ضرب کردن) — حالت ضرب کردن (Multiplier) رو انتخاب کنید و ضریب موردنظرتون رو برای حجم کپی معاملات مشخص کنید.",
          "مرحله ۱۷: اشتراک استراتژی (حجم ثابت) — حالت حجم ثابت (Fixed) رو انتخاب کنید تا همه معاملات با حجم ثابتی که تعیین می‌کنید کپی بشن.",
          "مرحله ۱۸: اشتراک استراتژی (نسبت لات) — حالت نسبت لات (Lot Ratio) رو انتخاب کنید تا حجم معاملات بر اساس نسبت تعیین شده کپی بشه.",
          "مرحله ۱۹: تنظیمات مدیریت ریسک — تنظیمات مدیریت ریسک (حد ضرر، حد سود و حداکثر درواِدان) را مطابق استراتژی معاملاتی خودتون انجام بدید.",
          "مرحله ۲۰: فعال‌سازی اشتراک — برای شروع کپی‌ترید، از بخش عملیات در بالای صفحه ارائه‌دهنده، اشتراک استراتژی رو فعال کنید.",
          "مرحله ۲۱: تعلیق و لغو اشتراک — هر زمان که بخواید، می‌تونید اشتراک استراتژی ارائه‌دهنده رو متوقف یا لغو کنید.",
          "مرحله ۲۲: فعال کردن مجدد اشتراک — اگر اشتراک غیرفعال شده باشه، از این بخش می‌تونید دوباره اون رو فعال کنید.",
          "مرحله ۲۳: بخش حساب‌های من — در این بخش می‌تونید تمام حساب‌های متصل به سوشال ترید خود را مشاهده و مدیریت کنید.",
          "مرحله ۲۴: بررسی تاریخچه تراکنش‌ها — سوابق واریز، برداشت و انتقال‌های انجام شده در بخش سوشال ترید رو از این قسمت بررسی کنید.",
          "مرحله ۲۵: مشاهده گزارش‌ها و عملکرد — برای مشاهده عملکرد حساب و جزئیات فعالیت‌ها، به بخش گزارش‌ها مراجعه کنید.",
          "مرحله ۲۶: ورود به بخش ارائه‌دهندگان — برای مشاهده لیست ارائه‌دهندگان، از تب بالای صفحه وارد بخش «ارائه‌دهندگان» (Providers) بشید.",
          "مرحله ۲۷: جستجوی ارائه‌دهنده — ارائه‌دهنده مورد نظر خود را با نام کاربری یا شماره حساب جستجو کنید.",
          "مرحله ۲۸: فیلتر لیست ارائه‌دهندگان — با استفاده از فیلترها، ارائه‌دهندگان رو بر اساس معیارهای مختلف (سوددهی، ریسک و...) جستجو و مقایسه کنید.",
          "مرحله ۲۹: افزودن به علاقه‌مندی‌ها — برای اضافه کردن یک ارائه‌دهنده به لیست علاقه‌مندی‌ها، روی آیکون ستاره کنار نام اون کلیک کنید.",
          "مرحله ۳۰: مشاهده اطلاعات و آمار ارائه‌دهنده — برای بررسی جزئیات، آمار عملکرد و سوابق معاملاتی هر ارائه‌دهنده، روی نام اون کلیک کنید."
        ],
        stepsMobile: [
          "مرحله ۱: ورود به بخش حساب‌ها — از منوی سمت راست داشبورد، وارد بخش «حساب‌ها» بشید.",
          "مرحله ۲: شروع ساخت حساب جدید — برای ساخت حساب جدید، روی آیکون «+» کلیک کنید.",
          "مرحله ۳: انتخاب نوع حساب Social — در لیست حساب‌ها اسکرول کنید، گزینه Social را انتخاب کرده و دکمه ادامه را بزنید.",
          "مرحله ۴: تعیین لوریج حساب — لوریج موردنظر خودتون رو انتخاب کنید و روی ادامه بزنید. (نکته: فقط حساب‌های Real قابلیت استفاده در سوشال ترید را دارند و حساب‌های دمو پشتیبانی نمی‌شوند).",
          "مرحله ۵: دریافت مشخصات حساب — بعد از ساخت حساب، مشخصات اکانت Social برای شما نمایش داده میشه. این مشخصات را به صورت ایمن ذخیره کنید.",
          "مرحله ۶: شارژ حساب Social — بعد از ساخت حساب، از طریق داشبورد و گزینه «انتقال»، موجودی را به حساب Social منتقل کنید.",
          "مرحله ۷: انتخاب مبدأ انتقال — مشخص کنید می‌خواید موجودی از کدوم حساب یا کیف پول به حساب Social منتقل بشه.",
          "مرحله ۸: وارد کردن مبلغ انتقال — مبلغ مورد نظر خودتون رو وارد کنید و انتقال رو تایید کنید. (نکته: برای فعال‌سازی و استفاده از حساب Social، حداقل ۱۰۰ دلار موجودی نیاز دارید).",
          "مرحله ۹: ورود به بخش سوشال ترید — از منوی کناری وارد بخش Social Trading بشید.",
          "مرحله ۱۰: ثبت‌نام به عنوان فالوور — روی گزینه «ثبت‌نام به عنوان دنبال‌کننده» (Follower) کلیک کنید.",
          "مرحله ۱۱: تکمیل اطلاعات حساب فالوور — اطلاعات مورد نیاز رو وارد کنید تا حساب فالوور شما ایجاد بشه.",
          "مرحله ۱۲: مدیریت پنل فالوور — بعد از ثبت‌نام، به پنل فالوور دسترسی دارید و می‌تونید تنظیمات کپی ترید خودتون رو مدیریت کنید.",
          "مرحله ۱۳: استفاده از فیلترهای اشتراک — فیلترهای مختلف بهتون کمک می‌کنه تنظیمات اشتراک و جستجوی ارائه‌دهندگان رو دقیق‌تر مدیریت کنید.",
          "مرحله ۱۴: اشتراک استراتژی (مقیاس‌گذاری خودکار) — حالت مقیاس‌گذاری خودکار (Auto-scaling) رو انتخاب کنید تا حجم معاملات متناسب با موجودی حساب شما به صورت خودکار محاسبه بشه.",
          "مرحله ۱۵: ویرایش تنظیمات اشتراک — در صورت نیاز، تنظیمات اشتراک خودتون رو در هر زمان ویرایش و اصلاح کنید.",
          "مرحله ۱۶: اشتراک استراتژی (ضرب کردن) — حالت ضرب کردن (Multiplier) رو انتخاب کنید و ضریب موردنظرتون رو برای حجم کپی معاملات مشخص کنید.",
          "مرحله ۱۷: اشتراک استراتژی (حجم ثابت) — حالت حجم ثابت (Fixed) رو انتخاب کنید تا همه معاملات با حجم ثابتی که تعیین می‌کنید کپی بشن.",
          "مرحله ۱۸: اشتراک استراتژی (نسبت لات) — حالت نسبت لات (Lot Ratio) رو انتخاب کنید تا حجم معاملات بر اساس نسبت تعیین شده کپی بشه.",
          "مرحله ۱۹: تنظیمات مدیریت ریسک — تنظیمات مدیریت ریسک (حد ضرر، حد سود و حداکثر درواِدان) را مطابق استراتژی معاملاتی خودتون انجام بدید.",
          "مرحله ۲۰: فعال‌سازی اشتراک — برای شروع کپی‌ترید، از بخش عملیات در بالای صفحه ارائه‌دهنده، اشتراک استراتژی رو فعال کنید.",
          "مرحله ۲۱: تعلیق و لغو اشتراک — هر زمان که بخواید، می‌تونید اشتراک استراتژی ارائه‌دهنده رو متوقف یا لغو کنید.",
          "مرحله ۲۲: فعال کردن مجدد اشتراک — اگر اشتراک غیرفعال شده باشه، از این بخش می‌تونید دوباره اون رو فعال کنید.",
          "مرحله ۲۳: بخش حساب‌های من — در این بخش می‌تونید تمام حساب‌های متصل به سوشال ترید خود را مشاهده و مدیریت کنید.",
          "مرحله ۲۴: بررسی تاریخچه تراکنش‌ها — سوابق واریز، برداشت و انتقال‌های انجام شده در بخش سوشال ترید رو از این قسمت بررسی کنید.",
          "مرحله ۲۵: مشاهده گزارش‌ها و عملکرد — برای مشاهده عملکرد حساب و جزئیات فعالیت‌ها، به بخش گزارش‌ها مراجعه کنید.",
          "مرحله ۲۶: ورود به بخش ارائه‌دهندگان — برای مشاهده لیست ارائه‌دهندگان، از تب بالای صفحه وارد بخش «ارائه‌دهندگان» (Providers) بشید.",
          "مرحله ۲۷: جستجوی ارائه‌دهنده — ارائه‌دهنده مورد نظر خود را با نام کاربری یا شماره حساب جستجو کنید.",
          "مرحله ۲۸: فیلتر لیست ارائه‌دهندگان — با استفاده از فیلترها، ارائه‌دهندگان رو بر اساس معیارهای مختلف (سوددهی، ریسک و...) جستجو و مقایسه کنید.",
          "مرحله ۲۹: افزودن به علاقه‌مندی‌ها — برای اضافه کردن یک ارائه‌دهنده به لیست علاقه‌مندی‌ها، روی آیکون ستاره کنار نام اون کلیک کنید.",
          "مرحله ۳۰: مشاهده اطلاعات و آمار ارائه‌دهنده — برای بررسی جزئیات، آمار عملکرد و سوابق معاملاتی هر ارائه‌دهنده، روی نام اون کلیک کنید."
        ],
        edgeCases: [
          {
            title: "چرا معاملات کپی نمی‌شوند؟",
            text: "مطمئن شوید موجودی حساب Social شما حداقل ۱۰۰ دلار است و وضعیت اشتراک روی حالت 'فعال' قرار دارد. همچنین وضعیت بازار و نمادهای معاملاتی را بررسی کنید."
          },
          {
            title: "کارمزد عملکرد (Performance Fee) چگونه پرداخت می‌شود؟",
            text: "این کارمزد توسط ارائه‌دهنده استراتژی تعیین شده و فقط از سود خالص معاملات کپی شده در پایان دوره معاملاتی کسر می‌گردد."
          }
        ]
      },
      ar: {
        summary: "ابدأ نسخ الصفقات في WingoMarkets من خلال إنشاء حساب Social، وإيداع 100 دولار كحد أدنى، والتسجيل كمتابع وتكوين إعدادات إدارة المخاطر.",
        prerequisites: [
          "حساب نشط وموثق بالكامل في WingoMarkets (تم قبول KYC)",
          "رصيد لا يقل عن 100 دولار في المحفظة الرئيسية لتمويل حساب التداول الاجتماعي"
        ],
        stepsWeb: [
          "الخطوة 1: الدخول إلى قسم الحسابات — من القائمة الجانبية للوحة التحكم، انتقل إلى قسم 'الحسابات'.",
          "الخطوة 2: إنشاء حساب جديد — انقر فوق أيقونة '+' للبدء في إنشاء حساب تداول جديد.",
          "الخطوة 3: اختيار نوع حساب Social — مرر لأسفل في قائمة الحسابات المتاحة، واختر 'Social'، ثم انقر فوق 'متابعة'.",
          "الخطوة 4: تحديد الرافعة المالية — اختر الرافعة المالية المطلوبة لحسابك ثم انقر فوق 'متابعة'. (ملاحظة: الحسابات الحقيقية فقط هي المدعومة في التداول الاجتماعي، ولا يتم دعم الحسابات التجريبية).",
          "الخطوة 5: حفظ بيانات الحساب — بعد إنشاء الحساب، ستظهر لك بيانات حساب الـ Social الخاص بك. احفظ هذه البيانات بشكل آمن.",
          "الخطوة 6: تمويل حساب Social — انتقل إلى لوحة التحكم واستخدم خيار 'تحويل' لنقل الأموال إلى حساب Social الجديد الخاص بك.",
          "الخطوة 7: اختيار الحساب المصدر — حدد المحفظة أو الحساب الذي تريد تحويل الأموال منه.",
          "الخطوة 8: إدخال مبلغ التحويل — أدخل المبلغ المطلوب وتأكد من إتمام التحويل. (ملاحظة: يتطلب تفعيل حساب التداول الاجتماعي رصيداً لا يقل عن 100 دولار).",
          "الخطوة 9: الدخول إلى قسم التداول الاجتماعي — من القائمة الجانبية، اختر 'التداول الاجتماعي' (Social Trading).",
          "الخطوة 10: التسجيل كمتابع — انقر فوق خيار 'التسجيل كمتابع' (Follower).",
          "الخطوة 11: إكمال بيانات المتابع — أدخل المعلومات المطلوبة لإنشاء ملف المتابع الخاص بك.",
          "الخطوة 12: إدارة لوحة المتابع — بعد التسجيل، ستتمكن من الدخول إلى لوحة التحكم الخاصة بالمتابعين لإدارة إعدادات النسخ.",
          "الخطوة 13: استخدام مرشحات الاشتراك — استخدم الفلاتر المختلفة لتخصيص خيارات البحث والاشتراك الخاصة بك.",
          "الخطوة 14: النسخ التلقائي المتناسب — اختر وضع 'النسخ المتناسب' (Auto-scaling) ليتم احتساب حجم الصفقات المنسوخة تلقائياً وفقاً لرصيد حسابك.",
          "الخطوة 15: تعديل إعدادات الاشتراك — يمكنك تعديل معايير النسخ الخاصة بك في أي وقت.",
          "الخطوة 16: وضع مضاعف الحجم — اختر وضع 'مضاعف الحجم' (Multiplier) وحدد النسبة التي ترغب في مضاعفة حجم صفقات مقدم الاستراتيجية بها.",
          "الخطوة 17: وضع الحجم الثابت — اختر وضع 'الحجم الثابت' (Fixed) ليتم نسخ جميع الصفقات بحجم لوت ثابت تحدده بنفسك.",
          "الخطوة 18: وضع نسبة اللوت — اختر وضع 'نسبة اللوت' (Lot Ratio) لتحديد حجم الصفقات بناءً على نسبة مخصصة للوتات.",
          "الخطوة 19: إعدادات إدارة المخاطر — اضبط معايير إدارة المخاطر (حد وقف الخسارة، حد جني الأرباح، والحد الأقصى للتراجع) لحماية رأس مالك.",
          "الخطوة 20: تفعيل الاشتراك — لبدء النسخ الفعلي، انتقل إلى صفحة مقدم الاستراتيجية وانقر فوق زر 'تفعيل'.",
          "الخطوة 21: إيقاف أو إلغاء الاشتراك — يمكنك إيقاف النسخ مؤقتاً أو إلغاء الاشتراك بالكامل في أي وقت.",
          "الخطوة 22: إعادة تفعيل الاشتراك — إذا كان الاشتراك متوقفاً، يمكنك استئنافه بسهولة بالنقر فوق زر التفعيل مجدداً.",
          "الخطوة 23: قسم حساباتي — يمكنك من هنا مراجعة جميع حسابات التداول الاجتماعي الخاصة بك وأرصدتها وإحصائياتها.",
          "الخطوة 24: مراجعة سجل المعاملات — تحقق من سجلات الإيداع والسحب والتحويلات الخاصة بحساب التداول الاجتماعي الخاص بك.",
          "الخطوة 25: عرض التقارير والأداء — تفضل بزيارة قسم التقارير للاطلاع على أداء حسابك التفصيلي وأرباحك التاريخية.",
          "الخطوة 26: استعراض مقدمي الاستراتيجيات — انقر فوق تبويب 'مقدمو الاستراتيجيات' (Providers) في الأعلى لعرض قائمة المتداولين.",
          "الخطوة 27: البحث عن مقدم استراتيجية — ابحث عن متداول محدد باستخدام اسمه أو رقم حسابه.",
          "الخطوة 28: تصفية قائمة المتداولين — استخدم الفلاتر لمقارنة المتداولين بناءً على نسبة الأرباح، ومستوى المخاطرة، وأقصى تراجع.",
          "الخطوة 29: إضافة إلى المفضلة — انقر فوق نجمة المفضلة بجانب اسم المتداول لإضافته إلى قائمة المراقبة الخاصة بك.",
          "الخطوة 30: عرض إحصائيات المتداول — انقر فوق اسم المتداول لمراجعة تفاصيل أدائه التاريخي، ومنحنى الأرباح، والرسوم المستحقة وسجل صفقاته."
        ],
        edgeCases: [
          {
            title: "لماذا لا يتم نسخ الصفقات؟",
            text: "تأكد من توفر رصيد لا يقل عن 100 دولار في حساب Social الخاص بك، وأن حالة الاشتراك نشطة. يرجى التحقق أيضاً من حالة الأسواق والرموز المتاحة للتداول."
          },
          {
            title: "كيف يتم احتساب رسوم الأداء؟",
            text: "يتم تحديد رسوم الأداء بواسطة مقدم الاستراتيجية، ويتم اقتطاعها فقط من الأرباح الصافية المحققة في نهاية دورة التداول المتفق عليها."
          }
        ]
      }
    },
    relatedSlugs: ["social-trading-provider", "create-trading-account"]
  },
  {
    slug: "social-trading-provider",
    categorySlug: "social-copy-trading",
    pillar: "help-center",
    template: "A",
    lastUpdated: "2026-06-28",
    readTime: 5,
    title: {
      en: "Social Trading Registration Guide (Provider)",
      fa: "راهنمای ثبت نام سوشال ترید (پروایدر)",
      ar: "دليل التسجيل في التداول الاجتماعي (مقدم الاستراتيجية)"
    },
    description: {
      en: "Step-by-step guide to registering as a Strategy Provider (Fund Manager) and sharing your trading strategy with followers inside the new WingoMarkets Client Hub.",
      fa: "راهنمای گام‌به‌گام برای ایجاد حساب معاملاتی استاندارد، ثبت‌نام به عنوان ارائه‌دهنده استراتژی (پروایدر/مدیر سرمایه) و ایجاد پیشنهادهای سرمایه‌گذاری.",
      ar: "دليل خطوة بخطوة لإنشاء حساب تداول قياسي، والتسجيل كمقدم استراتيجية (مدير استثمار)، وإنشاء عروض الاستثمار لجذب المتابعين."
    },
    content: {
      en: {
        summary: "Learn how to open a standard trading account, register it as a Strategy Provider (Manager) account, create investment offers, and share subscription links with prospective followers.",
        prerequisites: [
          "Active and verified WingoMarkets account (KYC approved)",
          "A standard trading account with available funds to act as the master account"
        ],
        stepsWeb: [
          "Navigate to Accounts Section — Log in to your WingoMarkets Client Hub and click on the 'Accounts' option in the sidebar menu.",
          "Create New Trading Account — Click the '+' icon to create a new live trading account.",
          "Select Account Type — Choose any standard trading account type except the 'Social' type (the master trading account should be a standard MT5 account).",
          "Fill Details — Complete the necessary details for account creation and click 'Continue'.",
          "Save Account Credentials — Save your new MT5 login ID and password details securely for future reference.",
          "Go to Social Trading Section — From the sidebar menu, click on the 'Social Trading' tab.",
          "Register as Strategy Provider — Select the 'Register as Provider' (Fund Manager) option.",
          "Bind Trading Account — Input the credentials of the standard trading account you created in the previous steps to bind it as your master strategy account.",
          "Access Provider Dashboard — Once bound, you will gain access to the Provider cabinet where you can manage strategy profiles, stats, and fees.",
          "View Strategy Overview — Check your public strategy card overview from the main profile section.",
          "Manage Personal Details — View and update your public manager profile bio and descriptions.",
          "Edit Strategy Settings — Manage and edit your trading strategy description, risk score, and category tags.",
          "Manage Financial Settings — Navigate to the finance tab to configure profit distribution and billing frequencies.",
          "Create New Offer — Click 'Create Offer' to define a new investment proposal for followers.",
          "Set Offer Parameters — Specify your performance fee percentage, payment cycle, and minimum investment requirements for followers.",
          "Edit Offer Details — Modify the details or description of your active offers at any time.",
          "Manage Performance Metrics — Configure how your historical results and trading metrics are displayed to the public.",
          "Set Strategy Visibility Filters — Define who can see and subscribe to your strategy.",
          "Configure Broker Fee Sharing — Set agent/IB commission rebates or profit-sharing percentages if applicable.",
          "Generate Subscription Link — Create your unique strategy invitation link to share with potential followers.",
          "Manage Strategy Accounts — View all your master accounts registered under the copy trading network.",
          "Account List Overview — Monitor active balances, margins, and open positions on all manager accounts.",
          "Transaction History — Review all fee payouts, transfers, and profit allocations under the transaction log.",
          "Inspect Other Providers — Access the public providers list to compare strategies.",
          "Search Strategy List — Search for other managers by name or account number.",
          "Filter Strategies — Use filters to sort strategy providers by various metrics.",
          "Add to Favorites — Add other providers to your watchlist by clicking the star icon.",
          "Inspect Provider Performance — Click on other providers' cards to review their public trading history and stats."
        ],
        stepsMobile: [
          "Navigate to Accounts Section — Log in to your WingoMarkets Client Hub and click on the 'Accounts' option in the sidebar menu.",
          "Create New Trading Account — Click the '+' icon to create a new live trading account.",
          "Select Account Type — Choose any standard trading account type except the 'Social' type (the master trading account should be a standard MT5 account).",
          "Fill Details — Complete the necessary details for account creation and click 'Continue'.",
          "Save Account Credentials — Save your new MT5 login ID and password details securely for future reference.",
          "Go to Social Trading Section — From the sidebar menu, click on the 'Social Trading' tab.",
          "Register as Strategy Provider — Select the 'Register as Provider' (Fund Manager) option.",
          "Bind Trading Account — Input the credentials of the standard trading account you created in the previous steps to bind it as your master strategy account.",
          "Access Provider Dashboard — Once bound, you will gain access to the Provider cabinet where you can manage strategy profiles, stats, and fees.",
          "View Strategy Overview — Check your public strategy card overview from the main profile section.",
          "Manage Personal Details — View and update your public manager profile bio and descriptions.",
          "Edit Strategy Settings — Manage and edit your trading strategy description, risk score, and category tags.",
          "Manage Financial Settings — Navigate to the finance tab to configure profit distribution and billing frequencies.",
          "Create New Offer — Click 'Create Offer' to define a new investment proposal for followers.",
          "Set Offer Parameters — Specify your performance fee percentage, payment cycle, and minimum investment requirements for followers.",
          "Edit Offer Details — Modify the details or description of your active offers at any time.",
          "Manage Performance Metrics — Configure how your historical results and trading metrics are displayed to the public.",
          "Set Strategy Visibility Filters — Define who can see and subscribe to your strategy.",
          "Configure Broker Fee Sharing — Set agent/IB commission rebates or profit-sharing percentages if applicable.",
          "Generate Subscription Link — Create your unique strategy invitation link to share with potential followers.",
          "Manage Strategy Accounts — View all your master accounts registered under the copy trading network.",
          "Account List Overview — Monitor active balances, margins, and open positions on all manager accounts.",
          "Transaction History — Review all fee payouts, transfers, and profit allocations under the transaction log.",
          "Inspect Other Providers — Access the public providers list to compare strategies.",
          "Search Strategy List — Search for other managers by name or account number.",
          "Filter Strategies — Use filters to sort strategy providers by various metrics.",
          "Add to Favorites — Add other providers to your watchlist by clicking the star icon.",
          "Inspect Provider Performance — Click on other providers' cards to review their public trading history and stats."
        ],
        edgeCases: [
          {
            title: "Can I use a demo account as a provider?",
            text: "No, strategy providers must use real trading accounts to share their strategies. This ensures followers copy genuine, funded strategies."
          },
          {
            title: "When are performance fees paid to providers?",
            text: "Performance fees are automatically calculated and paid to your wallet at the end of each billing cycle (typically weekly or monthly) based on the high-water mark of followers' copied profits."
          }
        ]
      },
      fa: {
        summary: "آموزش گام‌به‌گام ساخت حساب معاملاتی، اتصال آن به عنوان حساب پروایدر در بخش سوشال ترید، تعریف پیشنهادهای مالی و جذب فالوور.",
        prerequisites: [
          "حساب کاربری تایید شده در وینگو مارکتس (احراز هویت کامل)",
          "داشتن حساب معاملاتی واقعی (Real) فعال به عنوان حساب مبدأ معاملات"
        ],
        stepsWeb: [
          "مرحله ۱: ورود به بخش حساب‌ها — از منوی سمت راست، وارد بخش «حساب‌ها» بشید.",
          "مرحله ۲: ساخت حساب جدید — روی آیکون «+» کلیک کنید تا یک حساب جدید ایجاد کنید.",
          "مرحله ۳: انتخاب نوع حساب معاملاتی — شما می‌تونید هر نوع حساب معاملاتی به جز حساب Social Trading را انتخاب کنید (حساب مبدأ پروایدر باید حساب استاندارد باشد).",
          "مرحله ۴: تکمیل اطلاعات حساب — اطلاعات موردنیاز را تکمیل کنید و روی ادامه بزنید.",
          "مرحله ۵: ذخیره مشخصات حساب — بعد از ایجاد حساب، مشخصات و اطلاعات ورود حساب را ذخیره کنید تا در مراحل بعدی بهش نیاز داشته باشید.",
          "مرحله ۶: ورود به بخش سوشال ترید — از منوی سمت راست وارد بخش Social Trading بشید.",
          "مرحله ۷: ثبت‌نام به عنوان مدیر سرمایه — روی گزینه «ثبت‌نام به عنوان مدیر سرمایه» (Provider) کلیک کنید.",
          "مرحله ۸: وارد کردن اطلاعات حساب معاملاتی — اطلاعات حسابی که در مراحل قبل ایجاد کردید را وارد کنید و ثبت‌نام را تکمیل کنید.",
          "مرحله ۹: دسترسی به پنل مدیریت سرمایه — بعد از ثبت‌نام، به حساب سوشال ترید خودتون دسترسی خواهید داشت و می‌تونید تنظیمات مربوط به پروفایل و استراتژی رو مدیریت کنید.",
          "مرحله ۱۰: اطلاعات کلی حساب — از این بخش می‌تونید اطلاعات کلی پروفایل خودت رو مشاهده و مدیریت کنید.",
          "مرحله ۱۱: جزئیات شخصی حساب — اطلاعات شخصی حساب خودت رو مشاهده و در صورت نیاز به‌روزرسانی کنید.",
          "مرحله ۱۲: ویرایش استراتژی — تنظیمات مربوط به استراتژی معاملاتی خودت رو مدیریت و ویرایش کنید.",
          "مرحله ۱۳: مدیریت امور مالی — تنظیمات مالی مربوط به حساب مدیر سرمایه را از این بخش مدیریت کنید.",
          "مرحله ۱۴: ایجاد پیشنهاد جدید — برای جذب فالوورهای جدید، یک پیشنهاد سرمایه‌گذاری جدید (Offer) ایجاد کنید.",
          "مرحله ۱۵: مشاهده تنظیمات پیشنهاد — بعد از ایجاد پیشنهاد، می‌تونید جزئیات و تنظیمات اون رو مشاهده کنید.",
          "مرحله ۱۶: ویرایش اطلاعات کلی پیشنهاد — اطلاعات عمومی و مشخصات پیشنهاد خودت رو ویرایش کنید.",
          "مرحله ۱۷: تنظیمات عملکرد پیشنهاد — پارامترهای عملکرد و نحوه نمایش نتایج پیشنهاد رو تنظیم کنید.",
          "مرحله ۱۸: تنظیمات فیلترهای پیشنهاد — فیلترهای موردنظر برای نمایش و دسترسی به پیشنهاد رو مشخص کنید.",
          "مرحله ۱۹: تعیین کارمزد همکاران — کارمزد مربوط به همکاران و آی‌بی‌ها را برای پیشنهاد خودت تعیین کنید.",
          "مرحله ۲۰: افزودن لینک عضویت به پیشنهاد — لینک عضویت اختصاصی پیشنهاد رو ایجاد کنید و در اختیار کاربران قرار بدید.",
          "مرحله ۲۱: حساب‌های مدیریت سرمایه — از تب بالای صفحه می‌تونید تمام حساب‌های مدیریت سرمایه خودت رو مشاهده کنید.",
          "مرحله ۲۲: لیست حساب‌ها — برای مشاهده لیست حساب‌ها، از تب حساب‌ها در بالای صفحه استفاده کنید.",
          "مرحله ۲۳: تاریخچه تراکنش‌ها — از تب تاریخچه تراکنش‌ها می‌تونید تمام سوابق مالی و تراکنش‌های انجام شده رو بررسی کنید.",
          "مرحله ۲۴: ارائه‌دهندگان دیگر — برای مشاهده سایر ارائه‌دهندگان، وارد تب ارائه‌دهندگان بشید.",
          "مرحله ۲۵: جستجوی ارائه‌دهندگان — ارائه‌دهندگان مختلف رو جستجو و بررسی کنید.",
          "مرحله ۲۶: فیلتر ارائه‌دهندگان — با استفاده از فیلترها، ارائه‌دهندگان رو بر اساس معیارهای موردنظر خودت پیدا کنید.",
          "مرحله ۲۷: افزودن به علاقه‌مندی‌ها — برای اضافه کردن یک ارائه‌دهنده به لیست علاقه‌مندی‌ها، روی آیکون ستاره کنار نام اون کلیک کنید.",
          "مرحله ۲۸: مشاهده جزئیات ارائه‌دهنده — برای مشاهده آمار، عملکرد و جزئیات هر ارائه‌دهنده، روی نام اون کلیک کنید."
        ],
        stepsMobile: [
          "مرحله ۱: ورود به بخش حساب‌ها — از منوی سمت راست، وارد بخش «حساب‌ها» بشید.",
          "مرحله ۲: ساخت حساب جدید — روی آیکون «+» کلیک کنید تا یک حساب جدید ایجاد کنید.",
          "مرحله ۳: انتخاب نوع حساب معاملاتی — شما می‌تونید هر نوع حساب معاملاتی به جز حساب Social Trading را انتخاب کنید (حساب مبدأ پروایدر باید حساب استاندارد باشد).",
          "مرحله ۴: تکمیل اطلاعات حساب — اطلاعات موردنیاز را تکمیل کنید و روی ادامه بزنید.",
          "مرحله ۵: ذخیره مشخصات حساب — بعد از ایجاد حساب، مشخصات و اطلاعات ورود حساب را ذخیره کنید تا در مراحل بعدی بهش نیاز داشته باشید.",
          "مرحله ۶: ورود به بخش سوشال ترید — از منوی سمت راست وارد بخش Social Trading بشید.",
          "مرحله ۷: ثبت‌نام به عنوان مدیر سرمایه — روی گزینه «ثبت‌نام به عنوان مدیر سرمایه» (Provider) کلیک کنید.",
          "مرحله ۸: وارد کردن اطلاعات حساب معاملاتی — اطلاعات حسابی که در مراحل قبل ایجاد کردید را وارد کنید و ثبت‌نام را تکمیل کنید.",
          "مرحله ۹: دسترسی به پنل مدیریت سرمایه — بعد از ثبت‌نام، به حساب سوشال ترید خودتون دسترسی خواهید داشت و می‌تونید تنظیمات مربوط به پروفایل و استراتژی رو مدیریت کنید.",
          "مرحله ۱۰: اطلاعات کلی حساب — از این بخش می‌تونید اطلاعات کلی پروفایل خودت رو مشاهده و مدیریت کنید.",
          "مرحله ۱۱: جزئیات شخصی حساب — اطلاعات شخصی حساب خودت رو مشاهده و در صورت نیاز به‌روزرسانی کنید.",
          "مرحله ۱۲: ویرایش استراتژی — تنظیمات مربوط به استراتژی معاملاتی خودت رو مدیریت و ویرایش کنید.",
          "مرحله ۱۳: مدیریت امور مالی — تنظیمات مالی مربوط به حساب مدیر سرمایه را از این بخش مدیریت کنید.",
          "مرحله ۱۴: ایجاد پیشنهاد جدید — برای جذب فالوورهای جدید، یک پیشنهاد سرمایه‌گذاری جدید (Offer) ایجاد کنید.",
          "مرحله ۱۵: مشاهده تنظیمات پیشنهاد — بعد از ایجاد پیشنهاد، می‌تونید جزئیات و تنظیمات اون رو مشاهده کنید.",
          "مرحله ۱۶: ویرایش اطلاعات کلی پیشنهاد — اطلاعات عمومی و مشخصات پیشنهاد خودت رو ویرایش کنید.",
          "مرحله ۱۷: تنظیمات عملکرد پیشنهاد — پارامترهای عملکرد و نحوه نمایش نتایج پیشنهاد رو تنظیم کنید.",
          "مرحله ۱۸: تنظیمات فیلترهای پیشنهاد — فیلترهای موردنظر برای نمایش و دسترسی به پیشنهاد رو مشخص کنید.",
          "مرحله ۱۹: تعیین کارمزد همکاران — کارمزد مربوط به همکاران و آی‌بی‌ها را برای پیشنهاد خودت تعیین کنید.",
          "مرحله ۲۰: افزودن لینک عضویت به پیشنهاد — لینک عضویت اختصاصی پیشنهاد رو ایجاد کنید و در اختیار کاربران قرار بدید.",
          "مرحله ۲۱: حساب‌های مدیریت سرمایه — از تب بالای صفحه می‌تونید تمام حساب‌های مدیریت سرمایه خودت رو مشاهده کنید.",
          "مرحله ۲۲: لیست حساب‌ها — برای مشاهده لیست حساب‌ها، از تب حساب‌ها در بالای صفحه استفاده کنید.",
          "مرحله ۲۳: تاریخچه تراکنش‌ها — از تب تاریخچه تراکنش‌ها می‌تونید تمام سوابق مالی و تراکنش‌های انجام شده رو بررسی کنید.",
          "مرحله ۲۴: ارائه‌دهندگان دیگر — برای مشاهده سایر ارائه‌دهندگان، وارد تب ارائه‌دهندگان بشید.",
          "مرحله ۲۵: جستجوی ارائه‌دهندگان — ارائه‌دهندگان مختلف رو جستجو و بررسی کنید.",
          "مرحله ۲۶: فیلتر ارائه‌دهندگان — با استفاده از فیلترها، ارائه‌دهندگان رو بر اساس معیارهای موردنظر خودت پیدا کنید.",
          "مرحله ۲۷: افزودن به علاقه‌مندی‌ها — برای اضافه کردن یک ارائه‌دهنده به لیست علاقه‌مندی‌ها، روی آیکون ستاره کنار نام اون کلیک کنید.",
          "مرحله ۲۸: مشاهده جزئیات ارائه‌دهنده — برای مشاهده آمار، عملکرد و جزئیات هر ارائه‌دهنده، روی نام اون کلیک کنید."
        ],
        edgeCases: [
          {
            title: "آیا می‌توان حساب دمو را به پروایدر متصل کرد؟",
            text: "خیر، حساب‌های ارائه‌دهنده استراتژی باید واقعی (Real) باشند تا ریسک واقعی معاملات برای دنبال‌کنندگان شبیه‌سازی شود."
          },
          {
            title: "تسویه کارمزد عملکرد پروایدر چه زمانی انجام می‌شود؟",
            text: "کارمزد عملکرد (Performance Fee) بر اساس سود معاملات کپی شده و انتهای دوره معاملاتی (هفتگی یا ماهانه) به کیف پول پروایدر واریز می‌گردد."
          }
        ]
      },
      ar: {
        summary: "تعلم كيفية فتح حساب تداول حقيقي، وربطه كمقدم استراتيجية في نظام التداول الاجتماعي، وإنشاء عروض عمولات لجذب المتابعين ونسخ صفقاتك.",
        prerequisites: [
          "حساب موثق بالكامل في WingoMarkets (تم قبول KYC)",
          "حساب تداول حقيقي (Real) نشط يحتوي على رصيد للبدء في التداول"
        ],
        stepsWeb: [
          "الخطوة 1: الدخول إلى قسم الحسابات — سجل الدخول إلى بوابة العميل، وانتقل إلى قسم 'الحسابات' من القائمة الجانبية.",
          "الخطوة 2: إنشاء حساب تداول حقيقي جديد — انقر فوق أيقونة '+' لإنشاء حساب تداول حقيقي جديد.",
          "الخطوة 3: اختيار نوع الحساب — يمكنك اختيار أي نوع حساب تداول باستثناء حساب 'Social Trading' (حيث يجب أن يكون الحساب الرئيسي حساباً قياسياً).",
          "الخطوة 4: إدخال بيانات الحساب — املأ الحقول المطلوبة ثم انقر فوق 'متابعة'.",
          "الخطوة 5: حفظ بيانات الحساب — احفظ رقم حساب MT5 وكلمة المرور بشكل آمن لاستخدامها في الخطوات التالية.",
          "الخطوة 6: الدخول إلى قسم التداول الاجتماعي — من القائمة الجانبية، انقر فوق 'التداول الاجتماعي' (Social Trading).",
          "الخطوة 7: التسجيل كمقدم استراتيجية — اختر خيار 'التسجيل كمدير استثمار' (Provider).",
          "الخطوة 8: ربط حساب التداول — أدخل بيانات حساب التداول القياسي الذي أنشأته في الخطوات السابقة لربطه كحساب رئيسي للاستراتيجية.",
          "الخطوة 9: الدخول إلى لوحة مقدم الاستراتيجية — بعد الربط، ستتمكن من الدخول إلى لوحة التحكم الخاصة بك لإدارة ملفك الشخصي وعروضك.",
          "الخطوة 10: عرض المعلومات العامة — يمكنك مراجعة وتعديل بيانات ملفك الشخصي العام من هذا القسم.",
          "الخطوة 11: البيانات الشخصية للحساب — راجع معلومات حسابك الشخصية وقم بتحديثها عند الحاجة.",
          "الخطوة 12: تعديل تفاصيل الاستراتيجية — قم بإدارة وتعديل وصف استراتيجيتك ومستوى المخاطرة المرتبط بها.",
          "الخطوة 13: إدارة الأمور المالية — اضبط الإعدادات المالية والعمولات الخاصة بحساب مدير الاستثمار.",
          "الخطوة 14: إنشاء عرض جديد — انقر فوق 'إنشاء عرض' (Create Offer) لتحديد شروط جديدة لجذب المتابعين.",
          "الخطوة 15: تعديل معايير العرض — حدد نسبة عمولة الأداء، ودورة الدفع، والحد الأدنى للاستثمار المطلوب من المتابعين.",
          "الخطوة 16: تعديل تفاصيل العرض — يمكنك تعديل تفاصيل أو شروط العروض النشطة الخاصة بك في أي وقت.",
          "الخطوة 17: إعدادات الأداء — حدد كيفية عرض نتائج استراتيجيتك وإحصاءات الأداء للعامة.",
          "الخطوة 18: فلاتر العرض — اضبط فلاتر الخصوصية والوصول لعروض الاستثمار الخاصة بك.",
          "الخطوة 19: عمولات الشركاء — حدد نسبة العمولات التي ترغب في مشاركتها مع الوسطاء المعرفين (IBs) عند ترويجهم لعرضك.",
          "الخطوة 20: إضافة رابط الاشتراك — قم بإنشاء رابط اشتراك مباشر ومشاركته مع المتابعين المهتمين بنسخ صفقاتك.",
          "الخطوة 21: حسابات مدير الاستثمار — من التبويب العلوي، يمكنك عرض جميع حسابات إدارة الاستثمار الخاصة بك.",
          "الخطوة 22: قائمة الحسابات — استعرض قائمة حسابات التداول المربوطة وحالاتها من تبويب الحسابات.",
          "الخطوة 23: سجل المعاملات — تحقق من سوابق دفع العمولات، والأرباح المحققة، والتحويلات المالية من هذا التبويب.",
          "الخطوة 24: استعراض مقدمي الاستراتيجيات الآخرين — انتقل إلى تبويب مقدمي الاستراتيجيات لمشاهدة المتداولين الآخرين.",
          "الخطوة 25: البحث عن المتداولين — ابحث عن متداولين آخرين بالاسم أو رقم الحساب.",
          "الخطوة 26: تصفية قائمة المتداولين — استخدم الفلاتر لتصنيف المتداولين الآخرين بناءً على الأداء والمخاطر.",
          "الخطوة 27: إضافة إلى المفضلة — أضف المتداولين الآخرين إلى قائمة المراقبة بالنقر فوق أيقونة النجمة.",
          "الخطوة 28: عرض تفاصيل المتداولين الآخرين — انقر فوق اسم أي متداول لمراجعة إحصاءات أدائه التاريخي وصفقاته."
        ],
        edgeCases: [
          {
            title: "هل يمكنني ربط حساب تجريبي كمقدم استراتيجية؟",
            text: "لا، يجب أن يكون حساب مقدم الاستراتيجية حساباً حقيقياً (Real) لضمان جدية التداول ومصداقية النتائج للمتابعين."
          },
          {
            title: "متى يتم دفع عمولات الأداء لمقدم الاستراتيجية؟",
            text: "يتم احتساب عمولات الأداء ودفعها تلقائياً إلى محفظتك في نهاية كل دورة فوترة (أسبوعية أو شهرية) بناءً على الأرباح المحققة للمتابعين."
          }
        ]
      }
    },
    relatedSlugs: ["social-trading-follower", "create-trading-account"]
  },
  {
    slug: "support-ticket-guide",
    categorySlug: "account-profile",
    pillar: "help-center",
    template: "A",
    lastUpdated: "2026-06-28",
    readTime: 2,
    title: {
      en: "How to Submit a Support Ticket",
      fa: "راهنمای نحوه ثبت تیکت پشتیبانی",
      ar: "كيفية تقديم تذكرة دعم فني"
    },
    description: {
      en: "Step-by-step guide to creating, sending, and tracking support tickets inside the WingoMarkets Client Hub.",
      fa: "راهنمای گام‌به‌گام برای ایجاد، ارسال و پیگیری تیکت‌های پشتیبانی در پنل جدید وینگو مارکتس.",
      ar: "دليل خطوة بخطوة لإنشاء وإرسال ومتابعة تذاكر الدعم الفني داخل لوحة تحكم WingoMarkets الجديدة."
    },
    content: {
      en: {
        summary: "Learn how to open a support ticket to report issues or submit requests directly to WingoMarkets support desk.",
        prerequisites: [
          "Logged-in access to WingoMarkets Client Hub"
        ],
        stepsWeb: [
          "Go to Support Section — Log in to your Client Hub. Scroll to the bottom of the main sidebar menu and select 'Support'.",
          "Navigate to Ticket History — Click on 'Tickets' to enter your ticket management dashboard and history.",
          "Create New Ticket — Click on 'New Ticket' at the top of the page. Select your ticket department/subject category (e.g., Customer Experience or Verification). Complete the subject field and write a detailed description of your issue. Upload any relevant screenshots or files in the attachments section, then click 'Submit Request'.",
          "Track Ticket Status — Go back to the Tickets history screen to view open tickets, check replies from WingoMarkets support team, and submit follow-up replies."
        ],
        stepsMobile: [
          "Go to Support Section — Log in to your Client Hub. Scroll to the bottom of the main sidebar menu and select 'Support'.",
          "Navigate to Ticket History — Click on 'Tickets' to enter your ticket management dashboard and history.",
          "Create New Ticket — Click on 'New Ticket' at the top of the page. Select your ticket department/subject category (e.g., Customer Experience or Verification). Complete the subject field and write a detailed description of your issue. Upload any relevant screenshots or files in the attachments section, then click 'Submit Request'.",
          "Track Ticket Status — Go back to the Tickets history screen to view open tickets, check replies from WingoMarkets support team, and submit follow-up replies."
        ],
        edgeCases: [
          {
            title: "How long does it take to get a ticket response?",
            text: "Our support team typically reviews and responds to tickets within 1 to 3 hours during active market hours."
          },
          {
            title: "What file formats are supported for attachments?",
            text: "You can attach common image and document formats including PNG, JPG, JPEG, and PDF up to 5MB in size."
          }
        ]
      },
      fa: {
        summary: "آموزش نحوه ثبت تیکت جدید جهت ارسال درخواست‌ها یا مشکلات به تیم پشتیبانی وینگو مارکتس و پیگیری پاسخ‌ها.",
        prerequisites: [
          "ورود به کابین شخصی وینگو مارکتس"
        ],
        stepsWeb: [
          "مرحله ۱: ورود به بخش پشتیبانی — وارد داشبورد کاربری خودتون بشید و از پایین منوی اصلی «پشتیبانی» را انتخاب کنید. در صفحه باز شده، روی «تیکت» کلیک کنید تا وارد بخش تاریخچه تیکت‌ها بشید.",
          "مرحله ۲: ثبت تیکت جدید — در این بخش می‌توانید تاریخچه تیکت‌های قبلی خود را ببینید. برای ثبت تیکت جدید: بالای صفحه روی «تیکت جدید» کلیک کنید. موضوع تیکت رو از گزینه‌های تجربه مشتری یا تایید هویت انتخاب کنید. فیلدهای مربوط به موضوع و توضیح مشکل رو کامل کنید. در صورت نیاز، فایل‌های مرتبط رو از بخش پیوست‌ها اضافه کنید و در نهایت روی «ارسال درخواست» بزنید.",
          "مرحله ۳: بررسی وضعیت تیکت — بعد از ارسال تیکت، روی بازگشت به پشتیبانی کلیک کنید تا به بخش تاریخچه تیکت‌ها هدایت بشید. در این بخش می‌تونید وضعیت بررسی تیکت‌ها و پاسخ‌های تیم پشتیبانی رو مشاهده و پیگیری کنید."
        ],
        stepsMobile: [
          "مرحله ۱: ورود به بخش پشتیبانی — وارد داشبورد کاربری خودتون بشید و از پایین منوی اصلی «پشتیبانی» را انتخاب کنید. در صفحه باز شده، روی «تیکت» کلیک کنید تا وارد بخش تاریخچه تیکت‌ها بشید.",
          "مرحله ۲: ثبت تیکت جدید — در این بخش می‌توانید تاریخچه تیکت‌های قبلی خود را ببینید. برای ثبت تیکت جدید: بالای صفحه روی «تیکت جدید» کلیک کنید. موضوع تیکت رو از گزینه‌های تجربه مشتری یا تایید هویت انتخاب کنید. فیلدهای مربوط به موضوع و توضیح مشکل رو کامل کنید. در صورت نیاز، فایل‌های مرتبط رو از بخش پیوست‌ها اضافه کنید و در نهایت روی «ارسال درخواست» بزنید.",
          "مرحله ۳: بررسی وضعیت تیکت — بعد از ارسال تیکت، روی بازگشت به پشتیبانی کلیک کنید تا به بخش تاریخچه تیکت‌ها هدایت بشید. در این بخش می‌تونید وضعیت بررسی تیکت‌ها و پاسخ‌های تیم پشتیبانی رو مشاهده و پیگیری کنید."
        ],
        edgeCases: [
          {
            title: "پاسخ‌گویی به تیکت‌ها چقدر زمان می‌برد؟",
            text: "تیم پشتیبانی وینگو مارکتس معمولاً در ساعات کاری بازار ظرف ۱ الی ۳ ساعت به تیکت‌های شما پاسخ می‌دهد."
          },
          {
            title: "چه فرمت‌هایی برای پیوست فایل پشتیبانی می‌شوند؟",
            text: "شما می‌توانید فایل‌های تصویری و اسناد با فرمت‌های PNG، JPG، JPEG و PDF را تا حجم حداکثر ۵ مگابایت پیوست کنید."
          }
        ]
      },
      ar: {
        summary: "تعرف على كيفية فتح تذكرة دعم فني جديدة لإرسال استفساراتك أو الإبلاغ عن مشكلة فنية وفحص الردود مباشرة.",
        prerequisites: [
          "تسجيل الدخول إلى بوابة عملاء WingoMarkets الخاصة بك"
        ],
        stepsWeb: [
          "الخطوة 1: الدخول إلى قسم الدعم الفني — قم بتسجيل الدخول إلى لوحة التحكم الخاصة بك. من أسفل القائمة الجانبية الرئيسية، اختر 'الدعم الفني'. في الصفحة التالية، انقر فوق 'تذكرة' للدخول إلى سجل التذاكر الخاص بك.",
          "الخطوة 2: إنشاء تذكرة جديدة — في هذا القسم، انقر فوق زر 'تذكرة جديدة' في الأعلى. اختر موضوع التذكرة أو القسم المختص (مثل تجربة العملاء أو توثيق الهوية). املأ حقل العنوان واكتب وصفاً تفصيلياً للمشكلة، وأرفق أي ملفات أو صور توضيحية، ثم انقر فوق 'إرسال الطلب'.",
          "الخطوة 3: متابعة حالة التذكرة — بعد إرسال التذكرة، انقر فوق العودة إلى الدعم الفني للذهاب إلى سجل التذاكر، حيث يمكنك فحص حالة التذكرة وقراءة ردود فريق الدعم ومتابعتها."
        ],
        stepsMobile: [
          "الخطوة 1: الدخول إلى قسم الدعم الفني — قم بتسجيل الدخول إلى لوحة التحكم الخاصة بك. من أسفل القائمة الجانبية الرئيسية، اختر 'الدعم الفني'. في الصفحة التالية، انقر فوق 'تذكرة' للدخول إلى سجل التذاكر الخاص بك.",
          "الخطوة 2: إنشاء تذكرة جديدة — في هذا القسم، انقر فوق زر 'تذكرة جديدة' في الأعلى. اختر موضوع التذكرة أو القسم المختص (مثل تجربة العملاء أو توثيق الهوية). املأ حقل العنوان واكتب وصفاً تفصيلياً للمشكلة، وأرفق أي ملفات أو صور توضيحية، ثم انقر فوق 'إرسال الطلب'.",
          "الخطوة 3: متابعة حالة التذكرة — بعد إرسال التذكرة، انقر فوق العودة إلى الدعم الفني للذهاب إلى سجل التذاكر، حيث يمكنك فحص حالة التذكرة وقراءة ردود فريق الدعم ومتابعتها."
        ],
        edgeCases: [
          {
            title: "كم من الوقت يستغرق الرد على التذكرة؟",
            text: "يقوم فريق الدعم الفني بمراجعة التذاكر والرد عليها عادةً خلال ساعة إلى 3 ساعات عمل أثناء أوقات نشاط السوق."
          },
          {
            title: "ما هي صيغ الملفات المدعومة للمرفقات؟",
            text: "يمكنك إرفاق ملفات الصور والمستندات الشائعة مثل PNG و JPG و JPEG و PDF بحجم أقصى 5 ميجابايت."
          }
        ]
      }
    },
    relatedSlugs: ["how-to-register", "kyc-verification"]
  },
  {
    slug: "withdrawal-tcpay",
    categorySlug: "deposits-withdrawals",
    pillar: "help-center",
    template: "A",
    lastUpdated: "2026-06-28",
    readTime: 3,
    title: {
      en: "How to Withdraw Funds via TCpay (TopChange)",
      fa: "راهنمای برداشت وجه از طریق TCpay",
      ar: "كيفية سحب الأموال عبر TCpay (TopChange)"
    },
    description: {
      en: "Step-by-step guide to withdrawing funds from your WingoMarkets wallet using your TopChange (TCPay) account.",
      fa: "راهنمای گام‌به‌گام برای ثبت درخواست برداشت وجه از کیف پول وینگو مارکتس به حساب تاپ‌چنج (TCpay).",
      ar: "دليل خطوة بخطوة لسحب الأموال من محفظة WingoMarkets الخاصة بك مباشرة إلى حساب TopChange (TCPay) الخاص بك."
    },
    content: {
      en: {
        summary: "Withdraw funds securely from your WingoMarkets wallet directly to your TopChange (TCPay) account in a few simple steps.",
        prerequisites: [
          "Active TopChange (TCPay) account",
          "Verified WingoMarkets profile with a minimum wallet balance of $10"
        ],
        stepsWeb: [
          "Navigate to Withdrawal Section — Log in to your Client Hub dashboard and click on the 'Withdrawal' button.",
          "Select TopChange — From the available list of payment methods, select 'TopChange' (TCPay) to proceed.",
          "Select Destination Account — Choose a saved TopChange destination account from the dropdown menu, or click 'Add New Address' to register a new destination wallet address, then click 'Continue'.",
          "Enter Withdrawal Amount — Specify the amount you wish to withdraw (minimum $10). Take note of any processing times and fees, then click 'Continue'.",
          "Security Verification — Review your transaction preview (source, amount, destination). Enter the security PIN code sent to your registered email or phone, then click 'Confirm & Withdraw'.",
          "Track Request Status — A confirmation message will be displayed. You can monitor the transaction processing status directly from your transaction history panel."
        ],
        stepsMobile: [
          "Navigate to Withdrawal Section — Log in to your Client Hub dashboard and click on the 'Withdrawal' button.",
          "Select TopChange — From the available list of payment methods, select 'TopChange' (TCPay) to proceed.",
          "Select Destination Account — Choose a saved TopChange destination account from the dropdown menu, or click 'Add New Address' to register a new destination wallet address, then click 'Continue'.",
          "Enter Withdrawal Amount — Specify the amount you wish to withdraw (minimum $10). Take note of any processing times and fees, then click 'Continue'.",
          "Security Verification — Review your transaction preview (source, amount, destination). Enter the security PIN code sent to your registered email or phone, then click 'Confirm & Withdraw'.",
          "Track Request Status — A confirmation message will be displayed. You can monitor the transaction processing status directly from your transaction history panel."
        ],
        edgeCases: [
          {
            title: "How long does it take for TCpay withdrawals to process?",
            text: "TCPay withdrawal requests are typically reviewed and processed by our finance department within 24 working hours."
          },
          {
            title: "What is the minimum withdrawal amount?",
            text: "The minimum amount you can withdraw via TopChange (TCPay) is $10."
          }
        ]
      },
      fa: {
        summary: "مراحل برداشت امن و سریع موجودی از کیف پول وینگو مارکتس به حساب تاپ‌چنج (TCpay) با استفاده از تاییدیه امنیتی PIN.",
        prerequisites: [
          "داشتن حساب کاربری تایید شده در تاپ‌چنج (TCpay)",
          "موجودی حداقل ۱۰ دلار در کیف پول اصلی وینگو مارکتس"
        ],
        stepsWeb: [
          "مرحله ۱: ورود به بخش برداشت — وارد پنل کاربری خودتون بشید. از صفحه داشبورد، روی دکمه «برداشت» کلیک کنید.",
          "مرحله ۲: انتخاب روش برداشت — در صفحه برداشت، لیست روش‌های موجود به شما نمایش داده می‌شه. گزینه TopChange را انتخاب کنید تا ادامه فرآیند از طریق این روش انجام بشه.",
          "مرحله ۳: انتخاب آدرس مقصد — در این مرحله باید کیف پول یا حساب مقصد رو مشخص کنید. اگر قبلاً آدرسی ثبت نکردید، روی گزینه «افزودن آدرس جدید» کلیک کنید و اطلاعات مقصد را وارد و ذخیره کنید. اگر از قبل آدرس ثبت کردید، از منوی کشویی یکی از آدرس‌ها را انتخاب کنید. پس از انتخاب مقصد، روی دکمه «ادامه» کلیک کنید. (نکته: حداقل مبلغ برداشت ۱۰ دلار است).",
          "مرحله ۴: وارد کردن مبلغ برداشت — در کادر مبلغ، مبلغ موردنظر برای برداشت رو وارد کنید. به کارمزدها و محدودیت‌های برداشت توجه داشته باشید. (نکته: زمان پردازش درخواست‌های برداشت معمولاً تا ۲۴ ساعت کاری زمان می‌بره). پس از بررسی اطلاعات، روی دکمه «ادامه» کلیک کنید.",
          "مرحله ۵: بررسی جزئیات و تایید نهایی — در این مرحله، پیش‌نمایش کامل درخواست شما شامل کیف پول مبدأ، مبلغ برداشت، آدرس یا شماره حساب مقصد و جزئیات تراکنش نمایش داده می‌شه. برای تأیید هویت، یک کد امنیتی (PIN) برای شما ارسال می‌شه. کد دریافتی را در کادر مربوطه وارد کرده و روی دکمه «تأیید و برداشت» کلیک کنید.",
          "مرحله ۶: ثبت درخواست و پیگیری وضعیت — بعد از ثبت، در صورت موفق بودن، پیام تأیید به شما نمایش داده می‌شه و درخواست شما وارد مرحله پردازش میشه. می‌تونید وضعیت تراکنش را از داخل پنل کاربری خودتون بررسی کنید."
        ],
        stepsMobile: [
          "مرحله ۱: ورود به بخش برداشت — وارد پنل کاربری خودتون بشید. از صفحه داشبورد، روی دکمه «برداشت» کلیک کنید.",
          "مرحله ۲: انتخاب روش برداشت — در صفحه برداشت، لیست روش‌های موجود به شما نمایش داده می‌شه. گزینه TopChange را انتخاب کنید تا ادامه فرآیند از طریق این روش انجام بشه.",
          "مرحله ۳: انتخاب آدرس مقصد — در این مرحله باید کیف پول یا حساب مقصد رو مشخص کنید. اگر قبلاً آدرسی ثبت نکردید، روی گزینه «افزودن آدرس جدید» کلیک کنید و اطلاعات مقصد را وارد و ذخیره کنید. اگر از قبل آدرس ثبت کردید، از منوی کشویی یکی از آدرس‌ها را انتخاب کنید. پس از انتخاب مقصد، روی دکمه «ادامه» کلیک کنید. (نکته: حداقل مبلغ برداشت ۱۰ دلار است).",
          "مرحله ۴: وارد کردن مبلغ برداشت — در کادر مبلغ، مبلغ موردنظر برای برداشت رو وارد کنید. به کارمزدها و محدودیت‌های برداشت توجه داشته باشید. (نکته: زمان پردازش درخواست‌های برداشت معمولاً تا ۲۴ ساعت کاری زمان می‌بره). پس از بررسی اطلاعات، روی دکمه «ادامه» کلیک کنید.",
          "مرحله ۵: بررسی جزئیات و تایید نهایی — در این مرحله، پیش‌نمایش کامل درخواست شما شامل کیف پول مبدأ، مبلغ برداشت، آدرس یا شماره حساب مقصد و جزئیات تراکنش نمایش داده می‌شه. برای تأیید هویت، یک کد امنیتی (PIN) برای شما ارسال می‌شه. کد دریافتی را در کادر مربوطه وارد کرده و روی دکمه «تأیید و برداشت» کلیک کنید.",
          "مرحله ۶: ثبت درخواست و پیگیری وضعیت — بعد از ثبت، در صورت موفق بودن، پیام تأیید به شما نمایش داده می‌شه و درخواست شما وارد مرحله پردازش میشه. می‌تونید وضعیت تراکنش را از داخل پنل کاربری خودتون بررسی کنید."
        ],
        edgeCases: [
          {
            title: "مدت زمان واریز برداشت‌های تاپ‌چنج چقدر است؟",
            text: "درخواست‌های برداشت معمولاً ظرف ۲۴ ساعت کاری توسط دپارتمان مالی بررسی و به حساب تاپ‌چنج شما واریز می‌گردد."
          },
          {
            title: "حداقل مبلغ قابل برداشت چقدر است؟",
            text: "حداقل مبلغ مجاز برای ثبت درخواست برداشت از طریق تاپ‌چنج (TCpay) معادل ۱۰ دلار است."
          }
        ]
      },
      ar: {
        summary: "اسحب أموالك بأمان وسهولة من محفظة WingoMarkets إلى حساب TopChange (TCPay) الخاص بك في بضع خطوات بسيطة.",
        prerequisites: [
          "حساب نشط وموثق في TopChange (TCPay)",
          "رصيد لا يقل عن 10 دولارات في محفظة WingoMarkets الخاصة بك"
        ],
        stepsWeb: [
          "الخطوة 1: الدخول إلى قسم السحب — قم بتسجيل الدخول إلى لوحة التحكم الخاصة بك. من الصفحة الرئيسية، انقر فوق زر 'سحب'.",
          "الخطوة 2: اختيار طريقة السحب — في صفحة السحب، ستظهر لك قائمة بالطرق المتاحة. اختر 'TopChange' (TCPay) للمتابعة.",
          "الخطوة 3: تحديد الحساب الوجهة — حدد الحساب أو المحفظة المستهدفة. إذا لم تكن قد أضفت حساباً من قبل، انقر فوق 'إضافة عنوان جديد' وأدخل تفاصيل حسابك ثم احفظها. إذا كان لديك حساب مسجل، اختره من القائمة المنسدلة، ثم انقر فوق 'متابعة'. (ملاحظة: الحد الأدنى للسحب هو 10 دولارات).",
          "الخطوة 4: إدخال مبلغ السحب — أدخل المبلغ الذي ترغب في سحبه في الحقل المخصص. انتبه للرسوم وحدود السحب (قد تستغرق معالجة السحب ما يصل إلى 24 ساعة عمل)، ثم انقر فوق 'متابعة'.",
          "الخطوة 5: مراجعة التفاصيل والتأكيد النهائي — ستظهر لك معاينة كاملة لطلبك (المحفظة المصدر، المبلغ، الحساب الوجهة). أدخل رمز التحقق الأمني (PIN) المرسل إلى بريدك أو هاتفك، ثم انقر فوق 'تأكيد وسحب'.",
          "الخطوة 6: تقديم الطلب ومتابعة الحالة — بعد التقديم بنجاح، ستظهر لك رسالة تأكيد. يمكنك متابعة حالة معالجة الطلب في أي وقت من سجل المعاملات في لوحة التحكم."
        ],
        stepsMobile: [
          "الخطوة 1: الدخول إلى قسم السحب — قم بتسجيل الدخول إلى لوحة التحكم الخاصة بك. من الصفحة الرئيسية، انقر فوق زر 'سحب'.",
          "الخطوة 2: اختيار طريقة السحب — في صفحة السحب، ستظهر لك قائمة بالطرق المتاحة. اختر 'TopChange' (TCPay) للمتابعة.",
          "الخطوة 3: تحديد الحساب الوجهة — حدد الحساب أو المحفظة المستهدفة. إذا لم تكن قد أضفت حساباً من قبل، انقر فوق 'إضافة عنوان جديد' وأدخل تفاصيل حسابك ثم احفظها. إذا كان لديك حساب مسجل, اختره من القائمة المنسدلة، ثم انقر فوق 'متابعة'. (ملاحظة: الحد الأدنى للسحب هو 10 دولارات).",
          "الخطوة 4: إدخال مبلغ السحب — أدخل المبلغ الذي ترغب في سحبه في الحقل المخصص. انتبه للرسوم وحدود السحب (قد تستغرق معالجة السحب ما يصل إلى 24 ساعة عمل)، ثم انقر فوق 'متابعة'.",
          "الخطوة 5: مراجعة التفاصيل والتأكيد النهائي — ستظهر لك معاينة كاملة لطلبك (المحفظة المصدر، المبلغ، الحساب الوجهة). أدخل رمز التحقق الأمني (PIN) المرسل إلى بريدك أو هاتفك، ثم انقر فوق 'تأكيد وسحب'.",
          "الخطوة 6: تقديم الطلب ومتابعة الحالة — بعد التقديم بنجاح، ستظهر لك رسالة تأكيد. يمكنك متابعة حالة معالجة الطلب في أي وقت من سجل المعاملات في لوحة التحكم."
        ],
        edgeCases: [
          {
            title: "كم تستغرق معالجة سحوبات TopChange؟",
            text: "تتم مراجعة ومعالجة طلبات السحب عبر TopChange عادةً من قبل القسم المالي في غضون 24 ساعة عمل."
          },
          {
            title: "ما هو الحد الأدنى لمبلغ السحب؟",
            text: "الحد الأدنى المسموح به لطلب السحب عبر TopChange هو 10 دولارات."
          }
        ]
      }
    },
    relatedSlugs: ["tcpay-deposit", "crypto-withdrawal"]
  },
  {
    slug: "withdrawal-volet",
    categorySlug: "deposits-withdrawals",
    pillar: "help-center",
    template: "A",
    lastUpdated: "2026-06-28",
    readTime: 3,
    title: {
      en: "How to Withdraw Funds via Volet",
      fa: "راهنمای برداشت از طریق Volet",
      ar: "كيفية سحب الأموال عبر Volet"
    },
    description: {
      en: "Step-by-step guide to withdrawing funds from your WingoMarkets wallet to your Volet wallet.",
      fa: "راهنمای گام‌به‌گام برای ثبت درخواست برداشت وجه از کیف پول وینگو مارکتس به کیف پول Volet.",
      ar: "دليل خطوة بخطوة لسحب الأموال من محفظة WingoMarkets الخاصة بك إلى محفظة Volet الخاصة بك."
    },
    content: {
      en: {
        summary: "Withdraw funds securely from your WingoMarkets wallet directly to your Volet account using email verification code (PIN).",
        prerequisites: [
          "Active Volet account",
          "Verified WingoMarkets profile with a minimum wallet balance of $10"
        ],
        stepsWeb: [
          "Navigate to Withdrawal Section — Log in to your Client Hub dashboard and click on the 'Withdrawal' button.",
          "Select Volet — From the available list of payment options, select 'Volet' to proceed with the withdrawal.",
          "Select Destination Wallet — Choose a saved Volet destination wallet address from the dropdown list, or click 'Add New Address' to enter and save a new destination wallet, then click 'Save Address'.",
          "Enter Withdrawal Amount — Input the amount you wish to withdraw (minimum $10). Check transaction limits and estimated processing times, then click 'Continue'.",
          "Review & Verify PIN — Check your transaction preview details (origin wallet, withdrawal amount, and destination address). Enter the verification security PIN sent to you, then click 'Confirm & Withdraw'.",
          "Monitor Withdrawal Request — Once submitted successfully, a confirmation message will be shown. You can track the status of your withdrawal from your user cabinet's transaction logs."
        ],
        stepsMobile: [
          "Navigate to Withdrawal Section — Log in to your Client Hub dashboard and click on the 'Withdrawal' button.",
          "Select Volet — From the available list of payment options, select 'Volet' to proceed with the withdrawal.",
          "Select Destination Wallet — Choose a saved Volet destination wallet address from the dropdown list, or click 'Add New Address' to enter and save a new destination wallet, then click 'Save Address'.",
          "Enter Withdrawal Amount — Input the amount you wish to withdraw (minimum $10). Check transaction limits and estimated processing times, then click 'Continue'.",
          "Review & Verify PIN — Check your transaction preview details (origin wallet, withdrawal amount, and destination address). Enter the verification security PIN sent to you, then click 'Confirm & Withdraw'.",
          "Monitor Withdrawal Request — Once submitted successfully, a confirmation message will be shown. You can track the status of your withdrawal from your user cabinet's transaction logs."
        ],
        edgeCases: [
          {
            title: "How long does it take for Volet withdrawals to process?",
            text: "Withdrawal requests via Volet are reviewed by our finance team and typically processed within 24 working hours."
          },
          {
            title: "Are there any fees for Volet withdrawals?",
            text: "Please check the fees schedule on the withdrawal preview page before confirming your transaction, as fee rates may vary depending on the target wallet currency."
          }
        ]
      },
      fa: {
        summary: "مراحل برداشت امن و سریع موجودی از کیف پول وینگو مارکتس به حساب Volet با استفاده از تاییدیه امنیتی PIN.",
        prerequisites: [
          "داشتن حساب کاربری فعال در Volet",
          "موجودی حداقل ۱۰ دلار در کیف پول اصلی وینگو مارکتس"
        ],
        stepsWeb: [
          "مرحله ۱: ورود به بخش برداشت — وارد پنل کاربری خودتون بشید. از صفحه داشبورد، روی دکمه «برداشت» کلیک کنید.",
          "مرحله ۲: انتخاب روش برداشت — در صفحه برداشت، لیست روش‌های موجود به شما نمایش داده می‌شه. گزینه Volet را انتخاب کنید تا ادامه فرآیند از طریق این روش انجام بشه.",
          "مرحله ۳: انتخاب کیف پول و مقصد — اول کیف پول مقصدتون را انتخاب کنید. اگر می‌خواهید وجه به یک آدرس جدید بره، روی «افزودن آدرس جدید» بزنید، آدرس را وارد و ذخیره کنید. اگر از قبل آدرس ثبت کردید، می‌توانید از لیست کشویی انتخابش کنید و روی «ذخیره آدرس» کلیک کنید تا مقصد تایید بشه. (نکته: حتماً مطمئن بشید شماره حساب یا آدرس مقصد درست وارد شده باشه، چون بعد از ثبت قابل تغییر نیست).",
          "مرحله ۴: وارد کردن مبلغ برداشت — در کادر مبلغ، مبلغ موردنظر برای برداشت رو وارد کنید. به کارمزدها و محدودیت‌های برداشت توجه داشته باشید. (نکته: زمان پردازش درخواست‌های برداشت معمولاً تا ۲۴ ساعت کاری زمان می‌بره). پس از بررسی اطلاعات، روی دکمه «ادامه» کلیک کنید.",
          "مرحله ۵: بررسی جزئیات و تایید نهایی — در این مرحله، پیش‌نمایش کامل درخواست شما شامل کیف پول مبدأ، مبلغ برداشت، آدرس یا شماره حساب مقصد و جزئیات تراکنش نمایش داده می‌شه. برای تأیید هویت، یک کد امنیتی (PIN) برای شما ارسال می‌شه. کد دریافتی را در کادر مربوطه وارد کرده و روی دکمه «تأیید و برداشت» کلیک کنید تا درخواست شما ثبت بشه.",
          "مرحله ۶: ثبت درخواست و پیگیری وضعیت — بعد از ثبت، در صورت موفق بودن، پیام تأیید به شما نمایش داده می‌شه و درخواست شما وارد مرحله پردازش میشه. می‌تونید وضعیت تراکنش (موفق یا ناموفق بودن) را از داخل پنل کاربری خودتون بررسی کنید."
        ],
        stepsMobile: [
          "مرحله ۱: ورود به بخش برداشت — وارد پنل کاربری خودتون بشید. از صفحه داشبورد، روی دکمه «برداشت» کلیک کنید.",
          "مرحله ۲: انتخاب روش برداشت — در صفحه برداشت، لیست روش‌های موجود به شما نمایش داده می‌شه. گزینه Volet را انتخاب کنید تا ادامه فرآیند از طریق این روش انجام بشه.",
          "مرحله ۳: انتخاب کیف پول و مقصد — اول کیف پول مقصدتون را انتخاب کنید. اگر می‌خواهید وجه به یک آدرس جدید بره، روی «افزودن آدرس جدید» بزنید، آدرس را وارد و ذخیره کنید. اگر از قبل آدرس ثبت کردید، می‌توانید از لیست کشویی انتخابش کنید و روی «ذخیره آدرس» کلیک کنید تا مقصد تایید بشه. (نکته: حتماً مطمئن بشید شماره حساب یا آدرس مقصد درست وارد شده باشه، چون بعد از ثبت قابل تغییر نیست).",
          "مرحله ۴: وارد کردن مبلغ برداشت — در کادر مبلغ، مبلغ موردنظر برای برداشت رو وارد کنید. به کارمزدها و محدودیت‌های برداشت توجه داشته باشید. (نکته: زمان پردازش درخواست‌های برداشت معمولاً تا ۲۴ ساعت کاری زمان می‌بره). پس از بررسی اطلاعات، روی دکمه «ادامه» کلیک کنید.",
          "مرحله ۵: بررسی جزئیات و تایید نهایی — در این مرحله، پیش‌نمایش کامل درخواست شما شامل کیف پول مبدأ، مبلغ برداشت، آدرس یا شماره حساب مقصد و جزئیات تراکنش نمایش داده می‌شه. برای تأیید هویت، یک کد امنیتی (PIN) برای شما ارسال می‌شه. کد دریافتی را در کادر مربوطه وارد کرده و روی دکمه «تأیید و برداشت» کلیک کنید تا درخواست شما ثبت بشه.",
          "مرحله ۶: ثبت درخواست و پیگیری وضعیت — بعد از ثبت، در صورت موفق بودن، پیام تأیید به شما نمایش داده می‌شه و درخواست شما وارد مرحله پردازش میشه. می‌تونید وضعیت تراکنش (موفق یا ناموفق بودن) را از داخل پنل کاربری خودتون بررسی کنید."
        ],
        edgeCases: [
          {
            title: "مدت زمان واریز برداشت‌های Volet چقدر است؟",
            text: "درخواست‌های برداشت معمولاً ظرف ۲۴ ساعت کاری توسط دپارتمان مالی بررسی و به حساب Volet شما واریز می‌گردد."
          },
          {
            title: "آیا برداشت از طریق Volet کارمزد دارد؟",
            text: "میزان کارمزد در صفحه پیش‌نمایش تراکنش به شما نشان داده می‌شود که بسته به نوع ارز کیف پول هدف ممکن است متغیر باشد."
          }
        ]
      },
      ar: {
        summary: "اسحب أموالك بأمان وسهولة من محفظة WingoMarkets إلى حساب Volet الخاص بك باستخدام رمز التحقق الأمني (PIN).",
        prerequisites: [
          "حساب نشط في Volet",
          "رصيد لا يقل عن 10 دولارات في محفظة WingoMarkets الخاصة بك"
        ],
        stepsWeb: [
          "الخطوة 1: الدخول إلى قسم السحب — قم بتسجيل الدخول إلى لوحة التحكم الخاصة بك. من الصفحة الرئيسية، انقر فوق زر 'سحب'.",
          "الخطوة 2: اختيار طريقة السحب — في صفحة السحب، ستظهر لك قائمة بالطرق المتاحة. اختر 'Volet' للمتابعة.",
          "الخطوة 3: تحديد المحفظة الوجهة — حدد المحفظة المستهدفة. إذا أردت التحويل لعنوان جديد، انقر فوق 'إضافة عنوان جديد'، وأدخل البيانات ثم احفظها. إذا كان لديك عنوان مسجل، اختره من القائمة المنسدلة وانقر فوق 'حفظ العنوان' لتأكيد الوجهة. (ملاحظة: تأكد من دقة العنوان حيث لا يمكن تعديله بعد التقديم).",
          "الخطوة 4: إدخال مبلغ السحب — أدخل المبلغ الذي ترغب في سحبه في الحقل المخصص. انتبه للرسوم وحدود السحب (قد تستغرق معالجة السحب ما يصل إلى 24 ساعة عمل)، ثم انقر فوق 'متابعة'.",
          "الخطوة 5: مراجعة التفاصيل والتأكيد النهائي — ستظهر لك معاينة كاملة لطلبك (المحفظة المصدر، المبلغ، الحساب الوجهة). أدخل رمز التحقق الأمني (PIN) المرسل إليك، ثم انقر فوق 'تأكيد وسحب'.",
          "الخطوة 6: تقديم الطلب ومتابعة الحالة — بعد التقديم بنجاح، ستظهر لك رسالة تأكيد. يمكنك متابعة حالة معالجة الطلب في أي وقت من سجل المعاملات في لوحة التحكم."
        ],
        stepsMobile: [
          "الخطوة 1: الدخول إلى قسم السحب — قم بتسجيل الدخول إلى لوحة التحكم الخاصة بك. من الصفحة الرئيسية، انقر فوق زر 'سحب'.",
          "الخطوة 2: اختيار طريقة السحب — في صفحة السحب، ستظهر لك قائمة بالطرق المتاحة. اختر 'Volet' للمتابعة.",
          "الخطوة 3: تحديد المحفظة الوجهة — حدد المحفظة المستهدفة. إذا أردت التحويل لعنوان جديد، انقر فوق 'إضافة عنوان جديد'، وأدخل البيانات ثم احفظها. إذا كان لديك عنوان مسجل، اختره من القائمة المنسدلة وانقر فوق 'حفظ العنوان' لتأكيد الوجهة. (ملاحظة: تأكد من دقة العنوان حيث لا يمكن تعديله بعد التقديم).",
          "الخطوة 4: إدخال مبلغ السحب — أدخل المبلغ الذي ترغب في سحبه في الحقل المخصص. انتبه للرسوم وحدود السحب (قد تستغرق معالجة السحب ما يصل إلى 24 ساعة عمل)، ثم انقر فوق 'متابعة'.",
          "الخطوة 5: مراجعة التفاصيل والتأكيد النهائي — ستظهر لك معاينة كاملة لطلبك (المحفظة المصدر، المبلغ، الحساب الوجهة). أدخل رمز التحقق الأمني (PIN) المرسل إليك، ثم انقر فوق 'تأكيد وسحب'.",
          "الخطوة 6: تقديم الطلب ومتابعة الحالة — بعد التقديم بنجاح، ستظهر لك رسالة تأكيد. يمكنك متابعة حالة معالجة الطلب في أي وقت من سجل المعاملات في لوحة التحكم."
        ],
        edgeCases: [
          {
            title: "كم تستغرق معالجة سحوبات Volet؟",
            text: "تتم مراجعة ومعالجة طلبات السحب عبر Volet عادةً من قبل القسم المالي في غضون 24 ساعة عمل."
          },
          {
            title: "هل هناك أي رسوم على سحوبات Volet؟",
            text: "يرجى مراجعة تفاصيل الرسوم في صفحة معاينة السحب قبل التأكيد، حيث قد تختلف الرسوم بناءً على عملة المحفظة المستهدفة."
          }
        ]
      }
    },
    relatedSlugs: ["volet-deposit", "withdrawal-tcpay"]
  }
];

export const getArticleBySlug = (slug) => {
  return articles.find(a => a.slug === slug);
};

export const getArticlesByCategory = (categorySlug) => {
  return articles.filter(a => a.categorySlug === categorySlug);
};

export const getRelatedArticles = (article) => {
  if (!article.relatedSlugs) return [];
  return articles.filter(a => article.relatedSlugs.includes(a.slug));
};

import type { Lang } from './config';

export const translations = {
  ar: {
    dir: 'rtl',
    nav: {
      links: [
        { id: 'services', label: 'خدماتنا' },
        { id: 'why-us', label: 'لماذا نحن' },
        { id: 'how', label: 'كيف تعمل' },
        { id: 'parts', label: 'القطع' },
        { id: 'about', label: 'من نحن' },
      ],
      cta: 'اطلب عرض سعر',
      langToggle: 'EN',
    },
    hero: {
      badge: 'من فرانكفورت مباشرةً إلى الخليج',
      title1: 'قطع غيار ألمانية أصلية',
      title2: 'تصل إلى بابك خلال 3-5 أيام',
      subtitle:
        'نخدم الورش وأصحاب السيارات في السعودية والكويت وقطر والبحرين. نتحقق من توافق القطعة عبر رقم الشاسيه (VIN)، ونصدر فواتير ألمانية رسمية، بأسعار أقل من الوكلاء.',
      ctaPrimary: 'اطلب عرض سعر',
      ctaSecondary: 'كيف تعمل الخدمة',
      trust: [
        'الشحن من فرانكفورت',
        'فحص رقم الشاسيه',
        'توصيل خلال 3-5 أيام',
        'فواتير أصلية',
      ],
    },
    audience: {
      title: 'لمن نقدّم خدماتنا؟',
      subtitle: 'حلول مرنة للورش وأصحاب السيارات على حدٍّ سواء.',
      card1: {
        title: 'للورش والمحلات',
        subtitle: 'B2B',
        points: [
          'أسعار جملة تنافسية وعمول ثابت',
          'قطع أصلية مع ضمان رسمي',
          'توفير وقت البحث والتوريد',
          'تتبع كامل لكل طلب',
        ],
      },
      card2: {
        title: 'لأصحاب السيارات',
        subtitle: 'B2C',
        points: [
          'فحص القطعة عبر رقم الشاسيه',
          'أسعار أقل من الوكيل',
          'شحن سريع مباشر من فرانكفورت',
          'دعم باللغة العربية',
        ],
      },
    },
    why: {
      title: 'لماذا تختارنا؟',
      subtitle: 'ستة أسباب تجعلنا خيارك الأول لتوريد قطع الغيار الألمانية.',
      cards: [
        {
          title: 'فحص رقم الشاسيه',
          desc: 'نتحقق من توافق القطعة مع رقم الشاسيه قبل الطلب لضمان ملاءمتها تماماً.',
        },
        {
          title: 'شحن جوي سريع',
          desc: 'تصل قطعك خلال 3-5 أيام عمل من فرانكفورت إلى الخليج.',
        },
        {
          title: 'سعر عادل وفواتير حقيقية',
          desc: 'أسعار أقل من الوكلاء، مع فواتير ألمانية رسمية لكل قطعة.',
        },
        {
          title: 'إلكترونيات أصلية',
          desc: 'ECU، حساسات، ميكاترونيك، وشاشات رقمية أصلية بموثوقية كاملة.',
        },
        {
          title: 'خدمة شخصية',
          desc: 'تواصل مباشر مع فريق ناطق بالعربية يفهم احتياجك ويجيبك بسرعة.',
        },
        {
          title: 'تتبّع حتى التسليم',
          desc: 'متابعة كاملة للشحنة من فرانكفورت حتى وصولها بين يديك.',
        },
      ],
    },
    how: {
      title: 'كيف تعمل الخدمة؟',
      subtitle: 'أربع خطوات بسيطة من الطلب حتى التسليم.',
      steps: [
        {
          title: 'أرسل طلبك',
          desc: 'شاركنا رقم الشاسيه واسم أو رقم القطعة المطلوبة.',
        },
        {
          title: 'نتحقق ونرسل عرض السعر',
          desc: 'فحص التوافق ثم عرض سعر واضح خلال ساعات.',
        },
        {
          title: 'ادفع ونشحن',
          desc: 'نشتري القطعة ونشحنها جواً من فرانكفورت.',
        },
        {
          title: 'استلم قطعتك',
          desc: 'تتبّع الشحنة واستلم القطعة خلال 3-5 أيام.',
        },
      ],
    },
    parts: {
      title: 'القطع التي نركّز عليها',
      subtitle: 'نتخصص في توريد القطع الإلكترونية والحساسة من ألمانيا.',
      cards: [
        { title: 'وحدات تحكم المحرك (ECU)', desc: 'وحدات تحكم أصلية لجميع الماركات الألمانية.' },
        { title: 'وحدات ميكاترونيك (DSG/ZF)', desc: 'علب تروس ميكاترونيك مع برمجة عند الطلب.' },
        { title: 'الحساسات والرادارات', desc: 'حساسات ركن، مسافة، ومساعدة متوافقة 100%.' },
        { title: 'الشاشات الرقمية', desc: 'شاشات كوكب ومعلومات بأصلية من الوكيل.' },
        { title: 'وحدات الإنارة (LED/Xenon)', desc: 'مصابيح أمامية وخلفية بضمان رسمي.' },
        { title: 'مضخات وحقّانات', desc: 'مضخات وقود وحقّانات أصلية بأسعار تنافسية.' },
      ],
    },
    form: {
      title: 'اطلب عرض سعر الآن',
      subtitle: 'املأ النموذج وسنرسل لك عرض سعر واضحاً خلال ساعات.',
      customerType: 'نوع العميل',
      customerWorkshop: 'ورشة / محل',
      customerIndividual: 'فرد / مالك سيارة',
      name: 'الاسم (الورشة أو الاسم الكامل)',
      whatsapp: 'رقم الواتساب',
      city: 'المدينة',
      country: 'الدولة',
      email: 'البريد الإلكتروني (اختياري)',
      vin: 'رقم الشاسيه (17 حرف)',
      vinHelp: 'بدون الحروف I و O و Q',
      carModel: 'موديل السيارة',
      carYear: 'سنة الصنع',
      part: 'اسم أو رقم القطعة',
      notes: 'ملاحظات إضافية',
      submit: 'إرسال الطلب',
      sending: 'جارٍ الإرسال...',
      success: 'تم استلام طلبك بنجاح! سنتواصل معك عبر واتساب خلال ساعات.',
      error: 'حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى أو التواصل عبر واتساب.',
      required: 'هذا الحقل مطلوب',
      invalidVin: 'رقم الشاسيه يجب أن يكون 17 حرفاً صحيحاً',
      invalidYear: 'سنة غير صحيحة',
    },
    about: {
      title: 'من نحن',
      paragraph:
        'نحن وسيط متخصص في توريد قطع الغيار الألمانية الأصلية، مقرّنا في فرانكفورت. نربط الورش ومالكي السيارات في الخليج بمصادر قطع غيار موثوقة في ألمانيا، مع فحص دقيق للتوافق عبر رقم الشاسيه وفواتير رسمية لكل قطعة. هدفنا أن تحصل على القطعة الصحيحة، بالسعر العادل، وبأسرع وقت.',
      cards: [
        { title: 'الموقع', value: 'فرانكفورت، ألمانيا' },
        { title: 'التخصص', value: 'إلكترونيات أصلية' },
        { title: 'السرعة', value: 'توصيل 3-5 أيام' },
      ],
      logoCard: 'قطع غيار ألمانية أصلية، بثقة وسرعة.',
    },
    footer: {
      tagline: 'وسيط توريد قطع غيار ألمانية أصلية من فرانكفورت إلى الخليج.',
      quickLinks: 'روابط سريعة',
      contact: 'تواصل معنا',
      legal:
        '© 2025 Parts Source. جميع الحقوق محفوظة. وسيط توريد مستقل — لسنا وكيلاً رسمياً لأي علامة تجارية.',
    },
    whatsapp: {
      tooltip: 'تحدّث معنا',
    },
  },
  en: {
    dir: 'ltr',
    nav: {
      links: [
        { id: 'services', label: 'Services' },
        { id: 'why-us', label: 'Why Us' },
        { id: 'how', label: 'How It Works' },
        { id: 'parts', label: 'Parts' },
        { id: 'about', label: 'About' },
      ],
      cta: 'Get a Quote',
      langToggle: 'AR',
    },
    hero: {
      badge: 'Direct from Frankfurt to the Gulf',
      title1: 'Genuine German Auto Parts',
      title2: 'Delivered in 3-5 Days',
      subtitle:
        'We serve workshops and car owners across Saudi Arabia, Kuwait, Qatar, and Bahrain. We pre-check every part against your VIN, issue original German invoices, and keep prices below dealer rates.',
      ctaPrimary: 'Request a Quote',
      ctaSecondary: 'How It Works',
      trust: [
        'Shipped from Frankfurt',
        'VIN pre-check',
        '3-5 day delivery',
        'Original invoices',
      ],
    },
    audience: {
      title: 'Who We Serve',
      subtitle: 'Flexible sourcing solutions for both workshops and individual owners.',
      card1: {
        title: 'For Workshops',
        subtitle: 'B2B',
        points: [
          'Competitive wholesale pricing',
          'Genuine parts with official warranty',
          'Save sourcing and procurement time',
          'Full order tracking on every request',
        ],
      },
      card2: {
        title: 'For Car Owners',
        subtitle: 'B2C',
        points: [
          'VIN pre-check for every part',
          'Better than dealer prices',
          'Fast direct shipping from Frankfurt',
          'Arabic-speaking support',
        ],
      },
    },
    why: {
      title: 'Why Choose Us?',
      subtitle: 'Six reasons we are your trusted German parts sourcing partner.',
      cards: [
        {
          title: 'VIN Pre-Check',
          desc: 'We verify each part against your VIN before ordering to guarantee perfect fitment.',
        },
        {
          title: 'Fast Air Shipping',
          desc: 'Parts reach you in 3-5 business days from Frankfurt to the Gulf.',
        },
        {
          title: 'Fair Price, Real Invoices',
          desc: 'Below-dealer pricing with official German invoices on every part.',
        },
        {
          title: 'Genuine Electronics',
          desc: 'ECUs, sensors, mechatronics, and digital displays — all genuine and reliable.',
        },
        {
          title: 'Personalized Service',
          desc: 'Direct contact with an Arabic-speaking team that understands your needs.',
        },
        {
          title: 'Tracked to Delivery',
          desc: 'Full shipment tracking from Frankfurt all the way to your doorstep.',
        },
      ],
    },
    how: {
      title: 'How It Works',
      subtitle: 'Four simple steps from request to delivery.',
      steps: [
        {
          title: 'Send Your Request',
          desc: 'Share your VIN and the part name or number you need.',
        },
        {
          title: 'We Verify & Quote',
          desc: 'Compatibility check, then a clear quote within hours.',
        },
        {
          title: 'Pay & We Ship',
          desc: 'We purchase the part and air-ship it from Frankfurt.',
        },
        {
          title: 'Receive Your Part',
          desc: 'Track your shipment and receive it in 3-5 days.',
        },
      ],
    },
    parts: {
      title: 'Parts We Focus On',
      subtitle: 'We specialize in sensitive electronic components from Germany.',
      cards: [
        { title: 'Engine Control Units (ECU)', desc: 'Genuine control units for all German brands.' },
        { title: 'Mechatronic Units (DSG/ZF)', desc: 'Mechatronic modules with optional coding.' },
        { title: 'Sensors & Radars', desc: 'Parking, distance, and driver-assist sensors — 100% compatible.' },
        { title: 'Digital Displays', desc: 'Cockpit and infotainment displays, dealer-grade.' },
        { title: 'Lighting Modules (LED/Xenon)', desc: 'Headlights and taillights with official warranty.' },
        { title: 'Pumps & Injectors', desc: 'Genuine fuel pumps and injectors at fair prices.' },
      ],
    },
    form: {
      title: 'Request a Quote Now',
      subtitle: 'Fill the form and we will send you a clear quote within hours.',
      customerType: 'Customer Type',
      customerWorkshop: 'Workshop / Shop',
      customerIndividual: 'Individual / Owner',
      name: 'Name (workshop or full name)',
      whatsapp: 'WhatsApp number',
      city: 'City',
      country: 'Country',
      email: 'Email (optional)',
      vin: 'VIN (17 characters)',
      vinHelp: 'No I, O, or Q',
      carModel: 'Car model',
      carYear: 'Car year',
      part: 'Part name or number',
      notes: 'Additional notes',
      submit: 'Submit Request',
      sending: 'Sending...',
      success: 'Your request was received! We will contact you on WhatsApp within hours.',
      error: 'Something went wrong while sending. Please try again or reach us on WhatsApp.',
      required: 'This field is required',
      invalidVin: 'Enter a valid 17-character VIN',
      invalidYear: 'Invalid year',
    },
    about: {
      title: 'About Us',
      paragraph:
        'We are a specialized sourcing broker for genuine German auto parts, based in Frankfurt. We connect workshops and car owners in the Gulf with trusted German parts sources — with careful VIN compatibility checks and official invoices on every order. Our goal: the right part, at a fair price, as fast as possible.',
      cards: [
        { title: 'Location', value: 'Frankfurt, Germany' },
        { title: 'Specialty', value: 'Genuine electronics' },
        { title: 'Speed', value: '3-5 day delivery' },
      ],
      logoCard: 'Genuine German parts, sourced with trust and speed.',
    },
    footer: {
      tagline: 'Independent sourcing broker for genuine German auto parts — from Frankfurt to the Gulf.',
      quickLinks: 'Quick Links',
      contact: 'Contact',
      legal:
        '© 2025 Parts Source. All rights reserved. Independent sourcing broker — not an official dealer of any brand.',
    },
    whatsapp: {
      tooltip: 'Chat with us',
    },
  },
} as const;

export type Translation = (typeof translations)[Lang];

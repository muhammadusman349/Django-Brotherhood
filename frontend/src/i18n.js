import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      company: {
        name: "Brother Sports",
        tagline: "PREMIUM EQUIPMENT"
      },
      nav: {
        home: "Home",
        products: "Products",
        categories: "Categories",
        catalog: "Catalog",
        contact: "Contact"
      },
      hero: {
        badge: "Premium Sports Equipment",
        title: "Crafting Excellence",
        titleHighlight: "In Every Game",
        subtitle: "High-performance footballs, goalkeeper gloves, and sportswear crafted to deliver durability, precision, and professional quality worldwide.",
        shopNow: "Shop Now",
        sportsShow: "Sports Show",
        qualityGuaranteed: "Quality Guaranteed"
      },
      home: {
        featuredBadge: "Top Picks",
        featuredTitle: "Featured Products",
        featuredSubtitle: "Premium equipment chosen by athletes worldwide for performance and durability",
        viewAllProducts: "View All Products",
        stats: {
          isoCertified: "ISO Certified",
          sslSecured: "SSL Secured",
          verifiedBusiness: "Verified Business",
          qualityAssured: "Quality Assured"
        },
        whyUsBadge: "Why Us",
        whyUsTitle: "Why Choose Brother Sports?",
        whyUsSubtitle: "We're committed to providing the best sports equipment and shopping experience",
        features: {
          premiumQuality: {
            title: "Premium Quality",
            description: "Only the highest quality sports equipment from trusted manufacturers."
          },
          wideSelection: {
            title: "Wide Selection",
            description: "Browse through our extensive collection of sports gear across multiple categories."
          },
          fastShipping: {
            title: "Fast Shipping",
            description: "Quick and reliable delivery to get you back in the game faster."
          },
          secureShopping: {
            title: "Secure Shopping",
            description: "Your payment information is protected with industry-standard security."
          }
        },
        cta: {
          title: "Ready to Dominate Your Game?",
          subtitle: "Join Brotherhood Sports and trust premium gear built for peak performance. Start your journey to excellence today.",
          shopNow: "Shop Now",
          contactUs: "Contact Us"
        }
      },
      footer: {
        companyInfo: "Premium sports products designed for performance, quality, and champions worldwide.",
        quickLinks: "Quick Links",
        followUs: "Follow Us",
        joinAthletes: "🏆 Join 50,000+ athletes",
        startShopping: "Start Shopping",
        copyright: "All rights reserved.",
        privacyPolicy: "Privacy Policy",
        termsOfService: "Terms of Service",
        shippingInfo: "Shipping Info"
      }
    }
  },
  ar: {
    translation: {
      company: {
        name: "براذر سبورتس",
        tagline: "معدات ممتازة"
      },
      nav: {
        home: "الرئيسية",
        products: "المنتجات",
        categories: "الفئات",
        catalog: "الكاتالوج",
        contact: "اتصل بنا"
      },
      hero: {
        badge: "معدات رياضية ممتازة",
        title: "صناعة التميز",
        titleHighlight: "في كل لعبة",
        subtitle: "كرات القدم عالية الأداء، وقفازات حارس المرمى، والملابس الرياضية المصممة لتقديم المتانة والدقة والجودة الاحترافية في جميع أنحاء العالم.",
        shopNow: "تسوق الآن",
        sportsShow: "معرض الرياضة",
        qualityGuaranteed: "الجودة مضمونة"
      },
      home: {
        featuredBadge: "الأوائل",
        featuredTitle: "المنتجات المميزة",
        featuredSubtitle: "معدات ممتازة اختارها الرياضيون حول العالم للأداء والمتانة",
        viewAllProducts: "عرض جميع المنتجات",
        stats: {
          isoCertified: "معتمد ISO",
          sslSecured: "محمي SSL",
          verifiedBusiness: "عمل موثق",
          qualityAssured: "الجودة مضمونة"
        },
        whyUsBadge: "لماذا نحن",
        whyUsTitle: "لماذا تختار براذر سبورتس؟",
        whyUsSubtitle: "نحن ملتزمون بتوفير أفضل معدات رياضية وتجربة تسوق",
        features: {
          premiumQuality: {
            title: "جودة ممتازة",
            description: "أعلى جودة للمعدات الرياضية من الشركات المصنعة الموثوقة."
          },
          wideSelection: {
            title: "اختيار واسع",
            description: "تصفح مجموعتنا الواسعة من المعدات الرياضية عبر فئات متعددة."
          },
          fastShipping: {
            title: "شحن سريع",
            description: "توصيل سريع وموثوق لإعادتك إلى اللعب بشكل أسرع."
          },
          secureShopping: {
            title: "تسوق آمن",
            description: "معلومات الدفع الخاصة بك محمية بأمان معياري في الصناعة."
          }
        },
        cta: {
          title: "هل أنت مستعد للسيطرة على لعبتك؟",
          subtitle: "انضم إلى براذرهود سبورتس وثق في المعدات المميزة المصممة لأداء قمة. ابدأ رحلتك نحو التميز اليوم.",
          shopNow: "تسوق الآن",
          contactUs: "اتصل بنا"
        }
      },
      footer: {
        companyInfo: "منتجات رياضية ممتازة مصممة للأداء والجودة والأبطال حول العالم.",
        quickLinks: "روابط سريعة",
        followUs: "تابعنا",
        joinAthletes: "🏆 انضم إلى أكثر من 50,000 رياضي",
        startShopping: "ابدأ التسوق",
        copyright: "جميع الحقوق محفوظة.",
        privacyPolicy: "سياسة الخصوصية",
        termsOfService: "شروط الخدمة",
        shippingInfo: "معلومات الشحن"
      }
    }
  },
  ur: {
    translation: {
      company: {
        name: "برادر اسپورٹس",
        tagline: "پریمیم EQUIPMENT"
      },
      nav: {
        home: "ہوم",
        products: "پروڈکٹس",
        categories: "زمرے",
        catalog: "کیٹلاگ",
        contact: "رابطہ کریں"
      },
      hero: {
        badge: "پریمیم اسپورٹس EQUIPMENT",
        title: "مہارت کی تیاری",
        titleHighlight: "ہر گیم میں",
        subtitle: "ہائی پرفارمنس فٹ بال، گول کیپر گلووز، اور اسپورٹس ویئر جو دنیا بھر میں دوام، درستگی، اور پیشہ ورانہ معیار فراہم کرنے کے لیے تیار کیے گئے ہیں۔",
        shopNow: "ابھی خریداری کریں",
        sportsShow: "اسپورٹس شو",
        qualityGuaranteed: "کوالٹی گارنٹیڈ"
      },
      home: {
        featuredBadge: "ٹاپ پکس",
        featuredTitle: "فیچرڈ پروڈکٹس",
        featuredSubtitle: "پریمیم EQUIPMENT جو ایتھلیٹس نے پرفارمنس اور دوام کے لیے منتخب کیے ہیں",
        viewAllProducts: "تمام پروڈکٹس دیکھیں",
        stats: {
          isoCertified: "ISO سرٹیفائڈ",
          sslSecured: "SSL سیکیور",
          verifiedBusiness: "ویریفائڈ بزنس",
          qualityAssured: "کوالٹی یقینی"
        },
        whyUsBadge: "ہم کیوں",
        whyUsTitle: "برادر اسپورٹس کیوں منتخب کریں؟",
        whyUsSubtitle: "ہم بہترین اسپورٹس EQUIPMENT اور شاپنگ تجربہ فراہم کرنے کے لیے منتخب ہیں",
        features: {
          premiumQuality: {
            title: "پریمیم کوالٹی",
            description: "صرف اعلیٰ ترین معیار کے اسپورٹس EQUIPMENT قابل اعتماد مینوفیکچررز سے۔"
          },
          wideSelection: {
            title: "وائید سلیکشن",
            description: "ہماری وسیع اسپورٹس GEAR کالیکشن کو متعدد زمروں میں دیکھیں۔"
          },
          fastShipping: {
            title: "فاسٹ شپنگ",
            description: "تیز اور قابل اعتماد ڈیلیوری جو آپ کو گیم میں واپس لانے میں مدد کرتی ہے۔"
          },
          secureShopping: {
            title: "سیکیور شاپنگ",
            description: "آپ کی ادائیگی کی معلومات انڈسٹری اسٹینڈرڈ سیکیورٹی کے ساتھ محفوظ ہیں۔"
          }
        },
        cta: {
          title: "کیا آپ اپنی گیم پر حکمرانی کرنے کے لیے تیار ہیں؟",
          subtitle: "بردر ہڈ اسپورٹس سے جڑیں اور پیک پرفارمنس کے لیے بنائی گئی پریمیم GEAR پر اعتماد کریں۔ آج سے اپنی کامیابی کی سفر شروع کریں۔",
          shopNow: "ابھی خریداری کریں",
          contactUs: "رابطہ کریں"
        }
      },
      footer: {
        companyInfo: "پریمیم اسپورٹس پروڈکٹس جو پرفارمنس، کوالٹی، اور دنیا بھر کے چیمپینز کے لیے ڈیزائن کیے گئے ہیں۔",
        quickLinks: "فٹ لنکس",
        followUs: "ہمیں فالو کریں",
        joinAthletes: "🏆 50,000+ ایتھلیٹس سے جڑیں",
        startShopping: "شاپنگ شروع کریں",
        copyright: "تمام حقوق محفوظ ہیں۔",
        privacyPolicy: "پرائیویسی پالیسی",
        termsOfService: "سروس کی شرائط",
        shippingInfo: "شپنگ انفو"
      }
    }
  },
  es: {
    translation: {
      company: {
        name: "Hermanos Deportes",
        tagline: "EQUIPAMIENTO PREMIUM"
      },
      nav: {
        home: "Inicio",
        products: "Productos",
        categories: "Categorías",
        catalog: "Catálogo",
        contact: "Contacto"
      },
      hero: {
        badge: "Equipamiento Deportivo Premium",
        title: "Creando Excelencia",
        titleHighlight: "En Cada Juego",
        subtitle: "Balones de alto rendimiento, guantes de portero y ropa deportiva diseñados para ofrecer durabilidad, precisión y calidad profesional en todo el mundo.",
        shopNow: "Comprar Ahora",
        sportsShow: "Show Deportivo",
        qualityGuaranteed: "Calidad Garantizada"
      },
      home: {
        featuredBadge: "Los Mejores",
        featuredTitle: "Productos Destacados",
        featuredSubtitle: "Equipamiento premium elegido por atletas de todo el mundo por su rendimiento y durabilidad",
        viewAllProducts: "Ver Todos los Productos",
        stats: {
          isoCertified: "Certificado ISO",
          sslSecured: "Protegido SSL",
          verifiedBusiness: "Negocio Verificado",
          qualityAssured: "Calidad Asegurada"
        },
        whyUsBadge: "Por Qué Nosotros",
        whyUsTitle: "¿Por Qué Elegir Brother Sports?",
        whyUsSubtitle: "Estamos comprometidos a proporcionar el mejor equipamiento deportivo y experiencia de compra",
        features: {
          premiumQuality: {
            title: "Calidad Premium",
            description: "Solo el equipamiento deportivo de más alta calidad de fabricantes confiables."
          },
          wideSelection: {
            title: "Amplia Selección",
            description: "Explore nuestra extensa colección de equipamiento deportivo en múltiples categorías."
          },
          fastShipping: {
            title: "Envío Rápido",
            description: "Entrega rápida y confiable para que vuelvas al juego más rápido."
          },
          secureShopping: {
            title: "Compra Segura",
            description: "Su información de pago está protegida con seguridad estándar de la industria."
          }
        },
        cta: {
          title: "¿Listo para Dominar tu Juego?",
          subtitle: "Únete a Brotherhood Sports y confía en equipamiento premium construido para un rendimiento máximo. Comienza tu viaje hacia la excelencia hoy.",
          shopNow: "Comprar Ahora",
          contactUs: "Contáctanos"
        }
      },
      footer: {
        companyInfo: "Productos deportivos premium diseñados para rendimiento, calidad y campeones de todo el mundo.",
        quickLinks: "Enlaces Rápidos",
        followUs: "Síguenos",
        joinAthletes: "🏆 Únete a 50,000+ atletas",
        startShopping: "Comenzar Compra",
        copyright: "Todos los derechos reservados.",
        privacyPolicy: "Política de Privacidad",
        termsOfService: "Términos de Servicio",
        shippingInfo: "Información de Envío"
      }
    }
  },
  it: {
    translation: {
      company: {
        name: "Fratelli Sport",
        tagline: "ATTREZZATURA PREMIUM"
      },
      nav: {
        home: "Home",
        products: "Prodotti",
        categories: "Categorie",
        catalog: "Catalogo",
        contact: "Contatto"
      },
      hero: {
        badge: "Attrezzatura Sportiva Premium",
        title: "Creando Eccellenza",
        titleHighlight: "In Ogni Gioco",
        subtitle: "Palloni ad alte prestazioni, guanti del portiere e abbigliamento sportivo realizzati per offrire durata, precisione e qualità professionale in tutto il mondo.",
        shopNow: "Acquista Ora",
        sportsShow: "Show Sportivo",
        qualityGuaranteed: "Qualità Garantita"
      },
      home: {
        featuredBadge: "I Migliori",
        featuredTitle: "Prodotti in Evidenza",
        featuredSubtitle: "Attrezzatura premium scelta da atleti di tutto il mondo per prestazioni e durata",
        viewAllProducts: "Vedi Tutti i Prodotti",
        stats: {
          isoCertified: "Certificato ISO",
          sslSecured: "Protetto SSL",
          verifiedBusiness: "Azienda Verificata",
          qualityAssured: "Qualità Assicurata"
        },
        whyUsBadge: "Perché Noi",
        whyUsTitle: "Perché Scegliere Brother Sports?",
        whyUsSubtitle: "Siamo impegnati a fornire la migliore attrezzatura sportiva ed esperienza di acquisto",
        features: {
          premiumQuality: {
            title: "Qualità Premium",
            description: "Solo l'attrezzatura sportiva di più alta qualità da produttori affidabili."
          },
          wideSelection: {
            title: "Ampia Selezione",
            description: "Sfoglia la nostra vasta collezione di attrezzatura sportiva in più categorie."
          },
          fastShipping: {
            title: "Spedizione Veloce",
            description: "Consegna rapida e affidabile per tornare in gioco più velocemente."
          },
          secureShopping: {
            title: "Acquisto Sicuro",
            description: "Le informazioni di pagamento sono protette con sicurezza standard del settore."
          }
        },
        cta: {
          title: "Pronto a Dominare il Tuo Gioco?",
          subtitle: "Unisciti a Brotherhood Sports e affidati ad attrezzatura premium costruita per prestazioni massime. Inizia il tuo viaggio verso l'eccellenza oggi.",
          shopNow: "Acquista Ora",
          contactUs: "Contattaci"
        }
      },
      footer: {
        companyInfo: "Prodotti sportivi premium progettati per prestazioni, qualità e campioni di tutto il mondo.",
        quickLinks: "Link Rapidi",
        followUs: "Seguici",
        joinAthletes: "🏆 Unisciti a 50,000+ atleti",
        startShopping: "Inizia Acquisto",
        copyright: "Tutti i diritti riservati.",
        privacyPolicy: "Privacy Policy",
        termsOfService: "Termini di Servizio",
        shippingInfo: "Info Spedizione"
      }
    }
  },
  pt: {
    translation: {
      company: {
        name: "Irmãos Esportes",
        tagline: "EQUIPAMENTO PREMIUM"
      },
      nav: {
        home: "Início",
        products: "Produtos",
        categories: "Categorias",
        catalog: "Catálogo",
        contact: "Contato"
      },
      hero: {
        badge: "Equipamento Desportivo Premium",
        title: "Criando Excelência",
        titleHighlight: "Em Cada Jogo",
        subtitle: "Bolas de alto desempenho, luvas de guarda-redes e vestuário desportivo concebidos para oferecer durabilidade, precisão e qualidade profissional em todo o mundo.",
        shopNow: "Comprar Agora",
        sportsShow: "Show Desportivo",
        qualityGuaranteed: "Qualidade Garantida"
      },
      home: {
        featuredBadge: "Os Melhores",
        featuredTitle: "Produtos em Destaque",
        featuredSubtitle: "Equipamento premium escolhido por atletas de todo o mundo por desempenho e durabilidade",
        viewAllProducts: "Ver Todos os Produtos",
        stats: {
          isoCertified: "Certificado ISO",
          sslSecured: "Protegido SSL",
          verifiedBusiness: "Negócio Verificado",
          qualityAssured: "Qualidade Assegurada"
        },
        whyUsBadge: "Por Que Nós",
        whyUsTitle: "Por Que Escolher Brother Sports?",
        whyUsSubtitle: "Estamos comprometidos em fornecer o melhor equipamento desportivo e experiência de compra",
        features: {
          premiumQuality: {
            title: "Qualidade Premium",
            description: "Apenas o equipamento desportivo de mais alta qualidade de fabricantes confiáveis."
          },
          wideSelection: {
            title: "Ampla Seleção",
            description: "Navegue pela nossa vasta coleção de equipamento desportivo em múltiplas categorias."
          },
          fastShipping: {
            title: "Envio Rápido",
            description: "Entrega rápida e confiável para voltar ao jogo mais rápido."
          },
          secureShopping: {
            title: "Compra Segura",
            description: "As informações de pagamento são protegidas com segurança padrão da indústria."
          }
        },
        cta: {
          title: "Pronto para Dominar o Seu Jogo?",
          subtitle: "Junte-se a Brotherhood Sports e confie em equipamento premium construído para desempenho máximo. Comece a sua jornada para a excelência hoje.",
          shopNow: "Comprar Agora",
          contactUs: "Contacte-nos"
        }
      },
      footer: {
        companyInfo: "Produtos desportivos premium projetados para desempenho, qualidade e campeões de todo o mundo.",
        quickLinks: "Links Rápidos",
        followUs: "Siga-nos",
        joinAthletes: "🏆 Junte-se a 50,000+ atletas",
        startShopping: "Iniciar Compra",
        copyright: "Todos os direitos reservados.",
        privacyPolicy: "Política de Privacidade",
        termsOfService: "Termos de Serviço",
        shippingInfo: "Informações de Envio"
      }
    }
  },
  ru: {
    translation: {
      company: {
        name: "Брат Спорт",
        tagline: "ПРЕМИУМ ОБОРУДОВАНИЕ"
      },
      nav: {
        home: "Главная",
        products: "Продукты",
        categories: "Категории",
        catalog: "Каталог",
        contact: "Контакт"
      },
      hero: {
        badge: "Премиальное Спортивное Оборудование",
        title: "Создавая Совершенство",
        titleHighlight: "В Каждой Игре",
        subtitle: "Высокопроизводительные футбольные мячи, перчатки вратаря и спортивная одежда, созданные для обеспечения долговечности, точности и профессионального качества по всему миру.",
        shopNow: "Купить Сейчас",
        sportsShow: "Спортивное Шоу",
        qualityGuaranteed: "Качество Гарантировано"
      },
      home: {
        featuredBadge: "Лучшие Выборы",
        featuredTitle: "Рекомендуемые Продукты",
        featuredSubtitle: "Премиальное оборудование, выбранное спортсменами со всего мира для производительности и долговечности",
        viewAllProducts: "Посмотреть Все Продукты",
        stats: {
          isoCertified: "Сертифицировано ISO",
          sslSecured: "Защищено SSL",
          verifiedBusiness: "Проверенный Бизнес",
          qualityAssured: "Качество Обеспечено"
        },
        whyUsBadge: "Почему Мы",
        whyUsTitle: "Почему Выбрать Brother Sports?",
        whyUsSubtitle: "Мы стремимся предоставить лучшее спортивное оборудование и опыт покупок",
        features: {
          premiumQuality: {
            title: "Премиальное Качество",
            description: "Только спортивное оборудование высшего качества от надежных производителей."
          },
          wideSelection: {
            title: "Широкий Выбор",
            description: "Просмотрите нашу обширную коллекцию спортивного снаряжения по нескольким категориям."
          },
          fastShipping: {
            title: "Быстрая Доставка",
            description: "Быстрая и надежная доставка, чтобы вы вернулись в игру быстрее."
          },
          secureShopping: {
            title: "Безопасные Покупки",
            description: "Ваша платежная информация защищена стандартной безопасностью отрасли."
          }
        },
        cta: {
          title: "Готовы Доминировать в Своей Игре?",
          subtitle: "Присоединяйтесь к Brotherhood Sports и доверьтесь премиальному оборудованию, созданному для максимальной производительности. Начните свой путь к совершенству сегодня.",
          shopNow: "Купить Сейчас",
          contactUs: "Связаться с Нами"
        }
      },
      footer: {
        companyInfo: "Премиальные спортивные продукты, разработанные для производительности, качества и чемпионов по всему миру.",
        quickLinks: "Быстрые Ссылки",
        followUs: "Следите За Нами",
        joinAthletes: "🏆 Присоединяйтесь к 50,000+ спортсменам",
        startShopping: "Начать Покупки",
        copyright: "Все права защищены.",
        privacyPolicy: "Политика Конфиденциальности",
        termsOfService: "Условия Обслуживания",
        shippingInfo: "Информация О Доставке"
      }
    }
  },
  zh: {
    translation: {
      company: {
        name: "兄弟体育",
        tagline: "优质器材"
      },
      nav: {
        home: "首页",
        products: "产品",
        categories: "分类",
        catalog: "目录",
        contact: "联系"
      },
      hero: {
        badge: "优质体育器材",
        title: "打造卓越",
        titleHighlight: "在每一场比赛中",
        subtitle: "高性能足球、守门员手套和运动服装，旨在为全球提供耐用性、精确性和专业质量。",
        shopNow: "立即购买",
        sportsShow: "体育展览",
        qualityGuaranteed: "质量保证"
      },
      home: {
        featuredBadge: "精选推荐",
        featuredTitle: "特色产品",
        featuredSubtitle: "全球运动员选择的优质器材，以性能和耐用性著称",
        viewAllProducts: "查看所有产品",
        stats: {
          isoCertified: "ISO认证",
          sslSecured: "SSL保护",
          verifiedBusiness: "认证企业",
          qualityAssured: "质量保证"
        },
        whyUsBadge: "为什么选择我们",
        whyUsTitle: "为什么选择Brother Sports?",
        whyUsSubtitle: "我们致力于提供最好的体育器材和购物体验",
        features: {
          premiumQuality: {
            title: "优质质量",
            description: "仅来自可信制造商的最高质量体育器材。"
          },
          wideSelection: {
            title: "广泛选择",
            description: "浏览我们跨多个类别的广泛体育器材收藏。"
          },
          fastShipping: {
            title: "快速配送",
            description: "快速可靠的配送，让您更快回到比赛。"
          },
          secureShopping: {
            title: "安全购物",
            description: "您的付款信息受行业标准安全保护。"
          }
        },
        cta: {
          title: "准备好主宰您的比赛了吗?",
          subtitle: "加入Brotherhood Sports，信赖为巅峰性能打造的优质器材。今天就开始您的卓越之旅。",
          shopNow: "立即购买",
          contactUs: "联系我们"
        }
      },
      footer: {
        companyInfo: "为全球性能、质量和冠军设计的优质体育产品。",
        quickLinks: "快速链接",
        followUs: "关注我们",
        joinAthletes: "🏆 加入50,000+运动员",
        startShopping: "开始购物",
        copyright: "版权所有。",
        privacyPolicy: "隐私政策",
        termsOfService: "服务条款",
        shippingInfo: "配送信息"
      }
    }
  },
  fr: {
    translation: {
      company: {
        name: "Frère Sport",
        tagline: "ÉQUIPEMENT PREMIUM"
      },
      nav: {
        home: "Accueil",
        products: "Produits",
        categories: "Catégories",
        catalog: "Catalogue",
        contact: "Contact"
      },
      hero: {
        badge: "Équipement Sportif Premium",
        title: "Créer l'Excellence",
        titleHighlight: "Dans Chaque Jeu",
        subtitle: "Ballons haute performance, gants de gardien et vêtements de sport conçus pour offrir durabilité, précision et qualité professionnelle dans le monde entier.",
        shopNow: "Acheter Maintenant",
        sportsShow: "Show Sportif",
        qualityGuaranteed: "Qualité Garantie"
      },
      home: {
        featuredBadge: "Les Meilleurs",
        featuredTitle: "Produits Vedettes",
        featuredSubtitle: "Équipement premium choisi par des athlètes du monde entier pour la performance et la durabilité",
        viewAllProducts: "Voir Tous les Produits",
        stats: {
          isoCertified: "Certifié ISO",
          sslSecured: "Protégé SSL",
          verifiedBusiness: "Entreprise Vérifiée",
          qualityAssured: "Qualité Assurée"
        },
        whyUsBadge: "Pourquoi Nous",
        whyUsTitle: "Pourquoi Choisir Brother Sports?",
        whyUsSubtitle: "Nous nous engageons à fournir le meilleur équipement sportif et expérience d'achat",
        features: {
          premiumQuality: {
            title: "Qualité Premium",
            description: "Seul l'équipement sportif de la plus haute qualité de fabricants fiables."
          },
          wideSelection: {
            title: "Large Sélection",
            description: "Parcourez notre vaste collection d'équipements sportifs dans plusieurs catégories."
          },
          fastShipping: {
            title: "Expédition Rapide",
            description: "Livraison rapide et fiable pour vous ramener au jeu plus vite."
          },
          secureShopping: {
            title: "Achat Sécurisé",
            description: "Vos informations de paiement sont protégées par une sécurité standard de l'industrie."
          }
        },
        cta: {
          title: "Prêt à Dominer Votre Jeu?",
          subtitle: "Rejoignez Brotherhood Sports et faites confiance à l'équipement premium conçu pour des performances maximales. Commencez votre voyage vers l'excellence aujourd'hui.",
          shopNow: "Acheter Maintenant",
          contactUs: "Contactez-nous"
        }
      },
      footer: {
        companyInfo: "Produits sportifs premium conçus pour la performance, la qualité et les champions du monde entier.",
        quickLinks: "Liens Rapides",
        followUs: "Suivez-nous",
        joinAthletes: "🏆 Rejoignez 50,000+ athlètes",
        startShopping: "Commencer les Achats",
        copyright: "Tous droits réservés.",
        privacyPolicy: "Politique de Confidentialité",
        termsOfService: "Conditions de Service",
        shippingInfo: "Informations d'Expédition"
      }
    }
  },
  de: {
    translation: {
      company: {
        name: "Bruder Sport",
        tagline: "PREMIUM AUSRÜSTUNG"
      },
      nav: {
        home: "Startseite",
        products: "Produkte",
        categories: "Kategorien",
        catalog: "Katalog",
        contact: "Kontakt"
      },
      hero: {
        badge: "Premium Sportausrüstung",
        title: "Exzellenz Schaffen",
        titleHighlight: "In Jedem Spiel",
        subtitle: "Hochleistungs-Fußbälle, Torwart-Handschuhe und Sportbekleidung, die für Haltbarkeit, Präzision und professionelle Qualität weltweit entwickelt wurden.",
        shopNow: "Jetzt Kaufen",
        sportsShow: "Sport-Show",
        qualityGuaranteed: "Qualität Garantiert"
      },
      home: {
        featuredBadge: "Die Besten",
        featuredTitle: "Empfohlene Produkte",
        featuredSubtitle: "Premium-Ausrüstung, die von Athleten weltweit für Leistung und Haltbarkeit gewählt wurde",
        viewAllProducts: "Alle Produkte Anzeigen",
        stats: {
          isoCertified: "ISO-Zertifiziert",
          sslSecured: "SSL-Geschützt",
          verifiedBusiness: "Verifiziertes Geschäft",
          qualityAssured: "Qualität Gesichert"
        },
        whyUsBadge: "Warum Wir",
        whyUsTitle: "Warum Brother Sports Wählen?",
        whyUsSubtitle: "Wir sind bestrebt, die beste Sportausrüstung und Einkaufserfahrung zu bieten",
        features: {
          premiumQuality: {
            title: "Premium Qualität",
            description: "Nur Sportausrüstung höchster Qualität von vertrauenswürdigen Herstellern."
          },
          wideSelection: {
            title: "Große Auswahl",
            description: "Stöbern Sie durch unsere umfangreiche Sammlung von Sportausrüstung in mehreren Kategorien."
          },
          fastShipping: {
            title: "Schneller Versand",
            description: "Schnelle und zuverlässige Lieferung, damit Sie schneller wieder im Spiel sind."
          },
          secureShopping: {
            title: "Sicheres Einkaufen",
            description: "Ihre Zahlungsinformationen sind mit branchenüblicher Sicherheit geschützt."
          }
        },
        cta: {
          title: "Bereit, Ihr Spiel zu Dominieren?",
          subtitle: "Treten Sie Brotherhood Sports bei und vertrauen Sie auf Premium-Ausrüstung für maximale Leistung. Beginnen Sie heute Ihre Reise zur Exzellenz.",
          shopNow: "Jetzt Kaufen",
          contactUs: "Kontaktieren Sie Uns"
        }
      },
      footer: {
        companyInfo: "Premium-Sportprodukte, entwickelt für Leistung, Qualität und Champions weltweit.",
        quickLinks: "Schnelle Links",
        followUs: "Folgen Sie Uns",
        joinAthletes: "🏆 Treten Sie 50,000+ Athleten bei",
        startShopping: "Einkaufen Starten",
        copyright: "Alle Rechte vorbehalten.",
        privacyPolicy: "Datenschutzrichtlinie",
        termsOfService: "Nutzungsbedingungen",
        shippingInfo: "Versandinformationen"
      }
    }
  },
  ja: {
    translation: {
      company: {
        name: "ブラザースポーツ",
        tagline: "プレミアム機器"
      },
      nav: {
        home: "ホーム",
        products: "製品",
        categories: "カテゴリ",
        catalog: "カタログ",
        contact: "お問い合わせ"
      },
      hero: {
        badge: "プレミアムスポーツ機器",
        title: "卓越性の創造",
        titleHighlight: "すべての試合で",
        subtitle: "世界中で耐久性、正確性、プロ品質を提供するために作られた高性能サッカーボール、ゴールキーパーグローブ、スポーツウェア。",
        shopNow: "今すぐ購入",
        sportsShow: "スポーツショー",
        qualityGuaranteed: "品質保証"
      },
      home: {
        featuredBadge: "トップピック",
        featuredTitle: "注目製品",
        featuredSubtitle: "パフォーマンスと耐久性のために世界中のアスリートに選ばれたプレミアム機器",
        viewAllProducts: "すべての製品を見る",
        stats: {
          isoCertified: "ISO認証",
          sslSecured: "SSL保護",
          verifiedBusiness: "認定ビジネス",
          qualityAssured: "品質保証"
        },
        whyUsBadge: "なぜ私たちか",
        whyUsTitle: "なぜBrother Sportsを選ぶのか?",
        whyUsSubtitle: "最高のスポーツ機器とショッピング体験を提供することにコミットしています",
        features: {
          premiumQuality: {
            title: "プレミアム品質",
            description: "信頼できるメーカーからの最高品質のスポーツ機器のみ。"
          },
          wideSelection: {
            title: "広範な選択",
            description: "複数のカテゴリにわたる当社の広範なスポーツギアコレクションを閲覧してください。"
          },
          fastShipping: {
            title: "迅速な配送",
            description: "より早くゲームに戻るための迅速で信頼性の高い配達。"
          },
          secureShopping: {
            title: "安全なショッピング",
            description: "お支払い情報は業界標準のセキュリティで保護されています。"
          }
        },
        cta: {
          title: "あなたのゲームを支配する準備はできていますか?",
          subtitle: "Brotherhood Sportsに参加し、最高のパフォーマンスのために作られたプレミアムギアを信頼してください。今日から卓越性への旅を始めましょう。",
          shopNow: "今すぐ購入",
          contactUs: "お問い合わせ"
        }
      },
      footer: {
        companyInfo: "世界中のパフォーマンス、品質、チャンピオンのために設計されたプレミアムスポーツ製品。",
        quickLinks: "クイックリンク",
        followUs: "フォローする",
        joinAthletes: "🏆 50,000人以上のアスリートに参加",
        startShopping: "ショッピングを開始",
        copyright: "全著作権所有。",
        privacyPolicy: "プライバシーポリシー",
        termsOfService: "利用規約",
        shippingInfo: "配送情報"
      }
    }
  }
};

const rtlLanguages = ['ar', 'ur'];

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('language') || 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

// Set document direction based on language
const setDocumentDirection = (lng) => {
  const isRTL = rtlLanguages.includes(lng);
  document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  document.documentElement.lang = lng;
};

setDocumentDirection(i18n.language);

// Listen for language changes
i18n.on('languageChanged', (lng) => {
  setDocumentDirection(lng);
});

export default i18n;

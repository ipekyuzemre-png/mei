import {
  Monitor,
  Share2,
  Search,
  Palette,
  Target,
  Lightbulb,
  Rocket,
  Shield,
  Globe,
  MessageCircle,
  Link2,
  TrendingUp,
  Users,
  Award,
  Zap,
} from "lucide-react";

/**
 * MEI YAZILIM - Next.js Premium Agency Template Configuration
 * 
 * You can easily update all site content, images, and links from this single file.
 * Icons are imported from 'lucide-react'. You can find more icons at: https://lucide.dev/icons/
 */

export const siteConfig = {
  // ---------------------------------------------------------
  // GLOBAL SETTINGS
  // ---------------------------------------------------------
  name: "Rengin Yazılım",
  shortName: "MEI",
  description: "Sıradan şablonları unutun. Markanızı dijitalde bir adım öne taşıyacak stratejik, estetik ve yüksek performanslı dijital başyapıtlar tasarlıyoruz.",
  author: "Rengin Yazılım",

  // ---------------------------------------------------------
  // NAVIGATION
  // ---------------------------------------------------------
  navLinks: [
    { name: "Ana Sayfa", href: "/" },
    { name: "Hizmetlerimiz", href: "/#services" },
    { name: "Projelerimiz", href: "/#portfolio" },
    { name: "Hakkımızda", href: "/#about" },
    { name: "Rehber (Blog)", href: "/blog" },
    { name: "İletişim", href: "/#contact" },
  ],

  // ---------------------------------------------------------
  // HERO SECTION
  // ---------------------------------------------------------
  hero: {
    titleLine1: "Güçlü Dijital",
    titleLine2: "Markalar Yaratıyoruz.",
    description: "Sıradan şablonları unutun. İşletmenizi ulusal ve global pazarda dijitalde zirveye taşıyacak premium web tasarım ve yazılım çözümleri üretiyoruz.",
    primaryButtonText: "Projelerimiz",
    primaryButtonHref: "#portfolio",
    secondaryButtonText: "Bize Ulaşın",
    secondaryButtonHref: "#contact",
    mockupImage: "/hero_mockup_en.webp",
    mockupAlt: "Rengin Yazılım Dashboard Paneli",
  },

  // ---------------------------------------------------------
  // SERVICES SECTION
  // ---------------------------------------------------------
  servicesHeader: {
    badge: "Uzmanlık Alanlarımız",
    title: "Sınırları Zorlayan",
    highlight: "Dijital Çözümler",
    description: "İhtiyaçlarınıza özel, yüksek performanslı ve tamamen özelleştirilmiş kurumsal web ve yazılım çözümleri sunuyoruz.",
  },
  services: [
    {
      icon: Monitor,
      title: "Web Tasarım & Yazılım",
      description: "Modern teknolojiler ve kusursuz arayüzlerle markanızı dijital dünyada farklı kılan premium web siteleri tasarlıyoruz.",
      tags: ["Next.js", "React", "Tasarım"],
      image: "/services/web.webp",
    },
    {
      icon: Shield,
      title: "Özel Yazılım & Otomasyon",
      description: "Avukatlık büroları, klinikler ve KOBİ'ler için iş süreçlerini hızlandıran, güvenli ve tamamen size özel yazılım çözümleri.",
      tags: ["SaaS", "Entegrasyon", "Otomasyon"],
      image: "/services/custom_software.webp",
    },
    {
      icon: Search,
      title: "Yerel SEO & Veri Analitiği",
      description: "Sadece güzel görünmeyen, aynı zamanda sizi Google'da üst sıralara taşıyıp sektörünüzde müşteri sayınızı artıran organik büyüme stratejileri.",
      tags: ["Büyüme", "SEO", "Analiz"],
      image: "/services/seo.webp",
    },
    {
      icon: Palette,
      title: "Kurumsal Kimlik",
      description: "Markanızın ruhunu yansıtan, akılda kalıcı ve vizyoner kurumsal kimlikler oluşturarak dijital otoritenizi tesis ediyoruz.",
      tags: ["Logo", "Markalaşma", "Vizyon"],
      image: "/services/branding.webp",
    },
  ],

  // ---------------------------------------------------------
  // PORTFOLIO SECTION
  // ---------------------------------------------------------
  portfolioHeader: {
    badge: "Portfolyo",
    title: "Sizi Yansıtan",
    highlight: "Özel Projeler",
    description: "Müşterilerimiz için tasarladığımız estetik, kullanıcı odaklı ve performansı yüksek dijital başyapıtlar.",
  },
  projects: [
    {
      title: "Lux Resort & Spa",
      category: "Kurumsal Web",
      description: "5 yıldızlı otel zinciri için lüks kurumsal web tasarımı ve rezervasyon sistemi.",
      longDescription: "Lux Resort & Spa, fiziksel otellerindeki lüks hissiyatını dijital varlıklarına da taşımak istedi. Eski siteleri yavaştı, mobil uyumlu değildi ve rezervasyon süreci karmaşıktı.",
      challenge: "Misafirlerin tek tıkla oda bulmasını sağlamak ve otelin premium imajını dijital ortamda kusursuzca yansıtmak.",
      result: "Rezervasyon dönüşüm oranlarında %150, sayfada kalma süresinde 3 kat artış elde edildi.",
      image: "/portfolio/project1.webp",
      demoUrl: "/demos/lux-resort",
      tags: ["Next.js", "Tailwind CSS", "Strapi"],
    },
    {
      title: "Maison Couture",
      category: "E-Ticaret",
      description: "Premium bir moda markası için yüksek performanslı online mağaza altyapısı.",
      longDescription: "Maison Couture küresel pazara açılırken mevcut altyapıları yüksek trafiği kaldıramadı ve kullanıcı deneyimi marka kalitesinin altında kaldı.",
      challenge: "Saniyeler içinde yüklenen ve pürüzsüz animasyonlara sahip, küresel ölçekte güvenli bir ödeme altyapısı kurmak.",
      result: "Sıfır çökme ile Black Friday rekorları kırıldı ve ilk çeyrekte uluslararası satışlar %200 arttı.",
      image: "/portfolio/project2.webp",
      demoUrl: "/demos/maison-couture",
      tags: ["React", "Node.js", "Stripe"],
    },
    {
      title: "FinTrack Analytics",
      category: "SaaS Paneli",
      description: "Fintech girişimleri için modern ve kullanıcı dostu veri analitiği arayüzü.",
      longDescription: "Karmaşık finansal verileri anlaşılır kılmak FinTrack'in en büyük zorluğuydu. Mevcut panelleri çok karışık ve yavaştı.",
      challenge: "Milyonlarca satır veriyi gerçek zamanlı işleyip, kasmayan, estetik bir grafiksel arayüzde sunmak.",
      result: "Kullanıcı etkileşimi %400 arttı ve müşteri şikayetleri sıfıra indi.",
      image: "/portfolio/project3.webp",
      demoUrl: "/demos/fintrack",
      tags: ["TypeScript", "D3.js", "PostgreSQL"],
    },
    {
      title: "Noir Gastronomy",
      category: "Restoran Web",
      description: "Fine-dining bir restoran için rezervasyon destekli, zarif bir web sitesi.",
      longDescription: "Ödüllü bir fine-dining restoranı olan Noir, menülerini misafirlerine etkileşimli ve iştah açıcı bir şekilde sunmak istedi.",
      challenge: "Performanstan ödün vermeden görsel açıdan ağır bir tasarım kurgulamak ve entegre bir masa rezervasyon sistemi kurmak.",
      result: "Aylık online rezervasyonlarda %85 artış ve sosyal medyada viral olan bir tasarım.",
      image: "/portfolio/project4.webp",
      demoUrl: "/demos/noir",
      tags: ["WordPress", "PHP", "MySQL"],
    },
  ],

  // ---------------------------------------------------------
  // STATS SECTION
  // ---------------------------------------------------------
  stats: [
    { icon: TrendingUp, value: 450, suffix: "+", label: "Teslim Edilen Proje" },
    { icon: Users, value: 200, suffix: "+", label: "Mutlu Müşteri" },
    { icon: Award, value: 15, suffix: "+", label: "Sektörel Ödül" },
    { icon: Zap, value: 99, suffix: "%", label: "Müşteri Memnuniyeti" },
  ],

  // ---------------------------------------------------------
  // ABOUT SECTION
  // ---------------------------------------------------------
  aboutHeader: {
    badge: "Neden Biz?",
    title: "Dijital Dünyada",
    highlight: "Premium Standartlar",
    description: "Rengin Yazılım olarak sadece kod yazmıyoruz; markanızın vizyonunu dijitalde hayata geçiriyoruz. Standart şablonlara veda edin.",
  },
  aboutText: "Estetik kaygımız, derin teknik uzmanlığımız ve farklı olma cesaretimizle her projede sınırları zorluyoruz. Türkiye genelindeki ve globaldeki müşterilerimiz bizi sadece bir yazılım firması değil, yenilikçi bir teknoloji ortağı olarak görüyor.",
  visionItems: [
    {
      icon: Target,
      title: "Odak Noktası",
      text: "Her projeye markanızın DNA'sını ve hedef kitlenizi derinlemesine anlayarak başlıyoruz.",
      image: "/about/target.webp",
    },
    {
      icon: Lightbulb,
      title: "Yenilikçi Vizyon",
      text: "En son teknolojileri, oyunu değiştiren modern tasarımlarla harmanlıyoruz.",
      image: "/about/lightbulb.webp",
    },
    {
      icon: Rocket,
      title: "Hızlı Teslimat",
      text: "Modern araçlar kullanarak, zamanında, kusursuz ve esnek çözümler üretiyoruz.",
      image: "/about/rocket.webp",
    },
    {
      icon: Shield,
      title: "Güvenilirlik",
      text: "Projeleriniz bizimle güvende. Proje yayına girdikten sonra da yanınızdayız.",
      image: "/about/shield.webp",
    },
  ],

  // ---------------------------------------------------------
  // CONTACT SECTION
  // ---------------------------------------------------------
  contactHeader: {
    badge: "İletişim",
    title: "Projenizi Birlikte",
    highlight: "Hayata Geçirelim",
    description: "Size nasıl yardımcı olabileceğimizi öğrenmek ve özel fiyat teklifi almak için aşağıdaki formu doldurun.",
  },
  serviceOptions: [
    "Kurumsal Web Tasarım",
    "Özel Yazılım Geliştirme",
    "E-Ticaret Çözümleri",
    "Marka Stratejisi",
    "SEO & Veri Analitiği",
  ],

  // ---------------------------------------------------------
  // FOOTER SECTION
  // ---------------------------------------------------------
  contactInfo: {
    email: "iletisim@renginyazilim.com",
    phone: "+90 (530) 832-1395",
    address: "Ay Center- Talaytepe, Laleş Blv., 21070 Kayapınar/Diyarbakır",
  },
  socialLinks: [
    { icon: Globe, href: "https://www.renginyazilim.com", label: "Website" },
    { icon: MessageCircle, href: "https://wa.me/905308321395", label: "WhatsApp" },
    { icon: Share2, href: "https://instagram.com", label: "Instagram" },
    { icon: Link2, href: "https://linkedin.com", label: "LinkedIn" },
  ],
  footerLinks: [
    {
      title: "Hizmetlerimiz",
      links: [
        { name: "Web Tasarım", href: "#services" },
        { name: "Özel Yazılım", href: "#services" },
        { name: "E-Ticaret", href: "#services" },
        { name: "SEO ve Analiz", href: "#services" },
      ],
    },
    {
      title: "Kurumsal",
      links: [
        { name: "Hakkımızda", href: "#about" },
        { name: "Projelerimiz", href: "#portfolio" },
        { name: "Süreçlerimiz", href: "#services" },
        { name: "Müşteri Yorumları", href: "#about" },
        { name: "Bize Ulaşın", href: "#contact" },
      ],
    },
    {
      title: "Kaynaklar",
      links: [
        { name: "Sıkça Sorulan Sorular", href: "/faq" },
        { name: "Gizlilik Politikası", href: "/privacy" },
        { name: "Hizmet Şartları", href: "/terms" },
        { name: "Çerez Politikası", href: "/privacy" },
        { name: "Site Haritası", href: "#hero" },
      ],
    },
  ],
};

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
  name: "MEI Template",
  shortName: "MEI",
  description: "Forget ordinary templates. We design strategic, aesthetic, and high-performance digital masterpieces that will take your brand one step ahead.",
  author: "MEI Template",

  // ---------------------------------------------------------
  // NAVIGATION
  // ---------------------------------------------------------
  navLinks: [
    { name: "Home", href: "#hero" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ],

  // ---------------------------------------------------------
  // HERO SECTION
  // ---------------------------------------------------------
  hero: {
    titleLine1: "We Create Strong",
    titleLine2: "Digital Brands.",
    description: "Forget ordinary templates. We design strategic, aesthetic, and high-performance digital masterpieces that will take your brand one step ahead.",
    primaryButtonText: "Our Work",
    primaryButtonHref: "#portfolio",
    secondaryButtonText: "Let's Talk",
    secondaryButtonHref: "#contact",
    mockupImage: "/hero_mockup_en.webp",
    mockupAlt: "Mei Yazılım Dashboard Showcase",
  },

  // ---------------------------------------------------------
  // SERVICES SECTION
  // ---------------------------------------------------------
  servicesHeader: {
    badge: "Our Expertise",
    title: "Boundary Pushing",
    highlight: "Digital Solutions",
    description: "We offer premium, high-performance, and fully customized solutions tailored to your unique needs.",
  },
  services: [
    {
      icon: Monitor,
      title: "Web Design & Development",
      description: "We design premium websites that distinguish your brand in the digital world with modern technologies and flawless interfaces.",
      tags: ["Next.js", "React", "Design"],
      image: "/services/web.webp",
    },
    {
      icon: Share2,
      title: "Social Media Management",
      description: "We amplify your brand's digital voice and build organic connections with your target audience through creative content.",
      tags: ["Content", "Strategy", "Engagement"],
      image: "/services/social.webp",
    },
    {
      icon: Search,
      title: "SEO & Data Analytics",
      description: "Strategies that don't just look good, but increase your visibility on Google and drive data-backed growth.",
      tags: ["Growth", "SEO", "Analytics"],
      image: "/services/seo.webp",
    },
    {
      icon: Palette,
      title: "Brand Identity",
      description: "Establishing your digital authority by creating memorable and visionary brand identities that reflect your brand's soul.",
      tags: ["Logo", "Branding", "Vision"],
      image: "/services/branding.webp",
    },
  ],

  // ---------------------------------------------------------
  // PORTFOLIO SECTION
  // ---------------------------------------------------------
  portfolioHeader: {
    badge: "Portfolio",
    title: "Projects that",
    highlight: "Reflect You",
    description: "Aesthetic and user-centric digital masterpieces we have designed for our clients.",
  },
  projects: [
    {
      title: "Lux Resort & Spa",
      category: "Corporate Web",
      description: "Luxury corporate web design and booking system for a 5-star hotel chain.",
      longDescription: "Lux Resort & Spa wanted to match their digital assets with the luxury feel of their physical hotels. Their old site was slow, not mobile-friendly, and the booking process was complicated.",
      challenge: "Allowing guests to find a room with a single click and reflecting the hotel's premium image flawlessly in the digital space.",
      result: "Achieved a 150% increase in booking conversion rates and a 3x increase in time spent on the page.",
      image: "/portfolio/project1.webp",
      demoUrl: "/demos/lux-resort",
      tags: ["Next.js", "Tailwind CSS", "Strapi"],
    },
    {
      title: "Maison Couture",
      category: "E-Commerce",
      description: "High-performance online store platform for a premium fashion brand.",
      longDescription: "As Maison Couture expanded into the global market, their existing infrastructure couldn't handle the high traffic, and the user experience fell short of their brand quality.",
      challenge: "Building a globally secure payment infrastructure that loads in seconds and features smooth animations.",
      result: "Broke Black Friday records with zero crashes and increased international sales by 200% in the first quarter.",
      image: "/portfolio/project2.webp",
      demoUrl: "/demos/maison-couture",
      tags: ["React", "Node.js", "Stripe"],
    },
    {
      title: "FinTrack Analytics",
      category: "SaaS Dashboard",
      description: "Modern and user-friendly data analytics interface for fintech startups.",
      longDescription: "Making complex financial data understandable was FinTrack's biggest challenge. Their existing dashboards were too cluttered and slow.",
      challenge: "Processing millions of rows of data in real-time and presenting them in a lag-free, aesthetic graphical interface.",
      result: "User engagement increased by 400% and customer complaints dropped to zero.",
      image: "/portfolio/project3.webp",
      demoUrl: "/demos/fintrack",
      tags: ["TypeScript", "D3.js", "PostgreSQL"],
    },
    {
      title: "Noir Gastronomy",
      category: "Restaurant Web",
      description: "Elegant website with booking support for a fine-dining restaurant.",
      longDescription: "Noir, an award-winning fine-dining restaurant, wanted to present their menu to guests in an interactive and appetizing way.",
      challenge: "Constructing a visually heavy design without compromising performance and creating an integrated table reservation system.",
      result: "An 85% increase in monthly online reservations and viral design shares on social media.",
      image: "/portfolio/project4.webp",
      demoUrl: "/demos/noir",
      tags: ["WordPress", "PHP", "MySQL"],
    },
  ],

  // ---------------------------------------------------------
  // STATS SECTION
  // ---------------------------------------------------------
  stats: [
    { icon: TrendingUp, value: 450, suffix: "+", label: "Projects Delivered" },
    { icon: Users, value: 200, suffix: "+", label: "Global Clients" },
    { icon: Award, value: 15, suffix: "+", label: "Industry Awards" },
    { icon: Zap, value: 99, suffix: "%", label: "Client Retention" },
  ],

  // ---------------------------------------------------------
  // ABOUT SECTION
  // ---------------------------------------------------------
  aboutHeader: {
    badge: "Why Us?",
    title: "Premium Standards",
    highlight: "in the Digital World",
    description: "At MEI, we don't just write code; we bring your brand's vision to life digitally. Say goodbye to standard templates.",
  },
  aboutText: "With our aesthetic concern, deep technical expertise, and courage to be different, we push boundaries in every project. Most of our clients see us as an innovative technology partner rather than just a software company.",
  visionItems: [
    {
      icon: Target,
      title: "Focal Point",
      text: "We start every project by thoroughly understanding your brand's DNA.",
      image: "/about/target.webp",
    },
    {
      icon: Lightbulb,
      title: "Innovative Vision",
      text: "We blend the latest technologies with game-changing designs.",
      image: "/about/lightbulb.webp",
    },
    {
      icon: Rocket,
      title: "Fast Delivery",
      text: "We produce flexible, timely, and flawless work using modern tools.",
      image: "/about/rocket.webp",
    },
    {
      icon: Shield,
      title: "Reliability",
      text: "Your projects are safe with us. We stand by you even after launch.",
      image: "/about/shield.webp",
    },
  ],

  // ---------------------------------------------------------
  // CONTACT SECTION
  // ---------------------------------------------------------
  contactHeader: {
    badge: "Contact",
    title: "Let's Bring Your",
    highlight: "Project to Life",
    description: "Fill out the form below to learn how we can help you and to get a custom quote.",
  },
  serviceOptions: [
    "Web Development",
    "UI/UX Design",
    "E-Commerce Solutions",
    "Brand Strategy",
    "SEO & Analytics",
  ],

  // ---------------------------------------------------------
  // FOOTER SECTION
  // ---------------------------------------------------------
  contactInfo: {
    email: "info@meiyazilim.com",
    phone: "+1 (555) 123-4567",
    address: "USA",
  },
  socialLinks: [
    { icon: Globe, href: "https://example.com", label: "Website" },
    { icon: MessageCircle, href: "https://wa.me/15551234567", label: "WhatsApp" },
    { icon: Share2, href: "https://twitter.com", label: "Twitter" },
    { icon: Link2, href: "https://linkedin.com", label: "LinkedIn" },
  ],
  footerLinks: [
    {
      title: "Services",
      links: [
        { name: "Web Development", href: "#services" },
        { name: "UI/UX Design", href: "#services" },
        { name: "E-Commerce Solutions", href: "#services" },
        { name: "Brand Strategy", href: "#services" },
        { name: "SEO & Analytics", href: "#services" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#about" },
        { name: "Our Work", href: "#portfolio" },
        { name: "Our Process", href: "#services" },
        { name: "Testimonials", href: "#about" },
        { name: "Contact Us", href: "#contact" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "FAQ", href: "/faq" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Cookie Policy", href: "/privacy" },
        { name: "Sitemap", href: "#hero" },
      ],
    },
  ],
};

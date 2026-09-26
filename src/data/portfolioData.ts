import { Project, projects } from "./projects";
export type { Project };
export { projects };

export interface Experience {
  id?: string;
  period: string | { es: string; en: string };
  role: string | { es: string; en: string };
  company: string;
  description: string | { es: string; en: string };
  technologies: string[];
  current?: boolean;
  highlights?: (string | { es: string; en: string })[];
}

export interface Testimonial {
  quote: string | { es: string; en: string };
  author: string;
  role: string | { es: string; en: string };
  avatarInitials: string;
}

export interface Article {
  title: string | { es: string; en: string };
  excerpt: string | { es: string; en: string };
  date: string | { es: string; en: string };
  readTime: string | { es: string; en: string };
  category: string;
  url: string;
}

export const portfolioData = {
  personal: {
    name: "Steven Rosales",
    handle: "steven.dev",
    role: "Full Stack Developer & Software Architect",
    statusText: "open to work",
    isOpenToWork: true,
    bio: "I build fast, scalable, and resilient web applications end to end — from robust backend database architectures to pixel-perfect, futuristic user interfaces.",
    location: "Santa Elena, Ecuador",
    timezone: "America/Guayaquil",
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "stevenrosales31@gmail.com",
    github: "https://github.com/StevenRosalesC",
    linkedin: "https://www.linkedin.com/in/steven-rosales-dev/",
    cvUrl: process.env.NEXT_PUBLIC_CV_URL || "https://drive.google.com/file/d/120HUgq8Iu5_Ku5tOplqrzQibJa5CT3Wv/view?usp=sharing",
    stats: [
      { label: "Years Experience", value: "3+" },
      { label: "Projects Shipped", value: "15+" },
      { label: "Git Commits", value: "2.4k+" },
      { label: "Uptime & Quality", value: "99.9%" },
    ],
  },

  aboutTerminal: {
    name: "Steven Rosales",
    role: "Full Stack Developer",
    location: "Santa Elena, Ecuador",
    status: "Available for high-impact roles & projects",
    coreSkills: [
      "Next.js",
      "TypeScript",
      "React",
      "Node.js",
      "NestJS",
      "PostgreSQL",
      "Tailwind CSS",
      "Docker"
    ],
    philosophy: "Clean code, scalable architecture, and obsessed with user experience."
  },

  techStack: [
    {
      category: "Languages",
      accent: "cyan",
      items: [
        { name: "TypeScript", level: "Advanced", icon: "Code2" },
        { name: "JavaScript", level: "Advanced", icon: "FileCode" },
        { name: "Python", level: "Intermediate", icon: "Terminal" },
        { name: "PHP", level: "Intermediate", icon: "FileText" },
        { name: "SQL", level: "Advanced", icon: "Database" },
        { name: "HTML / CSS", level: "Advanced", icon: "Layout" },
      ],
    },
    {
      category: "Frontend & UI",
      accent: "violet",
      items: [
        { name: "Next.js", level: "Advanced", icon: "Boxes" },
        { name: "React 19", level: "Advanced", icon: "Atom" },
        { name: "Tailwind CSS", level: "Advanced", icon: "Palette" },
        { name: "shadcn/ui", level: "Advanced", icon: "Component" },
        { name: "Framer Motion", level: "Intermediate", icon: "Sparkles" },
      ],
    },
    {
      category: "Backend & Systems",
      accent: "emerald",
      items: [
        { name: "Node.js", level: "Advanced", icon: "Server" },
        { name: "NestJS", level: "Advanced", icon: "Cpu" },
        { name: "Express", level: "Advanced", icon: "Layers" },
        { name: "Laravel", level: "Intermediate", icon: "Workflow" },
        { name: "REST & GraphQL", level: "Advanced", icon: "Network" },
      ],
    },
    {
      category: "Database & DevOps",
      accent: "pink",
      items: [
        { name: "PostgreSQL", level: "Advanced", icon: "Database" },
        { name: "MongoDB", level: "Advanced", icon: "HardDrive" },
        { name: "Docker", level: "Intermediate", icon: "Container" },
        { name: "Git & GitHub", level: "Advanced", icon: "GitBranch" },
        { name: "Linux / Bash", level: "Advanced", icon: "Terminal" },
      ],
    },
  ],

  projects,

  experience: [
    {
      id: "kickersoft-lead",
      period: {
        es: "Ene 2025 — Presente",
        en: "Jan 2025 — Present",
      },
      role: {
        es: "Ingeniero Full Stack Senior & Móvil",
        en: "Senior Full Stack & Mobile Engineer",
      },
      company: "Kickersoft SAS",
      description: {
        es: "Liderazgo técnico en la arquitectura y entrega de plataformas web y móviles de alto impacto. Diseño de aplicaciones móviles en producción con React Native y Expo, portales de alto tráfico con SEO dinámico a gran escala vía Headless CMS, plataformas de ticketing y facturación B2B con Laravel/Filament, y orquestación de sistemas de pruebas QA.",
        en: "Technical leadership in the architecture and delivery of high-impact web and mobile platforms. Built production mobile apps with React Native & Expo, architected large-scale dynamic SEO portals with Headless CMS, engineered B2B ticketing and financial systems with Laravel Filament, and designed QA testing dashboards.",
      },
      highlights: [
        {
          es: "App Móvil de Suscripciones: Arquitectura en React Native (Expo) con Stripe Mobile, caché offline-first con SWR y resolución de invalidación de caché en iOS.",
          en: "Mobile Subscription App: React Native (Expo) architecture with Stripe Mobile SDK, offline-first SWR caching, and iOS cache invalidation fixes.",
        },
        {
          es: "Portal Inmobiliario & SEO Dinámico: Generación automatizada de sitemaps XML y metadatos Open Graph a escala para miles de propiedades conectadas a Headless CMS.",
          en: "Real Estate Portal & Dynamic SEO: Automated large-scale XML sitemaps and Open Graph metadata for thousands of listings integrated with Headless CMS.",
        },
        {
          es: "Plataforma B2B de Eventos y Facturación: Frontend dinámico en Next.js integrado con panel administrativo en Laravel Filament, cálculo de balances, pagos parciales y exportación PDF.",
          en: "B2B Events & Invoicing Platform: Dynamic Next.js frontend integrated with Laravel Filament admin panel, handling balance calculations, partial payments, and PDF invoicing.",
        },
        {
          es: "Dashboard de QA y Testing: Panel de control reactivo para gestión de sesiones de prueba con tipado estricto de rutas y filtrado reactivo de alta velocidad.",
          en: "QA & Testing Dashboard: Reactive management dashboard for testing sessions with strict route typing and high-speed reactive filtering.",
        },
      ],
      technologies: ["Next.js", "React Native", "Expo", "TypeScript", "Laravel", "Filament", "Stripe API", "PostgreSQL", "Tailwind CSS"],
      current: true,
    },
    {
      id: "kickersoft-fullstack",
      period: {
        es: "Ene 2024 — Dic 2024",
        en: "Jan 2024 — Dec 2024",
      },
      role: {
        es: "Desarrollador Full Stack",
        en: "Full Stack Developer",
      },
      company: "Kickersoft SAS",
      description: {
        es: "Diseño y construcción de microservicios backend, pipelines de ingesta masiva de catálogos de retail, widgets transaccionales embebibles y pasarelas de pago recurrentes.",
        en: "Designed and built backend microservices, high-volume retail catalogue ingestion pipelines, embeddable transactional widgets, and recurring billing architectures.",
      },
      highlights: [
        {
          es: "Motor Comparador de Precios: Arquitectura en NestJS y MongoDB con DTOs estrictos, middlewares de integridad y pipelines de seeding masivo de productos.",
          en: "Price Comparison Engine: NestJS and MongoDB architecture with strict DTO validation, persistence integrity middlewares, and mass data ingestion pipelines.",
        },
        {
          es: "Arquitectura de Suscripciones y Pagos: Integración integral de Stripe Billing con webhooks idempotentes, gestión del ciclo de cobro y sincronización en tiempo real.",
          en: "Subscription & Payments Architecture: Stripe Billing integration with idempotent webhook handlers, charge lifecycle tracking, and real-time database sync.",
        },
        {
          es: "Widget Embebible de Reservas: Motor de disponibilidad y reserva en tiempo real con Next.js/React, estados asíncronos resilientes y carga sub-segundo en sitios terceros.",
          en: "Embeddable Booking Widget: Real-time availability and booking widget in Next.js/React with resilient async state and sub-second load times.",
        },
        {
          es: "Dashboard Analítico de Mercado: Interfaz reactiva con drawers laterales para edición de catálogos en caliente y filtros temporales de alta precisión.",
          en: "Market Analytics Dashboard: Reactive interface featuring side drawers for live catalogue editing and precision date-range temporal filtering.",
        },
      ],
      technologies: ["NestJS", "Node.js", "TypeScript", "React", "MongoDB", "Prisma ORM", "Stripe", "Supabase", "Tailwind CSS"],
      current: false,
    },
  ] as Experience[],

  recentActivity: [
    {
      type: "merge",
      title: "Merged PR in core e-commerce engine",
      details: "Optimized server-side caching and reduced payload size by 35%.",
      time: "2 hours ago",
    },
    {
      type: "release",
      title: "Deployed v2.4.0 of Gym Donde Sea",
      details: "Integrated responsive analytics charts and PWA offline storage.",
      time: "1 day ago",
    },
    {
      type: "commit",
      title: "Refactored PostgreSQL migration indexes",
      details: "Eliminated sequential table scans on frequent order queries.",
      time: "3 days ago",
    },
    {
      type: "pr",
      title: "Built reusable Bento Grid component library",
      details: "Published customizable HUD and spotlight cards.",
      time: "5 days ago",
    },
  ],

  testimonials: [
    {
      quote: {
        es: "Steven entregó nuestra plataforma de e-commerce antes de tiempo con una arquitectura limpia y altamente mantenible. Su enfoque en UX y rendimiento es de primer nivel.",
        en: "Steven delivered our e-commerce platform ahead of schedule with clean, maintainable architecture. His attention to UX and performance is exceptional.",
      },
      author: "Carlos Mendoza",
      role: {
        es: "Product Manager @ RetailTech",
        en: "Product Manager @ RetailTech",
      },
      avatarInitials: "CM",
    },
    {
      quote: {
        es: "Uno de los pocos desarrolladores que domina profundamente tanto la robustez lógica del backend como el diseño píxel a píxel. Trabajar con Steven es garantía de éxito.",
        en: "One of the few developers who deeply understands both robust backend logic and pixel-perfect design. Working with Steven is a breeze.",
      },
      author: "David Santos",
      role: {
        es: "Arquitecto Líder @ Studio Loop",
        en: "Lead Architect @ Studio Loop",
      },
      avatarInitials: "DS",
    },
    {
      quote: {
        es: "Su dominio de los flujos de trabajo full-stack modernos transformó la velocidad de nuestra aplicación. La calidad del código y la documentación fueron impecables.",
        en: "His command of modern full-stack workflows transformed our app speed. The code quality and documentation were top tier.",
      },
      author: "Elena Rostova",
      role: {
        es: "Fundadora @ PulseDigital",
        en: "Founder @ PulseDigital",
      },
      avatarInitials: "ER",
    },
  ] as Testimonial[],

  articles: [
    {
      title: {
        es: "Arquitectura de Aplicaciones Modernas con Next.js y Turbopack",
        en: "Architecting Modern Next.js Applications with Turbopack",
      },
      excerpt: {
        es: "Análisis profundo sobre server components, estrategias de caché agresivas e hidratación ultrarrápida del cliente.",
        en: "A deep dive into server components, aggressive caching strategies, and ultra-fast client hydration.",
      },
      date: "Sep 2026",
      readTime: "6 min",
      category: "Architecture",
      url: "#",
    },
    {
      title: {
        es: "Diseño de Esquemas Postgres Resilientes para SaaS de Alta Carga",
        en: "Designing Resilient Postgres Schemas for High-Load SaaS",
      },
      excerpt: {
        es: "Patrones prácticos de indexación, trucos de connection pooling y optimización de consultas concurrentes.",
        en: "Practical indexing patterns, connection pooling tricks, and query optimization for growing databases.",
      },
      date: "Ago 2026",
      readTime: "8 min",
      category: "Database",
      url: "#",
    },
    {
      title: {
        es: "El Arte del Bento Grid: UI Minimalista para Desarrolladores",
        en: "The Art of the Bento Grid: Minimalist UI for Developers",
      },
      excerpt: {
        es: "Cómo equilibrar jerarquía visual, glassmorphism oscuro y accesibilidad en el diseño de portafolios modernos.",
        en: "How to balance visual hierarchy, dark glassmorphism, and accessibility in modern portfolio design.",
      },
      date: "Jul 2026",
      readTime: "5 min",
      category: "UI/UX",
      url: "#",
    },
  ] as Article[],
};

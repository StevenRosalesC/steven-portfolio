export interface Project {
  id: string; // Unique identifier or repo slug (e.g. "bambil-shoes-store")
  title: string | { es: string; en: string }; // Display title of the project
  description: string | { es: string; en: string }; // Clear description of features, problem solved, and architecture
  category: "Full Stack" | "Frontend" | "Backend & DevOps" | "Tools" | "Mobile";
  tags: string[]; // Technologies used (e.g. ["Next.js", "TypeScript", "Tailwind CSS"])
  technologies?: string[]; // Alias for tags for robust access
  language?: string; // Primary language (e.g. "TypeScript", "Python", "JavaScript")
  languageColor?: string; // Tailwind color class or hex for the indicator dot (e.g. "bg-blue-400")
  stars?: number;
  forks?: number;
  featured?: boolean; // If true, gets spotlight priority or wider Bento column
  isPrivate?: boolean; // If true, marks as private enterprise project (no public repo link)
  githubUrl?: string; // Link to the GitHub repository (optional if private)
  liveUrl?: string; // Optional URL for live demo or production deployment
  stats?: string | { es: string; en: string }; // Key achievement or metric (e.g. "Sub-second TTFB", "Production Ready")
}

/**
 * ==============================================================================
 * FEATURED PROJECTS (MODIFIABLE & BILINGUAL ARRAY)
 * ==============================================================================
 * Curated projects highlighted in the "Featured Projects" section of the portfolio.
 * Includes both independent open/closed-source platforms and enterprise solutions
 * designed under non-disclosure agreements (represented functionally with isPrivate: true).
 * ==============================================================================
 */
export const projects: Project[] = [
  {
    id: "bambil-shoes-store",
    title: "Bambil Shoes Store",
    description: {
      es: "Plataforma integral de comercio electrónico y gestión de taller para calzado artesanal ecuatoriano de Colonche, Santa Elena. Cuenta con confección bajo demanda, trazabilidad de pedidos en tiempo real (/tracking), checkout por WhatsApp, pagos flexibles y notificaciones automáticas con Resend.",
      en: "Comprehensive e-commerce and workshop management platform for handmade Ecuadorian footwear in Colonche, Santa Elena. Features on-demand crafting, real-time order tracking (/tracking), WhatsApp checkout, split payments, and automated Resend transactional emails.",
    },
    category: "Full Stack",
    tags: ["Next.js 16", "Payload CMS 3.0", "React 19", "PostgreSQL 17", "Tailwind CSS v4", "TypeScript", "Zustand"],
    language: "TypeScript",
    languageColor: "bg-blue-400",
    stars: 12,
    forks: 2,
    featured: true,
    isPrivate: true,
    stats: {
      es: "Taller Artesanal · Colonche, Santa Elena",
      en: "Artisanal Workshop · Colonche, Santa Elena",
    },
  },
  {
    id: "steven-portfolio",
    title: {
      es: "Steven Rosales Portfolio & HUD",
      en: "Steven Rosales Portfolio & HUD",
    },
    description: {
      es: "Portafolio de ingeniería de software con estética Bento Grid ciber-minimalista, terminal interactiva HUD, telemetría de GitHub en tiempo real vía API Routes y arquitectura bilingüe de alto rendimiento.",
      en: "Cyber-minimalist software engineering portfolio with Bento Grid aesthetics, interactive terminal HUD, live GitHub telemetry via API Routes, and high-performance bilingual i18n.",
    },
    category: "Full Stack",
    tags: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "Turbopack", "GitHub API"],
    language: "TypeScript",
    languageColor: "bg-blue-400",
    stars: 0,
    forks: 0,
    featured: true,
    isPrivate: false,
    githubUrl: "https://github.com/StevenRosalesC/steven-portfolio",
    liveUrl: "https://stevenrocaiche.space",
    stats: {
      es: "Desplegado en stevenrocaiche.space",
      en: "Deployed on stevenrocaiche.space",
    },
  },
  {
    id: "tendo-app",
    title: "Tendo App POS",
    description: {
      es: "Aplicación multiplataforma (móvil y web) de Punto de Venta (POS) y control de inventarios omnicanal. Diseñada para comercios minoristas con escaneo de código de barras por cámara, modal de descuentos con previsualización financiera en tiempo real y soporte offline-first.",
      en: "Cross-platform (mobile & web) Point of Sale (POS) and omnichannel inventory management application. Engineered for retail with camera barcode scanning, discount modal with live financial previews, and offline-first support.",
    },
    category: "Mobile",
    tags: ["React Native", "Expo SDK 57", "TypeScript", "NativeWind", "Zustand", "TanStack Query", "Socket.io"],
    language: "TypeScript",
    languageColor: "bg-blue-400",
    stars: 0,
    forks: 0,
    featured: false,
    isPrivate: false,
    githubUrl: "https://github.com/StevenRosalesC/tendo-app",
    stats: {
      es: "Expo SDK 57 · React Native & POS",
      en: "Expo SDK 57 · React Native & POS",
    },
  },
  {
    id: "app-comuna-next",
    title: "App Comuna Next",
    description: {
      es: "Plataforma web de gestión comunitaria de alto impacto con flujos digitales de trámites, control de roles de usuario, portal institucional y componentes de servidor optimizados para velocidad.",
      en: "High-impact community management web platform with digital bureaucratic workflows, role-based access control, institutional portal, and server components optimized for maximum performance.",
    },
    category: "Full Stack",
    tags: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "shadcn/ui", "TanStack Table", "Server Actions"],
    language: "TypeScript",
    languageColor: "bg-blue-400",
    stars: 1,
    forks: 0,
    featured: false,
    isPrivate: false,
    githubUrl: "https://github.com/StevenRosalesC/app-comuna-next",
    stats: {
      es: "App en Producción Next.js 16",
      en: "Production Next.js 16 App",
    },
  },
  {
    id: "gym-donde-sea",
    title: "Gym Donde Sea",
    description: {
      es: "Cuaderno de gimnasio inteligente offline-first y PWA con sincronización multi-usuario en la nube con Supabase (RLS), calculadora de discos de barra (plate math), cronómetro de descanso flotante y tracking de récords personales (PRs/1RM).",
      en: "Smart offline-first gym notebook & PWA featuring Supabase multi-user cloud sync (RLS), barbell plate math calculator, floating rest timer, and personal record tracking (PRs/1RM).",
    },
    category: "Full Stack",
    tags: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "Supabase", "Zustand", "PWA"],
    language: "TypeScript",
    languageColor: "bg-blue-400",
    stars: 0,
    forks: 0,
    featured: false,
    isPrivate: true,
    liveUrl: "https://gymdondesea.stevenrocaiche.space",
    stats: {
      es: "Offline-First & PWA · Supabase RLS",
      en: "Offline-First & PWA · Supabase RLS",
    },
  },
  {
    id: "mobixi-backend",
    title: "Mobixi Backend API",
    description: {
      es: "API backend modular construida con NestJS y Prisma ORM para gestión multi-tienda, suscripciones, productos, envíos y pagos. Implementa autenticación JWT con refresh tokens, control de acceso basado en roles (RBAC) y documentación interactiva con Swagger.",
      en: "Modular backend API built with NestJS and Prisma ORM for multi-store management, subscriptions, products, deliveries, and payments. Features JWT authentication with refresh tokens, role-based access control (RBAC), and interactive Swagger documentation.",
    },
    category: "Backend & DevOps",
    tags: ["NestJS 11", "TypeScript", "Prisma ORM", "PostgreSQL", "JWT", "Swagger"],
    language: "TypeScript",
    languageColor: "bg-blue-400",
    stars: 0,
    forks: 0,
    featured: false,
    isPrivate: false,
    githubUrl: "https://github.com/StevenRosalesC/mobixi-backend",
    stats: {
      es: "Arquitectura NestJS · RBAC & Swagger",
      en: "NestJS Architecture · RBAC & Swagger",
    },
  },
];

export interface Project {
  id: string; // Unique identifier or repo slug (e.g. "bambil-shoes-store")
  title: string; // Display title of the project
  description: string | { es: string; en: string }; // Clear description of features, problem solved, and architecture
  category: "Full Stack" | "Frontend" | "Backend & DevOps" | "Tools" | "Mobile";
  tags: string[]; // Technologies used (e.g. ["Next.js", "TypeScript", "Tailwind CSS"])
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
 * Modify, add, or remove projects in this array to curate exactly which projects
 * are highlighted in the "Featured Projects" section of your portfolio.
 *
 * Configurable options:
 * - isPrivate: true / false (hides public GitHub link and shows 'Private' badge)
 * - featured: true / false (priority Bento Grid card sizing)
 * - liveUrl: Production / demo URL (if available)
 * - githubUrl: Link to repository on GitHub
 * - description / stats: string or { es: "...", en: "..." } for i18n
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
    liveUrl: "https://bambilshoes.com",
    stats: {
      es: "Taller Artesanal · Colonche, Santa Elena",
      en: "Artisanal Workshop · Colonche, Santa Elena",
    },
  },
  {
    id: "app-comuna-next",
    title: "App Comuna Next",
    description: {
      es: "Plataforma web de gestión comunitaria de alto impacto con flujos digitales de trámites, control de roles de usuario y componentes de servidor optimizados para velocidad.",
      en: "High-impact community management web platform with digital bureaucratic workflows, role-based access control, and server components optimized for maximum performance.",
    },
    category: "Full Stack",
    tags: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Server Actions"],
    language: "TypeScript",
    languageColor: "bg-blue-400",
    stars: 1,
    forks: 0,
    featured: true,
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
      es: "SaaS de entrenamiento y fitness on-demand con métricas interactivas de rendimiento, rutinas de ejercicios personalizadas y suscripciones en tiempo real.",
      en: "On-demand fitness & workout SaaS platform with interactive performance telemetry, custom training routines, and real-time subscription management.",
    },
    category: "Full Stack",
    tags: ["React", "TypeScript", "Node.js", "MongoDB", "Express"],
    language: "TypeScript",
    languageColor: "bg-blue-400",
    stars: 0,
    forks: 0,
    featured: false,
    isPrivate: true,
    liveUrl: "https://mygymdondesea.stevenrocaiche.space",
    stats: {
      es: "Tracker interactivo en tiempo real",
      en: "Real-time interactive workout tracker",
    },
  },
];

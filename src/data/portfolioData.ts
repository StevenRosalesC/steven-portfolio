import { Project, projects } from "./projects";
export type { Project };
export { projects };

export interface Experience {
  period: string | { es: string; en: string };
  role: string | { es: string; en: string };
  company: string;
  description: string | { es: string; en: string };
  technologies: string[];
  current?: boolean;
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
    email: "stevenrosales.dev@gmail.com",
    github: "https://github.com/StevenRosalesC",
    linkedin: "https://linkedin.com/in/stevenrosalesc",
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
      period: {
        es: "Ene 2024 — Presente",
        en: "Jan 2024 — Present",
      },
      role: {
        es: "Ingeniero Full Stack Senior",
        en: "Senior Full Stack Engineer",
      },
      company: "Independent & Client Solutions",
      description: {
        es: "Arquitectura y despliegue de plataformas web de nivel empresarial, liderando optimizaciones de rendimiento frontend y construyendo APIs RESTful y microservicios escalables.",
        en: "Architecting and shipping production-ready web platforms, leading frontend performance optimizations, and building RESTful APIs with microservices.",
      },
      technologies: ["Next.js", "TypeScript", "NestJS", "PostgreSQL", "Docker"],
      current: true,
    },
    {
      period: "2023 — 2024",
      role: {
        es: "Desarrollador Full Stack",
        en: "Full Stack Developer",
      },
      company: "Digital Commerce & SaaS",
      description: {
        es: "Diseño e implementación de sistemas de comercio electrónico escalables, esquemas de bases de datos relacionales e integración de pasarelas de pago con alta confiabilidad y cero tiempo de inactividad.",
        en: "Engineered scalable e-commerce systems, database schemas, and integrated payment gateways with high reliability and zero downtime.",
      },
      technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      current: false,
    },
    {
      period: "2022 — 2023",
      role: {
        es: "Ingeniero Frontend",
        en: "Frontend Engineer",
      },
      company: "Creative Web Studio",
      description: {
        es: "Creación de interfaces accesibles, fluidas y responsivas, convirtiendo diseños complejos de Figma en código interactivo de nivel de producción.",
        en: "Crafted accessible, responsive interfaces and design systems, converting Figma mockups into production-grade interactive code.",
      },
      technologies: ["JavaScript", "React", "CSS3", "Git"],
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

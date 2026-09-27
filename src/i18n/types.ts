export type Language = "es" | "en";

export interface Translations {
  navbar: {
    overview: string;
    stack: string;
    projects: string;
    experience: string;
    activity: string;
    contact: string;
    timeZoneLabel: string;
    openToWork: string;
  };
  hero: {
    badge: string;
    headlinePrefix: string;
    role: string;
    bio: string;
    contactButton: string;
    copyEmail: string;
    copied: string;
    terminalTitle: string;
    tabAbout: string;
    tabSkills: string;
    tabContact: string;
    aboutTerminal: {
      role: string;
      location: string;
      status: string;
      philosophy: string;
    };
  };
  stats: {
    totalRepos: string;
    reposDesc: string;
    contributions: string;
    contributionsDesc: string;
    experience: string;
    experienceDesc: string;
    quality: string;
    qualityDesc: string;
  };
  projects: {
    sectionNum: string;
    sectionBadge: string;
    title: string;
    subtitle: string;
    filterAll: string;
    privateBadge: string;
    publicBadge: string;
    liveButton: string;
    cliButton: string;
    categories: {
      all: string;
      fullStack: string;
      frontend: string;
      backend: string;
      tools: string;
      mobile: string;
    };
  };
  techStack: {
    sectionNum: string;
    sectionBadge: string;
    title: string;
    categories: {
      languages: string;
      frontend: string;
      backend: string;
      devops: string;
    };
    levels: {
      advanced: string;
      intermediate: string;
    };
  };
  experience: {
    sectionNum: string;
    sectionBadge: string;
    title: string;
    present: string;
    subtitle: string;
    logText: string;
  };
  activity: {
    sectionNum: string;
    sectionBadge: string;
    title: string;
    contributionsCount: string;
    less: string;
    more: string;
    noCommits: string;
    commit: string;
    commits: string;
    on: string;
    liveSync: string;
    recentTitle: string;
  };
  testimonials: {
    sectionNum: string;
    sectionBadge: string;
    title: string;
  };
  writing: {
    sectionNum: string;
    sectionBadge: string;
    title: string;
    readTime: string;
    readArticle: string;
  };
  contact: {
    sectionNum: string;
    sectionBadge: string;
    title: string;
    status: string;
    emailLabel: string;
    nameLabel: string;
    namePlaceholder: string;
    emailInputLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    sendButton: string;
    sending: string;
    sentSuccess: string;
    copyEmail: string;
    copied: string;
  };
  footer: {
    rights: string;
    builtWith: string;
    status: string;
    privacy: string;
    cookies: string;
    cookiePreferences: string;
  };
  cookies: {
    badge: string;
    title: string;
    description: string;
    accept: string;
    decline: string;
    policyLink: string;
    privacyLink: string;
  };
}

import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/i18n/LanguageContext";
import { JsonLd } from "@/components/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://steven-portfolio.vercel.app";

export const viewport: Viewport = {
  themeColor: "#08090d",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Steven Rosales | Full Stack Developer & Software Architect",
    template: "%s | Steven Rosales",
  },
  description:
    "Minimalist futuristic bento portfolio of Steven Rosales. Full Stack Developer & Software Architect specializing in Next.js 16, React 19, TypeScript, Node.js, NestJS, PostgreSQL, and scalable cloud architectures.",
  applicationName: "Steven Rosales Portfolio",
  authors: [
    {
      name: "Steven Rosales",
      url: "https://github.com/StevenRosalesC",
    },
  ],
  generator: "Next.js",
  keywords: [
    "Steven Rosales",
    "Full Stack Developer",
    "Software Architect",
    "Arquitecto de Software",
    "Desarrollador Full Stack Ecuador",
    "Next.js 16",
    "React 19",
    "TypeScript",
    "NestJS",
    "Node.js",
    "PostgreSQL",
    "Tailwind CSS v4",
    "Docker",
    "Cloud Architecture",
    "Bento Portfolio",
    "HUD Terminal Portfolio",
  ],
  creator: "Steven Rosales",
  publisher: "Steven Rosales",
  category: "technology",
  alternates: {
    canonical: "/",
    languages: {
      "es-EC": "/",
      "en-US": "/?lang=en",
    },
  },
  openGraph: {
    title: "Steven Rosales | Full Stack Developer & Software Architect",
    description:
      "Minimalist futuristic developer portfolio with Bento Grid & Terminal HUD aesthetics. Discover scalable web platforms, distributed systems, and real-time telemetry.",
    url: "/",
    siteName: "Steven Rosales Portfolio",
    locale: "es_EC",
    alternateLocale: ["en_US"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Steven Rosales | Full Stack Developer & Software Architect",
    description:
      "Minimalist futuristic developer portfolio with Bento Grid & Terminal HUD aesthetics. Built with Next.js 16, React 19, and TypeScript.",
    creator: "@StevenRosalesC",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth`}
    >
      <head>
        <JsonLd siteUrl={siteUrl} />
      </head>
      <body className="min-h-screen bg-[#08090d] text-zinc-100 font-sans selection:bg-violet-500/30 selection:text-white antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Steven Rosales | Full Stack Developer & Software Architect",
  description:
    "Minimalist futuristic bento portfolio of Steven Rosales. Full Stack Developer specializing in Next.js, TypeScript, Node.js, NestJS, PostgreSQL, and scalable cloud architectures.",
  keywords: [
    "Steven Rosales",
    "Full Stack Developer",
    "Software Architect",
    "Next.js",
    "React 19",
    "TypeScript",
    "NestJS",
    "Bento Portfolio",
  ],
  authors: [{ name: "Steven Rosales" }],
  openGraph: {
    title: "Steven Rosales | Full Stack Developer & Software Architect",
    description: "Minimalist futuristic developer portfolio with Bento Grid & Terminal aesthetics.",
    type: "website",
  },
};

import { LanguageProvider } from "@/i18n/LanguageContext";

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
      <body className="min-h-screen bg-[#08090d] text-zinc-100 font-sans selection:bg-violet-500/30 selection:text-white antialiased">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}

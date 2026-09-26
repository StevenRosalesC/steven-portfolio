"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Mail, Terminal, Menu, X, ArrowUpRight, Globe } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { portfolioData } from "@/data/portfolioData";
import { useLanguage } from "@/i18n/LanguageContext";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [time, setTime] = useState("");
  const { language, setLanguage, dict } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    // Format local time in America/Guayaquil (Ecuador Time - ECT)
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "America/Guayaquil",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, []);

  const navLinks = [
    { label: `~/${dict.navbar.overview.toLowerCase()}`, href: "#home" },
    { label: `~/${dict.navbar.stack.toLowerCase()}`, href: "#stack" },
    { label: `~/${dict.navbar.projects.toLowerCase()}`, href: "#projects" },
    { label: `~/${dict.navbar.experience.toLowerCase()}`, href: "#experience" },
    { label: `~/${dict.navbar.activity.toLowerCase()}`, href: "#activity" },
    { label: `~/${dict.navbar.contact.toLowerCase()}`, href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#08090d]/85 backdrop-blur-md border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Terminal prompt */}
          <Link
            href="#home"
            className="flex items-center gap-2 group font-mono text-sm sm:text-base text-zinc-100 hover:text-white transition-colors"
          >
            <div className="p-1.5 rounded-lg bg-white/[0.05] border border-white/[0.08] group-hover:border-violet-500/50 group-hover:bg-violet-500/10 transition-all">
              <Terminal className="w-4 h-4 text-violet-400" />
            </div>
            <span className="font-semibold tracking-tight">
              <span className="text-violet-400">&gt;_</span> {portfolioData.personal.handle}
            </span>
            <span className="w-2 h-4 bg-violet-400 animate-pulse hidden sm:inline-block" />
          </Link>

          {/* Navigation Pill (Center) */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#11131f]/90 border border-white/[0.08] shadow-inner text-xs font-mono"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-1 rounded-full text-zinc-400 hover:text-white hover:bg-white/[0.06] transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right section: Time, Language Toggle & Social icons */}
          <div className="hidden sm:flex items-center gap-2.5">
            {time && (
              <div className="hidden lg:flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] text-[11px] font-mono text-zinc-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span>ECT {time}</span>
              </div>
            )}

            {/* Language Switcher HUD Pill */}
            <div className="flex items-center p-0.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono">
              <button
                type="button"
                onClick={() => setLanguage("es")}
                className={`px-2 py-0.5 rounded transition-all ${
                  language === "es"
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-semibold shadow-sm"
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
                title="Cambiar idioma a Español"
                aria-label="Español"
              >
                ES
              </button>
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`px-2 py-0.5 rounded transition-all ${
                  language === "en"
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-semibold shadow-sm"
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
                title="Switch language to English"
                aria-label="English"
              >
                EN
              </button>
            </div>

            <div className="flex items-center gap-1 border-l border-white/[0.08] pl-2.5">
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/[0.06] border border-transparent hover:border-white/[0.08] transition-all"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/[0.06] border border-transparent hover:border-white/[0.08] transition-all"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${portfolioData.personal.email}`}
                aria-label="Send an Email"
                className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/[0.06] border border-transparent hover:border-white/[0.08] transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Mobile menu button and quick language toggle */}
          <div className="sm:hidden flex items-center gap-2">
            <div className="flex items-center p-0.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono">
              <button
                type="button"
                onClick={() => setLanguage(language === "es" ? "en" : "es")}
                className="px-2 py-0.5 rounded text-cyan-300 font-semibold"
                aria-label="Toggle language"
              >
                {language.toUpperCase()}
              </button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
              className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.08] text-zinc-300 hover:text-white focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-2 pb-6 bg-[#0c0e17]/95 backdrop-blur-xl border-b border-white/[0.08]">
          <div className="flex flex-col gap-2 font-mono text-sm">
            <div className="pb-2 mb-1 border-b border-white/[0.06] flex items-center justify-between">
              <span className="text-xs text-zinc-400 flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-cyan-400" />
                <span>Language:</span>
              </span>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => setLanguage("es")}
                  className={`px-2.5 py-1 rounded text-xs ${
                    language === "es"
                      ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-semibold"
                      : "text-zinc-400"
                  }`}
                >
                  Español
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage("en")}
                  className={`px-2.5 py-1 rounded text-xs ${
                    language === "en"
                      ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-semibold"
                      : "text-zinc-400"
                  }`}
                >
                  English
                </button>
              </div>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 rounded-lg text-zinc-300 hover:text-white hover:bg-white/[0.06] flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
              </a>
            ))}
            <div className="pt-3 border-t border-white/[0.08] flex items-center justify-around">
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 text-xs text-zinc-400"
              >
                <GithubIcon className="w-4 h-4" /> GitHub
              </a>
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 text-xs text-zinc-400"
              >
                <LinkedinIcon className="w-4 h-4" /> LinkedIn
              </a>
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="flex items-center gap-2 px-3 py-1.5 text-xs text-zinc-400"
              >
                <Mail className="w-4 h-4" /> Email
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

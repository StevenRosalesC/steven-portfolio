"use client";

import React from "react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolioData";
import { ArrowUp } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export function Footer() {
  const { dict } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleOpenCookiePreferences = () => {
    window.dispatchEvent(new Event("open_cookie_banner"));
  };

  return (
    <footer className="py-12 border-t border-white/[0.06] bg-[#07080c] text-xs font-mono text-zinc-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="relative w-5 h-5 flex-shrink-0">
              <Image
                src="/sr-logo-icon.svg"
                alt="Steven Rosales Logo"
                width={20}
                height={20}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-zinc-400 font-medium">{portfolioData.personal.handle}</span>
            <span>— {dict.footer.rights}</span>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-emerald-400">{dict.footer.status}</span>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-zinc-400 hover:text-white border border-white/[0.06] transition-colors"
              aria-label="Scroll back to top"
            >
              <span>top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Legal Links & Cookie Preferences */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-6 gap-y-2 pt-4 border-t border-white/[0.04] text-[11px] text-zinc-500">
          <a
            href="/politica-de-privacidad"
            className="hover:text-zinc-300 transition-colors"
          >
            {dict.footer.privacy}
          </a>
          <span className="text-zinc-700">·</span>
          <a
            href="/politica-de-cookies"
            className="hover:text-zinc-300 transition-colors"
          >
            {dict.footer.cookies}
          </a>
          <span className="text-zinc-700">·</span>
          <button
            type="button"
            onClick={handleOpenCookiePreferences}
            className="hover:text-cyan-300 transition-colors cursor-pointer"
          >
            {dict.footer.cookiePreferences}
          </button>
        </div>
      </div>
    </footer>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie, Shield, Check, X } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { setAnalyticsConsent, getAnalyticsConsentStatus } from "./GoogleAnalytics";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { dict } = useLanguage();

  useEffect(() => {
    setMounted(true);
    const status = getAnalyticsConsentStatus();
    // Only display automatically if no decision has been recorded yet
    if (status === "pending") {
      // Small delay for smooth entrance after page load
      const timer = setTimeout(() => setIsVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    // Allow external triggers (such as footer links or policy page buttons) to open preferences
    const handleOpen = () => {
      setIsVisible(true);
    };

    window.addEventListener("open_cookie_banner", handleOpen);
    return () => {
      window.removeEventListener("open_cookie_banner", handleOpen);
    };
  }, []);

  const handleAccept = () => {
    setAnalyticsConsent(true);
    setIsVisible(false);
  };

  const handleDecline = () => {
    setAnalyticsConsent(false);
    setIsVisible(false);
  };

  if (!mounted || !isVisible) {
    return null;
  }

  return (
    <aside
      aria-label="Cookie Consent Banner"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-md z-50 animate-in fade-in slide-in-from-bottom-5 duration-300"
    >
      <div className="relative overflow-hidden rounded-2xl border border-white/[0.12] bg-[#0c0e17]/95 p-5 shadow-2xl backdrop-blur-xl">
        {/* Subtle Ambient Radial Glow */}
        <div
          className="pointer-events-none absolute -top-12 -right-12 h-32 w-32 rounded-full bg-cyan-500/10 blur-2xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-12 -left-12 h-32 w-32 rounded-full bg-violet-500/10 blur-2xl"
          aria-hidden="true"
        />

        {/* Top Header Badge */}
        <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-white/[0.06]">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
              <Cookie className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-mono tracking-wider text-cyan-300 font-semibold uppercase">
              {dict.cookies.badge}
            </span>
          </div>

          <button
            type="button"
            onClick={handleDecline}
            className="p-1 rounded-md text-zinc-400 hover:text-white hover:bg-white/[0.05] transition-colors"
            aria-label="Close cookie consent banner"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Title & Body */}
        <h3 className="font-mono text-sm font-semibold text-zinc-100 mb-1.5 flex items-center gap-1.5">
          <Shield className="w-3.5 h-3.5 text-violet-400" />
          <span>{dict.cookies.title}</span>
        </h3>

        <p className="text-xs text-zinc-300 leading-relaxed mb-4">
          {dict.cookies.description}
        </p>

        {/* Links to Policies */}
        <div className="flex items-center gap-3 text-[11px] font-mono text-zinc-400 mb-4">
          <Link
            href="/politica-de-cookies"
            className="hover:text-cyan-300 underline underline-offset-4 decoration-white/20 transition-colors"
          >
            {dict.cookies.policyLink}
          </Link>
          <span className="text-zinc-600">·</span>
          <Link
            href="/politica-de-privacidad"
            className="hover:text-violet-300 underline underline-offset-4 decoration-white/20 transition-colors"
          >
            {dict.cookies.privacyLink}
          </Link>
        </div>

        {/* Actions Buttons */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleDecline}
            className="flex-1 px-3 py-2 rounded-xl text-xs font-mono font-medium text-zinc-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] transition-all text-center"
          >
            {dict.cookies.decline}
          </button>

          <button
            type="button"
            onClick={handleAccept}
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-mono font-semibold text-cyan-200 bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-500/30 hover:border-cyan-500/50 shadow-sm transition-all text-center"
          >
            <Check className="w-3.5 h-3.5 text-cyan-300" />
            <span>{dict.cookies.accept}</span>
          </button>
        </div>
      </div>
    </aside>
  );
}

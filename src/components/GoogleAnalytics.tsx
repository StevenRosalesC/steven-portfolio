"use client";

import React, { useEffect } from "react";
import Script from "next/script";

declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}

interface GoogleAnalyticsProps {
  gaId?: string;
}

export function GoogleAnalytics({
  gaId = process.env.NEXT_PUBLIC_GA_ID,
}: GoogleAnalyticsProps) {
  useEffect(() => {
    // Listen for cookie consent updates from CookieConsent component or policy pages
    const handleConsentChange = (event: Event) => {
      const customEvent = event as CustomEvent<{ granted: boolean }>;
      const isGranted = customEvent?.detail?.granted;

      if (typeof window !== "undefined" && typeof window.gtag === "function") {
        window.gtag("consent", "update", {
          analytics_storage: isGranted ? "granted" : "denied",
        });
      }
    };

    window.addEventListener("cookie_consent_change", handleConsentChange);
    return () => {
      window.removeEventListener("cookie_consent_change", handleConsentChange);
    };
  }, []);

  if (!gaId || gaId.trim() === "") {
    return null;
  }

  const cleanGaId = gaId.trim();

  return (
    <>
      {/* 1. Google Consent Mode v2 Default Configuration */}
      <Script
        id="google-consent-mode"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;

            var savedConsent = null;
            try {
              savedConsent = localStorage.getItem('cookie_consent');
            } catch(e) {}

            var isGranted = savedConsent === 'granted';

            gtag('consent', 'default', {
              'analytics_storage': isGranted ? 'granted' : 'denied',
              'ad_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied',
              'wait_for_update': 500
            });

            gtag('js', new Date());
            gtag('config', '${cleanGaId}', {
              page_path: window.location.pathname,
              anonymize_ip: true
            });
          `,
        }}
      />

      {/* 2. Google Tag Manager / Analytics Script */}
      <Script
        id="google-analytics-tag"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${cleanGaId}`}
      />
    </>
  );
}

/**
 * Programmatic helper to update cookie consent and inform Google Analytics
 */
export function setAnalyticsConsent(granted: boolean) {
  if (typeof window === "undefined") return;

  try {
    localStorage.setItem("cookie_consent", granted ? "granted" : "denied");
  } catch (err) {
    console.warn("Unable to save cookie consent preference", err);
  }

  if (typeof window.gtag === "function") {
    window.gtag("consent", "update", {
      analytics_storage: granted ? "granted" : "denied",
    });
  }

  window.dispatchEvent(
    new CustomEvent("cookie_consent_change", { detail: { granted } })
  );
}

/**
 * Returns current consent status: 'granted' | 'denied' | 'pending'
 */
export function getAnalyticsConsentStatus(): "granted" | "denied" | "pending" {
  if (typeof window === "undefined") return "pending";
  try {
    const val = localStorage.getItem("cookie_consent");
    if (val === "granted") return "granted";
    if (val === "denied") return "denied";
    return "pending";
  } catch {
    return "pending";
  }
}

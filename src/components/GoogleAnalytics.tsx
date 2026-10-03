import React from "react";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

interface GoogleAnalyticsProps {
  gaId?: string;
}

export function GoogleAnalytics({
  gaId = process.env.NEXT_PUBLIC_GA_ID || "G-JYVPEKBZV2",
}: GoogleAnalyticsProps) {
  if (!gaId || gaId.trim() === "") {
    return null;
  }

  const cleanGaId = gaId.trim();

  return (
    <>
      {/* 1. Official Google tag (gtag.js) */}
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${cleanGaId}`}
      />

      {/* 2. Google Consent Mode v2 & Configuration */}
      <script
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
              anonymize_ip: true
            });
          `,
        }}
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

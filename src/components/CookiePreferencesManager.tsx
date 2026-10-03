"use client";

import React, { useState, useSyncExternalStore } from "react";
import { Cookie, CheckCircle2, XCircle, RotateCcw } from "lucide-react";
import { setAnalyticsConsent, getAnalyticsConsentStatus } from "@/components/GoogleAnalytics";

function subscribe(callback: () => void) {
  window.addEventListener("cookie_consent_change", callback);
  return () => window.removeEventListener("cookie_consent_change", callback);
}

function getSnapshot() {
  return getAnalyticsConsentStatus();
}

function getServerSnapshot(): "granted" | "denied" | "pending" {
  return "pending";
}

export function CookiePreferencesManager() {
  const status = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [feedback, setFeedback] = useState<string | null>(null);

  const handleGrant = () => {
    setAnalyticsConsent(true);
    setFeedback("Consentimiento analítico activado correctamente.");
    setTimeout(() => setFeedback(null), 3000);
  };

  const handleRevoke = () => {
    setAnalyticsConsent(false);
    setFeedback("Consentimiento analítico revocado. Google Analytics desactivado.");
    setTimeout(() => setFeedback(null), 3000);
  };

  const handleOpenBanner = () => {
    window.dispatchEvent(new Event("open_cookie_banner"));
  };

  return (
    <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md mb-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 mb-4 border-b border-white/[0.06]">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
            <Cookie className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-mono text-sm font-semibold text-white">
              Gestor de Preferencias de Cookies
            </h3>
            <span className="text-xs text-zinc-400 font-mono">
              Configura o revoca tus permisos de telemetría en tiempo real
            </span>
          </div>
        </div>

        {/* Status Indicator */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border font-mono text-xs bg-white/[0.02]">
          <span className="text-zinc-400">Estado:</span>
          {status === "granted" && (
            <span className="inline-flex items-center gap-1.5 text-emerald-400 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Analítica Permitida</span>
            </span>
          )}
          {status === "denied" && (
            <span className="inline-flex items-center gap-1.5 text-rose-400 font-medium">
              <XCircle className="w-3.5 h-3.5" />
              <span>Analítica Bloqueada</span>
            </span>
          )}
          {status === "pending" && (
            <span className="inline-flex items-center gap-1.5 text-amber-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span>Pendiente de Decisión</span>
            </span>
          )}
        </div>
      </div>

      {feedback && (
        <div className="mb-4 px-3 py-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-mono text-xs animate-in fade-in duration-200">
          ✓ {feedback}
        </div>
      )}

      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={handleGrant}
          className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
            status === "granted"
              ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
              : "bg-white/[0.04] hover:bg-white/[0.08] text-zinc-200 border border-white/[0.1] hover:text-white"
          }`}
        >
          {status === "granted" ? "✓ Analítica Activada" : "Permitir Cookies Analíticas"}
        </button>

        <button
          type="button"
          onClick={handleRevoke}
          className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
            status === "denied"
              ? "bg-rose-500/20 text-rose-300 border border-rose-500/40"
              : "bg-white/[0.04] hover:bg-white/[0.08] text-zinc-200 border border-white/[0.1] hover:text-white"
          }`}
        >
          {status === "denied" ? "✕ Analítica Bloqueada" : "Rechazar / Revocar Analítica"}
        </button>

        <button
          type="button"
          onClick={handleOpenBanner}
          className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-mono text-zinc-400 hover:text-white bg-transparent hover:bg-white/[0.04] border border-transparent hover:border-white/[0.08] transition-all ml-auto"
        >
          <RotateCcw className="w-3 h-3" />
          <span>Reabrir banner de aviso</span>
        </button>
      </div>
    </div>
  );
}

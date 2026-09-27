import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Cookie, ShieldCheck, Info, Check, X, Sliders } from "lucide-react";
import { SpotlightCard } from "@/components/SpotlightCard";
import { CookiePreferencesManager } from "@/components/CookiePreferencesManager";

export const metadata: Metadata = {
  title: "Política de Cookies | Steven Rosales",
  description:
    "Política de Cookies del portafolio de Steven Rosales. Información transparente sobre cookies técnicas y analíticas de Google Analytics 4.",
  alternates: {
    canonical: "/politica-de-cookies",
  },
};

export default function PoliticaCookiesPage() {
  const lastUpdated = "27 de septiembre de 2026";

  return (
    <main className="min-h-screen bg-[#08090d] text-zinc-100 py-12 px-4 sm:px-6 lg:px-8 selection:bg-cyan-500/30 selection:text-white">
      <div className="max-w-4xl mx-auto">
        {/* Navigation Bar */}
        <div className="flex items-center justify-between pb-8 mb-8 border-b border-white/[0.08]">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] text-zinc-300 hover:text-white text-xs font-mono transition-all group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
            <span>Volver al Portafolio</span>
          </Link>

          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
            <div className="relative w-5 h-5 flex-shrink-0">
              <Image
                src="/sr-logo-icon.svg"
                alt="Steven Rosales Logo"
                width={20}
                height={20}
                className="w-full h-full object-contain"
              />
            </div>
            <span>steven.dev // cookies</span>
          </div>
        </div>

        {/* Hero Section Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-mono text-xs mb-3">
            <Cookie className="w-3.5 h-3.5" />
            <span>DOCUMENTO TÉCNICO // POLÍTICA DE COOKIES</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-mono">
            Política de Cookies
          </h1>
          <p className="mt-2 text-sm font-mono text-zinc-400">
            Última actualización: {lastUpdated} · Telemetría anónima y control total para el usuario.
          </p>
        </div>

        {/* Interactive Preferences Manager */}
        <CookiePreferencesManager />

        {/* Main Content Bento Card */}
        <SpotlightCard glowColor="cyan" className="p-6 sm:p-10 mb-10 space-y-8 text-zinc-300 text-sm leading-relaxed">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-lg font-semibold font-mono text-white flex items-center gap-2">
              <Info className="w-4 h-4 text-cyan-400" />
              <span>1. ¿Qué es una Cookie?</span>
            </h2>
            <p>
              Una cookie es un pequeño archivo de texto que los sitios web descargan en tu navegador o dispositivo para almacenar información técnica o recordar preferencias del usuario (por ejemplo, el idioma seleccionado o el estado de consentimiento).
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4 pt-6 border-t border-white/[0.06]">
            <h2 className="text-lg font-semibold font-mono text-white flex items-center gap-2">
              <Sliders className="w-4 h-4 text-violet-400" />
              <span>2. Tipos de Cookies que Utiliza este Portafolio</span>
            </h2>
            <p>
              En este portafolio <strong className="text-white">solo se emplean dos categorías de almacenamiento</strong>: cookies técnicas necesarias para el funcionamiento del sitio y cookies analíticas anónimas (que requieren tu consentimiento previo).
            </p>

            {/* Cookies Table / Cards */}
            <div className="space-y-3 mt-4">
              {/* Category A: Technical */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs font-semibold text-emerald-300 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>A. Cookies Técnicas y de Preferencias (Estrictamente Necesarias)</span>
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                    Siempre activas
                  </span>
                </div>
                <p className="text-xs text-zinc-300 mb-3">
                  Permiten recordar tus preferencias básicas de interfaz para que no tengas que reconfigurarlas en cada navegación. No recopilan datos analíticos ni rastrean fuera de este dominio.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-left font-mono text-xs border-collapse">
                    <thead>
                      <tr className="border-b border-white/[0.06] text-zinc-400">
                        <th className="py-2 pr-4 font-medium">Nombre</th>
                        <th className="py-2 pr-4 font-medium">Proveedor</th>
                        <th className="py-2 pr-4 font-medium">Duración</th>
                        <th className="py-2 font-medium">Propósito</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/[0.04] text-zinc-300">
                      <tr>
                        <td className="py-2 pr-4 text-cyan-300 font-semibold">cookie_consent</td>
                        <td className="py-2 pr-4">steven.dev</td>
                        <td className="py-2 pr-4">1 año (LocalStorage)</td>
                        <td className="py-2">Registra si aceptaste o rechazaste la telemetría analítica.</td>
                      </tr>
                      <tr>
                        <td className="py-2 pr-4 text-cyan-300 font-semibold">sr_lang</td>
                        <td className="py-2 pr-4">steven.dev</td>
                        <td className="py-2 pr-4">1 año (LocalStorage)</td>
                        <td className="py-2">Guarda el idioma preferido (español o inglés).</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Category B: Analytics */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs font-semibold text-cyan-300 flex items-center gap-1.5">
                    <Cookie className="w-3.5 h-3.5" />
                    <span>B. Cookies de Analítica y Rendimiento (Google Analytics 4)</span>
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                    Requieren consentimiento
                  </span>
                </div>
                <p className="text-xs text-zinc-300 mb-3">
                  Permiten medir métricas anónimas de visitas, tiempos de lectura y rendimiento. Se ejecutan con anonimización de IP y bajo el estándar <strong className="text-white">Google Consent Mode v2</strong>. Si no otorgas consentimiento, no se activan.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-left font-mono text-xs border-collapse">
                    <thead>
                      <tr className="border-b border-white/[0.06] text-zinc-400">
                        <th className="py-2 pr-4 font-medium">Nombre</th>
                        <th className="py-2 pr-4 font-medium">Proveedor</th>
                        <th className="py-2 pr-4 font-medium">Duración</th>
                        <th className="py-2 font-medium">Propósito</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/[0.04] text-zinc-300">
                      <tr>
                        <td className="py-2 pr-4 text-cyan-300 font-semibold">_ga</td>
                        <td className="py-2 pr-4">Google Analytics</td>
                        <td className="py-2 pr-4">2 años</td>
                        <td className="py-2">Distingue usuarios anónimos en métricas agregadas.</td>
                      </tr>
                      <tr>
                        <td className="py-2 pr-4 text-cyan-300 font-semibold">_ga_&lt;container-id&gt;</td>
                        <td className="py-2 pr-4">Google Analytics</td>
                        <td className="py-2 pr-4">2 años</td>
                        <td className="py-2">Mantiene el estado anónimo de la sesión de navegación.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Category C: Advertising */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-mono text-xs font-semibold text-zinc-400 flex items-center gap-1.5">
                    <X className="w-3.5 h-3.5 text-zinc-500" />
                    <span>C. Cookies Publicitarias y de Rastreo Cruzado</span>
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-800 text-zinc-400">
                    No utilizadas (0)
                  </span>
                </div>
                <p className="text-xs text-zinc-400">
                  Este sitio web no contiene anuncios, no utiliza píxeles de Facebook/Meta, no conecta con plataformas de retargeting ni comparte datos con redes publicitarias.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-3 pt-6 border-t border-white/[0.06]">
            <h2 className="text-lg font-semibold font-mono text-white flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-400" />
              <span>3. Cómo Cambiar o Revocar tu Consentimiento</span>
            </h2>
            <p>
              Puedes modificar tu decisión en cualquier momento utilizando el selector ubicado arriba en esta misma página, o haciendo clic en el enlace &quot;Preferencias de Cookies&quot; en el pie de página de cualquier sección del portafolio.
            </p>
            <p>
              También puedes bloquear o eliminar cookies directamente desde la configuración de tu navegador web:
            </p>
            <ul className="list-disc list-inside space-y-1 text-xs font-mono text-zinc-300 ml-1">
              <li>
                <a
                  href="https://support.google.com/chrome/answer/95647"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:underline"
                >
                  Configuración de cookies en Google Chrome
                </a>
              </li>
              <li>
                <a
                  href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:underline"
                >
                  Configuración de cookies en Mozilla Firefox
                </a>
              </li>
              <li>
                <a
                  href="https://support.apple.com/es-es/guide/safari/sfri11471/mac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:underline"
                >
                  Configuración de cookies en Apple Safari
                </a>
              </li>
              <li>
                <a
                  href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:underline"
                >
                  Configuración de cookies en Microsoft Edge
                </a>
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-3 pt-6 border-t border-white/[0.06]">
            <h2 className="text-lg font-semibold font-mono text-white flex items-center gap-2">
              <Info className="w-4 h-4 text-violet-400" />
              <span>4. Más Información sobre Privacidad</span>
            </h2>
            <p>
              Para conocer cómo protegemos tus datos, tus derechos legales y nuestras medidas de seguridad, consulta nuestra{" "}
              <Link
                href="/politica-de-privacidad"
                className="text-cyan-300 hover:underline font-mono"
              >
                Política de Privacidad
              </Link>
              . Si tienes preguntas técnicas, puedes escribir a{" "}
              <a
                href="mailto:stevenrosales31@gmail.com"
                className="text-cyan-300 hover:underline font-mono"
              >
                stevenrosales31@gmail.com
              </a>
              .
            </p>
          </section>
        </SpotlightCard>

        {/* Bottom Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/[0.08] text-xs font-mono text-zinc-500">
          <span>Steven Rosales · Full Stack Developer & Software Architect</span>
          <div className="flex items-center gap-4">
            <Link
              href="/politica-de-privacidad"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              Política de Privacidad
            </Link>
            <Link
              href="/"
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              ← Portafolio
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

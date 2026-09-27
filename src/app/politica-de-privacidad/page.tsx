import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Shield, Eye, Database, Server, UserCheck, Mail, Lock } from "lucide-react";
import { SpotlightCard } from "@/components/SpotlightCard";

export const metadata: Metadata = {
  title: "Política de Privacidad | Steven Rosales",
  description:
    "Política de Privacidad del portafolio de Steven Rosales. Transparencia sobre el uso exclusivo de telemetría analítica anónima y protección de datos.",
  alternates: {
    canonical: "/politica-de-privacidad",
  },
};

export default function PoliticaPrivacidadPage() {
  const lastUpdated = "27 de septiembre de 2026";

  return (
    <main className="min-h-screen bg-[#08090d] text-zinc-100 py-12 px-4 sm:px-6 lg:px-8 selection:bg-violet-500/30 selection:text-white">
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
            <span>steven.dev // privacy</span>
          </div>
        </div>

        {/* Hero Section Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 font-mono text-xs mb-3">
            <Shield className="w-3.5 h-3.5" />
            <span>DOCUMENTO LEGAL // PRIVACIDAD DE DATOS</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-mono">
            Política de Privacidad
          </h1>
          <p className="mt-2 text-sm font-mono text-zinc-400">
            Última actualización: {lastUpdated} · Cumplimiento de estándares de transparencia y protección de datos.
          </p>
        </div>

        {/* Main Content Bento Card */}
        <SpotlightCard glowColor="violet" className="p-6 sm:p-10 mb-10 space-y-8 text-zinc-300 text-sm leading-relaxed">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-lg font-semibold font-mono text-white flex items-center gap-2">
              <UserCheck className="w-4 h-4 text-cyan-400" />
              <span>1. Responsable del Tratamiento</span>
            </h2>
            <p>
              El responsable del tratamiento de los datos en este sitio web es{" "}
              <strong className="text-white font-mono">Steven Rosales</strong> (Desarrollador Full Stack & Arquitecto de Software), domiciliado en Santa Elena, Ecuador.
            </p>
            <p className="font-mono text-xs text-zinc-400">
              Contacto directo para privacidad:{" "}
              <a
                href="mailto:stevenrosales31@gmail.com"
                className="text-cyan-300 hover:underline"
              >
                stevenrosales31@gmail.com
              </a>
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3 pt-6 border-t border-white/[0.06]">
            <h2 className="text-lg font-semibold font-mono text-white flex items-center gap-2">
              <Eye className="w-4 h-4 text-violet-400" />
              <span>2. Datos que se Recopilan</span>
            </h2>
            <p>
              Este sitio web está concebido bajo el principio de <strong className="text-white">minimización de datos</strong>. No es una plataforma transaccional ni un portal con registro obligatorio de usuarios.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <h3 className="font-mono text-xs font-semibold text-cyan-300 mb-1.5 flex items-center gap-1.5">
                  <Database className="w-3.5 h-3.5" />
                  <span>Telemetría y Analítica Web</span>
                </h3>
                <p className="text-xs text-zinc-300 leading-normal">
                  Métricas anónimas mediante Google Analytics 4: páginas consultadas, tiempo de navegación, país aproximado, tipo de dispositivo y navegador. Las direcciones IP se anonimizan automáticamente antes de ser procesadas.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <h3 className="font-mono text-xs font-semibold text-emerald-300 mb-1.5 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5" />
                  <span>Mensajes de Contacto Voluntarios</span>
                </h3>
                <p className="text-xs text-zinc-300 leading-normal">
                  Si decides contactarme a través del formulario o correo electrónico, se tratarán los datos que voluntariamente decidas proporcionar (nombre, email y contenido del mensaje) exclusivamente para responder tu consulta.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-3 pt-6 border-t border-white/[0.06]">
            <h2 className="text-lg font-semibold font-mono text-white flex items-center gap-2">
              <Server className="w-4 h-4 text-emerald-400" />
              <span>3. Finalidad del Uso de los Datos</span>
            </h2>
            <ul className="list-disc list-inside space-y-1.5 text-zinc-300 ml-1">
              <li>
                <strong className="text-zinc-200">Mejora técnica continua:</strong> Analizar qué secciones, artículos o proyectos resultan de mayor interés técnico y optimizar los tiempos de carga en producción.
              </li>
              <li>
                <strong className="text-zinc-200">Compatibilidad y rendimiento:</strong> Verificar que la interfaz reactiva Bento y el HUD terminal funcionen con fluidez en diferentes navegadores y resoluciones de pantalla.
              </li>
              <li>
                <strong className="text-zinc-200">Atención a solicitudes laborales:</strong> Atender propuestas de empleo, colaboraciones de desarrollo o solicitudes de consultoría técnica de software.
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-3 pt-6 border-t border-white/[0.06]">
            <h2 className="text-lg font-semibold font-mono text-white flex items-center gap-2">
              <Lock className="w-4 h-4 text-pink-400" />
              <span>4. Base Legal y Consentimiento</span>
            </h2>
            <p>
              El tratamiento de datos analíticos se fundamenta en tu <strong className="text-white">consentimiento libre e informado</strong>, otorgado mediante el banner de consentimiento de cookies. La telemetría solo se inicializa si presionas el botón &quot;Aceptar&quot;. Si decides rechazarla, Google Analytics se mantiene desactivado mediante el protocolo de Google Consent Mode v2.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3 pt-6 border-t border-white/[0.06]">
            <h2 className="text-lg font-semibold font-mono text-white flex items-center gap-2">
              <Shield className="w-4 h-4 text-cyan-400" />
              <span>5. Servicios de Terceros y Seguridad</span>
            </h2>
            <p>
              No vendemos, no alquilamos y no compartimos ningún dato personal con fines comerciales o publicitarios. Los servicios de terceros empleados son estrictamente técnicos:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-zinc-300 ml-1 text-xs font-mono">
              <li>Google Analytics 4 (Google LLC) — Analítica web anónima.</li>
              <li>GitHub API (GitHub, Inc.) — Sincronización en tiempo real de métricas públicas de código.</li>
              <li>Vercel / Cloudflare — Alojamiento y entrega distribuida de contenido estático (CDN).</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="space-y-3 pt-6 border-t border-white/[0.06]">
            <h2 className="text-lg font-semibold font-mono text-white flex items-center gap-2">
              <UserCheck className="w-4 h-4 text-violet-400" />
              <span>6. Tus Derechos</span>
            </h2>
            <p>
              Tienes derecho en cualquier momento a revocar tu consentimiento sobre las cookies analíticas, solicitar información sobre cómo se gestiona tu información o pedir la eliminación de cualquier mensaje enviado escribiendo a{" "}
              <a
                href="mailto:stevenrosales31@gmail.com"
                className="text-cyan-300 hover:underline font-mono"
              >
                stevenrosales31@gmail.com
              </a>
              .
            </p>
            <p className="text-xs text-zinc-400 font-mono">
              Para conocer cómo se gestionan y eliminan las cookies directamente en tu navegador, consulta nuestra{" "}
              <Link
                href="/politica-de-cookies"
                className="text-violet-300 hover:underline"
              >
                Política de Cookies
              </Link>
              .
            </p>
          </section>
        </SpotlightCard>

        {/* Bottom Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/[0.08] text-xs font-mono text-zinc-500">
          <span>Steven Rosales · Full Stack Developer & Software Architect</span>
          <div className="flex items-center gap-4">
            <Link
              href="/politica-de-cookies"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              Política de Cookies
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

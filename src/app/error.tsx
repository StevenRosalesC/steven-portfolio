"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { AlertOctagon, RotateCcw, Home, Bug } from "lucide-react";
import { SpotlightCard } from "@/components/SpotlightCard";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to telemetry or console in development
    console.error("Runtime exception caught by boundary:", error);
  }, [error]);

  return (
    <div className="relative min-h-screen bg-[#08090d] text-zinc-100 flex items-center justify-center p-4 sm:p-6 overflow-hidden">
      {/* Background Ambient Glows (Amber & Red) */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 w-full max-w-2xl">
        <SpotlightCard glowColor="pink" className="p-0 overflow-hidden bg-[#0c0e17]/95 border-red-500/20">
          {/* Terminal Window Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.08] bg-[#0f111a]/90">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56] animate-pulse" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
              <span className="ml-2 font-mono text-xs text-zinc-400">
                steven@dev:~/runtime-exception
              </span>
            </div>

            <div className="flex items-center gap-2 text-[11px] font-mono text-red-400">
              <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-ping" />
              <span>EXCEPTION_TRAPPED</span>
            </div>
          </div>

          {/* Terminal Body */}
          <div className="p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400">
                <AlertOctagon className="w-6 h-6" />
              </div>
              <div>
                <span className="font-mono text-xs text-red-400 tracking-wider">CRITICAL // RUNTIME_ERROR</span>
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-mono">
                  &gt; System Fault Trapped
                </h1>
              </div>
            </div>

            {/* Error Telemetry Stack Box */}
            <div className="p-4 rounded-xl bg-black/50 border border-red-500/20 font-mono text-xs sm:text-[13px] leading-relaxed mb-6 overflow-x-auto text-zinc-300">
              <div className="text-zinc-500 mb-2"># Stack telemetry trace</div>
              <div className="text-red-400 font-semibold">
                [FATAL]: {error.message || "An unexpected execution fault occurred during client render."}
              </div>
              {error.digest && (
                <div className="text-zinc-500 text-[11px] mt-1">
                  digest_id: <span className="text-zinc-400">{error.digest}</span>
                </div>
              )}
              <div className="mt-3 text-zinc-400 text-xs">
                <span className="text-amber-400">&gt; diagnostics:</span> Process terminated safely. State isolation preserved.
              </div>
            </div>

            {/* Recovery CLI Actions */}
            <div className="space-y-4">
              <div className="font-mono text-[11px] text-zinc-500 uppercase tracking-wider">
                Emergency Recovery Routines
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => reset()}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-red-600/90 hover:bg-red-500 text-white font-mono text-xs sm:text-sm font-medium transition-all shadow-[0_0_20px_rgba(239,68,68,0.3)] hover:shadow-[0_0_25px_rgba(239,68,68,0.5)] hover:-translate-y-0.5"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>$ systemctl --restart</span>
                </button>

                <Link
                  href="/"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] text-zinc-200 hover:text-white font-mono text-xs sm:text-sm transition-all hover:-translate-y-0.5"
                >
                  <Home className="w-4 h-4 text-zinc-400" />
                  <span>$ cd ~/home</span>
                </Link>

                <a
                  href="https://github.com/StevenRosalesC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.06] text-zinc-400 hover:text-zinc-200 font-mono text-xs transition-colors"
                >
                  <Bug className="w-3.5 h-3.5" />
                  <span>$ report --issue</span>
                </a>
              </div>
            </div>
          </div>

          {/* Terminal Footer */}
          <div className="px-4 py-2.5 bg-[#090b12] border-t border-white/[0.05] flex items-center justify-between text-[11px] font-mono text-zinc-500">
            <span>exit code: 139 (SIGSEGV/TRAP)</span>
            <span className="text-amber-400">kernel: sandboxed</span>
          </div>
        </SpotlightCard>
      </div>
    </div>
  );
}

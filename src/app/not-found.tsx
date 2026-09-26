"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Home, ArrowLeft, Search, FileQuestion } from "lucide-react";
import { SpotlightCard } from "@/components/SpotlightCard";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="relative min-h-screen bg-[#08090d] text-zinc-100 flex items-center justify-center p-4 sm:p-6 overflow-hidden">
      {/* Background Matrix & Ambient Glows */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 w-full max-w-2xl">
        <SpotlightCard glowColor="cyan" className="p-0 overflow-hidden bg-[#0c0e17]/95 border-white/[0.08]">
          {/* Terminal Window Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.08] bg-[#0f111a]/90">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
              <span className="ml-2 font-mono text-xs text-zinc-400">
                steven@dev:~/404-not-found
              </span>
            </div>

            <div className="flex items-center gap-2 text-[11px] font-mono text-cyan-400">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
              <span>ERR_PATH_MISSING</span>
            </div>
          </div>

          {/* Terminal Body */}
          <div className="p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                <FileQuestion className="w-6 h-6" />
              </div>
              <div>
                <span className="font-mono text-xs text-cyan-400 tracking-wider">STATUS CODE // 404</span>
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-mono">
                  &gt; Route Not Found
                </h1>
              </div>
            </div>

            {/* Simulated Terminal Shell Output */}
            <div className="p-4 rounded-xl bg-black/50 border border-white/[0.06] font-mono text-xs sm:text-[13px] leading-relaxed mb-6 overflow-x-auto text-zinc-300">
              <div className="text-zinc-500 mb-2"># Request telemetry diagnostics</div>
              <div>
                <span className="text-violet-400">$</span>{" "}
                <span className="text-zinc-200">curl -I https://steven.dev/current-url</span>
              </div>
              <div className="text-red-400 mt-1">HTTP/2 404 Not Found</div>
              <div className="text-zinc-400">Content-Type: application/json; charset=utf-8</div>
              <div className="text-zinc-400">X-Telemetry-Status: SECTOR_UNREACHABLE</div>
              <div className="mt-3 text-zinc-400">
                <span className="text-cyan-400">&gt; message:</span> &quot;The route or resource you are looking for has been moved, deleted, or does not exist in this matrix.&quot;
              </div>
              <div className="mt-2 flex items-center gap-2 text-zinc-500">
                <span className="text-cyan-400">$</span>
                <span className="w-2 h-4 bg-cyan-400/80 animate-pulse" />
              </div>
            </div>

            {/* Navigation CLI Options */}
            <div className="space-y-4">
              <div className="font-mono text-[11px] text-zinc-500 uppercase tracking-wider">
                Available Recovery Routines
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-mono text-xs sm:text-sm font-medium transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] hover:-translate-y-0.5"
                >
                  <Home className="w-4 h-4" />
                  <span>$ cd ~/home</span>
                </Link>

                <button
                  onClick={() => router.back()}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] text-zinc-200 hover:text-white font-mono text-xs sm:text-sm transition-all hover:-translate-y-0.5"
                >
                  <ArrowLeft className="w-4 h-4 text-zinc-400" />
                  <span>$ history --back</span>
                </button>

                <Link
                  href="/#projects"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.06] text-zinc-400 hover:text-zinc-200 font-mono text-xs transition-colors"
                >
                  <Search className="w-3.5 h-3.5" />
                  <span>$ ls ./projects</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Terminal Footer */}
          <div className="px-4 py-2.5 bg-[#090b12] border-t border-white/[0.05] flex items-center justify-between text-[11px] font-mono text-zinc-500">
            <span>exit code: 1 (not found)</span>
            <span className="text-cyan-400">system: responsive</span>
          </div>
        </SpotlightCard>
      </div>
    </div>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import { SpotlightCard } from "./SpotlightCard";
import { Clock, Layers, GitCommit, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export function StatsBento() {
  const [metrics, setMetrics] = useState<{
    totalRepos: number;
    privateRepos: number;
    publicRepos: number;
    totalContributions?: number;
  } | null>(null);
  const { dict, language } = useLanguage();

  useEffect(() => {
    let isMounted = true;
    fetch("/api/github")
      .then((res) => res.json())
      .then((data) => {
        if (isMounted && data.success && data.metrics) {
          setMetrics(data.metrics);
        }
      })
      .catch((e) => console.warn("Using offline stats", e));

    return () => {
      isMounted = false;
    };
  }, []);

  const statsList = [
    {
      label: dict.stats.experience,
      value: "3+",
      sub: dict.stats.experienceDesc,
      icon: Clock,
      accent: "violet" as const,
      badge: "METRIC_01",
    },
    {
      label: dict.stats.totalRepos,
      value: metrics ? `${metrics.totalRepos}` : "49",
      sub: metrics
        ? language === "es"
          ? `${metrics.privateRepos} Privados · ${metrics.publicRepos} Públicos`
          : `${metrics.privateRepos} Private · ${metrics.publicRepos} Public`
        : language === "es"
          ? "35 Privados · 14 Públicos"
          : "35 Private · 14 Public",
      icon: Layers,
      accent: "cyan" as const,
      badge: "METRIC_02",
    },
    {
      label: dict.stats.contributions,
      value: metrics?.totalContributions ? `${metrics.totalContributions}+` : "560+",
      sub: dict.stats.contributionsDesc,
      icon: GitCommit,
      accent: "emerald" as const,
      badge: "METRIC_03",
    },
    {
      label: dict.stats.quality,
      value: "99.9%",
      sub: dict.stats.qualityDesc,
      icon: ShieldCheck,
      accent: "pink" as const,
      badge: "STATUS_OK",
    },
  ];

  return (
    <section className="py-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {statsList.map((stat) => {
          const IconComponent = stat.icon;
          return (
            <SpotlightCard
              key={stat.badge}
              glowColor={stat.accent}
              className="p-5 flex flex-col justify-between group"
            >
              <div className="flex items-center justify-between text-zinc-500 mb-3">
                <span className="font-mono text-[10px] tracking-wider uppercase text-zinc-400">
                  {stat.badge}
                </span>
                <IconComponent className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
              </div>

              <div>
                <div className="font-mono text-3xl sm:text-4xl font-extrabold tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-zinc-300 transition-all">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-zinc-300 font-medium mt-1">
                  {stat.label}
                </div>
                <div className="text-[11px] font-mono text-zinc-400 mt-0.5">
                  {stat.sub}
                </div>
              </div>

              <div className="mt-4 pt-2 border-t border-white/[0.04] flex items-center justify-between">
                <span className="text-[10px] font-mono text-zinc-400">telemetry</span>
                <span className="h-1 w-8 rounded-full bg-white/[0.06] overflow-hidden">
                  <span className="h-full block bg-violet-400/80 w-3/4 rounded-full" />
                </span>
              </div>
            </SpotlightCard>
          );
        })}
      </div>
    </section>
  );
}

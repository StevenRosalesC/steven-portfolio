"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { SpotlightCard } from "./SpotlightCard";
import { Calendar } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export function ExperienceBento() {
  const { dict, language } = useLanguage();

  const getBilingual = (val: string | { es: string; en: string }) => {
    if (typeof val === "string") return val;
    return val[language] || val.es || val.en;
  };

  return (
    <section id="experience" className="py-12">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
        <div>
          <div className="font-mono text-xs text-violet-400 tracking-wider flex items-center gap-2 mb-1">
            <span className="text-zinc-600">{dict.experience.sectionNum}</span>
            <span>{dict.experience.sectionBadge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white flex items-center gap-3">
            <span>{dict.experience.title}</span>
            <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 font-normal">
              Commercial &amp; Engineering Track
            </span>
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-zinc-400 max-w-md font-mono">
          $ cat ./experience.log: History of engineering high-impact production apps.
        </p>
      </div>

      {/* Experience Bento Card */}
      <SpotlightCard glowColor="violet" className="p-6 sm:p-8">
        <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-[11px] before:top-3 before:bottom-3 before:w-[2px] before:bg-gradient-to-b before:from-violet-500 before:via-cyan-500 before:to-emerald-500/30">
          {portfolioData.experience.map((exp) => (
            <div key={exp.company} className="relative group">
              {/* Glowing Node Dot */}
              <div
                className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 transition-all ${
                  exp.current
                    ? "bg-violet-500 border-white shadow-[0_0_12px_rgba(139,92,246,0.8)]"
                    : "bg-[#0d0f17] border-white/30 group-hover:border-violet-400 group-hover:bg-violet-500/20"
                }`}
              />

              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="font-mono text-base sm:text-lg font-semibold text-white group-hover:text-violet-300 transition-colors">
                    {getBilingual(exp.role)}
                  </h3>
                  <span className="text-violet-400 font-mono text-sm">@ {exp.company}</span>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400">
                  <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                  <span>{getBilingual(exp.period)}</span>
                </div>
              </div>

              <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-4 max-w-3xl">
                {getBilingual(exp.description)}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-0.5 rounded-md bg-white/[0.03] border border-white/[0.06] font-mono text-[11px] text-zinc-300 group-hover:border-violet-500/20 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SpotlightCard>
    </section>
  );
}

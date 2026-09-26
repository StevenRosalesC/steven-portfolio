"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { SpotlightCard } from "./SpotlightCard";
import { Clock, ArrowUpRight, Terminal } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export function WritingBento() {
  const { dict, language } = useLanguage();

  const getBilingual = (val: string | { es: string; en: string }) => {
    if (typeof val === "string") return val;
    return val[language] || val.es || val.en;
  };

  return (
    <section className="py-12">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
        <div>
          <div className="font-mono text-xs text-violet-400 tracking-wider flex items-center gap-2 mb-1">
            <span className="text-zinc-600">{dict.writing.sectionNum}</span>
            <span>{dict.writing.sectionBadge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white flex items-center gap-3">
            <span>{dict.writing.title}</span>
            <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 font-normal">
              Technical Writing
            </span>
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-zinc-400 max-w-md font-mono">
          $ cat ./articles: Sharing insights on full-stack architecture, databases, and UI craft.
        </p>
      </div>

      {/* Bento Grid: 3 Article Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {portfolioData.articles.map((article, idx) => (
          <SpotlightCard
            key={idx}
            glowColor={idx % 2 === 0 ? "violet" : "cyan"}
            className="p-6 flex flex-col justify-between group cursor-pointer hover:border-violet-500/30"
          >
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/[0.06]">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-violet-500/10 border border-violet-500/20 text-violet-300">
                  {article.category}
                </span>

                <div className="flex items-center gap-1 text-[11px] font-mono text-zinc-400">
                  <Clock className="w-3 h-3" />
                  <span>{getBilingual(article.readTime)}</span>
                </div>
              </div>

              <h3 className="font-mono text-sm sm:text-base font-semibold text-zinc-100 group-hover:text-violet-300 transition-colors mb-2 leading-snug">
                {getBilingual(article.title)}
              </h3>

              <p className="text-zinc-300 text-xs leading-relaxed mb-6">
                {getBilingual(article.excerpt)}
              </p>
            </div>

            <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between font-mono text-xs text-zinc-400">
              <span>{getBilingual(article.date)}</span>
              <span className="flex items-center gap-1 text-violet-400 group-hover:text-violet-300 transition-colors">
                <span>{dict.writing.readArticle}</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </div>
          </SpotlightCard>
        ))}
      </div>

      {/* CLI Button at bottom */}
      <div className="mt-8 flex justify-center">
        <button
          type="button"
          onClick={() =>
            alert(
              language === "es"
                ? "¡Pronto habrá más artículos en el blog técnico!"
                : "More articles coming soon to the technical blog!"
            )
          }
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] hover:border-white/[0.15] text-zinc-300 hover:text-white font-mono text-xs transition-all"
        >
          <Terminal className="w-3.5 h-3.5 text-violet-400" />
          <span>$ ls ./blog --all</span>
        </button>
      </div>
    </section>
  );
}

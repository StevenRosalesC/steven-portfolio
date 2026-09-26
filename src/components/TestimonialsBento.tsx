"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { SpotlightCard } from "./SpotlightCard";
import { Quote } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export function TestimonialsBento() {
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
          <div className="font-mono text-xs text-pink-400 tracking-wider flex items-center gap-2 mb-1">
            <span className="text-zinc-600">{dict.testimonials.sectionNum}</span>
            <span>{dict.testimonials.sectionBadge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white flex items-center gap-3">
            <span>{dict.testimonials.title}</span>
            <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-300 font-normal">
              Verified Recommendations
            </span>
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-zinc-400 max-w-md font-mono">
          $ review --summary: Testimonials from colleagues, product managers, and founders.
        </p>
      </div>

      {/* Bento Grid: 3 Testimonial Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {portfolioData.testimonials.map((item, idx) => (
          <SpotlightCard
            key={item.author}
            glowColor={idx === 1 ? "violet" : "cyan"}
            className="p-6 flex flex-col justify-between"
          >
            <div>
              <div className="p-2 w-fit rounded-lg bg-white/[0.03] border border-white/[0.06] text-pink-400 mb-4">
                <Quote className="w-4 h-4" />
              </div>

              <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-6 italic">
                &ldquo;{getBilingual(item.quote)}&rdquo;
              </p>
            </div>

            <div className="pt-4 border-t border-white/[0.06] flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-violet-600 to-cyan-500 flex items-center justify-center font-mono text-xs font-bold text-white shadow-sm shrink-0">
                {item.avatarInitials}
              </div>

              <div className="min-w-0">
                <h3 className="font-mono text-xs sm:text-sm font-semibold text-white truncate">
                  {item.author}
                </h3>
                <p className="text-[11px] font-mono text-zinc-400 truncate">
                  {getBilingual(item.role)}
                </p>
              </div>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
}

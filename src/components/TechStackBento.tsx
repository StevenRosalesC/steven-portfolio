"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import { SpotlightCard } from "./SpotlightCard";
import {
  Code2,
  FileCode,
  Terminal,
  FileText,
  Database,
  Layout,
  Boxes,
  Atom,
  Palette,
  Component,
  Sparkles,
  Server,
  Cpu,
  Layers,
  Workflow,
  Network,
  HardDrive,
  Container,
  GitBranch,
} from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

// Icon mapping helper
const iconMap: Record<string, React.ElementType> = {
  Code2,
  FileCode,
  Terminal,
  FileText,
  Database,
  Layout,
  Boxes,
  Atom,
  Palette,
  Component,
  Sparkles,
  Server,
  Cpu,
  Layers,
  Workflow,
  Network,
  HardDrive,
  Container,
  GitBranch,
};

export function TechStackBento() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const { dict } = useLanguage();

  const getAccentColor = (accent: string) => {
    switch (accent) {
      case "cyan":
        return {
          glow: "cyan" as const,
          border: "hover:border-cyan-500/40",
          text: "text-cyan-400",
          badge: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
          indicator: "bg-cyan-400",
        };
      case "violet":
        return {
          glow: "violet" as const,
          border: "hover:border-violet-500/40",
          text: "text-violet-400",
          badge: "bg-violet-500/10 text-violet-300 border-violet-500/20",
          indicator: "bg-violet-400",
        };
      case "emerald":
        return {
          glow: "emerald" as const,
          border: "hover:border-emerald-500/40",
          text: "text-emerald-400",
          badge: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
          indicator: "bg-emerald-400",
        };
      case "pink":
      default:
        return {
          glow: "pink" as const,
          border: "hover:border-pink-500/40",
          text: "text-pink-400",
          badge: "bg-pink-500/10 text-pink-300 border-pink-500/20",
          indicator: "bg-pink-400",
        };
    }
  };

  const getCategoryTitle = (rawCat: string) => {
    switch (rawCat) {
      case "Languages":
        return dict.techStack.categories.languages;
      case "Frontend & UI":
        return dict.techStack.categories.frontend;
      case "Backend & Systems":
        return dict.techStack.categories.backend;
      case "Database & DevOps":
        return dict.techStack.categories.devops;
      default:
        return rawCat;
    }
  };

  const getLevelLabel = (level: string) => {
    if (level === "Advanced") return dict.techStack.levels.advanced;
    if (level === "Intermediate") return dict.techStack.levels.intermediate;
    return level;
  };

  return (
    <section id="stack" className="py-12">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
        <div>
          <div className="font-mono text-xs text-violet-400 tracking-wider flex items-center gap-2 mb-1">
            <span className="text-zinc-600">{dict.techStack.sectionNum}</span>
            <span>{dict.techStack.sectionBadge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white flex items-center gap-3">
            <span>{dict.techStack.title}</span>
            <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-white/[0.05] border border-white/[0.08] text-zinc-400 font-normal">
              Production Tested
            </span>
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-zinc-400 max-w-md font-mono">
          $ query --ecosystem: Core languages, frameworks, databases, and DevOps workflows.
        </p>
      </div>

      {/* Bento Grid: 4 Category Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {portfolioData.techStack.map((category) => {
          const colors = getAccentColor(category.accent);
          const categoryTitle = getCategoryTitle(category.category);

          return (
            <SpotlightCard
              key={category.category}
              glowColor={colors.glow}
              className={`p-6 flex flex-col justify-between ${colors.border}`}
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.06]">
                  <div className="flex items-center gap-2.5">
                    <span className={`w-2 h-2 rounded-full ${colors.indicator}`} />
                    <h3 className="font-mono text-sm sm:text-base font-semibold text-zinc-200">
                      {categoryTitle}
                    </h3>
                  </div>
                  <span className="text-[11px] font-mono text-zinc-400">
                    {category.items.length} modules
                  </span>
                </div>

                {/* Tech Pills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {category.items.map((item) => {
                    const IconComp = iconMap[item.icon] || Code2;
                    const isHovered = hoveredTech === item.name;

                    return (
                      <div
                        key={item.name}
                        onMouseEnter={() => setHoveredTech(item.name)}
                        onMouseLeave={() => setHoveredTech(null)}
                        className={`group relative p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.07] hover:border-white/[0.15] transition-all flex flex-col justify-between ${
                          isHovered ? "scale-[1.02] shadow-sm" : ""
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <IconComp
                            className={`w-4 h-4 text-zinc-400 group-hover:${colors.text} transition-colors`}
                          />
                          <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/[0.04] text-zinc-400 border border-white/[0.04]">
                            {getLevelLabel(item.level)}
                          </span>
                        </div>
                        <span className="font-mono text-xs font-medium text-zinc-200 group-hover:text-white">
                          {item.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom telemetry footer */}
              <div className="mt-5 pt-3 border-t border-white/[0.04] flex items-center justify-between text-[10px] font-mono text-zinc-400">
                <span>verified: true</span>
                <span className={colors.text}>{"// ready"}</span>
              </div>
            </SpotlightCard>
          );
        })}
      </div>
    </section>
  );
}

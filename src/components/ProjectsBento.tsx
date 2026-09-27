"use client";

import React, { useState, useEffect } from "react";
import { portfolioData, Project } from "@/data/portfolioData";
import { SpotlightCard } from "./SpotlightCard";
import { FolderGit2, Star, GitFork, ExternalLink, Sparkles, Terminal, Lock } from "lucide-react";
import { GithubIcon } from "./Icons";
import { useLanguage } from "@/i18n/LanguageContext";

export function ProjectsBento() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [projectsList, setProjectsList] = useState<Project[]>(portfolioData.projects);
  const { dict, language } = useLanguage();

  useEffect(() => {
    let isMounted = true;
    fetch("/api/github")
      .then((res) => res.json())
      .then((data) => {
        if (isMounted && data.success && Array.isArray(data.repos)) {
          // Only enrich projects that are explicitly defined in the curated array
          setProjectsList((prevList) =>
            prevList.map((project) => {
              const match = data.repos.find(
                (r: { id?: string; title?: string; stars?: number; forks?: number }) =>
                  r.id?.toLowerCase() === project.id.toLowerCase() ||
                  r.title?.toLowerCase() === project.id.toLowerCase() ||
                  (project.githubUrl && project.githubUrl.endsWith(`/${r.id}`))
              );
              if (match) {
                return {
                  ...project,
                  stars: match.stars !== undefined ? match.stars : project.stars,
                  forks: match.forks !== undefined ? match.forks : project.forks,
                };
              }
              return project;
            })
          );
        }
      })
      .catch((e) => console.warn("Using curated projects list", e));

    return () => {
      isMounted = false;
    };
  }, []);

  const getDesc = (desc: string | { es: string; en: string }) => {
    if (typeof desc === "string") return desc;
    return desc[language] || desc.es || desc.en;
  };

  const getTitle = (title: string | { es: string; en: string }) => {
    if (typeof title === "string") return title;
    return title[language] || title.es || title.en;
  };

  const getCategoryLabel = (cat: string) => {
    if (cat === "All") return dict.projects.filterAll;
    if (cat === "Full Stack") return dict.projects.categories.fullStack;
    if (cat === "Frontend") return dict.projects.categories.frontend;
    if (cat === "Backend & DevOps") return dict.projects.categories.backend;
    if (cat === "Tools") return dict.projects.categories.tools;
    if (cat === "Mobile") return dict.projects.categories.mobile;
    return cat;
  };

  const getStats = (stats?: string | { es: string; en: string }) => {
    if (!stats) return undefined;
    if (typeof stats === "string") return stats;
    return stats[language] || stats.es || stats.en;
  };

  // Compute unique categories present in the curated projects
  const rawCategories = Array.from(new Set(portfolioData.projects.map((p) => p.category)));
  const categories = ["All", ...rawCategories];

  const filteredProjects =
    activeFilter === "All"
      ? projectsList
      : projectsList.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-12">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
        <div>
          <div className="font-mono text-xs text-cyan-400 tracking-wider flex items-center gap-2 mb-1">
            <span className="text-zinc-600">{dict.projects.sectionNum}</span>
            <span>{dict.projects.sectionBadge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white flex items-center gap-3">
            <span>{dict.projects.title}</span>
            <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-normal">
              {dict.projects.subtitle}
            </span>
          </h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#11131f] border border-white/[0.06] overflow-x-auto text-xs font-mono">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveFilter(cat)}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeFilter === cat
                  ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 shadow-sm"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              {getCategoryLabel(cat)}
            </button>
          ))}
        </div>
      </div>

      {/* Bento Grid: 1 Large card + 2-3 standard cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredProjects.map((project, idx) => {
          const isLarge = project.featured && (idx === 0 || activeFilter === "All" && idx < 2);

          return (
            <SpotlightCard
              key={project.id}
              glowColor={project.isPrivate ? "pink" : idx % 2 === 0 ? "cyan" : "violet"}
              className={`h-full p-6 group ${
                isLarge ? "md:col-span-2 lg:col-span-2 bg-[#0c0e18]" : "col-span-1"
              }`}
            >
              <div className="h-full flex flex-col justify-between">
                {/* Upper Card Content */}
                <div className="flex-1 flex flex-col">
                  {/* Project Card Header */}
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/[0.06]">
                    <div className="flex items-center gap-2.5">
                      <div className={`p-2 rounded-lg border transition-all ${
                        project.isPrivate
                          ? "bg-amber-500/10 border-amber-500/20 text-amber-300 group-hover:bg-amber-500/20"
                          : "bg-white/[0.04] border-white/[0.08] text-cyan-400 group-hover:text-white group-hover:bg-cyan-500/20 group-hover:border-cyan-500/30"
                      }`}>
                        <FolderGit2 className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="font-mono text-base font-semibold text-zinc-100 group-hover:text-cyan-300 transition-colors flex items-center gap-2">
                          <span>{getTitle(project.title)}</span>
                        </h3>
                        <span className="text-[10px] font-mono text-zinc-400">
                          {getCategoryLabel(project.category)}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5">
                      {project.isPrivate ? (
                        <span className="flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono bg-amber-500/10 border border-amber-500/20 text-amber-300">
                          <Lock className="w-2.5 h-2.5" />
                          <span>{dict.projects.privateBadge}</span>
                        </span>
                      ) : (
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-500/10 border border-cyan-500/20 text-cyan-300">
                          {dict.projects.publicBadge}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-5">
                    {getDesc(project.description)}
                  </p>

                  {/* Performance or special stats highlight */}
                  {project.stats && (
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/5 border border-emerald-500/15 text-emerald-400 font-mono text-[11px] mb-5">
                      <Sparkles className="w-3.5 h-3.5 shrink-0" />
                      <span>{getStats(project.stats)}</span>
                    </div>
                  )}

                  {/* Tech Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md bg-white/[0.03] border border-white/[0.07] font-mono text-[11px] text-zinc-300 hover:text-white hover:border-white/[0.15] transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer: GitHub Stats + Live/Code Links */}
                <div className="mt-auto pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-3 text-zinc-400">
                    {project.language && (
                      <span className="flex items-center gap-1.5 hover:text-zinc-300">
                        <span
                          className={`w-2 h-2 rounded-full inline-block ${
                            project.languageColor || "bg-blue-400"
                          }`}
                        />
                        <span>{project.language}</span>
                      </span>
                    )}
                    {project.stars !== undefined && (
                      <span className="flex items-center gap-1 text-zinc-400">
                        <Star className="w-3.5 h-3.5 text-zinc-400" />
                        <span>{project.stars}</span>
                      </span>
                    )}
                    {project.forks !== undefined && (
                      <span className="flex items-center gap-1 text-zinc-400">
                        <GitFork className="w-3.5 h-3.5 text-zinc-400" />
                        <span>{project.forks}</span>
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    {project.isPrivate ? (
                      <span
                        className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-white/[0.02] border border-white/[0.04] text-[11px] text-zinc-400 font-mono"
                        title="Internal private repository"
                      >
                        <Lock className="w-3 h-3 text-amber-400/80" />
                        <span>{dict.projects.privateBadge}</span>
                      </span>
                    ) : (
                      project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-zinc-400 hover:text-white border border-white/[0.06] transition-all"
                          aria-label={`View ${getTitle(project.title)} source code on GitHub`}
                          title="View GitHub Repository"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                        </a>
                      )
                    )}

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/20 hover:border-cyan-500/40 transition-all font-medium"
                        aria-label={`Open live demo for ${getTitle(project.title)}`}
                      >
                        <span>{dict.projects.liveButton}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </SpotlightCard>
          );
        })}
      </div>

      {/* CLI Link at bottom */}
      <div className="mt-8 flex justify-center">
        <a
          href={portfolioData.personal.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] hover:border-white/[0.15] text-zinc-300 hover:text-white font-mono text-xs transition-all"
        >
          <Terminal className="w-3.5 h-3.5 text-cyan-400" />
          <span>{dict.projects.cliButton}</span>
        </a>
      </div>
    </section>
  );
}

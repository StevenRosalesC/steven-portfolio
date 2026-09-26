"use client";

import React, { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolioData";
import { SpotlightCard } from "./SpotlightCard";
import { GitPullRequest, GitMerge, GitCommit, CheckCircle2, Flame } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

interface ActivityEvent {
  type: string;
  title: string;
  details: string;
  time: string;
}

export function GithubHeatmapBento() {
  const [hoveredCell, setHoveredCell] = useState<{ date: string; count: number } | null>(null);
  const [liveData, setLiveData] = useState<{
    contributions: ContributionDay[] | null;
    totalContributions: number;
    recentActivity: ActivityEvent[];
  } | null>(null);
  const [isLive, setIsLive] = useState(false);
  const { dict, language } = useLanguage();

  useEffect(() => {
    let isMounted = true;
    async function loadGithubData() {
      try {
        const res = await fetch("/api/github");
        if (!res.ok) throw new Error("API response error");
        const data = await res.json();
        if (isMounted && data.success) {
          setLiveData(data);
          setIsLive(true);
        }
      } catch (e) {
        console.warn("Using offline GitHub telemetry fallback", e);
      }
    }
    loadGithubData();
    return () => {
      isMounted = false;
    };
  }, []);

  // Compute weeks from live contributions (last 182 days = 26 weeks) or fallback to deterministic
  const totalWeeks = 26;
  const daysPerWeek = 7;

  // Real or fallback grid data
  const gridCells: ContributionDay[][] = React.useMemo(() => {
    if (liveData?.contributions && liveData.contributions.length > 0) {
      const sliced = liveData.contributions.slice(-182);
      const weeksArr: ContributionDay[][] = [];
      for (let i = 0; i < sliced.length; i += 7) {
        weeksArr.push(sliced.slice(i, i + 7));
      }
      return weeksArr;
    }

    // Deterministic fallback if offline
    return Array.from({ length: totalWeeks }).map((_, w) =>
      Array.from({ length: daysPerWeek }).map((_, d) => {
        const seed = (w * 13 + d * 7 + (w % 3) * 5) % 17;
        const level = seed < 4 ? 0 : seed < 8 ? 1 : seed < 12 ? 2 : seed < 15 ? 3 : 4;
        const count = level === 0 ? 0 : level * 2 + 1;
        return {
          date: `2026-W${w + 1}-D${d + 1}`,
          count,
          level,
        };
      })
    );
  }, [liveData]);

  const getColorClass = (level: number) => {
    switch (level) {
      case 0:
        return "bg-white/[0.03] border-white/[0.04]";
      case 1:
        return "bg-violet-950/60 border-violet-900/40";
      case 2:
        return "bg-violet-700/80 border-violet-600/50";
      case 3:
        return "bg-violet-500 border-violet-400/60";
      case 4:
        return "bg-cyan-400 border-cyan-300 shadow-[0_0_8px_rgba(6,182,212,0.7)]";
      default:
        return "bg-white/[0.03]";
    }
  };

  const activities = liveData?.recentActivity && liveData.recentActivity.length > 0
    ? liveData.recentActivity
    : portfolioData.recentActivity;

  const totalCount = liveData?.totalContributions ?? 32;

  return (
    <section id="activity" className="py-12">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
        <div>
          <div className="font-mono text-xs text-emerald-400 tracking-wider flex items-center gap-2 mb-1">
            <span className="text-zinc-600">{dict.activity.sectionNum}</span>
            <span>{dict.activity.sectionBadge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white flex items-center gap-3">
            <span>{dict.activity.title}</span>
            <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 font-normal">
              Active Commits
            </span>
          </h2>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
          <Flame className="w-3.5 h-3.5 text-amber-400" />
          <span>Continuous Integration Pipeline</span>
        </div>
      </div>

      {/* Bento Grid: Heatmap (7 cols) + Recent Activity (5 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        {/* Heatmap Card */}
        <SpotlightCard glowColor="violet" className="lg:col-span-7 p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/[0.06]">
              <span className="font-mono text-xs text-violet-400 flex items-center gap-2">
                <span>$ git log --contributions --user StevenRosalesC</span>
              </span>
              <span className="text-[11px] font-mono text-zinc-400">
                {totalCount} {dict.activity.contributionsCount}
              </span>
            </div>

            {/* Heatmap Grid */}
            <div className="overflow-x-auto pb-2">
              <div className="inline-grid grid-rows-7 grid-flow-col gap-1.5 p-2.5 rounded-xl bg-black/40 border border-white/[0.04]">
                {gridCells.map((week, wIdx) =>
                  week.map((day, dIdx) => (
                    <div
                      key={`${wIdx}-${dIdx}`}
                      onMouseEnter={() => setHoveredCell({ date: day.date, count: day.count })}
                      onMouseLeave={() => setHoveredCell(null)}
                      className={`w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-xs border transition-all hover:scale-125 cursor-pointer ${getColorClass(
                        day.level
                      )}`}
                      title={`${day.count} commits on ${day.date}`}
                    />
                  ))
                )}
              </div>
            </div>

            {/* Hover Tooltip display */}
            <div className="min-h-[22px] mt-2 font-mono text-[11px] text-zinc-400 flex items-center justify-between">
              {hoveredCell ? (
                <span className="text-cyan-300">
                  {hoveredCell.date}: {hoveredCell.count} {hoveredCell.count === 1 ? dict.activity.commit : dict.activity.commits}
                </span>
              ) : (
                <span className="text-zinc-500">
                  {language === "es"
                    ? "Pasa el cursor sobre cualquier bloque para ver la telemetría"
                    : "Hover over any block to view commit telemetry"}
                </span>
              )}
            </div>
          </div>

          {/* Legend & Status */}
          <div className="mt-4 pt-3 border-t border-white/[0.04] flex items-center justify-between text-[11px] font-mono text-zinc-400">
            <span>{dict.activity.less}</span>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-xs bg-white/[0.03] border border-white/[0.05]" />
              <span className="w-2.5 h-2.5 rounded-xs bg-violet-950 border border-violet-900" />
              <span className="w-2.5 h-2.5 rounded-xs bg-violet-700" />
              <span className="w-2.5 h-2.5 rounded-xs bg-violet-500" />
              <span className="w-2.5 h-2.5 rounded-xs bg-cyan-400 shadow-[0_0_5px_rgba(6,182,212,0.8)]" />
            </div>
            <span>{dict.activity.more}</span>
          </div>
        </SpotlightCard>

        {/* Recent Activity Card */}
        <SpotlightCard glowColor="emerald" className="lg:col-span-5 p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/[0.06]">
              <span className="font-mono text-xs text-emerald-400">
                $ recent --activity (StevenRosalesC)
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </div>

            <div className="space-y-4">
              {activities.map((activity, idx) => (
                <div key={idx} className="group flex items-start gap-3">
                  <div className="p-1.5 rounded-md bg-white/[0.04] border border-white/[0.08] text-emerald-400 group-hover:bg-emerald-500/20 group-hover:border-emerald-500/30 transition-all shrink-0 mt-0.5">
                    {activity.type === "merge" && <GitMerge className="w-3.5 h-3.5" />}
                    {activity.type === "release" && <CheckCircle2 className="w-3.5 h-3.5" />}
                    {activity.type === "commit" && <GitCommit className="w-3.5 h-3.5" />}
                    {activity.type === "pr" && <GitPullRequest className="w-3.5 h-3.5" />}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="font-mono text-xs font-semibold text-zinc-200 group-hover:text-emerald-300 transition-colors truncate">
                        {activity.title}
                      </h4>
                      <span className="text-[10px] font-mono text-zinc-400 shrink-0">
                        {activity.time}
                      </span>
                    </div>
                    <p className="text-zinc-400 text-xs mt-0.5 line-clamp-1">
                      {activity.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 pt-3 border-t border-white/[0.04] flex items-center justify-between text-[11px] font-mono text-zinc-400">
            <span>sync: {isLive ? "live github api" : "cached"}</span>
            <span className="text-emerald-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span>{isLive ? "connected" : "standby"}</span>
            </span>
          </div>
        </SpotlightCard>
      </div>
    </section>
  );
}

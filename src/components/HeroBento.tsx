"use client";

import React, { useState } from "react";
import { Copy, Check, ArrowRight, Mail } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { SpotlightCard } from "./SpotlightCard";
import { useLanguage } from "@/i18n/LanguageContext";

export function HeroBento() {
  const [activeTab, setActiveTab] = useState<"about" | "skills" | "contact">("about");
  const [copied, setCopied] = useState(false);
  const { dict } = useLanguage();

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getTerminalContent = () => {
    switch (activeTab) {
      case "about":
        return JSON.stringify(
          {
            name: portfolioData.personal.name,
            role: dict.hero.aboutTerminal.role,
            location: dict.hero.aboutTerminal.location,
            status: dict.hero.aboutTerminal.status,
            skills: [
              "Next.js",
              "TypeScript",
              "React",
              "Node.js",
              "NestJS",
              "PostgreSQL",
              "Tailwind CSS",
              "Docker",
            ],
            philosophy: dict.hero.aboutTerminal.philosophy,
          },
          null,
          2
        );
      case "skills":
        return `#!/bin/bash
# Steven's Core Architecture Stack

PRIMARY_FRONTEND=("Next.js 16" "React 19" "TypeScript" "Tailwind CSS")
PRIMARY_BACKEND=("Node.js" "NestJS" "Express" "Laravel")
DATABASES=("PostgreSQL" "MongoDB" "Redis")
DEVOPS=("Docker" "Git & CI/CD" "Linux" "Vercel")

echo "Status: System ready for high concurrency & scale."`;
      case "contact":
        return `// Direct Contact Pipeline
const contact = {
  email: "${portfolioData.personal.email}",
  github: "${portfolioData.personal.github}",
  linkedin: "${portfolioData.personal.linkedin}",
  timezone: "${portfolioData.personal.timezone}",
  availability: "${dict.hero.aboutTerminal.status}"
};

console.log("Ready to build something impactful.");`;
    }
  };

  return (
    <section id="home" className="pt-24 pb-8 sm:pt-32 sm:pb-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        {/* Left Bento: Hero Identity (7 cols on lg) */}
        <SpotlightCard
          glowColor="violet"
          className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between"
        >
          {/* Ambient subtle glow background */}
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-violet-600/15 rounded-full blur-3xl pointer-events-none" />

          <div>
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs mb-6 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>{dict.hero.badge}</span>
            </div>

            {/* Code syntax headline */}
            <div className="font-mono mb-4">
              <div className="text-sm sm:text-base text-zinc-400">
                <span className="text-violet-400 font-semibold">const</span>{" "}
                <span className="text-cyan-400">developer</span>{" "}
                <span className="text-zinc-500">=</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mt-1">
                &quot;<span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-300 to-cyan-300">{portfolioData.personal.name}</span>&quot;
              </h1>
            </div>

            {/* Role and comment */}
            <div className="font-mono text-xs sm:text-sm text-zinc-400 mb-4">
              <span className="text-zinc-600">{"//"}</span> {dict.hero.role}
            </div>

            {/* Bio paragraph */}
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-xl mb-8">
              {dict.hero.bio}
            </p>
          </div>

          {/* Action buttons (CLI style) */}
          <div className="space-y-4 pt-4 border-t border-white/[0.06]">
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-violet-600/90 hover:bg-violet-500 text-white font-mono text-xs sm:text-sm font-medium transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] hover:-translate-y-0.5"
              >
                <span>$ view --projects</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] hover:border-white/[0.2] text-zinc-200 hover:text-white font-mono text-xs sm:text-sm font-medium transition-all hover:-translate-y-0.5"
              >
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span>$ {dict.hero.contactButton.toLowerCase()}</span>
              </a>

              <button
                type="button"
                onClick={() => copyToClipboard(portfolioData.personal.email)}
                className="inline-flex items-center gap-1.5 px-3 py-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.06] text-zinc-400 hover:text-zinc-200 font-mono text-xs transition-colors"
                title="Copy email address"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">{dict.hero.copied}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>{dict.hero.copyEmail.toLowerCase()}</span>
                  </>
                )}
              </button>
            </div>

            {/* Quick tags */}
            <div className="flex items-center gap-2 flex-wrap text-[11px] font-mono text-zinc-400 pt-2">
              <span className="text-zinc-600">focus:</span>
              <span className="px-2 py-0.5 rounded-md bg-white/[0.03] border border-white/[0.06]">#NextJS</span>
              <span className="px-2 py-0.5 rounded-md bg-white/[0.03] border border-white/[0.06]">#TypeScript</span>
              <span className="px-2 py-0.5 rounded-md bg-white/[0.03] border border-white/[0.06]">#NestJS</span>
              <span className="px-2 py-0.5 rounded-md bg-white/[0.03] border border-white/[0.06]">#PostgreSQL</span>
            </div>
          </div>
        </SpotlightCard>

        {/* Right Bento: Interactive Terminal (5 cols on lg) */}
        <SpotlightCard
          glowColor="cyan"
          className="lg:col-span-5 p-0 flex flex-col justify-between bg-[#0a0c13]/90"
        >
          {/* Terminal Window Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.08] bg-[#0f111a]/80">
            {/* macOS control dots */}
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e]/50" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123]/50" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29]/50" />
              <span className="ml-2 font-mono text-xs text-zinc-400">
                steven@dev:~
              </span>
            </div>

            {/* Copy button */}
            <button
              type="button"
              onClick={() => copyToClipboard(getTerminalContent())}
              className="flex items-center gap-1 px-2 py-1 rounded text-[11px] font-mono text-zinc-400 hover:text-white hover:bg-white/[0.06] transition-colors"
              title="Copy terminal content"
            >
              {copied ? (
                <>
                  <Check className="w-3 h-3 text-emerald-400" />
                  <span className="text-emerald-400">{dict.hero.copied}</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3" />
                  <span>copy</span>
                </>
              )}
            </button>
          </div>

          {/* Interactive Command Tabs */}
          <div className="flex items-center gap-1 px-4 py-2 bg-black/30 border-b border-white/[0.05] overflow-x-auto text-xs font-mono">
            <button
              type="button"
              onClick={() => setActiveTab("about")}
              className={`px-3 py-1 rounded-md transition-all flex items-center gap-1.5 ${
                activeTab === "about"
                  ? "bg-violet-500/15 text-violet-300 border border-violet-500/30"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              <span>$ cat about.json</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("skills")}
              className={`px-3 py-1 rounded-md transition-all flex items-center gap-1.5 ${
                activeTab === "skills"
                  ? "bg-cyan-500/15 text-cyan-300 border border-cyan-500/30"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              <span>$ ./skills.sh</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("contact")}
              className={`px-3 py-1 rounded-md transition-all flex items-center gap-1.5 ${
                activeTab === "contact"
                  ? "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              <span>$ ./contact.sh</span>
            </button>
          </div>

          {/* Terminal Body with Syntax Highlight Effect */}
          <div className="p-4 sm:p-5 font-mono text-xs sm:text-[13px] leading-relaxed flex-1 overflow-x-auto min-h-[260px] text-zinc-300">
            {activeTab === "about" && (
              <pre className="text-zinc-300 font-mono">
                <code>
                  <span className="text-zinc-500">&#123;</span>{"\n"}
                  {"  "}<span className="text-cyan-400">&quot;name&quot;</span>: <span className="text-emerald-400">&quot;{portfolioData.personal.name}&quot;</span>,{"\n"}
                  {"  "}<span className="text-cyan-400">&quot;role&quot;</span>: <span className="text-emerald-400">&quot;{dict.hero.aboutTerminal.role}&quot;</span>,{"\n"}
                  {"  "}<span className="text-cyan-400">&quot;location&quot;</span>: <span className="text-amber-300">&quot;{dict.hero.aboutTerminal.location}&quot;</span>,{"\n"}
                  {"  "}<span className="text-cyan-400">&quot;status&quot;</span>: <span className="text-emerald-400">&quot;{dict.hero.aboutTerminal.status}&quot;</span>,{"\n"}
                  {"  "}<span className="text-cyan-400">&quot;skills&quot;</span>: [<span className="text-violet-400">&quot;Next.js&quot;</span>, <span className="text-violet-400">&quot;TypeScript&quot;</span>, <span className="text-violet-400">&quot;NestJS&quot;</span>, <span className="text-violet-400">&quot;PostgreSQL&quot;</span>]{"\n"}
                  <span className="text-zinc-500">&#125;</span>
                </code>
              </pre>
            )}

            {activeTab === "skills" && (
              <pre className="text-zinc-300 font-mono">
                <code>
                  <span className="text-zinc-500"># Core Architecture Stack</span>{"\n"}
                  <span className="text-violet-400">FRONTEND</span>=<span className="text-emerald-400">&quot;Next.js 16, React 19, Tailwind v4&quot;</span>{"\n"}
                  <span className="text-violet-400">BACKEND</span>=<span className="text-emerald-400">&quot;Node.js, NestJS, Laravel, REST/GraphQL&quot;</span>{"\n"}
                  <span className="text-violet-400">DATABASE</span>=<span className="text-emerald-400">&quot;PostgreSQL, MongoDB, Redis&quot;</span>{"\n"}
                  <span className="text-violet-400">INFRA</span>=<span className="text-emerald-400">&quot;Docker, Git, CI/CD, Linux&quot;</span>{"\n\n"}
                  <span className="text-cyan-400">echo</span> <span className="text-emerald-300">&quot;System fully operational [OK]&quot;</span>
                </code>
              </pre>
            )}

            {activeTab === "contact" && (
              <pre className="text-zinc-300 font-mono">
                <code>
                  <span className="text-zinc-500">{"// Direct Contact Pipeline"}</span>{"\n"}
                  <span className="text-violet-400">const</span> <span className="text-cyan-400">channel</span> = &#123;{"\n"}
                  {"  "}email: <span className="text-emerald-400">&quot;{portfolioData.personal.email}&quot;</span>,{"\n"}
                  {"  "}github: <span className="text-emerald-400">&quot;StevenRosalesC&quot;</span>,{"\n"}
                  {"  "}status: <span className="text-amber-300">&quot;{dict.hero.aboutTerminal.status}&quot;</span>{"\n"}
                  &#125;;
                </code>
              </pre>
            )}

            <div className="flex items-center gap-2 mt-4 text-zinc-500 font-mono">
              <span className="text-emerald-400">$</span>
              <span className="w-2.5 h-4 bg-emerald-400/80 animate-pulse" />
            </div>
          </div>

          {/* Terminal Footer status */}
          <div className="px-4 py-2 bg-[#090b12] border-t border-white/[0.05] flex items-center justify-between text-[11px] font-mono text-zinc-500">
            <span>zsh · utf-8</span>
            <span className="text-emerald-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              active shell
            </span>
          </div>
        </SpotlightCard>
      </div>
    </section>
  );
}

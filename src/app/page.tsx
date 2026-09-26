import React from "react";
import { Navbar } from "@/components/Navbar";
import { HeroBento } from "@/components/HeroBento";
import { StatsBento } from "@/components/StatsBento";
import { TechStackBento } from "@/components/TechStackBento";
import { ProjectsBento } from "@/components/ProjectsBento";
import { ExperienceBento } from "@/components/ExperienceBento";
import { GithubHeatmapBento } from "@/components/GithubHeatmapBento";
// import { TestimonialsBento } from "@/components/TestimonialsBento";
// import { WritingBento } from "@/components/WritingBento";
import { ContactBento } from "@/components/ContactBento";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#08090d] text-zinc-100 overflow-x-hidden">
      {/* Background Matrix: Grid & Ambient Glows */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />

        {/* Ambient radial color spots */}
        <div className="absolute -top-40 left-1/4 w-[600px] h-[500px] bg-violet-600/10 rounded-full blur-[140px]" />
        <div className="absolute top-[35%] right-10 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-[20%] left-10 w-[600px] h-[600px] bg-fuchsia-600/8 rounded-full blur-[160px]" />
        <div className="absolute bottom-10 right-1/4 w-[500px] h-[400px] bg-emerald-600/10 rounded-full blur-[140px]" />

        {/* Top scanline or vignette mask */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))]" />
      </div>

      {/* Main Content Layers */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-4">
          <HeroBento />
          <StatsBento />
          <TechStackBento />
          <ProjectsBento />
          <ExperienceBento />
          <GithubHeatmapBento />
          {/*<TestimonialsBento />*/}
          {/*<WritingBento />*/}
          <ContactBento />
        </main>

        <Footer />
      </div>
    </div>
  );
}

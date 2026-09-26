"use client";

import React, { useRef, useState, useCallback } from "react";
import { cn } from "@/lib/utils";

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glowColor?: "violet" | "cyan" | "emerald" | "pink" | "white";
  spotlightIntensity?: number;
}

export function SpotlightCard({
  children,
  className,
  glowColor = "violet",
  spotlightIntensity = 0.15,
  ...props
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const glowColorsMap = {
    violet: "rgba(139, 92, 246,",
    cyan: "rgba(6, 182, 212,",
    emerald: "rgba(16, 185, 129,",
    pink: "rgba(236, 72, 153,",
    white: "rgba(255, 255, 255,",
  };

  const selectedGlow = glowColorsMap[glowColor] || glowColorsMap.violet;

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  const handleMouseEnter = useCallback(() => {
    setOpacity(1);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setOpacity(0);
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0d0f17]/85 backdrop-blur-xl transition-all duration-300",
        "hover:border-white/[0.18] hover:shadow-lg",
        className
      )}
      {...props}
    >
      {/* Interactive Cursor Spotlight */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${selectedGlow} ${spotlightIntensity}), transparent 40%)`,
        }}
        aria-hidden="true"
      />
      {/* Content wrapper */}
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}

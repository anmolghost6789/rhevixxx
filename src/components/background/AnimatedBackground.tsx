"use client";

import React, { useEffect, useState } from "react";
import { AnimatedGrid } from "./AnimatedGrid";
import { ParticleNetwork } from "./ParticleNetwork";
import { FloatingKeywords } from "./FloatingKeywords";
import { LightOrbs } from "./LightOrbs";

interface AnimatedBackgroundProps {
  forceReducedMotion?: boolean;
}

export const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({
  forceReducedMotion = false,
}) => {
  const [scrollY, setScrollY] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isReduced = prefersReducedMotion || forceReducedMotion;

  return (
    <div
      className="fixed inset-0 pointer-events-none select-none z-0 overflow-hidden bg-[#F6F7F9]"
      aria-hidden="true"
    >
      {/* LAYER D: Soft Atmospheric Light (deep blue, indigo, soft cyan at 3-5% opacity) */}
      <LightOrbs scrollY={scrollY} reducedMotion={isReduced} />

      {/* LAYER A: Intelligent Technical Grid (0.035 opacity, thin slate lines) */}
      <AnimatedGrid scrollY={scrollY} reducedMotion={isReduced} />

      {/* LAYER B & C: Connected AI Nodes + Traveling Data Packets + Parallax */}
      <ParticleNetwork reducedMotion={isReduced} />

      {/* LAYER E: Peripheral Technical Signals (AI, LLM, PYTHON...) */}
      <FloatingKeywords reducedMotion={isReduced} />

      {/* Subtle blend wash into the surface */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F6F7F9]/20 to-[#F6F7F9]/60 pointer-events-none" />
    </div>
  );
};

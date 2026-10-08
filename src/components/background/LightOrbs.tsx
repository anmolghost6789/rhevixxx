"use client";

import React from "react";

interface LightOrbsProps {
  scrollY?: number;
  reducedMotion?: boolean;
}

export const LightOrbs: React.FC<LightOrbsProps> = ({
  scrollY = 0,
  reducedMotion = false,
}) => {
  if (reducedMotion) {
    return (
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0" aria-hidden="true">
        <div className="absolute top-[8%] left-[10%] w-[580px] h-[580px] rounded-full bg-[#3155FF]/[0.035] blur-[160px]" />
        <div className="absolute top-[48%] right-[8%] w-[620px] h-[620px] rounded-full bg-[#4F46E5]/[0.03] blur-[180px]" />
      </div>
    );
  }

  // Extremely slow scroll parallax
  const shift1 = (scrollY * 0.03) % 80;
  const shift2 = (scrollY * -0.025) % 70;
  const shift3 = (scrollY * 0.02) % 60;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0" aria-hidden="true">
      {/* Field 1: Deep Blue atmospheric wash (3–5% opacity, 160px blur) */}
      <div
        className="absolute top-[5%] left-[8%] w-[640px] h-[640px] rounded-full opacity-[0.045] filter blur-[160px] transition-transform duration-1000 ease-out will-change-transform"
        style={{
          background: "radial-gradient(circle, #3155FF 0%, transparent 70%)",
          transform: `translate3d(0, ${shift1}px, 0)`,
        }}
      />

      {/* Field 2: Indigo atmospheric field (3–5% opacity, 180px blur) */}
      <div
        className="absolute top-[38%] right-[5%] w-[700px] h-[700px] rounded-full opacity-[0.04] filter blur-[180px] transition-transform duration-1000 ease-out will-change-transform"
        style={{
          background: "radial-gradient(circle, #4F46E5 0%, transparent 70%)",
          transform: `translate3d(0, ${shift2}px, 0)`,
        }}
      />

      {/* Field 3: Soft Cyan lower wash (3% opacity, 150px blur) */}
      <div
        className="absolute top-[72%] left-[15%] w-[600px] h-[600px] rounded-full opacity-[0.03] filter blur-[150px] transition-transform duration-1000 ease-out will-change-transform"
        style={{
          background: "radial-gradient(circle, #06B6D4 0%, transparent 70%)",
          transform: `translate3d(0, ${shift3}px, 0)`,
        }}
      />
    </div>
  );
};

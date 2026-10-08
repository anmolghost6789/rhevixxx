"use client";

import React from "react";

interface AnimatedGridProps {
  scrollY?: number;
  reducedMotion?: boolean;
}

export const AnimatedGrid: React.FC<AnimatedGridProps> = ({
  scrollY = 0,
  reducedMotion = false,
}) => {
  // Ultra-slow, subtle parallax shift on scroll
  const shiftY = reducedMotion ? 0 : (scrollY * 0.04) % 64;

  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden select-none"
      style={{ opacity: 0.85 }}
      aria-hidden="true"
    >
      {/* Layer A: Extremely thin technical grid, dark slate tone at 0.035 opacity */}
      <div
        className="absolute inset-0 transition-transform duration-500 ease-out will-change-transform"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(15, 23, 42, 0.035) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(15, 23, 42, 0.035) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          transform: `translate3d(0, ${-shiftY}px, 0)`,
        }}
      />

      {/* Subtle blueprint crosshairs at selected intervals */}
      <div className="absolute inset-0 hidden md:block opacity-[0.06]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-cross" width="256" height="256" patternUnits="userSpaceOnUse">
              <path d="M 12 4 L 12 20 M 4 12 L 20 12" stroke="#1E293B" strokeWidth="0.7" fill="none" />
              <circle cx="12" cy="12" r="1.2" fill="#3155FF" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-cross)" />
        </svg>
      </div>

      {/* Perimeter vignette to keep focus centered */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(246,247,249,0.5)_75%,#F6F7F9_100%)] pointer-events-none" />
    </div>
  );
};

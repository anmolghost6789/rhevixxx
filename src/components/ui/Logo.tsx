"use client";

import React from "react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const LETTERS = ["R", "H", "E", "V", "I", "X"];

export const Logo: React.FC<LogoProps> = ({ className = "", size = "md" }) => {
  const iconSize = size === "sm" ? "w-7 h-7" : size === "lg" ? "w-10 h-10" : "w-8 h-8";
  const textSize = size === "sm" ? "text-lg" : size === "lg" ? "text-2xl" : "text-xl";
  const glyphSize = size === "sm" ? "w-3.5 h-3.5" : size === "lg" ? "w-5 h-5" : "w-4 h-4";

  return (
    <div
      className={`inline-flex items-center gap-2.5 group cursor-pointer select-none transition-transform duration-300 ease-out hover:scale-[1.02] ${className}`}
    >
      {/* Distinctive Modern RHEVIX Emblem with 3D tilt & luminous pulse */}
      <div className={`relative ${iconSize} flex items-center justify-center shrink-0`}>
        {/* Ambient subtle hover glow */}
        <div className="absolute inset-0 bg-[#3155FF]/25 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-400 ease-out" />

        {/* Core Glyph container with micro-tilt hover */}
        <div className="relative w-full h-full rounded-xl bg-[#101216] border border-white/10 flex items-center justify-center overflow-hidden shadow-xs transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 group-hover:rotate-6 group-hover:shadow-[0_8px_20px_-6px_rgba(49,85,255,0.35)]">
          {/* Subtle ambient gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#3155FF]/50 via-transparent to-indigo-500/30 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Precision Vector Emblem: Abstract interconnected R / Hexagonal Core */}
          <svg
            className={`${glyphSize} text-white relative z-10 transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Geometric R & neural prism path */}
            <path d="M4 4h7a4 4 0 0 1 4 4v0a4 4 0 0 1-4 4H4" />
            <path d="M4 4v16" />
            <path d="M12 12l6 8" />
            <circle cx="18" cy="8" r="1.5" fill="#3155FF" stroke="none" />
          </svg>
        </div>
      </div>

      {/* Animated Sliding Name Wordmark (Jitter / Studio Kogel Style) */}
      <div className="flex items-center overflow-hidden py-1">
        <span
          className={`flex items-center ${textSize} font-[750] tracking-tight text-[#101216] transition-transform duration-300 ease-out group-hover:translate-x-0.5`}
        >
          {LETTERS.map((letter, index) => (
            <span
              key={index}
              className="relative inline-flex flex-col overflow-hidden h-[1.25em] leading-none"
            >
              {/* Primary Letter: Slides Up on Hover */}
              <span
                className="inline-block transition-transform duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full"
                style={{
                  transitionDelay: `${index * 25}ms`,
                }}
              >
                {letter}
              </span>

              {/* Secondary Duplicate Letter: Slides In from Below on Hover in Accent Color */}
              <span
                className="absolute top-0 left-0 inline-block text-[#3155FF] transition-transform duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] translate-y-full group-hover:translate-y-0"
                style={{
                  transitionDelay: `${index * 25}ms`,
                }}
                aria-hidden="true"
              >
                {letter}
              </span>
            </span>
          ))}

          {/* Micro Glowing Dot Indicator at end of wordmark */}
          <span
            className="inline-block w-1.5 h-1.5 rounded-full bg-[#3155FF] ml-0.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out"
            style={{
              transitionDelay: `${LETTERS.length * 25}ms`,
            }}
          />
        </span>
      </div>
    </div>
  );
};

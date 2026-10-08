"use client";

import React from "react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const Logo: React.FC<LogoProps> = ({ className = "", size = "md" }) => {
  const iconSize = size === "sm" ? "w-7 h-7" : size === "lg" ? "w-10 h-10" : "w-8 h-8";
  const textSize = size === "sm" ? "text-lg" : size === "lg" ? "text-2xl" : "text-xl";

  return (
    <div className={`flex items-center gap-2.5 group cursor-pointer select-none ${className}`}>
      {/* Distinctive Modern RHEVIX Emblem */}
      <div className={`relative ${iconSize} flex items-center justify-center`}>
        {/* Ambient subtle hover glow */}
        <div className="absolute inset-0 bg-[#3155FF]/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Core Glyph container with micro-tilt hover */}
        <div className="relative w-full h-full rounded-xl bg-[#101216] border border-white/10 flex items-center justify-center overflow-hidden shadow-xs transition-transform duration-300 ease-out group-hover:scale-105 group-hover:rotate-3">
          {/* Subtle ambient gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#3155FF]/40 via-transparent to-indigo-500/30 opacity-70" />

          {/* Precision Vector Emblem: Abstract interconnected R / Hexagonal Core */}
          <svg
            className="w-4 h-4 text-white relative z-10 transition-transform duration-300 group-hover:scale-110"
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

      {/* Wordmark */}
      <div className="flex items-baseline">
        <span className={`${textSize} font-[750] tracking-tight text-[#101216] transition-colors duration-200 group-hover:text-[#3155FF]`}>
          RHEVIX
        </span>
      </div>
    </div>
  );
};

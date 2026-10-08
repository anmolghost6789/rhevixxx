"use client";

import React from "react";

interface FloatingKeywordsProps {
  reducedMotion?: boolean;
}

interface SignalItem {
  id: string;
  label: string;
  top: string;
  left?: string;
  right?: string;
  delay: string;
  duration: string;
}

const SIGNALS: SignalItem[] = [
  { id: "1", label: "AI", top: "12%", left: "3%", delay: "0s", duration: "18s" },
  { id: "2", label: "LLM", top: "24%", right: "4%", delay: "2s", duration: "20s" },
  { id: "3", label: "RESEARCH", top: "36%", left: "2%", delay: "4s", duration: "22s" },
  { id: "4", label: "PYTHON", top: "48%", right: "3%", delay: "1s", duration: "19s" },
  { id: "5", label: "DATA", top: "60%", left: "4%", delay: "3s", duration: "21s" },
  { id: "6", label: "ML", top: "72%", right: "4%", delay: "5s", duration: "24s" },
  { id: "7", label: "SYSTEMS", top: "84%", left: "3%", delay: "2.5s", duration: "20s" },
  { id: "8", label: "ROBOTICS", top: "18%", right: "8%", delay: "4.5s", duration: "23s" },
  { id: "9", label: "CLOUD", top: "52%", left: "7%", delay: "1.5s", duration: "19s" },
  { id: "10", label: "NLP", top: "66%", right: "7%", delay: "3.5s", duration: "22s" },
  { id: "11", label: "VISION", top: "88%", right: "5%", delay: "0.5s", duration: "21s" },
];

export const FloatingKeywords: React.FC<FloatingKeywordsProps> = ({
  reducedMotion = false,
}) => {
  if (reducedMotion) return null;

  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden select-none z-[1] hidden xl:block"
      aria-hidden="true"
    >
      {SIGNALS.map((sig) => (
        <div
          key={sig.id}
          className="absolute transform will-change-transform"
          style={{
            top: sig.top,
            left: sig.left,
            right: sig.right,
            animation: `float-slow ${sig.duration} ease-in-out infinite alternate ${sig.delay}`,
          }}
        >
          {/* Layer E: Tiny technical signal at 0.05-0.07 opacity, never interfering with text */}
          <span className="text-[10px] font-mono tracking-[0.25em] font-medium text-[#1E293B] opacity-[0.06] select-none">
            {sig.label}
          </span>
        </div>
      ))}
    </div>
  );
};

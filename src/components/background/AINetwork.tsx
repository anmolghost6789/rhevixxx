"use client";

import React from "react";

interface AINetworkProps {
  reducedMotion?: boolean;
}

export const AINetwork: React.FC<AINetworkProps> = ({ reducedMotion = false }) => {
  if (reducedMotion) return null;

  return (
    <div className="absolute inset-0 pointer-events-none select-none z-[1] opacity-70" aria-hidden="true">
      <svg
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient id="nodePulse" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#2563EB" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Constellation Nodes and Interlinks */}
        <g stroke="rgba(148, 163, 184, 0.16)" strokeWidth="0.8">
          <line x1="200" y1="180" x2="380" y2="240" />
          <line x1="380" y1="240" x2="520" y2="150" />
          <line x1="520" y1="150" x2="700" y2="210" />
          <line x1="700" y1="210" x2="940" y2="170" />
          <line x1="380" y1="240" x2="340" y2="440" />
          <line x1="700" y1="210" x2="760" y2="390" />
          <line x1="340" y1="440" x2="560" y2="490" />
          <line x1="560" y1="490" x2="760" y2="390" />
          <line x1="760" y1="390" x2="980" y2="430" />
          <line x1="560" y1="490" x2="520" y2="680" />
          <line x1="340" y1="440" x2="260" y2="620" />
          <line x1="260" y1="620" x2="520" y2="680" />
          <line x1="520" y1="680" x2="820" y2="690" />
        </g>

        {/* Nodes with gentle breathing pulses */}
        {[
          { cx: 200, cy: 180, r: 2.5, color: "#2563EB" },
          { cx: 380, cy: 240, r: 3.5, color: "#0284C7" },
          { cx: 520, cy: 150, r: 2.5, color: "#6366F1" },
          { cx: 700, cy: 210, r: 3.5, color: "#2563EB" },
          { cx: 940, cy: 170, r: 2, color: "#94A3B8" },
          { cx: 340, cy: 440, r: 3, color: "#0284C7" },
          { cx: 560, cy: 490, r: 4, color: "#2563EB" },
          { cx: 760, cy: 390, r: 3, color: "#6366F1" },
          { cx: 980, cy: 430, r: 2.5, color: "#94A3B8" },
          { cx: 260, cy: 620, r: 2.5, color: "#0284C7" },
          { cx: 520, cy: 680, r: 3.5, color: "#2563EB" },
          { cx: 820, cy: 690, r: 2.5, color: "#6366F1" },
        ].map((node, idx) => (
          <g key={idx}>
            <circle
              cx={node.cx}
              cy={node.cy}
              r={node.r * 2.8}
              fill="url(#nodePulse)"
              className="animate-pulse-subtle"
              style={{ animationDelay: `${idx * 0.4}s` }}
            />
            <circle cx={node.cx} cy={node.cy} r={node.r} fill={node.color} opacity="0.75" />
          </g>
        ))}
      </svg>
    </div>
  );
};

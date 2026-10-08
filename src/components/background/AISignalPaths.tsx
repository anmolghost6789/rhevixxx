"use client";

import React from "react";

interface AISignalPathsProps {
  reducedMotion?: boolean;
}

export const AISignalPaths: React.FC<AISignalPathsProps> = ({ reducedMotion = false }) => {
  if (reducedMotion) return null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-[1]" aria-hidden="true">
      <svg
        className="w-full h-full opacity-[0.28]"
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="signalGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0" />
            <stop offset="50%" stopColor="#2563EB" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="signalGradient2" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#818CF8" stopOpacity="0" />
            <stop offset="70%" stopColor="#0284C7" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
          </linearGradient>

          <filter id="glowSubtle" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Path 1: Upper flowing curve */}
        <path
          d="M -100 220 C 350 140, 720 310, 1150 180 S 1500 240, 1600 220"
          stroke="url(#signalGradient1)"
          strokeWidth="1.2"
          strokeDasharray="4 8"
        />

        {/* Traveling Data Packet 1 */}
        <circle r="2.5" fill="#2563EB" filter="url(#glowSubtle)">
          <animateMotion
            path="M -100 220 C 350 140, 720 310, 1150 180 S 1500 240, 1600 220"
            dur="18s"
            repeatCount="indefinite"
          />
        </circle>
        <circle r="1.5" fill="#60A5FA">
          <animateMotion
            path="M -100 220 C 350 140, 720 310, 1150 180 S 1500 240, 1600 220"
            dur="18s"
            begin="-9s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Path 2: Mid-lower connecting network trajectory */}
        <path
          d="M -50 620 C 280 540, 680 720, 1050 590 S 1400 660, 1550 620"
          stroke="url(#signalGradient2)"
          strokeWidth="1.2"
          strokeDasharray="6 10"
        />

        {/* Traveling Data Packet 2 */}
        <circle r="2.5" fill="#0284C7" filter="url(#glowSubtle)">
          <animateMotion
            path="M -50 620 C 280 540, 680 720, 1050 590 S 1400 660, 1550 620"
            dur="22s"
            repeatCount="indefinite"
          />
        </circle>
        <circle r="1.5" fill="#38BDF8">
          <animateMotion
            path="M -50 620 C 280 540, 680 720, 1050 590 S 1400 660, 1550 620"
            dur="22s"
            begin="-11s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Path 3: Vertical-diagonal interconnect */}
        <path
          d="M 280 160 L 450 480 L 850 360 L 1200 650"
          stroke="rgba(148, 163, 184, 0.12)"
          strokeWidth="0.8"
        />
        <circle cx="280" cy="160" r="2" fill="#94A3B8" opacity="0.3" />
        <circle cx="450" cy="480" r="2" fill="#94A3B8" opacity="0.3" />
        <circle cx="850" cy="360" r="2" fill="#94A3B8" opacity="0.3" />
        <circle cx="1200" cy="650" r="2" fill="#94A3B8" opacity="0.3" />
      </svg>
    </div>
  );
};

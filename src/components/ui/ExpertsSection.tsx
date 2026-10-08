"use client";

import React, { useState, useEffect } from "react";
import { EXPERTS, Expert } from "@/data/platformData";
import { ArrowRight, Sparkles } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import { ExpertCard3D } from "./ExpertCard3D";

interface ExpertsSectionProps {
  onSelectExpert: (expert: Expert) => void;
  onExploreAllExperts: () => void;
}

// Floating expertise micro-tags around the cards
const FLOATING_TAGS = [
  { text: "RLHF & CoT", top: "8%", left: "3%", delay: 0 },
  { text: "Tensor Parallelism", top: "18%", right: "2%", delay: 1.2 },
  { text: "Spatial Perception", top: "54%", left: "1%", delay: 0.8 },
  { text: "Lean 4 Formal Proofs", top: "72%", right: "3%", delay: 2.1 },
  { text: "Multi-Agent Consensus", bottom: "4%", left: "12%", delay: 1.6 },
];

export const ExpertsSection: React.FC<ExpertsSectionProps> = ({
  onSelectExpert,
  onExploreAllExperts,
}) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 768) return;
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      setMousePos({
        x: ((e.clientX - cx) / cx) * 6,
        y: ((e.clientY - cy) / cy) * 6,
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="experts"
      className="relative py-28 sm:py-36 bg-[#F6F7F9]/60 backdrop-blur-[2px] border-t border-[rgba(15,23,42,0.06)] overflow-hidden"
    >
      {/* AR/VR SPATIAL VISUAL ENVIRONMENT BEHIND AND AROUND CARDS */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        {/* Holographic Calibration Rings */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-[#3155FF]/[0.04] transition-transform duration-700 ease-out"
          style={{
            transform: `translate(-50%, -50%) translate3d(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px, 0)`,
          }}
        >
          <div className="absolute inset-16 rounded-full border border-[#06B6D4]/[0.03] border-dashed" />
          <div className="absolute inset-36 rounded-full border border-[#4F46E5]/[0.03]" />
        </div>

        {/* Thin Spatial Connection Lines between Virtual Nodes */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.25]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="spatial-line-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3155FF" stopOpacity="0.05" />
              <stop offset="50%" stopColor="#06B6D4" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#3155FF" stopOpacity="0.05" />
            </linearGradient>
          </defs>

          {/* Abstract Constellation Vectors */}
          <path
            d="M 120 180 Q 450 140 820 220 T 1400 160"
            fill="none"
            stroke="url(#spatial-line-grad)"
            strokeWidth="1"
            strokeDasharray="4 8"
          />
          <path
            d="M 180 520 Q 640 480 1020 540 T 1360 490"
            fill="none"
            stroke="url(#spatial-line-grad)"
            strokeWidth="0.8"
            strokeDasharray="3 6"
          />
          <path
            d="M 320 220 L 320 620 M 780 180 L 780 680 M 1180 240 L 1180 640"
            fill="none"
            stroke="rgba(15,23,42,0.03)"
            strokeWidth="0.7"
          />
        </svg>

        {/* Small Floating Expertise Tags in the spatial margin */}
        {FLOATING_TAGS.map((tag, idx) => (
          <div
            key={idx}
            className="absolute hidden xl:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/70 backdrop-blur-md border border-[rgba(15,23,42,0.06)] text-[10px] font-mono font-medium text-[#4B5563] shadow-xs transition-transform duration-700 ease-out"
            style={{
              top: tag.top,
              bottom: tag.bottom,
              left: tag.left,
              right: tag.right,
              transform: `translate3d(${mousePos.x * (idx % 2 === 0 ? 0.8 : -0.8)}px, ${mousePos.y * (idx % 2 === 0 ? 0.8 : -0.8)}px, 0)`,
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#3155FF]/70" />
            {tag.text}
          </div>
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[rgba(15,23,42,0.08)] shadow-2xs mb-3 text-xs font-mono font-medium text-[#3155FF]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3155FF]" />
                <span>Verified Spatial Network</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-[750] text-[#101216] tracking-tight">
                Learn from people who’ve done it.
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[#4B5563] max-w-xl">
                Frontier AI researchers, cluster leads, and founders teaching the exact methods they use every day.
              </p>
            </div>

            <button
              onClick={onExploreAllExperts}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#3155FF] hover:text-[#2344E0] transition-colors self-start sm:self-auto group"
            >
              <span>Explore all experts</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </ScrollReveal>

        {/* 6 3D Holographic Expert Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {EXPERTS.map((expert, idx) => (
            <ScrollReveal key={expert.id} delay={idx * 0.05}>
              <ExpertCard3D
                expert={expert}
                onSelect={onSelectExpert}
              />
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom CTA Link */}
        <div className="mt-14 text-center">
          <button
            onClick={onExploreAllExperts}
            className="inline-flex items-center gap-2 py-3.5 px-7 rounded-xl bg-white hover:bg-[#EEF1F4] border border-[rgba(15,23,42,0.12)] text-xs font-[600] text-[#17191D] transition-all hover:-translate-y-0.5 shadow-xs"
          >
            <span>Explore all experts</span>
            <ArrowRight className="w-4 h-4 text-[#3155FF]" />
          </button>
        </div>
      </div>
    </section>
  );
};

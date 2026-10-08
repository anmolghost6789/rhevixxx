"use client";

import React from "react";
import { ArrowRight, Sparkles, ChevronDown } from "lucide-react";
import { AINetworkVisualization } from "./AINetworkVisualization";

interface HeroProps {
  onOpenApply: () => void;
  onExploreOpportunities: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenApply,
  onExploreOpportunities,
}) => {
  return (
    <section className="relative min-h-[92vh] pt-32 sm:pt-40 pb-20 flex flex-col justify-center items-center overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Editorial Eyebrow */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/90 border border-[rgba(15,23,42,0.08)] shadow-[0_1px_4px_rgba(15,23,42,0.04)] mb-8 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-[#3155FF]" />
          <span className="text-xs font-mono font-medium text-[#17191D] tracking-tight">
            RHEVIX Frontier Intelligence · Global Network
          </span>
          <span className="w-px h-3 bg-[rgba(15,23,42,0.1)]" />
          <span className="text-xs font-semibold text-[#3155FF]">
            Top 1.5% Vetted
          </span>
        </div>

        {/* Large Dark Headline (700-750 font-weight, #101216) */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[86px] font-[750] tracking-tight text-[#101216] leading-[1.05] max-w-5xl mx-auto">
          Build the intelligence{" "}
          <span className="text-[#101216]">
            behind what comes next.
          </span>
        </h1>

        {/* Clean Supporting Paragraph (#4B5563, 400-500 font-weight) */}
        <p className="mt-7 text-base sm:text-xl text-[#4B5563] max-w-3xl mx-auto leading-relaxed font-normal">
          Connect your expertise with ambitious AI teams, research projects, and
          opportunities shaping the next generation of technology.
        </p>

        {/* Action CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <button
            onClick={onExploreOpportunities}
            className="w-full sm:w-auto px-8 py-4 bg-[#3155FF] hover:bg-[#2344E0] text-white font-[550] text-sm sm:text-base rounded-xl shadow-[0_8px_20px_-4px_rgba(49,85,255,0.3)] hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2.5 group"
          >
            <span>Explore Opportunities</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onOpenApply}
            className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-[#EEF1F4] text-[#17191D] font-[550] text-sm sm:text-base rounded-xl border border-[rgba(15,23,42,0.14)] hover:border-[rgba(15,23,42,0.25)] hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-[#3155FF]" />
            <span>Join the Network</span>
          </button>
        </div>

        {/* Trust Statement */}
        <p className="mt-5 text-xs sm:text-sm text-[#6B7280] font-mono tracking-wide">
          Built for exceptional people working at the frontier of technology.
        </p>

        {/* Hero AI Network Visualization */}
        <div className="mt-12 w-full">
          <AINetworkVisualization />
        </div>

        {/* Down Anchor */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={onExploreOpportunities}
            className="flex flex-col items-center gap-1 text-[11px] font-mono text-[#6B7280] hover:text-[#101216] transition-colors"
          >
            <span>DISCOVER PLATFORM</span>
            <ChevronDown className="w-4 h-4 text-[#9CA3AF] animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

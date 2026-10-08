"use client";

import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

interface FinalCTAProps {
  onOpenApply: () => void;
  onExploreOpportunities: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({
  onOpenApply,
  onExploreOpportunities,
}) => {
  return (
    <section className="relative py-28 sm:py-36 bg-white overflow-hidden text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF1F4] border border-[rgba(15,23,42,0.08)] text-[#3155FF] text-xs font-mono font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" /> Frontier Calling
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-[700] text-[#101216] tracking-tight leading-[1.04]">
            The future needs your expertise.
          </h2>

          <p className="text-base sm:text-xl text-[#4B5563] max-w-2xl mx-auto leading-relaxed font-normal">
            Join a global community of autonomous researchers, model evaluators, and system architects building the frontier.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <button
              onClick={onOpenApply}
              className="w-full sm:w-auto px-8 py-4 bg-[#3155FF] hover:bg-[#2344E0] text-white font-[550] text-sm sm:text-base rounded-xl shadow-[0_8px_20px_-4px_rgba(49,85,255,0.3)] transition-all duration-200 flex items-center justify-center gap-2 group hover:-translate-y-0.5"
            >
              <span>Join the Network</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onExploreOpportunities}
              className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-[#EEF1F4] text-[#17191D] font-[550] text-sm sm:text-base rounded-xl border border-[rgba(15,23,42,0.14)] hover:border-[rgba(15,23,42,0.25)] shadow-xs transition-all duration-200 flex items-center justify-center gap-2 hover:-translate-y-0.5"
            >
              <span>Explore Opportunities</span>
            </button>
          </div>

          <p className="text-xs text-[#6B7280] font-mono pt-3">
            Zero sign-up fees · Guaranteed anonymity · Instant calibration
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

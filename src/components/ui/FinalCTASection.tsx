"use client";

import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

interface FinalCTASectionProps {
  onExploreExperts: () => void;
  onJoinRhevix: () => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({
  onExploreExperts,
  onJoinRhevix,
}) => {
  return (
    <section className="relative py-28 sm:py-36 bg-white/70 backdrop-blur-[2px] border-t border-[rgba(15,23,42,0.06)] overflow-hidden text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-7">
        <ScrollReveal>
          {/* Subtle Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF1F4] border border-[rgba(15,23,42,0.08)] text-[#3155FF] text-xs font-mono font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" /> Start Today
          </div>

          {/* Large Clean Statement */}
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-[750] text-[#101216] tracking-tight leading-[1.05]">
            Your next opportunity <br />
            <span>starts here.</span>
          </h2>

          <p className="text-base sm:text-xl text-[#4B5563] max-w-xl mx-auto leading-relaxed font-normal">
            Join thousands of developers, researchers, and domain experts mastering frontier AI and building the future.
          </p>

          {/* Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-md mx-auto">
            <button
              onClick={onExploreExperts}
              className="w-full sm:w-auto px-7 py-3.5 bg-white hover:bg-[#EEF1F4] text-[#17191D] font-[550] text-sm sm:text-base rounded-xl border border-[rgba(15,23,42,0.12)] hover:border-[rgba(15,23,42,0.25)] shadow-xs transition-all duration-200 flex items-center justify-center gap-2 hover:-translate-y-0.5"
            >
              <span>Explore Experts</span>
            </button>

            <button
              onClick={onJoinRhevix}
              className="w-full sm:w-auto px-8 py-3.5 bg-[#101216] hover:bg-[#3155FF] text-white font-[550] text-sm sm:text-base rounded-xl shadow-xs transition-all duration-200 flex items-center justify-center gap-2 group hover:-translate-y-0.5"
            >
              <span>Join RHEVIX</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <p className="text-xs text-[#6B7280] font-mono pt-2">
            No credit card required · Instant access to public masterclasses
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

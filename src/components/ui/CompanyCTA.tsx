"use client";

import React from "react";
import { ArrowRight, Building2, CheckCircle2 } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

interface CompanyCTAProps {
  onOpenHire: () => void;
}

export const CompanyCTA: React.FC<CompanyCTAProps> = ({ onOpenHire }) => {
  return (
    <section className="relative py-28 sm:py-36 bg-gradient-to-b from-[#EEF1F4] via-[#F6F7F9] to-[#F6F7F9] border-y border-[rgba(15,23,42,0.06)] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <ScrollReveal>
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[rgba(15,23,42,0.08)] shadow-xs mb-6 text-xs font-mono font-semibold text-[#3155FF]">
            <Building2 className="w-3.5 h-3.5" />
            <span>For AI Labs, Frontier Foundations & Enterprises</span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-[700] text-[#101216] tracking-tight leading-[1.08] max-w-4xl mx-auto">
            Exceptional talent is closer than you think.
          </h2>

          {/* Description */}
          <p className="mt-6 text-base sm:text-xl text-[#4B5563] max-w-2xl mx-auto leading-relaxed font-normal">
            Build your next AI project with experts who bring deep technical and domain knowledge.
          </p>

          {/* Value Props */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-5 text-xs font-mono text-[#4B5563]">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-[rgba(15,23,42,0.08)] shadow-xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Under 48h Match Turnaround</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-[rgba(15,23,42,0.08)] shadow-xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Top 1.5% Pre-Calibrated Roster</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-[rgba(15,23,42,0.08)] shadow-xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>14-Day Risk-Free Trial</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <button
              onClick={onOpenHire}
              className="w-full sm:w-auto px-8 py-4 bg-[#3155FF] hover:bg-[#2344E0] text-white font-[550] text-sm sm:text-base rounded-xl shadow-[0_8px_20px_-4px_rgba(49,85,255,0.3)] transition-all duration-200 flex items-center justify-center gap-2 group hover:-translate-y-0.5"
            >
              <span>Find Talent</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onOpenHire}
              className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-white text-[#17191D] font-[550] text-sm sm:text-base rounded-xl border border-[rgba(15,23,42,0.14)] hover:border-[rgba(15,23,42,0.25)] shadow-xs transition-all duration-200 flex items-center justify-center gap-2 hover:-translate-y-0.5"
            >
              <span>Talk to Our Team</span>
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

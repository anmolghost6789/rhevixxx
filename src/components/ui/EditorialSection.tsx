"use client";

import React from "react";
import { EDITORIAL_LEADERS } from "@/data/platformData";
import { Quote, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

interface EditorialSectionProps {
  onOpenApply: () => void;
}

export const EditorialSection: React.FC<EditorialSectionProps> = ({ onOpenApply }) => {
  return (
    <section id="editorial" className="relative py-28 sm:py-36 bg-[#F6F7F9] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF1F4] border border-[rgba(15,23,42,0.08)] text-[#3155FF] text-xs font-mono font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" /> Frontier Perspectives
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-[700] text-[#101216] tracking-tight leading-[1.08]">
              Work at the frontier of intelligence.
            </h2>
            <p className="mt-5 text-base sm:text-lg text-[#4B5563] leading-relaxed font-normal">
              Great AI systems are not built by automated templates. They are shaped by
              principled thinkers, researchers, and engineers who grasp both machine nuance
              and human consequence.
            </p>
          </div>
        </ScrollReveal>

        {/* Magazine Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-9">
          {EDITORIAL_LEADERS.map((leader, idx) => (
            <ScrollReveal key={leader.id} delay={idx * 0.08}>
              <div className="group relative bg-white rounded-2xl border border-[rgba(15,23,42,0.08)] shadow-[0_1px_3px_rgba(15,23,42,0.04)] hover:shadow-[0_16px_32px_-8px_rgba(15,23,42,0.08)] hover:border-[rgba(49,85,255,0.28)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden h-full">
                <div className="p-6 sm:p-8 space-y-5">
                  {/* Profile Strip */}
                  <div className="flex items-center gap-5">
                    <div className="relative w-24 h-24 sm:w-26 sm:h-26 rounded-xl overflow-hidden shrink-0 border border-[rgba(15,23,42,0.1)]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="w-full h-full object-cover object-top group-hover:scale-103 transition-transform duration-500 ease-out"
                      />
                    </div>

                    <div className="space-y-1">
                      <span className="text-[11px] font-mono tracking-wider uppercase text-[#3155FF] font-semibold">
                        {leader.expertise}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-[700] text-[#101216] tracking-tight">
                        {leader.name}
                      </h3>
                      <p className="text-xs sm:text-sm font-medium text-[#4B5563]">
                        {leader.role}
                      </p>
                      <p className="text-[11px] text-[#6B7280] font-mono">
                        {leader.affiliation}
                      </p>
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="relative pt-1">
                    <Quote className="w-7 h-7 text-[#3155FF]/15 mb-2" />
                    <p className="text-base sm:text-lg text-[#17191D] italic leading-relaxed font-normal">
                      &ldquo;{leader.quote}&rdquo;
                    </p>
                  </div>

                  {/* Bio */}
                  <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                    {leader.bio}
                  </p>
                </div>

                {/* Footer Badges */}
                <div className="px-6 sm:px-8 py-3.5 bg-[#F6F7F9] border-t border-[rgba(15,23,42,0.06)] flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-1.5">
                    {leader.verifiedBadges.map((badge, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium bg-white border border-[rgba(15,23,42,0.08)] text-[#4B5563]"
                      >
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        {badge}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={onOpenApply}
                    className="text-xs font-semibold text-[#3155FF] hover:text-[#2344E0] flex items-center gap-1 group/btn"
                  >
                    <span>Connect</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Editorial Sub-callout */}
        <ScrollReveal delay={0.2}>
          <div className="mt-12 p-7 sm:p-8 rounded-2xl bg-white border border-[rgba(15,23,42,0.08)] shadow-[0_1px_3px_rgba(15,23,42,0.03)] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <h4 className="text-lg font-[700] text-[#101216]">
                Are you conducting frontier AI research or model evaluation?
              </h4>
              <p className="text-xs sm:text-sm text-[#4B5563] max-w-xl">
                Publish findings, mentor incoming specialists, and consult directly on high-value lab contracts.
              </p>
            </div>
            <button
              onClick={onOpenApply}
              className="py-3 px-6 bg-[#17191D] hover:bg-[#3155FF] text-white text-xs sm:text-sm font-[550] rounded-xl transition-all duration-200 shrink-0 hover:-translate-y-0.5 shadow-xs"
            >
              Apply to Frontier Roster
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

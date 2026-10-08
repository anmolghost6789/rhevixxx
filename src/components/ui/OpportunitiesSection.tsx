"use client";

import React from "react";
import { OPPORTUNITIES, OpportunityItem } from "@/data/platformData";
import { ArrowRight, MapPin, Building2, Sparkles } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

interface OpportunitiesSectionProps {
  onSelectOpportunity: (item: OpportunityItem) => void;
  onExploreOpportunities: () => void;
}

export const OpportunitiesSection: React.FC<OpportunitiesSectionProps> = ({
  onSelectOpportunity,
  onExploreOpportunities,
}) => {
  return (
    <section id="opportunities" className="relative py-28 sm:py-36 bg-white/70 backdrop-blur-[2px] border-t border-[rgba(15,23,42,0.06)] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[rgba(15,23,42,0.08)] shadow-2xs mb-3 text-xs font-mono font-medium text-[#3155FF]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3155FF]" />
                <span>Pre-Funded Contracts</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-[750] text-[#101216] tracking-tight">
                Work on what matters.
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[#4B5563] max-w-xl">
                Pre-funded contracts and engineering initiatives directly with frontier labs and top AI startups.
              </p>
            </div>

            <button
              onClick={onExploreOpportunities}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#3155FF] hover:text-[#2344E0] transition-colors self-start sm:self-auto group"
            >
              <span>Explore opportunities</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </ScrollReveal>

        {/* Clean Horizontal Opportunity Cards Stack */}
        <div className="space-y-3.5">
          {OPPORTUNITIES.map((opp, idx) => (
            <ScrollReveal key={opp.id} delay={idx * 0.04}>
              <div
                onClick={() => onSelectOpportunity(opp)}
                className="group relative p-5 sm:p-6 rounded-2xl bg-[#F6F7F9]/85 backdrop-blur-xs border border-[rgba(15,23,42,0.08)] shadow-[0_1px_3px_rgba(15,23,42,0.02)] hover:shadow-[0_16px_32px_-8px_rgba(49,85,255,0.1)] hover:border-[rgba(49,85,255,0.3)] hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                {/* Left: Role, Company & Remote */}
                <div className="space-y-1.5 min-w-[280px]">
                  <div className="flex items-center gap-2">
                    <h3 className="text-base sm:text-lg font-[700] text-[#101216] group-hover:text-[#3155FF] transition-colors">
                      {opp.role}
                    </h3>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-[#6B7280]">
                    <span className="font-medium text-[#4B5563] flex items-center gap-1">
                      <Building2 className="w-3 h-3 text-[#9CA3AF]" />
                      {opp.company}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-[#4B5563]">
                      <MapPin className="w-3 h-3 text-[#9CA3AF]" />
                      {opp.remote}
                    </span>
                  </div>
                </div>

                {/* Center: Skill Tags */}
                <div className="flex flex-wrap items-center gap-1.5 my-1 md:my-0">
                  {opp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-white text-[#4B5563] border border-[rgba(15,23,42,0.07)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Right: Compensation & Arrow */}
                <div className="flex items-center justify-between md:justify-end gap-5 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-[rgba(15,23,42,0.06)]">
                  <div className="text-left md:text-right">
                    <span className="text-xl font-[750] font-mono text-[#101216] group-hover:text-[#3155FF] transition-colors">
                      {opp.compensation}
                    </span>
                    <span className="text-xs font-mono text-[#6B7280] ml-1">
                      {opp.rateType}
                    </span>
                  </div>

                  <div className="w-8 h-8 rounded-lg bg-white border border-[rgba(15,23,42,0.08)] flex items-center justify-center text-[#6B7280] group-hover:text-[#3155FF] group-hover:border-[rgba(49,85,255,0.3)] transition-all">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom CTA Link */}
        <div className="mt-12 text-center">
          <button
            onClick={onExploreOpportunities}
            className="inline-flex items-center gap-2 py-3 px-6 rounded-xl bg-white hover:bg-[#EEF1F4] border border-[rgba(15,23,42,0.12)] text-xs font-[600] text-[#17191D] transition-all hover:-translate-y-0.5"
          >
            <span>Explore opportunities</span>
            <ArrowRight className="w-4 h-4 text-[#3155FF]" />
          </button>
        </div>
      </div>
    </section>
  );
};

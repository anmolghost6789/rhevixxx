"use client";

import React from "react";
import { TRUST_METRICS } from "@/data/platformData";
import { ScrollReveal } from "./ScrollReveal";

export const TrustMetrics: React.FC = () => {
  return (
    <section className="relative py-20 bg-[#EEF1F4]/60 border-y border-[rgba(15,23,42,0.06)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          {/* Eyebrow */}
          <div className="text-center mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#6B7280] font-semibold">
              Institutional Validation & Platform Scale
            </span>
            <h2 className="text-2xl sm:text-3xl font-[700] text-[#101216] mt-2 tracking-tight">
              Backed by frontier benchmarks, verified globally.
            </h2>
          </div>
        </ScrollReveal>

        {/* 4 Large Statistic Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {TRUST_METRICS.map((metric, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.06}>
              <div className="p-6 sm:p-7 rounded-2xl bg-white border border-[rgba(15,23,42,0.08)] shadow-[0_1px_3px_rgba(15,23,42,0.03)] hover:border-[rgba(49,85,255,0.3)] hover:-translate-y-1 transition-all duration-300">
                <div className="space-y-1.5">
                  <div className="text-4xl sm:text-5xl font-[750] text-[#101216] font-mono tracking-tight">
                    {metric.value}
                  </div>
                  <div className="text-base font-bold text-[#17191D] tracking-tight">
                    {metric.label}
                  </div>
                  <p className="text-xs text-[#6B7280] font-mono leading-relaxed">
                    {metric.detail}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Enterprise AI Labs Trust Bar */}
        <ScrollReveal delay={0.2}>
          <div className="mt-14 pt-8 border-t border-[rgba(15,23,42,0.06)] text-center">
            <p className="text-xs font-mono uppercase tracking-wider text-[#6B7280] mb-5">
              Empowering AI Engineering Teams Across Frontier Labs & Global Enterprises
            </p>
            <div className="flex flex-wrap items-center justify-center gap-7 sm:gap-12 opacity-70">
              {["Synthetix AI", "Cognition Alpha", "Frontier Scale", "Apex Multimodal", "Nexus Labs", "Matrix Systems"].map((company, i) => (
                <div key={i} className="flex items-center gap-2 text-[#17191D] font-bold text-sm tracking-tight">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#3155FF]" />
                  <span>{company}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

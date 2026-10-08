"use client";

import React from "react";
import { WHY_RHEVIX_BENEFITS } from "@/data/platformData";
import { ScrollReveal } from "./ScrollReveal";

export const WhyRhevixSection: React.FC = () => {
  return (
    <section id="why-rhevix" className="relative py-28 sm:py-36 bg-[#F6F7F9]/70 backdrop-blur-[2px] border-t border-[rgba(15,23,42,0.06)] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-16 sm:mb-20">
            <span className="text-xs font-mono uppercase tracking-widest text-[#3155FF] font-semibold">
              The Platform Standard
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-[750] text-[#101216] tracking-tight mt-2 leading-[1.08]">
              Why RHEVIX.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#4B5563] leading-relaxed">
              We stripped away generic tutorials and disconnected job boards. What remains is a direct bridge between world-class minds, actionable knowledge, and high-value work.
            </p>
          </div>
        </ScrollReveal>

        {/* 3 Simple Benefits with Large Typography */}
        <div className="divide-y divide-[rgba(15,23,42,0.08)]">
          {WHY_RHEVIX_BENEFITS.map((item, idx) => (
            <ScrollReveal key={item.number} delay={idx * 0.08}>
              <div className="py-10 sm:py-14 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-baseline">
                {/* Number & Stat Column */}
                <div className="md:col-span-3 flex md:flex-col justify-between items-baseline md:items-start gap-2">
                  <span className="text-3xl sm:text-4xl font-[750] font-mono text-[#9CA3AF]">
                    {item.number}
                  </span>
                  <div className="text-right md:text-left">
                    <span className="text-xl sm:text-2xl font-[750] text-[#101216] font-mono">
                      {item.stat}
                    </span>
                    <p className="text-xs text-[#6B7280] font-mono mt-0.5">
                      {item.statLabel}
                    </p>
                  </div>
                </div>

                {/* Title & Description Column */}
                <div className="md:col-span-9 space-y-3">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-[750] text-[#101216] tracking-tight leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed max-w-2xl font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

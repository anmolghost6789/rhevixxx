"use client";

import React, { useState } from "react";
import { HOW_IT_WORKS_STEPS } from "@/data/platformData";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

interface HowItWorksProps {
  onOpenApply: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenApply }) => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="how-it-works" className="relative py-28 sm:py-36 bg-white border-y border-[rgba(15,23,42,0.06)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-16 sm:mb-20 text-center mx-auto">
            <span className="text-xs font-mono uppercase tracking-widest text-[#3155FF] font-semibold">
              Frictionless Alignment
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-[700] text-[#101216] tracking-tight leading-[1.08] mt-3">
              How the RHEVIX network works.
            </h2>
            <p className="mt-5 text-base sm:text-lg text-[#4B5563] leading-relaxed font-normal">
              Designed from first principles to respect your time, preserve your intellectual independence,
              and match you with genuine frontier engineering challenges.
            </p>
          </div>
        </ScrollReveal>

        {/* Animated Horizontal Connection Line with Traveling Pulse Dot */}
        <div className="relative mb-14 hidden lg:block">
          <div className="h-0.5 w-full bg-[#EEF1F4] relative overflow-hidden">
            <div className="absolute top-0 bottom-0 w-24 bg-gradient-to-r from-transparent via-[#3155FF] to-transparent animate-ticker-marquee" />
          </div>

          <div className="flex justify-between -mt-3.5 px-6">
            {HOW_IT_WORKS_STEPS.map((step, idx) => (
              <div
                key={step.step}
                onClick={() => setActiveStep(idx)}
                className={`w-7 h-7 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all duration-300 cursor-pointer ${
                  activeStep === idx
                    ? "bg-[#3155FF] text-white ring-4 ring-[#3155FF]/15 scale-105 shadow-xs"
                    : "bg-white border-2 border-slate-300 text-[#6B7280] hover:border-[#3155FF]"
                }`}
              >
                {step.step}
              </div>
            ))}
          </div>
        </div>

        {/* 4 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {HOW_IT_WORKS_STEPS.map((item, idx) => {
            const isActive = activeStep === idx;
            return (
              <ScrollReveal key={item.step} delay={idx * 0.06}>
                <div
                  onMouseEnter={() => setActiveStep(idx)}
                  className={`group relative p-6 sm:p-7 rounded-2xl border transition-all duration-300 flex flex-col justify-between h-full ${
                    isActive
                      ? "bg-[#F6F7F9] border-[#3155FF] shadow-md -translate-y-1"
                      : "bg-white border-[rgba(15,23,42,0.08)] shadow-[0_1px_3px_rgba(15,23,42,0.03)] hover:border-[rgba(15,23,42,0.16)]"
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-[750] font-mono text-[#9CA3AF] group-hover:text-[#3155FF] transition-colors">
                        {item.step}
                      </span>
                      <span className="text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-[#EEF1F4] text-[#3155FF] border border-[rgba(15,23,42,0.08)]">
                        {item.action}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-lg font-[700] text-[#101216]">
                        {item.title}
                      </h3>
                      <div className="text-xs font-mono font-semibold text-[#3155FF] mt-0.5">
                        {item.headline}
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-6 border-t border-[rgba(15,23,42,0.06)] flex items-center justify-between text-xs">
                    <span className="font-mono text-[#6B7280] text-[11px]">
                      {item.detailTag}
                    </span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Action Button */}
        <ScrollReveal delay={0.2}>
          <div className="mt-14 text-center">
            <button
              onClick={onOpenApply}
              className="inline-flex items-center gap-2 py-3.5 px-8 rounded-xl bg-[#3155FF] hover:bg-[#2344E0] text-white font-[550] text-sm shadow-[0_8px_20px_-4px_rgba(49,85,255,0.3)] transition-all hover:-translate-y-0.5"
            >
              <span>Start Calibration Sandbox</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

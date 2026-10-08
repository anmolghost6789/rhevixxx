"use client";

import React from "react";
import { Compass, Network, Wrench, Sparkles } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const STEPS = [
  {
    number: "01",
    phase: "Understand",
    title: "Domain & Problem Discovery",
    desc: "We analyze your existing workflows, audit current data pipelines, and pinpoint high-leverage opportunities for engineering and intelligence.",
    icon: Compass,
  },
  {
    number: "02",
    phase: "Architect",
    title: "System & Blueprint Design",
    desc: "We design resilient, secure cloud-native architecture, select model foundation tiers, and define rigorous compliance protocols.",
    icon: Network,
  },
  {
    number: "03",
    phase: "Build",
    title: "Agile Production Engineering",
    desc: "Sprint-based delivery with continuous integration, automated test suites, clean API contracts, and real-time telemetry instrumentation.",
    icon: Wrench,
  },
  {
    number: "04",
    phase: "Evolve",
    title: "Autonomous Optimization",
    desc: "Post-deployment monitoring, iterative fine-tuning, latency optimization, and self-improving operational intelligence.",
    icon: Sparkles,
  },
];

export const ApproachSection: React.FC = () => {
  return (
    <section id="approach" className="relative py-28 sm:py-36 bg-white/70 backdrop-blur-[2px] border-t border-[rgba(15,23,42,0.06)] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF1F4] border border-[rgba(15,23,42,0.08)] text-[#3155FF] text-xs font-mono font-semibold uppercase tracking-wider mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3155FF]" />
              The RHEVIX Approach
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-[750] text-[#101216] tracking-tight leading-[1.08]">
              Think. Engineer. Evolve.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#4B5563] leading-relaxed">
              A disciplined, phased engineering methodology designed to de-risk complex modernization and accelerate high-impact deployments.
            </p>
          </div>
        </ScrollReveal>

        {/* 4-Step Timeline with Animated Connecting Line */}
        <div className="relative">
          {/* Subtle connecting line across desktop */}
          <div className="hidden lg:block absolute top-[52px] left-[6%] right-[6%] h-[2px] bg-gradient-to-r from-[#3155FF]/20 via-[#06B6D4]/30 to-[#3155FF]/20 z-0 pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 relative z-10">
            {STEPS.map((step, idx) => {
              const Icon = step.icon;
              return (
                <ScrollReveal key={step.number} delay={idx * 0.08}>
                  <div className="group relative p-6 sm:p-7 rounded-2xl bg-[#F6F7F9]/80 border border-[rgba(15,23,42,0.08)] shadow-[0_1px_3px_rgba(15,23,42,0.02)] hover:border-[rgba(49,85,255,0.3)] hover:shadow-[0_16px_32px_-12px_rgba(49,85,255,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full">
                    <div>
                      {/* Step Indicator Node */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-12 h-12 rounded-xl bg-white border border-[rgba(15,23,42,0.08)] flex items-center justify-center text-[#3155FF] group-hover:bg-[#3155FF] group-hover:text-white transition-colors duration-200 shadow-2xs">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-white border border-[rgba(15,23,42,0.08)] text-[#101216]">
                          {step.number}
                        </span>
                      </div>

                      <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#3155FF] mb-1">
                        {step.phase}
                      </div>

                      <h3 className="text-lg font-[750] text-[#101216] tracking-tight mb-2.5">
                        {step.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed font-normal">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

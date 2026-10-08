"use client";

import React from "react";
import { ScrollReveal } from "./ScrollReveal";

const WHY_POINTS = [
  {
    number: "01",
    title: "Deep Technical Expertise",
    description: "Battle-tested software architects, data engineers, and AI researchers who have designed and scaled enterprise systems globally.",
    metric: "Top Tier",
    metricLabel: "Practitioner Engineering Teams",
  },
  {
    number: "02",
    title: "AI-Native Thinking",
    description: "We don't bolt AI on as an afterthought. Every architecture, data model, and API is engineered from first principles for autonomous capabilities.",
    metric: "100%",
    metricLabel: "Integrated Intelligence",
  },
  {
    number: "03",
    title: "Engineering First",
    description: "Pragmatic, production-ready codebases with rigorous testing, strict security controls, and enterprise-grade resilience over superficial prototypes.",
    metric: "Zero Hype",
    metricLabel: "Production-Grade Delivery",
  },
  {
    number: "04",
    title: "Business Outcomes",
    description: "Technology is only as good as its business impact. We anchor every project to clear operational velocity, cost optimization, and revenue growth.",
    metric: "3.4x",
    metricLabel: "Faster Time to Market",
  },
  {
    number: "05",
    title: "Built to Scale",
    description: "Modular, cloud-agnostic architectures that grow effortlessly with your organization, handling exponential throughput without bottlenecks.",
    metric: "99.99%",
    metricLabel: "Resilient Uptime Standard",
  },
];

export const WhyRhevixSection: React.FC = () => {
  return (
    <section id="why-rhevix" className="relative py-28 sm:py-36 bg-white/70 backdrop-blur-[2px] border-t border-[rgba(15,23,42,0.06)] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-16 sm:mb-20">
            <span className="text-xs font-mono uppercase tracking-widest text-[#3155FF] font-semibold">
              The RHEVIX Advantage
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-[750] text-[#101216] tracking-tight mt-2 leading-[1.08]">
              Built for Organizations That Want to Move Faster.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#4B5563] leading-relaxed">
              We eliminate traditional consulting overhead and fragmented vendor chains, delivering direct access to world-class engineering teams.
            </p>
          </div>
        </ScrollReveal>

        {/* 5 Concise Points with Strong Typography */}
        <div className="divide-y divide-[rgba(15,23,42,0.08)]">
          {WHY_POINTS.map((item, idx) => (
            <ScrollReveal key={item.number} delay={idx * 0.05}>
              <div className="py-10 sm:py-12 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-baseline">
                {/* Number & Stat Column */}
                <div className="md:col-span-3 flex md:flex-col justify-between items-baseline md:items-start gap-1.5">
                  <span className="text-3xl sm:text-4xl font-[750] font-mono text-[#9CA3AF]">
                    {item.number}
                  </span>
                  <div className="text-right md:text-left">
                    <span className="text-lg sm:text-xl font-[750] text-[#101216] font-mono">
                      {item.metric}
                    </span>
                    <p className="text-xs text-[#6B7280] font-mono mt-0.5">
                      {item.metricLabel}
                    </p>
                  </div>
                </div>

                {/* Title & Description Column */}
                <div className="md:col-span-9 space-y-2.5">
                  <h3 className="text-2xl sm:text-3xl lg:text-3.5xl font-[750] text-[#101216] tracking-tight leading-snug">
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

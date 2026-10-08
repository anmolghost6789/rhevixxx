"use client";

import React from "react";
import { Landmark, Stethoscope, Building2, Briefcase, ArrowRight } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const INDUSTRIES = [
  {
    icon: Landmark,
    title: "Banking & Financial Services",
    summary: "High-assurance risk intelligence, low-latency transaction processing, automated regulatory compliance, and fraud detection engines.",
    highlights: ["Automated KYC & AML", "Algorithmic Risk Models", "Secure Open Banking APIs"],
  },
  {
    icon: Stethoscope,
    title: "Healthcare & Pharma",
    summary: "HIPAA-compliant patient data pipelines, automated clinical trial data matching, diagnostic acceleration, and operational health informatics.",
    highlights: ["Clinical Data Fabrics", "HIPAA/GDPR Compliance", "Predictive Diagnostics"],
  },
  {
    icon: Building2,
    title: "Enterprise",
    summary: "Cross-silo workflow orchestration, autonomous supply chain forecasting, intelligent ERP modernization, and executive decision intelligence.",
    highlights: ["Autonomous Workflows", "Intelligent ERP & SCM", "Enterprise Search & RAG"],
  },
  {
    icon: Briefcase,
    title: "Consulting & Technology",
    summary: "Specialized engineering pods, accelerated prototype-to-production cycles, embedded AI co-pilots, and technical architecture audits.",
    highlights: ["Dedicated Engineering Pods", "Speed to Market", "Modern Tech Architecture"],
  },
];

export const IndustriesSection: React.FC = () => {
  return (
    <section id="industries" className="relative py-28 sm:py-36 bg-[#F6F7F9]/80 backdrop-blur-[2px] border-t border-[rgba(15,23,42,0.06)] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[rgba(15,23,42,0.08)] text-[#3155FF] text-xs font-mono font-semibold uppercase tracking-wider mb-3 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3155FF]" />
              Industry Expertise
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-[750] text-[#101216] tracking-tight leading-[1.08]">
              Technology That Understands Your Business.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#4B5563] leading-relaxed">
              We bring specialized domain depth to every engagement, tailoring data architectures and intelligence models to your specific regulatory and market environment.
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Interactive Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {INDUSTRIES.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <ScrollReveal key={ind.title} delay={idx * 0.06}>
                <div className="group relative p-7 sm:p-9 rounded-2xl bg-white border border-[rgba(15,23,42,0.08)] shadow-[0_1px_3px_rgba(15,23,42,0.02)] hover:border-[rgba(49,85,255,0.35)] hover:shadow-[0_20px_40px_-12px_rgba(49,85,255,0.1)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full">
                  <div>
                    {/* Top Row: Icon + Number */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-[#F6F7F9] border border-[rgba(15,23,42,0.08)] flex items-center justify-center text-[#3155FF] group-hover:bg-[#3155FF] group-hover:text-white transition-colors duration-300 shadow-2xs">
                        <Icon className="w-6 h-6 transition-transform group-hover:scale-110 duration-300" />
                      </div>
                      <span className="text-xs font-mono font-semibold text-[#9CA3AF]">
                        0{idx + 1}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-[750] text-[#101216] tracking-tight group-hover:text-[#3155FF] transition-colors mb-2.5">
                      {ind.title}
                    </h3>

                    <p className="text-sm text-[#4B5563] leading-relaxed mb-6 font-normal">
                      {ind.summary}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="pt-4 border-t border-[rgba(15,23,42,0.06)] flex flex-wrap gap-2">
                    {ind.highlights.map((item) => (
                      <span
                        key={item}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-[#F6F7F9] text-[#374151] border border-[rgba(15,23,42,0.07)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

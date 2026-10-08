"use client";

import React from "react";
import { Sparkles, Database, Layers, Bot, RefreshCw, ArrowUpRight } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const PRODUCTS = [
  {
    icon: Sparkles,
    number: "01",
    title: "Intelligent Products",
    description: "End-to-end digital software with embedded reasoning capabilities, real-time natural language interfaces, and dynamic personalized experiences.",
    highlights: ["Contextual Interfaces", "Self-Tuning Features", "Cross-Platform Delivery"],
  },
  {
    icon: Database,
    number: "02",
    title: "Modern Data Platforms",
    description: "Scalable cloud lakehouses, streaming ingestion fabrics, and unified semantic layers that turn distributed data stores into authoritative single sources of truth.",
    highlights: ["Lakehouse Architecture", "Real-Time Streaming", "Automated Data Governance"],
  },
  {
    icon: Layers,
    number: "03",
    title: "Enterprise Applications",
    description: "Mission-critical, cloud-native distributed backends and modular microservices engineered to support thousands of concurrent transactions without performance degradation.",
    highlights: ["Microservices", "Event-Driven Systems", "High Availability & Uptime"],
  },
  {
    icon: Bot,
    number: "04",
    title: "AI-Powered Automation",
    description: "Autonomous multi-step agent pipelines that execute repetitive operational processes, triage complex information, and interface seamlessly across legacy systems.",
    highlights: ["Agentic Workflows", "Intelligent Document Triaging", "Exception Handling"],
  },
  {
    icon: RefreshCw,
    number: "05",
    title: "Digital Modernization",
    description: "Transforming brittle legacy software and fragmented databases into modern, API-first, cloud-native architectures without disrupting ongoing business operations.",
    highlights: ["Monolith to Cloud-Native", "Legacy Data Migration", "Zero-Downtime Cutover"],
  },
];

export const WhatWeBuildSection: React.FC = () => {
  return (
    <section id="what-we-build" className="relative py-28 sm:py-36 bg-white/70 backdrop-blur-[2px] border-t border-[rgba(15,23,42,0.06)] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF1F4] border border-[rgba(15,23,42,0.08)] text-[#3155FF] text-xs font-mono font-semibold uppercase tracking-wider mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3155FF]" />
              Engineering Portfolio
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-[750] text-[#101216] tracking-tight leading-[1.08]">
              From Ideas to Intelligent Systems.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#4B5563] leading-relaxed">
              We translate ambitious enterprise visions into bulletproof production software, resilient data architectures, and steerable AI tools.
            </p>
          </div>
        </ScrollReveal>

        {/* 5 Clean Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {PRODUCTS.map((prod, idx) => {
            const Icon = prod.icon;
            // Let the 5th card span 2 cols on lg screens or fit cleanly
            const isWide = idx === 4;
            return (
              <ScrollReveal
                key={prod.title}
                delay={idx * 0.05}
                className={isWide ? "md:col-span-2 lg:col-span-2" : ""}
              >
                <div className="group relative p-7 sm:p-8 rounded-2xl bg-[#F6F7F9]/80 border border-[rgba(15,23,42,0.08)] shadow-[0_1px_3px_rgba(15,23,42,0.02)] hover:border-[rgba(49,85,255,0.35)] hover:shadow-[0_20px_40px_-12px_rgba(49,85,255,0.1)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full">
                  <div>
                    {/* Top Row: Icon + Number */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-11 h-11 rounded-xl bg-white border border-[rgba(15,23,42,0.08)] flex items-center justify-center text-[#3155FF] group-hover:bg-[#3155FF] group-hover:text-white transition-colors duration-300 shadow-2xs">
                        <Icon className="w-5 h-5 transition-transform group-hover:scale-110 duration-300" />
                      </div>
                      <span className="text-xs font-mono font-bold text-[#9CA3AF] group-hover:text-[#3155FF] transition-colors">
                        {prod.number}
                      </span>
                    </div>

                    <h3 className="text-xl font-[750] text-[#101216] tracking-tight group-hover:text-[#3155FF] transition-colors mb-2.5">
                      {prod.title}
                    </h3>

                    <p className="text-sm text-[#4B5563] leading-relaxed mb-6 font-normal">
                      {prod.description}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="pt-4 border-t border-[rgba(15,23,42,0.06)] flex flex-wrap gap-2">
                    {prod.highlights.map((item) => (
                      <span
                        key={item}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-white text-[#4B5563] border border-[rgba(15,23,42,0.07)]"
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

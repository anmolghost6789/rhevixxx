"use client";

import React from "react";
import { Cpu, Code2, Database, BarChart3, ArrowRight } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const CAPABILITIES = [
  {
    icon: Cpu,
    title: "Artificial Intelligence",
    tagline: "Frontier Model Integration & Autonomous Agents",
    skills: ["Generative AI", "Agentic AI", "AI Engineering", "Machine Learning"],
    description: "Architecting enterprise-grade reasoning engines, custom RAG pipelines, and self-steering autonomous agent clusters for complex business operations.",
  },
  {
    icon: Code2,
    title: "Software Engineering",
    tagline: "Resilient Cloud-Native Distributed Architecture",
    skills: ["Product Engineering", "APIs", "Microservices", "Cloud-Native Development"],
    description: "Building ultra-reliable, high-concurrency digital platforms and modular API-first ecosystems designed for continuous uptime and hyperscale adoption.",
  },
  {
    icon: Database,
    title: "Data Engineering",
    tagline: "Modern Governed Data Platforms & Streaming Fabrics",
    skills: ["Data Architecture", "Data Platforms", "Data Pipelines", "Data Integration"],
    description: "Engineering robust modern lakehouses, multi-source ingestion pipelines, and low-latency real-time data flows that feed production AI systems.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Intelligence",
    tagline: "Decision Intelligence & Predictive Modeling",
    skills: ["Business Intelligence", "Data Science", "Predictive Analytics", "Decision Intelligence"],
    description: "Transforming raw telemetry and enterprise transactions into high-clarity foresight, predictive analytics, and executive decision-making engines.",
  },
];

export const CapabilitiesSection: React.FC = () => {
  return (
    <section id="capabilities" className="relative py-28 sm:py-36 bg-white/80 backdrop-blur-[2px] border-t border-[rgba(15,23,42,0.06)] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF1F4] border border-[rgba(15,23,42,0.08)] text-[#3155FF] text-xs font-mono font-semibold uppercase tracking-wider mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3155FF]" />
              Core Capabilities
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-[750] text-[#101216] tracking-tight leading-[1.08]">
              Engineering Intelligence.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#4B5563] leading-relaxed">
              We combine deep architectural rigor with AI-native methodologies to design, build, and deploy high-performance technical systems.
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Clean Interactive Capability Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {CAPABILITIES.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <ScrollReveal key={cap.title} delay={idx * 0.06}>
                <div className="group relative p-7 sm:p-9 rounded-2xl bg-[#F6F7F9]/80 border border-[rgba(15,23,42,0.08)] shadow-[0_1px_3px_rgba(15,23,42,0.02)] hover:border-[rgba(49,85,255,0.35)] hover:shadow-[0_20px_40px_-12px_rgba(49,85,255,0.1)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full">
                  <div>
                    {/* Top Row: Icon + Title */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-white border border-[rgba(15,23,42,0.08)] flex items-center justify-center text-[#3155FF] group-hover:bg-[#3155FF] group-hover:text-white transition-colors duration-300 shadow-2xs">
                        <Icon className="w-6 h-6 transition-transform group-hover:scale-110 duration-300" />
                      </div>
                      <span className="text-xs font-mono font-semibold text-[#9CA3AF]">
                        0{idx + 1}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-[750] text-[#101216] tracking-tight group-hover:text-[#3155FF] transition-colors">
                      {cap.title}
                    </h3>
                    <p className="text-xs font-mono text-[#6B7280] mt-1 mb-3.5">
                      {cap.tagline}
                    </p>
                    <p className="text-sm text-[#4B5563] leading-relaxed mb-6 font-normal">
                      {cap.description}
                    </p>
                  </div>

                  {/* Skills Tag Pills */}
                  <div>
                    <div className="pt-4 border-t border-[rgba(15,23,42,0.06)] flex flex-wrap gap-2">
                      {cap.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-white text-[#374151] border border-[rgba(15,23,42,0.08)] group-hover:border-[#3155FF]/25 group-hover:text-[#3155FF] transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
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

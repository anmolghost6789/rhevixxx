"use client";

import React from "react";
import { Cpu, Database, BarChart2, Cloud, Terminal } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const TECH_GROUPS = [
  {
    icon: Cpu,
    category: "AI",
    tagline: "Frontier Foundation & Agentic Frameworks",
    items: ["OpenAI", "Generative AI", "Agentic AI", "Machine Learning"],
  },
  {
    icon: Database,
    category: "Data",
    tagline: "Enterprise Lakehouses & Data Fabrics",
    items: ["Snowflake", "Databricks", "Informatica", "Talend"],
  },
  {
    icon: BarChart2,
    category: "Analytics",
    tagline: "Business Intelligence & Statistical Modeling",
    items: ["Power BI", "Tableau", "Qlik", "Data Science"],
  },
  {
    icon: Cloud,
    category: "Cloud",
    tagline: "Scalable Infrastructure & Secure Foundations",
    items: ["Microsoft Azure", "Cloud Architecture"],
  },
  {
    icon: Terminal,
    category: "Engineering",
    tagline: "Robust Core Backends & Event-Driven Systems",
    items: ["APIs", "Microservices", "Automation", "Application Development"],
  },
];

export const TechnologyStackSection: React.FC = () => {
  return (
    <section id="technology" className="relative py-28 sm:py-36 bg-[#F6F7F9]/80 backdrop-blur-[2px] border-t border-[rgba(15,23,42,0.06)] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[rgba(15,23,42,0.08)] text-[#3155FF] text-xs font-mono font-semibold uppercase tracking-wider mb-3 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3155FF]" />
              Ecosystem
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-[750] text-[#101216] tracking-tight leading-[1.08]">
              Built Across the Modern Technology Stack.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#4B5563] leading-relaxed">
              We leverage industry-proven foundation frameworks, modern data platforms, and enterprise cloud infrastructure to engineer resilient, vendor-neutral architectures.
            </p>
          </div>
        </ScrollReveal>

        {/* Minimal Technology Grouping Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {TECH_GROUPS.map((group, idx) => {
            const Icon = group.icon;
            const isFullWidth = idx === 4;
            return (
              <ScrollReveal
                key={group.category}
                delay={idx * 0.05}
                className={isFullWidth ? "md:col-span-2 lg:col-span-2" : ""}
              >
                <div className="group p-7 sm:p-8 rounded-2xl bg-white border border-[rgba(15,23,42,0.08)] shadow-[0_1px_3px_rgba(15,23,42,0.02)] hover:border-[rgba(49,85,255,0.3)] hover:shadow-[0_16px_32px_-12px_rgba(49,85,255,0.08)] transition-all duration-300 h-full flex flex-col justify-between">
                  <div>
                    {/* Category Title + Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#F6F7F9] border border-[rgba(15,23,42,0.08)] flex items-center justify-center text-[#3155FF] group-hover:bg-[#3155FF] group-hover:text-white transition-colors duration-200">
                          <Icon className="w-5 h-5" />
                        </div>
                        <h3 className="text-xl font-[750] text-[#101216] tracking-tight group-hover:text-[#3155FF] transition-colors">
                          {group.category}
                        </h3>
                      </div>
                      <span className="text-[11px] font-mono font-medium text-[#9CA3AF]">
                        0{idx + 1}
                      </span>
                    </div>

                    <p className="text-xs font-mono text-[#6B7280] mb-6">
                      {group.tagline}
                    </p>
                  </div>

                  {/* Clean Minimal Pills */}
                  <div className="pt-4 border-t border-[rgba(15,23,42,0.06)] flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-[#F6F7F9] text-[#17191D] border border-[rgba(15,23,42,0.06)] group-hover:bg-white group-hover:border-[#3155FF]/30 group-hover:text-[#3155FF] transition-all duration-200"
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

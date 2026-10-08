"use client";

import React from "react";
import { ArrowRight, Sparkles, Cpu, Layers, ShieldCheck, Zap } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const AI_TAGS = [
  "Generative AI",
  "Agentic AI",
  "AI Agents",
  "Enterprise LLM",
  "RAG",
  "AI Automation",
  "Machine Learning",
];

const AI_PILLARS = [
  {
    icon: Cpu,
    title: "Domain-Adapted Models",
    desc: "Fine-tuned models calibrated on your proprietary data with strict deterministic controls.",
  },
  {
    icon: Layers,
    title: "Agentic Orchestration",
    desc: "Multi-agent swarms that plan, execute, and self-correct across enterprise toolchains.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Safety & Guardrails",
    desc: "Verifiable alignment, hallucination containment, and strict compliance security.",
  },
];

interface RhevixAISectionProps {
  onExploreAI?: () => void;
}

export const RhevixAISection: React.FC<RhevixAISectionProps> = ({ onExploreAI }) => {
  return (
    <section id="rhevix-ai" className="relative py-28 sm:py-36 bg-[#F6F7F9]/80 backdrop-blur-[2px] border-t border-[rgba(15,23,42,0.06)] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Heading, Copy, Tags, CTA */}
          <div className="lg:col-span-7 space-y-7">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[rgba(15,23,42,0.08)] text-[#3155FF] text-xs font-mono font-semibold uppercase tracking-wider mb-2 shadow-2xs">
                <Sparkles className="w-3.5 h-3.5" />
                <span>RHEVIX Intelligence Framework</span>
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-[750] text-[#101216] tracking-tight leading-[1.08]">
                Build With Intelligence.
              </h2>

              <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed max-w-xl font-normal">
                We take AI out of experimental sandboxes and embed it directly into core production workflows. From custom retrieval architectures to autonomous agent swarms, RHEVIX engineers resilient, audit-ready AI systems built for measurable enterprise return.
              </p>

              {/* Compact Capability Tags */}
              <div className="pt-2 flex flex-wrap gap-2 max-w-xl">
                {AI_TAGS.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-white text-[#17191D] border border-[rgba(15,23,42,0.08)] shadow-2xs hover:border-[#3155FF]/40 hover:text-[#3155FF] transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3155FF]" />
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <a
                  href="#contact"
                  onClick={(e) => {
                    if (onExploreAI) {
                      e.preventDefault();
                      onExploreAI();
                    }
                  }}
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#101216] hover:bg-[#3155FF] text-white font-[550] text-sm rounded-xl shadow-xs transition-all duration-200 hover:-translate-y-0.5 group"
                >
                  <span>Explore RHEVIX AI</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Lightweight Animated AI Neural Hub Visual */}
          <div className="lg:col-span-5">
            <ScrollReveal delay={0.12}>
              <div className="relative rounded-2xl p-7 sm:p-8 bg-white border border-[rgba(15,23,42,0.08)] shadow-[0_12px_36px_-12px_rgba(15,23,42,0.08)] overflow-hidden">
                {/* Subtle Ambient Glow */}
                <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-[#3155FF]/10 blur-3xl pointer-events-none" />

                {/* Top Header */}
                <div className="flex items-center justify-between pb-5 border-b border-[rgba(15,23,42,0.06)]">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-mono font-semibold text-[#101216]">AI RUNTIME ENGINE</span>
                  </div>
                  <span className="text-[11px] font-mono text-[#6B7280]">v4.2 PROD</span>
                </div>

                {/* 3 Pillars */}
                <div className="py-5 space-y-4">
                  {AI_PILLARS.map((item, idx) => {
                    const PillarIcon = item.icon;
                    return (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-[#F6F7F9] border border-[rgba(15,23,42,0.06)] hover:border-[#3155FF]/30 transition-colors duration-200 flex items-start gap-3.5"
                      >
                        <div className="w-8 h-8 rounded-lg bg-white border border-[rgba(15,23,42,0.08)] flex items-center justify-center text-[#3155FF] shrink-0 mt-0.5 shadow-2xs">
                          <PillarIcon className="w-4 h-4" />
                        </div>
                        <div className="space-y-0.5">
                          <h4 className="text-xs font-bold text-[#101216]">{item.title}</h4>
                          <p className="text-[11px] text-[#4B5563] leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Footer Metric */}
                <div className="pt-4 border-t border-[rgba(15,23,42,0.06)] flex items-center justify-between text-xs text-[#6B7280] font-mono">
                  <span>99.98% Model Fidelity</span>
                  <span className="text-[#3155FF] font-semibold">&lt; 85ms Latency</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

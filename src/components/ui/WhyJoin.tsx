"use client";

import React from "react";
import { VALUE_PROPOSITIONS } from "@/data/platformData";
import { Globe, Cpu, Users, ArrowUpRight } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

interface WhyJoinProps {
  onOpenApply: () => void;
}

export const WhyJoin: React.FC<WhyJoinProps> = ({ onOpenApply }) => {
  const getVisualForCard = (idx: number) => {
    if (idx === 0) {
      return (
        <div className="p-3.5 rounded-xl bg-[#17191D] text-white font-mono text-[11px] space-y-1.5 shadow-inner">
          <div className="flex items-center justify-between text-[#9CA3AF] text-[10px] pb-1 border-b border-slate-700">
            <span>contract_benchmark.py</span>
            <span className="text-emerald-400 font-bold">$280 / HR</span>
          </div>
          <p className="text-blue-300">def evaluate_chain_of_thought(model):</p>
          <p className="text-[#9CA3AF] pl-3">loss = alignment_loss(cot_trace)</p>
          <p className="text-[#9CA3AF] pl-3">return loss &lt; 0.001 # Verified</p>
          <div className="flex items-center gap-1.5 text-[10px] text-emerald-400 pt-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Autonomous Escrow Verified</span>
          </div>
        </div>
      );
    } else if (idx === 1) {
      return (
        <div className="p-3.5 rounded-xl bg-[#EEF1F4]/70 border border-[rgba(15,23,42,0.08)] text-xs space-y-2">
          <div className="flex items-center justify-between text-[11px] font-mono text-[#4B5563]">
            <span className="flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-[#3155FF]" /> 120+ Countries
            </span>
            <span className="text-emerald-600 font-semibold font-mono">100% Async</span>
          </div>
          <div className="grid grid-cols-3 gap-1.5 text-center text-[10px] font-mono">
            <div className="p-1.5 rounded-lg bg-white border border-[rgba(15,23,42,0.08)] text-[#17191D]">SF (PST)</div>
            <div className="p-1.5 rounded-lg bg-white border border-[rgba(15,23,42,0.08)] text-[#17191D]">LDN (GMT)</div>
            <div className="p-1.5 rounded-lg bg-white border border-[rgba(15,23,42,0.08)] text-[#17191D]">TYO (JST)</div>
          </div>
          <div className="flex justify-between items-center text-[10px] text-[#6B7280] font-mono pt-1">
            <span>Zero fixed standups</span>
            <span className="text-[#3155FF] font-medium">Deliver on milestones</span>
          </div>
        </div>
      );
    } else {
      return (
        <div className="p-3.5 rounded-xl bg-[#EEF1F4]/70 border border-[rgba(15,23,42,0.08)] text-xs space-y-2">
          <div className="flex items-center justify-between text-[11px] font-mono text-[#4B5563]">
            <span className="flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-[#4F46E5]" /> Peer Caliber
            </span>
            <span className="text-[#3155FF] font-bold font-mono">Top 1.5% Vetted</span>
          </div>
          <div className="flex items-center justify-between gap-1 text-[10px] font-medium text-[#17191D]">
            <span className="px-2 py-1 rounded-md bg-white border border-[rgba(15,23,42,0.08)]">MIT Ph.D.</span>
            <span className="text-[#9CA3AF]">•</span>
            <span className="px-2 py-1 rounded-md bg-white border border-[rgba(15,23,42,0.08)]">Stanford AI</span>
            <span className="text-[#9CA3AF]">•</span>
            <span className="px-2 py-1 rounded-md bg-white border border-[rgba(15,23,42,0.08)]">DeepMind Alumni</span>
          </div>
          <div className="text-[10px] text-[#6B7280] font-mono text-center pt-0.5">
            Private salons, co-authoring & technical review pods
          </div>
        </div>
      );
    }
  };

  const getIconForCard = (idx: number) => {
    if (idx === 0) return <Cpu className="w-5 h-5 text-[#3155FF]" />;
    if (idx === 1) return <Globe className="w-5 h-5 text-[#0284C7]" />;
    return <Users className="w-5 h-5 text-[#4F46E5]" />;
  };

  return (
    <section id="why-join" className="relative py-28 sm:py-36 bg-white border-y border-[rgba(15,23,42,0.06)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-16 sm:mb-20">
            <span className="text-xs font-mono uppercase tracking-widest text-[#3155FF] font-semibold">
              Unrivaled Opportunity Architecture
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-[700] text-[#101216] tracking-tight leading-[1.08] mt-3">
              Your expertise deserves better opportunities.
            </h2>
            <p className="mt-5 text-base sm:text-lg text-[#4B5563] leading-relaxed font-normal">
              Legacy freelance boards and enterprise staffing were created for routine tasks.
              RHEVIX is specifically engineered for frontier minds pushing the scientific envelope.
            </p>
          </div>
        </ScrollReveal>

        {/* 3 Large Value Prop Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
          {VALUE_PROPOSITIONS.map((card, idx) => (
            <ScrollReveal key={card.number} delay={idx * 0.08}>
              <div className="group relative p-8 sm:p-9 rounded-2xl bg-[#F6F7F9] border border-[rgba(15,23,42,0.08)] shadow-[0_1px_3px_rgba(15,23,42,0.03)] hover:shadow-[0_16px_32px_-8px_rgba(15,23,42,0.08)] hover:border-[rgba(49,85,255,0.28)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl sm:text-4xl font-[750] font-mono text-[#9CA3AF] group-hover:text-[#3155FF] transition-colors">
                      {card.number}
                    </span>
                    <div className="p-2.5 rounded-xl bg-white border border-[rgba(15,23,42,0.08)] shadow-xs">
                      {getIconForCard(idx)}
                    </div>
                  </div>

                  <div>
                    <div className="text-xs font-mono font-bold tracking-wider uppercase text-[#3155FF] mb-2">
                      {card.tagline}
                    </div>
                    <h3 className="text-2xl font-[700] text-[#101216] tracking-tight leading-snug">
                      {card.headline}
                    </h3>
                    <p className="mt-3 text-sm text-[#4B5563] leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  {/* Miniature Visual */}
                  <div className="pt-2">
                    {getVisualForCard(idx)}
                  </div>
                </div>

                {/* Footer Metric */}
                <div className="pt-7 mt-6 border-t border-[rgba(15,23,42,0.07)] flex items-center justify-between">
                  <span className="text-xs font-mono text-[#6B7280] font-medium">
                    {card.metrics}
                  </span>
                  <button
                    onClick={onOpenApply}
                    className="w-8 h-8 rounded-lg bg-white border border-[rgba(15,23,42,0.1)] flex items-center justify-center text-[#6B7280] group-hover:text-[#3155FF] group-hover:border-[rgba(49,85,255,0.3)] transition-all"
                    aria-label="Apply for high value work"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

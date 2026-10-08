"use client";

import React, { useState } from "react";
import { EXPERTISE_CATEGORIES } from "@/data/platformData";
import {
  Code,
  Brain,
  Cpu,
  Database,
  Sparkles,
  Shield,
  Cloud,
  Palette,
  Layers,
  Atom,
  PenTool,
  ArrowRight,
  TrendingUp,
  Sigma,
} from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

interface ExpertiseExplorerProps {
  onSelectCategoryFilter: (categoryTitle: string) => void;
}

export const ExpertiseExplorer: React.FC<ExpertiseExplorerProps> = ({
  onSelectCategoryFilter,
}) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const getIcon = (iconName: string) => {
    const props = { className: "w-5 h-5 transition-transform duration-300 group-hover:scale-105" };
    switch (iconName) {
      case "Code": return <Code {...props} />;
      case "Brain": return <Brain {...props} />;
      case "Cpu": return <Cpu {...props} />;
      case "Database": return <Database {...props} />;
      case "Sparkles": return <Sparkles {...props} />;
      case "Sigma": return <Sigma {...props} />;
      case "Shield": return <Shield {...props} />;
      case "Cloud": return <Cloud {...props} />;
      case "Palette": return <Palette {...props} />;
      case "Layers": return <Layers {...props} />;
      case "Atom": return <Atom {...props} />;
      case "PenTool": return <PenTool {...props} />;
      default: return <Sparkles {...props} />;
    }
  };

  return (
    <section id="expertise" className="relative py-28 sm:py-36 bg-white border-y border-[rgba(15,23,42,0.06)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-16 sm:mb-20">
            <span className="text-xs font-mono uppercase tracking-widest text-[#3155FF] font-semibold">
              Frontier Taxonomies
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-[700] text-[#101216] tracking-tight leading-[1.08] mt-3">
              Where does your expertise fit?
            </h2>
            <p className="mt-5 text-base sm:text-lg text-[#4B5563] leading-relaxed font-normal">
              Whether you design distributed CUDA kernels, formulate proofs in Lean, or curate multimodal tokens,
              RHEVIX connects specialized minds with dedicated research pods.
            </p>
          </div>
        </ScrollReveal>

        {/* 12 Interactive Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {EXPERTISE_CATEGORIES.map((cat, idx) => {
            const isHovered = hoveredId === cat.id;
            return (
              <ScrollReveal key={cat.id} delay={idx * 0.04}>
                <div
                  onMouseEnter={() => setHoveredId(cat.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onClick={() => onSelectCategoryFilter(cat.title)}
                  className={`group relative p-5 sm:p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between h-full ${
                    isHovered
                      ? "bg-[#F6F7F9] border-[#3155FF] shadow-md -translate-y-1"
                      : "bg-white border-[rgba(15,23,42,0.08)] shadow-[0_1px_3px_rgba(15,23,42,0.03)] hover:border-[rgba(15,23,42,0.16)]"
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div
                        className={`p-2.5 rounded-xl border transition-colors ${
                          isHovered
                            ? "bg-[#3155FF] text-white border-[#3155FF]"
                            : "bg-[#EEF1F4] text-[#17191D] border-[rgba(15,23,42,0.08)] group-hover:text-[#3155FF]"
                        }`}
                      >
                        {getIcon(cat.icon)}
                      </div>

                      <span className="text-[11px] font-mono font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60 flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        {cat.opportunitiesCount}+ Roles
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-[700] text-[#101216] group-hover:text-[#3155FF] transition-colors">
                      {cat.title}
                    </h3>

                    <p className="text-xs text-[#4B5563] leading-relaxed line-clamp-2">
                      {cat.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[rgba(15,23,42,0.06)] flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1 text-[10px] font-mono text-[#6B7280]">
                      <span>{cat.skills[0]}</span>
                      <span>·</span>
                      <span>{cat.skills[1]}</span>
                    </div>
                    <span className="text-[#3155FF] font-semibold group-hover:translate-x-0.5 transition-transform flex items-center gap-0.5 text-xs">
                      View <ArrowRight className="w-3 h-3" />
                    </span>
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

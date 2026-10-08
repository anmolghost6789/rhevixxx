"use client";

import React, { useRef } from "react";
import { Expert } from "@/data/platformData";
import { Star, ArrowRight } from "lucide-react";

interface ExpertCard3DProps {
  expert: Expert;
  onSelect: (expert: Expert) => void;
}

export const ExpertCard3D: React.FC<ExpertCard3DProps> = ({ expert, onSelect }) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth < 768) return; // Disabled on mobile
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -5.5;
    const rotY = ((x - centerX) / centerX) * 5.5;

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      if (card) {
        card.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(10px) translateY(-5px)`;
      }
    });
  };

  const handleMouseLeave = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    if (cardRef.current) {
      cardRef.current.style.transform = "rotateX(0deg) rotateY(0deg) translateZ(0px) translateY(0px)";
    }
  };

  return (
    <div
      className="relative select-none group/card"
      style={{ perspective: "1000px" }}
    >
      <div
        ref={cardRef}
        onClick={() => onSelect(expert)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative rounded-2xl p-6 sm:p-7 bg-white transition-all duration-300 ease-out cursor-pointer flex flex-col justify-between h-full border border-[rgba(15,23,42,0.08)] shadow-[0_1px_3px_rgba(15,23,42,0.02)] group-hover/card:border-[rgba(49,85,255,0.35)] group-hover/card:shadow-[0_22px_45px_-12px_rgba(49,85,255,0.12),0_4px_16px_rgba(15,23,42,0.04)] will-change-transform"
        style={{
          transformStyle: "preserve-3d",
          transform: "rotateX(0deg) rotateY(0deg) translateZ(0px) translateY(0px)",
          transition: "transform 0.15s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease, border-color 0.3s ease",
        }}
      >
        {/* Holographic Refractive Edge Sheen on Hover */}
        <div
          className="absolute -inset-[1px] rounded-2xl pointer-events-none transition-opacity duration-300 opacity-0 group-hover/card:opacity-100"
          style={{
            background: "linear-gradient(135deg, rgba(49,85,255,0.25) 0%, rgba(6,182,212,0.18) 50%, rgba(79,70,229,0.15) 100%)",
            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            maskComposite: "exclude",
            padding: "1px",
          }}
        />

        {/* Ambient Subtle Depth Layer */}
        <div
          className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#3155FF]/[0.02] to-transparent pointer-events-none transition-opacity duration-300 opacity-0 group-hover/card:opacity-100"
        />

        {/* Content Container with 3D Depth Separation */}
        <div className="relative z-10 space-y-4" style={{ transformStyle: "preserve-3d" }}>
          {/* Top Row: Avatar with 3D forward lift + Rating badge */}
          <div className="flex items-start justify-between gap-4" style={{ transformStyle: "preserve-3d" }}>
            {/* Profile Avatar */}
            <div className="relative transition-transform duration-300 ease-out group-hover/card:scale-105">
              <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-xl overflow-hidden shrink-0 border border-[rgba(15,23,42,0.1)] shadow-xs bg-slate-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={expert.photo}
                  alt={expert.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-top transition-transform duration-500 ease-out"
                />
              </div>

              {/* Status Indicator */}
              <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-white border border-[rgba(15,23,42,0.08)] flex items-center justify-center shadow-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>
            </div>

            {/* Rating Badge */}
            <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#F6F7F9] border border-[rgba(15,23,42,0.08)] text-[11px] font-semibold text-[#101216]">
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              <span>{expert.rating}</span>
            </div>
          </div>

          {/* Name & Role */}
          <div className="space-y-0.5">
            <h3 className="text-lg font-[750] text-[#101216] tracking-tight group-hover/card:text-[#3155FF] transition-colors">
              {expert.name}
            </h3>
            <p className="text-xs font-medium text-[#4B5563]">
              {expert.role}
            </p>
            <p className="text-[11px] text-[#6B7280] font-mono">
              {expert.affiliation}
            </p>
          </div>

          {/* Floating Expertise Tag */}
          <div>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-mono font-medium transition-all duration-300 bg-[#F6F7F9] text-[#4B5563] border border-[rgba(15,23,42,0.06)] group-hover/card:bg-[#3155FF]/10 group-hover/card:text-[#3155FF] group-hover/card:border-[#3155FF]/30">
              <span className="w-1 h-1 rounded-full bg-[#9CA3AF] group-hover/card:bg-[#3155FF]" />
              {expert.expertise}
            </span>
          </div>

          {/* Short Description */}
          <p className="text-xs text-[#4B5563] leading-relaxed line-clamp-3">
            {expert.shortDescription}
          </p>
        </div>

        {/* Card Footer with "Explore Expert →" interaction */}
        <div className="relative z-10 pt-4 mt-5 border-t border-[rgba(15,23,42,0.06)] flex items-center justify-between text-xs">
          <span className="font-mono text-[#6B7280] text-[11px]">
            {expert.studentsCount}+ learners
          </span>

          {/* Interaction Pill */}
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#6B7280] opacity-70 group-hover/card:text-[#3155FF] group-hover/card:opacity-100 transition-all duration-300">
            <span>Explore Expert</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/card:translate-x-1 text-[#9CA3AF] group-hover/card:text-[#3155FF]" />
          </div>
        </div>
      </div>
    </div>
  );
};

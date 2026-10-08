"use client";

import React, { useState } from "react";
import { ArrowRight, Sparkles, Star, Users, CheckCircle, Play } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

interface HeroProps {
  onExploreExperts: () => void;
  onExploreCourses: () => void;
  onSelectHeroExpert: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreExperts,
  onExploreCourses,
  onSelectHeroExpert,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleHeroVisualMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth < 768) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setTilt({
      x: (y / (rect.height / 2)) * -4,
      y: (x / (rect.width / 2)) * 4,
    });
  };

  const handleHeroVisualMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 overflow-hidden bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Clear Copy & CTAs */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            <ScrollReveal>
              {/* Subtle Trust Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[rgba(15,23,42,0.08)] shadow-xs mb-3 text-xs font-mono font-medium text-[#4B5563]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3155FF]" />
                <span>Frontier AI Learning & Expert Network</span>
              </div>

              {/* Huge Simple Headline */}
              <h1 className="text-4xl sm:text-6xl lg:text-[70px] font-[750] tracking-tight text-[#101216] leading-[1.06]">
                Learn from experts. <br />
                <span className="text-[#101216]">Build what’s next.</span>
              </h1>

              {/* Short Clear Description in 1–2 lines */}
              <p className="mt-5 text-base sm:text-lg text-[#4B5563] max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Direct masterclasses and 1-on-1 mentorship with the engineers, researchers, and founders building frontier AI systems.
              </p>

              {/* Clean Actions */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
                <button
                  onClick={onExploreExperts}
                  className="w-full sm:w-auto px-7 py-3.5 bg-[#101216] hover:bg-[#3155FF] text-white font-[550] text-sm rounded-xl shadow-xs transition-all duration-200 flex items-center justify-center gap-2 hover:-translate-y-0.5 group"
                >
                  <span>Explore Experts</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={onExploreCourses}
                  className="w-full sm:w-auto px-7 py-3.5 bg-white hover:bg-[#EEF1F4] text-[#17191D] font-[550] text-sm rounded-xl border border-[rgba(15,23,42,0.12)] hover:border-[rgba(15,23,42,0.25)] shadow-xs transition-all duration-200 flex items-center justify-center gap-2 hover:-translate-y-0.5"
                >
                  <span>Explore Courses</span>
                </button>
              </div>

              {/* Trust statement */}
              <div className="pt-4 flex items-center justify-center lg:justify-start gap-6 text-xs text-[#6B7280]">
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Top 1.5% Vetted Builders</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Direct Project Mentorship</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: ONE Beautiful Minimal Interactive Visual */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <ScrollReveal delay={0.15}>
              <div
                className="relative w-full max-w-[380px] select-none"
                style={{ perspective: "1000px" }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseMove={handleHeroVisualMouseMove}
                onMouseLeave={handleHeroVisualMouseLeave}
              >
                {/* Subtle soft backdrop wash */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-[#3155FF]/10 to-indigo-100/40 rounded-3xl blur-2xl pointer-events-none" />

                {/* Primary Expert Focus Card */}
                <div
                  onClick={onSelectHeroExpert}
                  className="relative bg-white rounded-2xl p-6 border border-[rgba(15,23,42,0.08)] shadow-[0_12px_36px_-12px_rgba(15,23,42,0.08)] transition-all duration-300 hover:shadow-[0_20px_45px_-12px_rgba(49,85,255,0.14)] hover:border-[rgba(49,85,255,0.3)] cursor-pointer"
                  style={{
                    transformStyle: "preserve-3d",
                    transform: isHovered
                      ? `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateZ(10px) translateY(-4px)`
                      : "rotateX(0deg) rotateY(0deg) translateZ(0px) translateY(0px)",
                    transition: isHovered ? "transform 0.12s ease-out, box-shadow 0.3s ease" : "all 0.5s ease",
                  }}
                >
                  {/* Top Status */}
                  <div className="flex items-center justify-between pb-4 border-b border-[rgba(15,23,42,0.06)] text-xs">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-medium border border-emerald-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Active Mentor
                    </span>
                    <span className="font-mono text-[#6B7280] text-[11px]">MIT Ph.D.</span>
                  </div>

                  {/* Expert Details */}
                  <div className="py-4 flex items-center gap-4">
                    <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-[rgba(15,23,42,0.08)] shadow-xs">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/images/elena_vance.jpg"
                        alt="Dr. Elena Vance"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div>
                      <h3 className="text-base font-[700] text-[#101216]">
                        Dr. Elena Vance
                      </h3>
                      <p className="text-xs text-[#4B5563]">
                        Principal Alignment Researcher
                      </p>
                      <div className="flex items-center gap-1.5 mt-1 text-[11px] text-[#6B7280]">
                        <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                        <span className="font-semibold text-[#101216]">4.98</span>
                        <span>(1,420 learners)</span>
                      </div>
                    </div>
                  </div>

                  {/* Featured Topic Pill */}
                  <div className="p-3 rounded-xl bg-[#F6F7F9] border border-[rgba(15,23,42,0.06)] flex items-center justify-between text-xs">
                    <div className="space-y-0.5">
                      <div className="text-[10px] uppercase font-mono text-[#6B7280]">Current Focus</div>
                      <div className="font-semibold text-[#101216]">Frontier Reasoning & RLHF</div>
                    </div>
                    <div className="w-7 h-7 rounded-lg bg-white border border-[rgba(15,23,42,0.1)] flex items-center justify-center text-[#3155FF] shadow-xs">
                      <Play className="w-3.5 h-3.5 fill-[#3155FF]" />
                    </div>
                  </div>
                </div>

                {/* Floating Secondary Milestone Card */}
                <div className="mt-3.5 bg-white/95 backdrop-blur-sm rounded-xl p-3.5 border border-[rgba(15,23,42,0.08)] shadow-md flex items-center justify-between transition-transform duration-300 hover:-translate-y-0.5">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg overflow-hidden shrink-0 border border-[rgba(15,23,42,0.08)]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/images/marcus_thorne.jpg"
                        alt="Marcus Thorne"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div>
                      <div className="text-xs font-[650] text-[#101216]">Distributed GPU Clusters</div>
                      <div className="text-[11px] text-[#6B7280]">Marcus Thorne · Stanford MS</div>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-md bg-[#EEF1F4] text-[#3155FF] font-mono text-[10px] font-semibold">
                    18h Course
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

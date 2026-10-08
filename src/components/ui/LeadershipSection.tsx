"use client";

import React from "react";
import { ArrowRight, Award } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const LEADERS = [
  {
    name: "Vikram Malhotra",
    role: "Managing Director & Chief Technology Officer",
    background: "ex-Enterprise VP · 20+ Yrs in Distributed Platforms",
    focus: "AI Infrastructure & Cloud Modernization",
    photo: "/images/elena_vance.jpg", // Using local high-res image
  },
  {
    name: "Anand Deshmukh",
    role: "Head of Data & Intelligence Architecture",
    background: "Former Cloud Lakehouse Lead · 16+ Yrs in Data Systems",
    focus: "Enterprise Data Fabrics & Governance",
    photo: "/images/marcus_thorne.jpg", // Using local high-res image
  },
  {
    name: "Dr. Sarah Al-Sabah",
    role: "VP of Applied AI Research & Safety",
    background: "Ph.D. Cognitive Systems · ex-Frontier Research Lab",
    focus: "Agentic Systems & Alignment Controls",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&auto=format&fit=crop&q=80",
  },
];

interface LeadershipSectionProps {
  onMeetLeadership?: () => void;
}

export const LeadershipSection: React.FC<LeadershipSectionProps> = ({ onMeetLeadership }) => {
  return (
    <section id="leadership" className="relative py-28 sm:py-36 bg-[#F6F7F9]/80 backdrop-blur-[2px] border-t border-[rgba(15,23,42,0.06)] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 sm:mb-20 gap-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[rgba(15,23,42,0.08)] text-[#3155FF] text-xs font-mono font-semibold uppercase tracking-wider mb-3 shadow-2xs">
                <Award className="w-3.5 h-3.5" />
                <span>Executive Experience</span>
              </div>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-[750] text-[#101216] tracking-tight leading-[1.08]">
                Experience That Shapes the Future.
              </h2>
              <p className="mt-4 text-base sm:text-lg text-[#4B5563] leading-relaxed">
                Led by enterprise veterans and research pioneers who have steered mission-critical transformations for Fortune 500 enterprises and deeptech startups.
              </p>
            </div>

            {/* Stat & CTA */}
            <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-3.5 shrink-0">
              <div className="px-4 py-2.5 rounded-xl bg-white border border-[rgba(15,23,42,0.08)] shadow-2xs text-left lg:text-right">
                <div className="text-xl sm:text-2xl font-[750] font-mono text-[#101216]">
                  50+ Years
                </div>
                <div className="text-xs text-[#6B7280] font-mono">
                  Combined Leadership Experience
                </div>
              </div>

              <a
                href="#contact"
                onClick={(e) => {
                  if (onMeetLeadership) {
                    e.preventDefault();
                    onMeetLeadership();
                  }
                }}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#3155FF] hover:text-[#2344E0] transition-colors group pt-1"
              >
                <span>Meet Our Leadership</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* 3 Premium Profile Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
          {LEADERS.map((leader, idx) => (
            <ScrollReveal key={leader.name} delay={idx * 0.06}>
              <div className="group relative rounded-2xl p-6 sm:p-7 bg-white border border-[rgba(15,23,42,0.08)] shadow-[0_1px_3px_rgba(15,23,42,0.02)] hover:border-[rgba(49,85,255,0.3)] hover:shadow-[0_20px_40px_-12px_rgba(49,85,255,0.1)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full">
                <div>
                  {/* Photo + Badge */}
                  <div className="relative mb-5">
                    <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-2xl overflow-hidden border border-[rgba(15,23,42,0.08)] shadow-xs bg-slate-100">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={leader.photo}
                        alt={leader.name}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  <h3 className="text-xl font-[750] text-[#101216] tracking-tight group-hover:text-[#3155FF] transition-colors">
                    {leader.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#3155FF] mt-1 mb-2 font-mono">
                    {leader.role}
                  </p>
                  <p className="text-xs text-[#6B7280] leading-relaxed mb-4">
                    {leader.background}
                  </p>
                </div>

                <div className="pt-4 border-t border-[rgba(15,23,42,0.06)]">
                  <div className="text-[10px] uppercase font-mono text-[#9CA3AF]">Focus Area</div>
                  <div className="text-xs font-semibold text-[#17191D] mt-0.5 font-mono">
                    {leader.focus}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

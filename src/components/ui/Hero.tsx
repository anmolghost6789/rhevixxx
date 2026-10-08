"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, Sparkles, CheckCircle, Cpu, Database, Network, ShieldCheck, Activity } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

interface HeroProps {
  onExploreCapabilities: () => void;
  onContact: () => void;
}

const ROTATING_PHRASES = [
  { text: "Digital Transformation", accent: "from-[#101216] via-[#3155FF] to-[#1E3A8A]", badge: "AI Enterprise" },
  { text: "Frontier AI Systems", accent: "from-[#101216] via-[#4F46E5] to-[#3155FF]", badge: "Deep Engineering" },
  { text: "Autonomous Intelligence", accent: "from-[#101216] via-[#2563EB] to-[#06B6D4]", badge: "Agent Swarms" },
  { text: "Engineering Excellence", accent: "from-[#101216] via-[#3155FF] to-[#6366F1]", badge: "Enterprise Scale" },
];

export const Hero: React.FC<HeroProps> = ({
  onExploreCapabilities,
  onContact,
}) => {
  const cardRef = React.useRef<HTMLDivElement | null>(null);
  const rafRef = React.useRef<number | null>(null);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setIsFlipping(true);
      setTimeout(() => {
        setPhraseIndex((prev) => (prev + 1) % ROTATING_PHRASES.length);
        setIsFlipping(false);
      }, 350);
    }, 3800);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleHeroVisualMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth < 768) return;
    const card = cardRef.current;
    if (!card) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotX = (y / (rect.height / 2)) * -4;
    const rotY = (x / (rect.width / 2)) * 4;

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      if (card) {
        card.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(10px) translateY(-4px)`;
      }
    });
  };

  const handleHeroVisualMouseLeave = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    if (cardRef.current) {
      cardRef.current.style.transform = "rotateX(0deg) rotateY(0deg) translateZ(0px) translateY(0px)";
    }
  };

  return (
    <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 overflow-hidden bg-transparent">
      {/* Background Graphic Accents */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        {/* Soft Radial Ambient Aura */}
        <div className="absolute -top-20 left-1/4 w-[520px] h-[520px] rounded-full bg-gradient-to-tr from-[#3155FF]/10 to-[#06B6D4]/10 blur-[80px] opacity-70 pointer-events-none" />

        {/* Fine Technical Coordinate Accents */}
        <div className="absolute top-36 left-4 hidden 2xl:block opacity-45 font-mono text-[10px] text-[#9CA3AF] space-y-1">
          <div>+ LAT: 21.1458° N</div>
          <div>+ LON: 79.0882° E</div>
          <div>// SEC: 01_HERO_SURFACE</div>
        </div>

        {/* Subtle SVG Concentric Arc */}
        <svg className="absolute -top-10 -right-20 w-[420px] h-[420px] opacity-[0.25] pointer-events-none" viewBox="0 0 400 400" fill="none">
          <circle cx="200" cy="200" r="180" stroke="#3155FF" strokeWidth="0.8" strokeDasharray="6 8" />
          <circle cx="200" cy="200" r="130" stroke="#06B6D4" strokeWidth="0.8" strokeDasharray="3 6" />
          <circle cx="200" cy="200" r="80" stroke="#4F46E5" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Copy & CTAs */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            <ScrollReveal>
              {/* Subtle Trust Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[rgba(15,23,42,0.08)] shadow-xs mb-3 text-xs font-mono font-medium text-[#4B5563]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3155FF]" />
                <span>AI · Data · Engineering · Digital Modernization</span>
              </div>

              {/* Huge Headline with 3D Rotating Capability Effect */}
              <h1 className="text-4xl sm:text-6xl lg:text-[68px] font-[750] tracking-tight text-[#101216] leading-[1.08] select-none">
                <span className="inline-block hover:text-[#3155FF] transition-colors duration-300">
                  Empower Your
                </span>{" "}
                <br />
                <span
                  className="relative inline-flex items-center flex-wrap gap-3 cursor-pointer group/rotate py-1 mt-1"
                  style={{ perspective: "1000px" }}
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                  onClick={() => {
                    setIsFlipping(true);
                    setTimeout(() => {
                      setPhraseIndex((prev) => (prev + 1) % ROTATING_PHRASES.length);
                      setIsFlipping(false);
                    }, 250);
                  }}
                  title="Click to cycle capabilities"
                >
                  <span
                    className="inline-block transition-all duration-350"
                    style={{
                      transform: isFlipping
                        ? "rotateX(75deg) translateY(-26px) scale(0.96)"
                        : "rotateX(0deg) translateY(0px) scale(1)",
                      opacity: isFlipping ? 0 : 1,
                      filter: isFlipping ? "blur(3px)" : "blur(0px)",
                      transition: "transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.35s ease, filter 0.25s ease",
                    }}
                  >
                    <span className={`bg-gradient-to-r ${ROTATING_PHRASES[phraseIndex].accent} bg-clip-text text-transparent`}>
                      {ROTATING_PHRASES[phraseIndex].text}
                    </span>
                  </span>

                  {/* Dynamic 3D Tag Badge */}
                  <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md border border-[rgba(15,23,42,0.08)] shadow-2xs text-[10px] font-mono font-semibold text-[#3155FF] group-hover/rotate:border-[#3155FF]/40 transition-all duration-300">
                    <Sparkles className="w-2.5 h-2.5 text-[#3155FF]" />
                    <span>{ROTATING_PHRASES[phraseIndex].badge}</span>
                  </span>
                </span>
              </h1>

              {/* Capability Progress Dots */}
              <div className="pt-1 flex items-center justify-center lg:justify-start gap-2 select-none">
                {ROTATING_PHRASES.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setIsFlipping(true);
                      setTimeout(() => {
                        setPhraseIndex(idx);
                        setIsFlipping(false);
                      }, 200);
                    }}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      phraseIndex === idx
                        ? "w-7 bg-[#3155FF] shadow-[0_0_8px_rgba(49,85,255,0.4)]"
                        : "w-2 bg-[#D1D5DB] hover:bg-[#9CA3AF]"
                    }`}
                    aria-label={`Switch to ${item.text}`}
                  />
                ))}
              </div>

              {/* Short Clear Enterprise Description */}
              <p className="mt-5 text-base sm:text-lg text-[#4B5563] max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Engineering intelligent products, modern data platforms, and autonomous AI systems built for measurable enterprise advantage.
              </p>

              {/* Clean Actions */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
                <button
                  onClick={onExploreCapabilities}
                  className="w-full sm:w-auto px-7 py-3.5 bg-[#101216] hover:bg-[#3155FF] text-white font-[550] text-sm rounded-xl shadow-xs transition-all duration-200 flex items-center justify-center gap-2 hover:-translate-y-0.5 group"
                >
                  <span>Explore Capabilities</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={onContact}
                  className="w-full sm:w-auto px-7 py-3.5 bg-white hover:bg-[#EEF1F4] text-[#17191D] font-[550] text-sm rounded-xl border border-[rgba(15,23,42,0.12)] hover:border-[rgba(15,23,42,0.25)] shadow-xs transition-all duration-200 flex items-center justify-center gap-2 hover:-translate-y-0.5"
                >
                  <span>Start a Conversation</span>
                </button>
              </div>

              {/* Trust statement */}
              <div className="pt-4 flex items-center justify-center lg:justify-start gap-6 text-xs text-[#6B7280]">
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Enterprise SLA Guarantees</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Production-Grade Architecture</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: RHEVIX Enterprise Intelligence System Monitor Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <ScrollReveal delay={0.15}>
              <div
                className="relative w-full max-w-[390px] select-none"
                style={{ perspective: "1000px" }}
                onMouseMove={handleHeroVisualMouseMove}
                onMouseLeave={handleHeroVisualMouseLeave}
              >
                {/* Subtle soft backdrop wash */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-[#3155FF]/10 to-indigo-100/40 rounded-3xl blur-2xl pointer-events-none" />

                {/* Primary Intelligence Core Visual Card */}
                <div
                  ref={cardRef}
                  className="relative bg-white rounded-2xl p-6 sm:p-7 border border-[rgba(15,23,42,0.08)] shadow-[0_12px_36px_-12px_rgba(15,23,42,0.08)] transition-all duration-300 hover:shadow-[0_20px_45px_-12px_rgba(49,85,255,0.14)] hover:border-[rgba(49,85,255,0.3)] will-change-transform"
                  style={{
                    transformStyle: "preserve-3d",
                    transform: "rotateX(0deg) rotateY(0deg) translateZ(0px) translateY(0px)",
                    transition: "transform 0.15s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease",
                  }}
                >
                  {/* Top Status */}
                  <div className="flex items-center justify-between pb-4 border-b border-[rgba(15,23,42,0.06)] text-xs">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-medium border border-emerald-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Runtime Operational
                    </span>
                    <span className="font-mono text-[#6B7280] text-[11px]">SLA 99.99%</span>
                  </div>

                  {/* Core Architecture Overview */}
                  <div className="py-4 space-y-3.5">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-base font-[750] text-[#101216]">
                          Enterprise Intelligence Mesh
                        </h3>
                        <p className="text-xs text-[#4B5563]">
                          Multi-Region Production Deployment
                        </p>
                      </div>
                      <div className="w-9 h-9 rounded-xl bg-[#3155FF]/10 text-[#3155FF] flex items-center justify-center shrink-0">
                        <Activity className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Telemetry Metrics Grid */}
                    <div className="grid grid-cols-2 gap-2 pt-1">
                      <div className="p-2.5 rounded-xl bg-[#F6F7F9] border border-[rgba(15,23,42,0.06)]">
                        <div className="text-[10px] font-mono text-[#6B7280]">AI PIPELINES</div>
                        <div className="text-sm font-[750] text-[#101216] font-mono mt-0.5">&lt; 85ms Latency</div>
                      </div>
                      <div className="p-2.5 rounded-xl bg-[#F6F7F9] border border-[rgba(15,23,42,0.06)]">
                        <div className="text-[10px] font-mono text-[#6B7280]">DATA INGESTION</div>
                        <div className="text-sm font-[750] text-[#101216] font-mono mt-0.5">4.8 GB/s Stream</div>
                      </div>
                    </div>

                    {/* Integrated Modules */}
                    <div className="p-3 rounded-xl bg-[#F6F7F9] border border-[rgba(15,23,42,0.06)] space-y-2 text-xs">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-mono text-[#4B5563] flex items-center gap-1.5">
                          <Cpu className="w-3 h-3 text-[#3155FF]" />
                          Agentic Swarm Orchestration
                        </span>
                        <span className="text-[10px] font-mono text-emerald-600 font-semibold">Active</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-mono text-[#4B5563] flex items-center gap-1.5">
                          <Database className="w-3 h-3 text-[#06B6D4]" />
                          Modern Lakehouse Fabric
                        </span>
                        <span className="text-[10px] font-mono text-emerald-600 font-semibold">Synced</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-mono text-[#4B5563] flex items-center gap-1.5">
                          <ShieldCheck className="w-3 h-3 text-[#4F46E5]" />
                          Deterministic Guardrails
                        </span>
                        <span className="text-[10px] font-mono text-emerald-600 font-semibold">Enforced</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Secondary Infrastructure Pill */}
                <div className="mt-3.5 bg-white/95 backdrop-blur-sm rounded-xl p-3.5 border border-[rgba(15,23,42,0.08)] shadow-md flex items-center justify-between transition-transform duration-300 hover:-translate-y-0.5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#3155FF]/10 text-[#3155FF] flex items-center justify-center shrink-0">
                      <Network className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-[650] text-[#101216]">Distributed Cloud Architecture</div>
                      <div className="text-[11px] text-[#6B7280]">Azure · Snowflake · Databricks</div>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-md bg-[#EEF1F4] text-[#3155FF] font-mono text-[10px] font-semibold">
                    Multi-Region
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

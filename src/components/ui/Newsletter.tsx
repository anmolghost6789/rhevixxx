"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, Bell } from "lucide-react";
import confetti from "canvas-confetti";
import { ScrollReveal } from "./ScrollReveal";

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState("");
  const [specialty, setSpecialty] = useState("AI Alignment & Post-Training");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubscribed(true);
    try {
      confetti({
        particleCount: 40,
        spread: 50,
        origin: { y: 0.8 },
        colors: ["#3155FF", "#4F46E5"],
      });
    } catch {}
  };

  return (
    <section className="relative py-24 sm:py-28 bg-[#F6F7F9] border-b border-[rgba(15,23,42,0.06)] overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[rgba(15,23,42,0.08)] shadow-xs mb-5 text-xs font-mono font-medium text-[#4B5563]">
            <Bell className="w-3.5 h-3.5 text-[#3155FF]" />
            <span>Intelligent Opportunity Dispatch</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-[700] text-[#101216] tracking-tight leading-snug">
            Get opportunities built for your expertise.
          </h2>

          <p className="mt-3 text-sm sm:text-base text-[#4B5563] max-w-lg mx-auto">
            Receive confidential dispatches whenever a verified lab opens contracts matching your exact technical profile.
          </p>

          {isSubscribed ? (
            <div className="mt-8 p-6 rounded-2xl bg-white border border-emerald-200 shadow-sm flex items-center justify-center gap-3 text-emerald-800 text-sm max-w-md mx-auto">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <span className="font-medium">
                Subscribed! We will notify <span className="font-semibold text-[#101216]">{email}</span> of new contracts in {specialty}.
              </span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 max-w-xl mx-auto space-y-3">
              <div className="flex flex-col sm:flex-row gap-2.5">
                <input
                  type="email"
                  required
                  placeholder="Enter your research / work email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-xl bg-white border border-[rgba(15,23,42,0.12)] text-sm text-[#17191D] focus:outline-none focus:ring-2 focus:ring-[#3155FF]/20 focus:border-[#3155FF] shadow-xs"
                />
                <button
                  type="submit"
                  className="py-3 px-6 rounded-xl bg-[#3155FF] hover:bg-[#2344E0] text-white font-[550] text-sm transition-all shadow-xs hover:-translate-y-0.5 flex items-center justify-center gap-2 shrink-0"
                >
                  <span>Notify Me</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-xs text-[#6B7280] font-mono">
                <span>Domain focus:</span>
                <select
                  value={specialty}
                  onChange={(e) => setSpecialty(e.target.value)}
                  className="bg-transparent border-b border-[rgba(15,23,42,0.14)] text-[#17191D] py-0.5 focus:outline-none"
                >
                  <option>AI Alignment & Post-Training</option>
                  <option>Formal Proofs & Mathematics</option>
                  <option>3D Gaussian & Vision</option>
                  <option>Slurm & GPU Systems</option>
                  <option>Synthetic Data Curation</option>
                </select>
              </div>
            </form>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
};

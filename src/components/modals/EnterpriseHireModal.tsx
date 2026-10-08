"use client";

import React, { useState } from "react";
import { X, CheckCircle, Building2, Users, Clock, ShieldCheck, ArrowRight } from "lucide-react";
import confetti from "canvas-confetti";

interface EnterpriseHireModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EnterpriseHireModal: React.FC<EnterpriseHireModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    workEmail: "",
    talentNeed: "Frontier Model Alignment & RLHF",
    headcount: "2-5 Specialists",
    urgency: "Immediate (Within 48h)",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ["#3155FF", "#4F46E5", "#06B6D4"],
      });
    } catch {}
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div
        className="fixed inset-0 bg-[#101216]/40 backdrop-blur-sm transition-opacity"
        onClick={handleReset}
      />

      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-[rgba(15,23,42,0.1)] overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200">
        <div className="px-6 py-5 border-b border-[rgba(15,23,42,0.06)] flex items-center justify-between bg-[#F6F7F9]">
          <div className="flex items-center gap-2">
            <Building2 className="w-4 h-4 text-[#3155FF]" />
            <span className="text-xs font-mono font-semibold tracking-wider text-[#4B5563] uppercase">
              RHEVIX Enterprise · Talent Solutions
            </span>
          </div>
          <button
            onClick={handleReset}
            className="p-1.5 rounded-lg text-[#6B7280] hover:text-[#101216] hover:bg-[#EEF1F4] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
              <CheckCircle className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-[700] text-[#101216]">Talent Brief Received</h3>
              <p className="text-[#4B5563] text-sm max-w-sm mx-auto leading-relaxed">
                Thank you, <span className="font-semibold text-[#101216]">{formData.companyName || "Partner"}</span>. 
                Our Enterprise Director of AI Sourcing will contact you within 2 business hours with verified profiles.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#F6F7F9] border border-[rgba(15,23,42,0.08)] text-left text-xs space-y-2">
              <div className="flex justify-between text-[#4B5563]">
                <span className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5 text-[#6B7280]" /> Need:</span>
                <span className="font-semibold text-[#101216]">{formData.talentNeed}</span>
              </div>
              <div className="flex justify-between text-[#4B5563]">
                <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-[#6B7280]" /> Timeline:</span>
                <span className="font-semibold text-[#101216]">{formData.urgency}</span>
              </div>
              <div className="flex justify-between text-[#4B5563]">
                <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-[#6B7280]" /> Guarantee:</span>
                <span className="font-semibold text-emerald-600 font-mono">14-Day Risk-Free Trial</span>
              </div>
            </div>
            <button
              onClick={handleReset}
              className="w-full py-3 px-4 bg-[#101216] hover:bg-[#17191D] text-white font-[550] text-sm rounded-xl transition-colors shadow-xs"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
            <div>
              <h4 className="text-xl font-[700] text-[#101216]">Deploy frontier AI specialists</h4>
              <p className="text-xs text-[#4B5563] mt-1">
                Access pre-vetted AI researchers, PhDs, and engineers ready to integrate into your stack in under 48 hours.
              </p>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-[#17191D]">Company Name</label>
              <input
                type="text"
                required
                placeholder="e.g. Synthetix Labs, Inc."
                value={formData.companyName}
                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-[rgba(15,23,42,0.12)] text-sm text-[#17191D] focus:outline-none focus:ring-2 focus:ring-[#3155FF]/20 focus:border-[#3155FF]"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-[#17191D]">Enterprise Work Email</label>
              <input
                type="email"
                required
                placeholder="lead@company.com"
                value={formData.workEmail}
                onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-[rgba(15,23,42,0.12)] text-sm text-[#17191D] focus:outline-none focus:ring-2 focus:ring-[#3155FF]/20 focus:border-[#3155FF]"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-[#17191D]">Required Technical Capability</label>
              <select
                value={formData.talentNeed}
                onChange={(e) => setFormData({ ...formData, talentNeed: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-[rgba(15,23,42,0.12)] text-sm text-[#17191D] focus:outline-none focus:ring-2 focus:ring-[#3155FF]/20 focus:border-[#3155FF] bg-white"
              >
                <option>Frontier Model Alignment & RLHF</option>
                <option>Multimodal & 3D Spatial Perception</option>
                <option>GPU Cluster Orchestration & Slurm</option>
                <option>Synthetic Data & Pre-training Curation</option>
                <option>Autonomous Swarm & Agent Architecture</option>
                <option>Custom Enterprise AI Model Fine-Tuning</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#17191D]">Team Scale</label>
                <select
                  value={formData.headcount}
                  onChange={(e) => setFormData({ ...formData, headcount: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-[rgba(15,23,42,0.12)] text-xs text-[#17191D] focus:outline-none focus:ring-2 focus:ring-[#3155FF]/20 focus:border-[#3155FF] bg-white"
                >
                  <option>1 Specialist</option>
                  <option>2-5 Specialists</option>
                  <option>6-15 Specialists</option>
                  <option>Entire Pod (15+)</option>
                </select>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#17191D]">Deployment Speed</label>
                <select
                  value={formData.urgency}
                  onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-[rgba(15,23,42,0.12)] text-xs text-[#17191D] focus:outline-none focus:ring-2 focus:ring-[#3155FF]/20 focus:border-[#3155FF] bg-white"
                >
                  <option>Immediate (Within 48h)</option>
                  <option>Within 2 Weeks</option>
                  <option>Next Quarter</option>
                </select>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 px-4 bg-[#3155FF] hover:bg-[#2344E0] text-white font-[550] text-sm rounded-xl flex items-center justify-center gap-2 transition-all shadow-xs hover:-translate-y-0.5"
              >
                Request Vetted Talent Matches <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

"use client";

import React, { useState } from "react";
import { OpportunityItem } from "@/data/platformData";
import { X, CheckCircle, ArrowRight, Building2, MapPin, ShieldCheck, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";

interface OpportunityModalProps {
  opportunity: OpportunityItem | null;
  onClose: () => void;
}

export const OpportunityModal: React.FC<OpportunityModalProps> = ({
  opportunity,
  onClose,
}) => {
  const [applied, setApplied] = useState(false);

  if (!opportunity) return null;

  const handleApply = () => {
    setApplied(true);
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 },
        colors: ["#3155FF", "#4F46E5", "#10B981"],
      });
    } catch {}
  };

  const handleClose = () => {
    setApplied(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div
        className="fixed inset-0 bg-[#101216]/40 backdrop-blur-sm transition-opacity"
        onClick={handleClose}
      />

      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-[rgba(15,23,42,0.1)] overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="px-6 py-4 border-b border-[rgba(15,23,42,0.06)] flex items-center justify-between bg-[#F6F7F9]">
          <span className="text-xs font-mono font-semibold tracking-wider text-[#4B5563] uppercase">
            RHEVIX Contract Brief
          </span>
          <button
            onClick={handleClose}
            className="p-1.5 rounded-lg text-[#6B7280] hover:text-[#101216] hover:bg-[#EEF1F4]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-7 space-y-5">
          <div className="space-y-1">
            <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-semibold bg-[#EEF1F4] text-[#3155FF]">
              {opportunity.tag}
            </span>
            <h3 className="text-xl font-[750] text-[#101216] pt-1 leading-snug">
              {opportunity.role}
            </h3>
            <div className="flex items-center gap-3 text-xs text-[#6B7280] pt-0.5">
              <span className="flex items-center gap-1 font-medium text-[#4B5563]">
                <Building2 className="w-3.5 h-3.5 text-[#9CA3AF]" />
                {opportunity.company}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 text-[#4B5563]">
                <MapPin className="w-3.5 h-3.5 text-[#9CA3AF]" />
                {opportunity.remote}
              </span>
            </div>
          </div>

          {/* Rate card */}
          <div className="p-4 rounded-xl bg-[#F6F7F9] border border-[rgba(15,23,42,0.06)] flex items-center justify-between">
            <div>
              <span className="text-[10px] font-mono uppercase text-[#6B7280]">Compensation</span>
              <div className="text-2xl font-[750] font-mono text-[#101216]">
                {opportunity.compensation}{" "}
                <span className="text-xs font-normal text-[#6B7280]">{opportunity.rateType}</span>
              </div>
            </div>
            <div className="text-right text-xs">
              <span className="text-[#6B7280]">Settlement</span>
              <div className="font-semibold text-[#101216]">Weekly Escrow</div>
            </div>
          </div>

          {/* Required Skills */}
          <div className="space-y-2">
            <h4 className="text-xs uppercase font-mono tracking-wider font-semibold text-[#6B7280]">
              Required Stack & Calibration
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {opportunity.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#EEF1F4] text-[#17191D] border border-[rgba(15,23,42,0.06)]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="p-3 rounded-xl bg-[#EEF1F4]/70 border border-[rgba(15,23,42,0.06)] flex items-center gap-2.5 text-xs text-[#4B5563]">
            <ShieldCheck className="w-4 h-4 text-[#3155FF] shrink-0" />
            <span>Guaranteed IP protection, smart contract escrow, and zero placement fees.</span>
          </div>

          {/* Action */}
          <div className="pt-2">
            {applied ? (
              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-medium flex items-center gap-2 justify-center">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                Expression of interest sent! Client will review within 24 hours.
              </div>
            ) : (
              <button
                onClick={handleApply}
                className="w-full py-3 px-4 bg-[#101216] hover:bg-[#3155FF] text-white font-[550] text-xs rounded-xl transition-all duration-200 flex items-center justify-center gap-2 hover:-translate-y-0.5"
              >
                <span>Apply for this Opportunity</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

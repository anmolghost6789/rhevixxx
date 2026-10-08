"use client";

import React, { useState } from "react";
import { Opportunity } from "@/data/platformData";
import { X, CheckCircle, ShieldCheck, MapPin, Sparkles, Building, Flame } from "lucide-react";
import confetti from "canvas-confetti";

interface OpportunityDetailModalProps {
  opportunity: Opportunity | null;
  onClose: () => void;
  onOpenApplyModal?: () => void;
}

export const OpportunityDetailModal: React.FC<OpportunityDetailModalProps> = ({
  opportunity,
  onClose,
  onOpenApplyModal,
}) => {
  const [applied, setApplied] = useState(false);

  if (!opportunity) return null;

  const handleApply = () => {
    setApplied(true);
    try {
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.7 },
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

      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-[rgba(15,23,42,0.1)] overflow-hidden z-10 max-h-[90vh] flex flex-col animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="p-6 border-b border-[rgba(15,23,42,0.06)] bg-[#F6F7F9] flex items-start justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#EEF1F4] text-[#3155FF] border border-[rgba(15,23,42,0.08)]">
                {opportunity.category}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-white text-[#4B5563] border border-[rgba(15,23,42,0.08)]">
                {opportunity.clientType}
              </span>
              {opportunity.isUrgent && (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-50 text-amber-800 border border-amber-200">
                  <Flame className="w-3 h-3 text-amber-600" /> High Priority
                </span>
              )}
            </div>
            <h3 className="text-xl sm:text-2xl font-[700] text-[#101216] leading-snug">
              {opportunity.title}
            </h3>
            <div className="flex items-center gap-4 text-xs text-[#6B7280]">
              <span className="flex items-center gap-1">
                <Building className="w-3.5 h-3.5 text-[#9CA3AF]" /> {opportunity.clientName}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#9CA3AF]" /> {opportunity.location}
              </span>
              <span className="font-mono text-emerald-600 font-semibold">
                {opportunity.matchScore}% Match
              </span>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="p-1.5 rounded-lg text-[#6B7280] hover:text-[#101216] hover:bg-[#EEF1F4] transition-colors shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-[#17191D]">
          {/* Compensation Card */}
          <div className="p-4 rounded-xl bg-[#EEF1F4]/70 border border-[rgba(15,23,42,0.08)] flex items-center justify-between">
            <div>
              <div className="text-xs text-[#6B7280] uppercase tracking-wider font-semibold">Compensation</div>
              <div className="text-2xl font-[750] text-[#101216] font-mono">
                {opportunity.compensation} <span className="text-sm font-normal text-[#6B7280]">{opportunity.rateType}</span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs text-[#6B7280]">Payment Cadence</div>
              <div className="text-sm font-semibold text-[#101216]">Direct Weekly Escrow</div>
            </div>
          </div>

          {/* Overview */}
          <div className="space-y-2">
            <h4 className="text-xs uppercase font-bold tracking-wider text-[#6B7280]">Overview</h4>
            <p className="leading-relaxed text-[#4B5563]">
              {opportunity.description}
            </p>
          </div>

          {/* Responsibilities */}
          <div className="space-y-2.5">
            <h4 className="text-xs uppercase font-bold tracking-wider text-[#6B7280]">Core Responsibilities</h4>
            <ul className="space-y-2">
              {opportunity.responsibilities.map((resp, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#4B5563]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3155FF] mt-2 shrink-0" />
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Requirements */}
          <div className="space-y-2.5">
            <h4 className="text-xs uppercase font-bold tracking-wider text-[#6B7280]">Prerequisites & Calibration</h4>
            <ul className="space-y-2">
              {opportunity.requirements.map((req, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#4B5563]">
                  <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Skills Tags */}
          <div className="space-y-2">
            <h4 className="text-xs uppercase font-bold tracking-wider text-[#6B7280]">Validated Competencies</h4>
            <div className="flex flex-wrap gap-1.5">
              {opportunity.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-md bg-[#F6F7F9] text-[#17191D] text-xs font-mono font-medium border border-[rgba(15,23,42,0.08)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Guarantee banner */}
          <div className="p-3.5 rounded-xl bg-[#F6F7F9] border border-[rgba(15,23,42,0.08)] flex items-center gap-3 text-xs text-[#4B5563]">
            <ShieldCheck className="w-5 h-5 text-[#3155FF] shrink-0" />
            <span>Autonomous IP assignment, guaranteed weekly payments via smart escrow, and non-disclosure protections.</span>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-6 border-t border-[rgba(15,23,42,0.06)] bg-[#F6F7F9] flex items-center justify-between gap-4">
          <div className="text-xs text-[#6B7280] hidden sm:block">
            {opportunity.applicantsCount} frontier researchers applied
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <button
              onClick={handleClose}
              className="py-2.5 px-4 text-xs font-semibold text-[#4B5563] hover:text-[#101216] transition-colors"
            >
              Cancel
            </button>
            {applied ? (
              <div className="flex items-center gap-2 py-2.5 px-5 bg-emerald-600 text-white text-xs font-semibold rounded-xl">
                <CheckCircle className="w-4 h-4" /> Application Fast-Tracked!
              </div>
            ) : (
              <button
                onClick={handleApply}
                className="py-2.5 px-6 bg-[#3155FF] hover:bg-[#2344E0] text-white text-xs sm:text-sm font-[550] rounded-xl flex items-center gap-2 transition-all shadow-xs hover:-translate-y-0.5"
              >
                Apply for this Opportunity <Sparkles className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

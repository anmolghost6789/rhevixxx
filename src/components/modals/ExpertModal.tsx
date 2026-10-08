"use client";

import React, { useState } from "react";
import { Expert } from "@/data/platformData";
import { X, Star, CheckCircle, ArrowRight, BookOpen, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";

interface ExpertModalProps {
  expert: Expert | null;
  onClose: () => void;
}

export const ExpertModal: React.FC<ExpertModalProps> = ({ expert, onClose }) => {
  const [requested, setRequested] = useState(false);

  if (!expert) return null;

  const handleRequest = () => {
    setRequested(true);
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
    setRequested(false);
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
            RHEVIX Expert Profile
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
          <div className="flex items-center gap-4">
            <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0 border border-[rgba(15,23,42,0.1)] bg-slate-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={expert.photo}
                alt={expert.name}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-[750] text-[#101216]">{expert.name}</h3>
                <span className="flex items-center gap-0.5 text-xs font-semibold text-[#101216]">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  {expert.rating}
                </span>
              </div>
              <p className="text-xs font-medium text-[#4B5563] mt-0.5">{expert.role}</p>
              <p className="text-[11px] text-[#6B7280] font-mono">{expert.affiliation}</p>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-1.5">
            <h4 className="text-xs uppercase font-mono tracking-wider font-semibold text-[#6B7280]">
              Domain Focus
            </h4>
            <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
              {expert.shortDescription}
            </p>
          </div>

          {/* Featured Masterclass pill */}
          <div className="p-3.5 rounded-xl bg-[#F6F7F9] border border-[rgba(15,23,42,0.06)] flex items-center justify-between text-xs">
            <div className="space-y-0.5">
              <span className="text-[10px] uppercase font-mono text-[#6B7280]">Active Masterclass</span>
              <div className="font-semibold text-[#101216]">{expert.featuredTopic}</div>
            </div>
            <span className="px-2.5 py-1 rounded-md bg-white border border-[rgba(15,23,42,0.08)] font-mono text-[11px] text-[#3155FF]">
              Enrolling
            </span>
          </div>

          {/* Actions */}
          <div className="pt-2">
            {requested ? (
              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-medium flex items-center gap-2 justify-center">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                Mentorship session requested! Check your inbox for confirmation.
              </div>
            ) : (
              <button
                onClick={handleRequest}
                className="w-full py-3 px-4 bg-[#101216] hover:bg-[#3155FF] text-white font-[550] text-xs rounded-xl transition-all duration-200 flex items-center justify-center gap-2 hover:-translate-y-0.5"
              >
                <span>Request Mentorship Session</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

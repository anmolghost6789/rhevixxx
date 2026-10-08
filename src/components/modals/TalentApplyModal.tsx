"use client";

import React, { useState } from "react";
import { X, CheckCircle, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";

interface TalentApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRole?: string;
}

export const TalentApplyModal: React.FC<TalentApplyModalProps> = ({
  isOpen,
  onClose,
  initialRole,
}) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    primaryTrack: initialRole || "AI Engineering & Reasoning",
    yearsExp: "5-8 years",
    links: "",
    rate: "$250",
    availability: "10-20 hrs / week",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#3155FF", "#4F46E5", "#06B6D4", "#10B981"],
        });
      } catch {}
    }, 600);
  };

  const resetAndClose = () => {
    setStep(1);
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#101216]/40 backdrop-blur-sm transition-opacity"
        onClick={resetAndClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-[rgba(15,23,42,0.1)] overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="px-6 py-5 border-b border-[rgba(15,23,42,0.06)] flex items-center justify-between bg-[#F6F7F9]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#3155FF] animate-pulse" />
            <span className="text-xs font-mono font-semibold tracking-wider text-[#4B5563] uppercase">
              RHEVIX Network · Calibration
            </span>
          </div>
          <button
            onClick={resetAndClose}
            className="p-1.5 rounded-lg text-[#6B7280] hover:text-[#101216] hover:bg-[#EEF1F4] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSuccess ? (
          <div className="p-8 text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
              <CheckCircle className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-[700] text-[#101216]">Application Received</h3>
              <p className="text-[#4B5563] text-sm max-w-md mx-auto leading-relaxed">
                Welcome to RHEVIX, <span className="font-semibold text-[#101216]">{formData.name || "Colleague"}</span>. 
                Our neural calibration engine has identified <span className="text-[#3155FF] font-semibold">14 matching opportunities</span> in {formData.primaryTrack}.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#F6F7F9] border border-[rgba(15,23,42,0.08)] text-left text-xs space-y-1.5">
              <div className="flex justify-between text-[#4B5563]">
                <span>Estimated Match Response:</span>
                <span className="font-semibold text-[#101216]">Under 4 hours</span>
              </div>
              <div className="flex justify-between text-[#4B5563]">
                <span>Calibration Track:</span>
                <span className="font-semibold text-[#101216]">{formData.primaryTrack}</span>
              </div>
              <div className="flex justify-between text-[#4B5563]">
                <span>Target Rate:</span>
                <span className="font-semibold text-emerald-600 font-mono">{formData.rate} / hr</span>
              </div>
            </div>
            <button
              onClick={resetAndClose}
              className="w-full py-3 px-4 bg-[#101216] hover:bg-[#17191D] text-white font-[550] text-sm rounded-xl transition-colors shadow-xs"
            >
              Go to Candidate Dashboard
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
            {/* Step Indicators */}
            <div className="flex items-center justify-between text-xs font-medium text-[#6B7280] pb-2 border-b border-[rgba(15,23,42,0.06)]">
              <div className="flex items-center gap-2">
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] ${step >= 1 ? "bg-[#3155FF] text-white font-bold" : "bg-slate-200"}`}>1</span>
                <span className={step === 1 ? "text-[#101216] font-semibold" : ""}>Expertise</span>
              </div>
              <div className="w-8 h-px bg-slate-200" />
              <div className="flex items-center gap-2">
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] ${step >= 2 ? "bg-[#3155FF] text-white font-bold" : "bg-slate-200"}`}>2</span>
                <span className={step === 2 ? "text-[#101216] font-semibold" : ""}>Credentials</span>
              </div>
              <div className="w-8 h-px bg-slate-200" />
              <div className="flex items-center gap-2">
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] ${step >= 3 ? "bg-[#3155FF] text-white font-bold" : "bg-slate-200"}`}>3</span>
                <span className={step === 3 ? "text-[#101216] font-semibold" : ""}>Terms</span>
              </div>
            </div>

            {/* Step 1 */}
            {step === 1 && (
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-[700] text-[#101216]">What is your frontier domain?</h4>
                  <p className="text-xs text-[#4B5563] mt-1">Select the discipline that best reflects your deepest technical accomplishments.</p>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-[#17191D]">Primary Specialization</label>
                  <select
                    value={formData.primaryTrack}
                    onChange={(e) => setFormData({ ...formData, primaryTrack: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[rgba(15,23,42,0.12)] text-sm text-[#17191D] focus:outline-none focus:ring-2 focus:ring-[#3155FF]/20 focus:border-[#3155FF] bg-white"
                  >
                    <option>AI Engineering & Reasoning</option>
                    <option>Post-Training Alignment & RLHF</option>
                    <option>Multimodal Perception & 3D Vision</option>
                    <option>Slurm & Large GPU Cluster Infra</option>
                    <option>Synthetic Data Curation & Pre-training</option>
                    <option>Formal Verification & Lean 4</option>
                    <option>Agentic Workflows & Multi-Agent Systems</option>
                    <option>AI Product Architecture & Design</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-[#17191D]">Years of Experience in Frontier Systems</label>
                  <div className="grid grid-cols-3 gap-2">
                    {["2-4 years", "5-8 years", "8+ years"].map((exp) => (
                      <button
                        type="button"
                        key={exp}
                        onClick={() => setFormData({ ...formData, yearsExp: exp })}
                        className={`py-2 px-3 text-xs rounded-xl font-medium border text-center transition-all ${
                          formData.yearsExp === exp
                            ? "bg-[#EEF1F4] border-[#3155FF] text-[#3155FF] font-semibold shadow-xs"
                            : "border-[rgba(15,23,42,0.1)] text-[#4B5563] hover:bg-[#F6F7F9]"
                        }`}
                      >
                        {exp}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    type="button"
                    onClick={handleNext}
                    className="py-2.5 px-5 bg-[#3155FF] hover:bg-[#2344E0] text-white text-sm font-[550] rounded-xl flex items-center gap-2 transition-all shadow-xs hover:-translate-y-0.5"
                  >
                    Continue <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-[700] text-[#101216]">Your profile & proof of work</h4>
                  <p className="text-xs text-[#4B5563] mt-1">We verify genuine code, papers, and repository contributions.</p>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-[#17191D]">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dr. Alex Mercer"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[rgba(15,23,42,0.12)] text-sm text-[#17191D] focus:outline-none focus:ring-2 focus:ring-[#3155FF]/20 focus:border-[#3155FF]"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-[#17191D]">Work Email</label>
                  <input
                    type="email"
                    required
                    placeholder="alex@domain.edu or alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[rgba(15,23,42,0.12)] text-sm text-[#17191D] focus:outline-none focus:ring-2 focus:ring-[#3155FF]/20 focus:border-[#3155FF]"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-[#17191D]">GitHub / Google Scholar / LinkedIn</label>
                  <input
                    type="url"
                    placeholder="https://github.com/your-handle or https://scholar.google.com"
                    value={formData.links}
                    onChange={(e) => setFormData({ ...formData, links: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[rgba(15,23,42,0.12)] text-sm text-[#17191D] focus:outline-none focus:ring-2 focus:ring-[#3155FF]/20 focus:border-[#3155FF]"
                  />
                </div>

                <div className="pt-2 flex justify-between">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="py-2.5 px-4 text-xs font-medium text-[#4B5563] hover:text-[#101216]"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="py-2.5 px-5 bg-[#3155FF] hover:bg-[#2344E0] text-white text-sm font-[550] rounded-xl flex items-center gap-2 transition-all shadow-xs hover:-translate-y-0.5"
                  >
                    Continue <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3 */}
            {step === 3 && (
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-[700] text-[#101216]">Your engagement preferences</h4>
                  <p className="text-xs text-[#4B5563] mt-1">Set your desired compensation and capacity.</p>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-[#17191D]">Target Hourly Rate (USD)</label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#6B7280] font-mono text-sm">$</span>
                    <input
                      type="number"
                      defaultValue={250}
                      min={100}
                      max={1000}
                      onChange={(e) => setFormData({ ...formData, rate: `$${e.target.value}` })}
                      className="w-full pl-8 pr-14 py-2.5 rounded-xl border border-[rgba(15,23,42,0.12)] text-sm font-mono text-[#17191D] focus:outline-none focus:ring-2 focus:ring-[#3155FF]/20 focus:border-[#3155FF]"
                    />
                    <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#6B7280] text-xs">/ hr</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-[#17191D]">Weekly Availability</label>
                  <select
                    value={formData.availability}
                    onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[rgba(15,23,42,0.12)] text-sm text-[#17191D] focus:outline-none focus:ring-2 focus:ring-[#3155FF]/20 focus:border-[#3155FF] bg-white"
                  >
                    <option>5-10 hrs / week (Advisory)</option>
                    <option>10-20 hrs / week (Part-Time)</option>
                    <option>20-40 hrs / week (Substantial)</option>
                    <option>Full-Time Contract</option>
                  </select>
                </div>

                <div className="p-3.5 rounded-xl bg-[#EEF1F4]/70 border border-[rgba(15,23,42,0.08)] flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#3155FF] shrink-0 mt-0.5" />
                  <div className="text-xs text-[#4B5563] leading-relaxed">
                    <span className="font-semibold text-[#101216]">Guaranteed Privacy:</span> Your current employer will never see your profile. RHEVIX enforces zero-leak anonymity until mutual match acceptance.
                  </div>
                </div>

                <div className="pt-2 flex justify-between">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="py-2.5 px-4 text-xs font-medium text-[#4B5563] hover:text-[#101216]"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="py-2.5 px-6 bg-[#3155FF] hover:bg-[#2344E0] text-white text-sm font-[550] rounded-xl flex items-center gap-2 transition-all shadow-xs hover:-translate-y-0.5 disabled:opacity-50"
                  >
                    {isSubmitting ? "Matching Network..." : "Submit Application"}
                    <Sparkles className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </form>
        )}
      </div>
    </div>
  );
};

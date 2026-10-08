"use client";

import React, { useState } from "react";
import { X, CheckCircle, ArrowRight, Sparkles, ShieldCheck } from "lucide-react";
import confetti from "canvas-confetti";
import { Logo } from "../ui/Logo";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultMode?: "login" | "join";
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  defaultMode = "join",
}) => {
  const [mode, setMode] = useState<"login" | "join">(defaultMode);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Sync mode if defaultMode changes on open
  React.useEffect(() => {
    setMode(defaultMode);
    setSubmitted(false);
  }, [defaultMode, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
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
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#101216]/40 backdrop-blur-sm transition-opacity"
        onClick={handleClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-[rgba(15,23,42,0.1)] overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="px-6 py-5 border-b border-[rgba(15,23,42,0.06)] flex items-center justify-between bg-[#F6F7F9]">
          <Logo size="sm" />
          <button
            onClick={handleClose}
            className="p-1.5 rounded-lg text-[#6B7280] hover:text-[#101216] hover:bg-[#EEF1F4] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-5">
            <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
              <CheckCircle className="w-7 h-7" />
            </div>
            <div className="space-y-1.5">
              <h3 className="text-xl font-[700] text-[#101216]">
                {mode === "login" ? "Welcome back" : "Welcome to RHEVIX"}
              </h3>
              <p className="text-xs text-[#4B5563] max-w-xs mx-auto leading-relaxed">
                {mode === "login"
                  ? `Signed in as ${email}. Redirecting to your dashboard...`
                  : `Account created for ${email}. You now have access to frontier masterclasses and expert office hours.`}
              </p>
            </div>
            <button
              onClick={handleClose}
              className="w-full py-2.5 px-4 bg-[#101216] hover:bg-[#17191D] text-white text-xs font-[550] rounded-xl transition-colors"
            >
              Enter Dashboard
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-7 space-y-4">
            <div>
              <h3 className="text-xl font-[750] text-[#101216]">
                {mode === "login" ? "Sign in to RHEVIX" : "Join the RHEVIX Network"}
              </h3>
              <p className="text-xs text-[#4B5563] mt-1">
                {mode === "login"
                  ? "Access your saved opportunities and mentor conversations."
                  : "Connect with frontier AI experts, masterclasses, and verified contracts."}
              </p>
            </div>

            {mode === "join" && (
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#17191D]">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Mercer"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[rgba(15,23,42,0.12)] text-xs text-[#17191D] focus:outline-none focus:ring-2 focus:ring-[#3155FF]/20 focus:border-[#3155FF]"
                />
              </div>
            )}

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-[#17191D]">Work / Personal Email</label>
              <input
                type="email"
                required
                placeholder="alex@domain.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-[rgba(15,23,42,0.12)] text-xs text-[#17191D] focus:outline-none focus:ring-2 focus:ring-[#3155FF]/20 focus:border-[#3155FF]"
              />
            </div>

            <div className="pt-2 space-y-3">
              <button
                type="submit"
                className="w-full py-3 px-4 bg-[#101216] hover:bg-[#3155FF] text-white font-[550] text-xs rounded-xl shadow-xs transition-all duration-200 flex items-center justify-center gap-2 hover:-translate-y-0.5"
              >
                <span>{mode === "login" ? "Sign In" : "Create Account"}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <div className="text-center text-xs text-[#6B7280]">
                {mode === "login" ? (
                  <span>
                    Don&apos;t have an account?{" "}
                    <button
                      type="button"
                      onClick={() => setMode("join")}
                      className="font-semibold text-[#3155FF] hover:underline"
                    >
                      Join RHEVIX
                    </button>
                  </span>
                ) : (
                  <span>
                    Already have an account?{" "}
                    <button
                      type="button"
                      onClick={() => setMode("login")}
                      className="font-semibold text-[#3155FF] hover:underline"
                    >
                      Sign In
                    </button>
                  </span>
                )}
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

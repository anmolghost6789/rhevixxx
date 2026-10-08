"use client";

import React, { useState, useEffect } from "react";
import { Sparkles, Menu, X, ArrowUpRight, Activity } from "lucide-react";

interface NavbarProps {
  onOpenApply: () => void;
  onOpenHire: () => void;
  reducedMotion: boolean;
  onToggleMotion: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenApply,
  onOpenHire,
  reducedMotion,
  onToggleMotion,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-out ${
        isScrolled
          ? "bg-white/85 backdrop-blur-[16px] border-b border-[rgba(15,23,42,0.08)] py-3 shadow-[0_2px_12px_rgba(15,23,42,0.03)]"
          : "bg-transparent border-b border-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Identity */}
          <div className="flex items-center gap-7">
            <a href="#" className="flex items-center gap-2.5 group">
              {/* Geometric AI Node Glyph */}
              <div className="w-8 h-8 rounded-lg bg-[#3155FF] flex items-center justify-center text-white shadow-xs group-hover:bg-[#2344E0] transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>

              <div className="flex items-baseline gap-1">
                <span className="text-xl font-bold tracking-tight text-[#101216] group-hover:text-[#3155FF] transition-colors">
                  RHEVIX
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#3155FF] inline-block" />
              </div>

              <span className="hidden md:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-mono font-medium bg-[#EEF1F4] text-[#4B5563] border border-[rgba(15,23,42,0.08)] ml-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Frontier Mesh
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 text-[13px] font-medium text-[#4B5563]">
              <a
                href="#opportunities"
                className="px-3 py-1.5 rounded-lg hover:text-[#101216] hover:bg-[#EEF1F4]/70 transition-colors"
              >
                Opportunities
              </a>
              <a
                href="#expertise"
                className="px-3 py-1.5 rounded-lg hover:text-[#101216] hover:bg-[#EEF1F4]/70 transition-colors"
              >
                Domains
              </a>
              <a
                href="#why-join"
                className="px-3 py-1.5 rounded-lg hover:text-[#101216] hover:bg-[#EEF1F4]/70 transition-colors"
              >
                Why RHEVIX
              </a>
              <a
                href="#editorial"
                className="px-3 py-1.5 rounded-lg hover:text-[#101216] hover:bg-[#EEF1F4]/70 transition-colors"
              >
                Frontier Voices
              </a>
              <a
                href="#how-it-works"
                className="px-3 py-1.5 rounded-lg hover:text-[#101216] hover:bg-[#EEF1F4]/70 transition-colors"
              >
                How It Works
              </a>
            </nav>
          </div>

          {/* Right Action Stack */}
          <div className="flex items-center gap-2.5">
            {/* Motion Toggle Button */}
            <button
              onClick={onToggleMotion}
              className={`hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[11px] font-mono border transition-all ${
                reducedMotion
                  ? "bg-[#EEF1F4] text-[#6B7280] border-[rgba(15,23,42,0.12)]"
                  : "bg-white text-[#3155FF] border-[rgba(49,85,255,0.25)] shadow-xs"
              }`}
              title="Toggle living background movement"
            >
              <Activity className="w-3 h-3 text-[#3155FF]" />
              <span>Motion: {reducedMotion ? "Off" : "Active"}</span>
            </button>

            {/* Secondary Outline Action */}
            <button
              onClick={onOpenHire}
              className="hidden md:inline-flex items-center gap-1 px-3.5 py-2 text-xs font-semibold text-[#17191D] border border-[rgba(15,23,42,0.12)] hover:bg-[#EEF1F4] rounded-xl transition-all"
            >
              Hire Talent <ArrowUpRight className="w-3.5 h-3.5 text-[#6B7280]" />
            </button>

            {/* Primary Talent CTA */}
            <button
              onClick={onOpenApply}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#3155FF] hover:bg-[#2344E0] text-white text-xs sm:text-sm font-semibold rounded-xl shadow-xs transition-all duration-200 hover:-translate-y-0.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-200" />
              <span>Join Network</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-[#17191D] hover:bg-[#EEF1F4]"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-b border-[rgba(15,23,42,0.08)] px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col space-y-1 text-sm font-semibold text-[#17191D]">
            <a
              href="#opportunities"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#EEF1F4]"
            >
              Opportunities
            </a>
            <a
              href="#expertise"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#EEF1F4]"
            >
              Domains
            </a>
            <a
              href="#why-join"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#EEF1F4]"
            >
              Why RHEVIX
            </a>
            <a
              href="#editorial"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#EEF1F4]"
            >
              Frontier Voices
            </a>
            <a
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#EEF1F4]"
            >
              How It Works
            </a>
          </nav>

          <div className="pt-2 border-t border-[rgba(15,23,42,0.08)] flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenHire();
              }}
              className="w-full py-2.5 px-4 text-xs font-semibold text-[#17191D] bg-[#EEF1F4] rounded-xl"
            >
              Hire Frontier Talent
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenApply();
              }}
              className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-[#3155FF] rounded-xl"
            >
              Join the Network
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

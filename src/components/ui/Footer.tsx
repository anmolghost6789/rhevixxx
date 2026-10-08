"use client";

import React from "react";

interface FooterProps {
  onOpenApply: () => void;
  onOpenHire: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenApply, onOpenHire }) => {
  return (
    <footer className="relative bg-[#EEF1F4]/70 border-t border-[rgba(15,23,42,0.08)] text-[#4B5563] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12 pb-16 border-b border-[rgba(15,23,42,0.07)]">
          {/* Brand Column */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#3155FF] flex items-center justify-center text-white shadow-xs">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tight text-[#101216]">
                RHEVIX
              </span>
            </div>

            <p className="text-xs text-[#4B5563] max-w-sm leading-relaxed">
              Empower Your Digital Transformation. Connecting exceptional developers, AI engineers, researchers, and domain experts with companies building the future of AI.
            </p>

            <div className="flex items-center gap-2 text-[11px] font-mono text-[#6B7280] pt-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>RHEVIX Mesh: Operational (14ms Latency)</span>
            </div>
          </div>

          {/* Column 1: COMPANY */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-mono uppercase tracking-wider font-bold text-[#101216]">
              COMPANY
            </h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#101216] transition-colors">About</a></li>
              <li><a href="#" className="hover:text-[#101216] transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-[#101216] transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-[#101216] transition-colors">Press</a></li>
            </ul>
          </div>

          {/* Column 2: FOR EXPERTS */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-mono uppercase tracking-wider font-bold text-[#101216]">
              FOR EXPERTS
            </h4>
            <ul className="space-y-2">
              <li>
                <button onClick={onOpenApply} className="hover:text-[#101216] transition-colors text-left">
                  Join Network
                </button>
              </li>
              <li><a href="#opportunities" className="hover:text-[#101216] transition-colors">Opportunities</a></li>
              <li><a href="#how-it-works" className="hover:text-[#101216] transition-colors">How It Works</a></li>
              <li><a href="#" className="hover:text-[#101216] transition-colors">Resources</a></li>
            </ul>
          </div>

          {/* Column 3: FOR COMPANIES */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-mono uppercase tracking-wider font-bold text-[#101216]">
              FOR COMPANIES
            </h4>
            <ul className="space-y-2">
              <li>
                <button onClick={onOpenHire} className="hover:text-[#101216] transition-colors text-left">
                  Find Talent
                </button>
              </li>
              <li><a href="#expertise" className="hover:text-[#101216] transition-colors">AI Talent</a></li>
              <li><a href="#" className="hover:text-[#101216] transition-colors">Enterprise</a></li>
              <li>
                <button onClick={onOpenHire} className="hover:text-[#101216] transition-colors text-left">
                  Contact Sales
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: RESOURCES */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-mono uppercase tracking-wider font-bold text-[#101216]">
              RESOURCES
            </h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#101216] transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-[#101216] transition-colors">Research</a></li>
              <li><a href="#" className="hover:text-[#101216] transition-colors">Guides</a></li>
              <li><a href="#" className="hover:text-[#101216] transition-colors">Help</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#6B7280]">
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#101216] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#101216] transition-colors">Terms</a>
            <a href="#" className="hover:text-[#101216] transition-colors">Cookies</a>
          </div>

          <div>
            © 2026 RHEVIX. All rights reserved. Empower Your Digital Transformation.
          </div>
        </div>
      </div>
    </footer>
  );
};

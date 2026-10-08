"use client";

import React from "react";
import { Logo } from "./Logo";

interface FooterProps {
  onOpenJoin: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenJoin }) => {
  return (
    <footer className="relative bg-[#F6F7F9]/80 backdrop-blur-[2px] border-t border-[rgba(15,23,42,0.06)] text-[#6B7280] text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-14 border-b border-[rgba(15,23,42,0.06)]">
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <Logo size="md" />
            <p className="text-xs sm:text-sm text-[#4B5563] max-w-sm leading-relaxed">
              Empower Your Digital Transformation. A global platform connecting developers and builders directly with frontier AI leaders.
            </p>
            <div className="flex items-center gap-2 text-[11px] font-mono text-[#6B7280] pt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>Network Status: All Systems Operational</span>
            </div>
          </div>

          {/* Column 1: Navigation */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-[11px] font-mono uppercase tracking-wider font-semibold text-[#101216]">
              Platform
            </div>
            <ul className="space-y-2.5">
              <li>
                <a href="#experts" className="hover:text-[#101216] transition-colors">
                  Experts
                </a>
              </li>
              <li>
                <a href="#why-rhevix" className="hover:text-[#101216] transition-colors">
                  Why RHEVIX
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Network */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-[11px] font-mono uppercase tracking-wider font-semibold text-[#101216]">
              Community
            </div>
            <ul className="space-y-2.5">
              <li>
                <button
                  onClick={onOpenJoin}
                  className="hover:text-[#101216] transition-colors text-left"
                >
                  Join as Expert
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenJoin}
                  className="hover:text-[#101216] transition-colors text-left"
                >
                  Partner with Us
                </button>
              </li>
              <li>
                <a href="#" className="hover:text-[#101216] transition-colors">
                  Research Papers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#101216] transition-colors">
                  Contact Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#6B7280]">
          <div>
            © 2026 RHEVIX. All rights reserved. Empower Your Digital Transformation.
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#101216] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#101216] transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-[#101216] transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

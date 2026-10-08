"use client";

import React from "react";
import { Logo } from "./Logo";
import { MapPin } from "lucide-react";

interface FooterProps {
  onOpenJoin?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenJoin }) => {
  return (
    <footer className="relative bg-[#F6F7F9] border-t border-[rgba(15,23,42,0.06)] text-[#6B7280] text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Main Grid */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 md:gap-10 pb-14 border-b border-[rgba(15,23,42,0.06)]">
          {/* Brand Info & Vision */}
          <div className="col-span-2 md:col-span-4 space-y-4">
            <Logo size="md" />
            <p className="text-xs sm:text-sm text-[#4B5563] max-w-sm leading-relaxed">
              AI · Data · Engineering · Built for the Next Generation of Business. Engineering intelligence into enterprise platforms worldwide.
            </p>
            <div className="flex items-center gap-2 text-[11px] font-mono text-[#6B7280] pt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>Production Infrastructure · Operational</span>
            </div>
          </div>

          {/* Column 1: Capabilities */}
          <div className="col-span-1 md:col-span-2 space-y-3">
            <div className="text-[11px] font-mono uppercase tracking-wider font-semibold text-[#101216]">
              Capabilities
            </div>
            <ul className="space-y-2.5">
              <li>
                <a href="#capabilities" className="hover:text-[#101216] transition-colors">
                  Artificial Intelligence
                </a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-[#101216] transition-colors">
                  Software Engineering
                </a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-[#101216] transition-colors">
                  Data Engineering
                </a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-[#101216] transition-colors">
                  Analytics & Intelligence
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Industries */}
          <div className="col-span-1 md:col-span-2 space-y-3">
            <div className="text-[11px] font-mono uppercase tracking-wider font-semibold text-[#101216]">
              Industries
            </div>
            <ul className="space-y-2.5">
              <li>
                <a href="#industries" className="hover:text-[#101216] transition-colors">
                  Banking & Financial
                </a>
              </li>
              <li>
                <a href="#industries" className="hover:text-[#101216] transition-colors">
                  Healthcare & Pharma
                </a>
              </li>
              <li>
                <a href="#industries" className="hover:text-[#101216] transition-colors">
                  Enterprise
                </a>
              </li>
              <li>
                <a href="#industries" className="hover:text-[#101216] transition-colors">
                  Consulting & Tech
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Company & Resources */}
          <div className="col-span-1 md:col-span-2 space-y-3">
            <div className="text-[11px] font-mono uppercase tracking-wider font-semibold text-[#101216]">
              Company
            </div>
            <ul className="space-y-2.5">
              <li>
                <a href="#why-rhevix" className="hover:text-[#101216] transition-colors">
                  Why RHEVIX
                </a>
              </li>
              <li>
                <a href="#leadership" className="hover:text-[#101216] transition-colors">
                  Leadership
                </a>
              </li>
              <li>
                <a href="#approach" className="hover:text-[#101216] transition-colors">
                  Our Approach
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#101216] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Locations & Connect */}
          <div className="col-span-1 md:col-span-2 space-y-4">
            <div>
              <div className="text-[11px] font-mono uppercase tracking-wider font-semibold text-[#101216] mb-2.5">
                Locations
              </div>
              <div className="space-y-1.5 text-xs text-[#4B5563]">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-[#3155FF]" />
                  <span>Nagpur</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-[#3155FF]" />
                  <span>Pune</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-[#3155FF]" />
                  <span>Dubai</span>
                </div>
              </div>
            </div>

            <div>
              <div className="text-[11px] font-mono uppercase tracking-wider font-semibold text-[#101216] mb-2">
                Connect
              </div>
              <div className="flex items-center gap-3 text-xs text-[#4B5563]">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#3155FF] transition-colors"
                >
                  LinkedIn
                </a>
                <span>·</span>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#3155FF] transition-colors"
                >
                  X
                </a>
                <span>·</span>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#3155FF] transition-colors"
                >
                  YouTube
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#6B7280]">
          <div>
            © 2026 RHEVIX. All Rights Reserved.
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#101216] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#101216] transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-[#101216] transition-colors">
              Security Standards
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

"use client";

import React, { useState, useEffect } from "react";
import { Logo } from "./Logo";
import { Menu, X, ArrowRight } from "lucide-react";

interface NavbarProps {
  onOpenLogin: () => void;
  onOpenJoin: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenLogin, onOpenJoin }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-out ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md border-b border-[rgba(15,23,42,0.06)] py-3 shadow-[0_2px_12px_rgba(15,23,42,0.02)]"
          : "bg-transparent border-b border-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <Logo />
          </a>

          {/* Center Navigation Links */}
          <nav className="hidden lg:flex items-center gap-0.5 text-[13px] font-[500] text-[#4B5563]">
            <a
              href="#capabilities"
              className="px-3 py-1.5 rounded-lg hover:text-[#101216] hover:bg-[#EEF1F4]/70 transition-colors"
            >
              Capabilities
            </a>
            <a
              href="#rhevix-ai"
              className="px-3 py-1.5 rounded-lg hover:text-[#101216] hover:bg-[#EEF1F4]/70 transition-colors"
            >
              AI
            </a>
            <a
              href="#what-we-build"
              className="px-3 py-1.5 rounded-lg hover:text-[#101216] hover:bg-[#EEF1F4]/70 transition-colors"
            >
              Solutions
            </a>
            <a
              href="#technology"
              className="px-3 py-1.5 rounded-lg hover:text-[#101216] hover:bg-[#EEF1F4]/70 transition-colors"
            >
              Technology
            </a>
            <a
              href="#industries"
              className="px-3 py-1.5 rounded-lg hover:text-[#101216] hover:bg-[#EEF1F4]/70 transition-colors"
            >
              Industries
            </a>
            <a
              href="#why-rhevix"
              className="px-3 py-1.5 rounded-lg hover:text-[#101216] hover:bg-[#EEF1F4]/70 transition-colors"
            >
              Why RHEVIX
            </a>
          </nav>

          {/* Right Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenLogin}
              className="px-3 py-2 text-xs font-[550] text-[#17191D] hover:text-[#101216] hover:bg-[#EEF1F4] rounded-lg transition-colors"
            >
              Login
            </button>
            <a
              href="#contact"
              className="px-4 py-2 bg-[#101216] hover:bg-[#3155FF] text-white text-xs font-[550] rounded-lg shadow-xs hover:-translate-y-0.5 transition-all duration-200"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#17191D] hover:bg-[#EEF1F4]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-b border-[rgba(15,23,42,0.08)] px-5 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col space-y-1 text-sm font-medium text-[#17191D]">
            <a
              href="#capabilities"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#EEF1F4]"
            >
              Capabilities
            </a>
            <a
              href="#rhevix-ai"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#EEF1F4]"
            >
              AI
            </a>
            <a
              href="#what-we-build"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#EEF1F4]"
            >
              Solutions
            </a>
            <a
              href="#technology"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#EEF1F4]"
            >
              Technology
            </a>
            <a
              href="#industries"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#EEF1F4]"
            >
              Industries
            </a>
            <a
              href="#why-rhevix"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#EEF1F4]"
            >
              Why RHEVIX
            </a>
          </nav>
          <div className="pt-2 border-t border-[rgba(15,23,42,0.06)] flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLogin();
              }}
              className="w-full py-2.5 px-4 text-xs font-semibold text-[#17191D] bg-[#EEF1F4] rounded-lg text-center"
            >
              Login
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-[#3155FF] rounded-lg text-center"
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

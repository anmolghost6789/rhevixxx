"use client";

import React, { useState } from "react";
import { SmoothScrollProvider } from "@/components/ui/SmoothScrollProvider";
import { Navbar } from "@/components/ui/Navbar";
import { Hero } from "@/components/ui/Hero";
import { ExpertsSection } from "@/components/ui/ExpertsSection";
import { WhyRhevixSection } from "@/components/ui/WhyRhevixSection";
import { FinalCTASection } from "@/components/ui/FinalCTASection";
import { Footer } from "@/components/ui/Footer";
import { LivingBackground } from "@/components/background/LivingBackground";

// Interactive Modals
import { AuthModal } from "@/components/modals/AuthModal";
import { ExpertModal } from "@/components/modals/ExpertModal";

import { Expert, EXPERTS } from "@/data/platformData";

export default function HomePage() {
  const [authModalState, setAuthModalState] = useState<{
    isOpen: boolean;
    mode: "login" | "join";
  }>({
    isOpen: false,
    mode: "join",
  });

  const [selectedExpert, setSelectedExpert] = useState<Expert | null>(null);

  const handleOpenLogin = () => {
    setAuthModalState({ isOpen: true, mode: "login" });
  };

  const handleOpenJoin = () => {
    setAuthModalState({ isOpen: true, mode: "join" });
  };

  const handleExploreExperts = () => {
    const el = document.getElementById("experts");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleExploreWhyRhevix = () => {
    const el = document.getElementById("why-rhevix");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <SmoothScrollProvider>
      <div className="relative min-h-screen bg-[#F6F7F9] text-[#17191D] selection:bg-[#3155FF] selection:text-white">
        {/* Ambient Living Background */}
        <LivingBackground />

        {/* Minimal Blurred Sticky Navbar */}
        <Navbar
          onOpenLogin={handleOpenLogin}
          onOpenJoin={handleOpenJoin}
        />

        <main className="relative z-10 flex flex-col">
          {/* Hero Section */}
          <Hero
            onExploreExperts={handleExploreExperts}
            onJoinRhevix={handleOpenJoin}
            onSelectHeroExpert={() => setSelectedExpert(EXPERTS[0])}
          />

          {/* Experts Section */}
          <ExpertsSection
            onSelectExpert={(expert) => setSelectedExpert(expert)}
            onExploreAllExperts={handleExploreExperts}
          />

          {/* Why RHEVIX (3 Simple Benefits with Large Typography) */}
          <WhyRhevixSection />

          {/* Final CTA */}
          <FinalCTASection
            onExploreExperts={handleExploreExperts}
            onJoinRhevix={handleOpenJoin}
          />
        </main>

        {/* Minimal Clean Footer */}
        <Footer onOpenJoin={handleOpenJoin} />

        {/* Modals */}
        <AuthModal
          isOpen={authModalState.isOpen}
          defaultMode={authModalState.mode}
          onClose={() => setAuthModalState({ ...authModalState, isOpen: false })}
        />

        <ExpertModal
          expert={selectedExpert}
          onClose={() => setSelectedExpert(null)}
        />
      </div>
    </SmoothScrollProvider>
  );
}

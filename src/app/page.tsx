"use client";

import React, { useState } from "react";
import { SmoothScrollProvider } from "@/components/ui/SmoothScrollProvider";
import { Navbar } from "@/components/ui/Navbar";
import { Hero } from "@/components/ui/Hero";
import { CapabilitiesSection } from "@/components/ui/CapabilitiesSection";
import { RhevixAISection } from "@/components/ui/RhevixAISection";
import { WhatWeBuildSection } from "@/components/ui/WhatWeBuildSection";
import { TechnologyStackSection } from "@/components/ui/TechnologyStackSection";
import { ExpertsSection } from "@/components/ui/ExpertsSection";
import { OpportunitiesSection } from "@/components/ui/OpportunitiesSection";
import { WhyRhevixSection } from "@/components/ui/WhyRhevixSection";
import { IndustriesSection } from "@/components/ui/IndustriesSection";
import { ApproachSection } from "@/components/ui/ApproachSection";
import { LeadershipSection } from "@/components/ui/LeadershipSection";
import { FinalBusinessCTASection } from "@/components/ui/FinalBusinessCTASection";
import { Footer } from "@/components/ui/Footer";
import { LivingBackground } from "@/components/background/LivingBackground";

// Interactive Modals
import { AuthModal } from "@/components/modals/AuthModal";
import { ExpertModal } from "@/components/modals/ExpertModal";
import { OpportunityModal } from "@/components/modals/OpportunityModal";

import { Expert, OpportunityItem, EXPERTS } from "@/data/platformData";

export default function HomePage() {
  const [authModalState, setAuthModalState] = useState<{
    isOpen: boolean;
    mode: "login" | "join";
  }>({
    isOpen: false,
    mode: "join",
  });

  const [selectedExpert, setSelectedExpert] = useState<Expert | null>(null);
  const [selectedOpportunity, setSelectedOpportunity] = useState<OpportunityItem | null>(null);

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

  const handleExploreOpportunities = () => {
    const el = document.getElementById("opportunities");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <SmoothScrollProvider>
      <div className="relative min-h-screen bg-[#F6F7F9] text-[#17191D] selection:bg-[#3155FF] selection:text-white">
        {/* Ambient Living Background with GPU-accelerated effects */}
        <LivingBackground />

        {/* Minimal Blurred Sticky Navbar */}
        <Navbar
          onOpenLogin={handleOpenLogin}
          onOpenJoin={handleOpenJoin}
        />

        <main className="relative z-10 flex flex-col">
          {/* 0. Hero Section */}
          <Hero
            onExploreExperts={handleExploreExperts}
            onJoinRhevix={handleScrollContact}
            onSelectHeroExpert={() => setSelectedExpert(EXPERTS[0])}
          />

          {/* 1. Capabilities (Engineering Intelligence) */}
          <CapabilitiesSection />

          {/* 2. RHEVIX AI (Build With Intelligence) */}
          <RhevixAISection onExploreAI={handleScrollContact} />

          {/* 3. What We Build (From Ideas to Intelligent Systems) */}
          <WhatWeBuildSection />

          {/* 4. Technology Stack (Built Across Modern Technology Stack) */}
          <TechnologyStackSection />

          {/* Existing Experts Section */}
          <ExpertsSection
            onSelectExpert={(expert) => setSelectedExpert(expert)}
            onExploreAllExperts={handleExploreExperts}
          />

          {/* Existing Opportunities Section */}
          <OpportunitiesSection
            onSelectOpportunity={(opp) => setSelectedOpportunity(opp)}
            onExploreOpportunities={handleExploreOpportunities}
          />

          {/* 5. Why RHEVIX (Built for Organizations That Want to Move Faster) */}
          <WhyRhevixSection />

          {/* 6. Industries (Technology That Understands Your Business) */}
          <IndustriesSection />

          {/* 7. The RHEVIX Approach (Think. Engineer. Evolve.) */}
          <ApproachSection />

          {/* 8. Leadership (Experience That Shapes the Future) */}
          <LeadershipSection onMeetLeadership={handleScrollContact} />

          {/* 9. Final Business CTA (Let's Build What's Next + Contact Form) */}
          <FinalBusinessCTASection />
        </main>

        {/* 10. Final Premium Footer (Capabilities, Industries, Company, Locations, Connect) */}
        <Footer onOpenJoin={handleOpenJoin} />

        {/* Interactive Modals */}
        <AuthModal
          isOpen={authModalState.isOpen}
          defaultMode={authModalState.mode}
          onClose={() => setAuthModalState({ ...authModalState, isOpen: false })}
        />

        <ExpertModal
          expert={selectedExpert}
          onClose={() => setSelectedExpert(null)}
        />

        <OpportunityModal
          opportunity={selectedOpportunity}
          onClose={() => setSelectedOpportunity(null)}
        />
      </div>
    </SmoothScrollProvider>
  );
}

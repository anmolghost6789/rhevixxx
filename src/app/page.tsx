"use client";

import React, { useState } from "react";
import { SmoothScrollProvider } from "@/components/ui/SmoothScrollProvider";
import { Navbar } from "@/components/ui/Navbar";
import { Hero } from "@/components/ui/Hero";
import { ExpertsSection } from "@/components/ui/ExpertsSection";
import { CoursesSection } from "@/components/ui/CoursesSection";
import { OpportunitiesSection } from "@/components/ui/OpportunitiesSection";
import { WhyRhevixSection } from "@/components/ui/WhyRhevixSection";
import { FinalCTASection } from "@/components/ui/FinalCTASection";
import { Footer } from "@/components/ui/Footer";
import { LivingBackground } from "@/components/background/LivingBackground";

// Interactive Modals
import { AuthModal } from "@/components/modals/AuthModal";
import { ExpertModal } from "@/components/modals/ExpertModal";
import { CourseModal } from "@/components/modals/CourseModal";
import { OpportunityModal } from "@/components/modals/OpportunityModal";

import { Expert, Course, OpportunityItem, EXPERTS } from "@/data/platformData";

export default function HomePage() {
  const [authModalState, setAuthModalState] = useState<{
    isOpen: boolean;
    mode: "login" | "join";
  }>({
    isOpen: false,
    mode: "join",
  });

  const [selectedExpert, setSelectedExpert] = useState<Expert | null>(null);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
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

  const handleExploreCourses = () => {
    const el = document.getElementById("courses");
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

  return (
    <SmoothScrollProvider>
      <div className="relative min-h-screen bg-[#F6F7F9] text-[#17191D] selection:bg-[#3155FF] selection:text-white">
        {/* Ambient Living Background with 2026 AR/VR motion */}
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
            onExploreCourses={handleExploreCourses}
            onSelectHeroExpert={() => setSelectedExpert(EXPERTS[0])}
          />

          {/* Experts Section */}
          <ExpertsSection
            onSelectExpert={(expert) => setSelectedExpert(expert)}
            onExploreAllExperts={handleExploreExperts}
          />

          {/* Courses Section */}
          <CoursesSection
            onSelectCourse={(course) => setSelectedCourse(course)}
            onViewAllCourses={handleExploreCourses}
          />

          {/* Opportunities Section */}
          <OpportunitiesSection
            onSelectOpportunity={(opp) => setSelectedOpportunity(opp)}
            onExploreOpportunities={handleExploreOpportunities}
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

        <CourseModal
          course={selectedCourse}
          onClose={() => setSelectedCourse(null)}
        />

        <OpportunityModal
          opportunity={selectedOpportunity}
          onClose={() => setSelectedOpportunity(null)}
        />
      </div>
    </SmoothScrollProvider>
  );
}

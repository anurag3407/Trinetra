import LandingNavbar from "@/components/landing/LandingNavbar";
import HeroSection from "@/components/landing/HeroSection";
import ProblemStatementBanner from "@/components/landing/ProblemStatementBanner";
import InvestigationFlowSection from "@/components/landing/InvestigationFlowSection";
import FeaturesGrid from "@/components/landing/FeaturesGrid";
import InteractiveDemo from "@/components/landing/InteractiveDemo";
import SwarmTelemetryShowcase from "@/components/landing/SwarmTelemetryShowcase";
import LegalComplianceSection from "@/components/landing/LegalComplianceSection";
import FaqAccordion from "@/components/landing/FaqAccordion";
import LandingFooter from "@/components/landing/LandingFooter";

export default function LandingPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#F0F0F0] selection:bg-[#D02020] selection:text-white">
      <LandingNavbar />
      <HeroSection />
      <ProblemStatementBanner />
      <InvestigationFlowSection />
      <FeaturesGrid />
      <InteractiveDemo />
      <SwarmTelemetryShowcase />
      <LegalComplianceSection />
      <FaqAccordion />
      <LandingFooter />
    </main>
  );
}

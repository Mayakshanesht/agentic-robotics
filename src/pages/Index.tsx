import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { PageShell } from "@/components/PageShell";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustStrip } from "@/components/home/TrustStrip";
import { CapabilityStory } from "@/components/home/CapabilityStory";
import { HumanVsCloudBee } from "@/components/home/HumanVsCloudBee";
import { ProblemAdvantage } from "@/components/home/ProblemAdvantage";
import { CapabilityCompiler } from "@/components/home/CapabilityCompiler";
import { WorkforceAnalogy } from "@/components/home/WorkforceAnalogy";
import { SafetyValidation } from "@/components/home/SafetyValidation";
import { ComplianceIntelligence } from "@/components/home/ComplianceIntelligence";
import { SyntheticExperience } from "@/components/home/SyntheticExperience";
import { MultimodalLearning } from "@/components/home/MultimodalLearning";
import { AutonomousOS } from "@/components/home/AutonomousOS";
import { SelfImprovingLoop } from "@/components/home/SelfImprovingLoop";
import { SixGNervousSystem } from "@/components/home/SixGNervousSystem";
import { PlatformComingSoon } from "@/components/home/PlatformComingSoon";
import { PartnerStrip } from "@/components/home/PartnerStrip";
import { IndustrialFocus } from "@/components/home/IndustrialFocus";
import { WhyCloudBee } from "@/components/home/WhyCloudBee";
import { CapabilityIntelligence } from "@/components/home/CapabilityIntelligence";
import { InvestorSection } from "@/components/home/InvestorSection";
import { CapabilityMarketplace } from "@/components/home/CapabilityMarketplace";
import { DemoGallery } from "@/components/home/DemoGallery";
import { FounderKeynote } from "@/components/home/FounderKeynote";
import { HomeNews } from "@/components/home/HomeNews";
import { FinalCTA } from "@/components/home/FinalCTA";
import { AskCloudBee } from "@/components/AskCloudBee";

const Index = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
    }
  }, [location]);

  return (
    <PageShell
      title="CloudBee Robotics — The Capability Factory for Agentic Physical AI"
      description="Transform industrial processes into validated capabilities. Generate multimodal synthetic experience, train foundation models and deploy self-improving autonomous systems for warehousing, manufacturing and industrial automation."
      path="/"
    >
      <HeroSection />
      <PartnerStrip />
      <CapabilityStory />
      <HumanVsCloudBee />
      <ProblemAdvantage />
      <CapabilityCompiler />
      <WorkforceAnalogy />
      <SafetyValidation />
      <ComplianceIntelligence />
      <SyntheticExperience />
      <MultimodalLearning />
      <AutonomousOS />
      <SelfImprovingLoop />
      <SixGNervousSystem />
      <IndustrialFocus />
      <DemoGallery />
      <WhyCloudBee />
      <CapabilityIntelligence />
      <PlatformComingSoon />
      <InvestorSection />
      <CapabilityMarketplace />
      <FounderKeynote />
      <HomeNews />
      <FinalCTA />
      <TrustStrip />
      <AskCloudBee />
    </PageShell>
  );
};

export default Index;

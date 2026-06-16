import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { PageShell } from "@/components/PageShell";
import { Hero } from "@/components/landing/Hero";
import { CapabilityPlayground } from "@/components/landing/CapabilityPlayground";
import { ProblemSolution } from "@/components/landing/ProblemSolution";
import { WhoWeServe } from "@/components/landing/WhoWeServe";
import { CapabilityCompilerFeature } from "@/components/landing/CapabilityCompilerFeature";
import { PhysicsGrounding } from "@/components/landing/PhysicsGrounding";
import { OnboardingPaths } from "@/components/landing/OnboardingPaths";
import { Grants } from "@/components/landing/Grants";
import { Metrics } from "@/components/landing/Metrics";
import { FounderMoment } from "@/components/landing/FounderMoment";
import { InvestorCTA } from "@/components/landing/InvestorCTA";
import { FinalStatement } from "@/components/landing/FinalStatement";
import { PartnerStrip } from "@/components/home/PartnerStrip";
import { SelfImprovingLoop } from "@/components/home/SelfImprovingLoop";
import { SixGNervousSystem } from "@/components/home/SixGNervousSystem";
import { PlatformComingSoon } from "@/components/home/PlatformComingSoon";
import { TrustStrip } from "@/components/home/TrustStrip";
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
      title="CloudBee Robotics - The Capability Factory for Agentic Physical AI"
      description="Turn any process into safety-validated robot capabilities. CloudBee Robotics compiles capabilities, generates multimodal synthetic experience at scale, trains our own task AI models, and deploys a self-improving, 6G-connected fleet run by an autonomous agentic OS."
      path="/"
    >
      <Hero />
      <PartnerStrip />
      <WhoWeServe />
      <PlatformComingSoon />
      <CapabilityPlayground />
      <ProblemSolution />
      <CapabilityCompilerFeature />
      <PhysicsGrounding />
      <OnboardingPaths />
      <SelfImprovingLoop />
      <SixGNervousSystem />
      <Grants />
      <Metrics />
      <FounderMoment />
      <InvestorCTA />
      <TrustStrip />
      <FinalStatement />
      <AskCloudBee />
    </PageShell>
  );
};

export default Index;

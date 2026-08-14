import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { PageShell } from "@/components/PageShell";
import { Hero } from "@/components/landing/Hero";
import { ProblemSolution } from "@/components/landing/ProblemSolution";
import { WhoWeServe } from "@/components/landing/WhoWeServe";
import { CapabilityCompilerFeature } from "@/components/landing/CapabilityCompilerFeature";
import { AgenticDemoHighlight } from "@/components/home/AgenticDemoHighlight";
import { OnboardingPaths } from "@/components/landing/OnboardingPaths";
import { Metrics } from "@/components/landing/Metrics";
import { InvestorCTA } from "@/components/landing/InvestorCTA";
import { FinalStatement } from "@/components/landing/FinalStatement";
import { PartnerStrip } from "@/components/home/PartnerStrip";
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
      title="CloudBee Robotics — The Capability Factory for Physical AI"
      description="Turn any industrial process into safety-validated, self-improving robot capabilities — deployed on the hardware you already own."
      path="/"
    >
      <Hero />
      <PartnerStrip />
      <ProblemSolution />
      <CapabilityCompilerFeature />
      <AgenticDemoHighlight />
      <WhoWeServe />
      <OnboardingPaths />
      <Metrics />
      <TrustStrip />
      <InvestorCTA />
      <FinalStatement />
      <AskCloudBee />
    </PageShell>
  );
};

export default Index;

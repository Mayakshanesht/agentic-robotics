import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { PageShell } from "@/components/PageShell";
import { Hero } from "@/components/landing/Hero";
import { ProofBar } from "@/components/landing/ProofBar";
import { ProblemSolution } from "@/components/landing/ProblemSolution";
import { PlatformPipeline } from "@/components/landing/PlatformPipeline";
import { AgenticDemoHighlight } from "@/components/home/AgenticDemoHighlight";
import { WhoWeServe } from "@/components/landing/WhoWeServe";
import { OnboardingPaths } from "@/components/landing/OnboardingPaths";
import { LabAndPilots } from "@/components/landing/LabAndPilots";
import { Metrics } from "@/components/landing/Metrics";
import { BusinessModel } from "@/components/landing/BusinessModel";
import { PreSeed } from "@/components/landing/PreSeed";
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
      title="CloudBee Robotics — Contact-Rich Manipulation, From Video to Deployed Robot"
      description="4D multimodal manipulation data, frontier models adapted to your robot, a self-recovering agentic OS and one hardware standard for any robot. Pilots running on Unitree G1, Unitree H2, OpenArm 2 and SO-101."
      path="/"
    >
      <Hero />
      <ProofBar />
      <PartnerStrip />
      <ProblemSolution />
      <PlatformPipeline />
      <AgenticDemoHighlight />
      <WhoWeServe />
      <OnboardingPaths />
      <LabAndPilots />
      <Metrics />
      <BusinessModel />
      <PreSeed />
      <TrustStrip />
      <FinalStatement />
      <AskCloudBee />
    </PageShell>
  );
};

export default Index;

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { PageShell } from "@/components/PageShell";
import { Hero } from "@/components/site/Hero";
import { SeeItWork } from "@/components/site/SeeItWork";
import { ProblemAnswer } from "@/components/site/ProblemAnswer";
import { HowItWorks } from "@/components/site/HowItWorks";
import { WhyCloudBee } from "@/components/site/WhyCloudBee";
import { PilotToSelfServe } from "@/components/site/PilotToSelfServe";
import { Traction } from "@/components/site/Traction";
import { TeamStrip } from "@/components/site/TeamStrip";
import { InvestorBand } from "@/components/site/InvestorBand";
import { FinalCta } from "@/components/site/FinalCta";
import { FaqWidget } from "@/components/FaqWidget";

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
      title="CloudBee Robotics · The capability factory for agentic physical AI"
      description="Describe the task, we help build the skill for your robot, in your own work cell. Touch and force data generated on GPUs, adapted open foundation models and a self-improving OS for robot arms, humanoids and dexterous hands. RWTH Aachen spin-off."
      path="/"
    >
      <Hero />
      <SeeItWork />
      <ProblemAnswer />
      <HowItWorks />
      <WhyCloudBee />
      <PilotToSelfServe />
      <Traction />
      <TeamStrip />
      <InvestorBand />
      <FinalCta />
      <FaqWidget />
    </PageShell>
  );
};

export default Index;

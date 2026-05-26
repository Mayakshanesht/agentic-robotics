import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { PageShell } from "@/components/PageShell";
import { HeroSection } from "@/components/home/HeroSection";
import { ProblemStrip } from "@/components/home/ProblemStrip";
import { MilestoneBanner } from "@/components/home/MilestoneBanner";
import { PlatformOverview } from "@/components/home/PlatformOverview";
import { SkillMarketplace } from "@/components/home/SkillMarketplace";
import { WhyCloudBee } from "@/components/home/WhyCloudBee";
import { TargetIndustries } from "@/components/home/TargetIndustries";
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
      title="CloudBee Robotics — The Operating System for Autonomous Robots"
      description="CloudBee Robotics builds the infrastructure layer for embodied AI — from task description to deployed intelligence on any humanoid robot, in a couple of days."
      path="/"
    >
      <HeroSection />
      <ProblemStrip />
      <MilestoneBanner />
      <PlatformOverview />
      <SkillMarketplace />
      <WhyCloudBee />
      <TargetIndustries />
      <HomeNews />
      <FinalCTA />
      <AskCloudBee />
    </PageShell>
  );
};

export default Index;

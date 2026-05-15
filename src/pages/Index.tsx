import { PageShell } from "@/components/PageShell";
import { HeroSection } from "@/components/home/HeroSection";
import { ProblemStrip } from "@/components/home/ProblemStrip";
import { PlatformOverview } from "@/components/home/PlatformOverview";
import { WhyCloudBee } from "@/components/home/WhyCloudBee";
import { TargetIndustries } from "@/components/home/TargetIndustries";
import { Traction } from "@/components/home/Traction";
import { FinalCTA } from "@/components/home/FinalCTA";
import { AskCloudBee } from "@/components/AskCloudBee";

const Index = () => (
  <PageShell
    title="CloudBee Robotics — The Operating System for Autonomous Robots"
    description="CloudBee Robotics builds the infrastructure that takes any robot from task description to deployed intelligence — in weeks, not months."
    path="/"
  >
    <HeroSection />
    <ProblemStrip />
    <PlatformOverview />
    <WhyCloudBee />
    <TargetIndustries />
    <Traction />
    <FinalCTA />
    <AskCloudBee />
  </PageShell>
);

export default Index;

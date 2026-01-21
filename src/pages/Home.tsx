import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ProblemSection } from "@/components/ProblemSection";
import { WorkflowSection } from "@/components/WorkflowSection";
import { CapabilitiesSection } from "@/components/CapabilitiesSection";
import { UseCasesSection } from "@/components/UseCasesSection";
import { WhyChooseSection } from "@/components/WhyChooseSection";
import { PlatformAccessSection } from "@/components/PlatformAccessSection";
import { TeamSection } from "@/components/TeamSection";
import { Footer } from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <WorkflowSection />
        <CapabilitiesSection />
        <UseCasesSection />
        <WhyChooseSection />
        <PlatformAccessSection />
        <TeamSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;

import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { TrustIndicators } from "@/components/TrustIndicators";
import { DemoShowcase } from "@/components/DemoShowcase";
import { Footer } from "@/components/Footer";
import { AskCloudBee } from "@/components/AskCloudBee";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <BenefitsSection />
        <TrustIndicators />
        <DemoShowcase />
      </main>
      <Footer />
      <AskCloudBee />
    </div>
  );
};

export default Index;

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WorkflowSection } from "@/components/WorkflowSection";
import { CapabilitiesSection } from "@/components/CapabilitiesSection";
import { motion } from "framer-motion";

const Technology = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Page Header */}
        <section className="pt-32 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
          <div className="section-container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="font-display text-4xl lg:text-5xl font-bold mb-6">
                Our <span className="text-gradient-teal">Technology</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                End-to-end infrastructure for Physical AI — from synthetic world generation 
                to deployment-ready robot intelligence.
              </p>
            </motion.div>
          </div>
        </section>

        <WorkflowSection />
        <CapabilitiesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Technology;

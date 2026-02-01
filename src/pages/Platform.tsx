import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PlatformAccessSection } from "@/components/PlatformAccessSection";
import { WhyChooseSection } from "@/components/WhyChooseSection";
import { motion } from "framer-motion";
import { Globe, Brain, Rocket } from "lucide-react";

const platformBlocks = [
  {
    icon: Globe,
    title: "World Generation",
    description: "Generate scalable, task-conditioned synthetic worlds.",
    details: [
      "4D environment synthesis",
      "Domain randomization",
      "Physics-accurate simulation",
    ],
  },
  {
    icon: Brain,
    title: "Agentic Training",
    description: "Train long-horizon, world-aware agents with planning and reasoning.",
    details: [
      "World model integration",
      "Multi-step task planning",
      "Memory & reasoning layers",
    ],
  },
  {
    icon: Rocket,
    title: "Deployment",
    description: "Deploy robust policies directly onto physical robots.",
    details: [
      "Sim-to-real transfer",
      "Hardware-agnostic policies",
      "Real-time adaptation",
    ],
  },
];

const Platform = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Page Header */}
        <section className="pt-32 pb-16">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="font-display text-4xl lg:text-5xl font-bold mb-6 text-foreground">
                The <span className="text-gradient-teal">Platform</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A complete infrastructure for building, training, and deploying 
                Physical AI at enterprise scale.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Platform Visual Blocks */}
        <section className="section-spacing bg-secondary/50">
          <div className="section-container">
            <div className="grid lg:grid-cols-3 gap-8">
              {platformBlocks.map((block, index) => (
                <motion.div
                  key={block.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="bg-card rounded-2xl border border-border p-8 hover:shadow-lg transition-shadow"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6">
                    <block.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                    {block.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {block.description}
                  </p>
                  <ul className="space-y-2">
                    {block.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <WhyChooseSection />
        <PlatformAccessSection />
      </main>
      <Footer />
    </div>
  );
};

export default Platform;

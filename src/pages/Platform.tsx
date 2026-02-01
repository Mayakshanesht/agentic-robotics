import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PlatformAccessSection } from "@/components/PlatformAccessSection";
import { WhyChooseSection } from "@/components/WhyChooseSection";
import { motion } from "framer-motion";
import { Globe, Brain, Rocket, ArrowRight } from "lucide-react";

const platformBlocks = [
  {
    icon: Globe,
    title: "World Generation",
    subtitle: "Synthetic Environments at Scale",
    description: "Generate scalable, task-conditioned synthetic worlds with domain randomization, physics accuracy, and photorealistic rendering.",
    features: [
      "4D world generation with temporal dynamics",
      "Automatic domain randomization",
      "Physics-accurate environments",
      "Task-conditioned scene synthesis",
    ],
  },
  {
    icon: Brain,
    title: "Agentic Training",
    subtitle: "World-Aware Intelligence",
    description: "Train long-horizon, world-aware agents with planning, reasoning, and memory capabilities that understand physical reality.",
    features: [
      "Multi-step task decomposition",
      "World model learning",
      "Hierarchical policy training",
      "Memory-augmented reasoning",
    ],
  },
  {
    icon: Rocket,
    title: "Deployment",
    subtitle: "Sim-to-Real Transfer",
    description: "Deploy robust policies directly onto physical robots with validated sim-to-real transfer and continuous improvement.",
    features: [
      "50-70% reduction in transfer failures",
      "Hardware-agnostic deployment",
      "Real-time policy adaptation",
      "Continuous learning loop",
    ],
  },
];

const Platform = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Page Header */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
          <div className="section-container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="font-display text-4xl lg:text-5xl font-bold mb-6">
                The <span className="text-gradient-teal">Platform</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Infrastructure for agentic physical intelligence—from simulation to real-world deployment.
              </p>
              
              {/* Visual Flow */}
              <div className="flex flex-wrap items-center justify-center gap-3 lg:gap-4">
                {["Synthetic Worlds", "World Models", "Agentic Policies", "Real Robots"].map((step, index) => (
                  <div key={step} className="flex items-center gap-3 lg:gap-4">
                    <div className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
                      <span className="text-sm font-semibold text-primary whitespace-nowrap">{step}</span>
                    </div>
                    {index < 3 && (
                      <ArrowRight className="w-4 h-4 text-muted-foreground hidden sm:block" />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* 3 Visual Platform Blocks */}
        <section className="section-spacing bg-secondary/30">
          <div className="section-container">
            <div className="space-y-16">
              {platformBlocks.map((block, index) => (
                <motion.div
                  key={block.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center">
                        <block.icon className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-display text-2xl font-bold">{block.title}</h3>
                        <p className="text-primary font-medium text-sm">{block.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {block.description}
                    </p>
                    <ul className="space-y-3">
                      {block.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 flex-shrink-0">
                            <div className="w-2 h-2 rounded-full bg-primary" />
                          </div>
                          <span className="text-sm text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className="aspect-video bg-gradient-to-br from-primary/5 via-primary/10 to-accent/5 rounded-2xl border border-border flex items-center justify-center">
                      <block.icon className="w-20 h-20 text-primary/30" />
                    </div>
                  </div>
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

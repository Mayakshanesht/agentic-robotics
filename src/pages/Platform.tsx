import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PlatformAccessSection } from "@/components/PlatformAccessSection";
import { HeroStats } from "@/components/HeroStats";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Globe, Brain, Bot, Box, CheckCircle } from "lucide-react";

const platformSections = [
  {
    title: "Scalable Synthetic Data Generation",
    description: "Generate unlimited, high-quality synthetic data for training robotics models without the constraints and costs of real-world data collection.",
    icon: Globe,
    iconColor: "text-blue-500",
  },
  {
    title: "Better & Explainable Models",
    description: "Train advanced models that not only perform better but are also transparent and interpretable for enterprise deployment.",
    icon: Brain,
    iconColor: "text-purple-500",
  },
  {
    title: "Novel Agentic Architecture",
    description: "Build and deploy agent-based systems that can autonomously handle complex, multi-step tasks in dynamic environments.",
    icon: Bot,
    iconColor: "text-green-500",
  },
];

const capabilities = [
  "Unlimited synthetic data generation",
  "Explainable and interpretable models", 
  "Autonomous agentic task planning",
  "Direct robot deployment pipeline"
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
                The CloudBee <span className="text-gradient-teal">Platform</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Generate scalable synthetic data, train better and explainable models, build novel agentic architectures, and deploy directly to robots.
              </p>
              
              {/* Visual Flow */}
              <div className="flex flex-wrap items-center justify-center gap-3 lg:gap-4">
                {["Synthetic Data", "Model Training", "Agentic Architecture", "Robot Deployment"].map((step, index) => (
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

        {/* Platform Overview */}
        <section className="section-spacing bg-secondary/30">
          <div className="section-container">
            <HeroStats />
            <div className="space-y-16">
              {platformSections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <h2 className="font-display text-2xl lg:text-3xl font-bold mb-6">
                      {section.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {section.description}
                    </p>
                  </div>
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-border shadow-lg p-12 flex items-center justify-center">
                      <div className="text-center">
                        <div className={`w-24 h-24 mx-auto mb-6 rounded-2xl bg-background/50 backdrop-blur-sm border border-border flex items-center justify-center`}>
                          <section.icon className={`w-12 h-12 ${section.iconColor}`} />
                        </div>
                        <div className="space-y-2">
                          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent mx-auto"></div>
                          <div className="w-12 h-1 bg-gradient-to-r from-transparent via-primary/10 to-transparent mx-auto"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Capabilities */}
        <section className="py-20">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center mb-16"
            >
              <h2 className="font-display text-3xl lg:text-4xl font-bold mb-6">
                Built for <span className="text-gradient-teal">Scale</span>, Not Demos
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Traditional robotics pipelines struggle to scale across environments and use cases. CloudBee enables faster iteration and deployment where reliability matters most.
              </p>
            </motion.div>

            <div className="bg-gradient-to-r from-primary/5 to-green-accent/5 rounded-2xl p-8 border border-primary/20 max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                {capabilities.map((capability, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-accent flex-shrink-0" />
                    <span className="text-sm">{capability}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <PlatformAccessSection />
      </main>
      <Footer />
    </div>
  );
};

export default Platform;

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PlatformAccessSection } from "@/components/PlatformAccessSection";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Globe, Brain, Bot, Box } from "lucide-react";

const platformSections = [
  {
    title: "Synthetic World Generation",
    description: "Generate scalable, task-conditioned synthetic environments using natural language and structured priors—designed for training robust physical AI.",
    icon: Globe,
    iconColor: "text-blue-500",
  },
  {
    title: "Agentic Training for Long-Horizon Tasks",
    description: "Train world-aware agents that plan, reason, and adapt across long time horizons—beyond reactive policies.",
    icon: Brain,
    iconColor: "text-purple-500",
  },
  {
    title: "Deployment to Real Robots",
    description: "Seamlessly deploy trained policies to physical robots with robust sim-to-real transfer.",
    icon: Bot,
    iconColor: "text-green-500",
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
                The CloudBee <span className="text-gradient-teal">Platform</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                End-to-end infrastructure for training and deploying agentic physical AI.
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

        {/* Platform Sections with Images */}
        <section className="section-spacing bg-secondary/30">
          <div className="section-container">
            <div className="space-y-24">
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

        {/* Key Advantage Callout */}
        <section className="py-16 bg-primary/5 border-y border-primary/10">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-center gap-6 max-w-4xl mx-auto text-center md:text-left"
            >
              <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold mb-2">Key Advantage</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Synthetic, USD-native 4D data enables consistent world representations across simulation, training, and deployment.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <PlatformAccessSection />
      </main>
      <Footer />
    </div>
  );
};

export default Platform;

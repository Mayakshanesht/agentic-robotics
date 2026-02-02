import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionSection } from "@/components/SolutionSection";
import { motion } from "framer-motion";
import { AlertTriangle, TrendingUp, Zap, Shield } from "lucide-react";

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
                Technology Designed for <span className="text-gradient-teal">Robotics at Scale</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                CloudBee is built to solve the fundamental problems that prevent robotic systems from moving beyond narrow, controlled environments.
              </p>
            </motion.div>
          </div>
        </section>

        {/* The Challenge */}
        <section className="py-20 bg-secondary/30">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="font-display text-3xl lg:text-4xl font-bold mb-6">
                Why Traditional Approaches <span className="text-gradient-teal">Break Down</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  icon: AlertTriangle,
                  title: "Long-Horizon Tasks Fail",
                  description: "Complex robotic operations struggle in dynamic, real-world environments"
                },
                {
                  icon: TrendingUp,
                  title: "Data Collection is Slow",
                  description: "Real-world data gathering remains expensive and time-consuming"
                },
                {
                  icon: Zap,
                  title: "Poor Generalization",
                  description: "Systems fail to adapt across different scenarios and environments"
                }
              ].map((challenge, index) => (
                <motion.div
                  key={challenge.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-primary/10 flex items-center justify-center">
                    <challenge.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold mb-4">{challenge.title}</h3>
                  <p className="text-muted-foreground">{challenge.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-20">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center mb-16"
            >
              <h2 className="font-display text-3xl lg:text-4xl font-bold mb-6">
                A Unified Physical AI <span className="text-gradient-teal">Infrastructure</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                CloudBee provides a single infrastructure layer that supports the full lifecycle of intelligent robotic systems—from development to deployment.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Rather than stitching together disconnected tools, teams can focus on building reliable robotic behavior at scale.
              </p>
            </motion.div>

            <div className="bg-gradient-to-r from-primary/5 to-green-accent/5 rounded-2xl p-8 border border-primary/20">
              <h3 className="font-display text-2xl font-bold mb-8 text-center">What This Enables</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  "Faster iteration and deployment",
                  "More consistent real-world performance", 
                  "Reduced operational overhead",
                  "Lower development costs"
                ].map((outcome, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-green-accent flex-shrink-0" />
                    <span className="text-sm">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <ProblemSection />
        <SolutionSection />
      </main>
      <Footer />
    </div>
  );
};

export default Technology;

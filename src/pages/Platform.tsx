import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PlatformAccessSection } from "@/components/PlatformAccessSection";
import { WhyChooseSection } from "@/components/WhyChooseSection";
import { motion } from "framer-motion";
import { CheckCircle2, Zap, Shield, BarChart3 } from "lucide-react";

const platformFeatures = [
  {
    icon: Zap,
    title: "Rapid Deployment",
    description: "Go from concept to production in weeks, not months. Our platform handles the heavy lifting.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Built with security-first architecture. Your data and models remain fully protected.",
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description: "Real-time monitoring and analytics for your deployed robotic systems.",
  },
];

const Platform = () => {
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
                The <span className="text-gradient-teal">Platform</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A complete infrastructure for building, training, and deploying Physical AI 
                at enterprise scale.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Platform Features */}
        <section className="section-spacing">
          <div className="section-container">
            <div className="grid md:grid-cols-3 gap-8">
              {platformFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="border-gradient p-8 text-center"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center mb-6 mx-auto">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
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

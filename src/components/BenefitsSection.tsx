import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Database, 
  Shield, 
  Brain, 
  File, 
  Zap, 
  CheckCircle 
} from "lucide-react";

const benefits = [
  {
    icon: Database,
    title: "Scalable Synthetic Data",
    description: "Generate unlimited synthetic data for training without the constraints of real-world data collection",
    features: ["Unlimited data generation", "Cost-effective scaling", "Rapid iteration cycles", "Quality assurance"]
  },
  {
    icon: Shield,
    title: "Explainable Models",
    description: "Build models that are not only powerful but also transparent and trustworthy for enterprise deployment",
    features: ["Model interpretability", "Decision transparency", "Safety validation", "Compliance ready"]
  },
  {
    icon: Brain,
    title: "Agentic Architecture",
    description: "Create novel agent-based systems that can handle complex, multi-step tasks autonomously",
    features: ["Autonomous planning", "Multi-step reasoning", "Adaptive behavior", "Complex task handling"]
  },
  {
    icon: File,
    title: "Direct Robot Deployment",
    description: "Deploy trained models directly to physical robots with minimal integration overhead",
    features: ["One-click deployment", "Real-world ready", "Hardware agnostic", "Continuous operations"]
  }
];

export function BenefitsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Why CloudBee
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold mb-6 text-foreground">
            Why Robotics Still Doesn't <span className="text-gradient-teal">Scale</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Robotics development remains slow, expensive, and difficult to deploy at scale. Teams struggle with limited data, brittle systems, and long development cycles that delay real-world impact.
          </p>
          <p className="text-lg text-muted-foreground mt-4">
            CloudBee addresses these challenges with a unified platform to generate scalable synthetic data, train better and explainable models, build novel agentic architectures, and deploy directly to robots.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
              <div className="relative bg-card border border-border rounded-2xl p-8 h-full hover:border-primary/30 transition-all duration-300">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-bold mb-3 text-foreground">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {benefit.description}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {benefit.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3 justify-center">
                      <CheckCircle className="w-4 h-4 text-green-accent flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Performance Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary/5 to-green-accent/5 rounded-2xl p-8 border border-primary/20">
            <h3 className="font-display text-2xl font-bold mb-8 text-foreground">
              What We Enable
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">Significantly Faster</div>
                <div className="text-sm text-muted-foreground">Training & Iteration</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-accent mb-2">Strong Performance</div>
                <div className="text-sm text-muted-foreground">Real-World Deployment</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-accent mb-2">Enterprise Ready</div>
                <div className="text-sm text-muted-foreground">Built for Scale</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

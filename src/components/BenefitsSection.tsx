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
    description: "Generate unlimited synthetic data grounded in custom scenes with panorama and text input capabilities",
    features: ["Custom scene generation", "Panorama input support", "Text-to-scene conversion", "Unlimited scalability"]
  },
  {
    icon: Shield,
    title: "Enhanced Safety Layers",
    description: "Built-in safety mechanisms and validation layers ensuring reliable and secure robot operations",
    features: ["Real-time safety monitoring", "Collision avoidance", "Fail-safe mechanisms", "Compliance validation"]
  },
  {
    icon: Brain,
    title: "Agentic Task Planning",
    description: "Intelligent task decomposition and planning for solving complex robotics challenges autonomously",
    features: ["Complex task breakdown", "Autonomous decision making", "Multi-step planning", "Adaptive execution"]
  },
  {
    icon: File,
    title: "4D USD Format",
    description: "Universal Scene Description format with temporal data for seamless integration and deployment",
    features: ["4D temporal data", "USD compatibility", "Cross-platform support", "Easy deployment"]
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
            Key Capabilities
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold mb-6 text-foreground">
            Why Choose <span className="text-gradient-teal">CloudBee</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our platform delivers comprehensive solutions that address the most challenging aspects of robotics development and deployment.
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
                    <div key={featureIndex} className="flex items-center gap-3">
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
              Proven Performance
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">10x</div>
                <div className="text-sm text-muted-foreground">Faster Training</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-accent mb-2">95%</div>
                <div className="text-sm text-muted-foreground">Sim-to-Real Transfer</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-accent mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Enterprise Ready</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

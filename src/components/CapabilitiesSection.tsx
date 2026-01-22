import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Globe, Cpu, GitBranch, Rocket, Shield } from "lucide-react";

const capabilities = [
  {
    icon: Sparkles,
    title: "4D World Generation",
    description: "Generate realistic 3D environments with temporal dynamics. Physics-accurate simulations without expensive real-world data collection.",
  },
  {
    icon: Globe,
    title: "World-Aware Training",
    description: "Train models that understand physical interactions, object permanence, and long-term causal outcomes.",
  },
  {
    icon: Cpu,
    title: "Multi-Embodiment Support",
    description: "Support for various robot platforms and embodiments. One platform, any robot.",
  },
  {
    icon: GitBranch,
    title: "Long-Horizon Execution",
    description: "Execute complex multi-step tasks with built-in recovery mechanisms and real-time adaptation.",
  },
  {
    icon: Shield,
    title: "Safety-First Design",
    description: "Built-in safety constraints and failure recovery. Production-grade reliability from day one.",
  },
  {
    icon: Rocket,
    title: "Sim-to-Real Transfer",
    description: "Seamless transition from simulation to real hardware. Deployment-ready policies, not just research prototypes.",
  },
];

export function CapabilitiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-spacing relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Core Technology
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold mb-6">
            Platform <span className="text-gradient-teal">Capabilities</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Built for enterprise robotics teams who need reliable, scalable Physical AI infrastructure.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border-gradient p-8 group hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <capability.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">
                {capability.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {capability.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Globe, Cpu, GitBranch, Rocket } from "lucide-react";

const capabilities = [
  {
    icon: Sparkles,
    title: "Synthetic Scenario Generation",
    description: "Generate realistic robotic training environments automatically, without expensive teleoperation or real-world data collection.",
  },
  {
    icon: Globe,
    title: "World-Aware Model Training",
    description: "Train models that understand physical interactions, object dynamics, and long-term outcomes in complex environments.",
  },
  {
    icon: Cpu,
    title: "Task-Specific Execution Policies",
    description: "Support modern robotic policies across different robot embodiments and task types with flexible architecture.",
  },
  {
    icon: GitBranch,
    title: "Long-Horizon Task Execution",
    description: "Execute multi-step tasks with built-in recovery mechanisms and real-time adaptation to changing conditions.",
  },
  {
    icon: Rocket,
    title: "Deployment-Ready Output",
    description: "Prepare intelligence for real robots, not just simulation. Seamless transition from training to production deployment.",
  },
];

export function CapabilitiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-spacing relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      
      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-display text-3xl lg:text-4xl font-bold mb-6">
            Core <span className="text-gradient-teal">Capabilities</span>
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
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal/20 to-green-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <capability.icon className="w-7 h-7 text-teal" />
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

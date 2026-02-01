import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { AlertTriangle, Database, GitBranch, Puzzle, ArrowRight } from "lucide-react";

const challenges = [
  {
    icon: AlertTriangle,
    title: "Complex Tasks Break",
    description: "Long-horizon, multi-step robotic tasks fail under real-world uncertainty.",
  },
  {
    icon: Database,
    title: "Data Is the Bottleneck",
    description: "No internet-scale data. Each task costs €100k–€300k and months of iteration.",
  },
  {
    icon: GitBranch,
    title: "Models Don't Generalize",
    description: "Black-box foundation models collapse in unseen environments.",
  },
  {
    icon: Puzzle,
    title: "Fragmented Pipelines",
    description: "Simulation, training, and deployment remain disconnected.",
  },
];

export function ProblemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="challenge" className="section-spacing bg-secondary/30" ref={ref}>
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            The Challenge
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground">
            Robotics Doesn't Scale Like Software
          </h2>
        </motion.div>

        {/* Challenge Cards - Clean grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {challenges.map((challenge, index) => (
            <motion.div
              key={challenge.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-6 rounded-xl border border-border"
            >
              <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center mb-4">
                <challenge.icon className="w-5 h-5 text-destructive" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2 text-foreground">
                {challenge.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {challenge.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Our Solution */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-10">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
              Our Solution
            </span>
            <h3 className="font-display text-2xl lg:text-3xl font-bold mb-4 text-foreground">
              An End-to-End Agentic Physical AI Platform
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              CloudBee replaces fragmented robotics pipelines with a unified infrastructure that 
              generates synthetic 4D worlds, trains world-aware agents, and deploys robot-ready 
              skills automatically.
            </p>
          </div>

          {/* Visual Flow Diagram */}
          <div className="bg-card rounded-2xl border border-border p-8 lg:p-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-4">
              {[
                { label: "Synthetic Worlds", sublabel: "4D Generation" },
                { label: "World Models", sublabel: "Agentic Training" },
                { label: "Agentic Policies", sublabel: "Long-Horizon Planning" },
                { label: "Real Robots", sublabel: "Sim-to-Real Transfer" },
              ].map((step, index) => (
                <div key={step.label} className="flex items-center gap-4 lg:gap-3">
                  <div className="text-center">
                    <div className="w-16 h-16 lg:w-14 lg:h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center mb-2 mx-auto border border-primary/20">
                      <span className="text-primary font-bold text-lg">{index + 1}</span>
                    </div>
                    <p className="font-semibold text-sm text-foreground">{step.label}</p>
                    <p className="text-xs text-muted-foreground">{step.sublabel}</p>
                  </div>
                  {index < 3 && (
                    <ArrowRight className="w-5 h-5 text-primary hidden lg:block" />
                  )}
                </div>
              ))}
            </div>
          </div>

          <p className="text-center text-muted-foreground mt-8 text-sm">
            Infrastructure for agentic physical intelligence—from simulation to real-world deployment.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

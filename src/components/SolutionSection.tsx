import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Brain, Rocket, Layers } from "lucide-react";

const solutions = [
  {
    icon: Globe,
    title: "Synthetic World Generation",
    description: "Generate scalable, task-conditioned synthetic environments using natural language and structured priors.",
  },
  {
    icon: Brain,
    title: "Agentic Training",
    description: "Train world-aware agents capable of long-horizon planning, reasoning, and adaptation.",
  },
  {
    icon: Layers,
    title: "World Models & Foundation Models",
    description: "Better world models emerge from better worlds—not from more teleoperation.",
  },
  {
    icon: Rocket,
    title: "Real Robot Deployment",
    description: "Deploy trained policies to physical robots with robust sim-to-real transfer.",
  },
];

export function SolutionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="solution" className="section-spacing bg-background" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-8"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            The Solution
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold mb-6 text-foreground">
            End-to-End{" "}
            <span className="text-gradient-teal">AI Infrastructure</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-muted-foreground max-w-2xl mx-auto mb-16 leading-relaxed"
        >
          CloudBee provides unified infrastructure for building, training, and deploying 
          agentic physical AI—from synthetic worlds to real robots.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
              <div className="relative bg-card border border-border rounded-2xl p-6 h-full hover:border-primary/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <solution.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold mb-3 text-foreground">
                  {solution.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {solution.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

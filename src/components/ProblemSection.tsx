import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { AlertTriangle, Database, GitBranch, Puzzle } from "lucide-react";

const problems = [
  {
    icon: AlertTriangle,
    title: "Long-Horizon Task Failures",
    description: "Robots struggle with multi-step tasks requiring reasoning and real-world adaptation.",
  },
  {
    icon: Database,
    title: "Data Scarcity",
    description: "Teleoperation-based data collection is costly and unscalable. CloudBee generates synthetic 4D, USD-native data to train robust VLA models at scale.",
  },
  {
    icon: GitBranch,
    title: "Poor Generalization",
    description: "Models trained in narrow settings fail in new environments.",
  },
  {
    icon: Puzzle,
    title: "Fragmented Toolchains",
    description: "Simulation, training, and deployment systems do not integrate seamlessly.",
  },
];

export function ProblemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="problem" className="section-spacing bg-secondary/30" ref={ref}>
      <div className="section-container">
        {/* The Challenge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-8"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            The Challenge
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold mb-6 text-foreground">
            Why Robotics Still{" "}
            <span className="text-gradient-teal">Doesn't Scale</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-muted-foreground max-w-2xl mx-auto mb-16 leading-relaxed"
        >
          Robotics development remains slow, expensive, and fragmented.
          Long-horizon tasks fail not because of hardware—but due to missing scalable worlds, data, and reasoning.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-destructive/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
              <div className="relative bg-card border border-border rounded-2xl p-6 h-full hover:border-destructive/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-5">
                  <problem.icon className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="font-display text-lg font-bold mb-3 text-foreground">
                  {problem.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

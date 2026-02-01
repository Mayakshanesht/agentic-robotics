import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { AlertTriangle, Database, GitBranch, Puzzle } from "lucide-react";

const problems = [
  {
    icon: AlertTriangle,
    title: "Complex Task Failures",
    description: "Robots struggle with long-horizon, multi-step tasks that require reasoning and real-world adaptation.",
  },
  {
    icon: Database,
    title: "Data Bottleneck",
    description: "Robotics lacks internet-scale datasets. €100k–€300k per task, months of iteration.",
  },
  {
    icon: GitBranch,
    title: "Poor Generalization",
    description: "Foundation models are black-box and brittle — they fail in new environments.",
  },
  {
    icon: Puzzle,
    title: "Fragmented Toolchain",
    description: "Simulators, data tools, and deployment systems don't integrate seamlessly.",
  },
];

export function ProblemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="problem" className="section-spacing bg-secondary/30" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            The Challenge
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold mb-6 text-foreground">
            Robots Fail Because They Lack{" "}
            <span className="text-gradient-teal">Scalable Worlds</span> to Learn From
          </h2>
          <p className="text-lg text-muted-foreground">
            Building intelligent robots is still slow, expensive, and fragmented.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-professional"
            >
              <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center mb-4">
                <problem.icon className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2 text-foreground">
                {problem.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
            <span className="text-sm text-primary font-medium">Our Solution</span>
          </div>
          <h3 className="font-display text-2xl lg:text-3xl font-bold mb-4 text-foreground">
            End-to-End Agentic Physical AI Platform
          </h3>
          <p className="text-muted-foreground">
            CloudBee replaces fragmented pipelines with a single platform that generates 
            synthetic 4D worlds, trains world-aware AI, and deploys robot-ready skills automatically.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

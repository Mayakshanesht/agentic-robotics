import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { AlertTriangle, Database, GitBranch, Puzzle, ArrowRight } from "lucide-react";

const problems = [
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

const solutionSteps = [
  "Synthetic Worlds",
  "World Models", 
  "Agentic Policies",
  "Real Robots",
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
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            The Challenge
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold mb-6 text-foreground">
            Robotics Doesn't Scale{" "}
            <span className="text-gradient-teal">Like Software</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-professional"
            >
              <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center mb-5">
                <problem.icon className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="font-display text-lg font-bold mb-3 text-foreground">
                {problem.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Our Solution */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center max-w-4xl mx-auto"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Our Solution
          </span>
          <h3 className="font-display text-2xl lg:text-3xl font-bold mb-6 text-foreground">
            An End-to-End Agentic Physical AI Platform
          </h3>
          
          {/* Visual Flow */}
          <div className="flex flex-wrap items-center justify-center gap-3 lg:gap-4 mb-8">
            {solutionSteps.map((step, index) => (
              <div key={step} className="flex items-center gap-3 lg:gap-4">
                <div className="px-4 py-2 lg:px-6 lg:py-3 bg-primary/10 border border-primary/20 rounded-full">
                  <span className="text-sm lg:text-base font-semibold text-primary whitespace-nowrap">{step}</span>
                </div>
                {index < solutionSteps.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-muted-foreground hidden sm:block" />
                )}
              </div>
            ))}
          </div>

          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            CloudBee replaces fragmented robotics pipelines with a unified infrastructure that generates 
            synthetic 4D worlds, trains world-aware agents, and deploys robot-ready skills automatically.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

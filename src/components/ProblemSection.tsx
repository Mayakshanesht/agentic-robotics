import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { AlertTriangle, Database, GitBranch, Puzzle, ChevronRight } from "lucide-react";
import flowSyntheticWorlds from "@/assets/flow-synthetic-worlds.png";
import flowWorldModels from "@/assets/flow-world-models.png";
import flowAgenticPolicies from "@/assets/flow-agentic-policies.png";
import flowRealRobots from "@/assets/flow-real-robots.png";

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
  { title: "Synthetic Worlds", image: flowSyntheticWorlds },
  { title: "World Models", image: flowWorldModels },
  { title: "Agentic Policies", image: flowAgenticPolicies },
  { title: "Real Robots", image: flowRealRobots },
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-28">
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

        {/* Our Solution */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center max-w-5xl mx-auto"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Our Solution
          </span>
          <h3 className="font-display text-2xl lg:text-3xl font-bold mb-12 text-foreground">
            An End-to-End Agentic Physical AI Platform
          </h3>
          
          {/* Visual Flow with Images */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-10">
            {solutionSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="relative group"
              >
                <div className="aspect-square rounded-2xl overflow-hidden border border-border bg-card relative">
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="text-background text-sm lg:text-base font-semibold">{step.title}</span>
                  </div>
                </div>
                {index < solutionSteps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10">
                    <ChevronRight className="w-6 h-6 text-primary" />
                  </div>
                )}
              </motion.div>
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

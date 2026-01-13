import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { AlertCircle, RefreshCw, Layers } from "lucide-react";

const problems = [
  {
    icon: AlertCircle,
    title: "Training is Slow & Expensive",
    description: "Robotic training relies on manual teleoperation and real-world data collection, making iteration cycles prohibitively long.",
  },
  {
    icon: RefreshCw,
    title: "Models Fail in Reality",
    description: "Models trained in simulation often break in real environments due to the sim-to-real gap and unpredictable edge cases.",
  },
  {
    icon: Layers,
    title: "Deployment is Fragmented",
    description: "Each robot requires heavy re-engineering. There's no unified infrastructure connecting training to real-world deployment.",
  },
];

export function ProblemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="technology" className="section-spacing relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-display text-3xl lg:text-4xl font-bold mb-6">
            The Robotics Industry Has a{" "}
            <span className="text-gradient-teal">Fundamental Problem</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Building intelligent robots is still slow, expensive, and fragmented. 
            Every team reinvents the wheel.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="border-gradient p-8"
            >
              <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center mb-6">
                <problem.icon className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">
                {problem.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Solution Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal/10 rounded-full border border-teal/20 mb-8">
            <span className="text-sm text-teal font-medium">The Solution</span>
          </div>
          
          <h3 className="font-display text-2xl lg:text-3xl font-bold mb-6">
            CloudBee Robotics is a{" "}
            <span className="text-gradient-green">Unified Physical AI Infrastructure</span>
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We replace manual, fragmented robotics pipelines with a single platform 
            that generates synthetic training data, builds world-aware models, and 
            delivers deployment-ready intelligence to real robots.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

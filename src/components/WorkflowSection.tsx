import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import workflowImage from "@/assets/workflow.png";

const steps = [
  { number: "01", title: "Define Task", description: "Specify robotic tasks using natural language or structured inputs. No complex programming required." },
  { number: "02", title: "Generate 4D Worlds", description: "Automatically create realistic synthetic training environments with physics, objects, and temporal dynamics." },
  { number: "03", title: "Train World Models", description: "Train AI that understands physical interactions, object dynamics, and long-term outcomes." },
  { number: "04", title: "Deploy to Robots", description: "Export deployment-ready policies directly to real hardware. Seamless sim-to-real transfer." },
];

const metrics = [
  { value: "60-80%", label: "Faster Development" },
  { value: "50-70%", label: "Cost Reduction" },
  { value: "10x", label: "Faster Iteration" },
];

export function WorkflowSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-spacing relative overflow-hidden">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            How It Works
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold mb-6">
            From Task Definition to{" "}
            <span className="text-gradient-teal">Real-World Deployment</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A unified pipeline that takes you from concept to production-ready robot intelligence.
          </p>
        </motion.div>

        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-8 lg:gap-16 mb-16"
        >
          {metrics.map((metric) => (
            <div key={metric.label} className="text-center">
              <div className="font-display text-3xl lg:text-4xl font-bold text-gradient-teal">
                {metric.value}
              </div>
              <div className="text-sm text-muted-foreground mt-1">{metric.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Workflow Diagram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mb-20"
        >
          <div className="rounded-2xl overflow-hidden border border-border bg-card/50 backdrop-blur-sm p-4 lg:p-8">
            <img
              src={workflowImage}
              alt="CloudBee Robotics Workflow: From Task to Deployment"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="absolute -inset-8 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 rounded-3xl blur-3xl -z-10" />
        </motion.div>

        {/* Steps Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="relative group"
            >
              <div className="border-gradient p-6 h-full">
                <span className="font-display text-3xl font-bold text-gradient-teal">
                  {step.number}
                </span>
                <h3 className="font-display text-lg font-semibold mt-3 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

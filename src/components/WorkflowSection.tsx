import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import workflowImage from "@/assets/workflow.png";

const steps = [
  { number: "01", title: "Task Definition", description: "Define robotic tasks at a high level using natural language or structured inputs." },
  { number: "02", title: "Synthetic Generation", description: "Automatically generate realistic training scenarios without manual teleoperation." },
  { number: "03", title: "Model Training", description: "Train world-aware models that understand physics and long-term outcomes." },
  { number: "04", title: "Deployment", description: "Deploy intelligence directly to real robots, ready for production." },
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
          <h2 className="font-display text-3xl lg:text-4xl font-bold mb-6">
            From Task to Deployment —{" "}
            <span className="text-gradient-teal">End to End</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Of course this is how robotics should work. Define a task, generate training data, 
            train models, and deploy to real hardware.
          </p>
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
          <div className="absolute -inset-8 bg-gradient-to-r from-teal/5 via-transparent to-green-accent/5 rounded-3xl blur-3xl -z-10" />
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

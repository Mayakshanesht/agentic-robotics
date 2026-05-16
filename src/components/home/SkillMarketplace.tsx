import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Store, Wifi, MessageSquare, Boxes, PackageCheck } from "lucide-react";

const flow = [
  {
    icon: Wifi,
    step: "01",
    title: "Connect Your Robot",
    body: "Plug any humanoid, robotic arm, or AMR into CloudBee over the internet — Unitree, Figure, custom hardware. ROS 2 native.",
  },
  {
    icon: MessageSquare,
    step: "02",
    title: "Describe the Task",
    body: "Ask in natural language. AgentOS scopes the task, identifies missing skills, and triggers the pipeline automatically.",
  },
  {
    icon: Boxes,
    step: "03",
    title: "We Generate & Train",
    body: "DataForge synthesizes multimodal 4D data for the task; ModelLab trains and validates an explainable, safety-checked policy.",
  },
  {
    icon: PackageCheck,
    step: "04",
    title: "Download as ROS 2 Skill",
    body: "Get an agentic AI solution wrapped in a ROS 2 node — pushed directly to your robot, ready to run with safety contracts.",
  },
];

export function SkillMarketplace() {
  return (
    <section className="section-spacing relative overflow-hidden border-t border-border">
      <div className="absolute inset-0 bg-mesh opacity-50" />
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-5 rounded-full border border-accent-green/30 bg-accent-green/10 text-xs font-mono text-accent-green">
            <Store size={12} /> The Future · Skill Store for Robots
          </div>
          <h2 className="font-display font-bold text-3xl lg:text-5xl mb-4 leading-tight">
            Connect your robot. Ask for a task.{" "}
            <span className="text-gradient-blue">Get a skill.</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            CloudBee becomes the skill store for embodied AI — a closed loop from task prompt to a downloadable,
            safety-validated ROS 2 skill running on your robot.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {flow.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="glass-card p-6 relative"
              >
                <div className="absolute top-4 right-4 text-[10px] font-mono text-accent-blue/50">{f.step}</div>
                <div className="w-11 h-11 rounded-lg bg-accent-blue/10 text-accent-blue flex items-center justify-center mb-4">
                  <Icon size={20} />
                </div>
                <h3 className="font-display font-semibold text-base mb-2 text-foreground">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.body}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link to="/contact" className="inline-flex items-center gap-2 text-accent-blue font-semibold hover:gap-3 transition-all text-sm">
            Talk to us about early access <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}

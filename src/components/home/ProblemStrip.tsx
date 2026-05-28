import { motion } from "framer-motion";
import { Database, ShieldAlert, GitBranch, Rocket } from "lucide-react";

const items = [
  {
    icon: Database,
    title: "Data Bottleneck",
    metric: "Teleoperation",
    desc: "Teams burn months collecting human-teleoperated demos per task. We replace it with synthetic, multimodal 4D data — vision, tactile, force, LiDAR, proprioception — generated at scale.",
    color: "text-accent-blue",
  },
  {
    icon: ShieldAlert,
    title: "Black-Box Models",
    metric: "Unsafe to Ship",
    desc: "Most VLA stacks can't pass functional-safety validation. We build explainable models with traceable decisions — engineered for certification, not just demos.",
    color: "text-accent-green",
  },
  {
    icon: GitBranch,
    title: "Long-Horizon Tasks",
    metric: "Breaks at Scale",
    desc: "Stitching primitives breaks on multi-step, real-world goals. AgentOS plans, reasons, and recovers across long-horizon tasks with world-state memory.",
    color: "text-accent-blue",
  },
  {
    icon: Rocket,
    title: "Deployment Friction",
    metric: "Months → Days",
    desc: "Bespoke integration per robot kills velocity. Our runtime ships agentic policies as ROS 2 nodes — seamless deployment on any humanoid, arm, or AMR.",
    color: "text-accent-green",
  },
];

export function ProblemStrip() {
  return (
    <section className="relative section-spacing border-y border-border bg-surface/40">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full text-[10px] font-mono uppercase tracking-wider border border-accent-blue/30 bg-accent-blue/5 text-accent-blue">
            The Problem
          </div>
          <h2 className="font-display font-bold text-3xl lg:text-5xl mb-3">
            Four walls between robots and <span className="text-gradient-blue">real-world autonomy.</span>
          </h2>
          <p className="text-muted-foreground text-base mt-3">
            Data · safety · reasoning · integration — all solved in one platform.
          </p>

        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {items.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="glass-card p-6 text-left"
              >
                <div className={`w-11 h-11 rounded-lg bg-surface flex items-center justify-center mb-4 ${s.color}`}>
                  <Icon size={22} />
                </div>
                <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1">{s.title}</div>
                <div className={`font-display font-bold text-xl lg:text-2xl mb-2 ${s.color}`}>{s.metric}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            );
          })}
        </div>

        <p className="text-center text-lg lg:text-xl font-display font-medium text-foreground">
          One platform — from synthetic data to safe, explainable, deployable intelligence.{" "}
          <span className="text-gradient-green">CloudBee closes the loop.</span>
        </p>
      </div>
    </section>
  );
}

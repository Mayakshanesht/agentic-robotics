import { motion } from "framer-motion";
import { Hourglass, Coins, Target } from "lucide-react";

const items = [
  {
    icon: Hourglass,
    title: "Slow",
    metric: "6–12 months",
    desc: "of teleoperation data collection and per-task integration before a single deployment.",
    color: "text-accent-blue",
  },
  {
    icon: Coins,
    title: "Expensive",
    metric: "€100k–300k",
    desc: "per task in traditional robotics R&D — most of it spent on data and bespoke engineering.",
    color: "text-accent-green",
  },
  {
    icon: Target,
    title: "Brittle",
    metric: "70%+ failures",
    desc: "task-specific integrations that don't generalize — sim-to-real transfer breaks at scale.",
    color: "text-accent-blue",
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
            The Robotics <span className="text-gradient-blue">Deployment Gap.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {items.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="glass-card p-7 text-left"
              >
                <div className={`w-11 h-11 rounded-lg bg-surface flex items-center justify-center mb-4 ${s.color}`}>
                  <Icon size={22} />
                </div>
                <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1">{s.title}</div>
                <div className={`font-display font-bold text-2xl lg:text-3xl mb-2 ${s.color}`}>{s.metric}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            );
          })}
        </div>

        <p className="text-center text-lg lg:text-xl font-display font-medium text-foreground">
          Traditional robotics pipelines are broken. <span className="text-gradient-green">CloudBee changes this.</span>
        </p>
      </div>
    </section>
  );
}

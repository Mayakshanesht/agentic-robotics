import { motion } from "framer-motion";
import { X, Check, ArrowRight, Clock, Workflow, ShieldCheck, Boxes, Rocket, RefreshCw } from "lucide-react";

const hardWay = [
  { icon: Clock, t: "Months collecting real data" },
  { icon: Workflow, t: "Teleoperating robots by hand" },
  { icon: Boxes, t: "Building custom simulators" },
  { icon: RefreshCw, t: "Training & retraining endlessly" },
  { icon: ShieldCheck, t: "Safety bolted on at the end" },
];

const cloudbeeWay = [
  { icon: Workflow, t: "Compile capabilities from your process" },
  { icon: Boxes, t: "Generate synthetic experience at scale" },
  { icon: ShieldCheck, t: "Validate in closed-loop simulation" },
  { icon: Rocket, t: "Deploy to any robot, ROS 2-native" },
  { icon: RefreshCw, t: "Self-improve automatically via OTA" },
];

export function ProblemSolution() {
  return (
    <section className="relative py-28 lg:py-40 border-t border-border overflow-hidden bg-surface/30">
      <div className="absolute inset-0 grid-bg opacity-[0.06] pointer-events-none" />
      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-accent-blue/[0.06] blur-[150px] pointer-events-none" />

      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-accent-blue mb-4">
            The Problem · The Solution
          </div>
          <h2 className="font-display font-bold text-4xl lg:text-6xl leading-[1.0] tracking-tight">
            Physical AI is still built{" "}
            <span className="text-gradient-orange">the hard way.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            Teams burn months on the same broken loop - and most deployments still fail at the last mile.
            CloudBee Robotics turns that loop into one continuous, self-improving pipeline.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-6 items-center">
          {/* The hard way */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-destructive/25 bg-destructive/[0.04] p-7 lg:p-8 relative"
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-destructive/90">The hard way</span>
              <span className="h-px flex-1 bg-destructive/20" />
            </div>
            <ul className="space-y-3">
              {hardWay.map((p, i) => (
                <motion.li
                  key={p.t}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="flex items-center gap-3 rounded-xl border border-border/50 bg-background/40 px-4 py-3.5"
                >
                  <span className="shrink-0 w-8 h-8 rounded-lg bg-destructive/10 text-destructive/80 flex items-center justify-center">
                    <p.icon size={15} />
                  </span>
                  <span className="text-sm text-foreground/70 line-through decoration-destructive/40">{p.t}</span>
                  <X size={15} className="ml-auto text-destructive/50 shrink-0" />
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* transformation arrow */}
          <div className="flex lg:flex-col items-center justify-center gap-3 py-2">
            <div className="hidden lg:block w-px h-16 bg-gradient-to-b from-transparent to-accent-blue/40" />
            <div className="w-12 h-12 rounded-full border border-accent-blue/40 bg-background flex items-center justify-center text-accent-blue glow-blue">
              <ArrowRight size={20} className="lg:rotate-90" />
            </div>
            <div className="hidden lg:block w-px h-16 bg-gradient-to-t from-transparent to-accent-green/40" />
          </div>

          {/* The CloudBee Robotics way */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="card-3d border-gradient p-7 lg:p-8 relative"
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-accent-green">The CloudBee Robotics way</span>
              <span className="h-px flex-1 bg-accent-green/25" />
            </div>
            <ul className="space-y-3 relative">
              {/* connecting glow line */}
              <span className="absolute left-[15px] top-3 bottom-3 w-px bg-gradient-to-b from-accent-blue via-accent-green to-accent-blue opacity-40" />
              {cloudbeeWay.map((s, i) => (
                <motion.li
                  key={s.t}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.15 + i * 0.07 }}
                  className="flex items-center gap-3 relative"
                >
                  <span className="shrink-0 w-8 h-8 rounded-lg bg-accent-green/15 text-accent-green flex items-center justify-center ring-4 ring-background z-10">
                    <s.icon size={15} />
                  </span>
                  <span className="text-sm font-medium text-foreground">{s.t}</span>
                  <Check size={16} className="ml-auto text-accent-green shrink-0" />
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

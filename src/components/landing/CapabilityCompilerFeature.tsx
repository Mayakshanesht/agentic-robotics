import { motion } from "framer-motion";
import { Boxes, BrainCircuit, Network, ShieldCheck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const pillars = [
  {
    icon: Boxes,
    tag: "DataForge",
    title: "Multimodal synthetic experience at scale",
    body: "Generate production-quality training data from text, teleoperation, or video demonstrations — vision, depth, tactile and force, in hours.",
  },
  {
    icon: BrainCircuit,
    tag: "ModelLab",
    title: "Multimodal robot foundation models",
    body: "Train and fine-tune task-specialized models on your data — optimized for sim-to-real transfer and safety-critical validation.",
  },
  {
    icon: Network,
    tag: "AgenticOS",
    title: "Autonomous OS for long-horizon work",
    body: "Plan, execute and recover from failure autonomously. Self-improves across the fleet with every shift.",
  },
  {
    icon: ShieldCheck,
    tag: "KineBridge",
    title: "Safety-validated. One-click deployed.",
    body: "Grounded scene graphs, automated safety assessment and validated test cases in simulation — then a single click to real hardware.",
  },
];

export function CapabilityCompilerFeature() {
  return (
    <section id="what-we-do" className="relative py-28 lg:py-40 border-t border-border overflow-hidden">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[720px] h-[720px] rounded-full bg-accent-blue/10 blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-[0.04] pointer-events-none" />

      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-accent-blue mb-4">
            What we do
          </div>
          <h2 className="font-display font-bold text-4xl lg:text-6xl leading-[1.02] tracking-tight">
            One platform.{" "}
            <span className="text-gradient-blue">Every stage of a robot capability.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            From process description to a validated capability running on real hardware — modular,
            hardware-agnostic, and built for European industrial teams.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5 lg:gap-6">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative rounded-2xl border border-border bg-surface/40 p-7 lg:p-8 hover:border-accent-blue/40 transition-all hover:shadow-[0_20px_60px_-30px_hsl(210_100%_56%/0.35)]"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-11 h-11 rounded-xl border border-accent-blue/30 bg-accent-blue/10 flex items-center justify-center text-accent-blue">
                  <p.icon size={19} />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-muted-foreground">
                  {p.tag}
                </span>
              </div>
              <h3 className="font-display font-semibold text-xl lg:text-2xl text-foreground leading-tight">
                {p.title}
              </h3>
              <p className="mt-3 text-[15px] text-muted-foreground leading-relaxed">
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap items-center gap-x-6 gap-y-3">
          <Link
            to="/product"
            className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-[0.2em] text-accent-blue hover:gap-3 transition-all"
          >
            Explore the platform <ArrowRight size={14} />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-[0.2em] text-foreground/70 hover:text-foreground transition-colors"
          >
            Book a demo <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}

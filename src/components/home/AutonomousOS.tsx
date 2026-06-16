import { motion } from "framer-motion";

const loop = [
  { t: "Plan", d: "Decompose tasks against the capability graph." },
  { t: "Execute", d: "Run skills on robots, agents and operators." },
  { t: "Verify", d: "Check execution against validation scenarios." },
  { t: "Recover", d: "Fall back through known recovery paths." },
  { t: "Learn", d: "Feed outcomes back into the capability graph." },
];

export function AutonomousOS() {
  return (
    <section className="relative py-28 lg:py-40 border-t border-border">
      <div className="absolute -bottom-32 -left-20 w-[460px] h-[460px] rounded-full bg-accent-green/10 blur-[140px] pointer-events-none" />
      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-accent-blue mb-4">
            Autonomous OS
          </div>
          <h2 className="font-display font-bold text-4xl lg:text-6xl leading-[1.02] tracking-tight">
            Recursively self-correcting{" "}
            <span className="text-gradient-blue">autonomous systems.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            One runtime for robots, AI agents and human operators - long-horizon tasks with built-in recovery.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-3">
          {loop.map((s, i) => (
            <motion.div
              key={s.t}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="rounded-2xl border border-border bg-surface/40 p-6 relative"
            >
              <div className="text-[10px] font-mono text-accent-blue mb-2">{String(i + 1).padStart(2, "0")}</div>
              <div className="font-display font-semibold text-xl text-foreground">{s.t}</div>
              <div className="text-sm text-muted-foreground mt-2 leading-relaxed">{s.d}</div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-2 justify-center">
          {["Robots", "AI Agents", "Human Operators"].map((x) => (
            <span key={x} className="px-4 py-1.5 rounded-full border border-accent-blue/30 bg-accent-blue/5 text-sm font-mono uppercase tracking-wider text-accent-blue">
              {x}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

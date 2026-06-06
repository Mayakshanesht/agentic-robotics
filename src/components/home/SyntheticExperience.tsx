import { motion } from "framer-motion";

const sources = [
  { t: "Text Only", items: ["Workflow", "Process Description", "Task Specification"] },
  { t: "Text + Panorama", items: ["Environment Layout", "Object Locations", "World Models"] },
  { t: "Text + Demonstration Video", items: ["Action Sequences", "Task Flow", "Human Examples"] },
  { t: "Text + Teleoperation", items: ["Control Traces", "Operator Intent", "Execution Strategy"] },
];

const outputs = [
  "RGB", "Depth", "LiDAR", "Segmentation", "Actions", "Rewards", "Trajectories", "World States", "Failure Cases", "Recovery Cases",
];

export function SyntheticExperience() {
  return (
    <section className="relative py-28 lg:py-40 border-t border-border">
      <div className="absolute inset-0 grid-bg opacity-[0.08] pointer-events-none" />
      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-accent-blue mb-4">
            Multimodal Synthetic Experience
          </div>
          <h2 className="font-display font-bold text-4xl lg:text-6xl leading-[1.02] tracking-tight">
            Generate <span className="text-gradient-blue">training-ready experience.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            Not synthetic data. Experience — grounded in capabilities and validation scenarios, generated across modalities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 mb-10">
          {sources.map((s, i) => (
            <motion.div
              key={s.t}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="rounded-2xl border border-border bg-surface/40 p-6"
            >
              <div className="text-[11px] font-mono uppercase tracking-[0.22em] text-accent-blue mb-3">{s.t}</div>
              <div className="flex flex-wrap gap-2">
                {s.items.map((x) => (
                  <span key={x} className="px-3 py-1 rounded-full border border-border bg-background/60 text-sm text-foreground/90">{x}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="rounded-2xl border border-accent-blue/30 bg-accent-blue/[0.04] p-8">
          <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-accent-blue mb-4">Output modalities</div>
          <div className="flex flex-wrap gap-2">
            {outputs.map((o) => (
              <span key={o} className="px-3.5 py-1.5 rounded-full border border-accent-blue/30 bg-background/60 font-display text-sm text-foreground">{o}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

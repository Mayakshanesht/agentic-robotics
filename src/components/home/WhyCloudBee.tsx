import { motion } from "framer-motion";

const cards = [
  { t: "Process First", d: "We understand work before generating data." },
  { t: "Capability Engineering", d: "Reusable, composable capability graphs." },
  { t: "Safety Built In", d: "Constraints designed in, not bolted on." },
  { t: "Validation First", d: "Scenarios and edge cases before deployment." },
  { t: "Multimodal Experience", d: "Training-ready experience across modalities." },
  { t: "Continuous Improvement", d: "Every run strengthens the next." },
];

export function WhyCloudBee() {
  return (
    <section className="relative py-28 lg:py-36 border-t border-border">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-14"
        >
          <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-accent-blue mb-4">
            Why CloudBee
          </div>
          <h2 className="font-display font-bold text-4xl lg:text-6xl leading-[1.02] tracking-tight">
            Why teams choose{" "}
            <span className="text-gradient-blue">CloudBee.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards.map((c, i) => (
            <motion.div
              key={c.t}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="rounded-2xl border border-border bg-surface/40 p-7 hover:border-accent-blue/40 transition-colors"
            >
              <div className="font-display font-semibold text-xl text-foreground">{c.t}</div>
              <div className="text-sm text-muted-foreground mt-2 leading-relaxed">{c.d}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

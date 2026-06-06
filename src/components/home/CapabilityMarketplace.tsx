import { motion } from "framer-motion";

const packages = ["Warehouse Picking", "Inspection", "Palletizing", "Sorting", "Welding", "Assembly"];
const contents = ["Capability Graph", "Safety Package", "Validation Suite", "Synthetic Experience", "Models", "Deployment Package"];

export function CapabilityMarketplace() {
  return (
    <section className="relative py-28 lg:py-36 border-t border-border bg-surface/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-14"
        >
          <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-accent-blue mb-4">
            What's Next
          </div>
          <h2 className="font-display font-bold text-4xl lg:text-6xl leading-[1.02] tracking-tight">
            The future{" "}
            <span className="text-gradient-blue">capability marketplace.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            Today, CloudBee is the capability engineering platform. Tomorrow, it's the marketplace — like software for Physical AI.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {packages.map((p, i) => (
            <motion.div
              key={p}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl border border-border bg-background/60 p-6 hover:border-accent-blue/40 transition-colors"
            >
              <div className="text-[10px] font-mono text-accent-blue mb-1">PKG / {String(i + 1).padStart(2, "0")}</div>
              <div className="font-display font-semibold text-xl text-foreground">{p}</div>
            </motion.div>
          ))}
        </div>

        <div className="rounded-2xl border border-accent-blue/30 bg-accent-blue/[0.04] p-8">
          <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-accent-blue mb-4">Every package contains</div>
          <div className="flex flex-wrap gap-2">
            {contents.map((c) => (
              <span key={c} className="px-3.5 py-1.5 rounded-full border border-accent-blue/30 bg-background/60 font-display text-sm text-foreground">{c}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

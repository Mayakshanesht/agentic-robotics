import { motion } from "framer-motion";

const warehouse = ["Picking", "Sorting", "Palletizing", "Depalletizing", "Container Unloading"];
const industrial = ["Assembly", "Welding", "Soldering", "Inspection", "Packaging", "Material Handling"];

export function IndustrialFocus() {
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
            Industrial Automation Focus
          </div>
          <h2 className="font-display font-bold text-4xl lg:text-6xl leading-[1.02] tracking-tight">
            Purpose-built for warehousing &{" "}
            <span className="text-gradient-blue">industrial automation.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            Capability engineering infrastructure for the workflows that move the physical economy.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          <Block title="Warehouse Operations" items={warehouse} />
          <Block title="Industrial Automation" items={industrial} />
        </div>
      </div>
    </section>
  );
}

function Block({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-border bg-background/60 p-8">
      <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-accent-blue mb-5">{title}</div>
      <div className="flex flex-wrap gap-2">
        {items.map((x) => (
          <span key={x} className="px-4 py-2 rounded-full border border-border bg-surface/60 font-display text-base text-foreground/90">{x}</span>
        ))}
      </div>
    </div>
  );
}

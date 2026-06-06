import { motion } from "framer-motion";

const incorporated = [
  "Industrial Safety Standards",
  "Warehouse Safety Rules",
  "Operational Constraints",
  "Compliance Policies",
  "Deployment Requirements",
];

const examples = [
  "Human Proximity Constraints",
  "Forklift Interaction Rules",
  "Restricted Zones",
  "Load Limits",
  "Machine Safety Requirements",
];

export function ComplianceIntelligence() {
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
            Compliance Intelligence
          </div>
          <h2 className="font-display font-bold text-4xl lg:text-6xl leading-[1.02] tracking-tight">
            Built-in safety &{" "}
            <span className="text-gradient-blue">compliance intelligence.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            Rules, standards and constraints are encoded into the capability graph before training begins.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          <Card title="Incorporated standards" items={incorporated} />
          <Card title="Example constraints" items={examples} />
        </div>
      </div>
    </section>
  );
}

function Card({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-border bg-background/60 p-8">
      <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-accent-blue mb-5">{title}</div>
      <ul className="space-y-2">
        {items.map((x) => (
          <li key={x} className="flex items-center gap-3 py-2.5 border-b border-border/40 last:border-0 font-display text-base lg:text-lg text-foreground/90">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-green" /> {x}
          </li>
        ))}
      </ul>
    </div>
  );
}

import { motion } from "framer-motion";
import { factsToday, targets } from "@/data/company";

function MetricRow({
  label,
  note,
  items,
  gradient,
}: {
  label: string;
  note: string;
  items: { big: string; small: string }[];
  gradient: string;
}) {
  return (
    <div>
      <div className="mb-6 flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-accent-blue">{label}</span>
        <span className="text-xs text-muted-foreground">{note}</span>
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
        {items.map((m, i) => (
          <motion.div
            key={m.small}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="min-w-0"
          >
            <div className={`font-display font-bold text-4xl sm:text-5xl tracking-tight leading-none break-words ${gradient}`}>
              {m.big}
            </div>
            <div className="mt-3 text-sm text-muted-foreground leading-relaxed">{m.small}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function Metrics() {
  return (
    <section className="relative py-20 lg:py-28 border-t border-border">
      <div className="section-container space-y-14">
        <MetricRow label="Today" note="Verifiable now." items={factsToday} gradient="text-gradient-blue" />
        <MetricRow
          label="Targets"
          note="What we are building towards — goals, not achieved results."
          items={targets}
          gradient="text-gradient-green"
        />
      </div>
    </section>
  );
}

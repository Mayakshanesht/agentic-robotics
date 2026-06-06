import { motion } from "framer-motion";

const others = ["Data", "Models", "Agents", "Robots"];
const cloudbee = ["Capability Graphs", "Safety Graphs", "Validation Graphs", "Execution Intelligence"];

export function InvestorSection() {
  return (
    <section className="relative py-28 lg:py-40 border-t border-border">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-accent-blue mb-4">
            For Investors
          </div>
          <h2 className="font-display font-bold text-4xl lg:text-6xl leading-[1.02] tracking-tight">
            Building the infrastructure layer for{" "}
            <span className="text-gradient-blue">Physical AI.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-border bg-surface/40 p-8">
            <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-muted-foreground mb-5">Most companies focus on</div>
            <div className="flex flex-wrap gap-2">
              {others.map((o) => (
                <span key={o} className="px-4 py-2 rounded-full border border-border bg-background/60 font-display text-base text-foreground/80">{o}</span>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-accent-blue/30 bg-accent-blue/[0.04] p-8">
            <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-accent-blue mb-5">CloudBee focuses on capabilities</div>
            <div className="flex flex-wrap gap-2">
              {cloudbee.map((c) => (
                <span key={c} className="px-4 py-2 rounded-full border border-accent-blue/30 bg-background/60 font-display text-base text-foreground">{c}</span>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-10 text-center text-muted-foreground max-w-2xl mx-auto">
          Every workflow expands the platform. Every customer strengthens the moat.
        </p>
      </div>
    </section>
  );
}

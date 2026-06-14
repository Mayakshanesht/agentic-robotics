import { motion } from "framer-motion";

const vocational = ["Welder", "Assembler", "Inspector", "Material Handler", "Fitter"];
const capabilities = ["Weld", "Inspect", "Align", "Pick", "Place", "Transport", "Verify"];

export function WorkforceAnalogy() {
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
            Workforce Analogy
          </div>
          <h2 className="font-display font-bold text-4xl lg:text-6xl leading-[1.02] tracking-tight">
            A process is not a capability.{" "}
            <span className="text-gradient-blue">A process is a collection of them.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="rounded-2xl border border-border bg-background/40 p-8">
            <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-muted-foreground mb-5">
              Vocational Skills
            </div>
            <div className="flex flex-wrap gap-2">
              {vocational.map((v) => (
                <span key={v} className="px-4 py-2 rounded-full border border-border bg-surface/60 font-display text-base text-foreground/85">
                  {v}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-accent-blue/30 bg-accent-blue/[0.04] p-8">
            <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-accent-blue mb-5">
              Capability Graph
            </div>
            <div className="flex flex-wrap gap-2">
              {capabilities.map((c) => (
                <span key={c} className="px-4 py-2 rounded-full border border-accent-blue/30 bg-background/60 font-display text-base text-foreground">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-10 text-center text-muted-foreground max-w-2xl mx-auto">
          CloudBee Robotics converts industrial workflows into reusable capability graphs that compose, validate and improve.
        </p>
      </div>
    </section>
  );
}

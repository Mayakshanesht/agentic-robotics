import { motion } from "framer-motion";

const inputs = [
  "Task Descriptions",
  "Workflows & SOPs",
  "Demonstrations",
  "Images & Video",
];

const outputs = [
  "Structured Process Understanding",
  "Executable Capabilities",
  "Safety & Validation Envelope",
  "Autonomous Workflows",
];

export function CapabilityCompiler() {
  return (
    <section className="relative py-28 lg:py-40 border-t border-border overflow-hidden">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-accent-blue/10 blur-[160px] pointer-events-none" />
      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-accent-blue mb-4">
            Flagship · Capability Compiler
          </div>
          <h2 className="font-display font-bold text-4xl lg:text-6xl leading-[1.02] tracking-tight">
            Turn processes into{" "}
            <span className="text-gradient-blue">capabilities.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            CloudBee Robotics understands processes before generating experience. The Capability Compiler converts raw work into a structured graph the rest of the platform can reason about.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_auto_1fr] items-stretch gap-8 lg:gap-12">
          <Panel title="Inputs" items={inputs} tone="muted" />

          <div className="hidden lg:flex flex-col items-center justify-center">
            <div className="w-px flex-1 bg-gradient-to-b from-transparent via-accent-blue/60 to-transparent" />
            <div className="my-4 w-12 h-12 rounded-full border border-accent-blue/40 bg-background flex items-center justify-center text-accent-blue font-mono text-xs">
              CC
            </div>
            <div className="w-px flex-1 bg-gradient-to-b from-accent-blue/60 via-accent-green/60 to-transparent" />
          </div>

          <Panel title="Outputs" items={outputs} tone="blue" />
        </div>
      </div>
    </section>
  );
}

function Panel({ title, items, tone }: { title: string; items: string[]; tone: "muted" | "blue" }) {
  const isBlue = tone === "blue";
  return (
    <div
      className={`rounded-2xl border p-8 ${
        isBlue ? "border-accent-blue/30 bg-accent-blue/[0.04]" : "border-border bg-surface/40"
      }`}
    >
      <div className={`text-[11px] font-mono uppercase tracking-[0.25em] mb-6 ${isBlue ? "text-accent-blue" : "text-muted-foreground"}`}>
        {title}
      </div>
      <ul className="space-y-2">
        {items.map((x, i) => (
          <motion.li
            key={x}
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.03 }}
            className="flex items-center gap-3 py-2 border-b border-border/40 last:border-0"
          >
            <span className={`w-1 h-1 rounded-full ${isBlue ? "bg-accent-blue" : "bg-muted-foreground/60"}`} />
            <span className="font-display text-base lg:text-lg text-foreground/90">{x}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

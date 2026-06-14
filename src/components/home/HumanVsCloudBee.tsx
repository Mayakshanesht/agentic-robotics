import { motion } from "framer-motion";

const human = ["Vocational Training", "Engineering Review", "Work Experience", "Deployment"];
const cloudbee = [
  "Capability Graph",
  "Safety & Validation",
  "Synthetic Experience",
  "Foundation Models",
  "Autonomous Systems",
];

export function HumanVsCloudBee() {
  return (
    <section className="relative py-28 lg:py-36 border-t border-border">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-accent-blue mb-4">
            How Capabilities Are Created
          </div>
          <h2 className="font-display font-bold text-4xl lg:text-6xl leading-[1.02] tracking-tight">
            Humans learn before they work.{" "}
            <span className="text-gradient-blue">Physical AI should too.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            Human workers gain capabilities before experience. CloudBee Robotics applies the same principle to robots and agents.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          <Column title="Human Workforce" steps={human} accent="muted" />
          <Column title="CloudBee Robotics" steps={cloudbee} accent="blue" />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 text-center text-sm font-mono uppercase tracking-[0.2em] text-muted-foreground"
        >
          Before training begins, CloudBee Robotics understands the work itself.
        </motion.p>
      </div>
    </section>
  );
}

function Column({ title, steps, accent }: { title: string; steps: string[]; accent: "muted" | "blue" }) {
  const isBlue = accent === "blue";
  return (
    <div
      className={`rounded-2xl border p-8 lg:p-10 ${
        isBlue ? "border-accent-blue/30 bg-accent-blue/[0.04]" : "border-border bg-surface/40"
      }`}
    >
      <div className={`text-[11px] font-mono uppercase tracking-[0.25em] mb-6 ${isBlue ? "text-accent-blue" : "text-muted-foreground"}`}>
        {title}
      </div>
      <ol className="space-y-3">
        {steps.map((s, i) => (
          <li key={s} className="flex items-center gap-4">
            <span
              className={`shrink-0 w-7 h-7 rounded-full border flex items-center justify-center text-[10px] font-mono ${
                isBlue ? "border-accent-blue/40 text-accent-blue" : "border-border text-muted-foreground"
              }`}
            >
              {i + 1}
            </span>
            <span className={`font-display text-lg lg:text-xl ${isBlue ? "text-foreground" : "text-foreground/80"}`}>{s}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

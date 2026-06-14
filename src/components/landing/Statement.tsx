import { motion } from "framer-motion";

const steps = [
  { n: "01", word: "Describe", sub: "A task, in plain language." },
  { n: "02", word: "Generate", sub: "Synthetic experience + trained policy." },
  { n: "03", word: "Deploy", sub: "A fleet that improves itself." },
];

export function Statement() {
  return (
    <section className="relative py-32 lg:py-48 border-t border-border overflow-hidden">
      <div className="section-container relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="font-display font-bold text-center mx-auto max-w-4xl text-4xl sm:text-6xl lg:text-7xl leading-[1.0] tracking-tight"
        >
          From a sentence to a{" "}
          <span className="text-gradient-mixed">self-improving fleet.</span>
        </motion.h2>

        <div className="mt-24 grid md:grid-cols-3 gap-px bg-border/60 rounded-3xl overflow-hidden border border-border">
          {steps.map((s, i) => (
            <motion.div
              key={s.word}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="bg-background px-8 py-14 lg:py-20 text-center relative group"
            >
              <div className="text-[11px] font-mono tracking-[0.3em] text-accent-blue mb-6">{s.n}</div>
              <div className="font-display font-bold text-4xl lg:text-6xl tracking-tight text-foreground group-hover:text-gradient-blue transition-all">
                {s.word}
              </div>
              <div className="mt-4 text-sm lg:text-base text-muted-foreground">{s.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => `${prefix}${Math.round(v).toLocaleString()}${suffix}`);

  useEffect(() => {
    if (inView) animate(mv, value, { duration: 1.6, ease: "easeOut" });
  }, [inView, value, mv]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

const stats = [
  { label: "average cost per robot task", node: <><span className="font-mono">€</span>100k–300k</>, color: "text-accent-blue" },
  { label: "typical deployment time", node: <>6–12 mo</>, color: "text-accent-green" },
  { label: "sim-to-real transfer failures in the industry", node: <><Counter value={70} suffix="%+" /></>, color: "text-accent-blue" },
];

export function ProblemStrip() {
  return (
    <section className="relative section-spacing border-y border-border bg-surface/40">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="section-container relative">
        <div className="grid md:grid-cols-3 gap-10 lg:gap-16 mb-8">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="text-center md:text-left"
            >
              <div className={`font-display font-bold text-4xl lg:text-5xl mb-3 ${s.color}`}>
                {s.node}
              </div>
              <div className="text-sm text-muted-foreground leading-relaxed">{s.label}</div>
            </motion.div>
          ))}
        </div>
        <p className="text-center text-lg lg:text-xl font-display font-medium text-foreground">
          We built CloudBee to eliminate all three.
        </p>
      </div>
    </section>
  );
}

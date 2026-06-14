import { motion } from "framer-motion";

const metrics = [
  { big: "Days", small: "to onboard a new robot — not months" },
  { big: "10×", small: "less real-world data via synthetic experience" },
  { big: "ROS 2", small: "native · hardware-agnostic by design" },
  { big: "24/7", small: "self-improving via the OTA loop" },
];

export function Metrics() {
  return (
    <section className="relative py-24 lg:py-32 border-t border-border">
      <div className="section-container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {metrics.map((m, i) => (
            <motion.div
              key={m.big}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center lg:text-left"
            >
              <div className="font-display font-bold text-5xl lg:text-6xl tracking-tight text-gradient-blue">
                {m.big}
              </div>
              <div className="mt-3 text-sm text-muted-foreground max-w-[16rem] mx-auto lg:mx-0">
                {m.small}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

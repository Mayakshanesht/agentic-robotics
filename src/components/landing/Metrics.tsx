import { motion } from "framer-motion";

const metrics = [
  { big: "5×", small: "cheaper than traditional teleoperation & training" },
  { big: "3–4 wks", small: "from task description to deployed capability" },
  { big: "1", small: "engineer to ship — no in-house robotics team required" },
  { big: "ROS 2", small: "native · hardware-agnostic · EU-sovereign" },
];

export function Metrics() {
  return (
    <section className="relative py-20 lg:py-28 border-t border-border">
      <div className="section-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-x-8 sm:gap-y-12">
          {metrics.map((m, i) => (
            <motion.div
              key={m.big}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center sm:text-left min-w-0"
            >
              <div className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-gradient-blue leading-none break-words">
                {m.big}
              </div>
              <div className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {m.small}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

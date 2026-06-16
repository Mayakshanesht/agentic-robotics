import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const items = [
  "EXIST Gründungsstipendium - Secured, starts May 2026 (Federal Ministry of Economic Affairs)",
  "Academic Mentor - Prof. Dr. Bastian Leibe, RWTH Aachen Computer Vision Group",
  "RWTH Innovation Ideation Program - Completed (March 2026)",
  "Deloitte Problem-Solution Fit - Completed",
  "Research Collaboration - IGMR Institute, RWTH Aachen",
  "Functional prototype operational - pilots underway",
];

export function Traction() {
  return (
    <section className="section-spacing">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-display font-bold text-3xl lg:text-4xl text-center mb-3"
        >
          <span className="text-gradient-green">Momentum</span>
        </motion.h2>
        <p className="text-center text-muted-foreground mb-12">
          We're building in the open - with the right partners.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {items.map((it, i) => (
            <motion.div
              key={it}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="glass-card p-5 flex items-start gap-3"
            >
              <CheckCircle2 size={18} className="text-accent-green shrink-0 mt-0.5" />
              <span className="text-sm text-foreground leading-snug">{it}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

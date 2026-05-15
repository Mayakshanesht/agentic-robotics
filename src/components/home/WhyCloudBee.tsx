import { motion } from "framer-motion";
import { TrendingDown, Zap, Layers, ShieldCheck, Repeat } from "lucide-react";

const items = [
  { icon: TrendingDown, label: "60–80% lower development cost" },
  { icon: Zap, label: "Weeks to deploy, not months" },
  { icon: Layers, label: "Scalable across robots & environments" },
  { icon: Repeat, label: "Reliable sim-to-real performance" },
  { icon: ShieldCheck, label: "EU AI Act–ready safety by design" },
];

export function WhyCloudBee() {
  return (
    <section className="section-spacing border-t border-border">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-display font-bold text-3xl lg:text-4xl text-center mb-12"
        >
          Why <span className="text-gradient-blue">CloudBee</span>
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <motion.div
                key={it.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="glass-card p-5 text-center"
              >
                <div className="w-10 h-10 rounded-lg bg-accent-blue/10 text-accent-blue flex items-center justify-center mx-auto mb-3">
                  <Icon size={18} />
                </div>
                <div className="text-sm text-foreground font-medium leading-snug">{it.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

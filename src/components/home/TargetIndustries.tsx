import { motion } from "framer-motion";
import { Factory, Bot, HeartPulse, Car, Sparkles } from "lucide-react";

const industries = [
  { icon: Car, title: "Automotive & Mobility", body: "Robotic cells for assembly, kitting, and inline QA across automotive manufacturing." },
  { icon: Factory, title: "Industrial Manufacturing", body: "Automate complex assembly, material handling, and logistics tasks." },
  { icon: Bot, title: "Humanoid Robotics", body: "Onboard humanoids fast with custom skill stacks and safety constraints." },
  { icon: HeartPulse, title: "Healthcare & Assisted Living", body: "Reliable, safe robots in sensitive environments." },
  { icon: Sparkles, title: "Service Robotics", body: "From task spec to live deployment, autonomously." },
];

export function TargetIndustries() {
  return (
    <section className="section-spacing bg-surface/40 border-y border-border">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-display font-bold text-3xl lg:text-4xl text-center mb-12"
        >
          Built for <span className="text-gradient-blue">Real-World Deployments</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {industries.map((it, i) => {
            const Icon = it.icon;
            return (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="glass-card p-6"
              >
                <div className="w-10 h-10 rounded-lg bg-accent-green/10 text-accent-green flex items-center justify-center mb-4">
                  <Icon size={18} />
                </div>
                <h3 className="font-display font-semibold text-base mb-2 text-foreground">{it.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{it.body}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

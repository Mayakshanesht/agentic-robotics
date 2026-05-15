import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Store, Download, Sparkles, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Download,
    title: "Install Skills On-Demand",
    body: "Humanoids and robots fetch pre-validated skills from a curated catalog — the way modern devices install apps.",
  },
  {
    icon: Sparkles,
    title: "Generate New Skills Live",
    body: "Describe a task in natural language; AgentOS composes new skills in real time from primitives in the marketplace.",
  },
  {
    icon: ShieldCheck,
    title: "Safety-Guaranteed Execution",
    body: "Every skill ships with safety contracts. AgentOS enforces constraints at runtime, so complex behavior stays inside guarded limits.",
  },
];

export function SkillMarketplace() {
  return (
    <section className="section-spacing relative overflow-hidden border-t border-border">
      <div className="absolute inset-0 bg-mesh opacity-50" />
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-5 rounded-full border border-accent-green/30 bg-accent-green/10 text-xs font-mono text-accent-green">
            <Store size={12} /> Coming · Skill Marketplace
          </div>
          <h2 className="font-display font-bold text-3xl lg:text-5xl mb-4 leading-tight">
            An <span className="text-gradient-blue">App Store</span> for Robot Skills.
          </h2>
          <p className="text-muted-foreground text-lg">
            Our autonomous AgentOS lets humanoids download capabilities — or generate them on the fly —
            and execute complex tasks with strong safety guarantees by design.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="glass-card p-6"
              >
                <div className="w-11 h-11 rounded-lg bg-accent-blue/10 text-accent-blue flex items-center justify-center mb-4">
                  <Icon size={20} />
                </div>
                <h3 className="font-display font-semibold text-base mb-2 text-foreground">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.body}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link to="/contact" className="inline-flex items-center gap-2 text-accent-blue font-semibold hover:gap-3 transition-all text-sm">
            Talk to us about early access <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}

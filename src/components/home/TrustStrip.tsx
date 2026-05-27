import { motion } from "framer-motion";
import { Award, GraduationCap, Briefcase, Building2, Landmark } from "lucide-react";

const items = [
  { icon: Award, label: "EXIST Research Transfer Grant", sub: "BMWK · German Federal Ministry" },
  { icon: GraduationCap, label: "RWTH Aachen", sub: "Innovation Ideation Graduate" },
  { icon: Briefcase, label: "Deloitte PSF", sub: "Problem–Solution Fit complete" },
  { icon: Building2, label: "Collective Incubator", sub: "Aachen, Germany" },
  { icon: Landmark, label: "Fraunhofer IML · FEV · Haver & Boecker", sub: "Industry Letters of Intent" },
];

export function TrustStrip() {
  return (
    <section className="relative border-y border-border bg-surface/30 py-8">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
            Backed · Funded · Validated
          </div>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <motion.div
                key={it.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="flex items-center gap-3 px-4 py-3 rounded-lg border border-border bg-background/60 hover:border-accent-blue/40 transition-colors"
              >
                <div className="w-9 h-9 rounded-md bg-accent-blue/10 text-accent-blue flex items-center justify-center shrink-0">
                  <Icon size={16} />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-semibold text-foreground truncate">{it.label}</div>
                  <div className="text-[10px] font-mono text-muted-foreground/80 truncate">{it.sub}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

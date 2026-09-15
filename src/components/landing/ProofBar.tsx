import { motion } from "framer-motion";
import { Bot, Building2, Landmark } from "lucide-react";
import { pilotRobots } from "@/data/company";

/** Verifiable traction directly under the hero: pilots, platforms, lab, grants. */
export function ProofBar() {
  return (
    <section className="relative border-b border-border bg-surface/60">
      <div className="section-container py-6 lg:py-7">
        <div className="grid gap-5 lg:grid-cols-[auto_1fr_auto] lg:items-center lg:gap-10">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-green opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent-green" />
            </span>
            <span className="font-display font-semibold text-foreground">Pilots running with industrial customers</span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-1 text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">On</span>
            {pilotRobots.map((r, i) => (
              <motion.span
                key={r.name}
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.35 }}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1.5 text-sm text-foreground"
              >
                <Bot size={13} className="text-accent-blue" /> {r.name}
              </motion.span>
            ))}
          </div>

          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <Building2 size={14} className="text-accent-green" /> Own hardware lab · Collective Incubator
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Landmark size={14} className="text-accent-green" /> EXIST · WestAI
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

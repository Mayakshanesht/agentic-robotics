import { motion } from "framer-motion";
import { CheckCircle2, Circle, Loader2 } from "lucide-react";

type Status = "done" | "active" | "next";

const events: { date: string; title: string; body: string; status: Status }[] = [
  {
    date: "Sep 2025",
    title: "Deloitte Problem–Solution Fit · RWTH Innovation Ideation",
    body: "Full PSF cycle completed with Deloitte mentors. Validated infrastructure-layer positioning with industry partners.",
    status: "done",
  },
  {
    date: "Dec 2025",
    title: "Industry Letters of Intent",
    body: "Signed LOIs with a Tier-1 Automotive Partner, an Industrial Automation Partner, and a European Manufacturing Partner — covering manipulation, inspection, and logistics.",
    status: "done",
  },
  {
    date: "Q1 2026",
    title: "EXIST Gründungstipendium secured",
    body: "Backed by the German Federal Ministry for Economic Affairs and Climate Action to build CloudBee Robotics out of RWTH Aachen.",
    status: "done",
  },
  {
    date: "Q2 2026",
    title: "DataForge v0.1 · AgentOS preview",
    body: "Text-to-4D synthetic data generation MVP. AgentOS runtime running long-horizon tasks on Unitree, custom arms, and AMRs.",
    status: "active",
  },
  {
    date: "Q3 2026",
    title: "First pilot deployments",
    body: "Closed pilots with industrial partners. ModelLab beta — explainable VLA training on multimodal pilot data.",
    status: "next",
  },
  {
    date: "Q4 2026",
    title: "Skill Store public beta",
    body: "Describe a task, get a ROS 2 skill. Public closed-loop release across humanoids, arms, and AMRs.",
    status: "next",
  },
];


const statusConfig: Record<Status, { dot: string; icon: typeof Circle; ring: string; label: string }> = {
  done: { dot: "bg-accent-green", icon: CheckCircle2, ring: "ring-accent-green/30", label: "Shipped" },
  active: { dot: "bg-orange-accent", icon: Loader2, ring: "ring-orange-accent/40", label: "In progress" },
  next: { dot: "bg-muted-foreground/40", icon: Circle, ring: "ring-border", label: "Next" },
};

export function Timeline() {
  return (
    <section className="section-spacing border-t border-border bg-surface/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-14"
        >
          <div className="text-xs font-mono uppercase tracking-wider text-accent-blue mb-3">Progress</div>
          <h2 className="font-display font-bold text-3xl lg:text-5xl mb-4">
            From research to <span className="text-gradient-blue">deployed product.</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From PSF validation to EXIST funding and pilot-ready runtime — here is exactly where we are.
          </p>

        </motion.div>

        <div className="relative max-w-3xl">
          {/* Vertical line */}
          <div className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-accent-green via-orange-accent to-border" />

          <div className="space-y-7">
            {events.map((e, i) => {
              const cfg = statusConfig[e.status];
              const Icon = cfg.icon;
              return (
                <motion.div
                  key={e.title}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: i * 0.05, duration: 0.45 }}
                  className="relative pl-12"
                >
                  <div className={`absolute left-0 top-1.5 w-6 h-6 rounded-full ${cfg.dot} ring-4 ${cfg.ring} flex items-center justify-center text-background`}>
                    <Icon size={12} className={e.status === "active" ? "animate-spin" : ""} />
                  </div>
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1.5">
                    <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">{e.date}</span>
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full border border-border bg-background text-muted-foreground/80">
                      {cfg.label}
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-lg text-foreground mb-1.5">{e.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{e.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

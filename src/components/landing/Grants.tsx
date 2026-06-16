import { motion } from "framer-motion";
import { Award, Cpu, ExternalLink } from "lucide-react";

const grants = [
  {
    icon: Award,
    name: "EXIST Grant",
    detail: "German federal startup grant - backing the research and the build.",
    tone: "blue" as const,
    url: "https://www.exist.de",
  },
  {
    icon: Cpu,
    name: "WestAI Compute Grant",
    detail: "GPU compute via the WestAI AI Service Center to train & validate our models.",
    tone: "green" as const,
    url: "https://westai.de",
  },
];

export function Grants() {
  return (
    <section className="relative py-20 lg:py-28 border-t border-border overflow-hidden">
      <div className="absolute inset-0 aurora opacity-30 pointer-events-none" />
      <div className="section-container relative text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-[1.08] tracking-tight mx-auto max-w-4xl"
        >
          Funded for research by the{" "}
          <span className="text-gradient-blue">EXIST Grant</span> and the{" "}
          <span className="text-gradient-green">WestAI Compute Grant.</span>
        </motion.h2>

        <div className="mt-12 grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {grants.map((g, i) => (
            <motion.a
              key={g.name}
              href={g.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group card-3d border-gradient p-7 text-left flex items-start gap-4"
            >
              <div
                className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${
                  g.tone === "blue" ? "bg-accent-blue/10 text-accent-blue" : "bg-accent-green/10 text-accent-green"
                }`}
              >
                <g.icon size={22} />
              </div>
              <div className="flex-1">
                <div className="font-display font-bold text-lg text-foreground inline-flex items-center gap-1.5">
                  {g.name}
                  <ExternalLink size={13} className="text-muted-foreground/50 group-hover:text-foreground/80 transition-colors" />
                </div>
                <div className="text-sm text-muted-foreground mt-1 leading-relaxed">{g.detail}</div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

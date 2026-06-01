import { motion } from "framer-motion";
import { GraduationCap, Award, Building2 } from "lucide-react";
import internationalAcademy from "@/assets/partners/international-academy-rwth.png";
import collectiveIncubatorLogo from "@/assets/partners/collective-incubator.svg";

type Item =
  | { kind: "image"; src: string; alt: string; label: string; sub: string; invert?: boolean }
  | { kind: "placeholder"; icon: typeof Award; label: string; sub: string };

const items: Item[] = [
  {
    kind: "image",
    src: collectiveIncubatorLogo,
    alt: "Collective Incubator Aachen",
    label: "Collective Incubator",
    sub: "Aachen, Germany",
  },
  { kind: "placeholder", icon: Award, label: "EXIST Funding", sub: "German Federal Ministry" },
  { kind: "placeholder", icon: GraduationCap, label: "RWTH Aachen University", sub: "Founding ecosystem" },
  {
    kind: "image",
    src: internationalAcademy,
    alt: "RWTH International Academy",
    label: "RWTH International Academy",
    sub: "RWTH Aachen University",
  },
];

export function TrustStrip() {
  return (
    <section className="relative bg-white dark:bg-surface/50 border-y border-border py-14 lg:py-16">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-muted-foreground mb-3">
            Backed by
          </div>
          <h2 className="font-display font-bold text-2xl lg:text-3xl text-foreground">
            Europe's deep-tech robotics ecosystem.
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-6xl mx-auto">
          {items.map((it, i) => (
            <motion.div
              key={it.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.07, duration: 0.45 }}
              className="group flex flex-col items-center justify-center text-center gap-4 px-6 py-8 rounded-2xl border border-border bg-background hover:border-accent-blue/50 hover:shadow-lg transition-all min-h-[160px]"
            >
              {it.kind === "image" ? (
                <div className="h-16 flex items-center justify-center">
                  <img
                    src={it.src}
                    alt={it.alt}
                    className={`max-h-16 max-w-[180px] object-contain ${it.invert ? "dark:invert" : ""}`}
                    loading="lazy"
                  />
                </div>
              ) : (
                <div className="w-14 h-14 rounded-xl border border-accent-blue/30 bg-accent-blue/5 text-accent-blue flex items-center justify-center">
                  <it.icon size={26} />
                </div>
              )}
              <div>
                <div className="text-sm lg:text-base font-display font-semibold text-foreground leading-tight">{it.label}</div>
                <div className="text-[11px] font-mono text-muted-foreground mt-1">{it.sub}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

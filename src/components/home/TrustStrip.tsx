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
    src: internationalAcademy,
    alt: "International Academy — RWTH Aachen University",
    label: "International Academy",
    sub: "RWTH Aachen University",
  },
  {
    kind: "image",
    src: collectiveIncubatorLogo,
    alt: "Collective Incubator Aachen",
    label: "Collective Incubator",
    sub: "Aachen, Germany",
    invert: true,
  },
  { kind: "placeholder", icon: Award, label: "EXIST Gründungstipendium", sub: "Logo coming soon" },
  { kind: "placeholder", icon: GraduationCap, label: "RWTH Aachen", sub: "Logo coming soon" },
  { kind: "placeholder", icon: Building2, label: "More partners", sub: "Logo coming soon" },
];

export function TrustStrip() {
  return (
    <section className="relative border-y border-border bg-surface/30 py-10">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-7"
        >
          <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
            Supported by
          </div>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {items.map((it, i) => (
            <motion.div
              key={it.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="flex items-center gap-3 px-4 py-3 rounded-lg border border-border bg-background/60 hover:border-accent-blue/40 transition-colors min-h-[68px]"
            >
              {it.kind === "image" ? (
                <>
                  <div className="w-14 h-10 shrink-0 flex items-center justify-center">
                    <img
                      src={it.src}
                      alt={it.alt}
                      className={`max-h-10 max-w-full object-contain ${it.invert ? "dark:invert" : ""}`}
                      loading="lazy"
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-semibold text-foreground truncate">{it.label}</div>
                    <div className="text-[10px] font-mono text-muted-foreground/80 truncate">{it.sub}</div>
                  </div>
                </>
              ) : (
                <>
                  <div className="w-10 h-10 rounded-md border border-dashed border-border bg-surface/50 text-muted-foreground/60 flex items-center justify-center shrink-0">
                    <it.icon size={16} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-semibold text-foreground/80 truncate">{it.label}</div>
                    <div className="text-[10px] font-mono text-muted-foreground/60 truncate">{it.sub}</div>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { GraduationCap, Cpu, Award } from "lucide-react";
import internationalAcademy from "@/assets/partners/international-academy-rwth.png";
import collectiveIncubator from "@/assets/partners/collective-incubator.svg";
import existFunding from "@/assets/partners/exist-funding.png.asset.json";

type Item =
  | { kind: "image"; src: string; alt: string; label: string; sub: string }
  | { kind: "placeholder"; icon: typeof Award; label: string; sub: string };

const items: Item[] = [
  {
    kind: "image",
    src: internationalAcademy,
    alt: "RWTH International Academy",
    label: "RWTH International Academy",
    sub: "RWTH Aachen University",
  },
  {
    kind: "image",
    src: collectiveIncubator,
    alt: "Collective Incubator Aachen",
    label: "Collective Incubator",
    sub: "Aachen, Germany",
  },
  { kind: "placeholder", icon: Cpu, label: "IGMR Institute", sub: "RWTH · Mechanism Theory" },
  { kind: "image", src: existFunding.url, alt: "EXIST Gründerstipendium", label: "EXIST Gründerstipendium", sub: "BMWi · ESF Plus" },
  { kind: "placeholder", icon: GraduationCap, label: "RWTH Innovation", sub: "Ideation programme" },
];

export function TrustStrip() {
  return (
    <section className="relative border-y border-border py-14 lg:py-16 bg-surface/40">
      <div className="absolute inset-0 bg-mesh opacity-40 pointer-events-none" />
      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-accent-blue mb-3">
            Backed by
          </div>
          <h2 className="font-display font-bold text-2xl lg:text-3xl text-foreground">
            Leading European robotics institutions.
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-4 max-w-6xl mx-auto">
          {items.map((it, i) => (
            <motion.div
              key={it.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.06, duration: 0.45 }}
              className="group flex flex-col items-center justify-center text-center gap-3 px-4 py-6 rounded-xl border border-border bg-background/60 backdrop-blur hover:border-accent-blue/40 hover:bg-background/80 transition-all min-h-[150px]"
            >
              {it.kind === "image" ? (
                <div className="h-14 w-full flex items-center justify-center rounded-md bg-white/95 px-3 py-2">
                  <img
                    src={it.src}
                    alt={it.alt}
                    className="max-h-10 max-w-[150px] object-contain"
                    loading="lazy"
                  />
                </div>
              ) : (
                <div className="w-11 h-11 rounded-lg border border-accent-blue/30 bg-accent-blue/5 text-accent-blue flex items-center justify-center">
                  <it.icon size={22} />
                </div>
              )}
              <div>
                <div className="text-xs lg:text-sm font-display font-semibold text-foreground leading-tight">{it.label}</div>
                <div className="text-[10px] font-mono text-muted-foreground mt-1">{it.sub}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

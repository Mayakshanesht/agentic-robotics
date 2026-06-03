import { motion } from "framer-motion";
import { GraduationCap, Cpu } from "lucide-react";
import internationalAcademy from "@/assets/partners/international-academy-rwth.png";
import collectiveIncubator from "@/assets/partners/collective-incubator.svg";
import existFunding from "@/assets/partners/exist-funding.png.asset.json";

type SmallItem =
  | { kind: "image"; src: string; alt: string; label: string; sub: string }
  | { kind: "placeholder"; icon: typeof Cpu; label: string; sub: string };

const smallItems: SmallItem[] = [
  {
    kind: "image",
    src: collectiveIncubator,
    alt: "Collective Incubator Aachen",
    label: "Collective Incubator",
    sub: "Aachen, Germany",
  },
  {
    kind: "image",
    src: internationalAcademy,
    alt: "RWTH International Academy",
    label: "RWTH International Academy",
    sub: "RWTH Aachen University",
  },
  { kind: "placeholder", icon: Cpu, label: "IGMR Institute", sub: "RWTH · Mechanism Theory" },
  { kind: "placeholder", icon: GraduationCap, label: "RWTH Innovation", sub: "Ideation programme" },
];

export function TrustStrip() {
  return (
    <section className="relative border-y border-border py-16 lg:py-20 bg-surface/40">
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

        {/* Top row — small partners */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 max-w-5xl mx-auto mb-6">
          {smallItems.map((it, i) => (
            <motion.div
              key={it.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.06, duration: 0.45 }}
              className="group flex flex-col items-center justify-center text-center gap-3 px-4 py-5 rounded-xl border border-border bg-background/60 backdrop-blur hover:border-accent-blue/40 hover:bg-background/80 transition-all min-h-[140px]"
            >
              {it.kind === "image" ? (
                <div className="h-12 w-full flex items-center justify-center rounded-md bg-white/95 px-3 py-2">
                  <img
                    src={it.src}
                    alt={it.alt}
                    className="max-h-8 max-w-[140px] object-contain"
                    loading="lazy"
                  />
                </div>
              ) : (
                <div className="w-10 h-10 rounded-lg border border-accent-blue/30 bg-accent-blue/5 text-accent-blue flex items-center justify-center">
                  <it.icon size={20} />
                </div>
              )}
              <div>
                <div className="text-xs lg:text-sm font-display font-semibold text-foreground leading-tight">{it.label}</div>
                <div className="text-[10px] font-mono text-muted-foreground mt-1">{it.sub}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* EXIST — full-width striking row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative max-w-6xl mx-auto rounded-2xl border border-accent-blue/30 bg-gradient-to-r from-accent-blue/10 via-background/80 to-accent-green/10 backdrop-blur overflow-hidden"
        >
          <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-accent-blue/15 blur-[100px] pointer-events-none" />
          <div className="relative grid md:grid-cols-[1fr_auto] items-center gap-8 px-6 md:px-12 py-10 md:py-12">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-accent-blue mb-2">
                Lead Federal Funding
              </div>
              <div className="font-display font-bold text-2xl md:text-4xl leading-tight text-foreground mb-2">
                EXIST Gründerstipendium
              </div>
              <div className="text-sm md:text-base text-muted-foreground max-w-xl">
                German Federal Ministry for Economic Affairs · ESF Plus — supporting CloudBee's research-to-market transfer.
              </div>
            </div>
            <div className="h-24 md:h-32 w-full md:w-[360px] flex items-center justify-center rounded-xl bg-white px-6 py-4 shadow-lg">
              <img
                src={existFunding.url}
                alt="EXIST Gründerstipendium — German Federal funding"
                className="max-h-full max-w-full object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

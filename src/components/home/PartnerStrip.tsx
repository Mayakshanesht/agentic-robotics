import { useState } from "react";
import collectiveIncubator from "@/assets/partners/collective-incubator.svg";
import internationalAcademy from "@/assets/partners/international-academy-rwth.png";

/**
 * Trusted-by logo marquee (upper-funnel social proof).
 * Permission granted for: Collective Incubator, RWTH International Academy,
 * RWTH Aachen University, IGMR Institute, EXIST, WestAI.
 *
 * Each logo tries to load an image; if the file is missing it falls back to a
 * styled wordmark, so the strip always looks intentional.
 *   • chip "light" → logo placed on a white chip (for dark/coloured logos)
 *   • chip "dark"  → logo shown as-is (for white/light logos like WEST AI)
 *
 * To add a logo, drop the file at the path below (public/partners/...).
 */
type Item = { src: string; alt: string; label: string; chip: "light" | "dark" };

const items: Item[] = [
  { src: collectiveIncubator, alt: "Collective Incubator", label: "Collective Incubator", chip: "light" },
  { src: internationalAcademy, alt: "RWTH International Academy", label: "RWTH International Academy", chip: "light" },
  { src: "/partners/igmr.png", alt: "IGMR Institute · RWTH Aachen", label: "IGMR Institute", chip: "light" },
  { src: "/partners/rwth.png", alt: "RWTH Aachen University", label: "RWTH Aachen University", chip: "light" },
  { src: "/partners/westai.png", alt: "WEST AI · KI-Servicezentrum", label: "WEST AI", chip: "dark" },
  { src: "/partners/exist.png", alt: "EXIST - From Science to Business", label: "EXIST", chip: "light" },
];

function Logo({ src, alt, label, chip }: Item) {
  const [broken, setBroken] = useState(false);
  return (
    <div className="flex items-center justify-center h-12 px-9 shrink-0">
      {broken ? (
        <span className="font-display font-semibold text-base text-foreground/55 hover:text-foreground/90 transition-colors whitespace-nowrap">
          {label}
        </span>
      ) : chip === "light" ? (
        <div className="h-9 flex items-center justify-center rounded-md bg-white/95 px-3 py-1.5">
          <img src={src} alt={alt} onError={() => setBroken(true)} className="max-h-6 max-w-[150px] object-contain" loading="lazy" />
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          onError={() => setBroken(true)}
          className="max-h-8 max-w-[160px] object-contain opacity-80 hover:opacity-100 transition-opacity"
          loading="lazy"
        />
      )}
    </div>
  );
}

export function PartnerStrip() {
  return (
    <section className="relative py-12 border-y border-border bg-surface/30">
      <div className="section-container">
        <div className="text-center text-[10px] font-mono uppercase tracking-[0.3em] text-muted-foreground mb-7">
          Trusted &amp; backed by leading European robotics institutions
        </div>
      </div>
      <div className="marquee-mask">
        <div className="marquee-track">
          {[...items, ...items].map((it, i) => (
            <Logo key={`${it.label}-${i}`} {...it} />
          ))}
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import collectiveIncubator from "@/assets/partners/collective-incubator.svg";
import internationalAcademy from "@/assets/partners/international-academy-rwth.png";

type Item = { src: string; alt: string; label: string };

/** Drop a file at the given path to replace a wordmark with the real logo. */
const items: Item[] = [
  { src: collectiveIncubator, alt: "Collective Incubator", label: "Collective Incubator" },
  { src: internationalAcademy, alt: "RWTH International Academy", label: "RWTH International Academy" },
  { src: "/partners/rwth.png", alt: "RWTH Aachen University", label: "RWTH Aachen University" },
  { src: "/partners/exist.png", alt: "EXIST Gründungsstipendium", label: "EXIST Gründungsstipendium" },
  { src: "/partners/westai.png", alt: "WestAI AI Service Center", label: "WestAI" },
];

function Logo({ src, alt, label }: Item) {
  const [broken, setBroken] = useState(false);
  return (
    <div className="flex h-12 shrink-0 items-center justify-center px-9">
      {broken ? (
        <span className="whitespace-nowrap text-base font-semibold text-muted-foreground">{label}</span>
      ) : (
        <img src={src} alt={alt} onError={() => setBroken(true)} loading="lazy" className="max-h-8 max-w-[160px] object-contain" />
      )}
    </div>
  );
}

export function LogoMarquee() {
  return (
    <section className="border-y border-border bg-white py-8" aria-label="Institutions and funders">
      <div className="section-container">
        <div className="mb-6 text-center text-[13px] font-bold uppercase tracking-[3px] text-primary">
          Backed by EXIST, WestAI and the RWTH Aachen ecosystem
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

import collectiveIncubator from "@/assets/partners/collective-incubator.svg";
import internationalAcademy from "@/assets/partners/international-academy-rwth.png";

/**
 * Trusted-by logo marquee (upper-funnel social proof).
 * Usage permission granted for: Collective Incubator, RWTH International Academy,
 * Innovation Chair, IGMR, EXIST, WestAI.
 *
 * Logos with image files render as images on a white chip; the rest render as
 * styled wordmarks. To add a real logo, drop the file in src/assets/partners/
 * and swap the `wordmark` entry for an `img` import below.
 */
type Item =
  | { kind: "img"; src: string; alt: string }
  | { kind: "word"; label: string };

const items: Item[] = [
  { kind: "img", src: collectiveIncubator, alt: "Collective Incubator" },
  { kind: "img", src: internationalAcademy, alt: "RWTH International Academy" },
  { kind: "word", label: "IGMR · RWTH Aachen" },
  { kind: "word", label: "Innovation Chair" },
  { kind: "word", label: "EXIST" },
  { kind: "word", label: "WestAI" },
];

function Cell({ item }: { item: Item }) {
  return (
    <div className="flex items-center justify-center h-12 px-10 shrink-0">
      {item.kind === "img" ? (
        <div className="h-9 flex items-center justify-center rounded-md bg-white/95 px-3 py-1.5">
          <img src={item.src} alt={item.alt} className="max-h-6 max-w-[150px] object-contain" loading="lazy" />
        </div>
      ) : (
        <span className="font-display font-semibold text-base text-foreground/55 hover:text-foreground/90 transition-colors whitespace-nowrap">
          {item.label}
        </span>
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
            <Cell key={i} item={it} />
          ))}
        </div>
      </div>
    </section>
  );
}

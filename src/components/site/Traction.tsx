import { Factory, Handshake, MapPin, Award } from "lucide-react";
import { FadeUp, Kicker, Section } from "@/components/site/ui";

const tiles = [
  { icon: Factory, label: "Industrial focus", detail: "Manufacturing, automotive, electronics and logistics" },
  { icon: Handshake, label: "Pilot programme", detail: "A focused starting point for industrial automation" },
  { icon: MapPin, label: "Built in Aachen", detail: "Our own hardware lab and the RWTH Aachen ecosystem" },
  { icon: Award, label: "Grant supported", detail: "EXIST Gründungsstipendium and WestAI compute grant" },
];

export function Traction() {
  return (
    <Section id="pilots" className="border-t border-border">
      <FadeUp className="max-w-3xl">
        <Kicker>Our foundation</Kicker>
        <h2 className="mt-4 text-[2rem] font-extrabold leading-tight tracking-[-1px] lg:text-[2.5rem]">
          Built for industrial collaboration.
        </h2>
      </FadeUp>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {tiles.map(({ icon: Icon, label, detail }, i) => (
          <FadeUp key={label} delay={i * 0.07}>
            <div className="h-full rounded-2xl border border-border bg-white p-7 shadow-[var(--shadow-card)]">
              <Icon size={32} className="text-primary" aria-hidden />
              <h3 className="mt-5 text-lg font-bold text-foreground">{label}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{detail}</p>
            </div>
          </FadeUp>
        ))}
      </div>
      <p className="mt-7 text-sm text-muted-foreground">Talk to us about a pilot for your industrial task.</p>
    </Section>
  );
}

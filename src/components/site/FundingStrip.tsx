import { useState } from "react";
import { FadeUp, Kicker, Section } from "@/components/site/ui";
import collectiveIncubator from "@/assets/partners/collective-incubator.svg";
import internationalAcademy from "@/assets/partners/international-academy-rwth.png";

type Logo = { src: string; alt: string; label: string };

/** Drop a file at the path and the wordmark is replaced by the logo. */
const logos: Logo[] = [
  { src: collectiveIncubator, alt: "Collective Incubator", label: "Collective Incubator" },
  { src: internationalAcademy, alt: "RWTH International Academy", label: "RWTH International Academy" },
  { src: "/partners/rwth.png", alt: "RWTH Aachen University", label: "RWTH Aachen University" },
  { src: "/partners/westai.png", alt: "WestAI AI Service Center", label: "WestAI" },
];

function LogoTile({ src, alt, label }: Logo) {
  const [broken, setBroken] = useState(false);
  return (
    <div className="flex h-20 items-center justify-center rounded-xl border border-border bg-white px-5">
      {broken ? (
        <span className="text-center text-sm font-semibold text-muted-foreground">{label}</span>
      ) : (
        <img src={src} alt={alt} onError={() => setBroken(true)} loading="lazy" className="max-h-10 max-w-[150px] object-contain" />
      )}
    </div>
  );
}

export function FundingStrip() {
  return (
    <Section id="funding" className="border-t border-border bg-[#E6F5F3]">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <FadeUp>
          <Kicker>Funding and backing</Kicker>
          <h2 className="mt-4 text-[2rem] font-extrabold leading-tight tracking-[-1px] lg:text-[2.5rem]">
            EXIST start-up grant recipient.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#13233B]">
            CloudBee Robotics is funded by the EXIST Gründungsstipendium of the German Federal Ministry and by a WestAI
            compute grant: <strong className="text-foreground">non-dilutive funding and GPU compute</strong>, with no
            equity given up.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Non-dilutive", "EXIST Gründungsstipendium", "WestAI compute grant", "RWTH Aachen spin-off"].map((t) => (
              <span key={t} className="rounded-full border border-primary/30 bg-white px-3.5 py-1.5 text-sm font-medium text-primary">
                {t}
              </span>
            ))}
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="rounded-2xl border border-border bg-white p-5">
            <img
              src="/media/exist-funding.png"
              alt="Gefördert durch: EXIST Gründungsstipendium, Bundesministerium für Wirtschaft und Klimaschutz, Europäische Union ESF Plus"
              className="mx-auto w-full max-w-xl"
              loading="lazy"
            />
          </div>
        </FadeUp>
      </div>

      <FadeUp className="mt-12">
        <div className="mb-4 text-[13px] font-bold uppercase tracking-[3px] text-primary">Institutions behind us</div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {logos.map((l) => (
            <LogoTile key={l.label} {...l} />
          ))}
        </div>
      </FadeUp>
    </Section>
  );
}

import collectiveIncubator from "@/assets/partners/collective-incubator.svg";
import internationalAcademy from "@/assets/partners/international-academy-rwth.png";

const supporters = [
  { src: collectiveIncubator, label: "Collective Incubator" },
  { src: internationalAcademy, label: "RWTH International Academy" },
  { src: undefined, label: "RWTH Aachen University" },
  { src: undefined, label: "EXIST Gründungsstipendium" },
  { src: undefined, label: "WestAI" },
];

export function LogoMarquee() {
  return (
    <section className="border-y border-border bg-white py-8" aria-label="Institutions and funders">
      <div className="section-container">
        <p className="text-center text-[13px] font-bold uppercase tracking-[2px] text-primary">
          Backed by EXIST, WestAI and the RWTH Aachen ecosystem
        </p>
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-5">
          {supporters.map((supporter) => (
            <li key={supporter.label} className="flex min-h-10 items-center justify-center">
              {supporter.src ? (
                <img src={supporter.src} alt={supporter.label} className="max-h-8 max-w-[160px] object-contain" />
              ) : (
                <span className="text-center text-sm font-semibold text-muted-foreground">{supporter.label}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

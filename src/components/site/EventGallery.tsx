import { FadeUp, Kicker, Section } from "@/components/site/ui";
import lab from "@/assets/events/lab.jpg";
import workshop from "@/assets/events/workshop.jpg";
import pitch from "@/assets/events/pitch.jpg";
import talk from "@/assets/events/talk.jpg";
import makerSpace from "@/assets/events/maker-space.jpg";
import incubator from "@/assets/events/incubator.jpg";

const photos = [
  { src: lab, alt: "The CloudBee Robotics hardware lab in Aachen", caption: "Our hardware lab, Aachen" },
  { src: pitch, alt: "CloudBee Robotics pitching at the Collective Incubator", caption: "Pitching at the Collective Incubator" },
  { src: talk, alt: "CloudBee Robotics presenting a talk on physical AI", caption: "Talking about physical AI" },
  { src: workshop, alt: "The CloudBee Robotics team in a workshop session", caption: "Team workshop" },
  { src: makerSpace, alt: "The maker space workshop at the Collective Incubator", caption: "Maker space, Collective Incubator" },
  { src: incubator, alt: "The Collective Incubator building in Aachen", caption: "Collective Incubator, Aachen" },
];

export function EventGallery({ title = "Where we build and who we meet" }: { title?: string }) {
  return (
    <Section className="border-t border-border">
      <FadeUp className="max-w-3xl">
        <Kicker>Lab and events</Kicker>
        <h2 className="mt-4 text-[2rem] font-extrabold leading-tight tracking-[-1px] lg:text-[2.5rem]">{title}</h2>
      </FadeUp>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {photos.map((p, i) => (
          <FadeUp key={p.caption} delay={i * 0.06}>
            <figure className="group overflow-hidden rounded-2xl border border-border bg-white shadow-[var(--shadow-card)]">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.src}
                  alt={p.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <figcaption className="px-4 py-3 text-sm text-muted-foreground">{p.caption}</figcaption>
            </figure>
          </FadeUp>
        ))}
      </div>
    </Section>
  );
}

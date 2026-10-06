import { Camera } from "lucide-react";
import { PhotoSlot } from "@/components/PhotoSlot";
import { FadeUp, Kicker, Section } from "@/components/site/ui";
import lab from "@/assets/events/lab.jpg";
import workshop from "@/assets/events/workshop.jpg";
import pitch from "@/assets/events/pitch.jpg";
import talk from "@/assets/events/talk.jpg";
import makerSpace from "@/assets/events/maker-space.jpg";
import incubator from "@/assets/events/incubator.jpg";

type Photo = { src: string; alt: string; caption: string };

/**
 * Photos we already have, plus drop-in slots: put a file at the /events path
 * and the placeholder is replaced automatically.
 */
const photos: Photo[] = [
  { src: lab, alt: "The CloudBee Robotics hardware lab in Aachen", caption: "Our hardware lab, Aachen" },
  { src: "/events/founders-festival.jpg", alt: "The CloudBee Robotics booth at the Founders Festival in Aachen", caption: "Our booth at the Founders Festival, Aachen" },
  { src: "/events/start-and-scale.jpg", alt: "The CloudBee Robotics booth at the Start and Scale event", caption: "Our booth at Start and Scale" },
  { src: pitch, alt: "CloudBee Robotics pitching at the Collective Incubator", caption: "Pitching at the Collective Incubator" },
  { src: talk, alt: "CloudBee Robotics presenting a talk on physical AI", caption: "Talking about physical AI" },
  { src: workshop, alt: "The CloudBee Robotics team in a workshop session", caption: "Team workshop" },
  { src: makerSpace, alt: "The maker space workshop at the Collective Incubator", caption: "Maker space, Collective Incubator" },
  { src: incubator, alt: "The Collective Incubator building in Aachen", caption: "Collective Incubator, Aachen" },
];

function Placeholder({ caption }: { caption: string }) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-secondary via-white to-secondary text-primary">
      <Camera size={26} strokeWidth={1.5} />
      <span className="px-4 text-center text-xs font-medium text-muted-foreground">{caption}</span>
    </div>
  );
}

export function EventGallery({ title = "Where we build and who we meet" }: { title?: string }) {
  return (
    <Section id="lab" className="border-t border-border">
      <FadeUp className="max-w-3xl">
        <Kicker>Lab and events</Kicker>
        <h2 className="mt-4 text-[2rem] font-extrabold leading-tight tracking-[-1px] lg:text-[2.5rem]">{title}</h2>
        <p className="mt-5 text-lg leading-relaxed text-[#13233B]">
          We build in our own lab in Aachen, and we show the work in person: booths at the Founders Festival and at
          Start and Scale, talks, and a lot of good conversations.
        </p>
      </FadeUp>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {photos.map((p, i) => (
          <FadeUp key={p.caption} delay={i * 0.05}>
            <figure className="group h-full overflow-hidden rounded-2xl border border-border bg-white shadow-[var(--shadow-card)]">
              <div className="aspect-[4/3] overflow-hidden">
                <PhotoSlot
                  src={p.src}
                  alt={p.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  fallback={<Placeholder caption={p.caption} />}
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

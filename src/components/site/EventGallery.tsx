import { Camera } from "lucide-react";
import { PhotoSlot } from "@/components/PhotoSlot";
import { FadeUp, Kicker, Section } from "@/components/site/ui";
import pitchPhoto from "@/assets/events/pitch.jpg";
import ideationPhoto from "@/assets/ideation-pitch.jpg";

type Photo = { src: string; alt: string; caption: string };

/** Reviewed public company presentation photos. */
const photos: Photo[] = [
  { src: pitchPhoto, alt: "CloudBee Robotics presenting at the Deloitte Problem-Solution Fit final", caption: "Deloitte Problem-Solution Fit final" },
  { src: ideationPhoto, alt: "CloudBee Robotics presenting at the RWTH Innovation Ideation programme", caption: "RWTH Innovation Ideation programme" },
];

function Placeholder({ caption }: { caption: string }) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-secondary via-white to-secondary text-primary">
      <Camera size={26} strokeWidth={1.5} />
      <span className="px-4 text-center text-xs font-medium text-muted-foreground">{caption}</span>
    </div>
  );
}

export function EventGallery({ title = "Meet CloudBee Robotics" }: { title?: string }) {
  return (
    <Section id="lab" className="border-t border-border">
      <FadeUp className="max-w-3xl">
        <Kicker>Our company in the community</Kicker>
        <h2 className="mt-4 text-[2rem] font-extrabold leading-tight tracking-[-1px] lg:text-[2.5rem]">{title}</h2>
        <p className="mt-5 text-lg leading-relaxed text-[#13233B]">
          We build in our own lab in Aachen, and we show the work in person: booths at the Founders Festival,
          Startup Week Aachen and Start and Scale, a guest lecture at the RWTH International Academy, and pitches at
          the Deloitte Problem-Solution Fit final and the RWTH Innovation Ideation programme.
        </p>
      </FadeUp>
      <div className="mt-10 grid gap-4 sm:grid-cols-2">
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

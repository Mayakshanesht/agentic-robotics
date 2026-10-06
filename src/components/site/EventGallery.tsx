import { Camera } from "lucide-react";
import { PhotoSlot } from "@/components/PhotoSlot";
import { FadeUp, Kicker, Section } from "@/components/site/ui";
import lab from "@/assets/events/lab.jpg";
import foundersFestival from "@/assets/events/founders-festival.jpg";
import guestLecture from "@/assets/events/guest-lecture.jpg";

type Photo = { src: string; alt: string; caption: string };

/**
 * Our own photos. Entries pointing at /events are drop-in slots: add the file
 * and the placeholder is replaced automatically. Photos showing people who are
 * not on the team are not published here (GDPR), and the two stage photos moved
 * to the hero carousel.
 */
const photos: Photo[] = [
  { src: foundersFestival, alt: "The CloudBee Robotics team at their booth at the Founders Festival in Aachen", caption: "Our booth at the Founders Festival, Aachen" },
  { src: guestLecture, alt: "Mayur Waghchoure giving a guest lecture at the RWTH International Academy", caption: "Guest lecture at the RWTH International Academy" },
  { src: lab, alt: "The CloudBee Robotics hardware lab in Aachen", caption: "Our hardware lab, Aachen" },
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
          We build in our own lab in Aachen, and we show the work in person: booths at the Founders Festival,
          Startup Week Aachen and Start and Scale, a guest lecture at the RWTH International Academy, and pitches at
          the Deloitte Problem-Solution Fit final and the RWTH Innovation Ideation programme.
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

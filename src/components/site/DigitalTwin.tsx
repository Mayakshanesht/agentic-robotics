import { Suspense, lazy, useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { Boxes, Hand, Move3d } from "lucide-react";
import { FadeUp, Kicker, Section } from "@/components/site/ui";
import labPhoto from "@/assets/events/lab.jpg";

const WorkCellScene = lazy(() => import("@/components/site/three/WorkCellScene"));

/** Real cell beside its twin, then an explorable 3D version. The 3D bundle loads only in view. */
export function DigitalTwin({ story = false }: { story?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [variations, setVariations] = useState(true);
  const [forces, setForces] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setMounted(true);
          io.disconnect();
        }
      },
      { rootMargin: "200px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const toggles = [
    { on: variations, set: setVariations, icon: Boxes, label: "Generated variations" },
    { on: forces, set: setForces, icon: Hand, label: "Touch and force" },
  ];

  return (
    <Section id="digital-twin" className="border-t border-border bg-white">
      <FadeUp className="max-w-3xl">
        <Kicker>The digital twin</Kicker>
        <h2 className="mt-4 text-[2rem] font-extrabold leading-tight tracking-[-1px] lg:text-[2.5rem]">
          One walk through your cell with a phone. Then a room a robot can practise in.
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-[#13233B]">
          We rebuild your cell as a twin, then run the task again and again with new positions, new parts and new
          lighting. Each run records what the robot sees and what it feels.
        </p>
      </FadeUp>

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        <FadeUp>
          <figure className="h-full overflow-hidden rounded-2xl border border-border bg-[#F8FAFC] shadow-[var(--shadow-card)]">
            <div className="aspect-video overflow-hidden">
              <img src={labPhoto} alt="The real CloudBee Robotics lab in Aachen" className="h-full w-full object-cover" loading="lazy" />
            </div>
            <figcaption className="px-5 py-4">
              <div className="text-[13px] font-bold uppercase tracking-[3px] text-muted-foreground">The real cell</div>
              <p className="mt-1.5 text-[15px] text-[#13233B]">Filmed on a phone, in one walk-through.</p>
            </figcaption>
          </figure>
        </FadeUp>

        <FadeUp delay={0.1}>
          <figure className="h-full overflow-hidden rounded-2xl border border-primary/30 bg-[#F8FAFC] shadow-[var(--shadow-card)]">
            <div className="aspect-video overflow-hidden bg-[#0A1C33]">
              {reduce ? (
                <img src="/media/scene-orbit-poster.jpg" alt="A 3D reconstruction of the lab, seen from above" className="h-full w-full object-cover" />
              ) : (
                <video
                  src="/media/scene-orbit.mp4"
                  poster="/media/scene-orbit-poster.jpg"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label="A 3D reconstruction of the CloudBee lab, orbiting"
                  className="h-full w-full object-cover"
                />
              )}
            </div>
            <figcaption className="px-5 py-4">
              <div className="text-[13px] font-bold uppercase tracking-[3px] text-primary">The twin</div>
              <p className="mt-1.5 text-[15px] text-[#13233B]">The same room, rebuilt from that video.</p>
            </figcaption>
          </figure>
        </FadeUp>
      </div>

      {story && (
        <FadeUp delay={0.1} className="mt-5">
          <div className="overflow-hidden rounded-2xl border border-border bg-[#0A1C33] shadow-[var(--shadow-card)]">
            <video
              src="/media/twin-story.mp4"
              poster="/media/twin-story-poster.jpg"
              controls
              muted
              playsInline
              preload="none"
              aria-label="How a phone video of a room becomes a simulation a robot can practise in"
              className="aspect-video w-full"
            />
          </div>
        </FadeUp>
      )}

      <FadeUp delay={0.15} className="mt-5">
        <div className="overflow-hidden rounded-2xl border border-border bg-[#F8FAFC] shadow-[var(--shadow-card)]">
          <div ref={ref} className="relative h-[380px] w-full lg:h-[460px]">
            {mounted ? (
              <Suspense fallback={<div className="flex h-full items-center justify-center text-sm text-muted-foreground">Loading the cell…</div>}>
                <WorkCellScene variations={variations} forces={forces} still={Boolean(reduce)} />
              </Suspense>
            ) : (
              <div className="flex h-full items-center justify-center text-sm text-muted-foreground">Loading the cell…</div>
            )}
            <div className="pointer-events-none absolute bottom-3 right-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-xs text-muted-foreground backdrop-blur">
              <Move3d size={13} /> Drag to look around
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 border-t border-border bg-white px-5 py-4">
            <span className="text-[13px] font-bold uppercase tracking-[3px] text-primary">Try it</span>
            {toggles.map((t) => (
              <button
                key={t.label}
                onClick={() => t.set(!t.on)}
                aria-pressed={t.on}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                  t.on ? "border-primary bg-secondary text-primary" : "border-border bg-white text-muted-foreground hover:border-primary/40"
                }`}
              >
                <t.icon size={15} /> {t.label}
              </button>
            ))}
            <span className="ml-auto text-sm text-muted-foreground">A task in the twin: lift the can, set it in the tray.</span>
          </div>
        </div>
      </FadeUp>
    </Section>
  );
}

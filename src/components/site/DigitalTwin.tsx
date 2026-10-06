import { Suspense, lazy, useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { Boxes, Hand, Move3d } from "lucide-react";
import { FadeUp, Kicker, Section } from "@/components/site/ui";

const WorkCellScene = lazy(() => import("@/components/site/three/WorkCellScene"));

/** Real cell beside its twin, then an explorable 3D version. The 3D bundle loads only in view. */
export function DigitalTwin() {
  const ref = useRef<HTMLDivElement>(null);
  const video = useRef<HTMLVideoElement>(null);
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

  useEffect(() => {
    const el = video.current;
    if (!el || reduce) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) void el.play().catch(() => {});
        else el.pause();
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reduce]);

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

      <FadeUp delay={0.08} className="mt-10">
        <div className="overflow-hidden rounded-2xl border border-border bg-[#0A1C33] shadow-[var(--shadow-card)]">
          <video
            ref={video}
            src="/media/twin-presentation.mp4"
            poster="/media/twin-presentation-poster.jpg"
            controls
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="One phone video of a room becomes its digital twin, shown side by side with the filmed room, then variations of it"
            className="aspect-video w-full"
          />
        </div>
        <p className="mt-3 text-sm text-muted-foreground">
          Filmed on the left, the twin on the right. One video in, a twin and its variations out.
        </p>
      </FadeUp>

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

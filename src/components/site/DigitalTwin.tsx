import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { FadeUp, Kicker, Section } from "@/components/site/ui";
import { useIsMobile } from "@/hooks/use-mobile";

/** Real cell beside its twin, then an explorable 3D version. The 3D bundle loads only in view. */
export function DigitalTwin() {
  const onPhone = useIsMobile();
  const video = useRef<HTMLVideoElement>(null);
  const reduce = useReducedMotion();

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
        <div className="-mx-6 overflow-hidden border border-x-0 border-border bg-[#0A1C33] shadow-[var(--shadow-card)] md:mx-0 md:rounded-2xl md:border-x">
          <video
            ref={video}
            src={onPhone ? "/media/twin-compare-mobile.mp4" : "/media/twin-compare.mp4"}
            poster={onPhone ? "/media/twin-compare-mobile-poster.jpg" : "/media/twin-compare-poster.jpg"}
            controls
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="One phone video of a room becomes its digital twin, shown side by side with the filmed room, then variations of it"
            className={`${onPhone ? "aspect-[640/724]" : "aspect-[1280/362]"} w-full`}
          />
        </div>
        <p className="mt-3 px-6 text-sm text-muted-foreground md:px-0">
          {onPhone ? "Filmed above, the twin below." : "Filmed on the left, the twin on the right."} One video in, a
          twin and its variations out.
        </p>
      </FadeUp>

    </Section>
  );
}

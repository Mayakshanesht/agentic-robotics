import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { FadeUp, Kicker, Section } from "@/components/site/ui";

/** Plays muted while in view, pauses when it leaves. Never autoplays under reduced motion. */
export function SeeItWork() {
  const ref = useRef<HTMLVideoElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || reduce) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) void el.play().catch(() => {});
        else el.pause();
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reduce]);

  return (
    <Section id="see-it-work" className="border-t border-border">
      <FadeUp className="max-w-3xl">
        <Kicker>See it work</Kicker>
        <h2 className="mt-4 text-[2rem] font-extrabold leading-tight tracking-[-1px] lg:text-[2.5rem]">
          From a phone video to a robot that does the task.
        </h2>
      </FadeUp>
      <FadeUp delay={0.1} className="mt-10">
        <div className="-mx-6 overflow-hidden border border-x-0 border-border bg-white shadow-[var(--shadow-card)] md:mx-0 md:rounded-2xl md:border-x">
          <video
            ref={ref}
            src="/media/walkthrough.mp4"
            poster="/media/walkthrough-poster.jpg"
            controls
            muted
            playsInline
            preload="metadata"
            aria-label="Walkthrough: describing a task, generating training data in a digital twin, and robot arms in the CloudBee lab completing the task"
            className="aspect-video w-full"
          />
        </div>
      </FadeUp>
    </Section>
  );
}

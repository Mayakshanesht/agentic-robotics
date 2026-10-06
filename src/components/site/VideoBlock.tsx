import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { FadeUp, Kicker, Section } from "@/components/site/ui";

/** A titled section built around one of our own clips. Plays while on screen. */
export function VideoBlock({
  id,
  kicker,
  title,
  body,
  src,
  poster,
  alt,
  caption,
  aspect = "aspect-video",
  tone = "default",
}: {
  id?: string;
  kicker: string;
  title: string;
  body?: string;
  src: string;
  poster: string;
  alt: string;
  caption?: string;
  /** Tailwind aspect class matching the clip, which is no longer always 16:9. */
  aspect?: string;
  tone?: "default" | "white";
}) {
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
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reduce]);

  return (
    <Section id={id} className={`border-t border-border ${tone === "white" ? "bg-white" : ""}`}>
      <FadeUp className="max-w-3xl">
        <Kicker>{kicker}</Kicker>
        <h2 className="mt-4 text-[2rem] font-extrabold leading-tight tracking-[-1px] lg:text-[2.5rem]">{title}</h2>
        {body && <p className="mt-5 text-lg leading-relaxed text-[#13233B]">{body}</p>}
      </FadeUp>
      <FadeUp delay={0.1} className="mt-10">
        <div className="overflow-hidden rounded-2xl border border-border bg-[#0A1C33] shadow-[var(--shadow-card)]">
          <video ref={ref} src={src} poster={poster} controls muted loop playsInline preload="none" aria-label={alt} className={`${aspect} w-full`} />
        </div>
        {caption && <p className="mt-3 text-sm text-muted-foreground">{caption}</p>}
      </FadeUp>
    </Section>
  );
}

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { FadeUp, Kicker, Section } from "@/components/site/ui";
import { useIsMobile } from "@/hooks/use-mobile";

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
  splitLabels,
  mobileSrc,
  mobilePoster,
  mobileAspect,
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
  /** For a side-by-side clip: what the left and the right half are showing. */
  splitLabels?: { left: string; right: string };
  /** A cut of the same clip that is taller than it is wide, for phones. */
  mobileSrc?: string;
  mobilePoster?: string;
  mobileAspect?: string;
  tone?: "default" | "white";
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const reduce = useReducedMotion();
  const isMobile = useIsMobile();
  const onPhone = isMobile && Boolean(mobileSrc);

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
        <div className="-mx-6 overflow-hidden border border-x-0 border-border bg-[#0A1C33] shadow-[var(--shadow-card)] md:mx-0 md:rounded-2xl md:border-x">
          {splitLabels &&
            (onPhone ? (
              <div className="flex flex-col divide-y divide-white/10 border-b border-white/10 text-center text-[11px] font-bold uppercase tracking-[0.12em]">
                <span className="px-3 py-2 text-[#FBBF24]">Above · {splitLabels.left}</span>
                <span className="px-3 py-2 text-[#5EEAD4]">Below · {splitLabels.right}</span>
              </div>
            ) : (
              <div className="grid grid-cols-2 border-b border-white/10 text-center text-[11px] font-bold uppercase tracking-[0.12em] sm:text-xs">
                <span className="border-r border-white/10 px-3 py-2.5 text-[#FBBF24]">{splitLabels.left}</span>
                <span className="px-3 py-2.5 text-[#5EEAD4]">{splitLabels.right}</span>
              </div>
            ))}
          <video
            ref={ref}
            src={onPhone ? mobileSrc : src}
            poster={onPhone ? mobilePoster ?? poster : poster}
            controls
            muted
            loop
            playsInline
            preload="none"
            aria-label={alt}
            className={`${onPhone ? mobileAspect ?? aspect : aspect} w-full`}
          />
        </div>
        {caption && <p className="mt-3 px-6 text-sm text-muted-foreground md:px-0">{caption}</p>}
      </FadeUp>
    </Section>
  );
}

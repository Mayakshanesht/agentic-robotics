import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

/**
 * Counts up to a number when it scrolls into view. Non-numeric values render
 * as-is. The final number is what renders by default: if the in-view trigger
 * never fires (small viewports, no IntersectionObserver, a browser that keeps
 * the section off screen), the figure is still correct and only the animation
 * is lost. Showing a real 2 as 0 is worse than showing it without a count-up.
 */
export function CountUp({ value, duration = 1200 }: { value: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const target = Number(value);
  const numeric = value.trim() !== "" && Number.isFinite(target);
  const [shown, setShown] = useState(target);
  const ran = useRef(false);

  useEffect(() => {
    if (!numeric || reduce || !inView || ran.current) return;
    ran.current = true;
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      setShown(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, numeric, reduce, target, duration]);

  return <span ref={ref}>{numeric ? shown : value}</span>;
}

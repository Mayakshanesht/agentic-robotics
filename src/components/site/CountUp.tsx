import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

/** Counts up to a number when it scrolls into view. Non-numeric values render as-is. */
export function CountUp({ value, duration = 1200 }: { value: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduce = useReducedMotion();
  const target = Number(value);
  const numeric = value.trim() !== "" && Number.isFinite(target);
  const [shown, setShown] = useState(numeric && !reduce ? 0 : target);

  useEffect(() => {
    if (!numeric || reduce || !inView) return;
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

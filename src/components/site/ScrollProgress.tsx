import { motion, useScroll, useSpring } from "framer-motion";

/** Thin reading-progress bar directly under the navbar. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, restDelta: 0.001 });
  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed left-0 right-0 top-16 z-40 h-0.5 origin-left bg-primary lg:top-20"
    />
  );
}

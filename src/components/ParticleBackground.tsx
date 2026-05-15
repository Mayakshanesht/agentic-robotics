import { useEffect, useRef } from "react";

/**
 * Lightweight animated particle/mesh canvas.
 * Performance-aware: pauses when offscreen, uses devicePixelRatio cap.
 */
export function ParticleBackground({ density = 50, className = "" }: { density?: number; className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0, height = 0;
    const particles: { x: number; y: number; vx: number; vy: number }[] = [];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    const init = () => {
      particles.length = 0;
      for (let i = 0; i < density; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
        });
      }
    };

    resize();
    init();

    let raf = 0;
    let running = true;

    const draw = () => {
      if (!running) return;
      ctx.clearRect(0, 0, width, height);

      // particles
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
      }

      // connections
      ctx.lineWidth = 1;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i], b = particles[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 130) {
            const alpha = (1 - d / 130) * 0.25;
            ctx.strokeStyle = `hsla(196, 100%, 60%, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // dots
      for (const p of particles) {
        ctx.fillStyle = "hsla(196, 100%, 70%, 0.7)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.4, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    const onResize = () => { resize(); init(); };
    const obs = new IntersectionObserver(([entry]) => {
      running = entry.isIntersecting;
      if (running) draw();
    });
    obs.observe(canvas);
    window.addEventListener("resize", onResize);
    draw();

    return () => {
      cancelAnimationFrame(raf);
      obs.disconnect();
      window.removeEventListener("resize", onResize);
    };
  }, [density]);

  return <canvas ref={ref} className={`pointer-events-none absolute inset-0 w-full h-full ${className}`} />;
}

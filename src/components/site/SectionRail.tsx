import { useEffect, useState } from "react";

type Item = { id: string; label: string };

/** Desktop-only rail: shows where you are on the page and jumps to a section. */
export function SectionRail({ items }: { items: Item[] }) {
  const [active, setActive] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const sections = items
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!sections.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [items]);

  return (
    <nav aria-label="Page sections" className="fixed right-6 top-1/2 z-30 hidden -translate-y-1/2 xl:block">
      <ul className="flex flex-col items-end gap-3">
        {items.map((i) => {
          const isActive = active === i.id;
          return (
            <li key={i.id}>
              <a
                href={`#${i.id}`}
                aria-current={isActive ? "true" : undefined}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(i.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="group flex items-center justify-end gap-2"
              >
                <span
                  className={`whitespace-nowrap rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold shadow-[var(--shadow-card)] backdrop-blur transition-all ${
                    isActive ? "text-primary opacity-100" : "text-muted-foreground opacity-0 group-hover:opacity-100"
                  }`}
                >
                  {i.label}
                </span>
                <span
                  className={`block rounded-full transition-all ${
                    isActive ? "h-6 w-1.5 bg-primary" : "h-1.5 w-1.5 bg-foreground/25 group-hover:bg-primary/60"
                  }`}
                />
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

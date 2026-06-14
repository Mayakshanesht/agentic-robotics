/**
 * Shared premium hero backdrop: aurora wash + grid + floating glow orbs + a
 * bottom fade into the page. Drop inside any `relative overflow-hidden` hero
 * section, above the `relative z-10` content container.
 */
export function HeroBackdrop({ accent = "blue" }: { accent?: "blue" | "green" | "violet" }) {
  const orb =
    accent === "green"
      ? "bg-accent-green/20"
      : accent === "violet"
      ? "bg-violet-500/20"
      : "bg-accent-blue/20";
  return (
    <>
      <div className="absolute inset-0 aurora opacity-60 pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-[0.1] pointer-events-none" />
      <div className={`absolute -top-32 -left-24 w-[460px] h-[460px] rounded-full ${orb} blur-[150px] pointer-events-none animate-float`} />
      <div className="absolute -bottom-40 -right-24 w-[520px] h-[520px] rounded-full bg-violet-500/10 blur-[160px] pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </>
  );
}

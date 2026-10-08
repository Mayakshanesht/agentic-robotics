import { PackageCheck, Settings2, ClipboardCheck } from "lucide-react";
import { FadeUp, Kicker, Section } from "@/components/site/ui";

const cards = [
  { icon: PackageCheck, title: "Handling", body: "Explore pick-and-place and part-handling tasks relevant to your operation." },
  { icon: Settings2, title: "Assembly", body: "Discuss the steps, parts and practical requirements of your assembly task." },
  { icon: ClipboardCheck, title: "Clear success criteria", body: "Agree how the pilot will be assessed before the work begins." },
];

export function ContactRich() {
  return (
    <Section id="contact-rich" className="border-t border-border">
      <FadeUp className="max-w-3xl">
        <Kicker>Industrial applications</Kicker>
        <h2 className="mt-4 text-[2rem] font-extrabold leading-tight tracking-[-1px] lg:text-[2.5rem]">
          Keep the focus on the work you need done.
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-[#13233B]">
          Every workplace has its own requirements. Bring us your task and we can discuss whether a focused
          robotics pilot is a suitable next step.
        </p>
      </FadeUp>
      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {cards.map(({ icon: Icon, title, body }, i) => (
          <FadeUp key={title} delay={i * 0.08}>
            <div className="h-full rounded-2xl border border-border bg-white p-7 shadow-[var(--shadow-card)]">
              <Icon size={32} className="text-primary" aria-hidden />
              <h3 className="mt-5 text-xl font-bold text-foreground">{title}</h3>
              <p className="mt-3 text-[17px] leading-relaxed text-[#13233B]">{body}</p>
            </div>
          </FadeUp>
        ))}
      </div>
    </Section>
  );
}

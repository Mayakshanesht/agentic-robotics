import { ClipboardList, Target, Users } from "lucide-react";
import { FadeUp, Kicker, Section } from "@/components/site/ui";

const priorities = [
  { icon: Target, title: "Your goal", body: "Which task would make the biggest difference to your operation?" },
  { icon: ClipboardList, title: "Your context", body: "Discuss the robot, parts and workplace involved in that task." },
  { icon: Users, title: "Your team", body: "Bring your operational priorities into a focused conversation with our robotics team." },
];

export function DigitalTwin() {
  return (
    <Section id="digital-twin" className="border-t border-border bg-white">
      <FadeUp className="max-w-3xl">
        <Kicker>Built around your operation</Kicker>
        <h2 className="mt-4 text-[2rem] font-extrabold leading-tight tracking-[-1px] lg:text-[2.5rem]">
          Start with a task worth solving.
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-[#13233B]">
          A useful pilot starts with a clear goal. We work with you to understand the task and agree what a
          successful result should look like for your business.
        </p>
      </FadeUp>
      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {priorities.map(({ icon: Icon, title, body }, i) => (
          <FadeUp key={title} delay={i * 0.08}>
            <div className="h-full rounded-2xl border border-border bg-[#F8FAFC] p-7">
              <Icon size={28} className="text-primary" aria-hidden />
              <h3 className="mt-5 text-xl font-bold text-foreground">{title}</h3>
              <p className="mt-3 text-[17px] leading-relaxed text-[#13233B]">{body}</p>
            </div>
          </FadeUp>
        ))}
      </div>
    </Section>
  );
}

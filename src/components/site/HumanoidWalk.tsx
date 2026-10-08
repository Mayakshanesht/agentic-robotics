import { Bot, Hand, Factory } from "lucide-react";
import { Link } from "react-router-dom";
import { FadeUp, Kicker, Section } from "@/components/site/ui";

const capabilities = [
  { icon: Factory, title: "Robot arms", status: "Real robots in our lab", body: "Industrial handling and assembly tasks." },
  { icon: Bot, title: "Humanoids", status: "Simulation demonstrations", body: "Exploring mobility and manipulation for industrial work." },
  { icon: Hand, title: "Dexterous hands", status: "Simulation demonstrations", body: "Exploring tool and part handling." },
];

export function HumanoidWalk() {
  return (
    <Section id="humanoid" className="border-t border-border bg-white">
      <FadeUp className="max-w-3xl">
        <Kicker>Robotics in practice</Kicker>
        <h2 className="mt-4 text-[2rem] font-extrabold leading-tight tracking-[-1px] lg:text-[2.5rem]">
          Industrial experience. Hands-on robotics.
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-[#13233B]">
          We work with robot arms in our own hardware lab in Aachen and explore humanoids and dexterous hands
          through simulation demonstrations. Talk to us about the task and robot you have in mind.
        </p>
      </FadeUp>
      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {capabilities.map(({ icon: Icon, title, status, body }, i) => (
          <FadeUp key={title} delay={i * 0.08}>
            <div className="h-full rounded-2xl border border-border bg-[#F8FAFC] p-7">
              <Icon size={36} className="text-primary" aria-hidden />
              <h3 className="mt-5 text-xl font-bold text-foreground">{title}</h3>
              <p className="mt-2 text-sm font-semibold text-primary">{status}</p>
              <p className="mt-3 text-[17px] leading-relaxed text-[#13233B]">{body}</p>
            </div>
          </FadeUp>
        ))}
      </div>
      <FadeUp className="mt-8">
        <Link to="/pilots" className="text-base font-semibold text-primary hover:underline">Discuss a pilot →</Link>
      </FadeUp>
    </Section>
  );
}

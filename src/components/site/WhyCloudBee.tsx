import { FadeUp, Kicker, Section } from "@/components/site/ui";

const reasons = [
  {
    title: "Industrial focus",
    body: "We start with the tasks and constraints of your operation, so the pilot stays connected to a practical business need.",
  },
  {
    title: "Hands-on robotics experience",
    body: "Our founding team brings industry experience and robotics research from RWTH Aachen, supported by our own hardware lab.",
  },
  {
    title: "A focused starting point",
    body: "Work with us on one defined task, review the results and use them to guide your next investment in automation.",
  },
];

export function WhyCloudBee() {
  return (
    <Section id="why-cloudbee" className="border-t border-border">
      <FadeUp className="max-w-3xl">
        <Kicker>Why CloudBee</Kicker>
        <h2 className="mt-4 text-[2rem] font-extrabold leading-tight tracking-[-1px] lg:text-[2.5rem]">
          A partner for your next step in robotics.
        </h2>
      </FadeUp>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {reasons.map((r, i) => (
          <FadeUp key={r.title} delay={i * 0.08}>
            <div className="h-full rounded-2xl border border-border bg-white p-7 shadow-[var(--shadow-card)]">
              <span className="block h-1 w-10 rounded-full bg-primary" />
              <h3 className="mt-5 text-xl font-bold text-foreground">{r.title}</h3>
              <p className="mt-3 text-[17px] leading-relaxed text-[#13233B]">{r.body}</p>
            </div>
          </FadeUp>
        ))}
      </div>

      <p className="mt-7 text-sm text-muted-foreground">
        Your task and your business goals guide the conversation, from the first discussion through the pilot review.
      </p>
    </Section>
  );
}

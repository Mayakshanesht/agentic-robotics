import { FadeUp, Kicker, Section } from "@/components/site/ui";
import { PolicyFork } from "@/components/site/anim/PolicyFork";

const parts = [
  {
    tag: "The twin",
    title: "Something you can simulate, not only look at",
    body: "From the video we recover the room and the things in it, then give those surfaces what physics needs: how heavy, how slippery, what moves and what stays put. A render shows you a bench. A simulatable twin tells the robot what happens when it leans on that bench, which is the difference between a picture and a place to practise.",
  },
  {
    tag: "Manipulation",
    title: "Learned from contact the twin generates",
    body: "The task is played in the twin thousands of times, with the variation a real cell has, and every run is recorded through vision, depth, touch and force at the same instant. An open robot model is adapted on that data and then tested in the twin against situations it never met during training.",
  },
  {
    tag: "Locomotion",
    title: "Learned by trying, because nobody can demonstrate balance",
    body: "Walking is not taught by demonstration. In the twin the robot tries, falls, is shoved off balance and meets floors that grip differently, many attempts running in parallel, and what survives is a controller that keeps it upright and puts it where it needs to stand. That is what reinforcement learning is good for, and why the twin has to carry physics rather than pixels.",
  },
];

export function TwoPolicies() {
  return (
    <Section id="two-policies" className="border-t border-border">
      <FadeUp className="max-w-3xl">
        <Kicker>From one video to two kinds of skill</Kicker>
        <h2 className="mt-4 text-[2rem] font-extrabold leading-tight tracking-[-1px] lg:text-[2.5rem]">
          The same twin teaches the hands and the legs.
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-[#13233B]">
          One walk through the cell with a phone produces a twin that physics can run. Out of that twin come two
          different things: a manipulation skill, learned from contact we generate, and a locomotion controller,
          learned by trial. They are trained apart and they meet on one robot.
        </p>
      </FadeUp>

      <FadeUp delay={0.08} className="mt-10 hidden md:block">
        <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-white p-6">
          <PolicyFork />
        </div>
      </FadeUp>

      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        {parts.map((p, i) => (
          <FadeUp key={p.tag} delay={i * 0.08}>
            <div className="flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-[var(--shadow-card)]">
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-primary">{p.tag}</span>
              <h3 className="mt-3 text-xl font-bold leading-snug text-foreground">{p.title}</h3>
              <p className="mt-3 text-[17px] leading-relaxed text-[#13233B]">{p.body}</p>
            </div>
          </FadeUp>
        ))}
      </div>

      <FadeUp delay={0.1} className="mt-8 max-w-3xl">
        <p className="text-[17px] leading-relaxed text-[#13233B]">
          Because both are learned in the same twin, the robot that walks to the bench is the robot that then has to
          hold the part. The handover between walking and grasping is where whole-body tasks usually break, and here the
          two meet long before the hardware does.
        </p>
      </FadeUp>
    </Section>
  );
}

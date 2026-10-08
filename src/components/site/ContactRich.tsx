import { Hand, Settings2, Shuffle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { FadeUp, Kicker, Section } from "@/components/site/ui";
import { BOOK_A_PILOT_PATH } from "@/data/company";

const cards = [
  {
    icon: Hand,
    title: "Grasping and handling",
    body: "Interaction-rich scenarios for picking, holding, moving and placing parts. Useful handling depends on how the robot and object work together through the task.",
    tasks: ["Pick and place", "Part handling", "Tool handling"],
  },
  {
    icon: Settings2,
    title: "Assembly and insertion",
    body: "Tasks where contact and alignment matter: bringing parts together, inserting components and working through several connected steps.",
    tasks: ["Component alignment", "Insertion", "Assembly support"],
  },
  {
    icon: Shuffle,
    title: "Variation within the task",
    body: "Different parts, starting positions and task requirements broaden the situations considered when developing and evaluating a robot capability.",
    tasks: ["Object variation", "Task variation", "Practical evaluation"],
  },
];

export function ContactRich() {
  return (
    <Section id="contact-rich" className="border-t border-border">
      <FadeUp className="max-w-3xl">
        <Kicker>Our data offering</Kicker>
        <h2 className="mt-4 text-[2rem] font-extrabold leading-tight tracking-[-1px] lg:text-[2.5rem]">
          Synthetic contact-rich data for industrial manipulation.
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-[#13233B]">
          Industrial work depends on physical interaction: grasping a part, handling a tool, or bringing
          components together. Our synthetic contact-rich data offering supports the development and
          evaluation of robot skills for these interaction-rich tasks.
        </p>
      </FadeUp>
      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {cards.map(({ icon: Icon, title, body, tasks }, i) => (
          <FadeUp key={title} delay={i * 0.08}>
            <div className="h-full rounded-2xl border border-border bg-white p-7 shadow-[var(--shadow-card)]">
              <Icon size={32} className="text-primary" aria-hidden />
              <h3 className="mt-5 text-xl font-bold text-foreground">{title}</h3>
              <p className="mt-3 text-[17px] leading-relaxed text-[#13233B]">{body}</p>
              <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${title} applications`}>
                {tasks.map((task) => (
                  <li key={task} className="rounded-full border border-border bg-[#F8FAFC] px-3 py-1 text-xs font-medium text-[#13233B]">{task}</li>
                ))}
              </ul>
            </div>
          </FadeUp>
        ))}
      </div>

      <FadeUp className="mt-10 rounded-2xl border border-primary/20 bg-secondary/50 p-7 lg:p-8">
        <div className="grid gap-7 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-bold text-foreground">For robotics and AI teams</h3>
            <p className="mt-3 text-[17px] leading-relaxed text-[#13233B]">
              Explore task-relevant data for learning and evaluating manipulation skills. Start with the
              interactions your robot needs to handle and the questions you need to answer.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground">For industrial teams</h3>
            <p className="mt-3 text-[17px] leading-relaxed text-[#13233B]">
              Connect the capability to a useful application in manufacturing, automotive, electronics or
              logistics. A focused pilot helps assess the fit for your robot, parts and operation.
            </p>
          </div>
        </div>
        <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-4">
          <Link to={BOOK_A_PILOT_PATH} className="btn-pilot px-6 py-3">Discuss your application <ArrowRight size={16} aria-hidden /></Link>
          <Link to="/contact" className="inline-flex min-h-11 items-center text-sm font-semibold text-primary hover:underline">Talk about your data needs →</Link>
        </div>
      </FadeUp>
    </Section>
  );
}

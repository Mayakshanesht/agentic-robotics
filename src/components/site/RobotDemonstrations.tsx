import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { FadeUp, Kicker, Section } from "@/components/site/ui";
import { BOOK_A_PILOT_PATH } from "@/data/company";

const demonstrations = [
  {
    file: "contact-interaction-simulation",
    title: "Contact and object interaction",
    description: "A rendered object-interaction example. Physical contact is central to the handling and manipulation tasks our data offering addresses.",
  },
  {
    file: "humanoid-walking-simulation",
    title: "Humanoid locomotion",
    description: "A simulated humanoid walking demonstration from our development work, showing the movement of the robot in a virtual environment.",
  },
  {
    file: "object-handling-simulation",
    title: "Object handling",
    description: "A simulated robot and object moving through a handling scenario. A concrete view of the kinds of interactions we work on.",
  },
];

export function RobotDemonstrations() {
  return (
    <Section id="see-it-work" className="border-t border-border bg-[#F8FAFC]">
      <FadeUp className="max-w-3xl">
        <Kicker>See what we are building</Kicker>
        <h2 className="mt-4 text-[2rem] font-extrabold leading-tight tracking-[-1px] lg:text-[2.5rem]">
          Robot interaction. Manipulation. Movement.
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-[#13233B]">
          These demonstrations show our simulation work on physical robot capabilities. Alongside this,
          we work with real robot arms in our Aachen hardware lab and scope industrial pilots with customer teams.
        </p>
      </FadeUp>
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {demonstrations.map((demo, i) => (
          <FadeUp key={demo.file} delay={i * 0.06}>
            <figure className="h-full overflow-hidden rounded-2xl border border-border bg-white shadow-[var(--shadow-card)]">
              <video
                src={`/marketing/demos/${demo.file}.mp4`}
                poster={`/marketing/demos/${demo.file}-poster.jpg`}
                controls
                muted
                playsInline
                preload="none"
                aria-label={`${demo.title} — simulation demonstration, no audio`}
                aria-describedby={`${demo.file}-caption`}
                className="aspect-[16/10] w-full bg-[#101923] object-contain"
              />
              <figcaption id={`${demo.file}-caption`} className="p-6">
                <span className="inline-flex rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-primary">Simulation demonstration</span>
                <h3 className="mt-4 text-xl font-bold text-foreground">{demo.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-[#13233B]">{demo.description}</p>
              </figcaption>
            </figure>
          </FadeUp>
        ))}
      </div>
      <FadeUp className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
        <Link to={BOOK_A_PILOT_PATH} className="btn-pilot px-6 py-3">Discuss your robot task <ArrowRight size={16} aria-hidden /></Link>
        <Link to="/research" className="inline-flex min-h-11 items-center text-sm font-semibold text-primary hover:underline">Explore our engineering focus →</Link>
      </FadeUp>
    </Section>
  );
}

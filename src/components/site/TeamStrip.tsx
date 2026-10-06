import { Linkedin } from "lucide-react";
import { FadeUp, Kicker, Section } from "@/components/site/ui";
import mayurImg from "@/assets/mayur.png";
import madhavaImg from "@/assets/madhava.png";

const founders = [
  {
    name: "Mayur Waghchoure",
    role: "Founder & CEO",
    image: mayurImg,
    linkedin: "https://www.linkedin.com/in/mayurwaghchoure/",
    bio: "6 years in autonomy, 3D perception and synthetic data. Industry roles at Siemens, FEV and Tata Motors; early hire at two startups. M.Sc. RWTH Aachen, 6 research papers.",
  },
  {
    name: "Madhava Pandiyan",
    role: "Co-founder & CTO",
    image: madhavaImg,
    linkedin: "https://www.linkedin.com/in/madhava-pandiyan/",
    bio: "Deformable simulation, locomotion and reinforcement learning, sim-to-real. Builds and runs our hardware lab. M.Sc. RWTH Aachen.",
  },
];

export function TeamStrip() {
  return (
    <Section id="team" className="border-t border-border bg-white">
      <FadeUp className="max-w-3xl">
        <Kicker>Team</Kicker>
        <h2 className="mt-4 text-[2rem] font-extrabold leading-tight tracking-[-1px] lg:text-[2.5rem]">
          Built by people who have deployed robots in industry.
        </h2>
      </FadeUp>

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        {founders.map((f, i) => (
          <FadeUp key={f.name} delay={i * 0.08}>
            <div className="flex h-full gap-5 rounded-2xl border border-border bg-[#F8FAFC] p-7">
              <img
                src={f.image}
                alt={`${f.name}, ${f.role} at CloudBee Robotics`}
                className="h-24 w-24 shrink-0 rounded-2xl border border-border object-cover"
                loading="lazy"
              />
              <div className="min-w-0">
                <h3 className="text-xl font-bold text-foreground">{f.name}</h3>
                <div className="text-sm font-semibold text-primary">{f.role}</div>
                <p className="mt-3 text-[15px] leading-relaxed text-[#13233B]">{f.bio}</p>
                <a
                  href={f.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${f.name} on LinkedIn`}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                >
                  <Linkedin size={15} /> LinkedIn
                </a>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>

      <FadeUp className="mt-6">
        <p className="text-[17px] text-[#13233B]">
          <span className="font-semibold text-foreground">Advisor:</span> Prof. Dr. Bastian Leibe, Chair of Computer
          Vision, RWTH Aachen.
        </p>
      </FadeUp>
    </Section>
  );
}

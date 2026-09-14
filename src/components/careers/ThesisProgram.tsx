import { ArrowRight, ClipboardCheck, FlaskConical, GraduationCap } from "lucide-react";
import { THESIS_CONTACT_EMAIL, thesisDates, type Thesis } from "@/data/theses";

const payIn = [
  { lead: "Robot hardware", rest: " you would otherwise wait months for a slot to touch" },
  { lead: "GPU compute", rest: ", on a grant from the WestAI AI service centre" },
  { lead: "A system that already runs", rest: " — not an empty repository and a reading list" },
  { lead: "A named technical supervisor", rest: ", one scheduled hour with you every week, plus code review and pair debugging" },
  { lead: "First authorship", rest: ", with our support on the writing — and negative results are publishable results here" },
];

const timeline = [
  {
    icon: ClipboardCheck,
    what: "Apply",
    when: `Until ${thesisDates.applicationsClose}`,
    detail: "Applications are reviewed as they arrive.",
  },
  {
    icon: GraduationCap,
    what: "Secure your professor and register",
    when: `During ${thesisDates.registration}`,
    detail: "Your university supervises and examines; you register the thesis with your examination office.",
  },
  {
    icon: FlaskConical,
    what: "Thesis runs",
    when: `${thesisDates.start} – ${thesisDates.end}`,
    detail: "Six months, full time, on-site in Aachen. Later starts are possible by agreement.",
  },
];

function SectionLabel({ children, className = "text-accent-green" }: { children: React.ReactNode; className?: string }) {
  return <div className={`text-xs font-mono uppercase tracking-wider mb-3 ${className}`}>{children}</div>;
}

function Dot({ className }: { className: string }) {
  return <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${className}`} />;
}

export function SupervisorCallout() {
  return (
    <div className="rounded-2xl border-2 border-accent-green/60 bg-accent-green/10 p-6 lg:p-7">
      <div className="flex items-start gap-4">
        <GraduationCap className="text-accent-green mt-1 shrink-0" size={26} />
        <div>
          <SectionLabel>Before you apply — do this first</SectionLabel>
          <h3 className="font-display font-bold text-xl lg:text-2xl text-foreground leading-snug">
            Start looking for your supervising professor now.
          </h3>
          <p className="mt-3 text-sm lg:text-base text-foreground/90 leading-relaxed">
            These are <strong>external theses</strong>. A professor at <strong>your own university</strong> must supervise
            and examine the thesis, and you register it with your examination office{" "}
            <strong>during {thesisDates.registration}</strong>. Do not wait for our reply — start approaching professors in
            your field now and tell them about the topic.
          </p>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            <strong className="text-foreground">No supervisor yet? Apply anyway.</strong> We provide a written topic
            proposal you can take to a professor, and we will help you make the case.
          </p>
        </div>
      </div>
    </div>
  );
}

export function ThesisQuestion({ question }: { question: string }) {
  return (
    <div className="rounded-lg border-l-2 border-accent-green bg-surface/50 px-4 py-3">
      <div className="text-xs font-mono uppercase tracking-wider text-accent-green mb-1.5">The question</div>
      <p className="text-sm lg:text-base text-foreground/90 font-medium leading-relaxed">{question}</p>
    </div>
  );
}

export function ThesisSkills({ thesis }: { thesis: Thesis }) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div>
        <SectionLabel className="text-accent-blue">You should bring</SectionLabel>
        <ul className="space-y-1.5 text-sm text-foreground/85">
          {thesis.bring.map((b) => (
            <li key={b} className="flex gap-2">
              <Dot className="bg-accent-blue" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <SectionLabel className="text-muted-foreground">Also useful</SectionLabel>
        <ul className="space-y-1.5 text-sm text-muted-foreground">
          {thesis.alsoUseful.map((a) => (
            <li key={a} className="flex gap-2">
              <Dot className="bg-muted-foreground" />
              <span>{a}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function ThesisTimeline() {
  return (
    <ol className="grid md:grid-cols-3 gap-3">
      {timeline.map((step, i) => {
        const Icon = step.icon;
        return (
          <li key={step.what} className="rounded-xl border border-border bg-surface/40 p-5">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-muted-foreground">
              <Icon size={14} className="text-accent-blue" /> Step {i + 1}
            </div>
            <div className="mt-2 font-display font-semibold text-foreground">{step.what}</div>
            <div className="mt-1 text-sm font-mono text-accent-blue">{step.when}</div>
            <div className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.detail}</div>
          </li>
        );
      })}
    </ol>
  );
}

export function ThesisProgramDetails() {
  const supervisionMailto = `mailto:${THESIS_CONTACT_EMAIL}?subject=${encodeURIComponent(
    "Thesis supervision — CloudBee Robotics",
  )}`;

  return (
    <div className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="glass-card p-6 lg:p-7">
          <SectionLabel>How these positions work</SectionLabel>
          <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
            <li>
              <strong className="text-foreground">External master's thesis</strong> (externe Abschlussarbeit) · six
              months, full time, on-site in Aachen.
            </li>
            <li>
              <strong className="text-foreground">You arrange your own academic supervision.</strong> A professor at your
              university supervises and examines the thesis, and you register it through your examination office during
              October. We act as industry co-supervisor.
            </li>
            <li>
              <strong className="text-foreground">Academic record.</strong> Enrolled master's student with an overall
              grade better than 2.0 (German scale).
            </li>
            <li>
              <strong className="text-foreground">Where you'll be.</strong> Our hardware lab at the Collective Incubator
              in Aachen, working alongside the people who built the system.
            </li>
          </ul>
        </div>

        <div className="glass-card p-6 lg:p-7">
          <SectionLabel className="text-accent-blue">What the position pays in</SectionLabel>
          <p className="text-sm text-muted-foreground leading-relaxed">
            <strong className="text-foreground">These positions do not pay a salary.</strong> They pay in access, and we
            would rather say so here than at the third interview:
          </p>
          <ul className="mt-3 space-y-2 text-sm text-foreground/85">
            {payIn.map((p) => (
              <li key={p.lead} className="flex gap-2">
                <Dot className="bg-accent-blue" />
                <span>
                  <strong className="text-foreground">{p.lead}</strong>
                  {p.rest}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            Six months of that, against six months of a stipend somewhere else. We are direct about it so you can decide
            for yourself.
          </p>
        </div>
      </div>

      <div className="glass-card p-6 lg:p-7">
        <SectionLabel>Applications</SectionLabel>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Reviewed as they arrive.{" "}
          <strong className="text-foreground">Applications close {thesisDates.applicationsClose}.</strong> You register
          the thesis with your examination office during {thesisDates.registration}, and the work runs{" "}
          {thesisDates.start} to {thesisDates.end}. Later starts are possible by agreement.
        </p>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
          Preference for candidates already in Aachen — but if your profile is strong and you can organise supervision at
          your own university, we are open to it.
        </p>
        <ol className="mt-4 space-y-3 text-sm text-muted-foreground leading-relaxed">
          <li className="flex gap-3">
            <span className="font-mono text-accent-blue shrink-0">1.</span>
            <span>
              <strong className="text-foreground">Apply for a topic with the form</strong> — two or three sentences on why
              this topic and which side of it you come from, whether you have a potential supervisor in mind, your
              earliest start date, and a link to <strong className="text-foreground">something you have built</strong>: a
              repository, project report or paper.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="font-mono text-accent-blue shrink-0">2.</span>
            <span>
              <strong className="text-foreground">Email your CV and transcript</strong> to{" "}
              <a href={`mailto:${THESIS_CONTACT_EMAIL}`} className="text-accent-blue hover:underline break-all">
                {THESIS_CONTACT_EMAIL}
              </a>
              , with the topic number in the subject line.
            </span>
          </li>
        </ol>
        <p className="mt-5 border-l-2 border-accent-blue pl-4 text-sm text-foreground/85 leading-relaxed">
          You are not expected to be strong in everything listed under a topic. Each sits between two or three fields and
          very few people hold all of them. Tell us which side you come from and what you would expect to learn.
        </p>
      </div>

      <div className="glass-card p-6 lg:p-7">
        <SectionLabel className="text-accent-blue">For professors and researchers</SectionLabel>
        <p className="text-sm text-muted-foreground leading-relaxed">
          If one of these topics fits your group, we would like to talk — about supervising a student, or about
          collaborating more broadly. You provide academic supervision and examination; we provide the data,
          infrastructure, hardware, compute and weekly technical co-supervision.{" "}
          <strong className="text-foreground">We are not asking institutes for funding, equipment or staff time.</strong>
        </p>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
          A written proposal is available on request, and we are glad to work from your institute's standard framework for
          intellectual property, confidentiality and publication. We actively want the results published.
        </p>
        <a
          href={supervisionMailto}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-blue hover:gap-2 transition-all"
        >
          Talk to us about supervision <ArrowRight size={14} />
        </a>
      </div>

      <p className="text-xs italic text-muted-foreground leading-relaxed">
        CloudBee Robotics is an EXIST-funded start-up project at RWTH Aachen, with a hardware lab at the Collective
        Incubator, a compute grant from the WestAI AI service centre, and pilots running with industrial partners.
      </p>
    </div>
  );
}

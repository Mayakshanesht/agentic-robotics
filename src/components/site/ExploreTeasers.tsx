import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { FadeUp, Kicker, Section } from "@/components/site/ui";

const cards = [
  { to: "/how-it-works", title: "How it works", body: "What to expect when you bring us an industrial task, from the first conversation to the pilot review." },
  { to: "/why-cloudbee", title: "Why CloudBee", body: "Our industrial focus, robotics experience and approach to a focused pilot." },
  { to: "/pilots", title: "Pilots", body: "How to start a focused pilot for your industrial task and stay in touch with our team." },
  { to: "/investors", title: "Investors", body: "We're raising our pre-seed round. Request the deck and a demo." },
];

export function ExploreTeasers() {
  return (
    <Section id="explore" className="border-t border-border bg-white">
      <FadeUp className="max-w-3xl">
        <Kicker>Explore</Kicker>
        <h2 className="mt-4 text-[2rem] font-extrabold leading-tight tracking-[-1px] lg:text-[2.5rem]">
          Go deeper where it matters to you.
        </h2>
      </FadeUp>
      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {cards.map((c, i) => (
          <FadeUp key={c.to} delay={i * 0.07}>
            <Link
              to={c.to}
              className="group flex h-full flex-col rounded-2xl border border-border bg-[#F8FAFC] p-7 transition-colors hover:border-primary/40"
            >
              <h3 className="text-xl font-bold text-foreground">{c.title}</h3>
              <p className="mt-3 flex-1 text-[17px] leading-relaxed text-[#13233B]">{c.body}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all group-hover:gap-2.5">
                Read more <ArrowRight size={14} />
              </span>
            </Link>
          </FadeUp>
        ))}
      </div>
    </Section>
  );
}

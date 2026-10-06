import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { FadeUp, Kicker } from "@/components/site/ui";
import { BOOK_A_PILOT_PATH } from "@/data/company";

export const H2 = ({ children }: { children: ReactNode }) => (
  <h2 className="mt-12 text-[1.6rem] font-extrabold leading-tight tracking-[-0.5px] text-foreground lg:text-[1.9rem]">
    {children}
  </h2>
);

export const P = ({ children }: { children: ReactNode }) => (
  <p className="mt-5 text-[17px] leading-relaxed text-[#13233B]">{children}</p>
);

export const Bullet = ({ children }: { children: ReactNode }) => (
  <li className="flex gap-3 text-[17px] leading-relaxed text-[#13233B]">
    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
    <span>{children}</span>
  </li>
);

export const Strong = ({ children }: { children: ReactNode }) => (
  <strong className="font-semibold text-foreground">{children}</strong>
);

/** The chrome every post shares: meta, back link, heading, lede and closing card. */
export function BlogArticle({
  title,
  heading,
  description,
  path,
  category,
  date,
  lede,
  children,
  closing,
}: {
  /** Browser and search title. */
  title: string;
  /** Heading on the page, which may be longer than the browser title. */
  heading: string;
  description: string;
  path: string;
  category: string;
  date: string;
  lede: string;
  children: ReactNode;
  closing: string;
}) {
  return (
    <PageShell title={title} description={description} path={path}>
      <article className="bg-hero-gradient pt-28 lg:pt-36">
        <div className="section-container max-w-3xl pb-16">
          <FadeUp>
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
              <ArrowLeft size={16} /> Back to the blog
            </Link>

            <div className="mt-8">
              <Kicker>{category}</Kicker>
            </div>
            <h1 className="mt-4 text-[2.25rem] font-extrabold leading-[1.08] tracking-[-1.5px] lg:text-[2.9rem]">
              {heading}
            </h1>
            <div className="mt-5 flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar size={15} />
              <span>{date}</span>
            </div>

            <p className="mt-8 text-xl font-semibold leading-relaxed text-foreground">{lede}</p>

            {children}

            <div className="mt-14 rounded-2xl border border-border bg-white p-7 shadow-[var(--shadow-card)]">
              <p className="text-[17px] leading-relaxed text-[#13233B]">{closing}</p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link to={BOOK_A_PILOT_PATH} className="btn-pilot px-7 py-3.5 text-base">
                  Book a pilot
                </Link>
                <Link
                  to="/how-it-works"
                  className="inline-flex items-center justify-center rounded-full border border-primary/40 bg-white px-7 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-secondary"
                >
                  See how the data is made
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </article>
    </PageShell>
  );
}

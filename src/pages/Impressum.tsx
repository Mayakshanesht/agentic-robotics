import { PageShell } from "@/components/PageShell";

export default function Impressum() {
  return (
    <PageShell
      title="Impressum — CloudBee Robotics"
      description="Legal information / Impressum for CloudBee Robotics, Aachen, Germany."
      path="/impressum"
    >
      <section className="pt-32 lg:pt-40 pb-20">
        <div className="section-container max-w-3xl">
          <h1 className="font-display font-bold text-4xl lg:text-5xl mb-8">Impressum</h1>
          <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
            <p className="text-xs font-mono uppercase tracking-wider text-accent-blue">
              Placeholder — to be completed by the founder per §5 TMG requirements.
            </p>

            <Section title="Angaben gemäß § 5 TMG">
              <p>
                CloudBee Robotics<br />
                [Street and number]<br />
                52062 Aachen<br />
                Germany
              </p>
            </Section>

            <Section title="Vertreten durch">
              <p>[Founder Name]</p>
            </Section>

            <Section title="Kontakt">
              <p>
                E-Mail: info@cloudbeerobotics.de<br />
                Web: cloudbeerobotics.de
              </p>
            </Section>

            <Section title="Umsatzsteuer-ID">
              <p>Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz: [USt-ID]</p>
            </Section>

            <Section title="Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV">
              <p>[Name]<br />[Address]</p>
            </Section>

            <Section title="Haftungsausschluss">
              <p>
                Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
              </p>
            </Section>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-display font-semibold text-lg text-foreground mb-2">{title}</h2>
      <div className="text-sm leading-relaxed">{children}</div>
    </div>
  );
}

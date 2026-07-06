import { PageShell } from "@/components/PageShell";

export default function Privacy() {
  return (
    <PageShell
      title="Privacy Notice - CloudBee Robotics"
      description="How CloudBee Robotics (Aachen, Germany) processes personal data submitted through this website under GDPR / DSGVO."
      path="/privacy"
    >
      <section className="pt-32 lg:pt-40 pb-20">
        <div className="section-container max-w-3xl">
          <h1 className="font-display font-bold text-4xl lg:text-5xl mb-8">Privacy Notice</h1>
          <div className="space-y-6 text-muted-foreground text-sm leading-relaxed">
            <p className="text-xs font-mono uppercase tracking-wider text-accent-blue">
              GDPR / DSGVO — Data controller: CloudBee Robotics, Aachen, Germany
            </p>

            <Section title="1. What we collect">
              <p>
                When you use a form on this site (contact enquiry, beta / access request,
                job or thesis application, newsletter), we collect only the information you
                voluntarily provide: name, email address, company, message text, and — for
                job applications — additional details such as LinkedIn or portfolio links
                and a cover letter.
              </p>
            </Section>

            <Section title="2. Why we process it">
              <p>
                Data is processed on the legal basis of your explicit consent
                (Art. 6(1)(a) GDPR), which you give by ticking the consent box on the form
                and pressing submit. We use the data solely to respond to your request or
                to evaluate your application. We do not sell your data and do not share it
                with third parties for advertising purposes.
              </p>
            </Section>

            <Section title="3. Where it is stored">
              <p>
                Submissions are stored securely in our backend infrastructure hosted within
                the European Union. Access is restricted to the CloudBee Robotics founding
                team and the specific reviewers required to handle your request.
              </p>
            </Section>

            <Section title="4. Retention">
              <p>
                Contact enquiries and access requests are kept for up to 24 months from your
                last interaction with us. Job / thesis applications are kept for up to 6
                months after the hiring decision, unless you consent to a longer talent-pool
                retention.
              </p>
            </Section>

            <Section title="5. Your rights">
              <p>
                Under the GDPR you have the right to access, rectify, delete, restrict, or
                port your personal data, and to withdraw consent at any time. Requests can
                be sent to{" "}
                <a
                  href="mailto:info@cloudbeerobotics.de"
                  className="text-accent-blue hover:underline"
                >
                  info@cloudbeerobotics.de
                </a>
                . You may also lodge a complaint with the competent data-protection authority.
              </p>
            </Section>

            <Section title="6. Cookies">
              <p>
                This site uses only strictly necessary cookies required for basic
                functionality. We do not use marketing or third-party tracking cookies.
              </p>
            </Section>

            <p className="text-xs text-muted-foreground">
              This notice is provided as an informational summary and does not replace a
              full data-protection agreement. For legal information see our{" "}
              <a href="/impressum" className="text-accent-blue hover:underline">
                Impressum
              </a>
              .
            </p>
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
      <div>{children}</div>
    </div>
  );
}

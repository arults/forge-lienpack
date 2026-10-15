import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="lp-shell">
        {/* Hero — Bounce-style rounded card */}
        <header className="lp-hero">
          <p className="lp-hero-kicker">Pay-app completeness</p>
          <h1>
            One missing waiver.
            <br />
            Another 30 days.
          </h1>
          <p className="lp-hero-sub">
            Completeness sheet. Chase drafts. Zip for the GC.
          </p>
          <div className="lp-hero-actions">
            <Link href="/trial" className="lp-btn lp-btn-primary">
              Free trial
            </Link>
            <Link href="/sheet" className="lp-btn lp-btn-ghost">
              See sample sheet
            </Link>
          </div>
          <div className="lp-pill-row" aria-label="Highlights">
            <span className="lp-pill">Specialty trades</span>
            <span className="lp-pill">AIA G702 / G703</span>
            <span className="lp-pill">GC portals</span>
            <span className="lp-pill">First sheet free</span>
          </div>
        </header>

        {/* Who + Why */}
        <section className="lp-section" id="why">
          <h2 className="lp-section-title">Built for the people who assemble the package</h2>
          <p className="lp-section-lead">
            Project accountants, billing coordinators, and PMs at US specialty
            trade subcontractors — electrical, plumbing, HVAC, and the like —
            who bill on AIA forms or GC portals.
          </p>
          <div className="lp-why-list">
            <div className="lp-why-item">
              <strong>The cash is stuck</strong>
              <span>
                One missing lower-tier lien waiver and the GC rejects the whole
                pay package. Another billing cycle while you chase vendors by email.
              </span>
            </div>
            <div className="lp-why-item">
              <strong>Paper and inboxes do not scale</strong>
              <span>
                Spreadsheets, forwarded PDFs, and “did you send that waiver?”
                threads burn the week you need for the next pay app.
              </span>
            </div>
            <div className="lp-why-item">
              <strong>You still own the submit</strong>
              <span>
                We chase documents and assemble the pack. You send the emails and
                upload to Textura, GCPay, Procore, or the GC portal. Not legal advice.
              </span>
            </div>
          </div>
          <div className="lp-trust">
            <span>Document chase only</span>
            <span>Not payment software</span>
            <span>Not Textura / GCPay / Procore</span>
          </div>
        </section>

        {/* How it works */}
        <section className="lp-section" id="how">
          <h2 className="lp-section-title">How it works</h2>
          <p className="lp-section-lead">
            Three clear steps from rejected package to ready-to-submit zip.
          </p>
          <div className="lp-grid-3">
            <article className="lp-card">
              <span className="lp-step-num">1</span>
              <h3>Completeness sheet</h3>
              <p>
                Every required doc for this cycle — status, what&apos;s missing,
                what&apos;s on file.
              </p>
            </article>
            <article className="lp-card">
              <span className="lp-step-num">2</span>
              <h3>Chase drafts</h3>
              <p>
                Ready-to-send emails for missing lower-tier waivers. You send;
                we don&apos;t.
              </p>
            </article>
            <article className="lp-card">
              <span className="lp-step-num">3</span>
              <h3>Zip for the GC</h3>
              <p>
                Collected PDFs packed for the GC portal so this month&apos;s
                package gets accepted.
              </p>
            </article>
          </div>
        </section>

        {/* What you get */}
        <section className="lp-section" id="deliverables">
          <h2 className="lp-section-title">What you get</h2>
          <p className="lp-section-lead">
            A concrete deliverable for the billing cycle that is stuck — not a
            vague “platform.”
          </p>
          <div className="lp-grid-3">
            <article className="lp-card">
              <h3>Pay-App Completeness Sheet</h3>
              <p>Status of every waiver and supporting doc the GC expects this period.</p>
            </article>
            <article className="lp-card">
              <h3>Chase email drafts</h3>
              <p>Copy ready for your vendors. Sent from your address, on your terms.</p>
            </article>
            <article className="lp-card">
              <h3>Submission zip</h3>
              <p>Collected PDFs organized for portal upload — you hit submit.</p>
            </article>
          </div>
        </section>

        {/* Pricing strip */}
        <section className="lp-section" id="pricing">
          <div className="lp-card" style={{ padding: "28px 24px" }}>
            <h2 className="lp-section-title" style={{ marginBottom: 8 }}>
              Pricing
            </h2>
            <p className="lp-section-lead" style={{ marginBottom: 18 }}>
              Free trial — first Completeness Sheet free. Then $499/job or $299
              checklist-only. Typical turnaround 24–48h.
            </p>
            <Link href="/trial" className="lp-btn lp-btn-primary">
              Start free trial
            </Link>
          </div>
        </section>

        {/* CTA band — Bounce dark band with amber button */}
        <section className="lp-cta-band" aria-label="Get started">
          <h2>Stop losing another 30 days</h2>
          <p>
            Get your first Completeness Sheet free. Tell us the GC rules and
            what&apos;s missing — we assemble the chase.
          </p>
          <div className="lp-hero-actions">
            <Link href="/trial" className="lp-btn lp-btn-primary">
              Free trial
            </Link>
            <Link href="/sheet" className="lp-btn lp-btn-on-dark">
              Sample sheet
            </Link>
          </div>
        </section>

        <footer className="lp-footer">
          <div>
            <div className="lp-logo" style={{ marginBottom: 8 }}>
              <span className="lp-logo-mark" aria-hidden />
              LienPack
            </div>
            <p style={{ margin: 0, maxWidth: "36ch" }}>
              Document chase only. Not legal advice. Not payment software.
            </p>
          </div>
          <div className="lp-footer-links">
            <Link href="/sheet">Sample sheet</Link>
            <Link href="/trial">Free trial</Link>
            <Link href="/start">Full intake</Link>
            <Link href="/status">Status</Link>
            <Link href="/non-goals">What we&apos;re not</Link>
          </div>
        </footer>
      </div>

      <div className="lp-sticky-mobile">
        <Link href="/trial" className="lp-btn lp-btn-primary">
          Free trial
        </Link>
      </div>
      <div className="lp-mobile-pad" aria-hidden />
    </>
  );
}

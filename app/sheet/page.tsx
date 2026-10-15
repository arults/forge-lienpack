import type { CSSProperties } from "react";
import Link from "next/link";

const ROWS = [
  {
    doc: "Conditional waiver — Tier 1 (your trade)",
    status: "Received",
    note: "Signed PDF on file",
  },
  {
    doc: "Conditional waiver — Plumbing sub",
    status: "Missing",
    note: "Chase draft ready",
  },
  {
    doc: "Conditional waiver — Electrical sub",
    status: "Chasing",
    note: "Emailed 2026-10-14",
  },
  {
    doc: "G702 Application & Certificate",
    status: "Received",
    note: "Matches period Sep 2026",
  },
  {
    doc: "G703 Continuation Sheet",
    status: "Received",
    note: "Line items match schedule",
  },
  {
    doc: "Insurance COI (job-specific)",
    status: "Expired",
    note: "Needs renewal before portal submit",
  },
];

const STATUS_STYLE: Record<string, CSSProperties> = {
  Received: {
    background: "#ecfdf5",
    color: "#065f46",
    border: "1px solid #a7f3d0",
  },
  Missing: {
    background: "#fff1f2",
    color: "#9f1239",
    border: "1px solid #fecdd3",
  },
  Chasing: {
    background: "var(--lp-amber-50)",
    color: "var(--lp-amber-700)",
    border: "1px solid var(--lp-amber-200)",
  },
  Expired: {
    background: "#fff7ed",
    color: "#9a3412",
    border: "1px solid #fed7aa",
  },
};

export default function SheetPage() {
  return (
    <div className="lp-shell">
      <div className="lp-page">
        <Link href="/" className="lp-back">
          ← LienPack
        </Link>
        <header style={{ marginBottom: 24 }}>
          <p
            style={{
              margin: "0 0 8px",
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--lp-amber-700)",
            }}
          >
            Sample deliverable
          </p>
          <h1
            style={{
              margin: 0,
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              fontWeight: 600,
              letterSpacing: "-0.02em",
            }}
          >
            Pay-App Completeness Sheet
          </h1>
          <p style={{ margin: "12px 0 0", color: "var(--lp-text-muted)", lineHeight: 1.55 }}>
            Example for a fictional Sep 2026 billing cycle. Your free trial sheet
            looks like this — every required doc, status, and a chase draft for
            what is still missing.
          </p>
        </header>

        <div className="lp-card" style={{ marginBottom: 16, background: "var(--lp-bg-sub)" }}>
          <p style={{ margin: "0 0 4px", fontSize: 14 }}>
            <strong>Project:</strong> Riverside Tower — Level 12 fit-out
          </p>
          <p style={{ margin: "0 0 4px", fontSize: 14 }}>
            <strong>GC:</strong> Example General LLC
          </p>
          <p style={{ margin: 0, fontSize: 14 }}>
            <strong>Period:</strong> Sep 1–30, 2026
          </p>
          <p style={{ margin: "12px 0 0", fontSize: 13, color: "var(--lp-slate-500)" }}>
            Document chase only — not legal advice.
          </p>
        </div>

        <div
          className="lp-card"
          style={{ padding: 0, overflow: "hidden", marginBottom: 16 }}
        >
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14, textAlign: "left" }}>
            <thead>
              <tr style={{ background: "var(--lp-bg-sub)", color: "var(--lp-slate-500)" }}>
                <th style={{ padding: "12px 16px", fontWeight: 500 }}>Document</th>
                <th style={{ padding: "12px 16px", fontWeight: 500 }}>Status</th>
                <th
                  style={{ padding: "12px 16px", fontWeight: 500 }}
                  className="hidden sm:table-cell"
                >
                  Note
                </th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r) => (
                <tr key={r.doc} style={{ borderTop: "1px solid var(--lp-border)" }}>
                  <td style={{ padding: "12px 16px", color: "var(--lp-slate-900)" }}>{r.doc}</td>
                  <td style={{ padding: "12px 16px" }}>
                    <span
                      style={{
                        display: "inline-flex",
                        borderRadius: 999,
                        padding: "2px 10px",
                        fontSize: 12,
                        fontWeight: 600,
                        ...STATUS_STYLE[r.status],
                      }}
                    >
                      {r.status}
                    </span>
                  </td>
                  <td
                    style={{ padding: "12px 16px", color: "var(--lp-text-muted)" }}
                    className="hidden sm:table-cell"
                  >
                    {r.note}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <section className="lp-card" style={{ marginBottom: 24 }}>
          <p style={{ margin: "0 0 10px", fontWeight: 600, fontSize: 14 }}>
            Sample chase draft (you send)
          </p>
          <pre
            style={{
              margin: 0,
              whiteSpace: "pre-wrap",
              borderRadius: 12,
              background: "var(--lp-bg-sub)",
              padding: 14,
              fontSize: 12,
              lineHeight: 1.55,
              color: "var(--lp-slate-700)",
              fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
            }}
          >{`Hi {{name}} —

Quick ask for Riverside Tower (Sep pay app). We still need your conditional lien waiver for work through Sep 30 so the GC will accept this month's package.

Please reply with the signed PDF (or say if something blocks it). Happy to use your preferred form.

Thanks,
{{your company}} via LienPack`}</pre>
          <p style={{ margin: "10px 0 0", fontSize: 12, color: "var(--lp-slate-500)" }}>
            We only draft using published contacts you provide. You send from your address.
          </p>
        </section>

        <Link href="/trial" className="lp-btn lp-btn-primary">
          Free trial — get your first sheet
        </Link>
      </div>
    </div>
  );
}

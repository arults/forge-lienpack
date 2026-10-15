import Link from "next/link";

const STEPS = [
  { id: "received", label: "Received", blurb: "Intake landed. We confirm GC rules." },
  { id: "chasing", label: "Chasing", blurb: "Missing waivers/docs being chased." },
  { id: "ready", label: "Ready", blurb: "Completeness sheet + zip sent to you." },
];

export default function StatusPage() {
  return (
    <div className="lp-shell">
      <div className="lp-page">
        <Link href="/" className="lp-back">
          ← LienPack
        </Link>
        <h1 style={{ margin: "0 0 8px", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 600, letterSpacing: "-0.02em" }}>
          Job status
        </h1>
        <p style={{ margin: "0 0 24px", color: "var(--lp-text-muted)", fontSize: 14, lineHeight: 1.55 }}>
          Human-powered. After you submit intake, we email you which step you are on.
          No fake live tracker.
        </p>
        <ol style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 12 }}>
          {STEPS.map((s, i) => (
            <li key={s.id} className="lp-card">
              <p style={{ margin: 0, fontSize: 14, fontWeight: 600 }}>
                {i + 1}. {s.label}
              </p>
              <p style={{ margin: "6px 0 0", fontSize: 14, color: "var(--lp-text-muted)" }}>{s.blurb}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

import Link from "next/link";

export default function NonGoals() {
  return (
    <div className="lp-shell">
      <div className="lp-page">
        <Link href="/" className="lp-back">
          ← LienPack
        </Link>
        <h1 style={{ margin: "0 0 16px", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 600, letterSpacing: "-0.02em" }}>
          What LienPack is not
        </h1>
        <ul className="lp-card" style={{ margin: 0, padding: "20px 20px 20px 36px", color: "var(--lp-slate-700)", lineHeight: 1.6 }}>
          <li>Not Textura, GCPay, or Procore Financials</li>
          <li>Not lien-rights legal advice</li>
          <li>Not payment processing or escrow</li>
          <li>Not a full construction AR suite</li>
          <li>Document chase + completeness checklist only</li>
        </ul>
      </div>
    </div>
  );
}

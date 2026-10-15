"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

export default function StartJob() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const lines = [
      "LienPack job intake",
      "",
      `Email: ${fd.get("email")}`,
      `Company: ${fd.get("company")}`,
      `GC: ${fd.get("gc")}`,
      `Project: ${fd.get("project")}`,
      `Billing period: ${fd.get("period")}`,
      `Portal (Textura/GCPay/Procore/other): ${fd.get("portal")}`,
      "",
      "Required docs / what GC rejected:",
      String(fd.get("missing") || ""),
      "",
      "Lower-tier vendors (name + published email):",
      String(fd.get("vendors") || ""),
    ];
    const subject = encodeURIComponent(`LienPack job — ${fd.get("project") || "pay app"}`);
    const body = encodeURIComponent(lines.join("\n"));
    window.location.href = `mailto:forge7408@agentmail.to?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <div className="lp-shell">
      <div className="lp-page">
        <Link href="/" className="lp-back">
          ← LienPack
        </Link>
        <h1 style={{ margin: "0 0 8px", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 600, letterSpacing: "-0.02em" }}>
          Start a job
        </h1>
        <p style={{ margin: "0 0 24px", color: "var(--lp-text-muted)", fontSize: 14, lineHeight: 1.55 }}>
          Full intake for a paid Completeness Sheet. Opens email to forge7408@agentmail.to.
        </p>
        <form onSubmit={onSubmit} className="lp-card" style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <input name="email" type="email" required placeholder="you@subcontractor.com" className="lp-input" />
          <input name="company" type="text" placeholder="Company" className="lp-input" />
          <input name="gc" type="text" placeholder="GC name" className="lp-input" />
          <input name="project" type="text" placeholder="Project / job name" className="lp-input" />
          <input name="period" type="text" placeholder="Billing period (e.g. Sep 2026)" className="lp-input" />
          <input name="portal" type="text" placeholder="Portal (Textura / GCPay / Procore / other)" className="lp-input" />
          <textarea name="missing" rows={4} placeholder="Required docs / what GC rejected" className="lp-input" style={{ minHeight: 96 }} />
          <textarea name="vendors" rows={3} placeholder="Lower-tier vendors (name + published email)" className="lp-input" style={{ minHeight: 80 }} />
          <button type="submit" className="lp-btn lp-btn-primary">
            Email intake
          </button>
        </form>
        {sent && (
          <p style={{ marginTop: 14, fontSize: 14, color: "var(--lp-text-muted)" }}>
            Opening your email app…
          </p>
        )}
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

export default function Trial() {
  const [status, setStatus] = useState<"idle" | "ok" | "bad">("idle");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const eaddr = email.trim();
    // Lightweight check for mailto MVP (not full RFC)
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(eaddr)) {
      setStatus("bad");
      return;
    }
    const subject = encodeURIComponent("LienPack free trial — pay app completeness");
    const body = encodeURIComponent(
      `Hi LienPack,\n\nFree trial request for a pay-app completeness sheet.\n\nEmail: ${eaddr}\nCompany: ${company.trim() || "(not given)"}\nGC name:\nProject:\nBilling period:\nWhat the GC rejected / missing (if known):\n\nThanks`
    );
    window.location.href = `mailto:forge7408@agentmail.to?subject=${subject}&body=${body}`;
    setStatus("ok");
  }

  return (
    <div className="lp-shell">
      <div className="lp-page">
        <Link href="/" className="lp-back">
          ← LienPack
        </Link>

        <header style={{ marginBottom: 28 }}>
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
            Free trial
          </p>
          <h1
            style={{
              margin: 0,
              fontSize: "clamp(1.6rem, 3vw, 2.1rem)",
              fontWeight: 600,
              letterSpacing: "-0.02em",
            }}
          >
            First Completeness Sheet free
          </h1>
          <p style={{ margin: "12px 0 0", color: "var(--lp-text-muted)", lineHeight: 1.55, maxWidth: "40ch" }}>
            No card. Opens your email to forge7408@agentmail.to with a short intake.
          </p>
        </header>

        <form onSubmit={onSubmit} noValidate className="lp-card" style={{ maxWidth: 440, display: "flex", flexDirection: "column", gap: 12 }}>
          <input
            type="text"
            inputMode="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => { setEmail(e.target.value); if (status === "bad") setStatus("idle"); }}
            placeholder="you@subcontractor.com"
            className="lp-input"
            aria-invalid={status === "bad"}
          />
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Company name"
            className="lp-input"
          />
          <button type="submit" className="lp-btn lp-btn-primary" style={{ width: "100%" }}>
            Free trial — email intake
          </button>
        </form>

        {status === "bad" && (
          <p style={{ marginTop: 14, fontSize: 14, color: "var(--lp-amber-700)" }}>
            Enter a valid email like you@company.com.
          </p>
        )}

        {status === "ok" && (
          <p style={{ marginTop: 14, fontSize: 14, color: "var(--lp-text-muted)" }}>
            Opening your email app to forge7408@agentmail.to…
          </p>
        )}

        <p style={{ marginTop: 24, fontSize: 14, color: "var(--lp-slate-500)" }}>
          Need the long form?{" "}
          <Link href="/start" style={{ textDecoration: "underline", textUnderlineOffset: 2 }}>
            Start a job
          </Link>
          {" · "}
          <Link href="/sheet" style={{ textDecoration: "underline", textUnderlineOffset: 2 }}>
            Sample sheet
          </Link>
        </p>

        <p style={{ marginTop: 16, fontSize: 12, color: "var(--lp-slate-400)", maxWidth: "42ch", lineHeight: 1.5 }}>
          Document chase only. Not legal advice. Not payment software.
        </p>
      </div>
    </div>
  );
}

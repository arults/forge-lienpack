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
    <div className="space-y-6">
      <Link href="/" className="text-sm text-zinc-500 underline-offset-2 hover:underline">
        ← LienPack
      </Link>
      <h1 className="text-2xl font-semibold tracking-tight">Start a job</h1>
      <p className="text-sm text-zinc-600">
        Concierge intake. We reply with a Completeness Sheet within 24–48h.
      </p>
      <form onSubmit={onSubmit} className="space-y-3">
        {(
          [
            ["email", "email", "Your email", true],
            ["company", "text", "Your company", true],
            ["gc", "text", "General contractor", true],
            ["project", "text", "Project name", true],
            ["period", "text", "Billing period (e.g. Sep 2026)", true],
            ["portal", "text", "Portal (Textura / GCPay / Procore / email)", false],
          ] as const
        ).map(([name, type, ph, req]) => (
          <input
            key={name}
            name={name}
            type={type}
            required={req}
            placeholder={ph}
            className="w-full rounded-md border border-zinc-300 px-3 py-2.5 text-sm outline-none focus:border-zinc-900"
          />
        ))}
        <textarea
          name="missing"
          required
          rows={4}
          placeholder="What docs are required / what did the GC reject?"
          className="w-full rounded-md border border-zinc-300 px-3 py-2.5 text-sm outline-none focus:border-zinc-900"
        />
        <textarea
          name="vendors"
          rows={3}
          placeholder="Lower-tier vendors (published emails only)"
          className="w-full rounded-md border border-zinc-300 px-3 py-2.5 text-sm outline-none focus:border-zinc-900"
        />
        <button
          type="submit"
          className="rounded-md bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-zinc-800"
        >
          Submit intake
        </button>
      </form>
      {sent && (
        <p className="text-sm text-zinc-600">Opening email to forge7408@agentmail.to…</p>
      )}
    </div>
  );
}

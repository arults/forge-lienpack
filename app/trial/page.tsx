"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

export default function Trial() {
  const [status, setStatus] = useState<"idle" | "ok">("idle");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const eaddr = email.trim();
    if (!eaddr.includes("@")) return;
    const subject = encodeURIComponent("LienPack free trial — pay app completeness");
    const body = encodeURIComponent(
      `Hi LienPack,\n\nFree trial request for a pay-app completeness sheet.\n\nEmail: ${eaddr}\nCompany: ${company.trim() || "(not given)"}\nGC name:\nProject:\nBilling period:\nWhat the GC rejected / missing (if known):\n\nThanks`
    );
    window.location.href = `mailto:forge7408@agentmail.to?subject=${subject}&body=${body}`;
    setStatus("ok");
  }

  return (
    <div className="space-y-8 pb-8">
      <Link href="/" className="text-sm text-zinc-500 underline-offset-2 hover:underline">
        ← LienPack
      </Link>

      <header className="space-y-3">
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
          Free trial
        </h1>
        <p className="max-w-md text-base leading-relaxed text-zinc-600">
          First Completeness Sheet free. No card. Opens your email to
          forge7408@agentmail.to with a short intake.
        </p>
      </header>

      <form onSubmit={onSubmit} className="max-w-md space-y-3">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@subcontractor.com"
          className="w-full rounded-md border border-zinc-300 px-3 py-2.5 text-sm outline-none focus:border-zinc-900"
        />
        <input
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          placeholder="Company name"
          className="w-full rounded-md border border-zinc-300 px-3 py-2.5 text-sm outline-none focus:border-zinc-900"
        />
        <button
          type="submit"
          className="w-full rounded-md bg-zinc-900 px-5 py-3 text-sm font-medium text-white hover:bg-zinc-800 sm:w-auto"
        >
          Free trial — email intake
        </button>
      </form>

      {status === "ok" && (
        <p className="text-sm text-zinc-600">Opening your email app to forge7408@agentmail.to…</p>
      )}

      <p className="text-sm text-zinc-500">
        Need the long form?{" "}
        <Link href="/start" className="underline underline-offset-2 hover:text-zinc-800">
          Start a job
        </Link>
        {" · "}
        <Link href="/sheet" className="underline underline-offset-2 hover:text-zinc-800">
          Sample sheet
        </Link>
      </p>

      <p className="max-w-md text-xs leading-relaxed text-zinc-400">
        Document chase only. Not legal advice. Not payment software.
      </p>
    </div>
  );
}

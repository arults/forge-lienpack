"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

export default function Home() {
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
    <div className="space-y-10">
      <header className="space-y-4">
        <p className="text-sm font-medium tracking-wide text-zinc-500">LienPack</p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Missing waivers. Stuck cash.
        </h1>
        <p className="text-lg leading-relaxed text-zinc-600">
          We chase the lien waivers and docs so this month&apos;s pay app gets
          accepted — not kicked back another cycle.
        </p>
        <p className="text-sm font-medium text-zinc-800">
          Free trial: first Completeness Sheet free (first 10 subs). No card.
        </p>
      </header>

      <div className="flex flex-wrap gap-3">
        <a
          href="#trial"
          className="inline-flex items-center justify-center rounded-md bg-zinc-900 px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-zinc-800"
        >
          Free trial
        </a>
        <Link
          href="/sheet"
          className="inline-flex items-center justify-center rounded-md border border-zinc-300 bg-white px-5 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
        >
          See sample sheet
        </Link>
        <Link
          href="/start"
          className="inline-flex items-center justify-center rounded-md border border-zinc-200 bg-zinc-50 px-5 py-3 text-sm font-medium text-zinc-700 hover:bg-zinc-100"
        >
          Start a job
        </Link>
      </div>

      <section className="space-y-3 rounded-lg border border-zinc-200 bg-zinc-50 p-5 text-sm text-zinc-700">
        <p className="font-medium text-zinc-900">What you get</p>
        <ol className="list-decimal space-y-1 pl-5">
          <li>Pay-App Completeness Sheet (every required doc + status)</li>
          <li>Draft chase emails for missing lower-tier waivers</li>
          <li>Zip of collected PDFs ready for the GC portal</li>
        </ol>
        <p className="text-zinc-500">
          Then $499/job or $299 checklist-only. 24–48h turnaround. Document chase only — not legal advice.
        </p>
      </section>

      <section id="trial" className="space-y-3 rounded-lg border-2 border-zinc-900 bg-white p-5 shadow-sm">
        <p className="text-lg font-semibold text-zinc-900">Start free trial</p>
        <p className="text-sm text-zinc-600">
          No card. Opens your email to forge7408@agentmail.to with a short intake.
        </p>
        <form onSubmit={onSubmit} className="space-y-3">
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
        <p className="text-xs text-zinc-500">
          Prefer the long form?{" "}
          <Link href="/start" className="underline underline-offset-2 hover:text-zinc-800">
            Start a job
          </Link>{" "}
          ·{" "}
          <Link href="/sheet" className="underline underline-offset-2 hover:text-zinc-800">
            Sample sheet
          </Link>
        </p>
      </section>

      <div className="flex flex-wrap gap-4 text-sm text-zinc-500">
        <Link href="/sheet" className="underline underline-offset-2 hover:text-zinc-800">
          Sample sheet
        </Link>
        <Link href="/status" className="underline underline-offset-2 hover:text-zinc-800">
          Status
        </Link>
        <Link href="/non-goals" className="underline underline-offset-2 hover:text-zinc-800">
          What LienPack is not
        </Link>
      </div>

      {/* Sticky mobile Free trial bar */}
      <div className="fixed inset-x-0 bottom-0 border-t border-zinc-200 bg-white/95 p-3 backdrop-blur sm:hidden">
        <a
          href="#trial"
          className="flex w-full items-center justify-center rounded-md bg-zinc-900 px-5 py-3 text-sm font-medium text-white"
        >
          Free trial
        </a>
      </div>
      <div className="h-16 sm:hidden" aria-hidden />
    </div>
  );
}

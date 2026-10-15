"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-16 pb-8 sm:space-y-20">
      {/* Hero */}
      <header className="space-y-5 pt-2">
        <p className="text-xs font-medium uppercase tracking-[0.14em] text-zinc-400">
          LienPack
        </p>
        <h1 className="text-[1.85rem] font-semibold leading-[1.15] tracking-tight text-zinc-900 sm:text-4xl sm:leading-[1.12]">
          One missing waiver.
          <br />
          Another 30 days.
        </h1>
        <p className="max-w-md text-base leading-relaxed text-zinc-600 sm:text-lg">
          Completeness sheet. Chase drafts. Zip for the GC.
        </p>
        <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center">
          <Link
            href="/trial"
            className="inline-flex min-h-11 items-center justify-center rounded-md bg-zinc-900 px-6 py-3 text-sm font-medium text-white hover:bg-zinc-800"
          >
            Free trial
          </Link>
          <Link
            href="/sheet"
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-zinc-200 bg-white px-6 py-3 text-sm font-medium text-zinc-800 hover:bg-zinc-50"
          >
            See sample sheet
          </Link>
        </div>
      </header>

      {/* Who */}
      <section className="space-y-3">
        <h2 className="text-xs font-medium uppercase tracking-[0.12em] text-zinc-400">
          Who it&apos;s for
        </h2>
        <p className="max-w-md text-base leading-relaxed text-zinc-800">
          Project accountants, billing coordinators, and PMs at US specialty
          trade subcontractors — electrical, plumbing, HVAC, and the like —
          who bill on AIA G702/G703 or GC portals.
        </p>
      </section>

      {/* Problem */}
      <section className="space-y-3">
        <h2 className="text-xs font-medium uppercase tracking-[0.12em] text-zinc-400">
          The problem
        </h2>
        <p className="max-w-md text-base leading-relaxed text-zinc-800">
          One missing lower-tier lien waiver and the GC rejects the whole pay
          package. Cash sits another billing cycle while you chase vendors by
          email.
        </p>
      </section>

      {/* How */}
      <section className="space-y-6">
        <h2 className="text-xs font-medium uppercase tracking-[0.12em] text-zinc-400">
          How it works
        </h2>
        <ol className="space-y-6">
          <li className="flex gap-4">
            <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-zinc-200 text-xs font-medium text-zinc-500">
              1
            </span>
            <div className="space-y-1">
              <p className="font-medium text-zinc-900">Completeness sheet</p>
              <p className="text-sm leading-relaxed text-zinc-600">
                Every required doc for this cycle — status, what&apos;s missing,
                what&apos;s on file.
              </p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-zinc-200 text-xs font-medium text-zinc-500">
              2
            </span>
            <div className="space-y-1">
              <p className="font-medium text-zinc-900">Chase drafts</p>
              <p className="text-sm leading-relaxed text-zinc-600">
                Ready-to-send emails for missing lower-tier waivers. You send;
                we don&apos;t.
              </p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-zinc-200 text-xs font-medium text-zinc-500">
              3
            </span>
            <div className="space-y-1">
              <p className="font-medium text-zinc-900">Zip for the GC</p>
              <p className="text-sm leading-relaxed text-zinc-600">
                Collected PDFs packed for the GC portal so this month&apos;s
                package gets accepted.
              </p>
            </div>
          </li>
        </ol>
      </section>

      {/* Pricing */}
      <section className="space-y-3 border-t border-zinc-100 pt-10">
        <h2 className="text-xs font-medium uppercase tracking-[0.12em] text-zinc-400">
          Pricing
        </h2>
        <p className="max-w-md text-base leading-relaxed text-zinc-800">
          Free trial — first Completeness Sheet free. Then $499/job or $299
          checklist-only. 24–48h turnaround.
        </p>
        <Link
          href="/trial"
          className="inline-flex min-h-11 items-center justify-center rounded-md bg-zinc-900 px-6 py-3 text-sm font-medium text-white hover:bg-zinc-800"
        >
          Free trial
        </Link>
      </section>

      {/* Explicit non-claims */}
      <section className="space-y-2 border-t border-zinc-100 pt-8">
        <p className="max-w-md text-sm leading-relaxed text-zinc-500">
          Document chase only. Not legal advice. Not payment software. Not
          Textura, GCPay, or Procore.
        </p>
        <div className="flex flex-wrap gap-x-4 gap-y-2 pt-2 text-sm text-zinc-500">
          <Link href="/sheet" className="underline underline-offset-2 hover:text-zinc-800">
            Sample sheet
          </Link>
          <Link href="/trial" className="underline underline-offset-2 hover:text-zinc-800">
            Free trial
          </Link>
          <Link href="/start" className="underline underline-offset-2 hover:text-zinc-800">
            Full intake
          </Link>
          <Link href="/status" className="underline underline-offset-2 hover:text-zinc-800">
            Status
          </Link>
          <Link href="/non-goals" className="underline underline-offset-2 hover:text-zinc-800">
            What we&apos;re not
          </Link>
        </div>
      </section>

      {/* Sticky mobile Free trial */}
      <div className="fixed inset-x-0 bottom-0 z-10 border-t border-zinc-200 bg-white/95 p-3 backdrop-blur sm:hidden">
        <Link
          href="/trial"
          className="flex min-h-11 w-full items-center justify-center rounded-md bg-zinc-900 px-5 py-3 text-sm font-medium text-white"
        >
          Free trial
        </Link>
      </div>
      <div className="h-16 sm:hidden" aria-hidden />
    </div>
  );
}

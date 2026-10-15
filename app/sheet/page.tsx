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

const STATUS_CLASS: Record<string, string> = {
  Received: "bg-emerald-50 text-emerald-800 border-emerald-200",
  Missing: "bg-rose-50 text-rose-800 border-rose-200",
  Chasing: "bg-amber-50 text-amber-900 border-amber-200",
  Expired: "bg-orange-50 text-orange-900 border-orange-200",
};

export default function SheetPage() {
  return (
    <div className="space-y-6">
      <Link href="/" className="text-sm text-zinc-500 underline-offset-2 hover:underline">
        ← LienPack
      </Link>
      <header className="space-y-2">
        <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
          Sample deliverable
        </p>
        <h1 className="text-2xl font-semibold tracking-tight">Pay-App Completeness Sheet</h1>
        <p className="text-sm text-zinc-600">
          Example for a fictional Sep 2026 billing cycle. Your free trial sheet looks like this —
          every required doc, status, and a chase draft for what is still missing.
        </p>
      </header>

      <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-4 text-sm text-zinc-700">
        <p>
          <span className="font-medium text-zinc-900">Project:</span> Riverside Tower — Level 12 fit-out
        </p>
        <p>
          <span className="font-medium text-zinc-900">GC:</span> Example General LLC
        </p>
        <p>
          <span className="font-medium text-zinc-900">Period:</span> Sep 1–30, 2026
        </p>
        <p className="mt-2 text-zinc-500">Document chase only — not legal advice.</p>
      </div>

      <div className="overflow-hidden rounded-lg border border-zinc-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-zinc-50 text-zinc-500">
            <tr>
              <th className="px-3 py-2 font-medium">Document</th>
              <th className="px-3 py-2 font-medium">Status</th>
              <th className="hidden px-3 py-2 font-medium sm:table-cell">Note</th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map((r) => (
              <tr key={r.doc} className="border-t border-zinc-200">
                <td className="px-3 py-2.5 text-zinc-900">{r.doc}</td>
                <td className="px-3 py-2.5">
                  <span
                    className={`inline-flex rounded-full border px-2 py-0.5 text-xs font-medium ${STATUS_CLASS[r.status]}`}
                  >
                    {r.status}
                  </span>
                </td>
                <td className="hidden px-3 py-2.5 text-zinc-600 sm:table-cell">{r.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="space-y-2 rounded-lg border border-zinc-200 bg-white p-4">
        <p className="text-sm font-medium text-zinc-900">Sample chase draft (you send)</p>
        <pre className="whitespace-pre-wrap rounded-md bg-zinc-50 p-3 text-xs leading-relaxed text-zinc-700">
{`Hi {{name}} —

Quick ask for Riverside Tower (Sep pay app). We still need your conditional lien waiver for work through Sep 30 so the GC will accept this month's package.

Please reply with the signed PDF (or say if something blocks it). Happy to use your preferred form.

Thanks,
{{your company}} via LienPack`}
        </pre>
        <p className="text-xs text-zinc-500">
          We only draft using published contacts you provide. You send from your address.
        </p>
      </section>

      <a
        href="/#trial"
        className="inline-flex w-full items-center justify-center rounded-md bg-zinc-900 px-5 py-3 text-sm font-medium text-white hover:bg-zinc-800 sm:w-auto"
      >
        Free trial — get your first sheet
      </a>
    </div>
  );
}

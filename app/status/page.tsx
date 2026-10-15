import Link from "next/link";

const STEPS = [
  { id: "received", label: "Received", blurb: "Intake landed. We confirm GC rules." },
  { id: "chasing", label: "Chasing", blurb: "Missing waivers/docs being chased." },
  { id: "ready", label: "Ready", blurb: "Completeness sheet + zip sent to you." },
];

export default function StatusPage() {
  return (
    <div className="space-y-6">
      <Link href="/" className="text-sm text-zinc-500 underline-offset-2 hover:underline">
        ← LienPack
      </Link>
      <h1 className="text-2xl font-semibold tracking-tight">Job status</h1>
      <p className="text-sm text-zinc-600">
        Human-powered. After you submit intake, we email you which step you are on.
        No fake live tracker.
      </p>
      <ol className="space-y-3">
        {STEPS.map((s, i) => (
          <li key={s.id} className="rounded-lg border border-zinc-200 p-4">
            <p className="text-sm font-medium text-zinc-900">
              {i + 1}. {s.label}
            </p>
            <p className="mt-1 text-sm text-zinc-600">{s.blurb}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

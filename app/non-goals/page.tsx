import Link from "next/link";

export default function NonGoals() {
  return (
    <div className="space-y-6">
      <Link href="/" className="text-sm text-zinc-500 underline-offset-2 hover:underline">
        ← LienPack
      </Link>
      <h1 className="text-2xl font-semibold tracking-tight">What LienPack is not</h1>
      <ul className="list-disc space-y-2 pl-5 text-zinc-700">
        <li>Not Textura, GCPay, or Procore Financials</li>
        <li>Not lien-rights legal advice</li>
        <li>Not payment processing or escrow</li>
        <li>Not a full construction AR suite</li>
        <li>Document chase + completeness checklist only</li>
      </ul>
    </div>
  );
}

#!/usr/bin/env node
/** Route smoke: fetch live URLs and assert key copy. Usage: node scripts/smoke.mjs [base] */
const base = (process.argv[2] || "https://forge-lienpack.vercel.app").replace(/\/$/, "");
const checks = [
  { path: "/", must: ["Free trial", "Missing waivers"] },
  { path: "/sheet", must: ["Completeness Sheet", "Sample chase draft"] },
  { path: "/start", must: ["Start a job"] },
  { path: "/status", must: ["Received", "Chasing", "Ready"] },
  { path: "/non-goals", must: ["not"] },
];
let failed = 0;
for (const c of checks) {
  const url = base + c.path;
  try {
    const res = await fetch(url, { redirect: "follow" });
    const text = await res.text();
    const miss = c.must.filter((m) => !text.includes(m));
    if (!res.ok || miss.length) {
      console.error("FAIL", url, res.status, miss);
      failed++;
    } else {
      console.log("OK", url);
    }
  } catch (e) {
    console.error("FAIL", url, e.message);
    failed++;
  }
}
process.exit(failed ? 1 : 0);

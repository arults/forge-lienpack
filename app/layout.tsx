import type { Metadata } from "next";
import { Sora } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "LienPack — One missing waiver. Another 30 days.",
  description:
    "Pay-app completeness for US specialty trade subcontractors. Completeness sheet, chase drafts, zip for the GC. Free trial. Not legal advice. Not payment software.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${sora.variable} antialiased`}>
        <div className="lp-nav">
          <div className="lp-nav-inner">
            <Link href="/" className="lp-logo">
              <span className="lp-logo-mark" aria-hidden />
              LienPack
            </Link>
            <nav className="lp-nav-links" aria-label="Primary">
              <a href="/#why">Why</a>
              <a href="/#how">How</a>
              <a href="/#deliverables">What you get</a>
              <Link href="/sheet">Sample</Link>
            </nav>
            <Link href="/trial" className="lp-btn lp-btn-primary" style={{ minHeight: 36, padding: "0 16px" }}>
              Free trial
            </Link>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}

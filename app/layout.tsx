import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LienPack — One missing waiver. Another 30 days.",
  description:
    "Pay-app completeness for US specialty trade subcontractors. Completeness sheet, chase drafts, zip for the GC. Free trial. Not legal advice. Not payment software.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-zinc-900`}>
        <main className="mx-auto min-h-screen max-w-lg px-5 py-14 sm:py-20">{children}</main>
      </body>
    </html>
  );
}

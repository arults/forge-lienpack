import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LienPack — Get this pay app accepted",
  description:
    "Pay-app completeness for specialty subcontractors. We chase missing lien waivers so cash is not stuck another 30 days. Free trial.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-zinc-900`}>
        <main className="mx-auto min-h-screen max-w-xl px-5 py-12 sm:py-16">{children}</main>
      </body>
    </html>
  );
}

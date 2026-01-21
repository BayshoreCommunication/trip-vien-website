import type { Metadata } from "next";
import "./globals.css";

import Header from "components/layout/Header";
import Footer from "components/layout/Footer";
import ClientLayout from "./client-layout";

import { DM_Mono, DM_Sans, Playfair_Display } from "next/font/google";

/* ---------------- FONTS ---------------- */

const dmMono = DM_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-dm-mono",
});

const dmSans = DM_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair",
});

/* ---------------- METADATA ---------------- */

export const metadata: Metadata = {
  title: "Trip Vien",
  description: "Trip Vien Website",
};

/* ---------------- ROOT LAYOUT ---------------- */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${dmMono.variable} ${dmSans.variable} ${playfair.variable}`}
    >
      <body className="bg-white antialiased">
        <Header />

        {/* ✅ CLIENT WRAPPER */}
        <ClientLayout>
          <main>{children}</main>
        </ClientLayout>

        <Footer />
      </body>
    </html>
  );
}

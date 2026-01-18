import type { Metadata } from "next";

import "./globals.css";
import { Providers } from "./providers";
import { DM_Mono } from 'next/font/google';
import { Inter, Playfair_Display } from 'next/font/google';// Your global styles file
import { DM_Sans } from 'next/font/google';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
// Specify the weights and subsets you need
const dmMono = DM_Mono({
  weight: ['400', '500'], // or ['400', '400-italic', '500', ...] as needed
  subsets: ['latin'],
  display: 'swap', // 'swap' ensures the fallback font is used until DM Mono loads
  variable: '--font-dm-mono', // Define a CSS variable if you plan to use it with Tailwind CSS
});

// DM Sans configuration
const dmSans = DM_Sans({
  weight: ['400', '500', '700'], // choose what you need
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans', // for Tailwind or CSS usage
});


const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'], // Specify the weights you need
  display: 'swap', // Use swap for better performance
  variable: '--font-playfair', // Define a CSS variable name
});

export const metadata: Metadata = {
  title: "Trip Vien",
  description: "Trip Vien Website",
  metadataBase: new URL("https://mccullochlawpa-website.vercel.app"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },

  openGraph: {
    images: "/opengraph-image.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmMono.variable} ${playfair.variable} ${dmSans.variable}`}>
      <body className="bg-white">
        <Header />
          <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

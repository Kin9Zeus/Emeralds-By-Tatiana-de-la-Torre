import type { Metadata } from "next";
import { cinzel, montserrat } from "@/lib/fonts";
import SmoothScroll from "@/components/providers/SmoothScroll";
import GSAPProvider from "@/components/providers/GSAPProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Emeralds by Tatiana De La Torre | Premium Colombian Emeralds",
  description:
    "Discover exceptional Colombian emeralds, personally selected from the legendary Muzo region by Tatiana De La Torre. Authentically Colombian. Personally Selected. Exceptionally Beautiful.",
  keywords: [
    "Colombian emeralds",
    "Muzo emeralds",
    "luxury emeralds",
    "Tatiana De La Torre",
    "premium gemstones",
    "emerald jewelry",
    "natural emeralds",
  ],
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Emeralds by Tatiana De La Torre",
    description:
      "Where Colombian Heritage Meets Timeless Luxury. Exceptional Colombian emeralds personally selected from the Muzo region.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cinzel.variable} ${montserrat.variable}`}>
      <body className="font-montserrat antialiased">
        <GSAPProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </GSAPProvider>
      </body>
    </html>
  );
}

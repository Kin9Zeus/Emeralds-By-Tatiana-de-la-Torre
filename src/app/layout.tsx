import type { Metadata } from "next";
import { cinzel, montserrat } from "@/lib/fonts";
import SmoothScroll from "@/components/providers/SmoothScroll";
import GSAPProvider from "@/components/providers/GSAPProvider";
import JsonLd from "@/components/seo/JsonLd";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.emeraldsbytatiana.com"),
  title: "Emeralds by Tatiana De La Torre | Premium Colombian Emeralds",
  description:
    "Premium Colombian emeralds personally selected from the legendary Muzo region. GIA-certified natural emeralds for collectors and jewelers. Based in Colorado, serving all USA.",
  keywords: [
    "Colombian emeralds",
    "Muzo emeralds",
    "luxury emeralds",
    "Tatiana De La Torre",
    "premium gemstones",
    "emerald jewelry",
    "natural emeralds",
    "buy Colombian emeralds",
    "Colombian emeralds Colorado",
    "GIA certified emeralds",
    "emerald dealer USA",
    "Muzo mine emeralds",
    "authentic Colombian emeralds",
    "emerald oil treatment",
    "emerald enhancement grades",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.emeraldsbytatiana.com",
  },
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
    title: "Emeralds by Tatiana De La Torre | Premium Colombian Emeralds",
    description:
      "Where Colombian Heritage Meets Timeless Luxury. Authentic Muzo emeralds personally selected and GIA-certified. Based in Colorado, serving all USA.",
    type: "website",
    locale: "en_US",
    url: "https://www.emeraldsbytatiana.com",
    siteName: "Emeralds by Tatiana De La Torre",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Emeralds by Tatiana De La Torre — Premium Colombian Emeralds",
        type: "image/png",
      },
    ],
  },
  other: {
    "geo.region": "US-CO",
    "geo.placename": "Colorado",
    "geo.position": "39.7392;-104.9903",
    ICBM: "39.7392, -104.9903",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cinzel.variable} ${montserrat.variable}`}>
      <head>
        <JsonLd />
      </head>
      <body className="font-montserrat antialiased">
        <GSAPProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </GSAPProvider>
      </body>
    </html>
  );
}

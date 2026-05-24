import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "LuminaDent | Premium Dental Care & Cosmetic Dentistry",
  description:
    "Transform your smile with LuminaDent — award-winning dental professionals delivering exceptional care with cutting-edge technology. Book your appointment today for teeth whitening, dental implants, Invisalign, and more.",
  keywords: [
    "dental clinic",
    "cosmetic dentistry",
    "teeth whitening",
    "dental implants",
    "Invisalign",
    "orthodontics",
    "pediatric dentistry",
    "emergency dental care",
    "premium dental care",
    "LuminaDent",
  ],
  authors: [{ name: "LuminaDent Dental Clinic" }],
  openGraph: {
    title: "LuminaDent | Premium Dental Care & Cosmetic Dentistry",
    description:
      "Award-winning dental professionals delivering exceptional care with cutting-edge technology. Book your appointment today.",
    type: "website",
    locale: "en_US",
    siteName: "LuminaDent",
  },
  twitter: {
    card: "summary_large_image",
    title: "LuminaDent | Premium Dental Care",
    description:
      "Transform your smile with award-winning dental professionals. Book today.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
    >
      <head>
        <meta name="theme-color" content="#0d9488" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import { LanguageProvider } from "@/contexts/LanguageContext";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bidias Group LLC — Premium Trucking & Freight Solutions",
  description:
    "Bidias Group LLC delivers professional trucking and freight logistics across the nation. Competitive pay, flexible home time, and dedicated driver support.",
  keywords: ["trucking", "freight", "logistics", "CDL drivers", "owner operators", "dry van", "long haul", "Bidias Group"],
  openGraph: {
    title: "Bidias Group LLC — Driven by Professionals. Delivering Excellence.",
    description:
      "Premium trucking and logistics. Join our team of professional drivers or ship your freight with confidence.",
    siteName: "Bidias Group LLC",
    url: "https://www.bidiasgroup.com",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}

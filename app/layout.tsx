import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// IMPORT SAHIHI INAYOENDA NDANI YA SITE FOLDER
import { MouseGlow } from "./components/site/MouseGlow";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fredrick N. Claudi — Portfolio",
  description: "Professional portfolio of Fredrick N. Claudi, a Junior Software Developer and Business Information Systems Graduate specializing in Full-Stack Web Development, Mobile Application Development, and Business Intelligence.",
  keywords: [
    "Fredrick N. Claudi",
    "Software Developer",
    "Business Information Systems",
    "Portfolio",
    "Tanzania",
    "Full-Stack Web Development"
  ],
  authors: [{ name: "Fredrick N. Claudi" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} bg-[#0B0F19] text-[#F4F4F4] antialiased overflow-x-hidden relative selection:bg-[#D8B79A]/20 selection:text-[#D8B79A]`}>
        
        {/* TAA YETU YA USIKU WEBSITE NZIMA */}
        <MouseGlow />
        
        {/* MAUDHUI YA PORTFOLIO YAKO */}
        <main className="relative z-10">
          {children}
        </main>

      </body>
    </html>
  );
}
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
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
  title: {
    default: "Fredrick N. Claudi — Portfolio",
    template: "%s | Fredrick N. Claudi"
  },
  description: "Professional portfolio of Fredrick N. Claudi, a Junior Software Developer and Business Information Systems Graduate specializing in Full-Stack Web Development, Mobile Application Development, and Business Intelligence.",
  keywords: [
    "Fredrick N. Claudi",
    "Fredrick Claudi",
    "Software Developer",
    "Business Information Systems",
    "Portfolio",
    "Tanzania",
    "Full-Stack Web Development",
    "Business Intelligence Analyst",
    "Dar es Salaam"
  ],
  authors: [{ name: "Fredrick N. Claudi" }],
  creator: "Fredrick N. Claudi",
  metadataBase: new URL("https://www.fredrickclaudi.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.fredrickclaudi.com",
    title: "Fredrick N. Claudi — Portfolio",
    description: "Professional portfolio of Fredrick N. Claudi, specializing in Full-Stack Web Development, Mobile Applications, and Business Intelligence.",
    siteName: "Fredrick N. Claudi Portfolio",
    images: [
      {
        url: "/profile2.jpg",
        width: 1200,
        height: 630,
        alt: "Fredrick N. Claudi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fredrick N. Claudi — Portfolio",
    description: "Professional portfolio of Fredrick N. Claudi, specializing in Full-Stack Web Development, Mobile Applications, and Business Intelligence.",
    images: ["/profile2.jpg"],
  },
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} bg-[#0B0F19] text-[#F4F4F4] antialiased overflow-x-hidden relative selection:bg-[#D8B79A]/20 selection:text-[#D8B79A]`}>
        
        {/* Global ambient background tracker component */}
        <MouseGlow />
        
        {/* Primary structural layout wrapper */}
        <main className="relative z-10">
          {children}
        </main>

      </body>
    </html>
  );
}
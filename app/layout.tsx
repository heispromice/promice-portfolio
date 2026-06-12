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
    default: "Fredrick N. Claudi | Software Developer in Tanzania",
    template: "%s | Fredrick N. Claudi"
  },
  description: "Fredrick N. Claudi is a Tanzania-based software developer and business intelligence analyst building web, mobile, and data systems for education, business, and public safety.",
  keywords: [
    "Fredrick N. Claudi",
    "Fredrick Claudi",
    "Fredrick",
    "Fredrick Nasser",
    "Nasser Claudi",
    "Fredrick Nasser Claudi",
    "Claudi Fredrick",
    "Fredrick Cloud",
    "Fredrick Nassar",
    "promise",
    "promice",
    "React Native Developer",
    "Next.js Developer",
    "Software Developer",
    "Business Information Systems",
    "Portfolio",
    "School Website Developer Tanzania",
    "Emergency App Developer Tanzania",
    "UI/UX Designer",
    "IT consultant in Tanzania",
    "Premium Web Designs in Tanzania",
    "Freelancer in Tanzania",
    "Software Developer Freelancer in Tanzania",
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
    title: "Fredrick N. Claudi | Web, Mobile & Data Systems Developer in Tanzania",
    description: "Professional portfolio of Fredrick N. Claudi, specializing in Full-Stack Web Development, Mobile Applications, and Business Intelligence.",
    siteName: "Fredrick N. Claudi",
    images: [
      {
        url: "/profile2.jpg",
        width: 1200,
        height: 630,
        alt: "Fredrick N. Claudi - Software Developer in Tanzania",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fredrick N. Claudi | Software Developer in Tanzania",
    description: "Building web, mobile, and data systems for education, business, and public safety.",
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Fredrick N. Claudi",
    "jobTitle": "Business Intelligence Analyst & Software Developer",
    "url": "https://www.fredrickclaudi.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dar es Salaam",
      "addressCountry": "TZ"
    },
    "sameAs": [
      "https://github.com/heispromice",
      "https://www.linkedin.com/in/fredrick-claudi-5a162230b"
    ],
    "knowsAbout": [
      "Software Development",
      "Business Intelligence",
      "SQL",
      "Tableau",
      "Full Stack Web Development",
      "Next.js",
      "C# Programming",
      "Data Analytics",
      "System Architecture"
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
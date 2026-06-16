"use client";

import { useState, useEffect } from "react";
import Script from "next/script";
import { Preloader } from "./components/site/Preloader";
import { Header } from "./components/site/Header";
import { Hero } from "./components/site/Hero";
import { About } from "./components/site/About";
import { Projects } from "./components/site/Projects";
import { Systems } from "./components/site/Systems";
import { Contact } from "./components/site/Contact";
import { Footer } from "./components/site/Footer";
import ScrollToTop from "./components/site/ScrollToTop";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant"
      });
    }
  }, [isLoading]);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: "Fredrick N. Claudi Portfolio",
    url: "https://www.fredrickclaudi.com",
    mainEntity: {
      "@type": "Person",
      "@id": "https://www.fredrickclaudi.com/#person",
      name: "Fredrick N. Claudi",
      alternateName: ["Fredrick Claudi", "Fredrick", "promice", "Fredrick Cloud"],
      url: "https://www.fredrickclaudi.com",
      image: "https://www.fredrickclaudi.com/profile2.jpg",
      email: "mailto:heispromice@gmail.com",
      jobTitle: "Software Developer & Business Intelligence Analyst",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dar es Salaam",
        addressCountry: "TZ",
      },
      knowAbout: [
        "Full-Stack Web Development",
        "Mobile Application Development",
        "Business Intelligence",
        "UI/UX Design",
        "School Management Systems",
        "Emergency Response Applications",
        "React",
        "Next.js",
        "React Native",
        "PostgreSQL",
      ],
      sameAs: [
        "https://github.com/heispromice",
        "https://tz.linkedin.com/in/fredrick-claudi-5a162230b",
        "https://www.instagram.com/_heispromice",
      ],
    },
  };

  return (
    <>
      <Script
        id="json-ld-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      
      <div className="relative flex flex-col min-h-screen bg-[#0B0F19]">
        <Header />
        <main className="flex-1">
          <Hero isParentLoading={isLoading} />
          <About />
          <Projects />
          <Systems />
          <Contact />
        </main>
        <Footer />

        {/* Floating progress indicator component loaded dynamically on the bottom layer */}
        <ScrollToTop />
      </div>
    </>
  );
}
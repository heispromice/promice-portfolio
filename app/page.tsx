"use client"; // Inahitajika kwa sababu tunatumia React Hooks (useState, useEffect)

import { useState, useEffect } from "react";
import { Preloader } from "./components/site/Preloader";
import { Header } from "./components/site/Header";
import { Hero } from "./components/site/Hero";
import { About } from "./components/site/About";
import { Projects } from "./components/site/Projects";
import { Systems } from "./components/site/Systems";
import { Contact } from "./components/site/Contact";
import { Footer } from "./components/site/Footer";

export default function Home() {
  // State to track if the preloader is active
  const [isLoading, setIsLoading] = useState(true);

  // Zulia website isiruke katikati pindi preloader inapoisha
  useEffect(() => {
    if (!isLoading) {
      // Lazimisha kivinjari kirudi juu kabisa ya page mara moja
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant" // Inakata scrolling effects za nyuma na kuweka kioo juu mapema kabisa
      });
    }
  }, [isLoading]);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Fredrick N. Claudi",
    "url": "https://www.fredrickclaudi.com",
    "email": "heispromice@gmail.com",
    "jobTitle": "Software Developer & Business Information Systems Graduate",
    "sameAs": [
      "https://github.com/heispromice",
      "https://tz.linkedin.com/in/fredrick-claudi-5a162230b",
      "https://www.instagram.com/_heispromice"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* 1. Preloader rendered with the required onComplete handler */}
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      
      {/* 2. Main content container wraps viewport flow */}
      <div className="flex flex-col min-h-screen bg-[#0B0F19]">
        <Header />
        <main className="flex-1">
          <Hero isParentLoading={isLoading} />
          <About />
          <Projects />
          <Systems />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
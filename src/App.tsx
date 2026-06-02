import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Preloader } from "./components/site/Preloader";
import { Header } from "./components/site/Header";
import { Hero } from "./components/site/Hero";
import { About } from "./components/site/About";
import { Projects } from "./components/site/Projects";
import { Systems } from "./components/site/Systems";
import { Contact } from "./components/site/Contact";
import { Footer } from "./components/site/Footer";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <div className="min-h-screen bg-[#0B0F19] text-[#F4F4F4] selection:bg-[#D8B79A]/20 selection:text-[#D8B79A]">
          <Header />
          <main>
            <Hero />
            <About />
            <Projects />
            <Systems />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
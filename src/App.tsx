import { Header } from './components/site/Header';
import { Hero } from './components/site/Hero';
import { About } from './components/site/About';
import { Projects } from './components/site/Projects';
import { Systems } from './components/site/Systems';
import { Contact } from './components/site/Contact';
import { Footer } from './components/site/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(216,183,154,0.08),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.05),transparent_35%),linear-gradient(180deg,#0B0F19_0%,#0B0F19_100%)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(rgba(244,244,244,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(244,244,244,0.03)_1px,transparent_1px)] bg-[size:32px_32px] opacity-25 [mask-image:linear-gradient(to_bottom,black,transparent_92%)]" />
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
  );
}

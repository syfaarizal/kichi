import ParticlesBg from './components/ParticlesBg';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Commands from './components/Commands';
import HowItWorks from './components/HowItWorks';
import About from './components/About';
import CTA from './components/CTA';
import Footer from './components/Footer';
import { useScrollReveal } from './hooks/useScrollReveal';

export default function App() {
  // Initialize scroll reveal globally
  useScrollReveal();

  return (
    <div className="bg-mesh min-h-screen">
      {/* Fixed particle background */}
      <ParticlesBg />

      {/* Sticky navigation */}
      <Navbar />

      {/* Main content */}
      <main>
        <Hero />

        <div className="divider-gold" />

        <Features />

        <div className="divider-blue" />

        <Commands />

        <div className="divider-gold" />

        <HowItWorks />

        <div className="divider-blue" />

        <About />

        <div className="divider-blue" />

        <CTA />
      </main>

      <Footer />
    </div>
  );
}

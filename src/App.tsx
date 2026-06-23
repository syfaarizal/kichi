import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ParticlesBg from './components/ParticlesBg';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Commands from './components/Commands';
import HowItWorks from './components/HowItWorks';
import About from './components/About';
import CTA from './components/CTA';
import Footer from './components/Footer';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ReportIssue from './pages/ReportIssue';
import { useScrollReveal } from './hooks/useScrollReveal';

function HomePage() {
  return (
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
  );
}

export default function App() {
  useScrollReveal();

  return (
    <BrowserRouter>
      <div className="bg-mesh min-h-screen">
        {/* Fixed particle background */}
        <ParticlesBg />

        {/* Sticky navigation */}
        <Navbar />

        {/* Page routes */}
        <Routes>
          <Route path="/"             element={<HomePage />} />
          <Route path="/terms"        element={<TermsOfService />} />
          <Route path="/privacy"      element={<PrivacyPolicy />} />
          <Route path="/report-issue" element={<ReportIssue />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
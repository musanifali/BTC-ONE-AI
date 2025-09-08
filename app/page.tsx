'use client';

import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import MarqueeBands from '@/components/sections/MarqueeBands';
import Features from '@/components/sections/Features';
import Pricing from '@/components/sections/Pricing';
import FAQ from '@/components/sections/FAQ';
import AboutSection from '@/components/sections/AboutSection';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';
// Force reload dependency
import '../force-reload.js';

// Cache buster: CONTACT & FOOTER SECTIONS ADDED
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <MarqueeBands />
        <AboutSection />
        <Features />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

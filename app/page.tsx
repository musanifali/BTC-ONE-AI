'use client';

import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import MarqueeBands from '@/components/sections/MarqueeBands';
import Features from '@/components/sections/Features';
import Pricing from '@/components/sections/Pricing';
import FAQ from '@/components/sections/FAQ';
import AboutSection from '@/components/sections/AboutSection';
import Blog from '@/components/sections/Blog';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';
// Force reload dependency
import '../force-reload.js';

// Deployment timestamp: 2025-09-08T15:30:00Z

// Cache buster: BLOG SECTION ADDED
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <AboutSection />
        <Features />
        <Pricing />
        <FAQ />
        <MarqueeBands />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

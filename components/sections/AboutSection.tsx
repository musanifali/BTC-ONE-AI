'use client';

import React, { useState } from 'react';
import { ArrowRight, ChevronUp } from 'lucide-react';

const AboutSection = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-gray-900 text-white relative">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Large panel with rounded corners */}
        <div className="bg-gray-800 rounded-3xl p-12 md:p-16 relative overflow-hidden">
          
          {/* Two-column grid */}
          <div className="grid md:grid-cols-2 gap-16 items-start">
            
            {/* Left Column */}
            <div className="space-y-8">
              {/* Small section label */}
              <div className="inline-block">
                <span className="text-primary text-sm font-mono bg-primary/10 px-3 py-1 rounded-full">
                  /about/
                </span>
              </div>
              
              {/* Big stacked headline with modern styling */}
              <div className="space-y-2">
                <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                  Welcome to new era
                </h2>
                <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                  <span className="text-transparent bg-gradient-to-r from-primary to-primary/80 bg-clip-text">
                    of Neural networks
                  </span>
                </h2>
              </div>
              
              {/* Decorative element */}
              <div className="relative mt-8">
                <div className="flex items-center space-x-4">
                  <div className="text-gray-400 text-sm">Neural AI Innovation</div>
                </div>
              </div>
            </div>
            
            {/* Right Column */}
            <div className="space-y-8">
              {/* Large typographic lockup */}
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-primary text-primary-foreground px-6 py-3 rounded-xl">
                  <span className="text-4xl md:text-5xl font-extrabold">Neuro</span>
                </div>
                <div className="bg-gray-700 text-primary px-3 py-1 rounded-lg text-sm font-semibold">
                  AI
                </div>
              </div>
              
              {/* Text blocks in chip containers */}
              <div className="space-y-6">
                {/* First block */}
                <div className="bg-gray-700 rounded-xl p-6">
                  <p className="text-gray-300 leading-relaxed">
                    Artificial Intelligence refers to the development of computer systems that can perform 
                    tasks that would typically require human intelligence. It involves the creation of 
                    algorithms and models that enable machines to learn, reason, perceive, and make decisions.
                  </p>
                </div>
                
                {/* Second block */}
                <div className="bg-gray-700 rounded-xl p-6">
                  <p className="text-gray-300 leading-relaxed">
                    There are generally two types of AI: <span className="text-primary font-semibold">Narrow or Weak AI</span>, 
                    which is designed to perform specific tasks, and <span className="text-primary font-semibold">General or Strong AI</span>, 
                    which possesses human-level intelligence and can handle a wide range of tasks.
                  </p>
                </div>
              </div>
              
              {/* Call-to-action button */}
              <div className="pt-6">
                <button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 rounded-full flex items-center gap-3 transition-colors group">
                  <span>Explore more</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
          
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-secondary/5 to-transparent rounded-full blur-3xl"></div>
        </div>
      </div>
      
      {/* Optional Floating Action Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full flex items-center justify-center shadow-lg transition-colors z-10"
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-6 h-6" />
      </button>
    </section>
  );
};

export default AboutSection;

'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';

const HeroNew2 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sample images for carousel
  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop&crop=center",
      title: "AI Technology"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&h=600&fit=crop&crop=center",
      title: "Neural Networks"
    }
  ];

  const nextSlide = () => {
    console.log('Next slide clicked, current:', currentSlide);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    console.log('Previous slide clicked, current:', currentSlide);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section 
      className="min-h-screen flex flex-col justify-center py-20 px-4" 
      style={{ backgroundColor: '#ebf5ed' }}
    >
      <div className="container mx-auto max-w-7xl">
        
        {/* Top Area */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24 items-start">
          
          {/* Left Side - Main Message */}
          <div className="w-full pr-4 py-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.5]">
              <div className="text-gray-900 mb-4 py-2">Harness the Power</div>
              <div className="text-gray-900 mb-4 py-2">of</div>
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent py-3 pb-6">
                Artificial Intelligence
              </div>
            </h1>
          </div>

          {/* Right Side - Supporting Text & CTA */}
          <div className="w-full flex flex-col justify-start space-y-6 pt-4">
            <p className="text-lg text-gray-600 leading-relaxed">
              Highlight the potential benefits of Neural Networks, such as improved 
              decision-making, predictive analytics, and automation.
            </p>
            
            <div>
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg rounded-full shadow-lg"
              >
                Discover
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Area - Media Block */}
        <div className="relative">
          <div className="bg-white rounded-3xl p-6 shadow-xl border border-green-200 overflow-hidden relative h-[350px]">
            
            {/* Background Image with overlay */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden">
              <img 
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute inset-0 bg-white/60"></div>
            </div>

            {/* Navigation Arrows - Left Side */}
            <div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col space-y-4 z-20">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  prevSlide();
                }}
                className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-200"
                type="button"
              >
                <ChevronLeft className="w-6 h-6 text-gray-700" />
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  nextSlide();
                }}
                className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-200"
                type="button"
              >
                <ChevronRight className="w-6 h-6 text-gray-700" />
              </button>
            </div>

            {/* Central Content */}
            <div className="flex flex-col items-center justify-center py-8 relative z-10">
              
              {/* Centered Logo */}
              <div className="text-center mb-6">
                <div className="text-4xl md:text-5xl font-bold">
                  <span className="text-gray-900">NEURO</span>
                  <span style={{ color: '#35d687' }}>S</span>
                </div>
                <div className="text-xl md:text-2xl font-semibold text-gray-700 mt-1">
                  AI
                </div>
              </div>

              {/* Slide Indicators */}
              <div className="flex space-x-2 mb-4">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setCurrentSlide(index);
                    }}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      currentSlide === index ? 'bg-green-600' : 'bg-gray-300'
                    }`}
                    type="button"
                  />
                ))}
              </div>

              {/* Current slide title */}
              <div className="text-sm font-medium text-gray-700 bg-white/80 px-3 py-1 rounded-full">
                {slides[currentSlide].title}
              </div>
            </div>

            {/* Watch Video Button - Right Side */}
            <div className="absolute right-4 bottom-4 z-10">
              <Button
                variant="outline"
                className="bg-white border-green-600 text-green-600 hover:bg-green-50 px-6 py-3 rounded-full shadow-lg flex items-center gap-2"
              >
                <Play className="w-5 h-5" />
                Watch video
              </Button>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-4 right-4 w-4 h-4 bg-green-300 rounded-full opacity-60"></div>
            <div className="absolute bottom-8 left-8 w-6 h-6 bg-emerald-300 rounded-full opacity-40"></div>
            <div className="absolute top-1/2 right-8 w-3 h-3 bg-green-400 rounded-full opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroNew2;

'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';

const HeroFinal = () => {
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
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div 
      className="min-h-screen flex flex-col justify-center py-20 px-4" 
      style={{ backgroundColor: '#ebf5ed' }}
    >
      <div className="container mx-auto max-w-7xl">
        
        {/* Top Section - Text Content */}
        <div className="grid lg:grid-cols-2 gap-20 mb-32">
          
          {/* Left Column - Heading */}
          <div className="flex flex-col justify-center">
            <div className="space-y-4">
              <h1 style={{ 
                fontSize: 'clamp(2rem, 5vw, 4rem)', 
                lineHeight: '1.3',
                fontWeight: 'bold'
              }}>
                <div style={{ color: '#1f2937', marginBottom: '8px' }}>
                  Harness the Power
                </div>
                <div style={{ color: '#1f2937', marginBottom: '8px' }}>
                  of
                </div>
                <div style={{ 
                  background: 'linear-gradient(to right, #059669, #10b981)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  paddingBottom: '8px'
                }}>
                  Artificial Intelligence
                </div>
              </h1>
            </div>
          </div>

          {/* Right Column - Description and CTA */}
          <div className="flex flex-col justify-center space-y-8">
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

        {/* Bottom Section - Media Block */}
        <div className="relative">
          <div 
            className="bg-white rounded-3xl shadow-xl border border-green-200 overflow-hidden relative"
            style={{ height: '350px' }}
          >
            
            {/* Background Image */}
            <div className="absolute inset-0">
              <img 
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute inset-0 bg-white/60"></div>
            </div>

            {/* Navigation Arrows - Left Side */}
            <div className="absolute left-6 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 z-20">
              <button
                onClick={prevSlide}
                className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-200"
                type="button"
              >
                <ChevronLeft className="w-6 h-6 text-gray-700" />
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-200"
                type="button"
              >
                <ChevronRight className="w-6 h-6 text-gray-700" />
              </button>
            </div>

            {/* Central Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
              
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
                    onClick={() => setCurrentSlide(index)}
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
            <div className="absolute right-6 bottom-6 z-20">
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
    </div>
  );
};

export default HeroFinal;

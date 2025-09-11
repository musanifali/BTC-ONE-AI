'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden section-light" 
    >
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source 
          src="https://content.aioz.network/aioz/videos/light/home/hero/Hori_nyx3_LOD5_8k.webm" 
          type="video/webm" 
        />
        Your browser does not support the video tag.
      </video>

      {/* Light Overlay for better text readability */}
      <div className="absolute inset-0 bg-white/50 z-10"></div>

      {/* Content Container */}
      <div className="relative z-20 container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-32">
        
        {/* Main Content */}
        <div className="space-y-6 sm:space-y-8 max-w-2xl">
          
          {/* Main Heading */}
          <div className="space-y-3 sm:space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-gray-900">
              Harness the
              <br />
              <span className="text-primary">Power</span> of
              <br />
              <span className="text-primary">
                Artificial Intelligence
              </span>
            </h1>
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-700">
            Transform your business with cutting-edge AI solutions. From neural networks to automation, 
            we deliver intelligent systems that drive real results.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-6 sm:pt-8">
            <Button 
              size="lg" 
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full shadow-lg group bg-primary hover:bg-primary/90 text-white"
            >
              Get Started
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full backdrop-blur-sm border-gray-900/30 text-gray-900 hover:bg-gray-900/10"
            >
              <Play className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
              Watch Demo
            </Button>
          </div>
        </div>

        {/* Optional: Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-900/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-900/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

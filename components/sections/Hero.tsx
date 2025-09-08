'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      className="min-h-screen flex items-center py-20 px-4" 
      style={{ backgroundColor: '#ebf5ed' }}
    >
      <div className="container mx-auto max-w-7xl">
        
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-16 items-center h-screen">
          
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
                Harness the
                <br />
                <span className="text-green-600">Power</span> of
                <br />
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  Artificial Intelligence
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
              Transform your business with cutting-edge AI solutions. From neural networks to automation, 
              we deliver intelligent systems that drive real results.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg rounded-full shadow-lg group"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-4 text-lg rounded-full bg-white/80 backdrop-blur-sm"
              >
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Right Column - Video */}
          <div className="w-full h-full flex">
            {/* Video Element */}
            <video
              className="w-full h-full object-cover flex-1"
              autoPlay
              loop
              muted
              playsInline
              style={{ width: '100%', height: '100%' }}
            >
              <source 
                src="https://content.aioz.network/aioz/videos/light/home/hero/Hori_nyx3_LOD5_8k.webm" 
                type="video/webm" 
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

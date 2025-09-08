'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight } from 'lucide-react';

const Pricing = () => {
  const basicFeatures = [
    '1 User',
    'Unlimited Projects',
    'Download prototypes',
    '1 Gb workspace'
  ];

  const premiumFeatures = [
    '3 Users',
    'Unlimited Projects',
    'Download prototypes',
    '100 Gb workspace'
  ];

  return (
    <section className="py-24 px-4 bg-gray-900">
      <div className="container mx-auto max-w-7xl">
        
        {/* Section Label */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-gray-800/80 rounded-full border border-green-600/30 text-green-400 text-sm font-medium">
            / pricing /
          </span>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16 items-start">
          
          {/* Left Column - Headline */}
          <div className="lg:sticky lg:top-8">
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
              Simple<br />
              and<br />
              flexible.<br />
              Only pay<br />
              for what<br />
              you use.
            </h2>
          </div>

          {/* Right Column - Pricing Cards */}
          <div className="space-y-8">
            
            {/* Basic Plan Card */}
            <div className="bg-gray-800 rounded-2xl border border-gray-700 p-8 shadow-lg hover:shadow-xl hover:border-gray-600 transition-all">
              <div className="grid md:grid-cols-3 gap-6 items-start">
                
                {/* Left: Plan Name & Subtext */}
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white">Basic</h3>
                  <p className="text-sm text-gray-400">Great for private individuals</p>
                </div>

                {/* Middle: Features List */}
                <div className="space-y-3">
                  {basicFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Right: Price & CTA */}
                <div className="text-right space-y-4">
                  <div className="text-4xl font-bold text-white">Free</div>
                  <Button 
                    className="bg-green-600 hover:bg-green-700 text-white rounded-full px-6 py-2 group shadow-lg"
                  >
                    Get started
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Premium Plan Card */}
            <div className="relative bg-gray-800 rounded-2xl border-2 border-green-600/50 p-8 shadow-xl hover:shadow-2xl hover:border-green-500 transition-all">
              
              {/* Popular Badge */}
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-green-600 text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg">
                  Popular
                </span>
              </div>

              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5 rounded-2xl overflow-hidden">
                <svg className="w-full h-full text-green-400" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <defs>
                    <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                      <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                    </pattern>
                  </defs>
                  <rect width="100" height="100" fill="url(#grid)" />
                </svg>
              </div>

              <div className="relative grid md:grid-cols-3 gap-6 items-start">
                
                {/* Left: Plan Name & Subtext */}
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white">Premium</h3>
                  <p className="text-sm text-gray-400">14 days free period</p>
                </div>

                {/* Middle: Features List */}
                <div className="space-y-3">
                  {premiumFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Right: Price & CTA */}
                <div className="text-right space-y-4">
                  <div className="text-4xl font-bold text-white">$99<span className="text-lg text-gray-400">/mo</span></div>
                  <Button 
                    className="bg-green-600 hover:bg-green-700 text-white rounded-full px-6 py-2 group shadow-lg"
                  >
                    Get started
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

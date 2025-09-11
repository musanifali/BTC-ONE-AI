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
    <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 section-dark">
      <div className="container mx-auto max-w-7xl">
        
        {/* Section Label */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block px-3 sm:px-4 py-2 bg-card/80 rounded-full border border-primary/30 text-primary text-xs sm:text-sm font-medium">
            / pricing /
          </span>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-[1fr_2fr] gap-8 sm:gap-12 lg:gap-16 items-start">
          
          {/* Left Column - Headline */}
          <div className="lg:sticky lg:top-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight">
              Simple<br />
              and<br />
              flexible.<br />
              Only pay<br />
              for what<br />
              you use.
            </h2>
          </div>

          {/* Right Column - Pricing Cards */}
          <div className="space-y-6 sm:space-y-8">
            
            {/* Basic Plan Card */}
            <div className="bg-card rounded-2xl border border-border p-8 shadow-lg hover:shadow-xl hover:border-primary/30 transition-all">
              <div className="grid md:grid-cols-3 gap-6 items-start">
                
                {/* Left: Plan Name & Subtext */}
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-foreground">Basic</h3>
                  <p className="text-sm text-muted">Great for private individuals</p>
                </div>

                {/* Middle: Features List */}
                <div className="space-y-3">
                  {basicFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Right: Price & CTA */}
                <div className="text-right space-y-4">
                  <div className="text-4xl font-bold text-foreground">Free</div>
                  <Button 
                    className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 py-2 group shadow-lg"
                  >
                    Get started
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Premium Plan Card */}
            <div className="relative bg-card rounded-2xl border-2 border-primary/50 p-8 shadow-xl hover:shadow-2xl hover:border-primary transition-all">
              
              {/* Popular Badge */}
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium shadow-lg">
                  Popular
                </span>
              </div>

              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5 rounded-2xl overflow-hidden">
                <svg className="w-full h-full text-primary" viewBox="0 0 100 100" preserveAspectRatio="none">
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
                  <h3 className="text-2xl font-bold text-foreground">Premium</h3>
                  <p className="text-sm text-muted">14 days free period</p>
                </div>

                {/* Middle: Features List */}
                <div className="space-y-3">
                  {premiumFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Right: Price & CTA */}
                <div className="text-right space-y-4">
                  <div className="text-4xl font-bold text-foreground">$99<span className="text-lg text-muted">/mo</span></div>
                  <Button 
                    className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 py-2 group shadow-lg"
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

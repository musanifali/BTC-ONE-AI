'use client';

import React from 'react';
import { Users, Settings, Zap, Trophy } from 'lucide-react';

const Features = () => {
  const features = [
    {
      id: 1,
      icon: Users,
      title: 'Experienced team',
      description: 'Emphasize the expertise and knowledge of your team in developing and implementing neural networks.'
    },
    {
      id: 2,
      icon: Settings,
      title: 'Tailored solutions',
      description: 'Mention your ability to customize solutions based on specific business requirements.'
    },
    {
      id: 3,
      icon: Zap,
      title: 'Cutting-edge technology',
      description: 'Highlight your use of the latest tools and techniques in neural network development.'
    },
    {
      id: 4,
      icon: Trophy,
      title: 'Proven track record',
      description: 'Showcase successful case studies or client testimonials that demonstrate the effectiveness of your services.'
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 section-light">
      <div className="container mx-auto max-w-7xl">
        
        {/* Section Label */}
        <div className="text-center mb-6 sm:mb-8">
          <span className="inline-block px-3 sm:px-4 py-2 bg-card/80 rounded-full border border-border text-primary text-xs sm:text-sm font-medium">
            / features /
          </span>
        </div>

        {/* Section Heading */}
        <div className="text-center mb-12 sm:mb-16 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight max-w-4xl mx-auto">
            The unique selling points & advantages of our service
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div key={feature.id} className="text-center space-y-3 sm:space-y-4 p-4 sm:p-6 rounded-2xl hover:bg-card/50 transition-colors duration-300">
                
                {/* Icon */}
                <div className="flex justify-center mb-4 sm:mb-5">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-card rounded-2xl border border-border flex items-center justify-center shadow-sm">
                    <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-primary" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-muted leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;

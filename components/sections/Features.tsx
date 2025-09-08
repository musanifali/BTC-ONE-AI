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
    <section className="py-24 px-4" style={{ backgroundColor: '#ebf5ed' }}>
      <div className="container mx-auto max-w-7xl">
        
        {/* Section Label */}
        <div className="text-center mb-8">
          <span className="inline-block px-4 py-2 bg-white/80 rounded-full border border-green-200 text-green-700 text-sm font-medium">
            / features /
          </span>
        </div>

        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight max-w-4xl mx-auto">
            The unique selling points & advantages of our service
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div key={feature.id} className="text-center space-y-4">
                
                {/* Icon */}
                <div className="flex justify-center mb-5">
                  <div className="w-16 h-16 bg-white rounded-2xl border border-green-200 flex items-center justify-center shadow-sm">
                    <IconComponent className="w-8 h-8 text-green-600" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
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

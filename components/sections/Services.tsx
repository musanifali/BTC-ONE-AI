'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

// Updated: 2025-09-05
const Services = () => {
  const services = [
    {
      id: '1',
      title: 'AI Strategy & Consulting',
      description: 'Develop comprehensive AI roadmaps tailored to your business objectives.',
      gridArea: 'card1',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3'
    },
    {
      id: '2',
      title: 'Machine Learning Solutions',
      description: 'End-to-end machine learning development from data preprocessing to model deployment.',
      gridArea: 'card2',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3'
    },
    {
      id: '3',
      title: 'Neural Network Automation',
      description: 'Deploy advanced deep learning solutions that automate complex business processes and enhance decision-making capabilities.',
      gridArea: 'card3',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3'
    },
    {
      id: '4',
      title: 'Security & Compliance',
      description: 'Enterprise-grade security frameworks designed specifically for AI systems.',
      gridArea: 'card4',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3'
    },
    {
      id: '5',
      title: 'Performance Analytics',
      description: 'Real-time monitoring and optimization of AI system performance with advanced analytics dashboards.',
      gridArea: 'card5',
      image: 'https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3'
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 section-light">
      <div className="container mx-auto max-w-7xl">
        {/* Top Content Section */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="mb-4">
            <span className="inline-block px-3 sm:px-4 py-2 bg-card border border-border text-primary rounded-full text-xs sm:text-sm font-medium shadow-sm">
              Our Services
            </span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 px-4">
            Special Neural Features for{' '}
            <span className="text-primary">
              Your Services
            </span>
          </h2>
  
          <p className="text-sm sm:text-base lg:text-lg text-text-secondary mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            From strategy to production, we build real outcomes with ML, NLP, and automation 
            that transform your business processes.
          </p>
          
          <div className="flex justify-center px-4">
            <Button size="lg" className="shadow-lg group w-full sm:w-auto">
              Explore All Services
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Mobile-First Responsive Grid */}
        <div className="grid gap-4 sm:gap-6">
          {/* Mobile: Stack all cards vertically */}
          <div className="grid grid-cols-1 sm:hidden gap-4">
            {services.map((service) => (
              <div
                key={service.id}
                className="rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer hover:-translate-y-1 relative overflow-hidden min-h-[280px]"
                style={{ 
                  backgroundImage: `url(${service.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
              >
                {/* Enhanced Gradient Overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/20"></div>
                
                {/* Content */}
                <div className="relative z-10 p-4 flex flex-col justify-end h-full">
                  <div className="relative z-10">
                    <h3 className="text-lg font-bold text-white leading-tight mb-2 group-hover:text-primary transition-colors drop-shadow-lg">
                      {service.title}
                    </h3>
                    <p className="text-gray-200 leading-relaxed text-sm mb-3 drop-shadow-md">
                      {service.description}
                    </p>
                    
                    {/* CTA Button */}
                    <div className="mt-auto">
                      <div className="bg-white/20 backdrop-blur-sm hover:bg-primary/90 text-white px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 inline-flex items-center gap-2 group-hover:bg-primary w-fit">
                        Learn more
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tablet and Desktop: Custom Grid Layout */}
          <div
            className="hidden sm:grid gap-4 lg:gap-6"
            style={{
              gridTemplateColumns: 'repeat(3, 1fr)',
              gridTemplateRows: '1fr 1fr 1fr 1.2fr',
              gridTemplateAreas: `
                "card1 card2 card3"
                "card1 card2 card3"
                "card1 card2 card4"
                "card5 card5 card5"
              `,
              minHeight: '700px'
            }}
          >
            {services.map((service) => {
              return (
                <div
                  key={service.id}
                  className="rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer hover:-translate-y-1 relative overflow-hidden"
                  style={{ 
                    gridArea: service.gridArea,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: service.gridArea === 'card2' ? 'flex-end' : service.gridArea === 'card4' ? 'center' : 'flex-start',
                    minHeight: '100%',
                    overflow: 'hidden',
                    backgroundImage: `url(${service.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    position: 'relative'
                  }}
                >
                  {/* Enhanced Gradient Overlay for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/20"></div>
                  
                  {/* Content */}
                  <div className={`${service.gridArea === 'card2' ? '' : 'flex-1'} relative z-10 p-4 lg:p-6 flex flex-col justify-end h-full`}>
                    {/* Additional background for text area */}
                    <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-black/80 to-transparent rounded-b-2xl"></div>
                    
                    <div className="relative z-10">
                      <h3 className="text-lg lg:text-xl font-bold text-white leading-tight mb-2 lg:mb-3 group-hover:text-primary transition-colors drop-shadow-lg">
                        {service.title}
                      </h3>
                      <p className="text-gray-200 leading-relaxed text-sm mb-3 lg:mb-4 drop-shadow-md">
                        {service.description}
                      </p>
                      
                      {/* CTA Button - Glassmorphism style like Blog */}
                      <div className="mt-auto">
                        <div className="bg-white/20 backdrop-blur-sm hover:bg-primary/90 text-white px-3 lg:px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 inline-flex items-center gap-2 group-hover:bg-primary w-fit">
                          Learn more
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

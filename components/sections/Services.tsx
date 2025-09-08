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
      description: 'Develop comprehensive AI roadmaps tailored to your business objectives. [Updated]',
      gridArea: 'card1'
    },
    {
      id: '2',
      title: 'Machine Learning Solutions',
      description: 'End-to-end machine learning development from data preprocessing to model deployment.',
      gridArea: 'card2'
    },
    {
      id: '3',
      title: 'Neural Network Automation',
      description: 'Deploy advanced deep learning solutions that automate complex business processes and enhance decision-making capabilities. ',
      gridArea: 'card3'
    },
    {
      id: '4',
      title: 'Security & Compliance',
      description: 'Enterprise-grade security frameworks designed specifically for AI systems.',
      gridArea: 'card4'
    },
    {
      id: '5',
      title: 'Performance Analytics',
      description: 'Real-time monitoring and optimization of AI system performance with advanced analytics dashboards.',
      gridArea: 'card5'
    }
  ];

  return (
    <section className="py-24 px-4" style={{ backgroundColor: '#ebf5ed' }}>
      <div className="container mx-auto max-w-7xl">
        {/* Top Content Section */}
        <div className="text-center mb-16">
          <div className="mb-4">
            <span className="inline-block px-4 py-2 bg-white border border-green-200 text-gray-600 rounded-full text-sm font-medium shadow-sm">
              Our Services
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Special Neural Features for{' '}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Your Services
            </span>
          </h2>
  
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            From strategy to production, we build real outcomes with ML, NLP, and automation 
            that transform your business processes.
          </p>
          
          <div className="flex justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white shadow-lg group">
              Explore All Services
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Bottom Cards Section with Custom Grid */}
        <div
          className="grid gap-6"
          style={{
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridTemplateRows: '0.7fr 0.7fr 0.7fr 1fr',
            gridTemplateAreas: `
              "card1 card2 card3"
              "card1 card2 card3"
              "card1 card2 card4"
              "card5 card5 card5"
            `,
            minHeight: '600px'
          }}
        >
          {services.map((service) => {
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-green-200 group cursor-pointer hover:-translate-y-1"
                style={{ 
                  gridArea: service.gridArea,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: service.gridArea === 'card2' ? 'flex-end' : service.gridArea === 'card4' ? 'center' : 'flex-start',
                  minHeight: '100%',
                  overflow: 'hidden',
                  ...(service.gridArea === 'card1' && {
                    backgroundImage: 'url(/images/services/card1.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    position: 'relative'
                  }),
                  ...(service.gridArea === 'card2' && {
                    backgroundImage: 'url(/images/services/card21.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    position: 'relative'
                  }),
                  ...(service.gridArea === 'card3' && {
                    backgroundImage: 'url(/images/services/card3.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    position: 'relative'
                  }),
                  ...(service.gridArea === 'card5' && {
                    backgroundImage: 'url(/images/services/card51.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    position: 'relative'
                  })
                }}
              >
                {/* Content */}
                <div className={`${service.gridArea === 'card2' ? '' : 'flex-1'} relative z-10`}>
                  <h3 className={`${service.gridArea === 'card4' ? 'text-lg' : 'text-xl'} font-bold ${
                    (service.gridArea === 'card1' || service.gridArea === 'card2' || service.gridArea === 'card3' || service.gridArea === 'card5') 
                      ? 'text-white' 
                      : 'text-gray-900'
                  } ${service.gridArea === 'card4' ? 'mb-2' : 'mb-3'} ${
                    (service.gridArea === 'card1' || service.gridArea === 'card2' || service.gridArea === 'card3' || service.gridArea === 'card5') 
                      ? 'group-hover:text-green-100' 
                      : 'group-hover:text-green-700'
                  } transition-colors`}>
                    {service.title}
                  </h3>
                  <p className={`${
                    (service.gridArea === 'card1' || service.gridArea === 'card2' || service.gridArea === 'card3' || service.gridArea === 'card5') 
                      ? 'text-white/90' 
                      : 'text-gray-600'
                  } leading-relaxed ${service.gridArea === 'card4' ? 'text-sm mb-3' : 'mb-4'} ${service.gridArea === 'card4' ? 'text-sm' : 'text-base'}`}>
                    {service.description}
                  </p>
                </div>

                {/* CTA */}
                <div className={`relative z-10 flex items-center ${
                  (service.gridArea === 'card1' || service.gridArea === 'card2' || service.gridArea === 'card3' || service.gridArea === 'card5') 
                    ? 'text-white' 
                    : 'text-green-600'
                } font-medium ${
                  (service.gridArea === 'card1' || service.gridArea === 'card2' || service.gridArea === 'card3' || service.gridArea === 'card5') 
                    ? 'group-hover:text-green-100' 
                    : 'group-hover:text-green-700'
                } transition-colors`}>
                  <span className="mr-2">Learn more</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

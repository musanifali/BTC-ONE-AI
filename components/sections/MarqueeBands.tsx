'use client';

import React from 'react';

const MarqueeBands = () => {
  const marqueeText1 = [
    'Future of Technology',
    'Artificial Intelligence',
    'Neural Networks',
    'Machine Learning',
    'Deep Learning',
    'AI Innovation'
  ];

  const marqueeText2 = [
    'Smart Solutions',
    'Intelligent Systems',
    'Advanced Analytics',
    'Automated Processes',
    'Digital Transformation',
    'Next-Gen AI'
  ];

  return (
    <div className="relative overflow-hidden">
      
      {/* First Marquee Band - Moving Right */}
      <div className="py-4 sm:py-6 lg:py-8 bg-gray-900 border-b border-gray-700/50">
        <div className="relative transform -rotate-2">
          <div className="flex whitespace-nowrap animate-marquee-right">
            {/* Repeat the content multiple times for seamless loop */}
            {[...Array(3)].map((_, index) => (
              <div key={index} className="flex items-center">
                {marqueeText1.map((text, i) => (
                  <React.Fragment key={i}>
                    <span className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mx-6">
                      {text}
                    </span>
                    <span className="text-3xl md:text-5xl lg:text-6xl font-bold text-green-400 mx-6">
                      /
                    </span>
                  </React.Fragment>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Second Marquee Band - Moving Left */}
      <div className="py-8 bg-gray-800">
        <div className="relative transform rotate-2">
          <div className="flex whitespace-nowrap animate-marquee-left">
            {/* Repeat the content multiple times for seamless loop */}
            {[...Array(3)].map((_, index) => (
              <div key={index} className="flex items-center">
                {marqueeText2.map((text, i) => (
                  <React.Fragment key={i}>
                    <span className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mx-6">
                      {text}
                    </span>
                    <span className="text-3xl md:text-5xl lg:text-6xl font-bold text-green-400 mx-6">
                      /
                    </span>
                  </React.Fragment>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default MarqueeBands;

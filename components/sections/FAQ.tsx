'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, ArrowRight, ArrowUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const faqs = [
    {
      id: 1,
      question: 'What is Artificial Intelligence?',
      answer: 'Machine Learning is a subset of AI that focuses on developing algorithms and models that allow computers to learn from data and improve their performance over time. It plays a crucial role in enabling AI systems to recognize patterns, make predictions, and adapt to new information.'
    },
    {
      id: 2,
      question: 'How does Machine Learning relate to Artificial Intelligence?',
      answer: 'Machine Learning is a fundamental component of AI that enables systems to automatically learn and improve from experience without being explicitly programmed. It provides the foundation for AI applications to process data, identify patterns, and make intelligent decisions.'
    },
    {
      id: 3,
      question: 'Is Artificial Intelligence replacing human jobs?',
      answer: 'AI is transforming the job market by automating certain tasks while creating new opportunities in AI development, data science, and human-AI collaboration. Rather than simply replacing humans, AI often augments human capabilities and creates demand for new skill sets.'
    },
    {
      id: 4,
      question: 'What are the different types of Artificial Intelligence?',
      answer: 'AI can be categorized into three main types: Narrow AI (designed for specific tasks like image recognition), General AI (hypothetical human-level intelligence across all domains), and Superintelligence (AI that exceeds human intelligence). Currently, most AI applications are Narrow AI.'
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-24 px-4" style={{ backgroundColor: '#ebf5ed' }}>
      <div className="container mx-auto max-w-4xl">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          {/* Eyebrow Label */}
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-white/80 rounded-full border border-green-200 text-green-700 text-sm font-medium">
              / faq /
            </span>
          </div>
          
          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Everything you need<br />
            to know about
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-6 mb-12">
          {faqs.map((faq, index) => (
            <div key={faq.id} className="border-b border-gray-200 pb-6">
              
              {/* Question Row */}
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between text-left group focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-lg p-2 -m-2"
              >
                <div className="flex items-center space-x-6 flex-1">
                  {/* Number */}
                  <div className="text-2xl md:text-3xl font-bold text-gray-400 min-w-[60px]">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  
                  {/* Question */}
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-green-700 transition-colors">
                    {faq.question}
                  </h3>
                </div>

                {/* Arrow Icon */}
                <div className="ml-4">
                  <ChevronDown 
                    className={`w-6 h-6 text-gray-600 group-hover:text-green-600 transition-all duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </div>
              </button>

              {/* Answer (Expandable) */}
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
              }`}>
                <div className="flex items-start space-x-6">
                  {/* Empty space for number alignment */}
                  <div className="min-w-[60px]"></div>
                  
                  {/* Answer Content */}
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Explore More Button */}
        <div className="text-center">
          <Button 
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg rounded-full shadow-lg group"
          >
            Explore more
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>

      {/* Floating Scroll-to-Top Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button
          onClick={scrollToTop}
          className="w-12 h-12 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};

export default FAQ;

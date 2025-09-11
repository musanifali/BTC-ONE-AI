'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-24 section-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Main Contact Panel */}
        <div className="bg-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 relative overflow-hidden">
          
          {/* Two-column grid */}
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
            
            {/* Left Column */}
            <div className="space-y-6 sm:space-y-8">
              {/* Eyebrow label */}
              <div className="inline-block">
                <span className="text-primary text-xs sm:text-sm font-mono bg-primary/10 px-3 py-1 rounded-full">
                  / get in touch /
                </span>
              </div>
              
              {/* Headline - Large stacked text */}
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-foreground">
                  Ready to Transform
                </h2>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                  Your Business with
                </h2>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary">
                  AI Solutions?
                </h2>
              </div>
              
              {/* Supporting text */}
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Let's discuss how our cutting-edge AI and machine learning solutions can revolutionize your operations and drive unprecedented growth.
              </p>
              
              {/* Call Center & Location blocks */}
              <div className="grid md:grid-cols-2 gap-8 pt-8">
                
                {/* Call Center */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-400/20 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-green-400" />
                    </div>
                    <h3 className="text-lg font-bold text-white">Call Center</h3>
                  </div>
                  <p className="text-gray-400">+1 (555) 123-4567</p>
                  <p className="text-gray-400">Available 24/7 for support</p>
                </div>
                
                {/* Our Location */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-400/20 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-green-400" />
                    </div>
                    <h3 className="text-lg font-bold text-white">Our Location</h3>
                  </div>
                  <p className="text-gray-400">San Francisco, CA</p>
                  <p className="text-gray-400">Silicon Valley Tech Hub</p>
                </div>
                
              </div>
            </div>
            
            {/* Right Column - Form Card */}
            <div className="lg:pl-8">
              {/* Elevated Form Card */}
              <div className="bg-gray-700/50 backdrop-blur-sm border border-gray-600/30 rounded-2xl p-8 shadow-2xl">
                
                {/* Form Header */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Get in Touch</h3>
                  <p className="text-gray-300">Send us a message and we'll respond within 24 hours.</p>
                </div>
                
                {/* Form Fields */}
                <form className="space-y-6">
                  
                  {/* Name Field */}
                  <div className="space-y-2">
                    <label className="text-sm text-gray-300">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="Enter your full name"
                      className="w-full bg-transparent border-0 border-b border-gray-500 pb-3 text-white placeholder-gray-400 focus:border-green-400 focus:outline-none transition-colors"
                    />
                  </div>
                  
                  {/* Email Field */}
                  <div className="space-y-2">
                    <label className="text-sm text-gray-300">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="Enter your email address"
                      className="w-full bg-transparent border-0 border-b border-gray-500 pb-3 text-white placeholder-gray-400 focus:border-green-400 focus:outline-none transition-colors"
                    />
                  </div>
                  
                  {/* Company Field */}
                  <div className="space-y-2">
                    <label className="text-sm text-gray-300">Company</label>
                    <input 
                      type="text" 
                      placeholder="Enter your company name"
                      className="w-full bg-transparent border-0 border-b border-gray-500 pb-3 text-white placeholder-gray-400 focus:border-green-400 focus:outline-none transition-colors"
                    />
                  </div>
                  
                  {/* Message Field */}
                  <div className="space-y-2">
                    <label className="text-sm text-gray-300">Message</label>
                    <textarea 
                      rows={4}
                      placeholder="Tell us about your project..."
                      className="w-full bg-transparent border-0 border-b border-gray-500 pb-3 text-white placeholder-gray-400 focus:border-green-400 focus:outline-none transition-colors resize-none"
                    />
                  </div>
                  
                  {/* Submit Button */}
                  <div className="pt-4">
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-primary hover:bg-primary/90 text-white shadow-lg group rounded-full py-4"
                    >
                      Send Message
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                  
                </form>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

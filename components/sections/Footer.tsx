'use client';

import React from 'react';
import { Facebook, Twitter, Linkedin, Youtube, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="section-dark pt-12 sm:pt-16 pb-6 sm:pb-8">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Upper Bar - Contact & Socials */}
        <div className="bg-card rounded-t-3xl px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* Left - Email */}
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-primary" />
              <a href="mailto:hello@btc-ai.com" className="text-primary hover:text-primary/80 transition-colors">
                hello@btc-ai.com
              </a>
            </div>
            
            {/* Right - Social Icons */}
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 bg-surface-tertiary hover:bg-primary rounded-lg flex items-center justify-center transition-colors group">
                <Facebook className="w-5 h-5 text-muted group-hover:text-primary-foreground" />
              </a>
              <a href="#" className="w-10 h-10 bg-surface-tertiary hover:bg-primary rounded-lg flex items-center justify-center transition-colors group">
                <Twitter className="w-5 h-5 text-muted group-hover:text-primary-foreground" />
              </a>
              <a href="#" className="w-10 h-10 bg-surface-tertiary hover:bg-primary rounded-lg flex items-center justify-center transition-colors group">
                <Linkedin className="w-5 h-5 text-muted group-hover:text-primary-foreground" />
              </a>
              <a href="#" className="w-10 h-10 bg-surface-tertiary hover:bg-primary rounded-lg flex items-center justify-center transition-colors group">
                <Youtube className="w-5 h-5 text-muted group-hover:text-primary-foreground" />
              </a>
            </div>
          </div>
          
          {/* Divider Line */}
          <div className="border-t border-border mt-6"></div>
        </div>
        
        {/* Main Footer Panel */}
        <div className="bg-card px-8 py-12">
          
          {/* Three-column layout */}
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Column 1 - Brand & Tagline */}
            <div className="lg:col-span-1 space-y-6">
              {/* Brand Logo */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">B</span>
                </div>
                <span className="text-2xl font-bold text-foreground">BTC One AI</span>
              </div>
              
              {/* Big Bold Headline */}
              <div className="space-y-2">
                <h2 className="text-3xl md:text-4xl font-bold leading-tight text-foreground">
                  It's blow your mind!
                </h2>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight text-primary">
                  Meet Neural Networks
                </h2>
              </div>
              
              <p className="text-muted max-w-md">
                Revolutionizing the future with cutting-edge AI solutions that transform businesses and empower innovation.
              </p>
            </div>
            
            {/* Column 2 - Company Links */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-foreground">Company</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-muted hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="text-muted hover:text-primary transition-colors">Our Expertise</a></li>
                <li><a href="#" className="text-muted hover:text-primary transition-colors">Case Studies</a></li>
                <li><a href="#" className="text-muted hover:text-primary transition-colors">Careers</a></li>
                <li><a href="#" className="text-muted hover:text-primary transition-colors">News & Insights</a></li>
                <li><a href="#" className="text-muted hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            
            {/* Column 3 - Services Links */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-foreground">Services</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-muted hover:text-primary transition-colors">Deep Learning Solutions</a></li>
                <li><a href="#" className="text-muted hover:text-primary transition-colors">Machine Learning</a></li>
                <li><a href="#" className="text-muted hover:text-primary transition-colors">Neural Network Automation</a></li>
                <li><a href="#" className="text-muted hover:text-primary transition-colors">AI Strategy Consulting</a></li>
                <li><a href="#" className="text-muted hover:text-primary transition-colors">Performance Analytics</a></li>
                <li><a href="#" className="text-muted hover:text-primary transition-colors">Security & Compliance</a></li>
              </ul>
            </div>
            
          </div>
        </div>
        
        {/* Bottom Bar with Inset Corners */}
        <div className="relative">
          {/* Inset corner cut-outs */}
          <div className="absolute bottom-0 left-0 w-8 h-8">
            <div className="w-full h-full bg-surface-secondary rounded-br-2xl"></div>
          </div>
          <div className="absolute bottom-0 right-0 w-8 h-8">
            <div className="w-full h-full bg-surface-secondary rounded-bl-2xl"></div>
          </div>
          
          {/* Bottom content */}
          <div className="bg-card rounded-b-3xl px-8 py-6 mx-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
              
              {/* Left - Copyright */}
              <div className="text-muted">
                © BTC One AI 2024. All rights reserved.
              </div>
              
              {/* Right - Legal Links */}
              <div className="flex items-center gap-6">
                <a href="#" className="text-muted hover:text-primary transition-colors">Terms of Use</a>
                <a href="#" className="text-muted hover:text-primary transition-colors">Privacy</a>
                <a href="#" className="text-muted hover:text-primary transition-colors">Environmental Policy</a>
              </div>
              
            </div>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;

'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLightSection, setIsLightSection] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Get all sections with theme classes
      const sections = document.querySelectorAll('.section-light, .section-dark');
      const navbar = document.querySelector('nav');
      
      if (!navbar) return;
      
      const navbarRect = navbar.getBoundingClientRect();
      const navbarCenter = navbarRect.top + navbarRect.height / 2;
      
      // Find which section the navbar is currently over
      let currentSection: Element | null = null;
      sections.forEach((section: Element) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= navbarCenter && rect.bottom >= navbarCenter) {
          currentSection = section;
        }
      });
      
      // Check if current section is light themed
      if (currentSection && (currentSection as Element).classList.contains('section-light')) {
        setIsLightSection(true);
      } else {
        setIsLightSection(false);
      }
    };

    // Initial check
    handleScroll();
    
    // Add scroll listener with throttling for better performance
    let ticking = false;
    const scrollHandler = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', scrollHandler);
    
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'Pages', href: '#pages' },
    { label: 'Services', href: '#services' },
    { label: 'Shop', href: '#shop' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contacts', href: '#contacts' },
  ];

  return (
    <>
      {/* Navbar */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-all duration-300 shadow-lg ${
          isLightSection 
            ? 'bg-light-bg/90 border-light-border/50 text-light-fg' 
            : 'bg-dark-bg/90 border-dark-border/50 text-dark-fg'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-2xl font-bold">
                <span className={isLightSection ? 'text-light-fg' : 'text-dark-fg'}>Neuro</span>
                <span className="text-primary">AI</span>
              </div>
            </div>

            {/* Hamburger Menu Button */}
            <button
              onClick={toggleMenu}
              className={`p-2 rounded-lg transition-all duration-300 ${
                isLightSection 
                  ? 'text-light-fg hover:bg-light-card' 
                  : 'text-dark-fg hover:bg-dark-card'
              } ${
                isMenuOpen 
                  ? (isLightSection ? 'bg-light-card' : 'bg-dark-card')
                  : 'bg-transparent'
              }`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className={`fixed inset-0 z-40 backdrop-blur-md transition-all duration-300 ${
          isLightSection ? 'bg-light-bg/95' : 'bg-dark-bg/95'
        }`}>
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {/* Menu Items */}
            <div className="flex flex-col items-center space-y-6">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={toggleMenu}
                  className={`text-2xl font-semibold transition-colors hover:text-primary ${
                    isLightSection ? 'text-light-fg' : 'text-dark-fg'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Action Button */}
            <div className="mt-8">
              <button
                onClick={toggleMenu}
                className="font-semibold px-8 py-4 rounded-full transition-colors bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Overlay click to close */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-30"
          onClick={toggleMenu}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Navbar;

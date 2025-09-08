'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-green-200">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-2xl font-bold">
                <span className="text-gray-900">Neuro</span>
                <span style={{ color: '#35d687' }}>AI</span>
              </div>
            </div>

            {/* Hamburger Menu Button */}
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg hover:bg-green-50 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-900" />
              ) : (
                <Menu className="w-6 h-6 text-gray-900" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-sm">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {/* Menu Items */}
            <div className="flex flex-col items-center space-y-6">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={toggleMenu}
                  className="text-2xl font-semibold text-gray-900 hover:text-green-600 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Action Button */}
            <div className="mt-8">
              <button
                onClick={toggleMenu}
                className="font-semibold px-8 py-4 rounded-full transition-colors text-white"
                style={{ backgroundColor: '#35d687' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#2fb574';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#35d687';
                }}
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
          aria-label="Close menu"
        />
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

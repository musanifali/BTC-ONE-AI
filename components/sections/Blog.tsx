'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, User } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      date: '5 Jan 2024',
      author: 'andrew',
      title: 'Is Artificial Intelligence accessible to businesses of all sizes',
      excerpt: 'Yes, AI solutions are becoming increasingly accessible to businesses of all sizes, thanks to cloud-based platforms and user-friendly tools.',
      image: '/images/blog/ai-business.jpg',
      slug: 'ai-accessible-businesses'
    },
    {
      id: 2,
      date: '19 Feb 2024',
      author: 'andrew',
      title: 'How can I get started with Artificial Intelligence for my business',
      excerpt: 'Getting started with AI involves identifying key use cases, choosing the right tools, and building a data-driven foundation for success.',
      image: '/images/blog/ai-getting-started.jpg',
      slug: 'getting-started-ai-business'
    },
    {
      id: 3,
      date: '12 Mar 2024',
      author: 'sarah',
      title: 'The Future of Machine Learning in Healthcare Innovation',
      excerpt: 'Discover how machine learning is revolutionizing healthcare through predictive analytics, personalized medicine, and diagnostic automation.',
      image: '/images/blog/ml-healthcare.jpg',
      slug: 'machine-learning-healthcare'
    }
  ];

  return (
    <section className="py-24 px-4" style={{ backgroundColor: '#ebf5ed' }}>
      <div className="container mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-16">
          
          {/* Left - Label and Heading */}
          <div className="lg:max-w-4xl">
            {/* Eyebrow label */}
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-white border border-green-200 text-gray-600 rounded-full text-sm font-medium shadow-sm">
                / blog /
              </span>
            </div>
            
            {/* Main heading - stacked and bold */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Exploring the frontiers of{' '}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                artificial Intelligence:
              </span>
              <br />
              Insights, innovations and impact
            </h2>
          </div>
          
          {/* Right - CTA Button */}
          <div className="lg:pt-12">
            <Button 
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-white shadow-lg group rounded-full"
            >
              More articles
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
        </div>
        
        {/* Blog Card Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1 group"
            >
              {/* Card Image */}
              <div className="aspect-video bg-gradient-to-br from-green-100 to-emerald-100 relative overflow-hidden">
                {/* Placeholder for blog image */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-200/50 to-emerald-300/50 flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold text-xl">AI</span>
                    </div>
                    <p className="text-gray-600 text-sm font-medium">Blog Image</p>
                  </div>
                </div>
              </div>
              
              {/* Card Content */}
              <div className="p-6 space-y-4">
                
                {/* Date & Author */}
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-green-700 transition-colors">
                  {post.title}
                </h3>
                
                {/* Excerpt */}
                <p className="text-gray-600 leading-relaxed text-sm">
                  {post.excerpt}
                </p>
                
                {/* Read More Link */}
                <div className="pt-2">
                  <span className="text-green-600 font-medium text-sm group-hover:text-green-700 transition-colors inline-flex items-center gap-1">
                    Read more
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
                
              </div>
            </article>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Blog;

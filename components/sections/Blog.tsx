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
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3',
      slug: 'ai-accessible-businesses'
    },
    {
      id: 2,
      date: '19 Feb 2024',
      author: 'andrew',
      title: 'How can I get started with Artificial Intelligence for my business',
      excerpt: 'Getting started with AI involves identifying key use cases, choosing the right tools, and building a data-driven foundation for success.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3',
      slug: 'getting-started-ai-business'
    },
    {
      id: 3,
      date: '12 Mar 2024',
      author: 'sarah',
      title: 'The Future of Machine Learning in Healthcare Innovation',
      excerpt: 'Discover how machine learning is revolutionizing healthcare through predictive analytics, personalized medicine, and diagnostic automation.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3',
      slug: 'machine-learning-healthcare'
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 section-light">
      <div className="container mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-16">
          
          {/* Left - Label and Heading */}
          <div className="lg:max-w-4xl">
            {/* Eyebrow label */}
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-card border border-border text-muted rounded-full text-sm font-medium shadow-sm">
                / blog /
              </span>
            </div>
            
            {/* Main heading - stacked and bold */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Exploring the frontiers of{' '}
              <span style={{ color: '#35D687' }}>
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
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg group rounded-full"
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
              className="relative h-[28rem] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1 group"
              style={{
                backgroundImage: `url(${post.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              {/* Gradient Mask - Dark to Transparent */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              
              {/* Content Overlay */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                
                {/* Date & Author */}
                <div className="flex items-center gap-4 text-sm text-white/80 mb-3">
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
                <h3 className="text-xl font-bold text-white leading-tight mb-4 group-hover:text-green-200 transition-colors">
                  {post.title}
                </h3>
                
                {/* CTA Button at Bottom Corner */}
                <div className="flex justify-between items-end">
                  <div className="flex-1">
                    <p className="text-white/70 text-sm leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="ml-4">
                    <div className="bg-white/20 backdrop-blur-sm hover:bg-primary/90 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 inline-flex items-center gap-2">
                      Read More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
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

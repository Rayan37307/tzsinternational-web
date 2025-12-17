'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { Typography } from '@/components/ui/Typography';
import { motion } from 'framer-motion';

interface BlogPost {
  id: string | number;
  title: string;
  content: string;
  createdAt: string;
  tags: string[];
  coverImage?: {
    url: string;
  };
}

const BlogSlider = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch real blog data from the API
  useEffect(() => {
    async function fetchBlogs() {
      try {
        setIsLoading(true);
        const res = await fetch("/api/blog", { cache: "no-store" });
        if (!res.ok) {
          throw new Error(`Error: ${res.status}`);
        }
        const data = await res.json();

        // Take only the first 4 blogs for the slider
        const blogPosts = data.slice(0, 4).map((blog: any) => ({
          id: blog._id || blog.id,
          title: blog.title,
          content: blog.content,
          createdAt: blog.createdAt,
          tags: blog.tags || [],
          coverImage: blog.coverImage || undefined
        }));

        setBlogs(blogPosts);
      } catch (err) {
        console.error("Failed to fetch blogs:", err);
        // Fallback to sample data if API fails
        const sampleBlogs: BlogPost[] = [
          {
            id: 1,
            title: "Global Employment Trends 2024",
            content: "Understanding the latest trends in international recruitment and how they impact job seekers across various industries.",
            createdAt: new Date().toISOString(),
            tags: ["Trends", "Employment"],
            coverImage: undefined
          },
          {
            id: 2,
            title: "Preparing for International Work",
            content: "Essential steps and documentation needed for international employment opportunities and cultural adaptation tips.",
            createdAt: new Date(Date.now() - 86400000).toISOString(), // yesterday
            tags: ["Preparation", "Documentation"],
            coverImage: undefined
          },
          {
            id: 3,
            title: "Skill Development Programs",
            content: "How our training programs help candidates meet international employment standards and enhance their career prospects.",
            createdAt: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
            tags: ["Training", "Skills"],
            coverImage: undefined
          },
          {
            id: 4,
            title: "Navigating Visa Requirements",
            content: "A comprehensive guide to understanding visa requirements for different countries and how to prepare your application.",
            createdAt: new Date(Date.now() - 259200000).toISOString(), // 3 days ago
            tags: ["Visa", "Documentation"],
            coverImage: undefined
          }
        ];
        setBlogs(sampleBlogs);
      } finally {
        setIsLoading(false);
      }
    }

    fetchBlogs();
  }, []);

  // Auto-rotate the slider every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % blogs.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [blogs.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % blogs.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + blogs.length) % blogs.length);
  };

  // Format date
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  if (isLoading || blogs.length === 0) {
    return (
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Typography variant="h2" className="mb-4">Latest Blog Posts</Typography>
          </div>
          <div className="flex justify-center items-center py-10">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
          </div>
        </div>
      </section>
    );
  }

  const currentBlog = blogs[currentIndex];

  return (
    <section className="py-20 bg-bg-muted">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <Typography variant="h2" className="mb-4">Latest Blog Posts</Typography>
            <Typography variant="p" className="text-lg text-text-secondary">
              Insights, tips, and trends in international recruitment
            </Typography>
          </div>
          <Link
            href="/blog"
            className="mt-4 md:mt-0"
          >
            <Button variant="outline" className="border-primary-600 text-primary-600 hover:bg-primary-50">
              See All Posts
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="relative overflow-hidden rounded-xl">
          <div className="relative h-[500px]">
            {/* Current blog post */}
            <motion.div
              key={currentBlog.id}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <Card className="h-full overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                  <div className="relative">
                    {currentBlog.coverImage ? (
                      <img
                        src={currentBlog.coverImage.url}
                        alt={currentBlog.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="bg-gray-200 border-2 border-dashed border-border-light w-full h-full flex items-center justify-center">
                        <span className="text-gray-500">Blog Image</span>
                      </div>
                    )}
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center text-text-secondary text-sm mb-4">
                      <Calendar size={16} className="mr-2 text-primary-500" />
                      <span>{formatDate(currentBlog.createdAt)}</span>

                      {currentBlog.tags && currentBlog.tags.length > 0 && (
                        <div className="flex items-center ml-4">
                          <Tag size={16} className="mr-2 text-primary-500" />
                          <span className="text-text-secondary">{currentBlog.tags[0]}</span>
                        </div>
                      )}
                    </div>

                    <Typography variant="h3" className="text-2xl font-bold mb-4 text-text-main">
                      {currentBlog.title}
                    </Typography>

                    <Typography variant="p" className="text-text-secondary mb-6 line-clamp-3">
                      {currentBlog.content}
                    </Typography>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-text-secondary text-sm">
                        <Clock size={16} className="mr-2 text-primary-500" />
                        <span>5 min read</span>
                      </div>

                      <Link
                        href={`/blog/${currentBlog.id}`}
                        className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center"
                      >
                        Read More
                        <ArrowRight size={14} className="ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
          
          {/* Navigation controls */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-text-main p-2 rounded-full shadow-md z-10 transition-all"
            aria-label="Previous blog"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-text-main p-2 rounded-full shadow-md z-10 transition-all"
            aria-label="Next blog"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Dots indicator */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
            {blogs.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary-600' : 'bg-white/50'
                }`}
                aria-label={`Go to blog ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSlider;

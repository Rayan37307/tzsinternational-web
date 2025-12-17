'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Calendar, Clock, Tag, Search, Filter } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { Typography } from '@/components/ui/Typography';
import { FadeIn } from '@/components/animation/FadeIn';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface BlogPost {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  tags: string[];
  readTime: string;
}

const BlogsPage = () => {
  const [allBlogs, setAllBlogs] = useState<BlogPost[]>([]);
  const [filteredBlogs, setFilteredBlogs] = useState<BlogPost[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Sample blog data - in a real implementation, this would come from an API
  useEffect(() => {
    const sampleBlogs: BlogPost[] = [
      {
        id: 1,
        title: "Global Employment Trends 2024",
        content: "Understanding the latest trends in international recruitment and how they impact job seekers across various industries and regions worldwide.",
        createdAt: new Date().toISOString(),
        tags: ["Trends", "Employment", "Global"],
        readTime: "5 min read"
      },
      {
        id: 2,
        title: "Preparing for International Work",
        content: "Essential steps and documentation needed for international employment opportunities and cultural adaptation tips for success.",
        createdAt: new Date(Date.now() - 86400000).toISOString(), // yesterday
        tags: ["Preparation", "Documentation", "Career"],
        readTime: "7 min read"
      },
      {
        id: 3,
        title: "Skill Development Programs",
        content: "How our training programs help candidates meet international employment standards and enhance their career prospects significantly.",
        createdAt: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
        tags: ["Training", "Skills", "Development"],
        readTime: "6 min read"
      },
      {
        id: 4,
        title: "Navigating Visa Requirements",
        content: "A comprehensive guide to understanding visa requirements for different countries and how to prepare your application effectively.",
        createdAt: new Date(Date.now() - 259200000).toISOString(), // 3 days ago
        tags: ["Visa", "Documentation", "Travel"],
        readTime: "8 min read"
      },
      {
        id: 5,
        title: "Cultural Integration in the Workplace",
        content: "Tips and strategies for successfully integrating into different workplace cultures and building meaningful professional relationships.",
        createdAt: new Date(Date.now() - 345600000).toISOString(), // 4 days ago
        tags: ["Culture", "Integration", "Workplace"],
        readTime: "4 min read"
      },
      {
        id: 6,
        title: "Remote Work Opportunities Abroad",
        content: "Exploring the rise of remote work opportunities and how to position yourself for international remote positions effectively.",
        createdAt: new Date(Date.now() - 432000000).toISOString(), // 5 days ago
        tags: ["Remote Work", "Technology", "Opportunities"],
        readTime: "5 min read"
      }
    ];
    
    setAllBlogs(sampleBlogs);
    setFilteredBlogs(sampleBlogs);
    setIsLoading(false);
  }, []);

  // Extract unique tags
  const allTags = Array.from(new Set(allBlogs.flatMap(blog => blog.tags)));

  // Filter blogs based on search term and selected tag
  useEffect(() => {
    let result = allBlogs;
    
    if (searchTerm) {
      result = result.filter(blog => 
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    if (selectedTag) {
      result = result.filter(blog => blog.tags.includes(selectedTag));
    }
    
    setFilteredBlogs(result);
  }, [searchTerm, selectedTag, allBlogs]);

  // Format date
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  // Clear filters
  const clearFilters = () => {
    setSearchTerm('');
    setSelectedTag(null);
  };

  return (
    <div className="min-h-screen bg-bg-main text-text-main">
      <Navbar />
      <div className="pt-24" /> {/* Space for fixed navbar */}

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-900 dark:to-gray-800"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <Typography variant="h1" className="mb-6 leading-tight">
                Our <span className="text-primary-600">Blog</span>
              </Typography>
              <Typography variant="p" className="text-lg text-text-secondary mb-10">
                Insights, tips, and stories from the world of international recruitment and career development.
              </Typography>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search blog posts..."
                  className="w-full pl-10 pr-4 py-3 bg-bg-input rounded-lg border border-border-light focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary h-5 w-5" />
                <select
                  className="pl-10 pr-8 py-3 bg-bg-input rounded-lg border border-border-light focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all appearance-none"
                  value={selectedTag || ''}
                  onChange={(e) => setSelectedTag(e.target.value || null)}
                >
                  <option value="">All Tags</option>
                  {allTags.map((tag, index) => (
                    <option key={index} value={tag}>{tag}</option>
                  ))}
                </select>
              </div>
              {(searchTerm || selectedTag) && (
                <Button variant="outline" onClick={clearFilters}>
                  Clear
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="flex flex-col md:flex-row justify-between items-center mb-12">
              <div>
                <Typography variant="h2" className="mb-4">Latest Articles</Typography>
                <Typography variant="p" className="text-text-secondary">
                  {filteredBlogs.length} {filteredBlogs.length === 1 ? 'article' : 'articles'} found
                </Typography>
              </div>
            </div>
          </FadeIn>

          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
            </div>
          ) : filteredBlogs.length === 0 ? (
            <div className="text-center py-20">
              <Typography variant="h4" className="mb-4">No articles found</Typography>
              <Typography variant="p" className="text-text-secondary mb-6">
                Try adjusting your search or filter to find what you're looking for.
              </Typography>
              <Button onClick={clearFilters}>Clear Filters</Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogs.map((article) => (
                <Card 
                  key={article.id} 
                  className="overflow-hidden group hover:shadow-xl transition-all border border-border-light"
                >
                  <div className="relative h-52">
                    <div className="bg-gray-200 border-2 border-dashed border-border-light w-full h-full flex items-center justify-center">
                      <span className="text-gray-500">Blog Image</span>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-center text-text-secondary text-sm mb-3">
                      <Calendar size={14} className="mr-1 text-primary-500" />
                      <span>{formatDate(article.createdAt)}</span>

                      {article.tags && article.tags.length > 0 && (
                        <div className="flex items-center ml-4">
                          <Tag size={14} className="mr-1 text-primary-500" />
                          <span className="text-text-secondary">{article.tags[0]}</span>
                        </div>
                      )}
                    </div>

                    <Typography variant="h4" className="text-xl font-bold text-text-main mb-3 line-clamp-2">
                      {article.title}
                    </Typography>

                    <Typography variant="p" className="text-text-secondary mb-4 line-clamp-3">
                      {article.content}
                    </Typography>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-text-secondary text-sm">
                        <Clock size={14} className="mr-1 text-primary-500" />
                        <span>{article.readTime}</span>
                      </div>

                      <Link
                        href={`/blog/${article.id}`}
                        className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center"
                      >
                        Read More
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogsPage;
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Calendar, Tag } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Whatsapp from "@/components/whatsapp";

interface BlogPost {
  _id?: string;
  id?: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt?: string;
  tags: string[];
  author?: string;
  coverImage?: {
    url: string;
  };
}

export default function BlogPage() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedTag, setSelectedTag] = useState<string>("");
  const [allTags, setAllTags] = useState<string[]>([]);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const res = await fetch("/api/blog", { cache: "no-store" });
        if (!res.ok) {
          throw new Error(`Error: ${res.status}`);
        }
        const data: BlogPost[] = await res.json();
        setBlogs(data);

        // Extract all unique tags
        const tags = data.flatMap((blog: BlogPost) => blog.tags || []);
        const uniqueTags = Array.from(new Set(tags)) as string[];
        setAllTags(uniqueTags);
      } catch (err) {
        console.error("Failed to fetch blogs:", err);
        setError("Failed to load blog posts. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    }

    fetchBlogs();
  }, []);

  // Filter blogs based on search term and selected tag
  const filteredBlogs = blogs.filter((blog: BlogPost) => {
    const matchesSearch =
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.content.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesTag =
      selectedTag === "" || (blog.tags && blog.tags.includes(selectedTag));

    return matchesSearch && matchesTag;
  });

  // Format date
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
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
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-text-main mb-4">
              Our <span className="text-primary-600">Blog</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Insights, tips, and trends in international recruitment and career development
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 bg-bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search */}
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

              {/* Tag Filter */}
              <div className="relative">
                <select
                  className="w-full pl-10 pr-8 py-3 bg-bg-input rounded-lg border border-border-light focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all appearance-none"
                  value={selectedTag}
                  onChange={(e) => setSelectedTag(e.target.value)}
                >
                  <option value="">All Tags</option>
                  {allTags.map((tag) => (
                    <option key={tag} value={tag}>
                      {tag}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-text-main">Latest Articles</h2>
              <p className="text-text-secondary">
                {filteredBlogs.length} {filteredBlogs.length === 1 ? 'article' : 'articles'} found
              </p>
            </div>
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
            </div>
          ) : error ? (
            <div className="text-center py-20">
              <p className="text-red-500 text-xl">{error}</p>
            </div>
          ) : filteredBlogs.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-text-secondary text-xl">
                No blog posts found matching your criteria.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogs.map((blog: any) => (
                <div
                  key={blog._id}
                  className="bg-bg-card rounded-xl shadow-sleek overflow-hidden group hover:shadow-sleek-lg hover:-translate-y-1 border border-border-light"
                >
                  <div className="relative h-52">
                    {blog?.coverImage?.url ? (
                      <Image
                        src={blog.coverImage.url}
                        alt={blog.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="bg-gray-200 border-2 border-dashed border-border-light w-full h-full flex items-center justify-center">
                        <span className="text-gray-500">Blog Image</span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-text-secondary text-sm mb-3">
                      <Calendar size={14} className="mr-1 text-primary-500" />
                      <span>{formatDate(blog.createdAt)}</span>

                      {blog.tags && blog.tags.length > 0 && (
                        <div className="flex items-center ml-4">
                          <Tag size={14} className="mr-1 text-primary-500" />
                          <span className="text-text-secondary">{blog.tags[0]}</span>
                        </div>
                      )}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-text-main line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="text-text-secondary mb-4 line-clamp-3">
                      {blog.content}
                    </p>

                    {/* Tags */}
                    {blog.tags && blog.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {blog.tags.map((tag: string) => (
                          <span
                            key={tag}
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-bg-main text-text-secondary border border-border-light"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <Link
                      href={`/blog/${blog._id}`}
                      className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center"
                    >
                      Read More
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

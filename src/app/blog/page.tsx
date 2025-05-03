"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Calendar, Tag } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Whatsapp from "@/components/whatsapp";

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [allTags, setAllTags] = useState<string[]>([]);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const res = await fetch("/api/blog", { cache: "no-store" });
        if (!res.ok) {
          throw new Error(`Error: ${res.status}`);
        }
        const data = await res.json();
        setBlogs(data);

        // Extract all unique tags
        const tags = data.flatMap((blog: any) => blog.tags || []);
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
  const filteredBlogs = blogs.filter((blog: any) => {
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
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
        {/* Hero Section */}
        <div className="relative h-80 bg-primary-600">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-500 opacity-90"></div>
          <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Blog
            </h1>
            <p className="text-xl text-white max-w-2xl">
              Discover travel tips, destination guides, and stories from our
              adventures around the world.
            </p>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-md p-6 mb-8 border border-primary-100">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search */}
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search size={18} className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search blog posts..."
                  className="w-full pl-10 pr-4 py-2 border border-primary-200 rounded-md focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* Tag Filter */}
              <div className="w-full md:w-64">
                <select
                  className="w-full p-2 border border-primary-200 rounded-md focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500"
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

          {/* Tags List */}
          {allTags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              <button
                onClick={() => setSelectedTag("")}
                className={`px-3 py-1 rounded-full text-sm ${
                  selectedTag === ""
                    ? "bg-secondary-500 text-white"
                    : "bg-primary-100 text-primary-700 hover:bg-primary-200"
                }`}
              >
                All
              </button>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-3 py-1 rounded-full text-sm ${
                    selectedTag === tag
                      ? "bg-secondary-500 text-white"
                      : "bg-primary-100 text-primary-700 hover:bg-primary-200"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          )}

          {/* Blog Posts */}
          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-secondary-500"></div>
            </div>
          ) : error ? (
            <div className="text-center py-20">
              <p className="text-red-500 text-xl">{error}</p>
            </div>
          ) : filteredBlogs.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500 text-xl">
                No blog posts found matching your criteria.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogs.map((blog: any) => (
                <div
                  key={blog._id}
                  className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 border border-primary-100"
                >
                  <div className="relative h-48">
                    <Image
                      src={blog.coverImage.url}
                      alt={blog.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-primary-600 text-sm mb-2">
                      <Calendar size={14} className="mr-1 text-secondary-500" />
                      <span>{formatDate(blog.createdAt)}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-primary-900">
                      {blog.title}
                    </h3>
                    <p className="text-primary-600 mb-4 line-clamp-3">
                      {blog.content}
                    </p>

                    {/* Tags */}
                    {blog.tags && blog.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {blog.tags.map((tag: string) => (
                          <span
                            key={tag}
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <Link
                      href={`/blog/${blog._id}`}
                      className="text-secondary-600 hover:text-secondary-700 font-medium inline-flex items-center"
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
      </main>
      <Footer />
      <Whatsapp />
    </>
  );
}

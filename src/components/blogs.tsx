"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const res = await fetch("/api/blog", { cache: "no-store" });
        if (!res.ok) {
          throw new Error(`Error: ${res.status}`);
        }
        const data = await res.json();
        setBlogs(data);
      } catch (err) {
        console.error("Failed to fetch blogs:", err);
        setError("Failed to load blogs. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    }

    fetchBlogs();
  }, []);

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
    <section className="py-24 bg-gradient-to-b from-white to-primary-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-primary-950">
              Latest Blog Posts
            </h2>
            <p className="text-primary-600 mt-2 max-w-2xl">
              Travel tips, destination guides, and stories from our adventures
              around the world
            </p>
          </div>
          <Link
            href="/blog"
            className="mt-4 md:mt-0 inline-flex items-center text-primary-600 font-medium hover:text-primary-800 transition-colors"
          >
            View all posts
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-secondary-500"></div>
          </div>
        ) : error ? (
          <div className="text-center py-10">
            <p className="text-red-500">{error}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.slice(0, 3).map((blog: any) => (
              <div
                key={blog._id}
                className="bg-white rounded-xl shadow-md overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1 border border-primary-100"
              >
                <div className="relative h-52">
                  <Image
                    src={blog.coverImage.url}
                    alt={blog.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-950/10 to-transparent"></div>
                </div>

                <div className="p-6">
                  <div className="flex items-center text-primary-600 text-sm mb-3">
                    <Calendar size={14} className="mr-1 text-secondary-500" />
                    <span>
                      {formatDate(blog.createdAt || new Date().toISOString())}
                    </span>

                    {blog.tags && blog.tags.length > 0 && (
                      <div className="flex items-center ml-4">
                        <Tag size={14} className="mr-1 text-secondary-500" />
                        <span className="text-primary-600">{blog.tags[0]}</span>
                      </div>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-primary-900 mb-3 line-clamp-2">
                    {blog.title}
                  </h3>

                  <p className="text-primary-600 mb-4 line-clamp-3">
                    {blog.content}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-primary-600 text-sm">
                      <Clock size={14} className="mr-1 text-secondary-500" />
                      <span>5 min read</span>
                    </div>

                    <Link
                      href={`/blog/${blog._id}`}
                      className="text-secondary-600 hover:text-secondary-700 font-medium inline-flex items-center"
                    >
                      Read More
                      <ArrowRight size={14} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

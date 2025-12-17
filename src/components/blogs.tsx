"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";

interface BlogPost {
  _id?: string;
  id?: string;
  title: string;
  content: string;
  createdAt: string;
  tags: string[];
  coverImage?: {
    url: string;
  };
}

export default function Blogs() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const res = await fetch("/api/blog", { cache: "no-store" });
        if (!res.ok) {
          throw new Error(`Error: ${res.status}`);
        }
        const data: BlogPost[] = await res.json();
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
    <section className="py-16 bg-bg-muted">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-text-main">
              Latest Insights
            </h2>
            <p className="text-text-secondary mt-2 max-w-2xl">
              Industry news, recruitment tips, and career guidance for international employment
            </p>
          </div>
          <Link
            href="/blog"
            className="mt-4 md:mt-0 inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
          >
            View all articles
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
          </div>
        ) : error ? (
          <div className="text-center py-10">
            <p className="text-red-500">{error}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((article) => (
              <div
                key={article._id || article.id}
                className="bg-bg-card rounded-xl shadow-sleek overflow-hidden transition-all hover:shadow-sleek-lg hover:-translate-y-1 border border-border-light"
              >
                <div className="relative h-52">
                  {article.coverImage ? (
                    <Image
                      src={article.coverImage.url}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="bg-gray-200 border-2 border-dashed border-border-light w-full h-full flex items-center justify-center">
                      <span className="text-gray-500">Article Image</span>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-center text-text-secondary text-sm mb-3">
                    <Calendar size={14} className="mr-1 text-primary-500" />
                    <span>
                      {formatDate(article.createdAt)}
                    </span>

                    {article.tags && article.tags.length > 0 && (
                      <div className="flex items-center ml-4">
                        <Tag size={14} className="mr-1 text-primary-500" />
                        <span className="text-text-secondary">{article.tags[0]}</span>
                      </div>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-text-main mb-3 line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-text-secondary mb-4 line-clamp-3">
                    {article.content}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-text-secondary text-sm">
                      <Clock size={14} className="mr-1 text-primary-500" />
                      <span>5 min read</span>
                    </div>

                    <Link
                      href={`/blog/${article._id || article.id}`}
                      className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center"
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

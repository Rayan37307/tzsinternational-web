"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Calendar, User, Tag, Clock, Share2 } from "lucide-react";
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

type Props = {
  params: Promise<{ id: string }>;
};

export default function BlogDetailsPage({ params }: Props) {
  const { id } = React.use(params);
  const router = useRouter();
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string>("");
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    async function fetchBlog() {
      try {
        const res = await fetch(`/api/blog/${id}`);
        if (!res.ok) throw new Error("Failed to fetch blog");
        const data = await res.json();
        setBlog(data);

        // Fetch related posts
        const relatedRes = await fetch("/api/blog");
        if (relatedRes.ok) {
          const allPosts = await relatedRes.json();
          // Filter out current post and limit to 3 related posts
          const related = allPosts
            .filter((post: any) => {
              const postId = typeof post._id === 'string' ? post._id : post.id;
              return postId !== id;
            })
            .slice(0, 3);
          setRelatedPosts(related);
        }
      } catch (error) {
        console.error("Error fetching blog:", error);
        setError("Failed to load blog details. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    }

    fetchBlog();
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, [id]);

  // Format date
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-bg-main">
        <Navbar />
        <div className="pt-24 flex items-center justify-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary-500"></div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-bg-main">
        <Navbar />
        <div className="pt-24 flex items-center justify-center">
          <div className="bg-bg-card p-8 rounded-lg shadow-sleek max-w-md w-full text-center border border-border-light">
            <div className="text-red-500 text-5xl mb-4">⚠️</div>
            <h2 className="text-2xl font-bold text-text-main mb-2">
              Error Loading Blog
            </h2>
            <p className="text-text-secondary mb-6">{error}</p>
            <button
              onClick={() => router.back()}
              className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
            >
              Go Back
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-bg-main">
        <Navbar />
        <div className="pt-24 flex items-center justify-center">
          <div className="bg-bg-card p-8 rounded-lg shadow-sleek max-w-md w-full text-center border border-border-light">
            <div className="text-yellow-500 text-5xl mb-4">🔍</div>
            <h2 className="text-2xl font-bold text-text-main mb-2">
              Blog Not Found
            </h2>
            <p className="text-text-secondary mb-6">
              The blog post you're looking for doesn't exist or has been
              removed.
            </p>
            <Link
              href="/blog"
              className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
            >
              Browse All Blogs
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg-main text-text-main">
      <Navbar />
      <div className="pt-24">
        {/* Hero Section */}
        <div className="relative h-[40vh] md:h-[50vh] lg:h-[60vh] mb-12">
          {blog?.coverImage?.url ? (
            <Image
              src={blog.coverImage.url}
              alt={blog.title}
              fill
              className="object-cover"
            />
          ) : (
            <div className="absolute inset-0 bg-gray-200 border-2 border-dashed">
              <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-500">
                Blog Image
              </span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>

          <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-8 relative z-10">
            <div className="max-w-4xl">
              <Link
                href="/blog"
                className="inline-flex items-center text-white mb-6 hover:text-primary-300 transition-colors"
              >
                <ArrowLeft size={16} className="mr-2" />
                Back to Blog
              </Link>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 max-w-4xl">
                {blog.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-white/90">
                <div className="flex items-center">
                  <User size={16} className="mr-2 text-primary-500" />
                  <span>{blog.author || "Admin"}</span>
                </div>
                <div className="flex items-center">
                  <Calendar size={16} className="mr-2 text-primary-500" />
                  <span>{formatDate(blog.createdAt)}</span>
                </div>
                <div className="flex items-center">
                  <Clock size={16} className="mr-2 text-primary-500" />
                  <span>5 min read</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-bg-card rounded-xl shadow-sleek p-6 md:p-8 border border-border-light">
                {/* Tags */}
                {blog.tags && blog.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {blog.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-bg-main text-text-secondary border border-border-light"
                      >
                        <Tag size={12} className="mr-1 text-primary-500" />
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Content */}
                <div className="prose prose-lg max-w-none text-text-secondary prose-headings:text-text-main prose-strong:text-text-main">
                  <div dangerouslySetInnerHTML={{ __html: blog.content }} />
                </div>

                {/* Share */}
                <div className="mt-8 pt-6 border-t border-border-light">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-text-main">
                      Share this post
                    </h3>
                    <div className="flex gap-2">
                      <button className="p-2 rounded-full bg-bg-main text-primary-600 hover:bg-bg-muted transition-colors border border-border-light">
                        <Share2 size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Author */}
              <div className="bg-bg-card rounded-xl shadow-sleek p-6 border border-border-light">
                <h3 className="text-lg font-semibold text-text-main mb-4">
                  About the Author
                </h3>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-bg-main flex items-center justify-center text-primary-600 border border-border-light">
                    <User size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-text-main">
                      {blog.author || "Admin"}
                    </h4>
                    <p className="text-text-secondary text-sm">
                      Recruitment Expert
                    </p>
                  </div>
                </div>
              </div>

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <div className="bg-bg-card rounded-xl shadow-sleek p-6 border border-border-light">
                  <h3 className="text-lg font-semibold text-text-main mb-4">
                    Related Posts
                  </h3>
                  <div className="space-y-4">
                    {relatedPosts.map((post) => (
                      <Link
                        key={post._id}
                        href={`/blog/${post._id}`}
                        className="block group"
                      >
                        <div className="flex gap-3">
                          <div className="relative w-20 h-20 rounded-md overflow-hidden flex-shrink-0 border border-border-light">
                            {post.coverImage?.url ? (
                              <Image
                                src={post.coverImage.url}
                                alt={post.title}
                                fill
                                className="object-cover"
                              />
                            ) : (
                              <div className="w-full h-full bg-gray-200 border-2 border-dashed flex items-center justify-center">
                                <span className="text-xs text-gray-500 text-center px-1">Image</span>
                              </div>
                            )}
                          </div>
                          <div>
                            <h4 className="font-medium text-text-main group-hover:text-primary-600 transition-colors line-clamp-2">
                              {post.title}
                            </h4>
                            <p className="text-xs text-text-secondary mt-1">
                              {formatDate(post.createdAt)}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

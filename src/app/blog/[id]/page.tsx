"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Calendar, User, Tag, Clock, Share2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Whatsapp from "@/components/whatsapp";

export default function BlogDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const router = useRouter();
  const [blog, setBlog] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [relatedPosts, setRelatedPosts] = useState<any[]>([]);

  useEffect(() => {
    async function fetchBlog() {
      try {
        const res = await fetch(`/api/blog/${params.id}`);
        if (!res.ok) throw new Error("Failed to fetch blog");
        const data = await res.json();
        setBlog(data);

        // Fetch related posts
        const relatedRes = await fetch("/api/blog");
        if (relatedRes.ok) {
          const allPosts = await relatedRes.json();
          // Filter out current post and limit to 3 related posts
          const related = allPosts
            .filter((post: any) => post._id !== params.id)
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
  }, [params.id]);

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
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center bg-slate-950">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-secondary-500"></div>
        </div>
        <Footer />
      </>
    );
  }

  if (error) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center bg-slate-950">
          <div className="bg-slate-900 p-8 rounded-lg shadow-md max-w-md w-full text-center border border-slate-800">
            <div className="text-red-400 text-5xl mb-4">⚠️</div>
            <h2 className="text-2xl font-bold text-gray-100 mb-2">
              Error Loading Blog
            </h2>
            <p className="text-gray-400 mb-6">{error}</p>
            <button
              onClick={() => router.back()}
              className="px-4 py-2 bg-secondary-600 text-white rounded-md hover:bg-secondary-700 transition-colors"
            >
              Go Back
            </button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (!blog) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center bg-slate-950">
          <div className="bg-slate-900 p-8 rounded-lg shadow-md max-w-md w-full text-center border border-slate-800">
            <div className="text-yellow-500 text-5xl mb-4">🔍</div>
            <h2 className="text-2xl font-bold text-gray-100 mb-2">
              Blog Not Found
            </h2>
            <p className="text-gray-400 mb-6">
              The blog post you're looking for doesn't exist or has been
              removed.
            </p>
            <Link
              href="/blog"
              className="px-4 py-2 bg-secondary-600 text-white rounded-md hover:bg-secondary-700 transition-colors"
            >
              Browse All Blogs
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="bg-slate-950 pt-24 pb-16">
        {/* Hero Section */}
        <div className="relative h-[40vh] md:h-[50vh] lg:h-[60vh] mb-8">
          <div className="absolute inset-0">
            <Image
              src={blog.coverImage.url}
              alt={blog.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
          </div>

          <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-8 relative z-10">
            <Link
              href="/blog"
              className="inline-flex items-center text-white mb-4 hover:text-secondary-300 transition-colors"
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to Blog
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 max-w-4xl">
              {blog.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-white/90">
              <div className="flex items-center">
                <User size={16} className="mr-1" />
                <span>{blog.author || "Admin"}</span>
              </div>
              <div className="flex items-center">
                <Calendar size={16} className="mr-1" />
                <span>{formatDate(blog.createdAt)}</span>
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-1" />
                <span>5 min read</span>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-slate-900 rounded-xl shadow-sm p-6 md:p-8 border border-slate-800">
                {/* Tags */}
                {blog.tags && blog.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {blog.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-800 text-gray-300"
                      >
                        <Tag size={12} className="mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Content */}
                <div className="prose prose-lg max-w-none text-gray-300 prose-headings:text-gray-100 prose-strong:text-gray-200 prose-a:text-secondary-400">
                  <div dangerouslySetInnerHTML={{ __html: blog.content }} />
                </div>

                {/* Share */}
                <div className="mt-8 pt-6 border-t border-slate-800">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-100">
                      Share this post
                    </h3>
                    <div className="flex gap-2">
                      <button className="p-2 rounded-full bg-slate-800 text-secondary-400 hover:bg-slate-700 transition-colors">
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
              <div className="bg-slate-900 rounded-xl shadow-sm p-6 border border-slate-800">
                <h3 className="text-lg font-semibold text-gray-100 mb-4">
                  About the Author
                </h3>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center text-secondary-400">
                    <User size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-100">
                      {blog.author || "Admin"}
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Travel Writer & Blogger
                    </p>
                  </div>
                </div>
              </div>

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <div className="bg-slate-900 rounded-xl shadow-sm p-6 border border-slate-800">
                  <h3 className="text-lg font-semibold text-gray-100 mb-4">
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
                          <div className="relative w-20 h-20 rounded-md overflow-hidden flex-shrink-0 border border-slate-800">
                            <Image
                              src={post.coverImage.url}
                              alt={post.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform"
                            />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-100 group-hover:text-secondary-400 transition-colors line-clamp-2">
                              {post.title}
                            </h4>
                            <p className="text-xs text-gray-400 mt-1">
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
      </main>
      <Footer />
      <Whatsapp />
    </>
  );
}

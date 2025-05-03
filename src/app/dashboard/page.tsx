'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const res = await fetch('/api/blog', { 
          cache: 'no-store' 
        });
        
        if (!res.ok) {
          throw new Error(`Error: ${res.status}`);
        }
        
        const data = await res.json();
        setBlogs(data);
      } catch (err) {
        console.error('Failed to fetch blogs:', err);
        setError('Failed to load blogs. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    }

    fetchBlogs();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this post?')) return;
    
    try {
      const res = await fetch(`/api/blog?id=${id}`, {
        method: 'DELETE',
      });
      
      if (!res.ok) throw new Error('Failed to delete post');
      
      // Remove the deleted blog from state
      setBlogs(blogs.filter((blog: any) => blog._id !== id));
    } catch (error) {
      console.error('Error deleting blog post:', error);
      alert('Failed to delete post. Please try again.');
    }
  };

  function BlogSkeleton() {
    return (
      <div className="animate-pulse">
        {[1, 2, 3].map((i) => (
          <div key={i} className="mb-4 p-4 border rounded-lg">
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-3"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">Blog Posts</h2>
        <Link
          href="/dashboard/new"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          New Post
        </Link>
      </div>
      
      {isLoading ? (
        <BlogSkeleton />
      ) : error ? (
        <p className="text-red-500 text-center py-4">{error}</p>
      ) : blogs.length === 0 ? (
        <p className="text-center py-6 text-gray-500">No blogs found</p>
      ) : (
        <div className="space-y-4">
          {blogs.map((blog: any) => (
            <div key={blog._id} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold">{blog.title}</h3>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-sm text-gray-500">
                  {new Date(blog.createdAt).toLocaleDateString()}
                </span>
                {blog.tags?.map((tag: string) => (
                  <span key={tag} className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-2 mt-4">
                <Link 
                  href={`/dashboard/edit/${blog._id}`}
                  className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Edit
                </Link>
                <button 
                  className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600"
                  onClick={() => handleDelete(blog._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}


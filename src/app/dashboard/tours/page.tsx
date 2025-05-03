'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { 
  PlusCircle, 
  Edit, 
  Trash2, 
  MapPin, 
  Calendar, 
  DollarSign,
  Star,
  Eye,
  EyeOff,
  Loader2
} from "lucide-react";

export default function ToursDashboardPage() {
  const router = useRouter();
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchTours() {
      try {
        const res = await fetch('/api/tour', { 
          cache: 'no-store' 
        });
        
        if (!res.ok) {
          throw new Error(`Error: ${res.status}`);
        }
        
        const data = await res.json();
        setTours(data);
      } catch (err) {
        console.error('Failed to fetch tours:', err);
        setError('Failed to load tours. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    }

    fetchTours();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this tour package?')) return;
    
    try {
      const res = await fetch(`/api/tour?id=${id}`, {
        method: 'DELETE',
      });
      
      if (!res.ok) throw new Error('Failed to delete tour package');
      
      // Remove the deleted tour from state
      setTours(tours.filter((tour: any) => tour._id !== id));
    } catch (error) {
      console.error('Error deleting tour package:', error);
      alert('Failed to delete tour package. Please try again.');
    }
  };

  function TourSkeleton() {
    return (
      <div className="animate-pulse">
        {[1, 2, 3].map((i) => (
          <div key={i} className="mb-4 p-4 border rounded-lg">
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-3"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-2"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">Tour Packages</h2>
        <Link
          href="/dashboard/tours/new"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center gap-2"
        >
          <PlusCircle size={18} />
          <span>New Tour Package</span>
        </Link>
      </div>
      
      {isLoading ? (
        <div className="flex flex-col items-center justify-center py-8">
          <Loader2 size={36} className="animate-spin text-blue-500 mb-2" />
          <p className="text-gray-500">Loading tour packages...</p>
        </div>
      ) : error ? (
        <p className="text-red-500 text-center py-4">{error}</p>
      ) : tours.length === 0 ? (
        <p className="text-center py-6 text-gray-500">No tour packages found</p>
      ) : (
        <div className="space-y-4">
          {tours.map((tour: any) => (
            <div key={tour._id} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
              <div className="flex justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{tour.title}</h3>
                  <div className="flex items-center gap-4 mt-2">
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Calendar size={16} />
                      <span>{tour.duration} days</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <DollarSign size={16} />
                      <span>${tour.price}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <MapPin size={16} />
                      <span>{tour.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-3">
                    {tour.featured && (
                      <div className="flex items-center gap-1 text-xs px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full">
                        <Star size={12} />
                        <span>Featured</span>
                      </div>
                    )}
                    {tour.published ? (
                      <div className="flex items-center gap-1 text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">
                        <Eye size={12} />
                        <span>Published</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-1 text-xs px-2 py-1 bg-gray-100 text-gray-800 rounded-full">
                        <EyeOff size={12} />
                        <span>Draft</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex gap-2 items-start">
                  <Link 
                    href={`/dashboard/tours/edit/${tour._id}`}
                    className="p-2 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 flex items-center gap-1"
                  >
                    <Edit size={16} />
                    <span>Edit</span>
                  </Link>
                  <button 
                    className="p-2 text-sm bg-red-500 text-white rounded hover:bg-red-600 flex items-center gap-1"
                    onClick={() => handleDelete(tour._id)}
                  >
                    <Trash2 size={16} />
                    <span>Delete</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

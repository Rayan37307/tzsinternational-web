"use client";
import Image from "next/image";
import Link from "next/link";
import { Clock, MapPin, DollarSign, Star, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function Tours() {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchTours() {
      try {
        const res = await fetch("/api/tour?featured=true", {
          cache: "no-store",
        });
        if (!res.ok) {
          throw new Error(`Error: ${res.status}`);
        }
        const data = await res.json();
        setTours(data);
      } catch (err) {
        console.error("Failed to fetch tours:", err);
        setError("Failed to load tours. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    }

    fetchTours();
  }, []);

  return (
    <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-100">Featured Tours</h2>
            <p className="text-gray-400 mt-2 max-w-2xl">
              Discover our most popular destinations and experiences handpicked
              for your next adventure
            </p>
          </div>
          <Link
            href="/tours"
            className="mt-4 md:mt-0 inline-flex items-center text-secondary-400 font-medium hover:text-secondary-300 transition-colors"
          >
            View all tours
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-secondary-500"></div>
          </div>
        ) : error ? (
          <div className="text-center py-10">
            <p className="text-red-400">{error}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour: any) => (
              <div
                key={tour._id}
                className="bg-slate-900 rounded-xl shadow-md overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1 group border border-slate-800"
              >
                <div className="relative h-60">
                  <Image
                    src={tour.coverImage.url}
                    alt={tour.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  {tour.featured && (
                    <div className="absolute top-4 right-4 bg-accent-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md">
                      Featured
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950/90 to-transparent h-24"></div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-100">
                      {tour.title}
                    </h3>
                    <div className="flex items-center text-accent-500">
                      <Star size={16} className="fill-current" />
                      <span className="ml-1 text-gray-300 font-medium">
                        4.8
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-400 mb-4 line-clamp-2">
                    {tour.description}
                  </p>

                  <div className="flex flex-wrap gap-4 mb-4 text-sm">
                    <div className="flex items-center text-gray-400">
                      <Clock size={16} className="mr-1 text-secondary-500" />
                      <span>{tour.duration} days</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <MapPin size={16} className="mr-1 text-secondary-500" />
                      <span>{tour.location}</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <DollarSign
                        size={16}
                        className="mr-1 text-secondary-500"
                      />
                      <span className="font-semibold">${tour.price}</span>
                    </div>
                  </div>

                  <Link
                    href={`/tour/${tour._id}`}
                    className="block w-full bg-gradient-to-r from-secondary-600 to-secondary-500 text-white py-3 px-4 rounded-lg hover:from-secondary-700 hover:to-secondary-600 text-center transition-all font-medium shadow-sm hover:shadow-md"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

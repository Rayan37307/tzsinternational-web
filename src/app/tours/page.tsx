"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock, MapPin, DollarSign, Search, Filter } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Whatsapp from "@/components/whatsapp";

export default function ToursPage() {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [priceSort, setPriceSort] = useState("default");
  const [locations, setLocations] = useState<string[]>([]);

  useEffect(() => {
    async function fetchTours() {
      try {
        const res = await fetch("/api/tour", { cache: "no-store" });
        if (!res.ok) {
          throw new Error(`Error: ${res.status}`);
        }
        const data = await res.json();
        setTours(data);

        // Extract unique locations for filter
        const uniqueLocations = Array.from(
          new Set(data.map((tour: any) => tour.location))
        ) as string[];
        setLocations(uniqueLocations);
      } catch (err) {
        console.error("Failed to fetch tours:", err);
        setError("Failed to load tours. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    }

    fetchTours();
  }, []);

  // Filter and sort tours
  const filteredTours = tours
    .filter((tour: any) => {
      const matchesSearch =
        tour.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tour.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesLocation =
        locationFilter === "" || tour.location === locationFilter;
      return matchesSearch && matchesLocation;
    })
    .sort((a: any, b: any) => {
      if (priceSort === "low-to-high") {
        return a.price - b.price;
      } else if (priceSort === "high-to-low") {
        return b.price - a.price;
      }
      return 0;
    });

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900">
        {/* Hero Section */}
        <div className="relative h-80 bg-slate-800">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-800 to-slate-700 opacity-90"></div>
          <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Explore Our Tours
            </h1>
            <p className="text-xl text-white max-w-2xl">
              Discover amazing destinations and create unforgettable memories
              with our carefully curated tour packages.
            </p>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="container mx-auto px-4 py-8">
          <div className="bg-slate-900 rounded-lg shadow-md p-6 mb-8 border border-slate-800">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search */}
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search size={18} className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search tours..."
                  className="w-full pl-10 pr-4 py-2 bg-slate-800 border border-slate-700 text-gray-200 rounded-md focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* Location Filter */}
              <div className="w-full md:w-64">
                <select
                  className="w-full p-2 bg-slate-800 border border-slate-700 text-gray-200 rounded-md focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500"
                  value={locationFilter}
                  onChange={(e) => setLocationFilter(e.target.value)}
                >
                  <option value="">All Locations</option>
                  {locations.map((location) => (
                    <option key={location} value={location}>
                      {location}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Sort */}
              <div className="w-full md:w-64">
                <select
                  className="w-full p-2 bg-slate-800 border border-slate-700 text-gray-200 rounded-md focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500"
                  value={priceSort}
                  onChange={(e) => setPriceSort(e.target.value)}
                >
                  <option value="default">Sort by Price</option>
                  <option value="low-to-high">Price: Low to High</option>
                  <option value="high-to-low">Price: High to Low</option>
                </select>
              </div>
            </div>
          </div>

          {/* Tours Grid */}
          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-secondary-500"></div>
            </div>
          ) : error ? (
            <div className="text-center py-20">
              <p className="text-red-400 text-xl">{error}</p>
            </div>
          ) : filteredTours.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-400 text-xl">
                No tours found matching your criteria.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTours.map((tour: any) => (
                <div
                  key={tour._id}
                  className="bg-slate-900 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 border border-slate-800"
                >
                  <div className="relative h-60">
                    <Image
                      src={tour.coverImage.url}
                      alt={tour.title}
                      fill
                      className="object-cover"
                    />
                    {tour.featured && (
                      <div className="absolute top-4 right-4 bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
                        Featured
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-100">
                      {tour.title}
                    </h3>
                    <p className="text-gray-400 mb-4 line-clamp-3">
                      {tour.description}
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-gray-400">
                        <Clock size={18} className="mr-2 text-secondary-500" />
                        <span>{tour.duration} days</span>
                      </div>
                      <div className="flex items-center text-gray-400">
                        <MapPin size={18} className="mr-2 text-secondary-500" />
                        <span>{tour.location}</span>
                      </div>
                      <div className="flex items-center text-gray-400">
                        <DollarSign
                          size={18}
                          className="mr-2 text-secondary-500"
                        />
                        <span className="font-semibold text-lg">
                          ${tour.price}
                        </span>
                      </div>
                    </div>
                    <Link
                      href={`/tour/${tour._id}`}
                      className="block w-full bg-gradient-to-r from-secondary-600 to-secondary-500 text-white text-center py-2 rounded-md hover:from-secondary-700 hover:to-secondary-600 transition-all shadow-sm hover:shadow-md"
                    >
                      View Details
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

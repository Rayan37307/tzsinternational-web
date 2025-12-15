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
    <section className="py-16 bg-bg-main">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-text-main">Featured Services</h2>
            <p className="text-text-secondary mt-2 max-w-2xl">
              Explore our most popular recruitment and manpower solutions
              for international employment
            </p>
          </div>
          <Link
            href="/services"
            className="mt-4 md:mt-0 inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
          >
            View all services
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
            {[
              {
                id: 1,
                title: "International Recruitment",
                description: "Comprehensive recruitment services for international employers",
                duration: "4-6",
                location: "Global",
                price: "450",
                featured: true
              },
              {
                id: 2,
                title: "Skill Development",
                description: "Specialized training programs for workforce development",
                duration: "2-3",
                location: "Dhaka",
                price: "250",
                featured: false
              },
              {
                id: 3,
                title: "Language Training",
                description: "Foreign language training for international placement",
                duration: "3-4",
                location: "Gulshan",
                price: "350",
                featured: true
              }
            ].map((service) => (
              <div
                key={service.id}
                className="bg-bg-card rounded-xl shadow-sleek overflow-hidden transition-all hover:shadow-sleek-lg hover:-translate-y-1 border border-border-light"
              >
                <div className="relative h-60">
                  <div className="bg-gray-200 border-2 border-dashed border-border-light w-full h-full flex items-center justify-center">
                    <span className="text-gray-500">Service Image</span>
                  </div>
                  {service.featured && (
                    <div className="absolute top-4 right-4 bg-primary-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md">
                      Featured
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-text-main">
                      {service.title}
                    </h3>
                    <div className="flex items-center text-primary-600">
                      <Star size={16} className="fill-current" />
                      <span className="ml-1 text-text-secondary font-medium">
                        4.8
                      </span>
                    </div>
                  </div>

                  <p className="text-text-secondary mb-4 line-clamp-2">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-4 mb-4 text-sm">
                    <div className="flex items-center text-text-secondary">
                      <Clock size={16} className="mr-1 text-primary-500" />
                      <span>{service.duration} months</span>
                    </div>
                    <div className="flex items-center text-text-secondary">
                      <MapPin size={16} className="mr-1 text-primary-500" />
                      <span>{service.location}</span>
                    </div>
                    <div className="flex items-center text-text-secondary">
                      <DollarSign
                        size={16}
                        className="mr-1 text-primary-500"
                      />
                      <span className="font-semibold">${service.price}</span>
                    </div>
                  </div>

                  <Link
                    href={`/services/${service.id}`}
                    className="block w-full bg-gradient-modern text-white py-3 px-4 rounded-lg hover:from-primary-700 hover:to-primary-800 text-center transition-all font-medium shadow-sleek hover:shadow-sleek-lg"
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

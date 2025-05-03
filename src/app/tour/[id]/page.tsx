"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  MapPin,
  Calendar,
  Clock,
  DollarSign,
  Star,
  Users,
  Check,
  Info,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Whatsapp from "@/components/whatsapp";

export default function TourDetailsPage({ params }: NextPage.Props) {
  const router = useRouter();
  const [tour, setTour] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [relatedTours, setRelatedTours] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    async function fetchTour() {
      try {
        const res = await fetch(`/api/tour/${params.id}`);
        if (!res.ok) throw new Error("Failed to fetch tour");
        const data = await res.json();
        setTour(data);

        // Fetch related tours
        const relatedRes = await fetch("/api/tour");
        if (relatedRes.ok) {
          const allTours = await relatedRes.json();
          // Filter out current tour and limit to 2 related tours
          const related = allTours
            .filter((t: any) => t._id !== params.id)
            .slice(0, 2);
          setRelatedTours(related);
        }
      } catch (error) {
        console.error("Error fetching tour:", error);
        setError("Failed to load tour details. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    }

    fetchTour();
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, [params.id]);

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
              Error Loading Tour
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

  if (!tour) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center bg-slate-950">
          <div className="bg-slate-900 p-8 rounded-lg shadow-md max-w-md w-full text-center border border-slate-800">
            <div className="text-yellow-500 text-5xl mb-4">🔍</div>
            <h2 className="text-2xl font-bold text-gray-100 mb-2">
              Tour Not Found
            </h2>
            <p className="text-gray-400 mb-6">
              The tour package you're looking for doesn't exist or has been
              removed.
            </p>
            <Link
              href="/tours"
              className="px-4 py-2 bg-secondary-600 text-white rounded-md hover:bg-secondary-700 transition-colors"
            >
              Browse All Tours
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  // Sample itinerary data (would come from API in a real app)
  const itinerary = [
    {
      day: 1,
      title: "Arrival & Welcome",
      description:
        "Arrive at your destination, transfer to hotel, and attend a welcome dinner to meet your fellow travelers.",
    },
    {
      day: 2,
      title: "City Exploration",
      description:
        "Guided tour of the main attractions, historical sites, and local markets. Free time in the afternoon.",
    },
    {
      day: 3,
      title: "Nature Adventure",
      description:
        "Full-day excursion to nearby natural attractions with lunch included. Evening at leisure.",
    },
    {
      day: 4,
      title: "Cultural Experience",
      description:
        "Visit to cultural sites, museums, and participation in local workshops. Traditional dinner experience.",
    },
    {
      day: 5,
      title: "Leisure Day",
      description:
        "Free day to explore on your own or join optional activities. Farewell dinner in the evening.",
    },
  ];

  // Sample inclusions and exclusions
  const inclusions = [
    "Accommodation in 4-star hotels",
    "Daily breakfast and selected meals",
    "All transportation within the tour",
    "English-speaking tour guide",
    "Entrance fees to attractions",
    "Welcome and farewell dinners",
  ];

  const exclusions = [
    "International flights",
    "Travel insurance",
    "Personal expenses",
    "Optional activities",
    "Meals not mentioned in the itinerary",
    "Tips for guides and drivers",
  ];

  return (
    <>
      <Navbar />
      <main className="bg-slate-950 pt-24 pb-16">
        {/* Hero Section */}
        <div className="relative h-[40vh] md:h-[50vh] lg:h-[60vh] mb-8">
          <div className="absolute inset-0">
            <Image
              src={tour.coverImage.url}
              alt={tour.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
          </div>

          <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-8 relative z-10">
            <Link
              href="/tours"
              className="inline-flex items-center text-white mb-4 hover:text-secondary-300 transition-colors"
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to Tours
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 max-w-4xl">
              {tour.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-white/90">
              <div className="flex items-center">
                <MapPin size={16} className="mr-1" />
                <span>{tour.location}</span>
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-1" />
                <span>{tour.duration} days</span>
              </div>
              <div className="flex items-center">
                <Star size={16} className="mr-1 fill-current text-yellow-400" />
                <span>4.8 (24 reviews)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Tabs */}
              <div className="bg-slate-900 rounded-xl shadow-sm mb-6 overflow-hidden border border-slate-800">
                <div className="flex border-b border-slate-800">
                  <button
                    onClick={() => setActiveTab("overview")}
                    className={`px-4 py-3 font-medium text-sm flex-1 text-center ${
                      activeTab === "overview"
                        ? "text-secondary-400 border-b-2 border-secondary-500"
                        : "text-gray-400 hover:text-secondary-400"
                    }`}
                  >
                    Overview
                  </button>
                  <button
                    onClick={() => setActiveTab("itinerary")}
                    className={`px-4 py-3 font-medium text-sm flex-1 text-center ${
                      activeTab === "itinerary"
                        ? "text-secondary-400 border-b-2 border-secondary-500"
                        : "text-gray-400 hover:text-secondary-400"
                    }`}
                  >
                    Itinerary
                  </button>
                  <button
                    onClick={() => setActiveTab("inclusions")}
                    className={`px-4 py-3 font-medium text-sm flex-1 text-center ${
                      activeTab === "inclusions"
                        ? "text-secondary-400 border-b-2 border-secondary-500"
                        : "text-gray-400 hover:text-secondary-400"
                    }`}
                  >
                    Inclusions
                  </button>
                </div>

                <div className="p-6">
                  {/* Overview Tab */}
                  {activeTab === "overview" && (
                    <div>
                      <h2 className="text-xl font-semibold text-gray-100 mb-4">
                        Tour Overview
                      </h2>
                      <p className="text-gray-400 mb-6 leading-relaxed">
                        {tour.description}
                      </p>

                      <h3 className="text-lg font-semibold text-gray-100 mb-3">
                        Highlights
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                        {[
                          "Guided city tours with local experts",
                          "Visit to iconic landmarks and attractions",
                          "Authentic cultural experiences",
                          "Comfortable accommodation in central locations",
                          "Transportation in air-conditioned vehicles",
                          "Small group size for personalized experience",
                        ].map((highlight, index) => (
                          <div key={index} className="flex items-start">
                            <Check
                              size={18}
                              className="text-green-500 mr-2 mt-0.5 flex-shrink-0"
                            />
                            <span className="text-gray-400">{highlight}</span>
                          </div>
                        ))}
                      </div>

                      <h3 className="text-lg font-semibold text-gray-100 mb-3">
                        Location
                      </h3>
                      <p className="text-gray-400 mb-6 leading-relaxed">
                        This tour takes place in {tour.location}, known for its
                        stunning landscapes, rich cultural heritage, and
                        unforgettable experiences. You'll explore both popular
                        attractions and hidden gems that make this destination
                        special.
                      </p>
                    </div>
                  )}

                  {/* Itinerary Tab */}
                  {activeTab === "itinerary" && (
                    <div>
                      <h2 className="text-xl font-semibold text-gray-100 mb-4">
                        Tour Itinerary
                      </h2>
                      <div className="space-y-6">
                        {itinerary.slice(0, tour.duration).map((day, index) => (
                          <div
                            key={index}
                            className="relative pl-8 pb-6 border-l-2 border-slate-800 last:border-0 last:pb-0"
                          >
                            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-secondary-500"></div>
                            <h3 className="text-lg font-semibold text-gray-100">
                              Day {day.day}: {day.title}
                            </h3>
                            <p className="text-gray-400 mt-2">
                              {day.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Inclusions Tab */}
                  {activeTab === "inclusions" && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h2 className="text-xl font-semibold text-gray-100 mb-4 flex items-center">
                          <Check size={20} className="text-green-500 mr-2" />
                          What's Included
                        </h2>
                        <ul className="space-y-3">
                          {inclusions.map((item, index) => (
                            <li key={index} className="flex items-start">
                              <Check
                                size={16}
                                className="text-green-500 mr-2 mt-1 flex-shrink-0"
                              />
                              <span className="text-gray-400">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h2 className="text-xl font-semibold text-gray-100 mb-4 flex items-center">
                          <Info size={20} className="text-red-500 mr-2" />
                          What's Not Included
                        </h2>
                        <ul className="space-y-3">
                          {exclusions.map((item, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-red-500 mr-2 mt-1 font-bold flex-shrink-0">
                                ×
                              </span>
                              <span className="text-gray-400">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Gallery */}
              <div className="bg-slate-900 rounded-xl shadow-sm p-6 border border-slate-800">
                <h2 className="text-xl font-semibold text-gray-100 mb-4">
                  Tour Gallery
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <div
                      key={num}
                      className="relative h-24 md:h-32 rounded-lg overflow-hidden border border-slate-800"
                    >
                      <Image
                        src={tour.coverImage.url}
                        alt={`Gallery image ${num}`}
                        fill
                        className="object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Booking Card */}
              <div className="bg-slate-900 rounded-xl shadow-sm overflow-hidden sticky top-24 border border-slate-800">
                <div className="p-6 border-b border-slate-800">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold text-gray-100">
                        ${tour.price}
                      </span>
                      <span className="text-gray-400">/ person</span>
                    </div>
                    <div className="flex items-center text-yellow-500">
                      <Star size={18} className="fill-current" />
                      <Star size={18} className="fill-current" />
                      <Star size={18} className="fill-current" />
                      <Star size={18} className="fill-current" />
                      <Star size={18} className="fill-current" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-slate-800 p-3 rounded-lg">
                      <div className="text-xs text-gray-400 mb-1">Duration</div>
                      <div className="font-medium text-gray-300 flex items-center">
                        <Clock size={16} className="mr-1 text-secondary-400" />
                        {tour.duration} days
                      </div>
                    </div>
                    <div className="bg-slate-800 p-3 rounded-lg">
                      <div className="text-xs text-gray-400 mb-1">
                        Group Size
                      </div>
                      <div className="font-medium text-gray-300 flex items-center">
                        <Users size={16} className="mr-1 text-secondary-400" />
                        Max 12 people
                      </div>
                    </div>
                  </div>

                  <button className="w-full py-3 px-4 bg-gradient-to-r from-secondary-600 to-secondary-500 text-white rounded-lg hover:from-secondary-700 hover:to-secondary-600 transition-all font-medium shadow-sm hover:shadow-md flex items-center justify-center">
                    Book Now
                  </button>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-100 mb-3">
                    Need Help?
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Contact our travel experts for any questions about this
                    tour.
                  </p>
                  <div className="flex items-center justify-between">
                    <a
                      href="tel:+1234567890"
                      className="text-secondary-400 font-medium hover:text-secondary-300 transition-colors"
                    >
                      +1 (234) 567-890
                    </a>
                    <a
                      href="mailto:info@example.com"
                      className="text-secondary-400 font-medium hover:text-secondary-300 transition-colors"
                    >
                      info@example.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Related Tours */}
              {relatedTours.length > 0 && (
                <div className="bg-slate-900 rounded-xl shadow-sm p-6 border border-slate-800">
                  <h3 className="text-lg font-semibold text-gray-100 mb-4">
                    Similar Tours
                  </h3>
                  <div className="space-y-4">
                    {relatedTours.map((relatedTour) => (
                      <Link
                        key={relatedTour._id}
                        href={`/tour/${relatedTour._id}`}
                        className="block group"
                      >
                        <div className="flex gap-3">
                          <div className="relative w-20 h-20 rounded-md overflow-hidden flex-shrink-0 border border-slate-800">
                            <Image
                              src={relatedTour.coverImage.url}
                              alt={relatedTour.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform"
                            />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-100 group-hover:text-secondary-400 transition-colors line-clamp-2">
                              {relatedTour.title}
                            </h4>
                            <div className="flex items-center gap-4 mt-1">
                              <span className="text-xs text-gray-400 flex items-center">
                                <Clock
                                  size={12}
                                  className="mr-1 text-secondary-400"
                                />
                                {relatedTour.duration} days
                              </span>
                              <span className="text-xs text-gray-400 font-medium">
                                ${relatedTour.price}
                              </span>
                            </div>
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

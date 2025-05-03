import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Calendar, Star } from "lucide-react";
import {
  AnimatedElement,
  AnimatedText,
  ParallaxElement,
  ScrollReveal,
  StaggerContainer,
} from "@/components/animations";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 md:pt-24">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-800/90 to-primary-700/80 z-10" />

      {/* Background image with parallax effect */}
      <ParallaxElement className="absolute inset-0" speed={-0.2}>
        <Image
          src="/hero.jpg"
          alt="Hero background"
          fill
          priority
          className="object-cover"
        />
      </ParallaxElement>

      <div className="container mx-auto px-4 relative z-20">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Hero content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left pt-10 pb-16 lg:py-24">
            <ScrollReveal direction="up" delay={0.2}>
              <div className="inline-block px-3 py-1 bg-secondary-500/20 rounded-full text-secondary-200 text-sm font-medium mb-6 backdrop-blur-sm">
                Discover the world with us
              </div>
            </ScrollReveal>

            <AnimatedText
              as="h1"
              type="words"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              Your Journey{" "}
              <span className="text-secondary-300">Starts Here</span>
            </AnimatedText>

            <ScrollReveal direction="up" delay={0.4}>
              <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0">
                Experience the world with Tzsinternational. We provide top-notch
                travel services tailored to your needs with unforgettable
                destinations.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.6}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/tours"
                  className="px-6 py-3 bg-gradient-to-r from-secondary-600 to-secondary-500 text-white rounded-lg hover:from-secondary-700 hover:to-secondary-600 transition-all duration-300 flex items-center justify-center gap-2 font-medium shadow-md hover:shadow-lg"
                >
                  Explore Tours
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href="#about"
                  className="px-6 py-3 bg-white/10 text-white border border-white/20 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors duration-300"
                >
                  Learn More
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Featured tours card */}
          <div className="w-full lg:w-1/2 lg:pl-12">
            <ScrollReveal direction="left" delay={0.3}>
              <div className="bg-gradient-to-br from-primary-700/50 to-primary-600/40 backdrop-blur-md p-6 rounded-xl border border-primary-600/50 shadow-xl">
                <AnimatedText
                  as="h3"
                  className="text-xl font-semibold text-white mb-4"
                >
                  Featured Destinations
                </AnimatedText>

                {/* Featured tour items */}
                <StaggerContainer>
                  {[
                    {
                      name: "Bali Paradise",
                      location: "Indonesia",
                      days: 7,
                      rating: 4.9,
                    },
                    {
                      name: "Swiss Alps Adventure",
                      location: "Switzerland",
                      days: 5,
                      rating: 4.8,
                    },
                    {
                      name: "Tokyo Explorer",
                      location: "Japan",
                      days: 8,
                      rating: 4.7,
                    },
                  ].map((tour, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-3 rounded-lg mb-3 hover:bg-primary-600/40 transition-colors cursor-pointer"
                    >
                      <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-primary-700/50">
                        <Image
                          src={`/destination-${index + 1}.jpg`}
                          alt={tour.name}
                          width={64}
                          height={64}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="flex-1">
                        <h4 className="font-medium text-white">{tour.name}</h4>
                        <div className="flex items-center gap-4 text-sm text-gray-300">
                          <span className="flex items-center gap-1">
                            <MapPin size={14} className="text-secondary-400" />
                            {tour.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar
                              size={14}
                              className="text-secondary-400"
                            />
                            {tour.days} days
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center text-accent-400">
                        <Star size={16} className="fill-current" />
                        <span className="ml-1 text-white">{tour.rating}</span>
                      </div>
                    </div>
                  ))}
                </StaggerContainer>

                <AnimatedElement type="fadeIn">
                  <Link
                    href="/tours"
                    className="block w-full text-center py-3 mt-2 text-secondary-300 hover:text-secondary-200 transition-colors"
                  >
                    View All Destinations
                  </Link>
                </AnimatedElement>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

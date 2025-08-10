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
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 to-slate-900/90 z-10" />

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

      <div className="container mx-auto flex items-center justify-center px-4 relative z-20">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Hero content */}
          <div className="w-full  text-center pt-10 pb-16 lg:py-6">
            <ScrollReveal direction="up" delay={0.2}>
              <div className="inline-block px-3 py-1 bg-slate-800 rounded-full text-sm font-lg mb-6 backdrop-blur-sm">
                Discover the world with us.
              </div>
            </ScrollReveal>

            <AnimatedText
              as="h1"
              type="words"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              Your Journey{" "}
              <span className="">Starts Here</span>
            </AnimatedText>

            <ScrollReveal direction="up" delay={0.4}>
              <p className="text-lg text-gray-300 text-center mb-8 max-w-xl mx-auto lg:mx-0">
                Experience the world with Tzsinternational. We provide top-notch
                 services tailored to your needs with unforgettable
                destinations.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.6}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
        </div>
      </div>
    </section>
  );
}

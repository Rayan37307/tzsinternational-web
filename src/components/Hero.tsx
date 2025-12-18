import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  AnimatedText,
  ParallaxElement,
  ScrollReveal,
} from "@/components/animations";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 md:pt-32 pb-16 md:pb-24">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-modern z-0" />

      {/* Professional background image with parallax effect */}
      <ParallaxElement className="absolute inset-0" speed={-0.2}>
        <Image
          src="/hero-business.jpg" // This should be a professional business background
          alt="Professional business background"
          fill
          priority
          className="object-cover"
        />
      </ParallaxElement>

      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 to-bg-main/90 z-0" />

      <div className="container mx-auto flex items-center justify-center px-4 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl">
          {/* Slogan */}
          <ScrollReveal direction="up" delay={0.2}>
            <div className="inline-block px-4 py-2 bg-primary-100 rounded-full text-sm font-medium mb-6 text-primary-600">
              Connecting People with Possibilities
            </div>
          </ScrollReveal>

          {/* Main headline */}
          <AnimatedText
            as="h1"
            type="words"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-main leading-tight mb-6"
          >
            Leading International{" "}
            <span className="text-primary-600">Recruitment</span> &{" "}
            <span className="text-primary-600">Manpower</span> Solutions
          </AnimatedText>

          {/* Subtitle */}
          <ScrollReveal direction="up" delay={0.4}>
            <p className="text-lg text-text-secondary text-center mb-10 max-w-2xl">
              We specialize in connecting skilled professionals with global opportunities through our comprehensive recruitment and staffing services.
            </p>
          </ScrollReveal>

          {/* CTA Buttons */}
          <ScrollReveal direction="up" delay={0.6}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#contact"
                className="px-8 py-4 bg-gradient-modern text-white rounded-lg hover:from-primary-700 hover:to-primary-800 transition-all duration-300 flex items-center justify-center gap-2 font-medium shadow-sleek hover:shadow-sleek-lg text-lg"
              >
                Contact Us
                <ArrowRight size={20} />
              </Link>

              <Link
                href="#services"
                className="px-8 py-4 bg-bg-card text-text-main border border-border-light rounded-lg hover:bg-bg-muted transition-colors duration-300 text-lg font-medium"
              >
                Our Services
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

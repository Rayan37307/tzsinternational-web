'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Users, Globe, Award, Clock } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { Typography } from '@/components/ui/Typography';
import { FadeIn } from '@/components/animation/FadeIn';
import { SlideUp } from '@/components/animation/SlideUp';
import { ScaleIn } from '@/components/animation/ScaleIn';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Home = () => {
  // Features data
  const features = [
    {
      icon: <Globe className="h-8 w-8 text-primary-600" />,
      title: "Global Opportunities",
      description: "Connect with top employers worldwide through our extensive network."
    },
    {
      icon: <Users className="h-8 w-8 text-secondary-600" />,
      title: "Skilled Professionals",
      description: "Access to highly qualified and experienced workforce globally."
    },
    {
      icon: <Award className="h-8 w-8 text-accent-600" />,
      title: "Quality Assurance",
      description: "Rigorous screening process to ensure the best candidates."
    },
    {
      icon: <Clock className="h-8 w-8 text-primary-600" />,
      title: "Efficient Process",
      description: "Streamlined solutions for faster and reliable placements."
    }
  ];

  return (
    <div className="min-h-screen bg-bg-main text-text-main">
      <Navbar />
      <div className="pt-24" /> {/* Space for fixed navbar */}

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-900 dark:to-gray-800"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-accent-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SlideUp>
              <div>
                <div className="inline-block px-4 py-2 bg-primary-100 rounded-full mb-6">
                  <Typography variant="span" className="text-primary-700 font-medium">
                    Connecting Talent & Opportunity
                  </Typography>
                </div>

                <Typography variant="h1" className="mb-6 leading-tight">
                  Connecting People with <span className="text-primary-600">Possibilities</span> Worldwide
                </Typography>

                <Typography variant="p" className="text-lg text-text-secondary mb-10 max-w-lg">
                  Leading international recruitment and manpower solutions company specializing in connecting skilled professionals with global opportunities.
                </Typography>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="xl" className="group">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button variant="outline" size="xl">
                    Learn More
                  </Button>
                </div>
              </div>
            </SlideUp>

            <ScaleIn initialScale={0.9}>
              <div className="relative">
                <Card className="p-0 overflow-hidden">
                  <div className="p-8">
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-primary-50 rounded-xl p-4">
                        <Typography variant="span" className="text-2xl font-bold text-primary-700">5000+</Typography>
                        <Typography variant="p" className="text-sm text-gray-600">Professionals Placed</Typography>
                      </div>
                      <div className="bg-secondary-50 rounded-xl p-4">
                        <Typography variant="span" className="text-2xl font-bold text-secondary-700">40+</Typography>
                        <Typography variant="p" className="text-sm text-gray-600">Countries Served</Typography>
                      </div>
                      <div className="bg-accent-50 rounded-xl p-4">
                        <Typography variant="span" className="text-2xl font-bold text-accent-700">15+</Typography>
                        <Typography variant="p" className="text-sm text-gray-600">Years Experience</Typography>
                      </div>
                      <div className="bg-primary-50 rounded-xl p-4">
                        <Typography variant="span" className="text-2xl font-bold text-primary-700">200+</Typography>
                        <Typography variant="p" className="text-sm text-gray-600">Skilled Recruiters</Typography>
                      </div>
                    </div>

                    <div className="bg-gray-100 dark:bg-gray-700 rounded-xl p-6">
                      <Typography variant="h4" className="mb-4">Why Choose Us?</Typography>
                      <ul className="space-y-3">
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                          <Typography variant="p">Comprehensive screening process</Typography>
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-secondary-600 rounded-full mr-3"></div>
                          <Typography variant="p">Global network of opportunities</Typography>
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-accent-600 rounded-full mr-3"></div>
                          <Typography variant="p">End-to-end support</Typography>
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                          <Typography variant="p">Transparent communication</Typography>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </div>
            </ScaleIn>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-bg-muted">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <Typography variant="h2" className="mb-4">Our Services</Typography>
              <Typography variant="p" className="text-lg text-text-secondary">
                We provide comprehensive recruitment and manpower solutions tailored to your needs
              </Typography>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <ScaleIn key={index} delay={index * 0.1}>
                <Card className="text-center group hover:shadow-xl transition-shadow">
                  <CardContent className="pt-8">
                    <div className="w-16 h-16 bg-primary-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-200 transition-colors">
                      {feature.icon}
                    </div>
                    <Typography variant="h4" className="mb-3">{feature.title}</Typography>
                    <Typography variant="p" className="text-text-secondary">
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <Card className="bg-gradient-accent text-white p-0 overflow-hidden">
              <div className="p-12 text-center">
                <Typography variant="h2" className="mb-6 text-white">Ready to Find Your Dream Opportunity?</Typography>
                <Typography variant="p" className="text-primary-100 mb-8 max-w-2xl mx-auto text-lg">
                  Join thousands of professionals who found their perfect match with our global network.
                </Typography>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button size="xl" className="bg-white text-primary-600 hover:bg-gray-100">
                    Start Your Journey
                  </Button>
                  <Button variant="outline" size="xl" className="border-white text-white hover:bg-white/10">
                    Contact Our Experts
                  </Button>
                </div>
              </div>
            </Card>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
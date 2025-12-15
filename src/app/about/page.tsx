'use client';

import React from 'react';
import Image from 'next/image';
import { Users, Globe, Award, Clock, Heart, Target, Zap } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { Typography } from '@/components/ui/Typography';
import { FadeIn } from '@/components/animation/FadeIn';
import { SlideUp } from '@/components/animation/SlideUp';
import { ScaleIn } from '@/components/animation/ScaleIn';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  // Our Story data
  const storySteps = [
    {
      year: "2009",
      title: "Foundation",
      description: "TZS International was founded with a vision to connect talented professionals with global opportunities."
    },
    {
      year: "2012",
      title: "Expansion",
      description: "Established our presence in multiple countries and expanded our service offerings."
    },
    {
      year: "2016",
      title: "Innovation",
      description: "Introduced new technology-driven recruitment solutions for better matching."
    },
    {
      year: "2020",
      title: "Growth",
      description: "Achieved over 5,000 successful placements across 40+ countries."
    }
  ];

  // Our Values
  const values = [
    {
      icon: <Heart className="h-8 w-8 text-primary-600" />,
      title: "Integrity",
      description: "We maintain the highest ethical standards in all our relationships."
    },
    {
      icon: <Target className="h-8 w-8 text-secondary-600" />,
      title: "Excellence",
      description: "We strive for perfection in every placement and interaction."
    },
    {
      icon: <Zap className="h-8 w-8 text-accent-600" />,
      title: "Innovation",
      description: "We leverage technology to create better recruitment experiences."
    }
  ];

  return (
    <div className="min-h-screen bg-bg-main text-text-main">
      <Navbar />
      <div className="pt-24" /> {/* Space for fixed navbar */}

      {/* Hero Section */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-900 dark:to-gray-800"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <Typography variant="h1" className="mb-6 leading-tight">
                Our Story of Connecting <span className="text-primary-600">Talent</span> & Opportunity
              </Typography>
              <Typography variant="p" className="text-lg text-text-secondary mb-10">
                For over 15 years, we've been bridging the gap between skilled professionals and global employment opportunities.
              </Typography>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SlideUp>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <Typography variant="h2" className="mb-4">Our Journey</Typography>
              <Typography variant="p" className="text-lg text-text-secondary">
                How we evolved from a local recruitment agency to a global leader in manpower solutions
              </Typography>
            </div>
          </SlideUp>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-200 dark:bg-gray-700 hidden md:block"></div>

            <div className="space-y-12 md:space-y-0">
              {storySteps.map((step, index) => (
                <ScaleIn key={index} delay={index * 0.1}>
                  <div className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-16' : 'md:pl-16'}`}>
                      <Card className="p-6">
                        <CardContent className="pt-4">
                          <div className="text-primary-600 font-bold text-xl mb-2">{step.year}</div>
                          <Typography variant="h4" className="mb-3">{step.title}</Typography>
                          <Typography variant="p" className="text-text-secondary">
                            {step.description}
                          </Typography>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="w-full md:w-2/12 flex justify-center my-6 md:my-0">
                      <div className="w-6 h-6 bg-primary-600 rounded-full border-4 border-white dark:border-gray-800 shadow-lg"></div>
                    </div>

                    <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-left md:pl-16' : 'md:pr-16'}`}></div>
                  </div>
                </ScaleIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-bg-muted">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <Typography variant="h2" className="mb-4">Our Core Values</Typography>
              <Typography variant="p" className="text-lg text-text-secondary">
                The principles that guide us in everything we do
              </Typography>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <ScaleIn key={index} delay={index * 0.1}>
                <Card className="text-center group hover:shadow-xl transition-shadow">
                  <CardContent className="pt-8">
                    <div className="w-16 h-16 bg-primary-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-200 transition-colors">
                      {value.icon}
                    </div>
                    <Typography variant="h4" className="mb-3">{value.title}</Typography>
                    <Typography variant="p" className="text-text-secondary">
                      {value.description}
                    </Typography>
                  </CardContent>
                </Card>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <ScaleIn>
              <Card className="text-center p-8">
                <Typography variant="span" className="text-4xl font-bold text-primary-600">5000+</Typography>
                <Typography variant="p" className="text-text-secondary mt-2">Professionals Placed</Typography>
              </Card>
            </ScaleIn>
            <ScaleIn delay={0.1}>
              <Card className="text-center p-8">
                <Typography variant="span" className="text-4xl font-bold text-secondary-600">40+</Typography>
                <Typography variant="p" className="text-text-secondary mt-2">Countries Served</Typography>
              </Card>
            </ScaleIn>
            <ScaleIn delay={0.2}>
              <Card className="text-center p-8">
                <Typography variant="span" className="text-4xl font-bold text-accent-600">15+</Typography>
                <Typography variant="p" className="text-text-secondary mt-2">Years Experience</Typography>
              </Card>
            </ScaleIn>
            <ScaleIn delay={0.3}>
              <Card className="text-center p-8">
                <Typography variant="span" className="text-4xl font-bold text-primary-600">200+</Typography>
                <Typography variant="p" className="text-text-secondary mt-2">Expert Recruiters</Typography>
              </Card>
            </ScaleIn>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 bg-bg-muted">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <Typography variant="h2" className="mb-4">Meet Our Leadership</Typography>
              <Typography variant="p" className="text-lg text-text-secondary">
                The visionaries who drive our mission forward
              </Typography>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item, index) => (
              <ScaleIn key={index} delay={index * 0.1}>
                <Card className="text-center overflow-hidden">
                  <div className="h-64 bg-gray-200 border-2 border-dashed rounded-t-xl w-full" />
                  <CardContent className="pt-6">
                    <Typography variant="h4">Leadership Name</Typography>
                    <Typography variant="p" className="text-text-secondary">Position Title</Typography>
                    <div className="flex justify-center mt-4 space-x-4">
                      <Button variant="ghost" size="icon">
                        <Globe className="h-5 w-5" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Users className="h-5 w-5" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Award className="h-5 w-5" />
                      </Button>
                    </div>
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
                <Typography variant="h2" className="mb-6 text-white">Ready to Join Our Team?</Typography>
                <Typography variant="p" className="text-primary-100 mb-8 max-w-2xl mx-auto text-lg">
                  Discover how you can become part of our global community of professionals.
                </Typography>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button size="xl" className="bg-white text-primary-600 hover:bg-gray-100">
                    View Opportunities
                  </Button>
                  <Button variant="outline" size="xl" className="border-white text-white hover:bg-white/10">
                    Contact Us
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

export default About;
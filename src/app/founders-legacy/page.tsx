'use client';

import React from 'react';
import { Calendar, Users, Award, Globe } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { Typography } from '@/components/ui/Typography';
import { FadeIn } from '@/components/animation/FadeIn';
import { SlideUp } from '@/components/animation/SlideUp';
import { ScaleIn } from '@/components/animation/ScaleIn';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const FoundersLegacy = () => {
  // Timeline data
  const timelineEvents = [
    {
      year: "2009",
      title: "Company Foundation",
      description: "Greenland Overseas was founded with a vision to connect talented professionals with global opportunities."
    },
    {
      year: "2012",
      title: "International Expansion",
      description: "Established our presence in multiple countries and expanded our service offerings."
    },
    {
      year: "2016",
      title: "Technology Integration",
      description: "Introduced new technology-driven recruitment solutions for better matching."
    },
    {
      year: "2020",
      title: "Milestone Achievement",
      description: "Achieved over 5,000 successful placements across 40+ countries."
    }
  ];

  // Founder profiles
  const founders = [
    {
      name: "Founder Name",
      position: "Founder & CEO",
      image: "/placeholder-founder.jpg",
      bio: "Visionary leader with over 15 years of experience in international recruitment and manpower solutions."
    },
    {
      name: "Co-founder Name",
      position: "Co-founder & Operations Director",
      image: "/placeholder-founder.jpg",
      bio: "Operations expert focused on building efficient processes and global partnerships."
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
                Our <span className="text-primary-600">Founder's</span> Legacy
              </Typography>
              <Typography variant="p" className="text-lg text-text-secondary mb-10">
                The story of vision, dedication, and commitment to connecting talent with opportunity.
              </Typography>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SlideUp>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <Typography variant="h2" className="mb-4">The Journey</Typography>
              <Typography variant="p" className="text-lg text-text-secondary">
                Key milestones in our company's evolution
              </Typography>
            </div>
          </SlideUp>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-200 dark:bg-gray-700 hidden md:block"></div>
            
            <div className="space-y-12 md:space-y-0">
              {timelineEvents.map((event, index) => (
                <ScaleIn key={index} delay={index * 0.1}>
                  <div className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-16' : 'md:pl-16'}`}>
                      <Card className="p-6">
                        <CardContent className="pt-4">
                          <div className="text-primary-600 font-bold text-xl mb-2">{event.year}</div>
                          <Typography variant="h4" className="mb-3">{event.title}</Typography>
                          <Typography variant="p" className="text-text-secondary">
                            {event.description}
                          </Typography>
                        </CardContent>
                      </Card>
                    </div>
                    
                    <div className="w-full md:w-2/12 flex justify-center my-6 md:my-0">
                      <div className="w-8 h-8 bg-primary-600 rounded-full border-4 border-white dark:border-gray-800 shadow-lg flex items-center justify-center text-white font-bold">
                        {index + 1}
                      </div>
                    </div>
                    
                    <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-left md:pl-16' : 'md:pr-16'}`}></div>
                  </div>
                </ScaleIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20 bg-bg-muted">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <Typography variant="h2" className="mb-4">Our Founders</Typography>
              <Typography variant="p" className="text-lg text-text-secondary">
                Visionaries who built the foundation of our success
              </Typography>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {founders.map((founder, index) => (
              <ScaleIn key={index} delay={index * 0.1}>
                <Card className="text-center overflow-hidden">
                  <div className="h-64 bg-gray-200 border-2 border-dashed rounded-t-xl w-full" />
                  <CardContent className="pt-6">
                    <Typography variant="h4">{founder.name}</Typography>
                    <Typography variant="p" className="text-text-secondary">{founder.position}</Typography>
                    <Typography variant="p" className="text-text-secondary mt-4">{founder.bio}</Typography>
                    <div className="flex justify-center mt-6 space-x-4">
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

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SlideUp>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <Typography variant="h2" className="mb-4">Core Values</Typography>
              <Typography variant="p" className="text-lg text-text-secondary">
                Principles that have guided us from the beginning
              </Typography>
            </div>
          </SlideUp>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: <Users className="h-8 w-8 text-primary-600" />, 
                title: "Integrity", 
                desc: "We maintain the highest ethical standards in all our relationships." 
              },
              { 
                icon: <Award className="h-8 w-8 text-secondary-600" />, 
                title: "Excellence", 
                desc: "We strive for perfection in every placement and interaction." 
              },
              { 
                icon: <Globe className="h-8 w-8 text-accent-600" />, 
                title: "Global Vision", 
                desc: "We connect talent across borders and cultures." 
              }
            ].map((value, index) => (
              <ScaleIn key={index} delay={index * 0.1}>
                <Card className="text-center group hover:shadow-xl transition-shadow">
                  <CardContent className="pt-8">
                    <div className="w-16 h-16 bg-primary-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-200 transition-colors">
                      {value.icon}
                    </div>
                    <Typography variant="h4" className="mb-3">{value.title}</Typography>
                    <Typography variant="p" className="text-text-secondary">
                      {value.desc}
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
                <Typography variant="h2" className="mb-6 text-white">Continue Our Story</Typography>
                <Typography variant="p" className="text-primary-100 mb-8 max-w-2xl mx-auto text-lg">
                  Join us in our mission to connect talent with global opportunities.
                </Typography>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button size="xl" className="bg-white text-primary-600 hover:bg-gray-100">
                    Contact Us
                  </Button>
                  <Button variant="outline" size="xl" className="border-white text-white hover:bg-white/10">
                    Learn More
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

export default FoundersLegacy;
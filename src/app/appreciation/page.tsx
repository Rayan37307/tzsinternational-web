'use client';

import React from 'react';
import { Award, Star, Users, MessageSquare, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { Typography } from '@/components/ui/Typography';
import { FadeIn } from '@/components/animation/FadeIn';
import { SlideUp } from '@/components/animation/SlideUp';
import { ScaleIn } from '@/components/animation/ScaleIn';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Appreciation = () => {
  // Certificates and awards
  const certificates = [
    {
      title: "Best International Recruitment Agency 2023",
      issuer: "Global HR Association",
      year: "2023",
      description: "Recognized for excellence in international recruitment services"
    },
    {
      title: "Ethical Recruitment Award",
      issuer: "International Labour Organization",
      year: "2022",
      description: "Awarded for maintaining high ethical standards in recruitment"
    },
    {
      title: "Excellence in Manpower Solutions",
      issuer: "Asia Pacific Business Council",
      year: "2021",
      description: "Awarded for innovative manpower solutions"
    },
    {
      title: "Trustworthy Service Provider",
      issuer: "Global Business Review",
      year: "2020",
      description: "Recognized for reliable and transparent services"
    }
  ];

  // Client testimonials
  const testimonials = [
    {
      name: "Client Name",
      company: "Company Name",
      content: "TZS International exceeded our expectations. Their professional approach and attention to detail were remarkable.",
      role: "HR Director"
    },
    {
      name: "Client Name",
      company: "Organization Name",
      content: "The team's expertise and dedication helped us find exceptional talent in record time. Highly recommended.",
      role: "CEO"
    },
    {
      name: "Professional Name",
      company: "Industry Professional",
      content: "My experience with TZS International was transformative. They opened doors to opportunities I never thought possible.",
      role: "Industry Expert"
    }
  ];

  // Partner appreciations
  const partners = [
    {
      name: "Partner Company",
      logo: "/placeholder-logo.jpg",
      content: "TZS International has been an invaluable partner, consistently delivering quality candidates and exceptional service.",
      date: "2023-05-15"
    },
    {
      name: "Partner Company",
      logo: "/placeholder-logo.jpg",
      content: "Their commitment to excellence and ethical practices makes them our preferred recruitment partner.",
      date: "2023-02-20"
    },
    {
      name: "Partner Company",
      logo: "/placeholder-logo.jpg",
      content: "Outstanding professionalism and results-driven approach. A true partner in our growth journey.",
      date: "2022-11-10"
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
                Our <span className="text-primary-600">Appreciation</span> & Recognition
              </Typography>
              <Typography variant="p" className="text-lg text-text-secondary mb-10">
                Celebrating achievements, awards, and recognition from our valued partners and clients.
              </Typography>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <ScaleIn>
              <Card className="text-center p-6">
                <div className="w-12 h-12 bg-primary-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="h-6 w-6 text-primary-600" />
                </div>
                <Typography variant="span" className="text-2xl font-bold text-primary-600">25+</Typography>
                <Typography variant="p" className="text-text-secondary mt-1">Awards & Certificates</Typography>
              </Card>
            </ScaleIn>
            <ScaleIn delay={0.1}>
              <Card className="text-center p-6">
                <div className="w-12 h-12 bg-secondary-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-secondary-600" />
                </div>
                <Typography variant="span" className="text-2xl font-bold text-secondary-600">5000+</Typography>
                <Typography variant="p" className="text-text-secondary mt-1">Successful Placements</Typography>
              </Card>
            </ScaleIn>
            <ScaleIn delay={0.2}>
              <Card className="text-center p-6">
                <div className="w-12 h-12 bg-accent-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Star className="h-6 w-6 text-accent-600" />
                </div>
                <Typography variant="span" className="text-2xl font-bold text-accent-600">95%</Typography>
                <Typography variant="p" className="text-text-secondary mt-1">Client Satisfaction</Typography>
              </Card>
            </ScaleIn>
            <ScaleIn delay={0.3}>
              <Card className="text-center p-6">
                <div className="w-12 h-12 bg-primary-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-6 w-6 text-primary-600" />
                </div>
                <Typography variant="span" className="text-2xl font-bold text-primary-600">15+</Typography>
                <Typography variant="p" className="text-text-secondary mt-1">Years of Excellence</Typography>
              </Card>
            </ScaleIn>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SlideUp>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <Typography variant="h2" className="mb-4">Awards & Certifications</Typography>
              <Typography variant="p" className="text-lg text-text-secondary">
                Recognition for our commitment to excellence
              </Typography>
            </div>
          </SlideUp>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certificates.map((cert, index) => (
              <ScaleIn key={index} delay={index * 0.1}>
                <Card className="group hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex items-start">
                      <div className="w-16 h-16 bg-primary-100 dark:bg-gray-700 rounded-full flex items-center justify-center mr-6 group-hover:bg-primary-200 transition-colors">
                        <Award className="h-8 w-8 text-primary-600" />
                      </div>
                      <div>
                        <div className="text-primary-600 font-bold text-lg mb-1">{cert.year}</div>
                        <Typography variant="h4" className="mb-2">{cert.title}</Typography>
                        <Typography variant="p" className="text-text-secondary text-sm mb-2">{cert.issuer}</Typography>
                        <Typography variant="p" className="text-text-secondary">
                          {cert.description}
                        </Typography>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-bg-muted">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <Typography variant="h2" className="mb-4">Client Appreciation</Typography>
              <Typography variant="p" className="text-lg text-text-secondary">
                What our clients say about our services
              </Typography>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <ScaleIn key={index} delay={index * 0.1}>
                <Card className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <Typography variant="p" className="text-text-secondary mb-6 italic">
                    "{testimonial.content}"
                  </Typography>
                  <div className="flex items-center">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-12 h-12" />
                    <div className="ml-4">
                      <Typography variant="h5" className="font-semibold">{testimonial.name}</Typography>
                      <Typography variant="p" className="text-text-secondary text-sm">{testimonial.role}, {testimonial.company}</Typography>
                    </div>
                  </div>
                </Card>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Appreciations */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SlideUp>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <Typography variant="h2" className="mb-4">Partner Recognition</Typography>
              <Typography variant="p" className="text-lg text-text-secondary">
                Appreciation from our valued business partners
              </Typography>
            </div>
          </SlideUp>
          
          <div className="space-y-8">
            {partners.map((partner, index) => (
              <ScaleIn key={index} delay={index * 0.1}>
                <Card className="p-8">
                  <div className="flex flex-col md:flex-row items-start">
                    <div className="mb-4 md:mb-0 md:mr-6">
                      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <Typography variant="h5" className="font-semibold mr-4">{partner.name}</Typography>
                        <Typography variant="p" className="text-text-secondary text-sm">
                          <Calendar className="inline mr-1 h-4 w-4" />
                          {new Date(partner.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </Typography>
                      </div>
                      <Typography variant="p" className="text-text-secondary mb-4">
                        "{partner.content}"
                      </Typography>
                    </div>
                  </div>
                </Card>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20 bg-bg-muted">
        <div className="container mx-auto px-4">
          <SlideUp>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <Typography variant="h2" className="mb-4">Milestone Achievements</Typography>
              <Typography variant="p" className="text-lg text-text-secondary">
                Key milestones in our journey of success
              </Typography>
            </div>
          </SlideUp>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-200 dark:bg-gray-700 hidden md:block"></div>
            
            <div className="space-y-12 md:space-y-0">
              {[
                { year: "2009", title: "Company Founded", desc: "TZS International established with a vision to connect talent globally" },
                { year: "2012", title: "International Expansion", desc: "Expanded operations to serve clients in multiple countries" },
                { year: "2016", title: "Technology Integration", desc: "Launched digital platforms for efficient recruitment processes" },
                { year: "2020", title: "Milestone Achievement", desc: "Achieved 5000 successful placements across 40+ countries" },
                { year: "2023", title: "Industry Recognition", desc: "Received multiple awards for excellence in international recruitment" }
              ].map((milestone, index) => (
                <ScaleIn key={index} delay={index * 0.1}>
                  <div className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-16' : 'md:pl-16'}`}>
                      <Card className="p-6">
                        <CardContent className="pt-4">
                          <div className="text-primary-600 font-bold text-xl mb-2">{milestone.year}</div>
                          <Typography variant="h4" className="mb-3">{milestone.title}</Typography>
                          <Typography variant="p" className="text-text-secondary">
                            {milestone.desc}
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

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <Card className="bg-gradient-accent text-white p-0 overflow-hidden">
              <div className="p-12 text-center">
                <Typography variant="h2" className="mb-6 text-white">Join Our Success Story</Typography>
                <Typography variant="p" className="text-primary-100 mb-8 max-w-2xl mx-auto text-lg">
                  Be part of our journey and experience the excellence that sets us apart.
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

export default Appreciation;
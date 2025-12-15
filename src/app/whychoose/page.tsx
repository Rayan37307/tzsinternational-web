'use client';

import React from 'react';
import { Award, Users, Globe, Clock, Star, CheckCircle, Shield, Briefcase, Target } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { Typography } from '@/components/ui/Typography';
import { FadeIn } from '@/components/animation/FadeIn';
import { SlideUp } from '@/components/animation/SlideUp';
import { ScaleIn } from '@/components/animation/ScaleIn';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const WhyChoose = () => {
  // Key reasons to choose us
  const reasons = [
    {
      icon: <Award className="h-8 w-8 text-primary-600" />,
      title: "Proven Track Record",
      description: "5000+ successful placements across 40+ countries with a 95% satisfaction rate"
    },
    {
      icon: <Users className="h-8 w-8 text-secondary-600" />,
      title: "Extensive Network",
      description: "Access to a global network of qualified professionals and industry connections"
    },
    {
      icon: <Globe className="h-8 w-8 text-accent-600" />,
      title: "International Expertise",
      description: "Deep understanding of international markets, regulations, and cultural nuances"
    },
    {
      icon: <Clock className="h-8 w-8 text-primary-600" />,
      title: "Efficient Process",
      description: "Streamlined recruitment process that reduces time-to-hire without compromising quality"
    },
    {
      icon: <Star className="h-8 w-8 text-secondary-600" />,
      title: "Quality Assurance",
      description: "Rigorous screening and verification process to ensure the best candidates"
    },
    {
      icon: <Shield className="h-8 w-8 text-accent-600" />,
      title: "End-to-End Support",
      description: "Comprehensive support from initial sourcing to post-placement assistance"
    },
    {
      icon: <Target className="h-8 w-8 text-primary-600" />,
      title: "Custom Solutions",
      description: "Tailored recruitment strategies to meet your specific industry needs"
    },
    {
      icon: <Briefcase className="h-8 w-8 text-secondary-600" />,
      title: "Industry Expertise",
      description: "Deep knowledge across multiple industries for better candidate matching"
    }
  ];

  // Process steps
  const processSteps = [
    { step: "Requirement Analysis", desc: "Understanding your specific needs and expectations" },
    { step: "Talent Sourcing", desc: "Identifying and attracting qualified candidates" },
    { step: "Screening & Evaluation", desc: "Rigorous assessment process to ensure quality" },
    { step: "Interview Coordination", desc: "Facilitating the interview process" },
    { step: "Final Placement", desc: "Successful matching and onboarding" },
    { step: "Post-Placement Support", desc: "Ongoing support for both parties" }
  ];

  // Testimonials
  const testimonials = [
    {
      name: "Client Name",
      position: "HR Director, Company",
      content: "Greenland Overseas exceeded our expectations. Their professional approach and attention to detail were remarkable.",
      company: "Large Healthcare Organization",
      rating: 5
    },
    {
      name: "Client Name",
      position: "Operations Manager",
      content: "The recruitment process was seamless and efficient. We found exactly the talent we needed in record time.",
      company: "Manufacturing Company",
      rating: 5
    },
    {
      name: "Professional Name",
      position: "Industry Expert",
      content: "My experience with Greenland Overseas was transformational. They opened doors to opportunities I never thought possible.",
      company: "Professional in Field",
      rating: 5
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
                Why <span className="text-primary-600">Choose</span> Us
              </Typography>
              <Typography variant="p" className="text-lg text-text-secondary mb-10">
                Discover what sets us apart in the global recruitment and manpower industry.
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
                  <Users className="h-6 w-6 text-primary-600" />
                </div>
                <Typography variant="span" className="text-2xl font-bold text-primary-600">5000+</Typography>
                <Typography variant="p" className="text-text-secondary mt-1">Successful Placements</Typography>
              </Card>
            </ScaleIn>
            <ScaleIn delay={0.1}>
              <Card className="text-center p-6">
                <div className="w-12 h-12 bg-secondary-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-6 w-6 text-secondary-600" />
                </div>
                <Typography variant="span" className="text-2xl font-bold text-secondary-600">40+</Typography>
                <Typography variant="p" className="text-text-secondary mt-1">Countries Served</Typography>
              </Card>
            </ScaleIn>
            <ScaleIn delay={0.2}>
              <Card className="text-center p-6">
                <div className="w-12 h-12 bg-accent-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="h-6 w-6 text-accent-600" />
                </div>
                <Typography variant="span" className="text-2xl font-bold text-accent-600">15+</Typography>
                <Typography variant="p" className="text-text-secondary mt-1">Years Experience</Typography>
              </Card>
            </ScaleIn>
            <ScaleIn delay={0.3}>
              <Card className="text-center p-6">
                <div className="w-12 h-12 bg-primary-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Star className="h-6 w-6 text-primary-600" />
                </div>
                <Typography variant="span" className="text-2xl font-bold text-primary-600">95%</Typography>
                <Typography variant="p" className="text-text-secondary mt-1">Client Satisfaction</Typography>
              </Card>
            </ScaleIn>
          </div>
        </div>
      </section>

      {/* Key Reasons Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SlideUp>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <Typography variant="h2" className="mb-4">What Makes Us Different</Typography>
              <Typography variant="p" className="text-lg text-text-secondary">
                Our unique approach to recruitment and manpower solutions
              </Typography>
            </div>
          </SlideUp>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((reason, index) => (
              <ScaleIn key={index} delay={index * 0.1}>
                <Card className="text-center group hover:shadow-xl transition-shadow">
                  <CardContent className="pt-8">
                    <div className="w-16 h-16 bg-primary-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-200 transition-colors">
                      {reason.icon}
                    </div>
                    <Typography variant="h4" className="mb-3">{reason.title}</Typography>
                    <Typography variant="p" className="text-text-secondary">
                      {reason.description}
                    </Typography>
                  </CardContent>
                </Card>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-bg-muted">
        <div className="container mx-auto px-4">
          <SlideUp>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <Typography variant="h2" className="mb-4">Our Process</Typography>
              <Typography variant="p" className="text-lg text-text-secondary">
                A systematic approach to ensure the best outcomes
              </Typography>
            </div>
          </SlideUp>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-200 dark:bg-gray-700 hidden md:block"></div>
            
            <div className="space-y-12 md:space-y-0">
              {processSteps.map((step, index) => (
                <ScaleIn key={index} delay={index * 0.1}>
                  <div className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-16' : 'md:pl-16'}`}>
                      <Card className="p-6">
                        <CardContent className="pt-4">
                          <div className="text-primary-600 font-bold text-xl mb-2">Step {index + 1}</div>
                          <Typography variant="h4" className="mb-3">{step.step}</Typography>
                          <Typography variant="p" className="text-text-secondary">
                            {step.desc}
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

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <Typography variant="h2" className="mb-4">Success Stories</Typography>
              <Typography variant="p" className="text-lg text-text-secondary">
                What our clients and professionals say about our services
              </Typography>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <ScaleIn key={index} delay={index * 0.1}>
                <Card className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
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
                      <Typography variant="p" className="text-text-secondary text-sm">{testimonial.position}</Typography>
                      <Typography variant="p" className="text-text-secondary text-sm">{testimonial.company}</Typography>
                    </div>
                  </div>
                </Card>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section className="py-20 bg-bg-muted">
        <div className="container mx-auto px-4">
          <SlideUp>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Typography variant="h2" className="mb-4">Our Competitive Advantages</Typography>
              <Typography variant="p" className="text-lg text-text-secondary">
                Why industry leaders trust us with their recruitment needs
              </Typography>
            </div>
          </SlideUp>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Global Network Access",
                description: "Access to our extensive network of qualified professionals across multiple industries and regions.",
                icon: <Globe className="h-8 w-8 text-primary-600" />
              },
              {
                title: "Industry Expertise",
                description: "Deep understanding of industry-specific requirements and cultural nuances.",
                icon: <Award className="h-8 w-8 text-secondary-600" />
              },
              {
                title: "Quality Assurance",
                description: "Rigorous screening and evaluation process to ensure the best candidates.",
                icon: <CheckCircle className="h-8 w-8 text-accent-600" />
              },
              {
                title: "Efficient Process",
                description: "Streamlined recruitment process that reduces time-to-hire without compromising quality.",
                icon: <Clock className="h-8 w-8 text-primary-600" />
              }
            ].map((benefit, index) => (
              <ScaleIn key={index} delay={index * 0.1}>
                <Card className="p-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mr-4">
                      {benefit.icon}
                    </div>
                    <div>
                      <Typography variant="h4" className="mb-3 font-semibold">{benefit.title}</Typography>
                      <Typography variant="p" className="text-text-secondary">
                        {benefit.description}
                      </Typography>
                    </div>
                  </div>
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
                <Typography variant="h2" className="mb-6 text-white">Experience the Difference</Typography>
                <Typography variant="p" className="text-primary-100 mb-8 max-w-2xl mx-auto text-lg">
                  Join thousands of satisfied clients who trust us with their recruitment needs.
                </Typography>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button size="xl" className="bg-white text-primary-600 hover:bg-gray-100">
                    Get Started
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

export default WhyChoose;
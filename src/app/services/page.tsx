'use client';

import React from 'react';
import { Users, Globe, Award, Clock, Building, GraduationCap, Briefcase, Star } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { Typography } from '@/components/ui/Typography';
import { FadeIn } from '@/components/animation/FadeIn';
import { SlideUp } from '@/components/animation/SlideUp';
import { ScaleIn } from '@/components/animation/ScaleIn';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Services = () => {
  // Services data
  const services = [
    {
      icon: <Users className="h-10 w-10 text-primary-600" />,
      title: "Manpower Sourcing & Placement",
      description: "Comprehensive sourcing and placement of skilled professionals tailored to your specific industry needs.",
      features: ["Industry-specific expertise", "Rigorous screening process", "Background verification", "Cultural fit assessment"]
    },
    {
      icon: <Globe className="h-10 w-10 text-secondary-600" />,
      title: "Bulk International Recruitment",
      description: "Large-scale recruitment solutions for international employers looking to expand their global workforce.",
      features: ["Mass hiring campaigns", "International compliance", "Visa assistance", "Pre-deployment training"]
    },
    {
      icon: <Award className="h-10 w-10 text-accent-600" />,
      title: "Specialized Skill Recruitment",
      description: "Targeted recruitment for hard-to-fill positions requiring specialized skills and expertise.",
      features: ["Technical skills assessment", "Certification verification", "Portfolio review", "Skill gap analysis"]
    },
    {
      icon: <GraduationCap className="h-10 w-10 text-primary-600" />,
      title: "Skill Development & Training",
      description: "Comprehensive training programs to upskill your workforce and enhance productivity.",
      features: ["Customized training modules", "Certification programs", "On-the-job training", "Skill assessments"]
    },
    {
      icon: <Building className="h-10 w-10 text-secondary-600" />,
      title: "Corporate Staffing Solutions",
      description: "Flexible staffing solutions for temporary, contract, and permanent placements.",
      features: ["Project-based staffing", "Temporary-to-permanent", "Payroll management", "Compliance support"]
    },
    {
      icon: <Briefcase className="h-10 w-10 text-accent-600" />,
      title: "Executive Search & Leadership",
      description: "Specialized search services for C-level and senior management positions.",
      features: ["Confidential searches", "Market mapping", "Competitive analysis", "Leadership assessment"]
    }
  ];

  // Industries served
  const industries = [
    "Healthcare", "IT & Technology", "Manufacturing", "Construction",
    "Hospitality", "Finance", "Education", "Logistics"
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
                Comprehensive <span className="text-primary-600">Recruitment</span> Solutions
              </Typography>
              <Typography variant="p" className="text-lg text-text-secondary mb-10">
                Our wide range of services designed to connect the right talent with the right opportunities.
              </Typography>
              <div className="flex justify-center">
                <Button size="xl">
                  Contact Our Experts
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <Typography variant="h2" className="mb-4">Our Services</Typography>
              <Typography variant="p" className="text-lg text-text-secondary">
                Tailored solutions to meet your specific recruitment and staffing needs
              </Typography>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ScaleIn key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="h-full group hover:shadow-xl transition-shadow">
                    <CardContent className="pt-8 px-6 pb-6">
                      <div className="w-16 h-16 bg-primary-100 dark:bg-gray-700 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-200 transition-colors">
                        {service.icon}
                      </div>
                      <Typography variant="h4" className="text-center mb-4">{service.title}</Typography>
                      <Typography variant="p" className="text-text-secondary text-center mb-6">
                        {service.description}
                      </Typography>
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <Typography variant="p" className="text-text-secondary">{feature}</Typography>
                          </li>
                        ))}
                      </ul>
                      <div className="text-center">
                        <Button variant="link" className="text-primary-600">
                          Learn More →
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 bg-bg-muted">
        <div className="container mx-auto px-4">
          <SlideUp>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <Typography variant="h2" className="mb-4">Industries We Serve</Typography>
              <Typography variant="p" className="text-lg text-text-secondary">
                Our expertise spans across diverse industries ensuring specialized knowledge in each domain
              </Typography>
            </div>
          </SlideUp>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <ScaleIn key={index} delay={index * 0.05}>
                <Card className="text-center py-6 px-4 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Briefcase className="h-6 w-6 text-primary-600" />
                  </div>
                  <Typography variant="h5">{industry}</Typography>
                </Card>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <Typography variant="h2" className="mb-4">Our Recruitment Process</Typography>
              <Typography variant="p" className="text-lg text-text-secondary">
                A streamlined approach to connect talent with opportunity efficiently
              </Typography>
            </div>
          </FadeIn>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-200 dark:bg-gray-700 hidden md:block"></div>

            <div className="space-y-12 md:space-y-0">
              {[
                { step: "Requirement Analysis", desc: "Understanding your specific hiring needs" },
                { step: "Talent Sourcing", desc: "Identifying and attracting top candidates" },
                { step: "Screening & Selection", desc: "Rigorous evaluation process" },
                { step: "Interview Coordination", desc: "Facilitating the interview process" },
                { step: "Final Placement", desc: "Successful placement and onboarding" }
              ].map((item, index) => (
                <ScaleIn key={index} delay={index * 0.1}>
                  <div className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-16' : 'md:pl-16'}`}>
                      <Card className="p-6">
                        <CardContent className="pt-4">
                          <div className="text-primary-600 font-bold text-xl mb-2">Step {index + 1}</div>
                          <Typography variant="h4" className="mb-3">{item.step}</Typography>
                          <Typography variant="p" className="text-text-secondary">
                            {item.desc}
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
      <section className="py-20 bg-gradient-accent">
        <div className="container mx-auto px-4">
          <FadeIn>
            <Card className="bg-transparent border-0 text-white p-0 overflow-hidden">
              <div className="p-12 text-center">
                <Typography variant="h2" className="mb-6 text-white">Ready to Transform Your Hiring Process?</Typography>
                <Typography variant="p" className="text-primary-100 mb-8 max-w-2xl mx-auto text-lg">
                  Let us handle your recruitment needs with our proven expertise and global network.
                </Typography>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button size="xl" className="bg-white text-primary-600 hover:bg-gray-100">
                    Get Started Today
                  </Button>
                  <Button variant="outline" size="xl" className="border-white text-white hover:bg-white/10">
                    Schedule Consultation
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

export default Services;
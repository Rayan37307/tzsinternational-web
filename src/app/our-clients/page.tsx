'use client';

import React from 'react';
import { Users, Globe, Building, Star, Award, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { Typography } from '@/components/ui/Typography';
import { FadeIn } from '@/components/animation/FadeIn';
import { SlideUp } from '@/components/animation/SlideUp';
import { ScaleIn } from '@/components/animation/ScaleIn';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const OurClients = () => {
  // Client industries
  const clientIndustries = [
    { name: "Healthcare", count: 120, description: "Hospitals, clinics, and medical institutions" },
    { name: "Manufacturing", count: 95, description: "Industrial and manufacturing companies" },
    { name: "Construction", count: 80, description: "Construction and infrastructure companies" },
    { name: "Hospitality", count: 70, description: "Hotels, resorts, and hospitality chains" },
    { name: "Technology", count: 65, description: "IT and technology firms" },
    { name: "Education", count: 50, description: "Educational institutions and universities" }
  ];

  // Client countries
  const clientCountries = [
    { name: "United States", count: 150, flag: "🇺🇸" },
    { name: "United Arab Emirates", count: 120, flag: "🇦🇪" },
    { name: "United Kingdom", count: 100, flag: "🇬🇧" },
    { name: "Germany", count: 80, flag: "🇩🇪" },
    { name: "Canada", count: 70, flag: "🇨🇦" },
    { name: "Australia", count: 60, flag: "🇦🇺" },
    { name: "Singapore", count: 50, flag: "🇸🇬" },
    { name: "Malaysia", count: 45, flag: "🇲🇾" }
  ];

  // Client logos
  const clientLogos = [
    { name: "Company Name", industry: "Technology" },
    { name: "Organization Name", industry: "Healthcare" },
    { name: "Business Name", industry: "Manufacturing" },
    { name: "Enterprise Name", industry: "Hospitality" },
    { name: "Institution Name", industry: "Education" },
    { name: "Corporation Name", industry: "Finance" },
    { name: "Agency Name", industry: "Government" },
    { name: "Group Name", industry: "Construction" },
    { name: "Firm Name", industry: "Legal" },
    { name: "Institute Name", industry: "Research" },
    { name: "Foundation Name", industry: "Non-profit" },
    { name: "Laboratory Name", industry: "Science" }
  ];

  // Client testimonials
  const testimonials = [
    {
      name: "Client Name",
      position: "HR Director, Company",
      content: "Greenland Overseas has been instrumental in helping us find top-tier talent. Their understanding of our industry needs is exceptional.",
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
      name: "Client Name",
      position: "CEO",
      content: "Their professionalism and attention to detail have made them our preferred recruitment partner for all international placements.",
      company: "Construction Firm",
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
                Our <span className="text-primary-600">Clients</span> & Partners
              </Typography>
              <Typography variant="p" className="text-lg text-text-secondary mb-10">
                Trusted by industry leaders across the globe for their recruitment and manpower needs.
              </Typography>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Statistics Section */}
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
                  <Building className="h-6 w-6 text-accent-600" />
                </div>
                <Typography variant="span" className="text-2xl font-bold text-accent-600">800+</Typography>
                <Typography variant="p" className="text-text-secondary mt-1">Client Organizations</Typography>
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

      {/* Industries Served */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SlideUp>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <Typography variant="h2" className="mb-4">Industries We Serve</Typography>
              <Typography variant="p" className="text-lg text-text-secondary">
                Supporting diverse sectors with specialized recruitment solutions
              </Typography>
            </div>
          </SlideUp>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clientIndustries.map((industry, index) => (
              <ScaleIn key={index} delay={index * 0.1}>
                <Card className="group hover:shadow-xl transition-shadow">
                  <CardContent className="pt-8 px-6 pb-6">
                    <div className="w-16 h-16 bg-primary-100 dark:bg-gray-700 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-200 transition-colors">
                      <Building className="h-8 w-8 text-primary-600" />
                    </div>
                    <Typography variant="h4" className="text-center mb-3">{industry.name}</Typography>
                    <Typography variant="span" className="text-primary-600 font-bold text-xl block text-center mb-2">{industry.count}</Typography>
                    <Typography variant="p" className="text-text-secondary text-center">
                      {industry.description}
                    </Typography>
                  </CardContent>
                </Card>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* Client Countries */}
      <section className="py-20 bg-bg-muted">
        <div className="container mx-auto px-4">
          <SlideUp>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <Typography variant="h2" className="mb-4">Global Client Presence</Typography>
              <Typography variant="p" className="text-lg text-text-secondary">
                Our clients span across continents and regions
              </Typography>
            </div>
          </SlideUp>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {clientCountries.map((country, index) => (
              <ScaleIn key={index} delay={index * 0.05}>
                <Card className="text-center p-6">
                  <Typography variant="span" className="text-3xl mb-2 block">{country.flag}</Typography>
                  <Typography variant="h5" className="font-semibold mb-2">{country.name}</Typography>
                  <Typography variant="p" className="text-text-secondary">{country.count} clients</Typography>
                </Card>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <Typography variant="h2" className="mb-4">Trusted by Industry Leaders</Typography>
              <Typography variant="p" className="text-lg text-text-secondary">
                Organizations that rely on our recruitment expertise
              </Typography>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {clientLogos.map((client, index) => (
              <ScaleIn key={index} delay={index * 0.1}>
                <Card className="text-center overflow-hidden group hover:shadow-xl transition-shadow">
                  <div className="h-32 bg-gray-200 border-2 border-dashed rounded-t-xl w-full flex items-center justify-center">
                    <span className="text-gray-500">Logo</span>
                  </div>
                  <CardContent className="p-4">
                    <Typography variant="h5" className="font-semibold">{client.name}</Typography>
                    <Typography variant="p" className="text-text-secondary text-sm">{client.industry}</Typography>
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
          <SlideUp>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <Typography variant="h2" className="mb-4">Client Appreciation</Typography>
              <Typography variant="p" className="text-lg text-text-secondary">
                What our valued clients say about our services
              </Typography>
            </div>
          </SlideUp>
          
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

      {/* Partnership Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Typography variant="h2" className="mb-4">Benefits of Partnership</Typography>
              <Typography variant="p" className="text-lg text-text-secondary">
                Why industry leaders choose us for their recruitment needs
              </Typography>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="h-8 w-8 text-primary-600" />,
                title: "Global Network Access",
                description: "Access to our extensive network of qualified professionals across multiple industries and regions."
              },
              {
                icon: <Users className="h-8 w-8 text-secondary-600" />,
                title: "Specialized Expertise",
                description: "Deep understanding of industry-specific requirements and cultural nuances."
              },
              {
                icon: <CheckCircle className="h-8 w-8 text-accent-600" />,
                title: "Quality Assurance",
                description: "Rigorous screening and evaluation process to ensure top-quality candidates."
              },
              {
                icon: <Clock className="h-8 w-8 text-primary-600" />,
                title: "Efficient Process",
                description: "Streamlined recruitment process that reduces time-to-hire without compromising quality."
              },
              {
                icon: <Award className="h-8 w-8 text-secondary-600" />,
                title: "Proven Track Record",
                description: "5000+ successful placements with a 95% client satisfaction rate."
              },
              {
                icon: <Shield className="h-8 w-8 text-accent-600" />,
                title: "Compliance & Security",
                description: "Fully compliant with international regulations and data protection standards."
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
                <Typography variant="h2" className="mb-6 text-white">Join Our Client Network</Typography>
                <Typography variant="p" className="text-primary-100 mb-8 max-w-2xl mx-auto text-lg">
                  Become part of our trusted client community and experience excellence in recruitment.
                </Typography>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button size="xl" className="bg-white text-primary-600 hover:bg-gray-100">
                    Partner with Us
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

export default OurClients;
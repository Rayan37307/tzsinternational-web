'use client';

import React from 'react';
import { FileText, Shield, UserCheck, Globe, Clock, Star, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { Typography } from '@/components/ui/Typography';
import { FadeIn } from '@/components/animation/FadeIn';
import { SlideUp } from '@/components/animation/SlideUp';
import { ScaleIn } from '@/components/animation/ScaleIn';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const RecuitmentPolicy = () => {
  // Policy sections
  const policySections = [
    {
      title: "Ethical Recruitment Practices",
      content: "We adhere to the highest ethical standards in all our recruitment activities, ensuring fair treatment of all candidates and compliance with international labor laws.",
      icon: <Shield className="h-8 w-8 text-primary-600" />
    },
    {
      title: "Transparency & Fairness",
      content: "We maintain complete transparency throughout the recruitment process, providing clear information about job roles, expectations, and compensation packages.",
      icon: <UserCheck className="h-8 w-8 text-secondary-600" />
    },
    {
      title: "Global Compliance",
      content: "Our recruitment processes comply with the laws and regulations of both home and destination countries, ensuring legal and ethical placement.",
      icon: <Globe className="h-8 w-8 text-accent-600" />
    },
    {
      title: "Quality Assurance",
      content: "We implement rigorous screening and verification processes to ensure the best match between candidates and employer requirements.",
      icon: <Star className="h-8 w-8 text-primary-600" />
    },
    {
      title: "Continuous Improvement",
      content: "We continuously review and update our policies to adapt to changing market conditions and regulatory requirements.",
      icon: <Clock className="h-8 w-8 text-secondary-600" />
    },
    {
      title: "Document Verification",
      content: "All candidate and employer documents undergo thorough verification to ensure authenticity and eligibility.",
      icon: <FileText className="h-8 w-8 text-accent-600" />
    }
  ];

  // Compliance standards
  const standards = [
    { title: "ISO 9001:2015", description: "Quality Management Systems" },
    { title: "International Labour Standards", description: "Compliance with ILO guidelines" },
    { title: "Data Protection Standards", description: "GDPR and other privacy regulations" },
    { title: "Ethical Recruitment Code", description: "Adherence to industry best practices" }
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
                Our <span className="text-primary-600">Recruitment</span> Policy
              </Typography>
              <Typography variant="p" className="text-lg text-text-secondary mb-10">
                Comprehensive framework ensuring ethical, transparent, and effective recruitment practices.
              </Typography>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Policy Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SlideUp>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Typography variant="h2" className="mb-4">Our Commitment</Typography>
              <Typography variant="p" className="text-lg text-text-secondary">
                TZS International is committed to maintaining the highest standards in international recruitment and manpower solutions.
              </Typography>
            </div>
          </SlideUp>
          
          <div className="prose prose-lg max-w-4xl mx-auto text-text-secondary">
            <Typography variant="p" className="mb-6">
              Our recruitment policy is designed to ensure the highest ethical standards, transparency, and effectiveness in connecting skilled professionals with global opportunities. We are committed to providing a fair, legal, and supportive process for both employers and candidates.
            </Typography>
            <Typography variant="p" className="mb-6">
              This policy outlines our core principles, procedures, and commitments to ethical recruitment practices that comply with international standards and local regulations.
            </Typography>
            <Typography variant="p" className="mb-6">
              We continuously review and update our policies to adapt to changing market conditions, regulatory requirements, and best practices in the industry.
            </Typography>
          </div>
        </div>
      </section>

      {/* Policy Sections */}
      <section className="py-20 bg-bg-muted">
        <div className="container mx-auto px-4">
          <SlideUp>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <Typography variant="h2" className="mb-4">Core Policy Elements</Typography>
              <Typography variant="p" className="text-lg text-text-secondary">
                Key components of our recruitment framework
              </Typography>
            </div>
          </SlideUp>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {policySections.map((section, index) => (
              <ScaleIn key={index} delay={index * 0.1}>
                <Card className="group hover:shadow-xl transition-shadow">
                  <CardContent className="pt-8 px-6 pb-6">
                    <div className="w-16 h-16 bg-primary-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-200 transition-colors">
                      {section.icon}
                    </div>
                    <Typography variant="h4" className="text-center mb-4">{section.title}</Typography>
                    <Typography variant="p" className="text-text-secondary text-center">
                      {section.content}
                    </Typography>
                  </CardContent>
                </Card>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* Standards Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <Typography variant="h2" className="mb-4">Industry Standards & Certifications</Typography>
              <Typography variant="p" className="text-lg text-text-secondary">
                Our commitment to maintaining the highest industry standards
              </Typography>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {standards.map((standard, index) => (
              <ScaleIn key={index} delay={index * 0.1}>
                <Card className="p-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mr-4">
                      <FileText className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <Typography variant="h5" className="font-semibold mb-2">{standard.title}</Typography>
                      <Typography variant="p" className="text-text-secondary">
                        {standard.description}
                      </Typography>
                    </div>
                  </div>
                </Card>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Process */}
      <section className="py-20 bg-bg-muted">
        <div className="container mx-auto px-4">
          <SlideUp>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <Typography variant="h2" className="mb-4">Our Compliance Process</Typography>
              <Typography variant="p" className="text-lg text-text-secondary">
                Systematic approach to ensure regulatory adherence
              </Typography>
            </div>
          </SlideUp>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-200 dark:bg-gray-700 hidden md:block"></div>
            
            <div className="space-y-12 md:space-y-0">
              {[
                { step: "Requirement Analysis", desc: "Review all applicable laws and regulations for destination and origin countries" },
                { step: "Document Verification", desc: "Verify all candidate and employer documents for authenticity" },
                { step: "Eligibility Assessment", desc: "Ensure candidates meet all legal and professional requirements" },
                { step: "Compliance Verification", desc: "Check processes adhere to international and local regulations" },
                { step: "Final Approval", desc: "Complete legal review before final placement" },
                { step: "Ongoing Monitoring", desc: "Monitor compliance post-placement through regular reviews" }
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

      {/* Key Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Typography variant="h2" className="mb-4">Benefits of Our Policy Framework</Typography>
              <Typography variant="p" className="text-lg text-text-secondary">
                How our policies ensure trust and excellence
              </Typography>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Legal Protection",
                description: "All placements are legally compliant with government regulations, providing protection for both employers and candidates.",
                icon: <Shield className="h-8 w-8 text-primary-600" />
              },
              {
                title: "Quality Assurance",
                description: "Rigorous screening and evaluation process to ensure the best candidates meet requirements.",
                icon: <CheckCircle className="h-8 w-8 text-secondary-600" />
              },
              {
                title: "Transparency",
                description: "Complete transparency throughout the recruitment process, providing clear information about job roles and expectations.",
                icon: <UserCheck className="h-8 w-8 text-accent-600" />
              },
              {
                title: "Global Recognition",
                description: "Our policies are recognized globally, facilitating smooth international recruitment and placement processes.",
                icon: <Globe className="h-8 w-8 text-primary-600" />
              }
            ].map((benefit, index) => (
              <ScaleIn key={index} delay={index * 0.1}>
                <Card className="p-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mr-4">
                      {benefit.icon}
                    </div>
                    <div>
                      <Typography variant="h4" className="font-semibold mb-3">{benefit.title}</Typography>
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
                <Typography variant="h2" className="mb-6 text-white">Our Policy Commitment</Typography>
                <Typography variant="p" className="text-primary-100 mb-8 max-w-2xl mx-auto text-lg">
                  We continuously review and update our policies to maintain the highest standards of ethical recruitment.
                </Typography>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button size="xl" className="bg-white text-primary-600 hover:bg-gray-100">
                    Contact Us
                  </Button>
                  <Button variant="outline" size="xl" className="border-white text-white hover:bg-white/10">
                    Download Policy
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

export default RecuitmentPolicy;
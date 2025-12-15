'use client';

import React from 'react';
import { Shield, FileText, CheckCircle, Globe, Calendar, Award } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { Typography } from '@/components/ui/Typography';
import { FadeIn } from '@/components/animation/FadeIn';
import { SlideUp } from '@/components/animation/SlideUp';
import { ScaleIn } from '@/components/animation/ScaleIn';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Licence = () => {
  // Licence information
  const licences = [
    {
      name: "Recruitment & Placement License",
      number: "RL-040",
      issuedBy: "Ministry of Expatriates' Welfare & Overseas Employment",
      country: "Bangladesh",
      validity: "2023-2028",
      status: "Active",
      description: "License for international recruitment and placement services"
    },
    {
      name: "Business Registration Certificate",
      number: "BRC-12345",
      issuedBy: "Registrar of Joint Stock Companies",
      country: "Bangladesh",
      validity: "2023-2025",
      status: "Active",
      description: "Certificate for business operations and management"
    },
    {
      name: "ISO 9001:2015 Certification",
      number: "ISO-45678",
      issuedBy: "International Organization for Standardization",
      country: "Switzerland",
      validity: "2023-2026",
      status: "Active",
      description: "Quality management system certification"
    },
    {
      name: "Export Promotion Bureau Registration",
      number: "EPB-90123",
      issuedBy: "Export Promotion Bureau",
      country: "Bangladesh",
      validity: "2023-2025",
      status: "Active",
      description: "Registration for export of services"
    }
  ];

  // Compliance features
  const complianceFeatures = [
    { icon: <Shield className="h-6 w-6 text-primary-600" />, title: "Government Approved", description: "Fully approved by relevant government authorities" },
    { icon: <CheckCircle className="h-6 w-6 text-secondary-600" />, title: "Regulatory Compliance", description: "Adherence to all local and international regulations" },
    { icon: <FileText className="h-6 w-6 text-accent-600" />, title: "Document Verification", description: "Verified and authenticated documentation" },
    { icon: <Globe className="h-6 w-6 text-primary-600" />, title: "Global Standards", description: "Meets international standards and requirements" },
    { icon: <Award className="h-6 w-6 text-secondary-600" />, title: "Certified Excellence", description: "Certified by leading industry bodies" },
    { icon: <Calendar className="h-6 w-6 text-accent-600" />, title: "Renewal Process", description: "Regular renewal and compliance checks" }
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
                Our <span className="text-primary-600">Licenses</span> & Certifications
              </Typography>
              <Typography variant="p" className="text-lg text-text-secondary mb-10">
                Comprehensive documentation and certifications demonstrating our commitment to legal compliance and excellence.
              </Typography>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Compliance Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SlideUp>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <Typography variant="h2" className="mb-4">Compliance Commitment</Typography>
              <Typography variant="p" className="text-lg text-text-secondary">
                Our dedication to maintaining the highest legal and ethical standards
              </Typography>
            </div>
          </SlideUp>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {complianceFeatures.map((feature, index) => (
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

      {/* Licence Details */}
      <section className="py-20 bg-bg-muted">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <Typography variant="h2" className="mb-4">Our Official Licenses</Typography>
              <Typography variant="p" className="text-lg text-text-secondary">
                Details of our government-approved licenses and certifications
              </Typography>
            </div>
          </FadeIn>
          
          <div className="space-y-6">
            {licences.map((licence, index) => (
              <ScaleIn key={index} delay={index * 0.1}>
                <Card className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                    <div>
                      <div className="text-primary-600 font-bold text-sm mb-1">License Name</div>
                      <Typography variant="h5" className="font-semibold">{licence.name}</Typography>
                    </div>
                    <div>
                      <div className="text-primary-600 font-bold text-sm mb-1">License Number</div>
                      <Typography variant="p" className="text-text-secondary font-medium">{licence.number}</Typography>
                    </div>
                    <div>
                      <div className="text-primary-600 font-bold text-sm mb-1">Issued By</div>
                      <Typography variant="p" className="text-text-secondary">{licence.issuedBy}</Typography>
                    </div>
                    <div>
                      <div className="text-primary-600 font-bold text-sm mb-1">Validity</div>
                      <Typography variant="p" className="text-text-secondary">{licence.validity}</Typography>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-border-light">
                    <div className="flex justify-between items-center">
                      <div>
                        <Typography variant="p" className="text-text-secondary">{licence.description}</Typography>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                        licence.status === 'Active' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {licence.status}
                      </div>
                    </div>
                  </div>
                </Card>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* Verification Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SlideUp>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <Typography variant="h2" className="mb-4">License Verification</Typography>
              <Typography variant="p" className="text-lg text-text-secondary">
                How we ensure all licenses are up-to-date and compliant
              </Typography>
            </div>
          </SlideUp>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                step: 1, 
                title: "Initial Verification", 
                desc: "All licenses are verified at the beginning of engagement" 
              },
              { 
                step: 2, 
                title: "Regular Audits", 
                desc: "Quarterly checks ensure all licenses remain active" 
              },
              { 
                step: 3, 
                title: "Renewal Tracking", 
                desc: "Automatic alerts for license renewal deadlines" 
              },
              { 
                step: 4, 
                title: "Compliance Reporting", 
                desc: "Detailed reports on license status for clients" 
              }
            ].map((process, index) => (
              <ScaleIn key={index} delay={index * 0.1}>
                <Card className="text-center p-6">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Typography variant="span" className="text-lg font-bold text-primary-600">{process.step}</Typography>
                  </div>
                  <Typography variant="h5" className="mb-2 font-semibold">{process.title}</Typography>
                  <Typography variant="p" className="text-text-secondary">
                    {process.desc}
                  </Typography>
                </Card>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Benefits */}
      <section className="py-20 bg-bg-muted">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Typography variant="h2" className="mb-4">Benefits of Working with Licensed Agency</Typography>
              <Typography variant="p" className="text-lg text-text-secondary">
                Why our licenses matter for your recruitment needs
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
                description: "Government licenses require meeting strict operational and quality standards, ensuring professional service delivery.",
                icon: <Award className="h-8 w-8 text-secondary-600" />
              },
              {
                title: "Trust & Credibility",
                description: "Licensed agencies undergo rigorous verification processes, building trust with all stakeholders in the recruitment process.",
                icon: <CheckCircle className="h-8 w-8 text-accent-600" />
              },
              {
                title: "International Recognition",
                description: "Our licenses are recognized globally, facilitating smooth international recruitment and placement processes.",
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
                <Typography variant="h2" className="mb-6 text-white">Our Compliance Commitment</Typography>
                <Typography variant="p" className="text-primary-100 mb-8 max-w-2xl mx-auto text-lg">
                  We maintain all required licenses and certifications to ensure legal and ethical recruitment practices.
                </Typography>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button size="xl" className="bg-white text-primary-600 hover:bg-gray-100">
                    Verify Our Licenses
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

export default Licence;
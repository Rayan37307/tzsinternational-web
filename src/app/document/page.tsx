'use client';

import React from 'react';
import { FileText, Download, CheckCircle, Shield, Calendar, Users, Award, Globe } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { Typography } from '@/components/ui/Typography';
import { FadeIn } from '@/components/animation/FadeIn';
import { SlideUp } from '@/components/animation/SlideUp';
import { ScaleIn } from '@/components/animation/ScaleIn';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Document = () => {
  // Document categories
  const documentCategories = [
    {
      name: "Government Approvals",
      icon: <Shield className="h-6 w-6 text-primary-600" />,
      count: 8,
      description: "Official government approvals and licenses"
    },
    {
      name: "Certifications",
      icon: <Award className="h-6 w-6 text-secondary-600" />,
      count: 12,
      description: "International and industry certifications"
    },
    {
      name: "Legal Documents",
      icon: <FileText className="h-6 w-6 text-accent-600" />,
      count: 15,
      description: "Legal agreements and compliance documents"
    },
    {
      name: "Operational Documents",
      icon: <Users className="h-6 w-6 text-primary-600" />,
      count: 20,
      description: "Internal operational and procedural documents"
    }
  ];

  // Document list
  const documents = [
    {
      name: "Recruitment License  ",
      category: "Government Approvals",
      date: "2023-05-15",
      type: "PDF",
      size: "2.4 MB",
      status: "Verified",
      description: "Official recruitment license from government authority"
    },
    {
      name: "Business Registration Certificate",
      category: "Government Approvals",
      date: "2023-03-20",
      type: "PDF",
      size: "1.8 MB",
      status: "Verified",
      description: "Certificate for business operations and management"
    },
    {
      name: "ISO 9001:2015 Certification",
      category: "Certifications",
      date: "2023-07-10",
      type: "PDF",
      size: "3.2 MB",
      status: "Active",
      description: "Quality management system certification"
    },
    {
      name: "Export Promotion Bureau Registration",
      category: "Government Approvals",
      date: "2023-01-15",
      type: "PDF",
      size: "1.5 MB",
      status: "Active",
      description: "Registration for export of services"
    },
    {
      name: "Standard Operating Procedures",
      category: "Operational Documents",
      date: "2023-08-22",
      type: "PDF",
      size: "5.1 MB",
      status: "Current",
      description: "Detailed operational procedures for recruitment"
    },
    {
      name: "Client Agreement Template",
      category: "Legal Documents",
      date: "2023-06-30",
      type: "DOCX",
      size: "0.8 MB",
      status: "Current",
      description: "Standard agreement template for clients"
    }
  ];

  // Document features
  const features = [
    { icon: <CheckCircle className="h-6 w-6 text-primary-600" />, title: "Verified Documents", description: "All documents are verified and authenticated" },
    { icon: <Shield className="h-6 w-6 text-secondary-600" />, title: "Secure Storage", description: "Documents stored with military-grade encryption" },
    { icon: <Calendar className="h-6 w-6 text-accent-600" />, title: "Real-time Updates", description: "Documents updated in real-time" },
    { icon: <Globe className="h-6 w-6 text-primary-600" />, title: "Global Compliance", description: "Documents compliant with international standards" },
    { icon: <Download className="h-6 w-6 text-secondary-600" />, title: "Easy Access", description: "Download any document with a single click" },
    { icon: <FileText className="h-6 w-6 text-accent-600" />, title: "Organized Structure", description: "Documents organized by category and date" }
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
                Document <span className="text-primary-600">Repository</span>
              </Typography>
              <Typography variant="p" className="text-lg text-text-secondary mb-10">
                Comprehensive collection of verified and compliant documents ensuring transparency and trust.
              </Typography>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Document Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SlideUp>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <Typography variant="h2" className="mb-4">Document Categories</Typography>
              <Typography variant="p" className="text-lg text-text-secondary">
                Organized collection of important documents
              </Typography>
            </div>
          </SlideUp>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {documentCategories.map((category, index) => (
              <ScaleIn key={index} delay={index * 0.1}>
                <Card className="text-center group hover:shadow-xl transition-shadow">
                  <CardContent className="pt-8">
                    <div className="w-16 h-16 bg-primary-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-200 transition-colors">
                      {category.icon}
                    </div>
                    <Typography variant="h4" className="mb-2">{category.name}</Typography>
                    <Typography variant="p" className="text-primary-600 font-semibold mb-2">{category.count} Documents</Typography>
                    <Typography variant="p" className="text-text-secondary">
                      {category.description}
                    </Typography>
                  </CardContent>
                </Card>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* Document Features */}
      <section className="py-20 bg-bg-muted">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <Typography variant="h2" className="mb-4">Document Management Features</Typography>
              <Typography variant="p" className="text-lg text-text-secondary">
                Advanced document management system for security and accessibility
              </Typography>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <ScaleIn key={index} delay={index * 0.1}>
                <Card className="p-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mr-4">
                      {feature.icon}
                    </div>
                    <div>
                      <Typography variant="h5" className="font-semibold mb-2">{feature.title}</Typography>
                      <Typography variant="p" className="text-text-secondary">
                        {feature.description}
                      </Typography>
                    </div>
                  </div>
                </Card>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* Document List */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SlideUp>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <Typography variant="h2" className="mb-4">Available Documents</Typography>
              <Typography variant="p" className="text-lg text-text-secondary">
                Recently updated documents with verification status
              </Typography>
            </div>
          </SlideUp>
          
          <div className="overflow-x-auto rounded-2xl">
            <table className="min-w-full bg-bg-card rounded-2xl overflow-hidden shadow">
              <thead className="bg-gray-100 dark:bg-gray-800">
                <tr>
                  <th className="py-4 px-6 text-left text-sm font-semibold text-text-secondary">Document Name</th>
                  <th className="py-4 px-6 text-left text-sm font-semibold text-text-secondary">Category</th>
                  <th className="py-4 px-6 text-left text-sm font-semibold text-text-secondary">Date</th>
                  <th className="py-4 px-6 text-left text-sm font-semibold text-text-secondary">Type</th>
                  <th className="py-4 px-6 text-left text-sm font-semibold text-text-secondary">Status</th>
                  <th className="py-4 px-6 text-left text-sm font-semibold text-text-secondary">Actions</th>
                </tr>
              </thead>
              <tbody>
                {documents.map((doc, index) => (
                  <ScaleIn key={index} delay={index * 0.1}>
                    <tr className={`border-t border-border-light ${index % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-700'}`}>
                      <td className="py-4 px-6">
                        <Typography variant="h5" className="font-semibold">{doc.name}</Typography>
                        <Typography variant="p" className="text-text-secondary text-sm">{doc.description}</Typography>
                      </td>
                      <td className="py-4 px-6">
                        <Typography variant="p" className="text-text-secondary">{doc.category}</Typography>
                      </td>
                      <td className="py-4 px-6">
                        <Typography variant="p" className="text-text-secondary">
                          {new Date(doc.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                        </Typography>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center">
                          <FileText className="h-5 w-5 text-primary-600 mr-2" />
                          <Typography variant="p" className="text-text-secondary">{doc.type}</Typography>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                          doc.status === 'Verified' || doc.status === 'Active' || doc.status === 'Current'
                            ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200' 
                            : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-200'
                        }`}>
                          {doc.status}
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <Button variant="outline" size="sm" className="mr-2">
                          <Download className="h-4 w-4 mr-1" />
                          Download
                        </Button>
                      </td>
                    </tr>
                  </ScaleIn>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Document Security */}
      <section className="py-20 bg-bg-muted">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Typography variant="h2" className="mb-4">Document Security & Verification</Typography>
              <Typography variant="p" className="text-lg text-text-secondary">
                Our commitment to maintaining the highest standards of document security and authenticity
              </Typography>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Typography variant="h3" className="mb-6">Our Security Measures</Typography>
              <ul className="space-y-4">
                {[
                  "Military-grade encryption for all stored documents",
                  "Multi-factor authentication for document access",
                  "Regular security audits and penetration testing",
                  "Backup and disaster recovery protocols",
                  "Compliance with international data protection standards",
                  "Secure document transfer protocols"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary-600 mt-0.5 mr-3 flex-shrink-0" />
                    <Typography variant="p" className="text-text-secondary">{item}</Typography>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-200 border-2 border-dashed border-border-light rounded-2xl w-full h-80 flex items-center justify-center">
              <span className="text-gray-500">Document Security Visualization</span>
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
                <Typography variant="h2" className="mb-6 text-white">Access Our Documents</Typography>
                <Typography variant="p" className="text-primary-100 mb-8 max-w-2xl mx-auto text-lg">
                  All documents are verified, compliant, and available for authorized access.
                </Typography>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button size="xl" className="bg-white text-primary-600 hover:bg-gray-100">
                    <Download className="h-5 w-5 mr-2" />
                    Download Documents
                  </Button>
                  <Button variant="outline" size="xl" className="border-white text-white hover:bg-white/10">
                    Request Access
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

export default Document;
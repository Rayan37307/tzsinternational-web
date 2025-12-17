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
import Image from 'next/image';

const FoundersLegacy = () => {
  // Timeline data

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
      {/* Founder Image and Bio */}
      <section className="py-20 bg-bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3">
                <Image src={"/founder.jpeg"} alt={"founder"} width={400} height={300} className="h-96 w-auto object-cover"/>
              </div>
              <div className="md:w-2/3">
                <Typography variant="h3" className="mb-4 text-primary-600">Meet Our Founder</Typography>
                <Typography variant="p" className="text-lg text-text-secondary mb-4">
                  Our founder's vision has been the driving force behind TZS International's success. With a deep understanding of global market needs and a passion for connecting talent with opportunity, our founder has built a legacy of excellence that continues to guide our mission.
                </Typography>
                <Typography variant="p" className="text-text-secondary">
                  Starting with a simple idea to bridge the gap between skilled professionals and international opportunities, our founder has created a company that has successfully placed thousands of individuals across multiple countries, while maintaining the highest standards of service and integrity.
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FoundersLegacy;

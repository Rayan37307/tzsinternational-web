'use client';

import React from 'react';
import { Users, Award, Globe, Star } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { Typography } from '@/components/ui/Typography';
import { FadeIn } from '@/components/animation/FadeIn';
import { SlideUp } from '@/components/animation/SlideUp';
import { ScaleIn } from '@/components/animation/ScaleIn';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Management = () => {
  // Management team data
  const managementTeam = [
    {
      name: "Management Name",
      position: "Chief Executive Officer",
      image: "/placeholder-management.jpg",
      bio: "Over 15 years of experience in international recruitment with a focus on strategic growth and innovation."
    },
    {
      name: "Management Name",
      position: "Chief Operations Officer",
      image: "/placeholder-management.jpg",
      bio: "Expert in operational excellence and process optimization with global industry experience."
    },
    {
      name: "Management Name",
      position: "Chief Financial Officer",
      image: "/placeholder-management.jpg",
      bio: "Finance specialist with expertise in international markets and sustainable business growth."
    },
    {
      name: "Management Name",
      position: "Head of Human Resources",
      image: "/placeholder-management.jpg",
      bio: "Talent acquisition specialist focused on building high-performing teams globally."
    },
    {
      name: "Management Name",
      position: "Director of International Relations",
      image: "/placeholder-management.jpg",
      bio: "Specialist in building and maintaining strategic partnerships across multiple continents."
    },
    {
      name: "Management Name",
      position: "Director of Technology",
      image: "/placeholder-management.jpg",
      bio: "Technology visionary leading our digital transformation and AI-powered recruitment solutions."
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
                Our <span className="text-primary-600">Management</span> Team
              </Typography>
              <Typography variant="p" className="text-lg text-text-secondary mb-10">
                A team of experienced professionals driving our vision of connecting talent with opportunity.
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
                <Typography variant="span" className="text-2xl font-bold text-primary-600">200+</Typography>
                <Typography variant="p" className="text-text-secondary mt-1">Team Members</Typography>
              </Card>
            </ScaleIn>
            <ScaleIn delay={0.1}>
              <Card className="text-center p-6">
                <div className="w-12 h-12 bg-secondary-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-6 w-6 text-secondary-600" />
                </div>
                <Typography variant="span" className="text-2xl font-bold text-secondary-600">40+</Typography>
                <Typography variant="p" className="text-text-secondary mt-1">Countries</Typography>
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
                <Typography variant="span" className="text-2xl font-bold text-primary-600">5000+</Typography>
                <Typography variant="p" className="text-text-secondary mt-1">Placements</Typography>
              </Card>
            </ScaleIn>
          </div>
        </div>
      </section>

      {/* Management Team Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SlideUp>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <Typography variant="h2" className="mb-4">Leadership Team</Typography>
              <Typography variant="p" className="text-lg text-text-secondary">
                Meet the experts who drive our success and innovation
              </Typography>
            </div>
          </SlideUp>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {managementTeam.map((member, index) => (
              <ScaleIn key={index} delay={index * 0.1}>
                <Card className="overflow-hidden group hover:shadow-xl transition-shadow">
                  <div className="h-64 bg-gray-200 border-2 border-dashed rounded-t-xl w-full" />
                  <CardContent className="p-6">
                    <Typography variant="h4" className="mb-2">{member.name}</Typography>
                    <Typography variant="p" className="text-primary-600 font-medium mb-3">{member.position}</Typography>
                    <Typography variant="p" className="text-text-secondary">
                      {member.bio}
                    </Typography>
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

      {/* Management Philosophy */}
      <section className="py-20 bg-bg-muted">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Typography variant="h2" className="mb-4">Our Management Philosophy</Typography>
              <Typography variant="p" className="text-lg text-text-secondary">
                We believe in leading by example, fostering innovation, and creating value for all stakeholders
              </Typography>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Strategic Vision",
                description: "Long-term planning with a focus on sustainable growth and market leadership"
              },
              {
                title: "Innovation Driven",
                description: "Embracing technology and new methodologies to stay ahead of industry trends"
              },
              {
                title: "People First",
                description: "Investing in our team to deliver exceptional results for our clients"
              },
              {
                title: "Global Perspective",
                description: "Understanding diverse markets and cultures to serve international clients"
              },
              {
                title: "Operational Excellence",
                description: "Continuous improvement in processes to deliver efficient and effective solutions"
              },
              {
                title: "Ethical Standards",
                description: "Maintaining the highest level of integrity in all our business practices"
              }
            ].map((philosophy, index) => (
              <ScaleIn key={index} delay={index * 0.05}>
                <Card className="p-6">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mb-4">
                    <Star className="h-6 w-6 text-primary-600" />
                  </div>
                  <Typography variant="h5" className="mb-3">{philosophy.title}</Typography>
                  <Typography variant="p" className="text-text-secondary">
                    {philosophy.description}
                  </Typography>
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
                <Typography variant="h2" className="mb-6 text-white">Connect with Our Team</Typography>
                <Typography variant="p" className="text-primary-100 mb-8 max-w-2xl mx-auto text-lg">
                  Interested in working with our management team? Contact us to learn more.
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

export default Management;
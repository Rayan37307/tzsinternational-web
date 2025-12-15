'use client';

import React, { useState } from 'react';
import { GalleryVerticalEnd, Users, Award, Globe, Calendar, Star, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { Typography } from '@/components/ui/Typography';
import { FadeIn } from '@/components/animation/FadeIn';
import { SlideUp } from '@/components/animation/SlideUp';
import { ScaleIn } from '@/components/animation/ScaleIn';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Gallery = () => {
  // Gallery categories
  const categories = [
    { name: "Events", count: 45, icon: <Calendar className="h-6 w-6 text-primary-600" /> },
    { name: "Team", count: 32, icon: <Users className="h-6 w-6 text-secondary-600" /> },
    { name: "Awards", count: 18, icon: <Award className="h-6 w-6 text-accent-600" /> },
    { name: "Partners", count: 25, icon: <Globe className="h-6 w-6 text-primary-600" /> },
    { name: "Milestones", count: 15, icon: <Star className="h-6 w-6 text-secondary-600" /> },
    { name: "Training", count: 28, icon: <Users className="h-6 w-6 text-accent-600" /> }
  ];

  // Gallery images
  const galleryImages = [
    { id: 1, src: "/placeholder-gallery.jpg", category: "Events", title: "Annual Conference 2023", date: "2023-10-15" },
    { id: 2, src: "/placeholder-gallery.jpg", category: "Team", title: "Team Meeting", date: "2023-09-20" },
    { id: 3, src: "/placeholder-gallery.jpg", category: "Awards", title: "Best Recruitment Award", date: "2023-07-10" },
    { id: 4, src: "/placeholder-gallery.jpg", category: "Partners", title: "Partner Meeting", date: "2023-08-05" },
    { id: 5, src: "/placeholder-gallery.jpg", category: "Milestones", title: "5000th Placement", date: "2023-06-30" },
    { id: 6, src: "/placeholder-gallery.jpg", category: "Events", title: "International Summit", date: "2023-11-12" },
    { id: 7, src: "/placeholder-gallery.jpg", category: "Team", title: "Office Celebration", date: "2023-05-22" },
    { id: 8, src: "/placeholder-gallery.jpg", category: "Awards", title: "Global Recognition", date: "2023-04-18" },
    { id: 9, src: "/placeholder-gallery.jpg", category: "Partners", title: "New Partnership", date: "2023-03-15" },
    { id: 10, src: "/placeholder-gallery.jpg", category: "Milestones", title: "15 Years of Excellence", date: "2023-02-10" },
    { id: 11, src: "/placeholder-gallery.jpg", category: "Events", title: "Training Session", date: "2023-01-25" },
    { id: 12, src: "/placeholder-gallery.jpg", category: "Team", title: "Annual Retreat", date: "2022-12-15" },
    { id: 13, src: "/placeholder-gallery.jpg", category: "Training", title: "Development Workshop", date: "2023-11-20" },
    { id: 14, src: "/placeholder-gallery.jpg", category: "Awards", title: "Innovation Award", date: "2023-10-05" },
    { id: 15, src: "/placeholder-gallery.jpg", category: "Events", title: "Charity Drive", date: "2023-09-10" },
    { id: 16, src: "/placeholder-gallery.jpg", category: "Team", title: "New Hires Welcome", date: "2023-08-25" }
  ];

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Filter images based on selected category
  const filteredImages = selectedCategory 
    ? galleryImages.filter(img => img.category === selectedCategory) 
    : galleryImages;

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
                Our <span className="text-primary-600">Gallery</span>
              </Typography>
              <Typography variant="p" className="text-lg text-text-secondary mb-10">
                Visual journey through our achievements, events, and milestones.
              </Typography>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <ScaleIn key={index} delay={index * 0.1}>
                <Card className="text-center p-6">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mx-auto mb-4">
                    {category.icon}
                  </div>
                  <Typography variant="span" className="text-2xl font-bold text-primary-600">{category.count}</Typography>
                  <Typography variant="p" className="text-text-secondary mt-1">{category.name}</Typography>
                </Card>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                selectedCategory === null
                  ? 'bg-primary-600 text-white'
                  : 'bg-bg-card text-text-secondary hover:bg-bg-muted'
              }`}
            >
              All Photos
            </button>
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-4 py-2 rounded-full text-sm font-medium flex items-center ${
                  selectedCategory === category.name
                    ? 'bg-primary-600 text-white'
                    : 'bg-bg-card text-text-secondary hover:bg-bg-muted'
                }`}
              >
                {category.icon}
                <span className="ml-2">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SlideUp>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <Typography variant="h2" className="mb-4">Visual Memories</Typography>
              <Typography variant="p" className="text-lg text-text-secondary">
                A collection of our most memorable moments
              </Typography>
            </div>
          </SlideUp>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <ScaleIn key={image.id} delay={image.id * 0.05}>
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="cursor-pointer"
                  onClick={() => setSelectedImage(image.id)}
                >
                  <Card className="overflow-hidden group">
                    <div className="relative">
                      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64" />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <Button variant="outline" className="text-white border-white">
                            <GalleryVerticalEnd className="h-4 w-4 mr-2" />
                            View
                          </Button>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <Typography variant="h5" className="font-semibold">{image.title}</Typography>
                          <Typography variant="p" className="text-text-secondary text-sm">{image.category}</Typography>
                        </div>
                        <Typography variant="p" className="text-text-secondary text-sm">
                          {new Date(image.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                        </Typography>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full max-h-[90vh] bg-bg-card rounded-2xl overflow-hidden">
            <button 
              className="absolute top-4 right-4 z-10 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-6 w-6" />
            </button>
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96" />
            <div className="p-6">
              <Typography variant="h3" className="mb-2">
                {galleryImages.find(img => img.id === selectedImage)?.title}
              </Typography>
              <div className="flex justify-between items-center">
                <div>
                  <Typography variant="p" className="text-text-secondary">
                    {galleryImages.find(img => img.id === selectedImage)?.category}
                  </Typography>
                </div>
                <Typography variant="p" className="text-text-secondary">
                  {new Date(galleryImages.find(img => img.id === selectedImage)?.date || '').toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </Typography>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Milestones Section */}
      <section className="py-20 bg-bg-muted">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <Typography variant="h2" className="mb-4">Our Milestone Moments</Typography>
              <Typography variant="p" className="text-lg text-text-secondary">
                Key moments that shaped our journey of success
              </Typography>
            </div>
          </FadeIn>
          
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
                <Typography variant="h2" className="mb-6 text-white">Explore Our Journey</Typography>
                <Typography variant="p" className="text-primary-100 mb-8 max-w-2xl mx-auto text-lg">
                  Discover more about our history, achievements, and partnerships.
                </Typography>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button size="xl" className="bg-white text-primary-600 hover:bg-gray-100">
                    View More Photos
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

export default Gallery;
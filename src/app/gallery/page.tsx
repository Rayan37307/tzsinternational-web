'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Gallery = () => {
  // Simple gallery images (no text or metadata)
  const galleryImages = [
    { id: 1, src: "/gallery1.jpeg" },
    { id: 2, src: "/gallery2.jpeg" },
  ];

  return (
    <div className="min-h-screen bg-bg-main">
      <Navbar />
      <div className="pt-24" /> {/* Space for fixed navbar */}

      {/* Gallery Title */}
      <section className="py-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-text-main mb-4">Gallery</h1>
        </div>
      </section>

      {/* Simple Gallery Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryImages.map((image) => (
              <motion.div
                key={image.id}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={image.src}
                  alt={`Gallery image ${image.id}`}
                  className="w-full h-64 object-cover rounded-lg shadow-md cursor-pointer"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;

'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Send, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Typography } from '@/components/ui/Typography';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const services = [
    'Manpower Sourcing & Placement',
    'Bulk International Recruitment',
    'Specialized Skill Recruitment',
    'Skill Development & Training',
    'Foreign Language Training',
  ];

  return (
    <footer className="bg-bg-card text-text-main border-t border-border-light">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <Image
                src="/logo.png"
                alt="Greenland Overseas Logo"
                width={180}
                height={40}
                className="h-10 w-auto"
              />
            </div>
            <Typography variant="p" className="text-text-secondary mb-6">
              Connecting people with possibilities through our comprehensive recruitment and manpower solutions.
            </Typography>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <Typography variant="h5" className="text-lg font-semibold mb-5 text-text-main">Our Services</Typography>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mr-3 mt-2"></span>
                  <Typography variant="p" className="text-text-secondary">{service}</Typography>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <Typography variant="h5" className="text-lg font-semibold mb-5 text-text-main">Corporate Office</Typography>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="text-primary-500 mr-3 mt-1 flex-shrink-0" size={18} />
                <span className="text-text-secondary">
                  JL Bhaban, 1 Gulshan Avenue,<br />
                  Gulshan-1, Dhaka-1212,<br />
                  Bangladesh
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="text-primary-500 mr-3 flex-shrink-0" size={18} />
                <Link href="tel:+8801731883700" className="text-text-secondary hover:text-primary-700">
                  +880 1731-883700
                </Link>
              </li>
              <li className="flex items-center">
                <Mail className="text-primary-500 mr-3 flex-shrink-0" size={18} />
                <Link href="mailto:info@greenlandoverseas.com" className="text-text-secondary hover:text-primary-700">
                  info@greenlandoverseas.com
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <Typography variant="h5" className="text-lg font-semibold mb-5 text-text-main">Quick Links</Typography>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-text-secondary hover:text-primary-700 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border-light mt-12 pt-8 text-center text-sm text-text-secondary">
          <p>
            &copy; {currentYear} Greenland Overseas (RL-040). All rights reserved.
          </p>
        </div>

        {/* WhatsApp Widget */}
        <motion.div 
          className="fixed bottom-6 right-6 z-50"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, type: "spring", stiffness: 200 }}
        >
          <Link
            href="https://wa.me/8801731883700"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors flex items-center justify-center"
            aria-label="Chat with us on WhatsApp"
          >
            <Send className="h-6 w-6" />
          </Link>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
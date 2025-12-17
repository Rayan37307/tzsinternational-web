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
    { name: 'About', href: '/about' },
    { name: 'Why Choose Us', href: '/whychoose' },
    { name: 'Our Clients', href: '/our-clients' },
    { name: 'Gallery', href: '/gallery' },
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
                alt="TZS International Logo"
                width={180}
                height={40}
                className="h-10 w-auto"
              />
            </div>
            <Typography variant="p" className="text-text-secondary mb-6">
              Connecting people with possibilities through our comprehensive recruitment and manpower solutions.
            </Typography>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/share/1E6NUGYre8/" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Facebook className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://www.instagram.com/tzsinternational?igsh=MThpMm5nNDE2OW0wbw==" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Instagram className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://www.tiktok.com/@tzs.international?_r=1&_t=ZS-92Is3FT379o" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.13-.05-2.29-.32-3.31-.86-2.27-1.16-3.97-3.47-4.01-5.67-.06-2.2.93-4.8 2.2-6.54zm-.4 8.32c.05 1.56-.32 3.27-1.28 4.6-1.01 1.32-2.75 2.16-4.3 1.99-1.2-.13-2.4-.62-3.3-1.4-.67-.65-1.49-1.78-1.32-2.64.07-.52.75-.98 1.28-.98.68 0 1.26.22 1.78.44.75.31 1.36.75 1.84 1.3.48.55.84 1.2 1.05 1.89.2.69.25 1.4.15 2.11-.09.71-.33 1.41-.73 2.02-.4.61-.94 1.12-1.57 1.49-.63.37-1.36.59-2.07.63-.71.04-1.42-.04-2.1-.25-.68-.21-1.32-.57-1.85-1.04-.52-.47-.93-1.07-1.17-1.72-.24-.65-.3-1.35-.18-2.03.12-.68.41-1.34.85-1.89.44-.55 1.04-1 1.72-1.25.68-.25 1.42-.29 2.11-.13.69.16 1.33.53 1.8 1.06.47.53.75 1.2.82 1.87.07.67-.07 1.36-.4 1.95-.33.59-.85 1.07-1.47 1.36-.62.29-1.32.39-1.99.29-.67-.1-1.3-.4-1.82-.87-.52-.47-.9-1.09-1.09-1.76-.05-.67.09-1.35.4-1.94.31-.59.79-1.08 1.37-1.4.58-.32 1.25-.48 1.88-.45.63.03 1.25.26 1.76.64.51.38.9 1.01 1.06 1.61z"/>
                  </svg>
                </Button>
              </Link>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Twitter className="h-5 w-5" />
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
                  Khandakar Amin Uddin Bhaban (Lift - 5), Madhani Avenue, 100 fit, Notun Bazar,Vatara, Gulshan, Dhaka-1212, Bangladesh
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="text-primary-500 mr-3 flex-shrink-0" size={18} />
                <Link href="tel:+8801618-008842" className="text-text-secondary hover:text-primary-700">
                  +880 1618-008842
                </Link>
              </li>
              <li className="flex items-center">
                <Mail className="text-primary-500 mr-3 flex-shrink-0" size={18} />
                <Link href="mailto:info@greenlandoverseas.com" className="text-text-secondary hover:text-primary-700">
                  tzsinternationalbd@gmail.com
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
              <li className="mt-3">
                <span className="text-text-secondary text-sm font-medium">About Subpages:</span>
                <ul className="mt-2 space-y-1 pl-4">
                  <li><Link href="/founders-legacy" className="text-text-secondary hover:text-primary-700 transition-colors text-sm">Founder's Legacy</Link></li>
                  <li><Link href="/management" className="text-text-secondary hover:text-primary-700 transition-colors text-sm">Management</Link></li>
                </ul>
              </li>
              <li className="mt-3">
                <span className="text-text-secondary text-sm font-medium">Workmanship Subpages:</span>
                <ul className="mt-2 space-y-1 pl-4">
                  <li><Link href="/recuitmentpolicy" className="text-text-secondary hover:text-primary-700 transition-colors text-sm">Recruitment Policy</Link></li>
                  <li><Link href="/appreciation" className="text-text-secondary hover:text-primary-700 transition-colors text-sm">Appreciation</Link></li>
                </ul>
              </li>
              <li className="mt-3">
                <Link href="/licence" className="text-text-secondary hover:text-primary-700 transition-colors">Licence</Link>
              </li>
              <li>
                <Link href="/document" className="text-text-secondary hover:text-primary-700 transition-colors">Document</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border-light mt-12 pt-8 text-center text-sm text-text-secondary">
          <p>
            &copy; {currentYear} TZS International (RL-040). All rights reserved.
          </p>
        </div>

        {/* WhatsApp Widget */}
        <motion.div 
          className="fixed bottom-6 right-6 z-50"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, type: "spring", stiffness: 200 }}
        >
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

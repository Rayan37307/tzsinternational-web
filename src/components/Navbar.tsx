'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const menuItems = [
  { name: 'Home', href: '/' },
  {
    name: 'About',
    href: '/about',
    submenu: [
      { name: 'Founder\'s Legacy', href: '/founders-legacy' },
      { name: 'Management', href: '/management' }
    ]
  },
  {
    name: 'Workmanship',
    href: '#',
    submenu: [
      { name: 'Why Choose Us', href: '/whychoose' },
      { name: 'Recruitment Policy', href: '/recuitmentpolicy' },
      { name: 'Appreciation', href: '/appreciation' }
    ]
  },
  // { name: 'Licence', href: '/licence' },
  // { name: 'Document', href: '/document' },
  { name: 'Our Clients', href: '/our-clients' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact Us', href: '/contact' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        // Add a small delay to prevent flickering when at the very top
        timeoutId = setTimeout(() => setScrolled(false), 10);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const isActive = (href: string) => {
    if (!pathname) return false;
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href) && href !== '/';
  };

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : (name || null));
  };

  const isActiveSubmenu = (submenuItems: {name: string, href: string}[]) => {
    return submenuItems.some(item => isActive(item.href));
  };

  return (
    <motion.header
      className={`fixed top-6 left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] max-w-6xl z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-bg-card/80 backdrop-blur-xl shadow-lg py-3 rounded-2xl'
          : 'bg-bg-card/50 backdrop-blur-md py-4 rounded-2xl'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="flex items-center">
              <Image
                src="/logo.png"
                alt="TZS International Logo"
                width={210}
                height={82}
                className="h-12 w-auto transition-transform hover:scale-105"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.submenu ? (
                  <>
                    <button
                      className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 relative flex items-center ${
                        activeDropdown === item.name || isActiveSubmenu(item.submenu)
                          ? 'text-primary-600'
                          : 'text-text-secondary hover:text-primary-600'
                      }`}
                      onClick={() => toggleDropdown(item.name)}
                    >
                      {item.name}
                      <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    </button>

                    {/* Submenu */}
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          className="absolute top-full left-0 mt-2 w-48 bg-bg-card rounded-xl shadow-lg py-2 z-50 border border-border-light/50 backdrop-blur-md"
                          initial={{ opacity: 0, y: -10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                        >
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className={`block px-4 py-2 text-sm transition-all ${
                                isActive(subItem.href)
                                  ? 'text-primary-600 bg-primary-50'
                                  : 'text-text-secondary hover:text-primary-600 hover:bg-bg-muted'
                              }`}
                              onClick={() => {
                                setActiveDropdown(null);
                              }}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 relative ${
                      isActive(item.href)
                        ? 'text-primary-600'
                        : 'text-text-secondary hover:text-primary-600'
                    }`}
                  >
                    {item.name}
                    {isActive(item.href) && (
                      <motion.div
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-600 rounded-full"
                        layoutId="activeNavLink"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className={`px-6 py-2.5 rounded-xl bg-gradient-modern text-white font-medium transition-all duration-300 hover:shadow-lg`}
              >
                Get Started
              </Link>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-xl text-text-secondary bg-bg-card/80 backdrop-blur-sm hover:bg-bg-card focus:outline-none focus:ring-2 focus:ring-primary-500"
              aria-expanded={isMenuOpen}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </motion.button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="lg:hidden mt-4 pb-4 border-t border-border-light/50 pt-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="flex flex-col space-y-3">
                {menuItems.map((item) => (
                  <div key={item.name}>
                    {item.submenu ? (
                      <div>
                        <button
                          className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all flex justify-between items-center ${
                            isActiveSubmenu(item.submenu)
                              ? 'text-primary-600 bg-primary-50'
                              : 'text-text-secondary hover:text-primary-600 hover:bg-bg-muted'
                          }`}
                          onClick={() => toggleDropdown(item.name === activeDropdown ? '' : item.name)}
                        >
                          <span>{item.name}</span>
                          <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${
                            activeDropdown === item.name ? 'rotate-180' : ''
                          }`} />
                        </button>

                        {/* Mobile Submenu */}
                        {activeDropdown === item.name && (
                          <div className="pl-6 mt-2 space-y-2">
                            {item.submenu.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className={`block px-4 py-2 rounded-xl text-base transition-all ${
                                  isActive(subItem.href)
                                    ? 'text-primary-600 bg-primary-50'
                                    : 'text-text-secondary hover:text-primary-600 hover:bg-bg-muted'
                                }`}
                                onClick={() => {
                                  setIsMenuOpen(false);
                                  setActiveDropdown(null);
                                }}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className={`px-4 py-3 rounded-xl text-base font-medium transition-all ${
                          isActive(item.href)
                            ? 'text-primary-600 bg-primary-50'
                            : 'text-text-secondary hover:text-primary-600 hover:bg-bg-muted'
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <span className="relative">
                          {item.name}
                          {isActive(item.href) && (
                            <motion.div
                              className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-600 rounded-full"
                              layoutId="activeNavLinkMobile"
                              transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                          )}
                        </span>
                      </Link>
                    )}
                  </div>
                ))}
                <div className="pt-4">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      href="/contact"
                      className={`w-full block text-center px-6 py-3 rounded-xl bg-gradient-modern text-white font-medium transition-all duration-300 hover:shadow-lg`}
                    >
                      Get Started
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Navbar;

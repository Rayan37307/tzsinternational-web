"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import { usePathname } from "next/navigation";

import { Menu, X } from "lucide-react";
import gsap from "gsap";

import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const menuItems = [
  {
    name: "Home",
    href: "/",
  },

  {
    name: "Services",
    href: "/#services",
  },

  {
    name: "Tours",
    href: "/tours",
  },

  {
    name: "Blog",
    href: "/blog",
  },

  {
    name: "About",
    href: "/#about",
  },

  {
    name: "Contact",
    href: "/#contact",
  },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const navbarRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // GSAP animation for navbar on mount
  useEffect(() => {
    const navbar = navbarRef.current;

    if (navbar) {
      gsap.fromTo(
        navbar,
        {
          y: -100,
          opacity: 0,
        },

        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
        }
      );
    }
  }, []);

  // GSAP animation for mobile menu
  useEffect(() => {
    const mobileMenu = mobileMenuRef.current;

    if (mobileMenu) {
      if (isMenuOpen) {
        gsap.fromTo(
          mobileMenu.querySelectorAll("a"),
          {
            y: 20,
            opacity: 0,
          },

          {
            y: 0,
            opacity: 1,
            duration: 0.4,
            stagger: 0.1,
            ease: "power2.out",
          }
        );
      }
    }
  }, [isMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Scroll to top function
  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 800,
      smooth: "easeInOutQuart",
    });
  };

  // Check if link is active
  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href) && href !== "/";
  };

  // Check if the link is a hash/anchor link
  const isHashLink = (href: string) => {
    return href.includes("#");
  };

  return (
    <header
      ref={navbarRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-teal-800 dark:bg-gray-900 backdrop-blur-sm shadow-lg"
          : "bg-teal-800 dark:bg-gray-900"
      }`}
    >
      {" "}
      <div className="container mx-auto px-4">
        {" "}
        <nav className="flex justify-between items-center py-4">
          {" "}
          {/* Logo */}
          <div className="flex-shrink-0 z-10">
            {" "}
            <div
              onClick={scrollToTop}
              className="flex items-center cursor-pointer"
              onMouseEnter={(e) => {
                gsap.to(e.currentTarget.querySelector("img"), {
                  scale: 1.05,
                  duration: 0.3,
                  ease: "power2.out",
                });
              }}
              onMouseLeave={(e) => {
                gsap.to(e.currentTarget.querySelector("img"), {
                  scale: 1,
                  duration: 0.3,
                  ease: "power2.out",
                });
              }}
            >
              {" "}
              <Image
                src="/logo.png"
                alt="Logo"
                width={200}
                height={30}
                className="transition-transform"
              />{" "}
            </div>{" "}
          </div>{" "}
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {" "}
            {menuItems.map((item) =>
              isHashLink(item.href) ? (
                <ScrollLink
                  key={item.name}
                  to={item.href.substring(1)}
                  // Remove the # character
                  spy={true}
                  smooth={true}
                  offset={-80}
                  // Offset for the navbar height
                  duration={800}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 cursor-pointer ${
                    isActive(item.href)
                      ? "text-secondary-300"
                      : "text-gray-100 hover:text-white hover:bg-primary-900"
                  }`}
                >
                  {" "}
                  {item.name}
                </ScrollLink>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? "text-secondary-300"
                      : "text-gray-100 hover:text-white hover:bg-primary-900"
                  }`}
                >
                  {" "}
                  {item.name}
                </Link>
              )
            )}
          </div>{" "}
          {/* CTA Button */}
          <div className="hidden md:block">
            {" "}
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              offset={-80}
              duration={800}
              className="py-2 px-4 bg-gradient-to-r from-secondary-600 to-secondary-500 text-white rounded-md hover:from-secondary-700 hover:to-secondary-600 transition-all duration-300 flex items-center justify-center text-sm font-medium shadow-md hover:shadow-lg cursor-pointer"
            >
              {" "}
              Contact Now{" "}
            </ScrollLink>{" "}
          </div>{" "}
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            {" "}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-primary-800 focus:outline-none"
              aria-expanded={isMenuOpen}
            >
              {" "}
              <span className="sr-only">Open main menu</span>{" "}
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>{" "}
          </div>{" "}
        </nav>{" "}
      </div>{" "}
      {/* Mobile menu, show/hide based on menu state */}
      <div
        ref={mobileMenuRef}
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "max-h-screen opacity-100 visible"
            : "max-h-0 opacity-0 invisible"
        } overflow-hidden bg-primary-800 dark:bg-gray-900`}
      >
        {" "}
        <div className="px-4 pt-2 pb-4 space-y-1 border-t border-primary-700 dark:border-gray-700">
          {" "}
          {menuItems.map((item) =>
            isHashLink(item.href) ? (
              <ScrollLink
                key={item.name}
                to={item.href.substring(1)}
                // Remove the # character
                spy={true}
                smooth={true}
                offset={-70}
                // Offset for the navbar height
                duration={800}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium cursor-pointer ${
                  isActive(item.href)
                    ? "text-secondary-300 bg-primary-900 dark:bg-gray-800"
                    : "text-gray-100 hover:text-white hover:bg-primary-900 dark:hover:bg-gray-800"
                }`}
              >
                {" "}
                {item.name}
              </ScrollLink>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(item.href)
                    ? "text-secondary-300 bg-primary-900 dark:bg-gray-800"
                    : "text-gray-100 hover:text-white hover:bg-primary-900 dark:hover:bg-gray-800"
                }`}
              >
                {" "}
                {item.name}
              </Link>
            )
          )}
          <div className="flex items-center justify-center mt-4">
            {" "}
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
              onClick={() => setIsMenuOpen(false)}
              className="block w-full py-2 px-4 bg-gradient-to-r from-secondary-600 to-secondary-500 text-white rounded-md hover:from-secondary-700 hover:to-secondary-600 transition-all duration-300 text-center text-base font-medium shadow-md cursor-pointer"
            >
              {" "}
              Contact Now{" "}
            </ScrollLink>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </header>
  );
}

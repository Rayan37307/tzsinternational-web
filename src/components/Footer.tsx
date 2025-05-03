import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <Image
                src="/logo.png"
                alt="Tzsinternational"
                width={160}
                height={40}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-primary-200 mb-6">
              Your trusted partner for international travel and education,
              creating unforgettable experiences since 2010.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-primary-700 flex items-center justify-center text-secondary-400 hover:bg-primary-600 transition-colors"
              >
                <span className="text-xs font-bold">FB</span>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-primary-700 flex items-center justify-center text-secondary-400 hover:bg-primary-600 transition-colors"
              >
                <span className="text-xs font-bold">TW</span>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-primary-700 flex items-center justify-center text-secondary-400 hover:bg-primary-600 transition-colors"
              >
                <span className="text-xs font-bold">IG</span>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-primary-700 flex items-center justify-center text-secondary-400 hover:bg-primary-600 transition-colors"
              >
                <span className="text-xs font-bold">LI</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-5 text-white">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-primary-200 hover:text-secondary-300 transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-secondary-500 rounded-full mr-2"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/tours"
                  className="text-primary-200 hover:text-secondary-300 transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-secondary-500 rounded-full mr-2"></span>
                  Tours
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-primary-200 hover:text-secondary-300 transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-secondary-500 rounded-full mr-2"></span>
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-primary-200 hover:text-secondary-300 transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-secondary-500 rounded-full mr-2"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-primary-200 hover:text-secondary-300 transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-secondary-500 rounded-full mr-2"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-5 text-white">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin
                  className="text-secondary-500 mr-3 mt-1 flex-shrink-0"
                  size={18}
                />
                <span className="text-primary-200">
                  123 Main Street, City, Country
                </span>
              </li>
              <li className="flex items-center">
                <Phone
                  className="text-secondary-500 mr-3 flex-shrink-0"
                  size={18}
                />
                <span className="text-primary-200">+1 234 567 890</span>
              </li>
              <li className="flex items-center">
                <Mail
                  className="text-secondary-500 mr-3 flex-shrink-0"
                  size={18}
                />
                <span className="text-primary-200">
                  info@tzsinternational.com
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-5 text-white">
              Newsletter
            </h4>
            <p className="text-primary-200 mb-4">
              Subscribe to our newsletter to receive updates and travel tips.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 bg-primary-700 text-white rounded-l-md focus:outline-none focus:ring-1 focus:ring-secondary-500 w-full border border-primary-600"
              />
              <button
                type="submit"
                className="bg-secondary-600 hover:bg-secondary-700 text-white px-3 py-2 rounded-r-md transition-colors"
              >
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-700 mt-12 pt-8 text-center text-sm text-primary-300">
          <p>
            &copy; {new Date().getFullYear()} Tzsinternational. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

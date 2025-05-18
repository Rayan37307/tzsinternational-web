import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Send, Globe } from "lucide-react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <Image
                src="/logo.png"
                alt="TZS International"
                width={160}
                height={40}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-gray-400 mb-6">
              Your trusted partner for international travel, recruitment, and education services.
            </p>
            <div className="flex space-x-4">
              <Link href="#"
                className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-gray-300 hover:bg-slate-700 transition-colors">
                <Facebook size={16} />
              </Link>
              <Link href="#"
                className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-gray-300 hover:bg-slate-700 transition-colors">
                <Twitter size={16} />
              </Link>
              <Link href="#"
                className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-gray-300 hover:bg-slate-700 transition-colors"
              >
                <Instagram size={16} />
              </Link>
              <Link href="#"
                className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-gray-300 hover:bg-slate-700 transition-colors"
              >
                <Linkedin size={16} />
              </Link>
            </div>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-lg font-semibold mb-5 text-white">Our Services</h4>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-secondary-500 rounded-full mr-2"></span>
                    Air Ticketing
                  </li>
                                    <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-secondary-500 rounded-full mr-2"></span>
                    Manpower
                  </li>
                                    <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-secondary-500 rounded-full mr-2"></span>
                    Recruitment
                  </li>
                                    <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-secondary-500 rounded-full mr-2"></span>
                    Work Visa
                  </li>
                                    <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-secondary-500 rounded-full mr-2"></span>
                    Visa Processing
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-secondary-500 rounded-full mr-2"></span>
                    Tourist Visa
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-secondary-500 rounded-full mr-2"></span>
                    Tour Packages
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-secondary-500 rounded-full mr-2"></span>
                    Medical Services
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-secondary-500 rounded-full mr-2"></span>
                    Study Abroad
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-secondary-500 rounded-full mr-2"></span>
                    Hajj & Umrah
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-5 text-white">Location</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin
                  className="text-secondary-500 mr-3 mt-1 flex-shrink-0"
                  size={18}
                />
                <span className="text-gray-400">
                  Khandakar Amin Uddin Bhaban, Lift-5 Madhani Avenue,<br />
                  100 Fit, Notun Bazar Vatara,<br />
                  Gulshan, Dhaka-1212, Bangladesh
                </span>
              </li>
              <li className="flex items-center">
                <Phone
                  className="text-secondary-500 mr-3 flex-shrink-0"
                  size={18}
                />
                <Link href="tel:+8801731883700" className="text-gray-400 hover:text-secondary-300">
                  +880 1731-883700
                </Link>
              </li>
              <li className="flex items-center">
                <Mail
                  className="text-secondary-500 mr-3 flex-shrink-0"
                  size={18}
                />
                <Link  href="mailto:tzsinternationalbd@gmail.com" className="text-gray-400 hover:text-secondary-300">
                  tzsinternationalbd@gmail.com
                </Link>
              </li>
              <li className="flex items-center">
                <Globe className="text-secondary-500 mr-3 flex-shrink-0" size={18} />
                <Link href="https://tzsinternationalbd.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-secondary-300">
                  tzsinternationalbd.com
                </Link>
              </li>
              <li className="flex items-center">
                <Globe className="text-secondary-500 mr-3 flex-shrink-0" size={18} />
                <Link href="https://dreamersclick.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-secondary-300">
                  dreamersclick.com
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-5 text-white">
              Connect With TZS International
            </h4>
            <p className="text-gray-400 mb-4">
              Follow us for updates on travel opportunities, visa news, and special offers.
            </p>
            <div className="mb-4">
              <span className="text-gray-400">Socials:</span>
              <div className="flex mt-2 space-x-2">
                <Link href="#" className="text-gray-400 hover:text-secondary-300"> 
                  @tzs.international
                </Link>
                <Link href="#" className="text-gray-400 hover:text-secondary-300">
                  @TZSInternational
                </Link>
                <Link href="#" className="text-gray-400 hover:text-secondary-300">
                  @tzsinternational
                </Link>
              </div>
            </div>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 bg-slate-800 text-white rounded-l-md focus:outline-none focus:ring-1 focus:ring-secondary-500 w-full border border-slate-700"
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
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} TZS International. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
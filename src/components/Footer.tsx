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
              <Link href="https://www.facebook.com/share/1AmhrWtTiq/"
                className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-gray-300 hover:bg-slate-700 transition-colors">
                <Facebook size={16} />
              </Link>
{/*               <Link href="#"
                className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-gray-300 hover:bg-slate-700 transition-colors">
                <Twitter size={16} />
              </Link> */}
              <Link href="https://www.instagram.com/tzsinternational?igsh=MThpMm5nNDE2OW0wbw=="
                className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-gray-300 hover:bg-slate-700 transition-colors"
              >
                <Instagram size={16} />
              </Link>
              <Link href="https://www.tiktok.com/@tzs.international?_t=ZS-8yl18ruKZuh&_r=1"
                className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-gray-300 hover:bg-slate-700 transition-colors"
              >
                <Image  src="/tiktok.svg" alt="TZS International" width={16} height={16} />
              </Link>
            </div>
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

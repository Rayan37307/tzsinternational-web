"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FileText,
  Map,
  Settings,
  LogOut,
  Menu,
  X,
  Home,
  User,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";

const navItems = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Blog Posts",
    href: "/dashboard",
    icon: FileText,
  },
  {
    name: "Tour Packages",
    href: "/dashboard/tours",
    icon: Map,
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  return (
    <>
      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={toggleMobileMenu}
          className="p-2 rounded-md bg-white dark:bg-gray-800 shadow-md"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar for desktop and mobile */}
      <div
        className={`
          fixed inset-y-0 left-0 z-40
          w-64 bg-white dark:bg-gray-900 shadow-lg
          transform transition-transform duration-300 ease-in-out
          ${
            isMobileMenuOpen
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          }
        `}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-4 border-b dark:border-gray-700">
            <Link href="/" className="flex items-center gap-2 mb-2">
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                Tzsinternational
              </h1>
            </Link>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Admin Dashboard
              </p>
              <Link
                href="/"
                className="text-sm text-blue-500 hover:text-blue-600 flex items-center gap-1"
              >
                <Home size={14} />
                <span>View Site</span>
              </Link>
            </div>
          </div>

          {/* User Profile */}
          <div className="p-4 border-b dark:border-gray-700">
            <button
              onClick={toggleProfileMenu}
              className="flex items-center justify-between w-full p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
                  <User size={16} />
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium">Admin User</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    admin@example.com
                  </p>
                </div>
              </div>
              <ChevronDown
                size={16}
                className={`transition-transform ${
                  isProfileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isProfileMenuOpen && (
              <div className="mt-2 p-2 bg-gray-50 dark:bg-gray-800 rounded-md">
                <Link
                  href="/dashboard/profile"
                  className="block px-2 py-1 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                  onClick={() => setIsProfileMenuOpen(false)}
                >
                  Profile Settings
                </Link>
                <Link
                  href="/logout"
                  className="block px-2 py-1 text-sm text-red-500 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                  onClick={() => setIsProfileMenuOpen(false)}
                >
                  Logout
                </Link>
              </div>
            )}
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            <p className="text-xs uppercase text-gray-500 dark:text-gray-400 font-semibold mb-2 pl-3">
              Main Navigation
            </p>
            {navItems.map((item) => {
              const isActive =
                item.href === "/dashboard"
                  ? pathname === "/dashboard"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`
                    flex items-center gap-3 px-3 py-2 rounded-md transition-colors
                    ${
                      isActive
                        ? "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
                        : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                    }
                  `}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <item.icon size={18} />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t dark:border-gray-700">
            <div className="text-xs text-gray-500 dark:text-gray-400 mb-2 text-center">
              © {new Date().getFullYear()} Tzsinternational
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

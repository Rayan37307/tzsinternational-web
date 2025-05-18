"use client";

import { usePathname } from "next/navigation";
import Sidebar from "@/components/dashboard/Sidebar";
import { Bell, Search } from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Determine current section title based on pathname
  let sectionTitle = "Dashboard";
  if (pathname.startsWith("/dashboard/tours")) {
    sectionTitle = "Tour Packages";
  } else if (pathname.startsWith("/dashboard/settings")) {
    sectionTitle = "Settings";
  } else if (pathname.startsWith("/dashboard/profile")) {
    sectionTitle = "Profile";
  } else if (
    pathname.startsWith("/dashboard/edit") ||
    pathname.startsWith("/dashboard/new")
  ) {
    sectionTitle = "Blog Posts";
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="lg:pl-64 min-h-screen">
        {/* Header */}
        <header className="bg-gray-800 shadow-sm sticky top-0 z-10">
          <div className="flex items-center justify-between p-4">
            <h1 className="text-xl font-semibold text-white">{sectionTitle}</h1>

            <div className="flex items-center gap-4">
              {/* Search */}
              <div className="relative hidden md:block">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Search size={16} className="text-gray-400" />
                </div>
                <input
                  type="search"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 bg-gray-700 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
                />
              </div>

              {/* Notifications */}
              <button className="p-2 rounded-full hover:bg-gray-700 relative">
                <Bell size={20} />
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-4 md:p-6 max-w-7xl mx-auto">
          {/* Breadcrumbs */}
          <nav className="mb-4 text-sm">
            <ol className="flex items-center space-x-1">
              <li>
                <a
                  href="/dashboard"
                  className="text-blue-500 hover:text-blue-600"
                >
                  Dashboard
                </a>
              </li>

              {pathname !== "/dashboard" && (
                <>
                  <li className="text-gray-500">/</li>
                  {pathname.startsWith("/dashboard/tours") && (
                    <li>
                      {pathname === "/dashboard/tours" ? (
                        <span className="text-gray-300">Tour Packages</span>
                      ) : (
                        <>
                          <a
                            href="/dashboard/tours"
                            className="text-blue-500 hover:text-blue-600"
                          >
                            Tour Packages
                          </a>
                          {(pathname.includes("/edit/") ||
                            pathname.includes("/new")) && (
                            <>
                              <li className="text-gray-500">/</li>
                              <li>
                                <span className="text-gray-300">
                                  {pathname.includes("/new")
                                    ? "New Tour"
                                    : "Edit Tour"}
                                </span>
                              </li>
                            </>
                          )}
                        </>
                      )}
                    </li>
                  )}

                  {(pathname.startsWith("/dashboard/edit/") ||
                    pathname === "/dashboard/new") && (
                    <li>
                      <span className="text-gray-300">
                        {pathname === "/dashboard/new"
                          ? "New Post"
                          : "Edit Post"}
                      </span>
                    </li>
                  )}

                  {pathname.startsWith("/dashboard/settings") && (
                    <li>
                      <span className="text-gray-300">Settings</span>
                    </li>
                  )}
                </>
              )}
            </ol>
          </nav>

          {children}
        </main>
      </div>
    </div>
  );
}

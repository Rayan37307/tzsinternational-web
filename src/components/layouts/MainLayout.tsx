'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { usePathname } from 'next/navigation';

interface MainLayoutProps {
  children: React.ReactNode;
  withNavbar?: boolean;
  withFooter?: boolean;
  withAnimation?: boolean;
}

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  withNavbar = true,
  withFooter = true,
  withAnimation = true,
}) => {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <div className="min-h-screen bg-bg-main text-text-main flex flex-col">
      {withNavbar && <Navbar />}
      
      <main className="flex-grow">
        {withAnimation ? (
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="w-full"
          >
            {children}
          </motion.div>
        ) : (
          <div className="w-full">{children}</div>
        )}
      </main>
      
      {withFooter && <Footer />}
    </div>
  );
};

export { MainLayout };
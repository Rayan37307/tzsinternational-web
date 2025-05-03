"use client";

import React, { ReactNode, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const pageRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  // Run animation when pathname changes
  useEffect(() => {
    // Skip on server-side rendering
    if (typeof window === "undefined" || !pageRef.current || !overlayRef.current) return;

    // Create timeline for page transition
    const tl = gsap.timeline();

    // Animate overlay
    tl.fromTo(
      overlayRef.current,
      { 
        y: "100%", 
        opacity: 0 
      },
      { 
        y: "0%", 
        opacity: 1, 
        duration: 0.4, 
        ease: "power2.inOut" 
      }
    )
    .to(
      overlayRef.current,
      { 
        y: "-100%", 
        opacity: 0, 
        duration: 0.4, 
        delay: 0.1, 
        ease: "power2.inOut" 
      }
    );

    // Animate page content
    tl.fromTo(
      pageRef.current.children,
      { 
        y: 20, 
        opacity: 0 
      },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.6, 
        stagger: 0.1, 
        ease: "power2.out" 
      },
      "-=0.3" // Start slightly before the overlay finishes
    );

  }, [pathname]);

  return (
    <>
      {/* Transition overlay */}
      <div 
        ref={overlayRef}
        className="fixed inset-0 bg-primary-800 z-[100] pointer-events-none opacity-0"
        style={{ transform: "translateY(100%)" }}
      />
      
      {/* Page content */}
      <div ref={pageRef} className="min-h-screen">
        {children}
      </div>
    </>
  );
}

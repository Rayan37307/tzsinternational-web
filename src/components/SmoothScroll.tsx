"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
}

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Skip on server-side rendering
    if (typeof window === "undefined") return;

    // Check if device is mobile or tablet
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );

    // Store the original scroll position
    let scrollY = window.scrollY;

    // Setup smooth scrolling with GSAP (only for desktop)
    const setupSmoothScroll = () => {
      // If mobile device, don't use custom smooth scrolling
      if (isMobile) return;

      const scrollContainer = scrollContainerRef.current;
      if (!scrollContainer) return;

      // Set the height of the scroll container to match the document height
      const setHeight = () => {
        document.body.style.height = `${scrollContainer.scrollHeight}px`;
      };

      // Update scroll position
      const smoothScroll = () => {
        scrollY = window.scrollY;
        gsap.to(scrollContainer, {
          y: -scrollY,
          ease: "power3.out",
          duration: 0.6,
        });
      };

      // Initialize
      setHeight();
      smoothScroll();

      // Event listeners
      window.addEventListener("scroll", smoothScroll);
      window.addEventListener("resize", setHeight);

      // Setup ScrollTrigger for animations
      ScrollTrigger.refresh();

      // Cleanup
      return () => {
        window.removeEventListener("scroll", smoothScroll);
        window.removeEventListener("resize", setHeight);
      };
    };

    // Initialize smooth scrolling
    const cleanup = setupSmoothScroll();

    // Handle anchor links for smooth scrolling
    const handleAnchorLinks = () => {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", (e) => {
          e.preventDefault();
          const targetId = anchor.getAttribute("href");
          if (targetId && targetId !== "#") {
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
              const offsetTop =
                targetElement.getBoundingClientRect().top + window.scrollY;

              // Use different scrolling method based on device
              if (isMobile) {
                // Use native smooth scrolling for mobile
                window.scrollTo({
                  top: offsetTop,
                  behavior: "smooth",
                });
              } else {
                // Use GSAP for desktop
                gsap.to(window, {
                  scrollTo: {
                    y: offsetTop,
                    autoKill: false,
                  },
                  duration: 1,
                  ease: "power3.inOut",
                });
              }
            }
          }
        });
      });
    };

    // Initialize anchor link handling
    handleAnchorLinks();

    return () => {
      if (cleanup) cleanup();
    };
  }, []);

  return (
    <div
      ref={scrollContainerRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        willChange: "transform",
        // Check if we're on the client side to avoid hydration issues
        ...(typeof window !== "undefined" &&
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
          ? { position: "static" } // Use static positioning for mobile
          : { position: "fixed" }), // Use fixed positioning for desktop
      }}
    >
      {children}
    </div>
  );
}

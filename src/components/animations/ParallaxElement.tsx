"use client";

import React, { ReactNode, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ParallaxElementProps {
  children: ReactNode;
  className?: string;
  speed?: number; // Negative values move element up, positive values move it down
  as?: keyof JSX.IntrinsicElements;
}

export default function ParallaxElement({
  children,
  className = "",
  speed = -0.5,
  as: Component = "div",
}: ParallaxElementProps) {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Skip on server-side rendering
    if (typeof window === "undefined" || !elementRef.current) return;

    // Create parallax effect
    gsap.to(elementRef.current, {
      y: () => speed * 100, // Convert speed to pixels
      ease: "none",
      scrollTrigger: {
        trigger: elementRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === elementRef.current) {
          trigger.kill();
        }
      });
    };
  }, [speed]);

  return (
    <Component ref={elementRef} className={className}>
      {children}
    </Component>
  );
}

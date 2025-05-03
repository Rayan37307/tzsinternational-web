"use client";

import React, { ReactNode, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
  delay?: number;
  duration?: number;
  once?: boolean;
}

export default function ScrollReveal({
  children,
  className = "",
  as: Component = "div",
  direction = "up",
  distance = 50,
  delay = 0,
  duration = 0.8,
  once = true,
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Skip on server-side rendering
    if (typeof window === "undefined" || !elementRef.current) return;

    // Set initial position based on direction
    const initialProps: { opacity: number; x?: number; y?: number } = {
      opacity: 0,
    };

    switch (direction) {
      case "up":
        initialProps.y = distance;
        break;
      case "down":
        initialProps.y = -distance;
        break;
      case "left":
        initialProps.x = distance;
        break;
      case "right":
        initialProps.x = -distance;
        break;
    }

    gsap.set(elementRef.current, initialProps);

    // Create scroll trigger animation
    ScrollTrigger.create({
      trigger: elementRef.current,
      start: "top 85%",
      onEnter: () => {
        gsap.to(elementRef.current, {
          opacity: 1,
          x: 0,
          y: 0,
          duration,
          delay,
          ease: "power2.out",
        });
      },
      onLeaveBack: !once
        ? () => {
            gsap.to(elementRef.current, initialProps);
          }
        : undefined,
      once,
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === elementRef.current) {
          trigger.kill();
        }
      });
    };
  }, [direction, distance, delay, duration, once]);

  return (
    <Component ref={elementRef} className={className}>
      {children}
    </Component>
  );
}

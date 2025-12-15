"use client";

import React, { ReactNode, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface AnimatedTextProps {
  children: ReactNode;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
  type?: "chars" | "words" | "lines";
  stagger?: number;
  duration?: number;
  ease?: string;
}

export default function AnimatedText({
  children,
  className = "",
  as: Component = "div",
  type = "words",
  stagger = 0.05,
  duration = 0.7,
  ease = "power2.out",
}: AnimatedTextProps) {
  const textRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Skip on server-side rendering
    if (typeof window === "undefined" || !textRef.current) return;

    // Use SplitType to split text
    const splitText = new SplitType(textRef.current, {
      types: [type],
    });

    // Get the split elements
    const elements = splitText[type];

    if (!elements) return;

    // Set initial state
    gsap.set(elements, { opacity: 0, y: 20 });

    // Create animation
    ScrollTrigger.create({
      trigger: textRef.current,
      start: "top 85%",
      onEnter: () => {
        gsap.to(elements, {
          opacity: 1,
          y: 0,
          duration,
          stagger,
          ease,
        });
      },
      once: true,
    });

    // Cleanup
    return () => {
      if (splitText) {
        splitText.revert();
      }
    };
  }, [type, stagger, duration, ease]);

  return React.createElement(Component, {
    ref: textRef,
    className
  }, children);
}

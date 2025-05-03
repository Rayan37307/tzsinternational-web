"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const useAnimations = () => {
  // Create refs for elements we want to animate
  const fadeInRefs = useRef<(HTMLElement | null)[]>([]);
  const fadeInLeftRefs = useRef<(HTMLElement | null)[]>([]);
  const fadeInRightRefs = useRef<(HTMLElement | null)[]>([]);
  const fadeInUpRefs = useRef<(HTMLElement | null)[]>([]);
  const fadeInDownRefs = useRef<(HTMLElement | null)[]>([]);
  const scaleInRefs = useRef<(HTMLElement | null)[]>([]);
  const staggerRefs = useRef<(HTMLElement | null)[]>([]);

  // Clear refs on unmount
  useEffect(() => {
    return () => {
      fadeInRefs.current = [];
      fadeInLeftRefs.current = [];
      fadeInRightRefs.current = [];
      fadeInUpRefs.current = [];
      fadeInDownRefs.current = [];
      scaleInRefs.current = [];
      staggerRefs.current = [];
    };
  }, []);

  // Add elements to refs
  const addToFadeInRefs = (el: HTMLElement | null) => {
    if (el && !fadeInRefs.current.includes(el)) {
      fadeInRefs.current.push(el);
    }
  };

  const addToFadeInLeftRefs = (el: HTMLElement | null) => {
    if (el && !fadeInLeftRefs.current.includes(el)) {
      fadeInLeftRefs.current.push(el);
    }
  };

  const addToFadeInRightRefs = (el: HTMLElement | null) => {
    if (el && !fadeInRightRefs.current.includes(el)) {
      fadeInRightRefs.current.push(el);
    }
  };

  const addToFadeInUpRefs = (el: HTMLElement | null) => {
    if (el && !fadeInUpRefs.current.includes(el)) {
      fadeInUpRefs.current.push(el);
    }
  };

  const addToFadeInDownRefs = (el: HTMLElement | null) => {
    if (el && !fadeInDownRefs.current.includes(el)) {
      fadeInDownRefs.current.push(el);
    }
  };

  const addToScaleInRefs = (el: HTMLElement | null) => {
    if (el && !scaleInRefs.current.includes(el)) {
      scaleInRefs.current.push(el);
    }
  };

  const addToStaggerRefs = (el: HTMLElement | null) => {
    if (el && !staggerRefs.current.includes(el)) {
      staggerRefs.current.push(el);
    }
  };

  // Initialize animations
  useEffect(() => {
    // Skip on server-side rendering
    if (typeof window === "undefined") return;

    // Create animations for each element
    fadeInRefs.current.forEach((el) => {
      if (!el) return;
      
      gsap.set(el, { opacity: 0 });
      
      ScrollTrigger.create({
        trigger: el,
        start: "top 80%",
        onEnter: () => {
          gsap.to(el, {
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
          });
        },
        once: true,
      });
    });

    fadeInLeftRefs.current.forEach((el) => {
      if (!el) return;
      
      gsap.set(el, { opacity: 0, x: -50 });
      
      ScrollTrigger.create({
        trigger: el,
        start: "top 80%",
        onEnter: () => {
          gsap.to(el, {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power2.out",
          });
        },
        once: true,
      });
    });

    fadeInRightRefs.current.forEach((el) => {
      if (!el) return;
      
      gsap.set(el, { opacity: 0, x: 50 });
      
      ScrollTrigger.create({
        trigger: el,
        start: "top 80%",
        onEnter: () => {
          gsap.to(el, {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power2.out",
          });
        },
        once: true,
      });
    });

    fadeInUpRefs.current.forEach((el) => {
      if (!el) return;
      
      gsap.set(el, { opacity: 0, y: 50 });
      
      ScrollTrigger.create({
        trigger: el,
        start: "top 85%",
        onEnter: () => {
          gsap.to(el, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          });
        },
        once: true,
      });
    });

    fadeInDownRefs.current.forEach((el) => {
      if (!el) return;
      
      gsap.set(el, { opacity: 0, y: -50 });
      
      ScrollTrigger.create({
        trigger: el,
        start: "top 85%",
        onEnter: () => {
          gsap.to(el, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          });
        },
        once: true,
      });
    });

    scaleInRefs.current.forEach((el) => {
      if (!el) return;
      
      gsap.set(el, { opacity: 0, scale: 0.8 });
      
      ScrollTrigger.create({
        trigger: el,
        start: "top 85%",
        onEnter: () => {
          gsap.to(el, {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "back.out(1.7)",
          });
        },
        once: true,
      });
    });

    if (staggerRefs.current.length > 0) {
      const container = staggerRefs.current[0]?.parentElement;
      if (container) {
        gsap.set(staggerRefs.current, { opacity: 0, y: 20 });
        
        ScrollTrigger.create({
          trigger: container,
          start: "top 80%",
          onEnter: () => {
            gsap.to(staggerRefs.current, {
              opacity: 1,
              y: 0,
              duration: 0.5,
              stagger: 0.1,
              ease: "power2.out",
            });
          },
          once: true,
        });
      }
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return {
    addToFadeInRefs,
    addToFadeInLeftRefs,
    addToFadeInRightRefs,
    addToFadeInUpRefs,
    addToFadeInDownRefs,
    addToScaleInRefs,
    addToStaggerRefs,
  };
};

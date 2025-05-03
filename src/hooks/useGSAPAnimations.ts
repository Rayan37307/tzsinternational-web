"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as animations from "@/utils/animations";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type AnimationOptions = {
  delay?: number;
  duration?: number;
  staggerTime?: number;
  speed?: number;
  start?: string;
};

export const useGSAPAnimations = () => {
  const refs = {
    fadeIn: useRef<HTMLElement[]>([]),
    fadeInLeft: useRef<HTMLElement[]>([]),
    fadeInRight: useRef<HTMLElement[]>([]),
    stagger: useRef<HTMLElement[]>([]),
    parallax: useRef<HTMLElement[]>([]),
    textReveal: useRef<HTMLElement[]>([]),
    imageReveal: useRef<HTMLElement[]>([]),
    buttonHover: useRef<HTMLElement[]>([]),
  };

  // Add elements to refs
  const addToRefs = (type: keyof typeof refs, el: HTMLElement | null) => {
    if (el && !refs[type].current.includes(el)) {
      refs[type].current.push(el);
    }
  };

  // Initialize animations
  useEffect(() => {
    // Skip on server-side rendering
    if (typeof window === "undefined") return;

    // Apply animations to all elements in refs
    refs.fadeIn.current.forEach((el) => {
      animations.fadeIn(el);
    });

    refs.fadeInLeft.current.forEach((el) => {
      animations.fadeInLeft(el);
    });

    refs.fadeInRight.current.forEach((el) => {
      animations.fadeInRight(el);
    });

    if (refs.stagger.current.length > 0) {
      animations.staggerElements(refs.stagger.current);
    }

    refs.parallax.current.forEach((el) => {
      animations.parallaxEffect(el);
    });

    refs.textReveal.current.forEach((el) => {
      animations.textReveal(el);
    });

    refs.imageReveal.current.forEach((el) => {
      animations.imageReveal(el);
    });

    refs.buttonHover.current.forEach((el) => {
      animations.buttonHoverAnimation(el);
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Custom animation functions
  const animateFadeIn = (element: HTMLElement, options?: AnimationOptions) => {
    animations.fadeIn(element, options?.delay, options?.duration);
  };

  const animateFadeInLeft = (element: HTMLElement, options?: AnimationOptions) => {
    animations.fadeInLeft(element, options?.delay, options?.duration);
  };

  const animateFadeInRight = (element: HTMLElement, options?: AnimationOptions) => {
    animations.fadeInRight(element, options?.delay, options?.duration);
  };

  const animateStagger = (elements: HTMLElement[] | NodeListOf<Element>, options?: AnimationOptions) => {
    animations.staggerElements(elements, options?.staggerTime, options?.duration);
  };

  const animateParallax = (element: HTMLElement, options?: AnimationOptions) => {
    animations.parallaxEffect(element, options?.speed);
  };

  const scrollTo = (elementId: string, offset: number = 0) => {
    animations.scrollToElement(elementId, offset);
  };

  return {
    refs,
    addToRefs,
    animateFadeIn,
    animateFadeInLeft,
    animateFadeInRight,
    animateStagger,
    animateParallax,
    scrollTo,
  };
};

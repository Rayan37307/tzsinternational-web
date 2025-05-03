import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
}

// Fade in animation
export const fadeIn = (element: HTMLElement, delay: number = 0, duration: number = 0.8) => {
  gsap.fromTo(
    element,
    {
      opacity: 0,
      y: 20,
    },
    {
      opacity: 1,
      y: 0,
      duration,
      delay,
      ease: "power3.out",
    }
  );
};

// Fade in from left animation
export const fadeInLeft = (element: HTMLElement, delay: number = 0, duration: number = 0.8) => {
  gsap.fromTo(
    element,
    {
      opacity: 0,
      x: -50,
    },
    {
      opacity: 1,
      x: 0,
      duration,
      delay,
      ease: "power3.out",
    }
  );
};

// Fade in from right animation
export const fadeInRight = (element: HTMLElement, delay: number = 0, duration: number = 0.8) => {
  gsap.fromTo(
    element,
    {
      opacity: 0,
      x: 50,
    },
    {
      opacity: 1,
      x: 0,
      duration,
      delay,
      ease: "power3.out",
    }
  );
};

// Stagger animation for multiple elements
export const staggerElements = (
  elements: HTMLElement[] | NodeListOf<Element>,
  staggerTime: number = 0.1,
  duration: number = 0.6
) => {
  gsap.fromTo(
    elements,
    {
      opacity: 0,
      y: 20,
    },
    {
      opacity: 1,
      y: 0,
      duration,
      stagger: staggerTime,
      ease: "power2.out",
    }
  );
};

// Scroll to element with smooth animation
export const scrollToElement = (elementId: string, offset: number = 0) => {
  const element = document.getElementById(elementId);
  if (!element) return;

  const offsetTop = element.getBoundingClientRect().top + window.scrollY + offset;
  
  gsap.to(window, {
    scrollTo: {
      y: offsetTop,
      autoKill: false,
    },
    duration: 1,
    ease: "power3.inOut",
  });
};

// Create scroll trigger animation
export const createScrollTrigger = (
  element: HTMLElement,
  animation: gsap.core.Tween,
  trigger: HTMLElement | string = element,
  start: string = "top 80%"
) => {
  return ScrollTrigger.create({
    trigger,
    start,
    animation,
    toggleActions: "play none none reverse",
  });
};

// Parallax effect
export const parallaxEffect = (element: HTMLElement, speed: number = 0.5) => {
  gsap.to(element, {
    y: () => window.innerHeight * speed * -1,
    ease: "none",
    scrollTrigger: {
      trigger: element,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });
};

// Text reveal animation
export const textReveal = (element: HTMLElement, delay: number = 0) => {
  gsap.fromTo(
    element,
    {
      y: 100,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      delay,
      ease: "power4.out",
    }
  );
};

// Image reveal animation
export const imageReveal = (element: HTMLElement, delay: number = 0) => {
  const tl = gsap.timeline({ delay });
  
  tl.fromTo(
    element,
    {
      scale: 1.2,
      opacity: 0,
    },
    {
      scale: 1,
      opacity: 1,
      duration: 1.2,
      ease: "power2.out",
    }
  );
  
  return tl;
};

// Button hover animation
export const buttonHoverAnimation = (button: HTMLElement) => {
  button.addEventListener("mouseenter", () => {
    gsap.to(button, {
      scale: 1.05,
      duration: 0.3,
      ease: "power2.out",
    });
  });
  
  button.addEventListener("mouseleave", () => {
    gsap.to(button, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  });
};

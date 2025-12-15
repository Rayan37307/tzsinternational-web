"use client";

import React, { ReactNode } from "react";
import { useAnimations } from "@/hooks/useAnimations";

type AnimationType = 
  | "fadeIn" 
  | "fadeInLeft" 
  | "fadeInRight" 
  | "fadeInUp" 
  | "fadeInDown" 
  | "scaleIn" 
  | "stagger";

interface AnimatedElementProps {
  children: ReactNode;
  type: AnimationType;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}

const AnimatedElement = React.forwardRef<HTMLElement, AnimatedElementProps>(({
  children,
  type,
  className = "",
  as: Component = "div"
}: AnimatedElementProps, ref) => {
  const {
    addToFadeInRefs,
    addToFadeInLeftRefs,
    addToFadeInRightRefs,
    addToFadeInUpRefs,
    addToFadeInDownRefs,
    addToScaleInRefs,
    addToStaggerRefs,
  } = useAnimations();

  const getRef = (type: AnimationType) => {
    switch (type) {
      case "fadeIn":
        return addToFadeInRefs;
      case "fadeInLeft":
        return addToFadeInLeftRefs;
      case "fadeInRight":
        return addToFadeInRightRefs;
      case "fadeInUp":
        return addToFadeInUpRefs;
      case "fadeInDown":
        return addToFadeInDownRefs;
      case "scaleIn":
        return addToScaleInRefs;
      case "stagger":
        return addToStaggerRefs;
      default:
        return addToFadeInRefs;
    }
  };

  // Combine the animation hook ref with the forwardRef
  const combinedRef = (element: HTMLElement | null) => {
    getRef(type)(element);
  };

  return React.createElement(Component, {
    ref: combinedRef,
    className
  }, children);
});

AnimatedElement.displayName = 'AnimatedElement';

export default AnimatedElement;

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
  as?: keyof JSX.IntrinsicElements;
}

export default function AnimatedElement({
  children,
  type,
  className = "",
  as: Component = "div",
}: AnimatedElementProps) {
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

  return (
    <Component ref={getRef(type)} className={className}>
      {children}
    </Component>
  );
}

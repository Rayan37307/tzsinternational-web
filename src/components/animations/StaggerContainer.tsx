"use client";

import React, { ReactNode, Children, cloneElement, isValidElement } from "react";
import { useAnimations } from "@/hooks/useAnimations";

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  childClassName?: string;
}

export default function StaggerContainer({
  children,
  className = "",
  as: Component = "div",
  childClassName = "",
}: StaggerContainerProps) {
  const { addToStaggerRefs } = useAnimations();

  // Clone children and add ref to each child
  const childrenWithRefs = Children.map(children, (child) => {
    if (isValidElement(child)) {
      return cloneElement(child, {
        ref: addToStaggerRefs,
        className: `${child.props.className || ""} ${childClassName}`.trim(),
      });
    }
    return child;
  });

  return <Component className={className}>{childrenWithRefs}</Component>;
}

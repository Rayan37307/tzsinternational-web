"use client";

import React, { ReactNode, Children, cloneElement, isValidElement } from "react";
import { useAnimations } from "@/hooks/useAnimations";

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
  childClassName?: string;
}

export default function StaggerContainer({
  children,
  className = "",
  as: Component = "div",
  childClassName = "",
}: StaggerContainerProps) {
  const { addToStaggerRefs } = useAnimations();

  // Clone children and add ref using React.createElement
  const childrenWithRefs = Children.map(children, (child, index) => {
    if (isValidElement(child)) {
      const props = child.props as Record<string, any>;
      const newProps: any = {};
      // Copy all existing props
      Object.keys(props).forEach(key => {
        if (key !== 'ref') {
          newProps[key] = props[key];
        }
      });
      // Add the new ref and className
      newProps.ref = addToStaggerRefs;
      newProps.key = index;
      newProps.className = `${props.className || ""} ${childClassName}`.trim();
      return React.createElement(child.type, newProps);
    }
    return child;
  });

  return React.createElement(Component, {
    className
  }, childrenWithRefs);
}

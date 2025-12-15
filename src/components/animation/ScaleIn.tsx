'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ScaleInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  initialScale?: number;
  className?: string;
}

const ScaleIn = ({
  children,
  delay = 0,
  duration = 0.4,
  initialScale = 0.8,
  className = '',
}: ScaleInProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: initialScale }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration, delay, ease: "easeOut" }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export { ScaleIn };
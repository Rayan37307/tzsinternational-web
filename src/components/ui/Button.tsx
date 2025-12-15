'use client';

import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-full text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 whitespace-nowrap sleek-transition',
  {
    variants: {
      variant: {
        default: 'bg-primary-600 text-white hover:bg-primary-700 hover:shadow-lg',
        destructive: 'bg-red-500 text-white hover:bg-red-600',
        outline: 'border border-primary-600 bg-transparent text-primary-600 hover:bg-primary-50',
        secondary: 'bg-secondary-600 text-white hover:bg-secondary-700 hover:shadow-lg',
        ghost: 'hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-50',
        link: 'text-primary-600 underline-offset-4 hover:underline',
        gradient: 'bg-gradient-modern text-white hover:opacity-90 hover:shadow-lg',
      },
      size: {
        default: 'h-10 px-6 py-2',
        sm: 'h-9 px-4 py-2',
        lg: 'h-12 px-8 py-3 text-base',
        xl: 'h-14 px-8 py-4 text-lg',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, loading, children, ...props }, ref) => {
    return (
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        disabled={loading}
        {...props}
      >
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Loading
          </>
        ) : (
          children
        )}
      </motion.button>
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
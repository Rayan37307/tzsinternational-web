'use client';

import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-primary-100 text-primary-700 hover:bg-primary-200 dark:bg-primary-900 dark:text-primary-50',
        secondary:
          'border-transparent bg-secondary-100 text-secondary-700 hover:bg-secondary-200 dark:bg-secondary-900 dark:text-secondary-50',
        destructive:
          'border-transparent bg-destructive-100 text-destructive-700 hover:bg-destructive-200 dark:bg-destructive-900 dark:text-destructive-50',
        outline: 'text-foreground',
        success: 'border-transparent bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-50',
        warning: 'border-transparent bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-50',
        info: 'border-transparent bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-50',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
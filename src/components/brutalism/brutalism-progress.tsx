'use client'

import React from 'react'
import { brutalismProgress } from '@/styles/brutalism'
import { cn } from '@/lib/utils'

export interface BrutalismProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number
  variant?: 'default' | 'striped'
}

export const BrutalismProgress = React.forwardRef<HTMLDivElement, BrutalismProgressProps>(
  ({ className, value = 0, variant, ...props }, ref) => {
    return (
      <div
        className={cn(brutalismProgress({ variant }), className)}
        ref={ref}
        {...props}
      >
        <div
          className={cn(
            'h-full bg-black transition-all duration-300',
            variant === 'striped' && 'bg-repeating-linear-gradient(45deg, black, black 10px, yellow 10px, yellow 20px)'
          )}
          style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
        />
      </div>
    )
  }
)

BrutalismProgress.displayName = 'BrutalismProgress'
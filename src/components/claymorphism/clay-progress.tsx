'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { clayProgress } from '@/styles/claymorphism'
import { VariantProps } from 'class-variance-authority'

interface ClayProgressProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof clayProgress> {
  value?: number
  max?: number
  color?: 'primary' | 'secondary' | 'accent'
}

export const ClayProgress = React.forwardRef<HTMLDivElement, ClayProgressProps>(
  ({ className, variant, size, value = 0, max = 100, color = 'primary', ...props }, ref) => {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100)
    
    const colorClasses = {
      primary: 'bg-gradient-to-r from-red-400 to-red-500',
      secondary: 'bg-gradient-to-r from-teal-400 to-teal-500',
      accent: 'bg-gradient-to-r from-yellow-300 to-yellow-400',
    }
    
    return (
      <div
        ref={ref}
        className={cn(clayProgress({ variant, size }), className)}
        {...props}
      >
        <div
          className={cn(
            'h-full transition-all duration-500 ease-out rounded-full',
            colorClasses[color],
            'shadow-[inset_0_-2px_4px_rgba(255,255,255,0.3)]'
          )}
          style={{ width: `${percentage}%` }}
        />
      </div>
    )
  }
)

ClayProgress.displayName = 'ClayProgress'
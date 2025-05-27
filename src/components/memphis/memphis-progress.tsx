'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { memphisProgress } from '@/styles/memphis'
import { VariantProps } from 'class-variance-authority'

interface MemphisProgressProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof memphisProgress> {
  value?: number
  max?: number
  color?: 'primary' | 'secondary' | 'accent'
}

export const MemphisProgress = React.forwardRef<HTMLDivElement, MemphisProgressProps>(
  ({ className, variant, size, value = 0, max = 100, color = 'primary', ...props }, ref) => {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100)
    
    const colorClasses = {
      primary: 'bg-[#FF1744]',
      secondary: 'bg-[#00BCD4]',
      accent: 'bg-[#FFEB3B]',
    }
    
    return (
      <div
        ref={ref}
        className={cn(memphisProgress({ variant, size }), className)}
        {...props}
      >
        <div
          className={cn(
            'h-full transition-all duration-500 ease-out relative',
            colorClasses[color]
          )}
          style={{ width: `${percentage}%` }}
        >
          {variant === 'striped' && (
            <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(0,0,0,0.2)_10px,rgba(0,0,0,0.2)_20px)] animate-memphis-slide" />
          )}
        </div>
      </div>
    )
  }
)

MemphisProgress.displayName = 'MemphisProgress'
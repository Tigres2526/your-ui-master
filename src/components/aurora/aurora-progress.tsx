'use client'

import React from 'react'
import { auroraProgress } from '@/styles/aurora'
import { cn } from '@/lib/utils'

export interface AuroraProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number
  variant?: 'default' | 'glass' | 'glow'
}

export const AuroraProgress = React.forwardRef<HTMLDivElement, AuroraProgressProps>(
  ({ className, value = 0, variant, ...props }, ref) => {
    return (
      <div
        className={cn(auroraProgress({ variant }), className)}
        ref={ref}
        {...props}
      >
        <div
          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full transition-all duration-500 relative overflow-hidden"
          style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
        >
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-shimmer" />
        </div>
      </div>
    )
  }
)

AuroraProgress.displayName = 'AuroraProgress'
'use client'

import React from 'react'
import { cyberpunkProgress } from '@/styles/cyberpunk'
import { cn } from '@/lib/utils'

export interface CyberpunkProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number
  variant?: 'default' | 'neon' | 'glitch'
}

export const CyberpunkProgress = React.forwardRef<HTMLDivElement, CyberpunkProgressProps>(
  ({ className, value = 0, variant, ...props }, ref) => {
    return (
      <div
        className={cn(cyberpunkProgress({ variant }), className)}
        ref={ref}
        {...props}
      >
        <div
          className="h-full bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 transition-all duration-500 relative overflow-hidden shadow-[0_0_10px_rgba(0,255,255,0.8)]"
          style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
        >
          {/* Animated glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-shimmer" />
        </div>
      </div>
    )
  }
)

CyberpunkProgress.displayName = 'CyberpunkProgress'
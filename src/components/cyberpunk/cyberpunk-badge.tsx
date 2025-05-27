'use client'

import React from 'react'
import { cyberpunkBadge } from '@/styles/cyberpunk'
import { cn } from '@/lib/utils'

export interface CyberpunkBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'neon' | 'danger' | 'success' | 'warning'
}

export const CyberpunkBadge = React.forwardRef<HTMLDivElement, CyberpunkBadgeProps>(
  ({ className, variant, children, ...props }, ref) => {
    return (
      <div
        className={cn(cyberpunkBadge({ variant }), className)}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    )
  }
)

CyberpunkBadge.displayName = 'CyberpunkBadge'
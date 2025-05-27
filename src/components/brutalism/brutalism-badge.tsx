'use client'

import React from 'react'
import { brutalismBadge } from '@/styles/brutalism'
import { cn } from '@/lib/utils'

export interface BrutalismBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'danger' | 'primary' | 'success'
}

export const BrutalismBadge = React.forwardRef<HTMLDivElement, BrutalismBadgeProps>(
  ({ className, variant, children, ...props }, ref) => {
    return (
      <div
        className={cn(brutalismBadge({ variant }), className)}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    )
  }
)

BrutalismBadge.displayName = 'BrutalismBadge'
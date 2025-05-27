'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { memphisBadge } from '@/styles/memphis'
import { VariantProps } from 'class-variance-authority'

interface MemphisBadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof memphisBadge> {
  children: React.ReactNode
}

export const MemphisBadge = React.forwardRef<HTMLSpanElement, MemphisBadgeProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(memphisBadge({ variant, size }), className)}
        {...props}
      >
        {children}
      </span>
    )
  }
)

MemphisBadge.displayName = 'MemphisBadge'
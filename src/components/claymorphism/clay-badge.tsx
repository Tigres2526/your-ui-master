'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { clayBadge } from '@/styles/claymorphism'
import { VariantProps } from 'class-variance-authority'

interface ClayBadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof clayBadge> {
  children: React.ReactNode
}

export const ClayBadge = React.forwardRef<HTMLSpanElement, ClayBadgeProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(clayBadge({ variant, size }), className)}
        {...props}
      >
        {children}
      </span>
    )
  }
)

ClayBadge.displayName = 'ClayBadge'
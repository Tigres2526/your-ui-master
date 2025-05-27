'use client'

import React from 'react'
import { auroraBadge } from '@/styles/aurora'
import { cn } from '@/lib/utils'

export interface AuroraBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'outline' | 'ghost'
}

export const AuroraBadge = React.forwardRef<HTMLDivElement, AuroraBadgeProps>(
  ({ className, variant, children, ...props }, ref) => {
    if (variant === 'outline') {
      return (
        <div
          className={cn(auroraBadge({ variant }), className)}
          ref={ref}
          {...props}
        >
          <span className="bg-background px-2.5 py-0.5 rounded-full">
            {children}
          </span>
        </div>
      )
    }

    return (
      <div
        className={cn(auroraBadge({ variant }), className)}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    )
  }
)

AuroraBadge.displayName = 'AuroraBadge'
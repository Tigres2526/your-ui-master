'use client'

import React from 'react'
import { auroraButton } from '@/styles/aurora'
import { cn } from '@/lib/utils'

export interface AuroraButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost' | 'glow'
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

export const AuroraButton = React.forwardRef<HTMLButtonElement, AuroraButtonProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <button
        className={cn(auroraButton({ variant, size }), className)}
        ref={ref}
        {...props}
      >
        <span className="relative z-10">{children}</span>
      </button>
    )
  }
)

AuroraButton.displayName = 'AuroraButton'
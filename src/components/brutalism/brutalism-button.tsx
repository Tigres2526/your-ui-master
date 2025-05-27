'use client'

import React from 'react'
import { brutalismButton } from '@/styles/brutalism'
import { cn } from '@/lib/utils'

export interface BrutalismButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'danger' | 'primary' | 'outline'
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

export const BrutalismButton = React.forwardRef<HTMLButtonElement, BrutalismButtonProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <button
        className={cn(brutalismButton({ variant, size }), className)}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  }
)

BrutalismButton.displayName = 'BrutalismButton'
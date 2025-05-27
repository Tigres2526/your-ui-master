'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { clayButton } from '@/styles/claymorphism'
import { VariantProps } from 'class-variance-authority'

interface ClayButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof clayButton> {
  children: React.ReactNode
}

export const ClayButton = React.forwardRef<HTMLButtonElement, ClayButtonProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(clayButton({ variant, size }), className)}
        {...props}
      >
        <span className="relative z-10">{children}</span>
      </button>
    )
  }
)

ClayButton.displayName = 'ClayButton'
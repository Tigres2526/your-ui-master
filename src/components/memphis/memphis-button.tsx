'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { memphisButton } from '@/styles/memphis'
import { VariantProps } from 'class-variance-authority'

interface MemphisButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof memphisButton> {
  children: React.ReactNode
}

export const MemphisButton = React.forwardRef<HTMLButtonElement, MemphisButtonProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(memphisButton({ variant, size }), className)}
        {...props}
      >
        {children}
      </button>
    )
  }
)

MemphisButton.displayName = 'MemphisButton'
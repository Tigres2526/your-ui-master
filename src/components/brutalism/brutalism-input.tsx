'use client'

import React from 'react'
import { brutalismInput } from '@/styles/brutalism'
import { cn } from '@/lib/utils'

export interface BrutalismInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: 'default' | 'yellow' | 'danger'
}

export const BrutalismInput = React.forwardRef<HTMLInputElement, BrutalismInputProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <input
        className={cn(brutalismInput({ variant }), className)}
        ref={ref}
        {...props}
      />
    )
  }
)

BrutalismInput.displayName = 'BrutalismInput'
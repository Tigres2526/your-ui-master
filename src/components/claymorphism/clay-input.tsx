'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { clayInput } from '@/styles/claymorphism'
import { VariantProps } from 'class-variance-authority'

interface ClayInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof clayInput> {}

export const ClayInput = React.forwardRef<HTMLInputElement, ClayInputProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(clayInput({ variant, size }), className)}
        {...props}
      />
    )
  }
)

ClayInput.displayName = 'ClayInput'
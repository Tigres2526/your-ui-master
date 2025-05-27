'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { memphisInput } from '@/styles/memphis'
import { VariantProps } from 'class-variance-authority'

interface MemphisInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof memphisInput> {}

export const MemphisInput = React.forwardRef<HTMLInputElement, MemphisInputProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(memphisInput({ variant, size }), className)}
        {...props}
      />
    )
  }
)

MemphisInput.displayName = 'MemphisInput'
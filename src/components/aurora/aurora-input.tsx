'use client'

import React from 'react'
import { auroraInput } from '@/styles/aurora'
import { cn } from '@/lib/utils'

export interface AuroraInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: 'default' | 'outline' | 'glow'
}

export const AuroraInput = React.forwardRef<HTMLInputElement, AuroraInputProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <div className="relative">
        {/* Animated gradient border effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl opacity-0 hover:opacity-75 transition duration-300 blur" />
        <input
          className={cn(auroraInput({ variant }), 'relative', className)}
          ref={ref}
          {...props}
        />
      </div>
    )
  }
)

AuroraInput.displayName = 'AuroraInput'
'use client'

import React from 'react'
import { cyberpunkInput } from '@/styles/cyberpunk'
import { cn } from '@/lib/utils'

export interface CyberpunkInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: 'default' | 'neon' | 'terminal'
}

export const CyberpunkInput = React.forwardRef<HTMLInputElement, CyberpunkInputProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <div className="relative">
        <input
          className={cn(cyberpunkInput({ variant }), className)}
          ref={ref}
          {...props}
        />
        {variant === 'neon' && (
          <div className="absolute inset-0 -z-10 bg-cyan-400/20 blur-xl rounded-sm opacity-0 transition-opacity duration-300 focus-within:opacity-100" />
        )}
      </div>
    )
  }
)

CyberpunkInput.displayName = 'CyberpunkInput'
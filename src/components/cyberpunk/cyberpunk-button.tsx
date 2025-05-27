'use client'

import React from 'react'
import { cyberpunkButton } from '@/styles/cyberpunk'
import { cn } from '@/lib/utils'

export interface CyberpunkButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'neon' | 'hologram' | 'glitch' | 'terminal'
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

export const CyberpunkButton = React.forwardRef<HTMLButtonElement, CyberpunkButtonProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <button
        className={cn(cyberpunkButton({ variant, size }), className)}
        ref={ref}
        {...props}
      >
        {variant === 'glitch' && (
          <>
            <span className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-pink-400 clip-path-glitch-1 opacity-0 hover:opacity-100 hover:animate-glitch-1">
              {children}
            </span>
            <span className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-cyan-400 clip-path-glitch-2 opacity-0 hover:opacity-100 hover:animate-glitch-2">
              {children}
            </span>
          </>
        )}
        <span className="relative z-10">{children}</span>
      </button>
    )
  }
)

CyberpunkButton.displayName = 'CyberpunkButton'
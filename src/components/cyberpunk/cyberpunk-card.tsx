'use client'

import React from 'react'
import { cyberpunkCard } from '@/styles/cyberpunk'
import { cn } from '@/lib/utils'

export interface CyberpunkCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'neon' | 'hologram' | 'terminal'
}

export const CyberpunkCard = React.forwardRef<HTMLDivElement, CyberpunkCardProps>(
  ({ className, variant, children, ...props }, ref) => {
    return (
      <div
        className={cn(cyberpunkCard({ variant }), 'p-6', className)}
        ref={ref}
        {...props}
      >
        {variant === 'terminal' && (
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
            <div className="scanline"></div>
          </div>
        )}
        <div className="relative z-10">{children}</div>
      </div>
    )
  }
)

CyberpunkCard.displayName = 'CyberpunkCard'

export const CyberpunkCardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex flex-col space-y-1.5 mb-4', className)} {...props} />
  )
)

CyberpunkCardHeader.displayName = 'CyberpunkCardHeader'

export const CyberpunkCardTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn('text-2xl font-bold uppercase tracking-wider text-cyan-400', className)}
      {...props}
    />
  )
)

CyberpunkCardTitle.displayName = 'CyberpunkCardTitle'

export const CyberpunkCardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn('text-sm text-cyan-400/70', className)} {...props} />
  )
)

CyberpunkCardDescription.displayName = 'CyberpunkCardDescription'

export const CyberpunkCardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('', className)} {...props} />
  )
)

CyberpunkCardContent.displayName = 'CyberpunkCardContent'
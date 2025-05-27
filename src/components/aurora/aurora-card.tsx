'use client'

import React from 'react'
import { auroraCard } from '@/styles/aurora'
import { cn } from '@/lib/utils'

export interface AuroraCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'gradient' | 'glass' | 'floating'
}

export const AuroraCard = React.forwardRef<HTMLDivElement, AuroraCardProps>(
  ({ className, variant, children, ...props }, ref) => {
    return (
      <div
        className={cn(auroraCard({ variant }), 'rounded-2xl p-6', className)}
        ref={ref}
        {...props}
      >
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-2xl animate-gradient" />
        <div className="relative z-10">{children}</div>
      </div>
    )
  }
)

AuroraCard.displayName = 'AuroraCard'

export const AuroraCardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex flex-col space-y-1.5', className)} {...props} />
  )
)

AuroraCardHeader.displayName = 'AuroraCardHeader'

export const AuroraCardTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn('text-2xl font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent', className)}
      {...props}
    />
  )
)

AuroraCardTitle.displayName = 'AuroraCardTitle'

export const AuroraCardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn('text-sm text-muted-foreground', className)} {...props} />
  )
)

AuroraCardDescription.displayName = 'AuroraCardDescription'

export const AuroraCardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('pt-4', className)} {...props} />
  )
)

AuroraCardContent.displayName = 'AuroraCardContent'
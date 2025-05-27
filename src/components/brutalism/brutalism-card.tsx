'use client'

import React from 'react'
import { brutalismCard } from '@/styles/brutalism'
import { cn } from '@/lib/utils'

export interface BrutalismCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'yellow' | 'red' | 'blue'
}

export const BrutalismCard = React.forwardRef<HTMLDivElement, BrutalismCardProps>(
  ({ className, variant, children, ...props }, ref) => {
    return (
      <div
        className={cn(brutalismCard({ variant }), 'p-6', className)}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    )
  }
)

BrutalismCard.displayName = 'BrutalismCard'

export const BrutalismCardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex flex-col space-y-2 mb-4', className)} {...props} />
  )
)

BrutalismCardHeader.displayName = 'BrutalismCardHeader'

export const BrutalismCardTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn('text-2xl font-black uppercase', className)}
      {...props}
    />
  )
)

BrutalismCardTitle.displayName = 'BrutalismCardTitle'

export const BrutalismCardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn('text-base font-medium', className)} {...props} />
  )
)

BrutalismCardDescription.displayName = 'BrutalismCardDescription'

export const BrutalismCardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('', className)} {...props} />
  )
)

BrutalismCardContent.displayName = 'BrutalismCardContent'
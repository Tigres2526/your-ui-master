'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { clayCard } from '@/styles/claymorphism'
import { VariantProps } from 'class-variance-authority'

interface ClayCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof clayCard> {
  children: React.ReactNode
}

export const ClayCard = React.forwardRef<HTMLDivElement, ClayCardProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(clayCard({ variant, size }), className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)

ClayCard.displayName = 'ClayCard'

export const ClayCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn('mb-4', className)}
      {...props}
    >
      {children}
    </div>
  )
})

ClayCardHeader.displayName = 'ClayCardHeader'

export const ClayCardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, children, ...props }, ref) => {
  return (
    <h3
      ref={ref}
      className={cn('text-xl font-semibold text-gray-800', className)}
      {...props}
    >
      {children}
    </h3>
  )
})

ClayCardTitle.displayName = 'ClayCardTitle'

export const ClayCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  return (
    <p
      ref={ref}
      className={cn('text-sm text-gray-600 mt-1', className)}
      {...props}
    >
      {children}
    </p>
  )
})

ClayCardDescription.displayName = 'ClayCardDescription'

export const ClayCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn('text-gray-700', className)}
      {...props}
    >
      {children}
    </div>
  )
})

ClayCardContent.displayName = 'ClayCardContent'

export const ClayCardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn('mt-4 flex items-center justify-between', className)}
      {...props}
    >
      {children}
    </div>
  )
})

ClayCardFooter.displayName = 'ClayCardFooter'
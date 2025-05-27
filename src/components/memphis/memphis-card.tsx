'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { memphisCard } from '@/styles/memphis'
import { VariantProps } from 'class-variance-authority'

interface MemphisCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof memphisCard> {
  children: React.ReactNode
}

export const MemphisCard = React.forwardRef<HTMLDivElement, MemphisCardProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(memphisCard({ variant, size }), className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)

MemphisCard.displayName = 'MemphisCard'

export const MemphisCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn('mb-4 pb-4 border-b-4 border-black', className)}
      {...props}
    >
      {children}
    </div>
  )
})

MemphisCardHeader.displayName = 'MemphisCardHeader'

export const MemphisCardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, children, ...props }, ref) => {
  return (
    <h3
      ref={ref}
      className={cn('text-2xl font-black uppercase', className)}
      {...props}
    >
      {children}
    </h3>
  )
})

MemphisCardTitle.displayName = 'MemphisCardTitle'

export const MemphisCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  return (
    <p
      ref={ref}
      className={cn('text-sm font-bold mt-2', className)}
      {...props}
    >
      {children}
    </p>
  )
})

MemphisCardDescription.displayName = 'MemphisCardDescription'

export const MemphisCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn('font-medium', className)}
      {...props}
    >
      {children}
    </div>
  )
})

MemphisCardContent.displayName = 'MemphisCardContent'

export const MemphisCardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn('mt-4 pt-4 border-t-4 border-black flex items-center justify-between', className)}
      {...props}
    >
      {children}
    </div>
  )
})

MemphisCardFooter.displayName = 'MemphisCardFooter'
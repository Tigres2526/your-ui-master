'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

const NeuCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'rounded-[20px] bg-[#e0e0e0] p-6 shadow-[20px_20px_40px_#bebebe,-20px_-20px_40px_#ffffff]',
      className
    )}
    {...props}
  />
))
NeuCard.displayName = 'NeuCard'

const NeuCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex flex-col space-y-1.5 pb-6', className)}
    {...props}
  />
))
NeuCardHeader.displayName = 'NeuCardHeader'

const NeuCardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      'text-2xl font-semibold leading-none tracking-tight text-gray-800',
      className
    )}
    {...props}
  />
))
NeuCardTitle.displayName = 'NeuCardTitle'

const NeuCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-sm text-gray-600', className)}
    {...props}
  />
))
NeuCardDescription.displayName = 'NeuCardDescription'

const NeuCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('', className)} {...props} />
))
NeuCardContent.displayName = 'NeuCardContent'

const NeuCardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center pt-6', className)}
    {...props}
  />
))
NeuCardFooter.displayName = 'NeuCardFooter'

export {
  NeuCard,
  NeuCardHeader,
  NeuCardFooter,
  NeuCardTitle,
  NeuCardDescription,
  NeuCardContent,
}
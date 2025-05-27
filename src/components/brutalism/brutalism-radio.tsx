'use client'

import * as React from 'react'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import { cn } from '@/lib/utils'

const BrutalismRadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => (
  <RadioGroupPrimitive.Root
    className={cn('grid gap-3', className)}
    {...props}
    ref={ref}
  />
))
BrutalismRadioGroup.displayName = RadioGroupPrimitive.Root.displayName

const BrutalismRadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => (
  <RadioGroupPrimitive.Item
    ref={ref}
    className={cn(
      'aspect-square h-6 w-6 border-4 border-black bg-white shadow-[3px_3px_0_0_rgba(0,0,0,1)] transition-all duration-150',
      'focus:outline-none focus-visible:ring-4 focus-visible:ring-black focus-visible:ring-offset-4',
      'disabled:cursor-not-allowed disabled:opacity-50',
      'hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)]',
      'data-[state=checked]:bg-yellow-400',
      className
    )}
    {...props}
  >
    <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
      <div className="h-3 w-3 bg-black" />
    </RadioGroupPrimitive.Indicator>
  </RadioGroupPrimitive.Item>
))
BrutalismRadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

export { BrutalismRadioGroup, BrutalismRadioGroupItem }
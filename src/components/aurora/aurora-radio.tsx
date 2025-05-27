'use client'

import * as React from 'react'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import { cn } from '@/lib/utils'

const AuroraRadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => (
  <RadioGroupPrimitive.Root
    className={cn('grid gap-2', className)}
    {...props}
    ref={ref}
  />
))
AuroraRadioGroup.displayName = RadioGroupPrimitive.Root.displayName

const AuroraRadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => (
  <RadioGroupPrimitive.Item
    ref={ref}
    className={cn(
      'aspect-square h-5 w-5 rounded-full transition-all duration-300',
      'bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20',
      'border-2 border-purple-500/30',
      'focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2',
      'disabled:cursor-not-allowed disabled:opacity-50',
      'hover:border-purple-500/50 hover:shadow-md hover:shadow-purple-500/30',
      'data-[state=checked]:border-transparent',
      'data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-blue-500 data-[state=checked]:via-purple-500 data-[state=checked]:to-pink-500',
      'data-[state=checked]:shadow-lg data-[state=checked]:shadow-purple-500/50',
      className
    )}
    {...props}
  >
    <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
      <div className="h-2 w-2 rounded-full bg-white shadow-sm" />
    </RadioGroupPrimitive.Indicator>
  </RadioGroupPrimitive.Item>
))
AuroraRadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

export { AuroraRadioGroup, AuroraRadioGroupItem }
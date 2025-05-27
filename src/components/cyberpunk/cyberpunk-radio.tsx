'use client'

import * as React from 'react'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import { cn } from '@/lib/utils'

const CyberpunkRadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => (
  <RadioGroupPrimitive.Root
    className={cn('grid gap-2', className)}
    {...props}
    ref={ref}
  />
))
CyberpunkRadioGroup.displayName = RadioGroupPrimitive.Root.displayName

const CyberpunkRadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => (
  <RadioGroupPrimitive.Item
    ref={ref}
    className={cn(
      'aspect-square h-5 w-5 rounded-full bg-black/50 border border-cyan-400/50 transition-all duration-300',
      'focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black',
      'disabled:cursor-not-allowed disabled:opacity-50',
      'shadow-[inset_0_0_5px_rgba(0,255,255,0.2)]',
      'hover:border-cyan-400 hover:shadow-[inset_0_0_10px_rgba(0,255,255,0.3),0_0_5px_rgba(0,255,255,0.3)]',
      'data-[state=checked]:border-cyan-400',
      'data-[state=checked]:shadow-[inset_0_0_10px_rgba(0,255,255,0.5),0_0_10px_rgba(0,255,255,0.5)]',
      className
    )}
    {...props}
  >
    <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
      <div className="h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(0,255,255,1)]" />
    </RadioGroupPrimitive.Indicator>
  </RadioGroupPrimitive.Item>
))
CyberpunkRadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

export { CyberpunkRadioGroup, CyberpunkRadioGroupItem }
'use client'

import React from 'react'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import { cn } from '@/lib/utils'
import { memphisRadio } from '@/styles/memphis'
import { VariantProps } from 'class-variance-authority'

const MemphisRadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => (
  <RadioGroupPrimitive.Root
    ref={ref}
    className={cn('grid gap-2', className)}
    {...props}
  />
))
MemphisRadioGroup.displayName = RadioGroupPrimitive.Root.displayName

interface MemphisRadioGroupItemProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>,
    VariantProps<typeof memphisRadio> {}

const MemphisRadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  MemphisRadioGroupItemProps
>(({ className, variant, size, ...props }, ref) => {
  const indicatorSize = {
    sm: 'h-2 w-2',
    default: 'h-3 w-3',
    lg: 'h-4 w-4',
  }
  
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        memphisRadio({ variant, size }),
        'focus:outline-none focus-visible:ring-4 focus-visible:ring-[#FF1744] focus-visible:ring-offset-2',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <div 
          className={cn(
            indicatorSize[size || 'default'],
            'bg-[#FF1744] rounded-full'
          )} 
        />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
})
MemphisRadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

export { MemphisRadioGroup, MemphisRadioGroupItem }
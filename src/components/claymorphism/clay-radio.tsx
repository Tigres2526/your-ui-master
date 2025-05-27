'use client'

import React from 'react'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import { Circle } from 'lucide-react'
import { cn } from '@/lib/utils'
import { clayRadio } from '@/styles/claymorphism'
import { VariantProps } from 'class-variance-authority'

const ClayRadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => (
  <RadioGroupPrimitive.Root
    ref={ref}
    className={cn('grid gap-2', className)}
    {...props}
  />
))
ClayRadioGroup.displayName = RadioGroupPrimitive.Root.displayName

interface ClayRadioGroupItemProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>,
    VariantProps<typeof clayRadio> {}

const ClayRadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  ClayRadioGroupItemProps
>(({ className, variant, size, ...props }, ref) => {
  const indicatorSize = {
    sm: 'h-2 w-2',
    default: 'h-2.5 w-2.5',
    lg: 'h-3 w-3',
  }
  
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        clayRadio({ variant, size }),
        'bg-white border-2 border-gray-300',
        'data-[state=checked]:border-red-500',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Circle 
          className={cn(
            indicatorSize[size || 'default'],
            'fill-current text-red-500'
          )} 
        />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
})
ClayRadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

export { ClayRadioGroup, ClayRadioGroupItem }
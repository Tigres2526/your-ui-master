'use client'

import React from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'
import { clayCheckbox } from '@/styles/claymorphism'
import { VariantProps } from 'class-variance-authority'

interface ClayCheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
    VariantProps<typeof clayCheckbox> {}

export const ClayCheckbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  ClayCheckboxProps
>(({ className, variant, size, ...props }, ref) => {
  const iconSize = {
    sm: 'h-3 w-3',
    default: 'h-4 w-4',
    lg: 'h-5 w-5',
  }
  
  return (
    <CheckboxPrimitive.Root
      ref={ref}
      className={cn(
        clayCheckbox({ variant, size }),
        'bg-white border-2 border-gray-300',
        'data-[state=checked]:bg-gradient-to-br data-[state=checked]:from-red-400 data-[state=checked]:to-red-500',
        'data-[state=checked]:border-red-500',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator className="flex items-center justify-center text-white">
        <Check className={iconSize[size || 'default']} strokeWidth={3} />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
})

ClayCheckbox.displayName = 'ClayCheckbox'
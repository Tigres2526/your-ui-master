'use client'

import React from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { Check, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { memphisCheckbox } from '@/styles/memphis'
import { VariantProps } from 'class-variance-authority'

interface MemphisCheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
    VariantProps<typeof memphisCheckbox> {}

export const MemphisCheckbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  MemphisCheckboxProps
>(({ className, variant, size, ...props }, ref) => {
  const iconSize = {
    sm: 'h-3 w-3',
    default: 'h-4 w-4',
    lg: 'h-6 w-6',
  }
  
  return (
    <CheckboxPrimitive.Root
      ref={ref}
      className={cn(
        memphisCheckbox({ variant, size }),
        'data-[state=checked]:bg-[#FF1744]',
        'focus:outline-none focus-visible:ring-4 focus-visible:ring-[#FF1744] focus-visible:ring-offset-2',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator className="flex items-center justify-center text-white">
        {variant === 'circle' ? (
          <X className={cn(iconSize[size || 'default'], 'stroke-[4]')} />
        ) : (
          <Check className={cn(iconSize[size || 'default'], 'stroke-[4]')} />
        )}
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
})

MemphisCheckbox.displayName = 'MemphisCheckbox'
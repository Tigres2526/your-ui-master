'use client'

import React from 'react'
import * as SwitchPrimitive from '@radix-ui/react-switch'
import { cn } from '@/lib/utils'
import { memphisSwitch } from '@/styles/memphis'
import { VariantProps } from 'class-variance-authority'

interface MemphisSwitchProps
  extends React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>,
    VariantProps<typeof memphisSwitch> {}

export const MemphisSwitch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  MemphisSwitchProps
>(({ className, variant, size, ...props }, ref) => {
  const thumbSize = {
    sm: 'h-4 w-4',
    default: 'h-6 w-6',
    lg: 'h-8 w-8',
  }
  
  const thumbTranslate = {
    sm: 'translate-x-5',
    default: 'translate-x-7',
    lg: 'translate-x-9',
  }
  
  return (
    <SwitchPrimitive.Root
      ref={ref}
      className={cn(
        memphisSwitch({ variant, size }),
        'data-[state=checked]:bg-[#FF1744]',
        'focus:outline-none focus-visible:ring-4 focus-visible:ring-[#FF1744] focus-visible:ring-offset-2',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        className={cn(
          'block bg-white border-4 border-black transition-all duration-250',
          'shadow-[2px_2px_0_0_rgba(0,0,0,1)]',
          thumbSize[size || 'default'],
          `data-[state=checked]:${thumbTranslate[size || 'default']}`
        )}
      />
    </SwitchPrimitive.Root>
  )
})

MemphisSwitch.displayName = 'MemphisSwitch'
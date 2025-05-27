'use client'

import React from 'react'
import * as SwitchPrimitive from '@radix-ui/react-switch'
import { cn } from '@/lib/utils'
import { claySwitch } from '@/styles/claymorphism'
import { VariantProps } from 'class-variance-authority'

interface ClaySwitchProps
  extends React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>,
    VariantProps<typeof claySwitch> {}

export const ClaySwitch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  ClaySwitchProps
>(({ className, variant, size, ...props }, ref) => {
  const thumbSize = {
    sm: 'h-3 w-3',
    default: 'h-4 w-4',
    lg: 'h-5 w-5',
  }
  
  const thumbTranslate = {
    sm: 'translate-x-4',
    default: 'translate-x-5',
    lg: 'translate-x-7',
  }
  
  return (
    <SwitchPrimitive.Root
      ref={ref}
      className={cn(
        claySwitch({ variant, size }),
        'bg-gray-300 rounded-full',
        'data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-red-400 data-[state=checked]:to-red-500',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        className={cn(
          'block rounded-full bg-white transition-all duration-300',
          'shadow-[0_10px_20px_-5px_rgba(0,0,0,0.2),inset_0_-2px_4px_rgba(255,255,255,0.8)]',
          thumbSize[size || 'default'],
          `data-[state=checked]:${thumbTranslate[size || 'default']}`
        )}
      />
    </SwitchPrimitive.Root>
  )
})

ClaySwitch.displayName = 'ClaySwitch'
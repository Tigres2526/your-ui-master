'use client'

import React from 'react'
import * as SliderPrimitive from '@radix-ui/react-slider'
import { cn } from '@/lib/utils'
import { claySlider } from '@/styles/claymorphism'
import { VariantProps } from 'class-variance-authority'

interface ClaySliderProps
  extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>,
    VariantProps<typeof claySlider> {}

export const ClaySlider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  ClaySliderProps
>(({ className, variant, size, ...props }, ref) => {
  const trackHeight = {
    sm: 'h-1',
    default: 'h-1.5',
    lg: 'h-2',
  }
  
  return (
    <SliderPrimitive.Root
      ref={ref}
      className={cn(claySlider({ variant, size }), className)}
      {...props}
    >
      <SliderPrimitive.Track 
        className={cn(
          'relative w-full rounded-full bg-gray-200 overflow-hidden',
          'shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)]',
          trackHeight[size || 'default']
        )}
      >
        <SliderPrimitive.Range className="absolute h-full bg-gradient-to-r from-red-400 to-red-500 rounded-full" />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb 
        className={cn(
          'block rounded-full bg-white border-2 border-red-400',
          'focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2',
          'disabled:opacity-50 disabled:pointer-events-none',
          'transition-all duration-300'
        )} 
      />
    </SliderPrimitive.Root>
  )
})

ClaySlider.displayName = 'ClaySlider'
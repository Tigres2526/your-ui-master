'use client'

import * as React from 'react'
import * as SliderPrimitive from '@radix-ui/react-slider'
import { cn } from '@/lib/utils'

const NeuSlider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      'relative flex w-full touch-none select-none items-center',
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track
      className={cn(
        'relative h-3 w-full grow overflow-hidden rounded-full',
        'bg-[#e0e0e0]',
        'shadow-[inset_2px_2px_4px_#bebebe,inset_-2px_-2px_4px_#ffffff]'
      )}
    >
      <SliderPrimitive.Range 
        className={cn(
          'absolute h-full',
          'bg-gradient-to-r from-[#6366f1] to-[#8b5cf6]',
          'shadow-[0_0_10px_rgba(99,102,241,0.5)]'
        )} 
      />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb
      className={cn(
        'block h-6 w-6 rounded-full',
        'bg-gradient-to-br from-[#f0f0f0] to-[#cacaca]',
        'shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff]',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
        'disabled:pointer-events-none disabled:opacity-50',
        'hover:shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]',
        'transition-shadow duration-200'
      )}
    />
  </SliderPrimitive.Root>
))
NeuSlider.displayName = SliderPrimitive.Root.displayName

export { NeuSlider }
'use client'

import * as React from 'react'
import * as SliderPrimitive from '@radix-ui/react-slider'
import { cn } from '@/lib/utils'

const AuroraSlider = React.forwardRef<
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
    <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20">
      <SliderPrimitive.Range className="absolute h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg shadow-purple-500/30" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block h-5 w-5 rounded-full bg-white shadow-xl ring-2 ring-purple-500/50 transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-purple-500/30 disabled:pointer-events-none disabled:opacity-50 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50" />
  </SliderPrimitive.Root>
))
AuroraSlider.displayName = SliderPrimitive.Root.displayName

export { AuroraSlider }
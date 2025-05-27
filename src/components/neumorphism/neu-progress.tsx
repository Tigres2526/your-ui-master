'use client'

import * as React from 'react'
import * as ProgressPrimitive from '@radix-ui/react-progress'
import { cn } from '@/lib/utils'

const NeuProgress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      'relative h-4 w-full overflow-hidden rounded-full',
      'bg-[#e0e0e0]',
      'shadow-[inset_3px_3px_6px_#bebebe,inset_-3px_-3px_6px_#ffffff]',
      className
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className={cn(
        'h-full w-full flex-1',
        'bg-gradient-to-r from-[#6366f1] to-[#8b5cf6]',
        'shadow-[0_0_10px_rgba(99,102,241,0.5)]',
        'transition-all duration-500 ease-out'
      )}
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
))
NeuProgress.displayName = ProgressPrimitive.Root.displayName

export { NeuProgress }
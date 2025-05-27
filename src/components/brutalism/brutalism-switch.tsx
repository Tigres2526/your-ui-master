'use client'

import * as React from 'react'
import * as SwitchPrimitives from '@radix-ui/react-switch'
import { cn } from '@/lib/utils'

const BrutalismSwitch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      'peer inline-flex h-8 w-16 shrink-0 cursor-pointer items-center border-4 border-black transition-all duration-150',
      'focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-black focus-visible:ring-offset-4',
      'disabled:cursor-not-allowed disabled:opacity-50',
      'bg-gray-200 shadow-[4px_4px_0_0_rgba(0,0,0,1)]',
      'data-[state=checked]:bg-yellow-400',
      'hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)]',
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        'pointer-events-none block h-6 w-6 border-2 border-black bg-white shadow-[2px_2px_0_0_rgba(0,0,0,1)] transition-transform duration-150',
        'data-[state=checked]:translate-x-7 data-[state=unchecked]:translate-x-0'
      )}
    />
  </SwitchPrimitives.Root>
))
BrutalismSwitch.displayName = SwitchPrimitives.Root.displayName

export { BrutalismSwitch }
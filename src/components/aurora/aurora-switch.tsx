'use client'

import * as React from 'react'
import * as SwitchPrimitives from '@radix-ui/react-switch'
import { cn } from '@/lib/utils'

const AuroraSwitch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      'peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full transition-all duration-300',
      'bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2',
      'disabled:cursor-not-allowed disabled:opacity-50',
      'data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-blue-500 data-[state=checked]:via-purple-500 data-[state=checked]:to-pink-500',
      'hover:shadow-lg hover:shadow-purple-500/30',
      'data-[state=checked]:shadow-lg data-[state=checked]:shadow-purple-500/50',
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        'pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform duration-300',
        'data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0',
        'data-[state=checked]:shadow-xl'
      )}
    />
  </SwitchPrimitives.Root>
))
AuroraSwitch.displayName = SwitchPrimitives.Root.displayName

export { AuroraSwitch }
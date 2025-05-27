'use client'

import * as React from 'react'
import * as SwitchPrimitives from '@radix-ui/react-switch'
import { cn } from '@/lib/utils'

const CyberpunkSwitch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      'peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center border border-cyan-400/50 transition-all duration-300',
      'bg-black/50 backdrop-blur-sm',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black',
      'disabled:cursor-not-allowed disabled:opacity-50',
      'data-[state=checked]:bg-cyan-400/20 data-[state=checked]:border-cyan-400',
      'shadow-[inset_0_0_10px_rgba(0,255,255,0.2)]',
      'data-[state=checked]:shadow-[inset_0_0_20px_rgba(0,255,255,0.5),0_0_10px_rgba(0,255,255,0.5)]',
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        'pointer-events-none block h-5 w-5 bg-cyan-400 shadow-[0_0_10px_rgba(0,255,255,0.8)] transition-transform duration-300',
        'data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0',
        'data-[state=checked]:bg-cyan-300 data-[state=checked]:shadow-[0_0_15px_rgba(0,255,255,1)]'
      )}
    />
  </SwitchPrimitives.Root>
))
CyberpunkSwitch.displayName = SwitchPrimitives.Root.displayName

export { CyberpunkSwitch }
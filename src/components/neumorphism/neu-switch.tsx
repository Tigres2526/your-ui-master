'use client'

import * as React from 'react'
import * as SwitchPrimitives from '@radix-ui/react-switch'
import { cn } from '@/lib/utils'

const NeuSwitch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      'peer inline-flex h-[28px] w-[52px] shrink-0 cursor-pointer items-center rounded-full',
      'bg-[#e0e0e0] shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff]',
      'transition-all duration-300',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
      'disabled:cursor-not-allowed disabled:opacity-50',
      'data-[state=checked]:shadow-[inset_2px_2px_4px_#bebebe,inset_-2px_-2px_4px_#ffffff]',
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        'pointer-events-none block h-[20px] w-[20px] rounded-full',
        'bg-gradient-to-br from-[#f0f0f0] to-[#cacaca]',
        'shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff]',
        'transition-all duration-300',
        'data-[state=checked]:translate-x-[24px]',
        'data-[state=checked]:bg-gradient-to-br data-[state=checked]:from-[#6366f1] data-[state=checked]:to-[#8b5cf6]',
        'data-[state=checked]:shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff,0_0_10px_rgba(99,102,241,0.5)]'
      )}
    />
  </SwitchPrimitives.Root>
))
NeuSwitch.displayName = SwitchPrimitives.Root.displayName

export { NeuSwitch }
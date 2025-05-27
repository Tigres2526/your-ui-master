'use client'

import * as React from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'

const CyberpunkCheckbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      'peer h-5 w-5 shrink-0 bg-black/50 border border-cyan-400/50 transition-all duration-300',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black',
      'disabled:cursor-not-allowed disabled:opacity-50',
      'data-[state=checked]:bg-cyan-400/20 data-[state=checked]:border-cyan-400',
      'shadow-[inset_0_0_5px_rgba(0,255,255,0.2)]',
      'data-[state=checked]:shadow-[inset_0_0_10px_rgba(0,255,255,0.5),0_0_10px_rgba(0,255,255,0.5)]',
      'hover:border-cyan-400 hover:shadow-[inset_0_0_10px_rgba(0,255,255,0.3),0_0_5px_rgba(0,255,255,0.3)]',
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn('flex items-center justify-center text-cyan-400')}
    >
      <Check className="h-4 w-4 drop-shadow-[0_0_5px_rgba(0,255,255,0.8)]" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
CyberpunkCheckbox.displayName = CheckboxPrimitive.Root.displayName

export { CyberpunkCheckbox }
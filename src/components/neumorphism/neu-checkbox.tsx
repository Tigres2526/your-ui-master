'use client'

import * as React from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'

const NeuCheckbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      'peer h-5 w-5 shrink-0 rounded-[6px]',
      'bg-[#e0e0e0]',
      'shadow-[3px_3px_6px_#bebebe,-3px_-3px_6px_#ffffff]',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
      'disabled:cursor-not-allowed disabled:opacity-50',
      'data-[state=checked]:shadow-[inset_2px_2px_4px_#bebebe,inset_-2px_-2px_4px_#ffffff]',
      'data-[state=checked]:bg-gradient-to-br data-[state=checked]:from-[#6366f1] data-[state=checked]:to-[#8b5cf6]',
      'transition-all duration-200',
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn('flex items-center justify-center text-white')}
    >
      <Check className="h-3.5 w-3.5" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
NeuCheckbox.displayName = CheckboxPrimitive.Root.displayName

export { NeuCheckbox }
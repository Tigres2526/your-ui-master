'use client'

import * as React from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'

const BrutalismCheckbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      'peer h-6 w-6 shrink-0 border-4 border-black bg-white shadow-[3px_3px_0_0_rgba(0,0,0,1)] transition-all duration-150',
      'focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-black focus-visible:ring-offset-4',
      'disabled:cursor-not-allowed disabled:opacity-50',
      'data-[state=checked]:bg-yellow-400',
      'hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)]',
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn('flex items-center justify-center text-black')}
    >
      <Check className="h-4 w-4 stroke-[4]" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
BrutalismCheckbox.displayName = CheckboxPrimitive.Root.displayName

export { BrutalismCheckbox }
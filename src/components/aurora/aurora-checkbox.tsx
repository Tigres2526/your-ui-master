'use client'

import * as React from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'

const AuroraCheckbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      'peer h-5 w-5 shrink-0 rounded-md transition-all duration-300',
      'bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20',
      'border-2 border-purple-500/30',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2',
      'disabled:cursor-not-allowed disabled:opacity-50',
      'data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-blue-500 data-[state=checked]:via-purple-500 data-[state=checked]:to-pink-500',
      'data-[state=checked]:border-transparent',
      'hover:border-purple-500/50 hover:shadow-md hover:shadow-purple-500/30',
      'data-[state=checked]:shadow-lg data-[state=checked]:shadow-purple-500/50',
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn('flex items-center justify-center text-white')}
    >
      <Check className="h-4 w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
AuroraCheckbox.displayName = CheckboxPrimitive.Root.displayName

export { AuroraCheckbox }
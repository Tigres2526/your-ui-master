'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

export type NeuInputProps = React.InputHTMLAttributes<HTMLInputElement>

const NeuInput = React.forwardRef<HTMLInputElement, NeuInputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-10 w-full rounded-[10px] bg-[#e0e0e0] px-4 py-2 text-sm text-gray-700',
          'shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff]',
          'placeholder:text-gray-500',
          'focus:shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff]',
          'focus:outline-none',
          'transition-all duration-300',
          'disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
NeuInput.displayName = 'NeuInput'

export { NeuInput }
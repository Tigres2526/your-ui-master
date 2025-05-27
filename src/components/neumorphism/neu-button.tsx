'use client'

import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const neuButtonVariants = cva(
  'inline-flex items-center justify-center rounded-[15px] text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-[#e0e0e0] text-gray-700 shadow-[10px_10px_20px_#bebebe,-10px_-10px_20px_#ffffff] hover:shadow-[12px_12px_24px_#bebebe,-12px_-12px_24px_#ffffff] active:shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff]',
        primary: 'bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] text-white shadow-[10px_10px_20px_#bebebe,-10px_-10px_20px_#ffffff] hover:shadow-[12px_12px_24px_#bebebe,-12px_-12px_24px_#ffffff] active:shadow-[inset_5px_5px_10px_rgba(99,102,241,0.3),inset_-5px_-5px_10px_rgba(139,92,246,0.3)]',
        ghost: 'bg-transparent hover:bg-[#e0e0e0] hover:shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]',
        pressed: 'bg-[#e0e0e0] shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff]',
      },
      size: {
        default: 'h-10 px-6 py-2',
        sm: 'h-8 rounded-[10px] px-4',
        lg: 'h-12 rounded-[20px] px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface NeuButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof neuButtonVariants> {}

const NeuButton = React.forwardRef<HTMLButtonElement, NeuButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(neuButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
NeuButton.displayName = 'NeuButton'

export { NeuButton, neuButtonVariants }
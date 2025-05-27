'use client'

import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const neuBadgeVariants = cva(
  'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold transition-all duration-200',
  {
    variants: {
      variant: {
        default:
          'bg-[#e0e0e0] text-gray-700 shadow-[3px_3px_6px_#bebebe,-3px_-3px_6px_#ffffff]',
        primary:
          'bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] text-white shadow-[3px_3px_6px_#bebebe,-3px_-3px_6px_#ffffff]',
        secondary:
          'bg-[#e8e8e8] text-gray-600 shadow-[2px_2px_4px_#bebebe,-2px_-2px_4px_#ffffff]',
        success:
          'bg-gradient-to-br from-[#10b981] to-[#059669] text-white shadow-[3px_3px_6px_#bebebe,-3px_-3px_6px_#ffffff]',
        warning:
          'bg-gradient-to-br from-[#f59e0b] to-[#d97706] text-white shadow-[3px_3px_6px_#bebebe,-3px_-3px_6px_#ffffff]',
        danger:
          'bg-gradient-to-br from-[#ef4444] to-[#dc2626] text-white shadow-[3px_3px_6px_#bebebe,-3px_-3px_6px_#ffffff]',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export interface NeuBadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof neuBadgeVariants> {}

function NeuBadge({ className, variant, ...props }: NeuBadgeProps) {
  return (
    <div className={cn(neuBadgeVariants({ variant }), className)} {...props} />
  )
}

export { NeuBadge, neuBadgeVariants }
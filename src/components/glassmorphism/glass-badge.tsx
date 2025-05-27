import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const glassBadgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-all backdrop-blur-md",
  {
    variants: {
      variant: {
        default:
          "bg-white/10 backdrop-blur-md border border-white/20 text-white",
        secondary:
          "bg-white/5 backdrop-blur-sm border border-white/10 text-white/80",
        destructive:
          "bg-red-500/20 backdrop-blur-md border border-red-500/30 text-red-100",
        outline:
          "bg-transparent backdrop-blur-sm border border-white/30 text-white",
        success:
          "bg-green-500/20 backdrop-blur-md border border-green-500/30 text-green-100",
        warning:
          "bg-yellow-500/20 backdrop-blur-md border border-yellow-500/30 text-yellow-100",
      },
      intensity: {
        subtle: "backdrop-blur-sm",
        medium: "backdrop-blur-md",
        strong: "backdrop-blur-lg",
      },
      size: {
        default: "px-2.5 py-0.5 text-xs",
        sm: "px-2 py-0.25 text-[10px]",
        lg: "px-3 py-1 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      intensity: "medium",
      size: "default",
    },
  }
)

export interface GlassBadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof glassBadgeVariants> {}

function GlassBadge({
  className,
  variant,
  intensity,
  size,
  ...props
}: GlassBadgeProps) {
  return (
    <div
      className={cn(glassBadgeVariants({ variant, intensity, size }), className)}
      {...props}
    />
  )
}

export { GlassBadge, glassBadgeVariants }
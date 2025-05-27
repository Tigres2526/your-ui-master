import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const glassInputVariants = cva(
  "flex w-full rounded-lg backdrop-blur-md text-sm transition-all file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-white/50 focus-visible:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      intensity: {
        subtle: "bg-white/5 backdrop-blur-sm border border-white/10",
        medium: "bg-white/10 backdrop-blur-md border border-white/20",
        strong: "bg-white/20 backdrop-blur-lg border border-white/30",
      },
      variant: {
        default: "focus-visible:ring-white/20 focus-visible:border-white/40",
        ghost: "border-0 bg-transparent hover:bg-white/5 focus:bg-white/10",
        filled: "border-0 bg-white/20 hover:bg-white/25 focus:bg-white/30",
      },
      size: {
        default: "h-10 px-3 py-2",
        sm: "h-8 px-2 py-1 text-xs",
        lg: "h-12 px-4 py-3",
      },
    },
    defaultVariants: {
      intensity: "medium",
      variant: "default",
      size: "default",
    },
  }
)

export interface GlassInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof glassInputVariants> {}

const GlassInput = React.forwardRef<HTMLInputElement, GlassInputProps>(
  ({ className, intensity, variant, size, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          glassInputVariants({ intensity, variant, size }),
          "text-white",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
GlassInput.displayName = "GlassInput"

export { GlassInput, glassInputVariants }
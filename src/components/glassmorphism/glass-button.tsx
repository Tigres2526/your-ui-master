import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const glassButtonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 backdrop-blur-md",
  {
    variants: {
      variant: {
        default:
          "bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:border-white/30 shadow-lg shadow-black/5",
        ghost:
          "bg-transparent hover:bg-white/10 hover:backdrop-blur-lg text-white border border-transparent hover:border-white/20",
        outline:
          "border border-white/30 bg-transparent hover:bg-white/10 hover:backdrop-blur-lg text-white",
      },
      intensity: {
        subtle: "backdrop-blur-sm bg-white/5 border-white/10",
        medium: "backdrop-blur-md bg-white/10 border-white/20",
        strong: "backdrop-blur-lg bg-white/20 border-white/30",
        ultra: "backdrop-blur-xl bg-white/30 border-white/40",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      intensity: "medium",
      size: "default",
    },
  }
)

export interface GlassButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof glassButtonVariants> {
  asChild?: boolean
}

const GlassButton = React.forwardRef<HTMLButtonElement, GlassButtonProps>(
  ({ className, variant, intensity, size, ...props }, ref) => {
    return (
      <button
        className={cn(glassButtonVariants({ variant, intensity, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
GlassButton.displayName = "GlassButton"

export { GlassButton, glassButtonVariants }
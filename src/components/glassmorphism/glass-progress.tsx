import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const glassProgressVariants = cva(
  "relative h-4 w-full overflow-hidden rounded-full backdrop-blur-md",
  {
    variants: {
      intensity: {
        subtle: "bg-white/5 backdrop-blur-sm border border-white/10",
        medium: "bg-white/10 backdrop-blur-md border border-white/20",
        strong: "bg-white/20 backdrop-blur-lg border border-white/30",
      },
      variant: {
        default: "",
        gradient: "bg-gradient-to-r from-white/10 to-white/5",
        shimmer: "bg-gradient-to-r from-white/5 via-white/10 to-white/5 bg-[length:200%_100%] animate-shimmer",
        pulse: "animate-pulse",
        glow: "shadow-[0_0_20px_rgba(255,255,255,0.3)]",
      },
    },
    defaultVariants: {
      intensity: "medium",
      variant: "default",
    },
  }
)

const glassProgressIndicatorVariants = cva(
  "h-full w-full flex-1 transition-all backdrop-blur-lg",
  {
    variants: {
      variant: {
        default: "bg-white/40",
        gradient: "bg-gradient-to-r from-blue-500/40 via-purple-500/40 to-pink-500/40",
        shimmer: "bg-gradient-to-r from-blue-500/40 via-purple-500/40 to-pink-500/40",
        pulse: "bg-white/40 animate-pulse",
        glow: "bg-white/50 shadow-[0_0_20px_rgba(255,255,255,0.5)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface GlassProgressProps
  extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>,
    VariantProps<typeof glassProgressVariants> {
  indicatorVariant?: VariantProps<typeof glassProgressIndicatorVariants>["variant"]
}

const GlassProgress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  GlassProgressProps
>(({ className, value, intensity, variant, indicatorVariant, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(glassProgressVariants({ intensity, variant }), className)}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className={cn(glassProgressIndicatorVariants({ variant: indicatorVariant }))}
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
))
GlassProgress.displayName = ProgressPrimitive.Root.displayName

export { GlassProgress }
import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const GlassTooltipProvider = TooltipPrimitive.Provider

const GlassTooltip = TooltipPrimitive.Root

const GlassTooltipTrigger = TooltipPrimitive.Trigger

const glassTooltipContentVariants = cva(
  "z-50 overflow-hidden rounded-md px-3 py-1.5 text-sm animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
  {
    variants: {
      intensity: {
        subtle: "bg-white/10 backdrop-blur-sm border border-white/20 text-white shadow-lg",
        medium: "bg-white/15 backdrop-blur-md border border-white/25 text-white shadow-xl",
        strong: "bg-white/20 backdrop-blur-lg border border-white/30 text-white shadow-2xl",
      },
      variant: {
        default: "",
        gradient: "bg-gradient-to-br from-purple-500/20 to-pink-500/20",
        dark: "bg-black/20 backdrop-blur-md border-black/30",
      },
    },
    defaultVariants: {
      intensity: "medium",
      variant: "default",
    },
  }
)

export interface GlassTooltipContentProps
  extends React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>,
    VariantProps<typeof glassTooltipContentVariants> {}

const GlassTooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  GlassTooltipContentProps
>(({ className, sideOffset = 4, intensity, variant, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(glassTooltipContentVariants({ intensity, variant }), className)}
    {...props}
  />
))
GlassTooltipContent.displayName = TooltipPrimitive.Content.displayName

export {
  GlassTooltip,
  GlassTooltipTrigger,
  GlassTooltipContent,
  GlassTooltipProvider,
}
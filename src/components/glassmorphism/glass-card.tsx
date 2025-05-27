import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const glassCardVariants = cva(
  "rounded-xl backdrop-blur-md transition-all",
  {
    variants: {
      intensity: {
        subtle: "bg-white/5 backdrop-blur-sm border border-white/10",
        medium: "bg-white/10 backdrop-blur-md border border-white/20",
        strong: "bg-white/20 backdrop-blur-lg border border-white/30",
        ultra: "bg-white/30 backdrop-blur-xl border border-white/40",
      },
      variant: {
        default: "shadow-xl shadow-black/10",
        elevated: "shadow-2xl shadow-black/20 hover:shadow-black/30",
        inset: "shadow-inner shadow-black/10",
      },
      gradient: {
        none: "",
        subtle: "bg-gradient-to-br from-white/10 to-white/5",
        vibrant: "bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-cyan-500/10",
        aurora: "bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10",
      },
    },
    defaultVariants: {
      intensity: "medium",
      variant: "default",
      gradient: "none",
    },
  }
)

export interface GlassCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof glassCardVariants> {}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, intensity, variant, gradient, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        glassCardVariants({ intensity, variant, gradient }),
        className
      )}
      {...props}
    />
  )
)
GlassCard.displayName = "GlassCard"

const GlassCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
GlassCardHeader.displayName = "GlassCardHeader"

const GlassCardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight text-white",
      className
    )}
    {...props}
  />
))
GlassCardTitle.displayName = "GlassCardTitle"

const GlassCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-white/70", className)}
    {...props}
  />
))
GlassCardDescription.displayName = "GlassCardDescription"

const GlassCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
GlassCardContent.displayName = "GlassCardContent"

const GlassCardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
GlassCardFooter.displayName = "GlassCardFooter"

export {
  GlassCard,
  GlassCardHeader,
  GlassCardFooter,
  GlassCardTitle,
  GlassCardDescription,
  GlassCardContent,
}
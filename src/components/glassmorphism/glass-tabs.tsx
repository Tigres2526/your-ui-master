import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const GlassTabs = TabsPrimitive.Root

const glassTabsListVariants = cva(
  "inline-flex items-center justify-center rounded-lg p-1 backdrop-blur-md",
  {
    variants: {
      intensity: {
        subtle: "bg-white/5 backdrop-blur-sm border border-white/10",
        medium: "bg-white/10 backdrop-blur-md border border-white/20",
        strong: "bg-white/20 backdrop-blur-lg border border-white/30",
      },
    },
    defaultVariants: {
      intensity: "medium",
    },
  }
)

export interface GlassTabsListProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>,
    VariantProps<typeof glassTabsListVariants> {}

const GlassTabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  GlassTabsListProps
>(({ className, intensity, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(glassTabsListVariants({ intensity }), className)}
    {...props}
  />
))
GlassTabsList.displayName = TabsPrimitive.List.displayName

const glassTabsTriggerVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium ring-offset-white/10 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "data-[state=active]:bg-white/20 data-[state=active]:text-white text-white/70 hover:text-white",
        ghost: "data-[state=active]:bg-white/10 data-[state=active]:backdrop-blur-lg text-white/70 hover:text-white",
        outline: "data-[state=active]:border data-[state=active]:border-white/30 data-[state=active]:bg-white/10 text-white/70 hover:text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface GlassTabsTriggerProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>,
    VariantProps<typeof glassTabsTriggerVariants> {}

const GlassTabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  GlassTabsTriggerProps
>(({ className, variant, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(glassTabsTriggerVariants({ variant }), className)}
    {...props}
  />
))
GlassTabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const glassTabsContentVariants = cva(
  "mt-2 ring-offset-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2 rounded-lg p-6",
  {
    variants: {
      intensity: {
        subtle: "bg-white/5 backdrop-blur-sm border border-white/10",
        medium: "bg-white/10 backdrop-blur-md border border-white/20",
        strong: "bg-white/20 backdrop-blur-lg border border-white/30",
      },
    },
    defaultVariants: {
      intensity: "medium",
    },
  }
)

export interface GlassTabsContentProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>,
    VariantProps<typeof glassTabsContentVariants> {}

const GlassTabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  GlassTabsContentProps
>(({ className, intensity, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(glassTabsContentVariants({ intensity }), className)}
    {...props}
  />
))
GlassTabsContent.displayName = TabsPrimitive.Content.displayName

export { GlassTabs, GlassTabsList, GlassTabsTrigger, GlassTabsContent }
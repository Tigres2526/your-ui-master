import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const GlassModal = DialogPrimitive.Root

const GlassModalTrigger = DialogPrimitive.Trigger

const GlassModalPortal = DialogPrimitive.Portal

const GlassModalClose = DialogPrimitive.Close

const GlassModalOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
  />
))
GlassModalOverlay.displayName = DialogPrimitive.Overlay.displayName

const glassModalContentVariants = cva(
  "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 p-6 shadow-2xl duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-lg",
  {
    variants: {
      intensity: {
        subtle: "bg-white/5 backdrop-blur-sm border border-white/10",
        medium: "bg-white/10 backdrop-blur-md border border-white/20",
        strong: "bg-white/20 backdrop-blur-lg border border-white/30",
        ultra: "bg-white/30 backdrop-blur-xl border border-white/40",
      },
    },
    defaultVariants: {
      intensity: "strong",
    },
  }
)

export interface GlassModalContentProps
  extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>,
    VariantProps<typeof glassModalContentVariants> {}

const GlassModalContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  GlassModalContentProps
>(({ className, children, intensity, ...props }, ref) => (
  <GlassModalPortal>
    <GlassModalOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(glassModalContentVariants({ intensity }), className)}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white/10 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-white/10">
        <X className="h-4 w-4 text-white" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </GlassModalPortal>
))
GlassModalContent.displayName = DialogPrimitive.Content.displayName

const GlassModalHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
GlassModalHeader.displayName = "GlassModalHeader"

const GlassModalFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
)
GlassModalFooter.displayName = "GlassModalFooter"

const GlassModalTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight text-white",
      className
    )}
    {...props}
  />
))
GlassModalTitle.displayName = DialogPrimitive.Title.displayName

const GlassModalDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-white/70", className)}
    {...props}
  />
))
GlassModalDescription.displayName = DialogPrimitive.Description.displayName

export {
  GlassModal,
  GlassModalPortal,
  GlassModalOverlay,
  GlassModalClose,
  GlassModalTrigger,
  GlassModalContent,
  GlassModalHeader,
  GlassModalFooter,
  GlassModalTitle,
  GlassModalDescription,
}
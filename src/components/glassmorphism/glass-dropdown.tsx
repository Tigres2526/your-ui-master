import * as React from "react"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { Check, ChevronRight, Circle } from "lucide-react"
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const GlassDropdownMenu = DropdownMenuPrimitive.Root
const GlassDropdownMenuTrigger = DropdownMenuPrimitive.Trigger
const GlassDropdownMenuGroup = DropdownMenuPrimitive.Group
const GlassDropdownMenuPortal = DropdownMenuPrimitive.Portal
const GlassDropdownMenuSub = DropdownMenuPrimitive.Sub
const GlassDropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup

const glassDropdownContentVariants = cva(
  "z-50 min-w-[8rem] overflow-hidden rounded-md p-1 shadow-2xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
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

export interface GlassDropdownMenuContentProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>,
    VariantProps<typeof glassDropdownContentVariants> {}

const GlassDropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-white/10 data-[state=open]:bg-white/10 text-white",
      inset && "pl-8",
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </DropdownMenuPrimitive.SubTrigger>
))
GlassDropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName

const GlassDropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent> & 
    VariantProps<typeof glassDropdownContentVariants>
>(({ className, intensity, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(glassDropdownContentVariants({ intensity }), className)}
    {...props}
  />
))
GlassDropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName

const GlassDropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  GlassDropdownMenuContentProps
>(({ className, sideOffset = 4, intensity, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(glassDropdownContentVariants({ intensity }), className)}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
))
GlassDropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName

const glassDropdownItemVariants = cva(
  "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
  {
    variants: {
      variant: {
        default: "focus:bg-white/10 focus:text-white text-white/90",
        destructive: "focus:bg-red-500/20 focus:text-red-100 text-red-200",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface GlassDropdownMenuItemProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item>,
    VariantProps<typeof glassDropdownItemVariants> {
  inset?: boolean
}

const GlassDropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  GlassDropdownMenuItemProps
>(({ className, inset, variant, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      glassDropdownItemVariants({ variant }),
      inset && "pl-8",
      className
    )}
    {...props}
  />
))
GlassDropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName

const GlassDropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-white/10 focus:text-white data-[disabled]:pointer-events-none data-[disabled]:opacity-50 text-white/90",
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
))
GlassDropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName

const GlassDropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-white/10 focus:text-white data-[disabled]:pointer-events-none data-[disabled]:opacity-50 text-white/90",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
))
GlassDropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName

const GlassDropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn(
      "px-2 py-1.5 text-sm font-semibold text-white/70",
      inset && "pl-8",
      className
    )}
    {...props}
  />
))
GlassDropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName

const GlassDropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-white/20", className)}
    {...props}
  />
))
GlassDropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName

const GlassDropdownMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn("ml-auto text-xs tracking-widest text-white/50", className)}
      {...props}
    />
  )
}
GlassDropdownMenuShortcut.displayName = "GlassDropdownMenuShortcut"

export {
  GlassDropdownMenu,
  GlassDropdownMenuTrigger,
  GlassDropdownMenuContent,
  GlassDropdownMenuItem,
  GlassDropdownMenuCheckboxItem,
  GlassDropdownMenuRadioItem,
  GlassDropdownMenuLabel,
  GlassDropdownMenuSeparator,
  GlassDropdownMenuShortcut,
  GlassDropdownMenuGroup,
  GlassDropdownMenuPortal,
  GlassDropdownMenuSub,
  GlassDropdownMenuSubContent,
  GlassDropdownMenuSubTrigger,
  GlassDropdownMenuRadioGroup,
}
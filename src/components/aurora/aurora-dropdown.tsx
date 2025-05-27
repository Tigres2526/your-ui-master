'use client'

import * as React from 'react'
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { Check, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const AuroraDropdownMenu = DropdownMenuPrimitive.Root
const AuroraDropdownMenuTrigger = DropdownMenuPrimitive.Trigger
const AuroraDropdownMenuGroup = DropdownMenuPrimitive.Group
const AuroraDropdownMenuPortal = DropdownMenuPrimitive.Portal
const AuroraDropdownMenuSub = DropdownMenuPrimitive.Sub
const AuroraDropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup

const AuroraDropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      'flex cursor-default select-none items-center rounded-lg px-2 py-1.5 text-sm outline-none',
      'hover:bg-gradient-to-r hover:from-blue-500/10 hover:via-purple-500/10 hover:to-pink-500/10',
      'focus:bg-gradient-to-r focus:from-blue-500/10 focus:via-purple-500/10 focus:to-pink-500/10',
      'data-[state=open]:bg-gradient-to-r data-[state=open]:from-blue-500/10 data-[state=open]:via-purple-500/10 data-[state=open]:to-pink-500/10',
      inset && 'pl-8',
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </DropdownMenuPrimitive.SubTrigger>
))
AuroraDropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName

const AuroraDropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      'z-50 min-w-[8rem] overflow-hidden rounded-xl p-1',
      'bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-xl',
      'border border-white/20 shadow-2xl shadow-purple-500/30',
      'data-[state=open]:animate-in data-[state=closed]:animate-out',
      'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
      'data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2',
      'data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
      className
    )}
    {...props}
  />
))
AuroraDropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName

const AuroraDropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        'z-50 min-w-[8rem] overflow-hidden rounded-xl p-1',
        'bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-xl',
        'border border-white/20 shadow-2xl shadow-purple-500/30',
        'data-[state=open]:animate-in data-[state=closed]:animate-out',
        'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
        'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
        'data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2',
        'data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        className
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
))
AuroraDropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName

const AuroraDropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      'relative flex cursor-default select-none items-center rounded-lg px-2 py-1.5 text-sm outline-none transition-colors',
      'hover:bg-gradient-to-r hover:from-blue-500/10 hover:via-purple-500/10 hover:to-pink-500/10',
      'focus:bg-gradient-to-r focus:from-blue-500/10 focus:via-purple-500/10 focus:to-pink-500/10',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      inset && 'pl-8',
      className
    )}
    {...props}
  />
))
AuroraDropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName

const AuroraDropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      'relative flex cursor-default select-none items-center rounded-lg py-1.5 pl-8 pr-2 text-sm outline-none transition-colors',
      'hover:bg-gradient-to-r hover:from-blue-500/10 hover:via-purple-500/10 hover:to-pink-500/10',
      'focus:bg-gradient-to-r focus:from-blue-500/10 focus:via-purple-500/10 focus:to-pink-500/10',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
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
AuroraDropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName

const AuroraDropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      'relative flex cursor-default select-none items-center rounded-lg py-1.5 pl-8 pr-2 text-sm outline-none transition-colors',
      'hover:bg-gradient-to-r hover:from-blue-500/10 hover:via-purple-500/10 hover:to-pink-500/10',
      'focus:bg-gradient-to-r focus:from-blue-500/10 focus:via-purple-500/10 focus:to-pink-500/10',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <div className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
))
AuroraDropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName

const AuroraDropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn(
      'px-2 py-1.5 text-sm font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent',
      inset && 'pl-8',
      className
    )}
    {...props}
  />
))
AuroraDropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName

const AuroraDropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn('-mx-1 my-1 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent', className)}
    {...props}
  />
))
AuroraDropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName

const AuroraDropdownMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn('ml-auto text-xs tracking-widest opacity-60', className)}
      {...props}
    />
  )
}
AuroraDropdownMenuShortcut.displayName = 'AuroraDropdownMenuShortcut'

export {
  AuroraDropdownMenu,
  AuroraDropdownMenuTrigger,
  AuroraDropdownMenuContent,
  AuroraDropdownMenuItem,
  AuroraDropdownMenuCheckboxItem,
  AuroraDropdownMenuRadioItem,
  AuroraDropdownMenuLabel,
  AuroraDropdownMenuSeparator,
  AuroraDropdownMenuShortcut,
  AuroraDropdownMenuGroup,
  AuroraDropdownMenuPortal,
  AuroraDropdownMenuSub,
  AuroraDropdownMenuSubContent,
  AuroraDropdownMenuSubTrigger,
  AuroraDropdownMenuRadioGroup,
}
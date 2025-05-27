'use client'

import * as React from 'react'
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { Check, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const BrutalismDropdownMenu = DropdownMenuPrimitive.Root
const BrutalismDropdownMenuTrigger = DropdownMenuPrimitive.Trigger
const BrutalismDropdownMenuGroup = DropdownMenuPrimitive.Group
const BrutalismDropdownMenuPortal = DropdownMenuPrimitive.Portal
const BrutalismDropdownMenuSub = DropdownMenuPrimitive.Sub
const BrutalismDropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup

const BrutalismDropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      'flex cursor-default select-none items-center px-3 py-2 text-sm font-bold uppercase outline-none',
      'hover:bg-yellow-400 focus:bg-yellow-400',
      'data-[state=open]:bg-yellow-400',
      inset && 'pl-8',
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" strokeWidth={3} />
  </DropdownMenuPrimitive.SubTrigger>
))
BrutalismDropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName

const BrutalismDropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      'z-50 min-w-[8rem] overflow-hidden p-1',
      'bg-white border-4 border-black shadow-[6px_6px_0_0_rgba(0,0,0,1)]',
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
BrutalismDropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName

const BrutalismDropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        'z-50 min-w-[8rem] overflow-hidden p-1',
        'bg-white border-4 border-black shadow-[6px_6px_0_0_rgba(0,0,0,1)]',
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
BrutalismDropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName

const BrutalismDropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      'relative flex cursor-default select-none items-center px-3 py-2 text-sm font-bold uppercase outline-none transition-colors',
      'hover:bg-yellow-400 focus:bg-yellow-400',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      inset && 'pl-8',
      className
    )}
    {...props}
  />
))
BrutalismDropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName

const BrutalismDropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      'relative flex cursor-default select-none items-center py-2 pl-8 pr-3 text-sm font-bold uppercase outline-none transition-colors',
      'hover:bg-yellow-400 focus:bg-yellow-400',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-4 w-4 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Check className="h-4 w-4" strokeWidth={3} />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
))
BrutalismDropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName

const BrutalismDropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      'relative flex cursor-default select-none items-center py-2 pl-8 pr-3 text-sm font-bold uppercase outline-none transition-colors',
      'hover:bg-yellow-400 focus:bg-yellow-400',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-4 w-4 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <div className="h-2 w-2 bg-black" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
))
BrutalismDropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName

const BrutalismDropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn(
      'px-3 py-2 text-sm font-black uppercase',
      inset && 'pl-8',
      className
    )}
    {...props}
  />
))
BrutalismDropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName

const BrutalismDropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn('-mx-1 my-1 h-1 bg-black', className)}
    {...props}
  />
))
BrutalismDropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName

const BrutalismDropdownMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn('ml-auto text-xs uppercase tracking-widest opacity-60', className)}
      {...props}
    />
  )
}
BrutalismDropdownMenuShortcut.displayName = 'BrutalismDropdownMenuShortcut'

export {
  BrutalismDropdownMenu,
  BrutalismDropdownMenuTrigger,
  BrutalismDropdownMenuContent,
  BrutalismDropdownMenuItem,
  BrutalismDropdownMenuCheckboxItem,
  BrutalismDropdownMenuRadioItem,
  BrutalismDropdownMenuLabel,
  BrutalismDropdownMenuSeparator,
  BrutalismDropdownMenuShortcut,
  BrutalismDropdownMenuGroup,
  BrutalismDropdownMenuPortal,
  BrutalismDropdownMenuSub,
  BrutalismDropdownMenuSubContent,
  BrutalismDropdownMenuSubTrigger,
  BrutalismDropdownMenuRadioGroup,
}
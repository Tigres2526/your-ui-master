'use client'

import React from 'react'
import * as SelectPrimitive from '@radix-ui/react-select'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { memphisSelect } from '@/styles/memphis'
import { VariantProps } from 'class-variance-authority'

const MemphisSelect = SelectPrimitive.Root

const MemphisSelectGroup = SelectPrimitive.Group

const MemphisSelectValue = SelectPrimitive.Value

interface MemphisSelectTriggerProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>,
    VariantProps<typeof memphisSelect> {}

const MemphisSelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  MemphisSelectTriggerProps
>(({ className, variant, size, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      memphisSelect({ variant, size }),
      'flex items-center justify-between',
      'focus:outline-none focus-visible:ring-4 focus-visible:ring-[#FF1744] focus-visible:ring-offset-2',
      'disabled:opacity-50 disabled:cursor-not-allowed',
      className
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="h-4 w-4 opacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
))
MemphisSelectTrigger.displayName = SelectPrimitive.Trigger.displayName

const MemphisSelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = 'popper', ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        'relative z-50 min-w-[8rem] overflow-hidden',
        'bg-white border-4 border-black shadow-[6px_6px_0_0_rgba(0,0,0,1)]',
        'data-[state=open]:animate-in data-[state=closed]:animate-out',
        'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
        'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
        position === 'popper' &&
          'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
        className
      )}
      position={position}
      {...props}
    >
      <SelectPrimitive.Viewport
        className={cn(
          'p-1',
          position === 'popper' &&
            'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]'
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
))
MemphisSelectContent.displayName = SelectPrimitive.Content.displayName

const MemphisSelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn('py-1.5 pl-8 pr-2 text-sm font-bold uppercase', className)}
    {...props}
  />
))
MemphisSelectLabel.displayName = SelectPrimitive.Label.displayName

const MemphisSelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      'relative flex w-full cursor-default select-none items-center py-2 px-4 text-sm font-bold outline-none',
      'hover:bg-[#FFEB3B] data-[state=checked]:bg-[#FF1744] data-[state=checked]:text-white',
      'focus:bg-[#00BCD4] focus:text-black',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className
    )}
    {...props}
  >
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
))
MemphisSelectItem.displayName = SelectPrimitive.Item.displayName

const MemphisSelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn('-mx-1 my-1 h-1 bg-black', className)}
    {...props}
  />
))
MemphisSelectSeparator.displayName = SelectPrimitive.Separator.displayName

export {
  MemphisSelect,
  MemphisSelectGroup,
  MemphisSelectValue,
  MemphisSelectTrigger,
  MemphisSelectContent,
  MemphisSelectLabel,
  MemphisSelectItem,
  MemphisSelectSeparator,
}
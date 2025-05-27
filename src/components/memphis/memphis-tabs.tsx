'use client'

import React from 'react'
import * as TabsPrimitive from '@radix-ui/react-tabs'
import { cn } from '@/lib/utils'
import { memphisTabs } from '@/styles/memphis'

const MemphisTabs = TabsPrimitive.Root

const MemphisTabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> & {
    variant?: 'default' | 'bordered'
  }
>(({ className, variant = 'default', ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(memphisTabs({ variant }), className)}
    {...props}
  />
))
MemphisTabsList.displayName = TabsPrimitive.List.displayName

const MemphisTabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      'inline-flex items-center justify-center whitespace-nowrap px-4 py-2 text-base font-bold uppercase transition-all',
      'bg-white text-black border-4 border-black',
      'data-[state=active]:bg-[#FF1744] data-[state=active]:text-white',
      'data-[state=active]:shadow-[4px_4px_0_0_rgba(0,0,0,1)]',
      'hover:bg-[#FFEB3B] hover:rotate-2',
      'focus:outline-none focus-visible:ring-4 focus-visible:ring-[#FF1744] focus-visible:ring-offset-2',
      'disabled:opacity-50 disabled:pointer-events-none',
      className
    )}
    {...props}
  />
))
MemphisTabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const MemphisTabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      'mt-4 focus:outline-none',
      className
    )}
    {...props}
  />
))
MemphisTabsContent.displayName = TabsPrimitive.Content.displayName

export { MemphisTabs, MemphisTabsList, MemphisTabsTrigger, MemphisTabsContent }
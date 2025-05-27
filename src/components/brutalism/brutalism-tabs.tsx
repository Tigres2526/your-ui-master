'use client'

import * as React from 'react'
import * as TabsPrimitive from '@radix-ui/react-tabs'
import { cn } from '@/lib/utils'

const BrutalismTabs = TabsPrimitive.Root

const BrutalismTabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      'inline-flex items-center justify-center bg-black p-1',
      className
    )}
    {...props}
  />
))
BrutalismTabsList.displayName = TabsPrimitive.List.displayName

const BrutalismTabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      'inline-flex items-center justify-center whitespace-nowrap px-4 py-2 text-base font-bold uppercase transition-all',
      'focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-black focus-visible:ring-offset-4',
      'disabled:pointer-events-none disabled:opacity-50',
      'bg-white text-black border-2 border-transparent',
      'data-[state=active]:bg-yellow-400 data-[state=active]:border-black data-[state=active]:shadow-[4px_4px_0_0_rgba(0,0,0,1)]',
      'data-[state=active]:translate-x-[-2px] data-[state=active]:translate-y-[-2px]',
      'hover:bg-gray-100',
      className
    )}
    {...props}
  />
))
BrutalismTabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const BrutalismTabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      'mt-4 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-black focus-visible:ring-offset-4',
      'border-4 border-black bg-white p-6 shadow-[8px_8px_0_0_rgba(0,0,0,1)]',
      className
    )}
    {...props}
  />
))
BrutalismTabsContent.displayName = TabsPrimitive.Content.displayName

export { BrutalismTabs, BrutalismTabsList, BrutalismTabsTrigger, BrutalismTabsContent }
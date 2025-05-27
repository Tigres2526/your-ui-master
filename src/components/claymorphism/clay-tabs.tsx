'use client'

import React from 'react'
import * as TabsPrimitive from '@radix-ui/react-tabs'
import { cn } from '@/lib/utils'
import { clayTabs } from '@/styles/claymorphism'

const ClayTabs = TabsPrimitive.Root

const ClayTabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(clayTabs(), className)}
    {...props}
  />
))
ClayTabsList.displayName = TabsPrimitive.List.displayName

const ClayTabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      'inline-flex items-center justify-center whitespace-nowrap rounded-xl px-4 py-2 text-sm font-medium transition-all',
      'text-gray-600 hover:text-gray-800',
      'data-[state=active]:bg-white data-[state=active]:text-gray-800',
      'data-[state=active]:shadow-[0_10px_20px_-5px_rgba(0,0,0,0.15),inset_0_-2px_4px_rgba(255,255,255,0.8)]',
      'focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2',
      'disabled:opacity-50 disabled:pointer-events-none',
      className
    )}
    {...props}
  />
))
ClayTabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const ClayTabsContent = React.forwardRef<
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
ClayTabsContent.displayName = TabsPrimitive.Content.displayName

export { ClayTabs, ClayTabsList, ClayTabsTrigger, ClayTabsContent }
'use client'

import * as React from 'react'
import * as TabsPrimitive from '@radix-ui/react-tabs'
import { cn } from '@/lib/utils'

const CyberpunkTabs = TabsPrimitive.Root

const CyberpunkTabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      'inline-flex items-center justify-center bg-black/50 border border-cyan-400/50 p-1 backdrop-blur-sm',
      className
    )}
    {...props}
  />
))
CyberpunkTabsList.displayName = TabsPrimitive.List.displayName

const CyberpunkTabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      'inline-flex items-center justify-center whitespace-nowrap px-3 py-1.5 text-sm font-bold uppercase tracking-wider transition-all',
      'focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
      'text-cyan-400/70 hover:text-cyan-400',
      'data-[state=active]:bg-cyan-400/20 data-[state=active]:text-cyan-400',
      'data-[state=active]:shadow-[0_0_10px_rgba(0,255,255,0.5)]',
      'data-[state=active]:border data-[state=active]:border-cyan-400',
      className
    )}
    {...props}
  />
))
CyberpunkTabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const CyberpunkTabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      'mt-4 focus-visible:outline-none',
      'data-[state=active]:animate-in data-[state=active]:fade-in-0 data-[state=active]:slide-in-from-bottom-2',
      className
    )}
    {...props}
  />
))
CyberpunkTabsContent.displayName = TabsPrimitive.Content.displayName

export { CyberpunkTabs, CyberpunkTabsList, CyberpunkTabsTrigger, CyberpunkTabsContent }
'use client'

import * as React from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

const CyberpunkModal = DialogPrimitive.Root
const CyberpunkModalTrigger = DialogPrimitive.Trigger
const CyberpunkModalPortal = DialogPrimitive.Portal

const CyberpunkModalOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      'fixed inset-0 z-50 bg-black/80 backdrop-blur-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      'before:absolute before:inset-0 before:bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,255,255,0.03)_2px,rgba(0,255,255,0.03)_4px)]',
      className
    )}
    {...props}
  />
))
CyberpunkModalOverlay.displayName = DialogPrimitive.Overlay.displayName

const CyberpunkModalContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <CyberpunkModalPortal>
    <CyberpunkModalOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 p-6',
        'bg-gray-900/95 backdrop-blur-xl border border-cyan-400 shadow-[0_0_30px_rgba(0,255,255,0.5)]',
        'duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out',
        'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
        'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
        'data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]',
        'data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]',
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm text-cyan-400 opacity-70 transition-all hover:opacity-100 hover:text-cyan-300 hover:shadow-[0_0_10px_rgba(0,255,255,0.8)] focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </CyberpunkModalPortal>
))
CyberpunkModalContent.displayName = DialogPrimitive.Content.displayName

const CyberpunkModalHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'flex flex-col space-y-1.5 text-center sm:text-left',
      className
    )}
    {...props}
  />
)
CyberpunkModalHeader.displayName = 'CyberpunkModalHeader'

const CyberpunkModalFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
      className
    )}
    {...props}
  />
)
CyberpunkModalFooter.displayName = 'CyberpunkModalFooter'

const CyberpunkModalTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      'text-lg font-bold uppercase tracking-wider text-cyan-400',
      className
    )}
    {...props}
  />
))
CyberpunkModalTitle.displayName = DialogPrimitive.Title.displayName

const CyberpunkModalDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn('text-sm text-cyan-400/70', className)}
    {...props}
  />
))
CyberpunkModalDescription.displayName = DialogPrimitive.Description.displayName

export {
  CyberpunkModal,
  CyberpunkModalPortal,
  CyberpunkModalOverlay,
  CyberpunkModalTrigger,
  CyberpunkModalContent,
  CyberpunkModalHeader,
  CyberpunkModalFooter,
  CyberpunkModalTitle,
  CyberpunkModalDescription,
}
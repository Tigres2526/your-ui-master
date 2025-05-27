'use client'

import * as React from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

const BrutalismModal = DialogPrimitive.Root
const BrutalismModalTrigger = DialogPrimitive.Trigger
const BrutalismModalPortal = DialogPrimitive.Portal

const BrutalismModalOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      'fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      className
    )}
    {...props}
  />
))
BrutalismModalOverlay.displayName = DialogPrimitive.Overlay.displayName

const BrutalismModalContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <BrutalismModalPortal>
    <BrutalismModalOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 p-6',
        'bg-white border-4 border-black shadow-[12px_12px_0_0_rgba(0,0,0,1)]',
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
      <DialogPrimitive.Close className="absolute right-4 top-4 bg-red-500 text-white border-2 border-black p-1 shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0_0_rgba(0,0,0,1)] focus:outline-none focus:ring-4 focus:ring-black focus:ring-offset-2 transition-all duration-150">
        <X className="h-5 w-5" strokeWidth={3} />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </BrutalismModalPortal>
))
BrutalismModalContent.displayName = DialogPrimitive.Content.displayName

const BrutalismModalHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'flex flex-col space-y-2 text-center sm:text-left',
      className
    )}
    {...props}
  />
)
BrutalismModalHeader.displayName = 'BrutalismModalHeader'

const BrutalismModalFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-4',
      className
    )}
    {...props}
  />
)
BrutalismModalFooter.displayName = 'BrutalismModalFooter'

const BrutalismModalTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      'text-2xl font-black uppercase',
      className
    )}
    {...props}
  />
))
BrutalismModalTitle.displayName = DialogPrimitive.Title.displayName

const BrutalismModalDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn('text-base font-medium', className)}
    {...props}
  />
))
BrutalismModalDescription.displayName = DialogPrimitive.Description.displayName

export {
  BrutalismModal,
  BrutalismModalPortal,
  BrutalismModalOverlay,
  BrutalismModalTrigger,
  BrutalismModalContent,
  BrutalismModalHeader,
  BrutalismModalFooter,
  BrutalismModalTitle,
  BrutalismModalDescription,
}
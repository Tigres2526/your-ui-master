import { cva } from 'class-variance-authority'

export const brutalismButton = cva(
  'relative inline-flex items-center justify-center font-bold uppercase transition-all duration-150 focus:outline-none focus:ring-4 focus:ring-black focus:ring-offset-4 disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        default: [
          'bg-yellow-400',
          'text-black',
          'border-4 border-black',
          'shadow-[6px_6px_0_0_rgba(0,0,0,1)]',
          'hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0_0_rgba(0,0,0,1)]',
          'active:translate-x-[6px] active:translate-y-[6px] active:shadow-none',
        ],
        danger: [
          'bg-red-500',
          'text-white',
          'border-4 border-black',
          'shadow-[6px_6px_0_0_rgba(0,0,0,1)]',
          'hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0_0_rgba(0,0,0,1)]',
          'active:translate-x-[6px] active:translate-y-[6px] active:shadow-none',
        ],
        primary: [
          'bg-blue-500',
          'text-white',
          'border-4 border-black',
          'shadow-[6px_6px_0_0_rgba(0,0,0,1)]',
          'hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0_0_rgba(0,0,0,1)]',
          'active:translate-x-[6px] active:translate-y-[6px] active:shadow-none',
        ],
        outline: [
          'bg-white',
          'text-black',
          'border-4 border-black',
          'shadow-[6px_6px_0_0_rgba(0,0,0,1)]',
          'hover:bg-gray-100',
          'hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0_0_rgba(0,0,0,1)]',
          'active:translate-x-[6px] active:translate-y-[6px] active:shadow-none',
        ],
      },
      size: {
        sm: 'h-10 px-4 text-sm',
        md: 'h-12 px-6 text-base',
        lg: 'h-14 px-8 text-lg',
        xl: 'h-16 px-10 text-xl',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
)

export const brutalismCard = cva(
  'relative transition-all duration-150',
  {
    variants: {
      variant: {
        default: [
          'bg-white',
          'border-4 border-black',
          'shadow-[8px_8px_0_0_rgba(0,0,0,1)]',
          'hover:shadow-[12px_12px_0_0_rgba(0,0,0,1)]',
        ],
        yellow: [
          'bg-yellow-400',
          'border-4 border-black',
          'shadow-[8px_8px_0_0_rgba(0,0,0,1)]',
          'hover:shadow-[12px_12px_0_0_rgba(0,0,0,1)]',
        ],
        red: [
          'bg-red-500',
          'text-white',
          'border-4 border-black',
          'shadow-[8px_8px_0_0_rgba(0,0,0,1)]',
          'hover:shadow-[12px_12px_0_0_rgba(0,0,0,1)]',
        ],
        blue: [
          'bg-blue-500',
          'text-white',
          'border-4 border-black',
          'shadow-[8px_8px_0_0_rgba(0,0,0,1)]',
          'hover:shadow-[12px_12px_0_0_rgba(0,0,0,1)]',
        ],
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export const brutalismInput = cva(
  'w-full px-4 py-3 text-base font-medium transition-all duration-150 focus:outline-none',
  {
    variants: {
      variant: {
        default: [
          'bg-white',
          'text-black',
          'border-4 border-black',
          'shadow-[4px_4px_0_0_rgba(0,0,0,1)]',
          'focus:translate-x-[2px] focus:translate-y-[2px] focus:shadow-[2px_2px_0_0_rgba(0,0,0,1)]',
          'placeholder:text-gray-600',
        ],
        yellow: [
          'bg-yellow-100',
          'text-black',
          'border-4 border-black',
          'shadow-[4px_4px_0_0_rgba(0,0,0,1)]',
          'focus:bg-yellow-200',
          'focus:translate-x-[2px] focus:translate-y-[2px] focus:shadow-[2px_2px_0_0_rgba(0,0,0,1)]',
          'placeholder:text-gray-700',
        ],
        danger: [
          'bg-red-100',
          'text-black',
          'border-4 border-black',
          'shadow-[4px_4px_0_0_rgba(0,0,0,1)]',
          'focus:bg-red-200',
          'focus:translate-x-[2px] focus:translate-y-[2px] focus:shadow-[2px_2px_0_0_rgba(0,0,0,1)]',
          'placeholder:text-gray-700',
        ],
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export const brutalismBadge = cva(
  'inline-flex items-center px-3 py-1 text-sm font-bold uppercase border-2 border-black',
  {
    variants: {
      variant: {
        default: [
          'bg-yellow-400',
          'text-black',
          'shadow-[2px_2px_0_0_rgba(0,0,0,1)]',
        ],
        danger: [
          'bg-red-500',
          'text-white',
          'shadow-[2px_2px_0_0_rgba(0,0,0,1)]',
        ],
        primary: [
          'bg-blue-500',
          'text-white',
          'shadow-[2px_2px_0_0_rgba(0,0,0,1)]',
        ],
        success: [
          'bg-green-500',
          'text-white',
          'shadow-[2px_2px_0_0_rgba(0,0,0,1)]',
        ],
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export const brutalismProgress = cva(
  'relative h-8 w-full overflow-hidden border-4 border-black',
  {
    variants: {
      variant: {
        default: 'bg-gray-200',
        striped: 'bg-gray-200',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)
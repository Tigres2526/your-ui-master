import { cva } from 'class-variance-authority'

export const memphisButton = cva(
  'relative font-bold uppercase tracking-wider transition-all duration-250 transform hover:rotate-2 active:rotate-0',
  {
    variants: {
      variant: {
        default: 'bg-white text-black border-4 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:shadow-[6px_6px_0_0_rgba(0,0,0,1)] active:shadow-[2px_2px_0_0_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px]',
        primary: 'bg-[#FF1744] text-white border-4 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:shadow-[6px_6px_0_0_rgba(0,0,0,1)] active:shadow-[2px_2px_0_0_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px]',
        secondary: 'bg-[#00BCD4] text-black border-4 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:shadow-[6px_6px_0_0_rgba(0,0,0,1)] active:shadow-[2px_2px_0_0_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px]',
        accent: 'bg-[#FFEB3B] text-black border-4 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:shadow-[6px_6px_0_0_rgba(0,0,0,1)] active:shadow-[2px_2px_0_0_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px]',
        ghost: 'bg-transparent text-black border-4 border-black hover:bg-white',
        outline: 'bg-transparent text-black border-4 border-dashed border-black hover:bg-[#FFEB3B]',
      },
      size: {
        sm: 'h-8 px-3 text-sm',
        default: 'h-12 px-6 text-base',
        lg: 'h-16 px-8 text-xl',
        icon: 'h-12 w-12',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export const memphisCard = cva(
  'relative bg-white border-4 border-black transition-all duration-250',
  {
    variants: {
      variant: {
        default: 'shadow-[6px_6px_0_0_rgba(0,0,0,1)]',
        primary: 'bg-[#FF1744] text-white shadow-[6px_6px_0_0_rgba(0,0,0,1)]',
        secondary: 'bg-[#00BCD4] shadow-[6px_6px_0_0_rgba(0,0,0,1)]',
        accent: 'bg-[#FFEB3B] shadow-[6px_6px_0_0_rgba(0,0,0,1)]',
        pattern: 'shadow-[6px_6px_0_0_rgba(0,0,0,1)] before:absolute before:inset-0 before:bg-[radial-gradient(circle,_#000_1px,_transparent_1px)] before:bg-[length:20px_20px] before:opacity-10',
        floating: 'shadow-[8px_8px_0_0_rgba(0,0,0,1)] hover:shadow-[12px_12px_0_0_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1',
      },
      size: {
        sm: 'p-4',
        default: 'p-6',
        lg: 'p-8',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export const memphisInput = cva(
  'w-full bg-white text-black placeholder-gray-500 border-4 border-black font-bold transition-all duration-250 outline-none',
  {
    variants: {
      variant: {
        default: 'shadow-[4px_4px_0_0_rgba(0,0,0,1)] focus:shadow-[2px_2px_0_0_rgba(0,0,0,1)] focus:translate-x-[2px] focus:translate-y-[2px]',
        filled: 'bg-[#FFEB3B] shadow-[4px_4px_0_0_rgba(0,0,0,1)] focus:shadow-[2px_2px_0_0_rgba(0,0,0,1)] focus:translate-x-[2px] focus:translate-y-[2px]',
        underline: 'border-l-0 border-r-0 border-t-0 rounded-none shadow-none focus:bg-[#00BCD4]',
      },
      size: {
        sm: 'h-8 px-3 text-sm',
        default: 'h-12 px-4 text-base',
        lg: 'h-16 px-6 text-xl',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export const memphisBadge = cva(
  'inline-flex items-center font-bold uppercase border-2 border-black transition-all duration-250',
  {
    variants: {
      variant: {
        default: 'bg-white text-black',
        primary: 'bg-[#FF1744] text-white',
        secondary: 'bg-[#00BCD4] text-black',
        accent: 'bg-[#FFEB3B] text-black',
        outline: 'bg-transparent text-black border-dashed',
      },
      size: {
        sm: 'px-2 py-0.5 text-xs',
        default: 'px-3 py-1 text-sm',
        lg: 'px-4 py-2 text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export const memphisProgress = cva(
  'relative bg-white border-4 border-black overflow-hidden',
  {
    variants: {
      variant: {
        default: '',
        striped: 'after:absolute after:inset-0 after:bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(0,0,0,0.1)_10px,rgba(0,0,0,0.1)_20px)]',
      },
      size: {
        sm: 'h-4',
        default: 'h-8',
        lg: 'h-12',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export const memphisTabs = cva(
  'inline-flex gap-2',
  {
    variants: {
      variant: {
        default: '',
        bordered: 'p-2 border-4 border-black bg-white shadow-[4px_4px_0_0_rgba(0,0,0,1)]',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export const memphisSwitch = cva(
  'relative inline-flex cursor-pointer items-center border-4 border-black bg-white transition-all duration-250',
  {
    variants: {
      variant: {
        default: 'shadow-[4px_4px_0_0_rgba(0,0,0,1)]',
        flat: 'shadow-none',
      },
      size: {
        sm: 'h-6 w-12',
        default: 'h-8 w-16',
        lg: 'h-10 w-20',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export const memphisCheckbox = cva(
  'transition-all duration-250 cursor-pointer border-4 border-black bg-white',
  {
    variants: {
      variant: {
        default: 'shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:shadow-[4px_4px_0_0_rgba(0,0,0,1)]',
        circle: 'rounded-full shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:shadow-[4px_4px_0_0_rgba(0,0,0,1)]',
      },
      size: {
        sm: 'h-4 w-4',
        default: 'h-6 w-6',
        lg: 'h-8 w-8',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export const memphisRadio = cva(
  'transition-all duration-250 cursor-pointer rounded-full border-4 border-black bg-white',
  {
    variants: {
      variant: {
        default: 'shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:shadow-[4px_4px_0_0_rgba(0,0,0,1)]',
        flat: 'shadow-none',
      },
      size: {
        sm: 'h-4 w-4',
        default: 'h-6 w-6',
        lg: 'h-8 w-8',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export const memphisSelect = cva(
  'w-full bg-white text-black border-4 border-black font-bold transition-all duration-250 outline-none cursor-pointer',
  {
    variants: {
      variant: {
        default: 'shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:shadow-[6px_6px_0_0_rgba(0,0,0,1)]',
        filled: 'bg-[#FFEB3B] shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:shadow-[6px_6px_0_0_rgba(0,0,0,1)]',
      },
      size: {
        sm: 'h-8 px-3 text-sm',
        default: 'h-12 px-4 text-base',
        lg: 'h-16 px-6 text-xl',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)
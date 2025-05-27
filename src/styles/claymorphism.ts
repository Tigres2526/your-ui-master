import { cva } from 'class-variance-authority'

export const clayButton = cva(
  'relative font-medium transition-all duration-300 transform active:scale-95',
  {
    variants: {
      variant: {
        default: 'bg-white text-gray-800 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.2),inset_0_-4px_8px_rgba(255,255,255,0.8)] hover:shadow-[0_25px_50px_-20px_rgba(0,0,0,0.25),inset_0_-5px_10px_rgba(255,255,255,0.8)] active:shadow-[inset_0_4px_8px_rgba(0,0,0,0.2),inset_0_-2px_4px_rgba(255,255,255,0.6)]',
        primary: 'bg-gradient-to-br from-red-400 to-red-500 text-white shadow-[0_20px_40px_-15px_rgba(239,68,68,0.4),inset_0_-4px_8px_rgba(255,255,255,0.3)] hover:shadow-[0_25px_50px_-20px_rgba(239,68,68,0.5),inset_0_-5px_10px_rgba(255,255,255,0.3)] active:shadow-[inset_0_4px_8px_rgba(185,28,28,0.2),inset_0_-2px_4px_rgba(255,255,255,0.2)]',
        secondary: 'bg-gradient-to-br from-teal-400 to-teal-500 text-white shadow-[0_20px_40px_-15px_rgba(20,184,166,0.4),inset_0_-4px_8px_rgba(255,255,255,0.3)] hover:shadow-[0_25px_50px_-20px_rgba(20,184,166,0.5),inset_0_-5px_10px_rgba(255,255,255,0.3)] active:shadow-[inset_0_4px_8px_rgba(13,148,136,0.2),inset_0_-2px_4px_rgba(255,255,255,0.2)]',
        accent: 'bg-gradient-to-br from-yellow-300 to-yellow-400 text-gray-800 shadow-[0_20px_40px_-15px_rgba(251,191,36,0.4),inset_0_-4px_8px_rgba(255,255,255,0.5)] hover:shadow-[0_25px_50px_-20px_rgba(251,191,36,0.5),inset_0_-5px_10px_rgba(255,255,255,0.5)] active:shadow-[inset_0_4px_8px_rgba(217,119,6,0.2),inset_0_-2px_4px_rgba(255,255,255,0.3)]',
        ghost: 'bg-transparent text-gray-800 hover:bg-white/50 hover:shadow-[0_15px_30px_-10px_rgba(0,0,0,0.15),inset_0_-3px_6px_rgba(255,255,255,0.8)]',
        outline: 'bg-transparent border-2 border-gray-300 text-gray-800 hover:bg-white hover:shadow-[0_15px_30px_-10px_rgba(0,0,0,0.15),inset_0_-3px_6px_rgba(255,255,255,0.8)]',
      },
      size: {
        sm: 'h-9 px-4 text-sm rounded-2xl',
        default: 'h-11 px-6 text-base rounded-2xl',
        lg: 'h-14 px-8 text-lg rounded-3xl',
        icon: 'h-11 w-11 rounded-2xl',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export const clayCard = cva(
  'relative bg-white transition-all duration-300',
  {
    variants: {
      variant: {
        default: 'shadow-[0_20px_40px_-15px_rgba(0,0,0,0.2),inset_0_-4px_8px_rgba(255,255,255,0.8)]',
        elevated: 'shadow-[0_30px_60px_-25px_rgba(0,0,0,0.3),inset_0_-6px_12px_rgba(255,255,255,0.8)]',
        pressed: 'shadow-[inset_0_4px_8px_rgba(0,0,0,0.2),inset_0_-2px_4px_rgba(255,255,255,0.6)]',
        floating: 'shadow-[0_35px_70px_-30px_rgba(0,0,0,0.35),inset_0_-8px_16px_rgba(255,255,255,0.8)] hover:translate-y-[-2px] hover:shadow-[0_40px_80px_-35px_rgba(0,0,0,0.4),inset_0_-10px_20px_rgba(255,255,255,0.8)]',
        colored: 'bg-gradient-to-br from-red-50 to-pink-50 shadow-[0_20px_40px_-15px_rgba(239,68,68,0.2),inset_0_-4px_8px_rgba(255,255,255,0.8)]',
      },
      size: {
        sm: 'p-4 rounded-2xl',
        default: 'p-6 rounded-3xl',
        lg: 'p-8 rounded-[2rem]',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export const clayInput = cva(
  'w-full bg-white text-gray-800 placeholder-gray-400 transition-all duration-300 outline-none',
  {
    variants: {
      variant: {
        default: 'shadow-[inset_0_2px_4px_rgba(0,0,0,0.1),inset_0_-1px_2px_rgba(255,255,255,0.8)] focus:shadow-[inset_0_3px_6px_rgba(0,0,0,0.15),inset_0_-1px_2px_rgba(255,255,255,0.8)]',
        elevated: 'shadow-[0_10px_20px_-5px_rgba(0,0,0,0.1),inset_0_-2px_4px_rgba(255,255,255,0.8)] focus:shadow-[0_15px_30px_-10px_rgba(0,0,0,0.15),inset_0_-3px_6px_rgba(255,255,255,0.8)]',
        filled: 'bg-gray-100 shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)] focus:bg-white focus:shadow-[inset_0_2px_4px_rgba(0,0,0,0.1),inset_0_-1px_2px_rgba(255,255,255,0.8)]',
      },
      size: {
        sm: 'h-9 px-3 text-sm rounded-xl',
        default: 'h-11 px-4 text-base rounded-2xl',
        lg: 'h-14 px-6 text-lg rounded-2xl',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export const clayBadge = cva(
  'inline-flex items-center font-medium transition-all duration-300',
  {
    variants: {
      variant: {
        default: 'bg-white text-gray-800 shadow-[0_10px_20px_-5px_rgba(0,0,0,0.1),inset_0_-2px_4px_rgba(255,255,255,0.8)]',
        primary: 'bg-gradient-to-br from-red-400 to-red-500 text-white shadow-[0_10px_20px_-5px_rgba(239,68,68,0.3),inset_0_-2px_4px_rgba(255,255,255,0.3)]',
        secondary: 'bg-gradient-to-br from-teal-400 to-teal-500 text-white shadow-[0_10px_20px_-5px_rgba(20,184,166,0.3),inset_0_-2px_4px_rgba(255,255,255,0.3)]',
        accent: 'bg-gradient-to-br from-yellow-300 to-yellow-400 text-gray-800 shadow-[0_10px_20px_-5px_rgba(251,191,36,0.3),inset_0_-2px_4px_rgba(255,255,255,0.5)]',
        outline: 'bg-transparent border-2 border-gray-300 text-gray-800',
      },
      size: {
        sm: 'px-2 py-0.5 text-xs rounded-xl',
        default: 'px-3 py-1 text-sm rounded-2xl',
        lg: 'px-4 py-1.5 text-base rounded-2xl',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export const clayProgress = cva(
  'relative overflow-hidden bg-gray-200',
  {
    variants: {
      variant: {
        default: 'shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)]',
        elevated: 'shadow-[0_10px_20px_-5px_rgba(0,0,0,0.1),inset_0_-2px_4px_rgba(255,255,255,0.8)]',
      },
      size: {
        sm: 'h-2 rounded-xl',
        default: 'h-4 rounded-2xl',
        lg: 'h-6 rounded-2xl',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export const clayTabs = cva(
  'inline-flex p-1 bg-gray-100 shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)]',
  {
    variants: {
      variant: {
        default: 'rounded-2xl',
        pill: 'rounded-full',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export const claySwitch = cva(
  'relative inline-flex cursor-pointer items-center transition-all duration-300',
  {
    variants: {
      variant: {
        default: 'shadow-[inset_0_2px_4px_rgba(0,0,0,0.1),inset_0_-1px_2px_rgba(255,255,255,0.8)]',
        elevated: 'shadow-[0_10px_20px_-5px_rgba(0,0,0,0.1),inset_0_-2px_4px_rgba(255,255,255,0.8)]',
      },
      size: {
        sm: 'h-5 w-9',
        default: 'h-6 w-11',
        lg: 'h-7 w-14',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export const clayCheckbox = cva(
  'transition-all duration-300 cursor-pointer',
  {
    variants: {
      variant: {
        default: 'shadow-[inset_0_2px_4px_rgba(0,0,0,0.1),inset_0_-1px_2px_rgba(255,255,255,0.8)]',
        elevated: 'shadow-[0_10px_20px_-5px_rgba(0,0,0,0.1),inset_0_-2px_4px_rgba(255,255,255,0.8)]',
      },
      size: {
        sm: 'h-4 w-4 rounded-lg',
        default: 'h-5 w-5 rounded-xl',
        lg: 'h-6 w-6 rounded-xl',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export const clayRadio = cva(
  'transition-all duration-300 cursor-pointer rounded-full',
  {
    variants: {
      variant: {
        default: 'shadow-[inset_0_2px_4px_rgba(0,0,0,0.1),inset_0_-1px_2px_rgba(255,255,255,0.8)]',
        elevated: 'shadow-[0_10px_20px_-5px_rgba(0,0,0,0.1),inset_0_-2px_4px_rgba(255,255,255,0.8)]',
      },
      size: {
        sm: 'h-4 w-4',
        default: 'h-5 w-5',
        lg: 'h-6 w-6',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export const claySlider = cva(
  'relative flex items-center select-none touch-none',
  {
    variants: {
      variant: {
        default: '[&_[role=slider]]:shadow-[0_10px_20px_-5px_rgba(0,0,0,0.2),inset_0_-2px_4px_rgba(255,255,255,0.8)]',
        elevated: '[&_[role=slider]]:shadow-[0_15px_30px_-10px_rgba(0,0,0,0.25),inset_0_-3px_6px_rgba(255,255,255,0.8)]',
      },
      size: {
        sm: 'h-5 [&_[role=slider]]:h-4 [&_[role=slider]]:w-4',
        default: 'h-6 [&_[role=slider]]:h-5 [&_[role=slider]]:w-5',
        lg: 'h-8 [&_[role=slider]]:h-6 [&_[role=slider]]:w-6',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)
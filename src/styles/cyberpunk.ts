import { cva } from 'class-variance-authority'

export const cyberpunkButton = cva(
  'relative inline-flex items-center justify-center font-bold uppercase tracking-wider transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:pointer-events-none overflow-hidden',
  {
    variants: {
      variant: {
        neon: [
          'bg-transparent',
          'text-cyan-400',
          'border-2 border-cyan-400',
          'shadow-[0_0_10px_rgba(0,255,255,0.5),inset_0_0_10px_rgba(0,255,255,0.2)]',
          'hover:bg-cyan-400/20',
          'hover:shadow-[0_0_20px_rgba(0,255,255,0.8),inset_0_0_20px_rgba(0,255,255,0.3)]',
          'hover:text-white',
          'active:shadow-[0_0_30px_rgba(0,255,255,1),inset_0_0_30px_rgba(0,255,255,0.5)]',
        ],
        hologram: [
          'bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20',
          'text-white',
          'border border-cyan-400/50',
          'backdrop-blur-sm',
          'shadow-[0_0_15px_rgba(0,255,255,0.5)]',
          'hover:from-cyan-500/30 hover:via-purple-500/30 hover:to-pink-500/30',
          'hover:shadow-[0_0_25px_rgba(0,255,255,0.8)]',
          'before:absolute before:inset-0',
          'before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent',
          'before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-700',
        ],
        glitch: [
          'bg-black',
          'text-cyan-400',
          'border border-cyan-400',
          'shadow-[0_0_10px_rgba(0,255,255,0.5)]',
          'hover:animate-glitch',
          'hover:shadow-[0_0_20px_rgba(0,255,255,0.8)]',
          'data-glitch',
          'relative',
        ],
        terminal: [
          'bg-green-900/20',
          'text-green-400',
          'border border-green-400',
          'font-mono',
          'shadow-[0_0_10px_rgba(0,255,0,0.5)]',
          'hover:bg-green-900/40',
          'hover:shadow-[0_0_20px_rgba(0,255,0,0.8)]',
          'before:content-[">_"] before:mr-2',
        ],
      },
      size: {
        sm: 'h-8 px-3 text-xs',
        md: 'h-10 px-4 text-sm',
        lg: 'h-12 px-6 text-base',
        xl: 'h-14 px-8 text-lg',
      },
    },
    defaultVariants: {
      variant: 'neon',
      size: 'md',
    },
  }
)

export const cyberpunkCard = cva(
  'relative overflow-hidden transition-all duration-300',
  {
    variants: {
      variant: {
        default: [
          'bg-gray-900/90',
          'border border-cyan-400/50',
          'shadow-[0_0_20px_rgba(0,255,255,0.3)]',
          'backdrop-blur-md',
          'hover:border-cyan-400',
          'hover:shadow-[0_0_30px_rgba(0,255,255,0.5)]',
        ],
        neon: [
          'bg-black',
          'border-2 border-cyan-400',
          'shadow-[0_0_20px_rgba(0,255,255,0.5),inset_0_0_20px_rgba(0,255,255,0.1)]',
          'hover:shadow-[0_0_30px_rgba(0,255,255,0.8),inset_0_0_30px_rgba(0,255,255,0.2)]',
        ],
        hologram: [
          'bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-pink-900/20',
          'border border-cyan-400/30',
          'backdrop-blur-lg',
          'shadow-[0_0_30px_rgba(0,255,255,0.3)]',
          'hover:from-cyan-900/30 hover:via-purple-900/30 hover:to-pink-900/30',
          'hover:shadow-[0_0_40px_rgba(0,255,255,0.5)]',
        ],
        terminal: [
          'bg-black',
          'border border-green-400',
          'shadow-[0_0_20px_rgba(0,255,0,0.5)]',
          'font-mono',
          'before:absolute before:inset-0',
          'before:bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,255,0,0.03)_2px,rgba(0,255,0,0.03)_4px)]',
          'before:animate-scan',
        ],
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export const cyberpunkInput = cva(
  'w-full px-4 py-2 font-medium transition-all duration-300 bg-transparent focus:outline-none',
  {
    variants: {
      variant: {
        default: [
          'bg-gray-900/50',
          'text-cyan-400',
          'border border-cyan-400/50',
          'placeholder:text-cyan-400/50',
          'focus:border-cyan-400',
          'focus:shadow-[0_0_10px_rgba(0,255,255,0.5)]',
          'focus:bg-gray-900/80',
        ],
        neon: [
          'bg-black',
          'text-cyan-400',
          'border-2 border-cyan-400/50',
          'placeholder:text-cyan-400/30',
          'focus:border-cyan-400',
          'focus:shadow-[0_0_20px_rgba(0,255,255,0.8),inset_0_0_10px_rgba(0,255,255,0.2)]',
        ],
        terminal: [
          'bg-black',
          'text-green-400',
          'border border-green-400',
          'font-mono',
          'placeholder:text-green-400/50',
          'focus:shadow-[0_0_15px_rgba(0,255,0,0.8)]',
          'before:content-[">"] before:absolute before:left-2 before:text-green-400',
          'pl-8',
        ],
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export const cyberpunkBadge = cva(
  'inline-flex items-center px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider border',
  {
    variants: {
      variant: {
        neon: [
          'bg-transparent',
          'text-cyan-400',
          'border-cyan-400',
          'shadow-[0_0_10px_rgba(0,255,255,0.5)]',
        ],
        danger: [
          'bg-transparent',
          'text-pink-400',
          'border-pink-400',
          'shadow-[0_0_10px_rgba(255,0,153,0.5)]',
        ],
        success: [
          'bg-transparent',
          'text-green-400',
          'border-green-400',
          'shadow-[0_0_10px_rgba(0,255,0,0.5)]',
        ],
        warning: [
          'bg-transparent',
          'text-yellow-400',
          'border-yellow-400',
          'shadow-[0_0_10px_rgba(255,255,0,0.5)]',
        ],
      },
    },
    defaultVariants: {
      variant: 'neon',
    },
  }
)

export const cyberpunkProgress = cva(
  'relative h-2 w-full overflow-hidden bg-gray-900/50 border border-cyan-400/30',
  {
    variants: {
      variant: {
        default: '',
        neon: 'shadow-[inset_0_0_10px_rgba(0,255,255,0.2)]',
        glitch: 'animate-glitch',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)
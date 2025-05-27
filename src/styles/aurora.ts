import { cva } from 'class-variance-authority'

export const auroraButton = cva(
  'relative inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none overflow-hidden',
  {
    variants: {
      variant: {
        default: [
          'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500',
          'text-white',
          'hover:shadow-lg hover:shadow-purple-500/50',
          'before:absolute before:inset-0',
          'before:bg-gradient-to-r before:from-pink-500 before:via-purple-500 before:to-blue-500',
          'before:opacity-0 before:transition-opacity hover:before:opacity-100',
          'after:absolute after:inset-0 after:bg-gradient-to-r after:from-transparent after:via-white/20 after:to-transparent',
          'after:translate-x-[-200%] hover:after:translate-x-[200%] after:transition-transform after:duration-1000',
        ],
        outline: [
          'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-[2px]',
          'hover:shadow-lg hover:shadow-purple-500/50',
          'before:absolute before:inset-[2px] before:bg-background before:rounded-[inherit]',
          'after:absolute after:inset-0 after:bg-gradient-to-r after:from-transparent after:via-white/20 after:to-transparent',
          'after:translate-x-[-200%] hover:after:translate-x-[200%] after:transition-transform after:duration-1000',
        ],
        ghost: [
          'text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500',
          'hover:bg-gradient-to-r hover:from-blue-500/10 hover:via-purple-500/10 hover:to-pink-500/10',
          'hover:text-foreground',
        ],
        glow: [
          'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500',
          'text-white',
          'shadow-lg shadow-purple-500/50',
          'hover:shadow-xl hover:shadow-purple-500/70',
          'animate-pulse',
        ],
      },
      size: {
        sm: 'h-9 px-3 text-sm rounded-lg',
        md: 'h-10 px-4 text-sm rounded-xl',
        lg: 'h-11 px-6 text-base rounded-2xl',
        xl: 'h-12 px-8 text-lg rounded-3xl',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
)

export const auroraCard = cva(
  'relative overflow-hidden transition-all duration-300',
  {
    variants: {
      variant: {
        default: [
          'bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10',
          'backdrop-blur-sm',
          'border border-white/20',
          'hover:shadow-xl hover:shadow-purple-500/20',
          'hover:border-white/30',
        ],
        gradient: [
          'bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500',
          'text-white',
          'hover:shadow-2xl hover:shadow-purple-500/50',
          'before:absolute before:inset-0',
          'before:bg-gradient-to-br before:from-pink-500 before:via-purple-500 before:to-blue-500',
          'before:opacity-0 before:transition-opacity hover:before:opacity-100',
        ],
        glass: [
          'bg-white/5 backdrop-blur-lg',
          'border border-white/10',
          'hover:bg-white/10',
          'hover:border-white/20',
          'hover:shadow-lg hover:shadow-purple-500/20',
        ],
        floating: [
          'bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20',
          'backdrop-blur-md',
          'border border-white/30',
          'animate-float',
          'hover:scale-105',
          'shadow-2xl shadow-purple-500/30',
        ],
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export const auroraInput = cva(
  'w-full px-4 py-2 text-sm transition-all duration-300 bg-transparent focus:outline-none',
  {
    variants: {
      variant: {
        default: [
          'bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10',
          'border-2 border-transparent',
          'bg-origin-border',
          'bg-clip-padding,border-box',
          'rounded-xl',
          'focus:border-purple-500/50',
          'focus:shadow-lg focus:shadow-purple-500/20',
          'placeholder:text-muted-foreground/50',
        ],
        outline: [
          'border-2 border-purple-500/30',
          'rounded-xl',
          'hover:border-purple-500/50',
          'focus:border-purple-500',
          'focus:shadow-lg focus:shadow-purple-500/20',
          'bg-background/50 backdrop-blur-sm',
        ],
        glow: [
          'bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10',
          'border-2 border-purple-500/50',
          'rounded-xl',
          'shadow-lg shadow-purple-500/20',
          'focus:shadow-xl focus:shadow-purple-500/40',
          'focus:border-purple-500',
        ],
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export const auroraBadge = cva(
  'inline-flex items-center px-2.5 py-0.5 text-xs font-medium transition-all duration-300',
  {
    variants: {
      variant: {
        default: [
          'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500',
          'text-white',
          'rounded-full',
          'shadow-lg shadow-purple-500/30',
        ],
        outline: [
          'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-[1px]',
          'rounded-full',
          'shadow-md shadow-purple-500/20',
        ],
        ghost: [
          'text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500',
          'bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10',
          'rounded-full',
        ],
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export const auroraProgress = cva(
  'relative h-2 w-full overflow-hidden rounded-full',
  {
    variants: {
      variant: {
        default: 'bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20',
        glass: 'bg-white/10 backdrop-blur-sm',
        glow: 'bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 shadow-lg shadow-purple-500/20',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)
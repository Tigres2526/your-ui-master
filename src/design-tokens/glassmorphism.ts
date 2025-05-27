import { DesignTokens } from '@/types/design-tokens'

export const glassmorphismTokens: DesignTokens = {
  name: 'Glassmorphism',
  description: 'Frosted glass effect with transparency and blur',
  colors: {
    primary: '#3b82f6',
    secondary: '#8b5cf6',
    background: 'rgba(255, 255, 255, 0.1)',
    surface: 'rgba(255, 255, 255, 0.25)',
    text: {
      primary: '#ffffff',
      secondary: 'rgba(255, 255, 255, 0.8)',
      disabled: 'rgba(255, 255, 255, 0.5)'
    },
    border: 'rgba(255, 255, 255, 0.2)',
    error: '#ef4444',
    warning: '#f59e0b',
    success: '#10b981',
    info: '#3b82f6'
  },
  shadows: {
    xs: '0 2px 4px rgba(0, 0, 0, 0.1)',
    sm: '0 4px 6px rgba(0, 0, 0, 0.1)',
    md: '0 8px 16px rgba(0, 0, 0, 0.1)',
    lg: '0 16px 32px rgba(0, 0, 0, 0.1)',
    xl: '0 24px 48px rgba(0, 0, 0, 0.1)',
    inner: 'inset 0 2px 4px rgba(0, 0, 0, 0.1)',
    none: 'none'
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
    '2xl': '4rem',
    '3xl': '6rem'
  },
  typography: {
    fontFamily: {
      sans: 'Inter, system-ui, -apple-system, sans-serif',
      serif: 'Georgia, serif',
      mono: 'Menlo, Monaco, monospace'
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem'
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800
    },
    lineHeight: {
      tight: '1.25',
      normal: '1.5',
      relaxed: '1.75'
    }
  },
  animation: {
    duration: {
      fast: '200ms',
      normal: '400ms',
      slow: '600ms'
    },
    easing: {
      linear: 'linear',
      ease: 'ease',
      easeIn: 'ease-in',
      easeOut: 'ease-out',
      easeInOut: 'ease-in-out',
      bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
    }
  },
  borderRadius: {
    none: '0',
    sm: '0.375rem',
    md: '0.75rem',
    lg: '1rem',
    xl: '1.5rem',
    '2xl': '2rem',
    '3xl': '3rem',
    full: '9999px'
  },
  effects: {
    blur: {
      none: '0',
      sm: '4px',
      md: '12px',
      lg: '16px',
      xl: '24px'
    },
    opacity: {
      0: '0',
      10: '0.1',
      20: '0.2',
      30: '0.3',
      40: '0.4',
      50: '0.5',
      60: '0.6',
      70: '0.7',
      80: '0.8',
      90: '0.9',
      100: '1'
    },
    backdrop: {
      blur: 'blur(12px)',
      brightness: 'brightness(1.1)',
      contrast: 'contrast(1.1)',
      saturate: 'saturate(1.5)'
    }
  },
  custom: {
    glass: {
      light: {
        background: 'rgba(255, 255, 255, 0.25)',
        border: 'rgba(255, 255, 255, 0.3)',
        shadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
      },
      medium: {
        background: 'rgba(255, 255, 255, 0.15)',
        border: 'rgba(255, 255, 255, 0.2)',
        shadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
      },
      dark: {
        background: 'rgba(0, 0, 0, 0.25)',
        border: 'rgba(255, 255, 255, 0.1)',
        shadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
      }
    },
    gradients: {
      primary: 'linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.1) 100%)',
      secondary: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
      mesh: 'radial-gradient(at 40% 20%, hsla(28, 100%, 74%, 0.3) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(189, 100%, 56%, 0.3) 0px, transparent 50%)'
    }
  }
}
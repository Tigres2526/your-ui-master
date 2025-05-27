import { DesignTokens } from '@/types/design-tokens'

export const neumorphismTokens: DesignTokens = {
  name: 'Neumorphism',
  description: 'Soft UI design with realistic shadows and depth',
  colors: {
    primary: '#6366f1',
    secondary: '#8b5cf6',
    background: '#e0e0e0',
    surface: '#e0e0e0',
    text: {
      primary: '#2d3748',
      secondary: '#4a5568',
      disabled: '#a0aec0'
    },
    border: '#d2d6dc',
    error: '#ef4444',
    warning: '#f59e0b',
    success: '#10b981',
    info: '#3b82f6'
  },
  shadows: {
    xs: '2px 2px 4px #bebebe, -2px -2px 4px #ffffff',
    sm: '5px 5px 10px #bebebe, -5px -5px 10px #ffffff',
    md: '10px 10px 20px #bebebe, -10px -10px 20px #ffffff',
    lg: '20px 20px 40px #bebebe, -20px -20px 40px #ffffff',
    xl: '30px 30px 60px #bebebe, -30px -30px 60px #ffffff',
    inner: 'inset 5px 5px 10px #bebebe, inset -5px -5px 10px #ffffff',
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
      fast: '150ms',
      normal: '300ms',
      slow: '500ms'
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
    sm: '0.25rem',
    md: '0.5rem',
    lg: '1rem',
    xl: '1.5rem',
    '2xl': '2rem',
    '3xl': '3rem',
    full: '9999px'
  },
  custom: {
    lightSource: {
      angle: 145,
      elevation: 10,
      intensity: 0.5
    },
    surfaces: {
      raised: {
        shadow: '10px 10px 20px #bebebe, -10px -10px 20px #ffffff',
        background: 'linear-gradient(145deg, #f0f0f0, #cacaca)'
      },
      pressed: {
        shadow: 'inset 5px 5px 10px #bebebe, inset -5px -5px 10px #ffffff',
        background: '#e0e0e0'
      },
      floating: {
        shadow: '20px 20px 40px #bebebe, -20px -20px 40px #ffffff',
        background: 'linear-gradient(145deg, #f0f0f0, #cacaca)'
      }
    }
  }
}
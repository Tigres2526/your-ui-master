import { DesignTokens } from '@/types/design-tokens'

export const auroraTokens: DesignTokens = {
  name: 'Aurora',
  description: 'Ethereal gradient-based design inspired by northern lights',
  colors: {
    primary: '#8b5cf6',
    secondary: '#ec4899',
    background: '#09090b',
    surface: '#18181b',
    text: {
      primary: '#fafafa',
      secondary: '#a1a1aa',
      disabled: '#52525b'
    },
    border: '#27272a',
    error: '#dc2626',
    warning: '#f59e0b',
    success: '#10b981',
    info: '#06b6d4'
  },
  shadows: {
    xs: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    sm: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    md: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    lg: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
    xl: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
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
      mono: 'Menlo, Monaco, monospace',
      display: 'Cal Sans, Inter, sans-serif'
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
      normal: '300ms',
      slow: '1000ms'
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
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '2.5rem',
    '3xl': '3rem',
    full: '9999px'
  },
  effects: {
    blur: {
      none: 'blur(0)',
      sm: 'blur(4px)',
      md: 'blur(10px)',
      lg: 'blur(20px)',
      xl: 'blur(40px)'
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
      blur: 'blur(10px)',
      brightness: 'brightness(0.9)',
      contrast: 'contrast(1.1)',
      saturate: 'saturate(1.5)'
    }
  },
  custom: {
    gradients: {
      aurora: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #00f2fe 100%)',
      northern: 'linear-gradient(45deg, #1e3c72 0%, #2a5298 50%, #7e57c2 100%)',
      twilight: 'linear-gradient(135deg, #fc466b 0%, #3f5efb 100%)',
      cosmic: 'linear-gradient(135deg, #5b247a 0%, #1bcedf 100%)',
      nebula: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    glows: {
      sm: '0 0 20px rgba(139, 92, 246, 0.5)',
      md: '0 0 40px rgba(139, 92, 246, 0.5)',
      lg: '0 0 60px rgba(139, 92, 246, 0.5)',
      xl: '0 0 80px rgba(139, 92, 246, 0.5)'
    },
    animations: {
      float: 'float 3s ease-in-out infinite',
      pulse: 'pulse 2s ease-in-out infinite',
      gradient: 'gradient 15s ease infinite',
      shimmer: 'shimmer 3s linear infinite'
    }
  }
}
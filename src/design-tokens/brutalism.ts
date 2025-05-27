import { DesignTokens } from '@/types/design-tokens'

export const brutalismTokens: DesignTokens = {
  name: 'Brutalism',
  description: 'Raw, bold design with heavy borders and stark contrasts',
  colors: {
    primary: '#ffff00',
    secondary: '#ff0000',
    background: '#ffffff',
    surface: '#f5f5f5',
    text: {
      primary: '#000000',
      secondary: '#333333',
      disabled: '#666666'
    },
    border: '#000000',
    error: '#ff0000',
    warning: '#ffff00',
    success: '#00ff00',
    info: '#0000ff'
  },
  shadows: {
    xs: '2px 2px 0 0 rgba(0, 0, 0, 1)',
    sm: '3px 3px 0 0 rgba(0, 0, 0, 1)',
    md: '6px 6px 0 0 rgba(0, 0, 0, 1)',
    lg: '8px 8px 0 0 rgba(0, 0, 0, 1)',
    xl: '12px 12px 0 0 rgba(0, 0, 0, 1)',
    inner: 'inset 3px 3px 0 0 rgba(0, 0, 0, 1)',
    none: 'none'
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '2rem',
    xl: '3rem',
    '2xl': '4rem',
    '3xl': '6rem'
  },
  typography: {
    fontFamily: {
      sans: 'Arial Black, Helvetica, sans-serif',
      serif: 'Georgia, serif',
      mono: 'Courier New, monospace',
      display: 'Impact, Arial Black, sans-serif'
    },
    fontSize: {
      xs: '0.875rem',
      sm: '1rem',
      base: '1.125rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '2rem',
      '3xl': '2.5rem',
      '4xl': '3rem',
      '5xl': '4rem'
    },
    fontWeight: {
      light: 400,
      normal: 700,
      medium: 700,
      semibold: 800,
      bold: 900,
      extrabold: 900
    },
    lineHeight: {
      tight: '1',
      normal: '1.2',
      relaxed: '1.5'
    }
  },
  animation: {
    duration: {
      fast: '100ms',
      normal: '150ms',
      slow: '300ms'
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
    sm: '0',
    md: '0',
    lg: '0',
    xl: '0',
    '2xl': '0',
    '3xl': '0',
    full: '0'
  },
  custom: {
    borders: {
      thin: '2px solid black',
      medium: '4px solid black',
      thick: '6px solid black',
      extraThick: '8px solid black'
    },
    transforms: {
      hover: 'translate(3px, 3px)',
      active: 'translate(6px, 6px)',
      none: 'translate(0, 0)'
    },
    animations: {
      shake: 'shake 0.5s ease-in-out',
      slam: 'slam 0.3s ease-out',
      glitch: 'glitch 1s infinite',
      blink: 'blink 1s step-end infinite'
    }
  }
}
import { DesignTokens } from '@/types/design-tokens'

export const memphisTokens: DesignTokens = {
  name: 'Memphis',
  description: 'Playful retro patterns with bold geometric shapes and vibrant colors',
  
  colors: {
    primary: '#FF1744',
    secondary: '#00BCD4',
    background: '#FFF9C4',
    surface: '#FFFFFF',
    text: {
      primary: '#000000',
      secondary: '#616161',
      disabled: '#A0A0A0',
    },
    border: '#000000',
    error: '#D32F2F',
    warning: '#FFEB3B',
    success: '#4CAF50',
    info: '#2196F3',
  },
  
  typography: {
    fontFamily: {
      sans: '"Bebas Neue", "Arial Black", -apple-system, sans-serif',
      serif: 'Georgia, serif',
      mono: '"Courier New", "Courier", monospace',
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '2rem',
      '3xl': '2.5rem',
      '4xl': '3.5rem',
      '5xl': '4.5rem',
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 900,
    },
    lineHeight: {
      tight: '1.1',
      normal: '1.4',
      relaxed: '1.6',
    },
  },
  
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
  },
  
  borderRadius: {
    none: '0',
    sm: '0',
    md: '0.5rem',
    lg: '1rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
    full: '9999px',
  },
  
  shadows: {
    xs: '2px 2px 0 0 rgba(0, 0, 0, 1)',
    sm: '4px 4px 0 0 rgba(0, 0, 0, 1)',
    md: '8px 8px 0 0 rgba(0, 0, 0, 1)',
    lg: '10px 10px 0 0 rgba(0, 0, 0, 1)',
    xl: '12px 12px 0 0 rgba(0, 0, 0, 1)',
    inner: 'inset 0 0 0 3px rgba(0, 0, 0, 1)',
    none: 'none',
  },
  
  animation: {
    duration: {
      fast: '150ms',
      normal: '250ms',
      slow: '400ms',
    },
    easing: {
      linear: 'linear',
      ease: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    },
  },
  
  custom: {
    patterns: {
      dots: 'radial-gradient(circle, #000 1px, transparent 1px)',
      stripes: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #000 10px, #000 20px)',
      zigzag: 'linear-gradient(135deg, #000 25%, transparent 25%) -50px 0, linear-gradient(225deg, #000 25%, transparent 25%) -50px 0, linear-gradient(315deg, #000 25%, transparent 25%), linear-gradient(45deg, #000 25%, transparent 25%)',
      squiggles: 'url("data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M0 20c0-10 10-10 10-10s10 0 10 10-10 10-10 10-10 0-10-10z" fill="none" stroke="%23000" stroke-width="2"/%3E%3C/svg%3E")',
    },
    shapes: {
      circle: 'clip-path: circle(50%)',
      triangle: 'clip-path: polygon(50% 0%, 0% 100%, 100% 100%)',
      diamond: 'clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
      hexagon: 'clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
    },
    colors: {
      hotPink: '#FF1744',
      electricBlue: '#00BCD4',
      limeGreen: '#76FF03',
      sunYellow: '#FFEB3B',
      purple: '#9C27B0',
      orange: '#FF6D00',
      mint: '#00E676',
    },
    borders: {
      thick: '4px solid #000',
      double: '6px double #000',
      dashed: '4px dashed #000',
      mixed: '4px solid #000',
    },
  },
}
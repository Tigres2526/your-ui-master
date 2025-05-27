import { DesignTokens } from '@/types/design-tokens'

export const cyberpunkTokens: DesignTokens = {
  name: 'Cyberpunk',
  description: 'Futuristic neon-lit design with glitch effects and tech aesthetics',
  colors: {
    primary: '#00ffff',
    secondary: '#ff00ff',
    background: '#0a0a0a',
    surface: '#1a1a1a',
    text: {
      primary: '#ffffff',
      secondary: '#00ffff',
      disabled: '#666666'
    },
    border: '#00ffff',
    error: '#ff0066',
    warning: '#ffaa00',
    success: '#00ff88',
    info: '#0099ff'
  },
  shadows: {
    xs: '0 0 4px rgba(0, 255, 255, 0.5)',
    sm: '0 0 8px rgba(0, 255, 255, 0.6)',
    md: '0 0 16px rgba(0, 255, 255, 0.7)',
    lg: '0 0 24px rgba(0, 255, 255, 0.8)',
    xl: '0 0 48px rgba(0, 255, 255, 0.9)',
    inner: 'inset 0 0 8px rgba(0, 255, 255, 0.5)',
    none: 'none'
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem'
  },
  typography: {
    fontFamily: {
      sans: 'Orbitron, Rajdhani, sans-serif',
      serif: 'Share Tech Mono, monospace',
      mono: 'Fira Code, Consolas, monospace',
      display: 'Audiowide, Orbitron, sans-serif'
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
      extrabold: 900
    },
    lineHeight: {
      tight: '1.1',
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
      easeIn: 'cubic-bezier(0.55, 0, 1, 0.45)',
      easeOut: 'cubic-bezier(0, 0.55, 0.45, 1)',
      easeInOut: 'cubic-bezier(0.85, 0, 0.15, 1)',
      bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
    }
  },
  borderRadius: {
    none: '0',
    sm: '0.125rem',
    md: '0.25rem',
    lg: '0.5rem',
    xl: '1rem',
    '2xl': '1.5rem',
    '3xl': '2rem',
    full: '9999px'
  },
  effects: {
    blur: {
      none: 'blur(0)',
      sm: 'blur(2px)',
      md: 'blur(4px)',
      lg: 'blur(8px)',
      xl: 'blur(16px)'
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
    }
  },
  custom: {
    neonColors: {
      cyan: '#00ffff',
      magenta: '#ff00ff',
      yellow: '#ffff00',
      pink: '#ff0099',
      green: '#00ff00',
      orange: '#ff9900',
      blue: '#0099ff'
    },
    glows: {
      neonCyan: '0 0 20px rgba(0, 255, 255, 0.8), 0 0 40px rgba(0, 255, 255, 0.6)',
      neonPink: '0 0 20px rgba(255, 0, 255, 0.8), 0 0 40px rgba(255, 0, 255, 0.6)',
      neonGreen: '0 0 20px rgba(0, 255, 0, 0.8), 0 0 40px rgba(0, 255, 0, 0.6)',
      textGlow: '0 0 10px currentColor'
    },
    animations: {
      glitch: 'glitch 2s infinite',
      flicker: 'flicker 1.5s infinite',
      scan: 'scan 2s linear infinite',
      pulse: 'pulse 2s ease-in-out infinite'
    },
    overlays: {
      scanlines: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 255, 0.03) 2px, rgba(0, 255, 255, 0.03) 4px)',
      grid: 'linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)'
    }
  }
}
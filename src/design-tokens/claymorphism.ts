import { DesignTokens } from '@/types/design-tokens'

export const claymorphismTokens: DesignTokens = {
  id: 'claymorphism',
  name: 'Claymorphism',
  description: '3D clay-like appearance with soft shadows and smooth surfaces',
  
  colors: {
    primary: {
      DEFAULT: '#FF6B6B',
      foreground: '#FFFFFF',
    },
    secondary: {
      DEFAULT: '#4ECDC4',
      foreground: '#FFFFFF',
    },
    accent: {
      DEFAULT: '#FFE66D',
      foreground: '#1A1A1A',
    },
    background: {
      DEFAULT: '#F7F3F0',
      foreground: '#1A1A1A',
    },
    card: {
      DEFAULT: '#FFFFFF',
      foreground: '#1A1A1A',
    },
    destructive: {
      DEFAULT: '#EE5A52',
      foreground: '#FFFFFF',
    },
    muted: {
      DEFAULT: '#E8DDD8',
      foreground: '#666666',
    },
    popover: {
      DEFAULT: '#FFFFFF',
      foreground: '#1A1A1A',
    },
    border: '#E0D5D0',
    input: '#E0D5D0',
    ring: '#FF6B6B',
  },
  
  typography: {
    fontFamily: {
      sans: '"Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      mono: '"JetBrains Mono", "Fira Code", monospace',
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
      '5xl': '3rem',
    },
    fontWeight: {
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
    lineHeight: {
      none: '1',
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2',
    },
  },
  
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
    '2xl': '4rem',
    '3xl': '6rem',
    '4xl': '8rem',
  },
  
  borderRadius: {
    none: '0',
    sm: '1rem',
    DEFAULT: '1.5rem',
    md: '2rem',
    lg: '2.5rem',
    xl: '3rem',
    '2xl': '4rem',
    full: '9999px',
  },
  
  shadows: {
    xs: '0 10px 20px -5px rgba(0, 0, 0, 0.1), inset 0 -2px 4px rgba(255, 255, 255, 0.8)',
    sm: '0 15px 30px -10px rgba(0, 0, 0, 0.15), inset 0 -3px 6px rgba(255, 255, 255, 0.8)',
    DEFAULT: '0 20px 40px -15px rgba(0, 0, 0, 0.2), inset 0 -4px 8px rgba(255, 255, 255, 0.8)',
    md: '0 25px 50px -20px rgba(0, 0, 0, 0.25), inset 0 -5px 10px rgba(255, 255, 255, 0.8)',
    lg: '0 30px 60px -25px rgba(0, 0, 0, 0.3), inset 0 -6px 12px rgba(255, 255, 255, 0.8)',
    xl: '0 35px 70px -30px rgba(0, 0, 0, 0.35), inset 0 -8px 16px rgba(255, 255, 255, 0.8)',
    '2xl': '0 40px 80px -35px rgba(0, 0, 0, 0.4), inset 0 -10px 20px rgba(255, 255, 255, 0.8)',
    inner: 'inset 0 4px 8px rgba(0, 0, 0, 0.15), inset 0 -2px 4px rgba(255, 255, 255, 0.8)',
    none: 'none',
  },
  
  animation: {
    duration: {
      fast: '200ms',
      DEFAULT: '300ms',
      slow: '500ms',
    },
    timing: {
      DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
      linear: 'linear',
      in: 'cubic-bezier(0.4, 0, 1, 1)',
      out: 'cubic-bezier(0, 0, 0.2, 1)',
      'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
  },
  
  custom: {
    clayEffects: {
      soft: '0 20px 40px -15px rgba(0, 0, 0, 0.2), inset 0 -4px 8px rgba(255, 255, 255, 0.8), inset 0 2px 4px rgba(0, 0, 0, 0.1)',
      raised: '0 25px 50px -20px rgba(0, 0, 0, 0.25), inset 0 -5px 10px rgba(255, 255, 255, 0.8), inset 0 2px 4px rgba(0, 0, 0, 0.1)',
      pressed: 'inset 0 4px 8px rgba(0, 0, 0, 0.2), inset 0 -2px 4px rgba(255, 255, 255, 0.6)',
      floating: '0 30px 60px -25px rgba(0, 0, 0, 0.3), inset 0 -6px 12px rgba(255, 255, 255, 0.8), inset 0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    gradients: {
      primary: 'linear-gradient(135deg, #FF6B6B 0%, #FF8E8E 100%)',
      secondary: 'linear-gradient(135deg, #4ECDC4 0%, #70D7D0 100%)',
      accent: 'linear-gradient(135deg, #FFE66D 0%, #FFED8E 100%)',
      surface: 'linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 100%)',
    },
    surfaces: {
      matte: 'background-image: linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 100%)',
      glossy: 'background-image: linear-gradient(180deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.85) 50%, rgba(255, 255, 255, 0.7) 100%)',
      textured: 'background-image: repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255, 255, 255, 0.1) 2px, rgba(255, 255, 255, 0.1) 4px)',
    },
  },
}
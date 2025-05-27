import { DesignTokens } from '@/types/design-tokens'

export const claymorphismTokens: DesignTokens = {
  name: 'Claymorphism',
  description: '3D clay-like appearance with soft shadows and smooth surfaces',
  
  colors: {
    primary: '#FF6B6B',
    secondary: '#4ECDC4',
    background: '#F7F3F0',
    surface: '#FFFFFF',
    text: {
      primary: '#1A1A1A',
      secondary: '#666666',
      disabled: '#A0A0A0',
    },
    border: '#E0D5D0',
    error: '#EE5A52',
    warning: '#FFE66D',
    success: '#4ECDC4',
    info: '#6B9FFF',
  },
  
  typography: {
    fontFamily: {
      sans: '"Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      serif: 'Georgia, serif',
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
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
    lineHeight: {
      tight: '1.25',
      normal: '1.5',
      relaxed: '1.75',
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
  },
  
  borderRadius: {
    none: '0',
    sm: '1rem',
    md: '1.5rem',
    lg: '2.5rem',
    xl: '3rem',
    '2xl': '4rem',
    '3xl': '6rem',
    full: '9999px',
  },
  
  shadows: {
    xs: '0 10px 20px -5px rgba(0, 0, 0, 0.1), inset 0 -2px 4px rgba(255, 255, 255, 0.8)',
    sm: '0 15px 30px -10px rgba(0, 0, 0, 0.15), inset 0 -3px 6px rgba(255, 255, 255, 0.8)',
    md: '0 25px 50px -20px rgba(0, 0, 0, 0.25), inset 0 -5px 10px rgba(255, 255, 255, 0.8)',
    lg: '0 30px 60px -25px rgba(0, 0, 0, 0.3), inset 0 -6px 12px rgba(255, 255, 255, 0.8)',
    xl: '0 35px 70px -30px rgba(0, 0, 0, 0.35), inset 0 -8px 16px rgba(255, 255, 255, 0.8)',
    inner: 'inset 0 4px 8px rgba(0, 0, 0, 0.15), inset 0 -2px 4px rgba(255, 255, 255, 0.8)',
    none: 'none',
  },
  
  animation: {
    duration: {
      fast: '200ms',
      normal: '300ms',
      slow: '500ms',
    },
    easing: {
      linear: 'linear',
      ease: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
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
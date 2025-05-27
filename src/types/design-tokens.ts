export interface ColorToken {
  primary: string
  secondary: string
  tertiary?: string
  background: string
  surface: string
  text: {
    primary: string
    secondary: string
    disabled: string
  }
  border: string
  error: string
  warning: string
  success: string
  info: string
}

export interface ShadowToken {
  xs: string
  sm: string
  md: string
  lg: string
  xl: string
  inner: string
  none: string
}

export interface SpacingToken {
  xs: string
  sm: string
  md: string
  lg: string
  xl: string
  '2xl': string
  '3xl': string
}

export interface TypographyToken {
  fontFamily: {
    sans: string
    serif: string
    mono: string
    display?: string
  }
  fontSize: {
    xs: string
    sm: string
    base: string
    lg: string
    xl: string
    '2xl': string
    '3xl': string
    '4xl': string
    '5xl': string
  }
  fontWeight: {
    light: number
    normal: number
    medium: number
    semibold: number
    bold: number
    extrabold: number
  }
  lineHeight: {
    tight: string
    normal: string
    relaxed: string
  }
}

export interface AnimationToken {
  duration: {
    fast: string
    normal: string
    slow: string
  }
  easing: {
    linear: string
    ease: string
    easeIn: string
    easeOut: string
    easeInOut: string
    bounce: string
  }
}

export interface BorderRadiusToken {
  none: string
  sm: string
  md: string
  lg: string
  xl: string
  '2xl': string
  '3xl': string
  full: string
}

export interface EffectsToken {
  blur?: {
    none: string
    sm: string
    md: string
    lg: string
    xl: string
  }
  opacity?: {
    0: string
    10: string
    20: string
    30: string
    40: string
    50: string
    60: string
    70: string
    80: string
    90: string
    100: string
  }
  backdrop?: {
    blur: string
    brightness: string
    contrast: string
    saturate: string
  }
}

export interface DesignTokens {
  name: string
  description: string
  colors: ColorToken
  shadows: ShadowToken
  spacing: SpacingToken
  typography: TypographyToken
  animation: AnimationToken
  borderRadius: BorderRadiusToken
  effects?: EffectsToken
  custom?: Record<string, unknown>
}
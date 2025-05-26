export interface DesignStyle {
  id: string
  name: string
  description: string
  principles: string[]
  colorSystem: ColorSystem
  typography: TypographySystem
  spacing: SpacingSystem
  shadows: ShadowSystem
  animations: AnimationSystem
  components: ComponentVariants
}

export interface ColorSystem {
  primary: ColorScale
  secondary: ColorScale
  accent: ColorScale
  neutral: ColorScale
  semantic: {
    success: ColorScale
    warning: ColorScale
    error: ColorScale
    info: ColorScale
  }
  special?: Record<string, string>
}

export interface ColorScale {
  50: string
  100: string
  200: string
  300: string
  400: string
  500: string
  600: string
  700: string
  800: string
  900: string
  950: string
}

export interface TypographySystem {
  fontFamilies: {
    sans: string
    serif: string
    mono: string
    display?: string
  }
  fontSizes: Record<string, { size: string; lineHeight: string; letterSpacing?: string }>
  fontWeights: Record<string, number>
}

export interface SpacingSystem {
  base: number
  scale: number[]
}

export interface ShadowSystem {
  xs: string
  sm: string
  md: string
  lg: string
  xl: string
  '2xl': string
  inner: string
  none: string
}

export interface AnimationSystem {
  durations: Record<string, string>
  easings: Record<string, string>
  keyframes: Record<string, string>
}

export interface ComponentVariants {
  button: ComponentConfig
  card: ComponentConfig
  input: ComponentConfig
  badge: ComponentConfig
  toggle: ComponentConfig
  slider: ComponentConfig
  tabs: ComponentConfig
  modal: ComponentConfig
  toast: ComponentConfig
  dropdown: ComponentConfig
}

export interface ComponentConfig {
  variants: Record<string, VariantStyle>
  sizes: Record<string, SizeStyle>
  states: Record<string, StateStyle>
}

export interface VariantStyle {
  base: string
  hover?: string
  active?: string
  disabled?: string
  focus?: string
}

export interface SizeStyle {
  padding?: string
  height?: string
  fontSize?: string
  borderRadius?: string
}

export interface StateStyle {
  className: string
  animation?: string
}

export interface ComponentShowcase {
  id: string
  title: string
  description: string
  category: ComponentCategory
  code: {
    react: string
    vue?: string
    html?: string
  }
  preview: React.ComponentType
  variants: string[]
  sizes: string[]
  props?: ComponentProp[]
}

export interface ComponentProp {
  name: string
  type: string
  defaultValue?: string
  description: string
  required?: boolean
}

export type ComponentCategory = 
  | 'buttons'
  | 'cards' 
  | 'forms'
  | 'navigation'
  | 'data-display'
  | 'feedback'
  | 'layout'
  | 'media'
  | 'utilities'
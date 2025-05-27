import { DesignTokens } from '@/types/design-tokens'
import { neumorphismTokens } from './neumorphism'
import { glassmorphismTokens } from './glassmorphism'

export const designTokens: Record<string, DesignTokens> = {
  neumorphism: neumorphismTokens,
  glassmorphism: glassmorphismTokens,
}

export * from './neumorphism'
export * from './glassmorphism'
import { DesignTokens } from '@/types/design-tokens'
import { neumorphismTokens } from './neumorphism'
import { glassmorphismTokens } from './glassmorphism'
import { auroraTokens } from './aurora'
import { brutalismTokens } from './brutalism'
import { cyberpunkTokens } from './cyberpunk'
import { claymorphismTokens } from './claymorphism'
import { memphisTokens } from './memphis'

export const designTokens: Record<string, DesignTokens> = {
  neumorphism: neumorphismTokens,
  glassmorphism: glassmorphismTokens,
  aurora: auroraTokens,
  brutalism: brutalismTokens,
  cyberpunk: cyberpunkTokens,
  claymorphism: claymorphismTokens,
  memphis: memphisTokens,
}

export * from './neumorphism'
export * from './glassmorphism'
export * from './aurora'
export * from './brutalism'
export * from './cyberpunk'
export * from './claymorphism'
export * from './memphis'
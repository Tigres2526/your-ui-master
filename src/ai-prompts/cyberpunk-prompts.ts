import { StylePromptConfig, AIPromptTemplate } from '@/types/ai-prompts'

export const cyberpunkStyleConfig: StylePromptConfig = {
  name: 'Cyberpunk',
  overview: 'Create futuristic, neon-lit UI elements with glitch effects and tech-inspired aesthetics',
  keyPrinciples: [
    'Use neon colors (cyan, magenta, yellow) with dark backgrounds',
    'Apply glowing effects and shadows',
    'Incorporate glitch animations and digital artifacts',
    'Use tech-inspired typography (uppercase, monospace)',
    'Add scanlines and holographic effects'
  ],
  designTokensPrompt: `
Use these Cyberpunk design tokens:
- Neon colors: Cyan (#00ffff), Magenta (#ff00ff), Pink (#ff0099), Green (#00ff00)
- Dark backgrounds: #0a0a0a, #1a1a1a, gray-900
- Glow effects: 0 0 20px rgba(0, 255, 255, 0.8)
- Typography: Uppercase, bold, tracking-wider
- Borders: Thin with glow effects
- Animations: Glitch, flicker, scan, pulse
`,
  componentGuidelines: {
    button: 'Neon borders with glow, holographic gradients, glitch hover effects',
    card: 'Dark backgrounds with neon accents, scanline overlays, holographic variants',
    input: 'Glowing borders on focus, terminal-style variants, tech typography',
    toggle: 'Neon glow states, smooth transitions with light trails',
    modal: 'Backdrop blur with scanlines, neon borders, tech-inspired layouts'
  },
  bestPractices: [
    'Layer glow effects for depth',
    'Use animation sparingly to avoid distraction',
    'Maintain high contrast for readability',
    'Combine multiple visual effects subtly',
    'Test on dark backgrounds primarily'
  ],
  commonMistakes: [
    'Overusing glitch effects',
    'Making text unreadable with effects',
    'Using too many bright colors',
    'Forgetting hover and focus states',
    'Not optimizing animation performance'
  ]
}

export const cyberpunkPrompts: Record<string, AIPromptTemplate> = {
  button: {
    style: 'Cyberpunk',
    component: 'Button',
    prompt: `Create a Cyberpunk button component with these specifications:
- Neon border with glow effect
- Uppercase bold text with tracking
- Holographic gradient option
- Glitch effect on hover
- Terminal-style variant with monospace font`,
    context: [
      'Buttons should feel like futuristic interfaces',
      'Neon glow indicates interactivity',
      'Effects should be smooth and performant'
    ],
    designPrinciples: [
      'Neon glow effects',
      'Tech typography',
      'Interactive feedback',
      'Futuristic aesthetics'
    ],
    codeExample: `<button className="
  bg-transparent text-cyan-400
  border-2 border-cyan-400
  px-6 py-3
  font-bold uppercase tracking-wider
  shadow-[0_0_10px_rgba(0,255,255,0.5),inset_0_0_10px_rgba(0,255,255,0.2)]
  hover:bg-cyan-400/20
  hover:shadow-[0_0_20px_rgba(0,255,255,0.8),inset_0_0_20px_rgba(0,255,255,0.3)]
  hover:text-white
  transition-all duration-300
">
  CYBER BUTTON
</button>`,
    doList: [
      'Use neon colors',
      'Add glow effects',
      'Apply tech typography',
      'Include hover states',
      'Optimize animations'
    ],
    dontList: [
      "Don't overuse effects",
      "Don't sacrifice readability",
      "Don't use light backgrounds",
      "Don't skip focus states",
      "Don't make animations jarring"
    ]
  },
  card: {
    style: 'Cyberpunk',
    component: 'Card',
    prompt: `Design a Cyberpunk card component featuring:
- Dark background with neon borders
- Optional scanline overlay effect
- Holographic and terminal variants
- Glow shadows for depth
- Tech-inspired content layout`,
    context: [
      'Cards should feel like holographic displays',
      'Dark backgrounds are essential',
      'Effects should enhance not distract'
    ],
    designPrinciples: [
      'Holographic displays',
      'Neon accents',
      'Dark themes',
      'Tech aesthetics'
    ],
    doList: [
      'Use dark backgrounds',
      'Add neon borders',
      'Include scanlines',
      'Apply glow effects',
      'Maintain contrast'
    ],
    dontList: [
      "Don't use light colors",
      "Don't overdo effects",
      "Don't forget backdrop",
      "Don't make text hard to read",
      "Don't skip variants"
    ]
  },
  interface: {
    style: 'Cyberpunk',
    component: 'Interface',
    prompt: `Build a Cyberpunk interface with:
- Terminal-style inputs and outputs
- Neon-lit controls and indicators
- Glitch effects for transitions
- Tech-inspired data visualizations
- Holographic overlay elements`,
    context: [
      'Interfaces should feel futuristic',
      'Terminal aesthetics are key',
      'Animations enhance the tech feel'
    ],
    designPrinciples: [
      'Terminal interfaces',
      'Neon indicators',
      'Glitch transitions',
      'Tech visualizations'
    ],
    doList: [
      'Use monospace fonts',
      'Add terminal prompts',
      'Include glitch effects',
      'Apply neon colors',
      'Create tech layouts'
    ],
    dontList: [
      "Don't overuse glitch",
      "Don't make illegible",
      "Don't skip animations",
      "Don't use pastels",
      "Don't forget contrast"
    ]
  }
}
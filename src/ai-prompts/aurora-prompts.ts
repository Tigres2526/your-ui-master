import { StylePromptConfig, AIPromptTemplate } from '@/types/ai-prompts'

export const auroraStyleConfig: StylePromptConfig = {
  name: 'Aurora',
  overview: 'Create ethereal, gradient-based UI elements inspired by northern lights with flowing colors and luminous effects',
  keyPrinciples: [
    'Use multi-color gradients (blue, purple, pink)',
    'Apply animated gradient shifts and shimmer effects',
    'Incorporate glowing shadows and light effects',
    'Maintain translucency and depth with backdrop blur',
    'Use smooth transitions and fluid animations'
  ],
  designTokensPrompt: `
Use these Aurora design tokens:
- Primary gradient: linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #00f2fe 100%)
- Secondary gradient: linear-gradient(45deg, #1e3c72 0%, #2a5298 50%, #7e57c2 100%)
- Glow shadows: 0 0 50px -12px rgba(14, 165, 233, 0.5)
- Backdrop blur: blur(10px) to blur(20px)
- Border radius: Large rounded corners (1rem to 3rem)
- Animation duration: 3s to 15s for gradient shifts
`,
  componentGuidelines: {
    button: 'Gradient background with shimmer effect on hover, glowing shadow',
    card: 'Translucent with gradient borders, animated background patterns',
    input: 'Gradient border focus states, subtle glow effect',
    toggle: 'Gradient track that shifts on state change',
    modal: 'Backdrop blur with gradient borders and ethereal glow'
  },
  bestPractices: [
    'Layer multiple gradients for depth',
    'Use CSS animations for continuous gradient movement',
    'Apply glow effects sparingly for emphasis',
    'Ensure text remains readable over gradients',
    'Test performance with complex animations'
  ],
  commonMistakes: [
    'Overusing animations causing performance issues',
    'Gradients too vibrant reducing readability',
    'Inconsistent color palette across components',
    'Missing hover and focus states',
    'Forgetting to add backdrop blur for glass effects'
  ]
}

export const auroraPrompts: Record<string, AIPromptTemplate> = {
  button: {
    style: 'Aurora',
    component: 'Button',
    prompt: `Create an Aurora button component with these specifications:
- Multi-color gradient background (blue to purple to pink)
- Shimmer animation that moves across on hover
- Glowing shadow effect
- Support for variants: default, outline, ghost, glow
- Smooth transitions for all interactive states`,
    context: [
      'Aurora buttons should feel ethereal and luminous',
      'Gradients should flow like northern lights',
      'Hover effects should be magical and eye-catching'
    ],
    designPrinciples: [
      'Flowing gradient animations',
      'Luminous glow effects',
      'Smooth color transitions',
      'Ethereal appearance'
    ],
    codeExample: `<button className="
  relative overflow-hidden
  bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
  text-white px-6 py-3 rounded-xl
  shadow-lg shadow-purple-500/50
  hover:shadow-xl hover:shadow-purple-500/70
  transition-all duration-300
  before:absolute before:inset-0
  before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent
  before:translate-x-[-200%] hover:before:translate-x-[200%]
  before:transition-transform before:duration-1000
">
  <span className="relative z-10">Aurora Button</span>
</button>`,
    doList: [
      'Use multi-color gradients',
      'Add shimmer animations',
      'Include glow shadows',
      'Ensure smooth transitions',
      'Layer effects for depth'
    ],
    dontList: [
      "Don't use flat colors",
      "Don't skip animation states",
      "Don't make gradients too subtle",
      "Don't forget backdrop effects",
      "Don't overload with animations"
    ]
  },
  card: {
    style: 'Aurora',
    component: 'Card',
    prompt: `Design an Aurora card component featuring:
- Translucent background with backdrop blur
- Gradient border that subtly animates
- Optional floating variant with scale on hover
- Support for gradient, glass, and default variants
- Animated gradient overlay for emphasis`,
    context: [
      'Cards should feel light and airy',
      'Background effects create depth',
      'Animations should be subtle and continuous'
    ],
    designPrinciples: [
      'Translucent layers',
      'Animated gradients',
      'Ethereal depth',
      'Floating appearance'
    ],
    doList: [
      'Apply backdrop blur',
      'Use gradient borders',
      'Add subtle animations',
      'Create depth with layers',
      'Include hover effects'
    ],
    dontList: [
      "Don't use solid backgrounds",
      "Don't make animations jarring",
      "Don't forget translucency",
      "Don't overuse glow effects"
    ]
  },
  input: {
    style: 'Aurora',
    component: 'Input',
    prompt: `Build an Aurora input field with:
- Gradient border that intensifies on focus
- Subtle glow effect around the field
- Translucent background option
- Smooth transition animations
- Support for default, outline, and glow variants`,
    context: [
      'Inputs should draw attention when active',
      'Focus states need clear visual feedback',
      'Gradients enhance the interaction'
    ],
    designPrinciples: [
      'Dynamic gradient borders',
      'Glowing focus states',
      'Smooth transitions',
      'Visual feedback'
    ],
    doList: [
      'Use gradient borders',
      'Add focus glow effects',
      'Include smooth transitions',
      'Maintain readability',
      'Support dark backgrounds'
    ],
    dontList: [
      "Don't make borders too thick",
      "Don't use harsh transitions",
      "Don't sacrifice usability",
      "Don't forget placeholder styles"
    ]
  }
}
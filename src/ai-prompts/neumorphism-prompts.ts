import { StylePromptConfig, AIPromptTemplate } from '@/types/ai-prompts'

export const neumorphismStyleConfig: StylePromptConfig = {
  name: 'Neumorphism',
  overview: 'Create soft, realistic UI elements that appear to extrude from or indent into the background using light and shadow',
  keyPrinciples: [
    'Use dual light/dark shadows to create depth',
    'Maintain consistent light source (typically top-left at 145°)',
    'Keep backgrounds neutral (typically #e0e0e0)',
    'Use subtle gradients for raised surfaces',
    'Apply inset shadows for pressed states'
  ],
  designTokensPrompt: `
Use these Neumorphism design tokens:
- Background: #e0e0e0
- Raised shadow: 10px 10px 20px #bebebe, -10px -10px 20px #ffffff
- Pressed shadow: inset 5px 5px 10px #bebebe, inset -5px -5px 10px #ffffff
- Border radius: 20px for cards, 15px for buttons, 10px for inputs
- Gradient for raised: linear-gradient(145deg, #f0f0f0, #cacaca)
`,
  componentGuidelines: {
    button: 'Raised by default, pressed state with inset shadows, subtle gradient',
    card: 'Floating appearance with larger shadows, slight gradient background',
    input: 'Slightly inset with inner shadows, no border',
    toggle: 'Track inset, handle raised with strong shadows',
    slider: 'Track inset, handle raised and circular'
  },
  bestPractices: [
    'Maintain consistent elevation levels across components',
    'Use animation for state transitions (300ms ease)',
    'Ensure sufficient contrast for accessibility',
    'Test on different screen brightnesses',
    'Keep color usage minimal - focus on shadows'
  ],
  commonMistakes: [
    'Using colored backgrounds (breaks the effect)',
    'Inconsistent light source angles',
    'Too strong shadows (looks unrealistic)',
    'Missing pressed states',
    'Using borders instead of shadows'
  ]
}

export const neumorphismPrompts: Record<string, AIPromptTemplate> = {
  button: {
    style: 'Neumorphism',
    component: 'Button',
    prompt: `Create a Neumorphism button component with these specifications:
- Raised appearance with dual shadows (light top-left, dark bottom-right)
- Pressed state with inset shadows
- Smooth transition between states (300ms)
- Background color: #e0e0e0
- Slight gradient overlay for depth
- Border radius: 15px
- Padding: 12px 24px`,
    context: [
      'Neumorphism uses realistic light and shadow to create depth',
      'The light source is consistently from top-left at 145 degrees',
      'Buttons should appear to physically push into the interface when clicked'
    ],
    designPrinciples: [
      'Soft, organic appearance',
      'Realistic depth through shadows',
      'Minimal color usage',
      'Smooth state transitions'
    ],
    codeExample: `<button className="
  px-6 py-3 
  bg-[#e0e0e0] 
  rounded-[15px] 
  shadow-[10px_10px_20px_#bebebe,-10px_-10px_20px_#ffffff]
  hover:shadow-[12px_12px_24px_#bebebe,-12px_-12px_24px_#ffffff]
  active:shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff]
  transition-all duration-300
  font-medium text-gray-700
">
  Neumorphic Button
</button>`,
    doList: [
      'Use consistent shadow directions',
      'Apply smooth transitions',
      'Maintain neutral backgrounds',
      'Include hover and active states',
      'Test visual hierarchy'
    ],
    dontList: [
      "Don't use colored backgrounds",
      "Don't skip pressed states",
      "Don't use harsh shadows",
      "Don't add borders",
      "Don't use bright colors"
    ]
  },
  card: {
    style: 'Neumorphism',
    component: 'Card',
    prompt: `Create a Neumorphism card component that:
- Appears to float above the surface
- Uses larger shadows for more depth (20px blur)
- Has rounded corners (20-25px radius)
- Includes a subtle gradient background
- Maintains consistent padding (24-32px)`,
    context: [
      'Cards should have more elevation than buttons',
      'Content within cards can use smaller neumorphic elements',
      'Cards group related information'
    ],
    designPrinciples: [
      'Clear visual hierarchy',
      'Floating appearance',
      'Consistent depth system',
      'Subtle surface gradients'
    ],
    doList: [
      'Use larger shadows for cards',
      'Apply subtle gradients',
      'Maintain spacing consistency',
      'Consider nested neumorphic elements'
    ],
    dontList: [
      "Don't make cards too elevated",
      "Don't use conflicting light sources",
      "Don't overcrowd with effects"
    ]
  },
  input: {
    style: 'Neumorphism',
    component: 'Input',
    prompt: `Design a Neumorphism input field that:
- Appears slightly inset into the surface
- Uses inner shadows: inset 4px 4px 8px #bebebe, inset -4px -4px 8px #ffffff
- No border, only shadows define the edge
- Subtle background: #e8e8e8
- Smooth focus state with deeper shadows
- Border radius: 10-12px`,
    context: [
      'Inputs should appear carved into the surface',
      'Focus states need clear visual feedback',
      'Placeholder text should be subtle'
    ],
    designPrinciples: [
      'Inset appearance',
      'Clear focus indication',
      'Subtle depth',
      'Accessible contrast'
    ],
    doList: [
      'Use inset shadows',
      'Include focus states',
      'Ensure readable text contrast',
      'Add smooth transitions'
    ],
    dontList: [
      "Don't use borders",
      "Don't make too deep",
      "Don't forget focus states",
      "Don't use dark backgrounds"
    ]
  }
}

export const generateNeumorphismPrompt = (component: string, customRequirements?: string): string => {
  const basePrompt = neumorphismPrompts[component.toLowerCase()] || neumorphismPrompts.button
  
  return `
${basePrompt.prompt}

Design Principles:
${basePrompt.designPrinciples.map(p => `- ${p}`).join('\n')}

Key Requirements:
${basePrompt.doList.map(d => `✓ ${d}`).join('\n')}

Avoid:
${basePrompt.dontList.map(d => `✗ ${d}`).join('\n')}

${customRequirements ? `\nAdditional Requirements:\n${customRequirements}` : ''}

Example Implementation:
\`\`\`tsx
${basePrompt.codeExample || '// Your implementation here'}
\`\`\`
`
}
import { StylePromptConfig, AIPromptTemplate } from '@/types/ai-prompts'

export const brutalismStyleConfig: StylePromptConfig = {
  name: 'Brutalism',
  overview: 'Create raw, bold UI elements with heavy borders, stark contrasts, and intentionally harsh aesthetics',
  keyPrinciples: [
    'Use thick black borders (4px minimum)',
    'Apply hard shadows with no blur',
    'Stick to primary colors and high contrast',
    'No rounded corners - everything is rectangular',
    'Bold, uppercase typography'
  ],
  designTokensPrompt: `
Use these Brutalism design tokens:
- Primary colors: Yellow (#ffff00), Red (#ff0000), Blue (#0000ff), Black (#000000), White (#ffffff)
- Borders: 4px solid black minimum, up to 8px for emphasis
- Shadows: Hard drop shadows only (e.g., 6px 6px 0 0 black)
- Typography: Bold weights, uppercase text
- No border radius - all corners are sharp
- Hover effects: Translate elements to create depth illusion
`,
  componentGuidelines: {
    button: 'Thick borders, hard shadows, transform on hover/active states',
    card: 'Heavy black borders, large offset shadows, stark backgrounds',
    input: 'Black borders, shadow effects on focus, bold placeholder text',
    toggle: 'Chunky switches with visible movement, black borders',
    modal: 'Thick borders, no transparency, hard shadows'
  },
  bestPractices: [
    'Embrace asymmetry and unconventional layouts',
    'Use transform effects for interactive feedback',
    'Maintain consistent border weights across components',
    'Keep color palette minimal and high contrast',
    'Make interactions feel impactful and physical'
  ],
  commonMistakes: [
    'Adding rounded corners or soft edges',
    'Using subtle colors or gradients',
    'Applying blur to shadows',
    'Making borders too thin',
    'Using lowercase text for important elements'
  ]
}

export const brutalismPrompts: Record<string, AIPromptTemplate> = {
  button: {
    style: 'Brutalism',
    component: 'Button',
    prompt: `Create a Brutalism button component with these specifications:
- Thick black border (4px minimum)
- Hard drop shadow (6px offset, no blur)
- Bold uppercase text
- Transform effects on hover and active states
- High contrast color options (yellow, red, blue on black/white)`,
    context: [
      'Brutalism buttons should feel heavy and impactful',
      'Interactions should be obvious and physical',
      'No subtlety - everything is bold and in-your-face'
    ],
    designPrinciples: [
      'Heavy black borders',
      'Hard offset shadows',
      'Bold typography',
      'Physical interactions'
    ],
    codeExample: `<button className="
  bg-yellow-400 text-black
  border-4 border-black
  px-6 py-3
  font-bold uppercase
  shadow-[6px_6px_0_0_rgba(0,0,0,1)]
  hover:translate-x-[3px] hover:translate-y-[3px]
  hover:shadow-[3px_3px_0_0_rgba(0,0,0,1)]
  active:translate-x-[6px] active:translate-y-[6px]
  active:shadow-none
  transition-all duration-150
">
  BRUTAL BUTTON
</button>`,
    doList: [
      'Use thick black borders',
      'Apply hard shadows',
      'Make text uppercase',
      'Add transform effects',
      'Keep transitions fast'
    ],
    dontList: [
      "Don't use rounded corners",
      "Don't add blur to shadows",
      "Don't use subtle colors",
      "Don't make borders thin",
      "Don't use smooth transitions"
    ]
  },
  card: {
    style: 'Brutalism',
    component: 'Card',
    prompt: `Design a Brutalism card component featuring:
- Extra thick black borders (6-8px)
- Large hard shadows (8px offset)
- Stark color options (white, yellow, red, blue)
- No rounded corners
- Bold typography for headings`,
    context: [
      'Cards should dominate the layout',
      'Visual hierarchy through size and color',
      'No subtle effects or gradients'
    ],
    designPrinciples: [
      'Dominant presence',
      'Stark contrasts',
      'Heavy borders',
      'Bold colors'
    ],
    doList: [
      'Use extra thick borders',
      'Apply large shadows',
      'Use stark colors',
      'Make headings bold',
      'Create visual impact'
    ],
    dontList: [
      "Don't use gradients",
      "Don't add transparency",
      "Don't round corners",
      "Don't use thin text",
      "Don't be subtle"
    ]
  },
  form: {
    style: 'Brutalism',
    component: 'Form',
    prompt: `Build a Brutalism form with:
- Thick bordered inputs with shadow effects
- Chunky checkboxes and radio buttons
- Bold labels in uppercase
- Hard shadow focus states
- High contrast validation states`,
    context: [
      'Forms should be bold and impossible to ignore',
      'Every element needs visual weight',
      'Interactions should feel physical'
    ],
    designPrinciples: [
      'Heavy form controls',
      'Bold typography',
      'Physical feedback',
      'High contrast'
    ],
    doList: [
      'Use thick borders',
      'Make controls chunky',
      'Use uppercase labels',
      'Add shadow effects',
      'Create clear states'
    ],
    dontList: [
      "Don't use subtle inputs",
      "Don't make text small",
      "Don't use light colors",
      "Don't skip focus states",
      "Don't be delicate"
    ]
  }
}
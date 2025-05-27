import { DesignSystemPrompts } from '@/types/ai-prompts'

export const memphisPrompts: DesignSystemPrompts = {
  id: 'memphis',
  name: 'Memphis',
  
  quickPrompts: {
    'component': 'Create a Memphis-style {{COMPONENT}} with bold geometric shapes, hard shadows, and vibrant colors',
    'convert': 'Transform this {{COMPONENT}} into Memphis design with black borders, playful patterns, and retro aesthetics',
    'theme': 'Generate a Memphis color palette using {{COLOR}} with contrasting bright colors and black accents',
    'animation': 'Add Memphis-style animations with bouncy effects, rotations, and playful transitions',
  },
  
  detailedPrompts: {
    'fullComponent': `Design a complete Memphis {{COMPONENT}} featuring:
- Bold black borders (4px)
- Hard drop shadows (offset shadows)
- Bright, contrasting colors
- Geometric shapes and patterns
- Uppercase, bold typography
- Playful hover effects with rotation
- No rounded corners (except circles)`,
    
    'componentSet': `Create a Memphis design component set including:
- Buttons with hard shadows and bold borders
- Cards with geometric patterns
- Form inputs with thick black outlines
- Badges with vibrant backgrounds
- Progress bars with striped patterns
- All using 80s-inspired aesthetics`,
    
    'landingPage': `Design a Memphis-style landing page with:
- Hero section with geometric shapes scattered
- Bold typography and uppercase text
- Cards with pattern overlays
- Navigation with thick borders
- CTA buttons with hard shadows
- Footer with zigzag patterns`,
    
    'dashboard': `Build a Memphis admin dashboard featuring:
- Stats cards with floating geometric decorations
- Charts with bold colors and patterns
- Navigation with retro styling
- Data tables with thick borders
- Form sections with playful elements
- Consistent use of primary colors`,
  },
  
  contextualPrompts: {
    'ecommerce': `Create Memphis e-commerce components:
- Product cards with bold frames
- Shopping cart with geometric accents
- Price tags with hard shadows
- Add to cart buttons with hover effects
- Category filters with pattern backgrounds
- Checkout form with retro styling`,
    
    'social': `Design Memphis social media components:
- Post cards with zigzag borders
- Profile pictures in geometric frames
- Like buttons with bouncy animations
- Comment sections with bold dividers
- Story highlights with pattern overlays
- All maintaining playful 80s vibe`,
    
    'enterprise': `Build Memphis enterprise components:
- Dashboard widgets with professional colors
- Data visualization with geometric frames
- Navigation with subtle patterns
- Form sections with clear hierarchy
- Tables with alternating row patterns
- Maintaining bold yet organized look`,
  },
  
  best_practices: {
    'do': [
      'Use thick black borders (4px) on most elements',
      'Apply hard drop shadows with visible offset',
      'Combine bright, contrasting colors (pink, cyan, yellow)',
      'Add geometric shapes as decorative elements',
      'Use bold, uppercase typography for headings',
      'Include playful patterns (dots, stripes, zigzags)',
      'Add rotation and scale effects on hover',
    ],
    'dont': [
      "Don't use gradients or soft shadows",
      "Avoid muted or pastel colors",
      "Don't overuse rounded corners",
      "Avoid thin borders or subtle effects",
      "Don't make text too small or light",
      "Avoid too many patterns in one area",
      "Don't forget the playful, bold aesthetic",
    ],
  },
  
  customization_guide: `# Memphis Design Customization

## Border System
\`\`\`css
/* Standard Memphis borders */
.memphis-border {
  border: 4px solid #000;
}

/* Dashed variant */
.memphis-border-dashed {
  border: 4px dashed #000;
}
\`\`\`

## Shadow System
\`\`\`css
/* Hard drop shadows */
.memphis-shadow {
  box-shadow: 4px 4px 0 0 rgba(0, 0, 0, 1);
}

.memphis-shadow:hover {
  box-shadow: 6px 6px 0 0 rgba(0, 0, 0, 1);
}

.memphis-shadow:active {
  box-shadow: 2px 2px 0 0 rgba(0, 0, 0, 1);
  transform: translate(2px, 2px);
}
\`\`\`

## Pattern Overlays
- Dots: radial-gradient for polka dots
- Stripes: repeating-linear-gradient at 45deg
- Zigzag: custom SVG patterns
- Squiggles: SVG path decorations

## Animation Guidelines
- Use spring-like easing for bouncy feel
- Add rotation on hover (-2deg to 2deg)
- Scale on click (0.95)
- Quick transitions (150-250ms)`,
}

export default memphisPrompts
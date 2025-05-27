import { DesignSystemPrompts } from '@/types/ai-prompts'

export const claymorphismPrompts: DesignSystemPrompts = {
  id: 'claymorphism',
  name: 'Claymorphism',
  
  quickPrompts: {
    'component': 'Create a claymorphism {{COMPONENT}} with soft 3D appearance, rounded corners, and clay-like shadows',
    'convert': 'Convert this {{COMPONENT}} to claymorphism style with characteristic clay-like shadows and smooth surfaces',
    'theme': 'Generate a claymorphism color theme based on {{COLOR}} with soft pastels and muted tones',
    'animation': 'Add subtle claymorphism animations with smooth transitions and gentle hover effects',
  },
  
  detailedPrompts: {
    'fullComponent': `Create a complete claymorphism {{COMPONENT}} with:
- Soft, clay-like 3D appearance
- Dual shadows (outer drop shadow + inner highlight)
- Generous border radius (1.5-3rem)
- Smooth, matte surfaces
- Subtle gradients for depth
- Pressed states with inverted shadows
- Floating hover effects`,
    
    'componentSet': `Design a claymorphism component set including:
- Buttons with multiple clay-like states
- Cards with varying elevation levels
- Form inputs with soft inset shadows
- Badges with smooth rounded edges
- Progress bars with gradient fills
- All maintaining consistent clay aesthetics`,
    
    'landingPage': `Design a claymorphism landing page featuring:
- Hero section with floating clay elements
- Feature cards with soft 3D appearance
- Smooth, rounded navigation
- Call-to-action buttons with pressed states
- Testimonial cards with elevated style
- Footer with subtle clay texture`,
    
    'dashboard': `Create a claymorphism admin dashboard with:
- Stat cards with colored clay surfaces
- Charts with soft, rounded containers
- Navigation with pill-shaped active states
- Data tables with clay-like headers
- Form sections with inset inputs
- All using consistent shadow system`,
  },
  
  contextualPrompts: {
    'ecommerce': `Design claymorphism e-commerce components:
- Product cards with floating hover effect
- Shopping cart with soft 3D style
- Price tags with clay-like appearance
- Add to cart buttons with pressed states
- Review cards with elevated design
- Checkout form with smooth inputs`,
    
    'social': `Create claymorphism social media components:
- Post cards with soft shadows
- Profile avatars with clay borders
- Like buttons with 3D press effect
- Comment sections with inset style
- Story highlights with rounded edges
- All maintaining playful clay aesthetic`,
    
    'enterprise': `Design claymorphism enterprise components:
- Dashboard widgets with professional clay style
- Data visualization with soft containers
- Navigation with subtle 3D effects
- Form sections with grouped clay inputs
- Tables with elevated headers
- Maintaining sophisticated appearance`,
  },
  
  best_practices: {
    'do': [
      'Use generous border-radius (1.5-3rem) for that characteristic clay look',
      'Implement dual shadows: outer for depth, inner for highlights',
      'Create smooth transitions between states (hover, active, focus)',
      'Use soft, muted color palettes with subtle gradients',
      'Add pressed states with inverted shadows for interactivity',
      'Maintain consistent elevation levels across components',
    ],
    'dont': [
      "Don't use sharp corners - everything should be rounded and soft",
      "Avoid harsh shadows - keep them soft and diffused",
      "Don't overuse gradients - subtle is better",
      "Avoid pure black shadows - use colored shadows instead",
      "Don't make elements too flat - maintain 3D appearance",
      "Avoid abrupt state changes - smooth transitions are key",
    ],
  },
  
  customization_guide: `# Claymorphism Customization Guide

## Shadow System
\`\`\`css
/* Base clay shadow */
box-shadow: 
  0 20px 40px -15px rgba(0, 0, 0, 0.2),  /* Outer shadow */
  inset 0 -4px 8px rgba(255, 255, 255, 0.8); /* Inner highlight */

/* Pressed state */
box-shadow: 
  inset 0 4px 8px rgba(0, 0, 0, 0.2),
  inset 0 -2px 4px rgba(255, 255, 255, 0.6);
\`\`\`

## Color Palette
- Use soft, muted colors
- Add subtle gradients for depth
- Implement colored shadows matching the element
- Keep backgrounds light and airy

## Interactive States
- Hover: Increase shadow distance
- Active: Invert shadows for pressed effect
- Focus: Add colored ring
- Disabled: Reduce opacity and shadows`,
}

export default claymorphismPrompts
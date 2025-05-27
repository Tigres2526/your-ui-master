# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `npm run dev` - Start development server with Turbopack at http://localhost:3000
- `npm run build` - Build production bundle
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Important Build Notes
- Always run `npm run lint` before committing to ensure no ESLint errors
- The build process includes strict TypeScript type checking
- All components must properly handle type unions (e.g., string | boolean | number)

## Architecture Overview

This is a Next.js 15 design system showcase that demonstrates 13 different UI design patterns with comprehensive tooling for developers. The application serves as an interactive pattern library where developers can explore, preview, customize, and export production-ready component code.

### Core Design Patterns
The app showcases implementations of:
- **Neumorphism** - Soft UI with dual shadows (fully implemented with 30+ components)
- **Glassmorphism** - Transparent blur effects (fully implemented with complete component library)
- **Skeuomorphism** - Realistic material design
- **Brutalism** - Raw, bold aesthetics
- **Aurora** - Gradient-based ethereal design
- **Claymorphism** - 3D clay-like appearance
- **Bauhaus** - Geometric minimalism
- **Memphis** - Playful retro patterns
- **Cyberpunk** - Futuristic neon aesthetics
- **Organic** - Natural, flowing shapes
- **Swiss** - Grid-based minimalism
- **Material** - Google's Material Design
- **Fluent** - Microsoft's Fluent Design

### Component System
Built on shadcn/ui (Radix UI primitives + Tailwind CSS), the architecture follows a composable pattern:

#### Base Components
- `/src/components/ui/` - Extended shadcn/ui components (button, card, input, select, checkbox, radio, textarea, etc.)

#### Design System Components
- `/src/components/neumorphism/` - Complete neumorphism component library
- `/src/components/glassmorphism/` - Complete glassmorphism component library

#### Feature Components
- `/src/components/ai-prompt-generator.tsx` - AI prompt generation for each design style
- `/src/components/design-token-generator.tsx` - Live token customization with preview
- `/src/components/interactive-playground.tsx` - Component prop editor with live preview
- `/src/components/pattern-library.tsx` - Real-world UI pattern examples
- `/src/components/implementation-guide.tsx` - Step-by-step implementation docs
- `/src/components/export-manager.tsx` - Multi-format export (CSS, Tailwind, TS, SCSS)
- `/src/components/project-starter.tsx` - Starter templates and npm packages

#### Pattern Examples
- `/src/components/patterns/neumorphism/` - Login, dashboard, pricing, profile, settings
- `/src/components/patterns/glassmorphism/` - Login, dashboard stats

### Enhanced Features

#### AI-Powered Tools
- **AI Prompt Generator**: Quick/Full/Context modes with best practices
- **Design Tokens**: Type-safe token system with live customization
- **Interactive Playground**: Real-time component editing with code generation

#### Developer Experience
- **Pattern Library**: Production-ready UI patterns for common use cases
- **Implementation Guides**: Comprehensive docs with troubleshooting
- **Export Manager**: Export entire design systems in multiple formats
- **Project Starters**: CLI tools and starter templates

### Styling Architecture
- Tailwind CSS with CSS variables for theming
- Dark/light mode support via next-themes
- Design system-specific styles in `/src/styles/[design-system].ts`
- Design tokens in `/src/design-tokens/[design-system].ts`

### Type System
- `/src/types/design-system.ts` - Core design system interfaces
- `/src/types/design-tokens.ts` - Token system types
- `/src/types/ai-prompts.ts` - AI prompt interfaces

### Navigation & Layout
- **Sidebar**: Fixed navigation with home link on title
- **Error Boundaries**: Graceful error handling for each style page
- **Responsive**: Mobile-first design with viewport controls

### Best Practices
1. Always use proper TypeScript types (avoid `any`)
2. Handle indeterminate checkbox states: `onCheckedChange={(checked) => setState(checked === true)}`
3. Type-guard prop values in generic components
4. Use `Omit<>` to resolve type conflicts (e.g., HTML size vs variant size)
5. Export all components from index.ts for cleaner imports

### Common Patterns

#### Creating a New Design System Component Library
1. Create directory: `/src/components/[design-system]/`
2. Implement components using CVA for variants
3. Export all from `index.ts`
4. Add showcase component
5. Create pattern examples
6. Add to pattern library
7. Update implementation guide

#### Adding Interactive Features
1. Use the established component patterns (AI generator, token generator, etc.)
2. Integrate with existing type system
3. Add proper error handling
4. Include in relevant style pages

### Known Issues & Solutions
- **Checkbox TypeScript errors**: Use `checked === true` pattern
- **Gradient prop booleans**: Use specific variant values (e.g., "vibrant" not `true`)
- **Size conflicts**: Use `Omit<HTMLAttributes, 'size'>` pattern
- **Component imports**: Use proper destructured imports for Radix-based components
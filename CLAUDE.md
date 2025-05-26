# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `npm run dev` - Start development server with Turbopack at http://localhost:3000
- `npm run build` - Build production bundle
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Architecture Overview

This is a Next.js 15 design system showcase that demonstrates 17 different UI design patterns. The application serves as an interactive pattern library where developers can explore, preview, and copy production-ready component code.

### Core Design Patterns
The app showcases implementations of Neumorphism, Glassmorphism, Skeuomorphism 2.0, Brutalism, Aurora UI, Claymorphism, Bauhaus, Memphis, Cyberpunk, Organic, Swiss Design, Material/Material You, and Fluent design systems.

### Component System
Built on shadcn/ui (Radix UI primitives + Tailwind CSS), the architecture follows a composable pattern:
- `/src/components/ui/` - Base UI components from shadcn/ui
- `/src/app/styles/[style-name]/page.tsx` - Individual design system showcases
- `/src/components/showcase/component-showcase.tsx` - Reusable showcase wrapper that provides interactive previews with viewport controls

### Styling Architecture
- Tailwind CSS with CSS variables for theming
- Dark/light mode support via next-themes
- Design system-specific styles are applied through Tailwind classes and CSS-in-JS where needed (e.g., glassmorphism effects in `/src/styles/glassmorphism.ts`)

### Key Features Implementation
- **Search (⌘K)**: Command menu using cmdk library in `/src/components/search/search-command.tsx`
- **Interactive Previews**: ComponentShowcase component provides mobile/tablet/desktop viewport switching
- **Copy-to-clipboard**: Each component demo includes copyable code snippets
- **Theme Switching**: Implemented via ThemeProvider using next-themes

### Type System
Design system types are defined in `/src/types/design-system.ts` for consistent component prop interfaces across all style variations.
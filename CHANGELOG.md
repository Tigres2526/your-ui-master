# Changelog

All notable changes to Your UI Master will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0] - 2024-12-19

### Added

#### AI-Powered Features
- **AI Prompt Generator** - Generate design system prompts with Quick/Full/Context modes
- **Design Token Generator** - Live token customization with real-time preview
- **Interactive Playground** - Component prop editor with live code generation

#### Complete Component Libraries
- **Neumorphism Library** - 30+ components including:
  - NeuButton (multiple variants and sizes)
  - NeuCard (with intensity levels)
  - NeuInput, NeuCheckbox, NeuRadio
  - NeuSlider, NeuSwitch, NeuProgress
  - NeuBadge, NeuShowcase
- **Glassmorphism Library** - Complete component set:
  - GlassButton, GlassCard, GlassInput
  - GlassBadge, GlassModal, GlassTabs
  - GlassProgress, GlassDropdown, GlassTooltip

#### Developer Tools
- **Pattern Library** - Real-world UI patterns:
  - Login forms
  - Dashboard statistics
  - Pricing cards
  - User profiles
  - Settings panels
- **Implementation Guides** - Comprehensive documentation with:
  - Getting started instructions
  - Core concepts
  - Best practices
  - Troubleshooting
  - Resources
- **Export Manager** - Multi-format export:
  - CSS custom properties
  - Tailwind configuration
  - TypeScript tokens
  - SCSS variables
- **Project Starters** - Quick setup with:
  - CLI commands
  - Starter templates
  - NPM package info

#### Infrastructure
- **Error Boundaries** - Graceful error handling for each style page
- **Type System** - Comprehensive TypeScript definitions:
  - Design tokens types
  - AI prompt interfaces
  - Component prop types
- **Design Tokens** - Structured token system for all styles
- **Extended shadcn/ui** - Added missing components:
  - Checkbox
  - Radio Group
  - Select
  - Textarea

### Changed
- **Navigation** - Sidebar title now links to home page
- **Build Process** - Stricter TypeScript checking
- **Component Structure** - Organized into feature-specific directories
- **Documentation** - Updated CLAUDE.md with comprehensive guidance

### Fixed
- Navigation blocking issue on certain style pages
- Background layers capturing mouse events
- TypeScript type mismatches
- Checkbox indeterminate state handling
- Build errors across multiple components
- ESLint warnings and errors

### Removed
- Duplicate page routes (aurora-ui, material-you, etc.)
- Redundant imports
- Unused variables

## [1.0.0] - 2024-12-01

### Added
- Initial release with 13 design styles
- Basic component showcase
- Copy-to-clipboard functionality
- Dark/light mode support
- Search with ⌘K
- Responsive design
- Mobile/tablet/desktop viewport controls

---

🤖 Generated with [Claude Code](https://claude.ai/code)

Co-Authored-By: Claude <noreply@anthropic.com>
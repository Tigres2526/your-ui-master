# Your UI Master

A comprehensive showcase of modern UI design patterns built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui. Now featuring AI-powered tools, complete component libraries, and advanced developer features.

## 🎨 Design Styles

### Fully Implemented Systems
- **Neumorphism** - Soft UI with dual shadows (30+ components)
- **Glassmorphism** - Frosted glass effects with complete component library

### Additional Styles
- **Skeuomorphism** - Modern realistic textures and materials
- **Brutalism** - Raw, bold, unapologetic design
- **Aurora** - Gradient meshes and northern lights effects
- **Claymorphism** - 3D clay-like surfaces
- **Bauhaus** - Geometric minimalism
- **Memphis** - Playful 80s patterns
- **Cyberpunk** - Neon and glitch effects
- **Organic** - Blob shapes and fluid motion
- **Swiss** - Grid-based precision
- **Material** - Google's Material Design
- **Fluent** - Microsoft's Fluent Design

## 🚀 Enhanced Features

### AI-Powered Tools
- **AI Prompt Generator** - Generate design system prompts for AI assistants
- **Design Token Generator** - Live token customization with real-time preview
- **Interactive Playground** - Edit component props and see changes instantly

### Developer Experience
- **Component Libraries** - Complete Neumorphism & Glassmorphism libraries
- **Pattern Library** - Real-world UI patterns (login forms, dashboards, etc.)
- **Implementation Guides** - Step-by-step docs with troubleshooting
- **Export Manager** - Export in CSS, Tailwind, TypeScript, or SCSS
- **Project Starters** - Starter templates and npm package integration

### Core Features
- **Copy-Paste Ready** - Production-ready code you can copy directly
- **Interactive Previews** - Live component demonstrations
- **Dark/Light Mode** - Full theme support
- **Search & Filter** - Quick navigation with ⌘K
- **Responsive Design** - Mobile-first approach
- **Accessibility** - WCAG compliant components
- **Error Boundaries** - Graceful error handling

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS + CSS-in-JS
- **Components**: shadcn/ui (Radix UI)
- **Icons**: Lucide React
- **Theme**: next-themes
- **Animation**: Framer Motion
- **State**: React Hooks
- **Utilities**: class-variance-authority (CVA), clsx

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/Tigres2526/your-ui-master.git

# Navigate to the project
cd your-ui-master

# Install dependencies
npm install

# Run the development server
npm run dev

# Build for production
npm run build

# Run linting
npm run lint
```

Open [http://localhost:3000](http://localhost:3000) to view in your browser.

## 🎯 Usage

### Quick Start
1. Browse design styles from the sidebar
2. Click "Your UI Master" title to go home
3. Use ⌘K for quick search

### Component Libraries (Neumorphism & Glassmorphism)
1. Explore 30+ pre-built components
2. View live demos and variations
3. Copy component code directly
4. Customize using the Interactive Playground

### AI Features
1. **Generate Prompts**: Click "AI Prompt Generator" for design system prompts
2. **Customize Tokens**: Use "Design Token Generator" to modify colors, spacing, etc.
3. **Live Editing**: Try "Interactive Playground" for real-time customization

### Export & Integration
1. **Export Manager**: Download complete design systems
2. **Pattern Library**: Copy production-ready patterns
3. **Implementation Guide**: Follow step-by-step docs
4. **Project Starters**: Use CLI commands for quick setup

## 📁 Project Structure

```
src/
├── app/                      # Next.js app router pages
│   └── styles/              # Design system showcases
├── components/
│   ├── ui/                  # Base shadcn/ui components
│   ├── neumorphism/         # Neumorphism component library
│   ├── glassmorphism/       # Glassmorphism component library
│   ├── patterns/            # Real-world UI patterns
│   └── [features].tsx       # Feature components
├── design-tokens/           # Design token configurations
├── styles/                  # Design system styles
└── types/                   # TypeScript definitions
```

## 🔧 Configuration

### Design Tokens
Each design system has customizable tokens for:
- Colors (primary, secondary, accent)
- Shadows (elevation levels)
- Spacing (scale system)
- Typography (font families, sizes)
- Animation (durations, easings)
- Border radius
- Effects (blur, opacity)

### Adding New Components
1. Create component in `/src/components/[design-system]/`
2. Use CVA for variant management
3. Export from `index.ts`
4. Add to showcase
5. Create pattern examples
6. Update documentation

## 📝 License

MIT License - feel free to use in your projects!

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Contributing Guidelines
1. Follow the existing code style
2. Add proper TypeScript types
3. Run `npm run lint` before committing
4. Update documentation for new features
5. Add examples to pattern library

## 🐛 Known Issues

- Some design styles may have performance impacts on lower-end devices due to complex effects
- Backdrop filter (glassmorphism) requires modern browser support
- Complex shadows (neumorphism) may affect rendering performance on mobile

---

Built with ❤️ by Your UI Master Team

🤖 Enhanced with AI-powered features by Claude
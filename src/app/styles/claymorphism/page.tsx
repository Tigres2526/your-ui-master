'use client'

import React from 'react'
import { ClayShowcase } from '@/components/claymorphism/clay-showcase'
// import { ClayLoginForm } from '@/components/patterns/claymorphism/login-form'
// import { ClayDashboardStats } from '@/components/patterns/claymorphism/dashboard-stats'
import { DesignTokenGenerator } from '@/components/design-token-generator'
// import { InteractivePlayground } from '@/components/interactive-playground'
import { PatternLibrary } from '@/components/pattern-library'
import { ImplementationGuide } from '@/components/implementation-guide'
import { ExportManager } from '@/components/export-manager'
import { ProjectStarter } from '@/components/project-starter'
import { AIPromptGenerator } from '@/components/ai-prompt-generator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { CodeBlockWithExport } from '@/components/code-block-with-export'
// import claymorphismPrompts from '@/ai-prompts/claymorphism-prompts'

// const claymorphismComponents = {
//   button: {
//     name: 'ClayButton',
//     description: 'Soft, 3D button with clay-like appearance',
//     props: {
//       variant: ['default', 'primary', 'secondary', 'accent', 'ghost', 'outline'],
//       size: ['sm', 'default', 'lg', 'icon'],
//       children: 'React.ReactNode',
//     },
//   },
//   card: {
//     name: 'ClayCard',
//     description: 'Clay-like card container with soft shadows',
//     props: {
//       variant: ['default', 'elevated', 'pressed', 'floating', 'colored'],
//       size: ['sm', 'default', 'lg'],
//       children: 'React.ReactNode',
//     },
//   },
//   input: {
//     name: 'ClayInput',
//     description: 'Text input with soft inset shadow',
//     props: {
//       variant: ['default', 'elevated', 'filled'],
//       size: ['sm', 'default', 'lg'],
//       placeholder: 'string',
//     },
//   },
//   badge: {
//     name: 'ClayBadge',
//     description: 'Small clay-like badge for status indicators',
//     props: {
//       variant: ['default', 'primary', 'secondary', 'accent', 'outline'],
//       size: ['sm', 'default', 'lg'],
//       children: 'React.ReactNode',
//     },
//   },
// }

const codeExamples = {
  css: `/* Claymorphism CSS */
.clay-button {
  background: linear-gradient(135deg, #FF6B6B 0%, #FF8E8E 100%);
  border-radius: 1.5rem;
  padding: 1rem 2rem;
  box-shadow: 
    0 20px 40px -15px rgba(0, 0, 0, 0.2),
    inset 0 -4px 8px rgba(255, 255, 255, 0.8);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.clay-button:hover {
  box-shadow: 
    0 25px 50px -20px rgba(0, 0, 0, 0.25),
    inset 0 -5px 10px rgba(255, 255, 255, 0.8);
  transform: translateY(-2px);
}

.clay-button:active {
  box-shadow: 
    inset 0 4px 8px rgba(0, 0, 0, 0.2),
    inset 0 -2px 4px rgba(255, 255, 255, 0.6);
  transform: translateY(0);
}

.clay-card {
  background: white;
  border-radius: 2rem;
  padding: 2rem;
  box-shadow: 
    0 20px 40px -15px rgba(0, 0, 0, 0.2),
    inset 0 -4px 8px rgba(255, 255, 255, 0.8);
}

.clay-input {
  background: white;
  border-radius: 1rem;
  padding: 0.75rem 1rem;
  box-shadow: 
    inset 0 2px 4px rgba(0, 0, 0, 0.1),
    inset 0 -1px 2px rgba(255, 255, 255, 0.8);
  border: none;
  outline: none;
}`,
  tailwind: `<!-- Claymorphism with Tailwind -->
<button class="
  bg-gradient-to-br from-red-400 to-red-500 
  text-white font-medium
  px-6 py-3 rounded-3xl
  shadow-[0_20px_40px_-15px_rgba(0,0,0,0.2),inset_0_-4px_8px_rgba(255,255,255,0.3)]
  hover:shadow-[0_25px_50px_-20px_rgba(0,0,0,0.25),inset_0_-5px_10px_rgba(255,255,255,0.3)]
  active:shadow-[inset_0_4px_8px_rgba(0,0,0,0.2),inset_0_-2px_4px_rgba(255,255,255,0.2)]
  transform hover:-translate-y-0.5 active:translate-y-0
  transition-all duration-300
">
  Clay Button
</button>

<div class="
  bg-white p-6 rounded-[2rem]
  shadow-[0_20px_40px_-15px_rgba(0,0,0,0.2),inset_0_-4px_8px_rgba(255,255,255,0.8)]
">
  <h3 class="text-xl font-semibold text-gray-800">Clay Card</h3>
  <p class="text-gray-600 mt-2">Soft 3D appearance with smooth shadows</p>
</div>

<input class="
  w-full bg-white text-gray-800
  px-4 py-3 rounded-2xl
  shadow-[inset_0_2px_4px_rgba(0,0,0,0.1),inset_0_-1px_2px_rgba(255,255,255,0.8)]
  focus:shadow-[inset_0_3px_6px_rgba(0,0,0,0.15),inset_0_-1px_2px_rgba(255,255,255,0.8)]
  placeholder-gray-400 outline-none
  transition-all duration-300
" placeholder="Enter text...">`,
  typescript: `// Claymorphism Components
import { ClayButton } from '@/components/claymorphism'
import { ClayCard, ClayCardHeader, ClayCardTitle, ClayCardContent } from '@/components/claymorphism'
import { ClayInput } from '@/components/claymorphism'
import { ClayBadge } from '@/components/claymorphism'

export function ClayExample() {
  return (
    <div className="space-y-6">
      <ClayButton variant="primary" size="lg">
        Primary Button
      </ClayButton>
      
      <ClayCard variant="floating">
        <ClayCardHeader>
          <ClayCardTitle>Clay Card</ClayCardTitle>
        </ClayCardHeader>
        <ClayCardContent>
          <p>Soft, 3D clay-like appearance with smooth shadows.</p>
          <ClayBadge variant="accent" className="mt-2">New</ClayBadge>
        </ClayCardContent>
      </ClayCard>
      
      <ClayInput 
        variant="elevated" 
        placeholder="Enter your email..." 
      />
    </div>
  )
}`,
  scss: `// Claymorphism SCSS
@mixin clay-shadow($depth: 'default') {
  @if $depth == 'sm' {
    box-shadow: 
      0 10px 20px -5px rgba(0, 0, 0, 0.1),
      inset 0 -2px 4px rgba(255, 255, 255, 0.8);
  } @else if $depth == 'lg' {
    box-shadow: 
      0 30px 60px -25px rgba(0, 0, 0, 0.3),
      inset 0 -6px 12px rgba(255, 255, 255, 0.8);
  } @else {
    box-shadow: 
      0 20px 40px -15px rgba(0, 0, 0, 0.2),
      inset 0 -4px 8px rgba(255, 255, 255, 0.8);
  }
}

@mixin clay-pressed {
  box-shadow: 
    inset 0 4px 8px rgba(0, 0, 0, 0.2),
    inset 0 -2px 4px rgba(255, 255, 255, 0.6);
}

.clay-button {
  background: linear-gradient(135deg, #FF6B6B 0%, #FF8E8E 100%);
  border-radius: 1.5rem;
  padding: 1rem 2rem;
  @include clay-shadow();
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    @include clay-shadow('lg');
    transform: translateY(-2px);
  }
  
  &:active {
    @include clay-pressed();
    transform: translateY(0);
  }
}

.clay-card {
  background: white;
  border-radius: 2rem;
  padding: 2rem;
  @include clay-shadow();
  
  &--elevated {
    @include clay-shadow('lg');
  }
  
  &--pressed {
    @include clay-pressed();
  }
}`
}

// const implementationSteps = [
//   {
//     title: 'Install Dependencies',
//     description: 'Set up the required packages',
//     code: `npm install class-variance-authority clsx tailwind-merge
// npm install @radix-ui/react-switch @radix-ui/react-checkbox
// npm install @radix-ui/react-radio-group @radix-ui/react-slider`,
//   },
//   {
//     title: 'Add Clay Shadows',
//     description: 'Configure Tailwind for clay-like shadows',
//     code: `// tailwind.config.ts
// theme: {
//   extend: {
//     boxShadow: {
//       'clay-sm': '0 10px 20px -5px rgba(0, 0, 0, 0.1), inset 0 -2px 4px rgba(255, 255, 255, 0.8)',
//       'clay': '0 20px 40px -15px rgba(0, 0, 0, 0.2), inset 0 -4px 8px rgba(255, 255, 255, 0.8)',
//       'clay-lg': '0 30px 60px -25px rgba(0, 0, 0, 0.3), inset 0 -6px 12px rgba(255, 255, 255, 0.8)',
//       'clay-pressed': 'inset 0 4px 8px rgba(0, 0, 0, 0.2), inset 0 -2px 4px rgba(255, 255, 255, 0.6)',
//     },
//   },
// }`,
//   },
//   {
//     title: 'Create Clay Components',
//     description: 'Build your claymorphism components',
//     code: `// components/clay-button.tsx
// import { cva } from 'class-variance-authority'
// 
// const clayButton = cva(
//   'font-medium transition-all duration-300 transform active:scale-95',
//   {
//     variants: {
//       variant: {
//         default: 'bg-white text-gray-800 shadow-clay hover:shadow-clay-lg active:shadow-clay-pressed',
//         primary: 'bg-gradient-to-br from-red-400 to-red-500 text-white shadow-clay hover:shadow-clay-lg',
//       },
//       size: {
//         sm: 'h-9 px-4 text-sm rounded-2xl',
//         default: 'h-11 px-6 text-base rounded-2xl',
//         lg: 'h-14 px-8 text-lg rounded-3xl',
//       },
//     },
//   }
// )`,
//   },
// ]

// const clayPatterns = [
//   {
//     id: 'login-form',
//     name: 'Login Form',
//     description: 'Authentication form with clay-like depth',
//     component: ClayLoginForm,
//   },
//   {
//     id: 'dashboard-stats',
//     name: 'Dashboard Stats',
//     description: 'Statistics cards with soft 3D appearance',
//     component: ClayDashboardStats,
//   },
// ]

// const projectResources = {
//   starter: {
//     name: 'create-clay-app',
//     description: 'Claymorphism design system starter',
//     command: 'npx create-clay-app my-app',
//     features: ['Pre-built components', 'Clay design tokens', 'Animation presets'],
//   },
//   templates: [
//     {
//       name: 'Clay Dashboard',
//       description: 'Admin dashboard with claymorphism design',
//       href: '#',
//     },
//     {
//       name: 'Clay Portfolio',
//       description: 'Creative portfolio with 3D clay effects',
//       href: '#',
//     },
//   ],
//   resources: [
//     {
//       name: 'Clay Design Principles',
//       description: 'Learn the fundamentals of claymorphism',
//       href: '#',
//     },
//     {
//       name: 'Shadow Generator',
//       description: 'Create custom clay shadows',
//       href: '#',
//     },
//   ],
// }

export default function ClaymorphismPage() {
  return (
    <div className="min-h-screen bg-[#F7F3F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
            Claymorphism Design System
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Create soft, 3D interfaces with clay-like appearance. Features smooth shadows,
            generous border radius, and playful interactions.
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="showcase" className="space-y-8">
          <TabsList className="grid grid-cols-3 lg:grid-cols-7 gap-2 h-auto p-1 bg-white/50 backdrop-blur-sm shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)] rounded-2xl">
            <TabsTrigger value="showcase" className="data-[state=active]:bg-white data-[state=active]:shadow-[0_10px_20px_-5px_rgba(0,0,0,0.15),inset_0_-2px_4px_rgba(255,255,255,0.8)] rounded-xl">
              Showcase
            </TabsTrigger>
            <TabsTrigger value="tokens" className="data-[state=active]:bg-white data-[state=active]:shadow-[0_10px_20px_-5px_rgba(0,0,0,0.15),inset_0_-2px_4px_rgba(255,255,255,0.8)] rounded-xl">
              Tokens
            </TabsTrigger>
            <TabsTrigger value="playground" className="data-[state=active]:bg-white data-[state=active]:shadow-[0_10px_20px_-5px_rgba(0,0,0,0.15),inset_0_-2px_4px_rgba(255,255,255,0.8)] rounded-xl">
              Playground
            </TabsTrigger>
            <TabsTrigger value="patterns" className="data-[state=active]:bg-white data-[state=active]:shadow-[0_10px_20px_-5px_rgba(0,0,0,0.15),inset_0_-2px_4px_rgba(255,255,255,0.8)] rounded-xl">
              Patterns
            </TabsTrigger>
            <TabsTrigger value="implementation" className="data-[state=active]:bg-white data-[state=active]:shadow-[0_10px_20px_-5px_rgba(0,0,0,0.15),inset_0_-2px_4px_rgba(255,255,255,0.8)] rounded-xl">
              Guide
            </TabsTrigger>
            <TabsTrigger value="export" className="data-[state=active]:bg-white data-[state=active]:shadow-[0_10px_20px_-5px_rgba(0,0,0,0.15),inset_0_-2px_4px_rgba(255,255,255,0.8)] rounded-xl">
              Export
            </TabsTrigger>
            <TabsTrigger value="ai" className="data-[state=active]:bg-white data-[state=active]:shadow-[0_10px_20px_-5px_rgba(0,0,0,0.15),inset_0_-2px_4px_rgba(255,255,255,0.8)] rounded-xl">
              AI
            </TabsTrigger>
          </TabsList>

          <TabsContent value="showcase" className="space-y-8">
            <ClayShowcase />
            
            {/* Code Examples */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-800">Code Examples</h2>
              <CodeBlockWithExport code={codeExamples} defaultFormat="tailwind" />
            </div>
          </TabsContent>

          <TabsContent value="tokens">
            <DesignTokenGenerator style="claymorphism" />
          </TabsContent>

          <TabsContent value="playground">
            {/* <InteractivePlayground
              components={claymorphismComponents}
              designSystem="claymorphism"
            /> */}
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">Coming soon</p>
            </div>
          </TabsContent>

          <TabsContent value="patterns">
            <PatternLibrary style="claymorphism" />
          </TabsContent>

          <TabsContent value="implementation">
            <ImplementationGuide style="claymorphism" />
          </TabsContent>

          <TabsContent value="export">
            <div className="space-y-8">
              <ExportManager style="claymorphism" />
              <ProjectStarter style="claymorphism" />
            </div>
          </TabsContent>

          <TabsContent value="ai">
            <AIPromptGenerator style="claymorphism" />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
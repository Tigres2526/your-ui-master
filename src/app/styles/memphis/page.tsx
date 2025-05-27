'use client'

import React from 'react'
import { MemphisShowcase } from '@/components/memphis/memphis-showcase'
// import { MemphisLoginForm } from '@/components/patterns/memphis/login-form'
// import { MemphisDashboardStats } from '@/components/patterns/memphis/dashboard-stats'
import { DesignTokenGenerator } from '@/components/design-token-generator'
// import { InteractivePlayground } from '@/components/interactive-playground'
import { PatternLibrary } from '@/components/pattern-library'
import { ImplementationGuide } from '@/components/implementation-guide'
import { ExportManager } from '@/components/export-manager'
import { ProjectStarter } from '@/components/project-starter'
import { AIPromptGenerator } from '@/components/ai-prompt-generator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { CodeBlockWithExport } from '@/components/code-block-with-export'
// import memphisPrompts from '@/ai-prompts/memphis-prompts'

// const memphisComponents = {
//   button: {
//     name: 'MemphisButton',
//     description: 'Bold button with hard shadows and uppercase text',
//     props: {
//       variant: ['default', 'primary', 'secondary', 'accent', 'ghost', 'outline'],
//       size: ['sm', 'default', 'lg', 'icon'],
//       children: 'React.ReactNode',
//     },
//   },
//   card: {
//     name: 'MemphisCard',
//     description: 'Geometric card with thick borders and playful design',
//     props: {
//       variant: ['default', 'primary', 'secondary', 'accent', 'pattern', 'floating'],
//       size: ['sm', 'default', 'lg'],
//       children: 'React.ReactNode',
//     },
//   },
//   input: {
//     name: 'MemphisInput',
//     description: 'Bold input field with Memphis styling',
//     props: {
//       variant: ['default', 'filled', 'underline'],
//       size: ['sm', 'default', 'lg'],
//       placeholder: 'string',
//     },
//   },
//   badge: {
//     name: 'MemphisBadge',
//     description: 'Retro badge with bold borders',
//     props: {
//       variant: ['default', 'primary', 'secondary', 'accent', 'outline'],
//       size: ['sm', 'default', 'lg'],
//       children: 'React.ReactNode',
//     },
//   },
// }

const codeExamples = {
  css: `/* Memphis CSS */
.memphis-button {
  background-color: #FF1744;
  color: white;
  border: 4px solid #000;
  box-shadow: 4px 4px 0 0 rgba(0, 0, 0, 1);
  font-weight: 900;
  text-transform: uppercase;
  transition: all 0.25s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.memphis-button:hover {
  box-shadow: 6px 6px 0 0 rgba(0, 0, 0, 1);
  transform: rotate(2deg);
}

.memphis-button:active {
  box-shadow: 2px 2px 0 0 rgba(0, 0, 0, 1);
  transform: translate(2px, 2px);
}

.memphis-card {
  background-color: white;
  border: 4px solid #000;
  box-shadow: 6px 6px 0 0 rgba(0, 0, 0, 1);
  position: relative;
}

.memphis-pattern {
  background-image: radial-gradient(circle, #000 1px, transparent 1px);
  background-size: 20px 20px;
}`,
  tailwind: `<!-- Memphis with Tailwind -->
<button class="
  bg-[#FF1744] text-white 
  font-black uppercase tracking-wider
  px-6 py-3 
  border-4 border-black 
  shadow-[4px_4px_0_0_rgba(0,0,0,1)]
  hover:shadow-[6px_6px_0_0_rgba(0,0,0,1)]
  active:shadow-[2px_2px_0_0_rgba(0,0,0,1)]
  active:translate-x-[2px] active:translate-y-[2px]
  transform hover:rotate-2 active:rotate-0
  transition-all duration-[250ms]
">
  CLICK ME!
</button>

<div class="
  bg-white p-6
  border-4 border-black
  shadow-[6px_6px_0_0_rgba(0,0,0,1)]
  relative
">
  <div class="absolute -top-4 -right-4 w-12 h-12 bg-[#FFEB3B] rounded-full border-4 border-black"></div>
  <h3 class="text-2xl font-black uppercase">Memphis Card</h3>
  <p class="font-bold mt-2">Bold, playful, and utterly radical!</p>
</div>

<input class="
  w-full bg-white text-black
  font-bold placeholder-gray-500
  px-4 py-3
  border-4 border-black
  shadow-[4px_4px_0_0_rgba(0,0,0,1)]
  focus:shadow-[2px_2px_0_0_rgba(0,0,0,1)]
  focus:translate-x-[2px] focus:translate-y-[2px]
  outline-none transition-all duration-[250ms]
" placeholder="TYPE SOMETHING...">`,
  typescript: `// Memphis Components
import { MemphisButton } from '@/components/memphis'
import { MemphisCard, MemphisCardHeader, MemphisCardTitle, MemphisCardContent } from '@/components/memphis'
import { MemphisInput } from '@/components/memphis'
import { MemphisBadge } from '@/components/memphis'

export function MemphisExample() {
  return (
    <div className="space-y-6">
      <MemphisButton variant="primary" size="lg">
        TOTALLY RAD!
      </MemphisButton>
      
      <MemphisCard variant="pattern">
        <MemphisCardHeader>
          <MemphisCardTitle>MEMPHIS STYLE</MemphisCardTitle>
        </MemphisCardHeader>
        <MemphisCardContent>
          <p>Bold patterns and playful geometry!</p>
          <MemphisBadge variant="accent">NEW!</MemphisBadge>
        </MemphisCardContent>
      </MemphisCard>
      
      <MemphisInput 
        variant="filled" 
        placeholder="ENTER TEXT..." 
      />
    </div>
  )
}`,
  scss: `// Memphis SCSS
@mixin memphis-shadow($size: 'default') {
  @if $size == 'sm' {
    box-shadow: 2px 2px 0 0 rgba(0, 0, 0, 1);
  } @else if $size == 'lg' {
    box-shadow: 8px 8px 0 0 rgba(0, 0, 0, 1);
  } @else {
    box-shadow: 4px 4px 0 0 rgba(0, 0, 0, 1);
  }
}

@mixin memphis-border {
  border: 4px solid #000;
}

.memphis-button {
  @include memphis-border();
  @include memphis-shadow();
  
  background-color: #FF1744;
  color: white;
  font-weight: 900;
  text-transform: uppercase;
  transition: all 0.25s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  
  &:hover {
    @include memphis-shadow('lg');
    transform: rotate(2deg);
  }
  
  &:active {
    @include memphis-shadow('sm');
    transform: translate(2px, 2px);
  }
}

.memphis-pattern {
  &--dots {
    background-image: radial-gradient(circle, #000 1px, transparent 1px);
    background-size: 20px 20px;
  }
  
  &--stripes {
    background-image: repeating-linear-gradient(
      45deg,
      transparent,
      transparent 10px,
      #000 10px,
      #000 20px
    );
  }
  
  &--zigzag {
    background-image: linear-gradient(135deg, #000 25%, transparent 25%),
                      linear-gradient(225deg, #000 25%, transparent 25%),
                      linear-gradient(315deg, #000 25%, transparent 25%),
                      linear-gradient(45deg, #000 25%, transparent 25%);
    background-size: 20px 20px;
    background-position: 0 0, 10px 0, 10px 10px, 0 10px;
  }
}`
}

// const implementationSteps = [
//   {
//     title: 'Install Dependencies',
//     description: 'Set up the required packages',
//     code: `npm install class-variance-authority clsx tailwind-merge
// npm install @radix-ui/react-select @radix-ui/react-switch
// npm install @radix-ui/react-checkbox @radix-ui/react-radio-group`,
//   },
//   {
//     title: 'Configure Memphis Shadows',
//     description: 'Add hard shadows to Tailwind config',
//     code: `// tailwind.config.ts
// theme: {
//   extend: {
//     boxShadow: {
//       'memphis-sm': '2px 2px 0 0 rgba(0, 0, 0, 1)',
//       'memphis': '4px 4px 0 0 rgba(0, 0, 0, 1)',
//       'memphis-md': '6px 6px 0 0 rgba(0, 0, 0, 1)',
//       'memphis-lg': '8px 8px 0 0 rgba(0, 0, 0, 1)',
//       'memphis-xl': '12px 12px 0 0 rgba(0, 0, 0, 1)',
//     },
//     borderWidth: {
//       '3': '3px',
//       '4': '4px',
//     },
//   },
// }`,
//   },
//   {
//     title: 'Create Memphis Components',
//     description: 'Build your Memphis-style components',
//     code: `// components/memphis-button.tsx
// import { cva } from 'class-variance-authority'
// 
// const memphisButton = cva(
//   'font-bold uppercase tracking-wider transition-all duration-250 transform hover:rotate-2 active:rotate-0',
//   {
//     variants: {
//       variant: {
//         default: 'bg-white text-black border-4 border-black shadow-memphis hover:shadow-memphis-md',
//         primary: 'bg-[#FF1744] text-white border-4 border-black shadow-memphis hover:shadow-memphis-md',
//       },
//       size: {
//         sm: 'h-8 px-3 text-sm',
//         default: 'h-12 px-6 text-base',
//         lg: 'h-16 px-8 text-xl',
//       },
//     },
//   }
// )`,
//   },
// ]

// const memphisPatterns = [
//   {
//     id: 'login-form',
//     name: 'Login Form',
//     description: 'Retro authentication with geometric decorations',
//     component: MemphisLoginForm,
//   },
//   {
//     id: 'dashboard-stats',
//     name: 'Dashboard Stats',
//     description: 'Statistics with playful Memphis elements',
//     component: MemphisDashboardStats,
//   },
// ]

// const projectResources = {
//   starter: {
//     name: 'create-memphis-app',
//     description: 'Memphis design system starter',
//     command: 'npx create-memphis-app my-app',
//     features: ['Pre-built components', 'Pattern library', 'Animation presets'],
//   },
//   templates: [
//     {
//       name: 'Memphis Portfolio',
//       description: 'Creative portfolio with 80s vibes',
//       href: '#',
//     },
//     {
//       name: 'Memphis Shop',
//       description: 'E-commerce with retro aesthetics',
//       href: '#',
//     },
//   ],
//   resources: [
//     {
//       name: 'Memphis Design History',
//       description: 'Learn about the Memphis Group',
//       href: '#',
//     },
//     {
//       name: 'Pattern Generator',
//       description: 'Create Memphis patterns',
//       href: '#',
//     },
//   ],
// }

export default function MemphisPage() {
  return (
    <div className="min-h-screen bg-[#FFF9C4]">
      {/* Background decorations */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-20">
        <div className="absolute top-20 left-10 w-20 h-20 bg-[#FF1744] rotate-45" />
        <div className="absolute top-40 right-20 w-16 h-16 border-4 border-black rounded-full" />
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-[#FFEB3B]" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} />
        <div className="absolute bottom-40 right-1/3 w-32 h-32 bg-[#00BCD4]" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-6xl font-black uppercase transform -rotate-2">
            Memphis Design System
          </h1>
          <p className="text-xl font-bold max-w-3xl mx-auto">
            Bold geometric patterns, vibrant colors, and playful 80s aesthetics. 
            Embrace the chaos of squiggles, zigzags, and radical shapes!
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="showcase" className="space-y-8">
          <TabsList className="inline-flex gap-2 h-auto p-2 bg-white border-4 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
            <TabsTrigger value="showcase" className="data-[state=active]:bg-[#FF1744] data-[state=active]:text-white data-[state=active]:shadow-[2px_2px_0_0_rgba(0,0,0,1)] font-bold uppercase">
              Showcase
            </TabsTrigger>
            <TabsTrigger value="tokens" className="data-[state=active]:bg-[#00BCD4] data-[state=active]:text-black data-[state=active]:shadow-[2px_2px_0_0_rgba(0,0,0,1)] font-bold uppercase">
              Tokens
            </TabsTrigger>
            <TabsTrigger value="playground" className="data-[state=active]:bg-[#FFEB3B] data-[state=active]:text-black data-[state=active]:shadow-[2px_2px_0_0_rgba(0,0,0,1)] font-bold uppercase">
              Playground
            </TabsTrigger>
            <TabsTrigger value="patterns" className="data-[state=active]:bg-[#76FF03] data-[state=active]:text-black data-[state=active]:shadow-[2px_2px_0_0_rgba(0,0,0,1)] font-bold uppercase">
              Patterns
            </TabsTrigger>
            <TabsTrigger value="implementation" className="data-[state=active]:bg-[#9C27B0] data-[state=active]:text-white data-[state=active]:shadow-[2px_2px_0_0_rgba(0,0,0,1)] font-bold uppercase">
              Guide
            </TabsTrigger>
            <TabsTrigger value="export" className="data-[state=active]:bg-[#FF6D00] data-[state=active]:text-white data-[state=active]:shadow-[2px_2px_0_0_rgba(0,0,0,1)] font-bold uppercase">
              Export
            </TabsTrigger>
            <TabsTrigger value="ai" className="data-[state=active]:bg-[#00E676] data-[state=active]:text-black data-[state=active]:shadow-[2px_2px_0_0_rgba(0,0,0,1)] font-bold uppercase">
              AI
            </TabsTrigger>
          </TabsList>

          <TabsContent value="showcase" className="space-y-8">
            <MemphisShowcase />
            
            {/* Code Examples */}
            <div className="space-y-4">
              <h2 className="text-2xl font-black uppercase">Code Examples</h2>
              <CodeBlockWithExport code={codeExamples} defaultFormat="tailwind" />
            </div>
          </TabsContent>

          <TabsContent value="tokens">
            <DesignTokenGenerator style="memphis" />
          </TabsContent>

          <TabsContent value="playground">
            {/* <InteractivePlayground
              components={memphisComponents}
              designSystem="memphis"
            /> */}
            <div className="text-center py-12">
              <p className="text-xl font-bold uppercase">Coming soon</p>
            </div>
          </TabsContent>

          <TabsContent value="patterns">
            <PatternLibrary style="memphis" />
          </TabsContent>

          <TabsContent value="implementation">
            <ImplementationGuide style="memphis" />
          </TabsContent>

          <TabsContent value="export">
            <div className="space-y-8">
              <ExportManager style="memphis" />
              <ProjectStarter style="memphis" />
            </div>
          </TabsContent>

          <TabsContent value="ai">
            <AIPromptGenerator style="memphis" />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
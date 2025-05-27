'use client'

import * as React from 'react'
import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { 
  Download, 
  Copy, 
  Check, 
  Package,
  Terminal,
  FileCode,
  Layers,
  Sparkles,
  Zap,
  GitBranch,
  FolderOpen,
  ArrowRight
} from 'lucide-react'
import { cn } from '@/lib/utils'

interface ProjectStarterProps {
  style: string
  className?: string
}

interface StarterTemplate {
  id: string
  name: string
  description: string
  icon: React.ReactNode
  features: string[]
  stack: string[]
  commands: {
    npm: string
    yarn: string
    pnpm: string
  }
}

const templates: Record<string, StarterTemplate[]> = {
  neumorphism: [
    {
      id: 'neu-nextjs',
      name: 'Next.js Neumorphism Starter',
      description: 'Full-stack Next.js application with complete neumorphism design system',
      icon: <Zap className="h-6 w-6" />,
      features: [
        'Pre-configured neumorphism components',
        'Dark/light mode support',
        'TypeScript setup',
        'Tailwind CSS configuration',
        'ESLint & Prettier',
        'Example pages and layouts'
      ],
      stack: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'shadcn/ui'],
      commands: {
        npm: 'npx create-next-app@latest my-app --example neumorphism-ui',
        yarn: 'yarn create next-app my-app --example neumorphism-ui',
        pnpm: 'pnpm create next-app my-app --example neumorphism-ui'
      }
    },
    {
      id: 'neu-vite',
      name: 'Vite + React Neumorphism',
      description: 'Lightning-fast Vite setup with React and neumorphism components',
      icon: <Sparkles className="h-6 w-6" />,
      features: [
        'Instant HMR with Vite',
        'Component library included',
        'Routing with React Router',
        'State management setup',
        'Testing configuration',
        'Build optimization'
      ],
      stack: ['Vite', 'React 18', 'TypeScript', 'Tailwind CSS'],
      commands: {
        npm: 'npm create vite@latest my-app -- --template react-ts-neumorphism',
        yarn: 'yarn create vite my-app --template react-ts-neumorphism',
        pnpm: 'pnpm create vite my-app --template react-ts-neumorphism'
      }
    }
  ],
  glassmorphism: [
    {
      id: 'glass-nextjs',
      name: 'Next.js Glassmorphism Starter',
      description: 'Modern Next.js app with glassmorphism design system and animations',
      icon: <Layers className="h-6 w-6" />,
      features: [
        'Complete glassmorphism component library',
        'Backdrop filter optimization',
        'Framer Motion animations',
        'Responsive design system',
        'SEO optimized',
        'Performance focused'
      ],
      stack: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      commands: {
        npm: 'npx create-next-app@latest my-app --example glassmorphism-ui',
        yarn: 'yarn create next-app my-app --example glassmorphism-ui',
        pnpm: 'pnpm create next-app my-app --example glassmorphism-ui'
      }
    },
    {
      id: 'glass-remix',
      name: 'Remix Glassmorphism Stack',
      description: 'Full-stack Remix application with glassmorphism UI',
      icon: <GitBranch className="h-6 w-6" />,
      features: [
        'Server-side rendering',
        'Edge-ready deployment',
        'Database integration',
        'Authentication setup',
        'Form handling',
        'Progressive enhancement'
      ],
      stack: ['Remix', 'TypeScript', 'Tailwind CSS', 'Prisma'],
      commands: {
        npm: 'npx create-remix@latest --template glassmorphism-stack',
        yarn: 'yarn create remix --template glassmorphism-stack',
        pnpm: 'pnpm create remix --template glassmorphism-stack'
      }
    }
  ]
}

export function ProjectStarter({ style, className }: ProjectStarterProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const [packageManager, setPackageManager] = useState<'npm' | 'yarn' | 'pnpm'>('npm')

  const styleTemplates = templates[style] || []

  const copyCommand = async (command: string, id: string) => {
    await navigator.clipboard.writeText(command)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  const getQuickStartCommand = () => {
    const baseCommand = {
      npm: `npx create-your-ui@latest --style ${style}`,
      yarn: `yarn create your-ui --style ${style}`,
      pnpm: `pnpm create your-ui --style ${style}`
    }
    return baseCommand[packageManager]
  }

  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardHeader>
        <CardTitle className="text-2xl">Project Starters</CardTitle>
        <CardDescription>
          Get started quickly with pre-configured templates and boilerplates
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Quick Start */}
        <div className="rounded-lg border bg-muted/50 p-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-primary/10">
              <Terminal className="h-6 w-6 text-primary" />
            </div>
            <div className="flex-1 space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-lg">Quick Start</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Create a new project with the {style} design system in seconds
                  </p>
                </div>
                <Badge>Coming Soon</Badge>
              </div>
              
              <div className="space-y-3">
                <Tabs value={packageManager} onValueChange={(v) => setPackageManager(v as 'npm' | 'yarn' | 'pnpm')}>
                  <TabsList>
                    <TabsTrigger value="npm">npm</TabsTrigger>
                    <TabsTrigger value="yarn">yarn</TabsTrigger>
                    <TabsTrigger value="pnpm">pnpm</TabsTrigger>
                  </TabsList>
                </Tabs>
                
                <div className="flex items-center gap-2">
                  <code className="flex-1 p-3 rounded-lg bg-background border font-mono text-sm">
                    {getQuickStartCommand()}
                  </code>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => copyCommand(getQuickStartCommand(), 'quickstart')}
                  >
                    {copiedId === 'quickstart' ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Templates */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-lg">Starter Templates</h3>
            <Badge>Coming Soon</Badge>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {styleTemplates.map((template) => (
              <Card key={template.id} className="overflow-hidden">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-muted">
                        {template.icon}
                      </div>
                      <div>
                        <CardTitle className="text-base">{template.name}</CardTitle>
                        <CardDescription className="text-xs mt-1">
                          {template.description}
                        </CardDescription>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm font-medium mb-2">Features</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {template.features.slice(0, 3).map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <ArrowRight className="h-3 w-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium mb-2">Tech Stack</p>
                    <div className="flex flex-wrap gap-1">
                      {template.stack.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <div className="flex items-center gap-2">
                      <code className="flex-1 p-2 rounded bg-muted font-mono text-xs truncate">
                        {template.commands[packageManager]}
                      </code>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => copyCommand(template.commands[packageManager], template.id)}
                      >
                        {copiedId === template.id ? (
                          <Check className="h-3 w-3" />
                        ) : (
                          <Copy className="h-3 w-3" />
                        )}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* NPM Package */}
        <div className="rounded-lg border bg-muted/50 p-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-primary/10">
              <Package className="h-6 w-6 text-primary" />
            </div>
            <div className="flex-1 space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-lg">NPM Package</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Install the {style} component library directly in your existing project
                  </p>
                </div>
                <Badge>Coming Soon</Badge>
              </div>
              
              <div className="space-y-3">
                <div className="grid gap-3 md:grid-cols-3">
                  <div className="space-y-1">
                    <p className="text-xs text-muted-foreground">npm</p>
                    <code className="block p-2 rounded bg-background border font-mono text-xs">
                      npm i @your-ui/{style}
                    </code>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-muted-foreground">yarn</p>
                    <code className="block p-2 rounded bg-background border font-mono text-xs">
                      yarn add @your-ui/{style}
                    </code>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-muted-foreground">pnpm</p>
                    <code className="block p-2 rounded bg-background border font-mono text-xs">
                      pnpm add @your-ui/{style}
                    </code>
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-2">
                  <Badge variant="outline">
                    <Download className="h-3 w-3 mr-1" />
                    Coming Soon
                  </Badge>
                  <Badge variant="outline">
                    v0.0.0
                  </Badge>
                  <Badge variant="outline">
                    MIT License
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CLI Tool */}
        <div className="rounded-lg border p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Your UI CLI</h3>
            <Badge>Coming Soon</Badge>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Interactive CLI tool to scaffold components, manage themes, and configure your design system
          </p>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" disabled>
              <FileCode className="h-4 w-4 mr-2" />
              View Docs
            </Button>
            <Button variant="outline" size="sm" disabled>
              <FolderOpen className="h-4 w-4 mr-2" />
              Examples
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
'use client'

import * as React from 'react'
import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Code, 
  Copy, 
  FileCode, 
  Terminal,
  Package,
  Layers,
  BookOpen,
  Lightbulb,
  AlertCircle,
  CheckCircle2,
  XCircle,
  ExternalLink
} from 'lucide-react'
import { cn } from '@/lib/utils'

interface ImplementationGuideProps {
  style: string
  className?: string
}

interface GuideSection {
  id: string
  title: string
  icon: React.ReactNode
  content: React.ReactNode
}

const guides: Record<string, GuideSection[]> = {
  glassmorphism: [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: <BookOpen className="h-5 w-5" />,
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold mb-2">Prerequisites</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" />
                <span>Next.js 14+ with App Router</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" />
                <span>Tailwind CSS v3.4+</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" />
                <span>Browser support for backdrop-filter</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Installation</h4>
            <div className="space-y-3">
              <div className="p-3 bg-muted rounded-lg font-mono text-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-muted-foreground">Enable backdrop blur in Tailwind</span>
                  <Button size="sm" variant="ghost" className="h-6 px-2">
                    <Copy className="h-3 w-3" />
                  </Button>
                </div>
                <code>{`// tailwind.config.ts
module.exports = {
  theme: {
    extend: {
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '16px',
        xl: '24px',
        '2xl': '32px'
      }
    }
  }
}`}</code>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'core-concepts',
      title: 'Core Concepts',
      icon: <Layers className="h-5 w-5" />,
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold mb-3">Design Principles</h4>
            <div className="space-y-4">
              <div className="p-4 border rounded-lg">
                <h5 className="font-medium mb-2 flex items-center gap-2">
                  <div className="h-8 w-8 rounded-lg bg-white/10 backdrop-blur-md border border-white/20" />
                  Transparency Layers
                </h5>
                <p className="text-sm text-muted-foreground">
                  Use semi-transparent backgrounds with backdrop blur to create depth and hierarchy.
                </p>
              </div>

              <div className="p-4 border rounded-lg">
                <h5 className="font-medium mb-2 flex items-center gap-2">
                  <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-md border border-white/20" />
                  Gradient Overlays
                </h5>
                <p className="text-sm text-muted-foreground">
                  Add subtle gradients to enhance the glass effect and create visual interest.
                </p>
              </div>

              <div className="p-4 border rounded-lg">
                <h5 className="font-medium mb-2 flex items-center gap-2">
                  <div className="h-8 w-8 rounded-lg bg-white/5 backdrop-blur-xl border border-white/30" />
                  Border Definition
                </h5>
                <p className="text-sm text-muted-foreground">
                  Light borders help define edges and improve visibility on varied backgrounds.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Glass Effect Formula</h4>
            <div className="p-4 bg-muted rounded-lg space-y-3">
              <div className="font-mono text-sm">
                <p className="text-green-600">{`/* Basic Glass */`}</p>
                <p>bg-white/10 backdrop-blur-md border border-white/20</p>
              </div>
              <div className="font-mono text-sm">
                <p className="text-green-600">{`/* Strong Glass */`}</p>
                <p>bg-white/20 backdrop-blur-xl border border-white/30</p>
              </div>
              <div className="font-mono text-sm">
                <p className="text-green-600">{`/* Gradient Glass */`}</p>
                <p>bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'implementation',
      title: 'Implementation',
      icon: <FileCode className="h-5 w-5" />,
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold mb-3">Basic Component Structure</h4>
            <div className="p-4 bg-muted rounded-lg font-mono text-sm">
              <pre>{`import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'

const glassButtonVariants = cva(
  'inline-flex items-center justify-center rounded-xl text-sm font-medium transition-all duration-300',
  {
    variants: {
      variant: {
        default: 'bg-white/10 border border-white/20 backdrop-blur-md hover:bg-white/20 text-white',
        ghost: 'hover:bg-white/10 hover:backdrop-blur-md text-white',
        outline: 'border border-white/20 hover:bg-white/10 backdrop-blur-sm text-white'
      },
      intensity: {
        subtle: 'backdrop-blur-sm bg-white/5',
        medium: 'backdrop-blur-md bg-white/10',
        strong: 'backdrop-blur-lg bg-white/20',
        ultra: 'backdrop-blur-xl bg-white/30'
      }
    },
    defaultVariants: {
      variant: 'default',
      intensity: 'medium'
    }
  }
)

export function GlassButton({ className, variant, intensity, ...props }) {
  return (
    <button
      className={cn(glassButtonVariants({ variant, intensity, className }))}
      {...props}
    />
  )
}`}</pre>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Advanced Patterns</h4>
            <div className="space-y-3">
              <div className="p-4 border rounded-lg">
                <h5 className="font-medium mb-2">Animated Gradients</h5>
                <p className="text-sm text-muted-foreground mb-3">
                  Create dynamic glass effects with animated gradients:
                </p>
                <div className="p-3 bg-muted rounded font-mono text-xs">
                  {`@keyframes gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.animated-glass {
  background: linear-gradient(-45deg, rgba(255,255,255,0.1), rgba(255,255,255,0.2));
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}`}
                </div>
              </div>

              <div className="p-4 border rounded-lg">
                <h5 className="font-medium mb-2">Layered Glass</h5>
                <p className="text-sm text-muted-foreground mb-3">
                  Stack multiple glass layers for depth:
                </p>
                <div className="p-3 bg-muted rounded font-mono text-xs">
                  {`<div className="relative">
  <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-xl" />
  <div className="relative bg-white/10 backdrop-blur-md rounded-xl p-6">
    Content
  </div>
</div>`}
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'best-practices',
      title: 'Best Practices',
      icon: <Lightbulb className="h-5 w-5" />,
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold mb-3">Do&apos;s</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <p className="font-medium">Use appropriate blur intensity</p>
                  <p className="text-sm text-muted-foreground">Match blur strength to content importance and background complexity</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <p className="font-medium">Test on various backgrounds</p>
                  <p className="text-sm text-muted-foreground">Ensure readability across different background colors and images</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <p className="font-medium">Provide fallbacks</p>
                  <p className="text-sm text-muted-foreground">Include solid backgrounds for browsers without backdrop-filter support</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <p className="font-medium">Use performance optimizations</p>
                  <p className="text-sm text-muted-foreground">Limit blur usage on mobile and use will-change sparingly</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Don&apos;ts</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <XCircle className="h-5 w-5 text-red-500 mt-0.5" />
                <div>
                  <p className="font-medium">Overuse blur effects</p>
                  <p className="text-sm text-muted-foreground">Too much blur can impact performance and readability</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="h-5 w-5 text-red-500 mt-0.5" />
                <div>
                  <p className="font-medium">Forget about contrast</p>
                  <p className="text-sm text-muted-foreground">Low opacity can make text illegible on busy backgrounds</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="h-5 w-5 text-red-500 mt-0.5" />
                <div>
                  <p className="font-medium">Use on critical UI elements</p>
                  <p className="text-sm text-muted-foreground">Avoid glassmorphism for important CTAs or navigation</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="h-5 w-5 text-red-500 mt-0.5" />
                <div>
                  <p className="font-medium">Stack too many layers</p>
                  <p className="text-sm text-muted-foreground">Multiple glass layers can create visual confusion</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'troubleshooting',
      title: 'Troubleshooting',
      icon: <AlertCircle className="h-5 w-5" />,
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold mb-3">Common Issues</h4>
            <div className="space-y-4">
              <div className="p-4 border rounded-lg">
                <div className="flex items-start gap-3 mb-2">
                  <AlertCircle className="h-5 w-5 text-yellow-500 mt-0.5" />
                  <h5 className="font-medium">Backdrop filter not working</h5>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Some browsers or devices may not support backdrop-filter CSS property.
                </p>
                <div className="p-3 bg-muted rounded">
                  <p className="text-sm font-medium mb-1">Solution:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Add @supports check for backdrop-filter</li>
                    <li>• Provide fallback with semi-transparent background</li>
                    <li>• Use -webkit-backdrop-filter for Safari</li>
                    <li>• Consider using a polyfill for older browsers</li>
                  </ul>
                </div>
              </div>

              <div className="p-4 border rounded-lg">
                <div className="flex items-start gap-3 mb-2">
                  <AlertCircle className="h-5 w-5 text-yellow-500 mt-0.5" />
                  <h5 className="font-medium">Performance issues on mobile</h5>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Backdrop blur can be resource-intensive on mobile devices.
                </p>
                <div className="p-3 bg-muted rounded">
                  <p className="text-sm font-medium mb-1">Solution:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Reduce blur intensity on mobile viewports</li>
                    <li>• Use media queries to disable blur on low-end devices</li>
                    <li>• Implement intersection observer to blur only visible elements</li>
                    <li>• Consider using CSS contain property</li>
                  </ul>
                </div>
              </div>

              <div className="p-4 border rounded-lg">
                <div className="flex items-start gap-3 mb-2">
                  <AlertCircle className="h-5 w-5 text-yellow-500 mt-0.5" />
                  <h5 className="font-medium">Text readability issues</h5>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Glass effects can reduce text contrast on complex backgrounds.
                </p>
                <div className="p-3 bg-muted rounded">
                  <p className="text-sm font-medium mb-1">Solution:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Increase background opacity for text containers</li>
                    <li>• Add text shadow for better legibility</li>
                    <li>• Use darker glass variants for light text</li>
                    <li>• Test with various background images</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'resources',
      title: 'Resources',
      icon: <Package className="h-5 w-5" />,
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold mb-3">Useful Links</h4>
            <div className="space-y-3">
              <a href="#" className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex items-center gap-3">
                  <Terminal className="h-5 w-5" />
                  <div>
                    <p className="font-medium">Glass Component Library</p>
                    <p className="text-sm text-muted-foreground">Pre-built glassmorphic components</p>
                  </div>
                </div>
                <ExternalLink className="h-4 w-4" />
              </a>
              
              <a href="#" className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex items-center gap-3">
                  <BookOpen className="h-5 w-5" />
                  <div>
                    <p className="font-medium">Design Guidelines</p>
                    <p className="text-sm text-muted-foreground">Complete glassmorphism documentation</p>
                  </div>
                </div>
                <ExternalLink className="h-4 w-4" />
              </a>

              <a href="#" className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex items-center gap-3">
                  <Code className="h-5 w-5" />
                  <div>
                    <p className="font-medium">Code Examples</p>
                    <p className="text-sm text-muted-foreground">Real-world glassmorphism implementations</p>
                  </div>
                </div>
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Tools & Generators</h4>
            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" className="justify-start">
                <Package className="h-4 w-4 mr-2" />
                Glass Generator
              </Button>
              <Button variant="outline" className="justify-start">
                <Layers className="h-4 w-4 mr-2" />
                Blur Calculator
              </Button>
              <Button variant="outline" className="justify-start">
                <FileCode className="h-4 w-4 mr-2" />
                CSS Playground
              </Button>
              <Button variant="outline" className="justify-start">
                <Terminal className="h-4 w-4 mr-2" />
                Component CLI
              </Button>
            </div>
          </div>
        </div>
      )
    }
  ],
  neumorphism: [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: <BookOpen className="h-5 w-5" />,
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold mb-2">Prerequisites</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" />
                <span>Next.js 14+ with App Router</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" />
                <span>Tailwind CSS v3.4+</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" />
                <span>shadcn/ui components installed</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Installation</h4>
            <div className="space-y-3">
              <div className="p-3 bg-muted rounded-lg font-mono text-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-muted-foreground">Install dependencies</span>
                  <Button size="sm" variant="ghost" className="h-6 px-2">
                    <Copy className="h-3 w-3" />
                  </Button>
                </div>
                <code>npm install @radix-ui/react-* class-variance-authority clsx tailwind-merge</code>
              </div>

              <div className="p-3 bg-muted rounded-lg font-mono text-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-muted-foreground">Add to tailwind.config.ts</span>
                  <Button size="sm" variant="ghost" className="h-6 px-2">
                    <Copy className="h-3 w-3" />
                  </Button>
                </div>
                <code>{`theme: {
  extend: {
    colors: {
      'neu-base': '#e0e0e0',
      'neu-light': '#ffffff',
      'neu-dark': '#bebebe'
    }
  }
}`}</code>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'core-concepts',
      title: 'Core Concepts',
      icon: <Layers className="h-5 w-5" />,
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold mb-3">Design Principles</h4>
            <div className="space-y-4">
              <div className="p-4 border rounded-lg">
                <h5 className="font-medium mb-2 flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-gray-100 to-gray-300 shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff]" />
                  Dual Shadow System
                </h5>
                <p className="text-sm text-muted-foreground">
                  Neumorphism uses two shadows - a dark shadow on one side and a light shadow on the opposite side to create depth.
                </p>
              </div>

              <div className="p-4 border rounded-lg">
                <h5 className="font-medium mb-2 flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-[#e0e0e0]" />
                  Consistent Background
                </h5>
                <p className="text-sm text-muted-foreground">
                  Elements must have the same color as their background for the effect to work properly.
                </p>
              </div>

              <div className="p-4 border rounded-lg">
                <h5 className="font-medium mb-2 flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-[#e0e0e0] shadow-[inset_2px_2px_4px_#bebebe,inset_-2px_-2px_4px_#ffffff]" />
                  State Variations
                </h5>
                <p className="text-sm text-muted-foreground">
                  Different states (raised, inset, flat) are achieved by adjusting shadow direction and intensity.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Shadow Formula</h4>
            <div className="p-4 bg-muted rounded-lg space-y-3">
              <div className="font-mono text-sm">
                <p className="text-green-600">{`/* Raised (default) */`}</p>
                <p>shadow-[9px_9px_16px_#a3b1c6,-9px_-9px_16px_#ffffff]</p>
              </div>
              <div className="font-mono text-sm">
                <p className="text-green-600">{`/* Pressed (inset) */`}</p>
                <p>shadow-[inset_5px_5px_10px_#a3b1c6,inset_-5px_-5px_10px_#ffffff]</p>
              </div>
              <div className="font-mono text-sm">
                <p className="text-green-600">{`/* Floating */`}</p>
                <p>shadow-[20px_20px_35px_#a3b1c6,-20px_-20px_35px_#ffffff]</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'implementation',
      title: 'Implementation',
      icon: <FileCode className="h-5 w-5" />,
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold mb-3">Basic Component Structure</h4>
            <div className="p-4 bg-muted rounded-lg font-mono text-sm">
              <pre>{`import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'

const neuButtonVariants = cva(
  'inline-flex items-center justify-center rounded-[15px] text-sm font-medium transition-all duration-300',
  {
    variants: {
      variant: {
        default: 'bg-[#e0e0e0] text-gray-700 shadow-[10px_10px_20px_#bebebe,-10px_-10px_20px_#ffffff] hover:shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] active:shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff]',
        inset: 'bg-[#e0e0e0] text-gray-700 shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff]',
        ghost: 'bg-transparent text-gray-700 hover:bg-[#e0e0e0] hover:shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]'
      },
      size: {
        sm: 'h-9 px-3 text-xs',
        default: 'h-11 px-6 text-sm',
        lg: 'h-14 px-8 text-base',
        icon: 'h-11 w-11'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)

export function NeuButton({ className, variant, size, ...props }) {
  return (
    <button
      className={cn(neuButtonVariants({ variant, size, className }))}
      {...props}
    />
  )
}`}</pre>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Advanced Patterns</h4>
            <div className="space-y-3">
              <div className="p-4 border rounded-lg">
                <h5 className="font-medium mb-2">Dynamic Shadows</h5>
                <p className="text-sm text-muted-foreground mb-3">
                  Create dynamic shadows based on light source position:
                </p>
                <div className="p-3 bg-muted rounded font-mono text-xs">
                  {`const getShadow = (x: number, y: number) => {
  const angle = Math.atan2(y, x)
  const distance = Math.sqrt(x * x + y * y)
  return \`\${distance}px \${distance}px \${distance * 2}px #bebebe\`
}`}
                </div>
              </div>

              <div className="p-4 border rounded-lg">
                <h5 className="font-medium mb-2">Gradient Overlays</h5>
                <p className="text-sm text-muted-foreground mb-3">
                  Add subtle gradients for enhanced depth:
                </p>
                <div className="p-3 bg-muted rounded font-mono text-xs">
                  {`background: linear-gradient(145deg, #f0f0f0, #cacaca);
box-shadow: 20px 20px 40px #bebebe, -20px -20px 40px #ffffff;`}
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'best-practices',
      title: 'Best Practices',
      icon: <Lightbulb className="h-5 w-5" />,
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold mb-3">Do&apos;s</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <p className="font-medium">Use consistent light source</p>
                  <p className="text-sm text-muted-foreground">Keep shadows pointing in the same direction across all elements</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <p className="font-medium">Maintain sufficient contrast</p>
                  <p className="text-sm text-muted-foreground">Ensure text and interactive elements are easily distinguishable</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <p className="font-medium">Provide visual feedback</p>
                  <p className="text-sm text-muted-foreground">Use state changes (raised → pressed) for interactions</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <p className="font-medium">Test on different backgrounds</p>
                  <p className="text-sm text-muted-foreground">Ensure shadows work well on various background colors</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Don&apos;ts</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <XCircle className="h-5 w-5 text-red-500 mt-0.5" />
                <div>
                  <p className="font-medium">Overuse the effect</p>
                  <p className="text-sm text-muted-foreground">Too many neumorphic elements can reduce usability</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="h-5 w-5 text-red-500 mt-0.5" />
                <div>
                  <p className="font-medium">Ignore accessibility</p>
                  <p className="text-sm text-muted-foreground">Low contrast can make content hard to read</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="h-5 w-5 text-red-500 mt-0.5" />
                <div>
                  <p className="font-medium">Mix with other depth effects</p>
                  <p className="text-sm text-muted-foreground">Avoid combining with drop shadows or material elevation</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="h-5 w-5 text-red-500 mt-0.5" />
                <div>
                  <p className="font-medium">Use on dark backgrounds</p>
                  <p className="text-sm text-muted-foreground">Neumorphism works best on light, neutral backgrounds</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'troubleshooting',
      title: 'Troubleshooting',
      icon: <AlertCircle className="h-5 w-5" />,
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold mb-3">Common Issues</h4>
            <div className="space-y-4">
              <div className="p-4 border rounded-lg">
                <div className="flex items-start gap-3 mb-2">
                  <AlertCircle className="h-5 w-5 text-yellow-500 mt-0.5" />
                  <h5 className="font-medium">Shadows not visible</h5>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Shadows may be clipped by parent containers or have insufficient contrast.
                </p>
                <div className="p-3 bg-muted rounded">
                  <p className="text-sm font-medium mb-1">Solution:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Add padding to parent containers</li>
                    <li>• Increase shadow blur and spread</li>
                    <li>• Adjust shadow colors for better contrast</li>
                    <li>• Check for <code className="text-xs bg-background px-1 rounded">overflow: hidden</code></li>
                  </ul>
                </div>
              </div>

              <div className="p-4 border rounded-lg">
                <div className="flex items-start gap-3 mb-2">
                  <AlertCircle className="h-5 w-5 text-yellow-500 mt-0.5" />
                  <h5 className="font-medium">Performance issues</h5>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Complex shadows can impact rendering performance, especially on mobile.
                </p>
                <div className="p-3 bg-muted rounded">
                  <p className="text-sm font-medium mb-1">Solution:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Use <code className="text-xs bg-background px-1 rounded">will-change: transform</code> sparingly</li>
                    <li>• Reduce shadow complexity on mobile</li>
                    <li>• Consider using CSS containment</li>
                    <li>• Optimize animations with <code className="text-xs bg-background px-1 rounded">transform</code> instead of <code className="text-xs bg-background px-1 rounded">box-shadow</code></li>
                  </ul>
                </div>
              </div>

              <div className="p-4 border rounded-lg">
                <div className="flex items-start gap-3 mb-2">
                  <AlertCircle className="h-5 w-5 text-yellow-500 mt-0.5" />
                  <h5 className="font-medium">Accessibility concerns</h5>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Low contrast between elements and backgrounds can cause accessibility issues.
                </p>
                <div className="p-3 bg-muted rounded">
                  <p className="text-sm font-medium mb-1">Solution:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Ensure WCAG AA contrast ratios (4.5:1 for normal text)</li>
                    <li>• Add focus rings with higher contrast</li>
                    <li>• Provide alternative visual indicators</li>
                    <li>• Test with screen readers and keyboard navigation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'resources',
      title: 'Resources',
      icon: <Package className="h-5 w-5" />,
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold mb-3">Useful Links</h4>
            <div className="space-y-3">
              <a href="#" className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex items-center gap-3">
                  <Terminal className="h-5 w-5" />
                  <div>
                    <p className="font-medium">Component Library</p>
                    <p className="text-sm text-muted-foreground">Pre-built neumorphic components</p>
                  </div>
                </div>
                <ExternalLink className="h-4 w-4" />
              </a>
              
              <a href="#" className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex items-center gap-3">
                  <BookOpen className="h-5 w-5" />
                  <div>
                    <p className="font-medium">Design Guidelines</p>
                    <p className="text-sm text-muted-foreground">Complete design documentation</p>
                  </div>
                </div>
                <ExternalLink className="h-4 w-4" />
              </a>

              <a href="#" className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex items-center gap-3">
                  <Code className="h-5 w-5" />
                  <div>
                    <p className="font-medium">Code Examples</p>
                    <p className="text-sm text-muted-foreground">Real-world implementations</p>
                  </div>
                </div>
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Tools & Generators</h4>
            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" className="justify-start">
                <Package className="h-4 w-4 mr-2" />
                Shadow Generator
              </Button>
              <Button variant="outline" className="justify-start">
                <Layers className="h-4 w-4 mr-2" />
                Color Picker
              </Button>
              <Button variant="outline" className="justify-start">
                <FileCode className="h-4 w-4 mr-2" />
                Code Sandbox
              </Button>
              <Button variant="outline" className="justify-start">
                <Terminal className="h-4 w-4 mr-2" />
                CLI Tool
              </Button>
            </div>
          </div>
        </div>
      )
    }
  ]
}

export function ImplementationGuide({ style, className }: ImplementationGuideProps) {
  const [activeSection, setActiveSection] = useState('getting-started')

  const sections = guides[style] || []

  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardHeader>
        <CardTitle className="text-2xl">Implementation Guide</CardTitle>
        <CardDescription>
          Step-by-step guide to implementing {style} design system in your projects
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid lg:grid-cols-[240px,1fr] gap-6">
          <nav className="space-y-1">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors",
                  activeSection === section.id
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted"
                )}
              >
                {section.icon}
                <span className="font-medium">{section.title}</span>
              </button>
            ))}
          </nav>

          <div className="min-h-[400px]">
            {sections.map((section) => (
              <div
                key={section.id}
                className={cn(
                  "animate-in fade-in-50 duration-500",
                  activeSection === section.id ? "block" : "hidden"
                )}
              >
                {section.content}
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
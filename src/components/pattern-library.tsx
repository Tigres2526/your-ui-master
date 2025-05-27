'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import { cn } from '@/lib/utils'
import { 
  NeumorphismLoginForm,
  NeumorphismPricingCards,
  NeumorphismDashboardStats,
  NeumorphismUserProfile,
  NeumorphismSettingsPanel
} from '@/components/patterns/neumorphism'
import {
  GlassLoginForm,
  GlassDashboardStats
} from '@/components/patterns/glassmorphism'
import { 
  LogIn, 
  CreditCard, 
  BarChart3, 
  User, 
  Settings,
  Code,
  Copy,
  Check,
  Layout
} from 'lucide-react'

interface Pattern {
  id: string
  name: string
  description: string
  icon: React.ElementType
  component: React.ReactNode
  code: string
}

const neumorphismPatterns: Pattern[] = [
  {
    id: 'login',
    name: 'Login Form',
    description: 'A complete authentication form with email, password, and remember me functionality',
    icon: LogIn,
    component: <NeumorphismLoginForm />,
    code: `<NeumorphismLoginForm />`
  },
  {
    id: 'pricing',
    name: 'Pricing Cards',
    description: 'Tiered pricing cards with feature lists and recommended plans',
    icon: CreditCard,
    component: <NeumorphismPricingCards />,
    code: `<NeumorphismPricingCards />`
  },
  {
    id: 'dashboard',
    name: 'Dashboard Stats',
    description: 'Analytics dashboard with stat cards, progress bars, and trends',
    icon: BarChart3,
    component: <NeumorphismDashboardStats />,
    code: `<NeumorphismDashboardStats />`
  },
  {
    id: 'profile',
    name: 'User Profile',
    description: 'Complete user profile with tabs, settings, and activity history',
    icon: User,
    component: <NeumorphismUserProfile />,
    code: `<NeumorphismUserProfile />`
  },
  {
    id: 'settings',
    name: 'Settings Panel',
    description: 'Comprehensive settings interface with various control types',
    icon: Settings,
    component: <NeumorphismSettingsPanel />,
    code: `<NeumorphismSettingsPanel />`
  }
]

const glassmorphismPatterns: Pattern[] = [
  {
    id: 'login',
    name: 'Glass Login Form',
    description: 'Modern authentication form with glassmorphism effects and social login options',
    icon: LogIn,
    component: <GlassLoginForm />,
    code: `<GlassLoginForm />`
  },
  {
    id: 'dashboard',
    name: 'Dashboard Stats',
    description: 'Statistical dashboard with cards, progress bars, and trend indicators',
    icon: BarChart3,
    component: <GlassDashboardStats />,
    code: `<GlassDashboardStats />`
  }
]

const patternSets: Record<string, Pattern[]> = {
  neumorphism: neumorphismPatterns,
  glassmorphism: glassmorphismPatterns
}

export function PatternLibrary({ style = 'neumorphism' }: { style?: string }) {
  const patterns = patternSets[style] || neumorphismPatterns
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const [selectedPattern, setSelectedPattern] = useState(patterns[0])

  const copyToClipboard = async (code: string, id: string) => {
    await navigator.clipboard.writeText(code)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  const getFullCode = (pattern: Pattern) => {
    // Extract component name from the code (e.g., <NeumorphismLoginForm /> -> NeumorphismLoginForm)
    const componentMatch = pattern.code.match(/<(\w+)/);
    const componentName = componentMatch ? componentMatch[1] : 'Component';
    
    return `import { ${componentName} } from '@/components/patterns/${style}'

export function MyComponent() {
  return (
    <div className="p-6">
      ${pattern.code}
    </div>
  )
}`
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Layout className="w-5 h-5" />
          Pattern Library
        </CardTitle>
        <CardDescription>
          Production-ready UI patterns for real-world applications
        </CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <div className="flex flex-col lg:flex-row min-h-[800px]">
          {/* Pattern List - Sidebar */}
          <div className="lg:w-80 border-b lg:border-b-0 lg:border-r bg-muted/5 p-6 flex-shrink-0">
            <h3 className="text-sm font-medium text-muted-foreground mb-4">Available Patterns</h3>
            <div className="space-y-2">
              {patterns.map((pattern) => {
                const Icon = pattern.icon
                return (
                  <button
                    key={pattern.id}
                    onClick={() => setSelectedPattern(pattern)}
                    className={cn(
                      "w-full flex items-start gap-3 p-3 rounded-lg text-left transition-colors",
                      selectedPattern.id === pattern.id 
                        ? "bg-primary/10 text-primary border border-primary/20" 
                        : "hover:bg-muted/50"
                    )}
                  >
                    <Icon className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm">{pattern.name}</p>
                      <p className="text-xs text-muted-foreground line-clamp-2 mt-0.5">
                        {pattern.description}
                      </p>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Pattern Display - Main Content */}
          <div className="flex-1 p-6 overflow-auto">
            <div className="max-w-6xl mx-auto space-y-6">
              {/* Pattern Info */}
              <div>
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-2xl font-bold">{selectedPattern.name}</h3>
                    <p className="text-muted-foreground mt-1">
                      {selectedPattern.description}
                    </p>
                  </div>
                  <Badge variant="secondary" className="ml-4">Production Ready</Badge>
                </div>
              </div>

              {/* Live Preview */}
              <div className={cn(
                "border rounded-xl p-8 lg:p-12 min-h-[600px] flex items-center justify-center overflow-hidden relative",
                style === 'glassmorphism' ? "bg-gradient-to-br from-purple-600 via-pink-500 to-blue-500" : "bg-[#e0e0e0]"
              )}>
                <div className="w-full flex items-center justify-center">
                  {selectedPattern.component}
                </div>
              </div>

              {/* Code */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-medium flex items-center gap-2">
                    <Code className="w-4 h-4" />
                    Implementation
                  </h4>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => copyToClipboard(getFullCode(selectedPattern), selectedPattern.id)}
                  >
                    {copiedId === selectedPattern.id ? (
                      <>
                        <Check className="w-4 h-4 mr-2" />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 mr-2" />
                        Copy Code
                      </>
                    )}
                  </Button>
                </div>
                <ScrollArea className="h-[300px] w-full rounded-md border bg-zinc-950 p-4">
                  <pre className="text-sm text-zinc-50">
                    <code>{getFullCode(selectedPattern)}</code>
                  </pre>
                </ScrollArea>
              </div>

              {/* Usage Tips */}
              <div className="rounded-lg border bg-muted/50 p-4">
                <h4 className="text-sm font-medium mb-2">Usage Tips</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Fully responsive and mobile-friendly</li>
                  <li>• All form inputs include proper validation</li>
                  <li>• Follows accessibility best practices</li>
                  <li>• Easily customizable with design tokens</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
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
      <CardContent>
        <Tabs value={selectedPattern.id} onValueChange={(value) => {
          const pattern = patterns.find(p => p.id === value)
          if (pattern) setSelectedPattern(pattern)
        }}>
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Pattern List */}
            <div className="lg:w-64 space-y-2">
              <h3 className="text-sm font-medium text-muted-foreground mb-3">Available Patterns</h3>
              <TabsList className="flex-col h-auto p-1 bg-muted/50">
                {patterns.map((pattern) => {
                  const Icon = pattern.icon
                  return (
                    <TabsTrigger
                      key={pattern.id}
                      value={pattern.id}
                      className="w-full justify-start gap-3 data-[state=active]:bg-background"
                    >
                      <Icon className="w-4 h-4" />
                      <div className="text-left flex-1">
                        <p className="font-medium">{pattern.name}</p>
                        <p className="text-xs text-muted-foreground line-clamp-1">
                          {pattern.description}
                        </p>
                      </div>
                    </TabsTrigger>
                  )
                })}
              </TabsList>
            </div>

            {/* Pattern Display */}
            <div className="flex-1 space-y-6">
              {neumorphismPatterns.map((pattern) => (
                <TabsContent key={pattern.id} value={pattern.id} className="mt-0 space-y-6">
                  {/* Pattern Info */}
                  <div>
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-lg font-semibold">{pattern.name}</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {pattern.description}
                        </p>
                      </div>
                      <Badge variant="secondary">Production Ready</Badge>
                    </div>
                  </div>

                  {/* Live Preview */}
                  <div className="border rounded-lg p-6 bg-[#e0e0e0] min-h-[400px] flex items-center justify-center">
                    {pattern.component}
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
                        onClick={() => copyToClipboard(getFullCode(pattern), pattern.id)}
                      >
                        {copiedId === pattern.id ? (
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
                    <ScrollArea className="h-[200px] w-full rounded-md border bg-zinc-950 p-4">
                      <pre className="text-sm text-zinc-50">
                        <code>{getFullCode(pattern)}</code>
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
                </TabsContent>
              ))}
            </div>
          </div>
        </Tabs>
      </CardContent>
    </Card>
  )
}
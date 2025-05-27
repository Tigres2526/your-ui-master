'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Copy, Check, Sparkles, Code, FileText, Palette } from 'lucide-react'
import { generateNeumorphismPrompt, neumorphismStyleConfig } from '@/ai-prompts/neumorphism-prompts'
import { ScrollArea } from '@/components/ui/scroll-area'

interface AIPromptGeneratorProps {
  style: string
}

export function AIPromptGenerator({ style }: AIPromptGeneratorProps) {
  const [selectedComponent, setSelectedComponent] = useState('button')
  const [customRequirements, setCustomRequirements] = useState('')
  const [copiedSection, setCopiedSection] = useState<string | null>(null)

  const components = ['Button', 'Card', 'Input', 'Toggle', 'Slider', 'Checkbox', 'Radio', 'Select']

  const copyToClipboard = async (text: string, section: string) => {
    await navigator.clipboard.writeText(text)
    setCopiedSection(section)
    setTimeout(() => setCopiedSection(null), 2000)
  }

  const fullPrompt = generateNeumorphismPrompt(selectedComponent, customRequirements)
  
  const quickPrompt = `Build a ${selectedComponent} component using ${style} design style. ${neumorphismStyleConfig.designTokensPrompt}`

  const contextPrompt = `I'm building a design system using ${style} style. ${neumorphismStyleConfig.overview}

Key principles:
${neumorphismStyleConfig.keyPrinciples.map(p => `- ${p}`).join('\n')}

Component guidelines:
${Object.entries(neumorphismStyleConfig.componentGuidelines)
  .map(([comp, guide]) => `- ${comp}: ${guide}`)
  .join('\n')}`

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="w-5 h-5" />
            AI Prompt Generator
          </CardTitle>
          <CardDescription>
            Generate copy-ready prompts for AI coding assistants like Claude, Cursor, or ChatGPT
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Component Selector */}
          <div className="space-y-2">
            <Label>Select Component</Label>
            <Select value={selectedComponent} onValueChange={setSelectedComponent}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {components.map(comp => (
                  <SelectItem key={comp} value={comp.toLowerCase()}>
                    {comp}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Custom Requirements */}
          <div className="space-y-2">
            <Label>Additional Requirements (Optional)</Label>
            <Textarea
              placeholder="Add any specific requirements, variants, or features..."
              value={customRequirements}
              onChange={(e) => setCustomRequirements(e.target.value)}
              className="min-h-[100px]"
            />
          </div>

          {/* Prompt Types */}
          <Tabs defaultValue="full" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="quick">Quick</TabsTrigger>
              <TabsTrigger value="full">Full</TabsTrigger>
              <TabsTrigger value="context">Context</TabsTrigger>
            </TabsList>

            <TabsContent value="quick" className="space-y-4">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Code className="w-4 h-4" />
                      <h4 className="font-medium">Quick Prompt</h4>
                    </div>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => copyToClipboard(quickPrompt, 'quick')}
                    >
                      {copiedSection === 'quick' ? (
                        <Check className="w-4 h-4" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[200px] w-full rounded-md border bg-muted/50 p-4">
                    <pre className="text-sm whitespace-pre-wrap">{quickPrompt}</pre>
                  </ScrollArea>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="full" className="space-y-4">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      <h4 className="font-medium">Full Component Prompt</h4>
                    </div>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => copyToClipboard(fullPrompt, 'full')}
                    >
                      {copiedSection === 'full' ? (
                        <Check className="w-4 h-4" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px] w-full rounded-md border bg-muted/50 p-4">
                    <pre className="text-sm whitespace-pre-wrap">{fullPrompt}</pre>
                  </ScrollArea>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="context" className="space-y-4">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Palette className="w-4 h-4" />
                      <h4 className="font-medium">Design System Context</h4>
                    </div>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => copyToClipboard(contextPrompt, 'context')}
                    >
                      {copiedSection === 'context' ? (
                        <Check className="w-4 h-4" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px] w-full rounded-md border bg-muted/50 p-4">
                    <pre className="text-sm whitespace-pre-wrap">{contextPrompt}</pre>
                  </ScrollArea>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Best Practices */}
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <h4 className="font-medium text-green-600 dark:text-green-400">Best Practices</h4>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  {neumorphismStyleConfig.bestPractices.slice(0, 3).map((practice, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-green-600 dark:text-green-400">✓</span>
                      <span>{practice}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h4 className="font-medium text-red-600 dark:text-red-400">Common Mistakes</h4>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  {neumorphismStyleConfig.commonMistakes.slice(0, 3).map((mistake, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-red-600 dark:text-red-400">✗</span>
                      <span>{mistake}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
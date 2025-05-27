'use client'

import * as React from 'react'
import { useState, useCallback, useMemo } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import { Switch } from '@/components/ui/switch'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { 
  Copy, 
  Check, 
  RotateCcw,
  Sparkles,
  Download,
  Eye,
  EyeOff,
  Settings2,
  Play
} from 'lucide-react'
import { cn } from '@/lib/utils'

type PropValue = string | boolean | number

interface PlaygroundProps {
  title: string
  description: string
  component: React.ComponentType<Record<string, PropValue>>
  defaultProps: Record<string, PropValue>
  controls: PlaygroundControl[]
  codeTemplate: (props: Record<string, PropValue>) => string
  styleVariables?: Record<string, string>
  className?: string
}

interface PlaygroundControl {
  name: string
  label: string
  type: 'slider' | 'switch' | 'select' | 'color' | 'text'
  defaultValue: PropValue
  options?: { label: string; value: string }[]
  min?: number
  max?: number
  step?: number
}

export function InteractivePlayground({
  title,
  description,
  component: Component,
  defaultProps,
  controls,
  codeTemplate,
  styleVariables = {},
  className
}: PlaygroundProps) {
  const [props, setProps] = useState(defaultProps)
  const [copied, setCopied] = useState(false)
  const [showCode, setShowCode] = useState(true)
  const [showControls, setShowControls] = useState(true)
  const [liveMode, setLiveMode] = useState(false)
  const [codeInput, setCodeInput] = useState('')

  const handlePropChange = useCallback((name: string, value: PropValue) => {
    setProps((prev: Record<string, PropValue>) => ({ ...prev, [name]: value }))
  }, [])

  const handleReset = useCallback(() => {
    setProps(defaultProps)
  }, [defaultProps])

  const generatedCode = useMemo(() => codeTemplate(props), [codeTemplate, props])

  const handleCopy = useCallback(async () => {
    await navigator.clipboard.writeText(generatedCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [generatedCode])

  const handleRunCode = useCallback(() => {
    try {
      // This is a simplified version - in production you'd want proper sandboxing
      const extractedProps = JSON.parse(codeInput || '{}')
      setProps(extractedProps)
    } catch (error) {
      console.error('Invalid code:', error)
    }
  }, [codeInput])

  const renderControl = useCallback((control: PlaygroundControl) => {
    const value = props[control.name]

    switch (control.type) {
      case 'slider':
        return (
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label>{control.label}</Label>
              <span className="text-sm text-muted-foreground">{value}</span>
            </div>
            <Slider
              value={[typeof value === 'number' ? value : 0]}
              onValueChange={([v]) => handlePropChange(control.name, v)}
              min={control.min}
              max={control.max}
              step={control.step}
              className="w-full"
            />
          </div>
        )

      case 'switch':
        return (
          <div className="flex items-center justify-between">
            <Label htmlFor={control.name}>{control.label}</Label>
            <Switch
              id={control.name}
              checked={typeof value === 'boolean' ? value : false}
              onCheckedChange={(v) => handlePropChange(control.name, v)}
            />
          </div>
        )

      case 'select':
        return (
          <div className="space-y-2">
            <Label>{control.label}</Label>
            <Select value={String(value)} onValueChange={(v) => handlePropChange(control.name, v)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {control.options?.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )

      case 'color':
        return (
          <div className="space-y-2">
            <Label>{control.label}</Label>
            <div className="flex items-center gap-2">
              <input
                type="color"
                value={String(value)}
                onChange={(e) => handlePropChange(control.name, e.target.value)}
                className="h-10 w-20 rounded border cursor-pointer"
              />
              <input
                type="text"
                value={String(value)}
                onChange={(e) => handlePropChange(control.name, e.target.value)}
                className="flex-1 h-10 px-3 rounded-md border bg-background text-sm"
              />
            </div>
          </div>
        )

      case 'text':
        return (
          <div className="space-y-2">
            <Label>{control.label}</Label>
            <input
              type="text"
              value={String(value)}
              onChange={(e) => handlePropChange(control.name, e.target.value)}
              className="w-full h-10 px-3 rounded-md border bg-background text-sm"
            />
          </div>
        )

      default:
        return null
    }
  }, [props, handlePropChange])

  return (
    <Card className={cn("overflow-hidden", className)}>
      <div className="p-6 border-b">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-2xl font-bold">{title}</h3>
            <p className="text-muted-foreground mt-1">{description}</p>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowControls(!showControls)}
            >
              <Settings2 className="h-4 w-4 mr-1" />
              Controls
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowCode(!showCode)}
            >
              {showCode ? (
                <>
                  <EyeOff className="h-4 w-4 mr-1" />
                  Hide Code
                </>
              ) : (
                <>
                  <Eye className="h-4 w-4 mr-1" />
                  Show Code
                </>
              )}
            </Button>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-[1fr,320px] divide-x">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h4 className="font-semibold flex items-center gap-2">
              <Sparkles className="h-4 w-4" />
              Live Preview
            </h4>
            <Badge variant="secondary">Interactive</Badge>
          </div>

          <div 
            className="min-h-[400px] flex items-center justify-center p-8 rounded-lg border-2 border-dashed"
            style={styleVariables}
          >
            <Component {...props} />
          </div>

          {showCode && (
            <>
              <Separator className="my-6" />
              
              <Tabs defaultValue="generated" className="w-full">
                <div className="flex items-center justify-between mb-4">
                  <TabsList>
                    <TabsTrigger value="generated">Generated Code</TabsTrigger>
                    <TabsTrigger value="live">Live Editor</TabsTrigger>
                  </TabsList>
                  
                  <div className="flex items-center gap-2">
                    {liveMode && (
                      <Button size="sm" variant="secondary" onClick={handleRunCode}>
                        <Play className="h-4 w-4 mr-1" />
                        Run
                      </Button>
                    )}
                    <Button size="sm" variant="outline" onClick={handleCopy}>
                      {copied ? (
                        <>
                          <Check className="h-4 w-4 mr-1" />
                          Copied
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4 mr-1" />
                          Copy
                        </>
                      )}
                    </Button>
                  </div>
                </div>

                <TabsContent value="generated" className="mt-0">
                  <pre className="p-4 rounded-lg bg-muted overflow-x-auto">
                    <code className="text-sm">{generatedCode}</code>
                  </pre>
                </TabsContent>

                <TabsContent value="live" className="mt-0">
                  <textarea
                    value={codeInput}
                    onChange={(e) => {
                      setCodeInput(e.target.value)
                      setLiveMode(true)
                    }}
                    placeholder={`// Edit component props as JSON\n{\n  "variant": "default",\n  "size": "md",\n  "children": "Button Text"\n}`}
                    className="w-full h-[200px] p-4 rounded-lg bg-muted font-mono text-sm resize-none border-0 focus:outline-none"
                  />
                </TabsContent>
              </Tabs>
            </>
          )}
        </div>

        {showControls && (
          <div className="p-6 bg-muted/30">
            <div className="flex items-center justify-between mb-6">
              <h4 className="font-semibold flex items-center gap-2">
                <Settings2 className="h-4 w-4" />
                Controls
              </h4>
              <Button size="sm" variant="ghost" onClick={handleReset}>
                <RotateCcw className="h-4 w-4" />
              </Button>
            </div>

            <div className="space-y-6">
              {controls.map((control) => (
                <React.Fragment key={control.name}>
                  {renderControl(control)}
                </React.Fragment>
              ))}
            </div>

            <Separator className="my-6" />

            <div className="space-y-4">
              <h5 className="font-medium text-sm">Export Options</h5>
              <div className="grid grid-cols-2 gap-2">
                <Button size="sm" variant="outline" className="justify-start">
                  <Download className="h-4 w-4 mr-1" />
                  React
                </Button>
                <Button size="sm" variant="outline" className="justify-start">
                  <Download className="h-4 w-4 mr-1" />
                  Vue
                </Button>
                <Button size="sm" variant="outline" className="justify-start">
                  <Download className="h-4 w-4 mr-1" />
                  HTML
                </Button>
                <Button size="sm" variant="outline" className="justify-start">
                  <Download className="h-4 w-4 mr-1" />
                  Figma
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Card>
  )
}
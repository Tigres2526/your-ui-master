"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { StyleErrorBoundary } from "@/components/error-boundary"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Copy, Check, Smartphone, Tablet, Monitor, Moon, Sun, Zap } from "lucide-react"
import { cn } from "@/lib/utils"

interface ComponentShowcaseProps {
  title: string
  description: string
  category: string
  component: React.ReactNode
  code: {
    react: string
    html?: string
    css?: string
  }
  controls?: ShowcaseControl[]
  variants?: ComponentVariant[]
  sizes?: ComponentSize[]
  states?: ComponentState[]
  className?: string
}

interface ShowcaseControl {
  id: string
  label: string
  type: 'switch' | 'slider' | 'select' | 'color'
  value: boolean | number | string
  onChange: (value: boolean | number | string) => void
  options?: { label: string; value: string }[]
  min?: number
  max?: number
  step?: number
}

interface ComponentVariant {
  name: string
  component: React.ReactNode
  code: string
}

interface ComponentSize {
  name: string
  component: React.ReactNode
}

interface ComponentState {
  name: string
  component: React.ReactNode
}

export function ComponentShowcase({
  title,
  description,
  category,
  component,
  code,
  controls,
  variants,
  sizes,
  states,
  className
}: ComponentShowcaseProps) {
  const [copied, setCopied] = useState<string | null>(null)
  const [viewport, setViewport] = useState<'mobile' | 'tablet' | 'desktop'>('desktop')
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [showGrid, setShowGrid] = useState(false)

  const copyToClipboard = async (text: string, id: string) => {
    await navigator.clipboard.writeText(text)
    setCopied(id)
    setTimeout(() => setCopied(null), 2000)
  }

  const viewportSizes = {
    mobile: 'max-w-sm',
    tablet: 'max-w-2xl',
    desktop: 'w-full'
  }

  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-2xl">{title}</CardTitle>
            <CardDescription className="mt-1.5">{description}</CardDescription>
          </div>
          <Badge variant="secondary" className="ml-4">
            {category}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Controls */}
        {controls && controls.length > 0 && (
          <>
            <div className="space-y-4">
              <Label className="text-sm font-medium">Controls</Label>
              <div className="grid grid-cols-2 gap-4">
                {controls.map((control) => (
                  <div key={control.id} className="flex items-center justify-between">
                    <Label htmlFor={control.id} className="text-sm">
                      {control.label}
                    </Label>
                    {control.type === 'switch' && (
                      <Switch
                        id={control.id}
                        checked={typeof control.value === 'boolean' ? control.value : false}
                        onCheckedChange={control.onChange}
                      />
                    )}
                    {control.type === 'slider' && (
                      <Slider
                        id={control.id}
                        value={[typeof control.value === 'number' ? control.value : 0]}
                        onValueChange={([value]) => control.onChange(value)}
                        min={control.min}
                        max={control.max}
                        step={control.step}
                        className="w-32"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
            <Separator />
          </>
        )}

        {/* Preview Controls */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button
              variant={viewport === 'mobile' ? 'secondary' : 'ghost'}
              size="sm"
              onClick={() => setViewport('mobile')}
              aria-label="Switch to mobile viewport"
              aria-pressed={viewport === 'mobile'}
            >
              <Smartphone className="h-4 w-4" />
            </Button>
            <Button
              variant={viewport === 'tablet' ? 'secondary' : 'ghost'}
              size="sm"
              onClick={() => setViewport('tablet')}
              aria-label="Switch to tablet viewport"
              aria-pressed={viewport === 'tablet'}
            >
              <Tablet className="h-4 w-4" />
            </Button>
            <Button
              variant={viewport === 'desktop' ? 'secondary' : 'ghost'}
              size="sm"
              onClick={() => setViewport('desktop')}
              aria-label="Switch to desktop viewport"
              aria-pressed={viewport === 'desktop'}
            >
              <Monitor className="h-4 w-4" />
            </Button>
            <Separator orientation="vertical" className="h-6 mx-2" />
            <Button
              variant={theme === 'dark' ? 'secondary' : 'ghost'}
              size="sm"
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
              aria-pressed={theme === 'dark'}
            >
              {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </Button>
            <Button
              variant={showGrid ? 'secondary' : 'ghost'}
              size="sm"
              onClick={() => setShowGrid(!showGrid)}
              aria-label="Toggle grid overlay"
              aria-pressed={showGrid}
            >
              <Zap className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Main Preview */}
        <div 
          className={cn(
            "relative rounded-lg border bg-background p-8 transition-all",
            viewportSizes[viewport],
            theme === 'dark' && "dark",
            showGrid && "bg-grid-pattern"
          )}
        >
          <div className="flex items-center justify-center min-h-[200px]">
            <StyleErrorBoundary>
              {component}
            </StyleErrorBoundary>
          </div>
        </div>

        {/* Variants */}
        {variants && variants.length > 0 && (
          <>
            <Separator />
            <div className="space-y-4">
              <Label className="text-sm font-medium">Variants</Label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {variants.map((variant) => (
                  <div key={variant.name} className="space-y-2">
                    <Label className="text-xs text-muted-foreground">{variant.name}</Label>
                    <div className="flex items-center justify-center p-4 rounded-lg border bg-muted/10 min-h-[80px]">
                      {variant.component}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* Sizes */}
        {sizes && sizes.length > 0 && (
          <>
            <Separator />
            <div className="space-y-4">
              <Label className="text-sm font-medium">Sizes</Label>
              <div className="flex items-center gap-4 flex-wrap">
                {sizes.map((size) => (
                  <div key={size.name} className="flex flex-col items-center gap-2">
                    {size.component}
                    <Label className="text-xs text-muted-foreground">{size.name}</Label>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* States */}
        {states && states.length > 0 && (
          <>
            <Separator />
            <div className="space-y-4">
              <Label className="text-sm font-medium">States</Label>
              <div className="flex items-center gap-4 flex-wrap">
                {states.map((state) => (
                  <div key={state.name} className="flex flex-col items-center gap-2">
                    {state.component}
                    <Label className="text-xs text-muted-foreground">{state.name}</Label>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* Code */}
        <Separator />
        <Tabs defaultValue="react" className="w-full">
          <div className="flex items-center justify-between mb-3">
            <TabsList>
              <TabsTrigger value="react">React</TabsTrigger>
              {code.html && <TabsTrigger value="html">HTML</TabsTrigger>}
              {code.css && <TabsTrigger value="css">CSS</TabsTrigger>}
            </TabsList>
          </div>
          
          <TabsContent value="react" className="mt-0">
            <div className="relative">
              <ScrollArea className="h-[300px] w-full rounded-lg border bg-zinc-950 p-4">
                <pre className="text-sm">
                  <code className="language-tsx text-zinc-50">{code.react}</code>
                </pre>
              </ScrollArea>
              <Button
                size="sm"
                variant="secondary"
                className="absolute top-2 right-2"
                onClick={() => copyToClipboard(code.react, 'react')}
                aria-label={copied === 'react' ? 'Copied!' : 'Copy React code'}
              >
                {copied === 'react' ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            </div>
          </TabsContent>
          
          {code.html && (
            <TabsContent value="html" className="mt-0">
              <div className="relative">
                <ScrollArea className="h-[300px] w-full rounded-lg border bg-zinc-950 p-4">
                  <pre className="text-sm">
                    <code className="language-html text-zinc-50">{code.html}</code>
                  </pre>
                </ScrollArea>
                <Button
                  size="sm"
                  variant="secondary"
                  className="absolute top-2 right-2"
                  onClick={() => copyToClipboard(code.html!, 'html')}
                  aria-label={copied === 'html' ? 'Copied!' : 'Copy HTML code'}
                >
                  {copied === 'html' ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </TabsContent>
          )}
        </Tabs>
      </CardContent>
    </Card>
  )
}
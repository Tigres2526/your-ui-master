'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import { ScrollArea } from '@/components/ui/scroll-area'
import { 
  Copy, 
  Check, 
  Palette, 
  Download,
  Code,
  FileJson,
  FileText,
  Settings
} from 'lucide-react'
import { DesignTokens } from '@/types/design-tokens'
import { designTokens } from '@/design-tokens'

interface DesignTokenGeneratorProps {
  style: string
}

export function DesignTokenGenerator({ style }: DesignTokenGeneratorProps) {
  const [copiedSection, setCopiedSection] = useState<string | null>(null)
  const [customTokens, setCustomTokens] = useState<DesignTokens>(
    designTokens[style] || designTokens.neumorphism
  )
  
  // Color adjustments
  const [primaryHue, setPrimaryHue] = useState([230])
  const [primarySaturation, setPrimarySaturation] = useState([70])
  const [primaryLightness, setPrimaryLightness] = useState([60])
  
  // Shadow adjustments
  const [shadowIntensity, setShadowIntensity] = useState([100])
  const [shadowDistance, setShadowDistance] = useState([10])
  const [shadowBlur, setShadowBlur] = useState([20])

  const copyToClipboard = async (text: string, section: string) => {
    await navigator.clipboard.writeText(text)
    setCopiedSection(section)
    setTimeout(() => setCopiedSection(null), 2000)
  }

  const updatePrimaryColor = () => {
    const newColor = `hsl(${primaryHue[0]}, ${primarySaturation[0]}%, ${primaryLightness[0]}%)`
    setCustomTokens({
      ...customTokens,
      colors: {
        ...customTokens.colors,
        primary: newColor
      }
    })
  }

  const generateCSS = () => {
    return `:root {
  /* Colors */
  --color-primary: ${customTokens.colors.primary};
  --color-secondary: ${customTokens.colors.secondary};
  --color-background: ${customTokens.colors.background};
  --color-surface: ${customTokens.colors.surface};
  --color-text-primary: ${customTokens.colors.text.primary};
  --color-text-secondary: ${customTokens.colors.text.secondary};
  --color-border: ${customTokens.colors.border};
  
  /* Shadows */
  --shadow-xs: ${customTokens.shadows.xs};
  --shadow-sm: ${customTokens.shadows.sm};
  --shadow-md: ${customTokens.shadows.md};
  --shadow-lg: ${customTokens.shadows.lg};
  --shadow-xl: ${customTokens.shadows.xl};
  --shadow-inner: ${customTokens.shadows.inner};
  
  /* Spacing */
  --spacing-xs: ${customTokens.spacing.xs};
  --spacing-sm: ${customTokens.spacing.sm};
  --spacing-md: ${customTokens.spacing.md};
  --spacing-lg: ${customTokens.spacing.lg};
  --spacing-xl: ${customTokens.spacing.xl};
  
  /* Border Radius */
  --radius-sm: ${customTokens.borderRadius.sm};
  --radius-md: ${customTokens.borderRadius.md};
  --radius-lg: ${customTokens.borderRadius.lg};
  --radius-xl: ${customTokens.borderRadius.xl};
  --radius-full: ${customTokens.borderRadius.full};
  
  /* Animation */
  --duration-fast: ${customTokens.animation.duration.fast};
  --duration-normal: ${customTokens.animation.duration.normal};
  --duration-slow: ${customTokens.animation.duration.slow};
  --easing-default: ${customTokens.animation.easing.ease};
}`
  }

  const generateTailwind = () => {
    return `module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '${customTokens.colors.primary}',
        secondary: '${customTokens.colors.secondary}',
        background: '${customTokens.colors.background}',
        surface: '${customTokens.colors.surface}',
        text: {
          primary: '${customTokens.colors.text.primary}',
          secondary: '${customTokens.colors.text.secondary}',
          disabled: '${customTokens.colors.text.disabled}',
        },
        border: '${customTokens.colors.border}',
      },
      boxShadow: {
        'neu-xs': '${customTokens.shadows.xs}',
        'neu-sm': '${customTokens.shadows.sm}',
        'neu-md': '${customTokens.shadows.md}',
        'neu-lg': '${customTokens.shadows.lg}',
        'neu-xl': '${customTokens.shadows.xl}',
        'neu-inner': '${customTokens.shadows.inner}',
      },
      spacing: {
        'xs': '${customTokens.spacing.xs}',
        'sm': '${customTokens.spacing.sm}',
        'md': '${customTokens.spacing.md}',
        'lg': '${customTokens.spacing.lg}',
        'xl': '${customTokens.spacing.xl}',
      },
      borderRadius: {
        'sm': '${customTokens.borderRadius.sm}',
        'md': '${customTokens.borderRadius.md}',
        'lg': '${customTokens.borderRadius.lg}',
        'xl': '${customTokens.borderRadius.xl}',
      },
      transitionDuration: {
        'fast': '${customTokens.animation.duration.fast}',
        'normal': '${customTokens.animation.duration.normal}',
        'slow': '${customTokens.animation.duration.slow}',
      },
    },
  },
}`
  }

  const generateTypeScript = () => {
    return `export const ${style}Tokens = ${JSON.stringify(customTokens, null, 2)}`
  }

  const generateSCSS = () => {
    return `// ${customTokens.name} Design Tokens

// Colors
$color-primary: ${customTokens.colors.primary};
$color-secondary: ${customTokens.colors.secondary};
$color-background: ${customTokens.colors.background};
$color-surface: ${customTokens.colors.surface};
$color-text-primary: ${customTokens.colors.text.primary};
$color-text-secondary: ${customTokens.colors.text.secondary};
$color-border: ${customTokens.colors.border};

// Shadows
$shadow-xs: ${customTokens.shadows.xs};
$shadow-sm: ${customTokens.shadows.sm};
$shadow-md: ${customTokens.shadows.md};
$shadow-lg: ${customTokens.shadows.lg};
$shadow-xl: ${customTokens.shadows.xl};
$shadow-inner: ${customTokens.shadows.inner};

// Spacing
$spacing-xs: ${customTokens.spacing.xs};
$spacing-sm: ${customTokens.spacing.sm};
$spacing-md: ${customTokens.spacing.md};
$spacing-lg: ${customTokens.spacing.lg};
$spacing-xl: ${customTokens.spacing.xl};

// Border Radius
$radius-sm: ${customTokens.borderRadius.sm};
$radius-md: ${customTokens.borderRadius.md};
$radius-lg: ${customTokens.borderRadius.lg};
$radius-xl: ${customTokens.borderRadius.xl};
$radius-full: ${customTokens.borderRadius.full};

// Animation
$duration-fast: ${customTokens.animation.duration.fast};
$duration-normal: ${customTokens.animation.duration.normal};
$duration-slow: ${customTokens.animation.duration.slow};`
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Settings className="w-5 h-5" />
          Design Token Generator
        </CardTitle>
        <CardDescription>
          Customize and export design tokens for {customTokens.name}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Token Customization */}
        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Palette className="w-4 h-4" />
              Color Tokens
            </h3>
            
            {/* Primary Color Adjustment */}
            <div className="space-y-4 p-4 rounded-lg border bg-muted/50">
              <div className="flex items-center justify-between">
                <Label>Primary Color</Label>
                <div className="flex items-center gap-2">
                  <div 
                    className="w-10 h-10 rounded-md border shadow-sm"
                    style={{ backgroundColor: customTokens.colors.primary }}
                  />
                  <code className="text-xs">{customTokens.colors.primary}</code>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label className="text-sm">Hue</Label>
                    <span className="text-sm text-muted-foreground">{primaryHue[0]}°</span>
                  </div>
                  <Slider
                    value={primaryHue}
                    onValueChange={(value) => {
                      setPrimaryHue(value)
                      updatePrimaryColor()
                    }}
                    max={360}
                    step={1}
                  />
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label className="text-sm">Saturation</Label>
                    <span className="text-sm text-muted-foreground">{primarySaturation[0]}%</span>
                  </div>
                  <Slider
                    value={primarySaturation}
                    onValueChange={(value) => {
                      setPrimarySaturation(value)
                      updatePrimaryColor()
                    }}
                    max={100}
                    step={1}
                  />
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label className="text-sm">Lightness</Label>
                    <span className="text-sm text-muted-foreground">{primaryLightness[0]}%</span>
                  </div>
                  <Slider
                    value={primaryLightness}
                    onValueChange={(value) => {
                      setPrimaryLightness(value)
                      updatePrimaryColor()
                    }}
                    max={100}
                    step={1}
                  />
                </div>
              </div>
            </div>

            {/* Color Palette Preview */}
            <div className="grid grid-cols-4 gap-2">
              {Object.entries(customTokens.colors).map(([key, value]) => {
                if (typeof value === 'string') {
                  return (
                    <div key={key} className="space-y-1">
                      <div 
                        className="h-12 rounded-md border shadow-sm"
                        style={{ backgroundColor: value }}
                      />
                      <p className="text-xs font-medium capitalize">{key}</p>
                    </div>
                  )
                }
                return null
              })}
            </div>
          </div>

          {/* Shadow Customization */}
          {style === 'neumorphism' && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Shadow Tokens</h3>
              <div className="space-y-3">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label className="text-sm">Shadow Intensity</Label>
                    <span className="text-sm text-muted-foreground">{shadowIntensity[0]}%</span>
                  </div>
                  <Slider
                    value={shadowIntensity}
                    onValueChange={setShadowIntensity}
                    max={150}
                    step={10}
                  />
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label className="text-sm">Shadow Distance</Label>
                    <span className="text-sm text-muted-foreground">{shadowDistance[0]}px</span>
                  </div>
                  <Slider
                    value={shadowDistance}
                    onValueChange={setShadowDistance}
                    max={30}
                    step={1}
                  />
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label className="text-sm">Shadow Blur</Label>
                    <span className="text-sm text-muted-foreground">{shadowBlur[0]}px</span>
                  </div>
                  <Slider
                    value={shadowBlur}
                    onValueChange={setShadowBlur}
                    max={50}
                    step={1}
                  />
                </div>
              </div>
              
              {/* Shadow Preview */}
              <div className="flex items-center justify-center p-8 bg-[#e0e0e0] rounded-lg">
                <div 
                  className="w-24 h-24 rounded-2xl bg-[#e0e0e0]"
                  style={{
                    boxShadow: `${shadowDistance[0]}px ${shadowDistance[0]}px ${shadowBlur[0]}px #bebebe, -${shadowDistance[0]}px -${shadowDistance[0]}px ${shadowBlur[0]}px #ffffff`
                  }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Export Options */}
        <Tabs defaultValue="css" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="css">CSS</TabsTrigger>
            <TabsTrigger value="tailwind">Tailwind</TabsTrigger>
            <TabsTrigger value="typescript">TypeScript</TabsTrigger>
            <TabsTrigger value="scss">SCSS</TabsTrigger>
          </TabsList>

          <TabsContent value="css" className="space-y-4">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    <h4 className="font-medium">CSS Variables</h4>
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => copyToClipboard(generateCSS(), 'css')}
                  >
                    {copiedSection === 'css' ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[300px] w-full rounded-md border bg-muted/50 p-4">
                  <pre className="text-sm">{generateCSS()}</pre>
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tailwind" className="space-y-4">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Code className="w-4 h-4" />
                    <h4 className="font-medium">Tailwind Config</h4>
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => copyToClipboard(generateTailwind(), 'tailwind')}
                  >
                    {copiedSection === 'tailwind' ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[300px] w-full rounded-md border bg-muted/50 p-4">
                  <pre className="text-sm">{generateTailwind()}</pre>
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="typescript" className="space-y-4">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FileJson className="w-4 h-4" />
                    <h4 className="font-medium">TypeScript</h4>
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => copyToClipboard(generateTypeScript(), 'typescript')}
                  >
                    {copiedSection === 'typescript' ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[300px] w-full rounded-md border bg-muted/50 p-4">
                  <pre className="text-sm">{generateTypeScript()}</pre>
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="scss" className="space-y-4">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    <h4 className="font-medium">SCSS Variables</h4>
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => copyToClipboard(generateSCSS(), 'scss')}
                  >
                    {copiedSection === 'scss' ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[300px] w-full rounded-md border bg-muted/50 p-4">
                  <pre className="text-sm">{generateSCSS()}</pre>
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Download Button */}
        <div className="flex justify-end">
          <Button className="gap-2">
            <Download className="w-4 h-4" />
            Download All Formats
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
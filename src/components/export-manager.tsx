'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Badge } from '@/components/ui/badge'
import { 
  Download, 
  Package, 
  FileCode,
  FileJson,
  FolderOpen,
  Code,
  Palette,
  Component,
  FileText,
  CheckCircle,
  Info
} from 'lucide-react'

interface ExportOptions {
  format: 'npm' | 'zip' | 'github'
  includes: {
    components: boolean
    tokens: boolean
    patterns: boolean
    prompts: boolean
    documentation: boolean
  }
  framework: 'react' | 'vue' | 'angular' | 'html'
  styling: 'tailwind' | 'css' | 'scss' | 'css-modules'
}

export function ExportManager({ style = 'neumorphism' }: { style?: string }) {
  const [exportOptions, setExportOptions] = useState<ExportOptions>({
    format: 'npm',
    includes: {
      components: true,
      tokens: true,
      patterns: true,
      prompts: true,
      documentation: true
    },
    framework: 'react',
    styling: 'tailwind'
  })

  const [isExporting, setIsExporting] = useState(false)
  const [exportComplete, setExportComplete] = useState(false)

  const handleExport = async () => {
    setIsExporting(true)
    setExportComplete(false)

    // Simulate export process
    setTimeout(() => {
      setIsExporting(false)
      setExportComplete(true)
      
      // Reset after 3 seconds
      setTimeout(() => setExportComplete(false), 3000)
    }, 2000)
  }

  const generatePackageJson = () => {
    return {
      name: `@yourui/${style}-design-system`,
      version: '1.0.0',
      description: `${style.charAt(0).toUpperCase() + style.slice(1)} design system components and tokens`,
      main: 'dist/index.js',
      module: 'dist/index.esm.js',
      types: 'dist/index.d.ts',
      files: ['dist', 'README.md'],
      scripts: {
        build: 'rollup -c',
        dev: 'rollup -c -w',
        test: 'jest',
        storybook: 'storybook dev -p 6006'
      },
      peerDependencies: {
        react: '>=16.8.0',
        'react-dom': '>=16.8.0'
      },
      dependencies: {
        '@radix-ui/react-checkbox': '^1.0.0',
        '@radix-ui/react-radio-group': '^1.0.0',
        '@radix-ui/react-slider': '^1.0.0',
        '@radix-ui/react-switch': '^1.0.0',
        'class-variance-authority': '^0.7.0',
        'clsx': '^2.0.0',
        'tailwind-merge': '^2.0.0'
      },
      devDependencies: {
        '@types/react': '^18.0.0',
        'typescript': '^5.0.0',
        'rollup': '^4.0.0',
        '@storybook/react': '^7.0.0'
      },
      keywords: [style, 'design-system', 'components', 'ui', 'react'],
      license: 'MIT'
    }
  }

  const getExportSize = () => {
    let size = 0
    if (exportOptions.includes.components) size += 250
    if (exportOptions.includes.tokens) size += 50
    if (exportOptions.includes.patterns) size += 150
    if (exportOptions.includes.prompts) size += 30
    if (exportOptions.includes.documentation) size += 100
    return size
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Package className="w-5 h-5" />
          Export Design System
        </CardTitle>
        <CardDescription>
          Download your complete design system package with all components, tokens, and documentation
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <Tabs defaultValue="contents" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="contents">Contents</TabsTrigger>
            <TabsTrigger value="options">Options</TabsTrigger>
            <TabsTrigger value="preview">Preview</TabsTrigger>
          </TabsList>

          <TabsContent value="contents" className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Select what to include</h3>
              
              <div className="space-y-3">
                <label className="flex items-start gap-3 p-4 rounded-lg border cursor-pointer hover:bg-muted/50 transition-colors">
                  <Checkbox
                    checked={exportOptions.includes.components}
                    onCheckedChange={(checked) => 
                      setExportOptions({
                        ...exportOptions,
                        includes: { ...exportOptions.includes, components: !!checked }
                      })
                    }
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <Component className="w-4 h-4" />
                      <p className="font-medium">Components</p>
                      <Badge variant="secondary">30+ items</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      All UI components including buttons, cards, forms, and more
                    </p>
                  </div>
                </label>

                <label className="flex items-start gap-3 p-4 rounded-lg border cursor-pointer hover:bg-muted/50 transition-colors">
                  <Checkbox
                    checked={exportOptions.includes.tokens}
                    onCheckedChange={(checked) => 
                      setExportOptions({
                        ...exportOptions,
                        includes: { ...exportOptions.includes, tokens: !!checked }
                      })
                    }
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <Palette className="w-4 h-4" />
                      <p className="font-medium">Design Tokens</p>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      Colors, shadows, spacing, typography, and animations
                    </p>
                  </div>
                </label>

                <label className="flex items-start gap-3 p-4 rounded-lg border cursor-pointer hover:bg-muted/50 transition-colors">
                  <Checkbox
                    checked={exportOptions.includes.patterns}
                    onCheckedChange={(checked) => 
                      setExportOptions({
                        ...exportOptions,
                        includes: { ...exportOptions.includes, patterns: !!checked }
                      })
                    }
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <FolderOpen className="w-4 h-4" />
                      <p className="font-medium">Pattern Library</p>
                      <Badge variant="secondary">5 patterns</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      Real-world UI patterns like login forms, dashboards, and more
                    </p>
                  </div>
                </label>

                <label className="flex items-start gap-3 p-4 rounded-lg border cursor-pointer hover:bg-muted/50 transition-colors">
                  <Checkbox
                    checked={exportOptions.includes.prompts}
                    onCheckedChange={(checked) => 
                      setExportOptions({
                        ...exportOptions,
                        includes: { ...exportOptions.includes, prompts: !!checked }
                      })
                    }
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <FileCode className="w-4 h-4" />
                      <p className="font-medium">AI Prompts</p>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      Pre-configured prompts for AI coding assistants
                    </p>
                  </div>
                </label>

                <label className="flex items-start gap-3 p-4 rounded-lg border cursor-pointer hover:bg-muted/50 transition-colors">
                  <Checkbox
                    checked={exportOptions.includes.documentation}
                    onCheckedChange={(checked) => 
                      setExportOptions({
                        ...exportOptions,
                        includes: { ...exportOptions.includes, documentation: !!checked }
                      })
                    }
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      <p className="font-medium">Documentation</p>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      Complete usage guides and API documentation
                    </p>
                  </div>
                </label>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="options" className="space-y-6">
            <div className="space-y-6">
              {/* Framework Selection */}
              <div className="space-y-3">
                <Label>Framework</Label>
                <RadioGroup
                  value={exportOptions.framework}
                  onValueChange={(value) => 
                    setExportOptions({
                      ...exportOptions,
                      framework: value as ExportOptions['framework']
                    })
                  }
                >
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { value: 'react', label: 'React', icon: Code },
                      { value: 'vue', label: 'Vue', icon: Code },
                      { value: 'angular', label: 'Angular', icon: Code },
                      { value: 'html', label: 'Vanilla HTML', icon: FileCode }
                    ].map((framework) => {
                      const Icon = framework.icon
                      return (
                        <label
                          key={framework.value}
                          className="flex items-center gap-3 p-3 rounded-lg border cursor-pointer hover:bg-muted/50"
                        >
                          <RadioGroupItem value={framework.value} />
                          <Icon className="w-4 h-4" />
                          <span>{framework.label}</span>
                        </label>
                      )
                    })}
                  </div>
                </RadioGroup>
              </div>

              {/* Styling System */}
              <div className="space-y-3">
                <Label>Styling System</Label>
                <RadioGroup
                  value={exportOptions.styling}
                  onValueChange={(value) => 
                    setExportOptions({
                      ...exportOptions,
                      styling: value as ExportOptions['styling']
                    })
                  }
                >
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { value: 'tailwind', label: 'Tailwind CSS' },
                      { value: 'css', label: 'Plain CSS' },
                      { value: 'scss', label: 'SCSS' },
                      { value: 'css-modules', label: 'CSS Modules' }
                    ].map((style) => (
                      <label
                        key={style.value}
                        className="flex items-center gap-3 p-3 rounded-lg border cursor-pointer hover:bg-muted/50"
                      >
                        <RadioGroupItem value={style.value} />
                        <span>{style.label}</span>
                      </label>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              {/* Export Format */}
              <div className="space-y-3">
                <Label>Export Format</Label>
                <RadioGroup
                  value={exportOptions.format}
                  onValueChange={(value) => 
                    setExportOptions({
                      ...exportOptions,
                      format: value as ExportOptions['format']
                    })
                  }
                >
                  <div className="space-y-2">
                    <label className="flex items-start gap-3 p-3 rounded-lg border cursor-pointer hover:bg-muted/50">
                      <RadioGroupItem value="npm" className="mt-0.5" />
                      <div>
                        <p className="font-medium">NPM Package</p>
                        <p className="text-sm text-muted-foreground">
                          Ready to publish to npm registry
                        </p>
                      </div>
                    </label>
                    <label className="flex items-start gap-3 p-3 rounded-lg border cursor-pointer hover:bg-muted/50">
                      <RadioGroupItem value="zip" className="mt-0.5" />
                      <div>
                        <p className="font-medium">ZIP Archive</p>
                        <p className="text-sm text-muted-foreground">
                          Download as compressed archive
                        </p>
                      </div>
                    </label>
                    <label className="flex items-start gap-3 p-3 rounded-lg border cursor-pointer hover:bg-muted/50">
                      <RadioGroupItem value="github" className="mt-0.5" />
                      <div>
                        <p className="font-medium">GitHub Template</p>
                        <p className="text-sm text-muted-foreground">
                          Create a new repository from template
                        </p>
                      </div>
                    </label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="preview" className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Package Preview</h3>
              
              {/* Package Info */}
              <div className="rounded-lg border bg-muted/50 p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Package className="w-4 h-4" />
                    <p className="font-mono text-sm">@yourui/{style}-design-system</p>
                  </div>
                  <Badge>v1.0.0</Badge>
                </div>
                <div className="text-sm text-muted-foreground">
                  <p>Framework: {exportOptions.framework}</p>
                  <p>Styling: {exportOptions.styling}</p>
                  <p>Estimated size: ~{getExportSize()}KB</p>
                </div>
              </div>

              {/* File Structure */}
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Package Structure</h4>
                <ScrollArea className="h-[300px] w-full rounded-md border bg-muted/50 p-4">
                  <pre className="text-sm font-mono">
{`${style}-design-system/
├── README.md
├── package.json
├── tsconfig.json
${exportOptions.includes.components ? `├── components/
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Input.tsx
│   └── ... (30+ components)
` : ''}${exportOptions.includes.tokens ? `├── tokens/
│   ├── colors.ts
│   ├── shadows.ts
│   ├── spacing.ts
│   └── index.ts
` : ''}${exportOptions.includes.patterns ? `├── patterns/
│   ├── LoginForm.tsx
│   ├── Dashboard.tsx
│   ├── UserProfile.tsx
│   └── ... (5 patterns)
` : ''}${exportOptions.includes.prompts ? `├── ai-prompts/
│   ├── component-prompts.md
│   └── design-guidelines.md
` : ''}${exportOptions.includes.documentation ? `└── docs/
    ├── getting-started.md
    ├── components.md
    └── customization.md` : '└── ...'}`}
                  </pre>
                </ScrollArea>
              </div>

              {/* package.json Preview */}
              <div className="space-y-2">
                <h4 className="text-sm font-medium flex items-center gap-2">
                  <FileJson className="w-4 h-4" />
                  package.json
                </h4>
                <ScrollArea className="h-[200px] w-full rounded-md border bg-muted/50 p-4">
                  <pre className="text-sm font-mono">
                    {JSON.stringify(generatePackageJson(), null, 2)}
                  </pre>
                </ScrollArea>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Export Actions */}
        <div className="flex items-center justify-between pt-6 border-t">
          <div className="text-sm text-muted-foreground">
            {exportComplete ? (
              <div className="flex items-center gap-2 text-green-600">
                <CheckCircle className="w-4 h-4" />
                Export complete! Check your downloads.
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Info className="w-4 h-4" />
                Your package will be ready in seconds
              </div>
            )}
          </div>
          
          <Button 
            onClick={handleExport}
            disabled={isExporting || !Object.values(exportOptions.includes).some(v => v)}
            className="gap-2"
          >
            <Download className="w-4 h-4" />
            {isExporting ? 'Preparing...' : `Export ${exportOptions.format.toUpperCase()}`}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
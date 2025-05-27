'use client'

import React, { useState } from 'react'
import { Grid3x3, Type, Minus, Plus, AlignLeft, AlignCenter, AlignRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function SwissDesignPage() {
  const [gridColumns, setGridColumns] = useState(12)
  const [alignment, setAlignment] = useState('left')

  return (
    <div className="relative -m-6 p-6 min-h-[calc(100vh-4rem)] bg-white">
      {/* Grid Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-10">
        <div className="h-full max-w-6xl mx-auto grid grid-cols-12 gap-4 px-6">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="bg-gray-900"></div>
          ))}
        </div>
      </div>

      {/* Page Title */}
      <div className="relative mb-8">
        <h1 className="text-3xl font-bold">Swiss Design</h1>
      </div>

      <main className="relative max-w-6xl mx-auto p-6 space-y-24">
        {/* Design Principles */}
        <section className="grid grid-cols-12 gap-4">
          <div className="col-span-12 mb-8">
            <h2 className="text-4xl font-light">Design Principles</h2>
          </div>
          <Card className="col-span-4 p-8 border-gray-200">
            <Grid3x3 className="w-8 h-8 mb-6" />
            <h3 className="text-xl font-medium mb-4">Grid System</h3>
            <p className="text-gray-600 leading-relaxed">Mathematical precision through modular grid layouts creates visual harmony.</p>
          </Card>
          <Card className="col-span-4 p-8 border-gray-200">
            <Type className="w-8 h-8 mb-6" />
            <h3 className="text-xl font-medium mb-4">Typography</h3>
            <p className="text-gray-600 leading-relaxed">Clean, sans-serif typefaces with careful attention to hierarchy and spacing.</p>
          </Card>
          <Card className="col-span-4 p-8 border-gray-200">
            <Minus className="w-8 h-8 mb-6" />
            <h3 className="text-xl font-medium mb-4">Minimalism</h3>
            <p className="text-gray-600 leading-relaxed">Reduction to essential elements with generous use of whitespace.</p>
          </Card>
        </section>

        {/* Typography Scale */}
        <section className="grid grid-cols-12 gap-4">
          <div className="col-span-12 mb-8">
            <h2 className="text-4xl font-light">Typography Scale</h2>
          </div>
          <div className="col-span-8 space-y-8">
            <div>
              <p className="text-xs text-gray-500 mb-2">Display / 72px / Light</p>
              <h1 className="text-7xl font-light leading-none">Helvetica</h1>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-2">Heading 1 / 48px / Regular</p>
              <h2 className="text-5xl leading-tight">Swiss Typography</h2>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-2">Heading 2 / 32px / Medium</p>
              <h3 className="text-3xl font-medium">Grid-Based Design</h3>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-2">Body / 16px / Regular</p>
              <p className="text-base leading-relaxed">The Swiss Design movement, also known as International Typographic Style, emerged in Switzerland in the 1950s and became one of the most influential design movements of the 20th century.</p>
            </div>
          </div>
          <div className="col-span-4">
            <Card className="p-6 bg-gray-50 border-0">
              <h4 className="text-sm font-medium mb-4">Type Specifications</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Primary:</span>
                  <span>Helvetica Neue</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Line Height:</span>
                  <span>1.5</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Letter Spacing:</span>
                  <span>-0.02em</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Paragraph Spacing:</span>
                  <span>1.5rem</span>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Grid System Demo */}
        <section className="space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-4xl font-light">Grid System</h2>
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setGridColumns(Math.max(4, gridColumns - 1))}
                className="border-gray-300"
              >
                <Minus className="w-4 h-4" />
              </Button>
              <span className="text-sm font-medium w-20 text-center">{gridColumns} Columns</span>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setGridColumns(Math.min(16, gridColumns + 1))}
                className="border-gray-300"
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <div className={`grid gap-4`} style={{ gridTemplateColumns: `repeat(${gridColumns}, 1fr)` }}>
            {[...Array(gridColumns)].map((_, i) => (
              <div key={i} className="h-32 bg-gray-100 border border-gray-200"></div>
            ))}
          </div>
        </section>

        {/* Color Palette */}
        <section className="grid grid-cols-12 gap-4">
          <div className="col-span-12 mb-8">
            <h2 className="text-4xl font-light">Color Palette</h2>
          </div>
          <div className="col-span-3">
            <div className="h-48 bg-black"></div>
            <div className="mt-4">
              <p className="font-medium">Black</p>
              <p className="text-sm text-gray-600">#000000</p>
            </div>
          </div>
          <div className="col-span-3">
            <div className="h-48 bg-white border border-gray-200"></div>
            <div className="mt-4">
              <p className="font-medium">White</p>
              <p className="text-sm text-gray-600">#FFFFFF</p>
            </div>
          </div>
          <div className="col-span-3">
            <div className="h-48 bg-red-600"></div>
            <div className="mt-4">
              <p className="font-medium">Red</p>
              <p className="text-sm text-gray-600">#DC2626</p>
            </div>
          </div>
          <div className="col-span-3">
            <div className="h-48 bg-gray-400"></div>
            <div className="mt-4">
              <p className="font-medium">Gray</p>
              <p className="text-sm text-gray-600">#9CA3AF</p>
            </div>
          </div>
        </section>

        {/* Components */}
        <section className="space-y-16">
          <h2 className="text-4xl font-light">Components</h2>
          
          {/* Buttons */}
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-3">
              <h3 className="text-xl font-medium mb-6">Buttons</h3>
            </div>
            <div className="col-span-9 flex flex-wrap gap-4">
              <Button className="bg-black text-white hover:bg-gray-900 rounded-none px-8 h-12 font-normal">
                Primary Button
              </Button>
              <Button variant="outline" className="border-black text-black hover:bg-gray-100 rounded-none px-8 h-12 font-normal">
                Secondary Button
              </Button>
              <Button variant="ghost" className="text-black hover:bg-gray-100 rounded-none px-8 h-12 font-normal">
                Text Button
              </Button>
              <Button className="bg-red-600 text-white hover:bg-red-700 rounded-none px-8 h-12 font-normal">
                Accent Button
              </Button>
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-3">
              <h3 className="text-xl font-medium mb-6">Cards</h3>
            </div>
            <div className="col-span-9 grid grid-cols-3 gap-4">
              <Card className="p-6 border-gray-200">
                <div className="h-32 bg-gray-100 mb-4"></div>
                <h4 className="text-lg font-medium mb-2">Card Title</h4>
                <p className="text-sm text-gray-600 leading-relaxed">Minimal card design with clear hierarchy and generous spacing.</p>
              </Card>
              <Card className="p-6 border-gray-200">
                <div className="h-32 bg-gray-900 mb-4"></div>
                <h4 className="text-lg font-medium mb-2">Card Title</h4>
                <p className="text-sm text-gray-600 leading-relaxed">Content organized on a mathematical grid for visual harmony.</p>
              </Card>
              <Card className="p-6 border-gray-200">
                <div className="h-32 bg-red-600 mb-4"></div>
                <h4 className="text-lg font-medium mb-2">Card Title</h4>
                <p className="text-sm text-gray-600 leading-relaxed">Strategic use of color creates focal points and hierarchy.</p>
              </Card>
            </div>
          </div>

          {/* Form */}
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-3">
              <h3 className="text-xl font-medium mb-6">Form Elements</h3>
            </div>
            <div className="col-span-6">
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium">Name</Label>
                  <Input
                    id="name"
                    placeholder="Enter your name"
                    className="rounded-none border-gray-300 focus:border-black focus:ring-0 h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="rounded-none border-gray-300 focus:border-black focus:ring-0 h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium">Message</Label>
                  <textarea
                    id="message"
                    placeholder="Enter your message"
                    rows={4}
                    className="w-full rounded-none border border-gray-300 px-3 py-2 focus:border-black focus:ring-0 focus:outline-none"
                  />
                </div>
                <Button className="bg-black text-white hover:bg-gray-900 rounded-none px-12 h-12 font-normal">
                  Submit
                </Button>
              </form>
            </div>
          </div>

          {/* Text Alignment */}
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-3">
              <h3 className="text-xl font-medium mb-6">Text Alignment</h3>
            </div>
            <div className="col-span-9 space-y-6">
              <div className="flex gap-2 mb-4">
                <Button
                  variant={alignment === 'left' ? 'default' : 'outline'}
                  size="icon"
                  onClick={() => setAlignment('left')}
                  className="rounded-none"
                >
                  <AlignLeft className="w-4 h-4" />
                </Button>
                <Button
                  variant={alignment === 'center' ? 'default' : 'outline'}
                  size="icon"
                  onClick={() => setAlignment('center')}
                  className="rounded-none"
                >
                  <AlignCenter className="w-4 h-4" />
                </Button>
                <Button
                  variant={alignment === 'right' ? 'default' : 'outline'}
                  size="icon"
                  onClick={() => setAlignment('right')}
                  className="rounded-none"
                >
                  <AlignRight className="w-4 h-4" />
                </Button>
              </div>
              <div className={`space-y-4 text-${alignment}`}>
                <h4 className="text-2xl font-medium">Swiss Design Philosophy</h4>
                <p className="text-gray-600 leading-relaxed max-w-3xl">
                  The International Typographic Style has its origins in the modernist movement of the early 1900s. 
                  It became famous through the art of very talented Swiss graphic designers, but it emerged in 
                  Russia, Germany and Netherlands in the 1920s.
                </p>
                <p className="text-gray-600 leading-relaxed max-w-3xl">
                  This movement shaped identity design, web design and packaging design among many other fields. 
                  Even today, Swiss Design principles continue to influence contemporary design practices.
                </p>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-3">
              <h3 className="text-xl font-medium mb-6">Navigation</h3>
            </div>
            <div className="col-span-9">
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="bg-transparent border-b border-gray-200 rounded-none h-auto p-0 w-full justify-start">
                  <TabsTrigger value="overview" className="rounded-none border-b-2 border-transparent data-[state=active]:border-black data-[state=active]:bg-transparent px-6 py-3">
                    Overview
                  </TabsTrigger>
                  <TabsTrigger value="principles" className="rounded-none border-b-2 border-transparent data-[state=active]:border-black data-[state=active]:bg-transparent px-6 py-3">
                    Principles
                  </TabsTrigger>
                  <TabsTrigger value="examples" className="rounded-none border-b-2 border-transparent data-[state=active]:border-black data-[state=active]:bg-transparent px-6 py-3">
                    Examples
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="mt-8">
                  <p className="text-gray-600 leading-relaxed">Swiss Design emphasizes cleanliness, readability, and objectivity.</p>
                </TabsContent>
                <TabsContent value="principles" className="mt-8">
                  <p className="text-gray-600 leading-relaxed">Grid systems, asymmetric layouts, and sans-serif typography.</p>
                </TabsContent>
                <TabsContent value="examples" className="mt-8">
                  <p className="text-gray-600 leading-relaxed">Müller-Brockmann, Ruder, and Hofmann exemplified these principles.</p>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          {/* Badges */}
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-3">
              <h3 className="text-xl font-medium mb-6">Labels</h3>
            </div>
            <div className="col-span-9 flex flex-wrap gap-3">
              <Badge variant="outline" className="rounded-none border-black text-black px-3 py-1">New</Badge>
              <Badge className="rounded-none bg-black text-white px-3 py-1">Featured</Badge>
              <Badge className="rounded-none bg-red-600 text-white px-3 py-1">Important</Badge>
              <Badge variant="outline" className="rounded-none border-gray-400 text-gray-600 px-3 py-1">Archive</Badge>
            </div>
          </div>
        </section>

        {/* Code Example */}
        <section className="grid grid-cols-12 gap-4">
          <div className="col-span-12 mb-8">
            <h2 className="text-4xl font-light">Code Example</h2>
          </div>
          <div className="col-span-8">
            <Card className="p-8 bg-gray-50 border-0">
              <pre className="text-sm leading-relaxed overflow-x-auto">
                <code>{`// Swiss Design Button
<Button 
  className="
    bg-black text-white 
    hover:bg-gray-900 
    rounded-none 
    px-8 h-12 
    font-normal
  "
>
  Primary Button
</Button>

// Swiss Design Card
<Card className="p-6 border-gray-200">
  <div className="h-32 bg-gray-100 mb-4"></div>
  <h4 className="text-lg font-medium mb-2">
    Card Title
  </h4>
  <p className="text-sm text-gray-600 leading-relaxed">
    Minimal card design with clear hierarchy.
  </p>
</Card>

// Grid Layout
<div className="grid grid-cols-12 gap-4">
  <div className="col-span-4">Content</div>
  <div className="col-span-8">Content</div>
</div>`}</code>
              </pre>
            </Card>
          </div>
        </section>
      </main>
    </div>
  )
}
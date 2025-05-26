'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { ChevronLeft, Square, Circle, Triangle, Minus, Plus } from 'lucide-react'
import Link from 'next/link'

export default function BauhausPage() {
  const [activeShape, setActiveShape] = useState('square')
  const [gridSize, setGridSize] = useState(4)

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <header className="p-6 bg-white border-b-4 border-black">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/styles" className="inline-flex items-center gap-2 text-black hover:text-gray-700 transition-colors">
            <ChevronLeft className="w-5 h-5" />
            <span className="font-medium">Back to Styles</span>
          </Link>
          <h1 className="text-3xl font-bold tracking-tight">BAUHAUS</h1>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-6 space-y-12">
        {/* Design Principles */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight">DESIGN PRINCIPLES</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 bg-red-600 text-white border-0">
              <div className="space-y-4">
                <Square className="w-12 h-12" />
                <h3 className="font-bold text-xl">FORM FOLLOWS FUNCTION</h3>
                <p className="text-white/90">Every element serves a purpose. No unnecessary decoration.</p>
              </div>
            </Card>
            <Card className="p-6 bg-blue-600 text-white border-0">
              <div className="space-y-4">
                <Circle className="w-12 h-12" />
                <h3 className="font-bold text-xl">GEOMETRIC PURITY</h3>
                <p className="text-white/90">Basic shapes create sophisticated compositions.</p>
              </div>
            </Card>
            <Card className="p-6 bg-yellow-500 text-black border-0">
              <div className="space-y-4">
                <Triangle className="w-12 h-12" />
                <h3 className="font-bold text-xl">PRIMARY COLORS</h3>
                <p className="text-black/90">Bold use of red, blue, yellow with black and white.</p>
              </div>
            </Card>
          </div>
        </section>

        {/* Color Palette */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight">COLOR PALETTE</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="space-y-2">
              <div className="h-32 bg-red-600 border-4 border-black"></div>
              <p className="font-bold text-center">RED</p>
            </div>
            <div className="space-y-2">
              <div className="h-32 bg-blue-600 border-4 border-black"></div>
              <p className="font-bold text-center">BLUE</p>
            </div>
            <div className="space-y-2">
              <div className="h-32 bg-yellow-500 border-4 border-black"></div>
              <p className="font-bold text-center">YELLOW</p>
            </div>
            <div className="space-y-2">
              <div className="h-32 bg-black border-4 border-black"></div>
              <p className="font-bold text-center">BLACK</p>
            </div>
            <div className="space-y-2">
              <div className="h-32 bg-white border-4 border-black"></div>
              <p className="font-bold text-center">WHITE</p>
            </div>
          </div>
        </section>

        {/* Interactive Components */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold tracking-tight">INTERACTIVE COMPONENTS</h2>
          
          {/* Geometric Composition */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">GEOMETRIC COMPOSITION</h3>
            <div className="bg-white p-8 border-4 border-black">
              <div className="relative h-96 overflow-hidden">
                {/* Background Grid */}
                <div className="absolute inset-0 grid grid-cols-8 grid-rows-8">
                  {[...Array(64)].map((_, i) => (
                    <div key={i} className="border border-gray-200"></div>
                  ))}
                </div>
                
                {/* Geometric Shapes */}
                <motion.div
                  className="absolute top-4 left-4 w-32 h-32 bg-red-600"
                  animate={{ rotate: activeShape === 'square' ? 45 : 0 }}
                  transition={{ duration: 0.5 }}
                />
                <motion.div
                  className="absolute top-20 right-20 w-40 h-40 bg-blue-600 rounded-full"
                  animate={{ scale: activeShape === 'circle' ? 1.2 : 1 }}
                  transition={{ duration: 0.5 }}
                />
                <motion.div
                  className="absolute bottom-8 left-1/3 w-0 h-0 border-l-[60px] border-l-transparent border-r-[60px] border-r-transparent border-b-[100px] border-b-yellow-500"
                  animate={{ rotate: activeShape === 'triangle' ? 180 : 0 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-24 bg-black"></div>
              </div>
              
              <div className="flex gap-4 mt-6 justify-center">
                <Button
                  onClick={() => setActiveShape('square')}
                  className={`${activeShape === 'square' ? 'bg-red-600' : 'bg-white text-black'} border-2 border-black hover:bg-red-600 hover:text-white`}
                >
                  <Square className="w-4 h-4 mr-2" /> SQUARE
                </Button>
                <Button
                  onClick={() => setActiveShape('circle')}
                  className={`${activeShape === 'circle' ? 'bg-blue-600' : 'bg-white text-black'} border-2 border-black hover:bg-blue-600 hover:text-white`}
                >
                  <Circle className="w-4 h-4 mr-2" /> CIRCLE
                </Button>
                <Button
                  onClick={() => setActiveShape('triangle')}
                  className={`${activeShape === 'triangle' ? 'bg-yellow-500' : 'bg-white text-black'} border-2 border-black hover:bg-yellow-500 hover:text-black`}
                >
                  <Triangle className="w-4 h-4 mr-2" /> TRIANGLE
                </Button>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">BUTTONS</h3>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-red-600 text-white border-2 border-black hover:bg-red-700 px-8 py-4 text-lg font-bold tracking-wide">
                PRIMARY
              </Button>
              <Button className="bg-blue-600 text-white border-2 border-black hover:bg-blue-700 px-8 py-4 text-lg font-bold tracking-wide">
                SECONDARY
              </Button>
              <Button className="bg-yellow-500 text-black border-2 border-black hover:bg-yellow-600 px-8 py-4 text-lg font-bold tracking-wide">
                ACCENT
              </Button>
              <Button className="bg-white text-black border-2 border-black hover:bg-gray-100 px-8 py-4 text-lg font-bold tracking-wide">
                NEUTRAL
              </Button>
              <Button className="bg-black text-white border-2 border-black hover:bg-gray-900 px-8 py-4 text-lg font-bold tracking-wide">
                INVERSE
              </Button>
            </div>
          </div>

          {/* Grid System */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">GRID SYSTEM</h3>
            <div className="bg-white p-6 border-4 border-black">
              <div className="flex items-center gap-4 mb-6">
                <Button
                  onClick={() => setGridSize(Math.max(2, gridSize - 1))}
                  size="icon"
                  className="bg-black text-white hover:bg-gray-800"
                >
                  <Minus className="w-4 h-4" />
                </Button>
                <span className="font-bold text-lg">{gridSize}x{gridSize} GRID</span>
                <Button
                  onClick={() => setGridSize(Math.min(6, gridSize + 1))}
                  size="icon"
                  className="bg-black text-white hover:bg-gray-800"
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
              <div className={`grid gap-2`} style={{ gridTemplateColumns: `repeat(${gridSize}, 1fr)` }}>
                {[...Array(gridSize * gridSize)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: i * 0.02 }}
                    className={`aspect-square ${
                      i % 3 === 0 ? 'bg-red-600' : i % 3 === 1 ? 'bg-blue-600' : 'bg-yellow-500'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Cards */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">CARDS</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-white border-4 border-black p-0 overflow-hidden">
                <div className="h-32 bg-red-600"></div>
                <div className="p-6">
                  <h4 className="font-bold text-xl mb-2">CARD TITLE</h4>
                  <p className="text-gray-700">Functional design with geometric elements and primary colors.</p>
                </div>
              </Card>
              <Card className="bg-white border-4 border-black p-0 overflow-hidden">
                <div className="h-32 bg-blue-600"></div>
                <div className="p-6">
                  <h4 className="font-bold text-xl mb-2">CARD TITLE</h4>
                  <p className="text-gray-700">Clean lines and purposeful composition define the aesthetic.</p>
                </div>
              </Card>
              <Card className="bg-white border-4 border-black p-0 overflow-hidden">
                <div className="h-32 bg-yellow-500"></div>
                <div className="p-6">
                  <h4 className="font-bold text-xl mb-2">CARD TITLE</h4>
                  <p className="text-gray-700">Every element has meaning, nothing is purely decorative.</p>
                </div>
              </Card>
            </div>
          </div>

          {/* Form */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">FORM ELEMENTS</h3>
            <Card className="bg-white border-4 border-black p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="font-bold text-lg">NAME</Label>
                    <Input
                      id="name"
                      placeholder="Enter name"
                      className="border-2 border-black focus:ring-0 focus:border-black text-lg"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-bold text-lg">EMAIL</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter email"
                      className="border-2 border-black focus:ring-0 focus:border-black text-lg"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="font-bold text-lg">MESSAGE</Label>
                  <textarea
                    id="message"
                    placeholder="Enter message"
                    rows={4}
                    className="w-full border-2 border-black p-3 focus:ring-0 focus:border-black focus:outline-none text-lg"
                  />
                </div>
                <div className="flex gap-4">
                  <Button type="submit" className="bg-black text-white border-2 border-black hover:bg-gray-900 px-8 py-4 text-lg font-bold">
                    SUBMIT
                  </Button>
                  <Button type="button" className="bg-white text-black border-2 border-black hover:bg-gray-100 px-8 py-4 text-lg font-bold">
                    CANCEL
                  </Button>
                </div>
              </form>
            </Card>
          </div>

          {/* Badges */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">BADGES</h3>
            <div className="flex flex-wrap gap-4">
              <Badge className="bg-red-600 text-white border-2 border-black text-base px-4 py-2">NEW</Badge>
              <Badge className="bg-blue-600 text-white border-2 border-black text-base px-4 py-2">FEATURED</Badge>
              <Badge className="bg-yellow-500 text-black border-2 border-black text-base px-4 py-2">POPULAR</Badge>
              <Badge className="bg-black text-white border-2 border-black text-base px-4 py-2">ESSENTIAL</Badge>
              <Badge className="bg-white text-black border-2 border-black text-base px-4 py-2">BASIC</Badge>
            </div>
          </div>
        </section>

        {/* Code Example */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">CODE EXAMPLE</h2>
          <Card className="bg-white border-4 border-black p-8">
            <pre className="text-sm font-mono overflow-x-auto">
              <code>{`// Bauhaus Button
<Button 
  className="
    bg-red-600 text-white 
    border-2 border-black 
    hover:bg-red-700 
    px-8 py-4 
    text-lg font-bold 
    tracking-wide
  "
>
  PRIMARY
</Button>

// Bauhaus Card
<Card className="
  bg-white 
  border-4 border-black 
  p-0 overflow-hidden
">
  <div className="h-32 bg-blue-600"></div>
  <div className="p-6">
    <h4 className="font-bold text-xl mb-2">
      CARD TITLE
    </h4>
    <p className="text-gray-700">
      Content here
    </p>
  </div>
</Card>

// Bauhaus Grid
<div 
  className="grid gap-2" 
  style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}
>
  {items.map((item, i) => (
    <div 
      key={i}
      className={
        i % 3 === 0 ? 'bg-red-600' : 
        i % 3 === 1 ? 'bg-blue-600' : 
        'bg-yellow-500'
      }
    />
  ))}
</div>`}</code>
            </pre>
          </Card>
        </section>
      </main>
    </div>
  )
}
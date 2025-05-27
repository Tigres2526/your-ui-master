'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Zap, Shield, Rocket } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'

export default function BrutalismPage() {
  const [activeTab, setActiveTab] = useState('raw')
  const [hoverIndex, setHoverIndex] = useState<number | null>(null)

  return (
    <div className="relative -m-6 p-6 min-h-[calc(100vh-4rem)] bg-white">
      {/* Page Title */}
      <div className="mb-8">
        <h1 className="text-6xl font-black uppercase tracking-tight">BRUTALISM</h1>
      </div>

      <main className="max-w-6xl mx-auto p-6 space-y-16">
        {/* Design Principles */}
        <section className="space-y-8">
          <h2 className="text-5xl font-black uppercase border-l-8 border-black pl-4">Design Principles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 bg-red-500">
              <h3 className="font-black text-2xl uppercase mb-2 text-white">RAW & BOLD</h3>
              <p className="text-white font-bold">Unapologetic design that demands attention through stark contrasts</p>
            </Card>
            <Card className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 bg-blue-500">
              <h3 className="font-black text-2xl uppercase mb-2 text-white">TYPOGRAPHY</h3>
              <p className="text-white font-bold">Heavy, impactful type that dominates the visual hierarchy</p>
            </Card>
            <Card className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 bg-green-500">
              <h3 className="font-black text-2xl uppercase mb-2 text-white">GEOMETRIC</h3>
              <p className="text-white font-bold">Bold shapes and harsh angles create powerful compositions</p>
            </Card>
          </div>
        </section>

        {/* Color Palette */}
        <section className="space-y-8">
          <h2 className="text-5xl font-black uppercase border-l-8 border-black pl-4">Color Palette</h2>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
            <div className="space-y-4">
              <div className="h-32 bg-black border-4 border-black"></div>
              <p className="font-black uppercase">Black</p>
            </div>
            <div className="space-y-4">
              <div className="h-32 bg-white border-4 border-black"></div>
              <p className="font-black uppercase">White</p>
            </div>
            <div className="space-y-4">
              <div className="h-32 bg-red-500 border-4 border-black"></div>
              <p className="font-black uppercase">Red</p>
            </div>
            <div className="space-y-4">
              <div className="h-32 bg-yellow-400 border-4 border-black"></div>
              <p className="font-black uppercase">Yellow</p>
            </div>
            <div className="space-y-4">
              <div className="h-32 bg-blue-500 border-4 border-black"></div>
              <p className="font-black uppercase">Blue</p>
            </div>
            <div className="space-y-4">
              <div className="h-32 bg-green-500 border-4 border-black"></div>
              <p className="font-black uppercase">Green</p>
            </div>
          </div>
        </section>

        {/* Interactive Components */}
        <section className="space-y-12">
          <h2 className="text-5xl font-black uppercase border-l-8 border-black pl-4">Components</h2>
          
          {/* Navigation Tabs */}
          <div className="space-y-6">
            <h3 className="text-3xl font-black uppercase">Navigation</h3>
            <div className="border-4 border-black">
              <div className="flex">
                <button
                  onClick={() => setActiveTab('raw')}
                  className={`px-8 py-4 font-black uppercase text-xl border-r-4 border-black transition-colors ${
                    activeTab === 'raw' ? 'bg-black text-white' : 'bg-white hover:bg-yellow-400'
                  }`}
                >
                  RAW
                </button>
                <button
                  onClick={() => setActiveTab('bold')}
                  className={`px-8 py-4 font-black uppercase text-xl border-r-4 border-black transition-colors ${
                    activeTab === 'bold' ? 'bg-black text-white' : 'bg-white hover:bg-yellow-400'
                  }`}
                >
                  BOLD
                </button>
                <button
                  onClick={() => setActiveTab('brutal')}
                  className={`px-8 py-4 font-black uppercase text-xl transition-colors ${
                    activeTab === 'brutal' ? 'bg-black text-white' : 'bg-white hover:bg-yellow-400'
                  }`}
                >
                  BRUTAL
                </button>
              </div>
              <div className="p-8 bg-gray-100">
                <p className="font-bold text-xl">
                  {activeTab === 'raw' && 'Raw design strips away unnecessary elements'}
                  {activeTab === 'bold' && 'Bold typography commands attention'}
                  {activeTab === 'brutal' && 'Brutal aesthetics challenge conventions'}
                </p>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="space-y-6">
            <h3 className="text-3xl font-black uppercase">Buttons</h3>
            <div className="flex flex-wrap gap-6">
              <Button className="bg-black text-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all font-black uppercase text-lg px-8 py-6 rounded-none">
                PRIMARY
              </Button>
              <Button className="bg-red-500 text-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all font-black uppercase text-lg px-8 py-6 rounded-none">
                DANGER
              </Button>
              <Button className="bg-yellow-400 text-black border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all font-black uppercase text-lg px-8 py-6 rounded-none">
                WARNING
              </Button>
              <Button className="bg-white text-black border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all font-black uppercase text-lg px-8 py-6 rounded-none">
                GHOST
              </Button>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="space-y-6">
            <h3 className="text-3xl font-black uppercase">Card Grid</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Zap, color: 'bg-yellow-400', title: 'FAST' },
                { icon: Shield, color: 'bg-red-500', title: 'SECURE' },
                { icon: Rocket, color: 'bg-blue-500', title: 'POWERFUL' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  onHoverStart={() => setHoverIndex(index)}
                  onHoverEnd={() => setHoverIndex(null)}
                  whileHover={{ scale: 0.95 }}
                  className="relative"
                >
                  <Card className={`border-4 border-black p-8 ${hoverIndex === index ? 'shadow-none' : 'shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'} ${item.color}`}>
                    <item.icon className="w-16 h-16 mb-4 text-black" strokeWidth={3} />
                    <h4 className="text-3xl font-black uppercase mb-2">{item.title}</h4>
                    <p className="font-bold text-lg">Brutalist design doesn&apos;t compromise. It delivers raw power.</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="space-y-6">
            <h3 className="text-3xl font-black uppercase">Form</h3>
            <Card className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 bg-white">
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="font-black uppercase text-xl">Name</Label>
                  <Input
                    id="name"
                    placeholder="ENTER YOUR NAME"
                    className="border-4 border-black rounded-none p-4 text-lg font-bold placeholder:text-gray-500 focus:ring-0 focus:ring-offset-0 focus:border-black"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="font-black uppercase text-xl">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="ENTER YOUR EMAIL"
                    className="border-4 border-black rounded-none p-4 text-lg font-bold placeholder:text-gray-500 focus:ring-0 focus:ring-offset-0 focus:border-black"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="font-black uppercase text-xl">Message</Label>
                  <textarea
                    id="message"
                    placeholder="TYPE YOUR MESSAGE"
                    rows={4}
                    className="w-full border-4 border-black rounded-none p-4 text-lg font-bold placeholder:text-gray-500 focus:ring-0 focus:ring-offset-0 focus:border-black focus:outline-none"
                  />
                </div>
                <Button className="w-full bg-black text-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all font-black uppercase text-xl py-6 rounded-none">
                  SUBMIT <ArrowRight className="inline-block ml-2" />
                </Button>
              </form>
            </Card>
          </div>

          {/* Badge Examples */}
          <div className="space-y-6">
            <h3 className="text-3xl font-black uppercase">Badges</h3>
            <div className="flex flex-wrap gap-4">
              <Badge className="bg-black text-white border-2 border-black font-black uppercase px-4 py-2 text-base rounded-none">NEW</Badge>
              <Badge className="bg-red-500 text-white border-2 border-black font-black uppercase px-4 py-2 text-base rounded-none">HOT</Badge>
              <Badge className="bg-yellow-400 text-black border-2 border-black font-black uppercase px-4 py-2 text-base rounded-none">SALE</Badge>
              <Badge className="bg-blue-500 text-white border-2 border-black font-black uppercase px-4 py-2 text-base rounded-none">TRENDING</Badge>
              <Badge className="bg-green-500 text-white border-2 border-black font-black uppercase px-4 py-2 text-base rounded-none">FEATURED</Badge>
            </div>
          </div>
        </section>

        {/* Code Example */}
        <section className="space-y-8">
          <h2 className="text-5xl font-black uppercase border-l-8 border-black pl-4">Code Example</h2>
          <Card className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 bg-gray-100">
            <pre className="text-sm font-mono overflow-x-auto">
              <code>{`// Brutalist Button
<Button 
  className="
    bg-black text-white 
    border-4 border-black 
    shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] 
    hover:shadow-none 
    hover:translate-x-1 
    hover:translate-y-1 
    transition-all 
    font-black uppercase 
    text-lg px-8 py-6 
    rounded-none
  "
>
  BRUTAL BUTTON
</Button>

// Brutalist Card
<Card 
  className="
    border-4 border-black 
    shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] 
    p-8 bg-red-500
  "
>
  <h3 className="font-black text-2xl uppercase mb-2 text-white">
    TITLE
  </h3>
  <p className="text-white font-bold">
    Content goes here
  </p>
</Card>`}</code>
            </pre>
          </Card>
        </section>
      </main>
    </div>
  )
}
'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import { ChevronLeft, Play, Pause, SkipForward, Volume2, Settings, Home, User, Heart } from 'lucide-react'
import Link from 'next/link'

export default function Skeuomorphism2Page() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState([75])
  const [switchOn, setSwitchOn] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-200 to-gray-300">
      {/* Header */}
      <header className="relative p-6 bg-gradient-to-b from-gray-100 to-gray-200 shadow-lg">
        <div className="absolute inset-0 bg-noise opacity-5"></div>
        <div className="relative max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/styles" className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors">
            <ChevronLeft className="w-5 h-5" />
            <span className="font-medium">Back to Styles</span>
          </Link>
          <h1 className="text-3xl font-bold text-gray-800">Skeuomorphism 2.0</h1>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-6 space-y-12">
        {/* Design Principles */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Design Principles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 bg-gradient-to-br from-white to-gray-100 border-0 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.8),0_3px_8px_0_rgba(0,0,0,0.3)]">
              <h3 className="font-semibold text-gray-800 mb-2">Realistic Textures</h3>
              <p className="text-sm text-gray-600">Modern materials like brushed metal, leather, and wood grain with subtle depth</p>
            </Card>
            <Card className="p-6 bg-gradient-to-br from-white to-gray-100 border-0 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.8),0_3px_8px_0_rgba(0,0,0,0.3)]">
              <h3 className="font-semibold text-gray-800 mb-2">Tactile Depth</h3>
              <p className="text-sm text-gray-600">Multiple shadow layers and highlights create believable 3D surfaces</p>
            </Card>
            <Card className="p-6 bg-gradient-to-br from-white to-gray-100 border-0 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.8),0_3px_8px_0_rgba(0,0,0,0.3)]">
              <h3 className="font-semibold text-gray-800 mb-2">Familiar Metaphors</h3>
              <p className="text-sm text-gray-600">UI elements that mimic real-world objects for intuitive interaction</p>
            </Card>
          </div>
        </section>

        {/* Color Palette */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Color Palette</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="space-y-2">
              <div className="h-24 rounded-lg bg-gradient-to-br from-gray-700 to-gray-900 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_2px_4px_0_rgba(0,0,0,0.3)]"></div>
              <p className="text-sm font-medium text-gray-700">Metal</p>
            </div>
            <div className="space-y-2">
              <div className="h-24 rounded-lg bg-gradient-to-br from-amber-700 to-amber-900 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_2px_4px_0_rgba(0,0,0,0.3)]"></div>
              <p className="text-sm font-medium text-gray-700">Leather</p>
            </div>
            <div className="space-y-2">
              <div className="h-24 rounded-lg bg-gradient-to-br from-orange-800 to-orange-950 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_2px_4px_0_rgba(0,0,0,0.3)]"></div>
              <p className="text-sm font-medium text-gray-700">Wood</p>
            </div>
            <div className="space-y-2">
              <div className="h-24 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),0_2px_4px_0_rgba(0,0,0,0.3)]"></div>
              <p className="text-sm font-medium text-gray-700">Glass</p>
            </div>
            <div className="space-y-2">
              <div className="h-24 rounded-lg bg-gradient-to-br from-red-600 to-red-800 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),0_2px_4px_0_rgba(0,0,0,0.3)]"></div>
              <p className="text-sm font-medium text-gray-700">Plastic</p>
            </div>
          </div>
        </section>

        {/* Interactive Components */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-gray-800">Interactive Components</h2>
          
          {/* Music Player */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-700">Music Player</h3>
            <Card className="p-8 bg-gradient-to-br from-gray-800 to-gray-900 border-0 shadow-[inset_0_2px_4px_0_rgba(255,255,255,0.1),0_8px_16px_0_rgba(0,0,0,0.4)] rounded-2xl">
              <div className="space-y-6">
                <div className="aspect-square w-48 mx-auto bg-gradient-to-br from-gray-700 to-gray-800 rounded-full shadow-[inset_0_-2px_4px_0_rgba(0,0,0,0.3),0_4px_8px_0_rgba(0,0,0,0.3)] flex items-center justify-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full shadow-[inset_0_2px_4px_0_rgba(255,255,255,0.2)]"></div>
                </div>
                <div className="text-center space-y-2">
                  <h4 className="text-lg font-semibold text-white">Now Playing</h4>
                  <p className="text-sm text-gray-400">Artist Name - Song Title</p>
                </div>
                <div className="flex items-center justify-center gap-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 shadow-[inset_0_1px_2px_0_rgba(255,255,255,0.2),0_2px_4px_0_rgba(0,0,0,0.3)] hover:shadow-[inset_0_1px_2px_0_rgba(255,255,255,0.2),0_1px_2px_0_rgba(0,0,0,0.2)] text-white"
                  >
                    <SkipForward className="w-5 h-5 rotate-180" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 shadow-[inset_0_2px_4px_0_rgba(255,255,255,0.3),0_4px_8px_0_rgba(0,0,0,0.3)] hover:shadow-[inset_0_2px_4px_0_rgba(255,255,255,0.3),0_2px_4px_0_rgba(0,0,0,0.2)] text-white"
                  >
                    {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 shadow-[inset_0_1px_2px_0_rgba(255,255,255,0.2),0_2px_4px_0_rgba(0,0,0,0.3)] hover:shadow-[inset_0_1px_2px_0_rgba(255,255,255,0.2),0_1px_2px_0_rgba(0,0,0,0.2)] text-white"
                  >
                    <SkipForward className="w-5 h-5" />
                  </Button>
                </div>
                <div className="flex items-center gap-3">
                  <Volume2 className="w-5 h-5 text-gray-400" />
                  <Slider
                    value={volume}
                    onValueChange={setVolume}
                    className="flex-1 [&_[role=slider]]:bg-gradient-to-br [&_[role=slider]]:from-blue-400 [&_[role=slider]]:to-blue-600 [&_[role=slider]]:shadow-[inset_0_1px_2px_0_rgba(255,255,255,0.3),0_2px_4px_0_rgba(0,0,0,0.3)] [&_[role=slider]]:border-0 [&_.relative]:bg-gradient-to-r [&_.relative]:from-gray-700 [&_.relative]:to-gray-800 [&_.relative]:shadow-[inset_0_1px_2px_0_rgba(0,0,0,0.3)]"
                  />
                </div>
              </div>
            </Card>
          </div>

          {/* Buttons */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-700">Buttons</h3>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-gradient-to-br from-blue-500 to-blue-700 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.3),0_2px_4px_0_rgba(0,0,0,0.3)] hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.3),0_1px_2px_0_rgba(0,0,0,0.2)] active:shadow-[inset_0_2px_4px_0_rgba(0,0,0,0.3)] text-white border-0">
                Primary Button
              </Button>
              <Button className="bg-gradient-to-br from-green-500 to-green-700 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.3),0_2px_4px_0_rgba(0,0,0,0.3)] hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.3),0_1px_2px_0_rgba(0,0,0,0.2)] active:shadow-[inset_0_2px_4px_0_rgba(0,0,0,0.3)] text-white border-0">
                Success Button
              </Button>
              <Button className="bg-gradient-to-br from-red-500 to-red-700 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.3),0_2px_4px_0_rgba(0,0,0,0.3)] hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.3),0_1px_2px_0_rgba(0,0,0,0.2)] active:shadow-[inset_0_2px_4px_0_rgba(0,0,0,0.3)] text-white border-0">
                Danger Button
              </Button>
            </div>
          </div>

          {/* Toggle Switch */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-700">Toggle Switch</h3>
            <div className="flex items-center gap-4">
              <div
                onClick={() => setSwitchOn(!switchOn)}
                className={`
                  relative w-20 h-10 rounded-full cursor-pointer transition-all duration-300
                  ${switchOn 
                    ? 'bg-gradient-to-br from-green-500 to-green-700 shadow-[inset_0_2px_4px_0_rgba(0,0,0,0.3),0_1px_2px_0_rgba(255,255,255,0.3)]' 
                    : 'bg-gradient-to-br from-gray-500 to-gray-700 shadow-[inset_0_2px_4px_0_rgba(0,0,0,0.3),0_1px_2px_0_rgba(255,255,255,0.3)]'
                  }
                `}
              >
                <motion.div
                  className="absolute top-1 w-8 h-8 rounded-full bg-gradient-to-br from-white to-gray-100 shadow-[0_2px_4px_0_rgba(0,0,0,0.3),inset_0_1px_2px_0_rgba(255,255,255,0.8)]"
                  animate={{ x: switchOn ? 40 : 4 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </div>
              <span className="text-gray-700 font-medium">{switchOn ? 'ON' : 'OFF'}</span>
            </div>
          </div>

          {/* Navigation Bar */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-700">Navigation Bar</h3>
            <Card className="p-2 bg-gradient-to-br from-gray-100 to-gray-200 border-0 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.8),0_4px_8px_0_rgba(0,0,0,0.3)] rounded-2xl">
              <div className="flex items-center justify-around">
                <Button variant="ghost" size="icon" className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 shadow-[inset_0_1px_2px_0_rgba(255,255,255,0.3),0_2px_4px_0_rgba(0,0,0,0.3)] text-white">
                  <Home className="w-6 h-6" />
                </Button>
                <Button variant="ghost" size="icon" className="w-16 h-16 rounded-xl hover:bg-gradient-to-br hover:from-gray-300 hover:to-gray-400 hover:shadow-[inset_0_1px_2px_0_rgba(255,255,255,0.5),0_1px_2px_0_rgba(0,0,0,0.2)]">
                  <User className="w-6 h-6" />
                </Button>
                <Button variant="ghost" size="icon" className="w-16 h-16 rounded-xl hover:bg-gradient-to-br hover:from-gray-300 hover:to-gray-400 hover:shadow-[inset_0_1px_2px_0_rgba(255,255,255,0.5),0_1px_2px_0_rgba(0,0,0,0.2)]">
                  <Heart className="w-6 h-6" />
                </Button>
                <Button variant="ghost" size="icon" className="w-16 h-16 rounded-xl hover:bg-gradient-to-br hover:from-gray-300 hover:to-gray-400 hover:shadow-[inset_0_1px_2px_0_rgba(255,255,255,0.5),0_1px_2px_0_rgba(0,0,0,0.2)]">
                  <Settings className="w-6 h-6" />
                </Button>
              </div>
            </Card>
          </div>

          {/* Form Elements */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-700">Form Elements</h3>
            <Card className="p-6 bg-gradient-to-br from-white to-gray-100 border-0 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.8),0_3px_8px_0_rgba(0,0,0,0.3)]">
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700 font-medium">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="bg-white border-0 shadow-[inset_0_2px_4px_0_rgba(0,0,0,0.1),0_1px_0_0_rgba(255,255,255,0.8)] focus:shadow-[inset_0_2px_4px_0_rgba(0,0,0,0.15),0_0_0_3px_rgba(59,130,246,0.2)]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-gray-700 font-medium">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    className="bg-white border-0 shadow-[inset_0_2px_4px_0_rgba(0,0,0,0.1),0_1px_0_0_rgba(255,255,255,0.8)] focus:shadow-[inset_0_2px_4px_0_rgba(0,0,0,0.15),0_0_0_3px_rgba(59,130,246,0.2)]"
                  />
                </div>
                <Button className="w-full bg-gradient-to-br from-blue-500 to-blue-700 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.3),0_2px_4px_0_rgba(0,0,0,0.3)] hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.3),0_1px_2px_0_rgba(0,0,0,0.2)] text-white border-0">
                  Sign In
                </Button>
              </form>
            </Card>
          </div>
        </section>

        {/* Code Example */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Code Example</h2>
          <Card className="p-6 bg-gradient-to-br from-gray-800 to-gray-900 border-0 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_3px_8px_0_rgba(0,0,0,0.3)]">
            <pre className="text-sm text-gray-300 overflow-x-auto">
              <code>{`// Skeuomorphism 2.0 Button
<Button 
  className="
    bg-gradient-to-br from-blue-500 to-blue-700 
    shadow-[inset_0_1px_0_0_rgba(255,255,255,0.3),0_2px_4px_0_rgba(0,0,0,0.3)] 
    hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.3),0_1px_2px_0_rgba(0,0,0,0.2)] 
    active:shadow-[inset_0_2px_4px_0_rgba(0,0,0,0.3)] 
    text-white border-0
  "
>
  Realistic Button
</Button>

// Metal Card
<Card 
  className="
    p-6 bg-gradient-to-br from-gray-700 to-gray-900 
    border-0 
    shadow-[inset_0_2px_4px_0_rgba(255,255,255,0.1),0_8px_16px_0_rgba(0,0,0,0.4)] 
    rounded-2xl
  "
>
  <div className="relative">
    <div className="absolute inset-0 bg-noise opacity-5"></div>
    {/* Content */}
  </div>
</Card>`}</code>
            </pre>
          </Card>
        </section>
      </main>

      <style jsx>{`
        .bg-noise {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }
      `}</style>
    </div>
  )
}
'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import { ChevronLeft, Palette, Box, Layers, Sparkles, Heart, Star, Send } from 'lucide-react'
import Link from 'next/link'

export default function ClaymorphismPage() {
  const [depth, setDepth] = useState([50])
  const [isToggled, setIsToggled] = useState(false)
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
      {/* Header */}
      <header className="p-6 bg-white/40 backdrop-blur-sm border-b border-white/20">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/styles" className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors">
            <ChevronLeft className="w-5 h-5" />
            <span className="font-medium">Back to Styles</span>
          </Link>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
            Claymorphism
          </h1>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-6 space-y-12">
        {/* Design Principles */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <Palette className="w-8 h-8 text-orange-500" />
            Design Principles
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="preserve-3d"
            >
              <Card className="p-6 bg-gradient-to-br from-orange-100 to-orange-200 border-0 shadow-[0_20px_40px_-15px_rgba(251,146,60,0.5)] rounded-3xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent rounded-3xl"></div>
                <div className="relative z-10">
                  <Box className="w-12 h-12 text-orange-600 mb-4" />
                  <h3 className="font-bold text-xl text-gray-800 mb-2">3D Clay Surface</h3>
                  <p className="text-gray-600">Soft, inflated surfaces that feel tactile and organic</p>
                </div>
              </Card>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="preserve-3d"
            >
              <Card className="p-6 bg-gradient-to-br from-pink-100 to-pink-200 border-0 shadow-[0_20px_40px_-15px_rgba(236,72,153,0.5)] rounded-3xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent rounded-3xl"></div>
                <div className="relative z-10">
                  <Layers className="w-12 h-12 text-pink-600 mb-4" />
                  <h3 className="font-bold text-xl text-gray-800 mb-2">Soft Shadows</h3>
                  <p className="text-gray-600">Multiple shadow layers create depth and dimension</p>
                </div>
              </Card>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="preserve-3d"
            >
              <Card className="p-6 bg-gradient-to-br from-purple-100 to-purple-200 border-0 shadow-[0_20px_40px_-15px_rgba(147,51,234,0.5)] rounded-3xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent rounded-3xl"></div>
                <div className="relative z-10">
                  <Sparkles className="w-12 h-12 text-purple-600 mb-4" />
                  <h3 className="font-bold text-xl text-gray-800 mb-2">Playful Colors</h3>
                  <p className="text-gray-600">Warm, inviting palettes with smooth gradients</p>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Color Palette */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">Color Palette</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { color: 'from-orange-200 to-orange-300', name: 'Clay Orange' },
              { color: 'from-pink-200 to-pink-300', name: 'Soft Pink' },
              { color: 'from-purple-200 to-purple-300', name: 'Lavender' },
              { color: 'from-blue-200 to-blue-300', name: 'Sky Blue' },
              { color: 'from-green-200 to-green-300', name: 'Mint' }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, rotateZ: 5 }}
                className="space-y-2"
              >
                <div className={`h-24 rounded-2xl bg-gradient-to-br ${item.color} shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)] relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent"></div>
                </div>
                <p className="text-sm font-medium text-gray-700 text-center">{item.name}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Interactive Components */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-gray-800">Interactive Components</h2>
          
          {/* Clay Cards */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-700">Clay Cards</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                whileHover={{ scale: 1.03, rotateY: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="preserve-3d"
              >
                <Card className="p-8 bg-gradient-to-br from-blue-100 via-blue-200 to-purple-200 border-0 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.3)] rounded-3xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent rounded-3xl"></div>
                  <div className="relative z-10 space-y-4">
                    <div className="w-16 h-16 bg-white/80 rounded-2xl flex items-center justify-center shadow-[0_10px_20px_-5px_rgba(0,0,0,0.2)]">
                      <Star className="w-8 h-8 text-blue-600" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-800">Premium Feature</h4>
                    <p className="text-gray-600">Experience the smooth, tactile feel of clay-inspired interfaces with depth and dimension.</p>
                    <Button className="bg-white/80 hover:bg-white/90 text-gray-800 border-0 shadow-[0_10px_20px_-5px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_30px_-5px_rgba(0,0,0,0.3)] transition-all rounded-full px-6">
                      Learn More
                    </Button>
                  </div>
                </Card>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03, rotateY: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="preserve-3d"
              >
                <Card className="p-8 bg-gradient-to-br from-pink-100 via-pink-200 to-orange-200 border-0 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.3)] rounded-3xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent rounded-3xl"></div>
                  <div className="relative z-10 space-y-4">
                    <div className="w-16 h-16 bg-white/80 rounded-2xl flex items-center justify-center shadow-[0_10px_20px_-5px_rgba(0,0,0,0.2)]">
                      <Heart className="w-8 h-8 text-pink-600" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-800">Beloved Design</h4>
                    <p className="text-gray-600">Soft edges and warm colors create an inviting, approachable user experience.</p>
                    <Button className="bg-white/80 hover:bg-white/90 text-gray-800 border-0 shadow-[0_10px_20px_-5px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_30px_-5px_rgba(0,0,0,0.3)] transition-all rounded-full px-6">
                      Explore
                    </Button>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>

          {/* Buttons */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-700">Buttons</h3>
            <div className="flex flex-wrap gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-gradient-to-br from-orange-300 to-pink-400 text-white border-0 shadow-[0_15px_30px_-10px_rgba(251,146,60,0.6)] hover:shadow-[0_20px_40px_-10px_rgba(251,146,60,0.8)] px-8 py-6 rounded-full font-semibold text-lg transition-all">
                  Primary Clay
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-gradient-to-br from-purple-300 to-blue-400 text-white border-0 shadow-[0_15px_30px_-10px_rgba(147,51,234,0.6)] hover:shadow-[0_20px_40px_-10px_rgba(147,51,234,0.8)] px-8 py-6 rounded-full font-semibold text-lg transition-all">
                  Secondary
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-white/80 backdrop-blur-sm text-gray-800 border-0 shadow-[0_15px_30px_-10px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] px-8 py-6 rounded-full font-semibold text-lg transition-all">
                  Ghost Clay
                </Button>
              </motion.div>
            </div>
          </div>

          {/* Toggle Switch */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-700">Toggle Switch</h3>
            <div className="flex items-center gap-4">
              <motion.div
                onClick={() => setIsToggled(!isToggled)}
                className={`relative w-24 h-12 rounded-full cursor-pointer transition-all duration-300 ${
                  isToggled 
                    ? 'bg-gradient-to-r from-green-300 to-emerald-400 shadow-[inset_0_2px_10px_rgba(0,0,0,0.1),0_10px_20px_-5px_rgba(34,197,94,0.5)]'
                    : 'bg-gradient-to-r from-gray-200 to-gray-300 shadow-[inset_0_2px_10px_rgba(0,0,0,0.1),0_10px_20px_-5px_rgba(0,0,0,0.2)]'
                }`}
              >
                <motion.div
                  className="absolute top-1 w-10 h-10 rounded-full bg-white shadow-[0_5px_15px_-3px_rgba(0,0,0,0.3)]"
                  animate={{ x: isToggled ? 48 : 4 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </motion.div>
              <span className="font-medium text-gray-700">{isToggled ? 'Enabled' : 'Disabled'}</span>
            </div>
          </div>

          {/* Depth Slider */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-700">3D Depth Control</h3>
            <Card className="p-6 bg-gradient-to-br from-purple-100 to-pink-100 border-0 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] rounded-3xl">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label className="font-medium text-gray-700">Depth Level</Label>
                  <span className="text-gray-600">{depth[0]}%</span>
                </div>
                <Slider
                  value={depth}
                  onValueChange={setDepth}
                  className="[&_[role=slider]]:bg-gradient-to-br [&_[role=slider]]:from-purple-300 [&_[role=slider]]:to-pink-400 [&_[role=slider]]:shadow-[0_5px_15px_-3px_rgba(0,0,0,0.3)] [&_[role=slider]]:border-0 [&_.relative]:bg-white/50"
                />
                <motion.div
                  className="h-24 bg-gradient-to-br from-orange-200 to-pink-300 rounded-2xl relative overflow-hidden"
                  style={{
                    boxShadow: `0 ${depth[0] * 0.6}px ${depth[0] * 1.2}px -${depth[0] * 0.3}px rgba(0,0,0,0.3)`
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent"></div>
                </motion.div>
              </div>
            </Card>
          </div>

          {/* Form Elements */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-700">Form Elements</h3>
            <Card className="p-8 bg-gradient-to-br from-blue-100 to-purple-100 border-0 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.3)] rounded-3xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent rounded-3xl"></div>
              <form className="relative z-10 space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="font-medium text-gray-700">Your Name</Label>
                  <Input
                    id="name"
                    placeholder="Enter your name"
                    className="bg-white/70 backdrop-blur-sm border-0 shadow-[inset_0_2px_10px_rgba(0,0,0,0.08),0_5px_15px_-5px_rgba(0,0,0,0.2)] rounded-2xl px-6 py-4 placeholder:text-gray-400 focus:shadow-[inset_0_2px_10px_rgba(0,0,0,0.08),0_10px_20px_-5px_rgba(0,0,0,0.3)]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="font-medium text-gray-700">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="bg-white/70 backdrop-blur-sm border-0 shadow-[inset_0_2px_10px_rgba(0,0,0,0.08),0_5px_15px_-5px_rgba(0,0,0,0.2)] rounded-2xl px-6 py-4 placeholder:text-gray-400 focus:shadow-[inset_0_2px_10px_rgba(0,0,0,0.08),0_10px_20px_-5px_rgba(0,0,0,0.3)]"
                  />
                </div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button className="w-full bg-gradient-to-r from-purple-400 to-pink-400 text-white border-0 shadow-[0_20px_40px_-10px_rgba(147,51,234,0.6)] hover:shadow-[0_25px_50px_-10px_rgba(147,51,234,0.8)] py-6 rounded-2xl font-semibold text-lg transition-all">
                    Submit <Send className="inline-block ml-2 w-5 h-5" />
                  </Button>
                </motion.div>
              </form>
            </Card>
          </div>

          {/* Tabs */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-700">Navigation Tabs</h3>
            <div className="bg-white/50 backdrop-blur-sm p-2 rounded-3xl shadow-[inset_0_2px_10px_rgba(0,0,0,0.08)]">
              <div className="flex gap-2">
                {['overview', 'features', 'pricing'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 px-6 py-3 rounded-2xl font-medium capitalize transition-all ${
                      activeTab === tab
                        ? 'bg-gradient-to-br from-orange-300 to-pink-400 text-white shadow-[0_10px_20px_-5px_rgba(251,146,60,0.5)]'
                        : 'text-gray-600 hover:bg-white/50'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
            <Card className="p-6 bg-gradient-to-br from-orange-50 to-pink-50 border-0 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.2)] rounded-3xl">
              <p className="text-gray-700">
                {activeTab === 'overview' && 'Claymorphism brings a playful, tactile quality to digital interfaces.'}
                {activeTab === 'features' && '3D clay-like surfaces with soft shadows and smooth gradients.'}
                {activeTab === 'pricing' && 'Premium design system with endless customization possibilities.'}
              </p>
            </Card>
          </div>
        </section>

        {/* Code Example */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Code Example</h2>
          <Card className="p-6 bg-gradient-to-br from-gray-100 to-gray-200 border-0 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] rounded-3xl">
            <pre className="text-sm overflow-x-auto">
              <code>{`// Claymorphism Button
<Button 
  className="
    bg-gradient-to-br from-orange-300 to-pink-400 
    text-white border-0 
    shadow-[0_15px_30px_-10px_rgba(251,146,60,0.6)] 
    hover:shadow-[0_20px_40px_-10px_rgba(251,146,60,0.8)] 
    px-8 py-6 rounded-full 
    font-semibold text-lg 
    transition-all
  "
>
  Clay Button
</Button>

// Claymorphism Card
<Card 
  className="
    p-8 
    bg-gradient-to-br from-blue-100 via-blue-200 to-purple-200 
    border-0 
    shadow-[0_30px_60px_-20px_rgba(0,0,0,0.3)] 
    rounded-3xl 
    relative overflow-hidden
  "
>
  <div className="
    absolute inset-0 
    bg-gradient-to-br from-white/50 to-transparent 
    rounded-3xl
  "></div>
  <div className="relative z-10">
    {/* Content */}
  </div>
</Card>`}</code>
            </pre>
          </Card>
        </section>
      </main>

      <style jsx>{`
        .preserve-3d {
          transform-style: preserve-3d;
        }
      `}</style>
    </div>
  )
}
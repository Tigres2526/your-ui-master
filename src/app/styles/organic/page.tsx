'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ChevronLeft, Leaf, Droplets, Wind, Sun, Cloud, Flower } from 'lucide-react'
import Link from 'next/link'

export default function OrganicPage() {
  const [flowIntensity, setFlowIntensity] = useState([70])
  const [selectedBlob, setSelectedBlob] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-amber-50 relative overflow-hidden">
      {/* Floating Blobs Background */}
      <div className="fixed inset-0">
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-gradient-to-br from-green-200/30 to-emerald-300/30 blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ top: '10%', left: '10%' }}
        />
        <motion.div
          className="absolute w-80 h-80 rounded-full bg-gradient-to-br from-blue-200/30 to-cyan-300/30 blur-3xl"
          animate={{
            x: [0, -150, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ top: '50%', right: '20%' }}
        />
        <motion.div
          className="absolute w-72 h-72 rounded-full bg-gradient-to-br from-amber-200/30 to-orange-300/30 blur-3xl"
          animate={{
            x: [0, 80, 0],
            y: [0, 150, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ bottom: '10%', left: '30%' }}
        />
      </div>

      {/* Header */}
      <header className="relative z-10 p-6 backdrop-blur-sm bg-white/30 border-b border-white/20">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/styles" className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors">
            <ChevronLeft className="w-5 h-5" />
            <span className="font-medium">Back to Styles</span>
          </Link>
          <h1 className="text-3xl font-bold text-gray-800">Organic Design</h1>
        </div>
      </header>

      <main className="relative z-10 max-w-6xl mx-auto p-6 space-y-12">
        {/* Design Principles */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <Leaf className="w-8 h-8 text-green-600" />
            Design Principles
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="p-6 backdrop-blur-md bg-white/50 border-white/20 rounded-3xl overflow-hidden relative">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-green-300/40 to-emerald-400/40 rounded-full blur-2xl"></div>
                <div className="relative z-10">
                  <Droplets className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="font-semibold text-xl text-gray-800 mb-2">Fluid Shapes</h3>
                  <p className="text-gray-600">Soft, flowing forms that mimic natural elements and water</p>
                </div>
              </Card>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="p-6 backdrop-blur-md bg-white/50 border-white/20 rounded-3xl overflow-hidden relative">
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-gradient-to-br from-blue-300/40 to-cyan-400/40 rounded-full blur-2xl"></div>
                <div className="relative z-10">
                  <Wind className="w-12 h-12 text-cyan-600 mb-4" />
                  <h3 className="font-semibold text-xl text-gray-800 mb-2">Natural Motion</h3>
                  <p className="text-gray-600">Animations that follow organic, non-linear paths</p>
                </div>
              </Card>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="p-6 backdrop-blur-md bg-white/50 border-white/20 rounded-3xl overflow-hidden relative">
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-amber-300/40 to-orange-400/40 rounded-full blur-2xl"></div>
                <div className="relative z-10">
                  <Sun className="w-12 h-12 text-amber-600 mb-4" />
                  <h3 className="font-semibold text-xl text-gray-800 mb-2">Soft Edges</h3>
                  <p className="text-gray-600">Curved boundaries and smooth transitions everywhere</p>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Color Palette */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">Natural Colors</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { gradient: 'from-green-300 to-emerald-400', name: 'Forest' },
              { gradient: 'from-blue-300 to-cyan-400', name: 'Ocean' },
              { gradient: 'from-amber-300 to-orange-400', name: 'Sunset' },
              { gradient: 'from-purple-300 to-pink-400', name: 'Bloom' },
              { gradient: 'from-gray-300 to-slate-400', name: 'Stone' }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="space-y-2"
              >
                <div className={`h-24 bg-gradient-to-br ${item.gradient} rounded-[2rem] shadow-lg relative overflow-hidden`}>
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    animate={{ x: [-100, 100] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    style={{ transform: 'skewX(-20deg)' }}
                  />
                </div>
                <p className="text-sm font-medium text-gray-700 text-center">{item.name}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Interactive Components */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-gray-800">Interactive Components</h2>
          
          {/* Blob Selector */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-700">Organic Shapes</h3>
            <div className="grid grid-cols-3 gap-6">
              {[0, 1, 2].map((index) => (
                <motion.div
                  key={index}
                  onClick={() => setSelectedBlob(index)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="cursor-pointer"
                >
                  <div className={`h-32 relative ${selectedBlob === index ? 'ring-4 ring-green-400 ring-offset-4' : ''} rounded-[40%_60%_60%_40%/40%_30%_70%_60%] transition-all`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${
                      index === 0 ? 'from-green-300 to-emerald-500' :
                      index === 1 ? 'from-blue-300 to-cyan-500' :
                      'from-amber-300 to-orange-500'
                    } rounded-[40%_60%_60%_40%/40%_30%_70%_60%]`}></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-700">Fluid Buttons</h3>
            <div className="flex flex-wrap gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="px-8 py-6 bg-gradient-to-r from-green-400 to-emerald-500 text-white border-0 rounded-full shadow-lg hover:shadow-xl transition-all relative overflow-hidden group">
                  <span className="relative z-10">Primary Flow</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-400"
                    initial={{ x: '100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  />
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="px-8 py-6 bg-gradient-to-r from-blue-400 to-cyan-500 text-white border-0 rounded-[2rem_1rem_2rem_1rem] shadow-lg hover:shadow-xl transition-all">
                  Ocean Wave
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="px-8 py-6 bg-white/60 backdrop-blur-sm text-gray-800 border-2 border-gray-200 rounded-[1rem_2rem_1rem_2rem] hover:bg-white/80 transition-all">
                  Soft Touch
                </Button>
              </motion.div>
            </div>
          </div>

          {/* Flow Control */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-700">Flow Intensity</h3>
            <Card className="p-6 backdrop-blur-md bg-white/60 border-white/20 rounded-[2rem_3rem_2rem_3rem]">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label className="text-gray-700 font-medium">Animation Speed</Label>
                  <span className="text-gray-600">{flowIntensity[0]}%</span>
                </div>
                <Slider
                  value={flowIntensity}
                  onValueChange={setFlowIntensity}
                  className="[&_[role=slider]]:bg-gradient-to-r [&_[role=slider]]:from-green-400 [&_[role=slider]]:to-emerald-500 [&_[role=slider]]:border-0 [&_[role=slider]]:shadow-lg [&_.relative]:bg-gray-200/50 [&_[role=slider]]:rounded-full"
                />
                <motion.div
                  className="h-20 bg-gradient-to-r from-blue-300 to-cyan-400 rounded-[30%_70%_70%_30%/60%_40%_60%_40%]"
                  animate={{
                    borderRadius: [
                      "30% 70% 70% 30% / 60% 40% 60% 40%",
                      "70% 30% 30% 70% / 40% 60% 40% 60%",
                      "30% 70% 70% 30% / 60% 40% 60% 40%"
                    ]
                  }}
                  transition={{
                    duration: 5 / (flowIntensity[0] / 50),
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
            </Card>
          </div>

          {/* Organic Cards */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-700">Living Cards</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="p-8 backdrop-blur-md bg-white/60 border-white/20 rounded-[3rem_2rem_3rem_2rem] relative overflow-hidden">
                  <motion.div
                    className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-green-300/30 to-emerald-400/30 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                  <div className="relative z-10 space-y-4">
                    <Flower className="w-12 h-12 text-pink-500" />
                    <h4 className="text-2xl font-bold text-gray-800">Natural Growth</h4>
                    <p className="text-gray-600">Interfaces that breathe and flow with organic movement patterns.</p>
                    <Badge className="bg-green-100 text-green-800 border-0 rounded-full px-4 py-1">
                      Blooming
                    </Badge>
                  </div>
                </Card>
              </motion.div>

              <motion.div
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="p-8 backdrop-blur-md bg-white/60 border-white/20 rounded-[2rem_3rem_2rem_3rem] relative overflow-hidden">
                  <motion.div
                    className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-br from-blue-300/30 to-cyan-400/30 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 5, repeat: Infinity }}
                  />
                  <div className="relative z-10 space-y-4">
                    <Cloud className="w-12 h-12 text-blue-500" />
                    <h4 className="text-2xl font-bold text-gray-800">Soft Clouds</h4>
                    <p className="text-gray-600">Elements that float and drift like clouds in the sky.</p>
                    <Badge className="bg-blue-100 text-blue-800 border-0 rounded-full px-4 py-1">
                      Floating
                    </Badge>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>

          {/* Form Elements */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-700">Organic Form</h3>
            <Card className="p-8 backdrop-blur-md bg-white/70 border-white/20 rounded-[3rem_2rem_3rem_2rem] relative overflow-hidden">
              <motion.div
                className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-amber-200/20 to-orange-300/20 rounded-full"
                animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
                transition={{ duration: 10, repeat: Infinity }}
              />
              <form className="relative z-10 space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-700 font-medium">Your Name</Label>
                  <Input
                    id="name"
                    placeholder="Flow into the field..."
                    className="bg-white/50 backdrop-blur-sm border-gray-200 rounded-full px-6 py-3 placeholder:text-gray-400 focus:border-green-400 focus:ring-green-400/20"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700 font-medium">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="bg-white/50 backdrop-blur-sm border-gray-200 rounded-full px-6 py-3 placeholder:text-gray-400 focus:border-blue-400 focus:ring-blue-400/20"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-700 font-medium">Message</Label>
                  <textarea
                    id="message"
                    placeholder="Let your thoughts flow..."
                    rows={4}
                    className="w-full bg-white/50 backdrop-blur-sm border border-gray-200 rounded-[2rem] px-6 py-4 placeholder:text-gray-400 focus:border-green-400 focus:ring-green-400/20 focus:outline-none resize-none"
                  />
                </div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button className="w-full bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 text-white border-0 rounded-full py-6 shadow-lg hover:shadow-xl transition-all font-semibold">
                    Send with Love
                  </Button>
                </motion.div>
              </form>
            </Card>
          </div>

          {/* Tabs */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-700">Flowing Navigation</h3>
            <Tabs defaultValue="nature" className="w-full">
              <TabsList className="bg-white/50 backdrop-blur-sm border border-gray-200 p-1 rounded-full">
                <TabsTrigger value="nature" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-400 data-[state=active]:to-emerald-500 data-[state=active]:text-white rounded-full">
                  Nature
                </TabsTrigger>
                <TabsTrigger value="water" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-400 data-[state=active]:to-cyan-500 data-[state=active]:text-white rounded-full">
                  Water
                </TabsTrigger>
                <TabsTrigger value="sky" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-amber-400 data-[state=active]:to-orange-500 data-[state=active]:text-white rounded-full">
                  Sky
                </TabsTrigger>
              </TabsList>
              <TabsContent value="nature" className="mt-6">
                <Card className="p-6 backdrop-blur-md bg-white/60 border-white/20 rounded-[2rem_3rem_2rem_3rem]">
                  <p className="text-gray-700">Inspired by the flowing forms found in nature&apos;s designs.</p>
                </Card>
              </TabsContent>
              <TabsContent value="water" className="mt-6">
                <Card className="p-6 backdrop-blur-md bg-white/60 border-white/20 rounded-[3rem_2rem_3rem_2rem]">
                  <p className="text-gray-700">Fluid movements that mimic water&apos;s natural flow.</p>
                </Card>
              </TabsContent>
              <TabsContent value="sky" className="mt-6">
                <Card className="p-6 backdrop-blur-md bg-white/60 border-white/20 rounded-[2rem_3rem_2rem_3rem]">
                  <p className="text-gray-700">Light and airy elements that float like clouds.</p>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Code Example */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Code Example</h2>
          <Card className="p-6 backdrop-blur-md bg-white/70 border-white/20 rounded-[2rem_3rem_2rem_3rem]">
            <pre className="text-sm overflow-x-auto">
              <code>{`// Organic Button
<Button 
  className="
    px-8 py-6 
    bg-gradient-to-r from-green-400 to-emerald-500 
    text-white border-0 
    rounded-full 
    shadow-lg hover:shadow-xl 
    transition-all 
    relative overflow-hidden 
    group
  "
>
  <span className="relative z-10">Primary Flow</span>
  <motion.div
    className="
      absolute inset-0 
      bg-gradient-to-r from-emerald-500 to-green-400
    "
    initial={{ x: '100%' }}
    whileHover={{ x: 0 }}
    transition={{ type: "spring", stiffness: 200 }}
  />
</Button>

// Organic Shape
<div 
  className="
    h-32 
    bg-gradient-to-br from-blue-300 to-cyan-400 
    rounded-[30%_70%_70%_30%/60%_40%_60%_40%]
  "
>
  {/* Animated blob shape */}
</div>`}</code>
            </pre>
          </Card>
        </section>
      </main>
    </div>
  )
}
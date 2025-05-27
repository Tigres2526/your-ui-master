'use client'

import React, { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Sparkles, Moon, Star, CloudSnow, Wind } from 'lucide-react'

export default function AuroraUIPage() {
  const [intensity, setIntensity] = useState([70])
  const [activeTheme, setActiveTheme] = useState('northern')

  // Memoize star positions for performance
  const stars = useMemo(() => 
    Array.from({ length: 50 }, (_, i) => ({
      left: `${(i * 37) % 100}%`,
      top: `${(i * 23) % 100}%`,
      animationDelay: `${i % 5}s`,
      animationDuration: `${3 + (i % 4)}s`
    })), []
  )

  // Safe intensity handler with validation
  const handleIntensityChange = (value: number[]) => {
    const safeValue = value.map(v => Math.max(0, Math.min(100, v)))
    setIntensity(safeValue)
  }

  // Safe opacity calculation
  const safeOpacity = Math.max(0, Math.min(1, intensity[0] / 100))

  return (
    <div className="relative overflow-hidden -m-6 p-6 min-h-[calc(100vh-4rem)] bg-slate-950">
      {/* Aurora Background */}
      <div className="fixed inset-0 opacity-50 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-3xl animate-aurora-1"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-blue-500/20 via-emerald-500/20 to-violet-500/20 blur-3xl animate-aurora-2"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 via-pink-500/20 to-cyan-500/20 blur-3xl animate-aurora-3"></div>
      </div>

      {/* Stars */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        {stars.map((star, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
            style={{
              left: star.left,
              top: star.top,
              animationDelay: star.animationDelay,
              animationDuration: star.animationDuration
            }}
          />
        ))}
      </div>

      {/* Page Title */}
      <div className="relative z-10 text-center mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Aurora UI
        </h1>
      </div>

      <main className="relative z-10 max-w-6xl mx-auto p-6 space-y-12">
        {/* Design Principles */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-white flex items-center gap-2">
            <Sparkles className="w-8 h-8 text-cyan-400" />
            Design Principles
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border-white/20 hover:from-white/15 hover:to-white/10 transition-all">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center mb-4">
                <CloudSnow className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg text-white mb-2">Ethereal Gradients</h3>
              <p className="text-sm text-white/70">Flowing gradient meshes that mimic the northern lights</p>
            </Card>
            <Card className="p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border-white/20 hover:from-white/15 hover:to-white/10 transition-all">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-600 flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg text-white mb-2">Luminous Effects</h3>
              <p className="text-sm text-white/70">Glowing elements with soft light diffusion and shimmer</p>
            </Card>
            <Card className="p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border-white/20 hover:from-white/15 hover:to-white/10 transition-all">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-600 flex items-center justify-center mb-4">
                <Wind className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg text-white mb-2">Fluid Motion</h3>
              <p className="text-sm text-white/70">Smooth animations that flow like atmospheric phenomena</p>
            </Card>
          </div>
        </section>

        {/* Color Themes */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-white">Color Themes</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button
              onClick={() => setActiveTheme('northern')}
              onKeyDown={(e) => e.key === 'Enter' && setActiveTheme('northern')}
              aria-label="Select Northern Aurora theme"
              aria-pressed={activeTheme === 'northern'}
              className={`relative h-32 rounded-2xl overflow-hidden transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-950 ${
                activeTheme === 'northern' ? 'ring-2 ring-white ring-offset-2 ring-offset-slate-950' : ''
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent"></div>
              <p className="absolute bottom-2 left-2 text-white font-medium text-sm">Northern</p>
            </button>
            <button
              onClick={() => setActiveTheme('sunset')}
              onKeyDown={(e) => e.key === 'Enter' && setActiveTheme('sunset')}
              aria-label="Select Sunset Aurora theme"
              aria-pressed={activeTheme === 'sunset'}
              className={`relative h-32 rounded-2xl overflow-hidden transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-950 ${
                activeTheme === 'sunset' ? 'ring-2 ring-white ring-offset-2 ring-offset-slate-950' : ''
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent"></div>
              <p className="absolute bottom-2 left-2 text-white font-medium text-sm">Sunset</p>
            </button>
            <button
              onClick={() => setActiveTheme('ocean')}
              onKeyDown={(e) => e.key === 'Enter' && setActiveTheme('ocean')}
              aria-label="Select Ocean Aurora theme"
              aria-pressed={activeTheme === 'ocean'}
              className={`relative h-32 rounded-2xl overflow-hidden transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-950 ${
                activeTheme === 'ocean' ? 'ring-2 ring-white ring-offset-2 ring-offset-slate-950' : ''
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-cyan-500 to-emerald-600"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent"></div>
              <p className="absolute bottom-2 left-2 text-white font-medium text-sm">Ocean</p>
            </button>
            <button
              onClick={() => setActiveTheme('galaxy')}
              onKeyDown={(e) => e.key === 'Enter' && setActiveTheme('galaxy')}
              aria-label="Select Galaxy Aurora theme"
              aria-pressed={activeTheme === 'galaxy'}
              className={`relative h-32 rounded-2xl overflow-hidden transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-950 ${
                activeTheme === 'galaxy' ? 'ring-2 ring-white ring-offset-2 ring-offset-slate-950' : ''
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-pink-500 to-indigo-600"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent"></div>
              <p className="absolute bottom-2 left-2 text-white font-medium text-sm">Galaxy</p>
            </button>
          </div>
        </section>

        {/* Interactive Components */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-white">Interactive Components</h2>
          
          {/* Aurora Card */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white/90">Aurora Card</h3>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative overflow-hidden rounded-3xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 via-purple-500/30 to-pink-500/30 animate-aurora-slow"></div>
              <Card className="relative p-8 bg-white/10 backdrop-blur-xl border-white/20">
                <div className="relative z-10 space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center">
                    <Moon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-white">Aurora Experience</h4>
                  <p className="text-white/80">
                    Immerse yourself in the mesmerizing dance of colors inspired by the northern lights.
                    Each interaction brings a new wave of luminous beauty.
                  </p>
                  <div className="flex gap-2">
                    <Badge className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30">
                      Ethereal
                    </Badge>
                    <Badge className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30">
                      Dynamic
                    </Badge>
                    <Badge className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30">
                      Luminous
                    </Badge>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Buttons */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white/90">Buttons</h3>
            <div className="flex flex-wrap gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="relative overflow-hidden bg-gradient-to-r from-cyan-500 to-purple-600 border-0 text-white px-8 py-6 rounded-full shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40 transition-shadow">
                  <span className="relative z-10 font-semibold">Aurora Primary</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 hover:opacity-100 transition-opacity"></div>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="relative bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-6 rounded-full hover:bg-white/20 transition-all">
                  <span className="font-semibold">Glass Button</span>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="relative bg-gradient-to-r from-pink-500 to-orange-500 border-0 text-white px-8 py-6 rounded-full shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/40 transition-shadow">
                  <span className="relative z-10 font-semibold">Sunset Glow</span>
                </Button>
              </motion.div>
            </div>
          </div>

          {/* Intensity Control */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white/90">Aurora Intensity</h3>
            <Card className="p-6 bg-white/10 backdrop-blur-xl border-white/20">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label className="text-white font-medium">Brightness</Label>
                  <span className="text-white/70">{intensity[0]}%</span>
                </div>
                <Slider
                  value={intensity}
                  onValueChange={handleIntensityChange}
                  min={0}
                  max={100}
                  step={1}
                  className="[&_[role=slider]]:bg-gradient-to-r [&_[role=slider]]:from-cyan-400 [&_[role=slider]]:to-purple-600 [&_[role=slider]]:border-0 [&_[role=slider]]:shadow-lg [&_[role=slider]]:shadow-purple-500/50 [&_.relative]:bg-white/20"
                />
                <div className="h-20 rounded-2xl relative overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 animate-aurora-slow"
                    style={{ opacity: safeOpacity }}
                  ></div>
                </div>
              </div>
            </Card>
          </div>

          {/* Form Elements */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white/90">Form Elements</h3>
            <Card className="p-8 bg-white/10 backdrop-blur-xl border-white/20">
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white font-medium">Name</Label>
                  <Input
                    id="name"
                    placeholder="Enter your name"
                    className="bg-white/10 backdrop-blur-sm border-white/30 text-white placeholder:text-white/50 focus:bg-white/20 focus:border-cyan-400 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white font-medium">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="bg-white/10 backdrop-blur-sm border-white/30 text-white placeholder:text-white/50 focus:bg-white/20 focus:border-purple-400 transition-all"
                  />
                </div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button className="w-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 border-0 text-white py-6 rounded-2xl shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40 transition-shadow font-semibold">
                    Submit to the Aurora
                  </Button>
                </motion.div>
              </form>
            </Card>
          </div>

          {/* Tabs */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white/90">Navigation Tabs</h3>
            <Tabs defaultValue="lights" className="w-full">
              <TabsList className="bg-white/10 backdrop-blur-xl border border-white/20 p-1">
                <TabsTrigger 
                  value="lights" 
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-purple-600 data-[state=active]:text-white text-white/70"
                >
                  Northern Lights
                </TabsTrigger>
                <TabsTrigger 
                  value="colors" 
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-purple-600 data-[state=active]:text-white text-white/70"
                >
                  Color Spectrum
                </TabsTrigger>
                <TabsTrigger 
                  value="effects" 
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-purple-600 data-[state=active]:text-white text-white/70"
                >
                  Effects
                </TabsTrigger>
              </TabsList>
              <TabsContent value="lights" className="mt-6">
                <Card className="p-6 bg-white/10 backdrop-blur-xl border-white/20">
                  <p className="text-white/80">The aurora borealis creates nature&apos;s most spectacular light show.</p>
                </Card>
              </TabsContent>
              <TabsContent value="colors" className="mt-6">
                <Card className="p-6 bg-white/10 backdrop-blur-xl border-white/20">
                  <p className="text-white/80">A spectrum of colors dancing across the night sky.</p>
                </Card>
              </TabsContent>
              <TabsContent value="effects" className="mt-6">
                <Card className="p-6 bg-white/10 backdrop-blur-xl border-white/20">
                  <p className="text-white/80">Shimmering curtains of light with endless variations.</p>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Code Example */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-white">Code Example</h2>
          <Card className="p-6 bg-white/10 backdrop-blur-xl border-white/20">
            <pre className="text-sm text-white/90 overflow-x-auto">
              <code>{`// Aurora Button
<Button 
  className="
    relative overflow-hidden 
    bg-gradient-to-r from-cyan-500 to-purple-600 
    border-0 text-white 
    px-8 py-6 rounded-full 
    shadow-lg shadow-purple-500/25 
    hover:shadow-xl hover:shadow-purple-500/40 
    transition-shadow
  "
>
  <span className="relative z-10 font-semibold">
    Aurora Primary
  </span>
  <div className="
    absolute inset-0 
    bg-gradient-to-r from-cyan-400 to-purple-500 
    opacity-0 hover:opacity-100 
    transition-opacity
  "></div>
</Button>

// Aurora Card
<Card className="
  relative p-8 
  bg-white/10 backdrop-blur-xl 
  border-white/20
">
  <div className="
    absolute inset-0 
    bg-gradient-to-br 
    from-cyan-500/30 via-purple-500/30 to-pink-500/30 
    animate-aurora-slow
  "></div>
  {/* Content */}
</Card>`}</code>
            </pre>
          </Card>
        </section>
      </main>

      <style jsx>{`
        @keyframes aurora-1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, -30px) rotate(120deg); }
          66% { transform: translate(-20px, 20px) rotate(240deg); }
        }
        
        @keyframes aurora-2 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(-30px, 30px) rotate(60deg); }
          66% { transform: translate(30px, -10px) rotate(180deg); }
        }
        
        @keyframes aurora-3 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(20px, 20px) rotate(90deg); }
          66% { transform: translate(-30px, -20px) rotate(270deg); }
        }

        @keyframes aurora-slow {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-20px, -20px); }
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }

        .animate-aurora-1 {
          animation: aurora-1 15s ease-in-out infinite;
        }
        
        .animate-aurora-2 {
          animation: aurora-2 20s ease-in-out infinite;
        }
        
        .animate-aurora-3 {
          animation: aurora-3 25s ease-in-out infinite;
        }

        .animate-aurora-slow {
          animation: aurora-slow 10s ease-in-out infinite;
        }

        .animate-twinkle {
          animation: twinkle var(--duration, 3s) ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { ChevronLeft, Zap, Star, Sparkles } from 'lucide-react'
import Link from 'next/link'

export default function MemphisPage() {
  const [activePattern, setActivePattern] = useState('squiggles')

  // Fixed positions for dots to avoid hydration errors
  const dotPositions = [
    { left: '10%', top: '15%' },
    { left: '25%', top: '30%' },
    { left: '40%', top: '20%' },
    { left: '55%', top: '40%' },
    { left: '70%', top: '25%' },
    { left: '85%', top: '50%' },
    { left: '15%', top: '60%' },
    { left: '30%', top: '70%' },
    { left: '45%', top: '55%' },
    { left: '60%', top: '65%' },
    { left: '75%', top: '75%' },
    { left: '90%', top: '80%' },
    { left: '20%', top: '85%' },
    { left: '35%', top: '90%' },
    { left: '50%', top: '80%' },
    { left: '65%', top: '85%' },
    { left: '80%', top: '90%' },
    { left: '12%', top: '45%' },
    { left: '92%', top: '35%' },
    { left: '5%', top: '75%' },
  ]

  return (
    <div className="min-h-screen bg-pink-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-20">
        {/* Squiggles */}
        <svg className="absolute top-10 left-10" width="100" height="100" viewBox="0 0 100 100">
          <path d="M10,50 Q30,10 50,50 T90,50" stroke="#00CED1" strokeWidth="4" fill="none" />
        </svg>
        <svg className="absolute top-40 right-20" width="120" height="120" viewBox="0 0 120 120">
          <path d="M20,60 Q40,20 60,60 T100,60" stroke="#FF1493" strokeWidth="5" fill="none" />
        </svg>
        
        {/* Geometric Shapes */}
        <div className="absolute top-20 right-1/3 w-16 h-16 bg-yellow-400 rotate-45"></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-cyan-400 rounded-full"></div>
        <div className="absolute top-1/3 left-10 w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-b-[50px] border-b-purple-500"></div>
        
        {/* Dots Pattern */}
        {dotPositions.map((pos, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-black rounded-full"
            style={{
              left: pos.left,
              top: pos.top,
            }}
          />
        ))}
        
        {/* Zigzag */}
        <div className="absolute bottom-10 right-10 text-6xl text-green-500 font-black">
          ～～～
        </div>
      </div>

      {/* Header */}
      <header className="relative z-10 p-6 bg-yellow-300 border-b-4 border-black">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/styles" className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 hover:bg-purple-600 transition-colors">
            <ChevronLeft className="w-5 h-5" />
            <span className="font-black">BACK</span>
          </Link>
          <h1 className="text-4xl font-black text-black transform -rotate-2">MEMPHIS DESIGN</h1>
        </div>
      </header>

      <main className="relative z-10 max-w-6xl mx-auto p-6 space-y-12">
        {/* Design Principles */}
        <section className="space-y-6">
          <h2 className="text-3xl font-black text-black transform rotate-1">DESIGN PRINCIPLES</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              whileHover={{ rotate: -5, scale: 1.05 }}
              className="relative"
            >
              <Card className="p-6 bg-cyan-300 border-4 border-black transform rotate-2">
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-400 rounded-full border-2 border-black"></div>
                <Zap className="w-12 h-12 text-black mb-4" />
                <h3 className="font-black text-xl mb-2">BOLD PATTERNS</h3>
                <p className="text-black">Squiggles, zigzags, and geometric chaos create visual energy</p>
              </Card>
            </motion.div>
            <motion.div
              whileHover={{ rotate: 5, scale: 1.05 }}
              className="relative"
            >
              <Card className="p-6 bg-purple-300 border-4 border-black transform -rotate-2">
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-pink-400 transform rotate-45 border-2 border-black"></div>
                <Star className="w-12 h-12 text-black mb-4" />
                <h3 className="font-black text-xl mb-2">PLAYFUL COLORS</h3>
                <p className="text-black">Vibrant pastels clash with neons in unexpected harmony</p>
              </Card>
            </motion.div>
            <motion.div
              whileHover={{ rotate: -5, scale: 1.05 }}
              className="relative"
            >
              <Card className="p-6 bg-green-300 border-4 border-black transform rotate-1">
                <div className="absolute -bottom-4 -right-4 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[30px] border-b-red-500"></div>
                <Sparkles className="w-12 h-12 text-black mb-4" />
                <h3 className="font-black text-xl mb-2">80s NOSTALGIA</h3>
                <p className="text-black">Retro-futuristic vibes with a rebellious twist</p>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Color Palette */}
        <section className="space-y-6">
          <h2 className="text-3xl font-black text-black transform -rotate-1">COLOR EXPLOSION</h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {[
              { color: 'bg-pink-400', name: 'HOT PINK' },
              { color: 'bg-cyan-400', name: 'ELECTRIC BLUE' },
              { color: 'bg-yellow-300', name: 'SUNSHINE' },
              { color: 'bg-purple-400', name: 'PURPLE HAZE' },
              { color: 'bg-green-400', name: 'NEON GREEN' },
              { color: 'bg-red-500', name: 'CHERRY RED' }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, rotate: 10 }}
                className="relative"
              >
                <div className={`h-24 ${item.color} border-3 border-black transform ${index % 2 ? 'rotate-2' : '-rotate-2'}`}></div>
                <p className="font-black text-xs mt-2 text-center">{item.name}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Interactive Components */}
        <section className="space-y-8">
          <h2 className="text-3xl font-black text-black transform rotate-2">RADICAL COMPONENTS</h2>
          
          {/* Pattern Showcase */}
          <div className="space-y-4">
            <h3 className="text-2xl font-black transform -rotate-1">PATTERN PARTY</h3>
            <div className="bg-white p-8 border-4 border-black relative overflow-hidden">
              {/* Dynamic Pattern Background */}
              {activePattern === 'squiggles' && (
                <div className="absolute inset-0">
                  <svg className="w-full h-full" viewBox="0 0 400 300">
                    <path d="M50,150 Q100,50 150,150 T250,150 Q300,250 350,150" stroke="#FF1493" strokeWidth="8" fill="none" />
                    <path d="M50,100 Q150,200 250,100 T350,100" stroke="#00CED1" strokeWidth="6" fill="none" />
                  </svg>
                </div>
              )}
              {activePattern === 'geometric' && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-yellow-400 rotate-45 absolute top-10 left-10"></div>
                  <div className="w-24 h-24 bg-cyan-400 rounded-full absolute bottom-10 right-10"></div>
                  <div className="w-0 h-0 border-l-[40px] border-l-transparent border-r-[40px] border-r-transparent border-b-[60px] border-b-purple-500 absolute top-20 right-20"></div>
                </div>
              )}
              {activePattern === 'dots' && (
                <div className="absolute inset-0">
                  {[...Array(50)].map((_, i) => (
                    <div
                      key={i}
                      className={`absolute w-4 h-4 rounded-full ${
                        i % 3 === 0 ? 'bg-pink-400' : i % 3 === 1 ? 'bg-cyan-400' : 'bg-yellow-400'
                      }`}
                      style={{
                        left: `${(i % 10) * 10}%`,
                        top: `${Math.floor(i / 10) * 20}%`,
                      }}
                    />
                  ))}
                </div>
              )}
              
              <div className="relative z-10 flex gap-4 justify-center">
                <Button
                  onClick={() => setActivePattern('squiggles')}
                  className={`${
                    activePattern === 'squiggles' ? 'bg-pink-400' : 'bg-white'
                  } text-black border-3 border-black hover:bg-pink-300 font-black`}
                >
                  SQUIGGLES
                </Button>
                <Button
                  onClick={() => setActivePattern('geometric')}
                  className={`${
                    activePattern === 'geometric' ? 'bg-cyan-400' : 'bg-white'
                  } text-black border-3 border-black hover:bg-cyan-300 font-black`}
                >
                  GEOMETRIC
                </Button>
                <Button
                  onClick={() => setActivePattern('dots')}
                  className={`${
                    activePattern === 'dots' ? 'bg-yellow-400' : 'bg-white'
                  } text-black border-3 border-black hover:bg-yellow-300 font-black`}
                >
                  DOTS
                </Button>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="space-y-4">
            <h3 className="text-2xl font-black transform rotate-1">RADICAL BUTTONS</h3>
            <div className="flex flex-wrap gap-4">
              <motion.div whileHover={{ scale: 1.1, rotate: -5 }}>
                <Button className="bg-pink-400 text-black border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 font-black text-lg px-6 py-4 transform rotate-2">
                  TOTALLY RAD!
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1, rotate: 5 }}>
                <Button className="bg-cyan-400 text-black border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 font-black text-lg px-6 py-4 transform -rotate-2">
                  WICKED COOL
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1, rotate: -5 }}>
                <Button className="bg-yellow-300 text-black border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 font-black text-lg px-6 py-4 transform rotate-1">
                  GROOVY BABY
                </Button>
              </motion.div>
            </div>
          </div>

          {/* Cards */}
          <div className="space-y-4">
            <h3 className="text-2xl font-black transform -rotate-2">FUNKY CARDS</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div whileHover={{ scale: 1.05, rotate: 5 }}>
                <Card className="bg-purple-300 border-4 border-black p-6 relative transform -rotate-2">
                  <div className="absolute -top-6 -right-6 w-12 h-12 bg-yellow-400 rounded-full border-2 border-black"></div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-400 rotate-45 border-2 border-black"></div>
                  <h4 className="font-black text-xl mb-2">ELECTRIC DREAMS</h4>
                  <p className="text-black">Where neon meets pastel in a dance of visual chaos</p>
                </Card>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05, rotate: -5 }}>
                <Card className="bg-green-300 border-4 border-black p-6 relative transform rotate-2">
                  <div className="absolute -top-4 -left-6 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[30px] border-b-red-500"></div>
                  <div className="absolute -bottom-6 -right-4 w-14 h-14 bg-cyan-400 rounded-full border-2 border-black"></div>
                  <h4 className="font-black text-xl mb-2">RETRO FUTURE</h4>
                  <p className="text-black">Yesterday&apos;s tomorrow is today&apos;s aesthetic revolution</p>
                </Card>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05, rotate: 5 }}>
                <Card className="bg-yellow-300 border-4 border-black p-6 relative transform -rotate-1">
                  <div className="absolute -top-5 -right-5 w-10 h-10 bg-purple-400 border-2 border-black"></div>
                  <div className="absolute -bottom-3 -left-3 w-12 h-12 bg-pink-400 rounded-full border-2 border-black"></div>
                  <h4 className="font-black text-xl mb-2">PATTERN POWER</h4>
                  <p className="text-black">Embrace the chaos of squiggles and zigzags</p>
                </Card>
              </motion.div>
            </div>
          </div>

          {/* Form */}
          <div className="space-y-4">
            <h3 className="text-2xl font-black transform rotate-1">TUBULAR FORM</h3>
            <Card className="bg-white border-4 border-black p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-pink-400 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-cyan-400 rotate-45 translate-y-12 -translate-x-12"></div>
              
              <form className="relative z-10 space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="font-black text-lg">YOUR NAME</Label>
                  <Input
                    id="name"
                    placeholder="What&apos;s your name, dude?"
                    className="border-3 border-black bg-yellow-100 focus:bg-yellow-200 focus:ring-0 focus:border-black font-bold"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="font-black text-lg">EMAIL ADDRESS</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Drop your email here!"
                    className="border-3 border-black bg-pink-100 focus:bg-pink-200 focus:ring-0 focus:border-black font-bold"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="font-black text-lg">MESSAGE</Label>
                  <textarea
                    id="message"
                    placeholder="Tell us something rad!"
                    rows={4}
                    className="w-full border-3 border-black bg-cyan-100 focus:bg-cyan-200 p-3 focus:ring-0 focus:border-black focus:outline-none font-bold"
                  />
                </div>
                <Button className="w-full bg-purple-400 text-black border-3 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] font-black text-xl py-6 transform -rotate-1">
                  SEND IT! 🚀
                </Button>
              </form>
            </Card>
          </div>

          {/* Badges */}
          <div className="space-y-4">
            <h3 className="text-2xl font-black transform -rotate-1">BODACIOUS BADGES</h3>
            <div className="flex flex-wrap gap-4">
              <Badge className="bg-pink-400 text-black border-2 border-black font-black px-4 py-2 text-base transform rotate-2">NEW!</Badge>
              <Badge className="bg-cyan-400 text-black border-2 border-black font-black px-4 py-2 text-base transform -rotate-2">HOT!</Badge>
              <Badge className="bg-yellow-300 text-black border-2 border-black font-black px-4 py-2 text-base transform rotate-1">WOW!</Badge>
              <Badge className="bg-purple-400 text-black border-2 border-black font-black px-4 py-2 text-base transform -rotate-1">COOL!</Badge>
              <Badge className="bg-green-400 text-black border-2 border-black font-black px-4 py-2 text-base transform rotate-3">RAD!</Badge>
            </div>
          </div>
        </section>

        {/* Code Example */}
        <section className="space-y-4">
          <h2 className="text-3xl font-black text-black transform rotate-1">CODE VIBES</h2>
          <Card className="bg-white border-4 border-black p-8 relative overflow-hidden">
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-pink-400 rounded-full"></div>
            <pre className="relative z-10 text-sm font-mono overflow-x-auto">
              <code>{`// Memphis Button
<Button 
  className="
    bg-pink-400 text-black 
    border-3 border-black 
    shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] 
    hover:shadow-none 
    hover:translate-x-1 
    hover:translate-y-1 
    font-black text-lg 
    px-6 py-4 
    transform rotate-2
  "
>
  TOTALLY RAD!
</Button>

// Memphis Card
<Card className="
  bg-purple-300 
  border-4 border-black 
  p-6 relative 
  transform -rotate-2
">
  <div className="
    absolute -top-6 -right-6 
    w-12 h-12 
    bg-yellow-400 rounded-full 
    border-2 border-black
  "></div>
  <h4 className="font-black text-xl mb-2">
    ELECTRIC DREAMS
  </h4>
  <p className="text-black">
    Content here
  </p>
</Card>`}</code>
            </pre>
          </Card>
        </section>
      </main>
    </div>
  )
}
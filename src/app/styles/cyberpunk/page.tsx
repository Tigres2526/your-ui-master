'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Terminal, Zap, Database, Shield, AlertTriangle, Wifi, Cpu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'

export default function CyberpunkPage() {
  const [glitchText, setGlitchText] = useState('CYBERPUNK_2077')
  const [scanProgress, setScanProgress] = useState(0)
  const [terminalText, setTerminalText] = useState('')

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null

    // Glitch effect
    const glitchInterval = setInterval(() => {
      const originalText = 'CYBERPUNK_2077'
      const glitchPositions = [2, 5, 8, 11] // Fixed positions for glitching
      const glitchChars = ['X', '7', '#', 'Z', '@', '9', '_', 'A'] // Fixed chars to use
      let glitched = ''
      
      for (let i = 0; i < originalText.length; i++) {
        if (glitchPositions.includes(i)) {
          glitched += glitchChars[i % glitchChars.length]
        } else {
          glitched += originalText[i]
        }
      }
      setGlitchText(glitched)
      
      // Clear any existing timeout before creating a new one
      if (timeoutId) clearTimeout(timeoutId)
      timeoutId = setTimeout(() => setGlitchText(originalText), 100)
    }, 3000)

    // Scan progress
    const scanInterval = setInterval(() => {
      setScanProgress(prev => (prev + 1) % 101)
    }, 50)

    // Terminal typing effect
    const text = '> Initializing neural interface...\n> Connection established\n> Welcome to the Grid_'
    let index = 0
    const typeInterval = setInterval(() => {
      if (index < text.length) {
        setTerminalText(text.slice(0, index + 1))
        index++
      } else {
        index = 0
      }
    }, 50)

    return () => {
      clearInterval(glitchInterval)
      clearInterval(scanInterval)
      clearInterval(typeInterval)
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [])

  return (
    <div className="relative -m-6 p-6 min-h-[calc(100vh-4rem)] bg-black text-cyan-400 overflow-hidden">
      {/* Grid Background */}
      <div className="fixed inset-0 opacity-20 -z-10 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(cyan 1px, transparent 1px),
            linear-gradient(90deg, cyan 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Scan Line */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div
          className="h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50"
          style={{ 
            transform: `translateY(${scanProgress * 7}px)`,
            boxShadow: '0 0 20px cyan'
          }}
        ></div>
      </div>

      {/* Page Title */}
      <div className="relative z-10 mb-8">
        <h1 className="text-4xl font-mono font-bold relative">
          <span className="relative z-10">{glitchText}</span>
          <span className="absolute inset-0 text-pink-500 animate-glitch-1">{glitchText}</span>
          <span className="absolute inset-0 text-cyan-300 animate-glitch-2">{glitchText}</span>
        </h1>
      </div>

      <main className="relative z-10 max-w-6xl mx-auto p-6 space-y-12">
        {/* Design Principles */}
        <section className="space-y-6">
          <h2 className="text-3xl font-mono font-bold text-pink-500 flex items-center gap-2">
            <Terminal className="w-8 h-8" />
            <span className="animate-pulse">&gt;&gt; DESIGN_PROTOCOL</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-black/50 border-2 border-cyan-400/50 p-6 relative overflow-hidden group hover:border-pink-500/50 transition-colors">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <Zap className="w-12 h-12 text-yellow-400 mb-4 animate-pulse" />
              <h3 className="font-mono text-xl text-cyan-300 mb-2">NEON_GLOW</h3>
              <p className="text-cyan-400/80 font-mono text-sm">High contrast neon colors against dark backgrounds create electric atmosphere</p>
            </Card>
            <Card className="bg-black/50 border-2 border-cyan-400/50 p-6 relative overflow-hidden group hover:border-pink-500/50 transition-colors">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <Database className="w-12 h-12 text-pink-500 mb-4 animate-pulse" />
              <h3 className="font-mono text-xl text-cyan-300 mb-2">GLITCH_FX</h3>
              <p className="text-cyan-400/80 font-mono text-sm">Digital artifacts and corruption effects simulate system malfunctions</p>
            </Card>
            <Card className="bg-black/50 border-2 border-cyan-400/50 p-6 relative overflow-hidden group hover:border-pink-500/50 transition-colors">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <Shield className="w-12 h-12 text-purple-500 mb-4 animate-pulse" />
              <h3 className="font-mono text-xl text-cyan-300 mb-2">TECH_NOIR</h3>
              <p className="text-cyan-400/80 font-mono text-sm">Dark dystopian aesthetic merged with advanced technology interfaces</p>
            </Card>
          </div>
        </section>

        {/* Color Palette */}
        <section className="space-y-6">
          <h2 className="text-3xl font-mono font-bold text-pink-500">&gt;&gt; COLOR_MATRIX</h2>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {[
              { color: 'bg-cyan-400', name: 'CYAN', hex: '#00FFFF' },
              { color: 'bg-pink-500', name: 'PINK', hex: '#EC4899' },
              { color: 'bg-purple-500', name: 'PURPLE', hex: '#A855F7' },
              { color: 'bg-yellow-400', name: 'YELLOW', hex: '#FACC15' },
              { color: 'bg-green-400', name: 'GREEN', hex: '#4ADE80' },
              { color: 'bg-red-500', name: 'RED', hex: '#EF4444' }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="relative group"
              >
                <div className={`h-24 ${item.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="font-mono text-xs">{item.hex}</span>
                  </div>
                </div>
                <div className="mt-2 font-mono text-sm text-center text-cyan-400">
                  <span className="group-hover:text-pink-500 transition-colors">{item.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Interactive Components */}
        <section className="space-y-8">
          <h2 className="text-3xl font-mono font-bold text-pink-500">&gt;&gt; INTERFACE_MODULES</h2>
          
          {/* Terminal Interface */}
          <div className="space-y-4">
            <h3 className="text-xl font-mono text-cyan-300">TERMINAL_v2.0</h3>
            <Card className="bg-black border-2 border-cyan-400/50 p-6 font-mono relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-cyan-400/20 to-transparent"></div>
              <div className="space-y-2">
                <div className="text-green-400 animate-pulse">SYSTEM ONLINE</div>
                <div className="text-cyan-400 whitespace-pre-wrap">{terminalText}</div>
                <div className="flex items-center gap-2 mt-4">
                  <span className="text-pink-500">&gt;</span>
                  <Input
                    placeholder="Enter command..."
                    className="bg-transparent border-cyan-400/50 text-cyan-400 placeholder:text-cyan-400/50 font-mono focus:border-pink-500 focus:ring-pink-500/20"
                  />
                </div>
              </div>
            </Card>
          </div>

          {/* Buttons */}
          <div className="space-y-4">
            <h3 className="text-xl font-mono text-cyan-300">ACTION_TRIGGERS</h3>
            <div className="flex flex-wrap gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-mono px-6 py-3 relative overflow-hidden group">
                  <span className="relative z-10">EXECUTE</span>
                  <div className="absolute inset-0 bg-cyan-400 transform -translate-x-full group-hover:translate-x-0 transition-transform"></div>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-pink-500 text-black border-2 border-pink-500 hover:bg-transparent hover:text-pink-500 font-mono px-6 py-3 shadow-[0_0_20px_rgba(236,72,153,0.5)] hover:shadow-[0_0_30px_rgba(236,72,153,0.8)]">
                  <AlertTriangle className="w-4 h-4 mr-2" />
                  DANGER
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-transparent border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-black font-mono px-6 py-3 relative">
                  <span className="animate-pulse">UPLOAD</span>
                </Button>
              </motion.div>
            </div>
          </div>

          {/* Data Cards */}
          <div className="space-y-4">
            <h3 className="text-xl font-mono text-cyan-300">DATA_STREAMS</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-black/50 border-2 border-cyan-400/50 p-6 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-2">
                  <Wifi className="w-6 h-6 text-green-400 animate-pulse" />
                </div>
                <h4 className="font-mono text-xl text-pink-500 mb-4">NEURAL_LINK</h4>
                <div className="space-y-3">
                  <div className="flex justify-between font-mono text-sm">
                    <span className="text-cyan-400">Bandwidth:</span>
                    <span className="text-green-400">2.4TB/s</span>
                  </div>
                  <Progress value={75} className="h-2 bg-black border border-cyan-400/50 [&>div]:bg-gradient-to-r [&>div]:from-cyan-400 [&>div]:to-pink-500" />
                  <div className="flex justify-between font-mono text-sm">
                    <span className="text-cyan-400">Latency:</span>
                    <span className="text-yellow-400">0.3ms</span>
                  </div>
                </div>
              </Card>
              
              <Card className="bg-black/50 border-2 border-cyan-400/50 p-6 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-2">
                  <Cpu className="w-6 h-6 text-purple-500 animate-pulse" />
                </div>
                <h4 className="font-mono text-xl text-pink-500 mb-4">SYSTEM_CORE</h4>
                <div className="space-y-3">
                  <div className="flex justify-between font-mono text-sm">
                    <span className="text-cyan-400">CPU Load:</span>
                    <span className="text-orange-400">47%</span>
                  </div>
                  <Progress value={47} className="h-2 bg-black border border-cyan-400/50 [&>div]:bg-gradient-to-r [&>div]:from-purple-500 [&>div]:to-orange-500" />
                  <div className="flex justify-between font-mono text-sm">
                    <span className="text-cyan-400">Memory:</span>
                    <span className="text-green-400">32GB/64GB</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Form */}
          <div className="space-y-4">
            <h3 className="text-xl font-mono text-cyan-300">ACCESS_PORTAL</h3>
            <Card className="bg-black/80 border-2 border-cyan-400/50 p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-transparent to-cyan-500/5"></div>
              <form className="relative z-10 space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="username" className="font-mono text-cyan-400">USER_ID</Label>
                  <Input
                    id="username"
                    placeholder="Enter user identification..."
                    className="bg-black/50 border-cyan-400/50 text-cyan-400 placeholder:text-cyan-400/30 font-mono focus:border-pink-500 focus:ring-pink-500/20"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password" className="font-mono text-cyan-400">ACCESS_CODE</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter security credentials..."
                    className="bg-black/50 border-cyan-400/50 text-cyan-400 placeholder:text-cyan-400/30 font-mono focus:border-pink-500 focus:ring-pink-500/20"
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-cyan-500 to-pink-500 text-black font-mono font-bold py-6 hover:shadow-[0_0_30px_rgba(0,255,255,0.5)] transition-all">
                  INITIALIZE CONNECTION
                </Button>
              </form>
            </Card>
          </div>

          {/* Badges */}
          <div className="space-y-4">
            <h3 className="text-xl font-mono text-cyan-300">STATUS_INDICATORS</h3>
            <div className="flex flex-wrap gap-4">
              <Badge className="bg-green-500/20 border border-green-500 text-green-400 font-mono px-4 py-2">
                <span className="animate-pulse">● ONLINE</span>
              </Badge>
              <Badge className="bg-yellow-500/20 border border-yellow-500 text-yellow-400 font-mono px-4 py-2">
                ⚠ WARNING
              </Badge>
              <Badge className="bg-red-500/20 border border-red-500 text-red-400 font-mono px-4 py-2">
                ✕ CRITICAL
              </Badge>
              <Badge className="bg-purple-500/20 border border-purple-500 text-purple-400 font-mono px-4 py-2">
                ◆ ENCRYPTED
              </Badge>
              <Badge className="bg-cyan-500/20 border border-cyan-500 text-cyan-400 font-mono px-4 py-2">
                ↻ SYNCING
              </Badge>
            </div>
          </div>
        </section>

        {/* Code Example */}
        <section className="space-y-4">
          <h2 className="text-3xl font-mono font-bold text-pink-500">&gt;&gt; SOURCE_CODE</h2>
          <Card className="bg-black border-2 border-cyan-400/50 p-6 font-mono relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent"></div>
            <pre className="text-sm text-cyan-400 overflow-x-auto">
              <code>{`// Cyberpunk Button
<Button 
  className="
    bg-transparent 
    border-2 border-cyan-400 
    text-cyan-400 
    hover:bg-cyan-400 
    hover:text-black 
    font-mono px-6 py-3 
    relative overflow-hidden 
    group
  "
>
  <span className="relative z-10">EXECUTE</span>
  <div className="
    absolute inset-0 
    bg-cyan-400 
    transform -translate-x-full 
    group-hover:translate-x-0 
    transition-transform
  "></div>
</Button>

// Glitch Text
<h1 className="relative">
  <span className="relative z-10">{text}</span>
  <span className="
    absolute inset-0 
    text-pink-500 
    animate-glitch-1
  ">{text}</span>
  <span className="
    absolute inset-0 
    text-cyan-300 
    animate-glitch-2
  ">{text}</span>
</h1>`}</code>
            </pre>
          </Card>
        </section>
      </main>

      <style jsx>{`
        @keyframes glitch-1 {
          0%, 100% { clip-path: inset(0 0 0 0); transform: translate(0); }
          20% { clip-path: inset(20% 0 30% 0); transform: translate(-2px, 2px); }
          40% { clip-path: inset(50% 0 20% 0); transform: translate(2px, -2px); }
          60% { clip-path: inset(10% 0 60% 0); transform: translate(-1px, 1px); }
          80% { clip-path: inset(80% 0 5% 0); transform: translate(1px, -1px); }
        }
        
        @keyframes glitch-2 {
          0%, 100% { clip-path: inset(0 0 0 0); transform: translate(0); }
          20% { clip-path: inset(60% 0 10% 0); transform: translate(2px, 1px); }
          40% { clip-path: inset(20% 0 60% 0); transform: translate(-2px, 2px); }
          60% { clip-path: inset(30% 0 40% 0); transform: translate(1px, -2px); }
          80% { clip-path: inset(5% 0 80% 0); transform: translate(-1px, -1px); }
        }

        .animate-glitch-1 {
          animation: glitch-1 0.3s infinite;
        }
        
        .animate-glitch-2 {
          animation: glitch-2 0.3s infinite reverse;
        }
      `}</style>
    </div>
  )
}
'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ChevronLeft, Palette, Sparkles, Moon, Sun, Image, Settings, Heart, Share2, Bookmark } from 'lucide-react'
import Link from 'next/link'

export default function MaterialYouPage() {
  const [selectedTheme, setSelectedTheme] = useState('ocean')
  const [isDark, setIsDark] = useState(false)
  const [dynamicColor, setDynamicColor] = useState('#1976D2')

  const themes = {
    ocean: {
      primary: '#1976D2',
      secondary: '#90CAF9',
      tertiary: '#004BA0',
      surface: '#E3F2FD',
      name: 'Ocean Blue'
    },
    forest: {
      primary: '#2E7D32',
      secondary: '#81C784',
      tertiary: '#1B5E20',
      surface: '#E8F5E9',
      name: 'Forest Green'
    },
    sunset: {
      primary: '#F57C00',
      secondary: '#FFB74D',
      tertiary: '#E65100',
      surface: '#FFF3E0',
      name: 'Sunset Orange'
    },
    lavender: {
      primary: '#7B1FA2',
      secondary: '#BA68C8',
      tertiary: '#4A148C',
      surface: '#F3E5F5',
      name: 'Lavender Purple'
    }
  }

  const currentTheme = themes[selectedTheme as keyof typeof themes]

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Dynamic Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full blur-3xl opacity-20"
          style={{ backgroundColor: currentTheme.primary }}
          animate={{
            x: ['-25%', '100%'],
            y: ['-25%', '100%'],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut'
          }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full blur-3xl opacity-15"
          style={{ backgroundColor: currentTheme.secondary }}
          animate={{
            x: ['100%', '-25%'],
            y: ['100%', '-25%'],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut'
          }}
        />
      </div>

      {/* Header */}
      <header className={`relative z-10 p-6 ${isDark ? 'bg-gray-900/80' : 'bg-white/80'} backdrop-blur-md border-b ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/styles" className={`inline-flex items-center gap-2 ${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'} transition-colors`}>
            <ChevronLeft className="w-5 h-5" />
            <span className="font-medium">Back to Styles</span>
          </Link>
          <h1 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Material You</h1>
        </div>
      </header>

      <main className="relative z-10 max-w-6xl mx-auto p-6 space-y-12">
        {/* Design Principles */}
        <section className="space-y-6">
          <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} flex items-center gap-2`}>
            <Palette className="w-8 h-8" style={{ color: currentTheme.primary }} />
            Design Principles
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card className={`p-6 ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white'} rounded-3xl`}>
                <div 
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: currentTheme.primary + '20' }}
                >
                  <Sparkles className="w-6 h-6" style={{ color: currentTheme.primary }} />
                </div>
                <h3 className={`font-semibold text-lg ${isDark ? 'text-white' : 'text-gray-900'} mb-2`}>Personal Expression</h3>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Dynamic color extraction from wallpapers creates unique, personalized themes
                </p>
              </Card>
            </motion.div>
            <motion.div whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card className={`p-6 ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white'} rounded-3xl`}>
                <div 
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: currentTheme.secondary + '20' }}
                >
                  <Image className="w-6 h-6" style={{ color: currentTheme.secondary }} />
                </div>
                <h3 className={`font-semibold text-lg ${isDark ? 'text-white' : 'text-gray-900'} mb-2`}>Adaptive Design</h3>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  UI adapts to user preferences with harmonious color palettes
                </p>
              </Card>
            </motion.div>
            <motion.div whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card className={`p-6 ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white'} rounded-3xl`}>
                <div 
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: currentTheme.tertiary + '20' }}
                >
                  <Settings className="w-6 h-6" style={{ color: currentTheme.tertiary }} />
                </div>
                <h3 className={`font-semibold text-lg ${isDark ? 'text-white' : 'text-gray-900'} mb-2`}>Unified System</h3>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Consistent design language across all apps and surfaces
                </p>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Theme Selector */}
        <section className="space-y-6">
          <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Dynamic Themes</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(themes).map(([key, theme]) => (
              <motion.button
                key={key}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedTheme(key)}
                className={`relative p-4 rounded-3xl border-2 transition-all ${
                  selectedTheme === key 
                    ? 'border-gray-900 dark:border-white' 
                    : 'border-transparent'
                }`}
                style={{ backgroundColor: isDark ? theme.tertiary : theme.surface }}
              >
                <div className="flex items-center justify-center mb-3">
                  <div className="w-16 h-16 rounded-full" style={{ backgroundColor: theme.primary }}></div>
                  <div className="w-12 h-12 rounded-full -ml-4" style={{ backgroundColor: theme.secondary }}></div>
                </div>
                <p className={`text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {theme.name}
                </p>
              </motion.button>
            ))}
          </div>
        </section>

        {/* Theme Controls */}
        <section className="space-y-6">
          <Card className={`p-6 ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white'} rounded-3xl`}>
            <div className="flex items-center justify-between mb-6">
              <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Theme Settings
              </h3>
              <div className="flex items-center gap-2">
                <Sun className="w-5 h-5 text-gray-500" />
                <Switch
                  checked={isDark}
                  onCheckedChange={setIsDark}
                  className="data-[state=checked]:bg-gray-900"
                />
                <Moon className="w-5 h-5 text-gray-500" />
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <Label className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Dynamic Color
                </Label>
                <div className="flex items-center gap-4 mt-2">
                  <input
                    type="color"
                    value={dynamicColor}
                    onChange={(e) => setDynamicColor(e.target.value)}
                    className="w-16 h-16 rounded-2xl border-2 border-gray-300 cursor-pointer"
                  />
                  <span className={`font-mono text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {dynamicColor}
                  </span>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Interactive Components */}
        <section className="space-y-8">
          <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Components</h2>
          
          {/* Buttons */}
          <div className="space-y-4">
            <h3 className={`text-lg font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Buttons</h3>
            <div className="flex flex-wrap gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  className="px-8 py-6 rounded-full text-white font-medium shadow-lg hover:shadow-xl transition-all"
                  style={{ 
                    backgroundColor: currentTheme.primary,
                    boxShadow: `0 4px 20px ${currentTheme.primary}40`
                  }}
                >
                  Filled Button
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  variant="outline"
                  className="px-8 py-6 rounded-full font-medium border-2 transition-all"
                  style={{ 
                    borderColor: currentTheme.primary,
                    color: currentTheme.primary
                  }}
                >
                  Outlined Button
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  className="px-8 py-6 rounded-full font-medium transition-all"
                  style={{ 
                    backgroundColor: currentTheme.surface,
                    color: currentTheme.primary
                  }}
                >
                  Tonal Button
                </Button>
              </motion.div>
            </div>
          </div>

          {/* Cards */}
          <div className="space-y-4">
            <h3 className={`text-lg font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Material Cards</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div whileHover={{ y: -8 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white'} rounded-3xl overflow-hidden`}>
                  <div className="h-48 relative overflow-hidden" style={{ backgroundColor: currentTheme.surface }}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-32 rounded-full" style={{ backgroundColor: currentTheme.primary + '40' }}></div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'} mb-2`}>
                      Dynamic Card
                    </h4>
                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-4`}>
                      Cards adapt to your chosen color scheme for a cohesive experience.
                    </p>
                    <div className="flex gap-2">
                      <Button size="icon" variant="ghost" className="rounded-full">
                        <Heart className="w-5 h-5" style={{ color: currentTheme.primary }} />
                      </Button>
                      <Button size="icon" variant="ghost" className="rounded-full">
                        <Share2 className="w-5 h-5" style={{ color: currentTheme.primary }} />
                      </Button>
                      <Button size="icon" variant="ghost" className="rounded-full">
                        <Bookmark className="w-5 h-5" style={{ color: currentTheme.primary }} />
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>

              <motion.div whileHover={{ y: -8 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card 
                  className="rounded-3xl overflow-hidden"
                  style={{ backgroundColor: currentTheme.primary }}
                >
                  <div className="p-6 text-white">
                    <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center mb-4">
                      <Sparkles className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-semibold mb-2">Elevated Card</h4>
                    <p className="text-sm opacity-90">
                      Primary colored cards create visual hierarchy and draw attention.
                    </p>
                  </div>
                </Card>
              </motion.div>

              <motion.div whileHover={{ y: -8 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card 
                  className="rounded-3xl overflow-hidden border-2"
                  style={{ 
                    backgroundColor: isDark ? 'transparent' : currentTheme.surface,
                    borderColor: currentTheme.primary + '40'
                  }}
                >
                  <div className="p-6">
                    <div 
                      className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
                      style={{ backgroundColor: currentTheme.primary + '20' }}
                    >
                      <Palette className="w-6 h-6" style={{ color: currentTheme.primary }} />
                    </div>
                    <h4 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'} mb-2`}>
                      Outlined Card
                    </h4>
                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      Subtle borders with tinted surfaces maintain visual consistency.
                    </p>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>

          {/* Form Elements */}
          <div className="space-y-4">
            <h3 className={`text-lg font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Form Elements</h3>
            <Card className={`p-8 ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white'} rounded-3xl`}>
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Name</Label>
                  <Input
                    placeholder="Enter your name"
                    className={`rounded-2xl border-2 px-6 py-3 ${isDark ? 'bg-gray-900 border-gray-700' : 'bg-gray-50'} focus:border-current transition-colors`}
                    style={{ '--tw-ring-color': currentTheme.primary } as React.CSSProperties}
                  />
                </div>
                <div className="space-y-2">
                  <Label className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Email</Label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    className={`rounded-2xl border-2 px-6 py-3 ${isDark ? 'bg-gray-900 border-gray-700' : 'bg-gray-50'} focus:border-current transition-colors`}
                    style={{ '--tw-ring-color': currentTheme.primary } as React.CSSProperties}
                  />
                </div>
                <Button 
                  className="w-full py-6 rounded-full text-white font-medium shadow-lg hover:shadow-xl transition-all"
                  style={{ 
                    backgroundColor: currentTheme.primary,
                    boxShadow: `0 4px 20px ${currentTheme.primary}40`
                  }}
                >
                  Submit
                </Button>
              </form>
            </Card>
          </div>

          {/* Chips/Badges */}
          <div className="space-y-4">
            <h3 className={`text-lg font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Chips</h3>
            <div className="flex flex-wrap gap-3">
              <Badge 
                className="px-4 py-2 rounded-full font-medium"
                style={{ 
                  backgroundColor: currentTheme.surface,
                  color: currentTheme.primary
                }}
              >
                Suggestion Chip
              </Badge>
              <Badge 
                className="px-4 py-2 rounded-full font-medium border-2"
                style={{ 
                  backgroundColor: 'transparent',
                  borderColor: currentTheme.primary,
                  color: currentTheme.primary
                }}
              >
                Filter Chip
              </Badge>
              <Badge 
                className="px-4 py-2 rounded-full text-white font-medium"
                style={{ backgroundColor: currentTheme.primary }}
              >
                Action Chip
              </Badge>
              <Badge 
                className="px-4 py-2 rounded-full font-medium"
                style={{ 
                  backgroundColor: currentTheme.secondary,
                  color: currentTheme.tertiary
                }}
              >
                Input Chip
              </Badge>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className={`text-lg font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Navigation</h3>
            <Tabs defaultValue="home" className="w-full">
              <TabsList className={`w-full ${isDark ? 'bg-gray-800' : 'bg-gray-100'} p-2 rounded-2xl`}>
                <TabsTrigger 
                  value="home" 
                  className="flex-1 rounded-xl data-[state=active]:text-white data-[state=active]:shadow-lg transition-all"
                  style={{
                    '--tw-bg-opacity': 1,
                    backgroundColor: `var(--tw-bg-opacity) ${currentTheme.primary}`
                  } as React.CSSProperties}
                >
                  Home
                </TabsTrigger>
                <TabsTrigger 
                  value="explore" 
                  className="flex-1 rounded-xl data-[state=active]:text-white data-[state=active]:shadow-lg transition-all"
                  style={{
                    '--tw-bg-opacity': 1,
                    backgroundColor: `var(--tw-bg-opacity) ${currentTheme.primary}`
                  } as React.CSSProperties}
                >
                  Explore
                </TabsTrigger>
                <TabsTrigger 
                  value="profile" 
                  className="flex-1 rounded-xl data-[state=active]:text-white data-[state=active]:shadow-lg transition-all"
                  style={{
                    '--tw-bg-opacity': 1,
                    backgroundColor: `var(--tw-bg-opacity) ${currentTheme.primary}`
                  } as React.CSSProperties}
                >
                  Profile
                </TabsTrigger>
              </TabsList>
              <TabsContent value="home" className="mt-6">
                <Card className={`p-6 ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white'} rounded-2xl`}>
                  <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    Material You brings personal expression to the forefront of design.
                  </p>
                </Card>
              </TabsContent>
              <TabsContent value="explore" className="mt-6">
                <Card className={`p-6 ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white'} rounded-2xl`}>
                  <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    Discover new themes and color combinations that match your style.
                  </p>
                </Card>
              </TabsContent>
              <TabsContent value="profile" className="mt-6">
                <Card className={`p-6 ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white'} rounded-2xl`}>
                  <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    Customize your experience with dynamic themes and preferences.
                  </p>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Code Example */}
        <section className="space-y-4">
          <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Code Example</h2>
          <Card className={`p-6 ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white'} rounded-3xl`}>
            <pre className={`text-sm overflow-x-auto ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              <code>{`// Material You Button
<Button 
  className="
    px-8 py-6 
    rounded-full 
    text-white font-medium 
    shadow-lg hover:shadow-xl 
    transition-all
  "
  style={{ 
    backgroundColor: theme.primary,
    boxShadow: \`0 4px 20px \${theme.primary}40\`
  }}
>
  Filled Button
</Button>

// Dynamic Card
<Card 
  className="rounded-3xl overflow-hidden"
  style={{ backgroundColor: theme.primary }}
>
  <div className="p-6 text-white">
    <h4 className="text-xl font-semibold mb-2">
      Dynamic Theme
    </h4>
    <p className="text-sm opacity-90">
      Colors adapt to user preferences
    </p>
  </div>
</Card>

// Adaptive Chip
<Badge 
  className="px-4 py-2 rounded-full font-medium"
  style={{ 
    backgroundColor: theme.surface,
    color: theme.primary
  }}
>
  Material Chip
</Badge>`}</code>
            </pre>
          </Card>
        </section>
      </main>
    </div>
  )
}
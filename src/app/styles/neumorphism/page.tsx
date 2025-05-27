"use client"

import { useState } from "react"
import { ComponentShowcase } from "@/components/showcase/component-showcase"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Heart, 
  Share2, 
  Settings, 
  Search,
  Play,
  SkipForward,
  SkipBack,
  Volume2
} from "lucide-react"
import { cn } from "@/lib/utils"
import { AIPromptGenerator } from "@/components/ai-prompt-generator"
import { NeuShowcase } from "@/components/neumorphism/neu-showcase"
import { DesignTokenGenerator } from "@/components/design-token-generator"
import { PatternLibrary } from "@/components/pattern-library"
import { ExportManager } from "@/components/export-manager"
import { NeumorphismPlayground } from "@/components/playground/neumorphism-playground"
import { ImplementationGuide } from "@/components/implementation-guide"
import { ProjectStarter } from "@/components/project-starter"

const neuBase = "bg-[#e0e5ec]"
const neuShadowRaised = "shadow-[9px_9px_16px_#a3b1c6,-9px_-9px_16px_#ffffff]"
const neuShadowPressed = "shadow-[inset_5px_5px_10px_#a3b1c6,inset_-5px_-5px_10px_#ffffff]"
const neuShadowFloat = "shadow-[20px_20px_35px_#a3b1c6,-20px_-20px_35px_#ffffff]"

export default function NeumorphismPage() {
  const [isPressed, setIsPressed] = useState(false)
  const [sliderValue, setSliderValue] = useState([50])
  const [switchValue, setSwitchValue] = useState(false)

  return (
    <div className="space-y-12">
      {/* Page Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-600 to-slate-800 bg-clip-text text-transparent">
          Neumorphism
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Soft UI design that creates depth through light and shadow. Perfect for modern, minimal interfaces 
          that need a tactile, physical feel without heavy visual elements.
        </p>
      </div>

      {/* Design Principles */}
      <Card className={cn(neuBase, neuShadowRaised, "border-0")}>
        <CardHeader>
          <CardTitle>Design Principles</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { icon: <Heart className="h-5 w-5" />, title: "Soft Shadows", desc: "Dual light sources create depth" },
            { icon: <Settings className="h-5 w-5" />, title: "Monochromatic", desc: "Single color with tonal variations" },
            { icon: <Share2 className="h-5 w-5" />, title: "Rounded Corners", desc: "Smooth edges for organic feel" }
          ].map((principle, i) => (
            <div key={i} className={cn(neuBase, neuShadowPressed, "p-4 rounded-xl")}>
              <div className="flex items-center gap-3 mb-2">
                <div className={cn(neuBase, neuShadowRaised, "p-2 rounded-lg")}>
                  {principle.icon}
                </div>
                <h3 className="font-semibold">{principle.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground">{principle.desc}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Button Showcase */}
      <ComponentShowcase
        title="Neumorphic Buttons"
        description="Buttons with soft shadows that respond to interaction states"
        category="Buttons"
        component={
          <div className="flex gap-4">
            <button 
              className={cn(
                neuBase,
                isPressed ? neuShadowPressed : neuShadowRaised,
                "px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-[6px_6px_12px_#a3b1c6,-6px_-6px_12px_#ffffff]"
              )}
              onMouseDown={() => setIsPressed(true)}
              onMouseUp={() => setIsPressed(false)}
              onMouseLeave={() => setIsPressed(false)}
            >
              Click Me
            </button>
          </div>
        }
        code={{
          react: `<button 
  className="bg-[#e0e5ec] shadow-[9px_9px_16px_#a3b1c6,-9px_-9px_16px_#ffffff] 
             hover:shadow-[6px_6px_12px_#a3b1c6,-6px_-6px_12px_#ffffff]
             active:shadow-[inset_5px_5px_10px_#a3b1c6,inset_-5px_-5px_10px_#ffffff]
             px-6 py-3 rounded-xl font-medium transition-all duration-300"
>
  Click Me
</button>`,
          css: `.neu-button {
  background: #e0e5ec;
  box-shadow: 9px 9px 16px #a3b1c6, -9px -9px 16px #ffffff;
  border-radius: 12px;
  padding: 12px 24px;
  border: none;
  font-weight: 500;
  transition: all 0.3s ease;
}

.neu-button:hover {
  box-shadow: 6px 6px 12px #a3b1c6, -6px -6px 12px #ffffff;
}

.neu-button:active {
  box-shadow: inset 5px 5px 10px #a3b1c6, inset -5px -5px 10px #ffffff;
}`
        }}
        variants={[
          {
            name: "Primary",
            component: <button className={cn(neuBase, neuShadowRaised, "px-6 py-3 rounded-xl font-medium text-blue-600")}>Primary</button>,
            code: "Primary variant with blue text"
          },
          {
            name: "Icon",
            component: (
              <button className={cn(neuBase, neuShadowRaised, "p-3 rounded-xl")}>
                <Heart className="h-5 w-5" />
              </button>
            ),
            code: "Icon-only button"
          },
          {
            name: "Pill",
            component: <button className={cn(neuBase, neuShadowRaised, "px-8 py-3 rounded-full font-medium")}>Pill Button</button>,
            code: "Pill-shaped button"
          }
        ]}
        sizes={[
          {
            name: "Small",
            component: <button className={cn(neuBase, neuShadowRaised, "px-4 py-2 rounded-lg text-sm")}>Small</button>
          },
          {
            name: "Medium",
            component: <button className={cn(neuBase, neuShadowRaised, "px-6 py-3 rounded-xl")}>Medium</button>
          },
          {
            name: "Large",
            component: <button className={cn(neuBase, neuShadowRaised, "px-8 py-4 rounded-xl text-lg")}>Large</button>
          }
        ]}
        states={[
          {
            name: "Default",
            component: <button className={cn(neuBase, neuShadowRaised, "px-6 py-3 rounded-xl")}>Default</button>
          },
          {
            name: "Pressed",
            component: <button className={cn(neuBase, neuShadowPressed, "px-6 py-3 rounded-xl")}>Pressed</button>
          },
          {
            name: "Disabled",
            component: <button className={cn(neuBase, "shadow-[5px_5px_10px_#a3b1c6,-5px_-5px_10px_#ffffff] opacity-50", "px-6 py-3 rounded-xl")} disabled>Disabled</button>
          }
        ]}
      />

      {/* Card Showcase */}
      <ComponentShowcase
        title="Neumorphic Cards"
        description="Content containers with varying depth levels"
        category="Cards"
        component={
          <Card className={cn(neuBase, neuShadowRaised, "border-0 w-full max-w-sm")}>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card description goes here</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">This is a neumorphic card with soft shadows creating a raised appearance.</p>
            </CardContent>
          </Card>
        }
        code={{
          react: `<Card className="bg-[#e0e5ec] shadow-[12px_12px_20px_#a3b1c6,-12px_-12px_20px_#ffffff] border-0">
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content goes here</p>
  </CardContent>
</Card>`
        }}
        variants={[
          {
            name: "Raised",
            component: (
              <div className={cn(neuBase, neuShadowRaised, "p-4 rounded-xl w-48")}>
                <h4 className="font-semibold mb-2">Raised</h4>
                <p className="text-sm text-muted-foreground">Default raised style</p>
              </div>
            ),
            code: "Standard raised card"
          },
          {
            name: "Inset",
            component: (
              <div className={cn(neuBase, neuShadowPressed, "p-4 rounded-xl w-48")}>
                <h4 className="font-semibold mb-2">Inset</h4>
                <p className="text-sm text-muted-foreground">Pressed inward style</p>
              </div>
            ),
            code: "Inset/pressed card"
          },
          {
            name: "Floating",
            component: (
              <div className={cn(neuBase, neuShadowFloat, "p-4 rounded-xl w-48")}>
                <h4 className="font-semibold mb-2">Floating</h4>
                <p className="text-sm text-muted-foreground">High elevation style</p>
              </div>
            ),
            code: "Floating card with stronger shadows"
          }
        ]}
      />

      {/* Form Elements */}
      <ComponentShowcase
        title="Neumorphic Form Elements"
        description="Input fields and form controls with neumorphic styling"
        category="Forms"
        component={
          <div className="space-y-4 w-full max-w-sm">
            <div className="space-y-2">
              <Label htmlFor="neu-input">Username</Label>
              <Input 
                id="neu-input"
                placeholder="Enter username"
                className={cn(
                  neuBase, 
                  neuShadowPressed,
                  "border-0 placeholder:text-muted-foreground/50"
                )}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="neu-search">Search</Label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  id="neu-search"
                  placeholder="Search..."
                  className={cn(
                    neuBase, 
                    neuShadowPressed,
                    "border-0 pl-10"
                  )}
                />
              </div>
            </div>
          </div>
        }
        code={{
          react: `<Input 
  placeholder="Enter text"
  className="bg-[#e0e5ec] shadow-[inset_5px_5px_10px_#a3b1c6,inset_-5px_-5px_10px_#ffffff] 
             border-0 focus:shadow-[inset_3px_3px_6px_#a3b1c6,inset_-3px_-3px_6px_#ffffff]"
/>`
        }}
        controls={[
          {
            id: "switch-control",
            label: "Enable notifications",
            type: "switch",
            value: switchValue,
            onChange: (value) => setSwitchValue(value as boolean)
          }
        ]}
      />

      {/* Interactive Components */}
      <ComponentShowcase
        title="Interactive Elements"
        description="Sliders, toggles, and other interactive neumorphic components"
        category="Interactive"
        component={
          <div className="space-y-6 w-full max-w-md">
            {/* Toggle Switch */}
            <div className="flex items-center justify-between">
              <Label>Dark Mode</Label>
              <div className={cn(
                neuBase,
                switchValue ? neuShadowPressed : neuShadowRaised,
                "relative w-14 h-7 rounded-full transition-all duration-300 cursor-pointer"
              )}
              onClick={() => setSwitchValue(!switchValue)}
              >
                <div className={cn(
                  "absolute top-1 transition-all duration-300",
                  switchValue ? "left-8" : "left-1",
                  neuBase,
                  neuShadowRaised,
                  "w-5 h-5 rounded-full"
                )} />
              </div>
            </div>

            {/* Slider */}
            <div className="space-y-2">
              <div className="flex justify-between">
                <Label>Volume</Label>
                <span className="text-sm text-muted-foreground">{sliderValue[0]}%</span>
              </div>
              <div className={cn(neuBase, neuShadowPressed, "p-2 rounded-full")}>
                <Slider 
                  value={sliderValue} 
                  onValueChange={setSliderValue}
                  max={100}
                  step={1}
                  className="[&_[role=slider]]:bg-[#e0e5ec] [&_[role=slider]]:shadow-[3px_3px_6px_#a3b1c6,-3px_-3px_6px_#ffffff] [&_[role=slider]]:border-0"
                />
              </div>
            </div>

            {/* Tab Navigation */}
            <Tabs defaultValue="tab1" className="w-full">
              <TabsList className={cn(neuBase, neuShadowRaised, "grid w-full grid-cols-3 p-1 h-auto")}>
                <TabsTrigger 
                  value="tab1" 
                  className="data-[state=active]:shadow-[inset_3px_3px_6px_#a3b1c6,inset_-3px_-3px_6px_#ffffff] data-[state=active]:bg-[#e0e5ec]"
                >
                  Tab 1
                </TabsTrigger>
                <TabsTrigger 
                  value="tab2"
                  className="data-[state=active]:shadow-[inset_3px_3px_6px_#a3b1c6,inset_-3px_-3px_6px_#ffffff] data-[state=active]:bg-[#e0e5ec]"
                >
                  Tab 2
                </TabsTrigger>
                <TabsTrigger 
                  value="tab3"
                  className="data-[state=active]:shadow-[inset_3px_3px_6px_#a3b1c6,inset_-3px_-3px_6px_#ffffff] data-[state=active]:bg-[#e0e5ec]"
                >
                  Tab 3
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        }
        code={{
          react: `// Neumorphic Toggle
<div className={cn(
  "bg-[#e0e5ec]",
  isOn ? "shadow-[inset_5px_5px_10px_#a3b1c6,inset_-5px_-5px_10px_#ffffff]" 
       : "shadow-[9px_9px_16px_#a3b1c6,-9px_-9px_16px_#ffffff]",
  "relative w-14 h-7 rounded-full transition-all duration-300"
)}>
  <div className="absolute top-1 left-1 w-5 h-5 rounded-full 
                  bg-[#e0e5ec] shadow-[3px_3px_6px_#a3b1c6,-3px_-3px_6px_#ffffff]
                  transition-transform duration-300
                  data-[state=on]:translate-x-7" />
</div>`
        }}
      />

      {/* Music Player Example */}
      <ComponentShowcase
        title="Music Player"
        description="Complete neumorphic music player interface"
        category="Examples"
        component={
          <div className={cn(neuBase, neuShadowFloat, "p-8 rounded-2xl w-full max-w-md mx-auto space-y-6")}>
            {/* Album Art */}
            <div className={cn(neuBase, neuShadowPressed, "w-48 h-48 rounded-2xl mx-auto flex items-center justify-center")}>
              <Volume2 className="h-16 w-16 text-muted-foreground" />
            </div>
            
            {/* Song Info */}
            <div className="text-center space-y-1">
              <h3 className="font-semibold text-lg">Song Title</h3>
              <p className="text-sm text-muted-foreground">Artist Name</p>
            </div>

            {/* Progress Bar */}
            <div className="space-y-2">
              <div className={cn(neuBase, neuShadowPressed, "h-2 rounded-full overflow-hidden")}>
                <div className="h-full w-1/3 bg-blue-500 rounded-full" />
              </div>
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>1:23</span>
                <span>3:45</span>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-4">
              <button className={cn(neuBase, neuShadowRaised, "p-3 rounded-full transition-all hover:shadow-[6px_6px_12px_#a3b1c6,-6px_-6px_12px_#ffffff]")}>
                <SkipBack className="h-5 w-5" />
              </button>
              <button className={cn(neuBase, neuShadowRaised, "p-4 rounded-full transition-all hover:shadow-[6px_6px_12px_#a3b1c6,-6px_-6px_12px_#ffffff]")}>
                <Play className="h-6 w-6" />
              </button>
              <button className={cn(neuBase, neuShadowRaised, "p-3 rounded-full transition-all hover:shadow-[6px_6px_12px_#a3b1c6,-6px_-6px_12px_#ffffff]")}>
                <SkipForward className="h-5 w-5" />
              </button>
            </div>
          </div>
        }
        code={{
          react: `// Complete Neumorphic Music Player
<div className="bg-[#e0e5ec] shadow-[20px_20px_35px_#a3b1c6,-20px_-20px_35px_#ffffff] 
                p-8 rounded-2xl space-y-6">
  {/* Album Art */}
  <div className="bg-[#e0e5ec] shadow-[inset_5px_5px_10px_#a3b1c6,inset_-5px_-5px_10px_#ffffff] 
                  w-48 h-48 rounded-2xl mx-auto" />
  
  {/* Song Info */}
  <div className="text-center">
    <h3 className="font-semibold">Song Title</h3>
    <p className="text-sm text-muted-foreground">Artist</p>
  </div>

  {/* Player Controls */}
  <div className="flex justify-center gap-4">
    <button className="bg-[#e0e5ec] shadow-[9px_9px_16px_#a3b1c6,-9px_-9px_16px_#ffffff] 
                       p-4 rounded-full">
      <Play className="h-6 w-6" />
    </button>
  </div>
</div>`
        }}
      />

      {/* Color Palette */}
      <Card className={cn(neuBase, neuShadowRaised, "border-0")}>
        <CardHeader>
          <CardTitle>Neumorphism Color Palette</CardTitle>
          <CardDescription>Essential colors for neumorphic design</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <div className={cn(neuBase, neuShadowRaised, "h-20 rounded-lg")} />
              <div className="space-y-1">
                <p className="text-sm font-medium">Background</p>
                <p className="text-xs text-muted-foreground">#E0E5EC</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="bg-[#ffffff] h-20 rounded-lg border" />
              <div className="space-y-1">
                <p className="text-sm font-medium">Light Shadow</p>
                <p className="text-xs text-muted-foreground">#FFFFFF</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="bg-[#a3b1c6] h-20 rounded-lg" />
              <div className="space-y-1">
                <p className="text-sm font-medium">Dark Shadow</p>
                <p className="text-xs text-muted-foreground">#A3B1C6</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="bg-[#9baacf] h-20 rounded-lg" />
              <div className="space-y-1">
                <p className="text-sm font-medium">Accent</p>
                <p className="text-xs text-muted-foreground">#9BAACF</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* AI Prompt Generator */}
      <AIPromptGenerator style="neumorphism" />

      {/* Comprehensive Component Library */}
      <NeuShowcase />

      {/* Design Token Generator */}
      <DesignTokenGenerator style="neumorphism" />

      {/* Interactive Playground */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Interactive Playground</CardTitle>
          <CardDescription>
            Experiment with components in real-time. Adjust properties, see live previews, and export your customized code.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <NeumorphismPlayground />
        </CardContent>
      </Card>

      {/* Pattern Library */}
      <PatternLibrary style="neumorphism" />

      {/* Implementation Guide */}
      <ImplementationGuide style="neumorphism" />

      {/* Export Manager */}
      <ExportManager style="neumorphism" />

      {/* Project Starters */}
      <ProjectStarter style="neumorphism" />
    </div>
  )
}
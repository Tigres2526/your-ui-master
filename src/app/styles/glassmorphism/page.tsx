"use client"

import { useState } from "react"
import { ComponentShowcase } from "@/components/showcase/component-showcase"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { 
  Sparkles,
  ArrowRight,
  Cloud,
  Star,
  Bell,
  Search,
  Menu,
  X
} from "lucide-react"
import { cn } from "@/lib/utils"
import { AIPromptGenerator } from "@/components/ai-prompt-generator"
import { GlassShowcase } from "@/components/glassmorphism/glass-showcase"
import { DesignTokenGenerator } from "@/components/design-token-generator"
import { PatternLibrary } from "@/components/pattern-library"
import { ImplementationGuide } from "@/components/implementation-guide"
import { ExportManager } from "@/components/export-manager"
import { InteractivePlayground } from "@/components/interactive-playground"
import { GlassButton } from "@/components/glassmorphism/glass-button"
import { ProjectStarter } from "@/components/project-starter"

export default function GlassmorphismPage() {
  const [blurIntensity, setBlurIntensity] = useState([16])
  const [opacity, setOpacity] = useState([25])
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Safe handlers with validation
  const handleBlurChange = (value: number[]) => {
    const safeValue = value.map(v => Math.max(0, Math.min(32, v)))
    setBlurIntensity(safeValue)
  }

  const handleOpacityChange = (value: number[]) => {
    const safeValue = value.map(v => Math.max(0, Math.min(100, v)))
    setOpacity(safeValue)
  }

  // Safe style calculations
  const safeOpacity = Math.max(0, Math.min(1, opacity[0] / 100))
  const safeBlur = Math.max(0, Math.min(32, blurIntensity[0]))

  return (
    <div className="space-y-12">
      {/* Gradient Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-sky-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-6000" />
      </div>

      {/* Page Header */}
      <div className="space-y-4 relative">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
          Glassmorphism
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Create stunning frosted glass effects with backdrop blur, transparency, and vibrant gradients. 
          Perfect for modern, ethereal interfaces that feel light and sophisticated.
        </p>
      </div>

      {/* Design Principles */}
      <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl">
        <CardHeader>
          <CardTitle className="text-foreground">Design Principles</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { icon: <Cloud className="h-5 w-5" />, title: "Transparency", desc: "Semi-transparent backgrounds" },
            { icon: <Sparkles className="h-5 w-5" />, title: "Backdrop Blur", desc: "Frosted glass effect" },
            { icon: <Star className="h-5 w-5" />, title: "Vibrant Gradients", desc: "Colorful backgrounds" }
          ].map((principle, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-xl">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-white/10">
                  {principle.icon}
                </div>
                <h3 className="font-semibold text-foreground">{principle.title}</h3>
              </div>
              <p className="text-sm text-foreground/70">{principle.desc}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Interactive Controls */}
      <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl">
        <CardHeader>
          <CardTitle className="text-foreground">Interactive Controls</CardTitle>
          <CardDescription className="text-foreground/70">
            Adjust the glass effect properties
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between text-foreground">
              <Label>Blur Intensity</Label>
              <span className="text-sm">{blurIntensity[0]}px</span>
            </div>
            <Slider 
              value={blurIntensity} 
              onValueChange={handleBlurChange}
              max={32}
              min={0}
              step={1}
              className="[&_[role=slider]]:bg-white/50"
            />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-foreground">
              <Label>Opacity</Label>
              <span className="text-sm">{opacity[0]}%</span>
            </div>
            <Slider 
              value={opacity} 
              onValueChange={handleOpacityChange}
              max={50}
              min={5}
              step={1}
              className="[&_[role=slider]]:bg-white/50"
            />
          </div>
          <div 
            className={cn(
              "p-6 rounded-xl border border-white/20 text-foreground text-center",
              `backdrop-blur-[${safeBlur}px]`
            )}
            style={{
              backgroundColor: `rgba(255, 255, 255, ${safeOpacity})`,
              backdropFilter: `blur(${safeBlur}px)`
            }}
          >
            Preview Glass Effect
          </div>
        </CardContent>
      </Card>

      {/* Button Showcase */}
      <ComponentShowcase
        title="Glass Buttons"
        description="Translucent buttons with various glass effects and intensities"
        category="Buttons"
        component={
          <div className="flex flex-wrap gap-4">
            <Button className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-foreground">Default Glass</Button>
            <Button variant="ghost" className="backdrop-blur-sm hover:bg-white/10 text-foreground">Ghost Glass</Button>
            <Button variant="outline" className="border-white/20 backdrop-blur-sm hover:bg-white/10 text-foreground">Outline Glass</Button>
            <Button className="bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 text-foreground">Subtle</Button>
            <Button className="bg-white/20 backdrop-blur-xl border border-white/30 hover:bg-white/30 text-foreground">Strong</Button>
          </div>
        }
        code={{
          react: `<Button className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20">Default Glass</Button>
<Button variant="ghost" className="backdrop-blur-sm hover:bg-white/10">Ghost Glass</Button>
<Button variant="outline" className="border-white/20 backdrop-blur-sm hover:bg-white/10">Outline Glass</Button>
<Button className="bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10">Subtle</Button>
<Button className="bg-white/20 backdrop-blur-xl border border-white/30 hover:bg-white/30">Strong</Button>`,
          css: `.glass-button {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  padding: 12px 24px;
  color: white;
  font-weight: 500;
  transition: all 0.3s ease;
}

.glass-button:hover {
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  transform: scale(1.05);
}`
        }}
        variants={[
          {
            name: "Small",
            component: <Button size="sm" className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-foreground">Small Button</Button>,
            code: 'size="sm"'
          },
          {
            name: "Large",
            component: <Button size="lg" className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-foreground">Large Button</Button>,
            code: 'size="lg"'
          },
          {
            name: "Icon",
            component: <Button size="icon" className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-foreground"><Search className="h-4 w-4" /></Button>,
            code: 'size="icon"'
          }
        ]}
      />

      {/* Card Showcase */}
      <ComponentShowcase
        title="Glass Cards"
        description="Beautiful card components with glassmorphism effects and gradient options"
        category="Cards"
        component={
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <Card className="bg-white/10 backdrop-blur-md border border-white/20 w-full">
              <CardHeader>
                <CardTitle className="text-foreground">Glass Card</CardTitle>
                <CardDescription className="text-foreground/70">
                  A beautiful frosted glass card
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 text-sm">
                  This card features a glassmorphism effect with backdrop blur and transparency.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-xl border border-white/30 shadow-2xl w-full">
              <CardHeader>
                <CardTitle className="text-foreground">Gradient Glass</CardTitle>
                <CardDescription className="text-foreground/70">
                  With vibrant gradient overlay
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 text-sm">
                  Enhanced with colorful gradients for a more dynamic appearance.
                </p>
              </CardContent>
            </Card>
          </div>
        }
        code={{
          react: `<Card className="bg-white/10 backdrop-blur-md border border-white/20">
  <CardHeader>
    <CardTitle>Glass Card</CardTitle>
    <CardDescription>
      A beautiful frosted glass card
    </CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content goes here</p>
  </CardContent>
</Card>

<Card className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-xl border border-white/30 shadow-2xl">
  <CardHeader>
    <CardTitle>Gradient Glass</CardTitle>
  </CardHeader>
</Card>`
        }}
        variants={[
          {
            name: "Subtle",
            component: (
              <Card className="bg-white/5 backdrop-blur-sm border border-white/10 w-full max-w-sm">
                <CardContent className="pt-6">
                  <p className="text-foreground/70">Subtle glass effect</p>
                </CardContent>
              </Card>
            ),
            code: 'className="bg-white/5 backdrop-blur-sm"'
          },
          {
            name: "Ultra",
            component: (
              <Card className="bg-white/25 backdrop-blur-2xl border border-white/40 w-full max-w-sm">
                <CardContent className="pt-6">
                  <p className="text-foreground/70">Ultra glass effect</p>
                </CardContent>
              </Card>
            ),
            code: 'className="bg-white/25 backdrop-blur-2xl"'
          },
          {
            name: "Aurora",
            component: (
              <Card className="bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-blue-500/10 backdrop-blur-md border border-white/20 w-full max-w-sm">
                <CardContent className="pt-6">
                  <p className="text-foreground/70">Aurora gradient</p>
                </CardContent>
              </Card>
            ),
            code: 'className="bg-gradient-to-br from-purple-500/10..."'
          }
        ]}
      />

      {/* Navigation Bar Example */}
      <ComponentShowcase
        title="Glass Navigation"
        description="A modern navigation bar with glassmorphism"
        category="Navigation"
        component={
          <nav className="w-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-8">
                <div className="font-bold text-xl text-foreground">Logo</div>
                <div className="hidden md:flex items-center gap-6">
                  <a href="#" className="text-foreground/80 hover:text-foreground transition-colors">Home</a>
                  <a href="#" className="text-foreground/80 hover:text-foreground transition-colors">About</a>
                  <a href="#" className="text-foreground/80 hover:text-foreground transition-colors">Services</a>
                  <a href="#" className="text-foreground/80 hover:text-foreground transition-colors">Contact</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button className="p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10 text-foreground hover:bg-white/20 transition-all">
                  <Search className="h-5 w-5" />
                </button>
                <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-white/20 text-foreground font-medium hover:from-purple-500/30 hover:to-pink-500/30 transition-all">
                  Sign In
                </button>
                <button 
                  className="md:hidden p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10 text-foreground"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
              </div>
            </div>
          </nav>
        }
        code={{
          react: `<nav className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4">
  <div className="flex items-center justify-between">
    <div className="font-bold text-xl text-foreground">Logo</div>
    <div className="flex items-center gap-6">
      <a href="#" className="text-foreground/80 hover:text-foreground">Home</a>
      <a href="#" className="text-foreground/80 hover:text-foreground">About</a>
      <button className="px-4 py-2 rounded-lg bg-gradient-to-r 
                         from-purple-500/20 to-pink-500/20 
                         backdrop-blur-sm border border-white/20">
        Sign In
      </button>
    </div>
  </div>
</nav>`
        }}
      />

      {/* Form Elements */}
      <ComponentShowcase
        title="Glass Form Elements"
        description="Input fields and form controls with glass effects"
        category="Forms"
        component={
          <div className="space-y-4 w-full max-w-sm">
            <div className="space-y-2">
              <Label className="text-foreground">Email</Label>
              <Input 
                className="bg-white/10 backdrop-blur-md border-white/20 placeholder:text-foreground/50 text-foreground"
                placeholder="Enter your email"
                type="email"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-foreground">Password</Label>
              <Input 
                className="bg-white/20 backdrop-blur-md border-white/30 placeholder:text-foreground/50 text-foreground"
                type="password"
                placeholder="Enter password"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-foreground">Search</Label>
              <Input 
                className="bg-white/5 backdrop-blur-sm border-white/10 placeholder:text-foreground/50 text-foreground"
                placeholder="Search..."
              />
            </div>
            <Button className="w-full bg-white/20 backdrop-blur-xl border border-white/30 hover:bg-white/30 text-foreground">
              Sign In
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        }
        code={{
          react: `<Input 
  className="bg-white/10 backdrop-blur-md border-white/20 placeholder:text-foreground/50"
  placeholder="Enter your email"
  type="email"
/>

<Input 
  className="bg-white/20 backdrop-blur-md border-white/30 placeholder:text-foreground/50"
  type="password"
  placeholder="Enter password"
/>

<Input 
  className="bg-white/5 backdrop-blur-sm border-white/10 placeholder:text-foreground/50"
  placeholder="Search..."
/>`
        }}
        variants={[
          {
            name: "Small Input",
            component: <Input className="bg-white/10 backdrop-blur-md border-white/20 h-8 text-sm w-48" placeholder="Small input" />,
            code: 'className="h-8 text-sm"'
          },
          {
            name: "Large Input",
            component: <Input className="bg-white/10 backdrop-blur-md border-white/20 h-12 text-lg w-48" placeholder="Large input" />,
            code: 'className="h-12 text-lg"'
          },
          {
            name: "Strong Intensity",
            component: <Input className="bg-white/20 backdrop-blur-xl border-white/30 w-48" placeholder="Strong glass" />,
            code: 'className="bg-white/20 backdrop-blur-xl"'
          }
        ]}
      />

      {/* Glass Badges Showcase */}
      <ComponentShowcase
        title="Glass Badges"
        description="Beautiful badges with glassmorphism effects"
        category="Feedback"
        component={
          <div className="flex flex-wrap gap-3">
            <Badge className="bg-white/10 backdrop-blur-md border-white/20 text-foreground">Default</Badge>
            <Badge variant="secondary" className="bg-white/5 backdrop-blur-sm border-white/10">Secondary</Badge>
            <Badge variant="destructive" className="bg-red-500/20 backdrop-blur-md border-red-500/30">Destructive</Badge>
            <Badge variant="outline" className="border-white/20 backdrop-blur-sm">Outline</Badge>
            <Badge className="bg-green-500/20 backdrop-blur-md border-green-500/30 text-green-400">Success</Badge>
            <Badge className="bg-yellow-500/20 backdrop-blur-md border-yellow-500/30 text-yellow-400">Warning</Badge>
          </div>
        }
        code={{
          react: `<Badge className="bg-white/10 backdrop-blur-md border-white/20">Default</Badge>
<Badge variant="secondary" className="bg-white/5 backdrop-blur-sm">Secondary</Badge>
<Badge variant="destructive" className="bg-red-500/20 backdrop-blur-md">Destructive</Badge>
<Badge className="bg-green-500/20 backdrop-blur-md border-green-500/30 text-green-400">Success</Badge>
<Badge className="bg-yellow-500/20 backdrop-blur-md border-yellow-500/30 text-yellow-400">Warning</Badge>`
        }}
        variants={[
          {
            name: "Sizes",
            component: (
              <div className="flex gap-2 items-center">
                <Badge className="bg-white/10 backdrop-blur-md border-white/20 text-xs py-0 px-2">Small</Badge>
                <Badge className="bg-white/10 backdrop-blur-md border-white/20">Default</Badge>
                <Badge className="bg-white/10 backdrop-blur-md border-white/20 text-base py-1 px-3">Large</Badge>
              </div>
            ),
            code: 'Different size classes'
          },
          {
            name: "Intensities",
            component: (
              <div className="flex gap-2">
                <Badge className="bg-white/5 backdrop-blur-sm border-white/10">Subtle</Badge>
                <Badge className="bg-white/10 backdrop-blur-md border-white/20">Medium</Badge>
                <Badge className="bg-white/20 backdrop-blur-xl border-white/30">Strong</Badge>
              </div>
            ),
            code: 'intensity variations'
          }
        ]}
      />

      {/* Glass Tabs Showcase */}
      <ComponentShowcase
        title="Glass Tabs"
        description="Tab navigation with glassmorphism styling"
        category="Navigation"
        component={
          <Tabs defaultValue="tab1" className="w-full max-w-md">
            <TabsList className="w-full bg-white/10 backdrop-blur-md border border-white/20">
              <TabsTrigger value="tab1" className="flex-1 data-[state=active]:bg-white/20">Profile</TabsTrigger>
              <TabsTrigger value="tab2" className="flex-1 data-[state=active]:bg-white/20">Settings</TabsTrigger>
              <TabsTrigger value="tab3" className="flex-1 data-[state=active]:bg-white/20">Security</TabsTrigger>
            </TabsList>
            <TabsContent value="tab1" className="mt-4">
              <div className="text-foreground">
                <h3 className="font-semibold mb-2">Profile Information</h3>
                <p className="text-foreground/70 text-sm">Manage your profile details and preferences.</p>
              </div>
            </TabsContent>
            <TabsContent value="tab2" className="mt-4">
              <div className="text-foreground">
                <h3 className="font-semibold mb-2">Settings</h3>
                <p className="text-foreground/70 text-sm">Configure your application settings.</p>
              </div>
            </TabsContent>
            <TabsContent value="tab3" className="mt-4">
              <div className="text-foreground">
                <h3 className="font-semibold mb-2">Security</h3>
                <p className="text-foreground/70 text-sm">Manage your security preferences.</p>
              </div>
            </TabsContent>
          </Tabs>
        }
        code={{
          react: `<Tabs defaultValue="tab1">
  <TabsList className="bg-white/10 backdrop-blur-md border border-white/20">
    <TabsTrigger value="tab1" className="data-[state=active]:bg-white/20">Profile</TabsTrigger>
    <TabsTrigger value="tab2" className="data-[state=active]:bg-white/20">Settings</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">
    <p>Profile content</p>
  </TabsContent>
  <TabsContent value="tab2">
    <p>Settings content</p>
  </TabsContent>
</Tabs>`
        }}
      />

      {/* Glass Progress Showcase */}
      <ComponentShowcase
        title="Glass Progress Bars"
        description="Progress indicators with glassmorphism effects"
        category="Feedback"
        component={
          <div className="space-y-4 w-full">
            <Progress value={33} className="bg-white/10 backdrop-blur-md border border-white/20 [&>div]:bg-white/50" />
            <Progress value={66} className="bg-white/20 backdrop-blur-xl border border-white/30 [&>div]:bg-white/70" />
            <Progress value={50} className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-md border border-white/20 [&>div]:bg-gradient-to-r [&>div]:from-purple-500 [&>div]:to-pink-500" />
            <Progress value={75} className="bg-white/10 backdrop-blur-md border border-white/20 [&>div]:bg-gradient-to-r [&>div]:from-blue-500 [&>div]:to-cyan-500 [&>div]:animate-pulse" />
          </div>
        }
        code={{
          react: `<Progress value={33} className="bg-white/10 backdrop-blur-md [&>div]:bg-white/50" />
<Progress value={66} className="bg-white/20 backdrop-blur-xl [&>div]:bg-white/70" />
<Progress value={50} className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 [&>div]:bg-gradient-to-r [&>div]:from-purple-500 [&>div]:to-pink-500" />
<Progress value={75} className="[&>div]:bg-gradient-to-r [&>div]:from-blue-500 [&>div]:to-cyan-500 [&>div]:animate-pulse" />`
        }}
        variants={[
          {
            name: "Pulse",
            component: <Progress value={80} className="bg-white/10 backdrop-blur-md [&>div]:bg-white/60 [&>div]:animate-pulse" />,
            code: '[&>div]:animate-pulse'
          },
          {
            name: "Subtle",
            component: <Progress value={40} className="bg-white/5 backdrop-blur-sm [&>div]:bg-white/30" />,
            code: 'bg-white/5 backdrop-blur-sm'
          }
        ]}
      />

      {/* Glass Modal Showcase */}
      <ComponentShowcase
        title="Glass Modal"
        description="Modal dialogs with glassmorphism backdrop and content"
        category="Overlays"
        component={
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-foreground">Open Modal</Button>
            </DialogTrigger>
            <DialogContent className="bg-white/20 backdrop-blur-xl border border-white/30 text-foreground">
              <DialogHeader>
                <DialogTitle>Glass Modal</DialogTitle>
                <DialogDescription className="text-foreground/70">
                  This is a beautiful modal with glassmorphism effects. The backdrop is blurred and the content has a frosted glass appearance.
                </DialogDescription>
              </DialogHeader>
              <div className="py-4">
                <p className="text-foreground/80 text-sm">
                  Modal content can include any elements you need, all styled with consistent glass effects.
                </p>
              </div>
              <DialogFooter>
                <Button variant="ghost" className="backdrop-blur-sm hover:bg-white/10 text-foreground">Cancel</Button>
                <Button className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-foreground">Continue</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        }
        code={{
          react: `<Dialog>
  <DialogTrigger asChild>
    <Button className="bg-white/10 backdrop-blur-md border border-white/20">Open Modal</Button>
  </DialogTrigger>
  <DialogContent className="bg-white/20 backdrop-blur-xl border border-white/30">
    <DialogHeader>
      <DialogTitle>Glass Modal</DialogTitle>
      <DialogDescription>
        Modal description text
      </DialogDescription>
    </DialogHeader>
    <div className="py-4">
      <p>Modal content</p>
    </div>
    <DialogFooter>
      <Button variant="ghost" className="backdrop-blur-sm hover:bg-white/10">Cancel</Button>
      <Button className="bg-white/10 backdrop-blur-md">Continue</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`
        }}
      />

      {/* Pricing Cards Example */}
      <ComponentShowcase
        title="Glass Pricing Cards"
        description="Beautiful pricing cards with glassmorphism"
        category="Examples"
        component={
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {[
              { name: "Basic", price: "$9", features: ["1 User", "10 Projects", "Basic Support"] },
              { name: "Pro", price: "$29", features: ["5 Users", "50 Projects", "Priority Support"], popular: true },
              { name: "Team", price: "$99", features: ["Unlimited Users", "Unlimited Projects", "24/7 Support"] }
            ].map((plan, i) => (
              <div key={i} className={cn(
                "relative p-6 rounded-2xl backdrop-blur-xl border transition-all hover:scale-105",
                plan.popular 
                  ? "bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-500/30 shadow-2xl" 
                  : "bg-white/10 border-white/20"
              )}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0">
                    Most Popular
                  </Badge>
                )}
                <div className="text-center space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">{plan.name}</h3>
                  <div className="text-3xl font-bold text-foreground">{plan.price}<span className="text-sm font-normal">/mo</span></div>
                  <ul className="space-y-2">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="text-foreground/80 text-sm">{feature}</li>
                    ))}
                  </ul>
                  <Button className={cn(
                    "w-full",
                    plan.popular 
                      ? "bg-white/20 hover:bg-white/30 text-foreground border-white/30" 
                      : "bg-white/10 hover:bg-white/20 text-foreground border-white/20"
                  )}>
                    Get Started
                  </Button>
                </div>
              </div>
            ))}
          </div>
        }
        code={{
          react: `<div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 
                backdrop-blur-xl border border-purple-500/30 shadow-2xl">
  <h3 className="text-xl font-semibold text-foreground">Pro Plan</h3>
  <div className="text-3xl font-bold text-foreground">$29/mo</div>
  <Button className="w-full bg-white/20 hover:bg-white/30 
                     text-foreground border-white/30">
    Get Started
  </Button>
</div>`
        }}
      />

      {/* Notification Example */}
      <ComponentShowcase
        title="Glass Notifications"
        description="Toast notifications with glassmorphism"
        category="Feedback"
        component={
          <div className="space-y-4 w-full max-w-md">
            <div className="flex items-center gap-4 p-4 rounded-xl bg-green-500/10 backdrop-blur-xl border border-green-500/20">
              <div className="p-2 rounded-lg bg-green-500/20">
                <Sparkles className="h-5 w-5 text-green-400" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-foreground">Success!</h4>
                <p className="text-sm text-foreground/70">Your changes have been saved.</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-xl bg-blue-500/10 backdrop-blur-xl border border-blue-500/20">
              <div className="p-2 rounded-lg bg-blue-500/20">
                <Bell className="h-5 w-5 text-blue-400" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-foreground">New Update</h4>
                <p className="text-sm text-foreground/70">Version 2.0 is now available.</p>
              </div>
            </div>
          </div>
        }
        code={{
          react: `<div className="flex items-center gap-4 p-4 rounded-xl 
                bg-green-500/10 backdrop-blur-xl border border-green-500/20">
  <div className="p-2 rounded-lg bg-green-500/20">
    <CheckIcon className="h-5 w-5 text-green-400" />
  </div>
  <div>
    <h4 className="font-semibold text-foreground">Success!</h4>
    <p className="text-sm text-foreground/70">Your changes have been saved.</p>
  </div>
</div>`
        }}
      />

      {/* Color Palette */}
      <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl">
        <CardHeader>
          <CardTitle className="text-foreground">Glass Color Palette</CardTitle>
          <CardDescription className="text-foreground/70">
            Essential colors and gradients for glassmorphism
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <div className="h-20 rounded-lg bg-white/10 backdrop-blur-md border border-white/20" />
              <p className="text-sm font-medium text-foreground">Glass White</p>
              <p className="text-xs text-foreground/60">rgba(255,255,255,0.1)</p>
            </div>
            <div className="space-y-2">
              <div className="h-20 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-md border border-white/20" />
              <p className="text-sm font-medium text-foreground">Purple Pink</p>
              <p className="text-xs text-foreground/60">Gradient</p>
            </div>
            <div className="space-y-2">
              <div className="h-20 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-md border border-white/20" />
              <p className="text-sm font-medium text-foreground">Blue Cyan</p>
              <p className="text-xs text-foreground/60">Gradient</p>
            </div>
            <div className="space-y-2">
              <div className="h-20 rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-md border border-white/20" />
              <p className="text-sm font-medium text-foreground">Green Emerald</p>
              <p className="text-xs text-foreground/60">Gradient</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Implementation Examples */}
      <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl">
        <CardHeader>
          <CardTitle className="text-foreground">Implementation Guide</CardTitle>
          <CardDescription className="text-foreground/70">
            CSS properties for glassmorphism effects
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-black/20 rounded-lg font-mono text-sm text-foreground">
              <p className="text-foreground/60 mb-2">{`/* Basic Glass Effect */`}</p>
              <pre>{`.glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
}`}</pre>
            </div>
            <div className="p-4 bg-black/20 rounded-lg font-mono text-sm text-foreground">
              <p className="text-foreground/60 mb-2">{`/* Gradient Glass */`}</p>
              <pre>{`.glass-gradient {
  background: linear-gradient(
    135deg,
    rgba(147, 51, 234, 0.2),
    rgba(236, 72, 153, 0.2)
  );
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}`}</pre>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* AI Prompt Generator */}
      <AIPromptGenerator style="glassmorphism" />

      {/* Comprehensive Component Library */}
      <GlassShowcase />

      {/* Design Token Generator */}
      <DesignTokenGenerator style="glassmorphism" />

      {/* Interactive Playground */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Interactive Playground</CardTitle>
          <CardDescription>
            Experiment with glassmorphism components in real-time
          </CardDescription>
        </CardHeader>
        <CardContent>
          <InteractivePlayground
            title="Glass Button Playground"
            description="Customize and preview glass button variations"
            component={GlassButton}
            defaultProps={{
              children: 'Glass Button',
              variant: 'default',
              size: 'default',
              intensity: 'medium'
            }}
            controls={[
              {
                name: 'children',
                label: 'Button Text',
                type: 'text',
                defaultValue: 'Glass Button'
              },
              {
                name: 'variant',
                label: 'Variant',
                type: 'select',
                defaultValue: 'default',
                options: [
                  { label: 'Default', value: 'default' },
                  { label: 'Ghost', value: 'ghost' },
                  { label: 'Outline', value: 'outline' }
                ]
              },
              {
                name: 'size',
                label: 'Size',
                type: 'select',
                defaultValue: 'default',
                options: [
                  { label: 'Small', value: 'sm' },
                  { label: 'Default', value: 'default' },
                  { label: 'Large', value: 'lg' },
                  { label: 'Icon', value: 'icon' }
                ]
              },
              {
                name: 'intensity',
                label: 'Blur Intensity',
                type: 'select',
                defaultValue: 'medium',
                options: [
                  { label: 'Subtle', value: 'subtle' },
                  { label: 'Medium', value: 'medium' },
                  { label: 'Strong', value: 'strong' },
                  { label: 'Ultra', value: 'ultra' }
                ]
              }
            ]}
            codeTemplate={(props) => {
              const propsStr = Object.entries(props)
                .filter(([key, value]) => {
                  if (key === 'children') return false
                  if (typeof value === 'boolean' && !value) return false
                  if (value === 'default') return false
                  return true
                })
                .map(([key, value]) => {
                  if (typeof value === 'boolean') return key
                  return `${key}="${value}"`
                })
                .join(' ')
              
              return `<GlassButton${propsStr ? ' ' + propsStr : ''}>${props.children}</GlassButton>`
            }}
            styleVariables={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
            }}
          />
        </CardContent>
      </Card>

      {/* Pattern Library */}
      <PatternLibrary style="glassmorphism" />

      {/* Implementation Guide */}
      <ImplementationGuide style="glassmorphism" />

      {/* Export Manager */}
      <ExportManager style="glassmorphism" />

      {/* Project Starters */}
      <ProjectStarter style="glassmorphism" />

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animation-delay-6000 {
          animation-delay: 6s;
        }
      `}</style>
    </div>
  )
}
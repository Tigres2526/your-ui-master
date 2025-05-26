"use client"

import { useState } from "react"
import { ComponentShowcase } from "@/components/showcase/component-showcase"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { 
  Sparkles,
  ArrowRight,
  Cloud,
  Star,
  Lock,
  Mail,
  Bell,
  Search,
  Menu,
  X
} from "lucide-react"
import { cn } from "@/lib/utils"

export default function GlassmorphismPage() {
  const [blurIntensity, setBlurIntensity] = useState([16])
  const [opacity, setOpacity] = useState([25])
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
              onValueChange={setBlurIntensity}
              max={32}
              min={0}
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
              onValueChange={setOpacity}
              max={50}
              min={5}
              className="[&_[role=slider]]:bg-white/50"
            />
          </div>
          <div 
            className={cn(
              "p-6 rounded-xl border border-white/20 text-foreground text-center",
              `backdrop-blur-[${blurIntensity[0]}px]`
            )}
            style={{
              backgroundColor: `rgba(255, 255, 255, ${opacity[0] / 100})`,
              backdropFilter: `blur(${blurIntensity[0]}px)`
            }}
          >
            Preview Glass Effect
          </div>
        </CardContent>
      </Card>

      {/* Button Showcase */}
      <ComponentShowcase
        title="Glass Buttons"
        description="Translucent buttons with various glass effects"
        category="Buttons"
        component={
          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-foreground font-medium transition-all hover:bg-white/20 hover:shadow-lg hover:scale-105 active:scale-95">
              Glass Button
            </button>
            <button className="px-6 py-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-md border border-white/20 text-foreground font-medium transition-all hover:from-purple-500/30 hover:to-pink-500/30 hover:shadow-lg hover:scale-105 active:scale-95">
              Gradient Glass
            </button>
          </div>
        }
        code={{
          react: `<button className="px-6 py-3 rounded-xl bg-white/10 backdrop-blur-md 
         border border-white/20 text-foreground font-medium transition-all 
         hover:bg-white/20 hover:shadow-lg hover:scale-105 active:scale-95">
  Glass Button
</button>`,
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
            name: "Primary",
            component: (
              <button className="px-6 py-3 rounded-xl bg-blue-500/20 backdrop-blur-md border border-blue-500/30 text-foreground font-medium">
                Primary
              </button>
            ),
            code: "Blue glass variant"
          },
          {
            name: "Success",
            component: (
              <button className="px-6 py-3 rounded-xl bg-green-500/20 backdrop-blur-md border border-green-500/30 text-foreground font-medium">
                Success
              </button>
            ),
            code: "Green glass variant"
          },
          {
            name: "Danger",
            component: (
              <button className="px-6 py-3 rounded-xl bg-red-500/20 backdrop-blur-md border border-red-500/30 text-foreground font-medium">
                Danger
              </button>
            ),
            code: "Red glass variant"
          }
        ]}
      />

      {/* Card Showcase */}
      <ComponentShowcase
        title="Glass Cards"
        description="Beautiful card components with glassmorphism effects"
        category="Cards"
        component={
          <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl w-full max-w-sm">
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
        }
        code={{
          react: `<Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl">
  <CardHeader>
    <CardTitle className="text-foreground">Glass Card</CardTitle>
    <CardDescription className="text-foreground/70">
      Subtitle text
    </CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-foreground/80">Card content goes here</p>
  </CardContent>
</Card>`
        }}
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
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground/50" />
                <Input 
                  placeholder="Enter your email"
                  className="bg-white/10 backdrop-blur-md border-white/20 text-foreground placeholder:text-foreground/50 pl-10 focus:bg-white/20 focus:border-white/40"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label className="text-foreground">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground/50" />
                <Input 
                  type="password"
                  placeholder="Enter password"
                  className="bg-white/10 backdrop-blur-md border-white/20 text-foreground placeholder:text-foreground/50 pl-10 focus:bg-white/20 focus:border-white/40"
                />
              </div>
            </div>
            <Button className="w-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-md border border-white/20 text-foreground hover:from-purple-500/30 hover:to-pink-500/30">
              Sign In
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        }
        code={{
          react: `<Input 
  placeholder="Enter text"
  className="bg-white/10 backdrop-blur-md border-white/20 
             text-foreground placeholder:text-foreground/50 
             focus:bg-white/20 focus:border-white/40"
/>`
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
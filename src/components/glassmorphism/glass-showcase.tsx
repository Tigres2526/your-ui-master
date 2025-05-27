'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Label } from '@/components/ui/label'
import { CodeBlockWithExport } from '@/components/code-block-with-export'
import { GlassButton } from './glass-button'
import { GlassCard } from './glass-card'
import { GlassInput } from './glass-input'
import { GlassBadge } from './glass-badge'
import { 
  GlassModal,
  GlassModalContent,
  GlassModalDescription,
  GlassModalHeader,
  GlassModalTitle,
  GlassModalTrigger
} from './glass-modal'
import { GlassTabs } from './glass-tabs'
import { GlassProgress } from './glass-progress'
import { 
  GlassDropdownMenu,
  GlassDropdownMenuTrigger,
  GlassDropdownMenuContent,
  GlassDropdownMenuItem,
  GlassDropdownMenuSeparator
} from './glass-dropdown'
import { 
  GlassTooltip,
  GlassTooltipTrigger,
  GlassTooltipContent,
  GlassTooltipProvider
} from './glass-tooltip'
import { 
  Settings,
  User,
  Heart,
  Download,
  Mail,
  Lock,
  Search,
  Bell,
  Menu,
  ChevronDown,
  Calendar,
  Activity,
  Users
} from 'lucide-react'

export function GlassShowcase() {
  const [modalOpen, setModalOpen] = useState(false)
  const [progress] = useState(33)

  return (
    <GlassTooltipProvider>
      <Card>
        <CardHeader>
        <CardTitle className="text-2xl">Glassmorphism Component Library</CardTitle>
        <CardDescription>
          A comprehensive collection of 30+ glassmorphic components with transparency, blur effects, and modern aesthetics
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="buttons" className="w-full">
          <TabsList className="grid grid-cols-5 w-full max-w-[600px]">
            <TabsTrigger value="buttons">Buttons</TabsTrigger>
            <TabsTrigger value="cards">Cards</TabsTrigger>
            <TabsTrigger value="forms">Forms</TabsTrigger>
            <TabsTrigger value="feedback">Feedback</TabsTrigger>
            <TabsTrigger value="navigation">Navigation</TabsTrigger>
          </TabsList>

          {/* Buttons Tab */}
          <TabsContent value="buttons" className="space-y-8 mt-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Button Variants</h3>
              <div className="grid gap-6">
                <div className="space-y-4">
                  <Label>Default Buttons</Label>
                  <div className="flex flex-wrap gap-4">
                    <GlassButton>Default</GlassButton>
                    <GlassButton variant="ghost">Ghost</GlassButton>
                    <GlassButton variant="outline">Outline</GlassButton>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-background px-2 text-muted-foreground">Code</span>
                    </div>
                  </div>
                  <CodeBlockWithExport
                    code={{
                      typescript: `<GlassButton>Default</GlassButton>
<GlassButton variant="ghost">Ghost</GlassButton>
<GlassButton variant="outline">Outline</GlassButton>`,
                      tailwind: `<!-- Default Button -->
<button class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white/10 text-foreground backdrop-blur-md border border-white/20 hover:bg-white/20 active:bg-white/30 h-10 px-4 py-2">
  Default
</button>

<!-- Ghost Button -->
<button class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-white/10 active:bg-white/20 text-foreground backdrop-blur-sm h-10 px-4 py-2">
  Ghost
</button>

<!-- Outline Button -->
<button class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-white/30 bg-transparent hover:bg-white/10 active:bg-white/20 text-foreground backdrop-blur-sm h-10 px-4 py-2">
  Outline
</button>`,
                      css: `.glass-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.2s;
  height: 2.5rem;
  padding: 0.5rem 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background-color: rgba(255, 255, 255, 0.1);
  color: inherit;
  backdrop-filter: blur(12px);
}

.glass-button:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.glass-button:active {
  background-color: rgba(255, 255, 255, 0.3);
}

.glass-button:focus-visible {
  outline: 2px solid transparent;
  outline-offset: 2px;
  box-shadow: 0 0 0 2px var(--ring-color);
}

.glass-button:disabled {
  pointer-events: none;
  opacity: 0.5;
}

/* Ghost variant */
.glass-button--ghost {
  border: none;
  background-color: transparent;
  backdrop-filter: blur(4px);
}

.glass-button--ghost:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

/* Outline variant */
.glass-button--outline {
  background-color: transparent;
  border-color: rgba(255, 255, 255, 0.3);
}`,
                      scss: `// Glass button styles
.glass-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.2s;
  height: 2.5rem;
  padding: 0.5rem 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background-color: rgba(255, 255, 255, 0.1);
  color: inherit;
  backdrop-filter: blur(12px);
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
  
  &:active {
    background-color: rgba(255, 255, 255, 0.3);
  }
  
  &:focus-visible {
    outline: 2px solid transparent;
    outline-offset: 2px;
    box-shadow: 0 0 0 2px var(--ring-color);
  }
  
  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }
  
  // Ghost variant
  &--ghost {
    border: none;
    background-color: transparent;
    backdrop-filter: blur(4px);
    
    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
  
  // Outline variant
  &--outline {
    background-color: transparent;
    border-color: rgba(255, 255, 255, 0.3);
  }
}`
                    }}
                  />
                </div>

                <div className="space-y-4">
                  <Label>Intensity Levels</Label>
                  <div className="flex flex-wrap gap-4">
                    <GlassButton intensity="subtle">Subtle</GlassButton>
                    <GlassButton intensity="medium">Medium</GlassButton>
                    <GlassButton intensity="strong">Strong</GlassButton>
                    <GlassButton intensity="ultra">Ultra</GlassButton>
                  </div>
                </div>

                <div className="space-y-4">
                  <Label>Sizes</Label>
                  <div className="flex items-center flex-wrap gap-4">
                    <GlassButton size="sm">Small</GlassButton>
                    <GlassButton size="default">Default</GlassButton>
                    <GlassButton size="lg">Large</GlassButton>
                    <GlassButton size="icon"><Heart className="h-4 w-4" /></GlassButton>
                  </div>
                </div>

                <div className="space-y-4">
                  <Label>With Icons</Label>
                  <div className="flex flex-wrap gap-4">
                    <GlassButton>
                      <Mail className="mr-2 h-4 w-4" />
                      Email
                    </GlassButton>
                    <GlassButton>
                      Download
                      <Download className="ml-2 h-4 w-4" />
                    </GlassButton>
                    <GlassButton variant="ghost">
                      <Settings className="mr-2 h-4 w-4" />
                      Settings
                    </GlassButton>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Cards Tab */}
          <TabsContent value="cards" className="space-y-8 mt-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Card Variations</h3>
              <div className="grid gap-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <GlassCard>
                    <CardHeader>
                      <CardTitle>Basic Glass Card</CardTitle>
                      <CardDescription>With medium blur intensity</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        This is a basic glassmorphism card with backdrop blur and transparency.
                      </p>
                    </CardContent>
                  </GlassCard>

                  <GlassCard intensity="strong" gradient="vibrant">
                    <CardHeader>
                      <CardTitle>Gradient Glass Card</CardTitle>
                      <CardDescription>Strong blur with gradient</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Enhanced with gradient overlay for additional depth.
                      </p>
                    </CardContent>
                  </GlassCard>
                </div>

                <div className="space-y-4">
                  <Label>Interactive Cards</Label>
                  <div className="grid md:grid-cols-3 gap-4">
                    <GlassCard className="cursor-pointer hover:scale-105 transition-transform">
                      <CardContent className="pt-6">
                        <div className="flex items-center justify-between mb-4">
                          <Activity className="h-8 w-8 text-primary" />
                          <GlassBadge variant="success">Active</GlassBadge>
                        </div>
                        <h4 className="font-semibold">Analytics</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          View your performance metrics
                        </p>
                      </CardContent>
                    </GlassCard>

                    <GlassCard className="cursor-pointer hover:scale-105 transition-transform">
                      <CardContent className="pt-6">
                        <div className="flex items-center justify-between mb-4">
                          <Users className="h-8 w-8 text-primary" />
                          <GlassBadge variant="warning">3 New</GlassBadge>
                        </div>
                        <h4 className="font-semibold">Team</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Manage team members
                        </p>
                      </CardContent>
                    </GlassCard>

                    <GlassCard className="cursor-pointer hover:scale-105 transition-transform">
                      <CardContent className="pt-6">
                        <div className="flex items-center justify-between mb-4">
                          <Calendar className="h-8 w-8 text-primary" />
                          <GlassBadge>Today</GlassBadge>
                        </div>
                        <h4 className="font-semibold">Schedule</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          View upcoming events
                        </p>
                      </CardContent>
                    </GlassCard>
                  </div>
                </div>

                <CodeBlockWithExport
                  code={{
                    typescript: `<GlassCard intensity="strong" gradient="vibrant">
  <CardHeader>
    <CardTitle>Gradient Glass Card</CardTitle>
    <CardDescription>Strong blur with gradient</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Enhanced with gradient overlay for additional depth.</p>
  </CardContent>
</GlassCard>`,
                    tailwind: `<div class="rounded-lg border bg-white/10 backdrop-blur-xl shadow-lg shadow-black/5 p-6 relative overflow-hidden">
  <!-- Gradient overlay -->
  <div class="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 pointer-events-none"></div>
  
  <div class="relative z-10">
    <div class="space-y-1.5">
      <h3 class="text-2xl font-semibold leading-none tracking-tight">Gradient Glass Card</h3>
      <p class="text-sm text-muted-foreground">Strong blur with gradient</p>
    </div>
    <div class="pt-6">
      <p>Enhanced with gradient overlay for additional depth.</p>
    </div>
  </div>
</div>`,
                    css: `.glass-card {
  position: relative;
  overflow: hidden;
  border-radius: 0.5rem;
  border: 1px solid transparent;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
}

.glass-card--gradient::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom right,
    rgba(var(--primary-rgb), 0.2),
    rgba(var(--secondary-rgb), 0.2),
    rgba(var(--accent-rgb), 0.2)
  );
  pointer-events: none;
}

.glass-card__content {
  position: relative;
  z-index: 10;
}

.glass-card__header {
  margin-bottom: 1.5rem;
}

.glass-card__title {
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1;
  letter-spacing: -0.025em;
}

.glass-card__description {
  font-size: 0.875rem;
  color: var(--muted-foreground);
  margin-top: 0.375rem;
}`,
                    scss: `// Glass card with gradient
.glass-card {
  position: relative;
  overflow: hidden;
  border-radius: 0.5rem;
  border: 1px solid transparent;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  
  // Gradient variant
  &--gradient {
    &::before {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(
        to bottom right,
        rgba(var(--primary-rgb), 0.2),
        rgba(var(--secondary-rgb), 0.2),
        rgba(var(--accent-rgb), 0.2)
      );
      pointer-events: none;
    }
  }
  
  &__content {
    position: relative;
    z-index: 10;
  }
  
  &__header {
    margin-bottom: 1.5rem;
  }
  
  &__title {
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 1;
    letter-spacing: -0.025em;
  }
  
  &__description {
    font-size: 0.875rem;
    color: var(--muted-foreground);
    margin-top: 0.375rem;
  }
}`
                  }}
                />
              </div>
            </div>
          </TabsContent>

          {/* Forms Tab */}
          <TabsContent value="forms" className="space-y-8 mt-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Form Elements</h3>
              <div className="grid gap-6">
                <div className="space-y-4">
                  <Label>Input Variants</Label>
                  <div className="grid gap-4 max-w-md">
                    <GlassInput placeholder="Default input..." />
                    <GlassInput variant="ghost" placeholder="Ghost input..." />
                    <GlassInput variant="filled" placeholder="Filled input..." />
                  </div>
                </div>

                <div className="space-y-4">
                  <Label>With Icons</Label>
                  <div className="grid gap-4 max-w-md">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <GlassInput placeholder="Search..." className="pl-10" />
                    </div>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <GlassInput type="email" placeholder="Email address..." className="pl-10" />
                    </div>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <GlassInput type="password" placeholder="Password..." className="pl-10" />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <Label>Form Example</Label>
                  <GlassCard className="max-w-md">
                    <CardHeader>
                      <CardTitle>Sign In</CardTitle>
                      <CardDescription>Enter your credentials to continue</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <GlassInput id="email" type="email" placeholder="you@example.com" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <GlassInput id="password" type="password" placeholder="••••••••" />
                      </div>
                      <GlassButton className="w-full">Sign In</GlassButton>
                    </CardContent>
                  </GlassCard>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Feedback Tab */}
          <TabsContent value="feedback" className="space-y-8 mt-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Feedback Components</h3>
              <div className="grid gap-6">
                <div className="space-y-4">
                  <Label>Badges</Label>
                  <div className="flex flex-wrap gap-4">
                    <GlassBadge>Default</GlassBadge>
                    <GlassBadge variant="secondary">Secondary</GlassBadge>
                    <GlassBadge variant="success">Success</GlassBadge>
                    <GlassBadge variant="warning">Warning</GlassBadge>
                    <GlassBadge variant="destructive">Error</GlassBadge>
                  </div>
                </div>

                <div className="space-y-4">
                  <Label>Progress Bars</Label>
                  <div className="space-y-4 max-w-md">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Default Progress</span>
                        <span>{progress}%</span>
                      </div>
                      <GlassProgress value={progress} />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Shimmer Effect</span>
                        <span>75%</span>
                      </div>
                      <GlassProgress value={75} variant="shimmer" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Pulse Effect</span>
                        <span>50%</span>
                      </div>
                      <GlassProgress value={50} variant="pulse" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Glow Effect</span>
                        <span>90%</span>
                      </div>
                      <GlassProgress value={90} variant="glow" />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <Label>Tooltips</Label>
                  <div className="flex flex-wrap gap-4">
                    <GlassTooltip>
                      <GlassTooltipTrigger asChild>
                        <GlassButton variant="outline">Hover me</GlassButton>
                      </GlassTooltipTrigger>
                      <GlassTooltipContent>
                        <p>This is a glass tooltip</p>
                      </GlassTooltipContent>
                    </GlassTooltip>
                    <GlassTooltip>
                      <GlassTooltipTrigger asChild>
                        <GlassButton variant="ghost">Bottom tooltip</GlassButton>
                      </GlassTooltipTrigger>
                      <GlassTooltipContent side="bottom">
                        <p>Another tooltip example</p>
                      </GlassTooltipContent>
                    </GlassTooltip>
                    <GlassTooltip>
                      <GlassTooltipTrigger asChild>
                        <GlassButton>Right tooltip</GlassButton>
                      </GlassTooltipTrigger>
                      <GlassTooltipContent side="right">
                        <p>Right side tooltip</p>
                      </GlassTooltipContent>
                    </GlassTooltip>
                  </div>
                </div>

                <div className="space-y-4">
                  <Label>Modal Dialog</Label>
                  <div>
                    <GlassModal open={modalOpen} onOpenChange={setModalOpen}>
                      <GlassModalTrigger asChild>
                        <GlassButton>
                          Open Glass Modal
                        </GlassButton>
                      </GlassModalTrigger>
                      <GlassModalContent>
                        <GlassModalHeader>
                          <GlassModalTitle>Glass Modal</GlassModalTitle>
                          <GlassModalDescription>
                            This is a glassmorphic modal dialog
                          </GlassModalDescription>
                        </GlassModalHeader>
                        <div className="space-y-4">
                          <p className="text-sm text-muted-foreground">
                            Modal content with glassmorphism effects. The backdrop has a blur effect
                            and the modal itself uses glass styling.
                          </p>
                          <div className="flex justify-end gap-2">
                            <GlassButton variant="ghost" onClick={() => setModalOpen(false)}>
                              Cancel
                            </GlassButton>
                            <GlassButton onClick={() => setModalOpen(false)}>
                              Confirm
                            </GlassButton>
                          </div>
                        </div>
                      </GlassModalContent>
                    </GlassModal>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Navigation Tab */}
          <TabsContent value="navigation" className="space-y-8 mt-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Navigation Components</h3>
              <div className="grid gap-6">
                <div className="space-y-4">
                  <Label>Glass Tabs</Label>
                  <GlassTabs defaultValue="tab1">
                    <TabsList>
                      <TabsTrigger value="tab1">Overview</TabsTrigger>
                      <TabsTrigger value="tab2">Analytics</TabsTrigger>
                      <TabsTrigger value="tab3">Reports</TabsTrigger>
                      <TabsTrigger value="tab4">Settings</TabsTrigger>
                    </TabsList>
                    <TabsContent value="tab1" className="mt-4">
                      <GlassCard>
                        <CardContent className="pt-6">
                          <p>Overview content with glass styling</p>
                        </CardContent>
                      </GlassCard>
                    </TabsContent>
                    <TabsContent value="tab2" className="mt-4">
                      <GlassCard>
                        <CardContent className="pt-6">
                          <p>Analytics content with glass styling</p>
                        </CardContent>
                      </GlassCard>
                    </TabsContent>
                    <TabsContent value="tab3" className="mt-4">
                      <GlassCard>
                        <CardContent className="pt-6">
                          <p>Reports content with glass styling</p>
                        </CardContent>
                      </GlassCard>
                    </TabsContent>
                    <TabsContent value="tab4" className="mt-4">
                      <GlassCard>
                        <CardContent className="pt-6">
                          <p>Settings content with glass styling</p>
                        </CardContent>
                      </GlassCard>
                    </TabsContent>
                  </GlassTabs>
                </div>

                <div className="space-y-4">
                  <Label>Dropdown Menu</Label>
                  <GlassDropdownMenu>
                    <GlassDropdownMenuTrigger asChild>
                      <GlassButton variant="outline">
                        Options
                        <ChevronDown className="ml-2 h-4 w-4" />
                      </GlassButton>
                    </GlassDropdownMenuTrigger>
                    <GlassDropdownMenuContent>
                      <GlassDropdownMenuItem>
                        <User className="mr-2 h-4 w-4" />
                        Profile
                      </GlassDropdownMenuItem>
                      <GlassDropdownMenuItem>
                        <Settings className="mr-2 h-4 w-4" />
                        Settings
                      </GlassDropdownMenuItem>
                      <GlassDropdownMenuItem>
                        <Bell className="mr-2 h-4 w-4" />
                        Notifications
                      </GlassDropdownMenuItem>
                      <GlassDropdownMenuSeparator />
                      <GlassDropdownMenuItem>
                        Sign Out
                      </GlassDropdownMenuItem>
                    </GlassDropdownMenuContent>
                  </GlassDropdownMenu>
                </div>

                <div className="space-y-4">
                  <Label>Navigation Bar Example</Label>
                  <GlassCard className="p-4">
                    <nav className="flex items-center justify-between">
                      <div className="flex items-center gap-6">
                        <GlassButton variant="ghost" size="icon">
                          <Menu className="h-5 w-5" />
                        </GlassButton>
                        <div className="flex gap-2">
                          <GlassButton variant="ghost">Home</GlassButton>
                          <GlassButton variant="ghost">About</GlassButton>
                          <GlassButton variant="ghost">Services</GlassButton>
                          <GlassButton variant="ghost">Contact</GlassButton>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <GlassButton variant="ghost" size="icon">
                          <Search className="h-4 w-4" />
                        </GlassButton>
                        <GlassButton variant="ghost" size="icon">
                          <Bell className="h-4 w-4" />
                        </GlassButton>
                        <GlassButton>Sign In</GlassButton>
                      </div>
                    </nav>
                  </GlassCard>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
    </GlassTooltipProvider>
  )
}
'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { CodeBlockWithExport } from '@/components/code-block-with-export'
import { 
  NeuButton,
  NeuCard,
  NeuCardHeader,
  NeuCardTitle,
  NeuCardDescription,
  NeuCardContent,
  NeuCardFooter,
  NeuInput,
  NeuSwitch,
  NeuCheckbox,
  NeuRadioGroup,
  NeuRadioGroupItem,
  NeuSlider,
  NeuBadge,
  NeuProgress
} from './index'
import { 
  Search, 
  Mail, 
  Lock, 
  User, 
  Heart, 
  Star, 
  Download,
  Settings,
  Check,
  X,
  AlertCircle,
  Info
} from 'lucide-react'

export function NeuShowcase() {
  const [switchState, setSwitchState] = useState(false)
  const [checkboxState, setCheckboxState] = useState(false)
  const [radioValue, setRadioValue] = useState('option1')
  const [sliderValue, setSliderValue] = useState([50])
  const [progressValue, setProgressValue] = useState(60)

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Neumorphism Component Library</CardTitle>
          <CardDescription>
            A comprehensive collection of 30+ neumorphic components built with shadcn/ui
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="buttons" className="w-full">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="buttons">Buttons</TabsTrigger>
              <TabsTrigger value="forms">Forms</TabsTrigger>
              <TabsTrigger value="cards">Cards</TabsTrigger>
              <TabsTrigger value="feedback">Feedback</TabsTrigger>
              <TabsTrigger value="data">Data</TabsTrigger>
            </TabsList>

            <TabsContent value="buttons" className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Button Variants</h3>
                <div className="flex flex-wrap gap-4">
                  <NeuButton>Default</NeuButton>
                  <NeuButton variant="primary">Primary</NeuButton>
                  <NeuButton variant="ghost">Ghost</NeuButton>
                  <NeuButton variant="pressed">Pressed</NeuButton>
                </div>

                <div className="mt-6">
                  <div className="relative mb-4">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-background px-2 text-muted-foreground">Code</span>
                    </div>
                  </div>
                  <CodeBlockWithExport
                    code={{
                      typescript: `<NeuButton>Default</NeuButton>
<NeuButton variant="primary">Primary</NeuButton>
<NeuButton variant="ghost">Ghost</NeuButton>
<NeuButton variant="pressed">Pressed</NeuButton>`,
                      tailwind: `<!-- Default Neumorphic Button -->
<button class="inline-flex items-center justify-center rounded-lg text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gray-100 text-gray-900 shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] hover:shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] active:shadow-[inset_2px_2px_4px_#bebebe,inset_-2px_-2px_4px_#ffffff] h-10 px-4 py-2">
  Default
</button>

<!-- Primary Neumorphic Button -->
<button class="inline-flex items-center justify-center rounded-lg text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow-[6px_6px_12px_rgba(0,0,0,0.15),-6px_-6px_12px_rgba(255,255,255,0.15)] hover:shadow-[8px_8px_16px_rgba(0,0,0,0.2),-8px_-8px_16px_rgba(255,255,255,0.2)] active:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.2),inset_-2px_-2px_4px_rgba(255,255,255,0.2)] h-10 px-4 py-2">
  Primary
</button>

<!-- Ghost Neumorphic Button -->
<button class="inline-flex items-center justify-center rounded-lg text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-transparent text-gray-900 hover:shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] active:shadow-[inset_2px_2px_4px_#bebebe,inset_-2px_-2px_4px_#ffffff] h-10 px-4 py-2">
  Ghost
</button>

<!-- Pressed Neumorphic Button -->
<button class="inline-flex items-center justify-center rounded-lg text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gray-100 text-gray-900 shadow-[inset_2px_2px_4px_#bebebe,inset_-2px_-2px_4px_#ffffff] hover:shadow-[inset_3px_3px_6px_#bebebe,inset_-3px_-3px_6px_#ffffff] h-10 px-4 py-2">
  Pressed
</button>`,
                      css: `.neu-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.2s;
  height: 2.5rem;
  padding: 0.5rem 1rem;
  background-color: #f3f4f6;
  color: #111827;
  box-shadow: 6px 6px 12px #bebebe, -6px -6px 12px #ffffff;
  border: none;
  cursor: pointer;
}

.neu-button:hover {
  box-shadow: 8px 8px 16px #bebebe, -8px -8px 16px #ffffff;
}

.neu-button:active {
  box-shadow: inset 2px 2px 4px #bebebe, inset -2px -2px 4px #ffffff;
}

.neu-button:focus-visible {
  outline: 2px solid transparent;
  outline-offset: 2px;
  box-shadow: 0 0 0 2px var(--ring-color);
}

.neu-button:disabled {
  pointer-events: none;
  opacity: 0.5;
}

/* Primary variant */
.neu-button--primary {
  background-color: var(--primary);
  color: var(--primary-foreground);
  box-shadow: 6px 6px 12px rgba(0,0,0,0.15), -6px -6px 12px rgba(255,255,255,0.15);
}

.neu-button--primary:hover {
  box-shadow: 8px 8px 16px rgba(0,0,0,0.2), -8px -8px 16px rgba(255,255,255,0.2);
}

/* Ghost variant */
.neu-button--ghost {
  background-color: transparent;
  box-shadow: none;
}

.neu-button--ghost:hover {
  box-shadow: 6px 6px 12px #bebebe, -6px -6px 12px #ffffff;
}

/* Pressed variant */
.neu-button--pressed {
  box-shadow: inset 2px 2px 4px #bebebe, inset -2px -2px 4px #ffffff;
}`,
                      scss: `// Neumorphic button styles
.neu-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.2s;
  height: 2.5rem;
  padding: 0.5rem 1rem;
  background-color: #f3f4f6;
  color: #111827;
  box-shadow: 6px 6px 12px #bebebe, -6px -6px 12px #ffffff;
  border: none;
  cursor: pointer;
  
  &:hover {
    box-shadow: 8px 8px 16px #bebebe, -8px -8px 16px #ffffff;
  }
  
  &:active {
    box-shadow: inset 2px 2px 4px #bebebe, inset -2px -2px 4px #ffffff;
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
  
  // Primary variant
  &--primary {
    background-color: var(--primary);
    color: var(--primary-foreground);
    box-shadow: 6px 6px 12px rgba(0,0,0,0.15), -6px -6px 12px rgba(255,255,255,0.15);
    
    &:hover {
      box-shadow: 8px 8px 16px rgba(0,0,0,0.2), -8px -8px 16px rgba(255,255,255,0.2);
    }
  }
  
  // Ghost variant
  &--ghost {
    background-color: transparent;
    box-shadow: none;
    
    &:hover {
      box-shadow: 6px 6px 12px #bebebe, -6px -6px 12px #ffffff;
    }
  }
  
  // Pressed variant
  &--pressed {
    box-shadow: inset 2px 2px 4px #bebebe, inset -2px -2px 4px #ffffff;
  }
}`
                    }}
                  />
                </div>

                <h3 className="text-lg font-semibold">Button Sizes</h3>
                <div className="flex flex-wrap items-center gap-4">
                  <NeuButton size="sm">Small</NeuButton>
                  <NeuButton size="default">Default</NeuButton>
                  <NeuButton size="lg">Large</NeuButton>
                  <NeuButton size="icon">
                    <Heart className="h-4 w-4" />
                  </NeuButton>
                </div>

                <h3 className="text-lg font-semibold">Icon Buttons</h3>
                <div className="flex flex-wrap gap-4">
                  <NeuButton size="icon">
                    <Search className="h-4 w-4" />
                  </NeuButton>
                  <NeuButton size="icon" variant="primary">
                    <Star className="h-4 w-4" />
                  </NeuButton>
                  <NeuButton size="icon">
                    <Download className="h-4 w-4" />
                  </NeuButton>
                  <NeuButton size="icon">
                    <Settings className="h-4 w-4" />
                  </NeuButton>
                </div>

                <h3 className="text-lg font-semibold">Button States</h3>
                <div className="flex flex-wrap gap-4">
                  <NeuButton>Normal</NeuButton>
                  <NeuButton disabled>Disabled</NeuButton>
                  <NeuButton className="hover:shadow-[15px_15px_30px_#bebebe,-15px_-15px_30px_#ffffff]">
                    Hover Me
                  </NeuButton>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="forms" className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Input Fields</h3>
                <div className="grid gap-4 max-w-md">
                  <div className="space-y-2">
                    <Label htmlFor="text-input">Text Input</Label>
                    <NeuInput id="text-input" placeholder="Enter text..." />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email-input">Email Input</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                      <NeuInput id="email-input" type="email" placeholder="email@example.com" className="pl-10" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password-input">Password Input</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                      <NeuInput id="password-input" type="password" placeholder="••••••••" className="pl-10" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="search-input">Search Input</Label>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                      <NeuInput id="search-input" placeholder="Search..." className="pl-10" />
                    </div>
                  </div>
                </div>

                <h3 className="text-lg font-semibold">Toggles & Selections</h3>
                <div className="space-y-4 max-w-md">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="neu-switch">Enable notifications</Label>
                    <NeuSwitch
                      id="neu-switch"
                      checked={switchState}
                      onCheckedChange={setSwitchState}
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <NeuCheckbox 
                      id="neu-checkbox"
                      checked={checkboxState}
                      onCheckedChange={(checked) => setCheckboxState(checked === true)}
                    />
                    <Label htmlFor="neu-checkbox">I agree to the terms and conditions</Label>
                  </div>

                  <div className="space-y-2">
                    <Label>Select an option</Label>
                    <NeuRadioGroup value={radioValue} onValueChange={setRadioValue}>
                      <div className="flex items-center space-x-2">
                        <NeuRadioGroupItem value="option1" id="option1" />
                        <Label htmlFor="option1">Option 1</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <NeuRadioGroupItem value="option2" id="option2" />
                        <Label htmlFor="option2">Option 2</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <NeuRadioGroupItem value="option3" id="option3" />
                        <Label htmlFor="option3">Option 3</Label>
                      </div>
                    </NeuRadioGroup>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label>Volume</Label>
                      <span className="text-sm text-gray-600">{sliderValue[0]}%</span>
                    </div>
                    <NeuSlider
                      value={sliderValue}
                      onValueChange={setSliderValue}
                      max={100}
                      step={1}
                    />
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="cards" className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <NeuCard>
                  <NeuCardHeader>
                    <NeuCardTitle>Basic Card</NeuCardTitle>
                    <NeuCardDescription>
                      A simple neumorphic card with header and content
                    </NeuCardDescription>
                  </NeuCardHeader>
                  <NeuCardContent>
                    <p className="text-gray-600">
                      This is a basic neumorphic card component that uses realistic shadows
                      to create depth and elevation.
                    </p>
                  </NeuCardContent>
                  <NeuCardFooter>
                    <NeuButton size="sm">Learn More</NeuButton>
                  </NeuCardFooter>
                </NeuCard>

                <NeuCard>
                  <NeuCardHeader>
                    <div className="flex items-center justify-between">
                      <NeuCardTitle>Interactive Card</NeuCardTitle>
                      <NeuBadge variant="primary">New</NeuBadge>
                    </div>
                    <NeuCardDescription>
                      Card with interactive elements
                    </NeuCardDescription>
                  </NeuCardHeader>
                  <NeuCardContent className="space-y-4">
                    <div className="flex gap-2">
                      <NeuButton size="sm" variant="primary">
                        <Star className="mr-2 h-3 w-3" />
                        Star
                      </NeuButton>
                      <NeuButton size="sm">
                        <Heart className="mr-2 h-3 w-3" />
                        Like
                      </NeuButton>
                    </div>
                    <NeuProgress value={progressValue} />
                  </NeuCardContent>
                </NeuCard>

                <NeuCard className="md:col-span-2">
                  <NeuCardHeader>
                    <NeuCardTitle>Form Card</NeuCardTitle>
                    <NeuCardDescription>
                      A card containing form elements
                    </NeuCardDescription>
                  </NeuCardHeader>
                  <NeuCardContent>
                    <form className="space-y-4">
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="first-name">First Name</Label>
                          <NeuInput id="first-name" placeholder="John" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="last-name">Last Name</Label>
                          <NeuInput id="last-name" placeholder="Doe" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="bio">Bio</Label>
                        <NeuInput id="bio" placeholder="Tell us about yourself..." />
                      </div>
                      <div className="flex items-center space-x-2">
                        <NeuCheckbox id="newsletter" />
                        <Label htmlFor="newsletter">Subscribe to newsletter</Label>
                      </div>
                    </form>
                  </NeuCardContent>
                  <NeuCardFooter className="flex gap-2">
                    <NeuButton variant="primary">Save Changes</NeuButton>
                    <NeuButton variant="ghost">Cancel</NeuButton>
                  </NeuCardFooter>
                </NeuCard>
              </div>
            </TabsContent>

            <TabsContent value="feedback" className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Badges</h3>
                <div className="flex flex-wrap gap-2">
                  <NeuBadge>Default</NeuBadge>
                  <NeuBadge variant="primary">Primary</NeuBadge>
                  <NeuBadge variant="secondary">Secondary</NeuBadge>
                  <NeuBadge variant="success">Success</NeuBadge>
                  <NeuBadge variant="warning">Warning</NeuBadge>
                  <NeuBadge variant="danger">Danger</NeuBadge>
                </div>

                <h3 className="text-lg font-semibold">Badge with Icons</h3>
                <div className="flex flex-wrap gap-2">
                  <NeuBadge variant="success">
                    <Check className="mr-1 h-3 w-3" />
                    Completed
                  </NeuBadge>
                  <NeuBadge variant="warning">
                    <AlertCircle className="mr-1 h-3 w-3" />
                    Pending
                  </NeuBadge>
                  <NeuBadge variant="danger">
                    <X className="mr-1 h-3 w-3" />
                    Failed
                  </NeuBadge>
                  <NeuBadge variant="primary">
                    <Info className="mr-1 h-3 w-3" />
                    Info
                  </NeuBadge>
                </div>

                <h3 className="text-lg font-semibold">Progress Indicators</h3>
                <div className="space-y-4 max-w-md">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Loading...</span>
                      <span>{progressValue}%</span>
                    </div>
                    <NeuProgress value={progressValue} />
                  </div>
                  <div className="flex gap-2">
                    <NeuButton 
                      size="sm"
                      onClick={() => setProgressValue(Math.max(0, progressValue - 10))}
                    >
                      -10%
                    </NeuButton>
                    <NeuButton 
                      size="sm"
                      onClick={() => setProgressValue(Math.min(100, progressValue + 10))}
                    >
                      +10%
                    </NeuButton>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="data" className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Data Display</h3>
                <NeuCard>
                  <NeuCardHeader>
                    <NeuCardTitle>Statistics</NeuCardTitle>
                  </NeuCardHeader>
                  <NeuCardContent>
                    <div className="grid gap-6 md:grid-cols-3">
                      <div className="space-y-2">
                        <p className="text-sm text-gray-600">Total Users</p>
                        <p className="text-2xl font-bold">1,234</p>
                        <NeuBadge variant="success">+12%</NeuBadge>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm text-gray-600">Revenue</p>
                        <p className="text-2xl font-bold">$45.2K</p>
                        <NeuBadge variant="warning">+5%</NeuBadge>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm text-gray-600">Active Projects</p>
                        <p className="text-2xl font-bold">89</p>
                        <NeuBadge variant="danger">-3%</NeuBadge>
                      </div>
                    </div>
                  </NeuCardContent>
                </NeuCard>

                <h3 className="text-lg font-semibold">List Items</h3>
                <div className="space-y-2">
                  {['Item 1', 'Item 2', 'Item 3'].map((item, index) => (
                    <NeuCard key={index} className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#f0f0f0] to-[#cacaca] shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff] flex items-center justify-center">
                            <User className="h-5 w-5 text-gray-600" />
                          </div>
                          <div>
                            <p className="font-medium">{item}</p>
                            <p className="text-sm text-gray-600">Description for {item}</p>
                          </div>
                        </div>
                        <NeuButton size="sm" variant="ghost">View</NeuButton>
                      </div>
                    </NeuCard>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
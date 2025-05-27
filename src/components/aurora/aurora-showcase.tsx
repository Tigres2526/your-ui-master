'use client'

import React, { useState } from 'react'
import { AuroraButton } from './aurora-button'
import { AuroraCard, AuroraCardContent, AuroraCardDescription, AuroraCardHeader, AuroraCardTitle } from './aurora-card'
import { AuroraInput } from './aurora-input'
import { AuroraBadge } from './aurora-badge'
import { AuroraProgress } from './aurora-progress'
import { AuroraTabs, AuroraTabsList, AuroraTabsTrigger, AuroraTabsContent } from './aurora-tabs'
import { AuroraSwitch } from './aurora-switch'
import { AuroraCheckbox } from './aurora-checkbox'
import { AuroraRadioGroup, AuroraRadioGroupItem } from './aurora-radio'
import { AuroraSlider } from './aurora-slider'
import { 
  AuroraModal,
  AuroraModalContent,
  AuroraModalDescription,
  AuroraModalHeader,
  AuroraModalTitle,
  AuroraModalTrigger,
} from './aurora-modal'
import {
  AuroraTooltip,
  AuroraTooltipContent,
  AuroraTooltipProvider,
  AuroraTooltipTrigger,
} from './aurora-tooltip'
import {
  AuroraDropdownMenu,
  AuroraDropdownMenuContent,
  AuroraDropdownMenuItem,
  AuroraDropdownMenuLabel,
  AuroraDropdownMenuSeparator,
  AuroraDropdownMenuTrigger,
} from './aurora-dropdown'
import { Label } from '@/components/ui/label'
import { CodeBlockWithExport } from '@/components/code-block-with-export'

export function AuroraShowcase() {
  const [progress, setProgress] = useState(70)
  const [sliderValue, setSliderValue] = useState([50])
  const [switchChecked, setSwitchChecked] = useState(false)
  const [checkboxChecked, setCheckboxChecked] = useState(false)
  const [radioValue, setRadioValue] = useState('option-1')

  return (
    <div className="space-y-12">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-blue-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Buttons */}
      <div>
        <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Buttons</h3>
        <div className="space-y-6">
          <div className="flex flex-wrap gap-4">
            <AuroraButton variant="default">Default</AuroraButton>
            <AuroraButton variant="outline">Outline</AuroraButton>
            <AuroraButton variant="ghost">Ghost</AuroraButton>
            <AuroraButton variant="glow">Glow</AuroraButton>
          </div>
          <div className="flex flex-wrap gap-4">
            <AuroraButton size="sm">Small</AuroraButton>
            <AuroraButton size="md">Medium</AuroraButton>
            <AuroraButton size="lg">Large</AuroraButton>
            <AuroraButton size="xl">Extra Large</AuroraButton>
          </div>
          <CodeBlockWithExport
            code={{
              typescript: `import { AuroraButton } from '@/components/aurora/aurora-button'

<AuroraButton variant="default">Click me</AuroraButton>
<AuroraButton variant="outline">Outline</AuroraButton>
<AuroraButton variant="ghost">Ghost</AuroraButton>
<AuroraButton variant="glow">Glow</AuroraButton>`,
              css: `.aurora-button {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #00f2fe 100%);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  transition: all 0.3s;
}

.aurora-button:hover {
  box-shadow: 0 10px 30px rgba(118, 75, 162, 0.5);
}`,
            }}
            defaultFormat="typescript"
          />
        </div>
      </div>

      {/* Cards */}
      <div>
        <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Cards</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AuroraCard variant="default">
            <AuroraCardHeader>
              <AuroraCardTitle>Default Card</AuroraCardTitle>
              <AuroraCardDescription>This is a default aurora card with gradient borders</AuroraCardDescription>
            </AuroraCardHeader>
            <AuroraCardContent>
              <p className="text-sm text-muted-foreground">Card content goes here</p>
            </AuroraCardContent>
          </AuroraCard>
          <AuroraCard variant="gradient">
            <AuroraCardHeader>
              <AuroraCardTitle className="text-white">Gradient Card</AuroraCardTitle>
              <AuroraCardDescription className="text-white/80">Full gradient background</AuroraCardDescription>
            </AuroraCardHeader>
            <AuroraCardContent>
              <p className="text-sm text-white/80">Vibrant gradient card</p>
            </AuroraCardContent>
          </AuroraCard>
          <AuroraCard variant="glass">
            <AuroraCardHeader>
              <AuroraCardTitle>Glass Card</AuroraCardTitle>
              <AuroraCardDescription>Glassmorphism with aurora colors</AuroraCardDescription>
            </AuroraCardHeader>
            <AuroraCardContent>
              <p className="text-sm text-muted-foreground">Transparent glass effect</p>
            </AuroraCardContent>
          </AuroraCard>
          <AuroraCard variant="floating">
            <AuroraCardHeader>
              <AuroraCardTitle>Floating Card</AuroraCardTitle>
              <AuroraCardDescription>Animated floating effect</AuroraCardDescription>
            </AuroraCardHeader>
            <AuroraCardContent>
              <p className="text-sm text-muted-foreground">Hover for scale effect</p>
            </AuroraCardContent>
          </AuroraCard>
        </div>
      </div>

      {/* Form Elements */}
      <div>
        <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Form Elements</h3>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <Label htmlFor="input-default">Default Input</Label>
              <AuroraInput id="input-default" placeholder="Enter text..." variant="default" />
            </div>
            <div>
              <Label htmlFor="input-outline">Outline Input</Label>
              <AuroraInput id="input-outline" placeholder="Enter text..." variant="outline" />
            </div>
            <div>
              <Label htmlFor="input-glow">Glow Input</Label>
              <AuroraInput id="input-glow" placeholder="Enter text..." variant="glow" />
            </div>
          </div>

          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <AuroraSwitch id="switch" checked={switchChecked} onCheckedChange={setSwitchChecked} />
              <Label htmlFor="switch">Aurora Switch</Label>
            </div>
            <div className="flex items-center space-x-2">
              <AuroraCheckbox id="checkbox" checked={checkboxChecked} onCheckedChange={(checked) => setCheckboxChecked(checked === true)} />
              <Label htmlFor="checkbox">Aurora Checkbox</Label>
            </div>
          </div>

          <div>
            <Label>Radio Group</Label>
            <AuroraRadioGroup value={radioValue} onValueChange={setRadioValue} className="flex space-x-4 mt-2">
              <div className="flex items-center space-x-2">
                <AuroraRadioGroupItem value="option-1" id="r1" />
                <Label htmlFor="r1">Option 1</Label>
              </div>
              <div className="flex items-center space-x-2">
                <AuroraRadioGroupItem value="option-2" id="r2" />
                <Label htmlFor="r2">Option 2</Label>
              </div>
              <div className="flex items-center space-x-2">
                <AuroraRadioGroupItem value="option-3" id="r3" />
                <Label htmlFor="r3">Option 3</Label>
              </div>
            </AuroraRadioGroup>
          </div>

          <div className="space-y-2">
            <Label>Slider ({sliderValue[0]}%)</Label>
            <AuroraSlider value={sliderValue} onValueChange={setSliderValue} max={100} step={1} />
          </div>
        </div>
      </div>

      {/* Badges */}
      <div>
        <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Badges</h3>
        <div className="flex flex-wrap gap-4">
          <AuroraBadge variant="default">Default</AuroraBadge>
          <AuroraBadge variant="outline">Outline</AuroraBadge>
          <AuroraBadge variant="ghost">Ghost</AuroraBadge>
        </div>
      </div>

      {/* Progress */}
      <div>
        <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Progress</h3>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-2">
              <Label>Default Progress</Label>
              <span className="text-sm text-muted-foreground">{progress}%</span>
            </div>
            <AuroraProgress value={progress} variant="default" />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <Label>Glass Progress</Label>
              <span className="text-sm text-muted-foreground">{progress}%</span>
            </div>
            <AuroraProgress value={progress} variant="glass" />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <Label>Glow Progress</Label>
              <span className="text-sm text-muted-foreground">{progress}%</span>
            </div>
            <AuroraProgress value={progress} variant="glow" />
          </div>
          <div className="flex gap-2 mt-4">
            <AuroraButton size="sm" onClick={() => setProgress(Math.max(0, progress - 10))}>-10%</AuroraButton>
            <AuroraButton size="sm" onClick={() => setProgress(Math.min(100, progress + 10))}>+10%</AuroraButton>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div>
        <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Tabs</h3>
        <AuroraTabs defaultValue="tab1" className="w-full">
          <AuroraTabsList>
            <AuroraTabsTrigger value="tab1">Tab 1</AuroraTabsTrigger>
            <AuroraTabsTrigger value="tab2">Tab 2</AuroraTabsTrigger>
            <AuroraTabsTrigger value="tab3">Tab 3</AuroraTabsTrigger>
          </AuroraTabsList>
          <AuroraTabsContent value="tab1">
            <AuroraCard>
              <AuroraCardHeader>
                <AuroraCardTitle>Tab 1 Content</AuroraCardTitle>
                <AuroraCardDescription>This is the content for the first tab</AuroraCardDescription>
              </AuroraCardHeader>
            </AuroraCard>
          </AuroraTabsContent>
          <AuroraTabsContent value="tab2">
            <AuroraCard>
              <AuroraCardHeader>
                <AuroraCardTitle>Tab 2 Content</AuroraCardTitle>
                <AuroraCardDescription>This is the content for the second tab</AuroraCardDescription>
              </AuroraCardHeader>
            </AuroraCard>
          </AuroraTabsContent>
          <AuroraTabsContent value="tab3">
            <AuroraCard>
              <AuroraCardHeader>
                <AuroraCardTitle>Tab 3 Content</AuroraCardTitle>
                <AuroraCardDescription>This is the content for the third tab</AuroraCardDescription>
              </AuroraCardHeader>
            </AuroraCard>
          </AuroraTabsContent>
        </AuroraTabs>
      </div>

      {/* Modal & Tooltips */}
      <div>
        <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Modal & Tooltips</h3>
        <div className="flex flex-wrap gap-4">
          <AuroraModal>
            <AuroraModalTrigger asChild>
              <AuroraButton>Open Modal</AuroraButton>
            </AuroraModalTrigger>
            <AuroraModalContent>
              <AuroraModalHeader>
                <AuroraModalTitle>Aurora Modal</AuroraModalTitle>
                <AuroraModalDescription>
                  This is a beautiful modal with aurora gradient effects
                </AuroraModalDescription>
              </AuroraModalHeader>
              <div className="py-4">
                <p className="text-sm text-muted-foreground">
                  Modal content goes here. Notice the gradient borders and backdrop blur effect.
                </p>
              </div>
            </AuroraModalContent>
          </AuroraModal>

          <AuroraTooltipProvider>
            <AuroraTooltip>
              <AuroraTooltipTrigger asChild>
                <AuroraButton variant="outline">Hover for Tooltip</AuroraButton>
              </AuroraTooltipTrigger>
              <AuroraTooltipContent>
                <p>Aurora gradient tooltip</p>
              </AuroraTooltipContent>
            </AuroraTooltip>
          </AuroraTooltipProvider>

          <AuroraDropdownMenu>
            <AuroraDropdownMenuTrigger asChild>
              <AuroraButton variant="ghost">Open Dropdown</AuroraButton>
            </AuroraDropdownMenuTrigger>
            <AuroraDropdownMenuContent>
              <AuroraDropdownMenuLabel>My Account</AuroraDropdownMenuLabel>
              <AuroraDropdownMenuSeparator />
              <AuroraDropdownMenuItem>Profile</AuroraDropdownMenuItem>
              <AuroraDropdownMenuItem>Settings</AuroraDropdownMenuItem>
              <AuroraDropdownMenuItem>Team</AuroraDropdownMenuItem>
              <AuroraDropdownMenuSeparator />
              <AuroraDropdownMenuItem>Log out</AuroraDropdownMenuItem>
            </AuroraDropdownMenuContent>
          </AuroraDropdownMenu>
        </div>
      </div>
    </div>
  )
}
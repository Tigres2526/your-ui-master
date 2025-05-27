'use client'

import React from 'react'
import { MemphisButton } from './memphis-button'
import { MemphisCard, MemphisCardHeader, MemphisCardTitle, MemphisCardDescription, MemphisCardContent, MemphisCardFooter } from './memphis-card'
import { MemphisInput } from './memphis-input'
import { MemphisBadge } from './memphis-badge'
import { MemphisProgress } from './memphis-progress'
import { MemphisTabs, MemphisTabsList, MemphisTabsTrigger, MemphisTabsContent } from './memphis-tabs'
import { MemphisSwitch } from './memphis-switch'
import { MemphisCheckbox } from './memphis-checkbox'
import { MemphisRadioGroup, MemphisRadioGroupItem } from './memphis-radio'
import { MemphisSelect, MemphisSelectContent, MemphisSelectItem, MemphisSelectTrigger, MemphisSelectValue } from './memphis-select'
import { Label } from '@/components/ui/label'
import { Star, Zap, Heart, Music } from 'lucide-react'

export function MemphisShowcase() {
  const [checked, setChecked] = React.useState(false)
  const [switchChecked, setSwitchChecked] = React.useState(false)
  const [radioValue, setRadioValue] = React.useState('option-1')
  const [selectValue, setSelectValue] = React.useState('')

  return (
    <div className="space-y-12">
      {/* Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-[#FF1744] rotate-45" />
        <div className="absolute top-40 right-20 w-16 h-16 border-4 border-black rounded-full" />
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-[#FFEB3B] clip-path-triangle" />
        <div className="absolute bottom-40 right-1/3 w-32 h-32 bg-[#00BCD4] opacity-50" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }} />
      </div>

      {/* Buttons */}
      <section className="relative">
        <h3 className="text-2xl font-black uppercase mb-6">BUTTONS</h3>
        <div className="flex flex-wrap gap-4">
          <MemphisButton>DEFAULT</MemphisButton>
          <MemphisButton variant="primary">
            <Star className="w-4 h-4 mr-2" />
            PRIMARY
          </MemphisButton>
          <MemphisButton variant="secondary">SECONDARY</MemphisButton>
          <MemphisButton variant="accent">
            <Zap className="w-4 h-4 mr-2" />
            ACCENT
          </MemphisButton>
          <MemphisButton variant="ghost">GHOST</MemphisButton>
          <MemphisButton variant="outline">OUTLINE</MemphisButton>
        </div>
        <div className="flex flex-wrap gap-4 mt-4">
          <MemphisButton size="sm">SMALL</MemphisButton>
          <MemphisButton size="default">DEFAULT</MemphisButton>
          <MemphisButton size="lg">LARGE</MemphisButton>
          <MemphisButton size="icon">
            <Heart className="w-5 h-5" />
          </MemphisButton>
        </div>
      </section>

      {/* Cards */}
      <section className="relative">
        <h3 className="text-2xl font-black uppercase mb-6">CARDS</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <MemphisCard>
            <MemphisCardHeader>
              <MemphisCardTitle>DEFAULT CARD</MemphisCardTitle>
              <MemphisCardDescription>
                Bold Memphis-style card with hard shadows
              </MemphisCardDescription>
            </MemphisCardHeader>
            <MemphisCardContent>
              <p>This card features the iconic Memphis design aesthetic with geometric shapes and vibrant colors.</p>
            </MemphisCardContent>
            <MemphisCardFooter>
              <MemphisButton size="sm">ACTION</MemphisButton>
              <MemphisBadge variant="primary">NEW!</MemphisBadge>
            </MemphisCardFooter>
          </MemphisCard>

          <MemphisCard variant="primary">
            <MemphisCardHeader>
              <MemphisCardTitle>PRIMARY CARD</MemphisCardTitle>
              <MemphisCardDescription>
                Hot pink background for maximum impact
              </MemphisCardDescription>
            </MemphisCardHeader>
            <MemphisCardContent>
              <p className="text-white">Memphis design celebrates bold colors and playful geometry.</p>
            </MemphisCardContent>
          </MemphisCard>

          <MemphisCard variant="pattern">
            <MemphisCardHeader>
              <MemphisCardTitle>PATTERN CARD</MemphisCardTitle>
              <MemphisCardDescription>
                With dot pattern overlay
              </MemphisCardDescription>
            </MemphisCardHeader>
            <MemphisCardContent>
              <p>Background patterns add visual interest and texture to the design.</p>
            </MemphisCardContent>
          </MemphisCard>

          <MemphisCard variant="floating">
            <MemphisCardHeader>
              <MemphisCardTitle>FLOATING CARD</MemphisCardTitle>
              <MemphisCardDescription>
                Hover me for effect!
              </MemphisCardDescription>
            </MemphisCardHeader>
            <MemphisCardContent>
              <p>Interactive shadows create a playful floating effect on hover.</p>
            </MemphisCardContent>
          </MemphisCard>
        </div>
      </section>

      {/* Form Elements */}
      <section className="relative">
        <h3 className="text-2xl font-black uppercase mb-6">FORM ELEMENTS</h3>
        <div className="space-y-6 max-w-md">
          <div className="space-y-2">
            <Label className="font-bold uppercase">Text Input</Label>
            <MemphisInput placeholder="TYPE SOMETHING..." />
          </div>

          <div className="space-y-2">
            <Label className="font-bold uppercase">Filled Input</Label>
            <MemphisInput variant="filled" placeholder="YELLOW BACKGROUND..." />
          </div>

          <div className="space-y-2">
            <Label className="font-bold uppercase">Underline Input</Label>
            <MemphisInput variant="underline" placeholder="MINIMAL STYLE..." />
          </div>

          <div className="flex items-center space-x-2">
            <MemphisCheckbox 
              id="memphis-checkbox" 
              checked={checked}
              onCheckedChange={(value) => setChecked(value === true)}
            />
            <Label htmlFor="memphis-checkbox" className="font-bold uppercase cursor-pointer">
              ACCEPT TERMS
            </Label>
          </div>

          <div className="flex items-center space-x-2">
            <MemphisCheckbox 
              id="memphis-checkbox-circle" 
              variant="circle"
            />
            <Label htmlFor="memphis-checkbox-circle" className="font-bold uppercase cursor-pointer">
              CIRCLE VARIANT
            </Label>
          </div>

          <div className="flex items-center space-x-2">
            <MemphisSwitch 
              id="memphis-switch" 
              checked={switchChecked}
              onCheckedChange={setSwitchChecked}
            />
            <Label htmlFor="memphis-switch" className="font-bold uppercase cursor-pointer">
              NOTIFICATIONS
            </Label>
          </div>

          <div className="space-y-2">
            <Label className="font-bold uppercase">Radio Options</Label>
            <MemphisRadioGroup value={radioValue} onValueChange={setRadioValue}>
              <div className="flex items-center space-x-2">
                <MemphisRadioGroupItem value="option-1" id="option-1" />
                <Label htmlFor="option-1" className="font-bold uppercase cursor-pointer">OPTION ONE</Label>
              </div>
              <div className="flex items-center space-x-2">
                <MemphisRadioGroupItem value="option-2" id="option-2" />
                <Label htmlFor="option-2" className="font-bold uppercase cursor-pointer">OPTION TWO</Label>
              </div>
              <div className="flex items-center space-x-2">
                <MemphisRadioGroupItem value="option-3" id="option-3" />
                <Label htmlFor="option-3" className="font-bold uppercase cursor-pointer">OPTION THREE</Label>
              </div>
            </MemphisRadioGroup>
          </div>

          <div className="space-y-2">
            <Label className="font-bold uppercase">Select Menu</Label>
            <MemphisSelect value={selectValue} onValueChange={setSelectValue}>
              <MemphisSelectTrigger>
                <MemphisSelectValue placeholder="CHOOSE ONE..." />
              </MemphisSelectTrigger>
              <MemphisSelectContent>
                <MemphisSelectItem value="option-1">OPTION ONE</MemphisSelectItem>
                <MemphisSelectItem value="option-2">OPTION TWO</MemphisSelectItem>
                <MemphisSelectItem value="option-3">OPTION THREE</MemphisSelectItem>
                <MemphisSelectItem value="option-4">OPTION FOUR</MemphisSelectItem>
              </MemphisSelectContent>
            </MemphisSelect>
          </div>
        </div>
      </section>

      {/* Badges */}
      <section className="relative">
        <h3 className="text-2xl font-black uppercase mb-6">BADGES</h3>
        <div className="flex flex-wrap gap-3">
          <MemphisBadge>DEFAULT</MemphisBadge>
          <MemphisBadge variant="primary">HOT!</MemphisBadge>
          <MemphisBadge variant="secondary">COOL</MemphisBadge>
          <MemphisBadge variant="accent">NEW</MemphisBadge>
          <MemphisBadge variant="outline">OUTLINE</MemphisBadge>
        </div>
        <div className="flex flex-wrap gap-3 mt-4">
          <MemphisBadge size="sm">SMALL</MemphisBadge>
          <MemphisBadge size="default">DEFAULT</MemphisBadge>
          <MemphisBadge size="lg">LARGE</MemphisBadge>
        </div>
      </section>

      {/* Progress */}
      <section className="relative">
        <h3 className="text-2xl font-black uppercase mb-6">PROGRESS</h3>
        <div className="space-y-4 max-w-md">
          <div>
            <div className="flex justify-between mb-2">
              <span className="font-bold uppercase">Primary</span>
              <span className="font-bold">75%</span>
            </div>
            <MemphisProgress value={75} color="primary" />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <span className="font-bold uppercase">Secondary</span>
              <span className="font-bold">50%</span>
            </div>
            <MemphisProgress value={50} color="secondary" />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <span className="font-bold uppercase">Accent</span>
              <span className="font-bold">90%</span>
            </div>
            <MemphisProgress value={90} color="accent" />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <span className="font-bold uppercase">Striped</span>
              <span className="font-bold">65%</span>
            </div>
            <MemphisProgress value={65} variant="striped" color="primary" />
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="relative">
        <h3 className="text-2xl font-black uppercase mb-6">TABS</h3>
        <MemphisTabs defaultValue="tab-1" className="w-full max-w-2xl">
          <MemphisTabsList variant="bordered">
            <MemphisTabsTrigger value="tab-1">
              <Music className="w-4 h-4 mr-2" />
              MUSIC
            </MemphisTabsTrigger>
            <MemphisTabsTrigger value="tab-2">ART</MemphisTabsTrigger>
            <MemphisTabsTrigger value="tab-3">STYLE</MemphisTabsTrigger>
          </MemphisTabsList>
          <MemphisTabsContent value="tab-1">
            <MemphisCard>
              <MemphisCardHeader>
                <MemphisCardTitle>MUSIC CONTENT</MemphisCardTitle>
                <MemphisCardDescription>
                  The soundtrack of the 80s
                </MemphisCardDescription>
              </MemphisCardHeader>
              <MemphisCardContent>
                <p>Memphis design was heavily influenced by the pop culture and music of the 1980s.</p>
              </MemphisCardContent>
            </MemphisCard>
          </MemphisTabsContent>
          <MemphisTabsContent value="tab-2">
            <MemphisCard variant="secondary">
              <MemphisCardHeader>
                <MemphisCardTitle>ART MOVEMENT</MemphisCardTitle>
                <MemphisCardDescription>
                  Breaking design conventions
                </MemphisCardDescription>
              </MemphisCardHeader>
              <MemphisCardContent>
                <p>The Memphis Group challenged traditional design norms with bold, unconventional aesthetics.</p>
              </MemphisCardContent>
            </MemphisCard>
          </MemphisTabsContent>
          <MemphisTabsContent value="tab-3">
            <MemphisCard variant="accent">
              <MemphisCardHeader>
                <MemphisCardTitle>STYLE GUIDE</MemphisCardTitle>
                <MemphisCardDescription>
                  Patterns, colors, and shapes
                </MemphisCardDescription>
              </MemphisCardHeader>
              <MemphisCardContent>
                <p>Memphis style is characterized by geometric shapes, bold colors, and playful patterns.</p>
              </MemphisCardContent>
            </MemphisCard>
          </MemphisTabsContent>
        </MemphisTabs>
      </section>

      <style jsx>{`
        .clip-path-triangle {
          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        }
      `}</style>
    </div>
  )
}
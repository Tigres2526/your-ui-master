'use client'

import React from 'react'
import { ClayButton } from './clay-button'
import { ClayCard, ClayCardHeader, ClayCardTitle, ClayCardDescription, ClayCardContent, ClayCardFooter } from './clay-card'
import { ClayInput } from './clay-input'
import { ClayBadge } from './clay-badge'
import { ClayProgress } from './clay-progress'
import { ClayTabs, ClayTabsList, ClayTabsTrigger, ClayTabsContent } from './clay-tabs'
import { ClaySwitch } from './clay-switch'
import { ClayCheckbox } from './clay-checkbox'
import { ClayRadioGroup, ClayRadioGroupItem } from './clay-radio'
import { ClaySlider } from './clay-slider'
import { Label } from '@/components/ui/label'

export function ClayShowcase() {
  const [checked, setChecked] = React.useState(false)
  const [switchChecked, setSwitchChecked] = React.useState(false)
  const [radioValue, setRadioValue] = React.useState('option-1')
  const [sliderValue, setSliderValue] = React.useState([50])
  const [progress] = React.useState(65)

  return (
    <div className="space-y-12">
      {/* Buttons */}
      <section>
        <h3 className="text-lg font-semibold mb-4 text-gray-800">Buttons</h3>
        <div className="flex flex-wrap gap-4">
          <ClayButton>Default</ClayButton>
          <ClayButton variant="primary">Primary</ClayButton>
          <ClayButton variant="secondary">Secondary</ClayButton>
          <ClayButton variant="accent">Accent</ClayButton>
          <ClayButton variant="ghost">Ghost</ClayButton>
          <ClayButton variant="outline">Outline</ClayButton>
        </div>
        <div className="flex flex-wrap gap-4 mt-4">
          <ClayButton size="sm">Small</ClayButton>
          <ClayButton size="default">Default</ClayButton>
          <ClayButton size="lg">Large</ClayButton>
          <ClayButton size="icon">🎨</ClayButton>
        </div>
      </section>

      {/* Cards */}
      <section>
        <h3 className="text-lg font-semibold mb-4 text-gray-800">Cards</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ClayCard>
            <ClayCardHeader>
              <ClayCardTitle>Default Card</ClayCardTitle>
              <ClayCardDescription>
                A soft, clay-like card with smooth shadows
              </ClayCardDescription>
            </ClayCardHeader>
            <ClayCardContent>
              <p>This card demonstrates the classic claymorphism style with its characteristic 3D appearance.</p>
            </ClayCardContent>
            <ClayCardFooter>
              <ClayButton size="sm">Action</ClayButton>
              <ClayBadge>New</ClayBadge>
            </ClayCardFooter>
          </ClayCard>

          <ClayCard variant="elevated">
            <ClayCardHeader>
              <ClayCardTitle>Elevated Card</ClayCardTitle>
              <ClayCardDescription>
                Higher elevation for more depth
              </ClayCardDescription>
            </ClayCardHeader>
            <ClayCardContent>
              <p>This card has a more pronounced shadow, making it appear to float above the surface.</p>
            </ClayCardContent>
          </ClayCard>

          <ClayCard variant="floating">
            <ClayCardHeader>
              <ClayCardTitle>Floating Card</ClayCardTitle>
              <ClayCardDescription>
                Interactive hover effects
              </ClayCardDescription>
            </ClayCardHeader>
            <ClayCardContent>
              <p>Hover over this card to see it lift up with a smooth animation.</p>
            </ClayCardContent>
          </ClayCard>

          <ClayCard variant="colored">
            <ClayCardHeader>
              <ClayCardTitle>Colored Card</ClayCardTitle>
              <ClayCardDescription>
                With gradient background
              </ClayCardDescription>
            </ClayCardHeader>
            <ClayCardContent>
              <p>This card features a subtle gradient background for visual interest.</p>
            </ClayCardContent>
          </ClayCard>
        </div>
      </section>

      {/* Form Elements */}
      <section>
        <h3 className="text-lg font-semibold mb-4 text-gray-800">Form Elements</h3>
        <div className="space-y-6 max-w-md">
          <div className="space-y-2">
            <Label>Input Field</Label>
            <ClayInput placeholder="Enter text..." />
          </div>

          <div className="space-y-2">
            <Label>Elevated Input</Label>
            <ClayInput variant="elevated" placeholder="Elevated style..." />
          </div>

          <div className="space-y-2">
            <Label>Filled Input</Label>
            <ClayInput variant="filled" placeholder="Filled style..." />
          </div>

          <div className="flex items-center space-x-2">
            <ClayCheckbox 
              id="clay-checkbox" 
              checked={checked}
              onCheckedChange={(value) => setChecked(value === true)}
            />
            <Label htmlFor="clay-checkbox">Accept terms and conditions</Label>
          </div>

          <div className="flex items-center space-x-2">
            <ClaySwitch 
              id="clay-switch" 
              checked={switchChecked}
              onCheckedChange={setSwitchChecked}
            />
            <Label htmlFor="clay-switch">Enable notifications</Label>
          </div>

          <div className="space-y-2">
            <Label>Radio Group</Label>
            <ClayRadioGroup value={radioValue} onValueChange={setRadioValue}>
              <div className="flex items-center space-x-2">
                <ClayRadioGroupItem value="option-1" id="option-1" />
                <Label htmlFor="option-1">Option 1</Label>
              </div>
              <div className="flex items-center space-x-2">
                <ClayRadioGroupItem value="option-2" id="option-2" />
                <Label htmlFor="option-2">Option 2</Label>
              </div>
              <div className="flex items-center space-x-2">
                <ClayRadioGroupItem value="option-3" id="option-3" />
                <Label htmlFor="option-3">Option 3</Label>
              </div>
            </ClayRadioGroup>
          </div>

          <div className="space-y-2">
            <Label>Slider</Label>
            <ClaySlider 
              value={sliderValue} 
              onValueChange={setSliderValue}
              max={100}
              step={1}
            />
            <p className="text-sm text-gray-600">Value: {sliderValue[0]}</p>
          </div>
        </div>
      </section>

      {/* Badges */}
      <section>
        <h3 className="text-lg font-semibold mb-4 text-gray-800">Badges</h3>
        <div className="flex flex-wrap gap-3">
          <ClayBadge>Default</ClayBadge>
          <ClayBadge variant="primary">Primary</ClayBadge>
          <ClayBadge variant="secondary">Secondary</ClayBadge>
          <ClayBadge variant="accent">Accent</ClayBadge>
          <ClayBadge variant="outline">Outline</ClayBadge>
        </div>
        <div className="flex flex-wrap gap-3 mt-4">
          <ClayBadge size="sm">Small</ClayBadge>
          <ClayBadge size="default">Default</ClayBadge>
          <ClayBadge size="lg">Large</ClayBadge>
        </div>
      </section>

      {/* Progress */}
      <section>
        <h3 className="text-lg font-semibold mb-4 text-gray-800">Progress</h3>
        <div className="space-y-4 max-w-md">
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm text-gray-600">Primary Progress</span>
              <span className="text-sm text-gray-600">{progress}%</span>
            </div>
            <ClayProgress value={progress} color="primary" />
          </div>
          <div>
            <ClayProgress value={45} color="secondary" />
          </div>
          <div>
            <ClayProgress value={80} color="accent" />
          </div>
          <div>
            <ClayProgress value={30} variant="elevated" />
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section>
        <h3 className="text-lg font-semibold mb-4 text-gray-800">Tabs</h3>
        <ClayTabs defaultValue="tab-1" className="w-full max-w-md">
          <ClayTabsList>
            <ClayTabsTrigger value="tab-1">Profile</ClayTabsTrigger>
            <ClayTabsTrigger value="tab-2">Settings</ClayTabsTrigger>
            <ClayTabsTrigger value="tab-3">Activity</ClayTabsTrigger>
          </ClayTabsList>
          <ClayTabsContent value="tab-1">
            <ClayCard>
              <ClayCardHeader>
                <ClayCardTitle>Profile Information</ClayCardTitle>
                <ClayCardDescription>
                  Manage your profile details
                </ClayCardDescription>
              </ClayCardHeader>
              <ClayCardContent>
                <p>Update your personal information and preferences here.</p>
              </ClayCardContent>
            </ClayCard>
          </ClayTabsContent>
          <ClayTabsContent value="tab-2">
            <ClayCard>
              <ClayCardHeader>
                <ClayCardTitle>Account Settings</ClayCardTitle>
                <ClayCardDescription>
                  Configure your account
                </ClayCardDescription>
              </ClayCardHeader>
              <ClayCardContent>
                <p>Manage your account settings and privacy options.</p>
              </ClayCardContent>
            </ClayCard>
          </ClayTabsContent>
          <ClayTabsContent value="tab-3">
            <ClayCard>
              <ClayCardHeader>
                <ClayCardTitle>Recent Activity</ClayCardTitle>
                <ClayCardDescription>
                  View your recent actions
                </ClayCardDescription>
              </ClayCardHeader>
              <ClayCardContent>
                <p>Track your recent activity and interactions.</p>
              </ClayCardContent>
            </ClayCard>
          </ClayTabsContent>
        </ClayTabs>
      </section>
    </div>
  )
}
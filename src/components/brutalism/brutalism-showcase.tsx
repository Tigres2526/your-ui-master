'use client'

import React, { useState } from 'react'
import { BrutalismButton } from './brutalism-button'
import { BrutalismCard, BrutalismCardContent, BrutalismCardDescription, BrutalismCardHeader, BrutalismCardTitle } from './brutalism-card'
import { BrutalismInput } from './brutalism-input'
import { BrutalismBadge } from './brutalism-badge'
import { BrutalismProgress } from './brutalism-progress'
import { BrutalismTabs, BrutalismTabsList, BrutalismTabsTrigger, BrutalismTabsContent } from './brutalism-tabs'
import { BrutalismSwitch } from './brutalism-switch'
import { BrutalismCheckbox } from './brutalism-checkbox'
import { BrutalismRadioGroup, BrutalismRadioGroupItem } from './brutalism-radio'
import { 
  BrutalismModal,
  BrutalismModalContent,
  BrutalismModalDescription,
  BrutalismModalHeader,
  BrutalismModalTitle,
  BrutalismModalTrigger,
} from './brutalism-modal'
import {
  BrutalismDropdownMenu,
  BrutalismDropdownMenuContent,
  BrutalismDropdownMenuItem,
  BrutalismDropdownMenuLabel,
  BrutalismDropdownMenuSeparator,
  BrutalismDropdownMenuTrigger,
} from './brutalism-dropdown'
import { Label } from '@/components/ui/label'
import { CodeBlockWithExport } from '@/components/code-block-with-export'

export function BrutalismShowcase() {
  const [progress, setProgress] = useState(70)
  const [switchChecked, setSwitchChecked] = useState(false)
  const [checkboxChecked, setCheckboxChecked] = useState(false)
  const [radioValue, setRadioValue] = useState('option-1')

  return (
    <div className="space-y-12">
      {/* Buttons */}
      <div>
        <h3 className="text-2xl font-black uppercase mb-6">BUTTONS</h3>
        <div className="space-y-6">
          <div className="flex flex-wrap gap-4">
            <BrutalismButton variant="default">DEFAULT</BrutalismButton>
            <BrutalismButton variant="danger">DANGER</BrutalismButton>
            <BrutalismButton variant="primary">PRIMARY</BrutalismButton>
            <BrutalismButton variant="outline">OUTLINE</BrutalismButton>
          </div>
          <div className="flex flex-wrap gap-4">
            <BrutalismButton size="sm">SMALL</BrutalismButton>
            <BrutalismButton size="md">MEDIUM</BrutalismButton>
            <BrutalismButton size="lg">LARGE</BrutalismButton>
            <BrutalismButton size="xl">EXTRA LARGE</BrutalismButton>
          </div>
          <CodeBlockWithExport
            code={{
              typescript: `import { BrutalismButton } from '@/components/brutalism/brutalism-button'

<BrutalismButton variant="default">CLICK ME</BrutalismButton>
<BrutalismButton variant="danger">DANGER</BrutalismButton>
<BrutalismButton variant="primary">PRIMARY</BrutalismButton>
<BrutalismButton variant="outline">OUTLINE</BrutalismButton>`,
              css: `.brutalism-button {
  background: #ffff00;
  color: black;
  border: 4px solid black;
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  font-weight: bold;
  box-shadow: 6px 6px 0 0 rgba(0, 0, 0, 1);
  transition: all 150ms;
}

.brutalism-button:hover {
  transform: translate(3px, 3px);
  box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 1);
}

.brutalism-button:active {
  transform: translate(6px, 6px);
  box-shadow: none;
}`,
            }}
            defaultFormat="typescript"
          />
        </div>
      </div>

      {/* Cards */}
      <div>
        <h3 className="text-2xl font-black uppercase mb-6">CARDS</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <BrutalismCard variant="default">
            <BrutalismCardHeader>
              <BrutalismCardTitle>DEFAULT CARD</BrutalismCardTitle>
              <BrutalismCardDescription>THIS IS A BRUTALIST CARD WITH BOLD BORDERS</BrutalismCardDescription>
            </BrutalismCardHeader>
            <BrutalismCardContent>
              <p className="text-sm font-medium">CARD CONTENT GOES HERE</p>
            </BrutalismCardContent>
          </BrutalismCard>
          <BrutalismCard variant="yellow">
            <BrutalismCardHeader>
              <BrutalismCardTitle>YELLOW CARD</BrutalismCardTitle>
              <BrutalismCardDescription>BRIGHT AND BOLD</BrutalismCardDescription>
            </BrutalismCardHeader>
            <BrutalismCardContent>
              <p className="text-sm font-medium">ATTENTION GRABBING</p>
            </BrutalismCardContent>
          </BrutalismCard>
          <BrutalismCard variant="red">
            <BrutalismCardHeader>
              <BrutalismCardTitle>RED CARD</BrutalismCardTitle>
              <BrutalismCardDescription>DANGER OR IMPORTANT</BrutalismCardDescription>
            </BrutalismCardHeader>
            <BrutalismCardContent>
              <p className="text-sm font-medium">HIGH PRIORITY CONTENT</p>
            </BrutalismCardContent>
          </BrutalismCard>
          <BrutalismCard variant="blue">
            <BrutalismCardHeader>
              <BrutalismCardTitle>BLUE CARD</BrutalismCardTitle>
              <BrutalismCardDescription>INFORMATIONAL</BrutalismCardDescription>
            </BrutalismCardHeader>
            <BrutalismCardContent>
              <p className="text-sm font-medium">HELPFUL INFORMATION</p>
            </BrutalismCardContent>
          </BrutalismCard>
        </div>
      </div>

      {/* Form Elements */}
      <div>
        <h3 className="text-2xl font-black uppercase mb-6">FORM ELEMENTS</h3>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <Label htmlFor="input-default" className="font-bold uppercase">DEFAULT INPUT</Label>
              <BrutalismInput id="input-default" placeholder="TYPE HERE..." variant="default" />
            </div>
            <div>
              <Label htmlFor="input-yellow" className="font-bold uppercase">YELLOW INPUT</Label>
              <BrutalismInput id="input-yellow" placeholder="TYPE HERE..." variant="yellow" />
            </div>
            <div>
              <Label htmlFor="input-danger" className="font-bold uppercase">DANGER INPUT</Label>
              <BrutalismInput id="input-danger" placeholder="TYPE HERE..." variant="danger" />
            </div>
          </div>

          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <BrutalismSwitch id="switch" checked={switchChecked} onCheckedChange={setSwitchChecked} />
              <Label htmlFor="switch" className="font-bold uppercase">BRUTALIST SWITCH</Label>
            </div>
            <div className="flex items-center space-x-2">
              <BrutalismCheckbox id="checkbox" checked={checkboxChecked} onCheckedChange={(checked) => setCheckboxChecked(checked === true)} />
              <Label htmlFor="checkbox" className="font-bold uppercase">BRUTALIST CHECKBOX</Label>
            </div>
          </div>

          <div>
            <Label className="font-bold uppercase">RADIO GROUP</Label>
            <BrutalismRadioGroup value={radioValue} onValueChange={setRadioValue} className="flex space-x-4 mt-2">
              <div className="flex items-center space-x-2">
                <BrutalismRadioGroupItem value="option-1" id="r1" />
                <Label htmlFor="r1" className="font-bold uppercase">OPTION 1</Label>
              </div>
              <div className="flex items-center space-x-2">
                <BrutalismRadioGroupItem value="option-2" id="r2" />
                <Label htmlFor="r2" className="font-bold uppercase">OPTION 2</Label>
              </div>
              <div className="flex items-center space-x-2">
                <BrutalismRadioGroupItem value="option-3" id="r3" />
                <Label htmlFor="r3" className="font-bold uppercase">OPTION 3</Label>
              </div>
            </BrutalismRadioGroup>
          </div>
        </div>
      </div>

      {/* Badges */}
      <div>
        <h3 className="text-2xl font-black uppercase mb-6">BADGES</h3>
        <div className="flex flex-wrap gap-4">
          <BrutalismBadge variant="default">DEFAULT</BrutalismBadge>
          <BrutalismBadge variant="danger">DANGER</BrutalismBadge>
          <BrutalismBadge variant="primary">PRIMARY</BrutalismBadge>
          <BrutalismBadge variant="success">SUCCESS</BrutalismBadge>
        </div>
      </div>

      {/* Progress */}
      <div>
        <h3 className="text-2xl font-black uppercase mb-6">PROGRESS</h3>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-2">
              <Label className="font-bold uppercase">DEFAULT PROGRESS</Label>
              <span className="text-sm font-bold">{progress}%</span>
            </div>
            <BrutalismProgress value={progress} variant="default" />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <Label className="font-bold uppercase">STRIPED PROGRESS</Label>
              <span className="text-sm font-bold">{progress}%</span>
            </div>
            <BrutalismProgress value={progress} variant="striped" />
          </div>
          <div className="flex gap-2 mt-4">
            <BrutalismButton size="sm" onClick={() => setProgress(Math.max(0, progress - 10))}>-10%</BrutalismButton>
            <BrutalismButton size="sm" onClick={() => setProgress(Math.min(100, progress + 10))}>+10%</BrutalismButton>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div>
        <h3 className="text-2xl font-black uppercase mb-6">TABS</h3>
        <BrutalismTabs defaultValue="tab1" className="w-full">
          <BrutalismTabsList>
            <BrutalismTabsTrigger value="tab1">TAB 1</BrutalismTabsTrigger>
            <BrutalismTabsTrigger value="tab2">TAB 2</BrutalismTabsTrigger>
            <BrutalismTabsTrigger value="tab3">TAB 3</BrutalismTabsTrigger>
          </BrutalismTabsList>
          <BrutalismTabsContent value="tab1">
            <BrutalismCardTitle>TAB 1 CONTENT</BrutalismCardTitle>
            <p className="mt-2 font-medium">THIS IS THE CONTENT FOR THE FIRST TAB</p>
          </BrutalismTabsContent>
          <BrutalismTabsContent value="tab2">
            <BrutalismCardTitle>TAB 2 CONTENT</BrutalismCardTitle>
            <p className="mt-2 font-medium">THIS IS THE CONTENT FOR THE SECOND TAB</p>
          </BrutalismTabsContent>
          <BrutalismTabsContent value="tab3">
            <BrutalismCardTitle>TAB 3 CONTENT</BrutalismCardTitle>
            <p className="mt-2 font-medium">THIS IS THE CONTENT FOR THE THIRD TAB</p>
          </BrutalismTabsContent>
        </BrutalismTabs>
      </div>

      {/* Modal & Dropdowns */}
      <div>
        <h3 className="text-2xl font-black uppercase mb-6">MODAL & DROPDOWNS</h3>
        <div className="flex flex-wrap gap-4">
          <BrutalismModal>
            <BrutalismModalTrigger asChild>
              <BrutalismButton>OPEN MODAL</BrutalismButton>
            </BrutalismModalTrigger>
            <BrutalismModalContent>
              <BrutalismModalHeader>
                <BrutalismModalTitle>BRUTALIST MODAL</BrutalismModalTitle>
                <BrutalismModalDescription>
                  THIS IS A HARSH, BOLD MODAL WITH THICK BORDERS
                </BrutalismModalDescription>
              </BrutalismModalHeader>
              <div className="py-4">
                <p className="text-sm font-medium">
                  MODAL CONTENT GOES HERE. NOTICE THE HARD SHADOWS AND BLACK BORDERS.
                </p>
              </div>
            </BrutalismModalContent>
          </BrutalismModal>

          <BrutalismDropdownMenu>
            <BrutalismDropdownMenuTrigger asChild>
              <BrutalismButton variant="outline">OPEN DROPDOWN</BrutalismButton>
            </BrutalismDropdownMenuTrigger>
            <BrutalismDropdownMenuContent>
              <BrutalismDropdownMenuLabel>MY ACCOUNT</BrutalismDropdownMenuLabel>
              <BrutalismDropdownMenuSeparator />
              <BrutalismDropdownMenuItem>PROFILE</BrutalismDropdownMenuItem>
              <BrutalismDropdownMenuItem>SETTINGS</BrutalismDropdownMenuItem>
              <BrutalismDropdownMenuItem>TEAM</BrutalismDropdownMenuItem>
              <BrutalismDropdownMenuSeparator />
              <BrutalismDropdownMenuItem>LOG OUT</BrutalismDropdownMenuItem>
            </BrutalismDropdownMenuContent>
          </BrutalismDropdownMenu>
        </div>
      </div>
    </div>
  )
}
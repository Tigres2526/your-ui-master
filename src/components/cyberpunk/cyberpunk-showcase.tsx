'use client'

import React, { useState } from 'react'
import { CyberpunkButton } from './cyberpunk-button'
import { CyberpunkCard, CyberpunkCardContent, CyberpunkCardDescription, CyberpunkCardHeader, CyberpunkCardTitle } from './cyberpunk-card'
import { CyberpunkInput } from './cyberpunk-input'
import { CyberpunkBadge } from './cyberpunk-badge'
import { CyberpunkProgress } from './cyberpunk-progress'
import { CyberpunkTabs, CyberpunkTabsList, CyberpunkTabsTrigger, CyberpunkTabsContent } from './cyberpunk-tabs'
import { CyberpunkSwitch } from './cyberpunk-switch'
import { CyberpunkCheckbox } from './cyberpunk-checkbox'
import { CyberpunkRadioGroup, CyberpunkRadioGroupItem } from './cyberpunk-radio'
import { 
  CyberpunkModal,
  CyberpunkModalContent,
  CyberpunkModalDescription,
  CyberpunkModalHeader,
  CyberpunkModalTitle,
  CyberpunkModalTrigger,
} from './cyberpunk-modal'
import { Label } from '@/components/ui/label'
import { CodeBlockWithExport } from '@/components/code-block-with-export'

export function CyberpunkShowcase() {
  const [progress, setProgress] = useState(70)
  const [switchChecked, setSwitchChecked] = useState(false)
  const [checkboxChecked, setCheckboxChecked] = useState(false)
  const [radioValue, setRadioValue] = useState('option-1')

  return (
    <div className="space-y-12">
      {/* Scanlines overlay */}
      <div className="fixed inset-0 pointer-events-none z-10 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,255,255,0.03)_2px,rgba(0,255,255,0.03)_4px)]" />

      {/* Buttons */}
      <div>
        <h3 className="text-2xl font-bold uppercase tracking-wider text-cyan-400 mb-6">Buttons</h3>
        <div className="space-y-6">
          <div className="flex flex-wrap gap-4">
            <CyberpunkButton variant="neon">Neon Button</CyberpunkButton>
            <CyberpunkButton variant="hologram">Hologram</CyberpunkButton>
            <CyberpunkButton variant="glitch">Glitch Effect</CyberpunkButton>
            <CyberpunkButton variant="terminal">Terminal</CyberpunkButton>
          </div>
          <div className="flex flex-wrap gap-4">
            <CyberpunkButton size="sm">Small</CyberpunkButton>
            <CyberpunkButton size="md">Medium</CyberpunkButton>
            <CyberpunkButton size="lg">Large</CyberpunkButton>
            <CyberpunkButton size="xl">Extra Large</CyberpunkButton>
          </div>
          <CodeBlockWithExport
            code={{
              typescript: `import { CyberpunkButton } from '@/components/cyberpunk/cyberpunk-button'

<CyberpunkButton variant="neon">Neon Button</CyberpunkButton>
<CyberpunkButton variant="hologram">Hologram</CyberpunkButton>
<CyberpunkButton variant="glitch">Glitch Effect</CyberpunkButton>
<CyberpunkButton variant="terminal">Terminal</CyberpunkButton>`,
              css: `.cyberpunk-button {
  background: transparent;
  color: #00ffff;
  border: 2px solid #00ffff;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 0.1em;
  box-shadow: 0 0 10px rgba(0, 255, 255, 0.5), inset 0 0 10px rgba(0, 255, 255, 0.2);
  transition: all 0.3s;
}

.cyberpunk-button:hover {
  background: rgba(0, 255, 255, 0.2);
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.8), inset 0 0 20px rgba(0, 255, 255, 0.3);
  color: white;
}`,
            }}
            defaultFormat="typescript"
          />
        </div>
      </div>

      {/* Cards */}
      <div>
        <h3 className="text-2xl font-bold uppercase tracking-wider text-cyan-400 mb-6">Cards</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CyberpunkCard variant="default">
            <CyberpunkCardHeader>
              <CyberpunkCardTitle>Default Card</CyberpunkCardTitle>
              <CyberpunkCardDescription>Futuristic card with neon borders</CyberpunkCardDescription>
            </CyberpunkCardHeader>
            <CyberpunkCardContent>
              <p className="text-sm text-gray-400">Card content goes here</p>
            </CyberpunkCardContent>
          </CyberpunkCard>
          <CyberpunkCard variant="neon">
            <CyberpunkCardHeader>
              <CyberpunkCardTitle>Neon Card</CyberpunkCardTitle>
              <CyberpunkCardDescription>Intense glow effect</CyberpunkCardDescription>
            </CyberpunkCardHeader>
            <CyberpunkCardContent>
              <p className="text-sm text-gray-400">Cyberpunk vibes</p>
            </CyberpunkCardContent>
          </CyberpunkCard>
          <CyberpunkCard variant="hologram">
            <CyberpunkCardHeader>
              <CyberpunkCardTitle>Hologram Card</CyberpunkCardTitle>
              <CyberpunkCardDescription>Translucent holographic effect</CyberpunkCardDescription>
            </CyberpunkCardHeader>
            <CyberpunkCardContent>
              <p className="text-sm text-gray-400">Future technology</p>
            </CyberpunkCardContent>
          </CyberpunkCard>
          <CyberpunkCard variant="terminal">
            <CyberpunkCardHeader>
              <CyberpunkCardTitle>Terminal Card</CyberpunkCardTitle>
              <CyberpunkCardDescription>Retro terminal interface</CyberpunkCardDescription>
            </CyberpunkCardHeader>
            <CyberpunkCardContent>
              <p className="text-sm text-green-400 font-mono">System online...</p>
            </CyberpunkCardContent>
          </CyberpunkCard>
        </div>
      </div>

      {/* Form Elements */}
      <div>
        <h3 className="text-2xl font-bold uppercase tracking-wider text-cyan-400 mb-6">Form Elements</h3>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <Label htmlFor="input-default" className="text-cyan-400">Default Input</Label>
              <CyberpunkInput id="input-default" placeholder="Enter data..." variant="default" />
            </div>
            <div>
              <Label htmlFor="input-neon" className="text-cyan-400">Neon Input</Label>
              <CyberpunkInput id="input-neon" placeholder="Enter data..." variant="neon" />
            </div>
            <div>
              <Label htmlFor="input-terminal" className="text-green-400">Terminal Input</Label>
              <CyberpunkInput id="input-terminal" placeholder="Enter command..." variant="terminal" />
            </div>
          </div>

          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <CyberpunkSwitch id="switch" checked={switchChecked} onCheckedChange={setSwitchChecked} />
              <Label htmlFor="switch" className="text-cyan-400">Cyberpunk Switch</Label>
            </div>
            <div className="flex items-center space-x-2">
              <CyberpunkCheckbox id="checkbox" checked={checkboxChecked} onCheckedChange={(checked) => setCheckboxChecked(checked === true)} />
              <Label htmlFor="checkbox" className="text-cyan-400">Cyberpunk Checkbox</Label>
            </div>
          </div>

          <div>
            <Label className="text-cyan-400">Radio Group</Label>
            <CyberpunkRadioGroup value={radioValue} onValueChange={setRadioValue} className="flex space-x-4 mt-2">
              <div className="flex items-center space-x-2">
                <CyberpunkRadioGroupItem value="option-1" id="r1" />
                <Label htmlFor="r1" className="text-cyan-400">Option 1</Label>
              </div>
              <div className="flex items-center space-x-2">
                <CyberpunkRadioGroupItem value="option-2" id="r2" />
                <Label htmlFor="r2" className="text-cyan-400">Option 2</Label>
              </div>
              <div className="flex items-center space-x-2">
                <CyberpunkRadioGroupItem value="option-3" id="r3" />
                <Label htmlFor="r3" className="text-cyan-400">Option 3</Label>
              </div>
            </CyberpunkRadioGroup>
          </div>
        </div>
      </div>

      {/* Badges */}
      <div>
        <h3 className="text-2xl font-bold uppercase tracking-wider text-cyan-400 mb-6">Badges</h3>
        <div className="flex flex-wrap gap-4">
          <CyberpunkBadge variant="neon">Neon</CyberpunkBadge>
          <CyberpunkBadge variant="danger">Danger</CyberpunkBadge>
          <CyberpunkBadge variant="success">Success</CyberpunkBadge>
          <CyberpunkBadge variant="warning">Warning</CyberpunkBadge>
        </div>
      </div>

      {/* Progress */}
      <div>
        <h3 className="text-2xl font-bold uppercase tracking-wider text-cyan-400 mb-6">Progress</h3>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-2">
              <Label className="text-cyan-400">Default Progress</Label>
              <span className="text-sm text-cyan-400">{progress}%</span>
            </div>
            <CyberpunkProgress value={progress} variant="default" />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <Label className="text-cyan-400">Neon Progress</Label>
              <span className="text-sm text-cyan-400">{progress}%</span>
            </div>
            <CyberpunkProgress value={progress} variant="neon" />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <Label className="text-cyan-400">Glitch Progress</Label>
              <span className="text-sm text-cyan-400">{progress}%</span>
            </div>
            <CyberpunkProgress value={progress} variant="glitch" />
          </div>
          <div className="flex gap-2 mt-4">
            <CyberpunkButton size="sm" onClick={() => setProgress(Math.max(0, progress - 10))}>-10%</CyberpunkButton>
            <CyberpunkButton size="sm" onClick={() => setProgress(Math.min(100, progress + 10))}>+10%</CyberpunkButton>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div>
        <h3 className="text-2xl font-bold uppercase tracking-wider text-cyan-400 mb-6">Tabs</h3>
        <CyberpunkTabs defaultValue="tab1" className="w-full">
          <CyberpunkTabsList>
            <CyberpunkTabsTrigger value="tab1">System</CyberpunkTabsTrigger>
            <CyberpunkTabsTrigger value="tab2">Network</CyberpunkTabsTrigger>
            <CyberpunkTabsTrigger value="tab3">Database</CyberpunkTabsTrigger>
          </CyberpunkTabsList>
          <CyberpunkTabsContent value="tab1">
            <CyberpunkCard>
              <CyberpunkCardHeader>
                <CyberpunkCardTitle>System Status</CyberpunkCardTitle>
                <CyberpunkCardDescription>All systems operational</CyberpunkCardDescription>
              </CyberpunkCardHeader>
            </CyberpunkCard>
          </CyberpunkTabsContent>
          <CyberpunkTabsContent value="tab2">
            <CyberpunkCard>
              <CyberpunkCardHeader>
                <CyberpunkCardTitle>Network Status</CyberpunkCardTitle>
                <CyberpunkCardDescription>Connected to the grid</CyberpunkCardDescription>
              </CyberpunkCardHeader>
            </CyberpunkCard>
          </CyberpunkTabsContent>
          <CyberpunkTabsContent value="tab3">
            <CyberpunkCard>
              <CyberpunkCardHeader>
                <CyberpunkCardTitle>Database Status</CyberpunkCardTitle>
                <CyberpunkCardDescription>Data streams active</CyberpunkCardDescription>
              </CyberpunkCardHeader>
            </CyberpunkCard>
          </CyberpunkTabsContent>
        </CyberpunkTabs>
      </div>

      {/* Modal */}
      <div>
        <h3 className="text-2xl font-bold uppercase tracking-wider text-cyan-400 mb-6">Modal</h3>
        <div className="flex flex-wrap gap-4">
          <CyberpunkModal>
            <CyberpunkModalTrigger asChild>
              <CyberpunkButton>Open Modal</CyberpunkButton>
            </CyberpunkModalTrigger>
            <CyberpunkModalContent>
              <CyberpunkModalHeader>
                <CyberpunkModalTitle>System Alert</CyberpunkModalTitle>
                <CyberpunkModalDescription>
                  Critical system notification from the mainframe
                </CyberpunkModalDescription>
              </CyberpunkModalHeader>
              <div className="py-4">
                <p className="text-sm text-gray-400">
                  Access granted. Welcome to the cyberpunk interface.
                </p>
              </div>
            </CyberpunkModalContent>
          </CyberpunkModal>
        </div>
      </div>
    </div>
  )
}
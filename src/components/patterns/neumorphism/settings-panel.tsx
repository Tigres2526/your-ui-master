'use client'

import React, { useState } from 'react'
import { 
  NeuCard,
  NeuCardHeader,
  NeuCardTitle,
  NeuCardContent,
  NeuButton,
  NeuSlider,
  NeuSwitch,
  NeuRadioGroup,
  NeuRadioGroupItem,
  NeuBadge
} from '@/components/neumorphism'
import { Label } from '@/components/ui/label'
import { 
  Monitor, 
  Moon, 
  Sun, 
  Volume2, 
  Bell, 
  Shield,
  Palette,
  Languages,
  HardDrive,
  Wifi
} from 'lucide-react'

export function NeumorphismSettingsPanel() {
  const [theme, setTheme] = useState('light')
  const [volume, setVolume] = useState([70])
  const [brightness, setBrightness] = useState([80])
  const [autoSave, setAutoSave] = useState(true)
  const [notifications, setNotifications] = useState(true)
  const [wifiEnabled, setWifiEnabled] = useState(true)
  const [language, setLanguage] = useState('en')

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Settings</h2>
        <p className="text-gray-600">Customize your experience</p>
      </div>

      {/* Display Settings */}
      <NeuCard>
        <NeuCardHeader>
          <NeuCardTitle className="flex items-center gap-2">
            <Monitor className="w-5 h-5" />
            Display
          </NeuCardTitle>
        </NeuCardHeader>
        <NeuCardContent className="space-y-6">
          {/* Theme Selection */}
          <div className="space-y-3">
            <Label>Theme</Label>
            <NeuRadioGroup value={theme} onValueChange={setTheme}>
              <div className="grid grid-cols-3 gap-4">
                <label className="relative cursor-pointer">
                  <NeuRadioGroupItem value="light" id="light" className="sr-only" />
                  <div className={`p-4 rounded-xl text-center transition-all ${
                    theme === 'light' 
                      ? 'bg-[#e0e0e0] shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff]' 
                      : 'bg-[#e0e0e0] shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]'
                  }`}>
                    <Sun className="w-6 h-6 mx-auto mb-2 text-gray-600" />
                    <p className="text-sm font-medium">Light</p>
                  </div>
                </label>
                
                <label className="relative cursor-pointer">
                  <NeuRadioGroupItem value="dark" id="dark" className="sr-only" />
                  <div className={`p-4 rounded-xl text-center transition-all ${
                    theme === 'dark' 
                      ? 'bg-[#e0e0e0] shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff]' 
                      : 'bg-[#e0e0e0] shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]'
                  }`}>
                    <Moon className="w-6 h-6 mx-auto mb-2 text-gray-600" />
                    <p className="text-sm font-medium">Dark</p>
                  </div>
                </label>
                
                <label className="relative cursor-pointer">
                  <NeuRadioGroupItem value="auto" id="auto" className="sr-only" />
                  <div className={`p-4 rounded-xl text-center transition-all ${
                    theme === 'auto' 
                      ? 'bg-[#e0e0e0] shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff]' 
                      : 'bg-[#e0e0e0] shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]'
                  }`}>
                    <Monitor className="w-6 h-6 mx-auto mb-2 text-gray-600" />
                    <p className="text-sm font-medium">Auto</p>
                  </div>
                </label>
              </div>
            </NeuRadioGroup>
          </div>

          {/* Brightness Control */}
          <div className="space-y-3">
            <div className="flex justify-between">
              <Label>Brightness</Label>
              <span className="text-sm text-gray-600">{brightness[0]}%</span>
            </div>
            <NeuSlider
              value={brightness}
              onValueChange={setBrightness}
              max={100}
              step={5}
            />
          </div>
        </NeuCardContent>
      </NeuCard>

      {/* Sound Settings */}
      <NeuCard>
        <NeuCardHeader>
          <NeuCardTitle className="flex items-center gap-2">
            <Volume2 className="w-5 h-5" />
            Sound & Notifications
          </NeuCardTitle>
        </NeuCardHeader>
        <NeuCardContent className="space-y-6">
          {/* Volume Control */}
          <div className="space-y-3">
            <div className="flex justify-between">
              <Label>Master Volume</Label>
              <span className="text-sm text-gray-600">{volume[0]}%</span>
            </div>
            <NeuSlider
              value={volume}
              onValueChange={setVolume}
              max={100}
              step={5}
            />
          </div>

          {/* Notification Toggle */}
          <div className="flex items-center justify-between p-4 rounded-xl bg-[#e0e0e0] shadow-[inset_3px_3px_6px_#bebebe,inset_-3px_-3px_6px_#ffffff]">
            <div className="flex items-center gap-3">
              <Bell className="w-5 h-5 text-gray-600" />
              <div>
                <p className="font-medium text-gray-800">Notifications</p>
                <p className="text-sm text-gray-600">Enable system notifications</p>
              </div>
            </div>
            <NeuSwitch
              checked={notifications}
              onCheckedChange={setNotifications}
            />
          </div>
        </NeuCardContent>
      </NeuCard>

      {/* System Settings */}
      <NeuCard>
        <NeuCardHeader>
          <NeuCardTitle className="flex items-center gap-2">
            <Shield className="w-5 h-5" />
            System
          </NeuCardTitle>
        </NeuCardHeader>
        <NeuCardContent className="space-y-4">
          {/* Auto Save */}
          <div className="flex items-center justify-between p-4 rounded-xl bg-[#e0e0e0] shadow-[inset_3px_3px_6px_#bebebe,inset_-3px_-3px_6px_#ffffff]">
            <div className="flex items-center gap-3">
              <HardDrive className="w-5 h-5 text-gray-600" />
              <div>
                <p className="font-medium text-gray-800">Auto Save</p>
                <p className="text-sm text-gray-600">Automatically save your work</p>
              </div>
            </div>
            <NeuSwitch
              checked={autoSave}
              onCheckedChange={setAutoSave}
            />
          </div>

          {/* WiFi */}
          <div className="flex items-center justify-between p-4 rounded-xl bg-[#e0e0e0] shadow-[inset_3px_3px_6px_#bebebe,inset_-3px_-3px_6px_#ffffff]">
            <div className="flex items-center gap-3">
              <Wifi className="w-5 h-5 text-gray-600" />
              <div>
                <p className="font-medium text-gray-800">WiFi</p>
                <p className="text-sm text-gray-600">
                  {wifiEnabled ? 'Connected to NetworkName' : 'Disconnected'}
                </p>
              </div>
            </div>
            <NeuSwitch
              checked={wifiEnabled}
              onCheckedChange={setWifiEnabled}
            />
          </div>

          {/* Language */}
          <div className="space-y-3">
            <Label className="flex items-center gap-2">
              <Languages className="w-4 h-4" />
              Language
            </Label>
            <div className="grid grid-cols-3 gap-3">
              {[
                { code: 'en', name: 'English' },
                { code: 'es', name: 'Español' },
                { code: 'fr', name: 'Français' }
              ].map((lang) => (
                <NeuButton
                  key={lang.code}
                  variant={language === lang.code ? 'pressed' : 'default'}
                  size="sm"
                  onClick={() => setLanguage(lang.code)}
                  className="w-full"
                >
                  {lang.name}
                </NeuButton>
              ))}
            </div>
          </div>
        </NeuCardContent>
      </NeuCard>

      {/* Quick Actions */}
      <NeuCard>
        <NeuCardContent className="p-6">
          <div className="grid grid-cols-2 gap-4">
            <NeuButton variant="ghost" className="justify-start">
              <Palette className="w-4 h-4 mr-2" />
              Reset Appearance
            </NeuButton>
            <NeuButton variant="ghost" className="justify-start">
              <Shield className="w-4 h-4 mr-2" />
              Privacy Settings
            </NeuButton>
          </div>
          
          <div className="mt-6 flex justify-between items-center">
            <p className="text-sm text-gray-600">
              Settings saved automatically
            </p>
            <NeuBadge variant="success">All changes saved</NeuBadge>
          </div>
        </NeuCardContent>
      </NeuCard>
    </div>
  )
}
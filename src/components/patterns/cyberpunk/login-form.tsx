'use client'

import React, { useState } from 'react'
import { CyberpunkButton } from '@/components/cyberpunk/cyberpunk-button'
import { CyberpunkCard, CyberpunkCardContent, CyberpunkCardDescription, CyberpunkCardHeader, CyberpunkCardTitle } from '@/components/cyberpunk/cyberpunk-card'
import { CyberpunkInput } from '@/components/cyberpunk/cyberpunk-input'
import { CyberpunkCheckbox } from '@/components/cyberpunk/cyberpunk-checkbox'
import { Label } from '@/components/ui/label'

export function CyberpunkLoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Glitch effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 blur-xl animate-pulse" />
      
      <CyberpunkCard variant="hologram" className="backdrop-blur-xl">
        <CyberpunkCardHeader className="space-y-1">
          <CyberpunkCardTitle className="text-2xl">SYSTEM ACCESS</CyberpunkCardTitle>
          <CyberpunkCardDescription>
            ENTER CREDENTIALS TO ACCESS MAINFRAME
          </CyberpunkCardDescription>
        </CyberpunkCardHeader>
        <CyberpunkCardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-cyan-400 uppercase text-xs tracking-wider">User ID</Label>
            <CyberpunkInput
              id="email"
              type="email"
              placeholder="user@cyberspace.net"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              variant="neon"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="text-cyan-400 uppercase text-xs tracking-wider">Access Code</Label>
            <CyberpunkInput
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              variant="neon"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <CyberpunkCheckbox
                id="remember"
                checked={remember}
                onCheckedChange={(checked) => setRemember(checked === true)}
              />
              <Label htmlFor="remember" className="text-xs text-cyan-400/70 uppercase tracking-wider">
                Remember Access
              </Label>
            </div>
            <CyberpunkButton variant="terminal" size="sm">
              Recovery
            </CyberpunkButton>
          </div>
          <CyberpunkButton className="w-full" size="lg" variant="hologram">
            INITIALIZE CONNECTION
          </CyberpunkButton>
          <div className="text-center text-sm">
            <span className="text-cyan-400/70">No account? </span>
            <CyberpunkButton variant="neon" size="sm" className="p-0 h-auto font-normal">
              Create Profile
            </CyberpunkButton>
          </div>
        </CyberpunkCardContent>
      </CyberpunkCard>
    </div>
  )
}
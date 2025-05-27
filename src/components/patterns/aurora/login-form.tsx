'use client'

import React, { useState } from 'react'
import { AuroraButton } from '@/components/aurora/aurora-button'
import { AuroraCard, AuroraCardContent, AuroraCardDescription, AuroraCardHeader, AuroraCardTitle } from '@/components/aurora/aurora-card'
import { AuroraInput } from '@/components/aurora/aurora-input'
import { AuroraCheckbox } from '@/components/aurora/aurora-checkbox'
import { Label } from '@/components/ui/label'

export function AuroraLoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Animated gradient orbs */}
      <div className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-float" />
      <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-r from-pink-500/30 via-purple-500/30 to-blue-500/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      <AuroraCard variant="glass" className="backdrop-blur-xl">
        <AuroraCardHeader className="space-y-1">
          <AuroraCardTitle className="text-2xl">Welcome back</AuroraCardTitle>
          <AuroraCardDescription>
            Enter your credentials to access your account
          </AuroraCardDescription>
        </AuroraCardHeader>
        <AuroraCardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <AuroraInput
              id="email"
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              variant="outline"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <AuroraInput
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              variant="outline"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <AuroraCheckbox
                id="remember"
                checked={remember}
                onCheckedChange={(checked) => setRemember(checked === true)}
              />
              <Label htmlFor="remember" className="text-sm">
                Remember me
              </Label>
            </div>
            <AuroraButton variant="ghost" size="sm">
              Forgot password?
            </AuroraButton>
          </div>
          <AuroraButton className="w-full" size="lg">
            Sign in
          </AuroraButton>
          <div className="text-center text-sm">
            Don&apos;t have an account?{' '}
            <AuroraButton variant="ghost" size="sm" className="p-0 h-auto font-normal">
              Sign up
            </AuroraButton>
          </div>
        </AuroraCardContent>
      </AuroraCard>
    </div>
  )
}
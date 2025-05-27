'use client'

import React, { useState } from 'react'
import { BrutalismButton } from '@/components/brutalism/brutalism-button'
import { BrutalismCard, BrutalismCardContent, BrutalismCardDescription, BrutalismCardHeader, BrutalismCardTitle } from '@/components/brutalism/brutalism-card'
import { BrutalismInput } from '@/components/brutalism/brutalism-input'
import { BrutalismCheckbox } from '@/components/brutalism/brutalism-checkbox'
import { Label } from '@/components/ui/label'

export function BrutalismLoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)

  return (
    <div className="w-full max-w-md mx-auto">
      <BrutalismCard variant="yellow">
        <BrutalismCardHeader>
          <BrutalismCardTitle className="text-3xl">LOGIN NOW!</BrutalismCardTitle>
          <BrutalismCardDescription className="uppercase">
            Enter your credentials or get lost
          </BrutalismCardDescription>
        </BrutalismCardHeader>
        <BrutalismCardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="font-bold uppercase">EMAIL</Label>
            <BrutalismInput
              id="email"
              type="email"
              placeholder="YOUR@EMAIL.COM"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              variant="default"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="font-bold uppercase">PASSWORD</Label>
            <BrutalismInput
              id="password"
              type="password"
              placeholder="ENTER PASSWORD"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              variant="default"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <BrutalismCheckbox
                id="remember"
                checked={remember}
                onCheckedChange={(checked) => setRemember(checked === true)}
              />
              <Label htmlFor="remember" className="font-bold uppercase">
                REMEMBER ME
              </Label>
            </div>
            <BrutalismButton variant="outline" size="sm">
              FORGOT?
            </BrutalismButton>
          </div>
          <BrutalismButton className="w-full" size="lg" variant="primary">
            SIGN IN NOW!
          </BrutalismButton>
          <div className="text-center">
            <span className="font-bold uppercase">NO ACCOUNT? </span>
            <BrutalismButton variant="danger" size="sm" className="ml-1">
              SIGN UP!
            </BrutalismButton>
          </div>
        </BrutalismCardContent>
      </BrutalismCard>
    </div>
  )
}
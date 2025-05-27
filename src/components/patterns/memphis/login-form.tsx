'use client'

import React from 'react'
import { MemphisCard, MemphisCardHeader, MemphisCardTitle, MemphisCardDescription, MemphisCardContent, MemphisCardFooter } from '@/components/memphis/memphis-card'
import { MemphisInput } from '@/components/memphis/memphis-input'
import { MemphisButton } from '@/components/memphis/memphis-button'
import { MemphisCheckbox } from '@/components/memphis/memphis-checkbox'
import { Label } from '@/components/ui/label'
import { User, Lock, Zap } from 'lucide-react'

export function MemphisLoginForm() {
  const [rememberMe, setRememberMe] = React.useState(false)

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Decorative shapes */}
      <div className="relative">
        <div className="absolute -top-8 -left-8 w-16 h-16 bg-[#FF1744] rotate-45 shadow-[4px_4px_0_0_rgba(0,0,0,1)]" />
        <div className="absolute -top-6 -right-6 w-12 h-12 border-4 border-black rounded-full bg-[#FFEB3B]" />
        <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-[#00BCD4]" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }} />
      </div>

      <MemphisCard variant="pattern" className="relative overflow-visible">
        <MemphisCardHeader className="text-center">
          <div className="w-24 h-24 mx-auto mb-4 bg-[#FF1744] border-4 border-black shadow-[6px_6px_0_0_rgba(0,0,0,1)] flex items-center justify-center rotate-3">
            <Zap className="w-12 h-12 text-white" strokeWidth={3} />
          </div>
          <MemphisCardTitle className="text-3xl">WELCOME!</MemphisCardTitle>
          <MemphisCardDescription className="text-lg">
            LOGIN TO YOUR ACCOUNT
          </MemphisCardDescription>
        </MemphisCardHeader>
        <MemphisCardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username" className="font-bold uppercase flex items-center gap-2">
              <User className="w-4 h-4" />
              Username
            </Label>
            <MemphisInput
              id="username"
              placeholder="ENTER USERNAME..."
              className="uppercase"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="font-bold uppercase flex items-center gap-2">
              <Lock className="w-4 h-4" />
              Password
            </Label>
            <MemphisInput
              id="password"
              type="password"
              placeholder="ENTER PASSWORD..."
              className="uppercase"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <MemphisCheckbox
                id="remember"
                variant="circle"
                checked={rememberMe}
                onCheckedChange={(value) => setRememberMe(value === true)}
              />
              <Label htmlFor="remember" className="font-bold uppercase cursor-pointer">
                REMEMBER
              </Label>
            </div>
            <MemphisButton variant="ghost" size="sm">
              FORGOT?
            </MemphisButton>
          </div>
        </MemphisCardContent>
        <MemphisCardFooter className="flex flex-col space-y-3">
          <MemphisButton variant="primary" className="w-full text-xl py-6">
            LOGIN NOW!
          </MemphisButton>
          <MemphisButton variant="secondary" className="w-full">
            CREATE ACCOUNT
          </MemphisButton>
          <div className="flex items-center gap-2 justify-center">
            <div className="h-1 w-8 bg-black" />
            <span className="font-bold uppercase">OR</span>
            <div className="h-1 w-8 bg-black" />
          </div>
          <MemphisButton variant="outline" className="w-full">
            SIGN IN WITH GOOGLE
          </MemphisButton>
        </MemphisCardFooter>
      </MemphisCard>
    </div>
  )
}
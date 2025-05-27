'use client'

import React, { useState } from 'react'
import { 
  NeuCard,
  NeuCardHeader,
  NeuCardTitle,
  NeuCardDescription,
  NeuCardContent,
  NeuCardFooter,
  NeuButton,
  NeuInput,
  NeuCheckbox
} from '@/components/neumorphism'
import { Label } from '@/components/ui/label'
import { User, Lock, Mail, Eye, EyeOff } from 'lucide-react'

export function NeumorphismLoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)

  return (
    <div className="w-full max-w-md mx-auto">
      <NeuCard className="shadow-[30px_30px_60px_#bebebe,-30px_-30px_60px_#ffffff]">
        <NeuCardHeader className="text-center">
          <div className="mx-auto mb-4 w-20 h-20 rounded-full bg-gradient-to-br from-[#f0f0f0] to-[#cacaca] shadow-[10px_10px_20px_#bebebe,-10px_-10px_20px_#ffffff] flex items-center justify-center">
            <User className="w-10 h-10 text-gray-600" />
          </div>
          <NeuCardTitle>Welcome Back</NeuCardTitle>
          <NeuCardDescription>
            Sign in to your account to continue
          </NeuCardDescription>
        </NeuCardHeader>
        <NeuCardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
              <NeuInput
                id="email"
                type="email"
                placeholder="john@example.com"
                className="pl-10"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
              <NeuInput
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="pl-10 pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <NeuCheckbox
                id="remember"
                checked={rememberMe}
                onCheckedChange={(checked) => setRememberMe(checked === true)}
              />
              <Label htmlFor="remember" className="text-sm cursor-pointer">
                Remember me
              </Label>
            </div>
            <NeuButton variant="ghost" size="sm">
              Forgot password?
            </NeuButton>
          </div>
        </NeuCardContent>
        <NeuCardFooter className="flex flex-col space-y-3">
          <NeuButton className="w-full" variant="primary">
            Sign In
          </NeuButton>
          <p className="text-center text-sm text-gray-600">
            Don&apos;t have an account?{' '}
            <NeuButton variant="ghost" size="sm" className="p-0 h-auto">
              Sign up
            </NeuButton>
          </p>
        </NeuCardFooter>
      </NeuCard>
    </div>
  )
}
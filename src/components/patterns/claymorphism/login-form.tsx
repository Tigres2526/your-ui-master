'use client'

import React from 'react'
import { ClayCard, ClayCardHeader, ClayCardTitle, ClayCardDescription, ClayCardContent, ClayCardFooter } from '@/components/claymorphism/clay-card'
import { ClayInput } from '@/components/claymorphism/clay-input'
import { ClayButton } from '@/components/claymorphism/clay-button'
import { ClayCheckbox } from '@/components/claymorphism/clay-checkbox'
import { Label } from '@/components/ui/label'

export function ClayLoginForm() {
  const [rememberMe, setRememberMe] = React.useState(false)

  return (
    <div className="w-full max-w-md mx-auto">
      <ClayCard variant="floating" className="backdrop-blur-sm">
        <ClayCardHeader className="space-y-1 text-center">
          <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-red-400 to-red-500 shadow-[0_20px_40px_-15px_rgba(239,68,68,0.4),inset_0_-4px_8px_rgba(255,255,255,0.3)] flex items-center justify-center">
            <span className="text-3xl">🎨</span>
          </div>
          <ClayCardTitle className="text-2xl">Welcome Back</ClayCardTitle>
          <ClayCardDescription>
            Enter your credentials to access your account
          </ClayCardDescription>
        </ClayCardHeader>
        <ClayCardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <ClayInput
              id="email"
              type="email"
              placeholder="name@example.com"
              variant="elevated"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <ClayInput
              id="password"
              type="password"
              placeholder="••••••••"
              variant="elevated"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <ClayCheckbox
                id="remember"
                checked={rememberMe}
                onCheckedChange={(value) => setRememberMe(value === true)}
              />
              <Label htmlFor="remember" className="text-sm font-normal cursor-pointer">
                Remember me
              </Label>
            </div>
            <ClayButton variant="ghost" size="sm">
              Forgot password?
            </ClayButton>
          </div>
        </ClayCardContent>
        <ClayCardFooter className="flex flex-col space-y-3">
          <ClayButton variant="primary" className="w-full">
            Sign In
          </ClayButton>
          <ClayButton variant="outline" className="w-full">
            Sign In with Google
          </ClayButton>
          <p className="text-center text-sm text-gray-600">
            Don&apos;t have an account?{' '}
            <ClayButton variant="ghost" size="sm" className="p-0 h-auto font-semibold text-red-500">
              Sign up
            </ClayButton>
          </p>
        </ClayCardFooter>
      </ClayCard>
    </div>
  )
}
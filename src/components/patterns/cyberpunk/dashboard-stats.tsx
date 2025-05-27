'use client'

import React from 'react'
import { CyberpunkCard, CyberpunkCardContent, CyberpunkCardHeader, CyberpunkCardTitle } from '@/components/cyberpunk/cyberpunk-card'
import { CyberpunkBadge } from '@/components/cyberpunk/cyberpunk-badge'
import { CyberpunkProgress } from '@/components/cyberpunk/cyberpunk-progress'
import { TrendingUp, TrendingDown } from 'lucide-react'

interface StatCardProps {
  title: string
  value: string
  change: number
  progress: number
  variant?: 'default' | 'neon' | 'hologram' | 'terminal'
}

function StatCard({ title, value, change, progress, variant = 'default' }: StatCardProps) {
  const isPositive = change >= 0

  return (
    <CyberpunkCard variant={variant}>
      <CyberpunkCardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CyberpunkCardTitle className="text-sm font-medium uppercase tracking-wider">
            {title}
          </CyberpunkCardTitle>
          <CyberpunkBadge variant={isPositive ? 'success' : 'danger'}>
            <span className="flex items-center gap-1">
              {isPositive ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
              {Math.abs(change)}%
            </span>
          </CyberpunkBadge>
        </div>
      </CyberpunkCardHeader>
      <CyberpunkCardContent>
        <div className="text-2xl font-bold text-cyan-400 drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]">
          {value}
        </div>
        <div className="mt-4">
          <CyberpunkProgress value={progress} variant="neon" />
        </div>
      </CyberpunkCardContent>
    </CyberpunkCard>
  )
}

export function CyberpunkDashboardStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <StatCard
        title="System Load"
        value="87.3%"
        change={12.5}
        progress={87}
        variant="neon"
      />
      <StatCard
        title="Active Users"
        value="2,847"
        change={23.1}
        progress={65}
        variant="hologram"
      />
      <StatCard
        title="Data Transfer"
        value="1.2TB"
        change={-5.4}
        progress={45}
        variant="terminal"
      />
      <StatCard
        title="Uptime"
        value="99.9%"
        change={0.1}
        progress={99}
        variant="default"
      />
    </div>
  )
}
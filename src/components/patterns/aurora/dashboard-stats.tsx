'use client'

import React from 'react'
import { AuroraCard, AuroraCardContent, AuroraCardHeader, AuroraCardTitle } from '@/components/aurora/aurora-card'
import { AuroraBadge } from '@/components/aurora/aurora-badge'
import { AuroraProgress } from '@/components/aurora/aurora-progress'
import { TrendingUp, TrendingDown } from 'lucide-react'

interface StatCardProps {
  title: string
  value: string
  change: number
  progress: number
}

function StatCard({ title, value, change, progress }: StatCardProps) {
  const isPositive = change >= 0

  return (
    <AuroraCard variant="glass">
      <AuroraCardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <AuroraCardTitle className="text-sm font-medium text-muted-foreground">
            {title}
          </AuroraCardTitle>
          <AuroraBadge variant={isPositive ? 'default' : 'ghost'} className="text-xs">
            <span className="flex items-center gap-1">
              {isPositive ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
              {Math.abs(change)}%
            </span>
          </AuroraBadge>
        </div>
      </AuroraCardHeader>
      <AuroraCardContent>
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          {value}
        </div>
        <div className="mt-4">
          <AuroraProgress value={progress} variant="glow" />
        </div>
      </AuroraCardContent>
    </AuroraCard>
  )
}

export function AuroraDashboardStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <StatCard
        title="Total Revenue"
        value="$45,231.89"
        change={20.1}
        progress={80}
      />
      <StatCard
        title="Active Users"
        value="2,350"
        change={15.3}
        progress={65}
      />
      <StatCard
        title="Sales"
        value="12,234"
        change={-4.5}
        progress={45}
      />
      <StatCard
        title="Performance"
        value="98.3%"
        change={12.7}
        progress={98}
      />
    </div>
  )
}
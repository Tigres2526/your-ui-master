'use client'

import React from 'react'
import { BrutalismCard, BrutalismCardContent, BrutalismCardHeader, BrutalismCardTitle } from '@/components/brutalism/brutalism-card'
import { BrutalismBadge } from '@/components/brutalism/brutalism-badge'
import { BrutalismProgress } from '@/components/brutalism/brutalism-progress'
import { TrendingUp, TrendingDown } from 'lucide-react'

interface StatCardProps {
  title: string
  value: string
  change: number
  progress: number
  variant?: 'default' | 'yellow' | 'red' | 'blue'
}

function StatCard({ title, value, change, progress, variant = 'default' }: StatCardProps) {
  const isPositive = change >= 0

  return (
    <BrutalismCard variant={variant}>
      <BrutalismCardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <BrutalismCardTitle className="text-lg">
            {title}
          </BrutalismCardTitle>
          <BrutalismBadge variant={isPositive ? 'success' : 'danger'}>
            <span className="flex items-center gap-1">
              {isPositive ? <TrendingUp className="h-3 w-3" strokeWidth={3} /> : <TrendingDown className="h-3 w-3" strokeWidth={3} />}
              {Math.abs(change)}%
            </span>
          </BrutalismBadge>
        </div>
      </BrutalismCardHeader>
      <BrutalismCardContent>
        <div className="text-3xl font-black">
          {value}
        </div>
        <div className="mt-4">
          <BrutalismProgress value={progress} variant="striped" />
        </div>
      </BrutalismCardContent>
    </BrutalismCard>
  )
}

export function BrutalismDashboardStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <StatCard
        title="REVENUE"
        value="$45,231"
        change={20}
        progress={80}
        variant="yellow"
      />
      <StatCard
        title="USERS"
        value="2,350"
        change={15}
        progress={65}
        variant="blue"
      />
      <StatCard
        title="SALES"
        value="12,234"
        change={-5}
        progress={45}
        variant="red"
      />
      <StatCard
        title="PERFORMANCE"
        value="98.3%"
        change={13}
        progress={98}
        variant="default"
      />
    </div>
  )
}
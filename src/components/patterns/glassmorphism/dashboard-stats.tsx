'use client'

import { GlassCard } from '@/components/glassmorphism/glass-card'
import { GlassBadge } from '@/components/glassmorphism/glass-badge'
import { GlassProgress } from '@/components/glassmorphism/glass-progress'
import { CardContent } from '@/components/ui/card'
import { 
  Activity,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react'

interface StatCardProps {
  title: string
  value: string
  change: number
  trend: 'up' | 'down'
}

function StatCard({ title, value, change, trend }: StatCardProps) {
  const isPositive = trend === 'up'
  
  return (
    <GlassCard intensity="medium" className="hover:scale-105 transition-transform cursor-pointer">
      <CardContent className="p-6">
        <div className="space-y-2">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className="text-2xl font-bold tracking-tight">{value}</p>
          <div className="flex items-center gap-1 text-xs">
            {isPositive ? (
              <ArrowUpRight className="h-3 w-3 text-green-500" />
            ) : (
              <ArrowDownRight className="h-3 w-3 text-red-500" />
            )}
            <span className={`font-medium ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
              {isPositive ? '+' : ''}{Math.abs(change)}%
            </span>
            <span className="text-muted-foreground">vs last month</span>
          </div>
        </div>
      </CardContent>
    </GlassCard>
  )
}

export function GlassDashboardStats() {
  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Revenue"
          value="$45,231.89"
          change={20.1}
          trend="up"
        />
        <StatCard
          title="Subscriptions"
          value="+2350"
          change={180.1}
          trend="up"
        />
        <StatCard
          title="Sales"
          value="+12,234"
          change={19}
          trend="up"
        />
        <StatCard
          title="Active Now"
          value="573"
          change={-2.3}
          trend="down"
        />
      </div>

      {/* Progress Section */}
      <GlassCard intensity="strong">
        <CardContent className="p-6">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Monthly Goals</h3>
              <GlassBadge variant="success">On Track</GlassBadge>
            </div>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Revenue Target</span>
                  <span className="font-medium">$32,500 / $50,000</span>
                </div>
                <GlassProgress value={65} variant="shimmer" />
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>New Customers</span>
                  <span className="font-medium">843 / 1,000</span>
                </div>
                <GlassProgress value={84.3} variant="pulse" />
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Engagement Rate</span>
                  <span className="font-medium">92%</span>
                </div>
                <GlassProgress value={92} variant="glow" />
              </div>
            </div>
          </div>
        </CardContent>
      </GlassCard>

      {/* Trend Chart Placeholder */}
      <GlassCard intensity="medium" gradient="subtle">
        <CardContent className="p-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Revenue Overview</h3>
              <div className="flex items-center gap-2">
                <GlassBadge>Daily</GlassBadge>
                <GlassBadge variant="secondary">Weekly</GlassBadge>
                <GlassBadge variant="secondary">Monthly</GlassBadge>
              </div>
            </div>
            
            {/* Chart placeholder */}
            <div className="h-64 flex items-center justify-center rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="text-center">
                <Activity className="h-10 w-10 mx-auto mb-2 text-muted-foreground opacity-50" />
                <p className="text-sm text-muted-foreground">Chart visualization would go here</p>
              </div>
            </div>
          </div>
        </CardContent>
      </GlassCard>
    </div>
  )
}
'use client'

import { GlassCard } from '@/components/glassmorphism/glass-card'
import { GlassBadge } from '@/components/glassmorphism/glass-badge'
import { GlassProgress } from '@/components/glassmorphism/glass-progress'
import { CardContent } from '@/components/ui/card'
import { 
  Users, 
  DollarSign, 
  ShoppingCart, 
  Activity,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react'

interface StatCardProps {
  title: string
  value: string
  change: number
  icon: React.ReactNode
  trend: 'up' | 'down'
}

function StatCard({ title, value, change, icon, trend }: StatCardProps) {
  const isPositive = trend === 'up'
  
  return (
    <GlassCard intensity="medium" className="hover:scale-105 transition-transform cursor-pointer">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className="text-2xl font-bold">{value}</p>
            <div className="flex items-center gap-1">
              {isPositive ? (
                <ArrowUpRight className="h-4 w-4 text-green-500" />
              ) : (
                <ArrowDownRight className="h-4 w-4 text-red-500" />
              )}
              <span className={`text-sm ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
                {Math.abs(change)}%
              </span>
              <span className="text-sm text-muted-foreground">vs last month</span>
            </div>
          </div>
          <div className="p-3 rounded-lg bg-white/10 backdrop-blur-sm">
            {icon}
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
          icon={<DollarSign className="h-6 w-6 text-primary" />}
        />
        <StatCard
          title="Subscriptions"
          value="+2350"
          change={180.1}
          trend="up"
          icon={<Users className="h-6 w-6 text-primary" />}
        />
        <StatCard
          title="Sales"
          value="+12,234"
          change={19}
          trend="up"
          icon={<ShoppingCart className="h-6 w-6 text-primary" />}
        />
        <StatCard
          title="Active Now"
          value="573"
          change={-2.3}
          trend="down"
          icon={<Activity className="h-6 w-6 text-primary" />}
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
                <Activity className="h-12 w-12 mx-auto mb-2 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">Chart visualization would go here</p>
              </div>
            </div>
          </div>
        </CardContent>
      </GlassCard>
    </div>
  )
}
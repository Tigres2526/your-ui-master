'use client'

import React from 'react'
import { ClayCard, ClayCardHeader, ClayCardTitle, ClayCardContent } from '@/components/claymorphism/clay-card'
import { ClayBadge } from '@/components/claymorphism/clay-badge'
import { ClayProgress } from '@/components/claymorphism/clay-progress'
import { TrendingUp, TrendingDown, Users, DollarSign, ShoppingCart, Activity } from 'lucide-react'

export function ClayDashboardStats() {
  const stats = [
    {
      title: 'Total Revenue',
      value: '$45,231.89',
      change: '+20.1%',
      trend: 'up',
      icon: DollarSign,
      color: 'primary' as const,
      progress: 78,
    },
    {
      title: 'Active Users',
      value: '2,350',
      change: '+15.3%',
      trend: 'up',
      icon: Users,
      color: 'secondary' as const,
      progress: 65,
    },
    {
      title: 'Sales Orders',
      value: '12,234',
      change: '-4.5%',
      trend: 'down',
      icon: ShoppingCart,
      color: 'accent' as const,
      progress: 42,
    },
    {
      title: 'Performance',
      value: '89.2%',
      change: '+12.5%',
      trend: 'up',
      icon: Activity,
      color: 'primary' as const,
      progress: 89,
    },
  ]

  const iconColors = {
    primary: 'text-red-500',
    secondary: 'text-teal-500',
    accent: 'text-yellow-600',
  }

  const bgGradients = {
    primary: 'from-red-50 to-pink-50',
    secondary: 'from-teal-50 to-cyan-50',
    accent: 'from-yellow-50 to-amber-50',
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => {
        const Icon = stat.icon
        return (
          <ClayCard key={index} variant={index === 0 ? 'floating' : 'default'} className="relative overflow-hidden">
            <div className={`absolute inset-0 bg-gradient-to-br ${bgGradients[stat.color]} opacity-50`} />
            <ClayCardHeader className="relative">
              <div className="flex items-center justify-between">
                <ClayCardTitle className="text-sm font-medium text-gray-600">
                  {stat.title}
                </ClayCardTitle>
                <div className={`p-2 rounded-xl bg-white shadow-[0_10px_20px_-5px_rgba(0,0,0,0.1),inset_0_-2px_4px_rgba(255,255,255,0.8)]`}>
                  <Icon className={`h-4 w-4 ${iconColors[stat.color]}`} />
                </div>
              </div>
            </ClayCardHeader>
            <ClayCardContent className="relative space-y-3">
              <div className="flex items-end justify-between">
                <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                <ClayBadge 
                  variant={stat.trend === 'up' ? 'primary' : 'outline'}
                  size="sm"
                  className="mb-1"
                >
                  {stat.trend === 'up' ? (
                    <TrendingUp className="h-3 w-3 mr-1" />
                  ) : (
                    <TrendingDown className="h-3 w-3 mr-1" />
                  )}
                  {stat.change}
                </ClayBadge>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-xs text-gray-600">
                  <span>Progress</span>
                  <span>{stat.progress}%</span>
                </div>
                <ClayProgress value={stat.progress} color={stat.color} size="sm" />
              </div>
            </ClayCardContent>
          </ClayCard>
        )
      })}
    </div>
  )
}
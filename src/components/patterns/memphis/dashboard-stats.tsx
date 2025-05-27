'use client'

import React from 'react'
import { MemphisCard, MemphisCardHeader, MemphisCardTitle, MemphisCardContent } from '@/components/memphis/memphis-card'
import { MemphisBadge } from '@/components/memphis/memphis-badge'
import { MemphisProgress } from '@/components/memphis/memphis-progress'
import { TrendingUp, TrendingDown, Users, DollarSign, ShoppingCart, Activity, Star } from 'lucide-react'

export function MemphisDashboardStats() {
  const stats = [
    {
      title: 'TOTAL REVENUE',
      value: '$45,231',
      change: '+20.1%',
      trend: 'up',
      icon: DollarSign,
      color: 'primary' as const,
      bgColor: 'bg-[#FF1744]',
      progress: 78,
      shape: 'square',
    },
    {
      title: 'ACTIVE USERS',
      value: '2,350',
      change: '+15.3%',
      trend: 'up',
      icon: Users,
      color: 'secondary' as const,
      bgColor: 'bg-[#00BCD4]',
      progress: 65,
      shape: 'circle',
    },
    {
      title: 'TOTAL SALES',
      value: '12,234',
      change: '-4.5%',
      trend: 'down',
      icon: ShoppingCart,
      color: 'accent' as const,
      bgColor: 'bg-[#FFEB3B]',
      progress: 42,
      shape: 'triangle',
    },
    {
      title: 'PERFORMANCE',
      value: '89.2%',
      change: '+12.5%',
      trend: 'up',
      icon: Activity,
      color: 'primary' as const,
      bgColor: 'bg-[#76FF03]',
      progress: 89,
      shape: 'diamond',
    },
  ]

  const getShapeClasses = (shape: string) => {
    switch (shape) {
      case 'circle':
        return 'rounded-full'
      case 'triangle':
        return 'clip-path-triangle'
      case 'diamond':
        return 'rotate-45'
      default:
        return ''
    }
  }

  return (
    <div className="relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 20px, #000 20px, #000 40px)',
        }} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <MemphisCard 
              key={index} 
              variant={index === 0 ? 'floating' : 'default'}
              className="relative overflow-visible"
            >
              {/* Decorative Shape */}
              <div className={`absolute -top-4 -right-4 w-12 h-12 ${stat.bgColor} ${getShapeClasses(stat.shape)} ${stat.shape === 'diamond' ? 'w-10 h-10' : ''} border-4 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)]`}>
                {stat.shape === 'diamond' && (
                  <div className="absolute inset-0 flex items-center justify-center -rotate-45">
                    <Star className="w-5 h-5" />
                  </div>
                )}
              </div>

              <MemphisCardHeader>
                <div className="flex items-center justify-between">
                  <MemphisCardTitle className="text-sm">
                    {stat.title}
                  </MemphisCardTitle>
                  <div className={`p-2 ${stat.bgColor} border-4 border-black shadow-[2px_2px_0_0_rgba(0,0,0,1)]`}>
                    <Icon className="h-4 w-4" strokeWidth={3} />
                  </div>
                </div>
              </MemphisCardHeader>
              <MemphisCardContent className="space-y-3">
                <div className="flex items-end justify-between">
                  <p className="text-3xl font-black">{stat.value}</p>
                  <MemphisBadge 
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
                  </MemphisBadge>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-bold uppercase">
                    <span>PROGRESS</span>
                    <span>{stat.progress}%</span>
                  </div>
                  <MemphisProgress 
                    value={stat.progress} 
                    color={stat.color} 
                    size="sm"
                    variant={index % 2 === 0 ? 'striped' : 'default'}
                  />
                </div>
                {index === 0 && (
                  <div className="absolute -bottom-2 -left-2 flex gap-1">
                    <div className="w-3 h-3 bg-black rotate-45" />
                    <div className="w-3 h-3 bg-[#FF1744] rotate-45" />
                    <div className="w-3 h-3 bg-black rotate-45" />
                  </div>
                )}
              </MemphisCardContent>
            </MemphisCard>
          )
        })}
      </div>

      <style jsx>{`
        .clip-path-triangle {
          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        }
      `}</style>
    </div>
  )
}
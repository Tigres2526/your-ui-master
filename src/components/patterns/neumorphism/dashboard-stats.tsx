'use client'

import React from 'react'
import { 
  NeuCard,
  NeuCardHeader,
  NeuCardTitle,
  NeuCardContent,
  NeuBadge,
  NeuProgress
} from '@/components/neumorphism'
import { TrendingUp, TrendingDown, Users, DollarSign, ShoppingCart, Activity } from 'lucide-react'

interface StatCard {
  title: string
  value: string
  change: number
  icon: React.ElementType
  progress?: number
}

const stats: StatCard[] = [
  {
    title: 'Total Revenue',
    value: '$45,231',
    change: 12.5,
    icon: DollarSign,
    progress: 75
  },
  {
    title: 'Active Users',
    value: '2,345',
    change: -3.2,
    icon: Users,
    progress: 62
  },
  {
    title: 'Total Orders',
    value: '1,234',
    change: 8.7,
    icon: ShoppingCart,
    progress: 84
  },
  {
    title: 'Conversion Rate',
    value: '3.24%',
    change: 15.3,
    icon: Activity,
    progress: 55
  }
]

export function NeumorphismDashboardStats() {
  return (
    <div className="w-full">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Dashboard Overview</h2>
        <p className="text-gray-600">Track your key metrics and performance</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon
          const isPositive = stat.change > 0

          return (
            <NeuCard key={stat.title} className="relative overflow-hidden">
              <NeuCardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <NeuCardTitle className="text-sm font-medium text-gray-600">
                    {stat.title}
                  </NeuCardTitle>
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#f0f0f0] to-[#cacaca] shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] flex items-center justify-center">
                    <Icon className="w-5 h-5 text-gray-600" />
                  </div>
                </div>
              </NeuCardHeader>
              
              <NeuCardContent className="space-y-2">
                <div className="flex items-end justify-between">
                  <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                  <div className="flex items-center gap-1">
                    {isPositive ? (
                      <TrendingUp className="w-4 h-4 text-green-500" />
                    ) : (
                      <TrendingDown className="w-4 h-4 text-red-500" />
                    )}
                    <span className={`text-sm font-medium ${
                      isPositive ? 'text-green-500' : 'text-red-500'
                    }`}>
                      {Math.abs(stat.change)}%
                    </span>
                  </div>
                </div>

                {stat.progress && (
                  <div className="pt-2">
                    <div className="flex justify-between text-xs text-gray-600 mb-1">
                      <span>Progress</span>
                      <span>{stat.progress}%</span>
                    </div>
                    <NeuProgress value={stat.progress} className="h-2" />
                  </div>
                )}
              </NeuCardContent>
            </NeuCard>
          )
        })}
      </div>

      {/* Summary Card */}
      <NeuCard className="mt-8">
        <NeuCardHeader>
          <NeuCardTitle>Performance Summary</NeuCardTitle>
        </NeuCardHeader>
        <NeuCardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 rounded-xl bg-[#e0e0e0] shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff]">
              <p className="text-sm text-gray-600 mb-1">Monthly Growth</p>
              <p className="text-2xl font-bold text-gray-800">+23.5%</p>
              <NeuBadge variant="success" className="mt-2">On Track</NeuBadge>
            </div>
            <div className="text-center p-4 rounded-xl bg-[#e0e0e0] shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff]">
              <p className="text-sm text-gray-600 mb-1">Active Projects</p>
              <p className="text-2xl font-bold text-gray-800">142</p>
              <NeuBadge variant="primary" className="mt-2">All Time High</NeuBadge>
            </div>
            <div className="text-center p-4 rounded-xl bg-[#e0e0e0] shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff]">
              <p className="text-sm text-gray-600 mb-1">Team Members</p>
              <p className="text-2xl font-bold text-gray-800">48</p>
              <NeuBadge variant="secondary" className="mt-2">+5 This Month</NeuBadge>
            </div>
          </div>
        </NeuCardContent>
      </NeuCard>
    </div>
  )
}
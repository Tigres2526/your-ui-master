'use client'

import React from 'react'
import { 
  NeuCard,
  NeuCardHeader,
  NeuCardTitle,
  NeuCardDescription,
  NeuCardContent,
  NeuCardFooter,
  NeuButton,
  NeuBadge
} from '@/components/neumorphism'
import { Check, X } from 'lucide-react'

interface PricingPlan {
  name: string
  price: string
  description: string
  features: { text: string; included: boolean }[]
  recommended?: boolean
}

const pricingPlans: PricingPlan[] = [
  {
    name: 'Starter',
    price: '$9',
    description: 'Perfect for individuals',
    features: [
      { text: '5 Projects', included: true },
      { text: '10GB Storage', included: true },
      { text: 'Basic Support', included: true },
      { text: 'Advanced Analytics', included: false },
      { text: 'Custom Domain', included: false }
    ]
  },
  {
    name: 'Professional',
    price: '$29',
    description: 'Great for growing teams',
    recommended: true,
    features: [
      { text: 'Unlimited Projects', included: true },
      { text: '100GB Storage', included: true },
      { text: 'Priority Support', included: true },
      { text: 'Advanced Analytics', included: true },
      { text: 'Custom Domain', included: false }
    ]
  },
  {
    name: 'Enterprise',
    price: '$99',
    description: 'For large organizations',
    features: [
      { text: 'Unlimited Everything', included: true },
      { text: '1TB Storage', included: true },
      { text: 'Dedicated Support', included: true },
      { text: 'Advanced Analytics', included: true },
      { text: 'Multiple Custom Domains', included: true }
    ]
  }
]

export function NeumorphismPricingCards() {
  return (
    <div className="w-full">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Choose Your Plan</h2>
        <p className="text-gray-600">Select the perfect plan for your needs</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {pricingPlans.map((plan) => (
          <NeuCard
            key={plan.name}
            className={plan.recommended ? 'relative shadow-[30px_30px_60px_#bebebe,-30px_-30px_60px_#ffffff]' : ''}
          >
            {plan.recommended && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <NeuBadge variant="primary" className="shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]">
                  Recommended
                </NeuBadge>
              </div>
            )}
            
            <NeuCardHeader className="text-center">
              <NeuCardTitle>{plan.name}</NeuCardTitle>
              <div className="mt-4">
                <span className="text-4xl font-bold text-gray-800">{plan.price}</span>
                <span className="text-gray-600">/month</span>
              </div>
              <NeuCardDescription className="mt-2">
                {plan.description}
              </NeuCardDescription>
            </NeuCardHeader>
            
            <NeuCardContent>
              <ul className="space-y-3">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    {feature.included ? (
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-green-400 to-green-600 shadow-[2px_2px_4px_#bebebe,-2px_-2px_4px_#ffffff] flex items-center justify-center">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                    ) : (
                      <div className="w-5 h-5 rounded-full bg-[#e0e0e0] shadow-[inset_2px_2px_4px_#bebebe,inset_-2px_-2px_4px_#ffffff] flex items-center justify-center">
                        <X className="w-3 h-3 text-gray-400" />
                      </div>
                    )}
                    <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
            </NeuCardContent>
            
            <NeuCardFooter>
              <NeuButton 
                className="w-full" 
                variant={plan.recommended ? 'primary' : 'default'}
              >
                Get Started
              </NeuButton>
            </NeuCardFooter>
          </NeuCard>
        ))}
      </div>
    </div>
  )
}
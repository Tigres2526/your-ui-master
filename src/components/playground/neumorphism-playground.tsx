'use client'

import { InteractivePlayground } from '@/components/interactive-playground'
import { NeuButton } from '@/components/neumorphism/neu-button'

const neumorphismPlaygrounds = [
  {
    title: 'Neumorphic Button',
    description: 'Interactive button with soft UI depth effects',
    component: NeuButton,
    defaultProps: {
      children: 'Click Me',
      variant: 'default',
      size: 'default',
      intensity: 'medium'
    },
    controls: [
      {
        name: 'children',
        label: 'Button Text',
        type: 'text' as const,
        defaultValue: 'Click Me'
      },
      {
        name: 'variant',
        label: 'Variant',
        type: 'select' as const,
        defaultValue: 'default',
        options: [
          { label: 'Default', value: 'default' },
          { label: 'Inset', value: 'inset' },
          { label: 'Ghost', value: 'ghost' }
        ]
      },
      {
        name: 'size',
        label: 'Size',
        type: 'select' as const,
        defaultValue: 'default',
        options: [
          { label: 'Small', value: 'sm' },
          { label: 'Default', value: 'default' },
          { label: 'Large', value: 'lg' },
          { label: 'Icon', value: 'icon' }
        ]
      },
      {
        name: 'intensity',
        label: 'Shadow Intensity',
        type: 'select' as const,
        defaultValue: 'medium',
        options: [
          { label: 'Low', value: 'low' },
          { label: 'Medium', value: 'medium' },
          { label: 'High', value: 'high' }
        ]
      },
      {
        name: 'disabled',
        label: 'Disabled',
        type: 'switch' as const,
        defaultValue: false
      }
    ],
    codeTemplate: (props: Record<string, string | boolean | number>) => {
      const propsStr = Object.entries(props)
        .filter(([key, value]) => {
          if (key === 'children') return false
          if (typeof value === 'boolean' && !value) return false
          if (value === 'default') return false
          return true
        })
        .map(([key, value]) => {
          if (typeof value === 'boolean') return key
          return `${key}="${value}"`
        })
        .join(' ')
      
      return `<NeuButton${propsStr ? ' ' + propsStr : ''}>${props.children}</NeuButton>`
    },
    styleVariables: {
      backgroundColor: '#e0e0e0'
    }
  }
]

export function NeumorphismPlayground() {
  return (
    <div className="space-y-8">
      {neumorphismPlaygrounds.map((playground, index) => (
        <InteractivePlayground key={index} {...playground} />
      ))}
    </div>
  )
}
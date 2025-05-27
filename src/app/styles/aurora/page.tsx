'use client'

import React from 'react'
import { AuroraShowcase } from '@/components/aurora/aurora-showcase'
import { AuroraLoginForm } from '@/components/patterns/aurora/login-form'
import { AuroraDashboardStats } from '@/components/patterns/aurora/dashboard-stats'
import { AuroraCard, AuroraCardDescription, AuroraCardHeader, AuroraCardTitle } from '@/components/aurora/aurora-card'
import { DesignTokenGenerator } from '@/components/design-token-generator'
import { ProjectStarter } from '@/components/project-starter'
import { AIPromptGenerator } from '@/components/ai-prompt-generator'
import { ImplementationGuide } from '@/components/implementation-guide'
import { CodeBlockWithExport } from '@/components/code-block-with-export'

export default function AuroraUIPage() {
  const patternLibraryCode = {
    typescript: `import { AuroraLoginForm } from '@/components/patterns/aurora/login-form'
import { AuroraDashboardStats } from '@/components/patterns/aurora/dashboard-stats'

// Use in your app
<AuroraLoginForm />
<AuroraDashboardStats />`,
    css: `/* Aurora gradient animation */
@keyframes gradient {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

@keyframes shimmer {
  to { transform: translateX(200%); }
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

.aurora-gradient {
  background: linear-gradient(135deg, #667eea, #764ba2, #f093fb, #4facfe, #00f2fe);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}

.aurora-shimmer {
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
  animation: shimmer 3s linear infinite;
}`,
  }

  return (
    <div className="relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-blue-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="max-w-6xl mx-auto space-y-12 pb-12">
        {/* Page Title */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
            Aurora UI
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ethereal, gradient-based design system inspired by northern lights with flowing colors and luminous effects
          </p>
        </div>

        {/* Design Principles */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Design Principles
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <AuroraCard variant="glass">
              <AuroraCardHeader>
                <AuroraCardTitle>Flowing Gradients</AuroraCardTitle>
                <AuroraCardDescription>
                  Multi-color gradients that shift and animate like the northern lights
                </AuroraCardDescription>
              </AuroraCardHeader>
            </AuroraCard>
            <AuroraCard variant="glass">
              <AuroraCardHeader>
                <AuroraCardTitle>Luminous Effects</AuroraCardTitle>
                <AuroraCardDescription>
                  Glowing shadows, shimmer animations, and light diffusion effects
                </AuroraCardDescription>
              </AuroraCardHeader>
            </AuroraCard>
            <AuroraCard variant="glass">
              <AuroraCardHeader>
                <AuroraCardTitle>Ethereal Depth</AuroraCardTitle>
                <AuroraCardDescription>
                  Translucent layers with backdrop blur creating atmospheric depth
                </AuroraCardDescription>
              </AuroraCardHeader>
            </AuroraCard>
          </div>
        </section>

        {/* Component Showcase */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Component Library
          </h2>
          <AuroraShowcase />
        </section>

        {/* Pattern Library */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Pattern Library
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Login Form</h3>
              <AuroraLoginForm />
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Dashboard Stats</h3>
              <AuroraDashboardStats />
            </div>
          </div>
          <CodeBlockWithExport code={patternLibraryCode} defaultFormat="typescript" />
        </section>

        {/* Design Tokens */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Design Tokens
          </h2>
          <DesignTokenGenerator style="aurora" />
        </section>

        {/* AI Prompt Generator */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            AI Component Generator
          </h2>
          <AIPromptGenerator style="aurora" />
        </section>

        {/* Implementation Guide */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Implementation Guide
          </h2>
          <ImplementationGuide style="aurora" />
        </section>

        {/* Project Starter */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Get Started
          </h2>
          <ProjectStarter style="aurora" />
        </section>
      </div>
    </div>
  )
}
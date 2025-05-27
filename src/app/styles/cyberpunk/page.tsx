'use client'

import React from 'react'
import { CyberpunkShowcase } from '@/components/cyberpunk/cyberpunk-showcase'
import { CyberpunkLoginForm } from '@/components/patterns/cyberpunk/login-form'
import { CyberpunkDashboardStats } from '@/components/patterns/cyberpunk/dashboard-stats'
import { CyberpunkCard, CyberpunkCardDescription, CyberpunkCardHeader, CyberpunkCardTitle } from '@/components/cyberpunk/cyberpunk-card'
import { DesignTokenGenerator } from '@/components/design-token-generator'
import { ProjectStarter } from '@/components/project-starter'
import { AIPromptGenerator } from '@/components/ai-prompt-generator'
import { ImplementationGuide } from '@/components/implementation-guide'
import { CodeBlockWithExport } from '@/components/code-block-with-export'

export default function CyberpunkUIPage() {
  const patternLibraryCode = {
    typescript: `import { CyberpunkLoginForm } from '@/components/patterns/cyberpunk/login-form'
import { CyberpunkDashboardStats } from '@/components/patterns/cyberpunk/dashboard-stats'

// Use in your app
<CyberpunkLoginForm />
<CyberpunkDashboardStats />`,
    css: `/* Cyberpunk neon glow */
.cyberpunk-glow {
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.8);
  text-shadow: 0 0 10px currentColor;
}

/* Glitch effect */
@keyframes glitch {
  0%, 100% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(-2px, -2px); }
  60% { transform: translate(2px, 2px); }
  80% { transform: translate(2px, -2px); }
}

.glitch {
  animation: glitch 0.3s infinite;
}

/* Scanlines */
.scanlines::before {
  content: "";
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    rgba(0, 255, 255, 0.03) 2px,
    rgba(0, 255, 255, 0.03) 4px
  );
  pointer-events: none;
}`,
  }

  // Force dark mode for cyberpunk
  React.useEffect(() => {
    document.documentElement.classList.add('dark')
    return () => {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background grid effect */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black_40%,transparent_100%)]" />
      
      {/* Scanlines overlay */}
      <div className="fixed inset-0 pointer-events-none z-10 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,255,255,0.03)_2px,rgba(0,255,255,0.03)_4px)]" />

      <div className="relative z-20 max-w-6xl mx-auto space-y-12 pb-12">
        {/* Page Title */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold uppercase tracking-wider text-cyan-400 drop-shadow-[0_0_20px_rgba(0,255,255,0.8)]">
            CYBERPUNK UI
          </h1>
          <p className="text-lg text-cyan-400/70 max-w-2xl mx-auto uppercase tracking-wide">
            Futuristic neon-lit design system with glitch effects and tech aesthetics
          </p>
        </div>

        {/* Design Principles */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold uppercase tracking-wider text-cyan-400">
            Design Principles
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <CyberpunkCard variant="neon">
              <CyberpunkCardHeader>
                <CyberpunkCardTitle>Neon Glow</CyberpunkCardTitle>
                <CyberpunkCardDescription>
                  Vibrant neon colors with luminous glow effects
                </CyberpunkCardDescription>
              </CyberpunkCardHeader>
            </CyberpunkCard>
            <CyberpunkCard variant="hologram">
              <CyberpunkCardHeader>
                <CyberpunkCardTitle>Holographic</CyberpunkCardTitle>
                <CyberpunkCardDescription>
                  Translucent interfaces with depth and shimmer
                </CyberpunkCardDescription>
              </CyberpunkCardHeader>
            </CyberpunkCard>
            <CyberpunkCard variant="terminal">
              <CyberpunkCardHeader>
                <CyberpunkCardTitle>Terminal Tech</CyberpunkCardTitle>
                <CyberpunkCardDescription>
                  Retro-futuristic terminal interfaces
                </CyberpunkCardDescription>
              </CyberpunkCardHeader>
            </CyberpunkCard>
          </div>
        </section>

        {/* Component Showcase */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold uppercase tracking-wider text-cyan-400">
            Component Library
          </h2>
          <CyberpunkShowcase />
        </section>

        {/* Pattern Library */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold uppercase tracking-wider text-cyan-400">
            Pattern Library
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold uppercase tracking-wider text-cyan-400">Login Interface</h3>
              <CyberpunkLoginForm />
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold uppercase tracking-wider text-cyan-400">System Stats</h3>
              <CyberpunkDashboardStats />
            </div>
          </div>
          <CodeBlockWithExport code={patternLibraryCode} defaultFormat="typescript" />
        </section>

        {/* Design Tokens */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold uppercase tracking-wider text-cyan-400">
            Design Tokens
          </h2>
          <DesignTokenGenerator style="cyberpunk" />
        </section>

        {/* AI Prompt Generator */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold uppercase tracking-wider text-cyan-400">
            AI Component Generator
          </h2>
          <AIPromptGenerator style="cyberpunk" />
        </section>

        {/* Implementation Guide */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold uppercase tracking-wider text-cyan-400">
            Implementation Guide
          </h2>
          <ImplementationGuide style="cyberpunk" />
        </section>

        {/* Project Starter */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold uppercase tracking-wider text-cyan-400">
            Get Started
          </h2>
          <ProjectStarter style="cyberpunk" />
        </section>
      </div>
    </div>
  )
}
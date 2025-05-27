'use client'

import React from 'react'
import { BrutalismShowcase } from '@/components/brutalism/brutalism-showcase'
import { BrutalismLoginForm } from '@/components/patterns/brutalism/login-form'
import { BrutalismDashboardStats } from '@/components/patterns/brutalism/dashboard-stats'
import { BrutalismCard, BrutalismCardDescription, BrutalismCardHeader, BrutalismCardTitle } from '@/components/brutalism/brutalism-card'
import { DesignTokenGenerator } from '@/components/design-token-generator'
import { ProjectStarter } from '@/components/project-starter'
import { AIPromptGenerator } from '@/components/ai-prompt-generator'
import { ImplementationGuide } from '@/components/implementation-guide'
import { CodeBlockWithExport } from '@/components/code-block-with-export'

export default function BrutalismUIPage() {
  const patternLibraryCode = {
    typescript: `import { BrutalismLoginForm } from '@/components/patterns/brutalism/login-form'
import { BrutalismDashboardStats } from '@/components/patterns/brutalism/dashboard-stats'

// Use in your app
<BrutalismLoginForm />
<BrutalismDashboardStats />`,
    css: `/* Brutalism hard shadows */
.brutalism-shadow {
  box-shadow: 6px 6px 0 0 rgba(0, 0, 0, 1);
}

.brutalism-shadow:hover {
  transform: translate(3px, 3px);
  box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 1);
}

.brutalism-shadow:active {
  transform: translate(6px, 6px);
  box-shadow: none;
}

/* Brutalism borders */
.brutalism-border {
  border: 4px solid black;
}

/* Brutalism typography */
.brutalism-text {
  font-weight: bold;
  text-transform: uppercase;
}`,
  }

  return (
    <div className="max-w-6xl mx-auto space-y-12 pb-12">
      {/* Page Title */}
      <div className="text-center space-y-4">
        <h1 className="text-6xl font-black uppercase">BRUTALISM UI</h1>
        <p className="text-xl font-bold uppercase max-w-2xl mx-auto">
          RAW, BOLD DESIGN SYSTEM WITH HEAVY BORDERS AND STARK CONTRASTS
        </p>
      </div>

      {/* Design Principles */}
      <section className="space-y-6">
        <h2 className="text-4xl font-black uppercase">DESIGN PRINCIPLES</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <BrutalismCard variant="yellow">
            <BrutalismCardHeader>
              <BrutalismCardTitle>BOLD BORDERS</BrutalismCardTitle>
              <BrutalismCardDescription>
                THICK BLACK BORDERS EVERYWHERE. NO SUBTLETY.
              </BrutalismCardDescription>
            </BrutalismCardHeader>
          </BrutalismCard>
          <BrutalismCard variant="red">
            <BrutalismCardHeader>
              <BrutalismCardTitle>HARD SHADOWS</BrutalismCardTitle>
              <BrutalismCardDescription>
                NO BLUR. JUST HARD, OFFSET SHADOWS.
              </BrutalismCardDescription>
            </BrutalismCardHeader>
          </BrutalismCard>
          <BrutalismCard variant="blue">
            <BrutalismCardHeader>
              <BrutalismCardTitle>HIGH CONTRAST</BrutalismCardTitle>
              <BrutalismCardDescription>
                PRIMARY COLORS ONLY. BLACK AND WHITE.
              </BrutalismCardDescription>
            </BrutalismCardHeader>
          </BrutalismCard>
        </div>
      </section>

      {/* Component Showcase */}
      <section className="space-y-6">
        <h2 className="text-4xl font-black uppercase">COMPONENT LIBRARY</h2>
        <BrutalismShowcase />
      </section>

      {/* Pattern Library */}
      <section className="space-y-6">
        <h2 className="text-4xl font-black uppercase">PATTERN LIBRARY</h2>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-black uppercase">LOGIN FORM</h3>
            <BrutalismLoginForm />
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-black uppercase">DASHBOARD STATS</h3>
            <BrutalismDashboardStats />
          </div>
        </div>
        <CodeBlockWithExport code={patternLibraryCode} defaultFormat="typescript" />
      </section>

      {/* Design Tokens */}
      <section className="space-y-6">
        <h2 className="text-4xl font-black uppercase">DESIGN TOKENS</h2>
        <DesignTokenGenerator style="brutalism" />
      </section>

      {/* AI Prompt Generator */}
      <section className="space-y-6">
        <h2 className="text-4xl font-black uppercase">AI COMPONENT GENERATOR</h2>
        <AIPromptGenerator style="brutalism" />
      </section>

      {/* Implementation Guide */}
      <section className="space-y-6">
        <h2 className="text-4xl font-black uppercase">IMPLEMENTATION GUIDE</h2>
        <ImplementationGuide style="brutalism" />
      </section>

      {/* Project Starter */}
      <section className="space-y-6">
        <h2 className="text-4xl font-black uppercase">GET STARTED</h2>
        <ProjectStarter style="brutalism" />
      </section>
    </div>
  )
}
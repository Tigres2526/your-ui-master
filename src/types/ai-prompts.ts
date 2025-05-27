export interface AIPromptTemplate {
  style: string
  component: string
  prompt: string
  context: string[]
  designPrinciples: string[]
  codeExample?: string
  doList: string[]
  dontList: string[]
}

export interface StylePromptConfig {
  name: string
  overview: string
  keyPrinciples: string[]
  designTokensPrompt: string
  componentGuidelines: Record<string, string>
  bestPractices: string[]
  commonMistakes: string[]
}

export interface DesignSystemPrompts {
  id: string
  name: string
  quickPrompts: Record<string, string>
  detailedPrompts: Record<string, string>
  contextualPrompts: Record<string, string>
  best_practices: {
    do: string[]
    dont: string[]
  }
  customization_guide: string
}
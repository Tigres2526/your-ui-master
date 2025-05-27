'use client'

import React, { Component, ReactNode } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { AlertTriangle } from 'lucide-react'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo)
  }

  handleReset = () => {
    this.setState({ hasError: false, error: undefined })
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <div className="min-h-screen flex items-center justify-center p-4">
          <Card className="max-w-md w-full p-6 space-y-4">
            <div className="flex items-center gap-3">
              <AlertTriangle className="w-8 h-8 text-destructive" />
              <h2 className="text-2xl font-semibold">Something went wrong</h2>
            </div>
            <p className="text-muted-foreground">
              We encountered an error while loading this component. 
              Please try refreshing the page or contact support if the problem persists.
            </p>
            {this.state.error && (
              <details className="text-sm">
                <summary className="cursor-pointer text-muted-foreground hover:text-foreground">
                  Show error details
                </summary>
                <pre className="mt-2 p-3 bg-muted rounded-md overflow-auto text-xs">
                  {this.state.error.message}
                </pre>
              </details>
            )}
            <div className="flex gap-3">
              <Button onClick={this.handleReset} variant="default">
                Try Again
              </Button>
              <Button onClick={() => window.location.reload()} variant="outline">
                Refresh Page
              </Button>
            </div>
          </Card>
        </div>
      )
    }

    return this.props.children
  }
}

export class StyleErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Style loading error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-8 text-center">
          <Card className="inline-flex flex-col items-center gap-4 p-6 bg-destructive/10 border-destructive/20">
            <AlertTriangle className="w-12 h-12 text-destructive" />
            <div>
              <h3 className="font-semibold text-lg">Style failed to load</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Please try refreshing the page or selecting another style.
              </p>
            </div>
            <Button 
              onClick={() => window.location.reload()} 
              size="sm"
              variant="outline"
            >
              Refresh Page
            </Button>
          </Card>
        </div>
      )
    }

    return this.props.children
  }
}
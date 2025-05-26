import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Sparkles,
  Layers,
  Box,
  Cloud,
  ArrowRight,
  Code2,
  Paintbrush,
  Wand2
} from "lucide-react"

const featuredStyles = [
  {
    title: "Neumorphism",
    description: "Soft UI design with realistic shadows and depth",
    icon: Layers,
    href: "/styles/neumorphism",
    gradient: "from-slate-500 to-slate-700",
    examples: ["Buttons", "Cards", "Forms", "Music Player"]
  },
  {
    title: "Glassmorphism",
    description: "Frosted glass effects with blur and transparency",
    icon: Cloud,
    href: "/styles/glassmorphism",
    gradient: "from-blue-500 to-cyan-600",
    examples: ["Cards", "Navigation", "Modals", "Overlays"]
  },
  {
    title: "Skeuomorphism 2.0",
    description: "Modern take on realistic textures and materials",
    icon: Box,
    href: "/styles/skeuomorphism",
    gradient: "from-amber-500 to-orange-600",
    examples: ["Switches", "Dials", "Textures", "Materials"]
  }
]

const features = [
  {
    icon: Code2,
    title: "Copy-Paste Ready",
    description: "Production-ready code you can copy directly into your projects"
  },
  {
    icon: Paintbrush,
    title: "Fully Customizable",
    description: "Built on shadcn/ui components with Tailwind CSS"
  },
  {
    icon: Wand2,
    title: "13+ Design Styles",
    description: "Comprehensive collection of modern UI design patterns"
  }
]

export default function HomePage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="flex max-w-[980px] flex-col items-start gap-4">
          <Badge variant="secondary" className="flex items-center gap-1.5">
            <Sparkles className="h-3 w-3" />
            Design System Showcase
          </Badge>
          <h1 className="text-4xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
            Your UI Master
          </h1>
          <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
            A comprehensive showcase of modern UI design patterns. From Neumorphism to Glassmorphism 
            and beyond - explore, customize, and copy production-ready components built with shadcn/ui.
          </p>
        </div>
        <div className="flex gap-4">
          <Button size="lg" asChild>
            <Link href="/styles/neumorphism">
              Explore Styles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="https://github.com">
              View on GitHub
            </Link>
          </Button>
        </div>
      </section>

      {/* Features */}
      <section className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Why Your UI Master?</h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to build beautiful, modern interfaces
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <Card key={feature.title}>
                <CardHeader>
                  <Icon className="h-10 w-10 text-primary mb-2" />
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* Featured Styles */}
      <section className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Featured Design Styles</h2>
          <p className="text-lg text-muted-foreground">
            Explore our most popular design systems
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {featuredStyles.map((style) => {
            const Icon = style.icon
            return (
              <Link key={style.href} href={style.href} className="group">
                <Card className="h-full transition-all hover:shadow-lg">
                  <CardHeader>
                    <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${style.gradient} mb-4`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="flex items-center gap-2">
                      {style.title}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </CardTitle>
                    <CardDescription>{style.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {style.examples.map((example) => (
                        <Badge key={example} variant="secondary">
                          {example}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="rounded-lg bg-muted/50 p-8 md:p-12">
        <div className="mx-auto max-w-2xl text-center space-y-4">
          <h2 className="text-3xl font-bold">Ready to elevate your UI?</h2>
          <p className="text-lg text-muted-foreground">
            Start exploring our comprehensive collection of design patterns and 
            build something amazing with production-ready components.
          </p>
          <div className="flex justify-center gap-4 pt-4">
            <Button size="lg" asChild>
              <Link href="/styles/neumorphism">
                Get Started
                <Sparkles className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
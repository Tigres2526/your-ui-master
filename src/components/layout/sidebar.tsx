"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { 
  Sparkles, 
  Layers, 
  Palette, 
  Box,
  Zap,
  Cloud,
  Shapes,
  Grid,
  Cpu,
  Waves,
  Pentagon,
  Hexagon,
  Triangle
} from "lucide-react"

const styles = [
  {
    title: "Neumorphism",
    href: "/styles/neumorphism",
    icon: Layers,
    description: "Soft UI with realistic shadows"
  },
  {
    title: "Glassmorphism", 
    href: "/styles/glassmorphism",
    icon: Cloud,
    description: "Frosted glass effects"
  },
  {
    title: "Skeuomorphism 2.0",
    href: "/styles/skeuomorphism",
    icon: Box,
    description: "Modern realistic textures"
  },
  {
    title: "Brutalism",
    href: "/styles/brutalism",
    icon: Pentagon,
    description: "Raw, bold, unapologetic"
  },
  {
    title: "Aurora UI",
    href: "/styles/aurora",
    icon: Sparkles,
    description: "Gradient meshes & glows"
  },
  {
    title: "Claymorphism",
    href: "/styles/claymorphism",
    icon: Shapes,
    description: "3D clay-like surfaces"
  },
  {
    title: "Bauhaus",
    href: "/styles/bauhaus",
    icon: Grid,
    description: "Geometric minimalism"
  },
  {
    title: "Memphis",
    href: "/styles/memphis",
    icon: Triangle,
    description: "Playful 80s patterns"
  },
  {
    title: "Cyberpunk",
    href: "/styles/cyberpunk",
    icon: Cpu,
    description: "Neon & glitch effects"
  },
  {
    title: "Organic",
    href: "/styles/organic",
    icon: Waves,
    description: "Blob shapes & fluid motion"
  },
  {
    title: "Swiss Design",
    href: "/styles/swiss",
    icon: Hexagon,
    description: "Grid-based precision"
  },
  {
    title: "Material You",
    href: "/styles/material",
    icon: Palette,
    description: "Google's dynamic theming"
  },
  {
    title: "Fluent Design",
    href: "/styles/fluent",
    icon: Zap,
    description: "Microsoft's depth system"
  }
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="w-64 border-r bg-background">
      <div className="p-6">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Your UI Master
        </h2>
        <p className="text-sm text-muted-foreground mt-1">
          Design System Showcase
        </p>
      </div>
      <ScrollArea className="h-[calc(100vh-88px)]">
        <div className="px-3 py-2">
          <h3 className="mb-2 px-4 text-sm font-medium text-muted-foreground">
            Design Styles
          </h3>
          <div className="space-y-1">
            {styles.map((style) => {
              const Icon = style.icon
              return (
                <Button
                  key={style.href}
                  variant={pathname === style.href ? "secondary" : "ghost"}
                  className={cn(
                    "w-full justify-start gap-2 px-3",
                    pathname === style.href && "bg-secondary"
                  )}
                  asChild
                >
                  <Link href={style.href}>
                    <Icon className="h-4 w-4" />
                    <span className="font-medium">{style.title}</span>
                  </Link>
                </Button>
              )
            })}
          </div>
        </div>
      </ScrollArea>
    </div>
  )
}
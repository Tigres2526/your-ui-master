"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import {
  Layers,
  Cloud,
  Box,
  Pentagon,
  Sparkles,
  Shapes,
  Grid,
  Triangle,
  Cpu,
  Waves,
  Hexagon,
  Palette,
  Zap,
  Search,
} from "lucide-react"

import { LucideIcon } from "lucide-react"

interface SearchResult {
  id: string
  title: string
  description: string
  category: string
  href: string
  icon: LucideIcon
}

const designStyles: SearchResult[] = [
  {
    id: "neumorphism",
    title: "Neumorphism",
    description: "Soft UI with realistic shadows",
    category: "Design Styles",
    href: "/styles/neumorphism",
    icon: Layers
  },
  {
    id: "glassmorphism",
    title: "Glassmorphism",
    description: "Frosted glass effects",
    category: "Design Styles",
    href: "/styles/glassmorphism",
    icon: Cloud
  },
  {
    id: "skeuomorphism",
    title: "Skeuomorphism 2.0",
    description: "Modern realistic textures",
    category: "Design Styles",
    href: "/styles/skeuomorphism",
    icon: Box
  },
  {
    id: "brutalism",
    title: "Brutalism",
    description: "Raw, bold, unapologetic",
    category: "Design Styles",
    href: "/styles/brutalism",
    icon: Pentagon
  },
  {
    id: "aurora",
    title: "Aurora UI",
    description: "Gradient meshes & glows",
    category: "Design Styles",
    href: "/styles/aurora",
    icon: Sparkles
  },
  {
    id: "claymorphism",
    title: "Claymorphism",
    description: "3D clay-like surfaces",
    category: "Design Styles",
    href: "/styles/claymorphism",
    icon: Shapes
  },
  {
    id: "bauhaus",
    title: "Bauhaus",
    description: "Geometric minimalism",
    category: "Design Styles",
    href: "/styles/bauhaus",
    icon: Grid
  },
  {
    id: "memphis",
    title: "Memphis",
    description: "Playful 80s patterns",
    category: "Design Styles",
    href: "/styles/memphis",
    icon: Triangle
  },
  {
    id: "cyberpunk",
    title: "Cyberpunk",
    description: "Neon & glitch effects",
    category: "Design Styles",
    href: "/styles/cyberpunk",
    icon: Cpu
  },
  {
    id: "organic",
    title: "Organic",
    description: "Blob shapes & fluid motion",
    category: "Design Styles",
    href: "/styles/organic",
    icon: Waves
  },
  {
    id: "swiss",
    title: "Swiss Design",
    description: "Grid-based precision",
    category: "Design Styles",
    href: "/styles/swiss",
    icon: Hexagon
  },
  {
    id: "material",
    title: "Material You",
    description: "Google's dynamic theming",
    category: "Design Styles",
    href: "/styles/material",
    icon: Palette
  },
  {
    id: "fluent",
    title: "Fluent Design",
    description: "Microsoft's depth system",
    category: "Design Styles",
    href: "/styles/fluent",
    icon: Zap
  }
]

const componentTypes = [
  { id: "buttons", title: "Buttons", category: "Components" },
  { id: "cards", title: "Cards", category: "Components" },
  { id: "forms", title: "Forms", category: "Components" },
  { id: "navigation", title: "Navigation", category: "Components" },
  { id: "data-display", title: "Data Display", category: "Components" },
  { id: "feedback", title: "Feedback", category: "Components" },
]

export function SearchCommand() {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState("")

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const filteredStyles = designStyles.filter(style =>
    style.title.toLowerCase().includes(search.toLowerCase()) ||
    style.description.toLowerCase().includes(search.toLowerCase())
  )

  const filteredComponents = componentTypes.filter(component =>
    component.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="relative w-full max-w-lg"
      >
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search components..."
          className="h-9 w-full rounded-md border border-input bg-background px-10 pr-4 text-sm outline-none focus:ring-2 focus:ring-ring"
          readOnly
        />
        <kbd className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 hidden lg:flex items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput 
          placeholder="Search design styles and components..." 
          value={search}
          onValueChange={setSearch}
        />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          
          {filteredStyles.length > 0 && (
            <CommandGroup heading="Design Styles">
              {filteredStyles.map((style) => {
                const Icon = style.icon
                return (
                  <CommandItem
                    key={style.id}
                    value={style.title}
                    onSelect={() => {
                      router.push(style.href)
                      setOpen(false)
                    }}
                  >
                    <Icon className="mr-2 h-4 w-4" />
                    <div className="flex-1">
                      <div className="font-medium">{style.title}</div>
                      <div className="text-xs text-muted-foreground">
                        {style.description}
                      </div>
                    </div>
                  </CommandItem>
                )
              })}
            </CommandGroup>
          )}

          {filteredStyles.length > 0 && filteredComponents.length > 0 && (
            <CommandSeparator />
          )}

          {filteredComponents.length > 0 && (
            <CommandGroup heading="Component Types">
              {filteredComponents.map((component) => (
                <CommandItem
                  key={component.id}
                  value={component.title}
                  onSelect={() => {
                    // TODO: Navigate to component filter
                    setOpen(false)
                  }}
                >
                  <Search className="mr-2 h-4 w-4" />
                  <span>{component.title}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          )}
        </CommandList>
      </CommandDialog>
    </>
  )
}
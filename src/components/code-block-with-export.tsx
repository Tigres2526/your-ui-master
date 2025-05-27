"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Copy, Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface CodeBlockWithExportProps {
  code: {
    css?: string
    tailwind?: string
    typescript?: string
    scss?: string
  }
  defaultFormat?: 'css' | 'tailwind' | 'typescript' | 'scss'
  className?: string
}

export function CodeBlockWithExport({ 
  code, 
  defaultFormat = 'tailwind',
  className 
}: CodeBlockWithExportProps) {
  const [selectedFormat, setSelectedFormat] = useState<'css' | 'tailwind' | 'typescript' | 'scss'>(defaultFormat)
  const [copied, setCopied] = useState(false)

  const formats = [
    { key: 'css' as const, label: 'CSS', available: !!code.css },
    { key: 'tailwind' as const, label: 'Tailwind', available: !!code.tailwind },
    { key: 'typescript' as const, label: 'TypeScript', available: !!code.typescript },
    { key: 'scss' as const, label: 'SCSS', available: !!code.scss }
  ]

  const copyToClipboard = async () => {
    const codeContent = code[selectedFormat]
    if (codeContent) {
      await navigator.clipboard.writeText(codeContent)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const currentCode = code[selectedFormat] || ''

  return (
    <div className={cn("space-y-2", className)}>
      {/* Format selector buttons */}
      <div className="flex gap-1 p-1 bg-muted rounded-lg w-fit">
        {formats.map((format) => (
          <Button
            key={format.key}
            variant={selectedFormat === format.key ? "secondary" : "ghost"}
            size="sm"
            className={cn(
              "h-7 px-3 text-xs",
              !format.available && "opacity-50 cursor-not-allowed"
            )}
            onClick={() => format.available && setSelectedFormat(format.key)}
            disabled={!format.available}
          >
            {format.label}
          </Button>
        ))}
      </div>

      {/* Code block */}
      <div className="relative">
        <ScrollArea className="h-[300px] w-full rounded-lg border bg-zinc-950 p-4">
          <pre className="text-sm">
            <code className="language-tsx text-zinc-50">{currentCode}</code>
          </pre>
        </ScrollArea>
        <Button
          size="sm"
          variant="secondary"
          className="absolute top-2 right-2"
          onClick={copyToClipboard}
          aria-label={copied ? "Copied!" : "Copy code"}
        >
          {copied ? (
            <Check className="h-4 w-4" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </Button>
      </div>
    </div>
  )
}
import { DesignStyle } from "@/types/design-system"

export const glassmorphismStyle: DesignStyle = {
  id: "glassmorphism",
  name: "Glassmorphism",
  description: "Frosted glass effect with transparency, blur, and vibrant gradients",
  principles: [
    "Transparency with backdrop blur",
    "Vibrant gradient backgrounds",
    "Subtle borders and shadows",
    "Light refraction effects",
    "Depth through layering"
  ],
  colorSystem: {
    primary: {
      50: "rgba(59, 130, 246, 0.05)",
      100: "rgba(59, 130, 246, 0.1)",
      200: "rgba(59, 130, 246, 0.2)",
      300: "rgba(59, 130, 246, 0.3)",
      400: "rgba(59, 130, 246, 0.4)",
      500: "rgba(59, 130, 246, 0.5)",
      600: "rgba(59, 130, 246, 0.6)",
      700: "rgba(59, 130, 246, 0.7)",
      800: "rgba(59, 130, 246, 0.8)",
      900: "rgba(59, 130, 246, 0.9)",
      950: "rgba(59, 130, 246, 0.95)"
    },
    secondary: {
      50: "rgba(168, 85, 247, 0.05)",
      100: "rgba(168, 85, 247, 0.1)",
      200: "rgba(168, 85, 247, 0.2)",
      300: "rgba(168, 85, 247, 0.3)",
      400: "rgba(168, 85, 247, 0.4)",
      500: "rgba(168, 85, 247, 0.5)",
      600: "rgba(168, 85, 247, 0.6)",
      700: "rgba(168, 85, 247, 0.7)",
      800: "rgba(168, 85, 247, 0.8)",
      900: "rgba(168, 85, 247, 0.9)",
      950: "rgba(168, 85, 247, 0.95)"
    },
    accent: {
      50: "rgba(236, 72, 153, 0.05)",
      100: "rgba(236, 72, 153, 0.1)",
      200: "rgba(236, 72, 153, 0.2)",
      300: "rgba(236, 72, 153, 0.3)",
      400: "rgba(236, 72, 153, 0.4)",
      500: "rgba(236, 72, 153, 0.5)",
      600: "rgba(236, 72, 153, 0.6)",
      700: "rgba(236, 72, 153, 0.7)",
      800: "rgba(236, 72, 153, 0.8)",
      900: "rgba(236, 72, 153, 0.9)",
      950: "rgba(236, 72, 153, 0.95)"
    },
    neutral: {
      50: "rgba(255, 255, 255, 0.05)",
      100: "rgba(255, 255, 255, 0.1)",
      200: "rgba(255, 255, 255, 0.2)",
      300: "rgba(255, 255, 255, 0.3)",
      400: "rgba(255, 255, 255, 0.4)",
      500: "rgba(255, 255, 255, 0.5)",
      600: "rgba(255, 255, 255, 0.6)",
      700: "rgba(255, 255, 255, 0.7)",
      800: "rgba(255, 255, 255, 0.8)",
      900: "rgba(255, 255, 255, 0.9)",
      950: "rgba(255, 255, 255, 0.95)"
    },
    semantic: {
      success: {
        50: "rgba(34, 197, 94, 0.05)",
        100: "rgba(34, 197, 94, 0.1)",
        200: "rgba(34, 197, 94, 0.2)",
        300: "rgba(34, 197, 94, 0.3)",
        400: "rgba(34, 197, 94, 0.4)",
        500: "rgba(34, 197, 94, 0.5)",
        600: "rgba(34, 197, 94, 0.6)",
        700: "rgba(34, 197, 94, 0.7)",
        800: "rgba(34, 197, 94, 0.8)",
        900: "rgba(34, 197, 94, 0.9)",
        950: "rgba(34, 197, 94, 0.95)"
      },
      warning: {
        50: "rgba(250, 204, 21, 0.05)",
        100: "rgba(250, 204, 21, 0.1)",
        200: "rgba(250, 204, 21, 0.2)",
        300: "rgba(250, 204, 21, 0.3)",
        400: "rgba(250, 204, 21, 0.4)",
        500: "rgba(250, 204, 21, 0.5)",
        600: "rgba(250, 204, 21, 0.6)",
        700: "rgba(250, 204, 21, 0.7)",
        800: "rgba(250, 204, 21, 0.8)",
        900: "rgba(250, 204, 21, 0.9)",
        950: "rgba(250, 204, 21, 0.95)"
      },
      error: {
        50: "rgba(239, 68, 68, 0.05)",
        100: "rgba(239, 68, 68, 0.1)",
        200: "rgba(239, 68, 68, 0.2)",
        300: "rgba(239, 68, 68, 0.3)",
        400: "rgba(239, 68, 68, 0.4)",
        500: "rgba(239, 68, 68, 0.5)",
        600: "rgba(239, 68, 68, 0.6)",
        700: "rgba(239, 68, 68, 0.7)",
        800: "rgba(239, 68, 68, 0.8)",
        900: "rgba(239, 68, 68, 0.9)",
        950: "rgba(239, 68, 68, 0.95)"
      },
      info: {
        50: "rgba(14, 165, 233, 0.05)",
        100: "rgba(14, 165, 233, 0.1)",
        200: "rgba(14, 165, 233, 0.2)",
        300: "rgba(14, 165, 233, 0.3)",
        400: "rgba(14, 165, 233, 0.4)",
        500: "rgba(14, 165, 233, 0.5)",
        600: "rgba(14, 165, 233, 0.6)",
        700: "rgba(14, 165, 233, 0.7)",
        800: "rgba(14, 165, 233, 0.8)",
        900: "rgba(14, 165, 233, 0.9)",
        950: "rgba(14, 165, 233, 0.95)"
      }
    },
    special: {
      "glass-white": "rgba(255, 255, 255, 0.25)",
      "glass-black": "rgba(0, 0, 0, 0.25)",
      "gradient-1": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      "gradient-2": "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      "gradient-3": "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      "gradient-4": "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    }
  },
  typography: {
    fontFamilies: {
      sans: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      serif: "'Playfair Display', 'Georgia', serif",
      mono: "'JetBrains Mono', 'Monaco', 'Courier New', monospace",
      display: "'Outfit', -apple-system, BlinkMacSystemFont, sans-serif"
    },
    fontSizes: {
      xs: { size: "0.75rem", lineHeight: "1rem" },
      sm: { size: "0.875rem", lineHeight: "1.25rem" },
      base: { size: "1rem", lineHeight: "1.5rem" },
      lg: { size: "1.125rem", lineHeight: "1.75rem" },
      xl: { size: "1.25rem", lineHeight: "1.75rem" },
      "2xl": { size: "1.5rem", lineHeight: "2rem" },
      "3xl": { size: "1.875rem", lineHeight: "2.25rem" },
      "4xl": { size: "2.25rem", lineHeight: "2.5rem" },
      "5xl": { size: "3rem", lineHeight: "1" },
      "6xl": { size: "3.75rem", lineHeight: "1" }
    },
    fontWeights: {
      thin: 100,
      extralight: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900
    }
  },
  spacing: {
    base: 4,
    scale: [0, 0.25, 0.5, 0.75, 1, 1.25, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 64]
  },
  shadows: {
    xs: "0 2px 4px rgba(0, 0, 0, 0.05)",
    sm: "0 4px 6px rgba(0, 0, 0, 0.07)",
    md: "0 6px 10px rgba(0, 0, 0, 0.1)",
    lg: "0 10px 15px rgba(0, 0, 0, 0.1)",
    xl: "0 20px 25px rgba(0, 0, 0, 0.1)",
    "2xl": "0 25px 50px rgba(0, 0, 0, 0.25)",
    inner: "inset 0 2px 4px rgba(0, 0, 0, 0.06)",
    none: "none"
  },
  animations: {
    durations: {
      fast: "150ms",
      normal: "300ms",
      slow: "500ms",
      slower: "700ms",
      slowest: "1000ms"
    },
    easings: {
      linear: "linear",
      in: "cubic-bezier(0.4, 0, 1, 1)",
      out: "cubic-bezier(0, 0, 0.2, 1)",
      inOut: "cubic-bezier(0.4, 0, 0.2, 1)",
      bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)"
    },
    keyframes: {
      shimmer: "@keyframes shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }",
      float: "@keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }",
      glow: "@keyframes glow { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }"
    }
  },
  components: {
    button: {
      variants: {
        glass: {
          base: "bg-white/10 backdrop-blur-md border border-white/20 text-white",
          hover: "hover:bg-white/20 hover:border-white/30",
          active: "active:bg-white/30",
          focus: "focus:ring-2 focus:ring-white/50"
        },
        glassColor: {
          base: "backdrop-blur-md border",
          hover: "hover:shadow-lg",
          active: "active:scale-95"
        },
        glassGradient: {
          base: "backdrop-blur-md border border-white/20 bg-gradient-to-br",
          hover: "hover:shadow-xl hover:scale-105",
          active: "active:scale-95"
        }
      },
      sizes: {
        sm: { padding: "0.5rem 1rem", height: "2.25rem", fontSize: "0.875rem", borderRadius: "0.5rem" },
        md: { padding: "0.75rem 1.5rem", height: "2.75rem", fontSize: "1rem", borderRadius: "0.75rem" },
        lg: { padding: "1rem 2rem", height: "3.25rem", fontSize: "1.125rem", borderRadius: "1rem" },
        xl: { padding: "1.25rem 2.5rem", height: "3.75rem", fontSize: "1.25rem", borderRadius: "1.25rem" }
      },
      states: {
        loading: { className: "animate-pulse" },
        disabled: { className: "opacity-50 cursor-not-allowed" }
      }
    },
    card: {
      variants: {
        glass: {
          base: "bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl"
        },
        glassColor: {
          base: "backdrop-blur-xl border shadow-xl"
        },
        glassGradient: {
          base: "backdrop-blur-xl border border-white/20 shadow-xl bg-gradient-to-br"
        }
      },
      sizes: {
        sm: { padding: "1rem", borderRadius: "1rem" },
        md: { padding: "1.5rem", borderRadius: "1.25rem" },
        lg: { padding: "2rem", borderRadius: "1.5rem" }
      },
      states: {
        hover: { className: "transition-all duration-300 hover:shadow-2xl" }
      }
    },
    input: {
      variants: {
        glass: {
          base: "bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder:text-white/50",
          focus: "focus:bg-white/20 focus:border-white/40"
        }
      },
      sizes: {
        sm: { padding: "0.5rem 0.75rem", height: "2.25rem", fontSize: "0.875rem" },
        md: { padding: "0.75rem 1rem", height: "2.75rem", fontSize: "1rem" },
        lg: { padding: "1rem 1.25rem", height: "3.25rem", fontSize: "1.125rem" }
      },
      states: {
        error: { className: "border-red-500/50" },
        success: { className: "border-green-500/50" }
      }
    },
    badge: {
      variants: {
        glass: {
          base: "bg-white/10 backdrop-blur-md border border-white/20 text-white"
        },
        glassColor: {
          base: "backdrop-blur-md border"
        }
      },
      sizes: {
        sm: { padding: "0.25rem 0.5rem", fontSize: "0.75rem" },
        md: { padding: "0.375rem 0.75rem", fontSize: "0.875rem" },
        lg: { padding: "0.5rem 1rem", fontSize: "1rem" }
      },
      states: {}
    },
    toggle: {
      variants: {
        glass: {
          base: "bg-white/10 backdrop-blur-md border border-white/20",
          active: "bg-white/30"
        }
      },
      sizes: {
        sm: { height: "1.5rem", width: "2.75rem" },
        md: { height: "2rem", width: "3.5rem" },
        lg: { height: "2.5rem", width: "4.5rem" }
      },
      states: {}
    },
    slider: {
      variants: {
        glass: {
          base: "bg-white/10 backdrop-blur-md [&_[role=slider]]:bg-white/50 [&_[role=slider]]:border-white/20"
        }
      },
      sizes: {
        sm: { height: "0.5rem" },
        md: { height: "0.75rem" },
        lg: { height: "1rem" }
      },
      states: {}
    },
    tabs: {
      variants: {
        glass: {
          base: "bg-white/10 backdrop-blur-md border border-white/20",
          active: "bg-white/20"
        }
      },
      sizes: {
        sm: { padding: "0.25rem", fontSize: "0.875rem" },
        md: { padding: "0.375rem", fontSize: "1rem" },
        lg: { padding: "0.5rem", fontSize: "1.125rem" }
      },
      states: {}
    },
    modal: {
      variants: {
        glass: {
          base: "bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl"
        }
      },
      sizes: {
        sm: { padding: "1.5rem", borderRadius: "1rem" },
        md: { padding: "2rem", borderRadius: "1.25rem" },
        lg: { padding: "2.5rem", borderRadius: "1.5rem" }
      },
      states: {}
    },
    toast: {
      variants: {
        glass: {
          base: "bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl"
        }
      },
      sizes: {
        sm: { padding: "0.75rem", fontSize: "0.875rem" },
        md: { padding: "1rem", fontSize: "1rem" },
        lg: { padding: "1.25rem", fontSize: "1.125rem" }
      },
      states: {}
    },
    dropdown: {
      variants: {
        glass: {
          base: "bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl"
        }
      },
      sizes: {
        sm: { padding: "0.5rem", fontSize: "0.875rem" },
        md: { padding: "0.75rem", fontSize: "1rem" },
        lg: { padding: "1rem", fontSize: "1.125rem" }
      },
      states: {}
    }
  }
}
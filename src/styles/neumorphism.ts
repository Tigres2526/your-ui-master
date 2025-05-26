import { DesignStyle } from "@/types/design-system"

export const neumorphismStyle: DesignStyle = {
  id: "neumorphism",
  name: "Neumorphism",
  description: "Soft UI design with realistic shadows creating a raised or inset appearance",
  principles: [
    "Subtle depth through light and shadow",
    "Monochromatic color schemes",
    "Soft edges and rounded corners",
    "Minimal color variation",
    "Focus on tactile experience"
  ],
  colorSystem: {
    primary: {
      50: "#f0f4ff",
      100: "#e0e9ff",
      200: "#c7d5ff",
      300: "#a5b8ff",
      400: "#8193ff",
      500: "#6366f1",
      600: "#5850e6",
      700: "#4939cb",
      800: "#3e31a4",
      900: "#342c82",
      950: "#211a4c"
    },
    secondary: {
      50: "#f5f5f5",
      100: "#ebebeb",
      200: "#d6d6d6",
      300: "#b8b8b8",
      400: "#999999",
      500: "#7a7a7a",
      600: "#5c5c5c",
      700: "#3d3d3d",
      800: "#1f1f1f",
      900: "#141414",
      950: "#0a0a0a"
    },
    accent: {
      50: "#fef3f2",
      100: "#ffe3e1",
      200: "#ffccc7",
      300: "#ffa8a1",
      400: "#fc766a",
      500: "#f44a3a",
      600: "#e1301e",
      700: "#bd2515",
      800: "#9c2215",
      900: "#822318",
      950: "#470e08"
    },
    neutral: {
      50: "#fafafa",
      100: "#f5f5f5",
      200: "#e5e5e5",
      300: "#d4d4d4",
      400: "#a3a3a3",
      500: "#737373",
      600: "#525252",
      700: "#404040",
      800: "#262626",
      900: "#171717",
      950: "#0a0a0a"
    },
    semantic: {
      success: {
        50: "#f0fdf4",
        100: "#dcfce7",
        200: "#bbf7d0",
        300: "#86efac",
        400: "#4ade80",
        500: "#22c55e",
        600: "#16a34a",
        700: "#15803d",
        800: "#166534",
        900: "#14532d",
        950: "#052e16"
      },
      warning: {
        50: "#fefce8",
        100: "#fef9c3",
        200: "#fef08a",
        300: "#fde047",
        400: "#facc15",
        500: "#eab308",
        600: "#ca8a04",
        700: "#a16207",
        800: "#854d0e",
        900: "#713f12",
        950: "#422006"
      },
      error: {
        50: "#fef2f2",
        100: "#fee2e2",
        200: "#fecaca",
        300: "#fca5a5",
        400: "#f87171",
        500: "#ef4444",
        600: "#dc2626",
        700: "#b91c1c",
        800: "#991b1b",
        900: "#7f1d1d",
        950: "#450a0a"
      },
      info: {
        50: "#eff6ff",
        100: "#dbeafe",
        200: "#bfdbfe",
        300: "#93c5fd",
        400: "#60a5fa",
        500: "#3b82f6",
        600: "#2563eb",
        700: "#1d4ed8",
        800: "#1e40af",
        900: "#1e3a8a",
        950: "#172554"
      }
    },
    special: {
      "neu-light": "#e0e5ec",
      "neu-dark": "#a3b1c6",
      "neu-bg": "#e0e5ec",
      "neu-shadow-light": "#ffffff",
      "neu-shadow-dark": "#a3b1c6"
    }
  },
  typography: {
    fontFamilies: {
      sans: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      serif: "'Merriweather', 'Georgia', serif",
      mono: "'Fira Code', 'Monaco', 'Courier New', monospace",
      display: "'Poppins', -apple-system, BlinkMacSystemFont, sans-serif"
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
    xs: "3px 3px 6px #a3b1c6, -3px -3px 6px #ffffff",
    sm: "5px 5px 10px #a3b1c6, -5px -5px 10px #ffffff",
    md: "9px 9px 16px #a3b1c6, -9px -9px 16px #ffffff",
    lg: "12px 12px 20px #a3b1c6, -12px -12px 20px #ffffff",
    xl: "15px 15px 25px #a3b1c6, -15px -15px 25px #ffffff",
    "2xl": "20px 20px 35px #a3b1c6, -20px -20px 35px #ffffff",
    inner: "inset 5px 5px 10px #a3b1c6, inset -5px -5px 10px #ffffff",
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
      fadeIn: "@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }",
      slideIn: "@keyframes slideIn { from { transform: translateY(10px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }",
      pulse: "@keyframes pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.05); } }"
    }
  },
  components: {
    button: {
      variants: {
        raised: {
          base: "bg-[#e0e5ec] shadow-[9px_9px_16px_#a3b1c6,-9px_-9px_16px_#ffffff] rounded-xl",
          hover: "hover:shadow-[6px_6px_12px_#a3b1c6,-6px_-6px_12px_#ffffff]",
          active: "active:shadow-[inset_5px_5px_10px_#a3b1c6,inset_-5px_-5px_10px_#ffffff]",
          disabled: "disabled:opacity-50 disabled:cursor-not-allowed"
        },
        pressed: {
          base: "bg-[#e0e5ec] shadow-[inset_5px_5px_10px_#a3b1c6,inset_-5px_-5px_10px_#ffffff] rounded-xl",
          hover: "hover:shadow-[inset_3px_3px_6px_#a3b1c6,inset_-3px_-3px_6px_#ffffff]",
          disabled: "disabled:opacity-50 disabled:cursor-not-allowed"
        },
        flat: {
          base: "bg-[#e0e5ec] rounded-xl",
          hover: "hover:shadow-[5px_5px_10px_#a3b1c6,-5px_-5px_10px_#ffffff]",
          active: "active:shadow-[inset_2px_2px_5px_#a3b1c6,inset_-2px_-2px_5px_#ffffff]",
          disabled: "disabled:opacity-50 disabled:cursor-not-allowed"
        }
      },
      sizes: {
        sm: { padding: "0.5rem 1rem", height: "2.25rem", fontSize: "0.875rem", borderRadius: "0.5rem" },
        md: { padding: "0.75rem 1.5rem", height: "2.75rem", fontSize: "1rem", borderRadius: "0.75rem" },
        lg: { padding: "1rem 2rem", height: "3.25rem", fontSize: "1.125rem", borderRadius: "1rem" },
        xl: { padding: "1.25rem 2.5rem", height: "3.75rem", fontSize: "1.25rem", borderRadius: "1.25rem" }
      },
      states: {
        loading: { className: "animate-pulse", animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite" },
        success: { className: "bg-green-100 text-green-800" },
        error: { className: "bg-red-100 text-red-800" }
      }
    },
    card: {
      variants: {
        raised: {
          base: "bg-[#e0e5ec] shadow-[12px_12px_20px_#a3b1c6,-12px_-12px_20px_#ffffff] rounded-2xl p-6"
        },
        pressed: {
          base: "bg-[#e0e5ec] shadow-[inset_9px_9px_16px_#a3b1c6,inset_-9px_-9px_16px_#ffffff] rounded-2xl p-6"
        },
        floating: {
          base: "bg-[#e0e5ec] shadow-[20px_20px_35px_#a3b1c6,-20px_-20px_35px_#ffffff] rounded-2xl p-6"
        }
      },
      sizes: {
        sm: { padding: "1rem", borderRadius: "1rem" },
        md: { padding: "1.5rem", borderRadius: "1.25rem" },
        lg: { padding: "2rem", borderRadius: "1.5rem" }
      },
      states: {
        hover: { className: "transition-shadow duration-300" },
        selected: { className: "ring-2 ring-primary ring-offset-2" }
      }
    },
    input: {
      variants: {
        inset: {
          base: "bg-[#e0e5ec] shadow-[inset_5px_5px_10px_#a3b1c6,inset_-5px_-5px_10px_#ffffff] rounded-lg border-none",
          focus: "focus:shadow-[inset_3px_3px_6px_#a3b1c6,inset_-3px_-3px_6px_#ffffff]"
        },
        raised: {
          base: "bg-[#e0e5ec] shadow-[5px_5px_10px_#a3b1c6,-5px_-5px_10px_#ffffff] rounded-lg border-none",
          focus: "focus:shadow-[3px_3px_6px_#a3b1c6,-3px_-3px_6px_#ffffff]"
        }
      },
      sizes: {
        sm: { padding: "0.5rem 0.75rem", height: "2.25rem", fontSize: "0.875rem" },
        md: { padding: "0.75rem 1rem", height: "2.75rem", fontSize: "1rem" },
        lg: { padding: "1rem 1.25rem", height: "3.25rem", fontSize: "1.125rem" }
      },
      states: {
        error: { className: "ring-2 ring-red-500" },
        success: { className: "ring-2 ring-green-500" }
      }
    },
    badge: {
      variants: {
        raised: {
          base: "bg-[#e0e5ec] shadow-[3px_3px_6px_#a3b1c6,-3px_-3px_6px_#ffffff] rounded-full"
        },
        inset: {
          base: "bg-[#e0e5ec] shadow-[inset_2px_2px_4px_#a3b1c6,inset_-2px_-2px_4px_#ffffff] rounded-full"
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
        raised: {
          base: "bg-[#e0e5ec] shadow-[5px_5px_10px_#a3b1c6,-5px_-5px_10px_#ffffff] rounded-full",
          active: "shadow-[inset_3px_3px_6px_#a3b1c6,inset_-3px_-3px_6px_#ffffff]"
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
        raised: {
          base: "bg-[#e0e5ec] shadow-[inset_3px_3px_6px_#a3b1c6,inset_-3px_-3px_6px_#ffffff] rounded-full"
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
        raised: {
          base: "bg-[#e0e5ec] shadow-[5px_5px_10px_#a3b1c6,-5px_-5px_10px_#ffffff] rounded-lg p-1",
          active: "shadow-[inset_3px_3px_6px_#a3b1c6,inset_-3px_-3px_6px_#ffffff]"
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
        raised: {
          base: "bg-[#e0e5ec] shadow-[20px_20px_35px_#a3b1c6,-20px_-20px_35px_#ffffff] rounded-2xl"
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
        raised: {
          base: "bg-[#e0e5ec] shadow-[9px_9px_16px_#a3b1c6,-9px_-9px_16px_#ffffff] rounded-xl"
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
        raised: {
          base: "bg-[#e0e5ec] shadow-[12px_12px_20px_#a3b1c6,-12px_-12px_20px_#ffffff] rounded-xl"
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
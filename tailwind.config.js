/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#35D687",
          foreground: "hsl(var(--primary-foreground))",
          hover: "#2FC178",
        },
        secondary: {
          DEFAULT: "#1FBFA2",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "#7AF0B0",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "#111816",
          foreground: "hsl(var(--card-foreground))",
        },
        // Custom Bitcoin AI colors
        'brand-green': '#35D687',
        'brand-green-hover': '#2FC178',
        'secondary-teal': '#1FBFA2',
        'accent-lime': '#7AF0B0',
        'dark-gradient-start': '#071B16',
        'dark-gradient-end': '#0E2E24',
        'surface-dark': '#0B0F0D',
        'card-surface': '#111816',
        'border-color': '#1D2A25',
        'text-on-dark': '#E7F6EF',
        'muted-text': '#95B7AB',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "fade-in": {
          from: { opacity: 0, transform: "translateY(20px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        "slide-in-left": {
          from: { opacity: 0, transform: "translateX(-50px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        "slide-in-right": {
          from: { opacity: 0, transform: "translateX(50px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "slide-in-left": "slide-in-left 0.6s ease-out",
        "slide-in-right": "slide-in-right 0.6s ease-out",
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(135deg, #071B16 0%, #0E2E24 100%)',
        'gradient-primary': 'linear-gradient(135deg, #35D687 0%, #1FBFA2 100%)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

import { defineConfig } from "@pandacss/dev"

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  conditions: {
    light: '[data-color-mode=light] &',
    dark: '[data-color-mode=dark] &',
    standardTheme: '[data-theme=standard] &',
  },
  // Useful for theme customization
  theme: {
    extend: {
      semanticTokens: {
        colors: {
          'accent-foreground': {
            value: {
              base: 'hsl(222,47%,11%)',
              _stardardTheme: {
                base: 'hsl(222,47%,11%)',
                dark: 'hsl(210,40%,98%)'
              }
            },
            description: 'Accent foreground color',
          }
        }
      }
    }
  },

  // The output directory for your css system
  outdir: "src/styled-system",
})


import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '1.5rem',
        lg: '2rem'
      }
    },
    colors: {
      transparent: 'transparent',
      dark: '#0e162a',
      light: '#fefeff',
      slate: {
        200: colors.slate[200],
        400: colors.slate[400]
      },
      gray: {
        600: colors.slate[600],
        800: colors.slate[800]
      }
    }
  },
  plugins: [require('tw-elements/dist/plugin.cjs')],
  darkMode: 'class'
} satisfies Config

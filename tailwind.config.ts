import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}'
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
    extend: {
      colors: {
        transparent: 'transparent',
        dark: '#0e162a',
        light: '#fefeff',
        pink: { dark: '#c454ae', light: '#db98ce' },
        slate: {
          200: colors.slate[200],
          300: colors.slate[300],
          400: colors.slate[400],
          500: colors.slate[500]
        },
        gray: {
          600: colors.slate[600],
          700: colors.slate[700],
          800: colors.slate[800]
        }
      }
    }
  },
  plugins: [],
  darkMode: 'class'
} satisfies Config

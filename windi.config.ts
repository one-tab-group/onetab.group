import { defineConfig } from 'windicss/helpers'
import plugin from 'windicss/plugin'
import colors from 'windicss/colors'
import typography from 'windicss/plugin/typography'

const rainbowGradient = plugin(({ addUtilities }) => {
  addUtilities({
    '.bg-neon': {
      'background-image': `linear-gradient(90deg, ${colors.sky[200]} 0px, ${colors.slate[200]} 100%)`
    }
  })
})

export default defineConfig({
  darkMode: 'class',
  attributify: true,
  plugins: [typography, rainbowGradient],
  theme: {
    extend: {
      colors: {
        // for dev version
        malibu: {
          50: '#edf1ff',
          100: '#dee6ff',
          200: '#c4d1ff',
          300: '#a0b2ff',
          400: '#828fff',
          500: '#5b60f9',
          600: '#453dee',
          700: '#3a2fd3',
          800: '#3029aa',
          900: '#2b2986'
        },
        // for production version
        lochmara: {
          50: '#f0f8ff',
          100: '#e0f0fe',
          200: '#b9e2fe',
          300: '#7ccbfd',
          400: '#36b2fa',
          500: '#0c98eb',
          600: '#007acc',
          700: '#015fa3',
          800: '#065186',
          900: '#0b446f'
        },
        shark: {
          50: '#f6f6f7',
          100: '#e1e3e6',
          200: '#c3c7cc',
          300: '#9da2ab',
          400: '#787d89',
          500: '#5e636e',
          600: '#4a4d57',
          700: '#3d4048',
          800: '#2e2f33',
          900: '#1f2023'
        }
      }
    }
  },
  shortcuts: {
    'text-neon':
      'text-transparent bg-clip-text bg-gradient-to-r from-lochmara-500 to-lochmara-200',
    btn: `
      font-semibold h-12 px-6 mt-8 rounded-lg inline-flex items-center justify-center
      sm:w-auto
    `,
    'btn-secondary': `
      bg-lochmara-500 text-white
      border border-shark-200 border-opacity-30
      dark:bg-white dark:text-shark-200
      hover:bg-lochmara-400 hover:border-opacity-10 dark:hover:bg-opacity-10
      focus:outline-none focus:ring-2 focus:ring-shark-400 focus:right-offset-2 focus:right-offset-shark-50
     `,
    'btn-blur':
      'backdrop-filter backdrop-blur-sm backdrop-saturate-[180%] dark:bg-opacity-33',
    'card-blur': 'backdrop-filter backdrop-blur-lg backdrop-saturate-[180%]',
    'text-primary': 'text-shark-900 dark:text-shark-50',
    'text-secondary': 'text-shark-700 dark:text-shark-300'
  }
})

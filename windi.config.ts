import { defineConfig } from 'windicss/helpers'
import plugin from 'windicss/plugin'
import colors from 'windicss/colors'

const rainbowGradient = plugin(({ addUtilities }) => {
  addUtilities({
    '.rainbow-gradient': {
      background: 'linear-gradient(90deg, #ff0000, #ff00ff, #0000ff, #00ffff, #00ff00, #ffff00)',
    },
  })
})

export default defineConfig({
  darkMode: 'class',
  attributify: true,
  plugins: [
    rainbowGradient
  ],
})

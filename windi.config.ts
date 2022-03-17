import { defineConfig } from "windicss/helpers"
import plugin from "windicss/plugin"
import colors from "windicss/colors"
import typography from "windicss/plugin/typography"

const rainbowGradient = plugin(({ addUtilities }) => {
  addUtilities({
    ".bg-neon": {
      "background-image": `linear-gradient(90deg, ${colors.sky[200]} 0px, ${colors.slate[200]} 100%)`,
    },
  })
})

export default defineConfig({
  darkMode: "class",
  attributify: true,
  plugins: [typography, rainbowGradient],
  theme: {
    extend: {
      colors: {
        slate: colors.slate,
      },
    },
  },
  shortcuts: {
    "text-neon":
      "text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-sky-200",
    btn: `
      font-semibold h-12 px-6 mt-8 rounded-lg inline-flex items-center justify-center
      sm:w-auto
    `,
    "btn-secondary": `
      bg-sky-500 text-white
      border border-slate-200 border-opacity-30
      dark:bg-white dark:text-slate-200
      hover:bg-sky-400 hover:border-opacity-10 dark:hover:bg-opacity-10
      focus:outline-none focus:ring-2 focus:ring-slate-400 focus:right-offset-2 focus:right-offset-slate-50
     `,
    "btn-blur":
      "backdrop-filter backdrop-blur-sm backdrop-saturate-[180%] dark:bg-opacity-33",
    "card-blur": "backdrop-filter backdrop-blur-lg backdrop-saturate-[180%]",
  },
})

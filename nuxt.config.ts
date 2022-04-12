import { defineNuxtConfig } from 'nuxt3'
import ViteComponents from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'

export default defineNuxtConfig({
  meta: {
    title: 'One Tab Group',
  },
  modules: [
    'vue-plausible'
  ],
  buildModules: [
    'nuxt-windicss',
    '@pinia/nuxt',
    'unplugin-icons/nuxt',
    '@vueuse/nuxt',
    [
      '@intlify/nuxt3',
      {
        localeDir: 'locales',
        vueI18n: {
          locale: 'en'
        }
      }
    ]
  ],
  components: {
    global: true,
    dirs: ['~/components']
  },
  plausible: {
    domain: 'onetab.group'
  },
  vite: {
    plugins: [
      ViteComponents({
        resolvers: [
          IconsResolver({
            componentPrefix: '',
          }),
        ],
        dts: true,
      }),
    ],
  },
  publicRuntimeConfig: {
    CHATWOOT_WEBSITE_TOKEN: process.env.CHATWOOT_WEBSITE_TOKEN,
    PLAUSIBLE_TOKEN: process.env.PLAUSIBLE_TOKEN
  }
})

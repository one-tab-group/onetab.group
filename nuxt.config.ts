import { defineNuxtConfig } from 'nuxt3'
import ViteComponents from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'

export default defineNuxtConfig({
  meta: {
    title: 'onetab.group: Your all-in-one tab manager for chrome.',
    viewport:
      'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0',
    description:
      'onetab.group is a chrome extension that allows you to manage your tabs & tab groups in one place. One-click to aggregate all tabs & tab groups into one session.',
    link: [{ rel: 'icon', type: 'image/*', href: '/logo.svg' }],
    script: [
      {
        async: true,
        defer: true,
        'data-website-id': process.env.UMAMI_WEBSITE_ID,
        src: 'https://analytics.onetab.group/umami.js'
      }
    ]
  },
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
  vite: {
    plugins: [
      ViteComponents({
        resolvers: [
          IconsResolver({
            componentPrefix: ''
          })
        ],
        dts: true
      })
    ]
  },
  publicRuntimeConfig: {
    CHATWOOT_WEBSITE_TOKEN: process.env.CHATWOOT_WEBSITE_TOKEN,
    PLAUSIBLE_TOKEN: process.env.PLAUSIBLE_TOKEN,
    UMAMI_WEBSITE_ID: process.env.UMAMI_WEBSITE_ID
  }
})

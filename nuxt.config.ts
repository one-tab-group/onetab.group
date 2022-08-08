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
    meta: [
      {
        property: 'og:title',
        content: 'onetab.group: Your all-in-one tab manager for chrome.'
      },
      {
        property: 'og:description',
        content:
          'onetab.group is a chrome extension that allows you to manage your tabs & tab groups in one place. One-click to aggregate all tabs & tab groups into one session.'
      },
      { property: 'og:image', content: 'https://onetab.group/preview.jpg' },
      { property: 'og:url', content: 'https://onetab.group' },
      { property: 'og:stie_name', content: 'One Tab Group' },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '900' },
      {
        property: 'og:image:alt',
        content:
          'onetab.group is a chrome extension that allows you to manage your tabs & tab groups in one place. One-click to aggregate all tabs & tab groups into one session.'
      },
      { property: 'twitter:site', content: 'One Tab Group' },
      {
        property: 'twitter:title',
        content: 'onetab.group: Your all-in-one tab manager for chrome.'
      },
      { property: 'twitter:card', content: 'summary_large_image' },
      {
        property: 'twitter:description',
        content:
          'onetab.group is a chrome extension that allows you to manage your tabs & tab groups in one place. One-click to aggregate all tabs & tab groups into one session.'
      },
      {
        property: 'twitter:image:src',
        content: 'https://onetab.group/preview.jpg'
      }
    ],
    script: [
      {
        async: true,
        defer: true,
        'data-website-id': process.env.UMAMI_WEBSITE_ID,
        src: 'https://analysis.onetab.group/umami.js'
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
    UMAMI_WEBSITE_ID: process.env.UMAMI_WEBSITE_ID,
    EMAIL_USER: process.env.EMAIL_USER,
    EMAIL_PASSWORD: process.env.EMAIL_PASSWORD
  }
})

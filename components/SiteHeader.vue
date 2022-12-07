<template>
  <slot />
  <!-- header -->
  <header class="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8">
    <div
      class="relative pt-6 lg:pt-8 flex items-center justify-between font-semibold leading-6"
      text="shark-700 dark:shark-200 sm"
    >
      <a href="/" class="w-full">
        <ClientOnly>
          <img
            class="h-8"
            :src="isDark ? '/favicon.svg' : '/favicon-dark.svg'"
            alt="site logo"
          />
        </ClientOnly>
      </a>
      <div class="flex items-center">
        <div class="hidden md:flex items-center">
          <!-- homepage navigation -->
          <nav>
            <ul class="flex items-center space-x-8">
              <li>
                <a
                  class="hover:text-lochmara-500 dark:hover:text-lochmara-400"
                  href="/#features"
                  @click="emit('navto', 'features')"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  class="hover:text-lochmara-500 dark:hover:text-lochmara-400"
                  href="/#faqs"
                  @click="emit('navto', 'faqs')"
                >
                  FAQs
                </a>
              </li>
              <li>
                <NuxtLink
                  to="/pricing"
                  class="hover:text-lochmara-500 dark:hover:text-lochmara-400"
                >
                  Pricing
                </NuxtLink>
              </li>
              <li>
                <a
                  href="https://github.com/sponsors/xiaoluoboding"
                  class="hover:text-lochmara-500 dark:hover:text-lochmara-400"
                >
                  Sponsor
                </a>
              </li>
            </ul>
          </nav>
          <!-- end homepage navigation -->
          <div
            class="flex items-center border-l border-shark-900 dark:border-shark-400 ml-6 pl-6 space-x-6"
          >
            <button
              class="flex items-center block text-shark-900 dark:text-white hover:text-shark-500 dark:hover:text-lochmara-500"
              @click="(e) => toggleDark()"
            >
              <carbon:moon class="h-6 w-6" v-if="isDark" />
              <carbon:sun class="h-6 w-6" v-else />
            </button>
            <!-- <button
              class="flex items-center block text-shark-900 dark:text-white hover:text-shark-500 dark:hover:text-lochmara-500"
              @click="(e) => toggleLocales()"
            >
              <carbon:language class="h-6 w-6" />
            </button> -->
            <a
              :href="twitterUrl"
              target="_blank"
              class="flex items-center block text-shark-900 dark:text-white hover:text-shark-500 dark:hover:text-lochmara-500"
            >
              <span class="sr-only hidden">One Tab Group on Twitter</span>
              <mdi:twitter class="h-6 w-6" />
            </a>
            <a
              :href="telegramUrl"
              target="_blank"
              class="flex items-center block text-shark-900 dark:text-white hover:text-shark-500 dark:hover:text-lochmara-500"
            >
              <span class="sr-only hidden">One Tab Group on Telegram</span>
              <mdi:telegram class="h-6 w-6" />
            </a>
            <a
              :href="githubUrl"
              target="_blank"
              class="flex items-center block text-shark-900 dark:text-white hover:text-shark-500 dark:hover:text-lochmara-500"
            >
              <span class="sr-only hidden">One Tab Group on GitHub</span>
              <mdi:github class="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { isDark, toggleDark } from '~~/composables/useDarkMode'

const twitterUrl = 'https://twitter.com/OneTabGroup'

const telegramUrl = 'https://t.me/otghq'

const githubUrl = 'https://github.com/one-tab-group/'

const emit = defineEmits(['navto'])

const SVGColor = computed(() => {
  return isDark.value ? '#fff' : '#0F172A'
})
</script>

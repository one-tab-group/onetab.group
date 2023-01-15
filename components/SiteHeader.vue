<template>
  <div class="hidden sm:flex">
    <div
      class="px-4 relative group bg-neon h-10 z-99 w-full flex justify-center"
    >
      <a
        href="/changelog/?ref=alert_bar"
        class="relative px-4 py-2.5 leading-none flex items-center divide-x divide-shark-50 font-semibold text-shark-50"
      >
        <span class="pr-4 text-sm">
          ✨ Released v1.3.0 on Jan 15 2023 integrates with Raycast for effective
          tab searching.
        </span>
        <span
          class="pl-4 group-hover:text-white/90 transition duration-500 text-sm"
        >
          See what's new →
        </span>
      </a>
    </div>
  </div>
  <slot />
  <!-- header -->
  <header class="card-blur sticky left-0 right-0 top-0 h-16 z-99">
    <div class="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 py-4">
      <div
        class="relative flex items-center justify-between font-semibold leading-6"
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
            <nav class="text-primary">
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
              </ul>
            </nav>
            <!-- end homepage navigation -->
            <div
              class="flex items-center border-l border-shark-900 dark:border-shark-400 ml-6 pl-6 space-x-6"
            >
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
              <button
                class="flex items-center block text-shark-900 dark:text-white hover:text-shark-500 dark:hover:text-lochmara-500"
                @click="(e) => toggleDark()"
              >
                <carbon:moon class="h-6 w-6" v-if="isDark" />
                <carbon:sun class="h-6 w-6" v-else />
              </button>
            </div>
          </div>
        </div>

        <div
          id="hamburger"
          class="lg:hidden"
          :class="{ open: isOpenMobileMenu }"
          @click="toggleMobileMenu"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
    <!-- mobile menu - begin -->
    <Teleport to="body">
      <div id="menu-mobile" class="block lg:hidden">
        <div class="menu-mobile-bg"></div>

        <ul class="menu-mobile-list">
          <li class="menu-mobile-item" @click="(e) => toggleDark()">
            <button
              class="flex items-center block text-shark-900 dark:text-white hover:text-shark-500 dark:hover:text-lochmara-500"
            >
              <carbon:moon class="h-6 w-6" v-if="isDark" />
              <carbon:sun class="h-6 w-6" v-else />
              <span class="ml-4">Dark Mode</span>
            </button>
          </li>
          <li class="menu-mobile-item">
            <a
              :href="twitterUrl"
              target="_blank"
              class="flex items-center block text-shark-900 dark:text-white hover:text-shark-500 dark:hover:text-lochmara-500"
            >
              <span class="sr-only hidden">One Tab Group on Twitter</span>
              <mdi:twitter class="h-6 w-6" />
              <span class="ml-4">Twitter</span>
            </a>
          </li>
          <li class="menu-mobile-item">
            <a
              :href="telegramUrl"
              target="_blank"
              class="flex items-center block text-shark-900 dark:text-white hover:text-shark-500 dark:hover:text-lochmara-500"
            >
              <span class="sr-only hidden">One Tab Group on Telegram</span>
              <mdi:telegram class="h-6 w-6" />
              <span class="ml-4">Telegram</span>
            </a>
          </li>
          <li class="menu-mobile-item">
            <a
              href="/changelog"
              target="_blank"
              class="flex items-center block text-shark-900 dark:text-white hover:text-shark-500 dark:hover:text-lochmara-500"
            >
              <span>Changelog</span>
            </a>
          </li>
          <li class="menu-mobile-item">
            <a
              href="/terms-of-services"
              target="_blank"
              class="flex items-center block text-shark-900 dark:text-white hover:text-shark-500 dark:hover:text-lochmara-500"
            >
              <span>Terms & Conditions</span>
            </a>
          </li>
        </ul>
      </div>
    </Teleport>
    <!-- mobile menu - end -->
  </header>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import gsap from 'gsap'

import { isDark, toggleDark } from '~~/composables/useDarkMode'

const twitterUrl = 'https://twitter.com/OneTabGroup'

const telegramUrl = 'https://t.me/otghq'

const githubUrl = 'https://github.com/one-tab-group/'

const emit = defineEmits(['navto'])

const isOpenMobileMenu = ref(false)

const toggleMobileMenu = () => {
  if (!isOpenMobileMenu.value) {
    gsap.to('.menu-mobile-bg', {
      duration: 0.66,
      x: '-100vw',
      ease: 'expo.inOut'
    })

    const menuItemsRef = document.querySelectorAll('.menu-mobile-item')

    menuItemsRef.forEach((item, idx) => {
      gsap.to(item, {
        duration: 0.88,
        x: '-100vw',
        scaleX: 1,
        delay: idx * 0.04,
        ease: 'expo.inOut'
      })
    })
  } else {
    gsap.to('.menu-mobile-bg', {
      duration: 0.88,
      x: 0,
      ease: 'expo.inOut'
    })

    const menuItemsRef = document.querySelectorAll('.menu-mobile-item')

    menuItemsRef.forEach((item, idx) => {
      gsap.to(item, {
        duration: 0.66,
        x: 0,
        delay: idx * 0.02,
        ease: 'expo.inOut'
      })
    })
  }
  isOpenMobileMenu.value = !isOpenMobileMenu.value
  document.body.classList.toggle('overflow-hidden')
}
</script>

<style scoped>
#hamburger {
  width: 24px;
  height: 18px;
  position: relative;
  cursor: pointer;
  position: absolute;
  right: 0;
  background-color: transparent;
}

#hamburger:hover span:nth-child(1) {
  top: -2px;
  transition: 0.2s ease-in-out;
}

#hamburger:hover span:nth-child(3) {
  top: 18px;
  transition: 0.16s ease-in-out;
}

#hamburger span {
  z-index: 3;
  display: block;
  position: absolute;
  height: 2px;
  width: 100%;
  border-radius: 5px;
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
  transition: 0.25s ease-in-out;
  @apply bg-shark-900 dark:bg-shark-50;
}

#hamburger span:nth-child(1) {
  top: 0px;
}

#hamburger span:nth-child(2) {
  top: 8px;
}

#hamburger span:nth-child(3) {
  top: 16px;
}

#hamburger.open span:nth-child(1) {
  top: 8px;
  -webkit-transform: rotate(135deg);
  -moz-transform: rotate(135deg);
  -o-transform: rotate(135deg);
  transform: rotate(135deg);
  @apply bg-shark-900 dark:bg-shark-50;
}

#hamburger.open span:nth-child(2) {
  opacity: 0;
  left: -30px;
  transition: 0.16s ease-in-out;
}

#hamburger.open span:nth-child(3) {
  top: 8px;
  transform: rotate(-135deg);
  @apply bg-shark-900 dark:bg-shark-50;
}

.menu-mobile-bg {
  @apply w-full h-full fixed top-16 right-[-100%] bg-shark-50 dark:bg-shark-900 z-100 will-change-transform;
}

.menu-mobile-list {
  @apply z-101 fixed top-20 left-0 text-white w-full list-none;
}

.menu-mobile-list .menu-mobile-item {
  @apply relative left-full cursor-pointer text-base text-white font-400 py-4 px-9;
  @apply hover:text-lochmara-500;
  @apply border-b border-shark-300 dark:border-shark-700;
  @apply will-change-transform;
}

.menu-mobile-list .menu-mobile-item:hover {
  transition: all 0.1s ease-in-out;
}
</style>

<template>
  <div class="bg-shark-10 dark:bg-shark-800">
    <header class="max-w-screen-lg mx-auto px-8 lg:px-0">
      <div
        class="relative pt-6 lg:pt-8 flex items-center justify-between font-semibold leading-6"
        text="shark-700 dark:shark-200 sm"
      >
        <a href="/" class="w-full">
          <ClientOnly>
            <img
              class="h-8"
              :src="isDark ? '/favicon.svg' : '/favicon-dark.svg'"
            />
          </ClientOnly>
        </a>

        <div
          class="flex items-center border-shark-900 dark:border-shark-400 ml-6 pl-6 space-x-6"
        >
          <nav>
            <ul class="flex items-center space-x-8">
              <li>
                <a
                  class="hover:text-lochmara-500 dark:hover:text-lochmara-400"
                  href="/#features"
                >
                  Features
                </a>
              </li>
            </ul>
          </nav>
          <button
            class="flex items-center block text-shark-900 dark:text-white hover:text-shark-500 dark:hover:text-lochmara-500"
            @click="(e) => toggleDark()"
          >
            <carbon:moon class="h-6 w-6" v-if="isDark" />
            <carbon:sun class="h-6 w-6" v-else />
          </button>
        </div>
      </div>
    </header>
    <main class="max-w-screen-lg my-12 m-auto sm:rounded px-8 lg:px-0">
      <section class="container text-shark-800 dark:text-shark-100">
        <slot />
      </section>
    </main>
    <Divider between class="!max-w-screen-lg" />
    <footer
      class="max-w-screen-lg container mx-auto dark:text-white py-8 px-8 lg:px-0"
    >
      <div
        class="flex justify-between items-center flex-col lg:flex-row py-8 lg:p-0"
      >
        <div class="text-center sm:text-left">
          © 2022 <a class="text-neon" href="/">onetab.group</a>. All rights
          reserved.
        </div>
        <div class="divide-x divide-shark-200">
          <NuxtLink to="/terms-of-services" class="px-2"
            >Terms of Services</NuxtLink
          >
          <NuxtLink to="/privacy-policy" class="px-2">Privacy Policy</NuxtLink>
        </div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts" setup>
import { isDark } from '~~/composables/useDarkMode'
</script>

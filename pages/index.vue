<template>
  <header class="px-4 sm:px-6 md:px-8">
    <div
      class="relative pt-6 lg:pt-8 flex items-center justify-between text-slate-700 font-semibold text-sm leading-6 dark:text-slate-200"
    >
      <h1>One Tab Group</h1>
      <div class="flex items-center">
        <div class="hidden md:flex items-center">
          <!-- homepage navigation -->
          <nav>
            <ul class="flex items-center space-x-8">
              <li>
                <a
                  class="hover:text-sky-500 dark:hover:text-sky-400"
                  href="/features"
                  >Features</a
                >
              </li>
              <li>
                <a
                  href="https://github.com/sponsors/xiaoluoboding"
                  class="hover:text-sky-500 dark:hover:text-sky-400"
                  >Sponsor</a
                >
              </li>
              <li>
                <a
                  class="hover:text-sky-500 dark:hover:text-sky-400"
                  href="/blog"
                  >About</a
                >
              </li>
            </ul>
          </nav>
          <!-- end homepage navigation -->
          <div
            class="flex items-center border-l border-slate-200 ml-6 pl-6 dark:border-slate-800"
          >
            <button
              class="flex items-center ml-6 block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
              @click="(e) => toggleDark()"
            >
              <carbon:moon class="h-6 w-6" v-if="isDark" />
              <carbon:sun class="h-6 w-6" v-else />
            </button>
            <a
              href="https://twitter.com/one-tab-group"
              class="flex items-center ml-6 block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
            >
              <span class="sr-only hidden">OneTabGroup on Twitter</span>
              <carbon:logo-twitter class="h-6 w-6" />
            </a>
            <a
              href="https://github.com/one-tab-group"
              class="flex items-center ml-6 block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
            >
              <span class="sr-only hidden">OneTabGroup on GitHub</span>
              <carbon:logo-github class="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
  <main class="container mx-auto pt-20 sm:pt-24 lg:pt-32">
    <div class="relative max-w-3xl mx-auto">
      <div
        class="absolute rainbow-gradient duration-1000 -inset-2 transitiona-all opacity-10 rounded-xl blur-lg filter"
        group-hover="opacity-100 -inset-1 duration-200"
      ></div>
      <h1
        class="relative font-bold tracking-tight space-y-4"
        text="3xl slate-900 dark:slate-200 sm:4xl md:5xl center"
      >
        <p>Your all-in-one tab manager for chrome</p>
      </h1>
    </div>
    <p
      class="mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400"
    >
      One Tab Group is a chrome extension that allows you to manage your tabs in one place.
      One click to aggregate all tabs & tab groups into one session.
    </p>
    <div class="mt-6 sm:mt-10 flex justify-center space-x-6 text-sm">
      <a
        class="bg-slate-900 hover:bg-slate-700 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto"
        focus="outline-none ring-2 ring-slate-400 ring-offset-2 ring-offset-slate-50"
        dark="bg-sky-500 highlight-white/20 hover:bg-sky-400"
        href="/extension"
      >
        <carbon:download class="h-5 w-5 mr-2" /> <span>Get extension</span> 
      </a>
      <a
        class="bg-gray-200 hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto dark:bg-white dark:highlight-white/20 dark:hover:bg-slate-200"
        href="/sponsor"
      >
        <carbon:logo-github class="h-5 w-5 mr-2" /> <span>Sponsor on GitHub</span> 
      </a>
    </div>
    <div class="h-120"></div>
    <section class="point-bg relative py-20 bg-slate-900 flex flex-col justify-center items-center my-16 rounded-lg w-full">
      <div class="text-3xl text-slate-200 dark:text-slate-900 mb-8">Ready to get started?</div>
      <p class="text-lg pb-8 text-slate-600 text-center max-w-3xl mx-auto text-slate-200 dark:text-slate-400">
        Manage your tabs & tab groups in one place.
      </p>
      <a
        class="bg-sky-500 highlight-white/20 hover:bg-sky-400 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto"
        focus="outline-none ring-2 ring-slate-400 ring-offset-2 ring-offset-slate-50"
        dark="bg-slate-900 highlight-white/20 hover:bg-slate-700"
        href="/extension"
      >
        <carbon:download class="h-5 w-5 mr-2" /> <span>Get extension</span> 
      </a>
    </section>
  </main>
  <!-- footer -->
  <footer class="py-16 mt-auto bg-gray-900 text-slate-200 sm:py-16 lg:py-20">
    <div class="container mx-auto w-full">
      <div class="grid grid-cols-4 gap-2">
        <section>
          <figcaption class="text-xl font-semibold mb-4">Getting Started</figcaption>
          <figure class="text-slate-400">
            <ul class="space-y-2">
              <li>Get extension</li>
              <li>Keyboard shortcuts</li>
              <li>Migration from OneTab</li>
              <li>Help Center</li>
            </ul>
          </figure>
        </section>
        <section>
          <figcaption class="text-xl font-semibold mb-4">Features</figcaption>
          <figure class="text-slate-400">
            <ul class="space-y-2">
              <li>Save all tabs & tab groups</li>
              <li>Sync Opened Tabs</li>
              <li>Drag & Drop opened tabs into session</li>
              <li>Restore all tabs with tab group</li>
              <li>Visualization web bookmark</li>
              <li>KBar support</li>
            </ul>
          </figure>
        </section>
        <section>
          <figcaption class="text-xl font-semibold mb-4">Features</figcaption>
          <figure class="text-slate-400">
            <ul class="space-y-2">
              <li>Save all tabs & tab groups</li>
              <li>Sync Opened Tabs</li>
              <li>Drag & Drop opened tabs into session</li>
              <li>Restore all tabs with tab group</li>
              <li>Visualization web bookmark</li>
              <li>KBar support</li>
            </ul>
          </figure>
        </section>
        <section>
          <figcaption class="text-xl font-semibold mb-4">Support</figcaption>
          <figure class="text-slate-400">
            <ul class="space-y-2">
              <li>Twitter</li>
              <li>GitHub</li>
              <li>Chrome Extension</li>
              <li>IndieHackers</li>
              <li>ProductHunt</li>
              <li>Contact</li>
              <li>Changelog</li>
            </ul>
          </figure>
        </section>
      </div>
      <div class="mt-16 pt-10 border-t border-blue-gray-700 flex justify-between items-center">
        <div>One Tab Group © 2022 onetab.group. All rights reserved.</div>
        <div class="divide-x divide-slate-200">
          <a href="#" class="px-2">Terms of Servce</a>
          <a href="#" class="px-2">Privacy Policy</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import { useCounter } from "@/store/counter"
import { useI18n } from "vue-i18n"
import { isDark, toggleDark } from "@/composables/dark"

const { t, locale, availableLocales } = useI18n()
const counterStore = useCounter()

// fetch data from server/api
const { data } = await useAsyncData("/api/hello", () => {
  return $fetch("/api/hello", {
    params: {
      name: "world",
    },
  })
})

const toggleLocales = () => {
  // change to some real logic
  const locales = availableLocales
  console.log(locale.value)
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}

const gotoGitHub = () => {
  window.open("https://github.com/xiaoluoboding/nuxt3-starter")
}
</script>

<style>
.point-bg {
  background-image: radial-gradient(#64748b 1px, #0f172a 1px);
  background-size: 20px 20px;
}
.dark .point-bg {
  background-image: radial-gradient(#94a3b8 1px, #f8fafc 1px);
}
</style>
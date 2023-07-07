<template>
  <footer class="mt-20 py-16 px-8 bg-shark-900 text-shark-50 sm:py-16 lg:py-20">
    <div class="max-w-screen-xl mx-auto w-full">
      <div
        class="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4 text-center sm:text-left sm:p-0 py-20"
      >
        <section>
          <figcaption
            class="text-3xl font-semibold mb-4 flex justify-center flex-col lg:items-start"
          >
            <img src="/logo.svg" class="h-12" alt="" />
            <img src="/logo-text-light.svg" class="h-8 mt-4" alt="" />
          </figcaption>

          <p class="max-w-xs text-sm text-shark-300">
            Manage your tabs & tab groups in one place.
          </p>
          <figure class="text-shark-300 mt-6">
            <ul class="space-x-6 flex justify-center sm:justify-start mb-6">
              <li class="flex items-center">
                <a :href="twitterUrl" target="_blank">
                  <mdi:twitter class="h-6 w-6" />
                </a>
              </li>
              <li class="flex items-center">
                <a :href="telegramUrl" target="_blank">
                  <mdi:telegram class="h-6 w-6" />
                </a>
              </li>
            </ul>
            <div class="flex justify-center items-center lg:justify-start">
              <a
                href="https://www.producthunt.com/posts/one-tab-group?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-one&#0045;tab&#0045;group"
                target="_blank"
                ><img
                  src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=371900&theme=neutral"
                  alt="One&#0032;Tab&#0032;Group - Your&#0032;all&#0045;in&#0045;one&#0032;browser&#0032;tab&#0047;tab&#0032;group&#0032;manager&#0046; | Product Hunt"
                  style="width: 226px; height: 48px"
                  width="226"
                  height="48"
              /></a>
            </div>
          </figure>
        </section>
        <div>
          <p class="text-xl font-semibold">Getting Started</p>

          <nav
            class="flex flex-col mt-4 space-y-2 text-md text-shark-300 items-center lg:items-start"
          >
            <a
              class="flex hover:opacity-75 text-neon"
              :href="chromeUrl"
              target="_blank"
            >
              <span>Add to Chrome</span>
            </a>
            <a
              class="flex hover:opacity-75 text-neon"
              :href="edgeUrl"
              target="_blank"
            >
              <span>Add to Microsoft Edge</span>
            </a>
            <a
              class="flex hover:opacity-75 text-neon"
              :href="chromeUrl"
              target="_blank"
            >
              <span>Add to Brave</span>
            </a>
            <a class="hover:opacity-75" href="/blog/how-to-migrate-from-onetab">
              Migration from OneTab
            </a>
            <a
              class="hover:opacity-75"
              href="/blog/how-to-migrate-from-session-buddy"
            >
              Migration from Session Buddy
            </a>
            <a
              class="hover:opacity-75 flex items-center gap-1"
              href="https://www.indiehackers.com/product/one-tab-group"
              target="_blank"
            >
              <span>IndieHackers</span>
              <heroicons-outline:external-link class="h-4 w-4" />
            </a>
            <a
              class="hover:opacity-75 flex items-center gap-1"
              href="https://www.producthunt.com/products/one-tab-group"
              target="_blank"
            >
              <span>ProductHunt</span>
              <heroicons-outline:external-link class="h-4 w-4" />
            </a>
            <a class="hover:opacity-75 flex items-center gap-1" href="/blog">
              <span>Blog</span>
            </a>
          </nav>
        </div>

        <div>
          <p class="text-xl font-semibold">Features</p>

          <nav class="flex flex-col mt-4 space-y-2 text-md text-shark-300">
            <a
              class="hover:opacity-75"
              href="/blog/introduce-the-open-tabs-panel"
            >
              Introduce the Open Tabs Panel
            </a>
            <a
              class="hover:opacity-75"
              href="/blog/how-to-save-your-tabs-and-tab-groups"
            >
              How to Save tabs & tab groups
            </a>
            <a
              class="hover:opacity-75"
              href="/blog/how-to-restore-your-browser-tabs-and-tab-groups"
            >
              How to Restore tabs & tab groups
            </a>
            <a
              class="hover:opacity-75"
              href="/blog/how-to-sync-tabs-across-devices-or-browsers"
            >
              Cloud syncing tabs across devices
            </a>
            <a
              class="hover:opacity-75"
              href="/blog/sharing-your-tabs-or-tab-groups-with-others"
            >
              Sharing tabs & tab groups with others
            </a>
            <a
              class="hover:opacity-75"
              href="/blog/sync-your-browser-tabs-to-notion"
            >
              Sync your browser tabs to Notion
            </a>
            <a
              class="hover:opacity-75"
              href="/blog/search-saved-browser-tabs-and-tab-groups-in-raycast"
            >
              Search tabs & tab groups using Raycast
            </a>
            <a
              class="hover:opacity-75"
              href="/blog/how-to-reduce-browser-memory-usage"
            >
              How to reduce browser memory usage
            </a>
            <a
              class="hover:opacity-75 hidden"
              href="/blog/how-does-one-tab-group-compare-to-other-tab-management-extensions"
            >
              How does One Tab Group compare to other tab management extensions
            </a>
          </nav>
        </div>

        <div>
          <p class="text-xl font-semibold">Product</p>

          <nav
            class="flex flex-col mt-4 space-y-2 text-md text-shark-300 items-center lg:items-start"
          >
            <a
              class="hover:opacity-75"
              href="/blog/sync-your-browser-tabs-to-notion"
            >
              Integration with <span class="text-neon">Notion</span>
            </a>

            <a
              class="hover:opacity-75"
              href="/blog/search-saved-browser-tabs-and-tab-groups-in-raycast"
            >
              Integration with <span class="text-neon">Raycast</span>
            </a>

            <div
              class="hover:opacity-75 flex items-center gap-1 cursor-pointer"
              @click="emit('navto', 'features')"
            >
              <span>Features</span>
            </div>

            <div
              class="hover:opacity-75 flex items-center gap-1 cursor-pointer"
              @click="emit('navto', 'faqs')"
            >
              <span>FAQs</span>
            </div>

            <a
              class="hover:opacity-75"
              href="/pricing?pd_identifier=f8f10870-2b1b-44bc-a6b4-49fedfb967f3"
            >
              Pricing
            </a>

            <a
              class="hover:opacity-75 flex items-center gap-1"
              href="mailto:support@onetab.group"
            >
              <span>Contact</span>
              <carbon:email class="h-4 w-4" />
            </a>

            <a
              class="hover:opacity-75 flex items-center gap-1"
              href="/changelog"
            >
              <span>Changelog</span>
            </a>
            <a
              class="hover:opacity-75 flex items-center gap-1"
              href="https://github.com/orgs/one-tab-group/projects/1"
              target="_blank"
            >
              <span>Roadmap</span>
              <heroicons-outline:external-link class="h-4 w-4" />
            </a>
          </nav>
        </div>
      </div>

      <Divider between />

      <div
        class="flex justify-between items-center flex-col lg:flex-row py-8 lg:p-0"
      >
        <div class="text-center sm:text-left">
          One Tab Group © {{ new Date().getFullYear() }}
          <a class="text-neon" href="/">onetab.group</a>. All rights reserved.
        </div>
        <div class="divide-x divide-shark-200">
          <NuxtLink to="/terms-of-services" class="px-2"
            >Terms of Services</NuxtLink
          >
          <NuxtLink to="/privacy-policy" class="px-2">Privacy Policy</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
const emit = defineEmits(['navto'])

const chromeUrl =
  'https://chrome.google.com/webstore/detail/one-tab-group/lajbajamkpmkmldodfbljkjihppdclbm'
const edgeUrl =
  'https://microsoftedge.microsoft.com/addons/detail/one-tab-group-tabtab-g/njmgdlgmnlinpieohfpmiipenmgilpga'

const twitterUrl = 'https://twitter.com/OneTabGroup'

const telegramUrl = 'https://t.me/otghq'

const githubUrl = 'https://github.com/one-tab-group/'
</script>

<style scoped></style>

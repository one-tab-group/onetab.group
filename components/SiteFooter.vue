<template>
  <footer class="mt-20 py-16 px-8 bg-shark-900 text-shark-50 sm:py-16 lg:py-20">
    <div class="max-w-screen-xl mx-auto w-full">
      <div
        class="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4 text-center sm:text-left sm:p-0 py-20"
      >
        <section>
          <figcaption class="text-3xl font-semibold mb-4">
            <img src="/logo.svg" class="h-12" alt="" />
            <img src="/logo-text-light.svg" class="h-8 mt-4" alt="" />
          </figcaption>

          <p class="max-w-xs text-sm text-shark-400">
            Manage your tabs & tab groups in one place.
          </p>
          <figure class="text-shark-400 mt-8">
            <ul class="space-x-6 flex justify-center sm:justify-start">
              <li class="flex items-center">
                <a :href="twitterUrl" target="_blank">
                  <mdi:twitter class="h-6 w-6" />
                </a>
              </li>
              <li class="flex items-center">
                <a :href="githubUrl" target="_blank">
                  <carbon:logo-github class="h-6 w-6" />
                </a>
              </li>
            </ul>
          </figure>
        </section>
        <div>
          <p class="text-xl font-semibold">Getting Started</p>

          <nav class="flex flex-col mt-4 space-y-2 text-md text-shark-400">
            <a
              class="flex hover:opacity-75 text-neon"
              :href="chromeUrl"
              target="_blank"
            >
              <span>Get it for Chrome</span>
            </a>
            <a
              class="flex hover:opacity-75 text-neon"
              :href="edgeUrl"
              target="_blank"
            >
              <span>Get it for Microsoft Edge</span>
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
            >
              <span>IndieHackers</span>
              <heroicons-outline:external-link class="h-4 w-4" />
            </a>
            <a class="hover:opacity-75" href=""> ProductHunt </a>
          </nav>
        </div>

        <div>
          <p class="text-xl font-semibold">Product Features</p>

          <nav class="flex flex-col mt-4 space-y-2 text-md text-shark-400">
            <a
              class="hover:opacity-75"
              href="/blog/save-all-tabs-and-tab-groups"
            >
              Save all tabs & tab groups
            </a>
            <a
              class="hover:opacity-75"
              href="/blog/synchronize-the-opened-tabs-and-tab-groups"
            >
              Synchronize the Open Tabs/Tab Groups
            </a>
            <a class="hover:opacity-75" href="">
              Drag & Drop opened tabs into session
            </a>
            <a class="hover:opacity-75" href="">
              Restore all tabs with tab group
            </a>
            <a class="hover:opacity-75" href=""> Visualization web bookmark </a>
            <a class="hover:opacity-75" href=""> Command Palette support </a>
          </nav>
        </div>

        <div>
          <p class="text-xl font-semibold">Support</p>

          <nav class="flex flex-col mt-4 space-y-2 text-md text-shark-400">
            <div
              class="hover:opacity-75 flex items-center gap-1 cursor-pointer"
              @click="emit('goto-faqs')"
            >
              <span>FAQS</span>
            </div>
            <a class="hover:opacity-75" href=""> Help Center </a>

            <a
              class="hover:opacity-75 flex items-center gap-1"
              href="mailto:onetabgroup@hotmail.com"
            >
              <span>Contact</span>
              <carbon:email class="h-4 w-4" />
            </a>

            <a
              class="hover:opacity-75 flex items-center gap-1"
              href="/changelog"
            >
              <span>Changelog</span>
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
          One Tab Group © 2022 <a class="text-neon" href="/">onetab.group</a>.
          All rights reserved.
        </div>
        <div class="divide-x divide-shark-200">
          <a href="/terms-of-services" class="px-2">Terms of Services</a>
          <a href="/privacy-policy" class="px-2">Privacy Policy</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
const emit = defineEmits(['goto-faqs'])

const chromeUrl =
  'https://chrome.google.com/webstore/detail/one-tab-group/lajbajamkpmkmldodfbljkjihppdclbm'
const edgeUrl =
  'https://microsoftedge.microsoft.com/addons/detail/one-tab-group-tabtab-g/njmgdlgmnlinpieohfpmiipenmgilpga'

const twitterUrl = 'https://twitter.com/OneTabGroup'

const githubUrl = 'https://github.com/one-tab-group/'
</script>

<style scoped></style>

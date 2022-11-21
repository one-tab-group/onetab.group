<template>
  <teleport to="body">
    <div
      class="fixed bottom-6 left-0 w-full z-1000"
      v-if="globalStore.showPricingAlert"
    >
      <div
        class="container mx-auto w-2/3 2xl:w-1/2 text-white !bg-gradient-to-br from-shark-700 via-shark-800 to-shark-900 px-4 py-2 rounded-lg"
      >
        <div class="flex justify-between">
          <p>
            🎉 Hey there! One Tab Group is now offering
            <span class="text-neon">50% discount</span> during the Black Friday.
            Use code <span class="text-neon">"msz2mwa"</span> to redeem this
            while checking out 😎
            <a
              href="https://xiaoluoboding.gumroad.com/l/otg/msz2mwa?_gl=1*1vduvtw*_ga*NDgyMjIyNzEuMTY2NzgxNzA5Ng..*_ga_6LJN6D94N6*MTY2ODk4NjQ1Mi45OC4xLjE2Njg5ODY4MTAuMC4wLjA."
              class="ml-8 text-neon"
              target="_blank"
            >
              Getting Started →
            </a>
          </p>
          <button @click="globalStore.showPricingAlert = false">
            <carbon:close />
          </button>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script lang="ts" setup>
import { useGlobalStore } from '@/store/global'

const globalStore = useGlobalStore()
</script>

<template>
    <div class="fixed bottom-8 left-0 w-full" v-if="globalStore.showPricingAlert">
      <div
        class="container mx-auto flex justify-between w-2/3 2xl:w-1/2 text-white !bg-gradient-to-r from-shark-500 via-shark-700 to-shark-500 px-4 py-2 rounded-lg flex-between"
      >
        <main>
          <p>🎉 Hey there! One Tab Group is now offering <span class="text-neon">50% discount</span> during the Black Friday period. Use code <span class="text-neon">"dgh1xvq"</span> to redeem this while checking out 😎</p>
        </main>
        <button
          @click="globalStore.showPricingAlert = false"
        >
          <carbon:close />
        </button>
      </div>
    </div>
</template>

<script lang="ts" setup>
import { useGlobalStore } from '@/store/global'

const globalStore = useGlobalStore()
</script>

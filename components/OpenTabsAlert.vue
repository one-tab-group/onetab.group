<template>
  <teleport to="body">
    <div
      class="fixed top-6 left-0 w-full z-1000"
      v-if="globalStore.showOpenTabsAlert"
    >
      <div
        class="container mx-auto w-2/3 2xl:w-1/2 text-white !bg-gradient-to-br from-shark-700 via-shark-800 to-shark-900 px-4 py-2 rounded-lg"
      >
        <div class="flex justify-between">
          <p>
            🎉 Hey there! Install the
            <span class="text-neon">One Tab Group</span> Chrome Extension to
            open all tabs
            <a
              href="https://chrome.google.com/webstore/detail/one-tab-group-tabtab-grou/lajbajamkpmkmldodfbljkjihppdclbm"
              class="ml-8 text-neon"
              target="_blank"
            >
              Getting Started
            </a>
          </p>
          <button @click="globalStore.showOpenTabsAlert = false">
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

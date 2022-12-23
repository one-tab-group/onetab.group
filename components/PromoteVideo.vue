<template>
  <Teleport to="body">
    <div class="fixed inset-0 z-99 bg-lochmara-800/20 top-0 left-0">
      <div
        class="relative flex h-full w-full flex-col items-center justify-center"
      >
        <div class="absolute top-24 right-8">
          <button
            class="rounded-md p-1 duration-300 hover:scale-105 hover:bg-lochmara-900/10 hover:bg-lochmara-100/10"
            @click="emit('close')"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="none"
              style=""
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="text-white"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <div
          class="relative mx-auto flex w-full max-w-4xl items-center justify-center px-4"
        >
          <div class="relative h-full w-full">
            <div style="display: contents; --aspect-padding: 56.25%">
              <div class="aspect-container">
                <div class="aspect-content bg-black shadow-2xl">
                  <iframe
                    width="896"
                    height="540"
                    src="https://www.youtube.com/embed/vieRK8vWyUQ"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script lang="ts" setup>
const emit = defineEmits(['close'])
</script>

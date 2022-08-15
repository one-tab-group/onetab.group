<template>
  <a
    class="card-blur block p-8 transition shadow-xl rounded-xl z-10"
    bg="white/75 dark:shark-900/75"
    border="~ shark-200 dark:shark-800"
    hover="shadow-lochmara-500/10 border-lochmara-500/10"
    href="javascript:void(0)"
  >
    <slot name="icon" />

    <h3 class="mt-4 text-xl font-bold text-shark-70 dark:text-white">
      {{ title }}
    </h3>

    <p class="mt-1 text-sm text-shark-500 dark:text-shark-300">
      {{ desc }}
    </p>
  </a>
</template>

<script lang="ts" setup>
defineProps({
  title: { type: String, default: '' },
  desc: { type: String, default: '' }
})
</script>

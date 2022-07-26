<template>
  <a
    class="card-blur block p-8 transition shadow-xl rounded-xl z-10"
    bg="white/75 dark:slate-900/75"
    border="~ slate-200 dark:slate-800"
    hover="shadow-sky-500/10 border-sky-500/10"
    href="javascript:void(0)"
  >
    <slot name="icon" />

    <h3 class="mt-4 text-xl font-bold text-slate-70 dark:text-white">
      {{ title }}
    </h3>

    <p class="mt-1 text-sm text-slate-500 dark:text-slate-300">
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

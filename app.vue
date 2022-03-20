<template>
  <div class="relative h-full dark:bg-slate-900">
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
    <ClientOnly>
      <Chatwoot />
    </ClientOnly>
  </div>
</template>

<script lang="ts" setup>
</script>

<style scoped>

</style>
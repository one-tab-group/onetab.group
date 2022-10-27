<template>
  <NuxtLayout>
    <ContentDoc class="h-full w-full" />
  </NuxtLayout>
</template>

<script lang="ts" setup>
const { path } = useRoute()

console.log(path)
</script>

<style scoped></style>

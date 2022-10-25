<template>
  <div>
    <ContentDoc class="h-full w-full" />
  </div>
</template>

<script lang="ts" setup>
const { path } = useRoute()

console.log(path)
</script>

<style scoped></style>

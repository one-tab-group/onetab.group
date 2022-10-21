<template>
  <div>
    <NuxtLink v-if="prev" :to="prev._path">{{ prev.title }}</NuxtLink>
    <NuxtLink v-if="next" :to="next._path">{{ next.title }}</NuxtLink>
  </div>
</template>

<script setup lang="ts">
const { prev, next } = useContent()
</script>

<template>
  <header class="grid grid-cols-1 lg:grid-cols-2 mb-8 gap-16">
    <img class="!m-0" :src="page.head.image" alt="" />
    <div class="header-text">
      <div class="font-semibold mb-4">
        <span>{{ page.category.toUpperCase() }}</span>
      </div>
      <h1 class="!text-3xl !lg:text-5xl">{{ page.navigation.title }}</h1>
      <span>{{ page.description }}</span>
    </div>
  </header>
</template>

<script setup lang="ts">
const { page } = useContent()
</script>

<template>
  <div class="relative">
    <div class="sticky top-12 flex flex-col">
      <label for="toc-list" class="font-semibold">On this page</label>
      <ul v-if="toc && toc.links">
        <li v-for="link in toc.links" :key="link.text">
          <a :href="`#${link.id}`">
            {{ link.text }}
          </a>
          <li v-for="child in link.children" :key="child.text">
            <a :href="`#${child.id}`">
              {{ child.text }}
            </a>
          </li>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const { toc } = useContent()
</script>

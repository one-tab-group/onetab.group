<template>
  <NuxtLayout name="blog">
    <section class="w-full mb-8">
      <BookmarkCard
        :meta="featuredBlog"
        :horizontal="!isSmallScreen"
        size="large"
      />
    </section>
    <section
      class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 gap-y-8"
    >
      <BookmarkCard v-for="item in otherBlog" :meta="item" size="small" />
    </section>
  </NuxtLayout>
</template>

<script setup lang="ts">
import cloneDeep from 'lodash.clonedeep'
import { useMediaQuery } from '@vueuse/core'

const isSmallScreen = useMediaQuery('(max-width: 1024px)')

const { data } = await useAsyncData('blog', () => queryContent('blog').find())

const blogData = cloneDeep(data.value)

const [featuredBlog] = blogData?.splice(8, 1)

const otherBlog = blogData
</script>

<template>
  <div class="tab-meta w-full" target="_blank" @click.stop="() => {}">
    <div flex="~" align="items-center" class="rounded-md">
      <img
        v-if="metaInfo.favIconUrl"
        alt=""
        flex="shrink-0"
        object="cover center"
        m="2 r-4"
        class="w-8 h-8 rounded-full"
        :src="metaInfo.favIconUrl"
      />
      <carbon:earth-americas-filled
        v-else
        m="2 r-4"
        class="text-shark-300 dark:text-shark-500 w-8 h-8"
      />
      <div class="flex-1 truncate gap-1/2 flex flex-col">
        <a
          :href="metaInfo.url"
          class="truncate font-medium text-shark-800 dark:text-shark-100"
          target="_blank"
        >
          {{ metaInfo.title }}
        </a>
        <p text="shark-400 dark:shark-500 mt-1" class="truncate text-sm">
          {{ metaInfo.url }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  metaInfo: {
    type: Object,
    default: () => {}
  }
})
</script>

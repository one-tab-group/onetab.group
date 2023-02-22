<template>
  <figure
    class="web-bookmark-card relative inset-0 overflow-hidden text-left transition-all duration-300 ease-out max-w-screen shadow-lg hover:shadow-2xl"
    :class="[bookmarkClass]"
  >
    <slot />
    <a
      v-if="!isLoading"
      class="h-full flex flex-wrap text-current no-underline hover:no-underline inset-0 card-blur transition-all duration-300 ease-out z-10"
      bg="!opacity-75 white dark:shark-700"
      :class="[cover === 'right' ? 'flex-row-reverse' : 'flex-row']"
      :href="meta.url"
    >
      <div
        class="relative flex order-1 min-w-1/2 w-full flex-grow-[999] basis-[0]"
        :class="[horizontal ? 'p-8' : 'p-4']"
      >
        <div class="w-full flex-1 flex flex-col justify-start font-sans">
          <div
            class="items-center font-semibold line-clamp-2"
            :class="[horizontal ? 'text-3xl' : 'text-xl']"
            text="shark-800 dark:white"
          >
            <span>{{ meta.title }}</span>
          </div>
          <div
            class="items-center mt-3 line-clamp-3 text-secondary"
            :class="[horizontal ? 'text-lg' : 'text-sm']"
          >
            {{ meta.description }}
          </div>
          <!-- <div class="items-center flex truncate mt-3">
            <div class="flex items-center truncate">
              <img
                v-if="meta.logo"
                :src="meta.logo"
                class="inline-block align-text-bottom mr-2 h-4 w-4"
                :class="[horizontal ? 'h-3.5 w-3.5' : 'h-4 w-4']"
              />
              <span
                class="truncate"
                :class="[horizontal ? 'text-xs' : 'text-sm']"
                text="shark-800 dark:shark-400"
              >
                {{ meta.author || meta.publisher || meta.url }}
              </span>
            </div>
          </div> -->
        </div>
      </div>
      <div
        v-if="meta.image"
        class="relative min-w-1/2 max-h-full"
        :class="[horizontal ? 'basis-[13.5rem]' : 'basis-[16rem] flex-grow']"
      >
        <img
          class="relative m-0 w-full h-full align-bottom object-cover"
          :src="meta.base64Image || meta.image"
        />
      </div>
    </a>
    <div
      v-else
      class="text-center p-20 flex flex-col justify-center items-center !bg-opacity-30 backdrop-filter backdrop-blur-lg backdrop-saturate-[180%] filter drop-shadow-xl transition-all duration-300 ease-out z-10"
      bg="!opacity-75 white dark:shark-800"
    >
      <svg
        class="animate-spin box-content text-shark-700 dark:text-shark-200"
        width="32"
        height="32"
        viewBox="0 0 16 16"
        fill="none"
        data-view-component="true"
      >
        <circle
          cx="8"
          cy="8"
          r="7"
          stroke="currentColor"
          stroke-opacity="0.25"
          stroke-width="2"
          vector-effect="non-scaling-stroke"
        ></circle>
        <path
          d="M15 8a7.002 7.002 0 00-7-7"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          vector-effect="non-scaling-stroke"
        ></path>
      </svg>
      <span class="mt-4 text-shark-800 dark:text-shark-200">
        Styling your visual web bookmark...
      </span>
    </div>
  </figure>
</template>

<script lang="ts" setup>
import { ref, reactive, computed, watch } from 'vue'

type MetaData = {
  title: string
  description: string
  url: string
  image: string
  logo: string
  author: string
  publisher: string
  base64Image: string
  base64Logo: string
}

const props = defineProps({
  /**
   * control the bookmark size
   */
  size: { type: String, default: 'medium' },
  /**
   * control the bookmark corner
   */
  corner: { type: String, default: 'xl' },
  /**
   * the image render position of bookmark
   */
  cover: { type: String, default: 'left' },
  /**
   * when to show card shadows
   */
  shadow: { type: String, default: 'always' },
  /**
   * whether bookmark card is horizontal or vertical
   */
  horizontal: { type: Boolean, default: false },
  /**
   * Meta info for the bookmark card
   */
  meta: { type: Object, default: {} }
})

const isLoading = ref(false)

const meta = reactive<MetaData>({
  title: '',
  description: '',
  url: '',
  image: '',
  logo: '',
  author: '',
  publisher: '',
  base64Image: '',
  base64Logo: ''
})

const init = () => {
  isLoading.value = true

  if (props.meta) {
    meta.title = props.meta.navigation.title
    meta.description = props.meta.description
    meta.url = props.meta._path
    meta.image = props.meta.head.image
    // meta.logo = props.meta.logo
    // meta.author = props.meta.author
    // meta.publisher = props.meta.publisher
  }

  isLoading.value = false
}

const bookmarkClass = computed(() => {
  return [
    {
      'web-bookmark-card--large': props.size === 'large',
      'web-bookmark-card--medium': props.size === 'medium',
      'web-bookmark-card--small': props.size === 'small',
      'web-bookmark-card--horizontal': props.horizontal
    },
    `rounded-${props.corner}`
  ]
})

watch(
  () => props.meta,
  (newVal) => {
    if (newVal) {
      init()
    }
  },
  { deep: true, immediate: true }
)
</script>

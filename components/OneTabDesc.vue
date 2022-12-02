<template>
  <section class="otg-desc">
    <div class="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 lg:px-8">
      <div
        class="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-2 text-center sm:text-left"
      >
        <div
          class="relative overflow-hidden rounded-lg lg:h-full"
          :class="{ 'lg:order-last': leftDesc }"
        >
          <slot name="media"></slot>
        </div>

        <div class="">
          <h2 class="text-3xl sm:text-4xl font-semibold text-primary">
            <slot name="title"></slot>
          </h2>
          <div class="text-secondary text-lg font-semibold mt-8">
            <slot name="description"></slot>
          </div>

          <a
            class="btn btn-secondary btn-blur"
            href="https://chrome.google.com/webstore/detail/one-tab-group/lajbajamkpmkmldodfbljkjihppdclbm"
            target="_blank"
          >
            <carbon:download class="h-5 w-5 mr-2" />
            <span>Get extension</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
defineProps({
  leftDesc: {
    type: Boolean,
    default: false
  }
})
</script>

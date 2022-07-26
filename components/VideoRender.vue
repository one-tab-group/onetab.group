<template>
  <video ref="videoPlayer" class="video-js"></video>
</template>

<script setup>
import { onMounted, onBeforeMount } from 'vue'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'

const props = defineProps({
  src: {
    type: String,
    default: ''
  }
})

const player = ref()
const videoPlayer = ref()

const defaultOptions = computed(() => {
  return {
    autoplay: true,
    controls: false,
    preload: 'auto',
    loop: true,
    sources: [
      {
        src: props.src,
        type: 'video/mp4'
      }
    ]
  }
})

onMounted(() => {
  player.value = videojs(videoPlayer.value, defaultOptions.value, () => {
    // player.value.log('onPlayerReady', player.value)
  })
})

onBeforeMount(() => {
  if (player.value) {
    player.value.dispose()
  }
})
</script>

<style>
.video-js {
  background-color: transparent;
}
</style>

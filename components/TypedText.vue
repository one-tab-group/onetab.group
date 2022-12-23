<template>
  <span class="text-neon" ref="typedElement"></span>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import Typed from 'typed.js'

const props = defineProps({
  strings: {
    type: Array,
    required: true
  }
})

const typeSpeed = 150
const typed = ref(null)
const typedElement = ref(null)

onMounted(() => {
  typed.value = new Typed(typedElement.value, {
    strings: props.strings,
    typeSpeed,
    loop: true,
    showCursor: false,
    startDelay: 700
  })
})
</script>

<style></style>

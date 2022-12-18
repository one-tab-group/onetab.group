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

const typeSpeed = 120
const typed = ref(null)
const typedElement = ref(null)

onMounted(() => {
  typed.value = new Typed(typedElement.value, {
    strings: props.strings,
    typeSpeed,
    loop: true
  })
})
</script>

<style></style>

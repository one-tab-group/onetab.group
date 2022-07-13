<template>
  <div
    class="feature-divider"
    :class="{
      'feature-divider--left': left,
      'feature-divider--right': right,
      'feature-divider--between': between
    }"
  />
</template>

<script lang="ts" setup>
const props = defineProps({
  left: { type: Boolean, default: false },
  right: { type: Boolean, default: false },
  between: { type: Boolean, default: false }
})
</script>

<style scoped>
.feature-divider {
  @apply h-[2px] max-w-screen-xl mx-auto my-16;
}

.feature-divider--left {
  background: linear-gradient(
    90deg,
    rgba(14, 165, 233, 0.66),
    rgba(179, 132, 201, 0)
  );
}
.feature-divider--right {
  background: linear-gradient(
    90deg,
    rgba(179, 132, 201, 0),
    rgba(14, 165, 233, 0.66)
  );
}
.feature-divider--between {
  background: linear-gradient(
    90deg,
    rgba(179, 132, 201, 0),
    rgba(14, 165, 233, 0.66),
    rgba(179, 132, 201, 0)
  );
}
</style>

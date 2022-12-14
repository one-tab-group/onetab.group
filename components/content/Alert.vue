<template>
  <div class="alert info">
    <div class="alert-content">
      <slot />
    </div>
  </div>
</template>

<style>
.alert {
  @apply border border-lochmara-500/50;
  @apply my-8 py-3 px-5 rounded-lg;
}

.info {
  @apply bg-lochmara-200 dark:bg-lochmara-700/50;
}

.info p {
  @apply text-lochmara-800 dark:text-lochmara-300;
}

.alert-content p {
  @apply m-0;
}
</style>
